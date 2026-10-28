/* ==========================================================
   YOUR PROJECTS LIVE HERE.
   To add a project, copy one { ... }, block, paste it
   below the last one, and edit it. No other file needs to change.
   ========================================================== */

/* ---------- UI/UX & DEVELOPMENT (4 per row on desktop) ----------
   The picture on each card is AUTOMATIC. You do not need images.
     1. If you set image: "assets/..." that picture is used.
     2. Otherwise, a screenshot of your live site is shown.
     3. If there is no picture, the card shows a designed cover with the project name.
   Clicking the picture opens the live site (or GitHub if there is no live link).
   Leave github or live as "" to hide that button.
   Optional: add description: "one or two sentences" to any project to show text on its card. */
const UIUX_PROJECTS = [
  {
    title: "D' Noms of Decilio (DND)",
    role: "UI/UX Designer & Developer",
    image: "",                                   // optional: your own picture, e.g. "assets/uiux/dnd.png"
    tags: ["HTML", "CSS", "React"],              // optional small labels
    github: "https://github.com/honuiri/D-Noms-of-Decilio",
    live: "https://d-noms-of-decilio.onrender.com/"
  },
  {
    title: "AniMedika",
    role: "UI/UX Designer & Front-end Developer",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/cinemaseven/AniMedika-A-Rice-Leaf-Disease-Detection-System",
    live: "https://animedika-a-rice-leaf-disease-detection.onrender.com/"
  },
  {
    title: "eLinkgod",
    role: "UI/UX Designer & Front-end Developer",
    image: "",
    tags: ["Dart", "C++", "HTML"],
    github: "https://github.com/cinemaseven/eLingkod",
    live: ""
  },
  {
    title: "Bake & Co.",
    role: "UI/UX Designer & Front-end Developer",
    image: "",
    tags: ["Flutter", "Dart"],
    github: "https://github.com/roki-a/bakeandco",
    live: ""
  },
  {
    title: "Truth in Tales",
    role: "UI/UX Designer",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RandelYumul/Truth_in_Tales",
    live: "https://randelyumul.github.io/Truth_in_Tales/"
  }
];

/* ---------- GRAPHIC DESIGN ----------
   Each category has a list of posters/images shown in a carousel.
   Add as many items as you want, the carousel scrolls.
   To add a category, copy a whole { id, label, items } block. */
const GRAPHIC_CATEGORIES = [
  {
    id: "branding",
    label: "Branding & Identity",
    items: [
      { title: "Branding title", image: "assets/aikocha.png" }
    ]
  },
  {
    id: "academic",
    label: "Academic Projects",
    items: [
      { title: "Academic project", image: "assets/quiz-bee.png" },
      { title: "Academic project", image: "assets/soc-days.png" },
      { title: "Academic project", image: "assets/creatives-team.png" },
      { title: "Academic project", image: "assets/singing-compe.png" },
      { title: "Academic project", image: "assets/uni-girls.png" },
      { title: "Academic project", image: "assets/uni-boys.png" }
    ]
  },
  {
    id: "fan",
    label: "Fan Projects",
    items: [
      { title: "Fan project", image: "assets/tenyears.png" },
      { title: "Fan project", image: "assets/stayc.png" },
      { title: "Fan project", image: "assets/sunric.png" },
      { title: "Fan project", image: "assets/taerae.png" },
      { title: "Fan project", image: "assets/beatbox.png" },
      { title: "Fan project", image: "assets/SUNWOO.png" }
    ]
  },
  {
    id: "posters",
    label: "Posters",
    items: [
      { title: "Poster title", image: "assets/ramen.png" },
      { title: "Poster title", image: "assets/yesterday.png" }
    ]
  }
];