# Theme Configuration

This theme comes in two versions for each different platforms:

| Version | Platform                                                  | Config style             |
| ------- | --------------------------------------------------------- | ------------------------ |
| RICS    | [Better Lyrics](https://better-lyrics.boidu.dev/)         | `$variable: value;`      |
| CSS     | [Pear Desktop](https://github.com/pear-devs/pear-desktop) | `--cfg-variable: value;` |

This document covers the RICS version. Pear Desktop / CSS documentation is coming soon.

## Basics

Configuration variables are defined at the top of the theme file. Every line must end with a semicolon (`;`) or the theme will break.

The preset is the base layer for the entire theme. Any variable set to `null` falls back to whatever the active preset defines. If you want a consistent look without tweaking everything, pick a preset and only override what you need.

```scss
$preset: default; // default | light | dark
```

Setting a variable to `null` inherits its value from the active `$preset`. This means you can switch presets and any `null` variables will automatically follow, while explicitly set values stay fixed.

```scss
$preset: dark; // Sets the base theme
$bg-blur: null; // Inherits blur from the dark preset
$bg-blur: 0.6; // Overrides (ignores the preset's value)
```

## Background

```scss
$background: dynamic;
```

Accepts three types of values:

- `dynamic` — pulls colors from the current song's album artwork.
- A color value — any valid CSS color (hex, `rgb()`, `hsl()`).
- An image URL — `url('https://example.com/image.jpg')`.

The remaining background variables fine-tune how the background looks.

| Variable             | Default | Range       | Description                                                               |
| -------------------- | ------- | ----------- | ------------------------------------------------------------------------- |
| `$bg-brightness`     | `null`  | `0` to `1`  | Darkens or lightens the background. `0` is black, `1` is full brightness. |
| `$bg-blur`           | `0.6`   | `0` to `1`+ | Blur intensity. The value is multiplied by 100px, so `0.6` = 60px blur.   |
| `$bg-saturate`       | `1.5`   | `0`+        | Color vibrancy. `1` is unchanged, higher values are more vivid.           |
| `$bg-scale`          | `1.2`   | `1`+        | Zoom level. Values below `1` may show edges of the image.                 |
| `$bg-player-opacity` | `0.8`   | `0` to `1`  | Transparency of the player page overlay on top of the home page.          |

## Typography

```scss
$font-family: 'Inter', 'Apple SD Gothic Neo';
$font-weight: 400;
```

`$font-family` accepts a comma-separated list of font names in quotes. The browser tries each font in order and uses the first one that is installed on the system. This is useful for multi-language support — for example, pairing a Latin font with a CJK fallback.

The font must be installed on your system. Fonts that are not installed will fall back to the browser default.

`$font-weight` controls the boldness of the main UI text. Standard values are `400` (regular) and `700` (bold), though any value from `100` to `900` is valid depending on what the font supports.

## Colors

```scss
$text-primary: white;
$text-secondary: rgba(white, 0.7);
$icon: white;
$accent: white;
$accent-icon: white;
$accent-highlight: mix($accent, white, 70%);
```

All variables accept any valid CSS color. Using `rgba()` lets you control opacity, which is useful for secondary elements.

| Variable            | Description                                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$text-primary`     | Main text — song titles, primary labels.                                                                                                                                                                       |
| `$text-secondary`   | Supporting text — subtitles, artist names, timestamps.                                                                                                                                                         |
| `$icon`             | Default color for buttons and icons in their resting state.                                                                                                                                                    |
| `$accent`           | Highlight color used on active states, selected items, and titles.                                                                                                                                             |
| `$accent-icon`      | Accent color specifically for interactive icons like the like button, active shuffle, and repeat.                                                                                                              |
| `$accent-highlight` | Hover state color derived from `$accent`. Defaults to a 70% mix of `$accent` and white. Override this if you want hover states to be a different color entirely rather than a lightened version of the accent. |

## Lyrics

```scss
$fullscreen-layout: corner; // corner | center
$lyrics-font-size: 40px;
$lyrics-font-weight: 600;
```

`$fullscreen-layout` controls where the album art sits in fullscreen mode. `corner` anchors it to the bottom left corner of the screen and pushes the lyrics more to the right. `center` uses the default album art centered layout.

### Line Blur

```scss
$lyrics-blur-lines: (
  previous: true,
  current: false,
  upcoming: true,
);
$lyrics-blur-amount: 6px;
```

Controls which lyric lines are blurred to draw focus to the active line. Each key maps to a lyric position relative to the currently playing line. Set a position to `false` to unblur those lines.

`$lyrics-blur-amount` sets the intensity of the blur.

## UI Components

```scss
$album-art-size: 400px;

$ui-color: null;
$ui-contrast: null;
$ui-highlight: null;
$ui-blur: 10px;
$ui-border: transparent;
$ui-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

$btn-color: null;
$btn-highlight: null;
$btn-border: transparent;
```

| Variable          | Description                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `$album-art-size` | Size of the album artwork in the player.                                                                                       |
| `$ui-color`       | Background fill for main panels.                                                                                               |
| `$ui-contrast`    | Background fill for secondary panels that sit on top of another panel.                                                         |
| `$ui-highlight`   | Background color when hovering or selecting items.                                                                             |
| `$ui-blur`        | Backdrop blur applied behind panels.                                                                                           |
| `$ui-border`      | Border style for panels. Use `transparent` for no border, or a value like `1px solid rgba(255,255,255,0.1)` for a subtle edge. |
| `$ui-shadow`      | Box shadow for panels. Format: `x-offset y-offset blur color` .                                                                |
| `$btn-color`      | Default background for buttons.                                                                                                |
| `$btn-highlight`  | Button background on hover.                                                                                                    |
| `$btn-border`     | Border style for buttons. Follows the same format as `$ui-border`.                                                             |

**Note:**

Shadow values separated with commas or line breaks must be wrapped in quotes.

```scss
$ui-shadow: 'rgba(0, 0, 0, 0.3) 0 10px 24px -6px, 
inset rgba(255, 255, 255, 0.1) 0 1px 0 0';
```

## Corner Radius

Units can be `px`, `%`, `em`, etc. Higher values = rounder corners. Lower values = sharp square corners.

| Variable               | Default | Applies to                     |
| ---------------------- | ------- | ------------------------------ |
| `$radius-art`          | `8px`   | Album art, small size          |
| `$radius-art-md`       | `16px`  | Album art, medium size         |
| `$radius-art-lg`       | `20px`  | Album art, large size          |
| `$radius-btn`          | `12px`  | Standard buttons               |
| `$radius-btn-alt`      | `16px`  | Alternate / pill-style buttons |
| `$radius-highlight`    | `8px`   | Hover overlay elements         |
| `$radius-highlight-lg` | `12px`  | Larger hover overlays          |
| `$radius-panel`        | `12px`  | Popups and dropdowns           |
| `$radius-panel-lg`     | `24px`  | Larger panels                  |

## Features and Toggles

Set to `true` to enable, `false` to disable.

| Variable                      | Description                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `$small-video`                | Reverts the video to YouTube's default size.                                                                                |
| `$unified-artists-lines`      | Forces a single consistent alignment for all singer lines in synced lyrics, rather than aligning each singer independently. |
| `$increment-skip-buttons`     | Adds -10s and +30s skip buttons to the player bar.                                                                          |
| `$centered-playback-controls` | Moves the play and skip buttons to the center of the player bar, similar to Spotify's layout.                               |

## Animations

Animations are split into two parts: a toggle that enables or disables the animation entirely, and duration/timing variables that control how it feels. Setting a toggle to `false` removes the animation.

| Toggle                            | Duration                                          | Notes                                                                                                         |
| --------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `$anim-extra`                     | —                                                 | Additional animations for UI and interactions.                                                                |
| `$anim-bg-transition`             | `$anim-bg-duration`                               | Crossfades the background when the song changes.                                                              |
| `$anim-player-page`               | `$anim-player-page-duration`                      | Open/close animation for player page.                                                                         |
| `$anim-fade`                      | `$anim-fade-duration` / `$anim-fade-duration-alt` | Fade transitions across most UI elements. `-alt` is used for slower or more deliberate transitions.           |
| `$anim-drawer`                    | `$anim-drawer-duration`                           | Open/close animation for the sidebar drawer.                                                                  |
| `$anim-no-lyrics-centered-player` | `$anim-no-lyrics-duration`                        | Centers the album art when no lyrics are available. Delayed by `$anim-no-lyrics-slide-delay` before starting. |
| —                                 | `$lyric-scroll-duration`                          | Speed of lyric line movement as the song progresses.                                                          |

Animations with a `*-timing` variable accept any CSS easing value (`linear`, `ease-in-out`, `cubic-bezier(...)`, etc.).

## Pear Desktop (CSS)

Documentation for the Pear Desktop CSS version is coming soon.
