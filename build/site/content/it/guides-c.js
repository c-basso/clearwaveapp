// Guide 11–14.
module.exports = [
{
    id: 'iphone-dropped-in-water',
    slug: 'iphone-caduto-in-acqua',
    navLabel: 'iPhone caduto in acqua',
    keyword: 'iPhone caduto in acqua cosa fare',
    title: 'iPhone caduto in acqua: cosa fare nei primi 30 minuti',
    description: 'iPhone caduto in acqua, in piscina o nel WC? Cosa fare subito: asciugatura secondo Apple, avviso liquido, togliere l’acqua dall’altoparlante e ricarica.',
    h1: 'iPhone caduto in acqua? Cosa fare nei primi 30 minuti',
    shot: 'clear',
    quick: 'Tiralo fuori, asciugalo e <strong>non ricaricarlo</strong>. Picchiettalo delicatamente sul palmo con il connettore verso il basso, lascialo in un luogo asciutto e ventilato e aspetta almeno 30 minuti prima di ricaricarlo (fino a 24 ore se compare un avviso di liquido). Per l’audio ovattato, riproduci un suono per espellere l’acqua con l’altoparlante verso il basso. <strong>Niente riso né phon.</strong>',
    intro: '<p>Gli iPhone recenti sono resistenti all’acqua (IP67 o IP68 a seconda del modello), quindi un tuffo breve di solito si supera. Ma resistente non vuol dire impermeabile, la protezione si riduce col tempo e i danni da liquidi non sono coperti dalla garanzia standard di Apple. Quello che fai nella prossima mezz’ora conta.</p>',
    manual: {
        heading: 'Cosa fare subito',
        steps: [
            { name: 'Tiralo fuori e spegnilo se si comporta in modo strano', text: 'Se lo schermo sfarfalla o l’iPhone fa cose strane, spegnilo.' },
            { name: 'Togli la cover', text: 'Asciuga tutto con un panno morbido senza pelucchi.' },
            { name: 'Sciacqua se non era acqua dolce', text: 'Indicazione di Apple per gli iPhone resistenti agli schizzi: se è entrato in contatto con qualcosa che non sia acqua (acqua di mare, bibite, acqua clorata della piscina), sciacqua la zona con acqua del rubinetto, poi asciuga.' },
            { name: 'Fai uscire l’acqua dal connettore', text: 'Picchietta delicatamente l’iPhone sulla mano con la porta di ricarica verso il basso.' },
            { name: 'Libera gli altoparlanti con il suono', text: 'Altoparlante verso il basso, volume 70–80 %, suono per l’acqua 30–60 secondi, 2–3 volte.' },
            { name: 'Asciuga prima di ricaricare', text: 'Mettilo in un luogo asciutto con un po’ di ricircolo d’aria. Aspetta almeno 30 minuti; se compare l’avviso di liquido, finché non sparisce (fino a 24 ore).' }
        ]
    },
    app: {
        heading: 'Recupera l’audio con Clear Wave',
        steps: [
            { name: 'Avvia l’espulsione dell’acqua', text: 'Prima con l’altoparlante inferiore verso il basso.' },
            { name: 'Capovolgi per la capsula', text: 'Seconda sessione con la parte superiore verso il basso.' },
            { name: 'Controlla entrambi i canali', text: 'Il test stereo conferma se sinistra e destra suonano ugualmente chiari.' },
            { name: 'Ripeti dopo l’asciugatura', text: 'Dopo un’ora, fai un’altra sessione: l’acqua può tornare verso la griglia.' }
        ]
    },
    sections: [
        { h2: '«Rilevato liquido nel connettore Lightning / USB-C»', html: '<p>iPhone XS, iPhone XR e modelli successivi ti avvisano se c’è liquido nella porta di ricarica. Se lo vedi, scollega il cavo, fai uscire l’acqua picchiettando e lascia asciugare. Usa l’esclusione d’emergenza per ricaricare solo in caso di vera urgenza. Apple precisa che puoi comunque usare un caricabatterie wireless mentre la porta si asciuga.</p>' },
        { h2: 'Cosa non fare', html: '<ul class="check-list check-list--no"><li><strong>Riso</strong>: Apple lo sconsiglia, polvere e chicchi possono entrare nell’iPhone.</li><li><strong>Phon, forno, termosifone</strong>: il calore danneggia batteria e guarnizioni.</li><li><strong>Cotton fioc o carta nella porta</strong>.</li><li><strong>Ricaricarlo bagnato</strong>.</li></ul>' }
    ],
    faqs: [
        { q: 'Quanto aspettare per ricaricare un iPhone bagnato?', a: 'Apple consiglia almeno 30 minuti, e fino a 24 ore se l’avviso di liquido continua a comparire.' },
        { q: 'Il mio iPhone è impermeabile?', a: 'Nessun iPhone è impermeabile. Dall’iPhone 7 in poi sono resistenti all’acqua (IP67 o IP68). La resistenza diminuisce con il tempo e l’usura.' },
        { q: 'Mi è caduto l’iPhone nel WC: cosa faccio?', a: 'Tiralo fuori, sciacqua brevemente l’esterno con acqua pulita del rubinetto, asciugalo, fai qualche ciclo di espulsione per l’altoparlante e lascialo asciugare prima di ricaricarlo.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    id: 'left-right-speaker-test',
    slug: 'test-altoparlante-destro-sinistro',
    navLabel: 'Test altoparlante destro e sinistro',
    keyword: 'test altoparlante destro sinistro',
    title: 'Test altoparlante destro e sinistro: iPhone e cuffie',
    description: 'Fai un test altoparlante destro e sinistro su iPhone, AirPods o cuffie in pochi secondi. Trova il canale basso, ovattato o muto e scopri cosa fare.',
    h1: 'Test altoparlante destro e sinistro: controlla i due canali in pochi secondi',
    shot: 'test',
    quick: 'Un test sinistra/destra (stereo) riproduce l’audio su <strong>un canale alla volta</strong>, così senti se un altoparlante è basso, ovattato o muto. Sull’iPhone i due canali sono la capsula auricolare e l’altoparlante inferiore. Se un lato suona peggio dopo essersi bagnato, avvia l’espulsione dell’acqua per quell’altoparlante e ripeti il test.',
    intro: '<p>Quando suonano entrambi gli altoparlanti, un problema su un lato passa facilmente inosservato. Separare i canali lo rende evidente e ti dice esattamente quale altoparlante pulire, asciugare o riparare. Vale anche per cuffie, AirPods e casse Bluetooth.</p>',
    manual: {
        heading: 'Come fare il test altoparlante destro e sinistro',
        steps: [
            { name: 'Disattiva l’audio mono', text: 'Impostazioni → Accessibilità → Audio e immagini → «Audio mono» deve essere disattivato, altrimenti i due canali suonano uguali.' },
            { name: 'Controlla il bilanciamento', text: 'Nello stesso menu il cursore del bilanciamento deve essere al centro tra S e D.' },
            { name: 'Riproduci solo il canale sinistro', text: 'Quale altoparlante suona, e suona pulito?' },
            { name: 'Riproduci solo il canale destro', text: 'Confronta volume e nitidezza con il sinistro.' },
            { name: 'Sistema il lato debole', text: 'Ovattato = acqua o polvere (pulisci). Muto o gracchiante = possibile guasto.' }
        ]
    },
    app: {
        heading: 'Test stereo in Clear Wave',
        steps: [
            { name: 'Apri il test stereo', text: 'Vedi un comando per il canale sinistro e uno per il destro.' },
            { name: 'Tocca On a sinistra', text: 'Il suono deve uscire da un solo lato.' },
            { name: 'Tocca On a destra', text: 'Confrontalo con il sinistro.' },
            { name: 'Pulisci il lato debole', text: 'Avvia l’espulsione dell’acqua con quell’altoparlante verso il basso e riprova.' }
        ]
    },
    sections: [
        { h2: 'Quale altoparlante dell’iPhone è il sinistro e quale il destro?', html: '<p>In verticale, iOS distribuisce lo stereo tra l’<strong>altoparlante inferiore</strong> e la <strong>capsula auricolare</strong>. Ruotando in orizzontale, iOS scambia i canali perché sinistra e destra corrispondano a come tieni l’iPhone. Fai il test nell’orientamento in cui guardi di solito i video.</p>' },
        { h2: 'Provare AirPods e cuffie', html: '<p>Collega le cuffie e fai lo stesso test. Se un AirPod è più basso, pulisci con delicatezza la sua griglia con uno spazzolino morbido e asciutto e controlla il bilanciamento in Accessibilità. L’umidità nelle cuffie sigillate può richiedere tempo per asciugarsi: vedi <a href="/it/faq/togliere-acqua-airpods/">l’espulsione dell’acqua funziona sugli AirPods?</a></p>' }
    ],
    faqs: [
        { q: 'Perché il mio iPhone suona da un solo altoparlante?', a: 'Verifica che l’audio mono sia disattivato e il bilanciamento al centro. Poi fai un test stereo: se un lato è ovattato, potrebbe avere acqua o polvere.' },
        { q: 'Posso provare l’AirPod sinistro e destro?', a: 'Sì. Collegali e avvia un test stereo: ogni auricolare deve suonare solo il proprio canale.' },
        { q: 'Perché la capsula è più bassa dell’altoparlante inferiore?', a: 'È più piccola e pensata per le chiamate, quindi un po’ più bassa per progetto. Una grande differenza o un suono ovattato indicano pelucchi o acqua nella sua griglia.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    id: 'decibel-meter-app-iphone',
    slug: 'misurare-decibel-iphone',
    navLabel: 'Misurare i decibel con l’iPhone',
    keyword: 'misurare decibel iPhone',
    title: 'Misurare i decibel con l’iPhone: fonometro in dB',
    description: 'Trasforma l’iPhone in fonometro: misura il rumore in dB, controlla il volume dell’altoparlante e i livelli sicuri. Incluso in Clear Wave.',
    h1: 'Misurare i decibel con l’iPhone: rumore e volume dell’altoparlante',
    shot: 'meter',
    quick: 'Un’app fonometro (misuratore di decibel) usa il microfono dell’iPhone per stimare quanto è forte un suono. Usala per confrontare l’altoparlante prima e dopo la pulizia, controllare il rumore di una stanza o restare sotto gli ~85 dB, oltre i quali un’esposizione prolungata danneggia l’udito. Le misure del telefono sono approssimative: perfette per confrontare, non per misure certificate.',
    intro: '<p>Un fonometro trasforma «mi sembra più basso» in un numero. È utile dopo aver tolto acqua o polvere, quando vuoi la prova che l’altoparlante è tornato normale, e per domande quotidiane come «quanto è rumoroso questo locale?» o «il tablet di mio figlio è troppo alto?».</p>',
    manual: {
        heading: 'Come misurare il volume dell’altoparlante con un fonometro',
        steps: [
            { name: 'Scegli un suono di riferimento', text: 'La stessa canzone o lo stesso tono di prova allo stesso volume ogni volta.' },
            { name: 'Fissa la distanza', text: 'Tieni un secondo dispositivo con il fonometro sempre alla stessa distanza (es. 30 cm) dall’altoparlante, oppure misura la stanza con l’iPhone stesso.' },
            { name: 'Misura in silenzio', text: 'Il rumore di fondo falsa la lettura.' },
            { name: 'Annota la media', text: 'Osserva 10–15 secondi e annota il valore tipico.' },
            { name: 'Confronta prima e dopo', text: 'Dopo la pulizia, misura di nuovo con le stesse impostazioni.' }
        ]
    },
    app: {
        heading: 'Il misuratore di decibel di Clear Wave',
        steps: [
            { name: 'Apri DB Meter', text: 'Consenti l’accesso al microfono quando richiesto: il fonometro ne ha bisogno per ascoltare.' },
            { name: 'Avvia la misurazione', text: 'L’indicatore mostra il livello attuale in dB con un’etichetta come «Conversazione normale».' },
            { name: 'Interrompi la misurazione', text: 'Tocca Stop Monitoring. Le misure vengono elaborate sul dispositivo.' }
        ]
    },
    sections: [
        { h2: 'Livelli sonori comuni', html: '<div class="table-wrap"><table><thead><tr><th>Suono</th><th>Livello circa</th></tr></thead><tbody><tr><td>Stanza silenziosa, sussurro</td><td>30 dB</td></tr><tr><td>Conversazione normale</td><td>50–60 dB</td></tr><tr><td>Strada trafficata, aspirapolvere</td><td>70–80 dB</td></tr><tr><td>Soglia di rischio per l’udito con esposizione lunga (8 h)</td><td>85 dB</td></tr><tr><td>Concerto, discoteca</td><td>100–110 dB</td></tr></tbody></table></div><p>Ogni +10 dB viene percepito circa come il doppio del volume.</p>' },
        { h2: 'Quanto è preciso un fonometro su iPhone?', html: '<p>I microfoni dell’iPhone sono buoni ma non tarati come uno strumento da laboratorio e sono ottimizzati per la voce. Aspettati letture entro pochi dB per i suoni di tutti i giorni: ideale per confronti prima/dopo con lo stesso telefono. Per misure legali o professionali serve un fonometro certificato.</p>' }
    ],
    faqs: [
        { q: 'L’iPhone può misurare i decibel?', a: 'Sì, con un’app fonometro che usa il microfono. Anche Apple Watch e l’app Salute registrano il livello di rumore ambientale.' },
        { q: 'Qual è un livello di decibel sicuro?', a: 'Un’esposizione prolungata oltre gli 85 dB circa per ore può danneggiare l’udito. Brevi esposizioni a suoni più forti sono meno rischiose.' },
        { q: 'Il fonometro registra l’audio?', a: 'Il fonometro di Clear Wave ascolta per misurare il livello sul tuo dispositivo. Secondo l’App Store, nessun dato è collegato alla tua identità.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'tone-generator-app-iphone',
    slug: 'generatore-di-frequenze-iphone',
    navLabel: 'Generatore di frequenze per iPhone',
    keyword: 'generatore di frequenze iPhone',
    title: 'Generatore di frequenze per iPhone: qualsiasi tono in Hz',
    description: 'Riproduci qualsiasi tono di prova su iPhone: scegli la frequenza in Hz, scorri dai bassi agli acuti o riproduci 165 Hz contro l’acqua.',
    h1: 'Generatore di frequenze per iPhone: prova l’altoparlante con qualsiasi tono',
    shot: 'tone',
    quick: 'Un generatore di frequenze riproduce un’onda sinusoidale pura alla frequenza scelta. <strong>Scorri lentamente dai bassi agli acuti</strong> per sentire dove un altoparlante vibra, ronza o cala: un modo rapido per controllare l’altoparlante del telefono dopo l’acqua. Puoi anche impostare un tono basso (≈165 Hz) che aiuta a espellere l’acqua.',
    intro: '<p>La musica nasconde i difetti; un solo tono puro li rivela. Per questo i tecnici del suono usano i generatori di frequenze, ed è uno degli strumenti migliori per verificare che l’altoparlante dell’iPhone sia davvero libero dopo l’espulsione dell’acqua.</p>',
    manual: {
        heading: 'Provare un altoparlante con un generatore di frequenze',
        steps: [
            { name: 'Volume al 50–70 %', text: 'Abbastanza per sentire i difetti senza che tutto distorca.' },
            { name: 'Parti dai bassi', text: 'Intorno a 100–200 Hz. Gli altoparlanti piccoli riproducono male i bassi profondi, quindi i toni molto bassi suonano deboli: è normale.' },
            { name: 'Sali lentamente', text: 'Attraversa i medi (500–4000 Hz), dove sta la voce. Ascolta ronzii e vibrazioni.' },
            { name: 'Controlla gli acuti', text: 'Prosegui fino a 10.000 Hz e oltre a basso volume. Acuti mancanti possono indicare acqua o polvere sulla griglia.' },
            { name: 'Annota le frequenze problematiche', text: 'Una vibrazione su una sola nota fa pensare a sporco; un ronzio ovunque a un guasto.' }
        ]
    },
    app: {
        heading: 'Il generatore di frequenze di Clear Wave',
        steps: [
            { name: 'Apri Tone Generator', text: 'La frequenza attuale è al centro dello schermo (per esempio 1028 Hz).' },
            { name: 'Scorri su o giù', text: 'Scorri per alzare o abbassare la frequenza e percorrere la gamma.' },
            { name: 'Ferma il tono', text: 'Tocca Stop Tone. Se senti vibrazioni, avvia l’espulsione dell’acqua e riprova.' }
        ]
    },
    sections: [
        { h2: 'Frequenze di prova utili', html: '<div class="table-wrap"><table><thead><tr><th>Frequenza</th><th>Uso</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Tono per espellere l’acqua dagli altoparlanti dei telefoni</td></tr><tr><td>440 Hz</td><td>La del diapason (la3)</td></tr><tr><td>1000 Hz</td><td>Tono di prova standard</td></tr><tr><td>2000–4000 Hz</td><td>Zona di intelligibilità della voce: qui si sente l’audio ovattato</td></tr><tr><td>10.000 Hz e oltre</td><td>Controllo degli acuti; la sensibilità dell’orecchio cala con l’età</td></tr></tbody></table></div>' },
        { h2: 'Proteggi l’udito', html: '<p>I toni puri sembrano più forti e stancano più della musica. Mantieni un volume moderato, non avvicinare l’altoparlante all’orecchio e fai delle pause.</p>' }
    ],
    faqs: [
        { q: 'A cosa serve un generatore di frequenze?', a: 'A provare altoparlanti e cuffie, trovare vibrazioni, verificare il proprio udito, accordare strumenti e riprodurre toni bassi che aiutano a espellere l’acqua dall’altoparlante del telefono.' },
        { q: 'L’iPhone riproduce frequenze molto basse?', a: 'Sì, ma gli altoparlanti piccoli rendono male i bassi profondi: i toni sotto i 150 Hz circa suonano deboli.' },
        { q: 'Il generatore di frequenze di Clear Wave è gratis?', a: 'Clear Wave si scarica gratis. Alcuni strumenti avanzati fanno parte dell’abbonamento facoltativo, che include una prova gratuita.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
