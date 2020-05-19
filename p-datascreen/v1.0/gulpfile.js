/**
 * Created by lin.qiu on 2017/7/10.
 */
var gulp = require('gulp');
var uglifyjs = require('gulp-uglify');
var order = require('gulp-order');
var fs = require('fs');
var path = require('path');
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

gulp.task('default', function(){
    gulp.src(['libs/**/*.js', '!libs/**/*.min.js'])
        .pipe(uglifyjs()
            .on('data', f=>console.log(f.path))
            .on('error', err => console.log(err))
            .on('error', gutil.log))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('libs/'));
});