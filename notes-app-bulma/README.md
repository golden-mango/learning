# NotesAppBulma

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

--------------------------------------------------

This was mostly done to explore some of the bulma components, and get better at styling components with scss.

note - some of the bulma variables, such as $green were not being overridden when applied to global styles. Or I wasn't assigning the correct
variable (for instance, changing the value of $green so that the is-success button gets a different color).

note - sometimes when deleting on search an odd animation occurs in which the deleted card is quickly added to and then removed again from the card list - I don't feel like investigating this.
