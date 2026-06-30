// VILLAE ROMANAE — timeline page. Renders PERIODS (periods.js) as a vertical
// chronology and links each era to its sites on the map (sites-data.js).
"use strict";

const TL_I18N = {
  ru: {
    title: "Хронология древнего Израиля",
    intro: "От первых каменных орудий на горе Кармель до арабских халифов — пятнадцать тысячелетий культур, царств и империй на узкой полосе земли между морем и пустыней. Каждая эпоха окрашена своим цветом — те же цвета ждут вас на карте объектов.",
    note: "Шкала намеренно не линейная: каменный век длился сотни тысяч лет, а поздние эпохи — века. Будь масштаб честным, всё, кроме палеолита, схлопнулось бы в точку.",
    cultures: "Культуры и державы",
    sites: "Знаковые объекты",
    onMap: "Показать на карте",
    more: n => `ещё ${n} →`
  },
  en: {
    title: "Chronology of Ancient Israel",
    intro: "From the first stone tools on Mount Carmel to the Arab caliphs — fifteen millennia of cultures, kingdoms and empires on a narrow strip of land between sea and desert. Each era has its own color — the same colors await you on the sites map.",
    note: "The scale is deliberately non-linear: the Stone Age lasted hundreds of thousands of years while later eras span centuries. An honest scale would collapse everything but the Paleolithic into a dot.",
    cultures: "Cultures & powers",
    sites: "Notable sites",
    onMap: "Show on map",
    more: n => `+${n} more →`
  }
};

const MAX_SITES = 8;

const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const tlLang = () => (window.VRNav ? VRNav.getLang() : localStorage.getItem("vr_lang") || "ru");

function renderTimeline() {
  const lg = tlLang();
  const L = TL_I18N[lg];
  document.documentElement.lang = lg;

  document.getElementById("tl-title").textContent = L.title;
  document.getElementById("tl-intro").textContent = L.intro;
  document.getElementById("tl-note").textContent = L.note;

  const stream = document.getElementById("tl-stream");
  stream.innerHTML = "";

  for (const p of PERIODS) {
    const sites = ARCH_SITES.filter(s => s.mainPeriod === p.id);
    const shown = sites.slice(0, MAX_SITES);
    const extra = sites.length - shown.length;

    const chips = (p.cultures[lg] || [])
      .map(c => `<span class="tl-chip">${esc(c)}</span>`).join("");

    const siteLinks = shown
      .map(s => `<a class="tl-site-link" href="sites.html#site=${s.id}">${esc(s.name[lg])}</a>`)
      .join("");

    const moreLink = extra > 0
      ? `<a class="tl-site-link" href="sites.html#period=${p.id}">${L.more(extra)}</a>`
      : "";

    const sitesRow = sites.length
      ? `<div class="tl-sites"><span class="tl-sites-label">${L.sites}:</span> ${siteLinks}${moreLink}</div>`
      : "";

    const art = document.createElement("article");
    art.className = "tl-period";
    art.id = "p-" + p.id;
    art.style.setProperty("--c", p.color);
    art.innerHTML = `
      <div class="tl-card">
        <div class="tl-dates">${esc(p.dateText[lg])}</div>
        <h2 class="tl-name">${esc(p.name[lg])}${p.name.he ? `<span class="tl-he" dir="rtl">${esc(p.name.he)}</span>` : ""}</h2>
        <div class="tl-cultures">${chips}</div>
        <p class="tl-blurb">${esc(p.blurb[lg])}</p>
        ${sitesRow}
        <a class="tl-map-btn" href="sites.html#period=${p.id}">${L.onMap} →</a>
      </div>`;
    stream.appendChild(art);
  }

  const h = document.getElementById("tl-horizon");
  h.innerHTML =
    `<h2>⚔️ ${esc(CRUSADER_HORIZON.name[lg])}</h2>` +
    `<div class="tl-dates">${esc(CRUSADER_HORIZON.dateText[lg])}</div>` +
    `<p>${esc(CRUSADER_HORIZON.note[lg])}</p>`;
}

renderTimeline();
window.addEventListener("vr:langchange", renderTimeline);
