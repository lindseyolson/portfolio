const gulp = require ('gulp');
const sass = require ('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('public/styles/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles'))
});
