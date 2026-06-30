# VILLAE ROMANAE 🏛️

Интерактивный атлас археологии Израиля (и Западного берега). Три раздела, связанные общим навбаром и языком (RU/EN):

1. **Карта вилл** (`index.html`) — римские виллы, дворцы и города с рейтингом видов. Вдохновлено [itiner-e.org](https://itiner-e.org/) — но про виллы: римляне не дураки были строить на каждом холме с охуенным видом.
2. **Таймлайн** (`timeline.html`) — хронология от палеолита до крестоносцев: 14 эпох с культурами, державами, датами и цветами. Каждая эпоха ведёт на карту объектов.
3. **Карта объектов** (`sites.html`) — ~49 археологических памятников, открытых для посещения, с фильтром по эпохам и цветовой индикацией по «главной» эпохе.

## Как открыть

Просто открой `index.html` в браузере. Никакой сборки — чистый HTML + [Leaflet](https://leafletjs.com/) с CDN. Нужен интернет (тайлы карт, шрифты, фото с Wikimedia).

Либо локальный сервер:

```bash
python3 -m http.server 8137
# → http://localhost:8137
```

## Что внутри

| Файл | Что |
|---|---|
| `index.html` · `app.js` | карта вилл: маркеры по рейтингу вида, фильтры, попапы |
| `timeline.html` · `timeline.js` | таймлайн эпох |
| `sites.html` · `sites.js` | карта археологических объектов с фильтром по эпохам |
| `periods.js` | датасет: 14 археологических периодов (даты, культуры, цвета, RU/EN/he) |
| `data.js` | датасет вилл: 40 объектов |
| `sites-data.js` | датасет объектов: ~49 памятников всех эпох |
| `nav.js` | общий навбар + синхронизация языка (событие `vr:langchange`) |
| `styles.css` | тёмная «римская» тема для всех страниц |

## Легенда и навигация

**Карта вилл:** кружки — виллы/дворцы (цвет = рейтинг вида 🔴 1 → 🟡 3 → 🟢 5), синие квадраты — города.

**Таймлайн:** эпохи сверху вниз от древних к поздним; цветная полоса = цвет эпохи (те же цвета на карте объектов). Шкала намеренно не линейная — иначе палеолит раздавил бы всё остальное. Клик по «знаковому объекту» или «Показать на карте» → карта объектов с нужным фильтром.

**Карта объектов:** точка окрашена по главной эпохе объекта; список эпох слева — это и фильтр, и легенда (клик = вкл/выкл эпоху, объект виден, если хотя бы один его период включён). Кнопки «Все»/«Сброс». В попапе — фото, период, цветные чипы всех эпох объекта, как добраться, ссылки, навигация (Google Maps / Waze).

**Deep-links:**
- `index.html#masada-northern-palace` — выбрать виллу
- `sites.html#site=caesarea-maritima` — выбрать объект
- `sites.html#period=roman` — карта объектов с фильтром по эпохе

## Как добавить объект (карта объектов)

В `sites-data.js` добавь объект в массив `ARCH_SITES`:

```js
{
  id: "my-site",                          // уникальный slug, идёт в #site=
  name: { en: "...", ru: "...", he: "..." },
  coords: [31.5, 35.0],                   // [lat, lng]
  periods: ["iron-ii", "roman"],          // все значимые эпохи (id из periods.js)
  mainPeriod: "roman",                    // главная эпоха → цвет маркера
  periodText: { en: "Iron Age – Roman", ru: "Железный век – Рим" },
  region: "north",                        // north | coast | south | jerusalem | judea | west_bank
  access: { en: "INPA National Park", ru: "Нац. парк INPA" },
  desc: { en: "...", ru: "..." },
  highlight: { en: "one-liner", ru: "однострочный крючок" },
  unesco: true,                           // необязательно
  links: [{ label: "Wikipedia (EN)", url: "https://..." }],
  imageFile: "Commons_filename.jpg"       // имя файла на Wikimedia Commons, необязательно
}
```

Периоды (`id` для `periods` / `mainPeriod`): `paleolithic`, `epipaleolithic`, `neolithic`, `chalcolithic`, `bronze-early`, `bronze-middle`, `bronze-late`, `iron-i`, `iron-ii`, `babylonian-persian`, `hellenistic`, `roman`, `byzantine`, `early-islamic`.

## Деплой (потом)

Это статика — кидается на GitHub Pages / Netlify / S3 как есть:

```bash
git init && git add . && git commit -m "villae romanae"
gh repo create villas --public --source=. --push
gh api repos/{owner}/villas/pages -X POST -f 'source[branch]=main' -f 'source[path]=/'
```

## Источники

Wikipedia (en/he/ru), Israel Nature & Parks Authority, UNESCO World Heritage, BibleWalks, Madain Project, Ramat Hanadiv. Периодизация — стандартная «музейная» шкала IAA. Рейтинги видов — экспертная оценка по принципу «куда бы римлянин поставил триклиний».
