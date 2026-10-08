import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";
import { compile } from "rics";

const ISWATCH = process.argv.includes("--watch");
const ISDEV = process.argv.includes("--dev");

const RICSPATHOUT = "./style.rics";
const CSSPATHOUT = "./src/rics-dev.css";
const WATCHDIR = path.join(import.meta.dirname, "src/better-lyrics");

const RICSFILESINORDER = [
  "src/better-lyrics/base/header.rics",
  "src/better-lyrics/base/var.rics",
  "src/better-lyrics/base/typography.rics",

  "src/better-lyrics/components/art.rics",
  "src/better-lyrics/components/panel.rics",
  "src/better-lyrics/components/playerbar.rics",
  "src/better-lyrics/components/searchbox.rics",
  "src/better-lyrics/components/settings.rics",

  "src/better-lyrics/features/animation.rics",
  "src/better-lyrics/features/blyrics.rics",
  "src/better-lyrics/features/toggle.rics",

  "src/better-lyrics/pages/artist.rics",
  "src/better-lyrics/pages/background.rics",
  "src/better-lyrics/pages/home.rics",
  "src/better-lyrics/pages/mobile.rics",
  "src/better-lyrics/pages/player.rics",
  "src/better-lyrics/pages/playlist.rics",
  "src/better-lyrics/pages/search.rics",
  "src/better-lyrics/pages/podcast.rics",
];

// the ws server only runs in dev, so only load it then
const { broadcast } = ISDEV ? await import("./server.js") : { broadcast: () => {} };

function concatRics() {
  return RICSFILESINORDER.map((file) =>
    fs.readFileSync(path.join(import.meta.dirname, file), "utf8"),
  ).join("\n\n");
}

// format and write to style.rics
async function buildRics(rics) {
  const formatted = await prettier.format(rics, {
    parser: "rics",
    plugins: ["prettier-plugin-rics"],
  });

  fs.writeFileSync(RICSPATHOUT, formatted);

  console.log(`[${new Date().toLocaleTimeString()}] ${RICSPATHOUT} built successfully.`);
}

// compile to src/rics-dev.css for the browser preview
function compileRics(rics) {
  fs.writeFileSync(CSSPATHOUT, compile(rics));

  console.log(`[${new Date().toLocaleTimeString()}] ${CSSPATHOUT} built successfully.`);
}

function watchRics() {
  let timeout = null;

  fs.watch(WATCHDIR, { recursive: true }, (eventType, filename) => {
    if (!filename?.endsWith(".rics")) return;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      console.log(`[${new Date().toLocaleTimeString()}] ${eventType}: ${filename}`);

      build().catch((error) => {
        console.log(`[${new Date().toLocaleTimeString()}] ${error.message}`);
      });
    }, 100);
  });

  console.log("Watching for changes...");
}

async function build() {
  const rics = concatRics();

  await buildRics(rics);

  if (ISDEV) {
    compileRics(rics);
    broadcast();
  }
}

async function main() {
  try {
    await build();
  } catch (error) {
    console.log(`[${new Date().toLocaleTimeString()}] ${error.message}`);
    process.exitCode = 1;
  }

  if (ISWATCH) watchRics();
}

main();
