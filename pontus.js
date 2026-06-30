// VILLAE ROMANAE — PONTUS sites map. Greek/Bosporan sites of the North Black Sea,
// colored by headline era (mainPeriod), shaped by type, filterable by era & access.
// Depends on regions/pontus/periods.js (PONTUS_PERIODS, PONTUS_PERIOD_BY_ID,
// PONTUS_PERIOD_COLOR, PONTUS_PERIOD_INDEX) and regions/pontus/sites-data.js (PONTUS_SITES).
// Language is synced via nav.js (vr:langchange).
"use strict";

/* ---------- i18n ---------- */
const I18N = {
  ru: {
    subtitle: "Античные города Северного Причерноморья: греческие колонии, Боспорское царство, дорийский Херсонес, скифский Неаполь и римские крепости — от архаики до Византии. Цвет точки = первая эпоха (основание), форма = тип объекта.",
    searchPh: "Поиск: Пантикапей, Фанагория, Танаис…",
    accessLabel: "Доступ",
    tourFilter: "туристические",
    closedFilter: "закрытые / археологические",
    erasLabel: "Эпохи (фильтр и легенда)",
    allEras: "Все", clearEras: "Сброс",
    sigLabel: "Значимость", sigAll: "Все",
    unescoFilter: "только объекты ЮНЕСКО", typeLabel: "Тип объекта",
    shapeCircle: "Город · поселение", shapeSquare: "Крепость", shapeDiamond: "Некрополь · курган", shapeTri: "Святилище",
    shown: (n, total) => `Показано: ${n} из ${total}`,
    empty: "Ничего не нашлось для выбранных фильтров.",
    sources: "Данные: КБН/IOSPE, Страбон, ИА РАН, музеи · полные досье — research/pontus/. Карта: Esri, CARTO, OpenStreetMap.",
    route: "Маршрут", yandex: "Яндекс Карты",
    basemaps: { topo: "Рельеф", sat: "Спутник", light: "Светлая" },
    typeName: { city: "город", settlement: "поселение", fortress: "крепость", necropolis: "некрополь / курган", sanctuary: "святилище", harbor: "гавань" },
    sizeName: { metropolis: "мегаполис", city: "город", town: "городок", small: "малый", unknown: "размер неизв." },
    presName: { excellent: "сохранность отличная", good: "сохранность хорошая", partial: "сохранность частичная", poor: "сохранность слабая", lost: "не сохранилось" },
    accTour: "🟢 Можно посетить", accClosed: "🔴 Закрытый / археологический",
    locUncertain: "🟡 Локализация предположительна",
    mustSee: "★ маст-си", unescoBadge: "ЮНЕСКО",
    metropolisLabel: "Метрополия", area: "га",
    bibLabel: "Источники и литература",
    bibType: { ancient: "античный", epigraphy: "эпиграфика", modern: "литература" }
  },
  en: {
    subtitle: "Ancient cities of the North Black Sea: Greek colonies, the Bosporan Kingdom, Dorian Chersonesos, Scythian Neapolis and Roman forts — from the Archaic age to Byzantium. Marker colour = earliest (founding) era, shape = site type.",
    searchPh: "Search: Pantikapaion, Phanagoria, Tanais…",
    accessLabel: "Access",
    tourFilter: "open to visitors",
    closedFilter: "restricted / archaeological",
    erasLabel: "Eras (filter & legend)",
    allEras: "All", clearEras: "Clear",
    sigLabel: "Significance", sigAll: "All",
    unescoFilter: "UNESCO sites only", typeLabel: "Site type",
    shapeCircle: "City · settlement", shapeSquare: "Fortress", shapeDiamond: "Necropolis · kurgan", shapeTri: "Sanctuary",
    shown: (n, total) => `Showing ${n} of ${total}`,
    empty: "Nothing matches the selected filters.",
    sources: "Data: CIRB/IOSPE, Strabo, IA RAS, museums · full dossiers — research/pontus/. Map: Esri, CARTO, OpenStreetMap.",
    route: "Directions", yandex: "Yandex Maps",
    basemaps: { topo: "Terrain", sat: "Satellite", light: "Light" },
    typeName: { city: "city", settlement: "settlement", fortress: "fortress", necropolis: "necropolis / kurgan", sanctuary: "sanctuary", harbor: "harbour" },
    sizeName: { metropolis: "metropolis", city: "city", town: "town", small: "small", unknown: "size unknown" },
    presName: { excellent: "excellent preservation", good: "good preservation", partial: "partial preservation", poor: "poor preservation", lost: "not preserved" },
    accTour: "🟢 Open to visitors", accClosed: "🔴 Restricted / archaeological",
    locUncertain: "🟡 Localization uncertain",
    mustSee: "★ must-see", unescoBadge: "UNESCO",
    metropolisLabel: "Mother-city", area: "ha",
    bibLabel: "Sources & literature",
    bibType: { ancient: "ancient", epigraphy: "epigraphy", modern: "modern" }
  }
};

