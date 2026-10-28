/* ==========================================================
   YOUR PROJECTS LIVE HERE.
   To add a project, copy one { ... }, line block, paste it
   below the last one, and edit it. No other file needs to change.
   Put images in the assets folder, e.g. "assets/uiux/my-app.png".
   Leave image: "" to show a gray placeholder.
   ========================================================== */

/* ---------- UI/UX & DEVELOPMENT (4 per row on desktop) ---------- */
const UIUX_PROJECTS = [
  {
    title: "Project Name",
    role: "UI/UX Designer & Developer",
    image: "",                                   // e.g. "assets/uiux/project-1.png"
    tags: ["Figma", "HTML", "CSS"],              // optional small labels
    github: "https://github.com/honuiri",        // leave "" to hide the button
    live: ""                                     // optional, leave "" to hide
  },
  {
    title: "Project Name",
    role: "UI/UX Designer",
    image: "",
    tags: ["Figma", "Prototype"],
    github: "",
    live: ""
  },
  {
    title: "Project Name",
    role: "Front-end Developer",
    image: "",
    tags: ["React", "CSS"],
    github: "https://github.com/honuiri",
    live: ""
  },
  {
    title: "Project Name",
    role: "UI/UX Designer & Developer",
    image: "",
    tags: ["Figma", "JavaScript"],
    github: "",
    live: ""
  }
];

/* ---------- GRAPHIC DESIGN ----------
   Each category has a list of posters/images shown in a carousel.
   Add as many items as you want, the carousel scrolls.
   To add a category, copy a whole { id, label, items } block. */
const GRAPHIC_CATEGORIES = [
  {
    id: "posters",
    label: "Posters",
    items: [
      { title: "Poster title", image: "" },      // e.g. "assets/graphic/posters/ramen.jpg"
      { title: "Poster title", image: "" },
      { title: "Poster title", image: "" }
    ]
  },
  {
    id: "branding",
    label: "Branding & Identity",
    items: [
      { title: "Branding title", image: "" },
      { title: "Branding title", image: "" },
      { title: "Branding title", image: "" }
    ]
  },
  {
    id: "academic",
    label: "Academic Projects",
    items: [
      { title: "Academic project", image: "" },
      { title: "Academic project", image: "" },
      { title: "Academic project", image: "" }
    ]
  },
  {
    id: "fan",
    label: "Fan Projects",
    items: [
      { title: "Fan project", image: "" },
      { title: "Fan project", image: "" },
      { title: "Fan project", image: "" }
    ]
  }
];