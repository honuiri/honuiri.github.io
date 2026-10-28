// ---------- Projects dropdown (tap to open on phones) ----------
const dropdown = document.querySelector(".dropdown");

if (dropdown) {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  const closeMenu = () => {
    dropdown.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    // On computers the menu opens on hover/focus, so only toggle on touch devices
    if (window.matchMedia("(hover: hover)").matches) return;
    const open = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

// ---------- Home page: highlight the current section in the nav ----------
const sectionLinks = document.querySelectorAll(".nav-link[data-section]");
const sections = ["home", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (sectionLinks.length && sections.length) {
  const setActive = (id) => {
    sectionLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ---------- Hamburger menu (phones) ----------
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

if (header && menuToggle) {
  const setMenu = (open) => {
    header.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  menuToggle.addEventListener("click", () => {
    setMenu(!header.classList.contains("menu-open"));
  });

  // close after choosing a page, on Escape, on outside tap, or when the screen gets wide
  header.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  document.addEventListener("click", (e) => { if (!header.contains(e.target)) setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 700) setMenu(false); });
}