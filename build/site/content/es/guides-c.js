// Guías 11–14.
module.exports = [
{
    id: 'iphone-dropped-in-water',
    slug: 'se-me-cayo-el-iphone-al-agua',
    navLabel: 'Se me cayó el iPhone al agua',
    keyword: 'se me cayó el iPhone al agua qué hago',
    title: 'Se me cayó el iPhone al agua: qué hacer en 30 minutos',
    description: '¿Se te cayó el iPhone al agua, la alberca o el inodoro? Qué hacer ya: secado según Apple, aviso de líquido, sacar agua de la bocina y cuándo cargarlo.',
    h1: '¿Se te cayó el iPhone al agua? Haz esto en los primeros 30 minutos',
    shot: 'clear',
    quick: 'Sácalo, sécalo y <strong>no lo cargues</strong>. Dale golpecitos suaves contra la palma con el conector hacia abajo, déjalo en un lugar seco y ventilado y espera al menos 30 minutos antes de cargarlo (hasta 24 horas si aparece un aviso de líquido). Para el sonido apagado, reproduce un tono para expulsar agua con la bocina hacia abajo. <strong>Nada de arroz ni secadora.</strong>',
    intro: '<p>Los iPhone modernos son resistentes al agua (IP67 o IP68 según el modelo), así que un chapuzón rápido suele sobrevivirse. Pero resistente no es sumergible, esa resistencia se desgasta con el tiempo y los daños por líquido no los cubre la garantía estándar de Apple. Lo que hagas en la próxima media hora importa.</p>',
    manual: {
        heading: 'Qué hacer ahora mismo',
        steps: [
            { name: 'Sácalo y apágalo si se comporta raro', text: 'Si la pantalla parpadea o el teléfono hace cosas extrañas, apágalo.' },
            { name: 'Quita la funda', text: 'Seca todo con un paño suave sin pelusa.' },
            { name: 'Enjuágalo si no era agua dulce', text: 'La indicación de Apple para iPhone resistentes a salpicaduras: si le cae algo que no sea agua (agua salada, refresco, agua con cloro de la alberca), enjuaga la zona con agua de la llave, luego sécalo.' },
            { name: 'Saca el agua del conector', text: 'Da golpecitos suaves contra la mano con el puerto de carga hacia abajo.' },
            { name: 'Limpia las bocinas con sonido', text: 'Bocina hacia abajo, volumen 70–80 %, tono para expulsar agua 30–60 segundos, 2–3 veces.' },
            { name: 'Sécalo antes de cargar', text: 'Déjalo en un lugar seco con algo de ventilación. Espera al menos 30 minutos; si aparece el aviso de líquido, hasta que desaparezca (hasta 24 horas).' }
        ]
    },
    app: {
        heading: 'Recupera el sonido con Clear Wave',
        steps: [
            { name: 'Haz una sesión para expulsar agua', text: 'Primero con la bocina inferior hacia abajo.' },
            { name: 'Voltéalo para el auricular', text: 'Otra sesión con la parte superior hacia abajo.' },
            { name: 'Revisa ambos canales', text: 'La prueba estéreo confirma si izquierda y derecha suenan igual de claras.' },
            { name: 'Repite tras secar', text: 'Al cabo de una hora, haz una sesión más: el agua puede volver a la rejilla.' }
        ]
    },
    sections: [
        { h2: '«Se detectó líquido en el conector Lightning / USB-C»', html: '<p>Los iPhone XS, iPhone XR y posteriores avisan si hay líquido en el puerto de carga. Si lo ves, desconecta el cable, saca el agua con golpecitos y deja secar el teléfono. No uses la anulación de emergencia para cargarlo salvo que sea realmente urgente. Apple indica que puedes seguir cargando con un cargador inalámbrico mientras se seca el puerto.</p>' },
        { h2: 'Lo que no debes hacer', html: '<ul class="check-list check-list--no"><li><strong>Arroz</strong>: Apple dice que no; el polvo y los granos pueden entrar en el teléfono.</li><li><strong>Secadora, horno o radiador</strong>: el calor daña la batería y los sellos.</li><li><strong>Hisopos o papel en el puerto</strong>.</li><li><strong>Cargarlo mojado</strong>.</li></ul>' }
    ],
    faqs: [
        { q: '¿Cuánto espero para cargar el iPhone después de mojarse?', a: 'Apple recomienda esperar al menos 30 minutos, y hasta 24 horas si el aviso de líquido sigue apareciendo.' },
        { q: '¿Mi iPhone es a prueba de agua?', a: 'Ningún iPhone es sumergible. Del iPhone 7 en adelante son resistentes al agua (IP67 o IP68). La resistencia disminuye con el tiempo y el uso.' },
        { q: 'Se me cayó el iPhone al inodoro, ¿qué hago?', a: 'Sácalo, enjuaga brevemente el exterior con agua limpia de la llave, sécalo, haz varios ciclos para expulsar agua de la bocina y déjalo secar antes de cargarlo.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    id: 'left-right-speaker-test',
    slug: 'prueba-altavoz-izquierdo-derecho',
    navLabel: 'Prueba altavoz izquierdo y derecho',
    keyword: 'prueba de altavoz izquierdo y derecho',
    title: 'Prueba de altavoz izquierdo y derecho: iPhone y audífonos',
    description: 'Haz una prueba de altavoz izquierdo y derecho en iPhone, AirPods o audífonos en segundos. Encuentra el canal bajo, apagado o que no suena y qué hacer.',
    h1: 'Prueba de altavoz izquierdo y derecho: revisa ambos canales en segundos',
    shot: 'test',
    quick: 'Una prueba izquierda/derecha (estéreo) reproduce sonido por <strong>un canal a la vez</strong> para que oigas si alguna bocina suena baja, apagada o no suena. En el iPhone, el auricular y la bocina inferior son los dos canales. Si un lado suena peor tras mojarse, haz una sesión para expulsar agua en esa bocina y vuelve a probar.',
    intro: '<p>Con las dos bocinas sonando, es fácil no notar un problema en un lado. Separar los canales lo hace evidente y te dice exactamente qué bocina limpiar, secar o reparar. También sirve para audífonos, AirPods y bocinas Bluetooth.</p>',
    manual: {
        heading: 'Cómo hacer la prueba de altavoz izquierdo y derecho',
        steps: [
            { name: 'Desactiva el audio mono', text: 'Configuración → Accesibilidad → Audio/Visual → «Audio mono» debe estar desactivado; si no, ambos canales suenan igual.' },
            { name: 'Revisa el balance', text: 'En el mismo menú, el control de balance debe estar centrado entre L y R.' },
            { name: 'Reproduce solo el canal izquierdo', text: '¿Qué bocina suena y suena limpia?' },
            { name: 'Reproduce solo el canal derecho', text: 'Compara volumen y claridad con el izquierdo.' },
            { name: 'Arregla el lado débil', text: 'Apagado = agua o polvo (límpialo). Silencio o crujidos = posible avería.' }
        ]
    },
    app: {
        heading: 'Prueba estéreo en Clear Wave',
        steps: [
            { name: 'Abre la prueba estéreo', text: 'Verás un control para el canal izquierdo y otro para el derecho.' },
            { name: 'Toca On en el izquierdo', text: 'El sonido debe salir solo por un lado.' },
            { name: 'Toca On en el derecho', text: 'Compáralo con el izquierdo.' },
            { name: 'Limpia el lado débil', text: 'Haz una sesión para expulsar agua con esa bocina hacia abajo y vuelve a probar.' }
        ]
    },
    sections: [
        { h2: '¿Qué bocina del iPhone es la izquierda y cuál la derecha?', html: '<p>En vertical, iOS reparte el estéreo entre la <strong>bocina inferior</strong> y el <strong>auricular</strong>. Al girar a horizontal, iOS intercambia los canales para que izquierda y derecha coincidan con la forma en que sostienes el teléfono. Haz la prueba en la orientación en la que sueles ver videos.</p>' },
        { h2: 'Probar AirPods y audífonos', html: '<p>Conecta los audífonos y haz la misma prueba. Si un AirPod suena más bajo, limpia su malla con cuidado con un cepillo suave y seco y revisa el balance en Accesibilidad. La humedad en audífonos sellados puede tardar en secarse; mira <a href="/es/faq/sacar-agua-de-airpods/">¿funciona expulsar agua en AirPods?</a></p>' }
    ],
    faqs: [
        { q: '¿Por qué mi iPhone solo suena por una bocina?', a: 'Comprueba que el audio mono esté desactivado y el balance centrado. Luego haz una prueba estéreo; si un lado suena apagado, puede tener agua o polvo.' },
        { q: '¿Puedo probar el AirPod izquierdo y el derecho?', a: 'Sí. Conéctalos y haz una prueba estéreo: cada auricular debe sonar solo con su canal.' },
        { q: '¿Por qué el auricular suena más bajo que la bocina inferior?', a: 'Es más pequeño y está pensado para llamadas, así que suena un poco más bajo por diseño. Una gran diferencia o un sonido apagado indican pelusa o agua en su rejilla.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    id: 'decibel-meter-app-iphone',
    slug: 'medidor-de-decibeles-iphone',
    navLabel: 'Medidor de decibeles para iPhone',
    keyword: 'medidor de decibeles para iPhone',
    title: 'Medidor de decibeles para iPhone: mide el ruido en dB',
    description: 'Usa tu iPhone como medidor de decibeles: mide el ruido en dB, comprueba el volumen de la bocina y conoce los niveles seguros. Sonómetro incluido en Clear Wave.',
    h1: 'Medidor de decibeles para iPhone: mide el ruido y el volumen de la bocina',
    shot: 'meter',
    quick: 'Una app medidora de decibeles (sonómetro) usa el micrófono del iPhone para estimar qué tan fuerte es un sonido. Úsala para comparar la bocina antes y después de limpiarla, revisar el ruido de una habitación o no pasar de ~85 dB, el nivel en que la exposición prolongada daña el oído. Los medidores del celular son aproximados: ideales para comparar, no para mediciones certificadas.',
    intro: '<p>Un medidor de decibeles convierte «creo que suena más bajo» en un número. Es útil después de limpiar agua o polvo, cuando quieres comprobar que la bocina volvió a la normalidad, y para dudas cotidianas como «¿qué tan ruidoso es este bar?» o «¿la tablet de mi hijo suena demasiado fuerte?».</p>',
    manual: {
        heading: 'Cómo medir el volumen de la bocina con un medidor de decibeles',
        steps: [
            { name: 'Elige un sonido de referencia', text: 'La misma canción o tono de prueba al mismo volumen cada vez.' },
            { name: 'Fija la distancia', text: 'Pon otro dispositivo con el medidor a la misma distancia (por ejemplo, 30 cm) de la bocina, o mide la habitación con el propio teléfono.' },
            { name: 'Mide en silencio', text: 'El ruido de fondo altera la lectura.' },
            { name: 'Anota el promedio', text: 'Observa la lectura 10–15 segundos y anota el valor típico.' },
            { name: 'Compara antes y después', text: 'Tras limpiar, mide otra vez con la misma configuración.' }
        ]
    },
    app: {
        heading: 'Usa el medidor de decibeles de Clear Wave',
        steps: [
            { name: 'Abre DB Meter', text: 'Permite el acceso al micrófono cuando lo pida: el medidor lo necesita para escuchar.' },
            { name: 'Empieza a medir', text: 'El indicador muestra el nivel actual en dB con una etiqueta como «Conversación normal».' },
            { name: 'Deja de medir', text: 'Toca Stop Monitoring al terminar. Las lecturas se procesan en tu dispositivo.' }
        ]
    },
    sections: [
        { h2: 'Niveles de sonido comunes', html: '<div class="table-wrap"><table><thead><tr><th>Sonido</th><th>Nivel aprox.</th></tr></thead><tbody><tr><td>Habitación silenciosa, susurro</td><td>30 dB</td></tr><tr><td>Conversación normal</td><td>50–60 dB</td></tr><tr><td>Calle con tráfico, aspiradora</td><td>70–80 dB</td></tr><tr><td>Nivel de riesgo para el oído con exposición larga (8 h)</td><td>85 dB</td></tr><tr><td>Concierto, antro</td><td>100–110 dB</td></tr></tbody></table></div><p>Cada +10 dB se percibe aproximadamente como el doble de fuerte.</p>' },
        { h2: '¿Qué tan preciso es un medidor de decibeles en iPhone?', html: '<p>Los micrófonos del iPhone son buenos, pero no están calibrados como un equipo de laboratorio y están ajustados para la voz. Espera lecturas con unos pocos dB de diferencia en sonidos cotidianos: perfecto para comparar antes y después con el mismo teléfono. Para mediciones legales o laborales, usa un sonómetro certificado.</p>' }
    ],
    faqs: [
        { q: '¿El iPhone puede medir decibeles?', a: 'Sí, con una app medidora que usa el micrófono. El Apple Watch y la app Salud también registran el nivel de ruido del entorno.' },
        { q: '¿Qué nivel de decibeles es seguro?', a: 'La exposición prolongada por encima de unos 85 dB durante horas puede dañar el oído. La exposición breve a sonidos más fuertes es menos riesgosa.' },
        { q: '¿El medidor graba audio?', a: 'El medidor de Clear Wave escucha para medir el volumen en tu dispositivo. Según el App Store, la app no recopila datos asociados a tu identidad.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'tone-generator-app-iphone',
    slug: 'generador-de-frecuencias-iphone',
    navLabel: 'Generador de frecuencias para iPhone',
    keyword: 'generador de frecuencias para iPhone',
    title: 'Generador de frecuencias para iPhone: cualquier tono en Hz',
    description: 'Reproduce cualquier tono de prueba en iPhone: elige la frecuencia en Hz, recorre de graves a agudos para probar bocinas, detectar vibraciones o sonar 165 Hz.',
    h1: 'Generador de frecuencias para iPhone: prueba bocinas con cualquier tono',
    shot: 'tone',
    quick: 'Un generador de frecuencias reproduce una onda senoidal pura en la frecuencia que elijas. <strong>Recorre despacio de graves a agudos</strong> para oír dónde vibra, zumba o se apaga una bocina: una forma rápida de revisar el altavoz del celular después de mojarse. También puedes fijar un tono grave (≈165 Hz) para ayudar a sacar el agua.',
    intro: '<p>La música esconde los problemas; un solo tono limpio los delata. Por eso los técnicos de audio usan generadores de tonos, y por eso es una de las mejores herramientas para comprobar si la bocina del iPhone quedó totalmente limpia tras expulsar el agua.</p>',
    manual: {
        heading: 'Cómo probar una bocina con un generador de frecuencias',
        steps: [
            { name: 'Volumen al 50–70 %', text: 'Suficiente para oír defectos sin que todo distorsione.' },
            { name: 'Empieza en graves', text: 'Alrededor de 100–200 Hz. Las bocinas pequeñas pierden los graves profundos, así que los tonos muy bajos suenan débiles: es normal.' },
            { name: 'Sube despacio', text: 'Recorre los medios (500–4000 Hz), donde está la voz. Escucha si hay zumbidos o vibraciones.' },
            { name: 'Revisa los agudos', text: 'Sigue hasta 10 000 Hz o más a volumen bajo. Si faltan agudos, puede haber agua o polvo en la malla.' },
            { name: 'Anota las frecuencias problemáticas', text: 'Una vibración en un tono concreto sugiere suciedad; zumbido en todo el rango sugiere daño.' }
        ]
    },
    app: {
        heading: 'Usa el generador de tonos de Clear Wave',
        steps: [
            { name: 'Abre Tone Generator', text: 'La frecuencia actual aparece en el centro de la pantalla (por ejemplo, 1028 Hz).' },
            { name: 'Desliza arriba o abajo', text: 'Desliza para subir o bajar la frecuencia y recorrer el rango.' },
            { name: 'Detén el tono', text: 'Toca Stop Tone. Si oyes vibraciones, haz una sesión para expulsar agua y vuelve a probar.' }
        ]
    },
    sections: [
        { h2: 'Frecuencias de prueba útiles', html: '<div class="table-wrap"><table><thead><tr><th>Frecuencia</th><th>Uso</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Tono para expulsar agua de bocinas de celular</td></tr><tr><td>440 Hz</td><td>Referencia de afinación (la4)</td></tr><tr><td>1000 Hz</td><td>Tono de prueba estándar</td></tr><tr><td>2000–4000 Hz</td><td>Rango de claridad de la voz: aquí se nota el sonido apagado</td></tr><tr><td>10 000 Hz+</td><td>Prueba de agudos; la sensibilidad del oído baja con la edad</td></tr></tbody></table></div>' },
        { h2: 'Cuida tu oído', html: '<p>Los tonos puros suenan más fuertes y cansan más que la música. Mantén un volumen moderado, no acerques la bocina al oído y haz pausas.</p>' }
    ],
    faqs: [
        { q: '¿Para qué sirve un generador de frecuencias?', a: 'Para probar bocinas y audífonos, encontrar vibraciones, revisar tu rango auditivo, afinar instrumentos y reproducir tonos graves que ayudan a expulsar agua de la bocina del celular.' },
        { q: '¿El iPhone puede reproducir frecuencias muy bajas?', a: 'Puede, pero las bocinas pequeñas reproducen mal los graves profundos, así que los tonos por debajo de unos 150 Hz suenan débiles.' },
        { q: '¿El generador de tonos de Clear Wave es gratis?', a: 'Clear Wave se descarga gratis. Algunas herramientas avanzadas forman parte de la suscripción opcional, que incluye prueba gratuita.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
