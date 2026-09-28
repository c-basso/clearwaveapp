// Guías 6–10.
module.exports = [
{
    id: 'iphone-speaker-crackling',
    slug: 'bocina-del-iphone-suena-rasposa',
    navLabel: 'Bocina del iPhone suena rasposa',
    keyword: 'la bocina del iPhone suena rasposa',
    title: 'La bocina del iPhone suena rasposa o distorsionada',
    description: '¿La bocina del iPhone suena rasposa, cruje o distorsiona? Descubre si es agua, polvo o una bocina reventada y arréglalo con limpieza por sonido y tonos.',
    h1: 'La bocina del iPhone suena rasposa: causa y solución',
    shot: 'tone',
    quick: 'Si cruje <strong>solo a volumen alto o después de mojarse</strong>, casi siempre es agua o suciedad en la membrana: haz 2–3 ciclos para expulsar agua y prueba con un barrido de tonos. Si cruje <strong>a cualquier volumen</strong>, o zumba en ciertas notas y no mejora tras 24 horas de secado, apunta a una bocina dañada (reventada) que necesita reparación.',
    intro: '<p>Los crujidos, chasquidos y zumbidos son el sonido de la membrana chocando con algo que no debería: una gota, una partícula o su propio borde dañado. El truco es averiguar qué es, y un tono de prueba limpio es la forma más rápida de oírlo con claridad.</p>',
    manual: {
        heading: 'Cómo arreglar una bocina del iPhone que suena rasposa',
        steps: [
            { name: 'Descarta el audio de origen', text: 'Reproduce otra canción o video de buena calidad. Algunos streams y videos ya suenan mal.' },
            { name: 'Baja el volumen', text: 'Si por debajo del ~70 % deja de crujir, algo extra está forzando la membrana: normalmente agua o suciedad.' },
            { name: 'Expulsa el agua y la suciedad', text: 'Bocina hacia abajo, volumen 70–80 %, tono grave para expulsar agua 30–60 segundos, 2–3 veces.' },
            { name: 'Cepilla la rejilla', text: 'Usa un cepillo de dientes suave y seco para sacar la pelusa de los orificios.' },
            { name: 'Haz un barrido de tonos', text: 'Reproduce tonos de graves a agudos. Un zumbido en una frecuencia concreta que sigue tras limpiar sugiere daño.' }
        ]
    },
    app: {
        heading: 'Diagnostica y arregla con Clear Wave',
        steps: [
            { name: 'Haz una sesión para expulsar agua', text: 'Primero saca el agua y afloja la suciedad: resuelve la mayoría de los crujidos tras lluvia o derrames.' },
            { name: 'Abre el generador de frecuencia', text: 'Desliza despacio arriba y abajo. Fíjate en qué tono aparece el crujido.' },
            { name: 'Aísla la bocina con la prueba estéreo', text: 'Activa un canal cada vez. Si solo cruje un lado, esa bocina es el problema.' },
            { name: 'Repite o acude a reparación', text: 'Si el crujido baja con cada sesión, sigue. Si nada cambia tras 24 horas de secado, probablemente esté dañada.' }
        ]
    },
    sections: [
        { h2: 'Agua vs. polvo vs. bocina reventada', html: '<div class="table-wrap"><table><thead><tr><th>Señal</th><th>Agua</th><th>Polvo / suciedad</th><th>Bocina reventada</th></tr></thead><tbody><tr><td>Empezó tras mojarse</td><td>✔</td><td></td><td>A veces</td></tr><tr><td>Mejora tras expulsar agua</td><td>✔</td><td>En parte</td><td>✘</td></tr><tr><td>Cruje a volumen bajo</td><td>Rara vez</td><td>Rara vez</td><td>✔</td></tr><tr><td>Zumba en frecuencias concretas</td><td>A veces</td><td>✔</td><td>✔</td></tr><tr><td>Mejora tras 24 h de secado</td><td>✔</td><td>✘</td><td>✘</td></tr></tbody></table></div>' },
        { h2: 'Controla el volumen', html: '<p>Usar el volumen máximo de forma continua calienta la bobina y empeora los crujidos. Para probar, quédate en 70–80 %. Si usas el iPhone como bocina de música a todo volumen cada día, el <a href="/es/guides/medidor-de-decibeles-iphone/">medidor de decibelios</a> te ayuda a vigilar los niveles.</p>' }
    ],
    faqs: [
        { q: '¿Por qué la bocina del iPhone cruje a volumen alto?', a: 'Agua o suciedad en la membrana, o la membrana llegando a su límite con graves fuertes. Límpiala primero; si solo cruje con graves fuertes, baja el volumen o ajusta el ecualizador.' },
        { q: '¿El agua puede hacer que la bocina suene rasposa?', a: 'Sí. Las gotas sobre la membrana vibran al moverse. Unos cuantos ciclos para expulsar agua suelen quitarlas.' },
        { q: 'Si cruje, ¿está reventada?', a: 'No necesariamente. Si sigue crujiendo a cualquier volumen tras limpiar y secar 24 horas, probablemente sí.' }
    ],
    related: ['how-to-fix-blown-speaker', 'tone-generator-app-iphone', 'iphone-speaker-muffled'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'is-water-eject-safe', 'what-frequency-removes-water-from-speaker']
},
{
    id: 'water-eject-shortcut',
    slug: 'atajo-water-eject-iphone',
    navLabel: 'Atajo Water Eject para iPhone',
    keyword: 'atajo para expulsar agua del iPhone',
    title: '¿El atajo Water Eject no funciona? La alternativa fácil',
    description: 'Cómo funciona el atajo de Siri Water Eject para iPhone, por qué deja de funcionar tras actualizar iOS y una alternativa de un toque que también prueba la bocina.',
    h1: 'Atajo Water Eject para iPhone: cómo funciona y qué usar en su lugar',
    shot: 'clear',
    quick: 'El atajo «Water Eject» es un atajo de Siri creado por la comunidad que reproduce un tono de 165 Hz. No es de Apple, hay que importarlo desde una web de terceros y puede dejar de funcionar tras una actualización de iOS. Una app como Clear Wave hace lo mismo con un toque, funciona sin internet y añade prueba estéreo, generador de tonos y medidor de decibelios.',
    intro: '<p>Si buscas «expulsar agua iPhone» encontrarás el famoso atajo. Es ingenioso, pero mucha gente se topa con «no se puede abrir este atajo», permisos que faltan o un tono que dura muy poco. Te explicamos cómo funciona, cómo resolver los problemas típicos y cuándo es más fácil una app.</p>',
    manual: {
        heading: 'Qué hacer si el atajo Water Eject no funciona',
        steps: [
            { name: 'Actualiza iOS y la app Atajos', text: 'Las versiones antiguas del atajo pueden fallar en iOS nuevos. Descarga la última versión del autor.' },
            { name: 'Vuelve a instalar el atajo', text: 'Borra el anterior en Atajos y agrégalo de nuevo desde la página del autor.' },
            { name: 'Concede los permisos que pida', text: 'La primera vez pide acceso a internet o para reproducir audio: toca Permitir.' },
            { name: 'Quita el modo silencio y sube el volumen', text: 'Algunas versiones suenan con el volumen del timbre.' },
            { name: 'Ejecútalo 2–3 veces con la bocina hacia abajo', text: 'Una sola vez suele ser poco si se mojó mucho.' }
        ]
    },
    app: {
        heading: 'La alternativa de un toque: Clear Wave',
        steps: [
            { name: 'Instala Clear Wave desde el App Store', text: 'Sin importar atajos ni permitir atajos no confiables.' },
            { name: 'Toca para iniciar la expulsión de agua', text: 'Bocina hacia abajo, volumen ~75 %.' },
            { name: 'Comprueba con la prueba estéreo', text: 'Revisa los canales izquierdo y derecho, algo que un atajo no puede hacer.' }
        ]
    },
    sections: [
        { h2: 'Atajo vs. app', html: '<div class="table-wrap"><table><thead><tr><th></th><th>Atajo Water Eject</th><th>App Clear Wave</th></tr></thead><tbody><tr><td>Creado por</td><td>Un usuario (no Apple)</td><td>Desarrollador independiente, revisado por el App Store</td></tr><tr><td>Instalación</td><td>Enlace de una web de terceros</td><td>App Store</td></tr><tr><td>Falla tras actualizar iOS</td><td>A veces</td><td>Se actualiza por el App Store</td></tr><tr><td>Progreso de la sesión</td><td>No</td><td>Sí</td></tr><tr><td>Prueba estéreo, tonos y decibelios</td><td>No</td><td>Sí</td></tr><tr><td>Precio</td><td>Gratis</td><td>Descarga gratis, Pro opcional</td></tr></tbody></table></div>' },
        { h2: '¿El iPhone tiene su propio expulsor de agua?', html: '<p>No. El Apple Watch tiene el Bloqueo de agua, que reproduce un tono para limpiar su altavoz, pero el iPhone no tiene nada equivalente. Por eso existen el atajo y las apps. Detalles: <a href="/es/faq/iphone-tiene-expulsar-agua/">¿el iPhone tiene función para expulsar agua?</a></p>' }
    ],
    faqs: [
        { q: '¿El atajo Water Eject es de Apple?', a: 'No. Es un atajo de la comunidad compartido en webs como RoutineHub. La única expulsión de agua integrada de Apple está en el Apple Watch (Bloqueo de agua).' },
        { q: '¿Por qué el atajo dice que no se puede abrir?', a: 'Normalmente porque se hizo para una versión anterior de iOS o el enlace caducó. Descarga la última versión o usa una app.' },
        { q: '¿Qué frecuencia usa el atajo Water Eject?', a: 'Las versiones populares reproducen un tono de unos 165 Hz.' }
    ],
    related: ['water-eject-app-iphone', '165-hz-water-eject-sound', 'get-water-out-of-iphone-speaker'],
    faqLinks: ['does-iphone-have-built-in-water-eject', 'what-frequency-removes-water-from-speaker', 'does-water-eject-work']
},
{
    id: '165-hz-water-eject-sound',
    slug: 'sonido-165-hz-para-sacar-agua',
    navLabel: 'Sonido de 165 Hz para sacar agua',
    keyword: 'sonido 165 Hz para sacar agua',
    title: 'Sonido de 165 Hz: la frecuencia para sacar agua',
    description: 'Por qué 165 Hz es la frecuencia más usada para sacar el agua del celular, cómo los tonos graves empujan el agua fuera de la bocina y cómo reproducirlo seguro.',
    h1: 'Sonido de 165 Hz: por qué esta frecuencia saca el agua de la bocina',
    shot: 'tone',
    quick: '165 Hz es un tono grave que hace que la membrana de una bocina pequeña de celular se mueva con <strong>recorridos largos y fuertes</strong> sin salirse de lo que puede reproducir. Esos movimientos empujan las gotas fuera de la rejilla. Reprodúcelo al 70–80 % con la bocina hacia abajo durante 30–60 segundos, 2–3 veces.',
    intro: '<p>Todas las herramientas para expulsar agua —el atajo de Siri, las webs, las apps— usan un tono grave, y 165 Hz es el número que más verás. No es magia: es un punto intermedio práctico entre «lo bastante grave para mover mucho aire» y «lo bastante agudo para que una bocina diminuta lo pueda reproducir».</p>',
    manual: {
        heading: 'Cómo reproducir un tono de 165 Hz de forma segura',
        steps: [
            { name: 'Quita la funda', text: 'Deja respirar la rejilla y que el agua pueda salir.' },
            { name: 'Bocina hacia abajo', text: 'La gravedad hace la mitad del trabajo.' },
            { name: 'Volumen al 70–80 %', text: 'Suficiente para empujar el agua; no hace falta el máximo.' },
            { name: 'Reproduce 165 Hz durante 30–60 segundos', text: 'Con un generador de tonos o una app para expulsar agua.' },
            { name: 'Repite y seca', text: '2–3 ciclos, secando las gotas entre uno y otro.' }
        ]
    },
    app: {
        heading: 'Tonos para expulsar agua en Clear Wave',
        steps: [
            { name: 'Haz la sesión para expulsar agua', text: 'La sesión de Clear Wave usa patrones de baja frecuencia ajustados: no tienes que elegir un número.' },
            { name: 'O fija un tono a mano', text: 'Abre el generador de frecuencia y desliza hasta la que quieras, por ejemplo 165 Hz.' },
            { name: 'Prueba después de limpiar', text: 'Recorre frecuencias más altas para confirmar que la bocina suena limpia en todo el rango.' }
        ]
    },
    sections: [
        { h2: 'Por qué las frecuencias bajas mueven el agua', html: '<p>A igual volumen, las frecuencias más bajas obligan a la membrana a recorrer <em>más</em> distancia en cada ciclo. Los pitidos agudos apenas la mueven. Un recorrido largo actúa como un pistón que empuja el aire —y el agua de la malla— fuera de la rejilla. Pero si bajas demasiado (por debajo de unos 100 Hz), una bocina del tamaño de un celular ya no reproduce bien el tono y el efecto cae. Por eso es popular el rango de 150–200 Hz, y en especial 165 Hz.</p>' },
        { h2: '¿Es seguro el tono de 165 Hz para mi bocina?', html: '<p>Sí, con un volumen sensato. Es un tono de audio común, del rango de un bajo eléctrico o una voz masculina grave. No reproduzcas ningún tono al 100 % durante minutos seguidos y detente si oyes un traqueteo fuerte.</p>' }
    ],
    faqs: [
        { q: '¿165 Hz es la mejor frecuencia para sacar agua?', a: 'Es una buena opción y la más usada. Cualquier valor entre 150 y 200 Hz funciona de forma parecida en bocinas de celular. Las sesiones que varían el tono ayudan a soltar gotas rebeldes.' },
        { q: '¿Se oye un tono de 165 Hz?', a: 'Sí. Es un zumbido grave claramente audible, más o menos la nota mi por debajo del do central.' },
        { q: '¿Cuánto tiempo reproduzco el sonido de 165 Hz?', a: '30–60 segundos por ciclo, 2–3 ciclos. Tras mojarse mucho, hasta 5.' }
    ],
    related: ['tone-generator-app-iphone', 'water-eject-shortcut', 'water-eject-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-water-eject-safe', 'how-many-times-run-water-eject']
},
{
    id: 'how-to-fix-blown-speaker',
    slug: 'bocina-reventada-que-hacer',
    navLabel: 'Bocina reventada: qué hacer',
    keyword: 'cómo arreglar una bocina reventada',
    title: 'Bocina reventada: cómo saber si lo está y qué hacer',
    description: '¿La bocina del celular está reventada o solo tapada con agua y polvo? Compruébalo en 2 minutos, prueba lo que funciona y sabe cuándo necesita reparación.',
    h1: 'Cómo arreglar una bocina reventada (y saber si de verdad lo está)',
    shot: 'test',
    quick: 'Primero descarta agua y polvo: haz 2–3 ciclos para expulsar agua, cepilla la rejilla y vuelve a probar. Una bocina de verdad <strong>reventada</strong> (membrana rota o bobina dañada) cruje o zumba a cualquier volumen y no se arregla por software: hay que cambiarla. Muchas bocinas «reventadas» de celular resultan estar solo tapadas.',
    intro: '<p>«Reventada» significa que el altavoz está dañado físicamente, normalmente por forzarlo, una caída o la corrosión. Pero el agua y la suciedad producen casi los mismos síntomas. Antes de pagar una reparación, dedica dos minutos a descartarlos.</p>',
    manual: {
        heading: 'Cómo probar y arreglar una bocina «reventada»',
        steps: [
            { name: 'Reproduce audio limpio al 50 %', text: 'Si suena bien al 50 % y solo distorsiona muy alto, probablemente no está reventada.' },
            { name: 'Expulsa el agua y la suciedad', text: 'Bocina hacia abajo, volumen 70–80 %, tono grave para expulsar agua 30–60 segundos, 2–3 veces.' },
            { name: 'Cepilla la rejilla', text: 'Con un cepillo suave y seco: nunca con alfileres ni agujas.' },
            { name: 'Haz un barrido de tonos', text: 'De graves a agudos. Una bocina reventada zumba en muchas frecuencias, no solo en una.' },
            { name: 'Compara las bocinas', text: 'Con una prueba izquierda/derecha: si un lado suena limpio y el otro vibra a cualquier volumen, ese está dañado.' },
            { name: 'Cámbiala si se confirma', text: 'Reemplazar la bocina de un celular es una reparación habitual en Apple o en un taller de confianza.' }
        ]
    },
    app: {
        heading: 'Diagnostica una bocina reventada con Clear Wave',
        steps: [
            { name: 'Limpia primero', text: 'Haz una sesión para expulsar agua y descarta el agua y el polvo.' },
            { name: 'Prueba estéreo', text: 'Reproduce el canal izquierdo y el derecho por separado y compáralos.' },
            { name: 'Barrido con el generador de frecuencia', text: 'Desliza despacio de grave a agudo y anota dónde zumba.' },
            { name: 'Medidor de decibelios', text: 'Compara el volumen entre bocinas: una gran diferencia confirma el problema.' }
        ]
    },
    sections: [
        { h2: 'Señales de una bocina reventada', html: '<ul class="check-list"><li>Crujidos o ruido a volumen bajo, no solo alto.</li><li>Un traqueteo constante en los graves que no mejora tras 24 horas de secado.</li><li>Una bocina no suena mientras la otra sí.</li><li>El problema empezó justo después de una caída fuerte.</li></ul>' },
        { h2: 'Mitos sobre arreglar bocinas reventadas', html: '<p><strong>«Una frecuencia especial arregla una bocina reventada».</strong> No. Los tonos mueven agua y polvo, pero no reparan un cono roto ni una bobina quemada. <strong>«Se arregla con pegamento o cinta».</strong> No en un celular: los altavoces son módulos sellados. Si de verdad está reventada, la solución es reemplazarla.</p>' }
    ],
    faqs: [
        { q: '¿Una bocina reventada se arregla sola?', a: 'No. Pero una bocina que suena reventada por culpa del agua suele recuperarse al secarse o tras unos ciclos para expulsar agua.' },
        { q: '¿Cuánto cuesta cambiar la bocina del iPhone?', a: 'Depende del modelo y del lugar. Consulta los precios de reparación de Apple o de un taller local; AppleCare+ puede cubrirlo.' },
        { q: '¿Clear Wave arregla una bocina reventada?', a: 'Ninguna app repara daño físico. Clear Wave te ayuda a descartar agua y polvo y a saber qué bocina está dañada.' }
    ],
    related: ['iphone-speaker-crackling', 'left-right-speaker-test', 'fix-my-speaker'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'clean-iphone-speaker-dust',
    slug: 'como-limpiar-bocina-iphone',
    navLabel: 'Cómo limpiar la bocina del iPhone',
    keyword: 'cómo limpiar la bocina del iPhone',
    title: 'Cómo limpiar la bocina del iPhone (polvo y pelusa)',
    description: 'Limpia el polvo y la pelusa de la bocina del iPhone sin dañarla: cepillo suave, truco de la cinta y limpiador de altavoz por sonido. Lo que nunca debes usar.',
    h1: 'Cómo limpiar la bocina del iPhone: polvo, pelusa y suciedad',
    shot: 'clear',
    quick: 'Apaga el iPhone y cepilla con suavidad las rejillas con un <strong>cepillo de dientes suave y seco</strong>, en ángulo. Retira la pelusa que quede con cinta de pintor o masilla adhesiva presionando levemente. Enciende el teléfono y haz una sesión de limpieza de bocina (sonido de baja frecuencia) para sacudir lo que quede. Nunca uses alfileres, líquidos ni aire comprimido.',
    intro: '<p>La pelusa del bolsillo, el polvo y el maquillaje van tapando poco a poco los diminutos orificios de la bocina. Como pasa despacio, mucha gente cree que su iPhone «se volvió más bajito con los años». Una limpieza cuidadosa suele devolver bastante volumen y claridad.</p>',
    manual: {
        heading: 'Cómo limpiar la bocina del iPhone paso a paso',
        steps: [
            { name: 'Apaga el iPhone y quita la funda', text: 'Es más seguro y ves mejor la rejilla.' },
            { name: 'Cepilla la rejilla', text: 'Con un cepillo de dientes suave, limpio y seco. Cepilla en ángulo, alejándote de los orificios, no hacia dentro.' },
            { name: 'Levanta la pelusa con cinta', text: 'Presiona con suavidad cinta de pintor o masilla adhesiva sobre la rejilla y retírala. No la metas en los orificios.' },
            { name: 'Limpia el auricular', text: 'Repite con cuidado en la ranura superior.' },
            { name: 'Haz una limpieza con sonido', text: 'Enciende el teléfono, pon la bocina hacia abajo y reproduce un tono grave de limpieza para sacudir las partículas sueltas.' }
        ]
    },
    app: {
        heading: 'Termina con el limpiador de bocina de Clear Wave',
        steps: [
            { name: 'Inicia la limpieza de bocina', text: 'La misma sesión que expulsa agua también afloja el polvo de la membrana y la malla.' },
            { name: 'Usa el modo Vibración', text: 'La opción de vibración de la sesión ayuda a sacar partículas de la rejilla.' },
            { name: 'Mide la diferencia', text: 'Usa el medidor de decibelios antes y después (misma canción, mismo volumen, misma distancia) para ver la mejora.' }
        ]
    },
    sections: [
        { h2: 'Nunca uses esto en la bocina', html: '<ul class="check-list check-list--no"><li>Alfileres, agujas o palillos: pueden perforar la malla.</li><li>Alcohol, agua o sprays de limpieza en los orificios.</li><li>Aire comprimido: puede meter la suciedad más adentro.</li><li>Una aspiradora pegada a la rejilla.</li></ul>' },
        { h2: 'Cada cuánto limpiar', html: '<p>Para la mayoría basta cada pocos meses. Si llevas el teléfono en un bolsillo con pelusa, vas a la playa o trabajas en un lugar con polvo, un cepillado rápido y una sesión de limpieza con sonido una vez al mes mantienen el volumen estable.</p>' }
    ],
    faqs: [
        { q: '¿Puedo limpiar la bocina del iPhone con un cepillo de dientes?', a: 'Sí, uno suave, limpio y seco. Cepilla con cuidado y en ángulo.' },
        { q: '¿Una app limpiadora de bocina quita el polvo?', a: 'Ayuda a aflojar el polvo fino de la membrana y la malla. Para pelusa compacta, combínala con un cepillo suave.' },
        { q: '¿Por qué la bocina sigue sonando baja tras limpiarla?', a: 'Revisa el Bluetooth y el volumen, y luego haz una prueba estéreo. Si una bocina suena mucho más baja, puede necesitar reparación.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work', 'is-water-eject-safe', 'is-clear-wave-free']
}
];
