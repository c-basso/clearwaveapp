// Guide 1–5. id = slug inglese (hreflang e collegamenti incrociati).
module.exports = [
{
    id: 'get-water-out-of-iphone-speaker',
    slug: 'togliere-acqua-altoparlante-iphone',
    navLabel: 'Togliere l’acqua dall’altoparlante iPhone',
    keyword: 'come togliere l’acqua dall’altoparlante iPhone',
    title: 'Come togliere l’acqua dall’altoparlante dell’iPhone',
    description: 'Acqua nell’altoparlante dell’iPhone? Toglila in pochi minuti: asciugatura consigliata da Apple e un’onda sonora che spinge fuori l’acqua. Gratis.',
    h1: 'Come togliere l’acqua dall’altoparlante dell’iPhone',
    shot: 'clear',
    quick: 'Imposta il volume al 70–80 %, tieni l’iPhone con la <strong>griglia dell’altoparlante verso il basso</strong> e riproduci per 30–60 secondi un suono a bassa frequenza per espellere l’acqua (circa 165 Hz). La vibrazione spinge fuori le gocce. Ripeti 2–3 volte, picchietta delicatamente l’iPhone sul palmo e lascialo asciugare all’aria. Niente riso, phon o cotton fioc.',
    intro: '<p>Quando l’acqua entra nell’altoparlante dell’iPhone, una sottile pellicola si deposita sulla griglia e nella piccola cavità dietro. L’altoparlante funziona ancora, ma l’acqua smorza il suono: le voci diventano <em>ovattate</em>, la musica sembra «sott’acqua» e il volume cala. L’acqua va tolta fisicamente, e lo strumento migliore è il suono stesso.</p>',
    manual: {
        heading: 'Passo passo: togliere l’acqua dall’altoparlante dell’iPhone',
        steps: [
            { name: 'Togli la cover e asciuga l’esterno', text: 'Le cover trattengono umidità vicino all’altoparlante inferiore. Asciuga l’iPhone con un panno che non lascia pelucchi.' },
            { name: 'Altoparlante verso il basso', text: 'Tieni l’iPhone con il bordo inferiore (altoparlante principale) verso il pavimento, così l’acqua scorre fuori.' },
            { name: 'Volume al 70–80 %', text: 'Abbastanza per far vibrare la membrana senza che sbatta. Evita il volume massimo a lungo.' },
            { name: 'Riproduci il suono per 30–60 secondi', text: 'Un tono basso intorno ai 165 Hz fa muovere la membrana con escursioni lunghe che spingono le gocce attraverso la griglia. A volte vedi comparire goccioline.' },
            { name: 'Ripeti 2–3 volte e picchietta', text: 'Picchietta l’iPhone sul palmo con l’altoparlante verso il basso e fai un altro ciclo. Dopo piscina o WC possono servire 3–5 cicli.' },
            { name: 'Lascia asciugare all’aria', text: 'Metti l’iPhone in un luogo asciutto e ventilato. Apple consiglia di aspettare almeno 30 minuti prima di ricaricarlo se compare un avviso di liquido.' }
        ]
    },
    app: {
        heading: 'Come farlo con Clear Wave (un tocco)',
        steps: [
            { name: 'Apri Clear Wave', text: 'L’espulsione dell’acqua è nella schermata principale: il grande pulsante rotondo.' },
            { name: 'Alza il volume, altoparlante verso il basso', text: 'L’app riproduce schemi sonori calibrati mentre tu controlli il volume.' },
            { name: 'Avvia una sessione completa', text: 'Guarda l’anello di avanzamento riempirsi. Asciuga le gocce sulla griglia.' },
            { name: 'Verifica con il test stereo', text: 'Riproduci il canale sinistro e il destro separatamente. Se un lato resta ovattato, fai un’altra sessione.' }
        ]
    },
    sections: [
        { h2: 'Perché il suono funziona meglio dello scuotere', html: '<p>Scuotere o soffiare può spingere l’acqua <em>più dentro</em>. Un suono per espellere l’acqua fa il contrario: la membrana dell’altoparlante si muove avanti e indietro centinaia di volte al secondo e funziona come una piccola pompa che spinge l’acqua fuori dagli stessi fori da cui è entrata. È la stessa idea del Blocco acqua di Apple Watch, che riproduce un tono per svuotare l’altoparlante.</p><p>Le basse frequenze funzionano meglio perché la membrana percorre più strada a ogni movimento. Per questo i suoni per togliere l’acqua stanno intorno ai 150–200 Hz, non negli acuti.</p>' },
        { h2: 'Cosa non fare', html: '<ul class="check-list check-list--no"><li><strong>Niente riso.</strong> Apple sconsiglia espressamente di mettere l’iPhone nel riso: piccole particelle possono entrare.</li><li><strong>Niente phon o calore.</strong> Il calore danneggia batteria e guarnizioni.</li><li><strong>Niente cotton fioc o carta</strong> nell’altoparlante o nella porta.</li><li><strong>Niente aria compressa</strong>: può spingere l’acqua più in profondità.</li></ul>' },
        { h2: 'Quando non è solo acqua', html: '<p>Se dopo 3–5 cicli e qualche ora di asciugatura l’audio è ancora basso, forse la griglia è intasata da polvere e pelucchi (vedi <a href="/it/guides/pulire-altoparlante-iphone/">come pulire l’altoparlante dell’iPhone</a>) oppure l’altoparlante è danneggiato. Distorsione, ronzio o gracchiare a qualsiasi volume possono indicare un guasto: la guida <a href="/it/guides/altoparlante-bruciato-cosa-fare/">altoparlante bruciato</a> spiega come distinguerlo.</p>' }
    ],
    faqs: [
        { q: 'Quanto ci mette l’acqua a uscire dall’altoparlante dell’iPhone?', a: 'Con un suono per espellere l’acqua, la maggior parte esce in 1–3 cicli da 30–60 secondi. Senza aiuto può volerci da qualche ora a un giorno perché evapori, e intanto l’audio resta ovattato.' },
        { q: 'È sicuro riprodurre un suono per togliere l’acqua?', a: 'Sì, a volume normale. È un comune suono, come la musica. Non tenere il volume al massimo e fermati se senti un forte sbattere.' },
        { q: 'Funziona anche per la capsula auricolare?', a: 'Sì. Sugli iPhone recenti anche la capsula in alto è un altoparlante. Rivolgi la parte superiore verso il basso e ripeti il suono.' }
    ],
    related: ['iphone-speaker-muffled', 'water-eject-app-iphone', 'iphone-dropped-in-water'],
    faqLinks: ['how-long-for-water-to-leave-iphone-speaker', 'should-i-put-wet-iphone-in-rice', 'is-water-eject-safe']
},
{
    id: 'water-eject-app-iphone',
    slug: 'app-togliere-acqua-dal-telefono',
    navLabel: 'App per togliere l’acqua dal telefono',
    keyword: 'app per togliere l’acqua dal telefono',
    title: 'App per togliere l’acqua dal telefono: come funziona',
    description: 'Cosa fa un’app per togliere l’acqua dal telefono, come espelle l’acqua dall’altoparlante dell’iPhone con il suono e cosa scegliere. Prova Clear Wave gratis.',
    h1: 'App per togliere l’acqua dal telefono: cosa fa e come usarla',
    shot: 'clear',
    quick: 'Un’app per togliere l’acqua riproduce un suono calibrato a bassa frequenza attraverso l’altoparlante dell’iPhone. La membrana vibra e in 30–60 secondi spinge l’acqua intrappolata fuori dalla griglia. Una buona app ti fa anche <strong>verificare</strong> il risultato — test stereo, toni di prova e misuratore di decibel — così sai quando l’altoparlante è davvero libero.',
    intro: '<p>L’iPhone non ha un pulsante integrato per espellere l’acqua (Apple Watch sì: il Blocco acqua). Un’app colma questa mancanza. Invece di un suono su un sito da tenere aperto, riproduce sessioni offline, ti permette di ripeterle e ti dà gli strumenti per confermare che l’audio è tornato normale.</p>',
    manual: {
        heading: 'Come usare un’app per togliere l’acqua',
        steps: [
            { name: 'Scarica l’app', text: 'Installa un’app per espellere l’acqua come Clear Wave dall’App Store. Una volta installata funziona offline.' },
            { name: 'Togli la cover e asciuga', text: 'Asciuga iPhone e griglia con un panno che non lascia pelucchi.' },
            { name: 'Volume 70–80 %, altoparlante verso il basso', text: 'Gravità e vibrazione insieme fanno uscire l’acqua.' },
            { name: 'Avvia la sessione di espulsione', text: 'Lasciala finire e asciuga le gocce dalla griglia.' },
            { name: 'Prova e ripeti', text: 'Riproduci un tono di prova o musica. Se è ancora ovattato, fai 1–2 sessioni in più.' }
        ]
    },
    app: {
        heading: 'Usare Clear Wave come app per togliere l’acqua',
        steps: [
            { name: 'Apri Clear Wave', text: 'La sessione di espulsione (pulizia altoparlante) è nella prima schermata.' },
            { name: 'Tocca per iniziare', text: 'L’anello mostra l’avanzamento mentre gli schemi sonori spingono fuori acqua e polvere.' },
            { name: 'Fai il test stereo', text: 'Attiva il canale sinistro e poi il destro per sentire ogni altoparlante separatamente.' },
            { name: 'Conferma con misuratore o generatore', text: 'Scorri le frequenze per individuare vibrazioni o bande mancanti e decidere se serve un altro ciclo.' }
        ]
    },
    sections: [
        { h2: 'App, sito web o comando rapido', html: '<div class="table-wrap"><table><thead><tr><th></th><th>App Clear Wave</th><th>Suono su un sito</th><th>Comando rapido Siri</th></tr></thead><tbody><tr><td>Funziona offline</td><td>Sì</td><td>No</td><td>Sì</td></tr><tr><td>Sessioni ripetibili con avanzamento</td><td>Sì</td><td>Manuale</td><td>Tono fisso</td></tr><tr><td>Test sinistra / destra</td><td>Sì</td><td>Raramente</td><td>No</td></tr><tr><td>Generatore di frequenze</td><td>Sì</td><td>A volte</td><td>No</td></tr><tr><td>Misuratore di decibel</td><td>Sì</td><td>No</td><td>No</td></tr><tr><td>Installazione</td><td>Una volta, da App Store</td><td>Scheda aperta, schermo acceso</td><td>Import da un sito di terzi</td></tr></tbody></table></div>' },
        { h2: 'Cosa deve avere una buona app', html: '<ul class="check-list"><li><strong>Basse frequenze</strong> (circa 150–200 Hz): i suoni acuti spostano poca acqua.</li><li><strong>Controllo del volume</strong>: il 100 % non serve mai.</li><li><strong>Un modo per verificare</strong>: test stereo e toni di prova dicono se ha funzionato.</li><li><strong>Offline e privata</strong>: le sessioni di Clear Wave girano sul dispositivo; secondo l’App Store nessun dato è collegato alla tua identità.</li><li><strong>Limiti onesti</strong>: nessuna app ripara un altoparlante bruciato.</li></ul>' },
        { h2: 'Un’app per togliere l’acqua funziona davvero?', html: '<p>Per l’acqua nella griglia e nella cavità dietro — la causa più comune dell’audio ovattato dopo pioggia, doccia o schizzi — sì. Spesso <em>vedi</em> uscire le gocce. Non serve per l’acqua dentro la scheda logica né per un altoparlante danneggiato. Approfondisci: <a href="/it/faq/funziona-togliere-acqua-con-suono/">togliere l’acqua con il suono funziona davvero?</a></p>' }
    ],
    faqs: [
        { q: 'Esiste un’app gratis per togliere l’acqua dall’iPhone?', a: 'Clear Wave si scarica gratis su iPhone e iPad. Un abbonamento facoltativo (con prova gratuita) sblocca tutti gli strumenti.' },
        { q: 'Funziona su iPad?', a: 'Sì. Clear Wave supporta iPad con iPadOS 17.1 o successivo. Gli altoparlanti dell’iPad sono sui lati: inclinalo con l’altoparlante bagnato verso il basso.' },
        { q: 'Un’app può danneggiare l’altoparlante?', a: 'Non a volume normale. Riproduce audio come qualsiasi app musicale. Evita il massimo e fermati in caso di forte distorsione.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'water-eject-shortcut', '165-hz-water-eject-sound'],
    faqLinks: ['does-water-eject-work', 'is-clear-wave-free', 'does-iphone-have-built-in-water-eject']
},
{
    id: 'fix-my-speaker',
    slug: 'riparare-altoparlante-telefono',
    navLabel: 'Riparare l’altoparlante del telefono',
    keyword: 'riparare altoparlante telefono',
    title: 'Riparare l’altoparlante del telefono senza assistenza',
    description: 'Altoparlante del telefono ovattato o basso? Trova la causa e riparalo a casa: espelli acqua e polvere con il suono e prova sinistra e destra.',
    h1: 'Riparare l’altoparlante del telefono: acqua, polvere o guasto',
    shot: 'clear',
    quick: 'Per riparare un altoparlante ovattato o basso: rivolgilo verso il basso, volume ~75 %, e riproduci un tono basso (≈165 Hz) per 30–60 secondi per espellere acqua o polvere. Ripeti 2–3 volte. Poi fai un <strong>test stereo</strong> per verificare che entrambi gli altoparlanti suonino uguali. Se gracchia a qualsiasi volume, potrebbe essere danneggiato.',
    intro: '<p>«L’altoparlante non va» di solito significa una di tre cose: è entrata acqua (suono ovattato), polvere e pelucchi intasano la griglia (suono basso) oppure l’altoparlante è danneggiato (gracchia, distorce). I primi due casi si risolvono a casa in pochi minuti. Vediamo qual è il tuo.</p>',
    manual: {
        heading: 'Riparare l’altoparlante in 5 passaggi',
        steps: [
            { name: 'Individua il sintomo', text: 'Ovattato, «sott’acqua» = acqua. Basso ma pulito = polvere o pelucchi. Gracchia o ronza a ogni volume = possibile guasto.' },
            { name: 'Togli la cover e pulisci la griglia', text: 'Con un panno asciutto senza pelucchi. Per la polvere aiuta uno spazzolino morbido e asciutto.' },
            { name: 'Riproduci un tono basso', text: 'Altoparlante verso il basso, volume 70–80 %, 30–60 secondi.' },
            { name: 'Ripeti e asciuga', text: '2–3 cicli, asciugando gocce o polvere che escono.' },
            { name: 'Prova entrambi i canali', text: 'Riproduci l’audio dall’altoparlante sinistro e dal destro separatamente e confrontali.' }
        ]
    },
    app: {
        heading: 'Riparare l’altoparlante con Clear Wave',
        steps: [
            { name: 'Avvia la pulizia dell’altoparlante', text: 'Tocca il pulsante rotondo. Clear Wave riproduce schemi che spingono fuori l’acqua e staccano la polvere.' },
            { name: 'Cambia modalità se serve', text: 'Le opzioni Vibrazioni e Distorsione della sessione aiutano a staccare lo sporco ostinato.' },
            { name: 'Apri il test stereo', text: 'Attiva il canale sinistro e poi il destro. Devono suonare ugualmente chiari.' },
            { name: 'Scorri il generatore di frequenze', text: 'Scorri su e giù; se vibra su una nota precisa vale la pena fare un’altra sessione.' }
        ]
    },
    sections: [
        { h2: 'Tabella dei sintomi', html: '<div class="table-wrap"><table><thead><tr><th>Cosa senti</th><th>Causa probabile</th><th>Cosa fare</th></tr></thead><tbody><tr><td>Ovattato, basso dopo essersi bagnato</td><td>Acqua nella griglia</td><td>Suono per espellere l’acqua, 2–5 cicli, asciugare</td></tr><tr><td>Basso ma chiaro, peggiora col tempo</td><td>Polvere, pelucchi della tasca</td><td>Spazzolino morbido + sessione di pulizia</td></tr><tr><td>Gracchia solo ad alto volume</td><td>Acqua o sporco sulla membrana</td><td>Pulire e riprovare con i toni</td></tr><tr><td>Gracchia o ronza a ogni volume</td><td>Altoparlante danneggiato («bruciato»)</td><td>Diagnosi con test stereo; riparare se confermato</td></tr><tr><td>Nessun suono</td><td>Impostazioni, Bluetooth o hardware</td><td>Controllare volume, scollegare il Bluetooth, riavviare</td></tr></tbody></table></div>' },
        { h2: 'Controlla le impostazioni prima di pulire', html: '<ul class="check-list"><li>Verifica che l’iPhone non sia collegato ad AirPods o a una cassa Bluetooth (Centro di Controllo → icona AirPlay).</li><li>Alza il volume con i tasti laterali mentre riproduci qualcosa.</li><li>In <em>Impostazioni → Suoni e feedback aptico</em> il volume della suoneria non deve essere a zero.</li><li>Riavvia l’iPhone: risolve i problemi di uscita audio più spesso di quanto si pensi.</li></ul>' }
    ],
    faqs: [
        { q: 'Funziona anche su Android?', a: 'La tecnica vale per qualsiasi altoparlante di telefono. Clear Wave è per iPhone e iPad; su Android usa un’app simile basata sui toni.' },
        { q: 'Quante volte riprodurre il suono?', a: 'Di solito 2–3 cicli. Dopo un’esposizione forte (piscina, WC) fino a 5, con qualche minuto di asciugatura tra un ciclo e l’altro.' },
        { q: 'Si può riparare un altoparlante bruciato con il suono?', a: 'No. Nessuna app ripara una membrana strappata o una bobina bruciata. Clear Wave ti aiuta a capire se serve una riparazione.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'clean-iphone-speaker-dust', 'how-to-fix-blown-speaker'],
    faqLinks: ['how-many-times-run-water-eject', 'can-water-eject-fix-blown-speaker', 'does-water-eject-work']
},
{
    id: 'how-to-fix-iphone-speaker',
    slug: 'altoparlante-iphone-non-funziona',
    navLabel: 'Altoparlante iPhone non funziona',
    keyword: 'altoparlante iPhone non funziona',
    title: 'Altoparlante dell’iPhone non funziona: 8 soluzioni',
    description: 'Altoparlante dell’iPhone basso, ovattato o muto? 8 soluzioni in ordine: impostazioni, Bluetooth, riavvio, espulsione acqua, pulizia e test dell’audio.',
    h1: 'L’altoparlante dell’iPhone non funziona: cosa fare',
    shot: 'test',
    quick: 'Procedi in ordine: 1) controlla volume e modalità silenziosa, 2) scollega il Bluetooth, 3) riavvia, 4) aggiorna iOS, 5) togli la cover, 6) espelli l’acqua con un tono basso, 7) togli con cura la polvere dalla griglia, 8) prova l’altoparlante sinistro e destro. Se distorce a ogni volume, serve una riparazione.',
    intro: '<p>La maggior parte dei problemi dell’altoparlante dell’iPhone non sono guasti. L’audio va su un altro dispositivo, c’è acqua nella griglia o anni di pelucchi della tasca. Questa guida va dalla soluzione più rapida a quella più impegnativa: fermati appena torna l’audio.</p>',
    manual: {
        heading: '8 soluzioni se l’altoparlante dell’iPhone non funziona',
        steps: [
            { name: 'Controlla volume e modalità silenziosa', text: 'Avvia una canzone e alza il volume. La modalità silenziosa zittisce suoneria e avvisi, non i contenuti multimediali.' },
            { name: 'Scollega Bluetooth e AirPlay', text: 'Apri il Centro di Controllo, tocca l’icona AirPlay nel riquadro musica e scegli iPhone.' },
            { name: 'Riavvia l’iPhone', text: 'Tieni premuti il tasto laterale e un tasto del volume, scorri per spegnere, poi riaccendi.' },
            { name: 'Aggiorna iOS', text: 'Impostazioni → Generali → Aggiornamento software. A volte i bug audio si risolvono con un aggiornamento.' },
            { name: 'Togli la cover', text: 'Alcune cover coprono in parte l’altoparlante inferiore o trattengono umidità.' },
            { name: 'Espelli l’acqua con il suono', text: 'Altoparlante verso il basso, volume 70–80 %, tono basso per 30–60 secondi, 2–3 volte.' },
            { name: 'Pulisci la polvere dalla griglia', text: 'Spazzola delicatamente con uno spazzolino morbido e asciutto. Non inserire mai nulla nei fori.' },
            { name: 'Prova entrambi gli altoparlanti', text: 'Un test stereo controlla separatamente la capsula auricolare e l’altoparlante inferiore.' }
        ]
    },
    app: {
        heading: 'Passaggi 6–8 in Clear Wave',
        steps: [
            { name: 'Espulsione acqua', text: 'Avvia la sessione dalla schermata principale, altoparlante verso il basso.' },
            { name: 'Test stereo', text: 'Attiva il canale sinistro e poi il destro. Sull’iPhone uno è la capsula, l’altro l’altoparlante inferiore.' },
            { name: 'Generatore di frequenze', text: 'Scorri le frequenze per trovare vibrazioni o bande morte.' },
            { name: 'Misuratore di decibel', text: 'Confronta il volume prima e dopo la pulizia per vedere il miglioramento.' }
        ]
    },
    sections: [
        { h2: 'Dove sono gli altoparlanti dell’iPhone', html: '<p>Tutti gli iPhone dall’iPhone 7 in poi hanno <strong>due altoparlanti</strong>: quello principale nella griglia del bordo inferiore e la capsula auricolare in cima allo schermo, che fa anche da secondo altoparlante stereo. Se ne suona male uno solo, il problema è locale — quasi sempre acqua o polvere. Un <a href="/it/guides/test-altoparlante-destro-sinistro/">test altoparlante destro e sinistro</a> ti dice quale.</p>' },
        { h2: 'Quando andare da Apple o in assistenza', html: '<ul class="check-list"><li>Gracchia o ronza a <em>qualsiasi</em> volume anche dopo pulizia e 24 ore di asciugatura.</li><li>Un altoparlante resta muto nel test stereo.</li><li>L’iPhone ha subito una forte caduta subito prima del problema.</li><li>È entrata acqua salata, bibite o altri liquidi e l’audio peggiora.</li></ul><p>I danni da liquidi non sono coperti dalla garanzia standard di Apple: controlla prima la copertura AppleCare+.</p>' }
    ],
    faqs: [
        { q: 'Perché l’altoparlante dell’iPhone è diventato basso all’improvviso?', a: 'Le cause più comuni: acqua nella griglia dopo pioggia o doccia, audio inviato a un dispositivo Bluetooth o polvere accumulata. Prova l’espulsione dell’acqua e la pulizia.' },
        { q: 'Posso riparare l’altoparlante dell’iPhone senza aprirlo?', a: 'Sì, se è acqua o polvere. La pulizia con il suono e uno spazzolino morbido risolvono la maggior parte dei casi. Un guasto fisico richiede riparazione.' },
        { q: 'Come capisco se l’altoparlante dell’iPhone è rotto?', a: 'Se gracchia o ronza a ogni volume dopo pulizia e asciugatura, o se un canale è muto nel test stereo, probabilmente è danneggiato.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'left-right-speaker-test'],
    faqLinks: ['does-water-eject-work', 'can-water-eject-fix-blown-speaker', 'how-many-times-run-water-eject']
},
{
    id: 'iphone-speaker-muffled',
    slug: 'audio-ovattato-iphone-dopo-acqua',
    navLabel: 'Audio ovattato su iPhone',
    keyword: 'audio ovattato iPhone dopo acqua',
    title: 'Audio ovattato su iPhone dopo l’acqua: risolvi in 2 minuti',
    description: 'Audio dell’iPhone ovattato dopo doccia o pioggia? Perché suona «sott’acqua» e come spingere fuori l’acqua dall’altoparlante con il suono in 2 minuti.',
    h1: 'Audio ovattato su iPhone dopo l’acqua: la soluzione in 2 minuti',
    shot: 'clear',
    quick: 'Un altoparlante dell’iPhone ovattato significa quasi sempre che <strong>acqua o sporco coprono la griglia</strong>. Rivolgilo verso il basso, volume ~75 %, e riproduci un tono basso per espellere l’acqua (≈165 Hz) per 30–60 secondi, 2–3 volte. Picchietta l’iPhone sul palmo e lascialo asciugare. Di solito l’audio torna chiaro in pochi minuti.',
    intro: '<p>Se il tuo iPhone sembra parlare attraverso un cuscino, l’altoparlante funziona: qualcosa gli è d’intralcio. Una pellicola d’acqua sulla griglia attenua prima gli acuti, per questo le voci perdono nitidezza prima dei bassi. La buona notizia: è un problema meccanico, non elettronico, e si risolve.</p>',
    manual: {
        heading: 'Come sistemare l’audio ovattato dell’iPhone',
        steps: [
            { name: 'Capisci quale altoparlante è ovattato', text: 'Riproduci un video parlato. Se solo le chiamate sono ovattate, è la capsula in alto; se anche musica e video, è quello in basso (o entrambi).' },
            { name: 'Rivolgilo verso il basso', text: 'Bordo inferiore in basso per il principale, parte superiore in basso per la capsula.' },
            { name: 'Suono per l’acqua al 70–80 %', text: 'Per 30–60 secondi. Osserva se compaiono gocce sulla griglia.' },
            { name: 'Ripeti 2–3 volte e asciuga', text: 'Asciuga la griglia con un panno senza pelucchi tra un ciclo e l’altro.' },
            { name: 'Lascia asciugare e riprova', text: 'Lascialo 30 minuti in un posto ventilato e riproduci lo stesso video.' }
        ]
    },
    app: {
        heading: 'Sistemare l’audio ovattato con Clear Wave',
        steps: [
            { name: 'Avvia l’espulsione dell’acqua', text: 'Tocca il cerchio nella schermata principale con l’altoparlante ovattato verso il basso.' },
            { name: 'Capovolgi per la capsula', text: 'Se anche le chiamate sono ovattate, fai una seconda sessione con la parte superiore verso il basso.' },
            { name: 'Fai il test stereo', text: 'Attiva ogni canale separatamente. L’altoparlante liberato deve suonare nitido come l’altro.' }
        ]
    },
    sections: [
        { h2: 'Perché un altoparlante bagnato suona ovattato', html: '<p>Un altoparlante produce il suono muovendo una membrana sottile che spinge l’aria. L’acqua appesantisce la membrana e tappa i fori della griglia, così gli acuti — le «s» e le «t» della voce — vengono assorbiti. Resta quel suono basso e confuso «sott’acqua». Togli l’acqua e la chiarezza torna subito.</p>' },
        { h2: 'Ovattato ma non si è bagnato?', html: '<ul class="check-list"><li><strong>Polvere e pelucchi</strong> si accumulano per mesi e causano lo stesso effetto a poco a poco. Vedi <a href="/it/guides/pulire-altoparlante-iphone/">come pulire l’altoparlante dell’iPhone</a>.</li><li><strong>Vetro protettivo o cover</strong> che coprono la capsula o la griglia inferiore.</li><li><strong>L’audio va altrove</strong>: controlla che non siano collegati AirPods o una cassa (Centro di Controllo → AirPlay).</li><li><strong>Un guasto</strong>: se oltre a ovattato è distorto, leggi <a href="/it/guides/altoparlante-iphone-gracchia/">l’altoparlante dell’iPhone gracchia</a>.</li></ul>' }
    ],
    faqs: [
        { q: 'L’audio ovattato passa da solo?', a: 'Spesso sì, quando l’acqua evapora, ma può volerci qualche ora. Un suono per espellere l’acqua lo risolve in pochi minuti.' },
        { q: 'Perché solo le chiamate sono ovattate?', a: 'La capsula in alto ha una sua griglia. Rivolgi la parte superiore verso il basso e ripeti l’espulsione, oppure verifica che il vetro protettivo non la copra.' },
        { q: 'Audio ovattato dopo la doccia: è rotto?', a: 'Quasi certamente no. Vapore e schizzi si depositano nella griglia. Uno o due cicli di solito bastano.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-crackling', 'clean-iphone-speaker-dust'],
    faqLinks: ['how-long-for-water-to-leave-iphone-speaker', 'does-water-eject-work', 'how-many-times-run-water-eject']
}
];
