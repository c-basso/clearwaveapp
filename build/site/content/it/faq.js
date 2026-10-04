// Domande. Ognuna ha la sua pagina /it/faq/<slug>/ («Scopri di più») e compare nella home.
module.exports = [
{
    id: 'what-is-clear-wave', slug: 'cos-e-clear-wave',
    question: 'Cos’è Clear Wave?',
    title: 'Cos’è Clear Wave? L’app per togliere l’acqua dal telefono',
    description: 'Clear Wave è un’app gratuita per iPhone e iPad che toglie acqua e polvere dall’altoparlante con il suono e poi lo verifica. Cosa fa e come averla.',
    short: 'Clear Wave è un’app gratuita per iPhone e iPad (su App Store: «Togliere l’acqua dal telefono») che espelle acqua e polvere dall’altoparlante con onde sonore e poi controlla l’audio con test stereo, generatore di frequenze e misuratore di decibel.',
    body: '<p>Clear Wave è un’app iOS per quando l’altoparlante suona ovattato, basso o gracchia dopo acqua o polvere. Su App Store si chiama <em>«Togliere l’acqua dal telefono»</em>; Clear Wave è il marchio e questo sito.</p><h2>Cosa fa Clear Wave</h2><ul class="check-list"><li><strong>Espulsione acqua e pulizia altoparlante</strong>: sessioni di suono grave spingono l’acqua fuori dalla griglia e smuovono la polvere.</li><li><strong>Test stereo</strong>: canale sinistro e destro separati.</li><li><strong>Generatore di frequenze</strong>: qualsiasi frequenza per trovare vibrazioni e buchi.</li><li><strong>Misuratore di decibel</strong>: volume prima e dopo la pulizia.</li></ul><h2>Esiste Clear Wave online?</h2><p>No. È un’app per iPhone e iPad (iOS 17.1+) che funziona offline: non serve tenere aperta una scheda del browser mentre il suono va. Su questo sito trovi guide gratuite passo passo, valide anche senza l’app. Però puoi riprodurre <a href="/it/guides/suono-165-hz-togliere-acqua/">gratis il suono a 165 Hz per togliere l’acqua online</a>, direttamente nel browser.</p><h2>Chi la sviluppa</h2><p>Clear Wave è sviluppata da uno sviluppatore indipendente e non è collegata ad Apple né ad altri prodotti chiamati «Clear Wave». Il download è gratuito; l’accesso completo a tutti gli strumenti è un acquisto in-app facoltativo con prova gratuita.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'does-water-eject-work', slug: 'funziona-togliere-acqua-con-suono',
    question: 'Togliere l’acqua con il suono funziona davvero?',
    title: 'Togliere l’acqua dall’iPhone con il suono funziona?',
    description: 'Il suono toglie davvero l’acqua dall’altoparlante dell’iPhone? Sì, quella nella griglia. Come funziona, cosa non risolve e come capire se ha funzionato.',
    short: 'Sì, per l’acqua intrappolata nella griglia dell’altoparlante, causa della maggior parte degli audio ovattati dopo pioggia, doccia o schizzi. Il suono a bassa frequenza fa sì che la membrana spinga fuori le gocce; spesso le vedi comparire sulla griglia.',
    body: '<p>L’espulsione dell’acqua funziona perché un altoparlante è una piccola pompa. Con un tono basso (circa 150–200 Hz) la membrana fa escursioni lunghe e spinge l’aria — e l’acqua nella griglia — attraverso i fori. È lo stesso principio del Blocco acqua di Apple Watch.</p><h2>Cosa risolve</h2><ul class="check-list"><li>Audio ovattato o «sott’acqua» dopo essersi bagnato</li><li>Volume più basso dopo doccia, pioggia o schizzi</li><li>Gracchi causati da gocce sulla membrana</li><li>In parte, la polvere sulla griglia</li></ul><h2>Cosa non risolve</h2><ul class="check-list check-list--no"><li>Acqua dentro l’elettronica del telefono</li><li>Un altoparlante bruciato o danneggiato fisicamente</li><li>La corrosione da acqua di mare o bibite zuccherate lasciate per giorni</li></ul><h2>Come capire se ha funzionato</h2><p>Riproduci lo stesso video parlato prima e dopo. Meglio ancora: un test stereo e una scansione lenta di frequenze; entrambi i canali devono suonare ugualmente chiari, senza vibrazioni.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'is-water-eject-safe', slug: 'e-sicuro-espellere-acqua',
    question: 'Espellere l’acqua con il suono è sicuro?',
    title: 'Espellere l’acqua dall’altoparlante dell’iPhone è sicuro?',
    description: 'Un suono per espellere l’acqua può danneggiare l’altoparlante dell’iPhone? No, a volume normale. Perché, che volume usare e quali errori evitare.',
    short: 'Sì. Un suono per espellere l’acqua è un comune audio a volume normale, come la musica. Resta sul 70–80 %, evita il massimo a lungo e fermati se senti un forte sbattere.',
    body: '<p>L’altoparlante dell’iPhone è fatto per riprodurre bassi, voci e sveglie tutto il giorno. Un tono basso di 30–60 secondi rientra ampiamente nelle sue capacità. A danneggiarlo è l’uso <em>prolungato</em> al massimo, soprattutto con bassi potenti, che scalda la bobina.</p><h2>Uso sicuro</h2><ul class="check-list"><li>Volume al 70–80 %, non al 100 %</li><li>30–60 secondi per ciclo, breve pausa tra i cicli</li><li>Altoparlante verso il basso</li><li>Fermati se senti ronzii o sbattere forte</li></ul><h2>Più rischioso dell’espulsione dell’acqua</h2><ul class="check-list check-list--no"><li>Phon e altre fonti di calore</li><li>Aria compressa nella griglia</li><li>Aghi o cotton fioc nei fori</li><li>Il riso (Apple lo sconsiglia)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'how-long-for-water-to-leave-iphone-speaker', slug: 'quanto-ci-mette-ad-asciugarsi',
    question: 'Quanto ci mette ad asciugarsi l’altoparlante dell’iPhone?',
    title: 'Quanto ci mette ad asciugarsi l’altoparlante dell’iPhone?',
    description: 'Da solo l’altoparlante dell’iPhone si asciuga in ore o fino a un giorno. Con un suono per espellere l’acqua bastano di solito 1–3 cicli da 30–60 s.',
    short: 'Da solo, da qualche ora a un giorno intero. Con un suono per espellere l’acqua la maggior parte esce in 1–3 cicli da 30–60 secondi; dopo un’immersione possono servire fino a 5 cicli più l’asciugatura all’aria.',
    body: '<p>L’acqua nella griglia evapora lentamente perché la cavità è piccola e chiusa. Per questo l’audio può restare ovattato per ore dopo la doccia o la pioggia.</p><div class="table-wrap"><table><thead><tr><th>Situazione</th><th>Senza aiuto</th><th>Con l’espulsione</th></tr></thead><tbody><tr><td>Schizzi, pioggia, vapore della doccia</td><td>1–4 ore</td><td>1–2 cicli</td></tr><tr><td>Breve immersione (lavandino, pozzanghera)</td><td>Diverse ore</td><td>2–3 cicli + 30 min di asciugatura</td></tr><tr><td>Piscina, WC, immersione lunga</td><td>Fino a 24 ore</td><td>3–5 cicli + diverse ore di asciugatura</td></tr></tbody></table></div><p>Apple consiglia di aspettare almeno 30 minuti prima di ricaricare un iPhone bagnato, e fino a 24 ore se compare l’avviso di liquido.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'should-i-put-wet-iphone-in-rice', slug: 'iphone-bagnato-nel-riso',
    question: 'Devo mettere l’iPhone bagnato nel riso?',
    title: 'Mettere l’iPhone bagnato nel riso? Apple dice di no',
    description: 'Apple sconsiglia di mettere un iPhone bagnato nel riso: le particelle possono danneggiarlo. Cosa fare invece: picchiettare, asciugare, espellere l’acqua.',
    short: 'No. Apple lo sconsiglia espressamente perché piccole particelle di riso possono entrare nell’iPhone. Picchiettalo con il connettore verso il basso, lascialo asciugare all’aria e usa un suono per espellere l’acqua dall’altoparlante.',
    body: '<p>Il trucco del riso è un mito superato. Il riso non assorbe l’acqua più velocemente dell’aria aperta, e la polvere di amido o i chicchi rotti possono finire nella porta di ricarica e nelle griglie degli altoparlanti. L’<a href="https://support.apple.com/it-it/102643" rel="noopener" target="_blank">articolo del Supporto Apple</a> dice chiaramente di non farlo.</p><h2>Cosa fare invece</h2><ol class="steps-inline"><li>Asciuga il telefono e togli la cover.</li><li>Picchiettalo delicatamente sul palmo con la porta di ricarica verso il basso.</li><li>Fai 2–3 cicli di espulsione con l’altoparlante verso il basso.</li><li>Lascialo in un luogo asciutto e ventilato; aspetta almeno 30 minuti prima di ricaricarlo.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    id: 'what-frequency-removes-water-from-speaker', slug: 'quale-frequenza-toglie-acqua',
    question: 'Quale frequenza toglie l’acqua dall’altoparlante?',
    title: 'Quale frequenza toglie l’acqua dall’altoparlante? (165 Hz)',
    description: 'Le basse frequenze tra 150 e 200 Hz, soprattutto 165 Hz, tolgono meglio l’acqua dall’altoparlante del telefono. Perché funzionano e come riprodurle.',
    short: 'Funzionano meglio le basse frequenze, intorno ai 150–200 Hz; la più usata è 165 Hz. Con i toni bassi la membrana fa escursioni più lunghe e spinge l’acqua attraverso la griglia.',
    body: '<p>A parità di volume, un tono più basso costringe la membrana a muoversi di più. Quell’escursione lunga pompa aria — e acqua — attraverso la griglia. Ma molto sotto i 100 Hz un piccolo altoparlante di telefono non riproduce più bene il tono. La fascia pratica è 150–200 Hz, e 165 Hz è diventato lo standard grazie al famoso comando rapido di Siri.</p><p>Le sessioni che variano leggermente il tono aiutano a staccare le gocce ostinate. Poi scorri le frequenze più alte con un generatore per verificare che l’altoparlante suoni pulito su tutta la gamma.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    id: 'can-water-eject-fix-blown-speaker', slug: 'altoparlante-bruciato-espulsione-acqua',
    question: 'L’espulsione dell’acqua ripara un altoparlante bruciato?',
    title: 'L’espulsione dell’acqua ripara un altoparlante bruciato?',
    description: 'L’espulsione dell’acqua non ripara un altoparlante bruciato, ma molti altoparlanti «bruciati» sono solo bagnati o intasati. Come capirlo in due minuti.',
    short: 'No: un altoparlante davvero bruciato è danneggiato fisicamente e va sostituito. Ma molti altoparlanti che sembrano «bruciati» sono solo bagnati o intasati, e l’espulsione dell’acqua li sistema. Prova prima di pagare una riparazione.',
    body: '<p>Un altoparlante bruciato ha la membrana strappata o la bobina danneggiata. Nessun suono, frequenza o app può ripararlo. La buona notizia: acqua e sporco causano sintomi quasi identici — gracchi, ronzii, distorsione — e quelli si risolvono.</p><h2>Prova in 2 minuti</h2><ol class="steps-inline"><li>Fai 2–3 cicli di espulsione dell’acqua.</li><li>Riproduci audio pulito al 50 %. Ancora distorto? Potrebbe essere bruciato.</li><li>Fai un test stereo. Se un lato distorce a ogni volume, probabilmente è quello danneggiato.</li><li>Scorri un generatore di frequenze dai bassi agli acuti. Ronzio ovunque = guasto; vibrazione su una sola nota = sporco.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    id: 'does-water-eject-work-on-airpods', slug: 'togliere-acqua-airpods',
    question: 'L’espulsione dell’acqua funziona sugli AirPods?',
    title: 'Si può togliere l’acqua dagli AirPods con il suono?',
    description: 'Si può espellere l’acqua dagli AirPods con un suono? Solo in parte. Cosa aiuta, cosa consiglia Apple e come provare l’AirPod sinistro e il destro.',
    short: 'Solo in parte. Puoi riprodurre un suono per espellere l’acqua tramite AirPods collegati, ma i loro trasduttori sono piccoli e sigillati, quindi l’effetto è limitato. Asciugali con un panno senza pelucchi, lasciali asciugare e poi prova i canali sinistro e destro.',
    body: '<p>Con gli AirPods collegati, l’audio — compreso il suono per espellere l’acqua — passa dai loro trasduttori, non dall’altoparlante dell’iPhone. Può spostare un po’ d’acqua dalla griglia, ma gli auricolari sono minuscoli e sigillati: l’asciugatura conta più del suono.</p><h2>Cosa fare con AirPods bagnati</h2><ul class="check-list"><li>Asciugali con un panno morbido, asciutto e senza pelucchi.</li><li>Lasciali asciugare completamente prima di rimetterli nella custodia di ricarica.</li><li>Non usare calore, aria compressa od oggetti appuntiti sulla griglia.</li><li>Una volta asciutti, fai un test stereo per verificare che suonino uguali.</li></ul><p>AirPods (3ª generazione), AirPods Pro e modelli successivi resistono a sudore e acqua, ma non sono impermeabili.</p>',
    guide: 'left-right-speaker-test'
},
{
    id: 'does-iphone-have-built-in-water-eject', slug: 'iphone-ha-espulsione-acqua',
    question: 'L’iPhone ha una funzione per espellere l’acqua?',
    title: 'L’iPhone ha una funzione per espellere l’acqua? No',
    description: 'L’iPhone non ha un pulsante per espellere l’acqua: solo Apple Watch ha il Blocco acqua. Come espellere l’acqua su iPhone con un comando rapido o un’app.',
    short: 'No. Solo Apple Watch ha un’espulsione dell’acqua integrata (Blocco acqua). Su iPhone serve un’app come Clear Wave o un comando rapido di Siri della community.',
    body: '<p>Il Blocco acqua di Apple Watch riproduce una serie di toni per far uscire l’acqua dall’altoparlante dopo il nuoto. L’iPhone non ha un’impostazione equivalente, anche se la fisica è la stessa. iPhone XS/XR e successivi segnalano il liquido nella porta di ricarica, ma è un rilevamento, non un’espulsione.</p><h2>Le tue opzioni su iPhone</h2><ul class="check-list"><li><strong>App per espellere l’acqua</strong>: un tocco, offline, con test per confermare il risultato.</li><li><strong>Comando rapido Siri</strong>: della community, da importare da un sito di terzi; può rompersi dopo un aggiornamento di iOS.</li><li><strong>Suono su un sito web</strong>: serve internet e lo schermo acceso.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    id: 'how-many-times-run-water-eject', slug: 'quante-volte-espellere-acqua',
    question: 'Quante volte devo espellere l’acqua?',
    title: 'Quante volte ripetere l’espulsione dell’acqua?',
    description: 'Ripeti l’espulsione 2–3 volte dopo schizzi e fino a 5 dopo un’immersione, 30–60 secondi ciascuna. Come capire quando l’altoparlante è libero.',
    short: '2–3 cicli da 30–60 secondi dopo schizzi, pioggia o vapore della doccia. Fino a 5 cicli dopo un’immersione (piscina, WC), con qualche minuto di asciugatura tra uno e l’altro. Fermati quando il test stereo suona pulito da entrambi i lati.',
    body: '<p>Di più non è sempre meglio. Una volta uscita l’acqua, altri cicli non servono. Decidi con una breve prova tra un ciclo e l’altro.</p><div class="table-wrap"><table><thead><tr><th>Esposizione</th><th>Cicli</th></tr></thead><tbody><tr><td>Schizzi, pioggerella, vapore della doccia</td><td>1–2</td></tr><tr><td>Pioggia forte, caduto nel lavandino</td><td>2–3</td></tr><tr><td>Piscina, WC, vasca</td><td>3–5 + asciugatura all’aria, ripeti dopo un’ora</td></tr></tbody></table></div><p>Se dopo 5 cicli e 24 ore di asciugatura l’audio non è migliorato affatto, probabilmente non è acqua: controlla se c’è polvere o un guasto all’altoparlante.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'is-clear-wave-free', slug: 'clear-wave-e-gratis',
    question: 'Clear Wave è gratis?',
    title: 'Clear Wave è gratis? Prezzo e cosa include',
    description: 'Clear Wave si scarica gratis su iPhone e iPad. Un abbonamento facoltativo con prova gratuita sblocca tutti gli strumenti. Cosa include e come disdire.',
    short: 'Clear Wave si scarica gratis su iPhone e iPad. Un abbonamento in-app facoltativo (con prova gratuita) dà accesso completo a tutti gli strumenti: espulsione dell’acqua, test stereo, generatore di frequenze e misuratore di decibel.',
    body: '<p>Clear Wave — su App Store <em>«Togliere l’acqua dal telefono»</em> — si scarica gratis. L’accesso completo agli strumenti si ottiene con acquisti in-app facoltativi, con prova gratuita e un’opzione a vita. L’App Store ti mostra il prezzo attuale nella tua valuta prima di qualsiasi conferma.</p><h2>Cosa c’è nell’app</h2><ul class="check-list"><li>Sessioni di espulsione dell’acqua e pulizia dell’altoparlante</li><li>Test stereo sinistra/destra</li><li>Generatore di frequenze (scorri per cambiare frequenza)</li><li>Misuratore di decibel</li></ul><h2>Gestire l’abbonamento</h2><p>Gli abbonamenti sono gestiti da Apple. Per disdire: <em>Impostazioni → [il tuo nome] → Abbonamenti</em> sull’iPhone. La funzione In famiglia è supportata.</p>',
    guide: 'water-eject-app-iphone'
}
];
