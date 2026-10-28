# Yohanna Decilio | Portfolio

The site has a Home page, two Projects pages (UI/UX & Development and Graphic Design) and a Contact section.
It is built with plain HTML, CSS and JavaScript, with no build step and no frameworks.

Live site: https://honuiri.github.io

## Pages

| Page | File | Contents |
| --- | --- | --- |
| Home + Contact | `index.html` | About, skills, interests, resume link, socials |
| UI/UX & Development | `projects-uiux.html` | Project cards (4 per row on desktop) |
| Graphic Design | `projects-graphic.html` | Category tabs and a carousel per category |

The **Projects** item in the navigation is a dropdown that links to the two project pages.

## Files

```
index.html              Home + Contact page
projects-uiux.html      UI/UX & Development page
projects-graphic.html   Graphic Design page
projects-data.js        Project content: the one file to edit to add, remove or reorder projects
style.css               Shared styles (colors, fonts, header, dropdown, home, contact)
projects.css            Styles for the two project pages
script.js               Navigation dropdown and nav highlight while scrolling
projects.js             Builds the cards and carousels from projects-data.js
assets/                 All images/pdf
```

## Adding and editing projects

Everything on the two project pages comes from **`projects-data.js`**.
The HTML files do not need to be edited for projects.

### UI/UX & Development

A project is added by copying one `{ ... },` block inside `UIUX_PROJECTS`, pasting it after the last one and editing the values:

```js
{
  title: "Project Name",
  role: "UI/UX Designer & Front-end Developer",
  image: "",                                  // optional, a custom picture
  tags: ["HTML", "CSS", "JavaScript"],        // optional small labels
  description: "One or two sentences.",       // optional text on the card
  github: "https://github.com/user/repo",     // "" hides the button
  live: "https://example.com/"                // "" hides the button
},
```

**The card picture is automatic**, chosen in this order:

1. The project's own `image` (for example `"assets/uiux/project.png"`), if one is set.
2. A screenshot of the `live` site (made by the free Microlink service).
3. A designed cover showing the project name and tags, if there is no picture.

Clicking the picture opens the live site, or GitHub when there is no live link.
Cards flow 4 per row on desktop, 2 on tablets and 1 on phones, and extra projects simply add more rows.

Notes:
- Render's free plan puts sites to sleep, so a screenshot of a sleeping site can show a loading page.
  Opening the live site once wakes it. Setting `image` gives full control over the picture.
- If the screenshot is slow or fails, the designed cover stays in place, so a card is never blank.

### Graphic Design

Each category in `GRAPHIC_CATEGORIES` has a list of `items`. Items can be added without limit, and the carousel scrolls:

```js
{ title: "Poster title", image: "assets/my-poster.png" },
```

- Clicking a poster on the site opens it large.
- `image: ""` shows a gray placeholder.
- **Adding a category:** copy a whole `{ id, label, items: [ ... ] }` block and give it a new `id` and `label`.
  The tab, the section and the yellow bars are created automatically.
- **Reordering categories:** move the blocks around inside `GRAPHIC_CATEGORIES`. The page follows that order.
  Every block needs a comma after it except the last one.

## Images

Images live in the `assets/` folder and are referenced as `assets/file-name.png`.

- File names are **case-sensitive** on GitHub: `Ramen.PNG` is not the same as `ramen.png`.
- Lowercase names with dashes and no spaces work best (`quiz-bee.png`).
- Smaller files load faster, so posters under about 1 MB are ideal.
- Profile photo: in `index.html`, replace `<span>sample pic here</span>` with
  `<img src="assets/profile.jpg" alt="Yohanna Decilio">`.

## Other edits

| What | Where |
| --- | --- |
| Contact details | Socials block at the bottom of `index.html` |
| About, skills, interests | `index.html` |
| Resume | A file named `resume.pdf` next to `index.html` |
| Colors and fonts | The `:root` block at the top of `style.css` |
| Interest icon spacing | `.interests` in `style.css` |

Fonts: **Annie Use Your Telescope** (logo) and **Iosevka Charon** (everything else), loaded from Google Fonts.
If a font does not appear, the site falls back to a plain monospace font.

Style guide colors: `#F6E6A5` yellow, `#3971B8` blue, `#C8D69B` green, `#FBFCEE` cream, `#43302E` brown.

## Deploying on GitHub Pages

1. The repository must be **public** and named `USERNAME.github.io`.
2. All files sit at the **top level** of the `main` branch (not inside a folder), with images inside `assets/`.
3. **Settings → Pages → Build and deployment:** Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
4. After about 1 to 2 minutes the site is live at `https://USERNAME.github.io`.

### Updating the site

1. In the repository, choose **Add file → Upload files**.
2. Drag in the changed files and any new images. Files with the same name replace the old ones.
3. Click **Commit changes** and wait about a minute.
4. Hard refresh the site with **Ctrl+Shift+R** (a private tab works on phones) to skip cached versions.

Each deploy can be followed under the repository's **Actions** tab. A green check means the update is live.

## Troubleshooting

| Problem | Likely fix |
| --- | --- |
| Changes do not show | Confirm that **Commit changes** was clicked, then hard refresh (Ctrl+Shift+R) |
| Project pages are empty | `projects-data.js` is missing from the top level of the repository, or contains a typo (a missing comma or bracket). Press F12, open **Console**, and read the red message |
| A poster shows a gray box | The path in `projects-data.js` does not match the file in `assets/` exactly (check capital letters and the extension) |
| 404 on a project page | That HTML file was not uploaded to the top level of the repository |
| A UI/UX card shows the cover instead of a screenshot | The project has no `live` link, or the site was asleep or slow. Setting `image` gives a fixed picture |
| Fonts look different | Google Fonts did not load. Check the connection and refresh |

## Credits

Designed and built by Yohanna Decilio.