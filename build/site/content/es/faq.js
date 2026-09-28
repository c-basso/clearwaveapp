// Preguntas. Cada una tiene su página /es/faq/<slug>/ («Saber más») y aparece en el inicio.
module.exports = [
{
    id: 'does-water-eject-work', slug: 'funciona-expulsar-agua-con-sonido',
    question: '¿De verdad funciona expulsar agua con sonido?',
    title: '¿Funciona expulsar agua del iPhone con sonido?',
    description: '¿De verdad el sonido saca el agua de la bocina del iPhone? Sí, de la rejilla. Cómo funciona, qué no arregla y cómo saber si funcionó.',
    short: 'Sí, para el agua atrapada en la rejilla de la bocina, que causa la mayoría de los sonidos apagados tras lluvia, ducha o salpicaduras. El sonido de baja frecuencia hace que la membrana empuje las gotas hacia fuera; muchas veces las ves aparecer en la malla.',
    body: '<p>Expulsar agua funciona porque una bocina es una pequeña bomba. Con un tono grave (unos 150–200 Hz), la membrana hace recorridos largos y empuja el aire —y el agua de la rejilla— por los orificios. Es el mismo principio que usa Apple en el Bloqueo de agua del Apple Watch.</p><h2>Qué arregla</h2><ul class="check-list"><li>Sonido apagado o «bajo el agua» tras mojarse</li><li>Volumen bajo después de la ducha, la lluvia o salpicaduras</li><li>Crujidos causados por gotas en la membrana</li><li>Polvo suelto sobre la malla (en parte)</li></ul><h2>Qué no arregla</h2><ul class="check-list check-list--no"><li>Agua dentro de la electrónica del teléfono</li><li>Una bocina reventada o con daño físico</li><li>Corrosión por agua salada o bebidas azucaradas que se dejó días</li></ul><h2>Cómo saber si funcionó</h2><p>Reproduce el mismo video con voz antes y después. Mejor aún: haz una prueba estéreo y un barrido lento de tonos; ambos canales deben sonar igual de claros y sin vibraciones.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'is-water-eject-safe', slug: 'es-seguro-expulsar-agua-con-sonido',
    question: '¿Es seguro expulsar agua de la bocina con sonido?',
    title: '¿Es seguro expulsar agua de la bocina del iPhone?',
    description: '¿Es seguro usar un sonido para expulsar agua del iPhone? Sí, a volumen normal. Por qué, qué volumen usar y los errores que sí pueden dañar la bocina.',
    short: 'Sí. Un tono para expulsar agua es audio común a volumen normal, como la música. Mantén el volumen en 70–80 %, evita el máximo durante mucho tiempo y detente si oyes un traqueteo fuerte.',
    body: '<p>La bocina del iPhone está hecha para reproducir graves, voces y alarmas todo el día. Un tono grave de 30–60 segundos está de sobra dentro de sus capacidades. Lo que causa daño es el uso <em>prolongado</em> al máximo, sobre todo con graves fuertes, que calienta la bobina.</p><h2>Uso seguro</h2><ul class="check-list"><li>Volumen al 70–80 %, no al 100 %</li><li>30–60 segundos por ciclo, con una pausa breve entre ciclos</li><li>Bocina hacia abajo</li><li>Detente si oyes zumbido o traqueteo fuerte</li></ul><h2>Más riesgoso que expulsar agua</h2><ul class="check-list check-list--no"><li>Secadora de pelo y otras fuentes de calor</li><li>Aire comprimido en la rejilla</li><li>Meter alfileres o hisopos en los orificios</li><li>Arroz (Apple lo desaconseja)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'how-long-for-water-to-leave-iphone-speaker', slug: 'cuanto-tarda-en-secarse-la-bocina',
    question: '¿Cuánto tarda en secarse la bocina del iPhone?',
    title: '¿Cuánto tarda en secarse la bocina del iPhone?',
    description: 'Sola, la bocina del iPhone tarda de varias horas a un día en secarse. Con un tono para expulsar agua suelen bastar 1–3 ciclos de 30–60 segundos.',
    short: 'Sola, de varias horas a un día entero. Con un tono para expulsar agua, casi toda sale en 1–3 ciclos de 30–60 segundos; si se sumergió, puede necesitar hasta 5 ciclos más secado al aire.',
    body: '<p>El agua de la rejilla se evapora despacio porque la cavidad es pequeña y cerrada. Por eso el sonido puede seguir apagado horas después de la ducha o la lluvia.</p><div class="table-wrap"><table><thead><tr><th>Situación</th><th>Sin ayuda</th><th>Expulsando agua</th></tr></thead><tbody><tr><td>Salpicadura, lluvia, vapor de la ducha</td><td>1–4 horas</td><td>1–2 ciclos</td></tr><tr><td>Chapuzón breve (lavabo, charco)</td><td>Varias horas</td><td>2–3 ciclos + 30 min de secado</td></tr><tr><td>Alberca, inodoro, inmersión larga</td><td>Hasta 24 horas</td><td>3–5 ciclos + varias horas de secado</td></tr></tbody></table></div><p>Apple recomienda esperar al menos 30 minutos antes de cargar un iPhone mojado, y hasta 24 horas si aparece el aviso de líquido.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'should-i-put-wet-iphone-in-rice', slug: 'meter-iphone-en-arroz',
    question: '¿Meto mi iPhone mojado en arroz?',
    title: '¿Meter el iPhone mojado en arroz? Apple dice que no',
    description: 'Apple dice que no metas un iPhone mojado en arroz: las partículas pueden dañarlo. Qué hacer en su lugar: golpecitos, secar al aire y expulsar agua con sonido.',
    short: 'No. Apple lo desaconseja expresamente porque pequeñas partículas de arroz pueden entrar en el iPhone. Dale golpecitos con el conector hacia abajo, déjalo secar al aire y usa un tono para expulsar agua de la bocina.',
    body: '<p>El truco del arroz es un mito que ya no sirve. El arroz no absorbe el agua más rápido que el aire, y el polvo de almidón y los granos rotos pueden acabar en el puerto de carga y en las rejillas de las bocinas. El <a href="https://support.apple.com/es-mx/102643" rel="noopener" target="_blank">artículo de soporte de Apple</a> dice claramente que no lo hagas.</p><h2>Haz esto en su lugar</h2><ol class="steps-inline"><li>Seca el teléfono y quita la funda.</li><li>Dale golpecitos suaves contra la palma con el puerto de carga hacia abajo.</li><li>Haz 2–3 ciclos para expulsar agua con la bocina hacia abajo.</li><li>Déjalo en un lugar seco y ventilado; espera al menos 30 minutos antes de cargarlo.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    id: 'what-frequency-removes-water-from-speaker', slug: 'que-frecuencia-saca-el-agua',
    question: '¿Qué frecuencia saca el agua de la bocina?',
    title: '¿Qué frecuencia saca el agua de la bocina? (165 Hz)',
    description: 'Las frecuencias bajas, de 150 a 200 Hz y sobre todo 165 Hz, sacan mejor el agua de la bocina del celular. Por qué funcionan los tonos graves y cómo usarlos.',
    short: 'Funcionan mejor las frecuencias bajas, de unos 150–200 Hz; la más usada es 165 Hz. Con tonos graves la membrana hace recorridos más largos y empuja el agua a través de la rejilla.',
    body: '<p>Al mismo volumen, un tono más grave obliga a la membrana a moverse más. Ese recorrido largo bombea aire —y agua— a través de la rejilla. Pero muy por debajo de unos 100 Hz, una bocina pequeña de celular ya no reproduce bien el tono. El rango práctico es 150–200 Hz, y 165 Hz se volvió el estándar gracias al popular atajo de Siri.</p><p>Las sesiones que varían un poco el tono ayudan a soltar gotas rebeldes. Después, recorre frecuencias más altas con un generador de tonos para confirmar que la bocina suena limpia en todo el rango.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    id: 'can-water-eject-fix-blown-speaker', slug: 'expulsar-agua-arregla-bocina-reventada',
    question: '¿Expulsar agua arregla una bocina reventada?',
    title: '¿Expulsar agua arregla una bocina reventada?',
    description: 'Expulsar agua no arregla una bocina reventada, pero muchas bocinas «reventadas» solo están mojadas o tapadas. Cómo distinguirlo en dos minutos.',
    short: 'No: una bocina realmente reventada tiene daño físico y hay que cambiarla. Pero muchas que suenan «reventadas» solo están mojadas o tapadas, y expulsar el agua las arregla. Pruébalo antes de pagar una reparación.',
    body: '<p>Una bocina reventada tiene la membrana rota o la bobina dañada. Ningún sonido, frecuencia ni app puede repararlo. La buena noticia: el agua y la suciedad provocan síntomas casi idénticos —crujidos, zumbido, distorsión— y esos sí tienen arreglo.</p><h2>Prueba de 2 minutos</h2><ol class="steps-inline"><li>Haz 2–3 ciclos para expulsar agua.</li><li>Reproduce audio limpio al 50 %. ¿Sigue distorsionado? Puede estar reventada.</li><li>Haz una prueba estéreo. Si un lado distorsiona a cualquier volumen, probablemente ese esté dañado.</li><li>Recorre un generador de tonos de grave a agudo. Zumbido en todo el rango = daño; vibración en un solo tono = suciedad.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    id: 'does-water-eject-work-on-airpods', slug: 'sacar-agua-de-airpods',
    question: '¿Funciona expulsar agua en los AirPods?',
    title: '¿Se puede sacar el agua de los AirPods con sonido?',
    description: '¿Se puede expulsar el agua de los AirPods con un sonido? Solo en parte. Qué ayuda, qué recomienda Apple y cómo probar el AirPod izquierdo y el derecho.',
    short: 'Solo en parte. Puedes reproducir un tono para expulsar agua con los AirPods conectados, pero sus altavoces son pequeños y sellados, así que el efecto es limitado. Sécalos con un paño sin pelusa, déjalos secar y prueba los canales izquierdo y derecho.',
    body: '<p>Con los AirPods conectados, el audio —incluido el tono para expulsar agua— suena por sus propios altavoces, no por la bocina del iPhone. Eso puede mover un poco de agua de la malla, pero los audífonos son diminutos y sellados, así que el secado importa más que el sonido.</p><h2>Qué hacer con AirPods mojados</h2><ul class="check-list"><li>Sécalos con un paño suave, seco y sin pelusa.</li><li>Déjalos secar por completo antes de meterlos en el estuche de carga.</li><li>No uses calor, aire comprimido ni objetos puntiagudos en la malla.</li><li>Ya secos, haz una prueba estéreo para confirmar que ambos suenan igual.</li></ul><p>Los AirPods (3.ª generación), AirPods Pro y posteriores son resistentes al sudor y al agua, no sumergibles.</p>',
    guide: 'left-right-speaker-test'
},
{
    id: 'does-iphone-have-built-in-water-eject', slug: 'iphone-tiene-expulsar-agua',
    question: '¿El iPhone tiene función para expulsar agua?',
    title: '¿El iPhone tiene función para expulsar agua? No, y por qué',
    description: 'El iPhone no tiene un botón para expulsar agua: solo el Apple Watch tiene Bloqueo de agua. Cómo expulsar el agua en iPhone con un atajo o una app.',
    short: 'No. Solo el Apple Watch trae una expulsión de agua integrada (Bloqueo de agua). En el iPhone necesitas una app como Clear Wave o un atajo de Siri de la comunidad.',
    body: '<p>El Bloqueo de agua del Apple Watch reproduce una serie de tonos para sacar el agua de su altavoz después de nadar. El iPhone no tiene un ajuste equivalente, aunque la física es la misma. Los iPhone XS/XR y posteriores avisan si hay líquido en el puerto de carga, pero eso es detección, no expulsión.</p><h2>Tus opciones en el iPhone</h2><ul class="check-list"><li><strong>App para expulsar agua</strong>: un toque, sin internet y con pruebas para confirmar el resultado.</li><li><strong>Atajo de Siri</strong>: hecho por la comunidad, se importa desde una web de terceros y puede fallar tras actualizar iOS.</li><li><strong>Tono en una web</strong>: necesita internet y la pantalla encendida.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    id: 'how-many-times-run-water-eject', slug: 'cuantas-veces-expulsar-agua',
    question: '¿Cuántas veces debo expulsar el agua?',
    title: '¿Cuántas veces hay que expulsar el agua de la bocina?',
    description: 'Expulsa el agua 2–3 veces tras salpicaduras y hasta 5 veces tras sumergirse, 30–60 segundos cada vez. Cómo saber cuándo la bocina ya está limpia.',
    short: '2–3 ciclos de 30–60 segundos tras salpicaduras, lluvia o vapor de la ducha. Hasta 5 ciclos si se sumergió (alberca, inodoro), con unos minutos de secado entre ellos. Para cuando la prueba estéreo suene limpia en ambos lados.',
    body: '<p>Más no siempre es mejor. Cuando el agua ya salió, los ciclos extra no hacen nada. Decide con una prueba rápida entre ciclos.</p><div class="table-wrap"><table><thead><tr><th>Exposición</th><th>Ciclos</th></tr></thead><tbody><tr><td>Salpicadura, llovizna, vapor de la ducha</td><td>1–2</td></tr><tr><td>Lluvia fuerte, chapuzón en el lavabo</td><td>2–3</td></tr><tr><td>Alberca, inodoro, tina</td><td>3–5 + secar al aire, repetir a la hora</td></tr></tbody></table></div><p>Si tras 5 ciclos y 24 horas de secado el sonido no mejoró nada, probablemente no sea agua: revisa si hay polvo o daño en la bocina.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'is-clear-wave-free', slug: 'clear-wave-es-gratis',
    question: '¿Clear Wave es gratis?',
    title: '¿Clear Wave es gratis? Precio y qué incluye',
    description: 'Clear Wave se descarga gratis en iPhone y iPad. Una suscripción opcional con prueba gratuita desbloquea todas las herramientas. Qué incluye y cómo cancelar.',
    short: 'Clear Wave se descarga gratis en iPhone y iPad. Una suscripción opcional dentro de la app (con prueba gratuita) da acceso completo a todas las herramientas: expulsar agua, prueba estéreo, generador de tonos y medidor de decibelios.',
    body: '<p>Clear Wave —en el App Store, <em>«Limpiar bocina expulsar agua»</em>— se descarga gratis. El acceso completo a las herramientas se consigue con compras opcionales dentro de la app, con prueba gratuita y opción de por vida. El App Store te muestra el precio actual en tu moneda antes de confirmar nada.</p><h2>Qué incluye la app</h2><ul class="check-list"><li>Sesiones para expulsar agua y limpiar la bocina</li><li>Prueba estéreo izquierda/derecha</li><li>Generador de tonos (desliza para cambiar la frecuencia)</li><li>Medidor de decibelios</li></ul><h2>Administrar la suscripción</h2><p>Las suscripciones las gestiona Apple. Para cancelar: <em>Configuración → [tu nombre] → Suscripciones</em> en el iPhone. Es compatible con Compartir en familia.</p>',
    guide: 'water-eject-app-iphone'
}
];
