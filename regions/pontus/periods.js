// VILLAE ROMANAE — PONTUS region — periodization of the ancient North Black Sea coast.
// Greek colonisation (Ionian Bosporus + Dorian Chersonesos) → Bosporan Kingdom → Rome → Byzantium/Tmutarakan.
// Mirrors the Israel periods.js structure (marker color = main period).
// Draft per docs/pontus/02-PERIODIZATION.md; dates are conventional (Bosporan chronology),
// refined in code-phase against Gaidukevich / IA RAS. Boundary of the atlas: 10th–11th c.

const PONTUS_PERIODS = [
  {
    id: "pre-greek",
    name: { ru: "Догреческая (контекст)", en: "Pre-Greek (context)" },
    start: -1200, end: -575,
    dateText: { ru: "до ≈575 г. до н.э.", en: "before c. 575 BCE" },
    color: "#8d7355",
    cultures: { ru: ["киммерийцы", "синды", "меоты"], en: ["Cimmerians", "Sindi", "Maeotians"] },
    blurb: {
      ru: "До прихода греков берега Меотиды и Понта населяли киммерийцы, а Прикубанье и Тамань — синды и меоты: земледельцы и коневоды, чьи курганы и городища предшествуют колонизации и потом сольются с боспорским миром.",
      en: "Before the Greeks, the shores of the Maeotis and Pontus were home to Cimmerians, and the Kuban and Taman to the Sindi and Maeotians — farmers and horse-breeders whose kurgans and settlements predate colonisation and later merge into the Bosporan world."
    }
  },
  {
    id: "archaic",
    name: { ru: "Греческая колонизация (архаика)", en: "Greek colonisation (Archaic)" },
    start: -575, end: -480,
    dateText: { ru: "≈575–480 гг. до н.э.", en: "c. 575–480 BCE" },
    color: "#2f9e8f",
    cultures: { ru: ["ионийцы (Милет, Теос)", "эолийцы (Митилена)"], en: ["Ionians (Miletus, Teos)", "Aeolians (Mytilene)"] },
    blurb: {
      ru: "С середины VI в. до н.э. ионийцы и эолийцы основывают на Боспоре Киммерийском десятки колоний — Пантикапей, Фанагорию, Гермонассу, Кепы, Феодосию; в Западном Крыму ионийцы ставят Керкинитиду. Тамань заселяется так плотно, что города стоят в ≈10 км друг от друга.",
      en: "From the mid-6th c. BCE Ionian and Aeolian settlers found dozens of colonies on the Cimmerian Bosporus — Panticapaeum, Phanagoria, Hermonassa, Kepoi, Theodosia; in Western Crimea Ionians found Kerkinitis. Taman fills so densely that towns sit ~10 km apart."
    }
  },
  {
    id: "classical",
    name: { ru: "Классика — Боспор и Херсонес", en: "Classical — Bosporus & Chersonesos" },
    start: -480, end: -323,
    dateText: { ru: "480–323 гг. до н.э.", en: "480–323 BCE" },
    color: "#4a9b57",
    cultures: { ru: ["Археанактиды", "Спартокиды", "синды", "дорийцы (Гераклея Понтийская)"], en: ["Archaeanactids", "Spartocids", "Sindi", "Dorians (Heraclea Pontica)"] },
    blurb: {
      ru: "Около 480 г. до н.э. города Керченского и Таманского полуостровов объединяются в Боспорское царство (Археанактиды, затем Спартокиды); Боспор кормит Афины хлебом и присоединяет Синдику и Феодосию. В то же время в Западном Крыму выходцы из дорийской Гераклеи Понтийской основывают Херсонес Таврический — независимый от Боспора полис со своей хорой (Керкинитида, Калос-Лимен).",
      en: "Around 480 BCE the cities of the Kerch and Taman peninsulas unite into the Bosporan Kingdom (Archaeanactids, then Spartocids); Bosporus feeds Athens with grain and absorbs Sindica and Theodosia. Meanwhile in Western Crimea settlers from Dorian Heraclea Pontica found Chersonesos Taurica — a polis independent of the Bosporus, with its own chora (Kerkinitis, Kalos Limen)."
    }
  },
  {
    id: "hellenistic",
    name: { ru: "Эллинизм", en: "Hellenistic" },
    start: -323, end: -63,
    dateText: { ru: "323–63 гг. до н.э.", en: "323–63 BCE" },
    color: "#d3a72d",
    cultures: { ru: ["Спартокиды", "Митридат VI Понтийский"], en: ["Spartocids", "Mithridates VI of Pontus"] },
    blurb: {
      ru: "Расцвет Спартокидов: пышные курганы, расписные склепы, торговля со всем Средиземноморьем. К концу эпохи ослабевший Боспор входит в державу Митридата VI Евпатора — последнего великого врага Рима.",
      en: "The Spartocid heyday: rich kurgans, painted tombs, trade across the Mediterranean. By the era's end a weakened Bosporus joins the realm of Mithridates VI Eupator — Rome's last great enemy."
    }
  },
  {
    id: "roman",
    name: { ru: "Римский период", en: "Roman period" },
    start: -63, end: 340,
    dateText: { ru: "63 г. до н.э. – ≈340 г. н.э.", en: "63 BCE – c. 340 CE" },
    color: "#9b2d6f",
    cultures: { ru: ["Боспор — клиент Рима", "Тиберии Юлии"], en: ["Bosporus, Roman client", "Tiberii Julii dynasty"] },
    blurb: {
      ru: "После гибели Митридата (63 до н.э.) Боспор — вассальное царство Рима под династией Тибериев Юлиев. Расцвет I–III вв., строительство крепостей (Илурат); в Крыму стоит римский гарнизон — крепость Харакс на мысе Ай-Тодор и вексилляции в Херсонесе. Затем готские походы и удар гуннов около 370 г.",
      en: "After Mithridates' death (63 BCE) Bosporus becomes a Roman client kingdom under the Tiberii Julii. A 1st–3rd c. flourishing, frontier forts (Iluraton); in Crimea a Roman garrison holds the fort of Charax on Cape Ai-Todor and vexillations at Chersonesos. Then Gothic raids and the Hunnic blow around 370 CE."
    }
  },
  {
    id: "late-antique",
    name: { ru: "Позднеантичный (переселение народов)", en: "Late Antique (Migration period)" },
    start: 340, end: 540,
    dateText: { ru: "≈340–540 гг. н.э.", en: "c. 340–540 CE" },
    color: "#6b7a8f",
    cultures: { ru: ["гунны", "готы-трапезиты"], en: ["Huns", "Tetraxite Goths"] },
    blurb: {
      ru: "Великое переселение народов: гунны и готы, упадок городов. Часть боспорских центров пустеет, часть выживает под новой властью на пути к византийской эпохе.",
      en: "The Migration period: Huns and Goths, urban decline. Some Bosporan centres empty out, others survive under new masters on the way into the Byzantine age."
    }
  },
  {
    id: "byzantine",
    name: { ru: "Византийский / Таматарха", en: "Byzantine / Tamatarcha" },
    start: 540, end: 1100,
    dateText: { ru: "≈540 – XI в.", en: "c. 540 – 11th c." },
    color: "#5a4fb0",
    cultures: { ru: ["Византия (Юстиниан)", "хазары", "Таматарха"], en: ["Byzantium (Justinian)", "Khazars", "Tamatarcha"] },
    blurb: {
      ru: "В VI в. Юстиниан укрепляет Боспор и Таматарху; край — в орбите Византии, затем хазар. Гермонасса становится Таматархой, будущей русской Тмутараканью. На этом рубеже (X–XI вв.) атлас заканчивается.",
      en: "In the 6th c. Justinian fortifies Bosporus and Tamatarcha; the region orbits Byzantium, then the Khazars. Hermonassa becomes Tamatarcha — the future Rus' Tmutarakan. The atlas ends at this 10th–11th c. threshold."
    }
  }
];

// where this timeline deliberately stops
const PONTUS_HORIZON = {
  name: { ru: "Средневековье (Тмутаракань)", en: "Middle Ages (Tmutarakan)" },
  dateText: { ru: "с XI в.", en: "from the 11th c." },
  note: {
    ru: "После XI века Таматарха-Тмутаракань уходит в русское и затем золотоордынское/генуэзское средневековье — за рамки античного атласа.",
    en: "After the 11th c. Tamatarcha-Tmutarakan passes into Rus', then Golden Horde / Genoese medieval history — beyond this ancient atlas."
  }
};

const PONTUS_PERIOD_BY_ID = Object.fromEntries(PONTUS_PERIODS.map(p => [p.id, p]));
const PONTUS_PERIOD_COLOR = id => (PONTUS_PERIOD_BY_ID[id] ? PONTUS_PERIOD_BY_ID[id].color : "#888");
const PONTUS_PERIOD_INDEX = Object.fromEntries(PONTUS_PERIODS.map((p, i) => [p.id, i]));
