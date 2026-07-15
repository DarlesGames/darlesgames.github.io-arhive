/*
  ОСНОВНОЙ ФАЙЛ ДЛЯ ДОБАВЛЕНИЯ И РЕДАКТИРОВАНИЯ ПРОЕКТОВ.

  categories:
  html5       — HTML5-игры
  web-product — интерактивные веб-продукты
  mechanic    — игровые механики и прототипы
  desktop     — игры для ПК
  case        — кейсы и разборы решений

  Все публичные тексты задаются на двух языках:
  { ru: "Русский текст", en: "English text" }

  Обложка необязательна. Укажите путь в поле cover, например:
  cover: "assets/projects/tavern-below.webp"

  Если cover: "", карточка использует стандартную фирменную CSS-обложку.
  Для ссылки укажите реальный URL. Если links: [], будет показано сообщение о подготовке ссылок.
*/

window.DARLES_PROJECTS = [
  {
    id: "tavern-below",
    title: { ru: "Таверна: Этажом ниже", en: "Tavern: The Floor Below" },
    category: "html5",
    type: { ru: "Нарративная игра · крафт", en: "Narrative crafting game" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: true,
    accent: "violet",
    cover: "",
    short: {
      ru: "Мрачная фэнтезийная HTML5-игра об алхимике, который варит потусторонние зелья для проклятых душ.",
      en: "A dark fantasy HTML5 game about an alchemist who brews otherworldly potions for cursed souls."
    },
    details: {
      ru: "Авторский проект Darles Games с последовательным созданием зелий, системой кармы, персонажами, книгой рецептов, прогрессией и несколькими вариантами финала.",
      en: "An original Darles Games project featuring step-by-step potion crafting, a karma system, characters, a recipe book, progression and several ending variations."
    },
    solutions: {
      ru: [
        "Небанальная тема изготовления потусторонних зелий вместо обычной еды",
        "Сочетание нарратива, рецептов и системной прогрессии",
        "Адаптация полного игрового цикла под браузерный формат"
      ],
      en: [
        "An unusual focus on otherworldly potions instead of conventional food crafting",
        "A combination of narrative, recipes and systemic progression",
        "A complete gameplay loop adapted to the browser format"
      ]
    },
    stack: ["Construct 3", "HTML5", "Game Design", "Platform SDK", "Monetization"],
    links: []
  },
  {
    id: "quadropuzzle",
    title: { ru: "КвадроПаззл", en: "QuadroPuzzle" },
    category: "html5",
    type: { ru: "Головоломка", en: "Puzzle" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: true,
    accent: "green",
    cover: "",
    short: {
      ru: "Браузерная головоломка с перестановкой фрагментов, разными размерами поля, помощниками и системой прогрессии.",
      en: "A browser puzzle game with tile swapping, multiple board sizes, assist tools and progression."
    },
    details: {
      ru: "Игрок меняет местами элементы и восстанавливает изображение. Проект включает сетки разной сложности, вспомогательные функции, скины, таблицу лидеров и rewarded-рекламу.",
      en: "Players swap tiles to restore an image. The project includes grids of varying difficulty, assist features, skins, a leaderboard and rewarded ads."
    },
    solutions: {
      ru: [
        "Масштабируемая система полей от простых до сложных",
        "Помощники для снижения порога входа",
        "Прогрессия и монетизация без разрушения основного цикла"
      ],
      en: [
        "A scalable board system ranging from simple to difficult",
        "Assist tools that reduce the entry barrier",
        "Progression and monetization without disrupting the core loop"
      ]
    },
    stack: ["Construct 3", "HTML5", "Puzzle Systems", "Leaderboards", "Rewarded Ads"],
    links: []
  },
  {
    id: "neon-plus",
    title: { ru: "Неон Плюс", en: "Neon Plus" },
    category: "html5",
    type: { ru: "Аркадный шутер", en: "Arcade shooter" },
    status: "released",
    statusLabel: { ru: "Релиз с game jam", en: "Game jam release" },
    featured: true,
    accent: "cyan",
    cover: "",
    short: {
      ru: "Неоновый аркадный шутер с цветовой механикой, тремя режимами огня и двадцатью уровнями.",
      en: "A neon arcade shooter with a color-matching mechanic, three firing modes and twenty levels."
    },
    details: {
      ru: "Проект создан за три дня для game jam. Основной акцент сделан на быстром игровом цикле, читаемом визуальном языке и управляемом росте сложности.",
      en: "The project was created in three days for a game jam. It focuses on a fast gameplay loop, clear visual language and controlled difficulty growth."
    },
    solutions: {
      ru: [
        "Feature cutting для выпуска завершённой игры за три дня",
        "Цветовое соответствие как основа боя",
        "Три режима стрельбы внутри простого управления"
      ],
      en: [
        "Feature cutting to ship a complete game in three days",
        "Color matching used as the foundation of combat",
        "Three firing modes within a simple control scheme"
      ]
    },
    stack: ["Construct 3", "HTML5", "Rapid Prototyping", "Arcade Balance"],
    links: []
  },
  {
    id: "winter-puzzle",
    title: { ru: "WinterPuzzle", en: "WinterPuzzle" },
    category: "html5",
    type: { ru: "Казуальная головоломка", en: "Casual puzzle" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "blue",
    cover: "",
    short: {
      ru: "Казуальная браузерная головоломка с зимней тематикой и короткими игровыми сессиями.",
      en: "A casual winter-themed browser puzzle designed for short play sessions."
    },
    details: {
      ru: "Компактная игра, рассчитанная на быстрый вход и понятную цель без длительного обучения.",
      en: "A compact game designed around immediate onboarding and a clear objective without lengthy tutorials."
    },
    solutions: {
      ru: ["Короткая сессия", "Понятные правила", "Браузерная адаптация"],
      en: ["Short sessions", "Clear rules", "Browser adaptation"]
    },
    stack: ["Construct 3", "HTML5", "Casual UX"],
    links: []
  },
  {
    id: "skok-otskok",
    title: { ru: "Скок-Отскок", en: "Skok-Otskok" },
    category: "html5",
    type: { ru: "Аркада", en: "Arcade" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "orange",
    cover: "",
    short: {
      ru: "Компактная аркадная HTML5-игра, построенная вокруг точного тайминга и повторяемого цикла попыток.",
      en: "A compact HTML5 arcade game built around precise timing and a replayable attempt loop."
    },
    details: {
      ru: "Проект демонстрирует работу с простым core loop, постепенным усложнением и быстрым перезапуском.",
      en: "The project demonstrates a focused core loop, gradual difficulty growth and instant restarts."
    },
    solutions: {
      ru: ["Один основной навык", "Быстрый рестарт", "Рост сложности без перегрузки интерфейса"],
      en: ["One central skill", "Fast restart", "Difficulty growth without interface overload"]
    },
    stack: ["Construct 3", "HTML5", "Core Loop", "Difficulty Curve"],
    links: []
  },
  {
    id: "skylink",
    title: { ru: "СкайЛинк", en: "SkyLink" },
    category: "html5",
    type: { ru: "Веб-игра", en: "Web game" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "violet",
    cover: "",
    short: {
      ru: "Опубликованная веб-игра Darles Games с адаптацией под браузерные игровые платформы.",
      en: "A released Darles Games web game adapted for browser gaming platforms."
    },
    details: {
      ru: "Проект входит в линейку самостоятельных HTML5-релизов студии и показывает полный цикл разработки и публикации.",
      en: "Part of the studio's independent HTML5 release line, demonstrating the full development and publishing cycle."
    },
    solutions: {
      ru: ["Полный цикл соло-разработки", "Платформенная публикация", "Поддержка браузерного формата"],
      en: ["Complete solo development cycle", "Platform publishing", "Browser format support"]
    },
    stack: ["Construct 3", "HTML5", "Platform Publishing"],
    links: []
  },
  {
    id: "snitch-catchers",
    title: { ru: "Ловцы снитчей", en: "Snitch Catchers" },
    category: "html5",
    type: { ru: "Казуальная аркада", en: "Casual arcade" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "gold",
    cover: "",
    short: {
      ru: "Казуальная браузерная аркада с простой целью, сбором объектов и короткими сессиями.",
      en: "A casual browser arcade game with a simple objective, collectible objects and short sessions."
    },
    details: {
      ru: "Проект ориентирован на быстрое понимание правил и повторные попытки без сложного обучения.",
      en: "The project is designed for immediate rule comprehension and repeated attempts without complex onboarding."
    },
    solutions: {
      ru: ["Минимальный порог входа", "Чёткая цель", "Короткие игровые сессии"],
      en: ["Low entry barrier", "Clear objective", "Short gameplay sessions"]
    },
    stack: ["Construct 3", "HTML5", "Casual Game Design"],
    links: []
  },
  {
    id: "spelltris",
    title: { ru: "Spelltris", en: "Spelltris" },
    category: "html5",
    type: { ru: "Головоломка · заклинания", en: "Puzzle · spells" },
    status: "development",
    statusLabel: { ru: "В разработке", en: "In development" },
    featured: true,
    accent: "magic",
    cover: "",
    short: {
      ru: "Портретная HTML5-головоломка, объединяющая падающие фигуры, заклинания, таланты и систему маны.",
      en: "A portrait HTML5 puzzle combining falling pieces, spells, talents and a mana system."
    },
    details: {
      ru: "Проект развивает классическую механику через активные способности, свитки, уровни, прогрессию и адаптивный интерфейс для desktop и mobile.",
      en: "The project expands a classic puzzle mechanic with active abilities, scrolls, levels, progression and an adaptive desktop/mobile interface."
    },
    solutions: {
      ru: [
        "Связь классической puzzle-механики с системой заклинаний",
        "Адаптивный UI 720×1280 для разных экранов",
        "Локальные и облачные сохранения, SDK и рекламные сценарии"
      ],
      en: [
        "A classic puzzle mechanic connected to a spell system",
        "Adaptive 720×1280 UI for different screens",
        "Local and cloud saves, platform SDK and advertising scenarios"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Vite", "Yandex SDK", "LocalStorage"],
    links: []
  },
  {
    id: "astro",
    title: { ru: "Astro", en: "Astro" },
    category: "html5",
    type: { ru: "Аркадный шутер", en: "Arcade shooter" },
    status: "development",
    statusLabel: { ru: "В разработке", en: "In development" },
    featured: true,
    accent: "space",
    cover: "",
    short: {
      ru: "Космический HTML5-шутер с бесконечной прогрессией, боссами, кораблями, валютой и платформенными сервисами.",
      en: "A space HTML5 shooter with endless progression, bosses, ships, currency and platform services."
    },
    details: {
      ru: "Аркадная игра, вдохновлённая Galaxian и Galaga. Система включает прочность корабля, девять типов боссов, разные виды оружия, выбор кораблей и адаптацию под игровые платформы.",
      en: "An arcade game inspired by Galaxian and Galaga. Its systems include ship durability, nine boss types, multiple weapons, ship selection and adaptation for gaming platforms."
    },
    solutions: {
      ru: [
        "Управляемая сложность первых уровней и рост динамики",
        "Корректная пауза до, во время и после рекламы",
        "Адаптивный интерфейс и тестирование разных устройств"
      ],
      en: [
        "Controlled early-level difficulty with increasing intensity",
        "Reliable pause behavior before, during and after advertising",
        "Adaptive interface and testing across different devices"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Yandex SDK", "Ads", "Leaderboards"],
    links: []
  },
  {
    id: "yandex-template",
    title: { ru: "Шаблон HTML5-игры для платформ", en: "HTML5 Game Platform Template" },
    category: "case",
    type: { ru: "Техническое решение", en: "Technical solution" },
    status: "internal",
    statusLabel: { ru: "Внутреннее решение", en: "Internal solution" },
    featured: true,
    accent: "green",
    cover: "",
    short: {
      ru: "Переиспользуемая основа для портретных браузерных игр с SDK, рекламой, сохранениями и локальным fallback-режимом.",
      en: "A reusable foundation for portrait browser games with platform SDK, advertising, saves and a local fallback mode."
    },
    details: {
      ru: "Шаблон сокращает повторную техническую работу при выпуске новых игр. В него вынесены инициализация платформы, пауза, звук, реклама, облачные и локальные сохранения, лидерборды и адаптивный UI.",
      en: "The template reduces repeated technical work when releasing new games. It centralizes platform initialization, pause behavior, audio, advertising, cloud and local saves, leaderboards and adaptive UI."
    },
    solutions: {
      ru: [
        "Единый SDK-адаптер и работа без платформы",
        "Предсказуемые сценарии паузы и рекламы",
        "Повторное использование между новыми HTML5-проектами"
      ],
      en: [
        "A unified SDK adapter with an offline/local mode",
        "Predictable pause and advertising scenarios",
        "Reuse across new HTML5 projects"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Vite", "SDK Adapter", "Git"],
    links: []
  }
];
