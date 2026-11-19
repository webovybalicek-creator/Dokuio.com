<?php
// Anonymní zpětná vazba z okna „Líbí se vám Dokuio?“. Ukládá se mimo webovou složku (nesmaže ji deploy).
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo '{"ok":false}'; exit; }
$text = trim((string)($_POST['text'] ?? ''));
$stranka = substr(preg_replace('~[^a-z0-9/_-]~i', '', (string)($_POST['stranka'] ?? '')), 0, 120);
if ($text === '' || mb_strlen($text) > 1000) { http_response_code(400); echo '{"ok":false}'; exit; }
$soubor = dirname(__DIR__) . '/dokuio-zpetna-vazba.csv';
if (is_file($soubor) && filesize($soubor) > 5 * 1024 * 1024) { echo '{"ok":true}'; exit; } // pojistka proti zahlcení
$radek = [gmdate('c'), $stranka, str_replace(["\r", "\n"], ' ', $text)];
$f = fopen($soubor, 'a');
if ($f) { flock($f, LOCK_EX); fputcsv($f, $radek); flock($f, LOCK_UN); fclose($f); }
echo '{"ok":true}';
