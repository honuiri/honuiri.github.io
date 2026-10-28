// Builds the project pages from projects-data.js
(function () {
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function makeBar() {
    const bar = el("div", "bar bar--yellow");
    ["PORTFOLIO", "CREATIVES", "YOHANNA DECILIO"].forEach(function (t) {
      bar.appendChild(el("span", null, t));
    });
    return bar;
  }

  /* ---------------- UI/UX & DEVELOPMENT ---------------- */
  const grid = document.getElementById("uiux-grid");

  function addLink(wrap, label, url) {
    if (!url) return;
    const a = el("a", "btn", label);
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    wrap.appendChild(a);
  }

  // Every card starts with a designed cover (project name on a colored pattern).
  // If you have your own image, or a live site, a picture fades in on top of it.
  function buildCover(frame, project, index) {
    frame.classList.add("cover", "cover-" + (index % 3));
    frame.appendChild(el("span", "cover-title", project.title));
    if (project.tags && project.tags.length) {
      frame.appendChild(el("span", "cover-sub", project.tags.join(" · ")));
    }
  }

  // Pictures tried in order: your own image, then a screenshot of the live site.
  function previewSources(project) {
    const list = [];
    if (project.image) list.push(project.image);
    if (project.live) {
      list.push(
        "https://api.microlink.io/?url=" + encodeURIComponent(project.live) +
        "&screenshot=true&meta=false&embed=screenshot.url" +
        "&viewport.width=1200&viewport.height=900&waitForTimeout=2500"
      );
    }
    return list;
  }

  function loadPreview(frame, sources, alt) {
    let i = 0;
    (function tryNext() {
      if (i >= sources.length) return;          // nothing loaded: the cover stays
      const img = document.createElement("img");
      img.alt = alt;
      img.loading = "lazy";
      img.addEventListener("load", function () { img.classList.add("loaded"); });
      img.addEventListener("error", function () { img.remove(); tryNext(); });
      img.src = sources[i++];
      frame.appendChild(img);
    })();
  }

  if (grid && typeof UIUX_PROJECTS !== "undefined") {
    UIUX_PROJECTS.forEach(function (p, index) {
      const card = el("article", "card");

      // the picture links to the live site (or GitHub if there is no live site)
      const href = p.live || p.github;
      const frame = el(href ? "a" : "div", "card-img");
      if (href) {
        frame.href = href;
        frame.target = "_blank";
        frame.rel = "noopener";
        frame.setAttribute("aria-label", "Open " + p.title);
      }
      buildCover(frame, p, index);
      card.appendChild(frame);
      loadPreview(frame, previewSources(p), p.title);

      const body = el("div", "card-body");
      body.appendChild(el("h3", null, p.title));
      if (p.role) body.appendChild(el("p", "role", p.role));
      if (p.description) body.appendChild(el("p", "desc", p.description));

      if (p.tags && p.tags.length) {
        const chips = el("ul", "chips");
        p.tags.forEach(function (t) { chips.appendChild(el("li", null, t)); });
        body.appendChild(chips);
      }

      const links = el("div", "links");
      addLink(links, "GitHub", p.github);
      addLink(links, "Live", p.live);
      if (links.children.length) body.appendChild(links);

      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  /* ---------------- GRAPHIC DESIGN ---------------- */
  const root = document.getElementById("graphic-root");
  const pillsWrap = document.getElementById("cat-pills");

  // Lightbox (click a poster to view it large)
  let lightbox, lightboxImg;
  function openLightbox(src, alt) {
    if (!lightbox) {
      lightbox = el("div", "lightbox");
      lightbox.hidden = true;
      lightboxImg = document.createElement("img");
      const close = el("button", "lightbox-close", "×");
      close.type = "button";
      close.setAttribute("aria-label", "Close");
      lightbox.appendChild(lightboxImg);
      lightbox.appendChild(close);
      lightbox.addEventListener("click", function () { lightbox.hidden = true; });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") lightbox.hidden = true;
      });
      document.body.appendChild(lightbox);
    }
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
  }

  const chevron = function (dir) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' +
      (dir === "prev" ? "M15 4l-8 8 8 8" : "M9 4l8 8-8 8") + '"/></svg>';
  };

  if (root && typeof GRAPHIC_CATEGORIES !== "undefined") {
    const pills = [];
    const sections = [];

    GRAPHIC_CATEGORIES.forEach(function (cat, i) {
      // pill in the hero
      if (pillsWrap) {
        const pill = el("a", "pill", cat.label);
        pill.href = "#" + cat.id;
        pillsWrap.appendChild(pill);
        pills.push(pill);
      }

      // category section
      const sec = el("section", "gcat");
      sec.id = cat.id;
      const title = el("h2", "cat-title");
      title.appendChild(el("span", null, cat.label));
      sec.appendChild(title);

      const carousel = el("div", "carousel");
      const track = el("div", "track");
      const items = cat.items && cat.items.length ? cat.items : [{}, {}, {}];

      items.forEach(function (item) {
        const fig = el("figure", "poster");
        if (item.image) {
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title || cat.label;
          img.loading = "lazy";
          fig.appendChild(img);
          fig.classList.add("has-img");
          fig.tabIndex = 0;
          fig.addEventListener("click", function () { openLightbox(item.image, item.title); });
          fig.addEventListener("keydown", function (e) {
            if (e.key === "Enter") openLightbox(item.image, item.title);
          });
        } else {
          fig.appendChild(el("span", null, "poster"));
        }
        track.appendChild(fig);
      });

      const prev = el("button", "arrow prev");
      prev.type = "button";
      prev.setAttribute("aria-label", "Previous");
      prev.innerHTML = chevron("prev");
      const next = el("button", "arrow next");
      next.type = "button";
      next.setAttribute("aria-label", "Next");
      next.innerHTML = chevron("next");

      function step() {
        const first = track.firstElementChild;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
        return first ? first.getBoundingClientRect().width + gap : track.clientWidth;
      }
      function update() {
        prev.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      }
      prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
      next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
      track.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);

      carousel.appendChild(track);
      carousel.appendChild(prev);
      carousel.appendChild(next);
      sec.appendChild(carousel);
      root.appendChild(sec);
      sections.push(sec);
      requestAnimationFrame(update);

      if (i < GRAPHIC_CATEGORIES.length - 1) root.appendChild(makeBar());
    });

    // Highlight the pill of the category you are looking at
    function setPill(id) {
      pills.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("href") === "#" + id);
      });
    }
    if (pills.length) {
      setPill(GRAPHIC_CATEGORIES[0].id);
      const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setPill(e.target.id); });
      }, { rootMargin: "-40% 0px -55% 0px" });
      sections.forEach(function (s) { obs.observe(s); });
      pills.forEach(function (p) {
        p.addEventListener("click", function () { setPill(p.getAttribute("href").slice(1)); });
      });
    }
  }
})();