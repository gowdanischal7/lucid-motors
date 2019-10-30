module.exports = function (grunt) {

  const sass = require('node-sass');

  // Configure main project settings
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Plugin name without 'grunt-contrib-'
    watch: {
      files: ['*.html', 'sass/*.scss', 'css/*.css', 'js/*.js'],
      tasks: ['sass', 'cssmin', 'uglify'],
      options: {
        nospawn: true,
        livereload: true
      }
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['*.html', 'sass/*.scss']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch', 'sass', 'cssmin', 'uglify']);
}