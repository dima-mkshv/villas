// VILLAE ROMANAE — shared top navigation + language sync + About modal.
// Pages set <body data-page="villas|timeline|sites">. Each page script listens
// for the "vr:langchange" event and re-renders its own content.
"use strict";

(function () {
  const NAV_I18N = {
    ru: {
      villas: "Карта вилл", timeline: "Таймлайн", sites: "Карта объектов",
      about: "О проекте", aboutTitle: "О проекте", aboutLine: "Завайбкожено Димой", aboutClose: "Закрыть"
    },
    en: {
      villas: "Villa map", timeline: "Timeline", sites: "Sites map",
      about: "About", aboutTitle: "About", aboutLine: "vibecoded by Dima", aboutClose: "Close"
    }
  };

  const getLang = () => localStorage.getItem("vr_lang") || "ru";

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
  }

  function setLang(lang) {
    localStorage.setItem("vr_lang", lang);
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
    document.querySelectorAll(".site-nav .lang-btn").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
    document.querySelectorAll(".nav-about").forEach(b =>
      b.addEventListener("click", openAbout)
    );
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeAbout(); });
    wireSidebar();
    applyNav();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", wire);
  else
    wire();
})();
