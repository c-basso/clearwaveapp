const test = require('node:test');
const assert = require('node:assert/strict');

const { extractMetaTags, validateOpenGraphTags } = require('./opengraphValidator');

test('extractMetaTags keeps apostrophes inside double-quoted content', () => {
  const html = `
    <meta property="og:description" content="Application gratuite pour retirer l'eau des haut-parleurs iPhone.">
    <meta name="twitter:description" content="Retirez l'eau et réparez le son.">
  `;

  const tags = extractMetaTags(html);

  assert.equal(
    tags['og:description'],
    "Application gratuite pour retirer l'eau des haut-parleurs iPhone."
  );
  assert.equal(
    tags['twitter:description'],
    "Retirez l'eau et réparez le son."
  );
});

test('validateOpenGraphTags does not report short description for valid French apostrophe text', () => {
  const html = `
    <meta property="og:title" content="Titre">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://clearwaveapp.com/fr/">
    <meta property="og:image" content="https://clearwaveapp.com/fr/site_preview.png">
    <meta property="og:site_name" content="Clear Wave - Souffleur">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:logo" content="https://clearwaveapp.com/logo.webp">
    <meta property="og:image:width" content="1026">
    <meta property="og:image:height" content="539">
    <meta property="og:description" content="Application gratuite pour retirer l'eau et la poussière des haut-parleurs iPhone avec ondes sonores. Inclut éjection d'eau, générateur de tons et test stéréo.">
  `;

  const result = validateOpenGraphTags(html, { file: 'fr/index.html', lang: 'fr' });

  assert.equal(result.errors.some((e) => e.includes('og:description is too short')), false);
});
