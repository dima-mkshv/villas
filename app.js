/* ── VILLAE ROMANAE — map app ─────────────────────────────────── */
"use strict";

/* ---------- i18n ---------- */
const I18N = {
  ru: {
    subtitle: "Интерактивный археологический атлас римских вилл и дворцов — с рейтингом панорам!",
    searchPh: "Поиск: Масада, Кейсария, вилла…",
    villas: "Виллы",
    palaces: "Дворцы",
    cities: "Города",
    minView: "Вид от:",
    westBank: "включая Западный берег",
    unescoOnly: "только ЮНЕСКО ★",
    legendView: "Рейтинг вида (все объекты)",
    viewMeh: "так себе",
    viewEpic: "охуенный",
    legendCity: "римский город",
    shapeVilla: "вилла",
    shapePalace: "дворец",
    shapeCity: "город",
    shown: (n, total) => `Показано: ${n} из ${total}`,
    empty: "Ничего не нашлось. Римляне сюда не дошли.",
    sources: "Данные: Wikipedia · Israel Nature & Parks Authority · BibleWalks · Madain Project. Карта: Esri, CARTO, OpenStreetMap.",
    viewLabel: "Вид",
    route: "Маршрут",
    waze: "Waze",
    basemaps: { topo: "Рельеф", sat: "Спутник", light: "Светлая" },
    westBankBadge: "Западный берег",
    unescoBadge: "ЮНЕСКО",
    wbWarnTitle: "⚠️ ВНИМАНИЕ: ЗАПАДНЫЙ БЕРЕГ",
    wbWarnText: "Страховка проката тут не действует, а въезд в зону A опасен.",
    subtypes: {
      "villa": "Вилла",
      "manor": "Усадьба",
      "mansion": "Особняк",
      "palace": "Дворец",
      "fortress-palace": "Крепость-дворец",
      "city": "Город",
      "town": "Городок"
    }
  },
  en: {
    subtitle: "An interactive archaeological atlas of Roman villas and palaces — ranked by their views!",
    searchPh: "Search: Masada, Caesarea, villa…",
    villas: "Villas",
    palaces: "Palaces",
    cities: "Cities",
    minView: "View from:",
    westBank: "include the West Bank",
    unescoOnly: "UNESCO only ★",
    legendView: "View rating (all sites)",
    viewMeh: "meh",
    viewEpic: "epic",
    legendCity: "Roman city",
    shapeVilla: "villa",
    shapePalace: "palace",
    shapeCity: "city",
    shown: (n, total) => `Showing ${n} of ${total}`,
    empty: "Nothing found. The Romans never made it here.",
    sources: "Data: Wikipedia · Israel Nature & Parks Authority · BibleWalks · Madain Project. Map: Esri, CARTO, OpenStreetMap.",
    viewLabel: "View",
    route: "Directions",
    waze: "Waze",
    basemaps: { topo: "Terrain", sat: "Satellite", light: "Light" },
    westBankBadge: "West Bank",
    unescoBadge: "UNESCO",
    wbWarnTitle: "⚠️ WARNING: WEST BANK",
    wbWarnText: "Rental-car insurance is void here, and entering Area A is dangerous.",
    subtypes: {
      "villa": "Villa",
      "manor": "Manor",
      "mansion": "Mansion",
      "palace": "Palace",
      "fortress-palace": "Fortress-palace",
      "city": "City",
      "town": "Town"
    }
  }
};

const RATING_COLORS = { 1: "#d7191c", 2: "#f17c33", 3: "#f5c518", 4: "#77c25e", 5: "#1a9641" };
const CITY_COLOR = "#4263eb";
const GOLD = "#c9a227";

/* ---------- state ---------- */
const state = {
  lang: localStorage.getItem("vr_lang") || "ru",
  shapes: { circle: true, square: true, diamond: true },
  minView: 1,
  westBank: true,
  unescoOnly: false,
  q: "",
  selectedId: null
};

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

map.fitBounds(
  L.latLngBounds(SITES.map(s => s.coords)).pad(0.06)
);

/* basemap switcher control */
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
const markers = {}; // id -> marker
const markerLayer = L.layerGroup().addTo(map);

// circle = villa/manor/mansion · square = palace/fortress-palace · diamond = city
function shapeOf(site) {
  if (site.subtype === "palace" || site.subtype === "fortress-palace") return "square";
  if (site.type === "city") return "diamond";
  return "circle";
}

