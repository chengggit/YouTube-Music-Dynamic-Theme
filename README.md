![](/images/main.webp)

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
- [Development](#development)
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

## Previews

![](/images/lyrics-blur.webp)
[Lyrics blur](/src/docs/CONFIGURATION.md#line-blur): from focused, to partial, to off.

### Preset
Three available presets: `default`, `light`, `dark`
![](/images/preset.webp)

### Layout

#### Corner: Theme Default

![](/images/corner-layout.jpeg)

#### Center: Better Lyrics Default

![](/images/default-layout.jpeg)

### Custom Background

#### Custom Image: [NASA](https://science.nasa.gov/image-detail/wise-infrared-view-of-andromeda-galaxy-and-companions-3/)

![](/images/custom-img.jpeg)

#### Static Color: #212121

![](/images/static.jpeg)

### Pear Desktop

![](/images/pear1.webp)

## Configuration

**Detailed informations about confirguration [here](/src/docs/CONFIGURATION.md).**

All variables are defined at the top of the CSS/RICS file.

- Edit values to customize colors, fonts, layout, and animations
- Supports standard CSS formats (rgb, rgba, hex, etc.)
- Custom fonts must be installed on your system

**Animations**

- Better Lyrics: uses `true` / `false` toggles
- Pear Desktop: set duration to `0s` to disable

**Notes**

- Dynamic backgrounds on Pear require the Album Color Theme plugin
- Better Lyrics includes presets (`default`, `light`, `dark`) as quick starting styles. You can still override any value manually
- Pear Desktop uses CSS variables (`--cfg-*`) and comment-based toggles

## Compatibility

- Better Lyrics v2.2.0 and later
- Pear Desktop 3.11.0 (tested)

## Development

Dynamic Background for Better Lyrics is written in [`rics`](https://github.com/better-lyrics/rics), an in-house CSS preprocessor made by the Better Lyrics team. It is essentially a lightweight SCSS-like preprocessor.

For the Pear Desktop port, the theme is written in plain CSS and uses PostCSS to compile smaller chunks into a single final stylesheet.

### Getting Started

Install the `rics` extension from the VSCode marketplace for syntax highlighting. If you use a different editor or IDE, masking the file as SCSS could work as well.

The `rics` extension is not required for Pear Desktop development.

Install the necessary modules:

```bash
npm install
```

Development commands:

```bash
# Better Lyrics
npm run build-rics  # build once
npm run watch-rics  # watch for changes

# Pear Desktop
npm run build-pear  # build once
npm run watch-pear  # watch for changes
```

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
