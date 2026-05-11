const fs = require('fs');
const path = require('path');
const isWatch = process.argv.includes('--watch');

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

function build() {
  let output = '';
  for (const file of filesInOrder) {
    output += fs.readFileSync(path.join(__dirname, file), 'utf8') + '\n\n';
  }
  fs.writeFileSync('style.rics', output);
  console.log(
    `[${new Date().toLocaleTimeString()}] style.rics built successfully.`,
  );
}

let timeout = null;

if (isWatch) {
  fs.watch('src/better-lyrics', { recursive: true }, (eventType, filename) => {
    if (filename?.endsWith('.rics')) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        console.log(
          `[${new Date().toLocaleTimeString()}] Changed: ${filename}`,
        );
        build();
      }, 100);
    }
  });

  console.log('Watching for changes...');
} else {
  build();
}