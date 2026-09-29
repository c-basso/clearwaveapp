// Anleitungen 11–14.
module.exports = [
{
    id: 'iphone-dropped-in-water',
    slug: 'iphone-ins-wasser-gefallen',
    navLabel: 'iPhone ins Wasser gefallen',
    keyword: 'iPhone ins Wasser gefallen was tun',
    title: 'iPhone ins Wasser gefallen: Das tust du in 30 Minuten',
    description: 'iPhone ins Wasser, in den Pool oder ins Klo gefallen? Sofortmaßnahmen: Trocknen nach Apple-Empfehlung, Flüssigkeitswarnung, Wasser aus dem Lautsprecher, Laden.',
    h1: 'iPhone ins Wasser gefallen? Das tust du in den ersten 30 Minuten',
    shot: 'clear',
    quick: 'Rausholen, abtrocknen und <strong>nicht laden</strong>. Klopf es sanft mit dem Anschluss nach unten gegen die Handfläche, leg es an einen trockenen, luftigen Ort und warte mindestens 30 Minuten mit dem Laden (bis zu 24 Stunden bei Flüssigkeitswarnung). Gegen dumpfen Klang spielst du einen Wasser-Auswurf-Ton mit dem Lautsprecher nach unten ab. <strong>Kein Reis, kein Föhn.</strong>',
    intro: '<p>Aktuelle iPhones sind wassergeschützt (IP67 oder IP68, je nach Modell), ein kurzes Bad übersteht man also meist. Aber wassergeschützt heißt nicht wasserdicht, der Schutz lässt mit der Zeit nach, und Flüssigkeitsschäden sind nicht durch Apples Standardgarantie abgedeckt. Was du in der nächsten halben Stunde tust, zählt.</p>',
    manual: {
        heading: 'Was du jetzt sofort tust',
        steps: [
            { name: 'Rausholen, bei Auffälligkeiten ausschalten', text: 'Flackert der Bildschirm oder verhält sich das iPhone seltsam, schalte es aus.' },
            { name: 'Hülle abnehmen', text: 'Alles mit einem weichen, fusselfreien Tuch abtrocknen.' },
            { name: 'Abspülen, wenn es kein Süßwasser war', text: 'Apples Hinweis für spritzwassergeschützte iPhones: Kam etwas anderes als Wasser dran (Salzwasser, Limo, gechlortes Poolwasser), die Stelle mit Leitungswasser abspülen, dann abwischen und trocknen.' },
            { name: 'Wasser aus dem Anschluss klopfen', text: 'Klopf das iPhone sanft gegen die Hand, Ladeanschluss nach unten.' },
            { name: 'Lautsprecher per Ton freimachen', text: 'Lautsprecher nach unten, Lautstärke 70–80 %, Wasser-Auswurf-Ton 30–60 Sekunden, 2–3-mal.' },
            { name: 'Vor dem Laden trocknen', text: 'An einen trockenen Ort mit etwas Luftzug legen. Mindestens 30 Minuten warten; bei Flüssigkeitswarnung, bis sie verschwindet (bis zu 24 Stunden).' }
        ]
    },
    app: {
        heading: 'Mit Clear Wave den Klang zurückholen',
        steps: [
            { name: 'Wasser-Auswerfen starten', text: 'Zuerst mit dem unteren Lautsprecher nach unten.' },
            { name: 'Für die Hörmuschel umdrehen', text: 'Zweiter Durchgang mit der Oberkante nach unten.' },
            { name: 'Beide Kanäle prüfen', text: 'Der Stereotest zeigt, ob links und rechts gleich klar klingen.' },
            { name: 'Nach dem Trocknen wiederholen', text: 'Nach einer Stunde noch einen Durchgang – Wasser kann wieder zum Gitter wandern.' }
        ]
    },
    sections: [
        { h2: '„Flüssigkeit im Lightning- / USB-C-Anschluss erkannt“', html: '<p>iPhone XS, iPhone XR und neuer warnen dich, wenn sich Flüssigkeit im Ladeanschluss befindet. Siehst du die Meldung, zieh das Kabel ab, klopf das Wasser heraus und lass das iPhone trocknen. Nutze die Notfall-Überbrückung zum Laden nur im echten Notfall. Laut Apple kannst du weiterhin ein kabelloses Ladegerät verwenden, während der Anschluss trocknet.</p>' },
        { h2: 'Was du nicht tun solltest', html: '<ul class="check-list check-list--no"><li><strong>Reis</strong> – Apple rät ab: Reisstaub und -körner können ins iPhone gelangen.</li><li><strong>Föhn, Backofen, Heizung</strong> – Hitze schadet Akku und Dichtungen.</li><li><strong>Wattestäbchen oder Papier im Anschluss</strong>.</li><li><strong>Laden, solange es nass ist</strong>.</li></ul>' }
    ],
    faqs: [
        { q: 'Wie lange warten, bis ich ein nasses iPhone laden darf?', a: 'Apple empfiehlt mindestens 30 Minuten und bis zu 24 Stunden, wenn die Flüssigkeitswarnung weiter erscheint.' },
        { q: 'Ist mein iPhone wasserdicht?', a: 'Kein iPhone ist wasserdicht. Ab dem iPhone 7 sind sie wassergeschützt (IP67 oder IP68). Der Schutz lässt mit Zeit und Abnutzung nach.' },
        { q: 'Mein iPhone ist ins Klo gefallen – was tun?', a: 'Rausholen, außen kurz mit sauberem Leitungswasser abspülen, abtrocknen, ein paar Durchgänge Wasser-Auswerfen für den Lautsprecher und vor dem Laden trocknen lassen.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    id: 'left-right-speaker-test',
    slug: 'lautsprecher-test-links-rechts',
    navLabel: 'Lautsprecher-Test links/rechts',
    keyword: 'Lautsprecher Test links rechts',
    title: 'Lautsprecher-Test links rechts: iPhone und Kopfhörer',
    description: 'Lautsprecher-Test links/rechts für iPhone, AirPods oder Kopfhörer in Sekunden. Finde den leisen, dumpfen oder stummen Kanal – und was du tun kannst.',
    h1: 'Lautsprecher-Test links/rechts: beide Kanäle in Sekunden prüfen',
    shot: 'test',
    quick: 'Ein Links-rechts-Test (Stereotest) spielt Ton <strong>auf jeweils einem Kanal</strong> ab, damit du hörst, ob ein Lautsprecher leise, dumpf oder stumm ist. Beim iPhone sind Hörmuschel und unterer Lautsprecher die beiden Kanäle. Klingt eine Seite nach Nässe schlechter, starte für diesen Lautsprecher das Wasser-Auswerfen und teste erneut.',
    intro: '<p>Spielen beide Lautsprecher gleichzeitig, fällt ein Problem auf einer Seite leicht nicht auf. Getrennte Kanäle machen es offensichtlich – und zeigen genau, welchen Lautsprecher du reinigen, trocknen oder reparieren musst. Das funktioniert auch mit Kopfhörern, AirPods und Bluetooth-Lautsprechern.</p>',
    manual: {
        heading: 'So machst du den Lautsprecher-Test links/rechts',
        steps: [
            { name: 'Mono-Audio ausschalten', text: 'Einstellungen → Bedienungshilfen → Audio &amp; Visuelles → „Mono-Audio“ muss aus sein, sonst spielen beide Kanäle dasselbe.' },
            { name: 'Balance prüfen', text: 'Im selben Menü sollte der Balance-Regler mittig zwischen L und R stehen.' },
            { name: 'Nur den linken Kanal abspielen', text: 'Welcher Lautsprecher spielt, und klingt er sauber?' },
            { name: 'Nur den rechten Kanal abspielen', text: 'Lautstärke und Klarheit mit links vergleichen.' },
            { name: 'Die schwächere Seite beheben', text: 'Dumpf = Wasser oder Staub (reinigen). Stumm oder Knistern = möglicher Defekt.' }
        ]
    },
    app: {
        heading: 'Stereotest in Clear Wave',
        steps: [
            { name: 'Stereotest öffnen', text: 'Du siehst je einen Regler für den linken und rechten Kanal.' },
            { name: 'Links auf On tippen', text: 'Der Ton sollte nur von einer Seite kommen.' },
            { name: 'Rechts auf On tippen', text: 'Mit links vergleichen.' },
            { name: 'Die schwache Seite reinigen', text: 'Wasser-Auswerfen mit diesem Lautsprecher nach unten starten und erneut testen.' }
        ]
    },
    sections: [
        { h2: 'Welcher iPhone-Lautsprecher ist links, welcher rechts?', html: '<p>Im Hochformat verteilt iOS das Stereosignal auf den <strong>unteren Lautsprecher</strong> und die <strong>Hörmuschel</strong>. Drehst du ins Querformat, tauscht iOS die Kanäle, damit links und rechts zu deiner Haltung passen. Teste in der Ausrichtung, in der du normalerweise Videos schaust.</p>' },
        { h2: 'AirPods und Kopfhörer testen', html: '<p>Kopfhörer verbinden und denselben Test machen. Ist ein AirPod leiser, reinige sein Gitter vorsichtig mit einer weichen, trockenen Bürste und prüf die Balance in den Bedienungshilfen. Feuchtigkeit in versiegelten Kopfhörern braucht Zeit zum Trocknen – siehe <a href="/de/faq/wasser-aus-airpods/">Funktioniert Wasser-Auswerfen bei AirPods?</a></p>' }
    ],
    faqs: [
        { q: 'Warum spielt mein iPhone nur aus einem Lautsprecher?', a: 'Prüf, ob Mono-Audio aus und die Balance mittig ist. Dann einen Stereotest machen; ist eine Seite dumpf, steckt dort vielleicht Wasser oder Staub.' },
        { q: 'Kann ich den linken und rechten AirPod testen?', a: 'Ja. Verbinden und Stereotest starten – jeder Ohrhörer sollte nur seinen Kanal spielen.' },
        { q: 'Warum ist die Hörmuschel leiser als der untere Lautsprecher?', a: 'Sie ist kleiner und für Anrufe abgestimmt, also bauartbedingt etwas leiser. Ein großer Unterschied oder dumpfer Klang deutet auf Flusen oder Wasser im Gitter hin.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    id: 'decibel-meter-app-iphone',
    slug: 'dezibel-messen-iphone',
    navLabel: 'Dezibel messen mit dem iPhone',
    keyword: 'Dezibel messen iPhone',
    title: 'Dezibel messen mit dem iPhone: Lautstärke in dB',
    description: 'Mach dein iPhone zum Schallpegelmesser: Lärm in dB messen, Lautstärke des Lautsprechers prüfen, sichere Pegel kennen. Dezibelmesser in Clear Wave.',
    h1: 'Dezibel messen mit dem iPhone: Lärm und Lautsprecher-Lautstärke',
    shot: 'meter',
    quick: 'Eine Dezibelmesser-App (Schallpegelmesser) nutzt das iPhone-Mikrofon, um die Lautstärke eines Geräuschs zu schätzen. Damit vergleichst du den Lautsprecher vor und nach der Reinigung, prüfst den Lärm im Raum oder bleibst unter ~85 dB, ab denen lange Belastung dem Gehör schadet. Handy-Messungen sind Näherungswerte – ideal zum Vergleichen, nicht für geeichte Messungen.',
    intro: '<p>Ein Dezibelmesser macht aus „irgendwie leiser“ eine Zahl. Das hilft nach einer Reinigung von Wasser oder Staub, wenn du belegen willst, dass der Lautsprecher wieder normal ist – und bei Alltagsfragen wie „Wie laut ist diese Bar?“ oder „Ist das Tablet meines Kindes zu laut?“.</p>',
    manual: {
        heading: 'Lautsprecher-Lautstärke mit einem Dezibelmesser messen',
        steps: [
            { name: 'Referenzton wählen', text: 'Immer derselbe Song oder Testton bei gleicher Lautstärke.' },
            { name: 'Abstand festlegen', text: 'Ein zweites Gerät mit dem Messer im gleichen Abstand (z. B. 30 cm) zum Lautsprecher halten oder den Raum mit dem iPhone selbst messen.' },
            { name: 'In Ruhe messen', text: 'Hintergrundgeräusche verfälschen das Ergebnis.' },
            { name: 'Durchschnitt notieren', text: '10–15 Sekunden beobachten und den typischen Wert notieren.' },
            { name: 'Vorher/nachher vergleichen', text: 'Nach der Reinigung mit denselben Einstellungen erneut messen.' }
        ]
    },
    app: {
        heading: 'Der Dezibelmesser in Clear Wave',
        steps: [
            { name: 'DB Meter öffnen', text: 'Mikrofonzugriff erlauben, wenn gefragt – der Messer braucht ihn zum Zuhören.' },
            { name: 'Messung starten', text: 'Die Anzeige zeigt den aktuellen Pegel in dB mit einer Beschriftung wie „Normales Gespräch“.' },
            { name: 'Messung beenden', text: 'Auf Stop Monitoring tippen. Die Messwerte werden auf dem Gerät verarbeitet.' }
        ]
    },
    sections: [
        { h2: 'Typische Schallpegel', html: '<div class="table-wrap"><table><thead><tr><th>Geräusch</th><th>Ca. Pegel</th></tr></thead><tbody><tr><td>Ruhiger Raum, Flüstern</td><td>30 dB</td></tr><tr><td>Normales Gespräch</td><td>50–60 dB</td></tr><tr><td>Belebte Straße, Staubsauger</td><td>70–80 dB</td></tr><tr><td>Risikoschwelle fürs Gehör bei langer Belastung (8 h)</td><td>85 dB</td></tr><tr><td>Konzert, Club</td><td>100–110 dB</td></tr></tbody></table></div><p>Jede +10 dB wirkt etwa doppelt so laut.</p>' },
        { h2: 'Wie genau misst ein iPhone Dezibel?', html: '<p>iPhone-Mikrofone sind gut, aber nicht wie Laborgeräte geeicht und auf Sprache abgestimmt. Rechne bei Alltagsgeräuschen mit wenigen dB Abweichung – perfekt für Vorher-nachher-Vergleiche mit demselben Handy. Für rechtliche oder berufliche Messungen brauchst du einen geeichten Schallpegelmesser.</p>' }
    ],
    faqs: [
        { q: 'Kann ein iPhone Dezibel messen?', a: 'Ja, mit einer Dezibelmesser-App, die das Mikrofon nutzt. Apple Watch und die Health-App erfassen ebenfalls den Umgebungslärm.' },
        { q: 'Welcher Dezibelwert ist sicher?', a: 'Stundenlange Belastung über etwa 85 dB kann dem Gehör schaden. Kurze lautere Geräusche sind weniger riskant.' },
        { q: 'Nimmt der Dezibelmesser Ton auf?', a: 'Der Dezibelmesser von Clear Wave hört zu, um den Pegel auf deinem Gerät zu messen. Laut App Store werden keine Daten mit deiner Identität verknüpft.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'tone-generator-app-iphone',
    slug: 'frequenzgenerator-iphone',
    navLabel: 'Frequenzgenerator fürs iPhone',
    keyword: 'Frequenzgenerator iPhone',
    title: 'Frequenzgenerator fürs iPhone: jeder Ton in Hz',
    description: 'Spiel jeden Testton auf dem iPhone: Frequenz in Hz wählen, von tief nach hoch durchfahren, Lautsprecher testen oder 165 Hz gegen Wasser abspielen.',
    h1: 'Frequenzgenerator fürs iPhone: Lautsprecher mit jedem Ton testen',
    shot: 'tone',
    quick: 'Ein Frequenzgenerator spielt eine reine Sinuswelle auf der gewählten Frequenz. <strong>Fahr langsam von tief nach hoch</strong>, um zu hören, wo ein Lautsprecher scheppert, brummt oder leiser wird – ein schneller Check des Handy-Lautsprechers nach Wasserkontakt. Du kannst auch einen tiefen Ton (≈165 Hz) einstellen, der beim Wasser-Auswerfen hilft.',
    intro: '<p>Musik überdeckt Fehler, ein einzelner reiner Ton verrät sie. Deshalb nutzen Tontechniker Frequenzgeneratoren – und deshalb ist er eines der besten Werkzeuge, um zu prüfen, ob der iPhone-Lautsprecher nach dem Wasser-Auswerfen vollständig frei ist.</p>',
    manual: {
        heading: 'Lautsprecher mit einem Frequenzgenerator testen',
        steps: [
            { name: 'Lautstärke 50–70 %', text: 'Genug, um Fehler zu hören, ohne dass alles verzerrt.' },
            { name: 'Tief anfangen', text: 'Bei etwa 100–200 Hz. Kleine Lautsprecher geben tiefen Bass schwach wieder, sehr tiefe Töne klingen daher leise – das ist normal.' },
            { name: 'Langsam nach oben', text: 'Durch die Mitten (500–4000 Hz), wo die Sprache liegt. Achte auf Brummen oder Scheppern.' },
            { name: 'Höhen prüfen', text: 'Weiter bis 10.000 Hz und mehr bei leiser Lautstärke. Fehlende Höhen können auf Wasser oder Staub im Gitter hindeuten.' },
            { name: 'Problemfrequenzen notieren', text: 'Scheppern auf einem Ton deutet auf Schmutz hin, Brummen überall auf einen Defekt.' }
        ]
    },
    app: {
        heading: 'Der Frequenzgenerator in Clear Wave',
        steps: [
            { name: 'Tone Generator öffnen', text: 'Die aktuelle Frequenz steht in der Bildschirmmitte (z. B. 1028 Hz).' },
            { name: 'Nach oben oder unten wischen', text: 'Wisch, um die Frequenz zu erhöhen oder zu senken und den Bereich abzufahren.' },
            { name: 'Ton stoppen', text: 'Auf Stop Tone tippen. Hörst du Scheppern, Wasser-Auswerfen starten und erneut testen.' }
        ]
    },
    sections: [
        { h2: 'Nützliche Testfrequenzen', html: '<div class="table-wrap"><table><thead><tr><th>Frequenz</th><th>Zweck</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Wasser-Auswurf-Ton für Handy-Lautsprecher</td></tr><tr><td>440 Hz</td><td>Stimmton (Kammerton a′)</td></tr><tr><td>1000 Hz</td><td>Standard-Testton</td></tr><tr><td>2000–4000 Hz</td><td>Sprachverständlichkeit – hier hört man Dumpfheit</td></tr><tr><td>10.000 Hz+</td><td>Höhentest; die Hörempfindlichkeit sinkt mit dem Alter</td></tr></tbody></table></div>' },
        { h2: 'Schone dein Gehör', html: '<p>Reine Töne wirken lauter und ermüden stärker als Musik. Halte die Lautstärke moderat, halte den Lautsprecher nicht direkt ans Ohr und mach Pausen.</p>' }
    ],
    faqs: [
        { q: 'Wofür braucht man einen Frequenzgenerator?', a: 'Um Lautsprecher und Kopfhörer zu testen, Scheppern zu finden, das eigene Gehör zu prüfen, Instrumente zu stimmen und tiefe Töne abzuspielen, die beim Wasser-Auswerfen helfen.' },
        { q: 'Kann das iPhone sehr tiefe Frequenzen abspielen?', a: 'Ja, aber kleine Lautsprecher geben tiefen Bass schlecht wieder – Töne unter etwa 150 Hz klingen leise.' },
        { q: 'Ist der Frequenzgenerator in Clear Wave kostenlos?', a: 'Clear Wave ist kostenlos. Einige erweiterte Werkzeuge gehören zum optionalen Abo mit Gratistest.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
