# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```
portfolio
├─ .angular
├─ .editorconfig
├─ angular.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app.config.ts
│  │  ├─ app.html
│  │  ├─ app.routes.ts
│  │  ├─ app.scss
│  │  ├─ app.spec.ts
│  │  ├─ app.ts
│  │  ├─ core
│  │  │  ├─ components
│  │  │  │  ├─ footer
│  │  │  │  │  ├─ footer.html
│  │  │  │  │  ├─ footer.scss
│  │  │  │  │  └─ footer.ts
│  │  │  │  └─ header
│  │  │  │     ├─ header.html
│  │  │  │     ├─ header.scss
│  │  │  │     └─ header.ts
│  │  │  └─ services
│  │  │     └─ language.service.ts
│  │  ├─ pages
│  │  │  ├─ home
│  │  │  │  ├─ home.html
│  │  │  │  ├─ home.scss
│  │  │  │  └─ home.ts
│  │  │  ├─ legal-notice
│  │  │  │  ├─ legal-notice.html
│  │  │  │  ├─ legal-notice.scss
│  │  │  │  └─ legal-notice.ts
│  │  │  └─ privacy-policy
│  │  │     ├─ privacy-policy.html
│  │  │     ├─ privacy-policy.scss
│  │  │     └─ privacy-policy.ts
│  │  ├─ sections
│  │  │  ├─ about
│  │  │  │  ├─ about.html
│  │  │  │  ├─ about.scss
│  │  │  │  └─ about.ts
│  │  │  ├─ contact
│  │  │  │  ├─ contact.html
│  │  │  │  ├─ contact.scss
│  │  │  │  └─ contact.ts
│  │  │  ├─ portfolio
│  │  │  │  ├─ portfolio.html
│  │  │  │  ├─ portfolio.scss
│  │  │  │  └─ portfolio.ts
│  │  │  ├─ references
│  │  │  │  ├─ references.html
│  │  │  │  ├─ references.scss
│  │  │  │  └─ references.ts
│  │  │  └─ skills
│  │  │     ├─ skills.html
│  │  │     ├─ skills.scss
│  │  │     └─ skills.ts
│  │  └─ shared
│  │     ├─ components
│  │     │  └─ social-links
│  │     │     ├─ social-links.html
│  │     │     ├─ social-links.scss
│  │     │     └─ social-links.ts
│  │     └─ pipes
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ Overpass-Black.ttf
│  │  │  ├─ Overpass-BlackItalic.ttf
│  │  │  ├─ Overpass-Bold.ttf
│  │  │  ├─ Overpass-BoldItalic.ttf
│  │  │  ├─ Overpass-ExtraBold.ttf
│  │  │  ├─ Overpass-ExtraBoldItalic.ttf
│  │  │  ├─ Overpass-ExtraLight.ttf
│  │  │  ├─ Overpass-ExtraLightItalic.ttf
│  │  │  ├─ Overpass-Italic-VariableFont_wght.ttf
│  │  │  ├─ Overpass-Italic.ttf
│  │  │  ├─ Overpass-Light.ttf
│  │  │  ├─ Overpass-LightItalic.ttf
│  │  │  ├─ Overpass-Medium.ttf
│  │  │  ├─ Overpass-MediumItalic.ttf
│  │  │  ├─ Overpass-Regular.ttf
│  │  │  ├─ Overpass-SemiBold.ttf
│  │  │  ├─ Overpass-SemiBoldItalic.ttf
│  │  │  ├─ Overpass-Thin.ttf
│  │  │  ├─ Overpass-ThinItalic.ttf
│  │  │  ├─ Overpass-VariableFont_wght.ttf
│  │  │  ├─ Syne-Bold.ttf
│  │  │  ├─ Syne-ExtraBold.ttf
│  │  │  ├─ Syne-Medium.ttf
│  │  │  ├─ Syne-Regular.ttf
│  │  │  ├─ Syne-SemiBold.ttf
│  │  │  └─ Syne-VariableFont_wght.ttf
│  │  ├─ icons
│  │  │  ├─ ak-logo.png
│  │  │  ├─ ak-logo.svg
│  │  │  ├─ angular-text.svg
│  │  │  ├─ angular.svg
│  │  │  ├─ arrow-left.svg
│  │  │  ├─ arrow-left1.svg
│  │  │  ├─ arrow-left2.svg
│  │  │  ├─ arrow-left3.svg
│  │  │  ├─ arrow-right.svg
│  │  │  ├─ arrow-right1.svg
│  │  │  ├─ arrow-right2.svg
│  │  │  ├─ arrow-right3.svg
│  │  │  ├─ big-arrow-up-135-circle.svg
│  │  │  ├─ checkbox-1-hover.svg
│  │  │  ├─ checkbox-1.svg
│  │  │  ├─ checkbox-3-checked.svg
│  │  │  ├─ checkbox-checked-hover.svg
│  │  │  ├─ css-text.svg
│  │  │  ├─ css.svg
│  │  │  ├─ django.svg
│  │  │  ├─ docker.svg
│  │  │  ├─ done.svg
│  │  │  ├─ email-white.svg
│  │  │  ├─ email.svg
│  │  │  ├─ error.svg
│  │  │  ├─ firebase-text.svg
│  │  │  ├─ firebase.svg
│  │  │  ├─ format_quote.svg
│  │  │  ├─ Frame 3.png
│  │  │  ├─ git-text.svg
│  │  │  ├─ git.svg
│  │  │  ├─ github-white.svg
│  │  │  ├─ github.svg
│  │  │  ├─ growth.svg
│  │  │  ├─ heroku.svg
│  │  │  ├─ hintergrund-contact.svg
│  │  │  ├─ house.svg
│  │  │  ├─ html-text.svg
│  │  │  ├─ html.svg
│  │  │  ├─ javascript-text.svg
│  │  │  ├─ javascript.svg
│  │  │  ├─ laptop_chromebook.svg
│  │  │  ├─ learning.svg
│  │  │  ├─ linkedin-white.svg
│  │  │  ├─ linkedin.svg
│  │  │  ├─ linux.svg
│  │  │  ├─ location.svg
│  │  │  ├─ material-design.svg
│  │  │  ├─ pfeile-contact.svg
│  │  │  ├─ pfeile-projekte.svg
│  │  │  ├─ pfeile-scroll-kurz.svg
│  │  │  ├─ pfeile-scroll-lang.svg
│  │  │  ├─ pfeile-scroll-right-kurz.svg
│  │  │  ├─ pfeile-scroll-right-lang.svg
│  │  │  ├─ pfeile-unten-home.svg
│  │  │  ├─ postgre-sql.svg
│  │  │  ├─ projekt1.svg
│  │  │  ├─ projekt2.svg
│  │  │  ├─ projekt3.svg
│  │  │  ├─ python.svg
│  │  │  ├─ rectangle.svg
│  │  │  ├─ redis.svg
│  │  │  ├─ remote.svg
│  │  │  ├─ rest.svg
│  │  │  ├─ restapi.svg
│  │  │  ├─ scroll-down.svg
│  │  │  ├─ scrum-text.svg
│  │  │  ├─ scrum.svg
│  │  │  ├─ small-arrow-down-circle.svg
│  │  │  ├─ sqlite.svg
│  │  │  ├─ typescript-text.svg
│  │  │  ├─ typescript.svg
│  │  │  └─ wordpress.svg
│  │  └─ images
│  │     ├─ ak-square-bw.jpeg
│  │     ├─ project-el-pollo-loco.png
│  │     ├─ project-join.png
│  │     └─ project-pokedex.png
│  ├─ index.html
│  ├─ main.ts
│  ├─ styles
│  │  ├─ _animations.scss
│  │  ├─ _mixins.scss
│  │  ├─ _typography.scss
│  │  └─ _variables.scss
│  └─ styles.scss
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```