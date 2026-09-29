// Fragen. Jede hat eine eigene Seite /de/faq/<slug>/ („Mehr erfahren“) und erscheint auf der Startseite.
module.exports = [
{
    id: 'does-water-eject-work', slug: 'funktioniert-wasser-auswerfen-mit-ton',
    question: 'Funktioniert Wasser-Auswerfen mit Ton wirklich?',
    title: 'Funktioniert Wasser-Auswerfen mit Ton wirklich?',
    description: 'Drückt ein Ton wirklich Wasser aus dem iPhone-Lautsprecher? Ja, aus dem Gitter. So funktioniert es, was es nicht behebt und wie du den Erfolg prüfst.',
    short: 'Ja – für Wasser im Lautsprechergitter, das nach Regen, Dusche oder Spritzern die meisten dumpfen Klänge verursacht. Tieffrequenter Schall lässt die Membran die Tropfen hinausdrücken; oft siehst du sie am Gitter.',
    body: '<p>Wasser-Auswerfen funktioniert, weil ein Lautsprecher eine kleine Pumpe ist. Bei einem tiefen Ton (etwa 150–200 Hz) macht die Membran lange Hübe und schiebt Luft – und Wasser aus dem Gitter – durch die Öffnungen. Nach demselben Prinzip arbeitet Apples Wassersperre auf der Apple Watch.</p><h2>Was es behebt</h2><ul class="check-list"><li>Dumpfen Klang „wie unter Wasser“ nach Nässe</li><li>Geringere Lautstärke nach Dusche, Regen oder Spritzern</li><li>Knistern durch Tropfen auf der Membran</li><li>Teilweise losen Staub auf dem Gitter</li></ul><h2>Was es nicht behebt</h2><ul class="check-list check-list--no"><li>Wasser in der Elektronik des iPhones</li><li>Einen durchgebrannten oder physisch beschädigten Lautsprecher</li><li>Korrosion durch Salzwasser oder zuckerhaltige Getränke, die tagelang einwirkten</li></ul><h2>So prüfst du, ob es geklappt hat</h2><p>Spiel dasselbe Video mit Sprache vorher und nachher ab. Noch besser: ein Stereotest und ein langsamer Frequenzdurchlauf – beide Kanäle sollten gleich klar und ohne Scheppern klingen.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'is-water-eject-safe', slug: 'ist-wasser-auswerfen-sicher',
    question: 'Ist Wasser-Auswerfen mit Ton sicher für den Lautsprecher?',
    title: 'Ist Wasser-Auswerfen sicher für den iPhone-Lautsprecher?',
    description: 'Kann ein Wasser-Auswurf-Ton den iPhone-Lautsprecher beschädigen? Nicht bei normaler Lautstärke. Warum, welche Lautstärke und welche Fehler du vermeidest.',
    short: 'Ja. Ein Wasser-Auswurf-Ton ist normales Audio bei normaler Lautstärke, wie Musik. Bleib bei 70–80 %, vermeide langes Maximum und brich bei lautem Scheppern ab.',
    body: '<p>Der iPhone-Lautsprecher ist dafür gebaut, den ganzen Tag Bass, Stimmen und Wecker abzuspielen. Ein tiefer Ton für 30–60 Sekunden liegt locker in seinen Möglichkeiten. Schaden entsteht durch <em>langes</em> Abspielen auf Maximum, vor allem mit kräftigem Bass, weil sich die Spule erhitzt.</p><h2>So nutzt du es sicher</h2><ul class="check-list"><li>Lautstärke 70–80 %, nicht 100 %</li><li>30–60 Sekunden pro Durchgang, kurze Pause dazwischen</li><li>Lautsprecher nach unten</li><li>Bei lautem Brummen oder Scheppern abbrechen</li></ul><h2>Riskanter als Wasser-Auswerfen</h2><ul class="check-list check-list--no"><li>Föhn und andere Hitzequellen</li><li>Druckluft ins Gitter</li><li>Nadeln oder Wattestäbchen in den Löchern</li><li>Reis (Apple rät ab)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'how-long-for-water-to-leave-iphone-speaker', slug: 'wie-lange-trocknet-iphone-lautsprecher',
    question: 'Wie lange trocknet der iPhone-Lautsprecher?',
    title: 'Wie lange trocknet der iPhone-Lautsprecher nach Wasser?',
    description: 'Von allein trocknet der iPhone-Lautsprecher in einigen Stunden bis zu einem Tag. Mit Wasser-Auswurf-Ton reichen meist 1–3 Durchgänge à 30–60 Sekunden.',
    short: 'Von allein einige Stunden bis zu einem ganzen Tag. Mit einem Wasser-Auswurf-Ton ist das meiste nach 1–3 Durchgängen à 30–60 Sekunden draußen; nach dem Untertauchen können bis zu 5 Durchgänge plus Trocknen nötig sein.',
    body: '<p>Wasser im Lautsprechergitter verdunstet langsam, weil der Hohlraum klein und geschlossen ist. Deshalb kann der Klang nach Dusche oder Regen stundenlang dumpf bleiben.</p><div class="table-wrap"><table><thead><tr><th>Situation</th><th>Ohne Hilfe</th><th>Mit Wasser-Auswerfen</th></tr></thead><tbody><tr><td>Spritzer, Regen, Duschdampf</td><td>1–4 Stunden</td><td>1–2 Durchgänge</td></tr><tr><td>Kurz untergetaucht (Waschbecken, Pfütze)</td><td>Mehrere Stunden</td><td>2–3 Durchgänge + 30 Min. Trocknen</td></tr><tr><td>Pool, Toilette, lange untergetaucht</td><td>Bis zu 24 Stunden</td><td>3–5 Durchgänge + mehrere Stunden Trocknen</td></tr></tbody></table></div><p>Apple empfiehlt, ein nasses iPhone frühestens nach 30 Minuten zu laden – bei Flüssigkeitswarnung bis zu 24 Stunden später.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'should-i-put-wet-iphone-in-rice', slug: 'nasses-iphone-in-reis',
    question: 'Soll ich ein nasses iPhone in Reis legen?',
    title: 'Nasses iPhone in Reis legen? Apple sagt Nein',
    description: 'Apple rät davon ab, ein nasses iPhone in Reis zu legen – Partikel können es beschädigen. Was du stattdessen tust: klopfen, trocknen, Wasser per Ton auswerfen.',
    short: 'Nein. Apple rät ausdrücklich davon ab, weil kleine Reispartikel ins iPhone gelangen können. Klopf es mit dem Anschluss nach unten aus, lass es an der Luft trocknen und nutze einen Wasser-Auswurf-Ton für den Lautsprecher.',
    body: '<p>Der Reis-Trick ist ein überholter Mythos. Reis zieht Wasser nicht schneller heraus als offene Luft, und Stärkestaub oder Reisbruch kann in Ladeanschluss und Lautsprechergitter landen. Der <a href="https://support.apple.com/de-de/102643" rel="noopener" target="_blank">Support-Artikel von Apple</a> sagt klar, dass du es nicht tun sollst.</p><h2>Das tust du stattdessen</h2><ol class="steps-inline"><li>iPhone abwischen und Hülle abnehmen.</li><li>Sanft mit dem Ladeanschluss nach unten gegen die Handfläche klopfen.</li><li>2–3 Durchgänge Wasser-Auswerfen mit dem Lautsprecher nach unten.</li><li>An einen trockenen, luftigen Ort legen; mindestens 30 Minuten mit dem Laden warten.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    id: 'what-frequency-removes-water-from-speaker', slug: 'welche-frequenz-entfernt-wasser',
    question: 'Welche Frequenz holt Wasser aus dem Lautsprecher?',
    title: 'Welche Frequenz holt Wasser aus dem Lautsprecher? (165 Hz)',
    description: 'Tiefe Frequenzen um 150–200 Hz, vor allem 165 Hz, drücken Wasser am besten aus dem Handy-Lautsprecher. Warum tiefe Töne wirken und wie du sie abspielst.',
    short: 'Am besten wirken tiefe Frequenzen um 150–200 Hz; am verbreitetsten ist 165 Hz. Bei tiefen Tönen macht die Membran längere Hübe und drückt das Wasser durch das Gitter.',
    body: '<p>Bei gleicher Lautstärke muss die Membran bei einem tieferen Ton weiter ausschwingen. Dieser lange Hub pumpt Luft – und Wasser – durch das Gitter. Deutlich unter etwa 100 Hz kann ein kleiner Handy-Lautsprecher den Ton aber kaum noch wiedergeben. Der praktische Bereich liegt bei 150–200 Hz, und 165 Hz wurde dank des bekannten Siri-Kurzbefehls zum Standard.</p><p>Durchgänge mit leicht wechselndem Ton helfen, hartnäckige Tropfen zu lösen. Danach mit einem Frequenzgenerator höhere Frequenzen abfahren, um zu prüfen, ob der Lautsprecher im ganzen Bereich sauber klingt.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    id: 'can-water-eject-fix-blown-speaker', slug: 'hilft-es-bei-kaputtem-lautsprecher',
    question: 'Hilft Wasser-Auswerfen bei einem durchgebrannten Lautsprecher?',
    title: 'Hilft Wasser-Auswerfen bei durchgebranntem Lautsprecher?',
    description: 'Wasser-Auswerfen repariert keinen durchgebrannten Lautsprecher – aber viele „kaputte“ Lautsprecher sind nur nass oder verstopft. So erkennst du den Unterschied.',
    short: 'Nein – ein wirklich durchgebrannter Lautsprecher ist physisch beschädigt und muss getauscht werden. Viele Lautsprecher, die „kaputt“ klingen, sind aber nur nass oder verstopft, und Wasser-Auswerfen behebt das. Teste, bevor du für eine Reparatur zahlst.',
    body: '<p>Bei einem durchgebrannten Lautsprecher ist die Membran gerissen oder die Schwingspule beschädigt. Kein Ton, keine Frequenz und keine App kann das reparieren. Die gute Nachricht: Wasser und Schmutz verursachen fast dieselben Symptome – Knistern, Brummen, Verzerrung – und die lassen sich beheben.</p><h2>Der 2-Minuten-Test</h2><ol class="steps-inline"><li>2–3 Durchgänge Wasser-Auswerfen.</li><li>Sauberen Ton bei 50 % abspielen. Immer noch verzerrt? Vielleicht durchgebrannt.</li><li>Stereotest machen. Ist eine Seite bei jeder Lautstärke verzerrt, ist wohl diese beschädigt.</li><li>Mit dem Frequenzgenerator von tief nach hoch fahren. Brummen überall = Defekt; Scheppern auf einem Ton = Schmutz.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    id: 'does-water-eject-work-on-airpods', slug: 'wasser-aus-airpods',
    question: 'Funktioniert Wasser-Auswerfen bei AirPods?',
    title: 'Kann man Wasser per Ton aus AirPods entfernen?',
    description: 'Lässt sich Wasser mit einem Ton aus AirPods entfernen? Nur teilweise. Was hilft, was Apple empfiehlt und wie du linken und rechten AirPod testest.',
    short: 'Nur teilweise. Du kannst einen Wasser-Auswurf-Ton über verbundene AirPods abspielen, aber ihre Treiber sind klein und versiegelt, der Effekt ist also begrenzt. Mit einem fusselfreien Tuch abtrocknen, trocknen lassen und dann linken und rechten Kanal testen.',
    body: '<p>Sind AirPods verbunden, läuft der Ton – auch der Wasser-Auswurf-Ton – über ihre eigenen Treiber, nicht über den iPhone-Lautsprecher. Das kann etwas Wasser vom Gitter bewegen, aber die Ohrhörer sind winzig und versiegelt – Trocknen ist wichtiger als Schall.</p><h2>Was du mit nassen AirPods tust</h2><ul class="check-list"><li>Mit einem weichen, trockenen, fusselfreien Tuch abwischen.</li><li>Vollständig trocknen lassen, bevor sie ins Ladecase kommen.</li><li>Keine Hitze, keine Druckluft, nichts Spitzes am Gitter.</li><li>Wenn sie trocken sind, einen Stereotest machen, damit beide gleich klingen.</li></ul><p>AirPods (3. Generation), AirPods Pro und neuer sind schweiß- und wassergeschützt, aber nicht wasserdicht.</p>',
    guide: 'left-right-speaker-test'
},
{
    id: 'does-iphone-have-built-in-water-eject', slug: 'hat-iphone-wasser-auswerfen',
    question: 'Hat das iPhone eine Funktion zum Wasser-Auswerfen?',
    title: 'Hat das iPhone eine Wasser-Auswurf-Funktion? Nein – darum',
    description: 'Das iPhone hat keine Taste zum Wasser-Auswerfen – nur die Apple Watch hat die Wassersperre. So wirfst du Wasser am iPhone per Kurzbefehl oder App aus.',
    short: 'Nein. Nur die Apple Watch hat eine eingebaute Wasser-Auswurf-Funktion (Wassersperre). Am iPhone brauchst du eine App wie Clear Wave oder einen Siri-Kurzbefehl aus der Community.',
    body: '<p>Die Wassersperre der Apple Watch spielt nach dem Schwimmen eine Tonfolge ab, um Wasser aus dem Lautsprecher zu drücken. Das iPhone hat keine vergleichbare Einstellung, obwohl die Physik dieselbe ist. iPhone XS/XR und neuer melden zwar Flüssigkeit im Ladeanschluss – das ist aber Erkennung, kein Auswerfen.</p><h2>Deine Optionen am iPhone</h2><ul class="check-list"><li><strong>App zum Wasser-Auswerfen</strong> – ein Tipp, offline, mit Tests zur Kontrolle.</li><li><strong>Siri-Kurzbefehl</strong> – aus der Community, Import von einer Drittseite; kann nach iOS-Updates ausfallen.</li><li><strong>Ton auf einer Website</strong> – braucht Internet und eingeschalteten Bildschirm.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    id: 'how-many-times-run-water-eject', slug: 'wie-oft-wasser-auswerfen',
    question: 'Wie oft sollte ich Wasser auswerfen?',
    title: 'Wie oft sollte man das Wasser-Auswerfen wiederholen?',
    description: 'Wasser-Auswerfen 2–3-mal nach Spritzern und bis zu 5-mal nach dem Untertauchen, je 30–60 Sekunden. So erkennst du, wann der Lautsprecher frei ist.',
    short: '2–3 Durchgänge à 30–60 Sekunden nach Spritzern, Regen oder Duschdampf. Bis zu 5 Durchgänge nach dem Untertauchen (Pool, Toilette), mit ein paar Minuten Trocknen dazwischen. Hör auf, wenn der Stereotest auf beiden Seiten sauber klingt.',
    body: '<p>Mehr ist nicht immer besser. Ist das Wasser draußen, bringen weitere Durchgänge nichts. Entscheide mit einem kurzen Test zwischen den Durchgängen.</p><div class="table-wrap"><table><thead><tr><th>Nässe</th><th>Durchgänge</th></tr></thead><tbody><tr><td>Spritzer, Nieselregen, Duschdampf</td><td>1–2</td></tr><tr><td>Starkregen, kurz ins Waschbecken gefallen</td><td>2–3</td></tr><tr><td>Pool, Toilette, Badewanne</td><td>3–5 + an der Luft trocknen, nach einer Stunde wiederholen</td></tr></tbody></table></div><p>Hat sich der Klang nach 5 Durchgängen und 24 Stunden Trocknen gar nicht verbessert, ist es wahrscheinlich kein Wasser – prüf auf Staub oder einen Lautsprecherschaden.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'is-clear-wave-free', slug: 'ist-clear-wave-kostenlos',
    question: 'Ist Clear Wave kostenlos?',
    title: 'Ist Clear Wave kostenlos? Preis und Funktionen',
    description: 'Clear Wave ist kostenlos für iPhone und iPad. Ein optionales Abo mit Gratistest schaltet alle Werkzeuge frei. Was enthalten ist und wie du kündigst.',
    short: 'Clear Wave ist kostenlos für iPhone und iPad. Ein optionales In-App-Abo (mit Gratistest) gibt vollen Zugriff auf alle Werkzeuge: Wasser-Auswerfen, Stereotest, Frequenzgenerator und Dezibelmesser.',
    body: '<p>Clear Wave – im App Store <em>„Wasser aus Lautsprecher“</em> – ist kostenlos. Vollen Zugriff auf alle Werkzeuge bekommst du über optionale In-App-Käufe, mit Gratistest und einer Lifetime-Option. Den aktuellen Preis zeigt dir der App Store in deiner Währung, bevor du etwas bestätigst.</p><h2>Was in der App steckt</h2><ul class="check-list"><li>Wasser-Auswerfen und Lautsprecherreinigung</li><li>Stereotest links/rechts</li><li>Frequenzgenerator (wischen, um die Frequenz zu ändern)</li><li>Dezibelmesser</li></ul><h2>Abo verwalten</h2><p>Abos werden von Apple verwaltet. Zum Kündigen: <em>Einstellungen → [dein Name] → Abonnements</em> auf dem iPhone. Familienfreigabe wird unterstützt.</p>',
    guide: 'water-eject-app-iphone'
}
];
