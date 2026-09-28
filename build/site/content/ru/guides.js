const APPLE_WET = { name: 'Apple Support — если на iPhone появилось предупреждение об обнаружении жидкости', url: 'https://support.apple.com/ru-ru/102643' };
const APPLE_IP = { name: 'Apple Support — защита от брызг, воды и пыли iPhone 7 и новее', url: 'https://support.apple.com/ru-ru/108039' };
const SOURCES = {
    'get-water-out-of-iphone-speaker': [APPLE_WET],
    'iphone-dropped-in-water': [APPLE_WET, APPLE_IP],
    'how-to-fix-iphone-speaker': [APPLE_IP]
};
module.exports = [...require('./guides-a'), ...require('./guides-b'), ...require('./guides-c')]
    .map((g) => ({ ...g, sources: g.sources || SOURCES[g.id] || [] }));