const GOLD = "#c9a227";
const SHAPE = { city: "circle", settlement: "circle", harbor: "circle", fortress: "square", necropolis: "diamond", sanctuary: "tri" };
const TOURISTIC = new Set(["museum", "open"]);

/* ---------- state ---------- */
const state = {
  lang: (window.VRNav ? VRNav.getLang() : localStorage.getItem("vr_lang")) || "ru",
  q: "",
  tour: true,
  closed: true,
  minSig: 1,
  unescoOnly: false,
  types: new Set(["circle", "square", "diamond", "tri"]),
  eras: new Set(PONTUS_PERIODS.map(p => p.id)),
  selectedId: null
};
let pendingSelect = null;
const t = () => I18N[state.lang];
const isTour = s => TOURISTIC.has(s.access);
// Base marker colour = the earliest era the site appears in (its founding/first horizon).
const firstPeriodId = s => [...s.periods].sort((a, b) => PONTUS_PERIOD_INDEX[a] - PONTUS_PERIOD_INDEX[b])[0];
// Permanent on-map name labels: candidates = significance >= 4 (decluttered by priority in JS).
const LABEL_MIN_SIG = 4;
const isLabelSite = s => (s.significance || 0) >= LABEL_MIN_SIG;

/* ---------- map ---------- */
const map = L.map("map", { zoomControl: true, worldCopyJump: false });
const BASEMAPS = {
  topo: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles © Esri — Esri, USGS, NOAA" }),
  sat: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles © Esri — Maxar, Earthstar Geographics" }),
  light: L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    { maxZoom: 20, subdomains: "abcd", attribution: "© OpenStreetMap · © CARTO" })
};
let currentBase = "topo";
BASEMAPS[currentBase].addTo(map);
map.fitBounds(L.latLngBounds(PONTUS_SITES.map(s => s.coords)).pad(0.06));

const BasemapControl = L.Control.extend({
  options: { position: "topright" },
  onAdd() {
    const div = L.DomUtil.create("div", "basemap-control");
    div.id = "basemap-control";
    L.DomEvent.disableClickPropagation(div);
    return div;
  }
});
map.addControl(new BasemapControl());

function renderBasemapControl() {
  const div = document.getElementById("basemap-control");
  div.innerHTML = "";
  for (const key of ["topo", "sat", "light"]) {
    const btn = document.createElement("button");
    btn.className = "basemap-btn" + (key === currentBase ? " active" : "");
    btn.textContent = t().basemaps[key];
    btn.onclick = () => {
      if (key === currentBase) return;
      map.removeLayer(BASEMAPS[currentBase]);
      currentBase = key;
      BASEMAPS[key].addTo(map);
      renderBasemapControl();
    };
    div.appendChild(btn);
  }
}

/* ---------- markers (divIcon, shape by type, color by era) ---------- */
const markers = {};
const markerLayer = L.layerGroup().addTo(map);

function makeIcon(site, selected) {
  const shape = SHAPE[site.type] || "circle";
  const color = PONTUS_PERIOD_COLOR(firstPeriodId(site));
  const isStar = site.significance >= 5;
  const starEl = isStar ? `<span class="pmk-s pmk-s-${shape}">★</span>` : "";
  return L.divIcon({
    className: "pmk-wrap" + (selected ? " sel" : "") + (isStar ? " star" : ""),
    html: `<span class="pmk pmk-${shape}" style="--c:${color}"></span>${starEl}`,
    iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -13]
  });
}

