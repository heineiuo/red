'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        options: {
          separator: ';'
        },
        files: {
          'dist/js/red.js': [
            'js/global.js'
          ]
        },
      },

      less: {
        files: {
          'tmp/red.less': [
            'less/reset.less', 
            'less/global.less', 
            'less/layout.less'
          ]
        },
      }
    },

    uglify: {
      options: {
        banner: '/*! RED.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/js/red.min.js': ['dist/js/red.js']
        }
      }
    },

    less: {
      development: {
        files: [
          {
            expand: true,
            cwd: 'tmp',
            src: ['red.less'],
            dest: 'dist/css',
            ext: '.css'
          }
        ]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    qunit: {
      files: ['test/**/*.html']
    },

    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['concat', 'uglify', 'less', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');

  // grunt.registerTask('test', ['jshint', 'qunit']);
  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  // grunt.registerTask('default', ['concat', 'uglify']);

};