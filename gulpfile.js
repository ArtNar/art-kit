const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => gulp.src('src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist')));