function makeMarker(site) {
  const color = RATING_COLORS[site.view];
  const shape = shapeOf(site);
  const isU = !!(site.unesco || site.unescoTentative);
  const star = isU ? `<span class="mk-star">★</span>` : "";
  // All markers are divIcons (incl. circles) so the UNESCO ★ can sit inside the glyph.
  const m = L.marker(site.coords, {
    icon: L.divIcon({
      className: "mk-icon" + (isU ? " unesco" : ""),
      html: `<div class="mk-${shape}" style="background:${color}"></div>${star}`,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    })
  });
  // Bind the popup once with a content function (re-renders + re-translates on open); selection
  // follows Leaflet's own open/close events, so marker taps toggle reliably on touch (iOS).
  m.bindPopup(() => popupHtml(site), { maxWidth: 340, minWidth: 320, autoPanPadding: [25, 25] });
  m.on("popupopen", () => onPopupOpen(site.id));
  m.on("popupclose", () => onPopupClose(site.id));
  return m;
}

// Every villa is a label candidate; declutter keeps the top by view rating and hides the rest
// (more appear as you zoom in). Priority: selected > view rating.
const isLabelSite = s => true;

function bindTooltips() {
  for (const site of SITES) {
    const m = markers[site.id];
    m.unbindTooltip();
    if (isLabelSite(site)) {
      m.bindTooltip(site.name[state.lang], { permanent: true, direction: "right", offset: [11, 0], className: "map-label", interactive: false });
    } else {
      m.bindTooltip(site.name[state.lang], { direction: "top", offset: [0, -8], opacity: 0.95 });
    }
  }
  scheduleDeclutter();
}

