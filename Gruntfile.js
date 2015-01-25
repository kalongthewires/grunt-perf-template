module.exports = function(grunt) {

    // Load all tasks. ---------------------------------------------------------
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-combine-mq');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Project configuration. --------------------------------------------------
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // GRUNT-CONTRIB-SASS - compile SASS to CSS.
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss/',
                    src: ['*.scss'],
                    dest: 'dist/css/',
                    ext: '.css'
                }]
            }
        },
        // GRUNT-CONTRIB-UGLIFY - concatenate and minify JS files.
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            },
            dist: {
                files: {
                    'dist/js/apphead.min.js': ['src/js/head/*.js'], // js that must be included in the <head>
                    'dist/js/app.min.js': ['src/js/*.js']
                }
            }
        },
        // GRUNT-PROCESSHTML - change file paths to external assets to match
        // newly outputed/minified files in HTML.
        processhtml: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '*.html',
                    dest: 'dist/'
                }]
            }
        },
        // GRUNT-UNCSS - remove unused styles; concatenates all CSS.
        uncss: {
            dist: {
                files: {
                    'dist/css/styles.css': ['dist/*.html']
                }
            }
        },
        // GRUNT-COMBINE-MQ - combine matching media queries into a single declaration.
        combine_mq: {
            default_options: {
                src: 'dist/css/styles.css',
                dest: 'dist/css/styles.css'
            }
        },
        // GRUNT-CRITICAL - Identify and embed critical CSS in the <head> of
        // HTML file.
        critical: {
            dist: {
                options: {
                    css: [
                        'dist/css/styles.css',
                    ],
                    minify: true,
                    width: 800,
                    height: 1000
                },
                src: 'dist/index.html', // only worried about initial CSS download so can focus on landing page, aka index.html
                dest: 'dist/index.html',
            }
        },
        // GRUNT-CONTRIB-CSSMIN - minify all CSS in the css/ folder.
        cssmin: {
            target: {
                files: [{
                    'dist/css/styles.css': [
                        'dist/css/styles.css'
                    ]
                }]
            }
        },
        // GRUNT-CONTRIB-HTMLMIN - minify HTML and inline JS
        htmlmin: {
            multiple: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyJS: true
                },
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: '*.html',
                    dest: 'dist/'
                }]
            }
        },
        // GRUNT-CONTRIB-IMAGEMIN - minify png, jpg, and gif images.
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
          }
    });

    // Default task(s). --------------------------------------------------------
    grunt.registerTask('default', [
        'sass',
        'uglify',
        'processhtml',
        'uncss',
        'combine_mq',
        'critical',
        'cssmin',
        'htmlmin',
        'imagemin'
    ]);
};