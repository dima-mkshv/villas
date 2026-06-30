# 03 — Схема записи объекта

Расширенная по сравнению с Израилем (добавлены метрики, доступ, библиография, античное имя,
уверенность локализации). Поля, которые показываются на сайте, помечены 🌐; остальное живёт в
карточке частично или уходит в [библиотеку](05-RESEARCH-LIBRARY.md).

## Поля

```js
{
  id: "phanagoria",                       // 🌐 slug, в URL-хеше
  region: "pontus",                       //    реестр регионов

  name:        { ru: "Фанагория", en: "Phanagoria" },        // 🌐
  nameAncient: "Φαναγόρεια / Phanagoreia",                   // 🌐 античное имя (греч./лат.)
  modernPlace: { ru: "пос. Сенной", en: "Sennoy" },          // 🌐 современная привязка
  coords: [45.276, 36.965],               // 🌐 [lat, lng]
  localizationCertain: true,              // 🌐 false → «локализация предположительна»

  type: "city",                           // 🌐 city | settlement | fortress | necropolis | sanctuary | harbor
  periods: ["archaic","classical","hellenistic","roman","byzantine"], // 🌐 все эпохи (из periods.js)
  mainPeriod: "hellenistic",              // 🌐 главная эпоха → цвет маркера
  periodText: { ru: "архаика – Византия", en: "Archaic – Byzantine" }, // 🌐

  metropolis: { ru: "Теос (иония)", en: "Teos (Ionia)" },    // 🌐 город-основатель, если известен
  founded:  -543,                         //    год основания (отриц. = до н.э.)
  abandoned: 1000,                        //    гибель/запустение

  // метрики (заказчик: размер / площадь / сохранность)
  areaHa: 65,                             // 🌐 площадь, га (null если неизвестно)
  sizeClass: "metropolis",                // 🌐 metropolis|city|town|small|unknown
  sizeNote: { ru: "...", en: "..." },     //    словесно (если areaHa груб/спорн)
  preservation: "good",                   // 🌐 excellent|good|partial|poor|lost
  preservationNote: { ru: "...", en: "..." },
  excavationStatus: "active",             // 🌐 active|past|surveyed|unexcavated

  // доступ (ключевой фильтр)
  access: "museum",                       // 🌐 museum|open|restricted|closed|lost
  accessNote: { ru: "музей-заповедник, экспозиция", en: "..." },

  significance: 5,                        // 🌐 1–5 экспертная значимость (подсветка топ)

  desc:      { ru: "...", en: "..." },    // 🌐 2–4 предложения
  highlight: { ru: "...", en: "..." },    // 🌐 однострочный «крючок»

  // ссылки — заказчик просил БОЛЬШЕ (вики / архео-сайты / музеи)
  links: [                                // 🌐
    { label: "Музей-заповедник «Фанагория»", url: "https://phanagoria-museum.ru/" },
    { label: "ИА РАН — Фанагорийская экспедиция", url: "https://archaeolog.ru/..." },
    { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Фанагория" },
    { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Phanagoria" }
  ],

  // список литературы / источников (заказчик: Страбон и пр.)
  bibliography: [                         // 🌐 показываем «Источники» отдельным блоком
    { type: "ancient",  ref: "Страбон, География XI.2.10" },
    { type: "ancient",  ref: "Псевдо-Скилак, Перипл, 72" },
    { type: "epigraphy", ref: "КБН №971–1005", url: "https://iospe.kdl.kcl.ac.uk/..." },
    { type: "modern",   ref: "Кузнецов В.Д. Фанагория. М., 20xx" }
  ],

  imageFile: "...",                       // 🌐 Wikimedia Commons / музей (с атрибуцией)

  // служебное (НЕ на сайт; для библиотеки/агентов)
  _libRef: "research/pontus/phanagoria.md", // полное досье
  _verified: "2026-…",                      // когда выверено и кем (агент/человек)
  _confidence: "high"                       // уверенность в данных
}
```

## Заметки по схеме

- **`bibliography` — новинка относительно Израиля.** Рендерим в карточке отдельным блоком
  «Источники / Литература» (см. бриф п.7). `type`: `ancient` (Страбон, перипл), `epigraphy`
  (КБН/IOSPE), `modern` (монографии/отчёты). У эпиграфики/современных — по возможности `url`.
- **`access` + `sizeClass` + `preservation` + `type`** — это и фильтры (см. методологию).
- **`localizationCertain: false`** включает в карточке плашку «локализация предположительна»
  и (опц.) другой стиль маркера.
- **Поля с `_`** на сайт не идут — это мост к библиотеке (путь к досье, статус проверки).
- Античные названия — обязательны (тема греческая); храним в `nameAncient`, при желании
  отдельно `nameGreek` / `nameLatin`.

## Пример «минимальной» записи (для спорной точки)

```js
{
  id: "bata", region: "pontus",
  name: { ru: "Бата", en: "Bata" }, nameAncient: "Βατά / Bata",
  modernPlace: { ru: "Новороссийск (Цемесская бухта)", en: "Novorossiysk" },
  coords: [44.72, 37.78], localizationCertain: false,
  type: "harbor", periods: ["hellenistic","roman"], mainPeriod: "roman",
  access: "lost", significance: 2,
  desc: { ru: "Гавань, упоминаемая периплами; точная локализация обсуждается.", en: "..." },
  bibliography: [{ type:"ancient", ref:"Псевдо-Арриан, Перипл Понта Евксинского" },
                 { type:"ancient", ref:"Страбон XI.2.14" }],
  _libRef: "research/pontus/bata.md", _confidence: "low"
}
```