/* Label declutter: show permanent labels where they fit, hide collisions (priority first). */
function scheduleDeclutter() { declutterLabels(); }
function declutterLabels() {
  const items = [];
  for (const site of SITES) {
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
    ((b.site.view || 0) - (a.site.view || 0))
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

for (const site of SITES) markers[site.id] = makeMarker(site);
map.on("zoomend moveend", scheduleDeclutter);

/* ---------- popup ---------- */
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function starsHtml(view) {
  return `<span class="stars" style="color:${RATING_COLORS[view]}">${"★".repeat(view)}${"☆".repeat(5 - view)}</span>`;
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
    `<span class="badge b-type">${site.type === "villa" ? "🏛 " : "🏟 "}${L8.subtypes[site.subtype]}</span>`,
    (site.unesco || site.unescoTentative) ? `<span class="badge b-unesco">★ ${L8.unescoBadge}</span>` : "",
    site.region === "west_bank" ? `<span class="badge b-wb">${L8.westBankBadge}</span>` : ""
  ].join("");

  const unescoLink = site.unesco
    ? `<a class="popup-link" href="https://whc.unesco.org/en/list/${site.unesco}/" target="_blank" rel="noopener">★ ${L8.unescoBadge} ↗</a>`
    : site.unescoTentative
    ? `<a class="popup-link" href="https://whc.unesco.org/en/tentativelists/${site.unescoTentative}/" target="_blank" rel="noopener">★ ${L8.unescoBadge} ↗</a>`
    : "";

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
    <div class="popup-badges">${badges}</div>
    ${wbWarn}
    <div class="popup-view">${L8.viewLabel}: ${starsHtml(site.view)} <span style="color:${RATING_COLORS[site.view]}">${site.view}/5</span></div>
    <p class="popup-viewnote">${esc(site.viewNote[state.lang])}</p>
    <div class="popup-period">⏳ ${esc(site.period[state.lang])}</div>
    <p class="popup-desc">${esc(site.desc[state.lang])}</p>
    <div class="popup-links">${links}${unescoLink}${nav}</div>
    <div class="popup-coords">${lat.toFixed(4)}, ${lng.toFixed(4)}</div>
  </div>`;
}

/* ---------- selection ---------- */
function highlightMarker(id, on) {
  const m = markers[id];
  if (m && m._icon) m._icon.classList.toggle("selected", on); // all villa markers are divIcons now
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
  history.replaceState(null, "", "#" + id);
  if (window.innerWidth <= 880) document.getElementById("sidebar").classList.remove("open");
}

function onPopupClose(id) {
  if (state.selectedId !== id) return;
  highlightMarker(id, false);
  document.querySelectorAll(`.site-card[data-id="${id}"]`).forEach(el => el.classList.remove("selected"));
  state.selectedId = null;
  history.replaceState(null, "", location.pathname + location.search);
}

// Used when a filter hides the selected marker → closing the popup drives the cleanup.
function clearSelection() {
  if (state.selectedId != null) map.closePopup();
}

// Programmatic open from a list card / deep-link. Marker taps open via Leaflet's own toggle.
function select(id, { pan = true } = {}) {
  const site = SITES.find(s => s.id === id);
  if (!site) return;
  const m = markers[id];
  if (pan) {
    let opened = false;
    const open = () => { if (!opened) { opened = true; m.openPopup(); } };
    map.flyTo(site.coords, Math.max(map.getZoom(), 13), { duration: 0.8 });
    map.once("moveend", open);
    setTimeout(open, 900); // fallback if the map doesn't actually move
  } else {
    m.openPopup();
  }
}

/* ---------- filtering ---------- */
function visibleSites() {
  const q = state.q.trim().toLowerCase();
  return SITES.filter(s => {
    if (!state.shapes[shapeOf(s)]) return false;
    if (s.view < state.minView) return false;
    if (!state.westBank && s.region === "west_bank") return false;
    if (state.unescoOnly && !(s.unesco || s.unescoTentative)) return false;
    if (q) {
      const hay = [
        s.name.en, s.name.ru, s.name.he || "",
        s.desc[state.lang], I18N.ru.subtypes[s.subtype], I18N.en.subtypes[s.subtype]
      ].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function applyFilters() {
  const vis = visibleSites();
  const visIds = new Set(vis.map(s => s.id));

  for (const site of SITES) {
    const m = markers[site.id];
    const shouldShow = visIds.has(site.id);
    const isShown = markerLayer.hasLayer(m);
    if (shouldShow && !isShown) markerLayer.addLayer(m);
    if (!shouldShow && isShown) {
      if (state.selectedId === site.id) map.closePopup(); // → popupclose cleans up selection
      markerLayer.removeLayer(m);
    }
  }

  document.getElementById("count").textContent = t().shown(vis.length, SITES.length);
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
    b.view - a.view ||
    a.type.localeCompare(b.type) ||
    a.name[state.lang].localeCompare(b.name[state.lang], state.lang)
  );

  for (const site of sorted) {
    const card = document.createElement("div");
    card.className = "site-card" + (site.id === state.selectedId ? " selected" : "");
    card.dataset.id = site.id;

    const dot = `<span class="card-dot ${shapeOf(site)}" style="background:${RATING_COLORS[site.view]}"></span>`;

    const meta = [
      t().subtypes[site.subtype],
      (site.unesco || site.unescoTentative) ? "★ " + t().unescoBadge : "",
      site.region === "west_bank" ? t().westBankBadge : ""
    ].filter(Boolean).join(" · ");

    card.innerHTML = `${dot}
      <div class="card-body">
        <div class="card-name">${esc(site.name[state.lang])}</div>
        <div class="card-meta">${esc(meta)}</div>
      </div>
      <span class="card-stars" style="color:${RATING_COLORS[site.view]}">${"★".repeat(site.view)}</span>`;

    card.onclick = () => select(site.id);
    list.appendChild(card);
  }
}

/* ---------- static UI ---------- */
function renderStarFilter() {
  const wrap = document.getElementById("star-filter");
  wrap.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const b = document.createElement("button");
    b.className = "star-btn" + (i <= state.minView ? " lit" : "");
    b.textContent = "★";
    b.title = `≥ ${i}`;
    b.onclick = () => {
      state.minView = (state.minView === i) ? 1 : i;
      renderStarFilter();
      applyFilters();
    };
    wrap.appendChild(b);
  }
}

function renderLegendScale() {
  const scale = document.getElementById("legend-scale");
  scale.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const sw = document.createElement("div");
    sw.className = "legend-swatch";
    sw.style.background = RATING_COLORS[i];
    sw.title = i;
    scale.appendChild(sw);
  }
}

function applyLang() {
  const L8 = t();
  document.documentElement.lang = state.lang;
  localStorage.setItem("vr_lang", state.lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = L8[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  document.getElementById("search").placeholder = L8.searchPh;

  bindTooltips();
  renderBasemapControl();
  applyFilters();

  // refresh open popup in the new language
  if (state.selectedId) {
    const site = SITES.find(s => s.id === state.selectedId);
    const m = markers[state.selectedId];
    if (site && m && m.getPopup() && m.getPopup().isOpen()) {
      m.getPopup().setContent(popupHtml(site));
    }
  }
}

/* ---------- events ---------- */
window.addEventListener("vr:langchange", e => { state.lang = e.detail.lang; applyLang(); });

document.getElementById("search").addEventListener("input", e => {
  state.q = e.target.value;
  applyFilters();
});

document.getElementById("f-villa").addEventListener("change", e => {
  state.shapes.circle = e.target.checked;
  applyFilters();
});

document.getElementById("f-palace").addEventListener("change", e => {
  state.shapes.square = e.target.checked;
  applyFilters();
});

document.getElementById("f-city").addEventListener("change", e => {
  state.shapes.diamond = e.target.checked;
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

document.getElementById("sidebar-toggle").onclick = () => {
  document.getElementById("sidebar").classList.toggle("open");
};

/* ---------- init ---------- */
renderStarFilter();
applyLang();

// deep link: villae.example/#masada-northern-palace
const hashId = decodeURIComponent(location.hash.slice(1));
if (hashId && SITES.some(s => s.id === hashId)) {
  setTimeout(() => select(hashId), 400);
}
