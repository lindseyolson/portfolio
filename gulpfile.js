// requires
const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
const rename = require ('gulp-rename');
const neat = require ('node-neat');

// tasks
gulp.task('sass', () => {
  gulp.src('app/styles/sass/main.scss')
    .pipe(sass({
      includePaths: neat.includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: '*'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('app/styles/css'));
});


gulp.task('watch', () => {
  gulp.watch('app/styles/sass/*.scss', ['sass']);
});
