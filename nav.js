// VILLAE ROMANAE — shared top navigation + language sync across pages.
// Pages set <body data-page="villas|timeline|sites">. Each page script listens
// for the "vr:langchange" event and re-renders its own content.
"use strict";

(function () {
  const NAV_I18N = {
    ru: { villas: "Карта вилл", timeline: "Таймлайн", sites: "Карта объектов" },
    en: { villas: "Villa map", timeline: "Timeline", sites: "Sites map" }
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
  }

  function setLang(lang) {
    localStorage.setItem("vr_lang", lang);
    applyNav();
    window.dispatchEvent(new CustomEvent("vr:langchange", { detail: { lang } }));
  }

  window.VRNav = { getLang, setLang, applyNav };

  function wire() {
    document.querySelectorAll(".site-nav .lang-btn").forEach(b =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
    applyNav();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", wire);
  else
    wire();
})();
