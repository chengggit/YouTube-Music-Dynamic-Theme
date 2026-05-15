const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { compile } = require('rics');

const isWatch = process.argv.includes('--watch');
const isDev = process.argv.includes('--dev');

const broadcast = isDev ? require('./server.js').broadcast : () => {};

const outputRICSPath = './style.rics';

const filesInOrder = [
  'src/better-lyrics/base/header.rics',
  'src/better-lyrics/base/var.rics',
  'src/better-lyrics/base/typography.rics',

  'src/better-lyrics/components/art.rics',
  'src/better-lyrics/components/panel.rics',
  'src/better-lyrics/components/playerbar.rics',
  'src/better-lyrics/components/searchbox.rics',
  'src/better-lyrics/components/settings.rics',

  'src/better-lyrics/features/animation.rics',
  'src/better-lyrics/features/blyrics.rics',
  'src/better-lyrics/features/toggle.rics',

  'src/better-lyrics/pages/artist.rics',
  'src/better-lyrics/pages/background.rics',
  'src/better-lyrics/pages/home.rics',
  'src/better-lyrics/pages/mobile.rics',
  'src/better-lyrics/pages/player.rics',
  'src/better-lyrics/pages/playlist.rics',
  'src/better-lyrics/pages/search.rics',
  'src/better-lyrics/pages/podcast.rics',
];

async function build() {
  let output = '';
  for (const file of filesInOrder) {
    output += fs.readFileSync(path.join(__dirname, file), 'utf8') + '\n\n';
  }

  if (!isDev) {
    const formatted = await prettier.format(output, {
      parser: 'rics',
      plugins: ['prettier-plugin-rics'],
    });

    fs.writeFileSync(outputRICSPath, formatted);

    console.log(
      `[${new Date().toLocaleTimeString()}] ${outputRICSPath} built successfully.`,
    );
    return;
  }

  const compiledRICS = compile(output);
  fs.writeFileSync('./src/rics-dev.css', compiledRICS);

  console.log(
    `[${new Date().toLocaleTimeString()}] ${outputRICSPath} built and compiled to src/rics-dev.css successfully.`,
  );
}

if (isWatch) {
  let timeout = null;

  fs.watch('src/better-lyrics', { recursive: true }, (eventType, filename) => {
    if (filename?.endsWith('.rics')) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        console.log(
          `[${new Date().toLocaleTimeString()}] Changed: ${filename}`,
        );
        build().then(broadcast);
      }, 100);
    }
  });

  console.log('Watching for changes...');
} else {
  build();
}
