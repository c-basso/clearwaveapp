// Anleitungen 6–10.
module.exports = [
{
    id: 'iphone-speaker-crackling',
    slug: 'iphone-lautsprecher-knistert',
    navLabel: 'iPhone-Lautsprecher knistert',
    keyword: 'iPhone Lautsprecher knistert',
    title: 'iPhone-Lautsprecher knistert oder scheppert: Lösungen',
    description: 'iPhone-Lautsprecher knistert, rauscht oder klingt verzerrt? Finde heraus, ob Wasser, Staub oder ein Defekt dahintersteckt, und behebe es per Schall.',
    h1: 'iPhone-Lautsprecher knistert: Ursache finden und beheben',
    shot: 'tone',
    quick: 'Knistern, das <strong>nur bei hoher Lautstärke oder nach Nässe</strong> auftritt, kommt meist von Wasser oder Schmutz auf der Membran: 2–3 Durchgänge Wasser-Auswerfen, dann mit einem Frequenzdurchlauf testen. Knistert es bei <strong>jeder Lautstärke</strong> oder brummt es auf bestimmten Tönen auch nach 24 Stunden Trocknen, ist der Lautsprecher wahrscheinlich beschädigt und muss repariert werden.',
    intro: '<p>Knistern, Knacken und Brummen ist das Geräusch der Membran, die an etwas stößt, das dort nicht hingehört: ein Tropfen, ein Staubkorn oder ihr eigener beschädigter Rand. Es geht darum herauszufinden, was es ist – und ein sauberer Testton ist der schnellste Weg, es klar zu hören.</p>',
    manual: {
        heading: 'So behebst du einen knisternden iPhone-Lautsprecher',
        steps: [
            { name: 'Die Quelle ausschließen', text: 'Spiel einen anderen Song oder ein anderes Video in guter Qualität ab. Manche Streams knistern von selbst.' },
            { name: 'Leiser stellen', text: 'Verschwindet das Knistern unter ~70 %, wird die Membran von etwas zusätzlich belastet – meist Wasser oder Schmutz.' },
            { name: 'Wasser und Schmutz auswerfen', text: 'Lautsprecher nach unten, 70–80 %, tiefer Wasser-Auswurf-Ton 30–60 Sekunden, 2–3-mal.' },
            { name: 'Gitter bürsten', text: 'Mit einer weichen, trockenen Zahnbürste Flusen aus den Löchern holen.' },
            { name: 'Frequenzen durchfahren', text: 'Spiel Töne von tief nach hoch. Brummt es auf einer bestimmten Frequenz auch nach der Reinigung, deutet das auf einen Schaden hin.' }
        ]
    },
    app: {
        heading: 'Mit Clear Wave diagnostizieren und beheben',
        steps: [
            { name: 'Wasser-Auswerfen starten', text: 'Erst Wasser raus und Schmutz lösen – das behebt die meisten Knistergeräusche nach Regen oder Spritzern.' },
            { name: 'Frequenzgenerator öffnen', text: 'Langsam nach oben und unten wischen. Merk dir die Frequenz, bei der das Knistern auftritt.' },
            { name: 'Mit dem Stereotest eingrenzen', text: 'Jeweils einen Kanal einschalten. Knistert nur eine Seite, liegt es an diesem Lautsprecher.' },
            { name: 'Wiederholen oder reparieren lassen', text: 'Wird das Knistern mit jedem Durchgang weniger, weitermachen. Ändert sich nach 24 Stunden Trocknen nichts, ist er wahrscheinlich beschädigt.' }
        ]
    },
    sections: [
        { h2: 'Wasser, Staub oder durchgebrannter Lautsprecher', html: '<div class="table-wrap"><table><thead><tr><th>Anzeichen</th><th>Wasser</th><th>Staub / Schmutz</th><th>Durchgebrannt</th></tr></thead><tbody><tr><td>Begann nach Nässe</td><td>✔</td><td></td><td>Manchmal</td></tr><tr><td>Besser nach Wasser-Auswerfen</td><td>✔</td><td>Teilweise</td><td>✘</td></tr><tr><td>Knistert bei leiser Lautstärke</td><td>Selten</td><td>Selten</td><td>✔</td></tr><tr><td>Brummt auf bestimmten Frequenzen</td><td>Manchmal</td><td>✔</td><td>✔</td></tr><tr><td>Besser nach 24 h Trocknen</td><td>✔</td><td>✘</td><td>✘</td></tr></tbody></table></div>' },
        { h2: 'Achte auf die Lautstärke', html: '<p>Dauerhaft maximale Lautstärke erhitzt die Schwingspule und verstärkt das Knistern. Zum Testen bei 70–80 % bleiben. Nutzt du das iPhone täglich voll aufgedreht als Musiklautsprecher, hilft dir der <a href="/de/guides/dezibel-messen-iphone/">Dezibelmesser</a>, die Pegel im Blick zu behalten.</p>' }
    ],
    faqs: [
        { q: 'Warum knistert der iPhone-Lautsprecher bei hoher Lautstärke?', a: 'Wasser oder Schmutz auf der Membran, oder die Membran stößt bei starkem Bass an ihre Grenze. Erst reinigen; knistert es nur bei lautem Bass, leiser stellen oder den Equalizer anpassen.' },
        { q: 'Kann Wasser den Lautsprecher knistern lassen?', a: 'Ja. Tropfen auf der Membran scheppern, wenn sie sich bewegt. Ein paar Durchgänge Wasser-Auswerfen entfernen sie meist.' },
        { q: 'Knistert er – ist er dann durchgebrannt?', a: 'Nicht unbedingt. Knistert er nach Reinigung und 24 Stunden Trocknen bei jeder Lautstärke weiter, dann wahrscheinlich schon.' }
    ],
    related: ['how-to-fix-blown-speaker', 'tone-generator-app-iphone', 'iphone-speaker-muffled'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'is-water-eject-safe', 'what-frequency-removes-water-from-speaker']
},
{
    id: 'water-eject-shortcut',
    slug: 'water-eject-kurzbefehl-iphone',
    navLabel: 'Water-Eject-Kurzbefehl',
    keyword: 'Water Eject Kurzbefehl iPhone',
    title: 'Water-Eject-Kurzbefehl geht nicht? Die einfache Alternative',
    description: 'So funktioniert der Siri-Kurzbefehl „Water Eject“, warum er nach iOS-Updates streikt und welche Ein-Tipp-Alternative zusätzlich den Klang testet.',
    h1: 'Water-Eject-Kurzbefehl fürs iPhone: wie er funktioniert und was du stattdessen nimmst',
    shot: 'clear',
    quick: 'Der Kurzbefehl „Water Eject“ ist ein von der Community erstellter Siri-Kurzbefehl, der einen 165-Hz-Ton abspielt. Er stammt nicht von Apple, muss von einer Drittseite importiert werden und kann nach einem iOS-Update ausfallen. Eine App wie Clear Wave erledigt dasselbe mit einem Tipp, offline, und bietet zusätzlich Stereotest, Frequenzgenerator und Dezibelmesser.',
    intro: '<p>Wer „Wasser aus iPhone Lautsprecher“ sucht, stößt auf den berühmten Kurzbefehl. Die Idee ist clever, aber viele sehen „Kurzbefehl kann nicht geöffnet werden“, fehlende Berechtigungen oder einen viel zu kurzen Ton. So funktioniert er, so behebst du die typischen Fehler – und so erkennst du, wann eine App einfacher ist.</p>',
    manual: {
        heading: 'Was tun, wenn der Water-Eject-Kurzbefehl nicht funktioniert',
        steps: [
            { name: 'iOS und die App Kurzbefehle aktualisieren', text: 'Alte Versionen des Kurzbefehls können auf neuem iOS ausfallen. Hol dir die neueste Version beim Autor.' },
            { name: 'Kurzbefehl neu installieren', text: 'Den alten in Kurzbefehle löschen und von der Seite des Autors neu hinzufügen.' },
            { name: 'Angefragte Berechtigungen erteilen', text: 'Beim ersten Start fragt er nach Zugriff – auf „Erlauben“ tippen.' },
            { name: 'Stummmodus aus, lauter stellen', text: 'Manche Versionen spielen über die Klingellautstärke.' },
            { name: '2–3-mal mit Lautsprecher nach unten ausführen', text: 'Ein Durchgang reicht nach starker Nässe selten.' }
        ]
    },
    app: {
        heading: 'Die Ein-Tipp-Alternative: Clear Wave',
        steps: [
            { name: 'Clear Wave aus dem App Store installieren', text: 'Kein Kurzbefehl-Import, keine „nicht vertrauenswürdigen Kurzbefehle“ erlauben.' },
            { name: 'Zum Wasser-Auswerfen tippen', text: 'Lautsprecher nach unten, Lautstärke ~75 %.' },
            { name: 'Mit dem Stereotest prüfen', text: 'Linken und rechten Kanal kontrollieren – das kann ein Kurzbefehl nicht.' }
        ]
    },
    sections: [
        { h2: 'Kurzbefehl oder App', html: '<div class="table-wrap"><table><thead><tr><th></th><th>Water-Eject-Kurzbefehl</th><th>Clear Wave App</th></tr></thead><tbody><tr><td>Erstellt von</td><td>Einem Nutzer (nicht Apple)</td><td>Unabhängigem Entwickler, geprüft vom App Store</td></tr><tr><td>Installation</td><td>Link von einer Drittseite</td><td>App Store</td></tr><tr><td>Fällt nach iOS-Updates aus</td><td>Manchmal</td><td>Updates über den App Store</td></tr><tr><td>Fortschrittsanzeige</td><td>Nein</td><td>Ja</td></tr><tr><td>Stereotest, Töne, Dezibelmesser</td><td>Nein</td><td>Ja</td></tr><tr><td>Preis</td><td>Kostenlos</td><td>Kostenlos, Pro optional</td></tr></tbody></table></div>' },
        { h2: 'Hat das iPhone eine eigene Wasser-Auswurf-Funktion?', html: '<p>Nein. Die Apple Watch hat die Wassersperre, die einen Ton abspielt, um ihren Lautsprecher zu leeren – das iPhone hat nichts Vergleichbares. Deshalb gibt es den Kurzbefehl und die Apps. Details: <a href="/de/faq/hat-iphone-wasser-auswerfen/">Hat das iPhone eine Funktion zum Wasser-Auswerfen?</a></p>' }
    ],
    faqs: [
        { q: 'Ist der Water-Eject-Kurzbefehl von Apple?', a: 'Nein. Es ist ein Community-Kurzbefehl, der auf Seiten wie RoutineHub geteilt wird. Apples einzige eingebaute Wasser-Auswurf-Funktion ist die Wassersperre der Apple Watch.' },
        { q: 'Warum lässt sich der Kurzbefehl nicht öffnen?', a: 'Meist wurde er für eine ältere iOS-Version gebaut oder der Link ist abgelaufen. Lade die neueste Version oder nutze eine App.' },
        { q: 'Welche Frequenz nutzt der Water-Eject-Kurzbefehl?', a: 'Die verbreiteten Versionen spielen einen Ton von etwa 165 Hz.' }
    ],
    related: ['water-eject-app-iphone', '165-hz-water-eject-sound', 'get-water-out-of-iphone-speaker'],
    faqLinks: ['does-iphone-have-built-in-water-eject', 'what-frequency-removes-water-from-speaker', 'does-water-eject-work']
},
{
    id: '165-hz-water-eject-sound',
    slug: '165-hz-ton-wasser-entfernen',
    navLabel: '165-Hz-Ton gegen Wasser',
    keyword: '165 Hz Ton Wasser entfernen',
    title: '165-Hz-Ton: die Frequenz, die Wasser herausdrückt',
    description: 'Warum 165 Hz die beliebteste Frequenz zum Wasser-Auswerfen ist, wie tiefe Töne Wasser aus dem Handy-Lautsprecher drücken und wie du ihn sicher abspielst.',
    h1: '165-Hz-Ton: warum diese Frequenz Wasser aus dem Lautsprecher drückt',
    shot: 'tone',
    quick: '165 Hz ist ein tiefer Ton, bei dem die Membran eines kleinen Handy-Lautsprechers <strong>lange, kräftige Hübe</strong> macht und ihn trotzdem noch wiedergeben kann. Diese Hübe drücken Tropfen aus dem Gitter. Spiel ihn bei 70–80 % Lautstärke mit dem Lautsprecher nach unten 30–60 Sekunden lang ab, 2–3-mal.',
    intro: '<p>Alle Werkzeuge zum Wasser-Auswerfen – Siri-Kurzbefehl, Websites, Apps – nutzen einen tiefen Ton, und 165 Hz ist die Zahl, die du am häufigsten siehst. Keine Magie: Es ist ein praktischer Kompromiss zwischen „tief genug, um viel Luft zu bewegen“ und „hoch genug, dass ein winziger Lautsprecher ihn spielen kann“.</p>',
    manual: {
        heading: 'So spielst du einen 165-Hz-Ton sicher ab',
        steps: [
            { name: 'Hülle abnehmen', text: 'Das Gitter braucht Luft, das Wasser einen Ausweg.' },
            { name: 'Lautsprecher nach unten', text: 'Die Schwerkraft erledigt die halbe Arbeit.' },
            { name: 'Lautstärke 70–80 %', text: 'Genug, um Wasser zu bewegen – Maximum ist nicht nötig.' },
            { name: '165 Hz für 30–60 Sekunden', text: 'Mit einem Frequenzgenerator oder einer Wasser-Auswurf-App.' },
            { name: 'Wiederholen und abwischen', text: '2–3 Durchgänge, dazwischen Tropfen abwischen.' }
        ]
    },
    app: {
        heading: 'Wasser-Auswurf-Töne in Clear Wave',
        steps: [
            { name: 'Wasser-Auswerfen starten', text: 'Der Durchgang in Clear Wave nutzt abgestimmte tieffrequente Muster – du musst keine Zahl wählen.' },
            { name: 'Oder den Ton selbst einstellen', text: 'Öffne den Frequenzgenerator und wisch zur gewünschten Frequenz, z. B. 165 Hz.' },
            { name: 'Nach der Reinigung testen', text: 'Fahr höhere Frequenzen ab, um sicherzugehen, dass der Lautsprecher im ganzen Bereich sauber klingt.' }
        ]
    },
    sections: [
        { h2: 'Warum tiefe Frequenzen Wasser bewegen', html: '<p>Bei gleicher Lautstärke muss die Membran bei tieferen Frequenzen pro Schwingung einen <em>längeren</em> Weg zurücklegen. Hohe Pieptöne bewegen sie kaum. Ein langer Hub wirkt wie ein Kolben, der Luft – und das Wasser im Gitter – hinausschiebt. Geht man aber zu tief (unter etwa 100 Hz), kann ein handygroßer Lautsprecher den Ton kaum noch wiedergeben, und der Effekt lässt nach. Deshalb ist der Bereich 150–200 Hz beliebt, besonders 165 Hz.</p>' },
        { h2: 'Ist 165 Hz sicher für meinen Lautsprecher?', html: '<p>Ja, bei vernünftiger Lautstärke. Es ist ein ganz normaler Ton im Bereich eines E-Basses oder einer tiefen Männerstimme. Spiel keinen Ton minutenlang auf 100 % und brich ab, wenn es laut scheppert.</p>' }
    ],
    faqs: [
        { q: 'Ist 165 Hz die beste Frequenz zum Wasser-Auswerfen?', a: 'Sie ist eine gute und die verbreitetste Wahl. Alles zwischen 150 und 200 Hz wirkt bei Handy-Lautsprechern ähnlich. Durchgänge mit wechselndem Ton helfen, hartnäckige Tropfen zu lösen.' },
        { q: 'Kann man 165 Hz hören?', a: 'Ja. Es ist ein deutlich hörbares tiefes Brummen, ungefähr der Ton „kleines e“.' },
        { q: 'Wie lange sollte ich den 165-Hz-Ton abspielen?', a: '30–60 Sekunden pro Durchgang, 2–3 Durchgänge. Nach starker Nässe bis zu 5.' }
    ],
    related: ['tone-generator-app-iphone', 'water-eject-shortcut', 'water-eject-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-water-eject-safe', 'how-many-times-run-water-eject']
},
{
    id: 'how-to-fix-blown-speaker',
    slug: 'lautsprecher-durchgebrannt-was-tun',
    navLabel: 'Lautsprecher durchgebrannt: was tun',
    keyword: 'Handy Lautsprecher durchgebrannt',
    title: 'Lautsprecher durchgebrannt? So prüfst du es und was hilft',
    description: 'Ist der Handy-Lautsprecher durchgebrannt oder nur mit Wasser und Staub verstopft? In 2 Minuten prüfen, was hilft – und wann eine Reparatur nötig ist.',
    h1: 'Lautsprecher durchgebrannt? Erst prüfen, ob er es wirklich ist',
    shot: 'test',
    quick: 'Schließ zuerst Wasser und Staub aus: 2–3 Durchgänge Wasser-Auswerfen, Gitter bürsten, erneut testen. Ein wirklich <strong>durchgebrannter</strong> Lautsprecher (gerissene Membran oder beschädigte Schwingspule) knistert oder brummt bei jeder Lautstärke und lässt sich nicht per Software reparieren – er muss getauscht werden. Viele „durchgebrannte“ Handy-Lautsprecher sind in Wahrheit nur verstopft.',
    intro: '<p>„Durchgebrannt“ heißt, der Lautsprecher ist physisch beschädigt – meist durch zu hohe Lautstärke, einen Sturz oder Korrosion. Wasser und Schmutz verursachen aber fast die gleichen Symptome. Bevor du für eine Reparatur zahlst, nimm dir zwei Minuten, um sie auszuschließen.</p>',
    manual: {
        heading: 'So testest und reparierst du einen „durchgebrannten“ Lautsprecher',
        steps: [
            { name: 'Sauberen Ton bei 50 % abspielen', text: 'Klingt er bei 50 % gut und verzerrt nur sehr laut, ist er wahrscheinlich nicht durchgebrannt.' },
            { name: 'Wasser und Schmutz auswerfen', text: 'Lautsprecher nach unten, 70–80 %, tiefer Wasser-Auswurf-Ton 30–60 Sekunden, 2–3-mal.' },
            { name: 'Gitter bürsten', text: 'Mit einer weichen, trockenen Bürste – niemals mit Nadeln oder Stecknadeln.' },
            { name: 'Frequenzen durchfahren', text: 'Von tief nach hoch. Ein durchgebrannter Lautsprecher brummt auf vielen Frequenzen, nicht nur auf einer.' },
            { name: 'Lautsprecher vergleichen', text: 'Test links/rechts: Klingt eine Seite sauber und die andere scheppert bei jeder Lautstärke, ist diese beschädigt.' },
            { name: 'Tauschen, wenn bestätigt', text: 'Ein Lautsprechertausch ist eine übliche Reparatur bei Apple oder in einer guten Werkstatt.' }
        ]
    },
    app: {
        heading: 'Durchgebrannten Lautsprecher mit Clear Wave diagnostizieren',
        steps: [
            { name: 'Zuerst reinigen', text: 'Ein Wasser-Auswurf-Durchgang schließt Wasser und Staub aus.' },
            { name: 'Stereotest', text: 'Linken und rechten Kanal getrennt abspielen und vergleichen.' },
            { name: 'Frequenzgenerator-Durchlauf', text: 'Langsam von tief nach hoch wischen und notieren, wo es brummt.' },
            { name: 'Dezibelmesser', text: 'Lautstärke der beiden Lautsprecher vergleichen – ein großer Unterschied bestätigt das Problem.' }
        ]
    },
    sections: [
        { h2: 'Anzeichen für einen durchgebrannten Lautsprecher', html: '<ul class="check-list"><li>Knistern oder Rauschen schon bei leiser Lautstärke, nicht erst bei hoher.</li><li>Dauerhaftes Scheppern im Bass, das nach 24 Stunden Trocknen nicht besser wird.</li><li>Ein Lautsprecher ist stumm, der andere funktioniert.</li><li>Das Problem begann direkt nach einem heftigen Sturz.</li></ul>' },
        { h2: 'Mythen über die Reparatur', html: '<p><strong>„Eine spezielle Frequenz repariert einen durchgebrannten Lautsprecher.“</strong> Nein. Töne bewegen Wasser und Staub, reparieren aber keine gerissene Membran und keine verbrannte Spule. <strong>„Mit Kleber oder Klebeband geht das.“</strong> Nicht beim Handy – die Lautsprecher sind versiegelte Module. Ist er wirklich durchgebrannt, hilft nur der Austausch.</p>' }
    ],
    faqs: [
        { q: 'Kann sich ein durchgebrannter Lautsprecher von selbst erholen?', a: 'Nein. Ein Lautsprecher, der wegen Wasser nur „durchgebrannt“ klingt, erholt sich aber oft nach dem Trocknen oder ein paar Durchgängen Wasser-Auswerfen.' },
        { q: 'Was kostet der Tausch des iPhone-Lautsprechers?', a: 'Das hängt von Modell und Werkstatt ab. Schau bei Apples Reparaturpreisen oder einer lokalen Werkstatt nach; AppleCare+ kann die Reparatur abdecken.' },
        { q: 'Kann Clear Wave einen durchgebrannten Lautsprecher reparieren?', a: 'Keine App behebt physische Schäden. Clear Wave hilft, Wasser und Staub auszuschließen und den beschädigten Lautsprecher zu finden.' }
    ],
    related: ['iphone-speaker-crackling', 'left-right-speaker-test', 'fix-my-speaker'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'clean-iphone-speaker-dust',
    slug: 'iphone-lautsprecher-reinigen',
    navLabel: 'iPhone-Lautsprecher reinigen',
    keyword: 'iPhone Lautsprecher reinigen',
    title: 'iPhone-Lautsprecher reinigen: Staub und Flusen entfernen',
    description: 'iPhone-Lautsprecher sicher von Staub und Flusen reinigen: weiche Bürste, Klebeband-Trick und Schallreinigung. Was du nie verwenden solltest.',
    h1: 'iPhone-Lautsprecher reinigen: Staub, Flusen und Schmutz entfernen',
    shot: 'clear',
    quick: 'Schalte das iPhone aus und bürste die Gitter sanft mit einer <strong>weichen, trockenen Zahnbürste</strong> schräg ab. Restliche Flusen mit Malerkrepp oder Knetkleber abheben, dabei nur leicht andrücken. Dann das iPhone einschalten und einen Reinigungsdurchgang per Schall (tiefe Frequenzen) starten, um den Rest herauszuschütteln. Niemals Nadeln, Flüssigkeiten oder Druckluft.',
    intro: '<p>Taschenflusen, Staub und Make-up verstopfen nach und nach die winzigen Löcher des Lautsprechers. Weil das langsam passiert, denken viele, ihr iPhone sei „mit der Zeit einfach leiser geworden“. Eine sorgfältige Reinigung bringt oft einen guten Teil der Lautstärke und Klarheit zurück.</p>',
    manual: {
        heading: 'iPhone-Lautsprecher Schritt für Schritt reinigen',
        steps: [
            { name: 'iPhone ausschalten und Hülle abnehmen', text: 'Das ist sicherer und du siehst das Gitter besser.' },
            { name: 'Gitter bürsten', text: 'Mit einer weichen, sauberen, trockenen Zahnbürste. Schräg und von den Löchern weg bürsten, nicht hinein.' },
            { name: 'Flusen mit Klebeband abheben', text: 'Malerkrepp oder Knetkleber leicht auf das Gitter drücken und abziehen. Nicht in die Löcher drücken.' },
            { name: 'Hörmuschel reinigen', text: 'Den oberen Schlitz vorsichtig genauso säubern.' },
            { name: 'Schallreinigung starten', text: 'iPhone einschalten, Lautsprecher nach unten, und einen tiefen Reinigungston abspielen, um gelöste Partikel herauszuschütteln.' }
        ]
    },
    app: {
        heading: 'Zum Abschluss: die Lautsprecherreinigung von Clear Wave',
        steps: [
            { name: 'Lautsprecherreinigung starten', text: 'Derselbe Durchgang, der Wasser auswirft, löst auch Staub von Membran und Gitter.' },
            { name: 'Vibrationsmodus nutzen', text: 'Die Vibrationsoption hilft, Partikel aus dem Gitter zu schütteln.' },
            { name: 'Unterschied messen', text: 'Mit dem Dezibelmesser vorher und nachher messen – gleicher Song, gleiche Lautstärke, gleicher Abstand.' }
        ]
    },
    sections: [
        { h2: 'Das solltest du nie verwenden', html: '<ul class="check-list check-list--no"><li>Nadeln, Stecknadeln oder Zahnstocher – sie können das Gitter durchstechen.</li><li>Alkohol, Wasser oder Reinigungssprays in den Löchern.</li><li>Druckluft – sie treibt den Schmutz tiefer hinein.</li><li>Einen Staubsauger direkt auf dem Gitter.</li></ul>' },
        { h2: 'Wie oft reinigen?', html: '<p>Für die meisten reicht alle paar Monate. Steckt dein Handy oft in einer fusseligen Tasche, bist du am Strand oder arbeitest in einer staubigen Umgebung, hält ein kurzes Bürsten plus Schallreinigung einmal im Monat die Lautstärke konstant.</p>' }
    ],
    faqs: [
        { q: 'Darf ich den iPhone-Lautsprecher mit einer Zahnbürste reinigen?', a: 'Ja – mit einer weichen, sauberen und trockenen. Sanft und schräg bürsten.' },
        { q: 'Entfernt eine Lautsprecher-Reinigungs-App Staub?', a: 'Sie hilft, feinen Staub von Membran und Gitter zu lösen. Bei festsitzenden Flusen mit einer weichen Bürste kombinieren.' },
        { q: 'Warum ist der Lautsprecher nach dem Reinigen immer noch leise?', a: 'Bluetooth und Lautstärke prüfen, dann einen Stereotest machen. Ist ein Lautsprecher deutlich leiser, muss er eventuell repariert werden.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work', 'is-water-eject-safe', 'is-clear-wave-free']
}
];
