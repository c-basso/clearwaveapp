// Home (IT). Ricerche principali: togliere l'acqua dal telefono, togliere acqua altoparlante iPhone, pulire altoparlante iPhone.
module.exports = {
    title: 'Togliere l’acqua dall’altoparlante dell’iPhone – Clear Wave',
    description: 'Acqua nell’altoparlante dell’iPhone? Clear Wave espelle acqua e polvere con onde sonore in un tocco e verifica l’audio. Gratis su iPhone e iPad.',
    hero: {
        h1Lead: 'Togli l’acqua',
        h1Rest: 'dall’altoparlante del tuo iPhone',
        sub: 'Onde sonore calibrate spingono fuori acqua e polvere intrappolate nell’altoparlante con un tocco. Poi test stereo, generatore di frequenze e misuratore di decibel confermano che l’audio è tornato normale.',
        bullets: ['Gratis', 'Funziona offline', 'iPhone e iPad', 'iOS 17.1+']
    },
    // Quick answer under the hero (featured snippet / AI Overview target, see gsc-analysis.md §6.7).
    answer: {
        id: "togliere-acqua-con-il-suono",
        question: "Come togliere l’acqua dall’altoparlante dell’iPhone con il suono?",
        h2: "Come togliere l’acqua dall’altoparlante dell’iPhone con il suono",
        text: "Per togliere l’acqua dall’altoparlante dell’iPhone, imposta il volume al 70–80%, rivolgi la griglia verso il basso e riproduci un tono basso di circa 165 Hz per 30–60 secondi. La membrana vibra e spinge fuori acqua e polvere attraverso la griglia. Ripeti 2–3 volte. Per polvere e pelucchi incastrati usa uno spazzolino morbido e asciutto.",
        steps: [
            "<strong>Volume al 70–80%</strong>, senza cover, modalità silenziosa disattivata.",
            "<strong>Altoparlante rivolto verso il basso</strong> perché l’acqua scoli.",
            "<strong>Tono da 165 Hz per 30–60 s</strong> — o un tocco in Clear Wave.",
            "<strong>Ripeti 2–3 volte</strong>, poi prova l’altoparlante destro e sinistro."
        ],
        more: [
            { href: "guides/togliere-acqua-altoparlante-iphone/", label: "Togliere l’acqua dall’altoparlante: guida" },
            { href: "guides/pulire-altoparlante-iphone/", label: "Pulire l’altoparlante dalla polvere" }
        ]
    },
    download: {
        h2: 'Il tuo iPhone suona come sott’acqua?',
        text: 'Non aspettare ore che si asciughi da solo. Scarica Clear Wave, rivolgi l’altoparlante verso il basso e tocca una volta.',
        facts: [
            { k: '1 tocco', v: 'per avviare l’espulsione dell’acqua' },
            { k: '4', v: 'strumenti per l’altoparlante' },
            { k: '31', v: 'lingue, italiano compreso' },
            { k: '27 MB', v: 'download leggero' }
        ]
    },
    screenshots: {
        h2: 'Clear Wave in azione',
        sub: 'Screenshot reali dalla pagina App Store.'
    },
    how: {
        h2: 'Come togliere l’acqua dall’altoparlante dell’iPhone',
        sub: 'I quattro passaggi della descrizione dell’app: niente riso, niente phon, niente cotton fioc.',
        steps: [
            { name: 'Imposta un volume comodo', text: 'Circa 70–80 %. Basta per far muovere la membrana, non serve il massimo a lungo. Togli la cover.' },
            { name: 'Altoparlante verso il basso', text: 'Tieni l’iPhone con il bordo inferiore verso il pavimento, così la gravità aiuta l’acqua a uscire.' },
            { name: 'Avvia l’espulsione dell’acqua', text: 'Tocca il cerchio. Il suono a bassa frequenza fa sì che la membrana spinga le gocce fuori dalla griglia.' },
            { name: 'Prova e ripeti se serve', text: 'Controlla sinistra e destra con il test stereo. Molto bagnato? Fai 2–3 sessioni e lascialo asciugare all’aria.' }
        ],
        whyTitle: 'Perché il suono funziona',
        why: 'Un altoparlante è una piccola pompa. Alle basse frequenze la membrana fa escursioni lunghe e spinge l’aria — e l’acqua — fuori dagli stessi fori da cui è entrata. È lo stesso principio del Blocco acqua di Apple Watch, che l’iPhone non ha.',
        tools: [
            { key: 'clear', name: 'Espulsione acqua e pulizia', text: 'Sessioni sonore che tolgono l’acqua e staccano la polvere dopo pioggia, doccia, schizzi o piscina.' },
            { key: 'test', name: 'Prova audio stereo', text: 'Canale sinistro e destro separati per trovare l’altoparlante ovattato o muto.' },
            { key: 'tone', name: 'Generatore di frequenze', text: 'Qualsiasi frequenza con uno scorrimento. Dai bassi agli acuti per scovare vibrazioni e buchi.' },
            { key: 'meter', name: 'Misuratore di decibel', text: 'Misura il volume prima e dopo la pulizia e tieni d’occhio i livelli d’ascolto sicuri.' }
        ]
    },
    guides: {
        h2: 'Guide: acqua nell’altoparlante e audio che non va',
        sub: 'Risposte a ciò che si cerca quando l’altoparlante dell’iPhone non suona bene, con il metodo manuale e la versione in un tocco.'
    },
    faq: { h2: 'Domande frequenti' },
    cta: { h2: 'Suono chiaro nel prossimo minuto.' }
};
