# Adding examples

Examples help demonstrate different programming concepts and functionality of the library. They can be found on the [p5.js examples page](http://p5js.org/examples/), and run on the page, allowing people to edit and play with them.

We welcome new examples that help creators learn p5 and contribute to our mission of increasing access.

Below are the steps below to add examples to p5js.org.

## Steps

1. [Select an idea](#select-an-idea)
2. [Open an issue](#open-an-issue)
3. [Create your example](#create-your-example)
4. [Set up development tools and environment](#set-up-development-tools-and-environment)
5. [Submit your example](#submit-your-example)
6. [Translate your example](#translate-your-example) (optional)

## Select an idea

Before working on a new example, evaluate your idea based on the following criteria.

Under each criterion is an example of an idea that meets it well (⭐) and one that does not (⚠️).

### New demonstration

Shows p5 creators something they cannot find in other examples.

- ⭐ Demonstration on how to use arrays with a datatype not currently featured in existing examples
- ⚠️ Variation on an existing array example

### Clear focus

Demonstrates a programmatic concept or a p5 feature, with minimal other content.

- ⭐ Interactive visualization of all the options for blendMode()
- ⚠️ Drawing app with a variety of features

### Approachable scope

Aim for 200 lines of code or less.

- ⭐ Single level jumping game like [Google's Dinosaur Game](https://en.wikipedia.org/wiki/Dinosaur_Game)
- ⚠️ [Multiple level platformer game](https://en.wikipedia.org/wiki/Platformer)

### Content that invites remixing

Opens opportunities for creators to easily experiment and make their own version.

- ⭐ Sound board app designed for easy swapping of sound files
- ⚠️ Generative music app designed to work with files of specific lengths

If your idea does not meet this criteria, it may be a better fit for for p5's Community Showcase.

## Open an issue

Open a new issue on the [p5.js-website repository](https://github.com/processing/p5.js-website/issues) listing the example(s) you are creating with your name, so efforts aren't duplicated.

## Create your example

1. Set up these files for your example:

   - code.js
   - description.mdx
   - index.html - load the most recent version of p5.js and your js file via script tags

2. Write and test code.js.

   - Follow [p5's code style guide](https://github.com/processing/p5.js/blob/main/contributor_docs/documentation_style_guide.md#code).
   - Examples should typically be 710px wide, and a recommended height is 400px. You can modify these dimensions (especially the height) as appropriate.
   - Include plenty of comments to explain your code, and follow [p5's technical writing guide](https://docs.google.com/document/d/1aHyeh9UcKjICippuAvC9iurKfl3RQNHQaj170Ri_7hE/edit?usp=sharing).
   - Describe canvas content with [describe()](https://p5js.org/reference/#/p5/describe), [describeElement()](https://p5js.org/reference/#/p5/describeElement), [textOutput()](https://p5js.org/reference/#/p5/textOutput), or [gridOutput()](https://p5js.org/reference/#/p5/gridOutput) following guidelines in the [Writing accessible canvas descriptions tutorial](https://p5js.org/learn/accessible-labels.html)

3. Write description.mdx.

   - Include embedded [YAML](https://yaml.org/) data at the top with the following tags:

   ```yaml
   ---
   title: Example Title
   one-line-description: Describe what the creator can do with this example in one sentence.
   ---
   ```

   - Keep the title short, aiming for 3 words or less.
   - Start the one line description with a verb, completing the sentence, "By running this example, you will..."
   - Below that data, add a longer description. Contextualize the example and explain what it demonstrates. Link any relevant resources that will help the reader understand it.

## Set up development tools and environment

1. If you are not yet familiar with GitHub we recommend checking out this [tutorial](https://guides.github.com/activities/hello-world/).
2. Install [node.js](https://nodejs.org/en/), which also automatically installs the npm package manager.
3. [Fork](https://help.github.com/articles/fork-a-repo/) the [p5.js-website](https://github.com/processing/p5.js-website) repository into your own GitHub account.
4. [Clone](https://help.github.com/articles/cloning-a-repository/) your new fork of the repository from GitHub onto your local computer.
5. Using the command line, navigate to the `src/data/examples/build_examples` folder, and install all its necessary dependencies with npm.

   ```bash
   cd src/data/examples/build_examples
   npm install
   ```

## Submit your example

1. Place the JS and MDX files in `src/data/examples/en/` of your local repository. Do not include the HTML or p5.js files.

   - The subfolder the file is placed in determines the topic heading the examples displays under on [p5js.org/examples](https://p5js.org/examples/). Add your file into the appropriate folder, or create a new one if necessary.
   - If you create a new folder, you will also need to add the folder name to the `examples` section in the `src/data/en.yml`, `src/data/es.yml`, and `src/data/zh-Hans.yml` files for the headings to show up properly.
   - The filename should follow the format: `XX_name_of_your_example.js`. The XX\_ prefix (starting with 00) indicates the order that the files will show up on the page.

2. Place duplicate copies of the file in the corresponding folders in `src/data/examples/es/`, and `src/data/examples/zh-Hans/`. This allows us to build the Spanish and Chinese versions of the example. If you know either of these languages, feel free to translate the heading text and comments.

3. If you have any extra files that need to be included (images, JSON, etc), place them in the `src/data/examples/assets` folder. Try to keep these files small.

4. [Grunt](https://gruntjs.com/) should now be installed, and you can use it to build the website by navigating to the top-level directory and typing:

   ```bash
   npm run watch
   ```

5. A local build of the p5js.org site should open in your web browser and you can navigate to the examples page to see your changes.

6. Once everything is ready, submit your changes as a [pull request](https://help.github.com/articles/creating-a-pull-request/).

## Translate your example

- The [p5js.org/examples](https://p5js.org/examples/) page is built from the data in [src/data/](https://github.com/processing/p5.js-website/tree/master/src/data).
- Within the examples folder, there is a folder for each of the three languages we currently support: `en/`, `es/`, and `zh-Hans/`.
- Translations for the topic headers on the example index page are done in the YML files `src/data/*.yml`.

### Adding a translation

1. Locate the JS file within `src/data/examples` that corresponds to the example you want to add a translation for.
2. Translate the heading and comments. Do not change variable or function names. Do not change the filename.
3. To update a category heading on [p5js.org/examples](https://p5js.org/examples/), edit the YML files at `src/data/*.yml`.

### When adding a new example

1. First, add an English version of the file to the `en/` folder, then make sure it is duplicated in the same place in all other languages, then translate for whichever languages you can.
2. The folder, file, and numbering structure should match exactly between the different languages. Do not change the filenames. The text for the example name, description, and source code are all in the `.js` files in the folders.
3. If you have created a new folder, add entries to the "Examples" section of each of the YML files `src/data/*.yml` with the folder name as the key.
