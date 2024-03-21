module.exports = function(grunt) {
  'use strict'

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/* COMMON SCSS COMMENT */\n' +
                '@font-face { font-family: "Gotham"; font-weight: normal; src: url(\'//forum.jdrf.org/uploads/jdrf/original/1X/7b08c78fe3030a3d62e72dc04806d38d1c6e8002.woff2\') format(\'woff2\') }\n' +
                '@font-face { font-family: "Gotham"; font-weight: 500; src: url(\'//forum.jdrf.org/uploads/jdrf/original/1X/7b08c78fe3030a3d62e72dc04806d38d1c6e8002.woff2\') format(\'woff2\') }\n' +
                '@font-face { font-family: "Gotham"; font-weight: 700; src: url(\'//forum.jdrf.org/uploads/jdrf/original/1X/47249cd9b6b59c8e70edfcb5907a5bacc44db08b.woff2\') format(\'woff2\') }\n' +
                '@font-face { font-family: "Gotham"; font-weight: 300; src: url(\'//forum.jdrf.org/uploads/jdrf/original/1X/707781b58b62210fc4008090ffe156ae262849e2.woff2\') format(\'woff2\') }\n' +
                '@font-face { font-family: "Material Icons"; font-weight: normal; src: url(\'//forum.jdrf.org/uploads/jdrf/original/1X/09963592e8c953cc7e14e3fb0a5b05d5042e8435.woff2\') format(\'woff2\') }\n'
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
        sourcemap: false,
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
