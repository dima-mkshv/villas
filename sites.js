// VILLAE ROMANAE — sites map. Archaeological sites of Israel open to visitors,
// colored by their headline era (mainPeriod) and filterable by period.
// Depends on periods.js (PERIODS, PERIOD_BY_ID, PERIOD_COLOR, PERIOD_INDEX)
// and sites-data.js (ARCH_SITES). Language is synced via nav.js (vr:langchange).
"use strict";

/* ---------- i18n ---------- */
const I18N = {
  ru: {
    subtitle: "Археологические объекты Израиля, открытые для посещения, — от каменного века до крестоносцев. Цвет точки = главная эпоха объекта.",
    searchPh: "Поиск: Мегиддо, Кесария, набатеи…",
    westBank: "включая Западный берег",
    unescoFilter: "только ЮНЕСКО ★",
    erasLabel: "Эпохи (фильтр и легенда)",
    allEras: "Все",
    clearEras: "Сброс",
    shown: (n, total) => `Показано: ${n} из ${total}`,
    empty: "Ничего не нашлось для выбранных эпох.",
    sources: "Данные: Wikipedia · Israel Nature & Parks Authority · UNESCO. Карта: Esri, CARTO, OpenStreetMap.",
    periodLabel: "Период",
    accessLabel: "Как посетить",
    route: "Маршрут",
    waze: "Waze",
    basemaps: { topo: "Рельеф", sat: "Спутник", light: "Светлая" },
    westBankBadge: "Западный берег",
    unescoBadge: "ЮНЕСКО",
    wbWarnTitle: "⚠️ ВНИМАНИЕ: ЗАПАДНЫЙ БЕРЕГ",
    wbWarnText: "Страховка проката тут не действует, а въезд в зону A опасен."
  },
  en: {
    subtitle: "Archaeological sites of Israel open to visitors — from the Stone Age to the Crusaders. A marker's color is the site's headline era.",
    searchPh: "Search: Megiddo, Caesarea, Nabataean…",
    westBank: "include the West Bank",
    unescoFilter: "UNESCO only ★",
    erasLabel: "Eras (filter & legend)",
    allEras: "All",
    clearEras: "Clear",
    shown: (n, total) => `Showing ${n} of ${total}`,
    empty: "Nothing matches the selected eras.",
    sources: "Data: Wikipedia · Israel Nature & Parks Authority · UNESCO. Map: Esri, CARTO, OpenStreetMap.",
    periodLabel: "Period",
    accessLabel: "How to visit",
    route: "Directions",
    waze: "Waze",
    basemaps: { topo: "Terrain", sat: "Satellite", light: "Light" },
    westBankBadge: "West Bank",
    unescoBadge: "UNESCO",
    wbWarnTitle: "⚠️ WARNING: WEST BANK",
    wbWarnText: "Rental-car insurance is void here, and entering Area A is dangerous."
  }
};

const GOLD = "#c9a227";

/* ---------- state ---------- */
const state = {
  lang: (window.VRNav ? VRNav.getLang() : localStorage.getItem("vr_lang")) || "ru",
  q: "",
  westBank: true,
  unescoOnly: false,
  eras: new Set(PERIODS.map(p => p.id)), // all on by default
  selectedId: null
};
let pendingSelect = null;

const t = () => I18N[state.lang];

/* ---------- map ---------- */
const map = L.map("map", { zoomControl: true, worldCopyJump: false });

const BASEMAPS = {
  topo: L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles © Esri — Esri, USGS, NOAA" }
  ),
  sat: L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Tiles © Esri — Maxar, Earthstar Geographics" }
  ),
  light: L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    { maxZoom: 20, subdomains: "abcd", attribution: "© OpenStreetMap · © CARTO" }
  )
};

let currentBase = "topo";
BASEMAPS[currentBase].addTo(map);
map.fitBounds(L.latLngBounds(ARCH_SITES.map(s => s.coords)).pad(0.06));

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
      document.getElementById("map").classList.toggle("map-base-sat", key === "sat");
      BASEMAPS[key].addTo(map);
      renderBasemapControl();
    };
    div.appendChild(btn);
  }
}

