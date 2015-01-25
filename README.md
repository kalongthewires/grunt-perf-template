# Performance Template
A responsive template for building more performant websites and apps.

## Setup
Grunt is required to use the template, so if you're not familiar with Grunt, take a look at the [Getting Started](http://gruntjs.com/getting-started) guide. A Gruntfile is included with the template, as well as a package.json file, but you'll need Grunt installed on your computer to use them!

Once you've got Grunt installed, clone/download the template. Place your own files in the relevant folders within the src/ folder (add your styles to the /src/scss file, HTML to /src, and so on). The src/js/head folder is meant for JavaScript that must be included in the <head> of the HTML. All other JavaScript can be placed in the src/js folder. 

To take advantage of minification and concatenation, follow the index.html file example when creating your HTML, and place your external CSS and JS in proper locations between <!-- build --> comments (take a look at grunt-processhtml below for more documentation on the build comments).

When your files are in place, open up your terminal/command prompt and navigate to the root of the project (where Gruntfile.js is located). Then type 'grunt' and voila! A performance-optimized version of your files should be generated in the /dist folder.

## Included Grunt Tasks
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) -> compile SASS
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) -> concatenate and minify JS files
* [grunt-processhtml](https://github.com/dciccale/grunt-processhtml) -> change file paths in dist/ HTML to match new minified JS and CSS file paths 
* [grunt-uncss](https://github.com/addyosmani/grunt-uncss) -> remove unused CSS and concatenate CSS files
* [grunt-combine_mq](https://github.com/frontendfriends/grunt-combine-mq) -> combine duplicate media queries into a single declaration
* [grunt-critical](https://github.com/bezoerb/grunt-critical) -> inline critical CSS in index.html
* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) -> minify CSS
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) -> minify both HTML and inline JS
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) -> optimize images

## Additional Features
* [ajaxinclude.js](https://github.com/filamentgroup/Ajax-Include-Pattern) -> to asynchronously load less critical HTML. See the example in index.html to get an idea of how to put this to use!
* [picturefill.js](https://github.com/scottjehl/picturefill) -> to allow use of the <picture> element across browsers.
* Basic SASS file structure and defaults, including a grid system.
