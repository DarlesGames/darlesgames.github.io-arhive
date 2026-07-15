# Darles Games — Projects & Cases

Static website library: HTML5 games, interactive web products, game mechanics, PC games, and case studies.

## Automatic localization

The website automatically detects the browser's default language:

- `ru`, `ru-RU`, and other Russian locales → Russian interface;
- any other language → English interface.

Localization does not use cookies or save user settings. Static translations are located in `app.js`, and project card translations are in `projects.js`.

The Darles Games logos in the header and footer link to the main website:

```text
https://darlesgames.github.io/
```

The contact block is located in `index.html`. The following are enabled:

- VK community messages;
- Telegram;
- `DarlesGames@yandex.ru`;
- Copy email button.

## Structure

- `index.html` — website markup and basic English text;
- `styles.css` — brand design and responsiveness;
- `app.js` — localization, catalog, filters, search, modal window, direct links to projects, mobile menu, and contact copying;
- `projects.js` — bilingual project data;
- `assets/hero-magic-gamepad.webp` — home screen image;
- `assets/projects/` — project covers;
- `.nojekyll` — disables Jekyll processing on GitHub Pages.

## Privacy Policy

For the current static version without forms, analytics, registration, and user accounts, a separate privacy policy page has not been added. Before connecting application forms, analytics, cookies, or other data collection tools, you must add an appropriate policy and, if applicable, a cookie notice.