/* ---------- markers ---------- */
const markers = {};
const markerLayer = L.layerGroup().addTo(map);

function makeMarker(site) {
  const m = L.circleMarker(site.coords, {
    radius: 8,
    fillColor: PERIOD_COLOR(site.mainPeriod),
    fillOpacity: 0.95,
    color: "#ffffff",
    weight: 2
  });
  // Popup bound once (content fn re-renders on open); selection follows Leaflet's open/close
  // events so marker taps toggle reliably on touch (iOS).
  m.bindPopup(() => popupHtml(site), { maxWidth: 340, minWidth: 320, autoPanPadding: [25, 25] });
  m.on("popupopen", () => onPopupOpen(site.id));
  m.on("popupclose", () => onPopupClose(site.id));
  return m;
}

// Permanent on-map labels for the major sites (arch map has no rating → curated priority).
const ARCH_LABEL_PRIO = {
  "caesarea-maritima": 5, "masada": 5, "tel-megiddo": 5, "beit-shean": 5, "city-of-david": 5,
  "tel-hazor": 4, "avdat": 4, "beit-guvrin-maresha": 4, "qumran": 4, "herodium": 4,
  "tel-dan": 4, "gamla": 4, "jerusalem-archaeological-park": 4, "tzippori": 4,
  "tel-lachish": 3, "banias": 3, "tel-beer-sheva": 3, "ashkelon": 3, "beit-shearim": 3,
  "sebastia-samaria": 3, "tel-gezer": 3, "mamshit": 3, "shivta": 3, "haluza": 3,
  "tel-arad": 3, "old-jaffa": 3, "apollonia-arsuf": 3, "ein-gedi": 3, "khirbet-qeiyafa": 3
};
// Every site is a label candidate; declutter keeps the top by curated priority (ARCH_LABEL_PRIO,
// 0 for non-curated = shown only where room remains) and hides the rest — more appear on zoom-in.
const isLabelSite = s => true;

function bindTooltips() {
  for (const site of ARCH_SITES) {
    const m = markers[site.id];
    m.unbindTooltip();
    if (isLabelSite(site)) {
      m.bindTooltip(site.name[state.lang], { permanent: true, direction: "right", offset: [10, 0], className: "map-label", interactive: false });
    } else {
      m.bindTooltip(site.name[state.lang], { direction: "top", offset: [0, -6], opacity: 0.95 });
    }
  }
  scheduleDeclutter();
}