function makeMarker(site) {
  const m = L.marker(site.coords, { icon: makeIcon(site, false) });
  // Bind once with a content function so it re-renders (and re-translates) on every open.
  // Selection follows Leaflet's own open/close events — no manual open here, so the
  // built-in marker toggle can't fight us (was: re-click closed the popup it just opened).
  m.bindPopup(() => popupHtml(site), { maxWidth: 350, minWidth: 320, autoPanPadding: [25, 25] });
  m.on("popupopen", () => onPopupOpen(site.id));
  m.on("popupclose", () => onPopupClose(site.id));
  return m;
}

function bindTooltips() {
  for (const site of PONTUS_SITES) {
    const m = markers[site.id];
    m.unbindTooltip();
    if (isLabelSite(site)) {
      m.bindTooltip(site.name[state.lang], { permanent: true, direction: "right", offset: [12, 0], className: "map-label", interactive: false });
    } else {
      m.bindTooltip(site.name[state.lang], { direction: "top", offset: [0, -10], opacity: 0.95 });
    }
  }
  scheduleDeclutter();
}

/* ---------- label declutter: show permanent labels where they fit, hide collisions (priority first) ---------- */
// Run synchronously on discrete events (zoomend/moveend/filter) — rAF is paused in
// background tabs and setTimeout is throttled there, so a direct call is the reliable choice.
function scheduleDeclutter() { declutterLabels(); }
function declutterLabels() {
  const items = [];
  for (const site of PONTUS_SITES) {
    if (!isLabelSite(site)) continue;
    const m = markers[site.id];
    if (!markerLayer.hasLayer(m)) continue;
    const tt = m.getTooltip();
    const el = tt && tt.getElement();
    if (!el) continue;
    el.style.display = "";                 // reset to measurable before deciding
    items.push({ site, el });
  }
  // priority: selected first, then higher significance, then larger area
  items.sort((a, b) =>
    ((b.site.id === state.selectedId) - (a.site.id === state.selectedId)) ||
    ((b.site.significance || 0) - (a.site.significance || 0)) ||
    ((b.site.areaHa || 0) - (a.site.areaHa || 0))
  );
  const kept = [];
  const PAD = 3;
  for (const it of items) {
    const r = it.el.getBoundingClientRect();
    if (!r.width) continue;
    const clash = kept.some(k => r.left - PAD < k.right && r.right + PAD > k.left && r.top - PAD < k.bottom && r.bottom + PAD > k.top);
    if (clash) it.el.style.display = "none";
    else kept.push({ left: r.left - PAD, top: r.top - PAD, right: r.right + PAD, bottom: r.bottom + PAD });
  }
}

for (const site of PONTUS_SITES) markers[site.id] = makeMarker(site);
map.on("zoomend moveend", scheduleDeclutter);

/* ---------- popup ---------- */
const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function eraChipsHtml(site) {
  const ordered = [...site.periods].sort((a, b) => PONTUS_PERIOD_INDEX[a] - PONTUS_PERIOD_INDEX[b]);
  return ordered.map(id => {
    const p = PONTUS_PERIOD_BY_ID[id];
    if (!p) return "";
    const main = id === site.mainPeriod ? " style=\"outline:2px solid #fff;outline-offset:1px\"" : "";
    return `<span class="era-chip" style="background:${p.color}"${main}>${esc(p.name[state.lang])}</span>`;
  }).join("");
}

function metricsHtml(site) {
  const L8 = t();
  const parts = [L8.typeName[site.type] || site.type];
  if (site.areaHa != null) parts.push(`${site.areaHa} ${L8.area}`);
  else if (site.sizeClass && site.sizeClass !== "unknown") parts.push(L8.sizeName[site.sizeClass]);
  if (site.preservation) parts.push(L8.presName[site.preservation]);
  return parts.filter(Boolean).map(esc).join(" · ");
}

function bibHtml(site) {
  if (!site.bibliography || !site.bibliography.length) return "";
  const L8 = t();
  const items = site.bibliography.map(b => {
    const tag = `<span class="bib-type">${esc(L8.bibType[b.type] || b.type)}</span>`;
    const ref = b.url
      ? `<a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.ref)} ↗</a>`
      : esc(b.ref);
    return `<li>${tag}${ref}</li>`;
  }).join("");
  return `<div class="popup-bib"><div class="popup-bib-h">📚 ${esc(L8.bibLabel)}</div><ul>${items}</ul></div>`;
}

