// Guides 6–10.
module.exports = [
{
    id: 'iphone-speaker-crackling',
    slug: 'haut-parleur-iphone-gresille',
    navLabel: 'Haut-parleur iPhone qui grésille',
    keyword: 'haut-parleur iPhone grésille',
    title: 'Haut-parleur de l’iPhone qui grésille : causes et solutions',
    description: 'Le haut-parleur de l’iPhone grésille, crépite ou déforme le son ? Eau, poussière ou haut-parleur grillé : trouvez la cause et corrigez-la par le son.',
    h1: 'Le haut-parleur de l’iPhone grésille : trouver la cause et corriger',
    shot: 'tone',
    quick: 'Un grésillement qui n’apparaît <strong>qu’à fort volume ou après mouillage</strong> vient généralement d’eau ou de saletés sur la membrane : faites 2–3 cycles d’éjection d’eau puis testez avec un balayage de fréquences. Un grésillement à <strong>tous les volumes</strong>, ou un bourdonnement sur certaines notes qui persiste après 24 heures de séchage, indique un haut-parleur endommagé à faire réparer.',
    intro: '<p>Crépitements, claquements et bourdonnements, c’est le bruit de la membrane qui touche ce qu’elle ne devrait pas : une goutte, un grain de poussière ou son propre bord abîmé. Il s’agit de savoir lequel, et un son de test pur est le moyen le plus rapide de l’entendre clairement.</p>',
    manual: {
        heading: 'Comment corriger un haut-parleur d’iPhone qui grésille',
        steps: [
            { name: 'Écartez la source audio', text: 'Jouez une autre chanson ou vidéo de bonne qualité. Certains flux grésillent d’eux-mêmes.' },
            { name: 'Baissez le volume', text: 'Si le grésillement disparaît sous ~70 %, quelque chose force la membrane : en général de l’eau ou des saletés.' },
            { name: 'Éjectez l’eau et les saletés', text: 'Haut-parleur vers le bas, volume 70–80 %, son grave d’éjection 30–60 secondes, 2–3 fois.' },
            { name: 'Brossez la grille', text: 'Une brosse à dents souple et sèche retire les peluches des trous.' },
            { name: 'Balayez les fréquences', text: 'Jouez des sons du grave à l’aigu. Un bourdonnement sur une fréquence précise qui persiste après nettoyage suggère une panne.' }
        ]
    },
    app: {
        heading: 'Diagnostiquer et corriger avec Clear Wave',
        steps: [
            { name: 'Lancez une éjection d’eau', text: 'Chassez d’abord l’eau et délogez les saletés : cela règle la plupart des grésillements après pluie ou éclaboussures.' },
            { name: 'Ouvrez le générateur de fréquence', text: 'Glissez lentement vers le haut et le bas. Notez la fréquence où le grésillement apparaît.' },
            { name: 'Isolez le haut-parleur avec le test stéréo', text: 'Activez un canal à la fois. Si un seul côté grésille, c’est ce haut-parleur.' },
            { name: 'Recommencez ou faites réparer', text: 'Si le grésillement diminue à chaque session, continuez. Si rien ne change après 24 heures de séchage, il est probablement abîmé.' }
        ]
    },
    sections: [
        { h2: 'Eau, poussière ou haut-parleur grillé', html: '<div class="table-wrap"><table><thead><tr><th>Signe</th><th>Eau</th><th>Poussière / saleté</th><th>Haut-parleur grillé</th></tr></thead><tbody><tr><td>A commencé après mouillage</td><td>✔</td><td></td><td>Parfois</td></tr><tr><td>Mieux après éjection d’eau</td><td>✔</td><td>En partie</td><td>✘</td></tr><tr><td>Grésille à faible volume</td><td>Rarement</td><td>Rarement</td><td>✔</td></tr><tr><td>Bourdonne sur certaines fréquences</td><td>Parfois</td><td>✔</td><td>✔</td></tr><tr><td>Mieux après 24 h de séchage</td><td>✔</td><td>✘</td><td>✘</td></tr></tbody></table></div>' },
        { h2: 'Surveillez le volume', html: '<p>Le volume maximal en continu fait chauffer la bobine et aggrave le grésillement. Pour tester, restez à 70–80 %. Si vous utilisez l’iPhone comme enceinte à fond tous les jours, le <a href="/fr/guides/sonometre-iphone/">sonomètre</a> aide à surveiller les niveaux.</p>' }
    ],
    faqs: [
        { q: 'Pourquoi le haut-parleur de l’iPhone grésille à fort volume ?', a: 'De l’eau ou des saletés sur la membrane, ou la membrane qui atteint sa limite sur les basses. Nettoyez d’abord ; si ça ne grésille que sur les basses fortes, baissez le volume ou l’égaliseur.' },
        { q: 'L’eau peut-elle faire grésiller le haut-parleur ?', a: 'Oui. Les gouttes sur la membrane vibrent quand elle bouge. Quelques cycles d’éjection d’eau les retirent en général.' },
        { q: 'S’il grésille, est-il grillé ?', a: 'Pas forcément. S’il grésille encore à tous les volumes après nettoyage et 24 heures de séchage, probablement.' }
    ],
    related: ['how-to-fix-blown-speaker', 'tone-generator-app-iphone', 'iphone-speaker-muffled'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'is-water-eject-safe', 'what-frequency-removes-water-from-speaker']
},
{
    id: 'water-eject-shortcut',
    slug: 'raccourci-ejecter-eau-iphone',
    navLabel: 'Raccourci pour éjecter l’eau',
    keyword: 'raccourci éjecter l’eau iPhone',
    title: 'Raccourci « Éjecter l’eau » qui ne marche pas ? L’alternative',
    description: 'Comment marche le raccourci Siri « Water Eject », pourquoi il casse après une mise à jour d’iOS, et une alternative en un geste qui teste le son.',
    h1: 'Raccourci pour éjecter l’eau de l’iPhone : fonctionnement et alternative',
    shot: 'clear',
    quick: 'Le raccourci « Water Eject » est un raccourci Siri créé par la communauté qui joue un son à 165 Hz. Il n’est pas d’Apple, s’importe depuis un site tiers et peut cesser de fonctionner après une mise à jour d’iOS. Une app comme Clear Wave fait la même chose en un geste, hors ligne, avec en plus test stéréo, générateur de fréquence et sonomètre.',
    intro: '<p>En cherchant « éjecter l’eau iPhone », on tombe sur le fameux raccourci. L’idée est bonne, mais beaucoup voient « Impossible d’ouvrir ce raccourci », des autorisations manquantes ou un son trop court. Voici comment il fonctionne, comment régler les problèmes courants et quand une app est plus simple.</p>',
    manual: {
        heading: 'Que faire si le raccourci Water Eject ne marche pas',
        steps: [
            { name: 'Mettez à jour iOS et l’app Raccourcis', text: 'Les anciennes versions du raccourci peuvent échouer sur un iOS récent. Récupérez la dernière version chez l’auteur.' },
            { name: 'Réinstallez le raccourci', text: 'Supprimez l’ancien dans Raccourcis et ajoutez-le de nouveau depuis la page de l’auteur.' },
            { name: 'Accordez les autorisations demandées', text: 'Au premier lancement, il demande un accès : touchez Autoriser.' },
            { name: 'Désactivez le mode silencieux et montez le volume', text: 'Certaines versions jouent au volume de la sonnerie.' },
            { name: 'Lancez-le 2–3 fois haut-parleur vers le bas', text: 'Une seule fois suffit rarement après un gros mouillage.' }
        ]
    },
    app: {
        heading: 'L’alternative en un geste : Clear Wave',
        steps: [
            { name: 'Installez Clear Wave depuis l’App Store', text: 'Pas de raccourci à importer ni de raccourcis non fiables à autoriser.' },
            { name: 'Appuyez pour lancer l’éjection d’eau', text: 'Haut-parleur vers le bas, volume ~75 %.' },
            { name: 'Vérifiez avec le test stéréo', text: 'Contrôlez les canaux gauche et droit, ce qu’un raccourci ne sait pas faire.' }
        ]
    },
    sections: [
        { h2: 'Raccourci ou application', html: '<div class="table-wrap"><table><thead><tr><th></th><th>Raccourci Water Eject</th><th>App Clear Wave</th></tr></thead><tbody><tr><td>Créé par</td><td>Un utilisateur (pas Apple)</td><td>Développeur indépendant, validé par l’App Store</td></tr><tr><td>Installation</td><td>Lien depuis un site tiers</td><td>App Store</td></tr><tr><td>Casse après mise à jour d’iOS</td><td>Parfois</td><td>Mis à jour via l’App Store</td></tr><tr><td>Progression de la session</td><td>Non</td><td>Oui</td></tr><tr><td>Test stéréo, sons, sonomètre</td><td>Non</td><td>Oui</td></tr><tr><td>Prix</td><td>Gratuit</td><td>Téléchargement gratuit, Pro en option</td></tr></tbody></table></div>' },
        { h2: 'L’iPhone a-t-il sa propre éjection d’eau ?', html: '<p>Non. L’Apple Watch a le verrouillage eau, qui joue un son pour vider son haut-parleur, mais l’iPhone n’a pas d’équivalent. D’où le raccourci et les apps. Détails : <a href="/fr/faq/iphone-fonction-ejecter-eau/">l’iPhone a-t-il une fonction pour éjecter l’eau ?</a></p>' }
    ],
    faqs: [
        { q: 'Le raccourci Water Eject est-il fait par Apple ?', a: 'Non. C’est un raccourci communautaire partagé sur des sites comme RoutineHub. La seule éjection d’eau intégrée d’Apple est sur l’Apple Watch (verrouillage eau).' },
        { q: 'Pourquoi le raccourci dit qu’il ne peut pas être ouvert ?', a: 'En général parce qu’il a été conçu pour un ancien iOS ou que le lien a expiré. Téléchargez la dernière version ou utilisez une app.' },
        { q: 'Quelle fréquence utilise le raccourci Water Eject ?', a: 'Les versions populaires jouent un son d’environ 165 Hz.' }
    ],
    related: ['water-eject-app-iphone', '165-hz-water-eject-sound', 'get-water-out-of-iphone-speaker'],
    faqLinks: ['does-iphone-have-built-in-water-eject', 'what-frequency-removes-water-from-speaker', 'does-water-eject-work']
},
{
    id: '165-hz-water-eject-sound',
    slug: 'son-165-hz-ejecter-eau',
    navLabel: 'Son 165 Hz pour éjecter l’eau',
    keyword: 'son 165 Hz éjecter l’eau',
    title: 'Son 165 Hz : la fréquence pour éjecter l’eau',
    description: 'Pourquoi 165 Hz est la fréquence phare pour éjecter l’eau d’un téléphone, comment les sons graves chassent l’eau et comment le jouer sans risque.',
    h1: 'Son 165 Hz : pourquoi cette fréquence chasse l’eau du haut-parleur',
    shot: 'tone',
    quick: '165 Hz est un son grave qui fait bouger la membrane d’un petit haut-parleur de téléphone avec <strong>de grands mouvements puissants</strong>, tout en restant dans ce qu’il sait reproduire. Ces mouvements expulsent les gouttes de la grille. Jouez-le à 70–80 % du volume, haut-parleur vers le bas, 30 à 60 secondes, 2–3 fois.',
    intro: '<p>Tous les outils d’éjection d’eau — le raccourci Siri, les sites, les apps — utilisent un son grave, et 165 Hz est le chiffre qu’on voit le plus. Pas de magie : c’est un compromis pratique entre « assez grave pour déplacer beaucoup d’air » et « assez aigu pour qu’un minuscule haut-parleur puisse le jouer ».</p>',
    manual: {
        heading: 'Comment jouer un son de 165 Hz sans risque',
        steps: [
            { name: 'Retirez la coque', text: 'Laissez la grille respirer et l’eau sortir.' },
            { name: 'Haut-parleur vers le bas', text: 'La gravité fait la moitié du travail.' },
            { name: 'Volume à 70–80 %', text: 'Assez pour pousser l’eau ; inutile d’aller au maximum.' },
            { name: 'Jouez 165 Hz pendant 30 à 60 secondes', text: 'Avec un générateur de fréquence ou une app d’éjection d’eau.' },
            { name: 'Recommencez et essuyez', text: '2–3 cycles, en essuyant les gouttes entre chaque.' }
        ]
    },
    app: {
        heading: 'Sons d’éjection d’eau dans Clear Wave',
        steps: [
            { name: 'Lancez l’éjection d’eau', text: 'La session Clear Wave utilise des motifs basse fréquence ajustés : pas besoin de choisir un chiffre.' },
            { name: 'Ou réglez un son à la main', text: 'Ouvrez le générateur de fréquence et glissez jusqu’à la valeur voulue, par exemple 165 Hz.' },
            { name: 'Testez après le nettoyage', text: 'Balayez les fréquences plus aiguës pour vérifier que le haut-parleur sonne net sur toute la plage.' }
        ]
    },
    sections: [
        { h2: 'Pourquoi les basses fréquences déplacent l’eau', html: '<p>À volume égal, une fréquence plus basse oblige la membrane à parcourir <em>plus</em> de distance à chaque cycle. Les sons aigus la font à peine bouger. Un long déplacement agit comme un piston qui pousse l’air — et l’eau de la grille — vers l’extérieur. Mais trop bas (sous environ 100 Hz), un haut-parleur de la taille d’un téléphone reproduit mal le son et l’effet chute. D’où la popularité de la plage 150–200 Hz, et de 165 Hz en particulier.</p>' },
        { h2: '165 Hz est-il sans danger pour le haut-parleur ?', html: '<p>Oui, à un volume raisonnable. C’est un son ordinaire, dans la tessiture d’une basse électrique ou d’une voix masculine grave. Ne jouez aucun son à 100 % pendant des minutes et arrêtez en cas de fort cliquetis.</p>' }
    ],
    faqs: [
        { q: '165 Hz est-elle la meilleure fréquence pour éjecter l’eau ?', a: 'C’est un bon choix et le plus répandu. Tout ce qui se situe entre 150 et 200 Hz fonctionne de manière similaire sur les haut-parleurs de téléphone. Les sessions qui font varier le son aident à déloger les gouttes tenaces.' },
        { q: 'Entend-on un son de 165 Hz ?', a: 'Oui. C’est un bourdonnement grave bien audible, à peu près un mi2.' },
        { q: 'Combien de temps jouer le son de 165 Hz ?', a: '30 à 60 secondes par cycle, 2 à 3 cycles. Après un gros mouillage, jusqu’à 5.' }
    ],
    related: ['tone-generator-app-iphone', 'water-eject-shortcut', 'water-eject-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-water-eject-safe', 'how-many-times-run-water-eject']
},
{
    id: 'how-to-fix-blown-speaker',
    slug: 'haut-parleur-grille-que-faire',
    navLabel: 'Haut-parleur grillé : que faire',
    keyword: 'haut-parleur grillé téléphone',
    title: 'Haut-parleur grillé : comment vérifier et que faire',
    description: 'Haut-parleur grillé ou juste bouché par l’eau et la poussière ? Vérifiez en 2 minutes, testez ce qui marche et sachez quand le faire réparer.',
    h1: 'Haut-parleur grillé : vérifiez d’abord s’il l’est vraiment',
    shot: 'test',
    quick: 'Écartez d’abord l’eau et la poussière : 2–3 cycles d’éjection d’eau, brossage de la grille, nouveau test. Un haut-parleur vraiment <strong>grillé</strong> (membrane déchirée ou bobine abîmée) grésille ou bourdonne à tous les volumes et ne se répare pas par logiciel : il faut le remplacer. Beaucoup de haut-parleurs de téléphone « grillés » sont en fait simplement bouchés.',
    intro: '<p>« Grillé » veut dire que le haut-parleur est physiquement endommagé, souvent à cause d’un volume excessif, d’une chute ou de la corrosion. Mais l’eau et les saletés produisent presque les mêmes symptômes. Avant de payer une réparation, prenez deux minutes pour les écarter.</p>',
    manual: {
        heading: 'Comment tester et réparer un haut-parleur « grillé »',
        steps: [
            { name: 'Jouez un son propre à 50 %', text: 'S’il sonne bien à 50 % et ne déforme qu’à fort volume, il n’est probablement pas grillé.' },
            { name: 'Éjectez l’eau et les saletés', text: 'Haut-parleur vers le bas, volume 70–80 %, son grave d’éjection 30–60 secondes, 2–3 fois.' },
            { name: 'Brossez la grille', text: 'Avec une brosse souple et sèche, jamais avec une aiguille ou une épingle.' },
            { name: 'Balayez les fréquences', text: 'Du grave à l’aigu. Un haut-parleur grillé bourdonne sur de nombreuses fréquences, pas une seule.' },
            { name: 'Comparez les haut-parleurs', text: 'Test gauche/droite : si un côté est net et l’autre vibre à tous les volumes, c’est lui qui est abîmé.' },
            { name: 'Remplacez-le si c’est confirmé', text: 'Le remplacement d’un haut-parleur de téléphone est une réparation courante chez Apple ou un bon réparateur.' }
        ]
    },
    app: {
        heading: 'Diagnostiquer un haut-parleur grillé avec Clear Wave',
        steps: [
            { name: 'Nettoyez d’abord', text: 'Une session d’éjection d’eau écarte l’eau et la poussière.' },
            { name: 'Test stéréo', text: 'Jouez le canal gauche et le droit séparément et comparez.' },
            { name: 'Balayage au générateur de fréquence', text: 'Glissez lentement du grave à l’aigu et notez où ça bourdonne.' },
            { name: 'Sonomètre', text: 'Comparez le volume des haut-parleurs : un grand écart confirme le problème.' }
        ]
    },
    sections: [
        { h2: 'Signes d’un haut-parleur grillé', html: '<ul class="check-list"><li>Grésillement ou souffle à faible volume, pas seulement à fort volume.</li><li>Un cliquetis constant sur les basses qui ne s’améliore pas après 24 heures de séchage.</li><li>Un haut-parleur muet alors que l’autre fonctionne.</li><li>Le problème a commencé juste après une forte chute.</li></ul>' },
        { h2: 'Idées reçues sur la réparation', html: '<p><strong>« Une fréquence spéciale répare un haut-parleur grillé. »</strong> Non. Les sons déplacent l’eau et la poussière, mais ne réparent ni une membrane déchirée ni une bobine brûlée. <strong>« Un peu de colle ou de scotch suffit. »</strong> Pas sur un téléphone : les haut-parleurs sont des modules scellés. S’il est vraiment grillé, la solution est le remplacement.</p>' }
    ],
    faqs: [
        { q: 'Un haut-parleur grillé peut-il se réparer tout seul ?', a: 'Non. Mais un haut-parleur qui semble grillé à cause de l’eau se rétablit souvent en séchant ou après quelques cycles d’éjection d’eau.' },
        { q: 'Combien coûte le remplacement du haut-parleur d’un iPhone ?', a: 'Cela dépend du modèle et du réparateur. Consultez les tarifs de réparation d’Apple ou d’un réparateur local ; AppleCare+ peut couvrir la réparation.' },
        { q: 'Clear Wave peut-il réparer un haut-parleur grillé ?', a: 'Aucune app ne répare un dommage physique. Clear Wave aide à écarter l’eau et la poussière et à identifier le haut-parleur abîmé.' }
    ],
    related: ['iphone-speaker-crackling', 'left-right-speaker-test', 'fix-my-speaker'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'clean-iphone-speaker-dust',
    slug: 'nettoyer-haut-parleur-iphone',
    navLabel: 'Nettoyer le haut-parleur de l’iPhone',
    keyword: 'nettoyer haut-parleur iPhone',
    title: 'Nettoyer le haut-parleur de l’iPhone (poussière, peluches)',
    description: 'Nettoyez poussière et peluches du haut-parleur de l’iPhone sans l’abîmer : brosse souple, astuce du ruban adhésif et nettoyage par le son.',
    h1: 'Nettoyer le haut-parleur de l’iPhone : poussière, peluches et saletés',
    shot: 'clear',
    quick: 'Éteignez l’iPhone et brossez doucement les grilles avec une <strong>brosse à dents souple et sèche</strong>, en biais. Retirez les peluches restantes avec du ruban de masquage ou de la pâte adhésive, en appuyant légèrement. Rallumez et lancez une session de nettoyage par le son (basse fréquence) pour secouer le reste. Jamais d’aiguille, de liquide ni d’air comprimé.',
    intro: '<p>Peluches de poche, poussière et maquillage bouchent peu à peu les minuscules trous du haut-parleur. Comme c’est progressif, on croit que l’iPhone est simplement « devenu moins fort avec l’âge ». Un nettoyage soigneux rend souvent une bonne part du volume et de la clarté.</p>',
    manual: {
        heading: 'Nettoyer le haut-parleur de l’iPhone pas à pas',
        steps: [
            { name: 'Éteignez l’iPhone et retirez la coque', text: 'C’est plus sûr et la grille est plus visible.' },
            { name: 'Brossez la grille', text: 'Avec une brosse à dents souple, propre et sèche. Brossez en biais, en éloignant des trous, pas vers l’intérieur.' },
            { name: 'Retirez les peluches au ruban adhésif', text: 'Appuyez doucement du ruban de masquage ou de la pâte adhésive sur la grille puis retirez. Ne l’enfoncez pas dans les trous.' },
            { name: 'Nettoyez l’écouteur', text: 'Recommencez délicatement sur la fente du haut.' },
            { name: 'Lancez un nettoyage par le son', text: 'Rallumez, haut-parleur vers le bas, et jouez un son grave de nettoyage pour faire sortir les particules détachées.' }
        ]
    },
    app: {
        heading: 'Terminez avec le nettoyeur de Clear Wave',
        steps: [
            { name: 'Lancez le nettoyage du haut-parleur', text: 'La même session qui éjecte l’eau décolle aussi la poussière de la membrane et de la grille.' },
            { name: 'Utilisez le mode Vibration', text: 'L’option vibration de la session aide à faire sortir les particules.' },
            { name: 'Mesurez la différence', text: 'Utilisez le sonomètre avant et après (même morceau, même volume, même distance).' }
        ]
    },
    sections: [
        { h2: 'À ne jamais utiliser sur le haut-parleur', html: '<ul class="check-list check-list--no"><li>Aiguilles, épingles ou cure-dents : ils peuvent percer la grille.</li><li>Alcool, eau ou produits nettoyants dans les trous.</li><li>Air comprimé : il enfonce les saletés.</li><li>Un aspirateur plaqué contre la grille.</li></ul>' },
        { h2: 'À quelle fréquence nettoyer', html: '<p>Tous les quelques mois suffisent pour la plupart des gens. Si votre téléphone vit dans une poche pleine de peluches, va à la plage ou dans un lieu poussiéreux, un coup de brosse et une session de nettoyage par le son une fois par mois gardent un volume stable.</p>' }
    ],
    faqs: [
        { q: 'Peut-on nettoyer le haut-parleur de l’iPhone avec une brosse à dents ?', a: 'Oui, une brosse souple, propre et sèche. Brossez doucement et en biais.' },
        { q: 'Une app de nettoyage enlève-t-elle la poussière ?', a: 'Elle aide à décoller la poussière fine de la membrane et de la grille. Pour les peluches tassées, combinez-la avec une brosse souple.' },
        { q: 'Pourquoi le haut-parleur reste faible après nettoyage ?', a: 'Vérifiez le Bluetooth et le volume, puis faites un test stéréo. Si un haut-parleur est nettement plus faible, il peut nécessiter une réparation.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work', 'is-water-eject-safe', 'is-clear-wave-free']
}
];
