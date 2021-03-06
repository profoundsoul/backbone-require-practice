/**
 * Created by mumu on 2017/1/11.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanDist = require('gulp-clean-dest');

gulp.task('core', function(){
    gulp.src(['underscore.js', 'core.js', 'toast.js', 'confirm.js'])
        .pipe(uglify())
        .pipe(concat({path:'core.min.js'}))
        .pipe(gulp.dest(''));
});

gulp.task('secure', function(){
    gulp.src(['../secure/*.js', '!../secure/*.min.js'])
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('../secure'));
});

gulp.task('plugins', function(){
    gulp.src(['../plugins/*.js', '!../plugins/*.min.js'])
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('../plugins'));
});

gulp.task('default', ['core', 'secure', 'plugins']);
