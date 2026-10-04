// Questions. Chacune a sa page /fr/faq/<slug>/ (« En savoir plus ») et apparaît sur l’accueil.
module.exports = [
{
    id: 'what-is-clear-wave', slug: 'quest-ce-que-clear-wave',
    question: 'Qu’est-ce que Clear Wave ?',
    title: 'Qu’est-ce que Clear Wave ? L’app pour éjecter l’eau',
    description: 'Clear Wave est une app gratuite pour iPhone et iPad qui éjecte l’eau et la poussière du haut-parleur par le son, puis le teste. Ce qu’elle fait.',
    short: 'Clear Wave est une app gratuite pour iPhone et iPad (sur l’App Store : « Éjecter eau du haut-parleur ») qui chasse l’eau et la poussière du haut-parleur par ondes sonores, puis vérifie le son avec un test stéréo, un générateur de fréquence et un sonomètre.',
    body: '<p>Clear Wave est une app iOS pour un haut-parleur qui sonne étouffé, faible ou grésille après avoir été mouillé ou empoussiéré. Sur l’App Store, elle s’appelle <em>« Éjecter eau du haut-parleur »</em> ; Clear Wave est la marque et ce site.</p><h2>Ce que fait Clear Wave</h2><ul class="check-list"><li><strong>Éjection d’eau et nettoyage</strong> : des séances de son grave poussent l’eau hors de la grille et décollent la poussière.</li><li><strong>Test stéréo</strong> : canal gauche et droit séparément.</li><li><strong>Générateur de fréquence</strong> : n’importe quelle fréquence pour repérer vibrations et trous.</li><li><strong>Sonomètre</strong> : le volume avant et après le nettoyage.</li></ul><h2>Existe-t-il une version en ligne de Clear Wave ?</h2><p>Non. C’est une app pour iPhone et iPad (iOS 17.1+) qui fonctionne hors ligne : inutile de garder un onglet de navigateur ouvert pendant le son. Ce site propose des guides gratuits pas à pas, utilisables aussi sans l’app. Mais vous pouvez jouer <a href="/fr/guides/son-165-hz-ejecter-eau/">gratuitement le son 165 Hz pour éjecter l’eau en ligne</a>, directement dans le navigateur.</p><h2>Qui la développe</h2><p>Clear Wave est développée par un développeur indépendant, sans lien avec Apple ni avec d’autres produits nommés « Clear Wave ». Le téléchargement est gratuit ; l’accès complet à tous les outils est un achat intégré facultatif avec essai gratuit.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'does-water-eject-work', slug: 'ejecter-eau-par-le-son-ca-marche',
    question: 'Éjecter l’eau par le son, ça marche vraiment ?',
    title: 'Éjecter l’eau de l’iPhone par le son : ça marche ?',
    description: 'Le son chasse-t-il vraiment l’eau du haut-parleur de l’iPhone ? Oui, celle de la grille. Comment ça marche, ce que ça ne répare pas et comment vérifier.',
    short: 'Oui, pour l’eau coincée dans la grille du haut-parleur, responsable de la plupart des sons étouffés après pluie, douche ou éclaboussures. Le son basse fréquence pousse la membrane à expulser les gouttes ; on les voit souvent apparaître sur la grille.',
    body: '<p>L’éjection d’eau fonctionne parce qu’un haut-parleur est une petite pompe. Avec un son grave (environ 150–200 Hz), la membrane fait de grands mouvements et pousse l’air — et l’eau de la grille — à travers les trous. C’est le principe du verrouillage eau de l’Apple Watch.</p><h2>Ce que ça corrige</h2><ul class="check-list"><li>Son étouffé ou « sous l’eau » après mouillage</li><li>Volume en baisse après la douche, la pluie ou des éclaboussures</li><li>Grésillement causé par des gouttes sur la membrane</li><li>En partie, la poussière posée sur la grille</li></ul><h2>Ce que ça ne corrige pas</h2><ul class="check-list check-list--no"><li>L’eau à l’intérieur de l’électronique</li><li>Un haut-parleur grillé ou physiquement abîmé</li><li>La corrosion due à l’eau de mer ou à une boisson sucrée laissée des jours</li></ul><h2>Comment savoir si ça a marché</h2><p>Jouez la même vidéo parlée avant et après. Mieux : un test stéréo et un balayage lent de fréquences ; les deux canaux doivent sonner aussi clairement, sans vibration.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'is-water-eject-safe', slug: 'ejecter-eau-sans-danger',
    question: 'Éjecter l’eau par le son est-il sans danger ?',
    title: 'Éjecter l’eau du haut-parleur de l’iPhone : sans danger ?',
    description: 'Un son d’éjection d’eau peut-il abîmer le haut-parleur de l’iPhone ? Non, à volume normal. Pourquoi, quel volume choisir et quelles erreurs éviter.',
    short: 'Oui. Un son d’éjection d’eau est un son ordinaire à volume normal, comme de la musique. Restez vers 70–80 %, évitez le maximum longtemps et arrêtez en cas de fort cliquetis.',
    body: '<p>Le haut-parleur de l’iPhone est conçu pour jouer basses, voix et alarmes toute la journée. Un son grave de 30 à 60 secondes est largement dans ses capacités. Ce qui l’abîme, c’est l’usage <em>prolongé</em> au maximum, surtout avec des basses puissantes, qui fait chauffer la bobine.</p><h2>Utilisation sûre</h2><ul class="check-list"><li>Volume à 70–80 %, pas 100 %</li><li>30 à 60 secondes par cycle, courte pause entre les cycles</li><li>Haut-parleur vers le bas</li><li>Arrêtez en cas de bourdonnement ou cliquetis fort</li></ul><h2>Plus risqué que l’éjection d’eau</h2><ul class="check-list check-list--no"><li>Sèche-cheveux et autres sources de chaleur</li><li>Air comprimé dans la grille</li><li>Aiguilles ou coton-tige dans les trous</li><li>Le riz (Apple le déconseille)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'how-long-for-water-to-leave-iphone-speaker', slug: 'combien-de-temps-seche-haut-parleur',
    question: 'Combien de temps sèche le haut-parleur de l’iPhone ?',
    title: 'Combien de temps sèche le haut-parleur de l’iPhone ?',
    description: 'Seul, le haut-parleur de l’iPhone sèche en quelques heures à une journée. Avec un son d’éjection d’eau, 1 à 3 cycles de 30 à 60 secondes suffisent souvent.',
    short: 'Seul, de quelques heures à une journée. Avec un son d’éjection d’eau, l’essentiel sort en 1 à 3 cycles de 30–60 secondes ; après immersion, jusqu’à 5 cycles plus un séchage à l’air.',
    body: '<p>L’eau dans la grille s’évapore lentement parce que la cavité est petite et fermée. C’est pourquoi le son peut rester étouffé des heures après la douche ou la pluie.</p><div class="table-wrap"><table><thead><tr><th>Situation</th><th>Sans aide</th><th>Avec éjection d’eau</th></tr></thead><tbody><tr><td>Éclaboussures, pluie, vapeur de douche</td><td>1–4 heures</td><td>1–2 cycles</td></tr><tr><td>Courte immersion (évier, flaque)</td><td>Plusieurs heures</td><td>2–3 cycles + 30 min de séchage</td></tr><tr><td>Piscine, toilettes, longue immersion</td><td>Jusqu’à 24 heures</td><td>3–5 cycles + plusieurs heures de séchage</td></tr></tbody></table></div><p>Apple conseille d’attendre au moins 30 minutes avant de recharger un iPhone mouillé, et jusqu’à 24 heures si l’alerte de liquide apparaît.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'should-i-put-wet-iphone-in-rice', slug: 'iphone-dans-le-riz',
    question: 'Faut-il mettre un iPhone mouillé dans le riz ?',
    title: 'Mettre un iPhone mouillé dans le riz ? Apple dit non',
    description: 'Apple déconseille de mettre un iPhone mouillé dans le riz : les particules peuvent l’abîmer. À la place : tapoter, sécher à l’air et éjecter l’eau par le son.',
    short: 'Non. Apple le déconseille explicitement, car de petites particules de riz peuvent pénétrer dans l’iPhone. Tapotez-le connecteur vers le bas, laissez-le sécher à l’air et utilisez un son d’éjection d’eau pour le haut-parleur.',
    body: '<p>L’astuce du riz est un mythe dépassé. Le riz n’absorbe pas l’eau plus vite que l’air libre, et la poussière d’amidon ou des morceaux de grains peuvent finir dans le port de charge et les grilles des haut-parleurs. L’<a href="https://support.apple.com/fr-fr/102643" rel="noopener" target="_blank">article d’assistance d’Apple</a> dit clairement de ne pas le faire.</p><h2>À faire à la place</h2><ol class="steps-inline"><li>Essuyez l’iPhone et retirez la coque.</li><li>Tapotez-le doucement contre votre paume, port de charge vers le bas.</li><li>Faites 2–3 cycles d’éjection d’eau, haut-parleur vers le bas.</li><li>Laissez-le dans un endroit sec et aéré ; attendez au moins 30 minutes avant de le recharger.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    id: 'what-frequency-removes-water-from-speaker', slug: 'quelle-frequence-ejecte-eau',
    question: 'Quelle fréquence fait sortir l’eau d’un haut-parleur ?',
    title: 'Quelle fréquence fait sortir l’eau d’un haut-parleur ? (165 Hz)',
    description: 'Les basses fréquences de 150 à 200 Hz, surtout 165 Hz, chassent le mieux l’eau d’un haut-parleur. Pourquoi les sons graves marchent.',
    short: 'Les basses fréquences, autour de 150–200 Hz, sont les plus efficaces ; la plus utilisée est 165 Hz. Avec un son grave, la membrane fait de plus grands mouvements et pousse l’eau à travers la grille.',
    body: '<p>À volume égal, un son plus grave oblige la membrane à bouger davantage. Ce long déplacement pompe l’air — et l’eau — à travers la grille. Mais bien en dessous de 100 Hz, un petit haut-parleur de téléphone reproduit mal le son. La plage pratique est 150–200 Hz, et 165 Hz est devenu la norme grâce au célèbre raccourci Siri.</p><p>Les sessions qui font légèrement varier le son aident à déloger les gouttes tenaces. Ensuite, balayez les fréquences plus aiguës avec un générateur pour vérifier que le haut-parleur sonne net sur toute la plage.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    id: 'can-water-eject-fix-blown-speaker', slug: 'ejection-eau-haut-parleur-grille',
    question: 'L’éjection d’eau répare-t-elle un haut-parleur grillé ?',
    title: 'L’éjection d’eau répare-t-elle un haut-parleur grillé ?',
    description: 'L’éjection d’eau ne répare pas un haut-parleur grillé, mais beaucoup sont juste mouillés ou bouchés. Faites la différence en 2 minutes.',
    short: 'Non : un haut-parleur vraiment grillé est physiquement abîmé et doit être remplacé. Mais beaucoup de haut-parleurs qui sonnent « grillés » sont seulement mouillés ou bouchés, et l’éjection d’eau les répare. Testez avant de payer une réparation.',
    body: '<p>Un haut-parleur grillé a une membrane déchirée ou une bobine abîmée. Aucun son, aucune fréquence ni aucune app ne peut réparer ça. La bonne nouvelle : l’eau et les saletés provoquent presque les mêmes symptômes — grésillement, bourdonnement, distorsion — et ceux-là se corrigent.</p><h2>Test en 2 minutes</h2><ol class="steps-inline"><li>Faites 2–3 cycles d’éjection d’eau.</li><li>Jouez un son propre à 50 %. Toujours déformé ? Il est peut-être grillé.</li><li>Faites un test stéréo. Un côté déformé à tous les volumes : c’est probablement lui qui est abîmé.</li><li>Balayez un générateur de fréquence du grave à l’aigu. Bourdonnement partout = panne ; vibration sur une seule note = saleté.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    id: 'does-water-eject-work-on-airpods', slug: 'ejecter-eau-airpods',
    question: 'L’éjection d’eau marche-t-elle sur les AirPods ?',
    title: 'Peut-on éjecter l’eau des AirPods par le son ?',
    description: 'Peut-on chasser l’eau des AirPods avec un son ? En partie seulement. Ce qui aide, ce que conseille Apple et comment tester l’AirPod gauche et le droit.',
    short: 'En partie seulement. Vous pouvez jouer un son d’éjection d’eau via des AirPods connectés, mais leurs transducteurs sont petits et scellés, l’effet est donc limité. Essuyez-les avec un chiffon non pelucheux, laissez-les sécher, puis testez les canaux gauche et droit.',
    body: '<p>Quand des AirPods sont connectés, le son — y compris le son d’éjection d’eau — passe par leurs propres transducteurs, pas par le haut-parleur de l’iPhone. Cela peut déplacer un peu d’eau de la grille, mais les écouteurs sont minuscules et scellés : le séchage compte plus que le son.</p><h2>Que faire avec des AirPods mouillés</h2><ul class="check-list"><li>Essuyez-les avec un chiffon doux, sec et non pelucheux.</li><li>Laissez-les sécher complètement avant de les remettre dans le boîtier de charge.</li><li>N’utilisez ni chaleur, ni air comprimé, ni objet pointu sur la grille.</li><li>Une fois secs, faites un test stéréo pour vérifier que les deux sonnent pareil.</li></ul><p>Les AirPods (3ᵉ génération), AirPods Pro et modèles ultérieurs résistent à la transpiration et à l’eau, mais ne sont pas étanches.</p>',
    guide: 'left-right-speaker-test'
},
{
    id: 'does-iphone-have-built-in-water-eject', slug: 'iphone-fonction-ejecter-eau',
    question: 'L’iPhone a-t-il une fonction pour éjecter l’eau ?',
    title: 'L’iPhone a-t-il une fonction pour éjecter l’eau ? Non',
    description: 'L’iPhone n’a pas de bouton pour éjecter l’eau : seule l’Apple Watch a le verrouillage eau. Comment éjecter l’eau sur iPhone avec un raccourci ou une app.',
    short: 'Non. Seule l’Apple Watch intègre l’éjection d’eau (verrouillage eau). Sur iPhone, il faut une app comme Clear Wave ou un raccourci Siri communautaire.',
    body: '<p>Le verrouillage eau de l’Apple Watch joue une série de sons pour vider son haut-parleur après la baignade. L’iPhone n’a pas de réglage équivalent, bien que la physique soit la même. Les iPhone XS/XR et ultérieurs signalent du liquide dans le port de charge, mais c’est de la détection, pas de l’éjection.</p><h2>Vos options sur iPhone</h2><ul class="check-list"><li><strong>App d’éjection d’eau</strong> : un geste, hors ligne, avec des tests pour confirmer le résultat.</li><li><strong>Raccourci Siri</strong> : communautaire, à importer d’un site tiers ; peut casser après une mise à jour d’iOS.</li><li><strong>Son sur un site web</strong> : nécessite internet et l’écran allumé.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    id: 'how-many-times-run-water-eject', slug: 'combien-de-fois-ejecter-eau',
    question: 'Combien de fois faut-il éjecter l’eau ?',
    title: 'Combien de fois lancer l’éjection d’eau du haut-parleur ?',
    description: 'Lancez l’éjection d’eau 2 à 3 fois après des éclaboussures, jusqu’à 5 fois après une immersion, 30 à 60 s chacune. Comment savoir quand c’est dégagé.',
    short: '2 à 3 cycles de 30–60 secondes après éclaboussures, pluie ou vapeur de douche. Jusqu’à 5 cycles après une immersion (piscine, toilettes), avec quelques minutes de séchage entre chaque. Arrêtez quand le test stéréo sonne net des deux côtés.',
    body: '<p>Plus n’est pas toujours mieux. Une fois l’eau sortie, les cycles supplémentaires ne servent à rien. Décidez grâce à un petit test entre les cycles.</p><div class="table-wrap"><table><thead><tr><th>Exposition</th><th>Cycles</th></tr></thead><tbody><tr><td>Éclaboussures, bruine, vapeur de douche</td><td>1–2</td></tr><tr><td>Forte pluie, plongeon dans l’évier</td><td>2–3</td></tr><tr><td>Piscine, toilettes, bain</td><td>3–5 + séchage à l’air, à refaire au bout d’une heure</td></tr></tbody></table></div><p>Si après 5 cycles et 24 heures de séchage le son ne s’est pas du tout amélioré, ce n’est probablement pas de l’eau : cherchez de la poussière ou une panne du haut-parleur.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'is-clear-wave-free', slug: 'clear-wave-gratuit',
    question: 'Clear Wave est-il gratuit ?',
    title: 'Clear Wave est-il gratuit ? Prix et contenu',
    description: 'Clear Wave se télécharge gratuitement sur iPhone et iPad. Un abonnement facultatif avec essai gratuit débloque tous les outils. Contenu et résiliation.',
    short: 'Clear Wave se télécharge gratuitement sur iPhone et iPad. Un abonnement intégré facultatif (avec essai gratuit) donne accès à tous les outils : éjection d’eau, test stéréo, générateur de fréquence et sonomètre.',
    body: '<p>Clear Wave — sur l’App Store, <em>« Éjecter eau du haut-parleur »</em> — se télécharge gratuitement. L’accès complet aux outils passe par des achats intégrés facultatifs, avec un essai gratuit et une option à vie. L’App Store affiche le prix actuel dans votre devise avant toute confirmation.</p><h2>Ce que contient l’app</h2><ul class="check-list"><li>Sessions d’éjection d’eau et de nettoyage du haut-parleur</li><li>Test stéréo gauche/droite</li><li>Générateur de fréquence (glissez pour changer la fréquence)</li><li>Sonomètre en dB</li></ul><h2>Gérer l’abonnement</h2><p>Les abonnements sont gérés par Apple. Pour résilier : <em>Réglages → [votre nom] → Abonnements</em> sur l’iPhone. Le partage familial est pris en charge.</p>',
    guide: 'water-eject-app-iphone'
}
];
