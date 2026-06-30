// VILLAE ROMANAE — archaeological sites of Israel open to visitors.
// ~49 sites spanning the Stone Age to the Early Islamic period (pre-Crusader).
// Each site is multi-period; `mainPeriod` drives the marker color, `periods`
// drives the era filter (a site shows if its periods include the selected era).
//
//   periods / mainPeriod — ids from PERIODS (periods.js)
//   region   — north | coast | south | jerusalem | judea | west_bank
//   unesco   — true if a UNESCO World Heritage Site
// Sources: Wikipedia (en/he), Israel Nature & Parks Authority, UNESCO.

const ARCH_SITES = [
  // ───────────────────────────── NORTH — Galilee & Golan ─────────────────────────────
  {
    id: "nahal-mearot",
    name: { en: "Nahal Me'arot / Mount Carmel Caves", ru: "Нахаль-Меарот / пещеры горы Кармель", he: "נחל מערות" },
    coords: [32.6700, 34.9653],
    periods: ["paleolithic", "epipaleolithic", "neolithic"],
    mainPeriod: "paleolithic",
    periodText: { en: "Lower Paleolithic – Neolithic", ru: "Нижний палеолит – неолит (≈500 000 – 10 000 л. н.)" },
    region: "north", unesco: true,
    access: { en: "INPA Nature Reserve (UNESCO World Heritage Site)", ru: "Природный заповедник INPA (объект ЮНЕСКО)" },
    desc: {
      en: "Four caves tucked into the Carmel ridge hold half a million years of human evolution in a single valley — from Homo erectus flint tools to Neanderthal burials in Tabun Cave to the Natufians, who first settled in permanent villages at the dawn of civilisation. The site yielded the skeleton of 'Carmel Man,' one of the most complete early Homo sapiens fossils known.",
      ru: "Четыре пещеры в склоне Кармеля хранят полмиллиона лет человеческой эволюции в одной долине — от кремнёвых орудий Homo erectus до неандертальских погребений в пещере Табун и натуфийцев, первыми осевших в постоянных деревнях на заре цивилизации. Здесь найден «человек Кармеля» — один из наиболее полных ранних скелетов Homo sapiens. ЮНЕСКО внёс памятник в список в 2012 году."
    },
    highlight: {
      en: "Half a million years of human evolution in four caves on a single cliff",
      ru: "Полмиллиона лет эволюции человека — в четырёх пещерах одного утёса"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Nahal_Me%27arot_Nature_Reserve" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1393/" }
    ]
  },
  {
    id: "shaar-hagolan",
    name: { en: "Sha'ar HaGolan", ru: "Шаар-ха-Голан", he: "שער הגולן" },
    coords: [32.6864, 35.6033],
    periods: ["neolithic"],
    mainPeriod: "neolithic",
    periodText: { en: "Pottery Neolithic / Yarmukian", ru: "Керамический неолит / ярмукская культура (≈6400–6000 до н.э.)" },
    region: "north",
    access: { en: "Museum of Yarmukian Culture, Kibbutz Sha'ar HaGolan", ru: "Музей ярмукской культуры на кибуце Шаар-ха-Голан" },
    desc: {
      en: "Eight thousand years ago one of the largest settlements on earth flourished at the confluence of the Yarmuk and Jordan rivers — a 20-hectare Neolithic village of courtyard houses, paved streets and a communal well. It is the type-site of the Yarmukian culture, whose people made the earliest pottery in the southern Levant and over 300 figurines, including haunting slit-eyed clay 'mother goddesses.'",
      ru: "Восемь тысяч лет назад на слиянии Ярмука и Иордана процветало одно из крупнейших поселений на земле — неолитическая деревня площадью 20 га с дворовыми домами, мощёными улицами и общим колодцем. Это эталонный памятник ярмукской культуры, чьи мастера создали первую керамику на юге Леванта и свыше 300 фигурок, в том числе загадочных «богинь» с щелевидными глазами. Местный музей — крупнейшее собрание ярмукского искусства в мире."
    },
    highlight: {
      en: "World capital of 8,000-year-old Neolithic art — goddess figurines older than writing",
      ru: "Столица 8000-летнего неолитического искусства — богини древнее письменности"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Sha%27ar_HaGolan_(archaeological_site)" }]
  },
  {
    id: "tel-dan",
    unesco: true,
    name: { en: "Tel Dan", ru: "Тель-Дан", he: "תל דן" },
    coords: [33.2490, 35.6520],
    periods: ["neolithic", "chalcolithic", "bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "hellenistic", "roman"],
    mainPeriod: "iron-ii",
    periodText: { en: "Neolithic – Roman", ru: "Неолит – римский период" },
    region: "north",
    access: { en: "INPA Nature Reserve", ru: "Природный заповедник INPA" },
    desc: {
      en: "Nestled at the foot of Mount Hermon where the Jordan springs to life, Tel Dan harbours one of the oldest standing arched gateways in the world — a mud-brick Middle Bronze Age structure of extraordinary preservation. The site also yielded the Tel Dan Stele, the first extra-biblical inscription mentioning the 'House of David.'",
      ru: "У подножия Хермона, где рождается Иордан, Тель-Дан прячет один из древнейших сохранившихся арочных проходов мира — кирпичные ворота среднего бронзового века, простоявшие почти 4000 лет. Именно здесь найдена «стела Дана» — первая внебиблейская надпись, упоминающая «Дом Давида» и перевернувшая споры об историчности израильских царей."
    },
    highlight: {
      en: "The inscription that named the House of David — found in a rushing river oasis",
      ru: "Надпись с «Домом Давида» — в журчащем речном оазисе"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Dan" }],
    imageFile: "Tel_Dan_Canaanite_Gate_1.jpg"
  },
  {
    id: "tel-hazor",
    name: { en: "Tel Hazor", ru: "Тель-Хацор", he: "תל חצור" },
    coords: [33.0167, 35.5669],
    periods: ["bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "hellenistic"],
    mainPeriod: "bronze-late",
    periodText: { en: "Early Bronze Age – Hellenistic", ru: "Ранний бронзовый век – эллинизм" },
    region: "north", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "Hazor was the largest city in Canaan during the Late Bronze Age, its lower city of 70 hectares housing up to 20,000 people — dwarfing any contemporary settlement. Visitors explore a palace with a throne room, a six-chambered Israelite gate attributed to Solomon, and a vivid destruction layer from the Assyrian conquest of 732 BCE.",
      ru: "В эпоху позднего бронзового века Хацор был крупнейшим городом Ханаана: нижний город площадью 70 гектаров вмещал до 20 000 жителей — больше любого другого центра региона. Сегодня можно пройти через «врата Соломона», заглянуть в тронный зал дворца и увидеть слой пожара, оставленный ассирийским нашествием 732 года до н.э."
    },
    highlight: {
      en: "The greatest Canaanite metropolis — ten times the size of contemporary Jerusalem",
      ru: "Крупнейший ханаанский мегаполис — в десять раз больше тогдашнего Иерусалима"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Hazor" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1108/" }
    ],
    imageFile: "Hatzor-HouseofPillars.jpg"
  },
  {
    id: "tel-megiddo",
    name: { en: "Tel Megiddo", ru: "Тель-Мегиддо", he: "תל מגידו" },
    coords: [32.5853, 35.1844],
    periods: ["neolithic", "chalcolithic", "bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian"],
    mainPeriod: "iron-ii",
    periodText: { en: "Neolithic – Persian period", ru: "Неолит – персидский период" },
    region: "north", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "Megiddo is one of the most fought-over cities in the ancient world, sitting astride the Jezreel Valley pass where more than thirty battles were recorded. Excavations revealed 26 strata spanning 5,000 years, including 'Solomon's stables,' a Canaanite temple and an elaborate Bronze Age water tunnel. The name itself gave rise to 'Armageddon.'",
      ru: "Мегиддо — один из самых кровопролитных городов древнего мира: через этот перевал в Изреельской долине прокатились более тридцати сражений. Раскопки обнажили 26 слоёв обитания протяжённостью в 5000 лет — «конюшни Соломона», ханаанские храмы и хитроумный водовод бронзового века. Само название дало миру слово «Армагеддон»."
    },
    highlight: {
      en: "The hill where history's great battles converged — and Armageddon got its name",
      ru: "Холм, где сходились великие битвы истории — и откуда пошло слово «Армагеддон»"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Megiddo" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1108/" }
    ],
    imageFile: "TEL_MEGIDO_AERIAL_C.JPG"
  },
  {
    id: "beit-shean",
    unesco: true,
    name: { en: "Beit She'an / Scythopolis", ru: "Бейт-Шеан / Скифополь", he: "בית שאן" },
    coords: [32.5004, 35.5018],
    periods: ["chalcolithic", "bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Chalcolithic – Early Islamic", ru: "Халколит – ранний ислам" },
    region: "north",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Beit She'an is arguably Israel's most spectacular Roman ruin: an entire Decapolis city frozen in time, with colonnaded streets, a 7,000-seat theatre, bathhouses and a broad cardo still paved with original basalt. Eighteen successive cities are stacked beneath the tell. The 749 CE earthquake that levelled the city also preserved it — toppled columns lie exactly where they fell.",
      ru: "Бейт-Шеан — пожалуй, самые впечатляющие руины римской эпохи в Израиле: целый город Декаполиса, застывший во времени, с колоннадами улиц, театром на 7000 мест и мощёным базальтом кардо. Под телем спрятаны восемнадцать городов — от египетского гарнизона до византийской столицы Палестины Секунды. Землетрясение 749 года уничтожило город и одновременно сохранило его: колонны лежат там, где упали."
    },
    highlight: {
      en: "A whole Roman-Byzantine city flattened by an earthquake and perfectly preserved",
      ru: "Целый римско-византийский город, сложенный землетрясением и идеально сохранённый"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Beit_She%27an" }],
    imageFile: "ROMAN_THEATER_BEIT_SHE'AN.JPG"
  },
  {
    id: "tzippori",
    unesco: true,
    name: { en: "Tzippori / Sepphoris", ru: "Ципори / Сепфорис", he: "ציפורי" },
    coords: [32.7456, 35.2786],
    periods: ["iron-ii", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Iron Age II – Early Islamic", ru: "Железный век II – ранний ислам" },
    region: "north",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Sepphoris was the jewel of Roman Galilee — a cosmopolitan city where Herod Antipas held court and, by tradition, Mary the mother of Jesus grew up. The Dionysian mosaic dubbed the 'Mona Lisa of the Galilee' ranks among the finest Roman floor mosaics anywhere. The site also has a 4,500-seat theatre, a synagogue with a zodiac mosaic and a Byzantine church.",
      ru: "Сепфорис был жемчужиной римской Галилеи — космополитичным городом, где правил Ирод Антипа и где, по преданию, выросла Мария, мать Иисуса. Дионисийская мозаика, прозванная «Моной Лизой Галилеи», — один из прекраснейших римских напольных образцов в мире. Театр, синагога с зодиаком, византийская церковь — три цивилизации на одном холме."
    },
    highlight: {
      en: "Home of the 'Mona Lisa of the Galilee' mosaic",
      ru: "Здесь жила «Мона Лиза Галилеи»"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Sepphoris" }],
    imageFile: "ZIPORI_AERIAL.JPG"
  },
  {
    id: "beit-shearim",
    name: { en: "Beit She'arim Necropolis", ru: "Некрополь Бейт-Шеарим", he: "בית שערים" },
    coords: [32.7022, 35.1269],
    periods: ["roman", "byzantine"],
    mainPeriod: "roman",
    periodText: { en: "Roman – Byzantine (2nd–4th c. CE)", ru: "Римский – византийский период (II–IV вв.)" },
    region: "north", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "When Rabbi Judah ha-Nasi, compiler of the Mishnah, was buried here around 220 CE, Beit She'arim became the most prestigious Jewish burial ground in the ancient world — diaspora Jews from as far as Yemen and Palmyra shipped their dead across the sea to lie beside him. Over 30 catacombs honeycomb the soft limestone, with sarcophagi mixing menorahs, Greek inscriptions and Hellenistic gods.",
      ru: "Когда здесь около 220 года н.э. похоронили рабби Иегуду ха-Наси — редактора Мишны, — Бейт-Шеарим стал самым престижным еврейским некрополем древнего мира: диаспора из Йемена и Пальмиры переправляла умерших через море, чтобы упокоить их рядом с ним. Более 30 катакомб пронизывают мягкий известняк; саркофаги невозмутимо смешивают меноры, греческие надписи и эллинистических богов."
    },
    highlight: {
      en: "The ancient Jewish world's most coveted burial address",
      ru: "Самый желанный адрес для погребения в иудейском мире древности"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Beit_She%27arim_necropolis" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1471/" }
    ],
    imageFile: "Catacomb_no._20_-_Cave_of_the_Coffins_-_partially_reconstructed.jpg"
  },
  {
    id: "hamat-tiberias",
    unesco: true,
    name: { en: "Hamat Tiberias", ru: "Хамат-Тверия", he: "חמת טבריה" },
    coords: [32.7686, 35.5483],
    periods: ["roman", "byzantine"],
    mainPeriod: "roman",
    periodText: { en: "Roman – Byzantine", ru: "Римский – византийский период" },
    region: "north",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Hamat Tiberias sits on hot springs at the southern edge of Tiberias, and its synagogue holds the earliest dated synagogue mosaic in the land of Israel — a spectacular mid-4th-century floor commissioned by a Roman official named Severus, with a central zodiac wheel and Helios at its hub. The thermal baths ran here for over two thousand years.",
      ru: "Хамат-Тверия стоит на горячих источниках у южной кромки Тверии, и здешняя синагога хранит древнейшую датированную мозаику синагоги в Израиле — ослепительный пол середины IV века, заказанный римским чиновником Севером. В центре — зодиакальное колесо с Гелиосом. Термальные бани работали здесь непрерывно более двух тысяч лет."
    },
    highlight: {
      en: "The oldest synagogue mosaic in Israel — Helios and the zodiac",
      ru: "Древнейшая мозаика синагоги Израиля — Гелиос и зодиак"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Hammat_Tiberias" }],
    imageFile: "Mosaic_Floor_in_Synagogue_at_Hammat_Tiberias_01.JPG"
  },
  {
    id: "beit-alfa",
    unesco: true,
    name: { en: "Beit Alfa Synagogue", ru: "Синагога Бейт-Альфа", he: "בית אלפא" },
    coords: [32.5190, 35.4270],
    periods: ["byzantine"],
    mainPeriod: "byzantine",
    periodText: { en: "Byzantine (6th c. CE)", ru: "Византийский период (VI в.)" },
    region: "north",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Discovered by kibbutz farmers digging an irrigation channel in 1928, Beit Alfa preserves the most complete ancient synagogue mosaic in Israel. Three panels tell three stories: the binding of Isaac, Helios driving his sun-chariot through the zodiac, and a Torah ark flanked by menorahs and lions. The floor even bears the names of its makers — Marianos and his son Hanina.",
      ru: "Обнаруженная в 1928 году при рытье оросительного канала, синагога Бейт-Альфа хранит самую полную древнюю мозаику Израиля. Три панели — три истории: жертвоприношение Исаака, Гелиос в колеснице среди знаков зодиака и ковчег Торы с менорами и львами. В пол даже вписаны имена мастеров — Марианоса и его сына Ханины."
    },
    highlight: {
      en: "A complete 6th-century zodiac mosaic, signed by its artists",
      ru: "Полная мозаика зодиака VI века, подписанная мастерами"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Beth_Alpha" }],
    imageFile: "Beyt-Alfa-45.jpg"
  },
  {
    id: "ancient-katzrin",
    name: { en: "Ancient Katzrin", ru: "Древний Кацрин", he: "קצרין העתיקה" },
    coords: [32.9920, 35.6910],
    periods: ["roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Late Roman – Early Islamic", ru: "Поздний Рим – ранний ислам" },
    region: "north",
    access: { en: "INPA open-air museum", ru: "Музей под открытым небом INPA" },
    desc: {
      en: "Ancient Katzrin is a reconstructed Talmudic-era village on the Golan where you can step inside furnished stone houses, work ancient olive and wine presses, and see a 6th-century synagogue built over a 4th-century one. The village was abandoned after the catastrophic 749 CE earthquake that also flattened Kursi and Beit She'an.",
      ru: "Древний Кацрин — реконструированная талмудическая деревня на Голанских высотах, где можно войти в обставленные каменные дома, покрутить древние маслодавильни и винные прессы и рассмотреть синагогу VI века. Деревня была покинута после разрушительного землетрясения 749 года. Воссозданные здания с подлинными артефактами делают это место одним из самых живых «погружений» в древний север Израиля."
    },
    highlight: {
      en: "A fully reconstructed Talmudic village — walk into furnished 6th-century homes",
      ru: "Воссозданная талмудическая деревня — войдите в обставленные дома VI века"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Katzrin_ancient_village_and_synagogue" }],
    imageFile: "Katzrinsynagogue.jpg"
  },
  {
    id: "umm-el-kanatir",
    name: { en: "Umm el-Kanatir (Ein Keshatot)", ru: "Умм-эль-Канатир (Эйн-Кешатот)", he: "עין קשתות" },
    coords: [32.8497, 35.7378],
    periods: ["roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Roman – Early Islamic (5th–8th c.)", ru: "Римский – ранний ислам (V–VIII вв.)" },
    region: "north",
    access: { en: "Open archaeological park (free)", ru: "Открытый археологический парк (свободный вход)" },
    desc: {
      en: "Umm el-Kanatir — 'Mother of the Arches' — is one of the largest, best-preserved ancient synagogues in the Golan, a basalt structure that stood 12 metres high until the 749 earthquake threw it down. Israeli archaeologists spent fifteen years documenting every fallen stone with 3D modelling, then reassembled the facade — arches, lintels and reliefs — like a giant stone puzzle. Reopened in 2018.",
      ru: "Умм-эль-Канатир — «Мать арок» — одна из крупнейших и лучше всего сохранившихся древних синагог Голана: базальтовая постройка высотой 12 м, рухнувшая при землетрясении 749 года. Израильские археологи пятнадцать лет оцифровывали каждый упавший камень, а затем собрали фасад — арки, притолоки, рельефы — как гигантский каменный пазл. Открыта заново в 2018-м."
    },
    highlight: {
      en: "A synagogue toppled by an earthquake and digitally reassembled stone by stone",
      ru: "Синагога, разрушенная землетрясением и собранная заново камень за камнем"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Umm_el-Qanatir" }]
  },
  {
    id: "khirbet-minya",
    unesco: true,
    name: { en: "Khirbat al-Minya", ru: "Хирбат аль-Минья", he: "חירבת אל-מניה" },
    coords: [32.8649, 35.5362],
    periods: ["early-islamic"],
    mainPeriod: "early-islamic",
    periodText: { en: "Early Islamic / Umayyad (8th c.)", ru: "Ранний ислам / Омейяды (VIII в.)" },
    region: "north",
    access: { en: "Open ruins, free access (INPA protected)", ru: "Открытые руины, свободный доступ (под охраной INPA)" },
    desc: {
      en: "On the northern shore of the Sea of Galilee, the palace of al-Minya is among the finest examples of Umayyad secular architecture in the Levant — a compact fortified qasr with corner towers, a central courtyard, an elaborate mosaic floor and an adjacent mosque with a mihrab. Built under Caliph al-Walid I around 708 CE and shattered by the 749 earthquake.",
      ru: "На северном берегу Галилейского моря высятся стены дворца аль-Минья — одного из лучших образцов омейядской светской архитектуры в Леванте: компактный укреплённый касыр с башнями по углам, центральным двором, нарядным мозаичным полом и мечетью с михрабом. Возведён при халифе аль-Валиде I около 708 года и разрушен землетрясением 749 года — редкий срез ранней исламской придворной эстетики."
    },
    highlight: {
      en: "An Umayyad palace on the Galilee shore — mosaics, a mosque and towers",
      ru: "Омейядский дворец на берегу Кинерета — мозаики, мечеть и башни"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Khirbet_Minya" }],
    imageFile: "Minya.jpg"
  },
  {
    id: "gamla",
    name: { en: "Gamla", ru: "Гамла", he: "גמלא" },
    coords: [32.9028, 35.7406],
    periods: ["hellenistic", "roman"],
    mainPeriod: "roman",
    periodText: { en: "Hellenistic – Roman", ru: "Эллинистический – римский период" },
    region: "north",
    access: { en: "INPA Nature Reserve", ru: "Природный заповедник INPA" },
    desc: {
      en: "Gamla was the 'Masada of the North' — a Jewish rebel stronghold on a precipitous camel-humped ridge in the Golan that fell to Vespasian's legions in 67 CE after a desperate siege. Archaeologists found 1,600 arrowheads and 2,000 ballista stones exactly where they landed. It holds one of the oldest synagogues ever found, and the reserve now shelters a great griffon vulture colony.",
      ru: "Гамла — «Масада Севера»: еврейская крепость на горбатом хребте Голанских высот, павшая под натиском легионов Веспасиана в 67 году н.э. Археологи нашли 1600 наконечников стрел и 2000 баллистных снарядов — там, где они упали. Здесь же одна из древнейших синагог мира и крупнейшая колония белоголовых сипов в Израиле."
    },
    highlight: {
      en: "A Jewish last stand against Rome, frozen in a hail of ballista stones",
      ru: "Последний бой евреев с Римом, застывший в граде баллистных снарядов"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Gamla" }],
    imageFile: "Gamla-antike-stadt-b.jpg"
  },
  {
    id: "kursi",
    unesco: true,
    name: { en: "Kursi / Gergesa", ru: "Курси / Гергеса", he: "כורסי" },
    coords: [32.8261, 35.6504],
    periods: ["byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Byzantine – Early Islamic", ru: "Византийский – ранний ислам" },
    region: "north",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Kursi is the largest Byzantine monastic complex ever found in Israel, traditionally identified as the site where Jesus cast out demons into a herd of swine. The walled monastery — 145 by 123 metres — enclosed a grand basilica with intricate mosaic floors, a chapel and a bathhouse. A 2015 Aramaic inscription hinted the community may have been Jewish-Christian.",
      ru: "Курси — крупнейший византийский монастырский комплекс в Израиле, традиционно отождествляемый с местом чуда «гадаринских свиней». Огороженный стеной монастырь (145×123 м) включал базилику с мозаичными полами, часовню и баню. Мраморная надпись на арамейском, найденная в 2015 году, намекает, что здешняя община могла быть иудео-христианской."
    },
    highlight: {
      en: "Israel's largest Byzantine monastery, on the shore of a dramatic miracle",
      ru: "Крупнейший византийский монастырь Израиля у места евангельского чуда"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Kursi,_Sea_of_Galilee" }],
    imageFile: "Kursi0036.JPG"
  },
  {
    id: "banias",
    name: { en: "Banias / Caesarea Philippi", ru: "Баниас / Кесария Филиппова", he: "בניאס" },
    coords: [33.2486, 35.6944],
    periods: ["hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Hellenistic – Early Islamic", ru: "Эллинистический – ранний ислам" },
    region: "north",
    access: { en: "INPA Nature Reserve & National Park", ru: "Природный заповедник и нац. парк INPA" },
    desc: {
      en: "At the base of Mount Hermon a powerful spring gushes from a cliff cave the Greeks consecrated to Pan, god of the wild. Herod the Great built a white marble temple to Augustus here, and his son Philip renamed the city Caesarea Philippi — where the Gospels record Peter's declaration that Jesus is the Messiah. Temples, shrines and a roaring waterfall fill the reserve.",
      ru: "У подножия Хермона из пещеры в скале бьёт мощный источник, посвящённый греками богу Пану. Ирод Великий воздвиг здесь мраморный храм Августу, а его сын Филипп назвал город Кесарией Филипповой. По Евангелиям, именно здесь Пётр исповедал Иисуса Мессией. Сегодня среди храмов и святилищ ревёт водопад реки Хермон."
    },
    highlight: {
      en: "Pan's grotto, Herod's marble temple and the spring where Peter named the Messiah",
      ru: "Пещера Пана, мраморный храм Ирода и источник исповедания Петра"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Banias" }],
    imageFile: "Banias_Spring_Cliff_Pan's_Cave.JPG"
  },

  // ───────────────────────────── COAST & SHEPHELAH ─────────────────────────────
  {
    id: "achziv",
    name: { en: "Achziv", ru: "Ахзив", he: "אכזיב" },
    coords: [33.0478, 35.1022],
    periods: ["bronze-middle", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine"],
    mainPeriod: "iron-ii",
    periodText: { en: "Middle Bronze Age – Byzantine", ru: "Средний бронзовый век – Византия" },
    region: "coast",
    access: { en: "INPA National Park (two adjacent parks)", ru: "Нац. парк INPA (два смежных участка)" },
    desc: {
      en: "Achziv was a fortified Canaanite city that became one of the most prosperous Phoenician trading towns on the Levantine coast, exporting purple dye and fine pottery as far as Spain and Sardinia. Its cemeteries yielded hundreds of Phoenician clay masks. The park sits on a dramatic rocky headland with sea pools and beach.",
      ru: "Ахзив — укреплённый ханаанский, а затем процветающий финикийский торговый город: его пурпурные красители и керамика расходились до Испании и Сардинии. Погребальные поля дали сотни финикийских глиняных масок и терракот. Национальный парк раскинулся на скалистом мысу с морскими ваннами; заселён непрерывно от среднего бронзового века до крестоносцев."
    },
    highlight: {
      en: "Phoenician purple-dye town whose masks reached Sardinia",
      ru: "Финикийский город пурпура, чьи маски доплыли до Сардинии"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Achziv" }],
    imageFile: "Az-Zeeb_remains.JPG"
  },
  {
    id: "tel-dor",
    name: { en: "Tel Dor", ru: "Тель-Дор", he: "תל דור" },
    coords: [32.6175, 34.9175],
    periods: ["bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine"],
    mainPeriod: "iron-i",
    periodText: { en: "Middle Bronze Age – Byzantine", ru: "Средний бронзовый век – Византия" },
    region: "coast",
    access: { en: "INPA Nature Reserve (Dor–Habonim Beach)", ru: "Природный заповедник INPA (пляж Дор–Хабоним)" },
    desc: {
      en: "Tel Dor held the only natural harbour on the Levantine coast south of the Ladder of Tyre, a commercial gateway coveted by Canaanites, Sea Peoples, Phoenicians, Israelites, Persians and Greeks. The tel sits beside a sandy lagoon in a nature reserve; underwater digs have recovered Phoenician anchors, murex shells from purple-dye workshops and Bronze Age shipwreck cargo.",
      ru: "Тель-Дор владел единственной природной гаванью на левантийском побережье к югу от «Лестницы Тира» — за неё сражались ханаанеи, народы моря, финикийцы, израильтяне, персы и греки. Рядом с телем — песчаная лагуна в природном заповеднике; под водой обнаружены финикийские якоря, раковины мурекса из мастерских пурпура и груз затонувших кораблей бронзового века."
    },
    highlight: {
      en: "The only natural harbour between Akko and Egypt in the ancient world",
      ru: "Единственная природная гавань между Акко и Египтом в древности"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Dor" }],
    imageFile: "PikiWiki_Israel_45391_Tel_Dor.JPG"
  },
  {
    id: "caesarea-maritima",
    unesco: true,
    name: { en: "Caesarea Maritima", ru: "Кесария Приморская", he: "קיסריה" },
    coords: [32.5000, 34.8917],
    periods: ["hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Hellenistic – Early Islamic", ru: "Эллинизм – ранний ислам" },
    region: "coast",
    access: { en: "INPA National Park (Caesarea)", ru: "Нац. парк INPA (Кесария)" },
    desc: {
      en: "Built by Herod the Great around 22–10 BCE and named for Augustus, Caesarea served for six centuries as the Roman and Byzantine capital of Judaea–Palaestina. Its artificial harbour was a marvel of hydraulic engineering; the city had a hippodrome, amphitheatre, a palace on the sea and an early Christian library of 30,000 manuscripts.",
      ru: "Заложенная Иродом Великим около 22–10 гг. до н.э. и названная в честь Августа, Кесария на протяжении шести веков была столицей римской провинции Иудея–Палестина. Здесь стоял один из крупнейших рукотворных портов античности, ипподром, амфитеатр и дворец на воде. Ранние христиане собрали тут библиотеку из 30 000 рукописей. Сейчас — открытый национальный парк с руинами прямо в море."
    },
    highlight: {
      en: "Herod's harbour capital that ruled Roman Judaea for 600 years",
      ru: "Портовая столица Иудеи, правившая 600 лет"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Caesarea_Maritima" }],
    imageFile: "Caesarea_maritima_BW_10.JPG"
  },
  {
    id: "apollonia-arsuf",
    unesco: true,
    name: { en: "Apollonia–Arsuf", ru: "Аполлония–Арсуф", he: "אפולוניה" },
    coords: [32.1953, 34.8067],
    periods: ["babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Persian period – Crusader", ru: "Персидский период – крестоносцы" },
    region: "coast",
    access: { en: "INPA National Park (Apollonia, Herzliya)", ru: "Нац. парк INPA (Аполлония, Герцлия)" },
    desc: {
      en: "A coastal tel occupied from the Persian period through the Crusader era, Apollonia–Arsuf preserves dramatic Crusader fortress ruins on a cliff above the Mediterranean — beside the field of the Battle of Arsuf (1191), where Richard the Lionheart defeated Saladin. Below lie Roman villas with mosaic floors, Byzantine wine presses and Persian-era workshops.",
      ru: "Прибрежный тель, обитаемый с персидских времён до крестоносцев: на обрывистом утёсе над морем нависают стены крепости крестоносцев Арсуф, рядом с полем битвы при Арсуфе (1191), где Ричард Львиное Сердце разгромил Саладина. Под крепостью — мозаики римских вилл, византийские винные прессы и персидские мастерские. Парк открыт с 2002 года."
    },
    highlight: {
      en: "Cliff-top Crusader fortress where Richard the Lionheart beat Saladin",
      ru: "Крепость на обрыве, где Ричард Львиное Сердце разбил Саладина"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Apollonia-Arsuf" }],
    imageFile: "Apollonia-Arsuf-045.jpg"
  },
  {
    id: "old-jaffa",
    name: { en: "Old Jaffa (Tel Yafo)", ru: "Старый Яффо (Тель-Яфо)", he: "יפו" },
    coords: [32.0522, 34.7531],
    periods: ["bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "bronze-late",
    periodText: { en: "Early Bronze Age – Ottoman", ru: "Ранний бронзовый век – Османская эпоха" },
    region: "coast",
    access: { en: "Open archaeological garden (Abrasha Park), free; visitor centre", ru: "Открытый археологический сад (парк Абраша), бесплатно; визит-центр" },
    desc: {
      en: "One of the world's oldest continuously inhabited ports, Jaffa was the main seagate to ancient Canaan for four millennia. Egyptian pharaohs controlled it from the 15th century BCE, leaving a monumental gateway. The tel now rises in the centre of Jaffa as Abrasha Park — an open-air garden where Egyptian and Hellenistic fortifications stand among bougainvillea, the Tel Aviv skyline behind.",
      ru: "Один из старейших постоянно обитаемых портов мира: египетские фараоны управляли Яффо с XV в. до н.э., оставив монументальные ворота. Сегодня тель стоит прямо в центре современного Яффо как парк Абраша — открытый археологический сад, где египетские и эллинистические укрепления соседствуют с бугенвиллеей, а сзади светится горизонт Тель-Авива."
    },
    highlight: {
      en: "A 4,000-year-old Egyptian gate in a flowering garden above the sea",
      ru: "Египетские ворота возрастом 4000 лет — в цветущем саду над морем"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Jaffa" }],
    imageFile: "Tel_Aviv_-_Joppa_-_panoramio_(1).jpg"
  },
  {
    id: "tel-afek-antipatris",
    name: { en: "Tel Afek / Antipatris", ru: "Тель-Афек / Антипатрида", he: "תל אפק" },
    coords: [32.1050, 34.9304],
    periods: ["chalcolithic", "bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Chalcolithic – Ottoman", ru: "Халколит – Османская эпоха" },
    region: "coast",
    access: { en: "INPA National Park (Yarkon–Tel Afek)", ru: "Нац. парк INPA (Яркон–Тель-Афек)" },
    desc: {
      en: "At the headwaters of the Yarkon, Tel Afek controlled the narrow pass where the coastal road met the hills — every army from Thutmose III to the British marched through. Herod built the Roman city of Antipatris here, named for his father. The photogenic Ottoman Binar Bashi fortress (1573) looms above the river, with Bronze Age palace walls and Roman milestones below.",
      ru: "У истоков реки Яркон Тель-Афек контролировал единственный удобный проход с побережья в горы — здесь маршировали все армии от Тутмоса III до британских войск. Ирод назвал выстроенный тут город Антипатридой в честь своего отца. Сегодня над рекой нависает османская крепость Бинар-Баши (1573), а под ней — дворцы бронзового века и римские мильные столбы."
    },
    highlight: {
      en: "Every conqueror of Canaan passed through this river-pass for 5,000 years",
      ru: "Через этот речной перевал 5000 лет шли все завоеватели Ханаана"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Antipatris" }],
    imageFile: "PikiWiki_Israel_72599_fortress_of_antipatris_tel_afek_israel.jpg"
  },
  {
    id: "tel-gezer",
    name: { en: "Tel Gezer", ru: "Тель-Гезер", he: "גזר" },
    coords: [31.8590, 34.9190],
    periods: ["chalcolithic", "bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman"],
    mainPeriod: "iron-ii",
    periodText: { en: "Chalcolithic – Roman", ru: "Халколит – римский период" },
    region: "coast",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Gezer guarded the junction of the Via Maris and the road up to Jerusalem, stacking 26 levels from the Chalcolithic to the early Roman period. Visible today: a Canaanite high place with ten massive standing stones, a Solomonic gate twinned with those at Hazor and Megiddo, and a deep water tunnel. The famous 10th-century BCE Gezer Calendar is among the oldest Hebrew inscriptions.",
      ru: "Гезер стоял на перекрёстке Via Maris и пути в Иерусалим и накопил 26 слоёв истории от халколита до Рима. Сегодня посетители видят ханаанское «высокое место» с десятью монолитами, соломоновы ворота (близнецы ворот Хацора и Мегиддо) и водный тоннель. Здесь найден Гезерский календарь — одна из древнейших еврейских надписей."
    },
    highlight: {
      en: "Ten Canaanite standing stones and Solomon's gate at a biblical crossroads",
      ru: "Десять ханаанских стел и Соломоновы ворота на библейском перекрёстке"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Gezer" }],
    imageFile: "Tel-gezer-high-place-monolithe-temple-c.JPG"
  },
  {
    id: "beit-guvrin-maresha",
    name: { en: "Beit Guvrin – Maresha", ru: "Бейт-Гуврин – Мареша", he: "בית גוברין – מרשה" },
    coords: [31.5970, 34.9006],
    periods: ["iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "hellenistic",
    periodText: { en: "Iron Age II – Crusader", ru: "Железный век II – крестоносцы" },
    region: "coast", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "A UNESCO World Heritage Site, this park preserves the extraordinary underground world of Maresha and Beit Guvrin — some 800 bell-shaped caves carved from soft chalk by Hellenistic Sidonians, Roman quarrymen and Byzantine monks. Above ground: a Roman amphitheatre, Hellenistic columbaria and painted burial caves with vivid animal friezes. The 'Dig for a Day' program lets visitors excavate.",
      ru: "Объект ЮНЕСКО — подземный лабиринт из 800 колоколообразных пещер, вырубленных в мягком меловом известняке сидонскими переселенцами, римскими каменотёсами и византийскими монахами. На поверхности — руины римского амфитеатра, эллинистические голубятни-колумбарии и расписные погребальные склепы с фризами животных. Программа «Копай сам» позволяет поработать на настоящих раскопках."
    },
    highlight: {
      en: "800 underground bell-caves — and you can dig here yourself",
      ru: "800 подземных пещер-«колоколов» и возможность самому покопаться на раскопках"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Beit_Guvrin-Maresha_National_Park" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1370/" }
    ],
    imageFile: "Bell_caves_in_Beit_Guvrin_Israel.jpg"
  },
  {
    id: "tel-lachish",
    name: { en: "Tel Lachish", ru: "Тель-Лахиш", he: "תל לכיש" },
    coords: [31.5650, 34.8489],
    periods: ["neolithic", "bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian"],
    mainPeriod: "iron-ii",
    periodText: { en: "Neolithic – Persian period", ru: "Неолит – персидский период" },
    region: "coast",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "The second city of the Kingdom of Judah after Jerusalem, Lachish was twice taken in sieges recorded in stone: Sennacherib captured it in 701 BCE (the reliefs now hang in the British Museum), and Nebuchadnezzar destroyed it in 587 BCE just before Jerusalem fell. The site preserves the only Assyrian siege ramp found anywhere, a monumental gate, and an ash-black destruction layer.",
      ru: "Второй по важности город Иудеи после Иерусалима был дважды захвачен в грандиозных осадах. Ассирийский Синаххериб взял Лахиш в 701 г. до н.э. — рельефы с этой сценой хранятся в Британском музее. Навуходоносор II разрушил его в 587 г. — прямо перед падением Иерусалима. Сегодня здесь виден единственный в мире сохранившийся ассирийский осадный пандус и чёрный от пепла слой разрушения."
    },
    highlight: {
      en: "The world's only surviving Assyrian siege ramp, 2,700 years on",
      ru: "Единственный в мире сохранившийся ассирийский осадный пандус — 2700 лет"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Lachish" }],
    imageFile: "Lachish.JPG"
  },
  {
    id: "tel-bet-shemesh",
    name: { en: "Tel Bet Shemesh", ru: "Тель-Бейт-Шемеш", he: "תל בית שמש" },
    coords: [31.7506, 34.9750],
    periods: ["bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "roman", "byzantine"],
    mainPeriod: "iron-i",
    periodText: { en: "Middle Bronze Age – Byzantine", ru: "Средний бронзовый век – Византия" },
    region: "coast",
    access: { en: "Open archaeological site (municipal park in progress)", ru: "Открытый археологический участок (идёт создание парка)" },
    desc: {
      en: "Biblical Beth-Shemesh — 'House of the Sun' — sat on the Judah–Philistia frontier in the Sorek Valley, where the Philistines returned the Ark of the Covenant (1 Samuel 6). Excavations revealed a Late Bronze city with rich Mediterranean trade, a massive Iron Age storehouse, and what may be the world's oldest iron workshop (10th century BCE). Sennacherib destroyed it in 701 BCE alongside Lachish.",
      ru: "Библейский Бейт-Шемеш («Дом Солнца») стоял на границе Иудеи и Филистии в долине Сорек — именно сюда филистимляне вернули Ковчег Завета (1 Цар. 6). Раскопки открыли позднебронзовый город с обширными торговыми связями, монументальный иудейский склад и, возможно, древнейшую в мире железоделательную мастерскую (X в. до н.э.)."
    },
    highlight: {
      en: "Where the Philistines returned the Ark — and the world's oldest ironworks",
      ru: "Сюда вернули Ковчег Завета — и здесь же древнейший железоделательный цех"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Beit_Shemesh" }],
    imageFile: "Bet_Shemesh.JPG"
  },
  {
    id: "tel-miqne-ekron",
    name: { en: "Tel Miqne / Ekron", ru: "Тель-Микне / Экрон", he: "עקרון" },
    coords: [31.7789, 34.8499],
    periods: ["bronze-late", "iron-i", "iron-ii"],
    mainPeriod: "iron-i",
    periodText: { en: "Late Bronze Age – Iron Age II", ru: "Поздний бронзовый век – железный век II" },
    region: "coast",
    access: { en: "Open site near Kibbutz Revadim (replicas at 'Philistine Street')", ru: "Открытый памятник у кибуца Ревадим (реплики на «Филистимской улице»)" },
    desc: {
      en: "One of the five cities of the Philistine Pentapolis, Ekron peaked in the 7th century BCE as the largest olive-oil centre of the ancient world — over 100 industrial presses capable of 1,000 tons a year. A royal dedicatory inscription found in 1996 is the only one in Israel naming a Philistine king, confirming the site's identity beyond doubt.",
      ru: "Один из пяти городов Филистимского пятиградия и крупнейший в древнем мире центр производства оливкового масла: раскопано более 100 промышленных прессов, дававших до 1000 тонн масла в год. В 1996 году здесь нашли царскую посвятительную надпись — единственный в Израиле текст, называющий имя филистимского царя."
    },
    highlight: {
      en: "The ancient world's biggest olive-oil factory — 100 presses, 1,000 tons a year",
      ru: "Крупнейший маслозавод древнего мира — 100 прессов, 1000 тонн в год"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Miqne" }],
    imageFile: "Tel-Mikne-112100.jpg"
  },
  {
    id: "ashkelon",
    name: { en: "Ashkelon", ru: "Ашкелон", he: "אשקלון" },
    coords: [31.6639, 34.5458],
    periods: ["bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "bronze-middle",
    periodText: { en: "Middle Bronze Age – Crusader", ru: "Средний бронзовый век – крестоносцы" },
    region: "coast",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Ancient Ashkelon was one of the five cities of the Philistine Pentapolis and before that a major Canaanite port. The national park preserves a Middle Bronze Age gate with the world's oldest known arch (c. 1850 BCE), a silver-calf sanctuary, a Roman basilica and Crusader ramparts — all right on the beach, one of Israel's most scenic archaeological sites.",
      ru: "Древний Ашкелон — один из пяти городов Филистимского пятиградия, а ещё раньше крупный ханаанский порт. В национальном парке сохранились ворота среднего бронзового века с древнейшей известной аркой мира (ок. 1850 г. до н.э.), святилище с серебряным тельцом, римская базилика и валы крестоносцев. И всё это прямо на берегу моря — один из самых живописных археологических парков Израиля."
    },
    highlight: {
      en: "The world's oldest arch (1850 BCE) in a park right on the beach",
      ru: "Древнейшая арка мира (1850 г. до н.э.) — прямо у моря"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Ashkelon_National_Park" }],
    imageFile: "Ashkelon national park AS19.JPG"
  },
  {
    id: "emmaus-nicopolis",
    name: { en: "Emmaus Nicopolis", ru: "Эммаус Никополис", he: "אמאוס" },
    coords: [31.8392, 34.9894],
    periods: ["hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Hellenistic – Crusader", ru: "Эллинизм – крестоносцы" },
    region: "coast",
    access: { en: "Open to visitors (Community of the Beatitudes), in Canada Park", ru: "Открыт для посещения (Братство Блаженств), в парке «Канада»" },
    desc: {
      en: "Identified by many with the Emmaus of Luke's Gospel, where the risen Jesus walked with two disciples, this site at the western gate of the Judean hills was raised to 'Nicopolis' (City of Victory) by Rome after the Bar Kokhba revolt. A magnificent 5th-century Byzantine basilica with baptistery and mosaic floors survives, overlaid by a 12th-century Crusader church.",
      ru: "Многие отождествляют это место с евангельским Эммаусом, где воскресший Иисус шёл с двумя учениками. Римляне переименовали город в Никополис («Город победы») после подавления восстания Бар-Кохбы. Сохранилась великолепная византийская базилика V века с баптистерием и мозаичными полами, поверх которой легла церковь крестоносцев XII в."
    },
    highlight: {
      en: "A Byzantine basilica and Crusader church on the road to Emmaus",
      ru: "Византийская базилика и церковь крестоносцев на пути в Эммаус"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Emmaus_Nicopolis" }],
    imageFile: "Emmaus_Nicopolis_basilica.JPG"
  },

  // ───────────────────────────── NEGEV & DEAD SEA ─────────────────────────────
  {
    id: "tel-arad",
    name: { en: "Tel Arad", ru: "Тель-Арад", he: "תל ערד" },
    coords: [31.2811, 35.1261],
    periods: ["chalcolithic", "bronze-early", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman"],
    mainPeriod: "bronze-early",
    periodText: { en: "Chalcolithic – Roman", ru: "Халколит – римский период" },
    region: "south",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Tel Arad is two cities in one: a large Early Bronze Age Canaanite city (3rd millennium BCE) with streets, temples and a citadel — one of the earliest planned urban centres in the southern Levant — and, on the upper mound, a chain of Israelite fortresses from the 10th century BCE to Bar Kokhba. The fortress held a unique Israelite temple with a holy of holies, and 107 Hebrew ostraca, the richest trove of ancient Hebrew administrative texts.",
      ru: "Тель-Арад — два разных города в одном: большой ханаанский город раннего бронзового века (III тыс. до н.э.) с улицами, храмами и цитаделью, один из древнейших спланированных центров Южного Леванта; и на верхнем холме — череда израильских крепостей с X века до н.э. до восстания Бар-Кохбы. В крепости стоял уникальный израильский храм со «святая святых», а 107 найденных здесь острак — богатейший корпус древнееврейских документов вне Библии."
    },
    highlight: {
      en: "Two cities in one: a 5,000-year-old Canaanite town and a biblical fortress-temple",
      ru: "Два города в одном: ханаанский мегаполис и библейская крепость-храм"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Arad" }],
    imageFile: "Tel_Arad.JPG"
  },
  {
    id: "tel-beer-sheva",
    name: { en: "Tel Be'er Sheva", ru: "Тель-Беэр-Шева", he: "תל באר שבע" },
    coords: [31.2447, 34.8408],
    periods: ["iron-i", "iron-ii", "babylonian-persian"],
    mainPeriod: "iron-ii",
    periodText: { en: "Iron Age I – Persian period", ru: "Железный век I – персидский период" },
    region: "south", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "Tel Be'er Sheva is the finest example of a planned Israelite administrative city of the biblical Iron Age, identified with the Beer-sheba of the Hebrew Bible. The mound reveals a masterpiece of 10th–8th-century BCE planning: a ring road, a four-chambered gate, storehouses and a rock-cut underground water system. A reconstructed horned altar is a rare confirmed Israelite cult object.",
      ru: "Тель-Беэр-Шева — лучший сохранившийся образец спланированного израильского административного города железного века, отождествляемого с библейской Беэр-Шевой. Холм раскрывает шедевр градостроительства X–VIII веков до н.э.: кольцевую улицу, четырёхкамерные ворота, склады и подземный водозабор в скале. Собранный из камней рогатый алтарь — редкий подтверждённый израильский культовый объект."
    },
    highlight: {
      en: "A biblical Israelite city with a rock-cut water system and a horned altar",
      ru: "Библейский израильский город с водозабором в скале и рогатым алтарём"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Tel_Be%27er_Sheva" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1108/" }
    ],
    imageFile: "104264_tel_beer_sheva_PikiWiki_Israel.jpg"
  },
  {
    id: "mezad-tamar",
    name: { en: "Mezad Tamar", ru: "Мецад-Тамар", he: "מצד תמר" },
    coords: [31.0268, 35.2431],
    periods: ["iron-ii", "hellenistic", "roman", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Iron Age II – Early Islamic", ru: "Железный век II – ранний ислам" },
    region: "south",
    access: { en: "Free-access site (Tamar Regional Council), visible from Highway 90", ru: "Открытый памятник (региональный совет Тамар), виден с шоссе 90" },
    desc: {
      en: "Mezad Tamar is a multi-period fortress near the Ein Hazeva spring in the Arava, identified with the biblical Tamar and the Roman road station Tamara. Excavations revealed at least eight overlapping forts from the Israelite kingdom through the Roman limes Arabicus, with Nabataean coins between the layers. The Roman walls stand several courses high at the crossroads of the Spice Route and the King's Highway.",
      ru: "Мецад-Тамар — многопериодная крепость у источника Эйн-Хацева в пустыне Арава, отождествляемая с библейским Тамаром и римской дорожной станцией Тамара. Раскопки выявили не менее восьми наслоенных крепостей — от Израильского царства до римской пограничной системы limes Arabicus. Стены римского форта стоят на несколько рядов кладки на пересечении Пути благовоний и Царского тракта."
    },
    highlight: {
      en: "Eight forts in one — 3,000 years of desert frontier from Israel to Rome",
      ru: "Восемь крепостей в одной — 3000 лет пограничья от Израиля до Рима"
    },
    links: [{ label: "Hebrew Wikipedia", url: "https://he.wikipedia.org/wiki/מצד_תמר" }],
    imageFile: "Mezad Tamar 090910 01.jpg"
  },
  {
    id: "mamshit",
    name: { en: "Mamshit (Mampsis)", ru: "Мамшит (Мампсис)", he: "ממשית" },
    coords: [31.0250, 35.0640],
    periods: ["hellenistic", "roman", "byzantine"],
    mainPeriod: "roman",
    periodText: { en: "Hellenistic – Byzantine", ru: "Эллинизм – Византия" },
    region: "south", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "The smallest yet best-preserved Nabataean city in the Negev, Mamshit grew rich on the spice and incense trade. Whole streets, residential compounds and the Church of St. Nilus with intact mosaic floors survive. Excavations here yielded Israel's largest-ever coin hoard — 10,500 silver coins weighing 72 kg — buried beneath a house floor.",
      ru: "Самый маленький, но лучше всего сохранившийся набатейский город Негева, разбогатевший на торговле пряностями и благовониями. Целые улицы, жилые кварталы и церковь Святого Нила с нетронутыми мозаичными полами дошли до наших дней. Именно здесь нашли крупнейший монетный клад в истории Израиля — 10 500 серебряных монет общим весом 72 кг, спрятанных под полом одного из домов."
    },
    highlight: {
      en: "Best-preserved Nabataean city, hiding Israel's greatest coin hoard",
      ru: "Лучший сохранившийся набатейский город и крупнейший клад Израиля"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Mampsis" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1107/" }
    ],
    imageFile: "Mamshit_IMG_6212.JPG"
  },
  {
    id: "haluza",
    name: { en: "Haluza (Elusa)", ru: "Халуца (Элуса)", he: "חלוצה" },
    coords: [31.0970, 34.6520],
    periods: ["hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Hellenistic – Early Islamic", ru: "Эллинизм – ранний ислам" },
    region: "south", unesco: true,
    access: { en: "Open site, free (UNESCO World Heritage Site)", ru: "Открытый памятник, свободный вход (объект ЮНЕСКО)" },
    desc: {
      en: "Haluza was the oldest and largest of the four Nabataean Incense Route cities — once a metropolis of tens of thousands, now low mounds in the dunes southwest of Beersheba. The theatre, church foundations, street grid and inscribed tombstones are still readable, and its Byzantine-era wines were exported as far as Gaul. The least developed for tourism, it has a raw, authentic feel.",
      ru: "Халуца — самый древний и крупный из четырёх набатейских городов Пути благовоний. Некогда настоящий мегаполис, сегодня его руины скромно виднеются из песчаных дюн к юго-западу от Беэр-Шевы. Остатки театра, фундаменты церквей, уличная сетка и надписанные надгробия всё ещё читаемы, а знаменитые местные вина в византийскую эпоху экспортировались вплоть до Галлии."
    },
    highlight: {
      en: "The oldest, largest, least touristy Nabataean city — a ghost in the dunes",
      ru: "Самый древний и нетуристический набатейский город — призрак в дюнах"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Elusa_(Haluza)" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1107/" }
    ]
  },
  {
    id: "shivta",
    name: { en: "Shivta", ru: "Шивта", he: "שבטה" },
    coords: [30.8800, 34.6300],
    periods: ["roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Roman – Early Islamic", ru: "Римский период – ранний ислам" },
    region: "south", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "Unlike the other Incense Route cities, Shivta was never a major caravan stop — it was a farming town that thrived on ingenious desert water-harvesting. It is the most atmospheric of all the Negev Byzantine ruins: three churches, houses, wine and oil presses and reservoirs on an empty plateau. The northern church holds one of the oldest known beardless portraits of Christ.",
      ru: "В отличие от других городов Пути благовоний, Шивта процветала как сельскохозяйственный город благодаря изощрённым системам сбора дождевой воды. Сегодня это самые атмосферные из всех византийских руин Негева: три церкви, жилые кварталы, давильни и огромные цистерны разбросаны по безлюдному плато. В северной церкви — один из древнейших известных портретов безбородого Христа."
    },
    highlight: {
      en: "A ghostly Byzantine plateau town with one of the oldest faces of Christ",
      ru: "Призрачный византийский город на плато и один из древнейших ликов Христа"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Shivta" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1107/" }
    ],
    imageFile: "97908_shivta_national_park_PikiWiki_Israel.jpg"
  },
  {
    id: "avdat",
    name: { en: "Avdat", ru: "Авдат", he: "עבדת" },
    coords: [30.7940, 34.7730],
    periods: ["hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Hellenistic – Early Islamic", ru: "Эллинизм – ранний ислам" },
    region: "south", unesco: true,
    access: { en: "INPA National Park (UNESCO World Heritage Site)", ru: "Нац. парк INPA (объект ЮНЕСКО)" },
    desc: {
      en: "Avdat was the most important Nabataean city on the Incense Route, perched on a dramatic hilltop in the central Negev. Founded in the 3rd century BCE as a caravan stop, it grew into a Roman then Byzantine city with an acropolis, temples, wine presses and a rock-cut cave quarter. Two basilicas and a fortress tower still rise above the plateau, and its desert runoff-farming terraces were centuries ahead of their time.",
      ru: "Авдат — главный набатейский город на Пути благовоний, эффектно возвышающийся над центральным Негевом. Основанный в III веке до н.э. как перевалочный пункт для верблюжьих караванов, он вырос до полноценного римского и затем византийского города с акрополем, храмами, давильнями для вина и высеченным в скале пещерным кварталом. До сих пор над плато возвышаются две базилики и крепостная башня."
    },
    highlight: {
      en: "Nabataean caravan city turned Byzantine bastion — the Negev's crown jewel",
      ru: "Набатейский город-перекрёсток, ставший византийской твердыней в пустыне"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Avdat" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1107/" }
    ],
    imageFile: "Avdat_IMG_8322.JPG"
  },
  {
    id: "ein-gedi",
    name: { en: "Ein Gedi", ru: "Эйн-Геди", he: "עין גדי" },
    coords: [31.4614, 35.3925],
    periods: ["chalcolithic", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine"],
    mainPeriod: "chalcolithic",
    periodText: { en: "Chalcolithic – Byzantine", ru: "Халколит – Византия" },
    region: "south",
    access: { en: "INPA National Park + Ein Gedi Nature Reserve", ru: "Нац. парк INPA и природный заповедник Эйн-Геди" },
    desc: {
      en: "Ein Gedi is a Dead Sea oasis with a strikingly long sequence. Its Chalcolithic temple (c. 3500 BCE) — one of the earliest large sacred complexes in the Levant — sits on a terrace above the kibbutz. Lower down, the 6th-century Byzantine synagogue has stunning mosaics of birds and menorahs, and was where the charred Ein Gedi Scroll (Leviticus) was found — the only Torah scroll ever recovered from an ancient synagogue.",
      ru: "Эйн-Геди — оазис на берегу Мёртвого моря с поразительно долгой историей заселения. Халколитический храм (ок. 3500 до н.э.) — один из древнейших крупных священных комплексов Леванта — стоит на террасе над кибуцем. Ниже — византийская синагога VI века с великолепными мозаиками из птиц и менор, где нашли обугленный Эйн-Гедийский свиток (Левит) — единственный свиток Торы, обнаруженный в древней синагоге."
    },
    highlight: {
      en: "A 5,500-year-old temple and a synagogue with a burnt Torah scroll, in a Dead Sea oasis",
      ru: "Храм возрастом 5500 лет и синагога с обугленным свитком Торы — в оазисе у Мёртвого моря"
    },
    links: [
      { label: "Wikipedia — temple", url: "https://en.wikipedia.org/wiki/Chalcolithic_temple_of_Ein_Gedi" },
      { label: "Wikipedia — synagogue", url: "https://en.wikipedia.org/wiki/Ein_Gedi_synagogue" }
    ],
    imageFile: "Ein-Gedi-synagogue-839.jpg"
  },
  {
    id: "masada",
    name: { en: "Masada", ru: "Масада", he: "מצדה" },
    coords: [31.3156, 35.3539],
    periods: ["chalcolithic", "hellenistic", "roman", "byzantine"],
    mainPeriod: "roman",
    periodText: { en: "Hasmonean – Byzantine", ru: "Хасмонеи – Византия" },
    region: "south", unesco: true,
    access: { en: "INPA National Park (UNESCO WHS); cable car or Snake Path", ru: "Нац. парк INPA (объект ЮНЕСКО); канатная дорога или тропа «Змейка»" },
    desc: {
      en: "Masada is Israel's most iconic site — a sheer-sided plateau above the Dead Sea where Herod the Great built two palaces, bathhouses and storehouses in the 1st century BCE. In 73–74 CE the last Jewish rebels against Rome made their stand here, and the Roman siege works — camps, wall and assault ramp — form the most complete ancient siege system in the world.",
      ru: "Масада — самый знаковый археологический памятник Израиля: отвесная платформа над Мёртвым морем, где Ирод Великий в I веке до н.э. выстроил два дворца, термы и склады. В 73–74 гг. н.э. здесь дали свой последний бой иудейские повстанцы против Рима, а римские осадные сооружения — лагеря, стена и штурмовой пандус — образуют самый полный сохранившийся осадный комплекс в мире."
    },
    highlight: {
      en: "Herod's cliff-top fortress and the world's most complete Roman siege works",
      ru: "Дворец-крепость Ирода на обрыве и самая полная римская осада в мире"
    },
    links: [
      { label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Masada" },
      { label: "UNESCO", url: "https://whc.unesco.org/en/list/1040/" }
    ],
    imageFile: "Israel-2013-Masada-Aerial_01.JPG"
  },
  {
    id: "qumran",
    name: { en: "Qumran", ru: "Кумран", he: "קומראן" },
    coords: [31.7408, 35.4586],
    periods: ["hellenistic", "roman"],
    mainPeriod: "hellenistic",
    periodText: { en: "Hellenistic – Roman", ru: "Эллинизм – римский период" },
    region: "south",
    access: { en: "INPA National Park", ru: "Нац. парк INPA" },
    desc: {
      en: "Qumran is the sectarian settlement on the northwestern Dead Sea shore where the Dead Sea Scrolls — the oldest surviving Hebrew Bible manuscripts — were produced and hidden in 11 caves between roughly 200 BCE and 68 CE. The complex includes a scriptorium, ritual baths, a refectory and a cemetery. A Bedouin shepherd's 1947 discovery became one of the great finds of the 20th century.",
      ru: "Кумран — сектантское поселение на северо-западном берегу Мёртвого моря, где были созданы и спрятаны в 11 пещерах Свитки Мёртвого моря — древнейшие сохранившиеся рукописи Еврейской Библии (ок. 200 до н.э. — 68 н.э.). Комплекс включает скрипторий, ритуальные бассейны-микве, трапезную и кладбище. Находка свитков пастухом-бедуином в 1947 году стала одним из величайших археологических открытий XX века."
    },
    highlight: {
      en: "The commune that hid the Dead Sea Scrolls in clifftop caves 2,000 years ago",
      ru: "Община, спрятавшая Свитки Мёртвого моря в пещерах 2000 лет назад"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Qumran" }],
    imageFile: "The_cave_of_Qumran_place_of_the_dead_Sea_Scrolls.JPG"
  },

  // ───────────────────────────── JERUSALEM, JUDEA & SAMARIA ─────────────────────────────
  {
    id: "city-of-david",
    unesco: true,
    name: { en: "City of David", ru: "Город Давида", he: "עיר דוד" },
    coords: [31.7736, 35.2356],
    periods: ["bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "iron-ii",
    periodText: { en: "Early Bronze Age – Early Islamic", ru: "Ранний бронзовый век – ранний ислам" },
    region: "jerusalem",
    access: { en: "Archaeological park, paid entry, guided tours", ru: "Археологический парк, платный вход, экскурсии" },
    desc: {
      en: "The City of David is the original urban core of ancient Jerusalem, occupied without break from the Early Bronze Age through the Islamic period. Excavations uncovered a royal palace area, the Stepped Stone Structure, and the Siloam Tunnel carved in the 8th century BCE to feed water to the besieged city. Visitors can wade through Hezekiah's Tunnel or walk the underground Pilgrim's Road from the Second Temple era.",
      ru: "Город Давида — исходное ядро древнего Иерусалима, непрерывно заселённое с раннего бронзового века. Здесь откопали предполагаемый дворец, монументальную Ступенчатую каменную конструкцию и тоннель Силоам VIII века до н.э., вырубленный для водоснабжения осаждённого города. Туристы могут пройти вброд по тоннелю Езекии или сухим ходом — вдоль подземной Дороги паломников эпохи Второго Храма."
    },
    highlight: {
      en: "Wade through a 2,700-year-old tunnel King Hezekiah carved to save Jerusalem",
      ru: "Пройти вброд по тоннелю, что царь Езекия вырубил 2700 лет назад"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/City_of_David_(archaeological_site)" }],
    imageFile: "City_of_David_IMG_4888.JPG"
  },
  {
    id: "jerusalem-archaeological-park",
    unesco: true,
    name: { en: "Jerusalem Archaeological Park (Davidson Center)", ru: "Иерусалимский археологический парк (Центр Дэвидсона)", he: "הפארק הארכיאולוגי בירושלים" },
    coords: [31.7753, 35.2350],
    periods: ["iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "roman",
    periodText: { en: "Iron Age II – Early Islamic", ru: "Железный век II – ранний ислам" },
    region: "jerusalem",
    access: { en: "Archaeological park with Davidson Center museum, paid entry", ru: "Археологический парк с музеем (Центр Дэвидсона), платный вход" },
    desc: {
      en: "At the foot of the Temple Mount's southern wall, this is the richest stratigraphic site in Jerusalem: the monumental Herodian stairway and gates pilgrims used to ascend to the Second Temple, Robinson's Arch from Herod's great bridge, First Temple-period walls, and a 7th–8th-century Umayyad palace complex. The Davidson Center reconstructs the Temple Mount in VR.",
      ru: "У подножия Южной стены Храмовой горы — богатейший стратиграфический объект Иерусалима: монументальная иродианская лестница и ворота, по которым паломники поднимались ко Второму Храму, арка Робинсона от колоссального моста Ирода, стены эпохи Первого Храма и омейядский дворцовый комплекс VII–VIII веков. Центр Дэвидсона предлагает VR-реконструкцию Храмовой горы."
    },
    highlight: {
      en: "The very steps pilgrims climbed to Herod's Temple — still in place after 2,000 years",
      ru: "Те самые ступени к Храму Ирода — стоят уже 2000 лет"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Jerusalem_Archaeological_Park" }],
    imageFile: "Davidson_Center_-_Jerusalem_Archaeological_Park_-_The_Western_Wall_IMG_6039.JPG"
  },
  {
    id: "ramla-white-mosque-pool",
    unesco: true,
    name: { en: "Ramla — White Mosque & Pool of Arches", ru: "Рамла — Белая мечеть и Бассейн арок", he: "רמלה — המסגד הלבן" },
    coords: [31.9275, 34.8661],
    periods: ["early-islamic"],
    mainPeriod: "early-islamic",
    periodText: { en: "Early Islamic / Umayyad–Abbasid (8th c.)", ru: "Ранний ислам / Омейяды–Аббасиды (VIII в.)" },
    region: "jerusalem",
    access: { en: "Open monuments in Ramla; free/low-cost entry", ru: "Открытые памятники в Рамле; вход бесплатный или символический" },
    desc: {
      en: "Ramla is the only city founded by Arab conquerors in the Land of Israel, established c. 715 CE by the Umayyad caliph Sulayman as capital of Jund Filastin. The White Mosque (715–720 CE) survives as an evocative ruin with its 9th-century minaret. Nearby, the underground Pool of Arches (789 CE, under Harun al-Rashid) is a breathtaking vaulted cistern you can tour by rowing boat.",
      ru: "Рамла — единственный город, основанный арабскими завоевателями в Земле Израиля, заложенный около 715 года халифом Сулейманом как столица провинции Джунд-Филастин. Белая мечеть (715–720 гг.) дошла до нас живописными руинами с минаретом IX века. Рядом — подземный Бассейн арок (789 г., при Харуне ар-Рашиде): завораживающий сводчатый резервуар, по которому можно проплыть на лодке."
    },
    highlight: {
      en: "Row a boat through an 8th-century Abbasid cistern — the only one of its kind",
      ru: "Проплыть на лодке сквозь аббасидский резервуар VIII века"
    },
    links: [
      { label: "Wikipedia — White Mosque", url: "https://en.wikipedia.org/wiki/White_Mosque,_Ramla" },
      { label: "Wikipedia — Pool of Arches", url: "https://en.wikipedia.org/wiki/Pool_of_Arches" }
    ],
    imageFile: "PikiWiki_Israel_44964_Pool_of_the_arches_in_Ramla.JPG"
  },
  {
    id: "khirbet-qeiyafa",
    name: { en: "Khirbet Qeiyafa (Elah Fortress)", ru: "Хирбет-Кейяфа (крепость Эла)", he: "חורבת קייאפה" },
    coords: [31.6964, 34.9572],
    periods: ["iron-i", "iron-ii"],
    mainPeriod: "iron-ii",
    periodText: { en: "Iron Age I–II (10th c. BCE)", ru: "Железный век I–II (X в. до н.э.)" },
    region: "judea",
    access: { en: "Open site, free, hiking trail; no facilities", ru: "Открытый памятник, бесплатно, пешеходная тропа; инфраструктуры нет" },
    desc: {
      en: "Khirbet Qeiyafa is a fortified city above the Valley of Elah — the valley where the Bible says David slew Goliath. Dating to around 1000 BCE, it is one of the earliest known Judahite administrative cities, with two gates (the biblical Sha'arayim), a massive casemate wall and public buildings. The Qeiyafa Ostracon, found in 2008, may be the earliest alphabetic Hebrew inscription.",
      ru: "Хирбет-Кейяфа — укреплённый город над Долиной Эла, где, по преданию, Давид победил Голиафа. Датируется около 1000 года до н.э. и считается одним из древнейших административных городов Иудеи: двое ворот (библейский Шаараим), массивная казематная стена и общественные постройки. В 2008 году здесь нашли Кейяфский острак — возможно, древнейшую алфавитную надпись на иврите."
    },
    highlight: {
      en: "A 3,000-year-old fortress over the valley where David fought Goliath",
      ru: "Крепость 3000-летней давности над долиной поединка Давида и Голиафа"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Khirbet_Qeiyafa" }]
  },
  {
    id: "herodium",
    name: { en: "Herodium", ru: "Иродион", he: "הרודיון" },
    coords: [31.6658, 35.2414],
    periods: ["hellenistic", "roman", "byzantine"],
    mainPeriod: "roman",
    periodText: { en: "Hellenistic – Byzantine", ru: "Эллинизм – Византия" },
    region: "west_bank",
    access: { en: "INPA National Park, paid entry", ru: "Нац. парк INPA, платный вход" },
    desc: {
      en: "Herodium is one of the ancient world's most spectacular monuments: a desert volcano-shaped mountain Herod the Great engineered between 23 and 15 BCE, filled with a fortified circular palace, baths and a royal court. In 2007 Ehud Netzer finally located Herod's carved mausoleum on the hillside. Rebels turned the palace dining room into a synagogue during the First Jewish Revolt.",
      ru: "Иродион — один из самых захватывающих памятников древнего мира: Ирод Великий буквально создал этот конусообразный холм, превратив его в укреплённый круглый дворец с банями и придворными покоями. В 2007 году здесь наконец нашли его богато украшенный мавзолей. Во время Первой иудейской войны повстанцы устроили в дворцовой столовой синагогу. С вершины открывается вид от Иерусалима до Мёртвого моря."
    },
    highlight: {
      en: "A man-made mountain hiding Herod's own tomb",
      ru: "Рукотворная гора с гробницей Ирода внутри"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Herodium" }],
    imageFile: "Herodium_fortress_edited.JPG"
  },
  {
    id: "tel-shiloh",
    name: { en: "Tel Shiloh (Shiloh)", ru: "Тель-Шило (Шило)", he: "תל שילה" },
    coords: [32.0556, 35.2895],
    periods: ["bronze-middle", "bronze-late", "iron-i", "iron-ii", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "iron-i",
    periodText: { en: "Middle Bronze Age – Early Islamic", ru: "Средний бронзовый век – ранний ислам" },
    region: "west_bank",
    access: { en: "Archaeological park with visitor centre, paid entry", ru: "Археологический парк с визит-центром, платный вход" },
    desc: {
      en: "Tel Shiloh is identified with biblical Shiloh, the central religious capital of the Israelite tribes for some 300 years before Jerusalem — home of the Tabernacle and the Ark of the Covenant. Settled from the Middle Bronze Age with continuous occupation into the Islamic period, the tell preserves monumental Canaanite walls, Iron Age storage buildings, and a Byzantine church over the presumed Tabernacle site.",
      ru: "Тель-Шило отождествляется с библейским Шило — религиозной столицей израильских колен на протяжении около 300 лет до Иерусалима, хранившей Скинию и Ковчег Завета. Заселённый ещё в среднем бронзовом веке, тель сохранил ханаанские стены, склады железного века с большими кувшинами-пифосами и византийскую церковь над предполагаемым местом Скинии."
    },
    highlight: {
      en: "Where the Ark of the Covenant rested for 300 years before Jerusalem",
      ru: "Здесь три века покоился Ковчег Завета — до возвышения Иерусалима"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Shiloh_(biblical_city)" }],
    imageFile: "Ancient_Shiloh_IMG_2924.JPG"
  },
  {
    id: "alexandrium",
    name: { en: "Alexandrium (Sartaba)", ru: "Александрион (Сартаба)", he: "אלכסנדריון" },
    coords: [32.0908, 35.4568],
    periods: ["hellenistic", "roman"],
    mainPeriod: "hellenistic",
    periodText: { en: "Hellenistic – Roman", ru: "Эллинизм – римский период" },
    region: "west_bank",
    access: { en: "Open site, ~1-hour steep hike; no facilities", ru: "Открытый объект, ~1 час крутого подъёма; инфраструктуры нет" },
    desc: {
      en: "Alexandrium crowns the jagged peak of Qarn Sartaba high above the Jordan Valley — a fortress built by the Hasmonean king Alexander Jannaeus in the 1st century BCE and expanded by Herod. This near-inaccessible stronghold served as a royal prison and a beacon station for the lunar calendar. Rome destroyed it in 57 BCE; recent digs revealed Doric columns, a mikveh and five building phases.",
      ru: "Александрион венчает острую вершину Карн-Сартаба высоко над Иорданской долиной — крепость Хасмонеев I века до н.э., позже расширенная Иродом. Почти неприступная твердыня служила царской тюрьмой и сигнальной станцией лунного календаря. Рим разрушил её в 57 году до н.э.; раскопки обнаружили дорические колонны, микве и пять строительных фаз."
    },
    highlight: {
      en: "A Hasmonean eagle's nest 728 m above the Jordan Valley, reachable only on foot",
      ru: "Хасмонейское орлиное гнездо над Иорданской долиной — только пешком"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Alexandrium" }],
    imageFile: "Pearle_Alexandrium.jpg"
  },
  {
    id: "sebastia-samaria",
    name: { en: "Sebastia / Samaria", ru: "Себастия / Самария", he: "סבסטיה" },
    coords: [32.2764, 35.1950],
    periods: ["bronze-early", "bronze-middle", "bronze-late", "iron-i", "iron-ii", "babylonian-persian", "hellenistic", "roman", "byzantine", "early-islamic"],
    mainPeriod: "iron-ii",
    periodText: { en: "Early Bronze Age – Early Islamic", ru: "Ранний бронзовый век – ранний ислам" },
    region: "west_bank",
    access: { en: "Archaeological park (Shomron), via Sebastia village", ru: "Археологический парк (Шомрон), въезд через деревню Себастия" },
    desc: {
      en: "Sebastia was the capital of the northern Kingdom of Israel for two centuries, founded by King Omri around 880 BCE and later expanded by Herod, who renamed it for Augustus. Visible today: Herod's colonnaded street, an Israelite palace famed for its ivory carvings, a Roman theatre, city walls and a Crusader cathedral over a Byzantine church — nine civilisations on one hilltop.",
      ru: "Себастия два века была столицей Северного царства Израиля — царь Омри основал её около 880 года до н.э., а затем Ирод переименовал и пышно перестроил в честь Августа. Сегодня видны римская колоннадная улица, израильский дворец, прославленный резными пластинами из слоновой кости, театр, городские стены и церковь крестоносцев поверх византийской базилики. Девять цивилизаций — на одном холме."
    },
    highlight: {
      en: "Nine layers of civilisation on the hill where Israel's kings ruled",
      ru: "Девять слоёв истории на холме царей Израильского царства"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Samaria_(ancient_city)" }]
  },
  {
    id: "susya",
    name: { en: "Susya (ancient synagogue)", ru: "Сусия (древняя синагога)", he: "סוסיא" },
    coords: [31.3919, 35.1122],
    periods: ["roman", "byzantine", "early-islamic"],
    mainPeriod: "byzantine",
    periodText: { en: "Roman – Early Islamic (4th–9th c.)", ru: "Рим – ранний ислам (IV–IX вв.)" },
    region: "west_bank",
    access: { en: "Heritage site with visitor centre, paid entry; closed Saturdays", ru: "Объект наследия с визит-центром, платный вход; закрыт по субботам" },
    desc: {
      en: "Susya is a remarkably well-preserved ancient Jewish village in the southern Hebron Hills, thriving from the 4th to the 9th century CE. At its heart stands a large synagogue with beautiful mosaic floors and carved columns, converted to a mosque after the Arab conquest. Cave dwellings, rock-cut olive presses and a ritual bath give an unusually complete picture of rural Jewish life in Late Antiquity.",
      ru: "Сусия — на удивление хорошо сохранившаяся еврейская деревня в Хевронских горах, процветавшая с IV по IX век н.э. В её центре стоит большая синагога с мозаичными полами и резными колоннами, после арабского завоевания превращённая в мечеть. Пещерные жилища, скальные маслодавильни и миква дают редкую по полноте картину сельской жизни евреев поздней античности."
    },
    highlight: {
      en: "A complete Late Antique Jewish village, mosaics still on the floor",
      ru: "Целая еврейская деревня поздней античности — мозаики до сих пор на месте"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Susya" }],
    imageFile: "058_Dafna_Tal_Susya_SOUTH_OF_HEBRON_IMOT_(11965644446).jpg"
  },
  {
    id: "eshtemoa-synagogue",
    name: { en: "Eshtemoa Synagogue", ru: "Синагога Эштемоа", he: "בית הכנסת באשתמוע" },
    coords: [31.4008, 35.0671],
    periods: ["roman", "byzantine"],
    mainPeriod: "byzantine",
    periodText: { en: "Late Roman – Byzantine (4th–7th c.)", ru: "Поздний Рим – Византия (IV–VII вв.)" },
    region: "west_bank",
    access: { en: "Open to visitors in as-Samu; site prepared by Israel Antiquities Authority", ru: "Открыт для посещения в ас-Саму; подготовлен Управлением древностей Израиля" },
    desc: {
      en: "The Eshtemoa Synagogue, found in 1934 in the town of as-Samu in the southern Hebron Hills, is one of Israel's most significant ancient synagogues. The massive rectangular 'broadhouse' (13 × 21 m) dates to the 4th–5th century CE and retains benches along three walls, mosaic paving and lintels carved with seven-branched menorahs.",
      ru: "Синагога Эштемоа, обнаруженная в 1934 году в городке ас-Саму на юге Хевронских гор, — одна из важнейших древних синагог Израиля. Огромное прямоугольное здание «широкого дома» (13 × 21 м) датируется IV–V веком н.э.; сохранились скамьи вдоль трёх стен, мозаичный пол и притолоки с семисвечниками-менорами."
    },
    highlight: {
      en: "One of Israel's largest ancient synagogues, menorah lintels still in place",
      ru: "Одна из крупнейших древних синагог Израиля с менорами на притолоках"
    },
    links: [{ label: "Wikipedia (EN)", url: "https://en.wikipedia.org/wiki/Eshtemoa_synagogue" }]
  }
];
