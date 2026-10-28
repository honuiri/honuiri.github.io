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