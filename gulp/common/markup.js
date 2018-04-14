const gulp = require('gulp')
const config = require('../config')
const production = config.production
const pug = require('@pixel2html/pipes').pug

const { blur, icon } = require('./pugHelpers')
const getFaqs = require('./getFaqs')

gulp.task('markup', () =>
  gulp.src(config.directories.src.markup + '/*.pug')
    .pipe(pug({
      pug: {
        basedir: config.directories.src.markup,
        locals: {
          icon,
          production,
          blur,
          faqs: getFaqs()
        }
      },
      cssModules: `./${config.directories.src.cssModules}`,
      imgAutoSize: {
        root: `./${config.directories.dist.base}`,
        processEmptySize: true
      }
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.markup))
)
