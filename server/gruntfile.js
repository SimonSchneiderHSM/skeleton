module.exports = function(grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: [
              "frontend/**/*.ttf",
              "frontend/**/*.scss",
              "frontend/**/*.less",
              "frontend/**/*.json",
              "frontend/**/*.json.checksum",
              "frontend/**/*.graphql",
              "frontend/**/static/**/*"
            ],
            dest: 'dist'
          }
        ]
      }
    },
    babel: {
      options: {
        babelrc: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: "src/frontend",
          src: ["**/*.js", "!**/static/**/*"],
          dest: "dist/frontend"
        }]
      }
    },
    watch: {
      babel: {
        files: ["src/frontend/**/*.js", "src/frontend/**/*.scss"],
        tasks: ["changed:babel:dist", "changed:copy:main"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks('grunt-changed');

  grunt.registerTask("default", [
    "babel:dist",
    "copy:main"
  ]);
};