function imageHtml(site) {
  const im = (typeof PONTUS_IMAGES !== "undefined") ? PONTUS_IMAGES[site.id] : null;
  if (!im) return "";
  const cap = im.caption ? esc(im.caption[state.lang] || im.caption.ru) : "";
  const credit = [im.credit, im.license].filter(Boolean).map(esc).join(" · ");
  return `<figure class="popup-fig">` +
    `<img class="popup-img" src="${PONTUS_IMAGE_URL(im.file, 800)}" alt="${esc(site.name[state.lang])}" loading="lazy" onerror="this.closest('.popup-fig').remove()">` +
    `<figcaption class="popup-cap">${cap}${credit ? ` <a class="popup-credit" href="${esc(im.page)}" target="_blank" rel="noopener">📷 ${credit} ↗</a>` : ""}</figcaption>` +
    `</figure>`;
}

function popupHtml(site) {
  const L8 = t();
  const [lat, lng] = site.coords;

  const badges = [
    site.significance >= 5 ? `<span class="badge b-must">${L8.mustSee}</span>` : "",
    site.unesco ? `<span class="badge b-unesco">🏛 ${L8.unescoBadge}</span>` : ""
  ].join("");

  const loc = site.localizationCertain === false
    ? `<div class="popup-loc">${L8.locUncertain}</div>` : "";

  const metro = site.metropolis
    ? `<div class="popup-metro">🏺 ${esc(L8.metropolisLabel)}: ${esc(site.metropolis[state.lang])}</div>` : "";

  const accNote = site.accessNote ? `<span class="acc-note">${esc(site.accessNote[state.lang])}</span>` : "";
  const accPill = `<div class="popup-acc ${isTour(site) ? "acc-tour" : "acc-closed"}">${isTour(site) ? L8.accTour : L8.accClosed}${accNote ? " — " + accNote : ""}</div>`;

  const links = (site.links || []).map(l =>
    `<a class="popup-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`
  ).join("");
  const nav =
    `<a class="popup-link nav" href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener">🧭 ${L8.route}</a>` +
    `<a class="popup-link nav" href="https://yandex.ru/maps/?rtext=~${lat},${lng}&rtt=auto" target="_blank" rel="noopener">🚗 ${L8.yandex}</a>`;

  return `<div class="popup-body">
    ${imageHtml(site)}
    <h3 class="popup-title">${esc(site.name[state.lang])}</h3>
    ${site.nameAncient ? `<div class="popup-anc">${esc(site.nameAncient)}</div>` : ""}
    ${badges ? `<div class="popup-badges">${badges}</div>` : ""}
    ${loc}
    <div class="popup-period">⏳ ${esc(site.periodText[state.lang])}</div>
    <div class="popup-eras">${eraChipsHtml(site)}</div>
    <div class="popup-metrics">${metricsHtml(site)}</div>
    ${metro}
    <p class="popup-viewnote">${esc(site.highlight[state.lang])}</p>
    <p class="popup-desc">${esc(site.desc[state.lang])}</p>
    ${accPill}
    ${bibHtml(site)}
    <div class="popup-links">${links}${nav}</div>
    <div class="popup-coords">${lat.toFixed(4)}, ${lng.toFixed(4)} · ${esc(site.modernPlace ? site.modernPlace[state.lang] : "")}</div>
  </div>`;
}

/* ---------- selection (driven by popup open/close events) ---------- */
function highlight(id, on) {
  const site = PONTUS_SITE_BY_ID[id];
  const m = markers[id];
  if (site && m) {
    m.setIcon(makeIcon(site, on));
    m.setZIndexOffset(on ? 1000 : 0);
  }
}

