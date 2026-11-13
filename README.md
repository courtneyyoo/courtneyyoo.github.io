# Courtney Yoo — Portfolio

A plain HTML/CSS/JavaScript portfolio. You don't need to install or build anything, and it runs on GitHub Pages as-is.

## Files

| File | What it's for |
|---|---|
| `index.html` | Page text: intro, about, contact links |
| `projects.js` | **Your projects.** Add, remove, or edit them here |
| `styles.css` | Colors, fonts, layout (colors are at the top) |
| `script.js` | Filters, project pop-up, dark mode. You usually won't need to touch it |
| `images/` | Project screenshots |

## Adding a project

1. Put a screenshot in `images/` (around 1600×1000 px works well).
2. Open `projects.js`, copy one `{ ... },` block, and paste it below the others.
3. Change the text, set `category` to `"professional"`, `"personal"`, or `"school"`, and set `image` to `"images/your-file.png"`.
4. Save and refresh the page.

## After changing styles.css, projects.js or script.js

Bump the `?v=` number on that file's line in `index.html` (for example `?v=2` → `?v=3`). Otherwise visitors' browsers may keep showing the old version for a while.
