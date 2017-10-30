/*jslint node:true */ /*global module,require */

var copy_task = {
    dist: {
        files: [
            // Apache files
            {
                expand: true,
                cwd: "src/",
                src: ["**/.htaccess", "**/.htpasswd"],
                dest: "dist/",
                filter: "isFile"
            },

            // Source files
            {
                expand: true,
                cwd: "src/",
                src: ["**/*.php", "**/*.phtml", "**/*.html"],
                dest: "dist/",
                filter: "isFile"
            },

            // Resources
            {
                expand: true,
                cwd: "src/",
                src: ["**/*.jpg", "**/*.png", "**/*.gif", "**/*.svg", "**/*.mp3"],
                dest: "dist/",
                filter: "isFile"
            }
        ],
            expand: true,
            dot: true,
            verbose: true
    }
};

module.exports = function (grunt) {
    "use strict";
    require("load-grunt-tasks")(grunt);

    // noinspection SpellCheckingInspection
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            dist: ["out", "dist"],
            out: ["out"]
        },

        copy: copy_task,
        copy_modified: copy_task,

        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: "out/",
                    src: ["**/*.js"],
                    dest: "dist/",
                    filter: "isFile",
                    ext: ".min.js"
                },
                    {
                        expand: true,
                        cwd: "src/",
                        src: ["**/*.js"],
                        dest: "dist/",
                        filter: "isFile",
                        ext: ".min.js"
                    }]
            }
        },

        sass: {
            options: {
                sourceMap: true,
                outputStyle: "compressed"
            },
            dist: {
                files: {
                    "out/css/style.min.css": "src/sass/style.scss",
                    "out/projects/lifx-music-studio/css/style.min.css": "src/projects/lifx-music-studio/sass/style.scss",
                    "out/projects/whatcanweplay/css/style.min.css": "src/projects/whatcanweplay/sass/style.scss"
                }
            }
        },

        postcss: {
            dist: {
                options: {
                    map: true, // inline sourcemaps
                    processors: [
                        require("autoprefixer")({
                            browsers: "last 2 versions"
                        }) // add vendor prefixes
                    ]
                },
                files: [{
                    expand: true,
                    cwd: "out/",
                    src: ["**/*.css"],
                    dest: "dist/",
                    filter: "isFile"
                }]
            }
        }
    });

    // noinspection SpellCheckingInspection
    grunt.registerTask("default", ["copy_modified", "sass", "postcss", "uglify", "clean:out"]);
    // noinspection SpellCheckingInspection
    grunt.registerTask("initial", ["copy", "sass", "postcss", "uglify", "clean:out"]);
};