// VILLAE ROMANAE — archaeological periods of the Land of Israel / Southern Levant
// From the Stone Age to the eve of the Crusades (1099 CE).
// Chronology follows the conventional "museum" scheme used by the Israel
// Antiquities Authority and the Israel Museum; early dates per radiocarbon
// consensus (Natufian c. 12,500–9,500 BCE, etc.).
//
// Each period:
//   id        — stable slug, shared with ARCH_SITES.periods / .mainPeriod
//   name      — { en, ru, he }
//   start/end — numeric year for ordering (negative = BCE; "years ago" for Paleolithic
//               are expressed as large negative years, e.g. -1400000)
//   dateText  — human-readable span { en, ru }
//   color     — category color (used for timeline bands and map markers)
//   cultures  — peoples / powers / cultures { en:[…], ru:[…] }
//   blurb     — 2–4 sentences { en, ru }

const PERIODS = [
  {
    id: "paleolithic",
    name: { en: "Paleolithic", ru: "Палеолит", he: "התקופה הפלאוליתית" },
    start: -1400000, end: -20000,
    dateText: { en: "c. 1.4 Ma – 20,000 BP", ru: "≈1,4 млн – 20 000 лет назад" },
    color: "#8c8a86",
    cultures: {
      en: ["Homo erectus", "Neanderthals", "early Homo sapiens", "Acheulean & Mousterian"],
      ru: ["Homo erectus", "неандертальцы", "ранние Homo sapiens", "ашёль и мустье"]
    },
    blurb: {
      en: "The longest chapter by far: hand-axe hunters along the Jordan Rift. ‘Ubeidiya holds some of the oldest human traces outside Africa (~1.5 Ma), and the Mount Carmel caves preserved both Neanderthals and some of the earliest modern humans in Eurasia.",
      ru: "Самая длинная глава: охотники с ручными рубилами вдоль Иорданского разлома. Стоянка Убейдия хранит одни из древнейших следов человека за пределами Африки (~1,5 млн лет), а пещеры горы Кармель сберегли и неандертальцев, и одних из самых ранних современных людей в Евразии."
    }
  },
  {
    id: "epipaleolithic",
    name: { en: "Epipaleolithic — Natufian", ru: "Эпипалеолит — натуфийская культура", he: "התרבות הנטופית" },
    start: -20000, end: -9500,
    dateText: { en: "c. 20,000 – 9,500 BCE", ru: "≈20 000 – 9 500 гг. до н.э." },
    color: "#5aa0a8",
    cultures: {
      en: ["Natufian culture", "Kebaran", "sedentary foragers"],
      ru: ["натуфийская культура", "кебаран", "осёдлые собиратели"]
    },
    blurb: {
      en: "Before farming, the Natufians settled down: round semi-subterranean houses, sickles glossed from cutting wild cereals, and the world's first cemeteries with shell-and-bone ornaments. The dog was domesticated here; one famous Natufian grave cradles a woman with a puppy.",
      ru: "Ещё до земледелия натуфийцы перешли к осёдлости: круглые полуземлянки, серпы с характерным блеском от срезания дикорастущих злаков и первые в мире кладбища с украшениями из раковин и кости. Здесь приручили собаку — в одном знаменитом натуфийском погребении женщина обнимает щенка."
    }
  },
  {
    id: "neolithic",
    name: { en: "Neolithic", ru: "Неолит", he: "התקופה הנאוליתית" },
    start: -9500, end: -4500,
    dateText: { en: "c. 9,500 – 4,500 BCE", ru: "≈9 500 – 4 500 гг. до н.э." },
    color: "#4fa45c",
    cultures: {
      en: ["Pre-Pottery Neolithic A/B", "Pottery Neolithic", "Yarmukian culture"],
      ru: ["докерамический неолит A/B", "керамический неолит", "ярмукская культура"]
    },
    blurb: {
      en: "The Neolithic Revolution: wild grains became crops, sheep and goats became herds, and villages swelled into the first towns. Plastered skulls and clay figurines hint at ritual; at Sha'ar HaGolan the Yarmukian potters left thousands of pebble figurines and a planned street grid.",
      ru: "Неолитическая революция: дикие злаки стали посевами, овцы и козы — стадами, а деревни разрослись в первые «протогорода». Оштукатуренные черепа и глиняные фигурки намекают на культ; в Шаар-ха-Голане ярмукские гончары оставили тысячи галечных фигурок и спланированную сеть улиц."
    }
  },
  {
    id: "chalcolithic",
    name: { en: "Chalcolithic", ru: "Халколит (медно-каменный век)", he: "התקופה הכלקוליתית" },
    start: -4500, end: -3600,
    dateText: { en: "c. 4,500 – 3,600 BCE", ru: "≈4 500 – 3 600 гг. до н.э." },
    color: "#94b53d",
    cultures: {
      en: ["Ghassulian culture", "first metallurgy"],
      ru: ["гассульская культура", "первая металлургия"]
    },
    blurb: {
      en: "Copper changed everything. Ghassulian villagers cast astonishing copper sceptres and crowns by the lost-wax method — 400+ of them hidden in the Nahal Mishmar hoard — and built a desert shrine above Ein Gedi. The dead were now tucked into ceramic ossuaries shaped like houses.",
      ru: "Медь изменила всё. Гассульцы отливали по выплавляемой модели поразительные медные скипетры и «короны» — больше 400 штук спрятано в кладе Нахаль-Мишмар — и возвели святилище в пустыне над Эйн-Геди. Покойников теперь укладывали в керамические оссуарии в форме домиков."
    }
  },
  {
    id: "bronze-early",
    name: { en: "Early Bronze Age", ru: "Ранний бронзовый век", he: "תקופת הברונזה הקדומה" },
    start: -3600, end: -2000,
    dateText: { en: "c. 3,600 – 2,000 BCE", ru: "≈3 600 – 2 000 гг. до н.э." },
    color: "#d3b02c",
    cultures: {
      en: ["Canaanite city-states", "Egyptian trade"],
      ru: ["ханаанские города", "торговля с Египтом"]
    },
    blurb: {
      en: "Canaan's first urban age: walled towns like Arad, Megiddo and Bet Yerah with temples, palaces and granaries, trading wine and oil down to Egypt. Around 2300 BCE many of these cities collapsed, and people scattered back to the countryside.",
      ru: "Первая городская эпоха Ханаана: обнесённые стенами города — Арад, Мегиддо, Бейт-Йерах — с храмами, дворцами и зернохранилищами, торговавшие вином и маслом с Египтом. Около 2300 г. до н.э. многие из этих городов рухнули, и люди вернулись в сёла."
    }
  },
  {
    id: "bronze-middle",
    name: { en: "Middle Bronze Age", ru: "Средний бронзовый век", he: "תקופת הברונזה התיכונה" },
    start: -2000, end: -1550,
    dateText: { en: "c. 2,000 – 1,550 BCE", ru: "≈2 000 – 1 550 гг. до н.э." },
    color: "#e79626",
    cultures: {
      en: ["Canaanite city-states", "Amorites", "Hyksos"],
      ru: ["ханаанские города-государства", "амореи", "гиксосы"]
    },
    blurb: {
      en: "The golden age of Canaanite cities. Massive earthen ramparts, monumental mud-brick gates (Dan, Ashkelon, Hazor) and rich tombs mark a prosperous, fortified land — the world of the patriarchal narratives. Canaanite dynasts, the Hyksos, even ruled Egypt for a time.",
      ru: "Золотой век ханаанских городов. Громадные земляные валы, монументальные сырцовые ворота (Дан, Ашкелон, Хацор) и богатые гробницы — признаки процветающей, укреплённой страны, мира патриархальных преданий. Ханаанские владыки-гиксосы какое-то время правили даже Египтом."
    }
  },
  {
    id: "bronze-late",
    name: { en: "Late Bronze Age", ru: "Поздний бронзовый век", he: "תקופת הברונזה המאוחרת" },
    start: -1550, end: -1200,
    dateText: { en: "c. 1,550 – 1,200 BCE", ru: "≈1 550 – 1 200 гг. до н.э." },
    color: "#e2702a",
    cultures: {
      en: ["Canaan under Egyptian rule", "Amarna age"],
      ru: ["Ханаан под властью Египта", "Амарнская эпоха"]
    },
    blurb: {
      en: "Canaan became a province of the Egyptian New Kingdom, its squabbling city-kings writing to Pharaoh in the Amarna letters. International trade peaked — then around 1200 BCE the whole eastern Mediterranean system collapsed, and the Sea Peoples appear on the coast.",
      ru: "Ханаан стал провинцией египетского Нового царства, а его враждующие города-цари писали фараону клинописные «амарнские письма». Международная торговля достигла пика — а затем, около 1200 г. до н.э., вся система восточного Средиземноморья рухнула, и на побережье появляются «народы моря»."
    }
  },
  {
    id: "iron-i",
    name: { en: "Iron Age I", ru: "Железный век I", he: "תקופת הברזל א׳" },
    start: -1200, end: -1000,
    dateText: { en: "c. 1,200 – 1,000 BCE", ru: "≈1 200 – 1 000 гг. до н.э." },
    color: "#d44f2f",
    cultures: {
      en: ["Philistines", "early Israelites", "Phoenicians", "Canaanites"],
      ru: ["филистимляне", "ранние израильтяне", "финикийцы", "ханаанеи"]
    },
    blurb: {
      en: "After the collapse, a patchwork: Philistines build five cities on the coast with Aegean-style pottery, new highland villages (the early Israelites) spread through the hills, and Phoenician ports thrive in the north. The age of Judges and the first kings.",
      ru: "После коллапса — лоскутный мир: филистимляне строят на побережье пять городов с керамикой эгейского типа, в горах множатся новые поселения (ранние израильтяне), а на севере процветают финикийские порты. Эпоха Судей и первых царей."
    }
  },
  {
    id: "iron-ii",
    name: { en: "Iron Age II", ru: "Железный век II", he: "תקופת הברזל ב׳" },
    start: -1000, end: -586,
    dateText: { en: "c. 1,000 – 586 BCE", ru: "≈1 000 – 586 гг. до н.э." },
    color: "#c0392b",
    cultures: {
      en: ["Kingdoms of Israel & Judah", "Assyrians", "Babylonians"],
      ru: ["царства Израиль и Иудея", "ассирийцы", "вавилоняне"]
    },
    blurb: {
      en: "The age of the biblical kingdoms: Israel ruling from Samaria, Judah from Jerusalem, with monumental gates, water tunnels and royal storehouses. Assyria crushed Israel in 722 BCE; Babylon destroyed Jerusalem and the First Temple in 586 BCE and exiled Judah.",
      ru: "Эпоха библейских царств: Израиль правит из Самарии, Иудея — из Иерусалима, повсюду монументальные ворота, водяные туннели и царские склады. В 722 г. до н.э. Ассирия сокрушила Израиль; в 586 г. до н.э. Вавилон разрушил Иерусалим и Первый Храм и угнал Иудею в плен."
    }
  },
  {
    id: "babylonian-persian",
    name: { en: "Babylonian & Persian", ru: "Вавилонский и Персидский период", he: "התקופה הבבלית והפרסית" },
    start: -586, end: -332,
    dateText: { en: "586 – 332 BCE", ru: "586 – 332 гг. до н.э." },
    color: "#b03b66",
    cultures: {
      en: ["Neo-Babylonian Empire", "Achaemenid Persia", "province of Yehud"],
      ru: ["Нововавилонское царство", "Ахеменидская Персия", "провинция Йехуд"]
    },
    blurb: {
      en: "Half a century of Babylonian exile, then Cyrus of Persia let the Judeans return and rebuild the Temple (the Second Temple). Tiny Yehud lived under Persian governors; on the coast, Phoenician Dor and Greek traders flourished.",
      ru: "Полвека вавилонского плена — а затем персидский Кир разрешил иудеям вернуться и отстроить Храм (Второй Храм). Крошечная провинция Йехуд жила под персидскими наместниками; на побережье процветали финикийский Дор и греческие торговцы."
    }
  },
  {
    id: "hellenistic",
    name: { en: "Hellenistic", ru: "Эллинистический период", he: "התקופה ההלניסטית" },
    start: -332, end: -37,
    dateText: { en: "332 – 37 BCE", ru: "332 – 37 гг. до н.э." },
    color: "#8e4593",
    cultures: {
      en: ["Alexander & Diadochi", "Ptolemies", "Seleucids", "Hasmoneans", "Nabataeans"],
      ru: ["Александр и диадохи", "Птолемеи", "Селевкиды", "Хасмонеи", "набатеи"]
    },
    blurb: {
      en: "Alexander swept through in 332 BCE and Greek culture poured in. After the Maccabean Revolt against the Seleucids, the Hasmoneans carved out an independent Jewish kingdom, while Nabataean caravans grew rich on the incense road through the Negev.",
      ru: "В 332 г. до н.э. сюда ворвался Александр, и хлынула греческая культура. После восстания Маккавеев против Селевкидов Хасмонеи отвоевали независимое иудейское царство, а набатейские караваны богатели на «дороге благовоний» через Негев."
    }
  },
  {
    id: "roman",
    name: { en: "Roman Period", ru: "Римский период", he: "התקופה הרומית" },
    start: -37, end: 324,
    dateText: { en: "37 BCE – 324 CE", ru: "37 г. до н.э. – 324 г. н.э." },
    color: "#6d4aa7",
    cultures: {
      en: ["Herodian dynasty", "Roman Empire", "Judaea / Syria Palaestina"],
      ru: ["династия Ирода", "Римская империя", "провинция Иудея / Сирия Палестинская"]
    },
    blurb: {
      en: "Rome's client-king Herod the Great reshaped the land with impossible engineering — Caesarea's harbor, Masada, the Temple Mount. Christianity was born here; two catastrophic revolts followed, ending with the Second Temple's destruction (70 CE) and the crushing of Bar Kokhba (132–135 CE).",
      ru: "Римский царь-клиент Ирод Великий перекроил страну немыслимой инженерией — гавань Кейсарии, Масада, Храмовая гора. Здесь родилось христианство; за этим последовали два катастрофических восстания, завершившиеся разрушением Второго Храма (70 г. н.э.) и подавлением Бар-Кохбы (132–135 гг.)."
    }
  },
  {
    id: "byzantine",
    name: { en: "Byzantine Period", ru: "Византийский период", he: "התקופה הביזנטית" },
    start: 324, end: 638,
    dateText: { en: "324 – 638 CE", ru: "324 – 638 гг. н.э." },
    color: "#3f6cc4",
    cultures: {
      en: ["Eastern Roman (Byzantine) Empire", "Christian Holy Land"],
      ru: ["Восточная Римская (Византийская) империя", "христианская Святая Земля"]
    },
    blurb: {
      en: "The Holy Land of Christendom. Pilgrims and imperial money raised churches and monasteries everywhere, floors blazing with mosaics; even the Negev bloomed with wine-exporting towns like Shivta and Avdat. The population reached its ancient peak.",
      ru: "Святая Земля христианского мира. Паломники и имперские деньги возводили повсюду церкви и монастыри с пылающими мозаичными полами; даже Негев расцвёл городами-экспортёрами вина — Шивтой и Авдатом. Население достигло своего античного максимума."
    }
  },
  {
    id: "early-islamic",
    name: { en: "Early Islamic", ru: "Ранний исламский период", he: "התקופה המוסלמית הקדומה" },
    start: 638, end: 1099,
    dateText: { en: "638 – 1099 CE", ru: "638 – 1099 гг. н.э." },
    color: "#21998c",
    cultures: {
      en: ["Umayyads", "Abbasids", "Fatimids"],
      ru: ["Омейяды", "Аббасиды", "Фатимиды"]
    },
    blurb: {
      en: "The Arab conquest of 638 opened a new world. The Umayyads built the Dome of the Rock and desert estates; the Abbasids founded Ramla as the district capital with its great cisterns. Trade and learning flourished until the Crusaders stormed in in 1099.",
      ru: "Арабское завоевание 638 года открыло новый мир. Омейяды возвели Купол Скалы и загородные дворцы-усадьбы; Аббасиды основали Рамлу как столицу округа с её огромными цистернами. Торговля и науки процветали, пока в 1099 году не ворвались крестоносцы."
    }
  }
];

// horizon marker — where this timeline deliberately stops
const CRUSADER_HORIZON = {
  name: { en: "Crusaders", ru: "Крестоносцы", he: "התקופה הצלבנית" },
  dateText: { en: "from 1099 CE", ru: "с 1099 г. н.э." },
  note: {
    en: "The Crusader conquest of Jerusalem in 1099 closes this timeline.",
    ru: "Здесь таймлайн заканчивается: в 1099 году крестоносцы взяли Иерусалим."
  }
};

const PERIOD_BY_ID = Object.fromEntries(PERIODS.map(p => [p.id, p]));
const PERIOD_COLOR = id => (PERIOD_BY_ID[id] ? PERIOD_BY_ID[id].color : "#888");
const PERIOD_INDEX = Object.fromEntries(PERIODS.map((p, i) => [p.id, i]));
