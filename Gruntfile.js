module.exports = function(grunt) {
  'use strict'

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/* COMMON SCSS COMMENT TO BREAK CACHE */\n' +
                '@font-face { font-family: "Gotham"; font-weight: normal; src: url($gotham-book-webfont) format(\'woff2\') }\n' +
                '@font-face { font-family: "Gotham"; font-weight: 500; src: url($gotham-medium-webfont) format(\'woff2\') }\n' +
                '@font-face { font-family: "Gotham"; font-weight: 700; src: url($gotham-bold-webfont) format(\'woff2\') }\n' +
                '@font-face { font-family: "Gotham"; font-weight: 300; src: url($gotham-light-webfont) format(\'woff2\') }\n' +
                '@font-face { font-family: "Material Icons"; font-weight: normal; src: url($material-icon-webfont) format(\'woff2\') }\n'
      },
      common: {
        dest: 'common/common.scss',
        src: '<%= sass.common.dest %>'
      },
      desktop: {
        dest: 'desktop/desktop.scss',
        src: '<%= sass.desktop.dest %>'
      },
      mobile: {
        dest: 'mobile/mobile.scss',
        src: '<%= sass.mobile.dest %>'
      }
    },

    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: [
              'Android 2.3',
              'Android >= 4',
              'Chrome >= 35',
              'Edge >= 12',
              'Explorer >= 10',
              'Firefox >= 38',
              'iOS >= 8',
              'Opera >= 12',
              'Safari >= 8'
            ]
          })
        ]
      },
      common: {
        src: 'common/common.scss'
      },
      desktop: {
        src: 'desktop/desktop.scss'
      },
      mobile: {
        src: 'mobile/mobile.scss'
      }
    },

    sass: {
      options: {
        precision: 3,
        sourcemap: 'none',
        style: 'expanded'
      },
      common: {
        dest: 'common/common.scss',
        src: 'assets/stylesheets/common/common.scss'
      },
      desktop: {
        dest: 'desktop/desktop.scss',
        src: 'assets/stylesheets/desktop/desktop.scss'
      },
      mobile: {
        dest: 'mobile/mobile.scss',
        src: 'assets/stylesheets/mobile/mobile.scss'
      }
    },

    // update package.json packages
    devUpdate: {
      default: {
        options: {
          semver: false,
          updateType: 'prompt'
        }
      }
    }
  })

  // task registration
  grunt.registerTask(
    'default',
    [
      'sass',
      'concat',
      'postcss'
    ]
  )
}