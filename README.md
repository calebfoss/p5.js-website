# p5js website

This is a rebuild of the original p5.js website [p5js.org](https://p5js.org) using Grunt, YAML, and Assemble. The goals are to implement internationalization (i18n) and to improve site accessibility.

## Setup

1. Download this zip file and navigate to the directory in the terminal.
2. Type `npm install`.
2. Type `grunt server` to run.
3. This should open a window in your browser with the site running at http://localhost:9000. 

## File structure

* `src` – 
  * `assets` – All static files (imgs, css, fonts, js, p5_featured homepage sketches)
    * Note: if you make edits here you must restart the server to see your changes. To see changes immediately, you can edit the assets files in the dist directory, but need to copy and paste your updated work here for it to be saved.
  * `data` – translation files
  * `templates`
    * `layouts` – default.hbs is main page template
    * `pages` – Contains each of the pages of the p5 site, these get inserted in `{{> body }}` tag of default layout.
    * `partials` – These are reusable pieces that can get added to any page or layout, they correspond to other `{{> filename }}` tags in the pages or default layout.
* `dist` – Where the rendered files are stored, this can be placed directly online.

## Internationalization (i18n)

* Each page uses handlebars to access the i18n data and render. The .yml files in the `src/data` folder hold the i18n data for each language. Within the pages there are tags that look like this:
  ```
  {{#i18n "MyKeyword"}}{{/i18n}}
  ```
* MyKeyword corresponds to the key-value pair for the translation of that word or phrase. There should be a MyKeyword entry in every language file for things to render correctly.

* Each page contains YAML "front matter" at the top which includes a title and (optional) slug field. The title corresponds to the section in which to place the i18n key-value pairs. (Note: each page has only one title, so for partials within the `partials` folder, place the i18n pairs at the top level.)

* The slug corresponds to the folder in which the page will be placed. This should generally match the folder structure within the `pages` folder.

## Documentation

* [Assemble](http://assemble.io/) is used to build a static site out of all the layouts and yml data.
* [grunt-assemble-i18n](https://github.com/assemble/grunt-assemble-i18n) renders a set of pages for each language specified in the gruntfile, based on the handlebars templates and yml data. There is not a lot of documentation, but this [example](https://github.com/LaurentGoderre/i18n-demo) demonstrates the functionality well.
* [assemble-contrib-permalinks](https://github.com/assemble/assemble-permalinks) allows us to customize the permalinks (file structure of the rendered static site).