/* Label declutter: show permanent labels where they fit, hide collisions (priority first). */
function scheduleDeclutter() { declutterLabels(); }
function declutterLabels() {
  const items = [];
  for (const site of ARCH_SITES) {
    if (!isLabelSite(site)) continue;
    const m = markers[site.id];
    if (!markerLayer.hasLayer(m)) continue;
    const tt = m.getTooltip();
    const el = tt && tt.getElement();
    if (!el) continue;
    el.style.display = "";
    items.push({ site, el });
  }
  items.sort((a, b) =>
    ((b.site.id === state.selectedId) - (a.site.id === state.selectedId)) ||
    ((ARCH_LABEL_PRIO[b.site.id] || 0) - (ARCH_LABEL_PRIO[a.site.id] || 0))
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

for (const site of ARCH_SITES) markers[site.id] = makeMarker(site);
map.on("zoomend moveend", scheduleDeclutter);

/* ---------- popup ---------- */
const esc = s => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function eraChipsHtml(site) {
  // periods ordered chronologically
  const ordered = [...site.periods].sort((a, b) => PERIOD_INDEX[a] - PERIOD_INDEX[b]);
  return ordered.map(id => {
    const p = PERIOD_BY_ID[id];
    if (!p) return "";
    const main = id === site.mainPeriod ? " style=\"outline:2px solid #fff;outline-offset:1px\"" : "";
    return `<span class="era-chip" style="background:${p.color}"${main}>${esc(p.name[state.lang])}</span>`;
  }).join("");
}

function popupHtml(site) {
  const L8 = t();
  const [lat, lng] = site.coords;

  const img = site.imageFile
    ? `<div class="popup-img"><img loading="lazy"
         src="https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(site.imageFile)}?width=560"
         alt="${esc(site.name[state.lang])}"
         onerror="this.closest('.popup-img').style.display='none'"></div>`
    : "";

  const badges = [
    site.unesco ? `<span class="badge b-unesco">🏛 ${L8.unescoBadge}</span>` : "",
    site.region === "west_bank" ? `<span class="badge b-wb">${L8.westBankBadge}</span>` : ""
  ].join("");

  const wbWarn = site.region === "west_bank"
    ? `<div class="popup-warn"><strong>${L8.wbWarnTitle}</strong><span>${L8.wbWarnText}</span></div>`
    : "";

  const links = site.links.map(l =>
    `<a class="popup-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`
  ).join("");

  const nav =
    `<a class="popup-link nav" href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener">🧭 ${L8.route}</a>` +
    `<a class="popup-link nav" href="https://waze.com/ul?ll=${lat},${lng}&navigate=yes" target="_blank" rel="noopener">🚗 ${L8.waze}</a>`;

  return `${img}<div class="popup-body">
    <h3 class="popup-title">${esc(site.name[state.lang])}</h3>
    ${site.name.he ? `<div class="popup-he" dir="rtl">${esc(site.name.he)}</div>` : ""}
    ${badges ? `<div class="popup-badges">${badges}</div>` : ""}
    ${wbWarn}
    <div class="popup-period">⏳ ${esc(site.periodText[state.lang])}</div>
    <div class="popup-eras">${eraChipsHtml(site)}</div>
    <p class="popup-viewnote">${esc(site.highlight[state.lang])}</p>
    <p class="popup-desc">${esc(site.desc[state.lang])}</p>
    <div class="popup-access">${esc(site.access[state.lang])}</div>
    <div class="popup-links">${links}${nav}</div>
    <div class="popup-coords">${lat.toFixed(4)}, ${lng.toFixed(4)}</div>
  </div>`;
}

/* ---------- selection ---------- */
function highlightMarker(id, on) {
  const m = markers[id];
  if (!m) return;
  m.setStyle(on ? { color: GOLD, weight: 3.5, radius: 10 } : { color: "#ffffff", weight: 2, radius: 8 });
  if (on) m.bringToFront();
}

function onPopupOpen(id) {
  if (state.selectedId && state.selectedId !== id) {
    highlightMarker(state.selectedId, false);
    document.querySelectorAll(".site-card.selected").forEach(el => el.classList.remove("selected"));
  }
  state.selectedId = id;
  highlightMarker(id, true);
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
  highlightMarker(id, false);
  document.querySelectorAll(`.site-card[data-id="${id}"]`).forEach(el => el.classList.remove("selected"));
  state.selectedId = null;
  history.replaceState(null, "", location.pathname + location.search);
}

// Used when a filter hides the selected marker → closing drives the cleanup.
function clearSelection() {
  if (state.selectedId != null) map.closePopup();
}

// Programmatic open from a list card / deep-link. Marker taps open via Leaflet's own toggle.
function select(id, { pan = true } = {}) {
  const site = ARCH_SITES.find(s => s.id === id);
  if (!site) return;
  const m = markers[id];
  if (pan) {
    let opened = false;
    const open = () => { if (!opened) { opened = true; m.openPopup(); } };
    map.flyTo(site.coords, Math.max(map.getZoom(), 12), { duration: 0.8 });
    map.once("moveend", open);
    setTimeout(open, 900); // fallback if the map doesn't actually move
  } else {
    m.openPopup();
  }
}

/* ---------- filtering ---------- */
function visibleSites() {
  const q = state.q.trim().toLowerCase();
  return ARCH_SITES.filter(s => {
    if (!s.periods.some(p => state.eras.has(p))) return false;
    if (!state.westBank && s.region === "west_bank") return false;
    if (state.unescoOnly && !s.unesco) return false;
    if (q) {
      const hay = [
        s.name.en, s.name.ru, s.name.he || "",
        s.desc[state.lang], s.highlight[state.lang], s.periodText[state.lang]
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function applyFilters() {
  const vis = visibleSites();
  const visIds = new Set(vis.map(s => s.id));

  for (const site of ARCH_SITES) {
    const m = markers[site.id];
    const shouldShow = visIds.has(site.id);
    const isShown = markerLayer.hasLayer(m);
    if (shouldShow && !isShown) markerLayer.addLayer(m);
    if (!shouldShow && isShown) {
      if (state.selectedId === site.id) map.closePopup(); // → popupclose cleans up selection
      markerLayer.removeLayer(m);
    }
  }

  document.getElementById("count").textContent = t().shown(vis.length, ARCH_SITES.length);
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
    PERIOD_INDEX[a.mainPeriod] - PERIOD_INDEX[b.mainPeriod] ||
    a.name[state.lang].localeCompare(b.name[state.lang], state.lang)
  );

  for (const site of sorted) {
    const card = document.createElement("div");
    card.className = "site-card" + (site.id === state.selectedId ? " selected" : "");
    card.dataset.id = site.id;

    const meta = [
      site.periodText[state.lang],
      site.region === "west_bank" ? t().westBankBadge : ""
    ].filter(Boolean).join(" · ");

    card.innerHTML = `<span class="card-dot" style="background:${PERIOD_COLOR(site.mainPeriod)}"></span>
      <div class="card-body">
        <div class="card-name">${esc(site.name[state.lang])}</div>
        <div class="card-meta">${esc(meta)}</div>
      </div>
      ${site.unesco ? '<span class="card-stars" title="UNESCO" style="color:var(--gold-bright)">★</span>' : ""}`;

    card.onclick = () => select(site.id);
    list.appendChild(card);
  }
}

/* ---------- period filter (also the legend) ---------- */
function renderPeriodFilter() {
  const wrap = document.getElementById("period-filter");
  wrap.innerHTML = "";
  for (const p of PERIODS) {
    const count = ARCH_SITES.filter(s => s.periods.includes(p.id)).length;
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
  applyFilters();

  if (state.selectedId) {
    const site = ARCH_SITES.find(s => s.id === state.selectedId);
    const m = markers[state.selectedId];
    if (site && m && m.getPopup() && m.getPopup().isOpen()) {
      m.getPopup().setContent(popupHtml(site));
    }
  }
}

/* ---------- events ---------- */
document.getElementById("search").addEventListener("input", e => {
  state.q = e.target.value;
  applyFilters();
});

document.getElementById("f-wb").addEventListener("change", e => {
  state.westBank = e.target.checked;
  applyFilters();
});

document.getElementById("f-unesco").addEventListener("change", e => {
  state.unescoOnly = e.target.checked;
  applyFilters();
});

document.getElementById("pf-all").onclick = () => {
  state.eras = new Set(PERIODS.map(p => p.id));
  renderPeriodFilter();
  applyFilters();
};

document.getElementById("pf-none").onclick = () => {
  state.eras = new Set();
  renderPeriodFilter();
  applyFilters();
};

document.getElementById("sidebar-toggle").onclick = () => {
  document.getElementById("sidebar").classList.toggle("open");
};

window.addEventListener("vr:langchange", e => { state.lang = e.detail.lang; applyLang(); });

/* ---------- hash deep-link ---------- */
function parseHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  if (!h) return;
  if (h.startsWith("period=")) {
    const id = h.slice(7);
    if (PERIOD_BY_ID[id]) state.eras = new Set([id]);
  } else if (h.startsWith("site=")) {
    const id = h.slice(5);
    if (ARCH_SITES.some(s => s.id === id)) pendingSelect = id;
  } else if (ARCH_SITES.some(s => s.id === h)) {
    pendingSelect = h;
  }
}

/* ---------- init ---------- */
parseHash();
applyLang();

if (pendingSelect) {
  setTimeout(() => select(pendingSelect), 350);
} else if (state.eras.size < PERIODS.length && state.eras.size > 0) {
  const vis = visibleSites();
  if (vis.length) map.fitBounds(L.latLngBounds(vis.map(s => s.coords)).pad(0.12));
}
