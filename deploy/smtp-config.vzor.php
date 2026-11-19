<?php
// Vzor nastavení SMTP pro odeslat-email.php. Zkopírujte jako dokuio-smtp.php o složku VÝŠ než web
// (vedle souboru dokuio-zpetna-vazba.csv), případně jako smtp-config.php přímo do webu vedle odeslat-email.php.
// Heslo sem doplňte ručně na serveru – nikdy ho necommitujte do repozitáře.
return [
    'host' => 'mail.next01.exon.io',
    'port' => 465,            // 465 = SSL, 587 = STARTTLS
    'sifrovani' => 'ssl',     // 'ssl' nebo 'tls'
    'uzivatel' => 'noreply@dokuio.com',
    'heslo' => '',            // ← doplnit na serveru
    'od' => 'noreply@dokuio.com',
    'denni_limit' => 300,     // max. e-mailů za 24 h celkem
    'sul' => '',              // libovolný náhodný řetězec (anonymizace IP v limitech)
    // 'povolene_puvody' => ['https://dokuio.com', 'https://www.dokuio.com'],
    // 'podpora_url' => 'https://buy.stripe.com/…',
];
