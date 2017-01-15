/*jslint node:true */

module.exports = function (grunt) {
    "use strict";
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            dist: [ "dist" ]
        },

        copy: {
            dist: {
                files: [
                    // Apache files
                    { expand: true, cwd: "src/", src: [ "**/.htaccess", "**/.htpasswd" ], dest: "dist/", filter: "isFile" },
                    
                    // Source files
                    { expand: true, cwd: "src/", src: [ "**/*.php", "**/*.phtml", "**/*.html" ], dest: "dist/", filter: "isFile" },

                    // Resources
                    { expand: true, cwd: "src/", src: [ "**/*.jpg", "**/*.png", "**/*.gif", "**/*.svg" ], dest: "dist/", filter: "isFile" }
                ]
            }
        },

        sass: {
            options: {
                sourceMap: true,
                outputStyle: "compressed"
            },
            dist: {
                files: {
                    "dist/css/style.min.css": "src/sass/style.scss"
                }
            }
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [
                    { expand: true, cwd: "src/js/", src: [ "**/*.js" ], dest: "dist/js/", filter: "isFile", ext: ".min.js" }
                ]
            }
        },
        
        watch: {
            dist: {
                files: [ "Gruntfile.js", "src/**/.htaccess", "src/**/.htpasswd", "src/**/*.*", "src/**/*" ],
                tasks: [ "clean", "copy", "sass", "uglify" ],
                options: {
                    reload: true
                }
            }
        }
    });
    
    grunt.registerTask("default", [ "clean", "copy", "sass", "uglify", "watch" ]);
};
