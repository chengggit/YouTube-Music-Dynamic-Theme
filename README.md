![](/images/Main.webp)

# Dynamic Background

A features rich and highly customizable YouTube Music theme featuring dynamic backgrounds and glassmorphism. Available for [Better Lyrics Extension](https://better-lyrics.boidu.dev/) and [Pear Desktop](https://github.com/pear-devs/pear-desktop).

<div align="center">

[![Install](https://img.shields.io/endpoint?url=https%3A%2F%2Fbetter-lyrics-themes-api.boidu.dev%2Fapi%2Fbadge%2Fdynamic-background%3F&style=flat&labelColor=212121&color=f0134d)](https://github.com/chengggit/YouTube-Music-Dynamic-Theme)
[![Ratings](https://img.shields.io/endpoint?url=https%3A%2F%2Fbetter-lyrics-themes-api.boidu.dev%2Fapi%2Fbadge%2Fdynamic-background%2Frating%3F&style=flat&label=Ratings&labelColor=212121&color=f0134d)](https://github.com/chengggit/YouTube-Music-Dynamic-Theme)

</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Previews](#previews)
- [Configuration](#configuration)
- [Compatibility](#compatibility)
- [License](#license)
- [Credits](#credits)

## Features

- Full site-wide theme for YouTube Music
- Dynamic backgrounds that change with the current song, or use static colors/images
- Highly customizable
- Modern glassmorphism UI with blur and rounded corners
- Smooth, configurable animations that can be adjusted or disabled

Toggleable player enhancements:

- Centered player controls
- Increment skip buttons

**Note**: The animations may affect performance and can be disabled in the settings.

## Installation

### Better Lyrics (Extension)

Install [Better Lyrics Extension For Youtube Music](https://better-lyrics.boidu.dev/).

**Known Limitations**

- Background transitions don’t work in Firefox yet.

**Method 1 (Built-in)**:

- Open extension settings → Themes → Click Change → Select Dynamic Background.

**Method 2 (Marketplace)**:

- Open Theme Marketplace → Search for "Dynamic Background" → Click Install.

### Pear Desktop (App)

The Album Color Theme plugin is required for dynamic background functionality.

**Known Limitations**

- Dynamic backgrounds behave differently from the Better Lyrics version, as Pear Desktop does not provide a variable for fetching the song’s album cover. This implementation relies on the Album Color Theme plugin as a workaround.

- On Pear Desktop 3.11.0, the Album Color Theme plugin has been reported to not work properly on some systems such as macOS, Fedora, and Arch-based Linux. See [#3857](https://github.com/pear-devs/pear-desktop/issues/3857).

- The search suggestion background blur workaround does not work on Pear Desktop yet due to its current Chromium 140 base, where CSS anchor behavior differs from Chromium 144+. This should be resolved once Pear updates to a compatible Chromium version.

#### Installation

1. Download [`style.css`](/style.css)
2. Open the app menu → **Options** → **Visual Tweaks** → **Theme** → **Import custom CSS file**
3. Select the downloaded `style.css`
4. Restart the app

---

## Previews

### Better Lyrics

![](/images/bgpreview.webp)

#### Default

![](/images/Default.webp)

#### Light Preset

![](/images/Light2.webp)

#### Dark Preset

![](/images/Dark.webp)

#### Custom Image

![](/images/custompreview.webp)
Image: [NASA](https://science.nasa.gov/image-detail/wise-infrared-view-of-andromeda-galaxy-and-companions-3/)

Background Blur Setting: 0.05

#### Static Color

![](/images/staticpreview.webp)

### Pear Desktop

![](/images/pear1.webp)

## Configuration

All variables are defined at the top of the CSS/RICS file.

- Edit values to customize colors, fonts, layout, and animations
- Supports standard CSS formats (rgb, rgba, hex, etc.)
- Custom fonts must be installed on your system

**Animations**

- Better Lyrics: uses `on` / `off` toggles
- Pear Desktop: set duration to `0s` to disable

**Notes**

- Dynamic backgrounds on Pear require the Album Color Theme plugin
- Better Lyrics includes presets (`default`, `light`, `dark`) as quick starting styles. You can still override any value manually
- Pear Desktop uses CSS variables (`--cfg-*`) and comment-based toggles

## Compatibility

- Better Lyrics v2.2.0 and later
- Pear Desktop 3.11.0 (tested)

## License

This theme is licensed under the **MIT License**, allowing you to use, modify, and redistribute it. If you reuse or fork any part of the theme, please credit the original project and preserve this license notice. Any code snippets borrowed from other themes are already credited within this repository.

## Credits

- [walm-git's Modern YouTube Music Theme](https://github.com/walm-git/Modern-YouTube-Music-Theme), which served as the base CSS for this theme.

Snippets used in this theme:

- Background Fix: [Mixcraftio's Customisable Youtube Music Theme V3](https://userstyles.world/style/6678/customisable-youtube-music-theme-v3)
- Search Box and Song Timestamp: [zgoly's YouTube Music Frosted Glass](https://userstyles.world/style/6219/youtube-music-frosted-glass)

The theme is also heavily inspired by “Even Better Lyrics Plus” by Noah & BetterLyrics for **Better Lyrics** extension.

## Thank You ❤️

This CSS started from a theme made by **walm-git**, and over time I’ve rebuilt nearly every part of it. It’s now mostly my own work. I’m really proud of how it turned out and have learned a lot from this project alone.

Thanks to everyone who uses this theme. I hope you enjoy using it as much as I do. And thank you to everyone who supported the project from the beginning and to those who left feedback, shared kind words, and the people credited above.

Thank you.
