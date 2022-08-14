// import modules
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

// Tasks
// Sass compiling to css
const sassTask = () => {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
}

// Watch task
const watchTask = () => {
  // init browsersync
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })

  // watch
  gulp.watch('app/scss/**/*.scss', sassTask)
  gulp.watch('app/*.html').on('change', browserSync.reload)
}

exports.default = gulp.series(sassTask, watchTask)
