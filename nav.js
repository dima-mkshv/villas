// VILLAE ROMANAE — shared top navigation: language sync, About modal,
// and a mobile burger menu that mirrors all nav options.
// Pages set <body data-page="villas|timeline|sites">. Each page script listens
// for the "vr:langchange" event and re-renders its own content.
"use strict";

(function () {
  const NAV_I18N = {
    ru: {
      villas: "Карта вилл", timeline: "Таймлайн", sites: "Карта объектов", filters: "Фильтры",
      about: "О проекте", aboutTitle: "О проекте", aboutLine: "Завайбкожено Димой", aboutClose: "Закрыть"
    },
    en: {
      villas: "Villa map", timeline: "Timeline", sites: "Sites map", filters: "Filters",
      about: "About", aboutTitle: "About", aboutLine: "vibecoded by Dima", aboutClose: "Close"
    }
  };

  const PAGES = [
    { nav: "villas", href: "index.html" },
    { nav: "timeline", href: "timeline.html" },
    { nav: "sites", href: "sites.html" }
  ];

  const VALID = ["ru", "en"];
  const langFromUrl = () => {
    const p = new URLSearchParams(location.search).get("lang");
    return VALID.includes(p) ? p : null;
  };
  const getLang = () => langFromUrl() || localStorage.getItem("vr_lang") || "ru";

  function updateUrl(lang) {
    const u = new URL(location.href);
    if (u.searchParams.get("lang") === lang) return;
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u);
  }

  function applyNav() {
    const lang = getLang();
    document.querySelectorAll("[data-i18n-nav]").forEach(el => {
      const k = el.dataset.i18nNav;
      if (NAV_I18N[lang] && NAV_I18N[lang][k]) el.textContent = NAV_I18N[lang][k];
    });
    document.querySelectorAll(".site-nav .lang-btn").forEach(b =>
      b.classList.toggle("active", b.dataset.lang === lang)
    );
    const page = document.body.dataset.page;
    document.querySelectorAll(".nav-tabs a").forEach(a =>
      a.classList.toggle("active", a.dataset.nav === page)
    );
    updateAbout(lang);
    updateMenu(lang, page);
  }

  function setLang(lang) {
    localStorage.setItem("vr_lang", lang);
    updateUrl(lang);
    applyNav();
    window.dispatchEvent(new CustomEvent("vr:langchange", { detail: { lang } }));
  }

  /* ---------- About modal ---------- */
  function ensureAboutModal() {
    if (document.getElementById("about-overlay")) return;
    const overlay = document.createElement("div");
    overlay.className = "about-overlay";
    overlay.id = "about-overlay";
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title">' +
        '<button class="about-x" id="about-close" aria-label="Close">×</button>' +
        '<div class="about-emoji">🏛️</div>' +
        '<h2 class="about-title" id="about-title"></h2>' +
        '<p class="about-line"></p>' +
        '<div class="about-links">' +
          '<a href="https://t.me/OdondonLabama" target="_blank" rel="noopener">✈️ Telegram — @OdondonLabama</a>' +
          '<a href="https://www.instagram.com/ungin/" target="_blank" rel="noopener">📸 Instagram — @ungin</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener("click", e => { if (e.target === overlay) closeAbout(); });
    overlay.querySelector("#about-close").addEventListener("click", closeAbout);
  }

  function updateAbout(lang) {
    const t = document.querySelector("#about-overlay .about-title");
    const l = document.querySelector("#about-overlay .about-line");
    const x = document.querySelector("#about-overlay .about-x");
    if (t) t.textContent = NAV_I18N[lang].aboutTitle;
    if (l) l.textContent = NAV_I18N[lang].aboutLine;
    if (x) x.setAttribute("aria-label", NAV_I18N[lang].aboutClose);
  }

  function openAbout() { const o = document.getElementById("about-overlay"); if (o) o.hidden = false; }
  function closeAbout() { const o = document.getElementById("about-overlay"); if (o) o.hidden = true; }

  /* ---------- Burger dropdown menu ---------- */
  function ensureMenu() {
    if (document.getElementById("nav-menu")) return;
    const menu = document.createElement("div");
    menu.className = "nav-menu";
    menu.id = "nav-menu";
    menu.hidden = true;
    menu.innerHTML =
      PAGES.map(p => `<a class="nm-item" data-nav="${p.nav}" href="${p.href}"></a>`).join("") +
      '<button class="nm-item" id="nm-about" type="button"></button>' +
      '<div class="nm-sep"></div>' +
      '<div class="nm-langs">' +
        '<button class="nm-lang" data-lang="ru" type="button">RU</button>' +
        '<button class="nm-lang" data-lang="en" type="button">EN</button>' +
      '</div>';
    document.body.appendChild(menu);

    menu.querySelector("#nm-about").addEventListener("click", () => { closeMenu(); openAbout(); });
    menu.querySelectorAll(".nm-lang").forEach(b =>
      b.addEventListener("click", () => { setLang(b.dataset.lang); closeMenu(); })
    );
  }

  function updateMenu(lang, page) {
    const menu = document.getElementById("nav-menu");
    if (!menu) return;
    menu.querySelectorAll(".nm-item[data-nav]").forEach(a => {
      a.textContent = NAV_I18N[lang][a.dataset.nav];
      a.classList.toggle("active", a.dataset.nav === page);
    });
    const ab = menu.querySelector("#nm-about");
    if (ab) ab.textContent = NAV_I18N[lang].about;
    menu.querySelectorAll(".nm-lang").forEach(b =>
      b.classList.toggle("active", b.dataset.lang === lang)
    );
  }

  function toggleMenu() { const m = document.getElementById("nav-menu"); if (m) m.hidden = !m.hidden; }
  function closeMenu() { const m = document.getElementById("nav-menu"); if (m) m.hidden = true; }

  // keep ?lang= in the URL in sync with the active language (on every page load)
  (function syncLangUrl() {
    const lang = getLang();
    localStorage.setItem("vr_lang", lang);
    updateUrl(lang);
  })();

  window.VRNav = { getLang, setLang, applyNav };

  /* ---------- mobile sidebar: close button + swipe-left ---------- */
  function wireSidebar() {
    const sb = document.getElementById("sidebar");
    if (!sb) return;
    const close = () => sb.classList.remove("open");

    const btn = document.getElementById("sidebar-close");
    if (btn) btn.addEventListener("click", close);

    let x0 = null, y0 = null;
    sb.addEventListener("touchstart", e => {
      const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY;
    }, { passive: true });
    sb.addEventListener("touchend", e => {
      if (x0 == null) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - x0, dy = t.clientY - y0;
      if (dx < -45 && Math.abs(dx) > Math.abs(dy)) close();
      x0 = y0 = null;
    }, { passive: true });
  }

  function wire() {
    ensureAboutModal();
    ensureMenu();

    document.querySelectorAll(".site-nav .lang-btn").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
    document.querySelectorAll(".nav-about").forEach(b =>
      b.addEventListener("click", openAbout)
    );

    const burger = document.getElementById("nav-burger");
    if (burger) burger.addEventListener("click", e => { e.stopPropagation(); toggleMenu(); });

    // click outside closes the dropdown
    document.addEventListener("click", e => {
      const m = document.getElementById("nav-menu");
      if (m && !m.hidden && !m.contains(e.target) && e.target !== burger) closeMenu();
    });

    document.addEventListener("keydown", e => { if (e.key === "Escape") { closeAbout(); closeMenu(); } });

    wireSidebar();
    applyNav();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", wire);
  else
    wire();
})();
