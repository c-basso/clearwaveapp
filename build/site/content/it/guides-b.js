// Guide 6–10.
module.exports = [
{
    id: 'iphone-speaker-crackling',
    slug: 'altoparlante-iphone-gracchia',
    navLabel: 'Altoparlante iPhone gracchia',
    keyword: 'altoparlante iPhone gracchia',
    title: 'Altoparlante dell’iPhone che gracchia: cause e soluzioni',
    description: 'L’altoparlante dell’iPhone gracchia, frigge o distorce? Scopri se è acqua, polvere o un guasto e risolvi con pulizia sonora e toni di prova.',
    h1: 'L’altoparlante dell’iPhone gracchia: trova la causa e risolvi',
    shot: 'tone',
    quick: 'Se gracchia <strong>solo ad alto volume o dopo essersi bagnato</strong>, di solito è acqua o sporco sulla membrana: fai 2–3 cicli di espulsione dell’acqua e poi prova con una scansione di frequenze. Se gracchia <strong>a qualsiasi volume</strong>, o ronza su certe note anche dopo 24 ore di asciugatura, l’altoparlante è probabilmente danneggiato e va riparato.',
    intro: '<p>Gracchiare, schiocchi e ronzii sono il rumore della membrana che tocca qualcosa che non dovrebbe: una goccia, un granello o il proprio bordo danneggiato. Bisogna capire quale, e un tono di prova pulito è il modo più veloce per sentirlo chiaramente.</p>',
    manual: {
        heading: 'Come sistemare un altoparlante dell’iPhone che gracchia',
        steps: [
            { name: 'Escludi la sorgente audio', text: 'Riproduci un’altra canzone o video di buona qualità. Alcuni stream gracchiano già di loro.' },
            { name: 'Abbassa il volume', text: 'Se sotto il ~70 % smette di gracchiare, qualcosa in più sta forzando la membrana: di solito acqua o sporco.' },
            { name: 'Espelli acqua e sporco', text: 'Altoparlante verso il basso, volume 70–80 %, tono basso per 30–60 secondi, 2–3 volte.' },
            { name: 'Spazzola la griglia', text: 'Uno spazzolino morbido e asciutto toglie i pelucchi dai fori.' },
            { name: 'Scansiona le frequenze', text: 'Riproduci toni dai bassi agli acuti. Un ronzio su una frequenza precisa che resta dopo la pulizia fa pensare a un guasto.' }
        ]
    },
    app: {
        heading: 'Diagnosticare e risolvere con Clear Wave',
        steps: [
            { name: 'Avvia l’espulsione dell’acqua', text: 'Prima togli l’acqua e stacca lo sporco: risolve la maggior parte dei gracchi dopo pioggia o schizzi.' },
            { name: 'Apri il generatore di frequenze', text: 'Scorri lentamente su e giù. Annota la frequenza in cui compare il gracchio.' },
            { name: 'Isola l’altoparlante con il test stereo', text: 'Attiva un canale alla volta. Se gracchia solo un lato, il problema è quell’altoparlante.' },
            { name: 'Ripeti o fai riparare', text: 'Se il gracchio cala a ogni sessione, continua. Se dopo 24 ore di asciugatura non cambia nulla, probabilmente è danneggiato.' }
        ]
    },
    sections: [
        { h2: 'Acqua, polvere o altoparlante bruciato', html: '<div class="table-wrap"><table><thead><tr><th>Segnale</th><th>Acqua</th><th>Polvere / sporco</th><th>Altoparlante bruciato</th></tr></thead><tbody><tr><td>È iniziato dopo essersi bagnato</td><td>✔</td><td></td><td>A volte</td></tr><tr><td>Migliora dopo l’espulsione</td><td>✔</td><td>In parte</td><td>✘</td></tr><tr><td>Gracchia a basso volume</td><td>Raramente</td><td>Raramente</td><td>✔</td></tr><tr><td>Ronza su certe frequenze</td><td>A volte</td><td>✔</td><td>✔</td></tr><tr><td>Migliora dopo 24 h di asciugatura</td><td>✔</td><td>✘</td><td>✘</td></tr></tbody></table></div>' },
        { h2: 'Tieni d’occhio il volume', html: '<p>Il volume massimo continuo scalda la bobina e peggiora il gracchio. Per le prove resta al 70–80 %. Se usi l’iPhone come cassa a tutto volume ogni giorno, il <a href="/it/guides/misurare-decibel-iphone/">misuratore di decibel</a> ti aiuta a controllare i livelli.</p>' }
    ],
    faqs: [
        { q: 'Perché l’altoparlante dell’iPhone gracchia ad alto volume?', a: 'Acqua o sporco sulla membrana, oppure la membrana arriva al limite con bassi forti. Prima pulisci; se gracchia solo con bassi potenti, abbassa il volume o l’equalizzatore.' },
        { q: 'L’acqua può far gracchiare l’altoparlante?', a: 'Sì. Le gocce sulla membrana vibrano quando si muove. Di solito qualche ciclo di espulsione le toglie.' },
        { q: 'Se gracchia è bruciato?', a: 'Non necessariamente. Se continua a gracchiare a ogni volume dopo pulizia e 24 ore di asciugatura, probabilmente sì.' }
    ],
    related: ['how-to-fix-blown-speaker', 'tone-generator-app-iphone', 'iphone-speaker-muffled'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'is-water-eject-safe', 'what-frequency-removes-water-from-speaker']
},
{
    id: 'water-eject-shortcut',
    slug: 'comando-rapido-espelli-acqua',
    navLabel: 'Comando rapido per espellere l’acqua',
    keyword: 'comando rapido espellere acqua iPhone',
    title: 'Comando rapido «Water Eject» non va? L’alternativa facile',
    description: 'Come funziona il comando rapido Siri «Water Eject», perché si rompe dopo gli aggiornamenti di iOS e un’alternativa in un tocco.',
    h1: 'Comando rapido per espellere l’acqua dall’iPhone: come funziona e cosa usare',
    shot: 'clear',
    quick: 'Il comando rapido «Water Eject» è un comando Siri creato dalla community che riproduce un tono a 165 Hz. Non è di Apple, va importato da un sito di terzi e può smettere di funzionare dopo un aggiornamento di iOS. Un’app come Clear Wave fa lo stesso con un tocco, offline, e aggiunge test stereo, generatore di frequenze e misuratore di decibel.',
    intro: '<p>Cercando «togliere acqua iPhone» si trova il famoso comando rapido. L’idea è buona, ma molti vedono «Impossibile aprire il comando», permessi mancanti o un tono troppo breve. Ecco come funziona, come risolvere i problemi comuni e quando un’app è più semplice.</p>',
    manual: {
        heading: 'Cosa fare se il comando Water Eject non funziona',
        steps: [
            { name: 'Aggiorna iOS e l’app Comandi', text: 'Le versioni vecchie del comando possono non funzionare sugli iOS nuovi. Scarica l’ultima versione dall’autore.' },
            { name: 'Reinstalla il comando', text: 'Elimina quello vecchio in Comandi e aggiungilo di nuovo dalla pagina dell’autore.' },
            { name: 'Concedi i permessi richiesti', text: 'Al primo avvio chiede un accesso: tocca Consenti.' },
            { name: 'Disattiva il silenzioso e alza il volume', text: 'Alcune versioni suonano al volume della suoneria.' },
            { name: 'Eseguilo 2–3 volte con l’altoparlante in basso', text: 'Una sola volta raramente basta dopo una forte bagnatura.' }
        ]
    },
    app: {
        heading: 'L’alternativa in un tocco: Clear Wave',
        steps: [
            { name: 'Installa Clear Wave da App Store', text: 'Nessun comando da importare, nessun comando non attendibile da consentire.' },
            { name: 'Tocca per espellere l’acqua', text: 'Altoparlante verso il basso, volume ~75 %.' },
            { name: 'Verifica con il test stereo', text: 'Controlla i canali sinistro e destro, cosa che un comando rapido non sa fare.' }
        ]
    },
    sections: [
        { h2: 'Comando rapido o app', html: '<div class="table-wrap"><table><thead><tr><th></th><th>Comando Water Eject</th><th>App Clear Wave</th></tr></thead><tbody><tr><td>Creato da</td><td>Un utente (non Apple)</td><td>Sviluppatore indipendente, approvato da App Store</td></tr><tr><td>Installazione</td><td>Link da un sito di terzi</td><td>App Store</td></tr><tr><td>Si rompe dopo gli aggiornamenti di iOS</td><td>A volte</td><td>Aggiornata tramite App Store</td></tr><tr><td>Avanzamento della sessione</td><td>No</td><td>Sì</td></tr><tr><td>Test stereo, toni, decibel</td><td>No</td><td>Sì</td></tr><tr><td>Prezzo</td><td>Gratis</td><td>Download gratis, Pro facoltativo</td></tr></tbody></table></div>' },
        { h2: 'L’iPhone ha una sua funzione per espellere l’acqua?', html: '<p>No. Apple Watch ha il Blocco acqua, che riproduce un tono per svuotare l’altoparlante, ma l’iPhone non ha nulla di simile. Per questo esistono il comando rapido e le app. Dettagli: <a href="/it/faq/iphone-ha-espulsione-acqua/">l’iPhone ha una funzione per espellere l’acqua?</a></p>' }
    ],
    faqs: [
        { q: 'Il comando Water Eject è di Apple?', a: 'No. È un comando della community condiviso su siti come RoutineHub. L’unica espulsione dell’acqua integrata di Apple è su Apple Watch (Blocco acqua).' },
        { q: 'Perché il comando dice che non si può aprire?', a: 'Di solito perché è stato creato per un iOS precedente o il link è scaduto. Scarica l’ultima versione o usa un’app.' },
        { q: 'Che frequenza usa il comando Water Eject?', a: 'Le versioni più diffuse riproducono un tono intorno ai 165 Hz.' }
    ],
    related: ['water-eject-app-iphone', '165-hz-water-eject-sound', 'get-water-out-of-iphone-speaker'],
    faqLinks: ['does-iphone-have-built-in-water-eject', 'what-frequency-removes-water-from-speaker', 'does-water-eject-work']
},
{
    id: '165-hz-water-eject-sound',
    slug: 'suono-165-hz-togliere-acqua',
    navLabel: 'Suono 165 Hz per togliere l’acqua',
    keyword: 'suono 165 Hz togliere acqua',
    title: 'Suono 165 Hz: la frequenza per togliere l’acqua',
    description: 'Perché 165 Hz è la frequenza più usata per togliere l’acqua dal telefono, come i toni bassi la spingono fuori e come riprodurla in sicurezza.',
    h1: 'Suono 165 Hz: perché questa frequenza toglie l’acqua dall’altoparlante',
    shot: 'tone',
    quick: '165 Hz è un tono basso che fa muovere la membrana di un piccolo altoparlante di telefono con <strong>escursioni lunghe e potenti</strong>, restando entro ciò che può riprodurre. Questi movimenti spingono le gocce fuori dalla griglia. Riproducilo al 70–80 % del volume, altoparlante verso il basso, per 30–60 secondi, 2–3 volte.',
    intro: '<p>Tutti gli strumenti per espellere l’acqua — il comando Siri, i siti, le app — usano un tono basso, e 165 Hz è il numero che si vede di più. Niente magia: è un compromesso pratico tra «abbastanza basso da muovere tanta aria» e «abbastanza alto perché un minuscolo altoparlante riesca a riprodurlo».</p>',
    manual: {
        heading: 'Come riprodurre un tono a 165 Hz in sicurezza',
        steps: [
            { name: 'Togli la cover', text: 'Lascia respirare la griglia e uscire l’acqua.' },
            { name: 'Altoparlante verso il basso', text: 'La gravità fa metà del lavoro.' },
            { name: 'Volume al 70–80 %', text: 'Abbastanza per spingere l’acqua; il massimo non serve.' },
            { name: 'Riproduci 165 Hz per 30–60 secondi', text: 'Con un generatore di frequenze o un’app per espellere l’acqua.' },
            { name: 'Ripeti e asciuga', text: '2–3 cicli, asciugando le gocce tra uno e l’altro.' }
        ]
    },
    app: {
        heading: 'Toni per espellere l’acqua in Clear Wave',
        steps: [
            { name: 'Avvia l’espulsione dell’acqua', text: 'La sessione di Clear Wave usa schemi calibrati a bassa frequenza: non devi scegliere un numero.' },
            { name: 'Oppure imposta un tono a mano', text: 'Apri il generatore di frequenze e scorri fino alla frequenza voluta, per esempio 165 Hz.' },
            { name: 'Prova dopo la pulizia', text: 'Scorri le frequenze più alte per verificare che l’altoparlante suoni pulito su tutta la gamma.' }
        ]
    },
    sections: [
        { h2: 'Perché le basse frequenze muovono l’acqua', html: '<p>A parità di volume, una frequenza più bassa costringe la membrana a percorrere <em>più</em> strada a ogni ciclo. I suoni acuti la muovono appena. Un’escursione lunga funziona come un pistone che spinge l’aria — e l’acqua nella griglia — verso l’esterno. Ma troppo in basso (sotto i 100 Hz circa) un altoparlante grande come quello di un telefono non riproduce bene il tono e l’effetto cala. Per questo è popolare la fascia 150–200 Hz, in particolare 165 Hz.</p>' },
        { h2: '165 Hz è sicuro per l’altoparlante?', html: '<p>Sì, con un volume ragionevole. È un normale suono, nella gamma di un basso elettrico o di una voce maschile profonda. Non riprodurre alcun tono al 100 % per minuti e fermati se senti un forte sbattere.</p>' }
    ],
    faqs: [
        { q: '165 Hz è la frequenza migliore per togliere l’acqua?', a: 'È una buona scelta e la più diffusa. Qualsiasi valore tra 150 e 200 Hz funziona in modo simile sugli altoparlanti dei telefoni. Le sessioni che variano il tono aiutano a staccare le gocce ostinate.' },
        { q: 'Si sente un tono a 165 Hz?', a: 'Sì. È un ronzio basso ben udibile, più o meno un mi2.' },
        { q: 'Per quanto tempo riprodurre il suono a 165 Hz?', a: '30–60 secondi per ciclo, 2–3 cicli. Dopo una forte bagnatura, fino a 5.' }
    ],
    related: ['tone-generator-app-iphone', 'water-eject-shortcut', 'water-eject-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-water-eject-safe', 'how-many-times-run-water-eject']
},
{
    id: 'how-to-fix-blown-speaker',
    slug: 'altoparlante-bruciato-cosa-fare',
    navLabel: 'Altoparlante bruciato: cosa fare',
    keyword: 'altoparlante telefono bruciato',
    title: 'Altoparlante bruciato: come capirlo e cosa fare',
    description: 'Altoparlante bruciato o solo intasato da acqua e polvere? Verificalo in 2 minuti, prova ciò che funziona e capisci quando serve ripararlo.',
    h1: 'Altoparlante bruciato: prima verifica se lo è davvero',
    shot: 'test',
    quick: 'Prima escludi acqua e polvere: 2–3 cicli di espulsione, spazzola la griglia e riprova. Un altoparlante davvero <strong>bruciato</strong> (membrana strappata o bobina danneggiata) gracchia o ronza a ogni volume e non si ripara via software: va sostituito. Molti altoparlanti di telefono «bruciati» in realtà sono solo intasati.',
    intro: '<p>«Bruciato» vuol dire che l’altoparlante è danneggiato fisicamente, di solito per volume eccessivo, una caduta o corrosione. Ma acqua e sporco causano quasi gli stessi sintomi. Prima di pagare una riparazione, prenditi due minuti per escluderli.</p>',
    manual: {
        heading: 'Come provare e riparare un altoparlante «bruciato»',
        steps: [
            { name: 'Riproduci audio pulito al 50 %', text: 'Se al 50 % suona bene e distorce solo molto alto, probabilmente non è bruciato.' },
            { name: 'Espelli acqua e sporco', text: 'Altoparlante verso il basso, volume 70–80 %, tono basso per 30–60 secondi, 2–3 volte.' },
            { name: 'Spazzola la griglia', text: 'Con uno spazzolino morbido e asciutto, mai con aghi o spilli.' },
            { name: 'Scansiona i toni', text: 'Dai bassi agli acuti. Un altoparlante bruciato ronza su molte frequenze, non su una sola.' },
            { name: 'Confronta gli altoparlanti', text: 'Test sinistra/destra: se un lato è pulito e l’altro vibra a ogni volume, è quello danneggiato.' },
            { name: 'Sostituiscilo se confermato', text: 'Sostituire l’altoparlante di un telefono è una riparazione comune da Apple o da un buon centro assistenza.' }
        ]
    },
    app: {
        heading: 'Diagnosticare un altoparlante bruciato con Clear Wave',
        steps: [
            { name: 'Prima pulisci', text: 'Una sessione di espulsione esclude acqua e polvere.' },
            { name: 'Test stereo', text: 'Riproduci il canale sinistro e il destro separatamente e confrontali.' },
            { name: 'Scansione con il generatore', text: 'Scorri lentamente dai bassi agli acuti e annota dove ronza.' },
            { name: 'Misuratore di decibel', text: 'Confronta il volume tra gli altoparlanti: una grande differenza conferma il problema.' }
        ]
    },
    sections: [
        { h2: 'Segnali di un altoparlante bruciato', html: '<ul class="check-list"><li>Gracchia o fruscia anche a basso volume, non solo ad alto.</li><li>Un tintinnio costante sui bassi che non migliora dopo 24 ore di asciugatura.</li><li>Un altoparlante è muto mentre l’altro funziona.</li><li>Il problema è iniziato subito dopo una forte caduta.</li></ul>' },
        { h2: 'Falsi miti sulla riparazione', html: '<p><strong>«Una frequenza speciale ripara un altoparlante bruciato.»</strong> No. I toni spostano acqua e polvere, ma non riparano un cono strappato né una bobina bruciata. <strong>«Basta un po’ di colla o nastro.»</strong> Non su un telefono: gli altoparlanti sono moduli sigillati. Se è davvero bruciato, la soluzione è sostituirlo.</p>' }
    ],
    faqs: [
        { q: 'Un altoparlante bruciato può ripararsi da solo?', a: 'No. Ma un altoparlante che sembra bruciato a causa dell’acqua spesso torna normale asciugandosi o dopo qualche ciclo di espulsione.' },
        { q: 'Quanto costa sostituire l’altoparlante dell’iPhone?', a: 'Dipende dal modello e da dove lo ripari. Controlla i prezzi di riparazione di Apple o di un centro locale; AppleCare+ può coprire la riparazione.' },
        { q: 'Clear Wave ripara un altoparlante bruciato?', a: 'Nessuna app ripara un danno fisico. Clear Wave ti aiuta a escludere acqua e polvere e a capire quale altoparlante è danneggiato.' }
    ],
    related: ['iphone-speaker-crackling', 'left-right-speaker-test', 'fix-my-speaker'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'clean-iphone-speaker-dust',
    slug: 'pulire-altoparlante-iphone',
    navLabel: 'Pulire l’altoparlante dell’iPhone',
    keyword: 'pulire altoparlante iPhone',
    title: 'Come pulire l’altoparlante dell’iPhone (polvere e pelucchi)',
    description: 'Pulisci polvere e pelucchi dall’altoparlante dell’iPhone senza danni: spazzolino morbido, trucco del nastro adesivo e pulizia con il suono.',
    h1: 'Come pulire l’altoparlante dell’iPhone: polvere, pelucchi e sporco',
    shot: 'clear',
    quick: 'Spegni l’iPhone e spazzola delicatamente le griglie con uno <strong>spazzolino morbido e asciutto</strong>, in diagonale. Togli i pelucchi rimasti con nastro da carrozziere o gomma adesiva, premendo leggermente. Riaccendi e avvia una sessione di pulizia con il suono (basse frequenze) per scuotere via il resto. Mai aghi, liquidi o aria compressa.',
    intro: '<p>Pelucchi della tasca, polvere e trucco intasano a poco a poco i minuscoli fori dell’altoparlante. Siccome succede lentamente, si pensa che l’iPhone sia «diventato più basso con il tempo». Una pulizia accurata spesso restituisce buona parte di volume e chiarezza.</p>',
    manual: {
        heading: 'Pulire l’altoparlante dell’iPhone passo passo',
        steps: [
            { name: 'Spegni l’iPhone e togli la cover', text: 'È più sicuro e la griglia si vede meglio.' },
            { name: 'Spazzola la griglia', text: 'Con uno spazzolino morbido, pulito e asciutto. In diagonale, allontanandoti dai fori, non verso l’interno.' },
            { name: 'Togli i pelucchi con il nastro', text: 'Premi leggermente nastro da carrozziere o gomma adesiva sulla griglia e staccalo. Non spingerlo nei fori.' },
            { name: 'Pulisci la capsula', text: 'Ripeti con delicatezza sulla fessura in alto.' },
            { name: 'Avvia una pulizia con il suono', text: 'Riaccendi, altoparlante verso il basso, e riproduci un tono basso di pulizia per far uscire le particelle staccate.' }
        ]
    },
    app: {
        heading: 'Completa con la pulizia di Clear Wave',
        steps: [
            { name: 'Avvia la pulizia dell’altoparlante', text: 'La stessa sessione che espelle l’acqua stacca anche la polvere da membrana e griglia.' },
            { name: 'Usa la modalità Vibrazioni', text: 'L’opzione vibrazioni aiuta a far uscire le particelle dalla griglia.' },
            { name: 'Misura la differenza', text: 'Usa il misuratore di decibel prima e dopo (stessa canzone, stesso volume, stessa distanza).' }
        ]
    },
    sections: [
        { h2: 'Da non usare mai sull’altoparlante', html: '<ul class="check-list check-list--no"><li>Aghi, spilli o stuzzicadenti: possono bucare la griglia.</li><li>Alcol, acqua o spray detergenti nei fori.</li><li>Aria compressa: spinge lo sporco più dentro.</li><li>Un aspirapolvere appoggiato sulla griglia.</li></ul>' },
        { h2: 'Ogni quanto pulire', html: '<p>Per la maggior parte delle persone basta ogni qualche mese. Se il telefono vive in una tasca piena di pelucchi, va in spiaggia o in ambienti polverosi, una spazzolata e una sessione di pulizia sonora una volta al mese mantengono il volume costante.</p>' }
    ],
    faqs: [
        { q: 'Posso pulire l’altoparlante dell’iPhone con uno spazzolino?', a: 'Sì, morbido, pulito e asciutto. Spazzola con delicatezza e in diagonale.' },
        { q: 'Un’app di pulizia toglie la polvere?', a: 'Aiuta a staccare la polvere fine da membrana e griglia. Per i pelucchi compatti abbinala a uno spazzolino morbido.' },
        { q: 'Perché l’altoparlante è ancora basso dopo la pulizia?', a: 'Controlla Bluetooth e volume, poi fai un test stereo. Se un altoparlante è molto più basso, potrebbe servire una riparazione.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work', 'is-water-eject-safe', 'is-clear-wave-free']
}
];
