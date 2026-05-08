const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '..', 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');

test('twitter card tags use name attribute in template', () => {
  const twitterTags = [
    'twitter:card',
    'twitter:url',
    'twitter:title',
    'twitter:description',
    'twitter:image',
    'twitter:image:width',
    'twitter:image:height'
  ];

  for (const tag of twitterTags) {
    assert.match(
      template,
      new RegExp(`<meta\\s+name="${tag}"\\s+content="[^"]*">`),
      `Expected template to contain name="${tag}"`
    );
  }
});

test('open graph image dimensions are declared in template', () => {
  assert.match(template, /<meta property="og:image:width" content="\{\{meta\.og_image_width\}\}">/);
  assert.match(template, /<meta property="og:image:height" content="\{\{meta\.og_image_height\}\}">/);
});
