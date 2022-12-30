# next-js-cms-localized-template

A template next js project with localization pre-configured with the [next-18next localization package](https://github.com/i18next/next-i18next). This is the basic [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) with no typescript and the index page changed. There is also a vscode debug configuration, so you can use breakpoints.

## Overview

This template is pre-configured to handle localization for a few languages and can be extended to handle any other i18n supported languages. Use the `next-i18next.config.js` config file to adjust the loaclization settings.

Yes, this template is unstyled and ugly.

## Behavior

- Will auto detect the browsers preferred language and use the fallback language if the preferred language is not supported.
- Auto dectection will ONLY happen on the root of the site '/'. Meaning a user going to /some/path will see the default laguage initially.
- Users can use the language toggle (`./components/localization/languageToggle.js`) to change the locale that will be use in the app at anytime. From there any navigation in app will maintain the localization pre-fix path.

## Localized Content

- The selected locale is hooked up to a basic **local** Strapi API that will request localized content, but this can be switched out with any other API.
- An axios instance with interceptors can be found in `./utilities/strapi-api.js`

## Localized Static Content

- All static translations are found in the /public/locales/**_lang_**/**_namespace_**.json
- The default namespace is `common.json`, but can add other namespaces to the `next-i18next.config.js` config file to break up monolith json files (reference the next-i18next documentation above).
- To use other namespaces than the default you need to pass in the name of the namespace into the useTranslation() hook like `useTranslation('footer')` (this would reference a `footer.json` file in the locales/_lang_/ directory)

## Debugging (vs code only)

- Use f5 or the debug panel to start a debug instance.
- Be sure to use the 'full stack' setup to spin up the server and a fresh chrome window
- To test the auto detection in the chrome window go to `settings > languages > add language > move the language to the top of the list using the kebab dot menu`

## Contribution

- Please contribute and update this as it gets used!
- PR's will only require 1 other reviewer for approval
- ALWAYS comment your code and/or update the README
