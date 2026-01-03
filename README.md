# YouTube Music Dynamic Theme

![](/images/Main.webp)
A custom YouTube Music CSS theme that sets the background to the current song’s cover with blur, subtle animations for a lively feel and Glass-Like UI.

Requires **Better Lyrics** extension for the dynamic background and time-synced lyrics features.

**Note**: The background animation may be CPU-intensive on your PC. You can disable it in the configuration if needed.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Previews](#previews)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

## Features

- Full site-wide theme for YouTube Music
- Dynamic backgrounds that change with the currently playing song
- Light and Dark modes with adjustable colors and settings
- Modern UI with glassmorphism and rounded corners
- Background animations you can toggle on or off
- Easy-to-edit variables for quick personalization

## Installation

### Extensions Needed

- [Better Lyrics Extension For Youtube Music](https://better-lyrics.boidu.dev/). **Required**
- **Stylus** Extension for [Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/). **Optional (Recommended for Easier Setup and Customization)**.

**Browser Notes:**

- Background transitions don’t work in Firefox yet.
- Search box background blur only works in Firefox, not sure why it doesn’t in Chromium-based browsers.

After installing the required extensions, choose one of the methods below:

#### Install with Stylus

1. Click this button below to install.

[![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://raw.githubusercontent.com/chengggit/Youtube-Music-Dynamic-Theme/refs/heads/main/mycustom.user.css)

#### Install with Better Lyrics

Method 1: Install from the Theme Marketplace

1. Open the Better Lyrics extension and go to the Themes section.
2. Open the Theme Marketplace and search for “Dynamic Background”.
3. Click Install.
4. After installing, go back to Themes, open Installed Themes, and click Apply.

---

Method 2: Install using the repository link

1. Copy the repository link.
2. Open the Theme Marketplace, then click Install from URL (or press U on your keyboard).
3. Paste the link and click Install.

Grant permission if prompted.

#### Manual Installation

<details>
  <summary>Better Lyrics </summary>

1. Download and import the [style.rics](/style.rics) in the Better Lyrics theme section.

- Or copy the content of the file and paste it directly into the Better Lyrics theme section.

</details>

<details>
 
  <summary>Stylus</summary>
Method 1: Copy Pasting

1. Copy the content from UserCSS file above or [click here to redirect](/mycustom.user.css).

2. Paste it into Stylus and save. Make sure it is enabled.

---

Method 2: Local File

1. Download the UserCSS above or [click here to redirect](/mycustom.user.css).

2. **Firefox**: Drag and drop the file into your browser.

   **Chrome**: Drag and drop the file into an open Stylus page like the manager or the popup.

3. The installation page will open in a new tab.

</details>

## Previews

![](/images/bgpreview.webp)

### Default

![](/images/Default.webp)

### Light Preset

![](/images/Light2.webp)

### Dark Preset

![](/images/Dark.webp)

## Usage

### How to Update (Stylus only)

1. Click **Manage** in the extension tab to open the style manager.

<img width="248" height="124" alt="aRxFAtBDmo" src="https://github.com/user-attachments/assets/9dd2ca6d-b791-4dd2-a626-a9685533340e" />

2. In style manager, click the update icon.

<img width="387" height="40" alt="msedge_HinJekvKSW" src="https://github.com/user-attachments/assets/15d35ce7-91a4-454f-9bcb-79ef00d2eacb" />

If you don’t see the update icon, make sure **Check for updates** is enabled in the editor: click the style name and check the left-hand tab for the option.

<img width="226" height="88" alt="msedge_rFbiu7squH" src="https://github.com/user-attachments/assets/55c70dc8-6fad-462a-bb7d-651558d9eadb" />

Check if there’s a **raw GitHub** link inside, like the image above. If not, it’s best to reinstall the theme with Stylus.

---

### Configuration

#### For Stylus Users

Open the extension tab, click on the cog button next to the theme to show options.

#### Better Lyrics

Configuration instructions can be found at the top of the theme’s README inside the CSS.

---

#### Compatibility

- Works with Better Lyrics V0.0.0

## License

This theme is licensed under the **MIT License**, allowing you to use, modify, and redistribute it. If you reuse or fork any part of the theme, please credit the original project and preserve this license notice. Any code snippets borrowed from other themes are already credited within this repository.

## Credits

- [walm-git's Modern YouTube Music Theme](https://github.com/walm-git/Modern-YouTube-Music-Theme), which served as the base CSS for this theme.

Snippets used in this theme:

- Background Fix: [Mixcraftio's Customisable Youtube Music Theme V3](https://userstyles.world/style/6678/customisable-youtube-music-theme-v3)
- Search Box and Song Timestamp: [zgoly's YouTube Music Frosted Glass](https://userstyles.world/style/6219/youtube-music-frosted-glass)

The theme is also heavily inspired by “Even Better Lyrics Plus” by Noah & BetterLyrics for **Better Lyrics** extension.

# Thank You ❤️

This CSS was originally based on a theme made by **walm-git.** Since then, I’ve gone through and studied almost every part of it. Now, it’s almost entirely written by me. Countless hours spent in DevTools, asking ChatGPT for explanations and solutions, studying other people’s code, hunting for hidden elements, dealing with frustration, and killing my back. I’m proud to say this has become the best thing I’ve ever created.

I just want to say thank you to everyone using this theme. I hope you enjoy it and love it as much as I do. Thank you to everyone who has supported this project from the start, to those who commented on my Reddit post, shared kind words, and to the people I credited above.

Thank you.

Sincerely,
Cheng
