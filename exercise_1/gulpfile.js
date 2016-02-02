var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
  return gulp.src('./src/stylus/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch('./src/stylus/**/*.styl', ['css']);
    gulp.watch("./build/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['css', 'browser-sync']);
