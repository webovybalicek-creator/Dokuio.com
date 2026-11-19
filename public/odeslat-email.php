<?php
/**
 * Odeslání vytvořeného PDF na e-mail uživatele (jednorázově, nic se neukládá).
 * Přihlašovací údaje SMTP NEJSOU v repozitáři: soubor dokuio-smtp.php nahrajte ručně přes FTP
 * o složku výš než web (doporučeno), nebo vedle tohoto skriptu jako smtp-config.php. Vzor: deploy/smtp-config.vzor.php
 * Ochrana proti zneužití: jen POST z našeho webu, jen PDF do 5 MB, limity na IP, příjemce i celý den.
 */
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function odpoved(int $kod, string $stav): void
{
    http_response_code($kod);
    echo json_encode(['ok' => $kod === 200, 'stav' => $stav]);
    exit;
}

/* ---------- konfigurace */
$cfgSoubor = null;
foreach ([dirname(__DIR__) . '/dokuio-smtp.php', __DIR__ . '/smtp-config.php'] as $c) {
    if (is_file($c)) { $cfgSoubor = $c; break; }
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET' && isset($_GET['stav'])) {
    echo json_encode(['aktivni' => $cfgSoubor !== null]);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') odpoved(405, 'metoda');
if (!$cfgSoubor) odpoved(503, 'nenastaveno');
$cfg = require $cfgSoubor;
if (!is_array($cfg) || empty($cfg['host']) || empty($cfg['uzivatel']) || (empty($cfg['heslo']) && ($cfg['sifrovani'] ?? '') !== 'test')) odpoved(503, 'nenastaveno');

/* ---------- původ požadavku (jen z našeho webu) */
$povolene = $cfg['povolene_puvody'] ?? ['https://dokuio.com', 'https://www.dokuio.com'];
$puvod = (string)($_SERVER['HTTP_ORIGIN'] ?? '');
if ($puvod === '') {
    $ref = (string)($_SERVER['HTTP_REFERER'] ?? '');
    $puvod = $ref !== '' ? (parse_url($ref, PHP_URL_SCHEME) . '://' . parse_url($ref, PHP_URL_HOST) . (parse_url($ref, PHP_URL_PORT) ? ':' . parse_url($ref, PHP_URL_PORT) : '')) : '';
}
if (!in_array($puvod, $povolene, true)) odpoved(403, 'puvod');

/* ---------- vstupy */
if (trim((string)($_POST['web'] ?? '')) !== '') odpoved(200, 'odeslano'); // past na roboty: tvářit se, že OK
$email = trim((string)($_POST['email'] ?? ''));
if ($email === '' || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) odpoved(400, 'email');
$jazyk = in_array($_POST['jazyk'] ?? '', ['cs', 'sk', 'pl', 'de', 'hu'], true) ? (string)$_POST['jazyk'] : 'cs';
$nazev = mb_substr(trim(strip_tags((string)($_POST['nazev'] ?? ''))), 0, 120) ?: 'Dokument';
$soubor = substr(preg_replace('~[^a-z0-9-]~', '', strtolower((string)($_POST['soubor'] ?? ''))) ?: 'dokument', 0, 80);
$zeme = preg_replace('~[^a-z]~', '', (string)($_POST['zeme'] ?? '')) ?: 'cz';

$f = $_FILES['pdf'] ?? null;
if (!$f || ($f['error'] ?? 1) !== UPLOAD_ERR_OK || !is_uploaded_file($f['tmp_name'])) odpoved(400, 'soubor');
if ($f['size'] < 500 || $f['size'] > 5 * 1024 * 1024) odpoved(400, 'soubor');
$h = fopen($f['tmp_name'], 'rb');
$hlavicka = $h ? fread($h, 5) : '';
if ($h) fclose($h);
if ($hlavicka !== '%PDF-') odpoved(400, 'soubor');

/* ---------- limity (soubor mimo web, nesmaže ho deploy) */
$ip = (string)($_SERVER['REMOTE_ADDR'] ?? '');
$ted = time();
$limSoubor = is_writable(dirname(__DIR__)) ? dirname(__DIR__) . '/dokuio-email-limity.json' : sys_get_temp_dir() . '/dokuio-email-limity.json';
$lf = fopen($limSoubor, 'c+');
if (!$lf) odpoved(503, 'limit');
flock($lf, LOCK_EX);
$lim = json_decode((string)stream_get_contents($lf), true) ?: [];
$lim = array_map(fn($a) => array_values(array_filter((array)$a, fn($t) => $t > $ted - 86400)), $lim);
$lim = array_filter($lim);
$kIp = 'ip:' . hash('sha256', $ip . ($cfg['sul'] ?? 'dokuio'));
$kEm = 'em:' . hash('sha256', strtolower($email) . ($cfg['sul'] ?? 'dokuio'));
$hodina = fn(array $a) => count(array_filter($a, fn($t) => $t > $ted - 3600));
$ipZaz = $lim[$kIp] ?? [];
$emZaz = $lim[$kEm] ?? [];
$vse = $lim['vse'] ?? [];
if ($hodina($ipZaz) >= 5 || count($ipZaz) >= 20 || count($emZaz) >= 10 || count($vse) >= (int)($cfg['denni_limit'] ?? 300)) {
    flock($lf, LOCK_UN);
    fclose($lf);
    odpoved(429, 'limit');
}

/* ---------- texty e-mailu */
$T = [
    'cs' => [
        'predmet' => 'Váš dokument v PDF: %s (Dokuio)',
        'nadpis' => 'Váš dokument je v příloze',
        'text' => 'Posíláme vám dokument <strong>%s</strong> ve formátu PDF. Před podpisem si ho pečlivě přečtěte a zkontrolujte všechny údaje.',
        'pravni' => 'Vzor poskytujeme zdarma a v dobré víře, nejde o právní poradenství. Za obsah a použití dokumentu odpovídáte vy; u složitějších situací doporučujeme kontrolu advokátem.',
        'soukromi' => 'Dokument jsme odeslali jen na vaši žádost a nikde ho neukládáme.',
        'podporaNadpis' => 'Ušetřili jsme vám čas?',
        'podporaText' => 'Dokuio je zdarma, bez reklam a bez registrace. Servery, kontrolu vzorů podle zákonů a nové dokumenty platíme z drobných příspěvků lidí, kterým jsme pomohli.',
        'podporaTl' => 'Přispět na kafe (od 30 Kč)',
        'pata' => 'Tento e-mail jste si nechali poslat z webu dokuio.com. Neodpovídejte na něj.',
    ],
    'sk' => [
        'predmet' => 'Váš dokument v PDF: %s (Dokuio)',
        'nadpis' => 'Váš dokument je v prílohe',
        'text' => 'Posielame vám dokument <strong>%s</strong> vo formáte PDF. Pred podpisom si ho pozorne prečítajte a skontrolujte všetky údaje.',
        'pravni' => 'Vzor poskytujeme zadarmo a v dobrej viere, nejde o právne poradenstvo. Za obsah a použitie dokumentu zodpovedáte vy; pri zložitejších situáciách odporúčame kontrolu advokátom.',
        'soukromi' => 'Dokument sme odoslali len na vašu žiadosť a nikde ho neukladáme.',
        'podporaNadpis' => 'Ušetrili sme vám čas?',
        'podporaText' => 'Dokuio je zadarmo, bez reklám a bez registrácie. Servery, kontrolu vzorov podľa zákonov a nové dokumenty platíme z drobných príspevkov ľudí, ktorým sme pomohli.',
        'podporaTl' => 'Prispieť na kávu (od cca 1,25 €)',
        'pata' => 'Tento e-mail ste si nechali poslať z webu dokuio.com. Neodpovedajte naň.',
    ],
    'pl' => [
        'predmet' => 'Twój dokument PDF: %s (Dokuio)',
        'nadpis' => 'Twój dokument jest w załączniku',
        'text' => 'Przesyłamy dokument <strong>%s</strong> w formacie PDF. Przed podpisaniem przeczytaj go uważnie i sprawdź wszystkie dane.',
        'pravni' => 'Wzór udostępniamy za darmo i w dobrej wierze, to nie jest porada prawna. Za treść i wykorzystanie dokumentu odpowiadasz Ty; w złożonych sprawach skonsultuj się z prawnikiem.',
        'soukromi' => 'Dokument wysłaliśmy wyłącznie na Twoją prośbę i nigdzie go nie przechowujemy.',
        'podporaNadpis' => 'Zaoszczędziliśmy Ci czas?',
        'podporaText' => 'Dokuio jest darmowe, bez reklam i bez rejestracji. Serwery, sprawdzanie wzorów i nowe dokumenty finansujemy z drobnych wpłat osób, którym pomogliśmy.',
        'podporaTl' => 'Postaw nam kawę (ok. 6 zł)',
        'pata' => 'Ten e-mail został wysłany na Twoją prośbę ze strony dokuio.com. Nie odpowiadaj na niego.',
    ],
    'de' => [
        'predmet' => 'Ihr Dokument als PDF: %s (Dokuio)',
        'nadpis' => 'Ihr Dokument im Anhang',
        'text' => 'Anbei erhalten Sie das Dokument <strong>%s</strong> als PDF. Bitte lesen Sie es vor der Unterschrift sorgfältig und prüfen Sie alle Angaben.',
        'pravni' => 'Wir stellen die Vorlage kostenlos und nach bestem Wissen bereit, sie ist keine Rechtsberatung. Für Inhalt und Verwendung sind Sie verantwortlich; in komplexen Fällen empfehlen wir eine anwaltliche Prüfung.',
        'soukromi' => 'Wir haben das Dokument nur auf Ihren Wunsch gesendet und speichern es nicht.',
        'podporaNadpis' => 'Haben wir Ihnen Zeit gespart?',
        'podporaText' => 'Dokuio ist kostenlos, ohne Werbung und ohne Anmeldung. Server, die Prüfung der Vorlagen und neue Dokumente finanzieren wir mit kleinen Beiträgen von Menschen, denen wir geholfen haben.',
        'podporaTl' => 'Einen Kaffee spendieren (ca. 1,25 €)',
        'pata' => 'Diese E-Mail haben Sie über dokuio.com angefordert. Bitte nicht antworten.',
    ],
    'hu' => [
        'predmet' => 'Az Ön dokumentuma PDF-ben: %s (Dokuio)',
        'nadpis' => 'Dokumentumát csatolva küldjük',
        'text' => 'Csatolva küldjük a(z) <strong>%s</strong> dokumentumot PDF formátumban. Aláírás előtt figyelmesen olvassa el, és ellenőrizze az összes adatot.',
        'pravni' => 'A mintát ingyenesen és jóhiszeműen biztosítjuk, nem minősül jogi tanácsadásnak. A dokumentum tartalmáért és felhasználásáért Ön felel; bonyolultabb ügyben javasoljuk ügyvéd bevonását.',
        'soukromi' => 'A dokumentumot csak az Ön kérésére küldtük el, és sehol nem tároljuk.',
        'podporaNadpis' => 'Időt spóroltunk Önnek?',
        'podporaText' => 'A Dokuio ingyenes, reklámok és regisztráció nélkül. A szervereket, a minták jogi ellenőrzését és az új dokumentumokat azok kis támogatásaiból fizetjük, akiknek segítettünk.',
        'podporaTl' => 'Meghívjon minket egy kávéra (kb. 500 Ft)',
        'pata' => 'Ezt az e-mailt a dokuio.com oldalon kérte. Kérjük, ne válaszoljon rá.',
    ],
][$jazyk];

$e = fn(string $s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$podporaUrl = (string)($cfg['podpora_url'] ?? 'https://buy.stripe.com/7sY9AM2Ux08f1Mn4Lr48000');
$webUrl = 'https://dokuio.com/' . $zeme . '/';
$html = '<!DOCTYPE html><html lang="' . $jazyk . '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' . $e($nazev) . '</title></head>'
    . '<body style="margin:0;padding:0;background:#f8fafd;font-family:\'Inter Tight\',-apple-system,\'Segoe UI\',Arial,sans-serif;color:#061b31;">'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafd;"><tr><td align="center" style="padding:32px 16px;">'
    . '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">'
    . '<tr><td style="padding:0 4px 20px;"><a href="' . $webUrl . '" style="text-decoration:none;color:#061b31;font-size:24px;font-weight:600;letter-spacing:-1px;">'
    . '<span style="display:inline-block;width:18px;height:22px;margin-right:8px;vertical-align:-3px;border-radius:2px;background:#533afd;background-image:linear-gradient(100deg,#533afd 0%,#8f6bff 55%,#ff6fb5 100%);transform:skewX(-12deg);"></span>dokuio</a></td></tr>'
    . '<tr><td style="background:#ffffff;border:1px solid #e5edf5;border-radius:12px;padding:32px 28px;">'
    . '<h1 style="margin:0 0 12px;font-size:24px;line-height:1.25;font-weight:600;letter-spacing:-0.5px;color:#061b31;">' . $e($T['nadpis']) . '</h1>'
    . '<p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#425466;">' . sprintf($T['text'], $e($nazev)) . '</p>'
    . '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;"><tr><td style="background:#f4f3ff;border-radius:8px;padding:10px 14px;font-size:14px;color:#061b31;">📎&nbsp; ' . $e($soubor) . '.pdf</td></tr></table>'
    . '<p style="margin:0 0 8px;font-size:13px;line-height:1.55;color:#64748d;">' . $e($T['pravni']) . '</p>'
    . '<p style="margin:0;font-size:13px;line-height:1.55;color:#64748d;">' . $e($T['soukromi']) . '</p>'
    . '</td></tr>'
    . '<tr><td style="height:16px;"></td></tr>'
    . '<tr><td style="background:#e8e9ff;border-radius:12px;padding:28px;">'
    . '<p style="margin:0 0 8px;font-size:18px;line-height:1.3;font-weight:600;color:#061b31;">☕ ' . $e($T['podporaNadpis']) . '</p>'
    . '<p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#425466;">' . $e($T['podporaText']) . '</p>'
    . '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#533afd;border-radius:4px;">'
    . '<a href="' . $e($podporaUrl) . '" style="display:inline-block;padding:13px 22px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">' . $e($T['podporaTl']) . ' ›</a>'
    . '</td></tr></table></td></tr>'
    . '<tr><td style="padding:20px 4px 0;font-size:12px;line-height:1.5;color:#64748d;">' . $e($T['pata']) . ' · <a href="' . $webUrl . '" style="color:#533afd;">dokuio.com</a></td></tr>'
    . '</table></td></tr></table></body></html>';
$text = strip_tags(str_replace(['</p>', '</h1>'], "\n\n", sprintf($T['text'], $nazev))) . "\n\n" . $T['pravni'] . "\n" . $T['soukromi']
    . "\n\n" . $T['podporaNadpis'] . "\n" . $T['podporaText'] . "\n" . $podporaUrl . "\n\n" . $T['pata'];

/* ---------- odeslání */
require __DIR__ . '/lib/phpmailer/Exception.php';
require __DIR__ . '/lib/phpmailer/PHPMailer.php';
require __DIR__ . '/lib/phpmailer/SMTP.php';

$m = new PHPMailer(true);
try {
    $m->isSMTP();
    $m->Host = (string)$cfg['host'];
    $m->Port = (int)($cfg['port'] ?? 465);
    if (($cfg['sifrovani'] ?? '') === 'test') { // jen místní test bez šifrování a přihlášení
        $m->SMTPAuth = false;
        $m->SMTPAutoTLS = false;
        $m->SMTPSecure = '';
    } else {
        $m->SMTPAuth = true;
        $m->Username = (string)$cfg['uzivatel'];
        $m->Password = (string)$cfg['heslo'];
        $m->SMTPSecure = ($cfg['sifrovani'] ?? 'ssl') === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : PHPMailer::ENCRYPTION_SMTPS;
    }
    $m->Timeout = 20;
    $m->CharSet = PHPMailer::CHARSET_UTF8;
    $m->setFrom((string)($cfg['od'] ?? $cfg['uzivatel']), 'Dokuio');
    $m->addAddress($email);
    $m->Subject = sprintf($T['predmet'], $nazev);
    $m->isHTML(true);
    $m->Body = $html;
    $m->AltBody = $text;
    $m->addAttachment($f['tmp_name'], $soubor . '.pdf', PHPMailer::ENCODING_BASE64, 'application/pdf');
    $m->send();
} catch (MailException $ex) {
    flock($lf, LOCK_UN);
    fclose($lf);
    error_log('dokuio e-mail: ' . $m->ErrorInfo);
    odpoved(502, 'smtp');
}

$lim[$kIp] = [...$ipZaz, $ted];
$lim[$kEm] = [...$emZaz, $ted];
$lim['vse'] = [...$vse, $ted];
ftruncate($lf, 0);
rewind($lf);
fwrite($lf, json_encode($lim));
flock($lf, LOCK_UN);
fclose($lf);
odpoved(200, 'odeslano');
