// VILLAE ROMANAE — PONTUS timeline. Renders PONTUS_PERIODS (regions/pontus/periods.js)
// as a vertical chronology and links each era to its sites on the Pontus map.
"use strict";

const TL_I18N = {
  ru: {
    title: "Хронология Северного Причерноморья",
    intro: "От первых ионийских колоний на Боспоре Киммерийском до византийских крепостей Зихии — полторы тысячи лет греческих городов, Боспорского царства, римского протектората и Византии на берегах двух морей. Каждая эпоха окрашена своим цветом — те же цвета ждут вас на карте объектов.",
    note: "Атлас намеренно заканчивается на рубеже X–XI вв.: после этого Таматарха-Тмутаракань уходит в русское и золотоордынское средневековье — за рамки античной темы.",
    cultures: "Народы и державы",
    sites: "Знаковые объекты",
    onMap: "Показать на карте",
    more: n => `ещё ${n} →`,
    scy: {
      name: "🦌 Скифы Причерноморья",
      dates: "VII–IV вв. до н.э.",
      blurb: "Пока греки строили колонии на берегу, в степях Прикубанья и Крыма курганы скифской и синдо-меотской знати копили золото звериного стиля — часто работы тех же греков для скифских царей: Куль-Оба у Пантикапея, «костромской олень», келермесская пантера.",
      sites: "Курганы"
    }
  },
  en: {
    title: "Chronology of the North Black Sea",
    intro: "From the first Ionian colonies on the Cimmerian Bosporus to the Byzantine forts of Zichia — fifteen centuries of Greek cities, the Bosporan Kingdom, a Roman protectorate and Byzantium on the shores of two seas. Each era has its own color — the same colors await you on the sites map.",
    note: "The atlas deliberately stops at the 10th–11th c. threshold: after that Tamatarcha-Tmutarakan passes into Rus' and Golden-Horde medieval history — beyond the ancient theme.",
    cultures: "Peoples & powers",
    sites: "Notable sites",
    onMap: "Show on map",
    more: n => `+${n} more →`,
    scy: {
      name: "🦌 Pontic Scythians",
      dates: "7th–4th c. BCE",
      blurb: "While the Greeks built colonies on the coast, in the steppes of the Kuban and Crimea the kurgans of the Scythian and Sindo-Maeotian elite piled up gold in the animal style — often made by those same Greeks for Scythian kings: Kul-Oba by Panticapaeum, the 'Kostromskaya stag', the Kelermes panther.",
      sites: "Kurgans"
    }
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

  for (const p of PONTUS_PERIODS) {
    const sites = PONTUS_SITES.filter(s => s.mainPeriod === p.id);
    const shown = sites.slice(0, MAX_SITES);
    const extra = sites.length - shown.length;

    const chips = (p.cultures[lg] || [])
      .map(c => `<span class="tl-chip">${esc(c)}</span>`).join("");

    const siteLinks = shown
      .map(s => `<a class="tl-site-link" href="pontus.html#site=${s.id}">${esc(s.name[lg])}</a>`)
      .join("");

    const moreLink = extra > 0
      ? `<a class="tl-site-link" href="pontus.html#period=${p.id}">${L.more(extra)}</a>`
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
        <h2 class="tl-name">${esc(p.name[lg])}</h2>
        <div class="tl-cultures">${chips}</div>
        <p class="tl-blurb">${esc(p.blurb[lg])}</p>
        ${sitesRow}
        <a class="tl-map-btn" href="pontus.html#period=${p.id}">${L.onMap} →</a>
      </div>`;
    stream.appendChild(art);
    // Standalone thematic card for the Scythian kurgans, right after the pre-Greek steppe context.
    if (p.id === "pre-greek") stream.appendChild(buildScythiansCard(lg, L));
  }

  const h = document.getElementById("tl-horizon");
  h.innerHTML =
    `<h2>⚔️ ${esc(PONTUS_HORIZON.name[lg])}</h2>` +
    `<div class="tl-dates">${esc(PONTUS_HORIZON.dateText[lg])}</div>` +
    `<p>${esc(PONTUS_HORIZON.note[lg])}</p>`;
}

// A dedicated "🦌 Скифы Причерноморья" card — the kurgans span pre-Greek→classical, so they
// get one thematic card of their own rather than being scattered across period cards.
function buildScythiansCard(lg, L) {
  const KURGANS = ["kul-oba", "kostromskaya", "kelermes", "ulsky", "seven-brothers"];
  const links = KURGANS
    .filter(id => PONTUS_SITE_BY_ID[id])
    .map(id => `<a class="tl-site-link" href="pontus.html#site=${id}">${esc(PONTUS_SITE_BY_ID[id].name[lg])}</a>`)
    .join("");
  const art = document.createElement("article");
  art.className = "tl-period tl-scythians";
  art.id = "p-scythians";
  art.style.setProperty("--c", "#a97b2c");
  art.innerHTML = `
      <div class="tl-card">
        <div class="tl-dates">${esc(L.scy.dates)}</div>
        <h2 class="tl-name">${esc(L.scy.name)}</h2>
        <div class="tl-sites"><span class="tl-sites-label">${esc(L.scy.sites)}:</span> ${links}</div>
        <p class="tl-blurb">${esc(L.scy.blurb)}</p>
        <a class="tl-map-btn" href="pontus.html#site=kul-oba">${esc(L.onMap)} →</a>
      </div>`;
  return art;
}

renderTimeline();
window.addEventListener("vr:langchange", renderTimeline);