function onPopupOpen(id) {
  // Safety: if some other marker is still flagged, drop it (popupclose normally already did).
  if (state.selectedId && state.selectedId !== id) {
    highlight(state.selectedId, false);
    document.querySelectorAll(".site-card.selected").forEach(el => el.classList.remove("selected"));
  }
  state.selectedId = id;
  highlight(id, true);
  const card = document.querySelector(`.site-card[data-id="${id}"]`);
  if (card) {
    card.classList.add("selected");
    card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  history.replaceState(null, "", "#site=" + id);
  if (window.innerWidth <= 880) document.getElementById("sidebar").classList.remove("open");
}

function onPopupClose(id) {
  if (state.selectedId !== id) return;
  highlight(id, false);
  document.querySelectorAll(`.site-card[data-id="${id}"]`).forEach(el => el.classList.remove("selected"));
  state.selectedId = null;
  history.replaceState(null, "", location.pathname + location.search);
}

// Used when filters hide the selected marker, etc. → close drives the cleanup.
function clearSelection() {
  if (state.selectedId != null) map.closePopup();
}

// Programmatic open from a list card or deep-link. Marker clicks open via Leaflet's own toggle.
function select(id, { pan = true } = {}) {
  const site = PONTUS_SITE_BY_ID[id];
  if (!site) return;
  const m = markers[id];
  if (pan) {
    let opened = false;
    const open = () => { if (!opened) { opened = true; m.openPopup(); } };
    map.flyTo(site.coords, Math.max(map.getZoom(), 11), { duration: 0.8 });
    map.once("moveend", open);
    setTimeout(open, 900);
  } else {
    m.openPopup();
  }
}

/* ---------- filtering ---------- */
function visibleSites() {
  const q = state.q.trim().toLowerCase();
  return PONTUS_SITES.filter(s => {
    if (!s.periods.some(p => state.eras.has(p))) return false;
    const tour = isTour(s);
    if (tour && !state.tour) return false;
    if (!tour && !state.closed) return false;
    if ((s.significance || 0) < state.minSig) return false;
    if (!state.types.has(SHAPE[s.type] || "circle")) return false;
    if (state.unescoOnly && !s.unesco) return false;
    if (q) {
      const hay = [
        s.name.en, s.name.ru, s.nameAncient || "",
        s.desc[state.lang], s.highlight[state.lang], s.periodText[state.lang],
        s.modernPlace ? s.modernPlace[state.lang] : ""
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function applyFilters() {
  const vis = visibleSites();
  const visIds = new Set(vis.map(s => s.id));
  for (const site of PONTUS_SITES) {
    const m = markers[site.id];
    const shouldShow = visIds.has(site.id);
    const isShown = markerLayer.hasLayer(m);
    if (shouldShow && !isShown) markerLayer.addLayer(m);
    if (!shouldShow && isShown) {
      if (state.selectedId === site.id) map.closePopup(); // → popupclose → onPopupClose cleans up
      markerLayer.removeLayer(m);
    }
  }
  document.getElementById("count").textContent = t().shown(vis.length, PONTUS_SITES.length);
  renderList(vis);
  scheduleDeclutter();
}

/* ---------- list ---------- */
function renderList(vis) {
  const list = document.getElementById("site-list");
  list.innerHTML = "";
  if (!vis.length) {
    list.innerHTML = `<div class="list-empty">🏺 ${t().empty}</div>`;
    return;
  }
  const sorted = [...vis].sort((a, b) =>
    PONTUS_PERIOD_INDEX[firstPeriodId(a)] - PONTUS_PERIOD_INDEX[firstPeriodId(b)] ||
    a.name[state.lang].localeCompare(b.name[state.lang], state.lang)
  );
  for (const site of sorted) {
    const card = document.createElement("div");
    card.className = "site-card" + (site.id === state.selectedId ? " selected" : "");
    card.dataset.id = site.id;
    const meta = [
      site.periodText[state.lang],
      t().typeName[site.type] || "",
      site.localizationCertain === false ? "🟡" : ""
    ].filter(Boolean).join(" · ");
    card.innerHTML = `<span class="card-dot" style="background:${PONTUS_PERIOD_COLOR(firstPeriodId(site))}"></span>
      <div class="card-body">
        <div class="card-name">${esc(site.name[state.lang])}</div>
        <div class="card-meta">${esc(meta)}</div>
      </div>
      ${site.significance >= 5 ? '<span class="card-stars" title="must-see" style="color:var(--gold-bright)">★</span>' : ""}`;
    card.onclick = () => select(site.id);
    list.appendChild(card);
  }
}

/* ---------- era filter (also the legend) ---------- */
function renderPeriodFilter() {
  const wrap = document.getElementById("period-filter");
  wrap.innerHTML = "";
  for (const p of PONTUS_PERIODS) {
    const count = PONTUS_SITES.filter(s => s.periods.includes(p.id)).length;
    const on = state.eras.has(p.id);
    const row = document.createElement("button");
    row.className = "pf-row" + (on ? "" : " off");
    row.dataset.id = p.id;
    row.style.setProperty("--d", p.color);
    row.innerHTML =
      `<span class="pf-dot" style="background:${p.color}"></span>` +
      `<span class="pf-name">${esc(p.name[state.lang])}</span>` +
      `<span class="pf-count">${count}</span>`;
    row.onclick = () => {
      if (state.eras.has(p.id)) state.eras.delete(p.id);
      else state.eras.add(p.id);
      renderPeriodFilter();
      applyFilters();
    };
    wrap.appendChild(row);
  }
}

/* ---------- type filter (multi-select; also doubles as the shape legend) ---------- */
function renderTypeFilter() {
  const wrap = document.getElementById("type-filter");
  if (!wrap) return;
  const L8 = t();
  const defs = [["circle", L8.shapeCircle], ["square", L8.shapeSquare], ["diamond", L8.shapeDiamond], ["tri", L8.shapeTri]];
  wrap.innerHTML = "";
  for (const [sh, lab] of defs) {
    const count = PONTUS_SITES.filter(s => (SHAPE[s.type] || "circle") === sh).length;
    const on = state.types.has(sh);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "type-chip" + (on ? "" : " off");
    btn.dataset.shape = sh;
    btn.innerHTML =
      `<span class="tc-mk"><span class="pmk pmk-${sh}" style="--c:#a89880"></span></span>` +
      `<span class="tc-name">${esc(lab)}</span><span class="tc-count">${count}</span>`;
    btn.onclick = () => {
      if (state.types.has(sh)) state.types.delete(sh);
      else state.types.add(sh);
      renderTypeFilter();
      applyFilters();
    };
    wrap.appendChild(btn);
  }
}

/* ---------- language ---------- */
function applyLang() {
  const L8 = t();
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = L8[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  document.getElementById("search").placeholder = L8.searchPh;
  bindTooltips();
  renderBasemapControl();
  renderPeriodFilter();
  renderTypeFilter();
  applyFilters();
  if (state.selectedId) {
    const site = PONTUS_SITE_BY_ID[state.selectedId];
    const m = markers[state.selectedId];
    if (site && m && m.getPopup() && m.getPopup().isOpen()) m.getPopup().setContent(popupHtml(site));
  }
}

/* ---------- events ---------- */
document.getElementById("search").addEventListener("input", e => { state.q = e.target.value; applyFilters(); });
document.getElementById("f-tour").addEventListener("change", e => { state.tour = e.target.checked; applyFilters(); });
document.getElementById("f-closed").addEventListener("change", e => { state.closed = e.target.checked; applyFilters(); });
document.getElementById("f-unesco").addEventListener("change", e => { state.unescoOnly = e.target.checked; applyFilters(); });
document.querySelectorAll("#sig-filter .sig-btn").forEach(b =>
  b.addEventListener("click", () => {
    state.minSig = +b.dataset.min;
    document.querySelectorAll("#sig-filter .sig-btn").forEach(x => x.classList.toggle("active", x === b));
    applyFilters();
  })
);
document.getElementById("pf-all").onclick = () => { state.eras = new Set(PONTUS_PERIODS.map(p => p.id)); renderPeriodFilter(); applyFilters(); };
document.getElementById("pf-none").onclick = () => { state.eras = new Set(); renderPeriodFilter(); applyFilters(); };
document.getElementById("sidebar-toggle").onclick = () => { document.getElementById("sidebar").classList.toggle("open"); };
window.addEventListener("vr:langchange", e => { state.lang = e.detail.lang; applyLang(); });

/* ---------- hash deep-link ---------- */
function parseHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (!h) return;
  if (h.startsWith("period=")) {
    const id = h.slice(7);
    if (PONTUS_PERIOD_BY_ID[id]) state.eras = new Set([id]);
  } else if (h.startsWith("site=")) {
    const id = h.slice(5);
    if (PONTUS_SITE_BY_ID[id]) pendingSelect = id;
  } else if (PONTUS_SITE_BY_ID[h]) {
    pendingSelect = h;
  }
}

/* ---------- init ---------- */
parseHash();
applyLang();
if (pendingSelect) {
  setTimeout(() => select(pendingSelect), 350);
} else if (state.eras.size < PONTUS_PERIODS.length && state.eras.size > 0) {
  const vis = visibleSites();
  if (vis.length) map.fitBounds(L.latLngBounds(vis.map(s => s.coords)).pad(0.12));
}
