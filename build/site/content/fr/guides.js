const APPLE_WET = { name: 'Assistance Apple : si une alerte de détection de liquide apparaît sur l’iPhone', url: 'https://support.apple.com/fr-fr/102643' };
const APPLE_IP = { name: 'Assistance Apple : résistance aux éclaboussures, à l’eau et à la poussière de l’iPhone 7 et modèles ultérieurs', url: 'https://support.apple.com/fr-fr/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
