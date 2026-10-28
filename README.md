# Yohanna Decilio | Portfolio

Static portfolio site (HTML + CSS + a little JS). No build step.

## Files

```
index.html             Home + Contact
projects-uiux.html     Projects: UI/UX & Development
projects-graphic.html  Projects: Graphic Design
projects-data.js       <-- YOUR PROJECTS: edit this to add/remove projects
style.css              shared styles (colors, fonts, header, home, contact)
projects.css           styles for the two project pages
script.js              nav dropdown + nav highlight
projects.js            builds the project cards/carousels from projects-data.js
resume.pdf             (add yours, the "View my Resume" link points here)
assets/                (add images here)
  profile.jpg
  uiux/                screenshots of your UI/UX & dev projects
  graphic/             posters etc.
```

## Adding projects

Open `projects-data.js`.

- **UI/UX & Dev:** copy one `{ ... }` block under `UIUX_PROJECTS`, paste it after the last one,
  and edit the title, role, image, tags, GitHub and live links. Cards flow 4 per row
  on desktop (2 on tablet and phone) and the page grows as you add more.
  Leave `github` or `live` as `""` to hide that button.
- **Graphic Design:** add `{ title: "...", image: "assets/graphic/posters/my-poster.jpg" }`
  to a category's `items`. The carousel scrolls, so there is no limit. Click a poster on
  the site to view it large. Copy a whole `{ id, label, items }` block to add a new category.

Then upload the changed files and the new images to GitHub (Add file > Upload files > Commit).

## Deploy on GitHub Pages

1. Repo named `YOUR-USERNAME.github.io` (public), files at the top level of `main`.
2. Settings > Pages > Deploy from a branch > `main` / `(root)` > Save.
3. Live at `https://YOUR-USERNAME.github.io` after a minute or two.

## Other edits

- Photo: in `index.html`, replace `<span>sample pic here</span>` with `<img src="assets/profile.jpg" alt="Yohanna Decilio">`.
- Contact details: Socials block at the bottom of `index.html`.
- Colors and fonts: the `:root` block at the top of `style.css`.