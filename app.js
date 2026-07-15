(() => {
  "use strict";

  const language = window.DARLES_LANGUAGE === "ru" ? "ru" : "en";
  const locale = language === "ru" ? "ru-RU" : "en-US";
  const projects = Array.isArray(window.DARLES_PROJECTS) ? window.DARLES_PROJECTS : [];

  const translations = {
    en: {
      skipProjects: "Skip to projects",
      mainSiteAria: "Go to the Darles Games main website",
      logoAlt: "Darles Games logo",
      openMenu: "Open menu",
      mainNavigationAria: "Main navigation",
      navLibrary: "Library",
      navProjects: "Projects",
      navOrder: "Order",
      heroKicker: "Darles Games library",
      heroTitle: "Games, interactive web-products and",
      heroTitleAccent: "mechanics",
      heroLead: "A public showcase of released projects, demos, prototypes and technical solutions by the studio, with descriptions, materials and links to playable versions.",
      viewProjects: "View projects",
      discussOrder: "Discuss an order",
      libraryContentsAria: "Library contents",
      heroPointReleases: "Releases and demos",
      heroPointReleasesText: "finished games and playable builds",
      heroPointMechanics: "Mechanics",
      heroPointMechanicsText: "prototypes and gameplay systems",
      heroPointSolutions: "Solutions",
      heroPointSolutionsText: "interactive web products",
      heroImageAlt: "A magical sphere with a gamepad and digital code",
      libraryKicker: "Project library",
      directionsTitle: "Directions and formats",
      directionsLead: "Released games, demos, interactive products, mechanic prototypes and documented Darles Games solutions.",
      statusMain: "Main section",
      statusGrowing: "Section in development",
      statusSoon: "Coming soon",
      statusLater: "Later",
      statusPreparing: "In preparation",
      directionHtml5Title: "HTML5 games",
      directionHtml5Text: "Browser games for web portals and gaming platforms: releases, demos, prototypes and technical notes.",
      directionWebTitle: "Interactive web products",
      directionWebText: "Tests, quizzes, invitations, greetings, surveys, mini-games and unconventional promotional pages.",
      directionMechanicsTitle: "Gameplay mechanics",
      directionMechanicsText: "Mechanic prototypes, gameplay systems, staff training and gamified digital products.",
      directionDesktopTitle: "PC games",
      directionDesktopText: "Larger original projects for desktop platforms.",
      directionCasesTitle: "Cases and solutions",
      directionCasesText: "Detailed materials about project goals, implementation, technical decisions and results.",
      openProjects: "Open projects",
      openSection: "Open section",
      catalogKicker: "Catalog",
      projectsTitle: "Projects and development work",
      projectsLead: "Games, demos, interactive products and solutions with descriptions, materials and publication links.",
      filtersAria: "Project filters",
      filterAll: "All",
      filterHtml5: "HTML5 games",
      filterWeb: "Web products",
      filterMechanics: "Mechanics",
      filterDesktop: "PC games",
      filterCases: "Cases",
      searchProjects: "Search projects",
      searchPlaceholder: "Title, genre, technology…",
      emptyTitle: "Materials for this section are being prepared",
      emptyText: "This section will be updated as projects are published and documented.",
      contactKicker: "Orders and collaboration",
      contactTitle: "Order a similar project or propose a collaboration",
      contactLead: "You can commission an HTML5 game, an interactive web product, an MVP or a gameplay mechanic prototype. Darles Games is also open to partnership proposals, adaptations of existing solutions and joint projects.",
      contactTopicsAria: "Contact topics",
      contactTopicDevelopment: "Custom development",
      contactTopicAdaptation: "Mechanic adaptation",
      contactTopicPartnership: "Partnerships and proposals",
      writeVk: "Message on VK",
      copyEmailAria: "Copy email address",
      copy: "Copy",
      copied: "Copied",
      mainSite: "Main website",
      toTop: "To top",
      footerNavigationAria: "Footer navigation",
      closeAria: "Close",
      aboutProject: "About the project",
      keySolutions: "Key solutions",
      copyProjectLink: "Copy project link",
      projectLinkCopied: "Project link copied",
      copyFailed: "Could not copy",
      more: "Details",
      projectDetailsAria: "View details for",
      projectCoverAlt: "Cover image for",
      orderSimilar: "Order a similar project",
      linksPending: "Public links will be added after the project pages are prepared."
    },
    ru: {
      skipProjects: "Перейти к проектам",
      mainSiteAria: "Перейти на главный сайт Darles Games",
      logoAlt: "Логотип Darles Games",
      openMenu: "Открыть меню",
      mainNavigationAria: "Основная навигация",
      navLibrary: "Библиотека",
      navProjects: "Проекты",
      navOrder: "Заказать",
      heroKicker: "Библиотека Darles Games",
      heroTitle: "Игры, интерактивные веб-продукты и",
      heroTitleAccent: "механики",
      heroLead: "Витрина опубликованных проектов, демо, прототипов и технических решений студии — с описаниями, материалами и ссылками на готовые версии.",
      viewProjects: "Смотреть проекты",
      discussOrder: "Обсудить заказ",
      libraryContentsAria: "Содержание библиотеки",
      heroPointReleases: "Релизы и демо",
      heroPointReleasesText: "готовые игры и рабочие версии",
      heroPointMechanics: "Механики",
      heroPointMechanicsText: "прототипы и игровые системы",
      heroPointSolutions: "Решения",
      heroPointSolutionsText: "интерактивные веб-продукты",
      heroImageAlt: "Магическая сфера с геймпадом и цифровым кодом",
      libraryKicker: "Библиотека проектов",
      directionsTitle: "Направления и форматы",
      directionsLead: "Опубликованные игры, демо, интерактивные продукты, прототипы механик и оформленные решения Darles Games.",
      statusMain: "Основной раздел",
      statusGrowing: "Раздел развивается",
      statusSoon: "Скоро",
      statusLater: "Позже",
      statusPreparing: "В подготовке",
      directionHtml5Title: "HTML5-игры",
      directionHtml5Text: "Веб-игры для браузеров и игровых платформ: релизы, демо, прототипы и технические особенности.",
      directionWebTitle: "Интерактивные веб-продукты",
      directionWebText: "Тесты, квизы, приглашения, поздравления, опросы, мини-игры и нестандартные промо-страницы.",
      directionMechanicsTitle: "Игровые механики",
      directionMechanicsText: "Прототипы механик, игровые системы, обучение персонала и внедрение игрового подхода в цифровые продукты.",
      directionDesktopTitle: "Игры для ПК",
      directionDesktopText: "Более крупные авторские проекты для настольных платформ.",
      directionCasesTitle: "Кейсы и решения",
      directionCasesText: "Подробные материалы о задачах, реализации, технических решениях и результатах проектов.",
      openProjects: "Открыть проекты",
      openSection: "Открыть раздел",
      catalogKicker: "Каталог",
      projectsTitle: "Проекты и разработки",
      projectsLead: "Игры, демо, интерактивные продукты и решения с описаниями, материалами и ссылками на публикации.",
      filtersAria: "Фильтр проектов",
      filterAll: "Все",
      filterHtml5: "HTML5-игры",
      filterWeb: "Веб-продукты",
      filterMechanics: "Механики",
      filterDesktop: "Игры для ПК",
      filterCases: "Кейсы",
      searchProjects: "Поиск по проектам",
      searchPlaceholder: "Название, жанр, технология…",
      emptyTitle: "Материалы для раздела готовятся",
      emptyText: "Раздел будет пополняться по мере публикации и оформления проектов.",
      contactKicker: "Заказы и сотрудничество",
      contactTitle: "Заказать похожий проект или предложить сотрудничество",
      contactLead: "Можно заказать разработку HTML5-игры, интерактивного веб-продукта, MVP или прототипа игровой механики. Darles Games также открыта к партнёрским предложениям, адаптации готовых решений и совместным проектам.",
      contactTopicsAria: "Варианты обращения",
      contactTopicDevelopment: "Разработка под задачу",
      contactTopicAdaptation: "Адаптация механики",
      contactTopicPartnership: "Партнёрство и предложения",
      writeVk: "Написать в VK",
      copyEmailAria: "Копировать адрес электронной почты",
      copy: "Копировать",
      copied: "Скопировано",
      mainSite: "Главный сайт",
      toTop: "Наверх",
      footerNavigationAria: "Навигация в подвале",
      closeAria: "Закрыть",
      aboutProject: "О проекте",
      keySolutions: "Ключевые решения",
      copyProjectLink: "Скопировать ссылку на проект",
      projectLinkCopied: "Ссылка скопирована",
      copyFailed: "Не удалось скопировать",
      more: "Подробнее",
      projectDetailsAria: "Подробнее о проекте",
      projectCoverAlt: "Обложка проекта",
      orderSimilar: "Заказать похожий проект",
      linksPending: "Публичные ссылки будут добавлены после подготовки страниц проектов."
    }
  };

  const categoryNames = {
    en: {
      html5: "HTML5 game",
      "web-product": "Web product",
      mechanic: "Gameplay mechanic",
      desktop: "PC game",
      case: "Case / solution"
    },
    ru: {
      html5: "HTML5-игра",
      "web-product": "Веб-продукт",
      mechanic: "Игровая механика",
      desktop: "Игра для ПК",
      case: "Кейс / решение"
    }
  };

  const metadata = {
    en: {
      title: "Darles Games — projects and solutions",
      description: "Darles Games project library: HTML5 games, interactive web products, gameplay mechanics, demos and solutions.",
      ogDescription: "HTML5 games, interactive web products, gameplay mechanic prototypes and Darles Games solutions."
    },
    ru: {
      title: "Darles Games — проекты и решения",
      description: "Библиотека проектов Darles Games: HTML5-игры, интерактивные веб-продукты, игровые механики, демо и решения.",
      ogDescription: "HTML5-игры, интерактивные веб-продукты, прототипы игровых механик и решения Darles Games."
    }
  };

  const t = (key) => translations[language][key] || translations.en[key] || key;

  function localized(value) {
    if (value && typeof value === "object" && !Array.isArray(value) && ("ru" in value || "en" in value)) {
      return value[language] ?? value.en ?? value.ru ?? "";
    }
    return value ?? "";
  }

  function applyStaticTranslations() {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      element.setAttribute("alt", t(element.dataset.i18nAlt));
    });

    const pageMeta = metadata[language];
    document.title = pageMeta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", pageMeta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageMeta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", pageMeta.ogDescription);
  }

  applyStaticTranslations();

  const grid = document.querySelector("#project-grid");
  const emptyState = document.querySelector("#empty-state");
  const searchInput = document.querySelector("#project-search");
  const filters = [...document.querySelectorAll(".filter-button")];
  const modal = document.querySelector("#project-modal");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  const header = document.querySelector(".site-header");
  const shareButton = document.querySelector("#project-share");
  const sectionLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];

  let activeFilter = "all";
  let searchQuery = "";
  let activeProjectId = "";
  let hashBeforeModal = "";

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const safeExternalUrl = (value) => {
    try {
      const url = new URL(String(value), window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
    } catch {
      return "#";
    }
  };

  const projectTitle = (project) => localized(project.title);
  const projectType = (project) => localized(project.type);
  const projectStatusLabel = (project) => localized(project.statusLabel);
  const projectShort = (project) => localized(project.short);
  const projectDetails = (project) => localized(project.details);
  const projectSolutions = (project) => {
    const value = localized(project.solutions);
    return Array.isArray(value) ? value : [];
  };

  const searchableText = (project) => [
    projectTitle(project),
    projectType(project),
    projectShort(project),
    projectDetails(project),
    ...(project.stack || []),
    ...projectSolutions(project)
  ].join(" ").toLocaleLowerCase(locale);

  function getFilteredProjects() {
    return projects
      .filter((project) => activeFilter === "all" || project.category === activeFilter)
      .filter((project) => !searchQuery || searchableText(project).includes(searchQuery))
      .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }

  function coverFallbackSymbol(project) {
    if (project.category === "case") return "⌘";
    if (project.category === "html5") return "✦";
    return "◇";
  }

  function projectCard(project) {
    const title = projectTitle(project);
    const stack = (project.stack || []).slice(0, 4)
      .map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    const hasCover = typeof project.cover === "string" && project.cover.trim().length > 0;
    const coverContent = hasCover
      ? `<img class="project-cover-image" src="${escapeHtml(project.cover)}" alt="${escapeHtml(`${t("projectCoverAlt")} ${title}`)}" loading="lazy">`
      : `<span class="cover-grid"></span><span class="cover-symbol" aria-hidden="true">${coverFallbackSymbol(project)}</span>`;

    return `
      <article class="project-card reveal is-visible" data-project-id="${escapeHtml(project.id)}">
        <button class="project-cover cover-${escapeHtml(project.accent || "violet")}" type="button" data-open-project="${escapeHtml(project.id)}" aria-label="${escapeHtml(`${t("projectDetailsAria")} ${title}`)}">
          ${coverContent}
          <span class="cover-category">${escapeHtml(categoryNames[language][project.category] || project.category)}</span>
        </button>
        <div class="project-card-body">
          <div class="project-card-meta">
            <span class="status status-${escapeHtml(project.status)}">${escapeHtml(projectStatusLabel(project))}</span>
            <span>${escapeHtml(projectType(project))}</span>
          </div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(projectShort(project))}</p>
          <div class="project-stack">${stack}</div>
          <button class="project-more" type="button" data-open-project="${escapeHtml(project.id)}">${escapeHtml(t("more"))} <span>→</span></button>
        </div>
      </article>
    `;
  }

  function renderProjects() {
    if (!grid || !emptyState) return;
    const filtered = getFilteredProjects();
    grid.innerHTML = filtered.map(projectCard).join("");
    emptyState.hidden = filtered.length > 0;
    grid.hidden = filtered.length === 0;
  }

  function setFilter(filter) {
    activeFilter = filter;
    filters.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderProjects();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function projectHash(projectId) {
    return `#project=${encodeURIComponent(projectId)}`;
  }

  function projectIdFromHash() {
    const match = window.location.hash.match(/^#project=([^&]+)$/);
    if (!match) return "";
    try {
      return decodeURIComponent(match[1]);
    } catch {
      return "";
    }
  }

  function openProject(projectId, options = {}) {
    const { updateHash = true } = options;
    const project = projects.find((item) => item.id === projectId);
    if (!project || !modal) return;

    activeProjectId = projectId;
    if (updateHash) {
      hashBeforeModal = window.location.hash.startsWith("#project=") ? "" : window.location.hash;
      history.replaceState(null, "", projectHash(projectId));
    }

    const title = projectTitle(project);
    const cover = document.querySelector("#modal-cover");
    const hasCover = typeof project.cover === "string" && project.cover.trim().length > 0;
    cover.className = `modal-cover cover-${project.accent || "violet"}`;
    cover.innerHTML = hasCover
      ? `<img class="modal-cover-image" src="${escapeHtml(project.cover)}" alt="${escapeHtml(`${t("projectCoverAlt")} ${title}`)}">`
      : `<span class="cover-grid"></span><span class="cover-symbol" aria-hidden="true">${coverFallbackSymbol(project)}</span>`;

    document.querySelector("#modal-meta").innerHTML = `
      <span class="status status-${escapeHtml(project.status)}">${escapeHtml(projectStatusLabel(project))}</span>
      <span>${escapeHtml(categoryNames[language][project.category] || project.category)}</span>
    `;
    document.querySelector("#modal-title").textContent = title;
    document.querySelector("#modal-description").textContent = projectShort(project);
    document.querySelector("#modal-details").textContent = projectDetails(project);
    document.querySelector("#modal-solutions").innerHTML = projectSolutions(project)
      .map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    document.querySelector("#modal-stack").innerHTML = (project.stack || [])
      .map((item) => `<span>${escapeHtml(item)}</span>`).join("");

    const links = document.querySelector("#modal-links");
    const orderLink = `<a class="button button-ghost" href="#contact" data-order-project>${escapeHtml(t("orderSimilar"))}</a>`;
    if (project.links?.length) {
      links.innerHTML = project.links.map((link, index) => `
        <a class="button ${index === 0 ? "button-primary" : "button-ghost"}" href="${escapeHtml(safeExternalUrl(link.url))}" target="_blank" rel="noreferrer">${escapeHtml(localized(link.label))}</a>
      `).join("") + orderLink;
    } else {
      links.innerHTML = `<span class="links-pending">${escapeHtml(t("linksPending"))}</span>${orderLink}`;
    }

    if (!modal.open) modal.showModal();
    document.body.classList.add("modal-open");
  }

  function closeModal(options = {}) {
    const { updateHash = true } = options;
    if (modal?.open) modal.close();
    document.body.classList.remove("modal-open");
    activeProjectId = "";

    if (updateHash && window.location.hash.startsWith("#project=")) {
      const destination = hashBeforeModal || `${window.location.pathname}${window.location.search}`;
      history.replaceState(null, "", destination);
    }
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  document.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.matches(".project-cover-image, .modal-cover-image")) return;
    const cover = image.closest(".project-cover, .modal-cover");
    image.remove();
    if (cover && !cover.querySelector(".cover-grid")) {
      cover.insertAdjacentHTML("beforeend", '<span class="cover-grid"></span><span class="cover-symbol" aria-hidden="true">✦</span>');
    }
  }, true);

  document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const email = button.dataset.copyEmail || "";
    const label = button.querySelector("span");

    try {
      await copyText(email);
      if (label) label.textContent = t("copied");
    } catch {
      if (label) label.textContent = email;
    }

    window.setTimeout(() => {
      if (label) label.textContent = t("copy");
    }, 1800);
  });

  shareButton?.addEventListener("click", async () => {
    const label = shareButton.querySelector("span");
    if (!activeProjectId) return;

    try {
      await copyText(window.location.href);
      if (label) label.textContent = t("projectLinkCopied");
    } catch {
      if (label) label.textContent = t("copyFailed");
    }

    window.setTimeout(() => {
      if (label) label.textContent = t("copyProjectLink");
    }, 1800);
  });

  filters.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));

  searchInput?.addEventListener("input", (event) => {
    searchQuery = event.target.value.trim().toLocaleLowerCase(locale);
    renderProjects();
  });

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-project]");
    if (openButton) openProject(openButton.dataset.openProject);

    const direction = event.target.closest("[data-category-link]");
    if (direction) setFilter(direction.dataset.categoryLink);

    const orderProject = event.target.closest("[data-order-project]");
    if (orderProject) {
      event.preventDefault();
      closeModal({ updateHash: false });
      history.replaceState(null, "", "#contact");
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  document.querySelector(".modal-close")?.addEventListener("click", () => closeModal());
  modal?.addEventListener("click", (event) => {
    const box = modal.getBoundingClientRect();
    const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
    if (outside) closeModal();
  });
  modal?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal();
  });
  modal?.addEventListener("close", () => document.body.classList.remove("modal-open"));

  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav?.classList.toggle("is-open", !expanded);
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 18);
  }, { passive: true });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  document.querySelectorAll(".reveal").forEach((element) => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add("is-visible");
  });

  const sectionObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
        });
      }, { rootMargin: "-30% 0px -55%", threshold: [0, .2, .5] })
    : null;

  document.querySelectorAll("#directions, #projects, #contact").forEach((section) => sectionObserver?.observe(section));

  window.addEventListener("hashchange", () => {
    const projectId = projectIdFromHash();
    if (projectId) openProject(projectId, { updateHash: false });
    else if (modal?.open) closeModal({ updateHash: false });
  });

  const yearElement = document.querySelector("#current-year");
  if (yearElement) yearElement.textContent = String(new Date().getFullYear());
  filters.forEach((button) => button.setAttribute("aria-pressed", String(button.classList.contains("is-active"))));
  renderProjects();

  const initialProjectId = projectIdFromHash();
  if (initialProjectId) openProject(initialProjectId, { updateHash: false });
})();
