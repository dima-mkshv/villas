// VILLAE ROMANAE — PONTUS region — curated dataset for the map/timeline.
// Greek colonisation of the North Black Sea coast → Bosporan Kingdom → Rome → Byzantium.
// Distilled from the research library: research/pontus/<id>.md (full dossiers, sources, disputes).
// Schema: docs/pontus/03-DATA-SCHEMA.md. Marker color = mainPeriod (regions/pontus/periods.js);
// marker shape = type (circle=city/settlement, square=fortress, diamond=necropolis, triangle=sanctuary).
// Fields prefixed _ are library bridges, not shown on site. localizationCertain:false → "локализация предположительна".

const PONTUS_SITES = [
  // ═══════════════════ CRIMEA — European Bosporus ═══════════════════
  {
    id: "pantikapaion", region: "pontus",
    name: { ru: "Пантикапей", en: "Pantikapaion" },
    nameAncient: "Παντικάπαιον / Panticapaeum",
    modernPlace: { ru: "гора Митридат, Керчь", en: "Mt. Mithridates, Kerch" },
    coords: [45.3508, 36.4686], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique", "byzantine"],
    mainPeriod: "hellenistic",
    periodText: { ru: "архаика – Византия", en: "Archaic – Byzantine" },
    metropolis: { ru: "Милет", en: "Miletus" },
    founded: -600, abandoned: 370,
    areaHa: 100, sizeClass: "metropolis",
    preservation: "partial", excavationStatus: "active",
    access: "museum",
    accessNote: { ru: "г. Митридат открыта (арка пританея, тропы); Керченский музей-заповедник", en: "Mt. Mithridates open (Prytaneion arch, paths); Kerch Museum-Reserve" },
    significance: 5,
    desc: {
      ru: "Столица Боспорского царства и метрополия европейского Боспора, основанная Милетом ок. 600 г. до н.э. Здесь правили Спартокиды, умер Митридат VI, отсюда хлеб Боспора кормил Афины; на горе Митридат — акрополь с дворцом, рядом царские курганы.",
      en: "Capital of the Bosporan Kingdom and metropolis of the European Bosporus, founded by Miletus c. 600 BCE. The Spartocids ruled here, Mithridates VI died here, and from its granaries Athens was fed; the acropolis with its palace crowned Mt. Mithridates."
    },
    highlight: { ru: "Столица Боспорского царства — где умер Митридат и откуда хлеб Боспора кормил Афины.", en: "Capital of the Bosporan Kingdom — where Mithridates died and from whose granaries Athens was fed." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Пантикапей" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Pantikapaion" },
      { label: "ГМИИ — Боспорская экспедиция", url: "https://pushkinmuseum.art" },
      { label: "Керченский музей-заповедник", url: "https://kerchmuseum.ru" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон, География VII.4.4; XI.2.10" },
      { type: "ancient", ref: "Диодор Сицилийский XX.24.3" },
      { type: "epigraphy", ref: "КБН 1–867 (≈65% корпуса; манумиссии КБН 70–74)", url: "https://epigraphy.packhum.org/book/231" },
      { type: "modern", ref: "Блаватский В.Д. Пантикапей. М.: Наука, 1964" }
    ],
    _libRef: "research/pontus/pantikapaion.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "nymphaion", region: "pontus",
    name: { ru: "Нимфей", en: "Nymphaion" },
    nameAncient: "Νύμφαιον / Nymphaeum",
    modernPlace: { ru: "пос. Героевское (Эльтиген), близ Керчи", en: "Heroivske (Eltigen), near Kerch" },
    coords: [45.2367, 36.4175], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – римский период", en: "Archaic – Roman" },
    metropolis: { ru: "Самос", en: "Samos" },
    founded: -570, abandoned: 250,
    areaHa: 9, sizeClass: "town",
    preservation: "partial", excavationStatus: "active",
    access: "open",
    accessNote: { ru: "городище доступно, без инфраструктуры; фед. ОКН", en: "open site, no facilities; federal heritage" },
    significance: 4,
    desc: {
      ru: "Греческий полис на западном берегу Керченского пролива, член Делосского союза и афинский форпост, чеканивший свою монету. Дед Демосфена Гилон сдал Нимфей и получил от боспорских тиранов «Сады»; в городе — святилища Деметры и Афродиты и знаменитое граффити-триера «Исида».",
      en: "A Greek polis on the west shore of the Kerch Strait, a Delian League member and Athenian outpost with its own coinage. Demosthenes' grandfather Gylon handed it over and was rewarded with the 'Gardens'; the town held sanctuaries of Demeter and Aphrodite and the famed trireme graffito 'Isis'."
    },
    highlight: { ru: "Боспорский город, который дед Демосфена предал Афинам, выменяв на «Сады».", en: "The Bosporan city Demosthenes' grandfather handed over, trading it for the 'Gardens'." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Нимфей_(Крым)" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Nymphaion_(Crimea)" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон VII.4.4; Эсхин, Против Ктесифонта III.171" },
      { type: "epigraphy", ref: "КБН 911–940; SEG 37.668 (Митридат «царь царей»)" },
      { type: "modern", ref: "Грач Н.Л. Некрополь Нимфея. СПб.: Наука, 1999" }
    ],
    _libRef: "research/pontus/nymphaion.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "theodosia", region: "pontus",
    name: { ru: "Феодосия", en: "Theodosia" },
    nameAncient: "Θεοδοσία / Theodosia",
    modernPlace: { ru: "Карантинный холм, Феодосия", en: "Quarantine Hill, Feodosia" },
    coords: [45.0300, 35.3800], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – позднеантичный", en: "Archaic – Late Antique" },
    metropolis: { ru: "Милет", en: "Miletus" },
    founded: -550, abandoned: 400,
    areaHa: null, sizeClass: "city",
    sizeNote: { ru: "5–40 га (под совр. городом); гавань на 100 кораблей", en: "5–40 ha (under modern city); harbour for 100 ships" },
    preservation: "poor", excavationStatus: "active",
    access: "restricted",
    accessNote: { ru: "под совр. городом + воен. база; на акрополе генуэзская крепость; Музей древностей", en: "under modern city + military base; Genoese fortress on acropolis; Museum of Antiquities" },
    significance: 4,
    desc: {
      ru: "Крупный хлебный порт с незамерзающей гаванью на 100 кораблей, второй город Боспора. Долго сопротивлялась завоеванию (Гераклея слала помощь — стратагема Тинниха), пока Левкон I не взял её ок. 360 г. до н.э.; ныне почти не раскопана — лежит под Феодосией и генуэзской Каффой.",
      en: "A major grain port with an ice-free 100-ship harbour, the Bosporus' second city. It long resisted conquest (Heraclea sent aid — the stratagem of Tynnichus) until Leukon I took it c. 360 BCE; today it is barely excavated, buried under Feodosia and Genoese Kaffa."
    },
    highlight: { ru: "Хлебный порт со стогавани — кормил Афины, пал под генуэзской Каффой, так и не открыв тайн.", en: "The grain port whose ice-free harbour fed Athens — buried under Genoese Kaffa, still mostly unexcavated." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Феодосия" },
      { label: "PECS — Theodosia (Perseus)", url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0006:entry=theodosia" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон VII.4.3–4; Демосфен, Против Лептина 20.31–33; Полиэн V.23" },
      { type: "epigraphy", ref: "КБН 947–952" },
      { type: "modern", ref: "Петрова Э.Б. Античная Феодосия. Симферополь, 2000; Гаврилов А.В. Округа античной Феодосии, 2004" }
    ],
    _libRef: "research/pontus/theodosia.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "myrmekion", region: "pontus",
    name: { ru: "Мирмекий", en: "Myrmekion" },
    nameAncient: "Μυρμήκιον / Myrmecium",
    modernPlace: { ru: "мыс Карантинный, Керчь", en: "Cape Karantinny, Kerch" },
    coords: [45.3534, 36.5222], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – позднеантичный", en: "Archaic – Late Antique" },
    metropolis: { ru: "Милет", en: "Miletus" },
    founded: -575, abandoned: 350,
    areaHa: 7, sizeClass: "town",
    preservation: "partial", excavationStatus: "active",
    access: "open",
    accessNote: { ru: "свободно (мыс Карантинный, Молодёжный пляж); Восточно-Крымский музей-заповедник", en: "open (Cape Karantinny, Molodezhny beach); East Crimean Museum-Reserve" },
    significance: 4,
    desc: {
      ru: "Малый полис в 4 км от столицы, основанный Милетом; в V в. чеканил свою монету и специализировался на виноделии. Знаменит кладами (99 кизикинов в храме Деметры, 30 золотых статеров Александра) и мраморным саркофагом Ахилла (ныне в Эрмитаже).",
      en: "A small polis 4 km from the capital, founded by Miletus; it minted its own coins in the 5th c. and specialised in winemaking. Famous for its hoards (99 Cyzicene staters in the temple of Demeter, 30 gold Alexander staters) and the marble Achilles sarcophagus (now in the Hermitage)."
    },
    highlight: { ru: "Город-«муравей» под боком у столицы — винодельни, клады кизикинов и саркофаг Ахилла.", en: "The 'ant city' next door to the capital — wineries, Cyzicene hoards and an Achilles sarcophagus." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Мирмекий" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Myrmēkion" },
      { label: "БРЭ", url: "https://bigenc.ru/c/mirmekii-d5ab3d" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон VII.4.5; Псевдо-Скилак §68" },
      { type: "epigraphy", ref: "КБН 868–889; свинцовое письмо 2017 (SEG 68.497)" },
      { type: "modern", ref: "Гайдукевич В.Ф. Античные города Боспора. Мирмекий. Л.: Наука, 1987" }
    ],
    _libRef: "research/pontus/myrmekion.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "tyritake", region: "pontus",
    name: { ru: "Тиритака", en: "Tyritake" },
    nameAncient: "Τυριτάκη / Tyritake (Dia)",
    modernPlace: { ru: "Аршинцево (Камыш-Бурун), Керчь", en: "Arshintsevo (Kamysh-Burun), Kerch" },
    coords: [45.2773, 36.4072], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique", "byzantine"],
    mainPeriod: "roman",
    periodText: { ru: "архаика – Византия", en: "Archaic – Byzantine" },
    metropolis: { ru: "Милет", en: "Miletus" },
    founded: -550, abandoned: 700,
    areaHa: 8.5, sizeClass: "town",
    preservation: "partial", excavationStatus: "active",
    access: "open",
    accessNote: { ru: "свободно, у ТЭЦ; экскурсии — Керч. музей-заповедник", en: "open, by the power plant; tours via Kerch Museum-Reserve" },
    significance: 3,
    desc: {
      ru: "Главный центр рыбозасолки и виноделия европейского Боспора: десятки засолочных ванн и винодельни. В позднеантичное время здесь действовала трёхнефная христианская базилика и жила иудейская община (граффити-меноры на амфорах).",
      en: "The European Bosporus' chief fish-salting and winemaking centre, with dozens of brining vats and wineries. In late antiquity it held a three-nave Christian basilica and a Jewish community (menorah graffiti on amphorae)."
    },
    highlight: { ru: "Рыбозасолочный цех Боспора: десятки ванн для солений, винодельни и византийская базилика.", en: "The Bosporan fish-salting works: dozens of brining vats, wineries and a Byzantine basilica." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Тиритака" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tyritake" },
      { label: "Pleiades", url: "https://pleiades.stoa.org/places/854745" }
    ],
    bibliography: [
      { type: "ancient", ref: "Плиний NH 4.86 (как «Dia»); Птолемей III.6.3 (у Страбона отсутствует)" },
      { type: "epigraphy", ref: "КБН 901–910" },
      { type: "modern", ref: "Зинько В.Н. Тиритака. Раскоп XXVI (Боспор. иссл. Suppl. 10–11, 2013–14)" }
    ],
    _libRef: "research/pontus/tyritake.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "iluraton", region: "pontus",
    name: { ru: "Илурат", en: "Iluraton" },
    nameAncient: "Ἰλούρατον / Iluratum",
    modernPlace: { ru: "близ с. Ивановка, ~18 км ЮЗ Керчи", en: "near Ivanovka, ~18 km SW of Kerch" },
    coords: [45.2853, 36.2922], localizationCertain: true,
    type: "fortress",
    periods: ["roman"],
    mainPeriod: "roman",
    periodText: { ru: "I–III вв. н.э.", en: "1st–3rd c. CE" },
    founded: 50, abandoned: 275,
    areaHa: 2.5, sizeClass: "small",
    preservation: "excellent", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "открытые руины, без инфраструктуры; дорога грунтовая; фед. ОКН", en: "open ruins, no facilities; unsealed road; federal heritage" },
    significance: 4,
    desc: {
      ru: "Боспорская военная крепость римского времени, «боспорский лимес» на подступах к столице — построена ок. 50 г. н.э. по образцу римского лагеря. Один из лучше всего сохранившихся памятников: стоят стены до 8 м, калитка с пазом для засова, прослеживается уличная сетка; разрушена готами в 270-х.",
      en: "A Roman-era Bosporan military fortress — the 'Bosporan limes' guarding the approach to the capital — built c. 50 CE on a Roman-camp plan. One of the best-preserved sites: walls up to 8 m stand, a gate with its bolt-slot, a traceable street grid; destroyed by the Goths in the 270s."
    },
    highlight: { ru: "Боспорский лимес: римская крепость с уцелевшими воротами и улицами, павшая под готами.", en: "The Bosporan limes: a Roman fortress with surviving gates and streets, fallen to the Goths." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Илурат" },
      { label: "Bosporan warfare (СПбГУ)", url: "https://bosporwarfare.spbu.ru" }
    ],
    bibliography: [
      { type: "ancient", ref: "Птолемей III.6 (единственный; у Страбона отсутствует)" },
      { type: "epigraphy", ref: "КБН 966–968 (строит. надписи)" },
      { type: "modern", ref: "Горончаровский В.А. Античная крепость Илурат. СПб., 2019; Гайдукевич, МИА 85, 1958" }
    ],
    _libRef: "research/pontus/iluraton.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "kytaion", region: "pontus",
    name: { ru: "Китей", en: "Kytaion" },
    nameAncient: "Κύταια / Kytaion",
    modernPlace: { ru: "между мысом Такиль и с. Заветное, ~40 км ЮЖ Керчи", en: "between Cape Takil and Zavetnoe, ~40 km S of Kerch" },
    coords: [45.0786, 36.4225], localizationCertain: true,
    type: "city",
    periods: ["classical", "hellenistic", "roman", "late-antique", "byzantine"],
    mainPeriod: "classical",
    periodText: { ru: "классика – ранняя Византия", en: "Classical – Early Byzantine" },
    founded: -450, abandoned: 600,
    areaHa: 4.5, sizeClass: "town",
    preservation: "partial", excavationStatus: "active",
    access: "open",
    accessNote: { ru: "свободно, ~40 км к югу от Керчи (лучше внедорожник)", en: "open, ~40 km S of Kerch (high-clearance preferred)" },
    significance: 3,
    desc: {
      ru: "Боспорский полис на высоком абразионном обрыве, чьё имя подтвердили найденные мраморные солнечные часы. В центре города — гигантский зольник с храмом Зевса; ⅓ памятника уже обрушилась в море.",
      en: "A Bosporan polis on a high eroding cliff, its name confirmed by a marble sundial found on site. At its centre a giant ash-mound held a temple of Zeus; a third of the site has already collapsed into the sea."
    },
    highlight: { ru: "Город на обрыве, чьё имя выдали мраморные солнечные часы, с храмом Зевса в сердце зольника.", en: "A town on a cliff, its name revealed by a marble sundial, with a temple of Zeus at the heart of its ash-mound." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Китей" },
      { label: "Пантикапей.ру — Китей", url: "http://pantikapei.ru/antichnyj-gorod-kitej.html" }
    ],
    bibliography: [
      { type: "ancient", ref: "Псевдо-Скилак §68; Плиний NH IV.86; Птолемей III.6" },
      { type: "epigraphy", ref: "КБН 942–944 (942 — храм. надпись 234 н.э.)" },
      { type: "modern", ref: "Молев Е.А., Молева Н.В. Боспорский город Китей. Симферополь–Керчь, 2010" }
    ],
    _libRef: "research/pontus/kytaion.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "porphmion", region: "pontus",
    name: { ru: "Порфмий", en: "Porphmion" },
    nameAncient: "Πορθμίον / Porthmion",
    modernPlace: { ru: "пос. Жуковка, СВ окраина Керчи", en: "Zhukovka, NE Kerch" },
    coords: [45.3690, 36.6160], localizationCertain: true,
    type: "settlement",
    periods: ["archaic", "classical", "hellenistic"],
    mainPeriod: "classical",
    periodText: { ru: "VI–I вв. до н.э.", en: "6th–1st c. BCE" },
    founded: -550, abandoned: -25,
    areaHa: 0.7, sizeClass: "small",
    preservation: "poor", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "плато доступно пешком; разграблено копателями; без инфраструктуры", en: "plateau accessible on foot; looted; no facilities" },
    significance: 2,
    desc: {
      ru: "Крошечное поселение-гарнизон (0.7 га) у самой узкой переправы через Боспор Киммерийский, охранявшее вход в пролив. В эллинистическое время получило регулярную планировку из прямоугольных кварталов; жили военные поселенцы-клерухи.",
      en: "A tiny garrison settlement (0.7 ha) at the narrowest ferry crossing of the Cimmerian Bosporus, guarding the strait's mouth. In Hellenistic times it gained a regular grid of rectangular blocks, home to military settlers (cleruchs)."
    },
    highlight: { ru: "Крошечный гарнизон у самой узкой переправы через Боспор Киммерийский.", en: "A tiny garrison at the narrowest ferry crossing of the Cimmerian Bosporus." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Порфмий" },
      { label: "Археология.ру — Порфмий", url: "https://arheologija.ru/porfmiy/" }
    ],
    bibliography: [
      { type: "ancient", ref: "Псевдо-Арриан §69, 76; Стефан Византийский" },
      { type: "epigraphy", ref: "В КБН отсутствует; SEG XXXVII 678 (V в. до н.э.)" },
      { type: "modern", ref: "Вахтина М.Ю. Порфмий — греческий город у переправы (Боспор. иссл. 22, 2009)" }
    ],
    _libRef: "research/pontus/porphmion.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "akra", region: "pontus",
    name: { ru: "Акра", en: "Akra" },
    nameAncient: "Ἄκρα / Akra",
    modernPlace: { ru: "основание мыса Такиль, близ с. Набережное", en: "base of Cape Takil, near Naberezhnoe" },
    coords: [45.1344, 36.4242], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – позднеантичный", en: "Archaic – Late Antique" },
    founded: -500, abandoned: 320,
    areaHa: 4, sizeClass: "small",
    preservation: "good", excavationStatus: "active",
    access: "closed",
    accessNote: { ru: "85–90% под водой (глуб. 1.5–4 м), нужно снаряжение; «Крымская Атлантида»", en: "85–90% submerged (1.5–4 m), diving required; the 'Crimean Atlantis'" },
    significance: 4,
    desc: {
      ru: "Небольшой портовый город, на 85–90% ушедший под воду из-за медленного опускания берега. В анаэробном иле уцелели дерево и текстиль: 30-метровый участок стены на дубовой раме, деревянные гребни, золотая серьга — отсюда прозвище «Крымская Атлантида».",
      en: "A small port town, 85–90% submerged by slow coastal subsidence. Its anaerobic silt preserved wood and textile: a 30-metre wall section on an oak frame, wooden combs, a gold earring — hence the nickname 'Crimean Atlantis'."
    },
    highlight: { ru: "Крымская Атлантида — боспорский город, медленно ушедший под воду, где в иле уцелели деревянные гребни.", en: "The Crimean Atlantis — a Bosporan town swallowed slowly by the sea, where wooden combs survive in the silt." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Акра_(Крым)" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Akra,_Crimea" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.8; Птолемей III.6; Псевдо-Арриан §76–77" },
      { type: "epigraphy", ref: "КБН 889" },
      { type: "modern", ref: "Соловьёв С.Л., Вахонеев В.В., Шепко Л.Г. Акра — античный город на Европейском Боспоре. СПб., 2021" }
    ],
    _libRef: "research/pontus/akra.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "kul-oba", region: "pontus",
    name: { ru: "Куль-Оба", en: "Kul-Oba" },
    nameAncient: "Kul-Oba (курган)",
    modernPlace: { ru: "~6 км к З от Керчи", en: "~6 km W of Kerch" },
    coords: [45.3492, 36.3817], localizationCertain: true,
    type: "necropolis",
    periods: ["classical"],
    mainPeriod: "classical",
    periodText: { ru: "IV в. до н.э.", en: "4th c. BCE" },
    founded: -400, abandoned: -350,
    areaHa: null, sizeClass: "small",
    preservation: "poor", excavationStatus: "past",
    access: "closed",
    accessNote: { ru: "земляной холм без реставрации; находки — Эрмитаж (часть ГИМ, Британский музей)", en: "unrestored earthen mound; finds in the Hermitage (some GIM, British Museum)" },
    significance: 5,
    desc: {
      ru: "Первый раскопанный в новое время (1830) царский скифский курган близ Пантикапея: каменная камера с уступчатым сводом, построенная греческими мастерами для эллинизированного скифского вождя. Дал шедевры эрмитажного золота — электровый сосуд со сценами скифской жизни и серьги с фигурками Ники.",
      en: "The first Scythian royal kurgan excavated in modern times (1830), near Pantikapaion: a corbelled stone chamber built by Greek masons for a Hellenised Scythian chief. It yielded masterpieces of the Hermitage's gold — an electrum vessel of Scythian life and earrings with figurines of Nike."
    },
    highlight: { ru: "Первый раскопанный царский скифский курган: золото Эрмитажа и сосуд со сценами скифской жизни.", en: "The first Scythian royal kurgan ever excavated: the Hermitage's gold and a vessel of Scythian life." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Куль-Оба_(курган)" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Kul-Oba" }
    ],
    bibliography: [
      { type: "ancient", ref: "Геродот IV.71–72 (скифский погреб. обряд, общее)" },
      { type: "modern", ref: "Артамонов М.И. Сокровища скифских курганов в собрании ГЭ. 1966" }
    ],
    _libRef: "research/pontus/kul-oba.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "tsarsky-kurgan", region: "pontus",
    name: { ru: "Царский курган", en: "Royal Kurgan (Tsarsky)" },
    nameAncient: "Царский курган",
    modernPlace: { ru: "близ пос. Аджимушкай, Керчь", en: "near Adzhimushkay, Kerch" },
    coords: [45.3739, 36.5260], localizationCertain: true,
    type: "necropolis",
    periods: ["classical", "hellenistic"],
    mainPeriod: "classical",
    periodText: { ru: "2-я пол. IV в. до н.э.", en: "later 4th c. BCE" },
    founded: -340, abandoned: -330,
    areaHa: null, sizeClass: "small",
    preservation: "good", excavationStatus: "past",
    access: "museum",
    accessNote: { ru: "музеефицирован, Керч. историко-культурный заповедник; открыт для посещения", en: "museumified, Kerch Museum-Reserve; open to visitors" },
    significance: 5,
    desc: {
      ru: "Монументальная царская гробница Боспора, приписываемая Левкону I — шедевр погребальной архитектуры. 37-метровый дромос ведёт к уступчатому купольному своду высотой 8,84 м, сложенному из известняка насухо, без раствора; камера пуста — ограблена ещё в древности.",
      en: "A monumental Bosporan royal tomb attributed to Leukon I — a masterpiece of funerary architecture. A 37-metre dromos leads to a corbelled dome 8.84 m high, built of limestone without mortar; the chamber is empty, looted in antiquity."
    },
    highlight: { ru: "Гробница боспорского царя: 37-метровый коридор и купол высотой с трёхэтажный дом, сложенные без раствора.", en: "A Bosporan king's tomb: a 37-metre corridor and a corbelled dome three storeys high, built without mortar." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Царский_курган" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Royal_Kurgan" }
    ],
    bibliography: [
      { type: "epigraphy", ref: "граффито Κοσμάε (в КБН/CIRB)" },
      { type: "modern", ref: "Ашик А.Б. Боспорское царство. Одесса, 1848–49; Гайдукевич, 1949" }
    ],
    _libRef: "research/pontus/tsarsky-kurgan.md", _verified: "2026-06-30", _confidence: "high"
  },

  // ═══════════════════ TAMAN — Asian Bosporus ═══════════════════
  {
    id: "phanagoria", region: "pontus",
    name: { ru: "Фанагория", en: "Phanagoria" },
    nameAncient: "Φαναγόρεια / Phanagoreia",
    modernPlace: { ru: "пос. Сенной, Темрюкский р-н", en: "Sennoy, Temryuk District" },
    coords: [45.2781, 36.9749], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique", "byzantine"],
    mainPeriod: "hellenistic",
    periodText: { ru: "архаика – Византия", en: "Archaic – Byzantine" },
    metropolis: { ru: "Теос (Иония)", en: "Teos (Ionia)" },
    founded: -543, abandoned: 950,
    areaHa: 75, sizeClass: "metropolis",
    preservation: "partial", excavationStatus: "active",
    access: "museum",
    accessNote: { ru: "Гос. музей-заповедник «Фанагория», пос. Сенной; экспозиция, экскурсии", en: "Phanagoria State Museum-Reserve, Sennoy; exhibition, tours" },
    significance: 5,
    desc: {
      ru: "Азиатская столица Боспорского царства, основанная теосцами ок. 543 г. до н.э.; ⅓ города затоплена Таманским заливом. Здесь стоял дворец Митридата VI, одна из древнейших синагог мира и фрагмент персидской надписи Ксеркса; раскопки ИА РАН идут непрерывно с 2004 г.",
      en: "The Asian capital of the Bosporan Kingdom, founded by Teians c. 543 BCE; a third of the city lies under Taman Bay. It held the palace of Mithridates VI, one of the world's oldest synagogues and a fragment of a Persian inscription of Xerxes; IA RAS has excavated here continuously since 2004."
    },
    highlight: { ru: "Азиатская столица Боспора — город, восставший против Митридата и спрятавший под водой половину тайн.", en: "Eastern capital of the Bosporan Kingdom — the city that defied Mithridates and hid half its secrets beneath the sea." },
    links: [
      { label: "Музей-заповедник «Фанагория»", url: "https://phanagoria-museum.ru/" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Фанагория" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Phanagoria" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.10; Арриан, Перипл 29; Аппиан, Mithr. 108" },
      { type: "epigraphy", ref: "КБН 971–1005", url: "https://epigraphy.packhum.org/book/231" },
      { type: "modern", ref: "Кузнецов В.Д. Фанагория (М., 2000; т.1, 2010)" }
    ],
    _libRef: "research/pontus/phanagoria.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "hermonassa", region: "pontus",
    name: { ru: "Гермонасса", en: "Hermonassa" },
    nameAncient: "Ἑρμώνασσα → Таматарха → Тмутаракань",
    modernPlace: { ru: "ст. Тамань (северная часть)", en: "Taman (northern part)" },
    coords: [45.2191, 36.7141], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique", "byzantine"],
    mainPeriod: "byzantine",
    periodText: { ru: "архаика – Тмутаракань (XI в.)", en: "Archaic – Tmutarakan (11th c.)" },
    metropolis: { ru: "Митилена (Лесбос)", en: "Mytilene (Lesbos)" },
    founded: -570, abandoned: 1100,
    areaHa: 35, sizeClass: "city",
    preservation: "partial", excavationStatus: "active",
    access: "museum",
    accessNote: { ru: "Таманский музейный комплекс; фед. ОКН; под совр. станицей", en: "Taman Museum Complex; federal heritage; under modern village" },
    significance: 5,
    desc: {
      ru: "Второй город азиатского Боспора, основанный эолийцами Митилены — единственное место России с непрерывной жизнью 2600 лет: греческий полис → хазарская Таматарха → русская Тмутаракань → генуэзская Матрега → казачья Тамань. Культурный слой достигает 12–14 м; здесь найден Тмутараканский камень 1068 г.",
      en: "The Asian Bosporus' second city, founded by Aeolians from Mytilene — the only site in Russia with unbroken life for 2,600 years: Greek polis → Khazar Tamatarkha → Rus' Tmutarakan → Genoese Matrega → Cossack Taman. Its cultural deposit reaches 12–14 m; the Tmutarakan Stone (1068) was found here."
    },
    highlight: { ru: "Единственное место России, где жизнь не прерывалась 2600 лет — от греков до казачьей станицы.", en: "The only site in Russia where city life ran unbroken for 2,600 years — from Greeks to Cossack village." },
    links: [
      { label: "Wikipedia (RU) — Гермонасса", url: "https://ru.wikipedia.org/wiki/Гермонасса" },
      { label: "Wikipedia (EN) — Tmutarakan", url: "https://en.wikipedia.org/wiki/Tmutarakan" },
      { label: "Таманский музейный комплекс (Культура.РФ)", url: "https://www.culture.ru/institutes/65658/" }
    ],
    bibliography: [
      { type: "ancient", ref: "Арриан, Перипл 29; Страбон XI.2.10; Дионисий Периэгет §553" },
      { type: "epigraphy", ref: "КБН 1065–1110; КБН 1072" },
      { type: "modern", ref: "Гайдукевич В.Ф. Боспорское царство, 1949; Финогенова, Древности Боспора 8, 2005" }
    ],
    _libRef: "research/pontus/hermonassa.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "kepoi", region: "pontus",
    name: { ru: "Кепы", en: "Kepoi" },
    nameAncient: "Κῆποι / Cepoe («Сады»)",
    modernPlace: { ru: "близ пос. Сенной, ~3 км вост. Фанагории", en: "near Sennoy, ~3 km E of Phanagoria" },
    coords: [45.3031, 36.9933], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique"],
    mainPeriod: "hellenistic",
    periodText: { ru: "архаика – позднеантичный", en: "Archaic – Late Antique" },
    metropolis: { ru: "Милет", en: "Miletus" },
    founded: -575, abandoned: 375,
    areaHa: 22, sizeClass: "town",
    preservation: "partial", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "городище доступно, без музея; находки в ГИМ, Эрмитаже, Темрюке", en: "open site, no museum; finds in GIM, Hermitage, Temryuk" },
    significance: 4,
    desc: {
      ru: "Один из старейших полисов азиатского Боспора (греч. «Сады»), основанный Милетом. Боспорские цари подарили Кепы Гилону, деду Демосфена; здесь стоял храм Афродиты Урании (отсюда «Афродита Таманская» в ГИМ), а ⅓ города ушла под воды залива.",
      en: "One of the oldest poleis of the Asian Bosporus (Greek 'Gardens'), founded by Miletus. The Bosporan kings gifted Kepoi to Gylon, Demosthenes' grandfather; it held a temple of Aphrodite Ourania (source of the 'Aphrodite of Taman' in the GIM), and a third of the town sank beneath the bay."
    },
    highlight: { ru: "Город-«Сады», который боспорские цари подарили деду Демосфена — теперь наполовину под водой.", en: "The Bosporan 'Gardens' gifted to Demosthenes' grandfather — now half-sunk beneath the bay." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Кепы" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Kepoi" },
      { label: "Pleiades", url: "https://pleiades.stoa.org/places/854695" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.10; Плиний NH VI.18 («Cepoe Milesiorum»); Эсхин III.171" },
      { type: "epigraphy", ref: "SEG 27.435; SEG 45.990; КБН (азиат. блок)" },
      { type: "modern", ref: "Сокольский Н.И. Кепы (в «Античный город», 1963)" }
    ],
    _libRef: "research/pontus/kepoi.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "patraeus", region: "pontus",
    name: { ru: "Патрей", en: "Patraeus" },
    nameAncient: "Πατραεύς / Patrasios",
    modernPlace: { ru: "городище Гаркуша 1, Темрюкский р-н", en: "Garkusha 1 site, Temryuk District" },
    coords: [45.3139, 36.8381], localizationCertain: true,
    type: "settlement",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – позднеантичный", en: "Archaic – Late Antique" },
    metropolis: { ru: "Милет", en: "Miletus" },
    founded: -550, abandoned: 375,
    areaHa: 8, sizeClass: "town",
    preservation: "partial", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "городище в поле; нижний город затоплен; находки — Краснодар. музей, ИА РАН", en: "open field site; lower town submerged; finds in Krasnodar Museum, IA RAS" },
    significance: 3,
    desc: {
      ru: "Боспорский полис на северном берегу Таманского залива с затопленным нижним городом и крепостью царя Асандра. В подводной части найдено свинцовое письмо Пистоса (V в. до н.э.) о взыскании долгов — одно из древнейших деловых писем Северного Причерноморья.",
      en: "A Bosporan polis on the north shore of Taman Bay with a submerged lower town and a fortress of King Asander. Its underwater part yielded the lead letter of Pistos (5th c. BCE) on debt collection — one of the oldest business letters of the northern Black Sea."
    },
    highlight: { ru: "Боспорский Атлантис: полгорода под водой — а из глубины пришло письмо о долгах 2500-летней давности.", en: "Half the city underwater — and from the deep came a 2,500-year-old letter chasing unpaid debts." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Патрей" },
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Patraeus_(city)" },
      { label: "БРЭ", url: "https://w.histrf.ru/articles/patrey" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.7–8; Гекатей Милетский (фрагм., «Патрасий»); Псевдо-Скилак §72" },
      { type: "epigraphy", ref: "КБН 1112; свинцовое письмо Пистоса (Завойкина, Hyperboreus 24/1, 2018)" },
      { type: "modern", ref: "Абрамов А.П. Патрей (Ancient Greek Colonies in the Black Sea II, 2003)" }
    ],
    _libRef: "research/pontus/patraeus.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "tyramba", region: "pontus",
    name: { ru: "Тирамба", en: "Tyramba" },
    nameAncient: "Τυράμβη / Tyramba",
    modernPlace: { ru: "ст. Пересыпь, приазовская Тамань", en: "Peresyp, Azov-shore Taman" },
    coords: [45.3448, 37.1306], localizationCertain: true,
    type: "settlement",
    periods: ["classical", "hellenistic", "roman"],
    mainPeriod: "roman",
    periodText: { ru: "классика – римский период", en: "Classical – Roman" },
    metropolis: { ru: "Фанагория", en: "Phanagoria" },
    founded: -550, abandoned: 250,
    areaHa: null, sizeClass: "small",
    preservation: "poor", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "значит. часть размыта морем; находки в ГМИИ им. Пушкина", en: "largely eroded by the sea; finds in the Pushkin Museum" },
    significance: 2,
    desc: {
      ru: "Греческое поселение на южном берегу Меотиды (Азова), колония Фанагории, в I в. до н.э. укреплённое кирпичными стенами в составе оборонительной сети Боспора. Значительная часть памятника унесена морем.",
      en: "A Greek settlement on the south shore of the Maeotis (Azov), a colony of Phanagoria, fortified with brick walls in the 1st c. BCE as part of the Bosporan defensive network. Much of the site has been carried off by the sea."
    },
    highlight: { ru: "Приазовский форпост Фанагории, наполовину унесённый морем.", en: "Phanagoria's Azov-shore outpost, half-carried away by the sea." },
    links: [
      { label: "PECS — Tyrambe (Perseus)", url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0006:entry=tyrambe" },
      { label: "Pleiades", url: "https://pleiades.stoa.org/places/854744" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.4" },
      { type: "modern", ref: "Кошеленко Г.А. и др. Античные государства Северного Причерноморья, 1984" }
    ],
    _libRef: "research/pontus/tyramba.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "korokondame", region: "pontus",
    name: { ru: "Корокондама", en: "Korokondame" },
    nameAncient: "Κοροκονδάμη / Corocondame",
    modernPlace: { ru: "мыс Тузла / Тамань (локализация спорна)", en: "Cape Tuzla / Taman (disputed)" },
    coords: [45.2046, 36.6144], localizationCertain: false,
    type: "harbor",
    periods: ["archaic", "classical", "hellenistic", "roman", "late-antique"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – позднеантичный", en: "Archaic – Late Antique" },
    founded: -560, abandoned: 370,
    areaHa: null, sizeClass: "unknown",
    preservation: "poor", excavationStatus: "surveyed",
    access: "closed",
    accessNote: { ru: "погран. зона у Крымского моста; размыв/затопление; точка приблизительная", en: "border zone by the Crimean Bridge; eroded/submerged; point approximate" },
    significance: 3,
    desc: {
      ru: "Гавань-городок у входа в Боспор Киммерийский с азиатской стороны, отмечавшая границу пролива; население смешанное — греки, синды, меоты. Точное место — образцовый спор боспорской географии: мыс Тузла, Тамань-1 или Волна-1 (см. библиотеку).",
      en: "A harbour-town at the Asian entrance of the Cimmerian Bosporus, marking the strait's edge; its population mixed Greeks, Sindi and Maeotians. Its exact site is a textbook dispute of Bosporan geography: Cape Tuzla, Taman-1 or Volna-1 (see library)."
    },
    highlight: { ru: "Конец Боспора Киммерийского — гавань трёх народов, чьё точное место учёные спорят до сих пор.", en: "Where the Cimmerian Bosporus ended — a three-peoples harbour whose exact site is still debated." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Корокондама" },
      { label: "Anca Dan, «Coracanda…» (HAL)", url: "https://hal.science/hal-02612779" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.8, XI.2.14" },
      { type: "modern", ref: "Окороков, Егоров. Поиски античной Корокондамы (Наследие, 2018)" }
    ],
    _libRef: "research/pontus/korokondame.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "apatouron", region: "pontus",
    name: { ru: "Апатур (святилище Афродиты)", en: "Apatouron (Aphrodite sanctuary)" },
    nameAncient: "Ἀπάτουρον / Apaturum",
    modernPlace: { ru: "Тамань (локализация не определена)", en: "Taman (site undetermined)" },
    coords: [45.0830, 36.8830], localizationCertain: false,
    type: "sanctuary",
    periods: ["classical", "hellenistic", "roman"],
    mainPeriod: "classical",
    periodText: { ru: "V в. до н.э. – III в. н.э.", en: "5th c. BCE – 3rd c. CE" },
    founded: -500, abandoned: 250,
    areaHa: null, sizeClass: "unknown",
    preservation: "poor", excavationStatus: "surveyed",
    access: "restricted",
    accessNote: { ru: "точное место не установлено (Майская гора? у Гермонассы? Кепы?); точка условная", en: "exact site unknown (Maiskaya Mt.? near Hermonassa? Kepoi?); point provisional" },
    significance: 4,
    desc: {
      ru: "Главное боспорское святилище Афродиты Урании Апатуры, покровительницы дома Спартокидов, действовавшее ~800 лет. По мифу (у Страбона) богиня заманила гигантов в пещеру и «обманом» (ἀπάτη) выдала Гераклу; бесспорных остатков теменоса пока не найдено, точное место — предмет спора.",
      en: "The great Bosporan sanctuary of Aphrodite Ourania Apatouros, patroness of the Spartocid house, active for ~800 years. By myth (in Strabo) the goddess lured the Giants into a cave and gave them to Heracles 'by deceit' (apatē); no certain remains of the temenos are yet found and its exact site is disputed."
    },
    highlight: { ru: "Главное святилище Афродиты Боспора, где богиня «обманом» выдала гигантов Гераклу; где оно стояло — загадка.", en: "The Bosporus' great Aphrodite sanctuary, where the goddess gave the Giants to Heracles 'by deceit'; its site remains a riddle." },
    links: [
      { label: "Wikipedia (RU) — Афродита Апатура", url: "https://ru.wikipedia.org/wiki/Афродита_Апатура" },
      { label: "Ustinova, Aphrodite Ourania (Kernos 12)", url: "https://journals.openedition.org/kernos/1228" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.10; Плиний NH VI.18; Птолемей V.9.5" },
      { type: "epigraphy", ref: "КБН 30, 31, 35, 75, 1111 (Афродите Урании «Апатуру медеусе»)" },
      { type: "modern", ref: "Токтасьев С.Р. Апатур (ВДИ 1986/2); Ustinova Yu. The Supreme Gods of the Bosporan Kingdom (Brill, 1999)" }
    ],
    _libRef: "research/pontus/apatouron.md", _verified: "2026-06-30", _confidence: "low"
  },

  // ═══════════════════ MAINLAND COAST — Anapa → Sochi ═══════════════════
  {
    id: "gorgippia", region: "pontus",
    name: { ru: "Горгиппия", en: "Gorgippia" },
    nameAncient: "Γοργιππία / Синдская гавань",
    modernPlace: { ru: "центр г. Анапа", en: "central Anapa" },
    coords: [44.8963, 37.3105], localizationCertain: true,
    type: "city",
    periods: ["archaic", "classical", "hellenistic", "roman"],
    mainPeriod: "roman",
    periodText: { ru: "архаика – римский период", en: "Archaic – Roman" },
    founded: -500, abandoned: 370,
    areaHa: 40, sizeClass: "city",
    preservation: "partial", excavationStatus: "active",
    access: "museum",
    accessNote: { ru: "Анапский музей-заповедник «Горгиппия» — раскоп in situ под открытым небом", en: "Anapa Museum-Reserve 'Gorgippia' — open-air excavation in situ" },
    significance: 5,
    desc: {
      ru: "Южный крупный город Боспора и столица Синдики (ранее Синдская гавань), переименованная в честь Горгиппа. Единственный в России античный город, музеефицированный прямо на месте раскопок: мощёные улицы, винодельни, рыбозасолка и расписной склеп Геракла с 12 подвигами.",
      en: "The southern major city of the Bosporus and capital of Sindica (formerly the Sindian Harbour), renamed after Gorgippus. The only ancient city in Russia museumified directly on the dig: paved streets, wineries, fish-salting basins and the frescoed Tomb of Heracles with its Twelve Labours."
    },
    highlight: { ru: "Анапа на руинах Горгиппии — единственный античный город России, раскрытый прямо под ногами туриста, со склепом Геракла.", en: "Anapa atop Gorgippia — Russia's only ancient city excavated in situ for visitors, with its frescoed Tomb of Heracles." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Горгиппия" },
      { label: "Gorgippia-Antiqua", url: "http://gorgippia-antiqua.ru/" },
      { label: "Penn Museum — Gorgippia", url: "https://www.penn.museum/sites/expedition/gorgippia/" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.10; Псевдо-Скилак §74 («Синдская гавань»)" },
      { type: "epigraphy", ref: "КБН 1111–1180; КБН 1134 (союз навклеров)" },
      { type: "modern", ref: "Кругликова И.Т. Синдская гавань. Горгиппия. Анапа. М.: Наука, 1975; Алексеева Е.М. Античный город Горгиппия, 1997" }
    ],
    _libRef: "research/pontus/gorgippia.md", _verified: "2026-06-30", _confidence: "high"
  },
  {
    id: "bata-myskhako", region: "pontus",
    name: { ru: "Бата (Мысхако)", en: "Bata (Myskhako)" },
    nameAncient: "Βατά / Bata",
    modernPlace: { ru: "пос. Мысхако, Новороссийск (Цемесская бухта)", en: "Myskhako, Novorossiysk (Tsemes Bay)" },
    coords: [44.6900, 37.7200], localizationCertain: false,
    type: "harbor",
    periods: ["archaic", "classical", "hellenistic", "roman"],
    mainPeriod: "roman",
    periodText: { ru: "архаика – римский период", en: "Archaic – Roman" },
    founded: -500, abandoned: 250,
    areaHa: null, sizeClass: "unknown",
    preservation: "poor", excavationStatus: "active",
    access: "open",
    accessNote: { ru: "берег размыт; находки в Новороссийском музее (НИМЗ); локализация спорна", en: "shore eroded; finds in Novorossiysk Museum (NIMZ); site disputed" },
    significance: 3,
    desc: {
      ru: "Античная гавань на Цемесской бухте, упоминаемая Страбоном; имя выдала черепица с клеймом ΙΑΒΑΤΑ. Точное место спорно (Мысхако или центр Новороссийска); среди находок — портрет Митридата VI в образе Геракла.",
      en: "An ancient harbour on Tsemes Bay mentioned by Strabo; a roof-tile stamped ΙΑΒΑΤΑ gave away its name. Its exact site is disputed (Myskhako or central Novorossiysk); finds include a portrait of Mithridates VI as Heracles."
    },
    highlight: { ru: "Гавань синдских мореходов на месте Новороссийска; имя выдала черепица с клеймом ΙΑΒΑΤΑ.", en: "A Sindian seafarers' harbour beneath Novorossiysk; a roof-tile stamped ΙΑΒΑΤΑ gave its name away." },
    links: [
      { label: "История Новороссийска (Wikipedia RU)", url: "https://ru.wikipedia.org/wiki/История_Новороссийска" },
      { label: "novorab.ru — Где находились античные Баты", url: "https://novorab.ru/2024/03/23/gde-nahodilis-antichnye-baty-kogda-ne-bylo-novorossijska/" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.14; Псевдо-Арриан; Птолемей V.9" },
      { type: "modern", ref: "Дмитриев, Малышев. Поселение Мысхако — ЮВ форпост Боспора (ПИФК X, 2001)" }
    ],
    _libRef: "research/pontus/bata-myskhako.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "torikos", region: "pontus",
    name: { ru: "Торик / Pagrae", en: "Torikos / Pagrae" },
    nameAncient: "Τορικός / Pagrae",
    modernPlace: { ru: "Толстый мыс, Геленджикская бухта", en: "Tolsty Cape, Gelendzhik Bay" },
    coords: [44.5682, 38.0237], localizationCertain: true,
    type: "settlement",
    periods: ["archaic", "classical", "roman"],
    mainPeriod: "classical",
    periodText: { ru: "архаика – классика (+ рим. Pagrae)", en: "Archaic – Classical (+ Roman Pagrae)" },
    metropolis: { ru: "Милет (ионийцы)", en: "Miletus (Ionians)" },
    founded: -575, abandoned: -450,
    areaHa: null, sizeClass: "small",
    preservation: "poor", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "под совр. застройкой Толстого мыса, часть в море; находки в музеях", en: "under modern buildings on Tolsty Cape, part in the sea; finds in museums" },
    significance: 3,
    desc: {
      ru: "Архаический греческий торговый пост (эмпорий) племени торетов на Толстом мысе, погибший в пожаре от набега ок. сер. V в. до н.э. В римское время это место возрождается под именем Pagrae — восточный предел Боспора. Единственный, кто прямо называет Торик городом, — Псевдо-Скилак.",
      en: "An Archaic Greek trading post (emporion) of the Toretai on Tolsty Cape, burned by a raid c. mid-5th c. BCE. In Roman times the spot revived as Pagrae — the eastern limit of the Bosporus. Pseudo-Scylax is the only source to call Torikos a city outright."
    },
    highlight: { ru: "Раннегреческий торговый пост торетов, сгоревший от набега и воскресший римским Паграем.", en: "An early Greek trading post of the Toretai, burned by a raid and reborn as Roman Pagrae." },
    links: [
      { label: "Wikipedia (RU) — Торик", url: "https://ru.wikipedia.org/wiki/Торик" },
      { label: "Pleiades — Torikos/Pagrae", url: "https://pleiades.stoa.org/places/825407" }
    ],
    bibliography: [
      { type: "ancient", ref: "Псевдо-Скилак §76; Птолемей V.9.9 (Торетский мыс); Арриан §28 (Pagrae)" },
      { type: "modern", ref: "Онайко Н.А. Архаический Торик. М., 1980" }
    ],
    _libRef: "research/pontus/torikos.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "nikopsis", region: "pontus",
    name: { ru: "Никопсия", en: "Nikopsis" },
    nameAncient: "Νίκοψις / Παλαία Λαζική",
    modernPlace: { ru: "устье р. Нечепсухо, Новомихайловский (Туапсинский р-н)", en: "mouth of the Nechepsukho, Novomikhaylovsky (Tuapse District)" },
    coords: [44.2290, 38.8403], localizationCertain: false,
    type: "fortress",
    periods: ["roman", "late-antique", "byzantine"],
    mainPeriod: "byzantine",
    periodText: { ru: "позднеантичный – Византия", en: "Late Antique – Byzantine" },
    founded: 300, abandoned: 850,
    areaHa: 1.5, sizeClass: "small",
    preservation: "partial", excavationStatus: "surveyed",
    access: "open",
    accessNote: { ru: "городище доступно, без инфраструктуры; локализация спорна", en: "open site, no facilities; site disputed" },
    significance: 3,
    desc: {
      ru: "Позднеантичный и византийский город-крепость на границе Зихии, центр Зихской епархии; у Арриана — «Старая Лазика». По преданию здесь была гробница апостола Симона Кананита; точная локализация (Новомихайловский / Абхазия / Сочи) спорна.",
      en: "A late-antique and Byzantine town-fortress on the frontier of Zichia, seat of the Zichian bishopric; in Arrian, 'Old Lazika'. By tradition it held the tomb of the apostle Simon the Canaanite; its exact site (Novomikhaylovsky / Abkhazia / Sochi) is disputed."
    },
    highlight: { ru: "Византийский рубеж Зихии и «Старая Лазика» Арриана; где именно — спорят до сих пор.", en: "Byzantine frontier of Zichia and Arrian's 'Old Lazika'; its exact site is still debated." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Никопсия" },
      { label: "Православная энциклопедия", url: "https://www.pravenc.ru/text/2577591.html" }
    ],
    bibliography: [
      { type: "ancient", ref: "Арриан, Перипл (~134); Анонимный перипл V в.; Константин Багрянородный, DAI" },
      { type: "modern", ref: "Воронов Ю.Н. Древности Сочи и его окрестностей. Краснодар, 1979" }
    ],
    _libRef: "research/pontus/nikopsis.md", _verified: "2026-06-30", _confidence: "low"
  },
  {
    id: "mamay-kale", region: "pontus",
    name: { ru: "Мамай-Кале (Мохора)", en: "Mamay-Kale (Mokhora)" },
    nameAncient: "Мохора / Mokhora",
    modernPlace: { ru: "мкр. Мамайка, Сочи (устье р. Псахе)", en: "Mamayka district, Sochi (mouth of the Psakhe)" },
    coords: [43.6304, 39.6929], localizationCertain: true,
    type: "fortress",
    periods: ["roman", "late-antique", "byzantine"],
    mainPeriod: "roman",
    periodText: { ru: "I–IV вв. → Византия → Трапезунд", en: "1st–4th c. → Byzantine → Trebizond" },
    founded: 50, abandoned: 1475,
    areaHa: null, sizeClass: "small",
    preservation: "poor", excavationStatus: "past",
    access: "open",
    accessNote: { ru: "руины заросли, огорожены (заброшенная стройка); почти стёрта ж/д 1914", en: "overgrown, fenced (abandoned construction); all but erased by the 1914 railway" },
    significance: 2,
    desc: {
      ru: "Прибрежная крепость, отождествляемая с римской Мохорой Понтийского лимеса (по Воронову — со времён Нерона), позже перестроенная при Византии и в Трапезундскую эпоху. Почти полностью разрушена при строительстве железной дороги в 1914 г.",
      en: "A coastal fortress identified with the Roman Mokhora of the Pontic limes (per Voronov, from Nero's time), later rebuilt under Byzantium and in the Trebizond era. It was all but destroyed during railway construction in 1914."
    },
    highlight: { ru: "Римская крепость Мохора Понтийского лимеса, почти стёртая железной дорогой 1914 года.", en: "The Roman fort Mokhora of the Pontic limes, all but erased by the railway of 1914." },
    links: [
      { label: "Знание.ру — Мамай-Кале", url: "https://znanierussia.ru/articles/Мамай-Кале" }
    ],
    bibliography: [
      { type: "modern", ref: "Воронов Ю.Н. Древности Сочи и его окрестностей. Краснодар, 1979 (отождествил с Мохорой)" }
    ],
    _libRef: "research/pontus/mamay-kale.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "godlik", region: "pontus",
    name: { ru: "Крепость Годлик", en: "Godlik fortress" },
    nameAncient: "Багу / Годлик",
    modernPlace: { ru: "устье р. Годлик, Лазаревский р-н Сочи", en: "mouth of the Godlik, Lazarevskoye District, Sochi" },
    coords: [43.8616, 39.3950], localizationCertain: true,
    type: "fortress",
    periods: ["late-antique", "byzantine"],
    mainPeriod: "byzantine",
    periodText: { ru: "V–VIII вв. (+ генуэзская XIV–XV)", en: "5th–8th c. (+ Genoese 14th–15th)" },
    founded: 450, abandoned: 1475,
    areaHa: null, sizeClass: "small",
    preservation: "partial", excavationStatus: "surveyed",
    access: "open",
    accessNote: { ru: "руины доступны, без инфраструктуры; охраняется", en: "ruins accessible, no facilities; protected" },
    significance: 3,
    desc: {
      ru: "Византийская крепость Зихии у моря, позже перестроенная генуэзцами: сохранилось свыше 700 м стен и шесть башен, с двумя ясно различимыми фазами кладки. Разрушена хазарами в VIII в., возрождена в XIV–XV вв.",
      en: "A seaside Byzantine fortress of Zichia, later rebuilt by the Genoese: over 700 m of walls and six towers survive, with two clearly distinct masonry phases. Destroyed by the Khazars in the 8th c., revived in the 14th–15th."
    },
    highlight: { ru: "Византийская крепость Зихии у моря: 700 метров стен, шесть башен, две эпохи кладки.", en: "A seaside Byzantine fortress of Zichia: 700 m of walls, six towers, two ages of masonry." },
    links: [
      { label: "arch-sochi.ru — Крепость Годлик", url: "https://arch-sochi.ru/2015/11/krepost-godlik-vsyo-chto-udalos-nayti/" }
    ],
    bibliography: [
      { type: "modern", ref: "Воронов Ю.Н. Древности Сочи, 1979; Хрушкова Л.Г. Monuments of Architecture of the Byzantine period in the NE Black Sea Region (2020)" }
    ],
    _libRef: "research/pontus/godlik.md", _verified: "2026-06-30", _confidence: "medium"
  },
  {
    id: "achipse", region: "pontus",
    name: { ru: "Крепость Ачипсе", en: "Achipse fortress" },
    nameAncient: "Ачипсе",
    modernPlace: { ru: "слияние Ачипсе и Мзымты, Красная Поляна, Адлерский р-н", en: "Achipse–Mzymta confluence, Krasnaya Polyana, Adler District" },
    coords: [43.6824, 40.2759], localizationCertain: true,
    type: "fortress",
    periods: ["late-antique", "byzantine"],
    mainPeriod: "byzantine",
    periodText: { ru: "VII–X вв.", en: "7th–10th c." },
    founded: 600, abandoned: 1000,
    areaHa: null, sizeClass: "small",
    preservation: "partial", excavationStatus: "surveyed",
    access: "open",
    accessNote: { ru: "маркированная тропа в Сочинском нац. парке; фед. ОКН", en: "marked trail in Sochi National Park; federal heritage" },
    significance: 3,
    desc: {
      ru: "Крупнейшая раннесредневековая крепость гор Красной Поляны, страж торгового пути по долине Мзымты, связанная с Абхазским царством. Полукруглая центральная башня и стены до 350 м; рядом — кластер из 14 крепостей.",
      en: "The largest early-medieval fortress of the Krasnaya Polyana mountains, guardian of the trade route up the Mzymta valley and tied to the Kingdom of Abkhazia. A semicircular central tower and walls up to 350 m; a cluster of 14 forts lies nearby."
    },
    highlight: { ru: "Крупнейшая горная крепость Красной Поляны, страж византийского пути по долине Мзымты.", en: "The largest mountain fortress of Krasnaya Polyana, guardian of the Byzantine route up the Mzymta." },
    links: [
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Ачипсинская_крепость" }
    ],
    bibliography: [
      { type: "modern", ref: "Воронов Ю.Н. Древности Сочи, 1979; Хрушкова Л.Г. (Archaeologia Bulgarica, 2018/2020)" }
    ],
    _libRef: "research/pontus/achipse.md", _verified: "2026-06-30", _confidence: "medium"
  },

  // ═══════════════════ SEA OF AZOV ═══════════════════
  {
    id: "tanais", region: "pontus",
    name: { ru: "Танаис", en: "Tanais" },
    nameAncient: "Τάναϊς / Tanais",
    modernPlace: { ru: "Недвиговское городище, устье Дона (Ростовская обл.)", en: "Nedvigovka site, Don delta (Rostov Oblast)" },
    coords: [47.2689, 39.3350], localizationCertain: true,
    type: "city",
    periods: ["hellenistic", "roman", "late-antique"],
    mainPeriod: "roman",
    periodText: { ru: "эллинизм – позднеантичный", en: "Hellenistic – Late Antique" },
    founded: -280, abandoned: 450,
    areaHa: 15, sizeClass: "city",
    preservation: "partial", excavationStatus: "active",
    access: "museum",
    accessNote: { ru: "Археологический музей-заповедник «Танаис» (с 1961); открытый показ; ЮНЕСКО tentative", en: "Tanais Archaeological Museum-Reserve (since 1961); open-air display; UNESCO tentative" },
    significance: 5,
    unesco: true,
    desc: {
      ru: "Самый северный город греческого мира, эмпорий в устье Дона, основанный боспорскими греками ок. 280 г. до н.э. как «общий рынок» кочевников. Разрушался Полемоном и готами и возрождался; здесь греки и сарматы вместе молились «Богу Высочайшему» (фиасы) — об этом более 70 надписей.",
      en: "The northernmost city of the Greek world, an emporion at the Don's mouth founded by Bosporan Greeks c. 280 BCE as the nomads' 'common marketplace'. Sacked by Polemon and the Goths and revived each time; here Greeks and Sarmatians prayed together to the 'Most High God' (thiasoi) — recorded in over 70 inscriptions."
    },
    highlight: { ru: "Самый северный город греческого мира, общий рынок кочевников Дона, где греки и сарматы молились Высочайшему богу.", en: "The northernmost city of the Greek world, the Don nomads' shared marketplace, where Greeks and Sarmatians prayed to the Most High God." },
    links: [
      { label: "Музей-заповедник «Танаис»", url: "https://museum-tanais.ru" },
      { label: "Wikipedia (RU)", url: "https://ru.wikipedia.org/wiki/Танаис_(город)" },
      { label: "UNESCO tentative list", url: "https://whc.unesco.org/en/tentativelists/5422/" }
    ],
    bibliography: [
      { type: "ancient", ref: "Страбон XI.2.3–4; Птолемей III.5.15; Аммиан Марцеллин XXII.8" },
      { type: "epigraphy", ref: "КБН 1237–1312 (фиасы Θεὸς Ὕψιστος)", url: "https://epigraphy.packhum.org/book/231" },
      { type: "modern", ref: "Шелов Д.Б. Танаис и Нижний Дон в III–I вв. до н.э. М.: Наука, 1970" }
    ],
    _libRef: "research/pontus/tanais.md", _verified: "2026-06-30", _confidence: "high"
  }
];

// lookup helpers (parallel to the Israel dataset; consumed by the region-aware map/timeline)
const PONTUS_SITE_BY_ID = Object.fromEntries(PONTUS_SITES.map(s => [s.id, s]));
