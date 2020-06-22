const gulp = require('gulp');
const sass = require('gulp-sass');
const classPrefix = require('gulp-class-prefix');
const { prefix } = require('./src/config');

sass.compiler = require('node-sass');

gulp.task('sass', () => gulp.src('src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(classPrefix(prefix))
    .pipe(gulp.dest('dist')));
