// Guides 11–14.
module.exports = [
{
    id: 'iphone-dropped-in-water',
    slug: 'iphone-tombe-dans-eau',
    navLabel: 'iPhone tombé dans l’eau',
    keyword: 'iPhone tombé dans l’eau que faire',
    title: 'iPhone tombé dans l’eau : que faire dans les 30 minutes',
    description: 'iPhone tombé dans l’eau, la piscine ou les toilettes ? Les bons gestes : séchage selon Apple, alerte liquide, éjection d’eau, recharge.',
    h1: 'iPhone tombé dans l’eau ? Les bons gestes dans les 30 premières minutes',
    shot: 'clear',
    quick: 'Sortez-le, essuyez-le et <strong>ne le rechargez pas</strong>. Tapotez-le doucement contre votre paume, connecteur vers le bas, laissez-le dans un endroit sec et aéré et attendez au moins 30 minutes avant de le recharger (jusqu’à 24 heures si une alerte de liquide s’affiche). Pour retrouver le son, jouez un son d’éjection d’eau, haut-parleur vers le bas. <strong>Ni riz ni sèche-cheveux.</strong>',
    intro: '<p>Les iPhone récents résistent à l’eau (IP67 ou IP68 selon le modèle), donc une courte chute dans l’eau se survit généralement. Mais résistant ne veut pas dire étanche, cette protection s’use avec le temps et les dégâts liés aux liquides ne sont pas couverts par la garantie standard d’Apple. Ce que vous faites dans la demi-heure qui suit compte.</p>',
    manual: {
        heading: 'Que faire tout de suite',
        steps: [
            { name: 'Sortez-le et éteignez-le s’il se comporte bizarrement', text: 'Si l’écran clignote ou si l’iPhone réagit mal, éteignez-le.' },
            { name: 'Retirez la coque', text: 'Essuyez tout avec un chiffon doux non pelucheux.' },
            { name: 'Rincez si ce n’était pas de l’eau douce', text: 'Conseil d’Apple pour les iPhone résistants aux éclaboussures : en cas de contact avec autre chose que de l’eau (eau de mer, soda, eau chlorée de piscine), rincez la zone à l’eau du robinet puis essuyez et séchez.' },
            { name: 'Faites sortir l’eau du connecteur', text: 'Tapotez doucement l’iPhone contre votre main, port de charge vers le bas.' },
            { name: 'Dégagez les haut-parleurs par le son', text: 'Haut-parleur vers le bas, volume 70–80 %, son d’éjection d’eau 30–60 secondes, 2–3 fois.' },
            { name: 'Séchez avant de recharger', text: 'Laissez-le dans un endroit sec et aéré. Attendez au moins 30 minutes ; si l’alerte de liquide apparaît, jusqu’à ce qu’elle disparaisse (jusqu’à 24 heures).' }
        ]
    },
    app: {
        heading: 'Retrouvez le son avec Clear Wave',
        steps: [
            { name: 'Lancez une éjection d’eau', text: 'D’abord haut-parleur du bas vers le bas.' },
            { name: 'Retournez pour l’écouteur', text: 'Deuxième session, haut de l’iPhone vers le bas.' },
            { name: 'Vérifiez les deux canaux', text: 'Le test stéréo confirme si gauche et droite sonnent aussi clairement.' },
            { name: 'Recommencez après séchage', text: 'Une heure plus tard, lancez une session de plus : l’eau peut revenir vers la grille.' }
        ]
    },
    sections: [
        { h2: '« Liquide détecté dans le connecteur Lightning / USB-C »', html: '<p>Les iPhone XS, iPhone XR et modèles ultérieurs vous préviennent s’il y a du liquide dans le port de charge. Si c’est le cas, débranchez le câble, faites sortir l’eau en tapotant et laissez sécher. N’utilisez le contournement d’urgence pour recharger qu’en cas de réelle urgence. Apple précise que vous pouvez toujours utiliser un chargeur sans fil pendant que le port sèche.</p>' },
        { h2: 'À ne pas faire', html: '<ul class="check-list check-list--no"><li><strong>Le riz</strong> : Apple le déconseille, la poussière et les grains peuvent entrer dans l’iPhone.</li><li><strong>Sèche-cheveux, four, radiateur</strong> : la chaleur abîme la batterie et les joints.</li><li><strong>Coton-tige ou papier dans le port</strong>.</li><li><strong>Le recharger mouillé</strong>.</li></ul>' }
    ],
    faqs: [
        { q: 'Combien de temps attendre pour recharger un iPhone mouillé ?', a: 'Apple conseille au moins 30 minutes, et jusqu’à 24 heures si l’alerte de liquide continue de s’afficher.' },
        { q: 'Mon iPhone est-il étanche ?', a: 'Aucun iPhone n’est étanche. À partir de l’iPhone 7, ils sont résistants à l’eau (IP67 ou IP68). Cette résistance diminue avec le temps et l’usure.' },
        { q: 'Mon iPhone est tombé dans les toilettes, que faire ?', a: 'Sortez-le, rincez brièvement l’extérieur à l’eau claire du robinet, séchez-le, faites quelques cycles d’éjection d’eau pour le haut-parleur et laissez-le sécher avant de le recharger.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    id: 'left-right-speaker-test',
    slug: 'test-haut-parleur-gauche-droite',
    navLabel: 'Test haut-parleur gauche/droite',
    keyword: 'test haut-parleur gauche droite',
    title: 'Test haut-parleur gauche droite : iPhone et écouteurs',
    description: 'Faites un test de haut-parleur gauche/droite sur iPhone, AirPods ou écouteurs en quelques secondes. Repérez le canal faible, étouffé ou muet et que faire.',
    h1: 'Test haut-parleur gauche/droite : vérifiez les deux canaux en quelques secondes',
    shot: 'test',
    quick: 'Un test gauche/droite (stéréo) joue le son sur <strong>un canal à la fois</strong> pour entendre si un haut-parleur est faible, étouffé ou muet. Sur iPhone, l’écouteur et le haut-parleur du bas sont les deux canaux. Si un côté sonne moins bien après mouillage, lancez une éjection d’eau pour ce haut-parleur et refaites le test.',
    intro: '<p>Quand les deux haut-parleurs jouent ensemble, un problème d’un seul côté passe facilement inaperçu. Séparer les canaux le rend évident et indique précisément quel haut-parleur nettoyer, sécher ou réparer. Cela marche aussi pour les écouteurs, les AirPods et les enceintes Bluetooth.</p>',
    manual: {
        heading: 'Comment faire un test gauche/droite',
        steps: [
            { name: 'Désactivez l’audio mono', text: 'Réglages → Accessibilité → Audio et éléments visuels → « Audio mono » doit être désactivé, sinon les deux canaux jouent la même chose.' },
            { name: 'Vérifiez la balance', text: 'Dans le même menu, le curseur de balance doit être centré entre G et D.' },
            { name: 'Jouez le canal gauche seul', text: 'Quel haut-parleur joue, et le son est-il net ?' },
            { name: 'Jouez le canal droit seul', text: 'Comparez volume et clarté avec le gauche.' },
            { name: 'Corrigez le côté faible', text: 'Étouffé = eau ou poussière (nettoyez). Muet ou grésillement = panne possible.' }
        ]
    },
    app: {
        heading: 'Test stéréo dans Clear Wave',
        steps: [
            { name: 'Ouvrez le test stéréo', text: 'Vous voyez une commande pour le canal gauche et une pour le droit.' },
            { name: 'Touchez On à gauche', text: 'Le son ne doit sortir que d’un côté.' },
            { name: 'Touchez On à droite', text: 'Comparez avec la gauche.' },
            { name: 'Nettoyez le côté faible', text: 'Lancez une éjection d’eau avec ce haut-parleur vers le bas puis retestez.' }
        ]
    },
    sections: [
        { h2: 'Quel haut-parleur de l’iPhone est à gauche, lequel à droite ?', html: '<p>En portrait, iOS répartit la stéréo entre le <strong>haut-parleur du bas</strong> et l’<strong>écouteur</strong>. En paysage, iOS inverse les canaux pour que gauche et droite correspondent à la façon dont vous tenez l’iPhone. Faites le test dans l’orientation où vous regardez habituellement des vidéos.</p>' },
        { h2: 'Tester des AirPods et des écouteurs', html: '<p>Connectez les écouteurs et faites le même test. Si un AirPod est plus faible, nettoyez délicatement sa grille avec une brosse souple et sèche et vérifiez la balance dans Accessibilité. L’humidité dans des écouteurs scellés peut mettre du temps à sécher : voir <a href="/fr/faq/ejecter-eau-airpods/">l’éjection d’eau marche-t-elle sur les AirPods ?</a></p>' }
    ],
    faqs: [
        { q: 'Pourquoi mon iPhone ne sort le son que d’un côté ?', a: 'Vérifiez que l’audio mono est désactivé et la balance centrée. Faites ensuite un test stéréo : si un côté est étouffé, il contient peut-être de l’eau ou de la poussière.' },
        { q: 'Peut-on tester l’AirPod gauche et le droit ?', a: 'Oui. Connectez-les et lancez un test stéréo : chaque écouteur ne doit jouer que son canal.' },
        { q: 'Pourquoi l’écouteur est plus faible que le haut-parleur du bas ?', a: 'Il est plus petit et pensé pour les appels, donc un peu moins fort par conception. Un gros écart ou un son étouffé signalent des peluches ou de l’eau dans sa grille.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    id: 'decibel-meter-app-iphone',
    slug: 'sonometre-iphone',
    navLabel: 'Sonomètre pour iPhone',
    keyword: 'sonomètre iPhone',
    title: 'Sonomètre pour iPhone : mesurer le bruit en décibels',
    description: 'Transformez votre iPhone en sonomètre : mesurez le bruit en dB, vérifiez le volume du haut-parleur et les niveaux sûrs. Décibelmètre inclus dans Clear Wave.',
    h1: 'Sonomètre pour iPhone : mesurer le bruit et le volume du haut-parleur',
    shot: 'meter',
    quick: 'Une app sonomètre (décibelmètre) utilise le micro de l’iPhone pour estimer le niveau d’un son. Servez-vous-en pour comparer le haut-parleur avant et après nettoyage, mesurer le bruit d’une pièce ou rester sous ~85 dB, niveau au-delà duquel une exposition prolongée abîme l’audition. Les sonomètres de téléphone sont approximatifs : parfaits pour comparer, pas pour des mesures certifiées.',
    intro: '<p>Un sonomètre transforme « j’ai l’impression que c’est moins fort » en chiffre. C’est utile après un nettoyage d’eau ou de poussière, pour prouver que le haut-parleur est revenu à la normale, et pour des questions du quotidien comme « ce bar est-il trop bruyant ? » ou « la tablette de mon enfant est-elle trop forte ? ».</p>',
    manual: {
        heading: 'Mesurer le volume du haut-parleur avec un sonomètre',
        steps: [
            { name: 'Choisissez un son de référence', text: 'Le même morceau ou son de test au même volume à chaque fois.' },
            { name: 'Fixez la distance', text: 'Placez un second appareil avec le sonomètre à distance constante (par exemple 30 cm) du haut-parleur, ou mesurez la pièce avec l’iPhone lui-même.' },
            { name: 'Mesurez au calme', text: 'Le bruit de fond fausse les mesures.' },
            { name: 'Notez la moyenne', text: 'Observez 10–15 secondes et notez la valeur typique.' },
            { name: 'Comparez avant/après', text: 'Après nettoyage, mesurez de nouveau dans les mêmes conditions.' }
        ]
    },
    app: {
        heading: 'Le sonomètre de Clear Wave',
        steps: [
            { name: 'Ouvrez DB Meter', text: 'Autorisez l’accès au micro lorsque c’est demandé : le sonomètre en a besoin pour écouter.' },
            { name: 'Démarrez la mesure', text: 'La jauge affiche le niveau actuel en dB avec une étiquette comme « Conversation normale ».' },
            { name: 'Arrêtez la mesure', text: 'Touchez Stop Monitoring. Les mesures sont traitées sur l’appareil.' }
        ]
    },
    sections: [
        { h2: 'Niveaux sonores courants', html: '<div class="table-wrap"><table><thead><tr><th>Son</th><th>Niveau approx.</th></tr></thead><tbody><tr><td>Pièce calme, chuchotement</td><td>30 dB</td></tr><tr><td>Conversation normale</td><td>50–60 dB</td></tr><tr><td>Rue animée, aspirateur</td><td>70–80 dB</td></tr><tr><td>Seuil de risque pour l’audition en exposition longue (8 h)</td><td>85 dB</td></tr><tr><td>Concert, boîte de nuit</td><td>100–110 dB</td></tr></tbody></table></div><p>Chaque +10 dB est perçu comme environ deux fois plus fort.</p>' },
        { h2: 'Un sonomètre sur iPhone est-il précis ?', html: '<p>Les micros de l’iPhone sont bons mais pas étalonnés comme un appareil de laboratoire, et sont optimisés pour la voix. Comptez sur quelques dB près pour les sons du quotidien : idéal pour comparer avant/après avec le même téléphone. Pour des mesures légales ou professionnelles, utilisez un sonomètre certifié.</p>' }
    ],
    faqs: [
        { q: 'Un iPhone peut-il mesurer les décibels ?', a: 'Oui, avec une app sonomètre qui utilise le micro. L’Apple Watch et l’app Santé suivent aussi le niveau de bruit ambiant.' },
        { q: 'Quel niveau de décibels est sans danger ?', a: 'Une exposition prolongée au-delà d’environ 85 dB pendant des heures peut abîmer l’audition. Une exposition brève à des sons plus forts est moins risquée.' },
        { q: 'Le sonomètre enregistre-t-il le son ?', a: 'Le sonomètre de Clear Wave écoute pour mesurer le niveau sur votre appareil. Selon l’App Store, aucune donnée n’est liée à votre identité.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'tone-generator-app-iphone',
    slug: 'generateur-de-frequence-iphone',
    navLabel: 'Générateur de fréquence pour iPhone',
    keyword: 'générateur de fréquence iPhone',
    title: 'Générateur de fréquence pour iPhone : n’importe quel son en Hz',
    description: 'Jouez n’importe quel son de test sur iPhone : choisissez la fréquence en Hz, balayez du grave à l’aigu ou jouez 165 Hz pour chasser l’eau.',
    h1: 'Générateur de fréquence pour iPhone : tester un haut-parleur à n’importe quelle fréquence',
    shot: 'tone',
    quick: 'Un générateur de fréquence joue une onde sinusoïdale pure à la fréquence choisie. <strong>Balayez lentement du grave à l’aigu</strong> pour entendre où un haut-parleur vibre, bourdonne ou faiblit : un moyen rapide de vérifier le haut-parleur du téléphone après un contact avec l’eau. Vous pouvez aussi régler un son grave (≈165 Hz) pour aider à chasser l’eau.',
    intro: '<p>La musique masque les défauts ; un seul son pur les révèle. C’est pourquoi les techniciens audio utilisent des générateurs de fréquence, et c’est l’un des meilleurs outils pour vérifier que le haut-parleur de l’iPhone est totalement dégagé après une éjection d’eau.</p>',
    manual: {
        heading: 'Tester un haut-parleur avec un générateur de fréquence',
        steps: [
            { name: 'Volume à 50–70 %', text: 'Assez pour entendre les défauts sans que tout sature.' },
            { name: 'Commencez dans le grave', text: 'Vers 100–200 Hz. Les petits haut-parleurs restituent mal l’extrême grave, donc les sons très bas paraissent faibles : c’est normal.' },
            { name: 'Montez lentement', text: 'Traversez les médiums (500–4000 Hz), là où se trouve la voix. Écoutez les bourdonnements et vibrations.' },
            { name: 'Vérifiez les aigus', text: 'Continuez jusqu’à 10 000 Hz et plus à faible volume. Des aigus absents peuvent signaler de l’eau ou de la poussière sur la grille.' },
            { name: 'Notez les fréquences à problème', text: 'Une vibration sur une seule note suggère une saleté ; un bourdonnement partout suggère une panne.' }
        ]
    },
    app: {
        heading: 'Le générateur de fréquence de Clear Wave',
        steps: [
            { name: 'Ouvrez Tone Generator', text: 'La fréquence actuelle s’affiche au centre de l’écran (par exemple 1028 Hz).' },
            { name: 'Glissez vers le haut ou le bas', text: 'Glissez pour monter ou descendre en fréquence et balayer la plage.' },
            { name: 'Arrêtez le son', text: 'Touchez Stop Tone. Si vous entendez des vibrations, lancez une éjection d’eau et recommencez.' }
        ]
    },
    sections: [
        { h2: 'Fréquences de test utiles', html: '<div class="table-wrap"><table><thead><tr><th>Fréquence</th><th>Usage</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Son d’éjection d’eau pour haut-parleurs de téléphone</td></tr><tr><td>440 Hz</td><td>La de référence (diapason, la3)</td></tr><tr><td>1000 Hz</td><td>Son de test standard</td></tr><tr><td>2000–4000 Hz</td><td>Zone d’intelligibilité de la voix : c’est là qu’on entend l’étouffement</td></tr><tr><td>10 000 Hz et +</td><td>Contrôle des aigus ; la sensibilité de l’oreille baisse avec l’âge</td></tr></tbody></table></div>' },
        { h2: 'Protégez votre audition', html: '<p>Les sons purs paraissent plus forts et fatiguent plus que la musique. Gardez un volume modéré, ne collez pas le haut-parleur à l’oreille et faites des pauses.</p>' }
    ],
    faqs: [
        { q: 'À quoi sert un générateur de fréquence ?', a: 'À tester haut-parleurs et écouteurs, repérer les vibrations, vérifier son audition, accorder des instruments et jouer des sons graves qui aident à éjecter l’eau du haut-parleur du téléphone.' },
        { q: 'L’iPhone peut-il jouer des fréquences très basses ?', a: 'Oui, mais les petits haut-parleurs restituent mal l’extrême grave : les sons sous environ 150 Hz paraissent faibles.' },
        { q: 'Le générateur de fréquence de Clear Wave est-il gratuit ?', a: 'Clear Wave se télécharge gratuitement. Certains outils avancés font partie de l’abonnement facultatif, qui inclut un essai gratuit.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
