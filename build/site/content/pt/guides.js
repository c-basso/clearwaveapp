const APPLE_WET = { name: 'Suporte da Apple: se aparecer um alerta de detecção de líquido no iPhone', url: 'https://support.apple.com/pt-br/102643' };
const APPLE_IP = { name: 'Suporte da Apple: resistência a respingos, água e poeira do iPhone 7 e posteriores', url: 'https://support.apple.com/pt-br/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
