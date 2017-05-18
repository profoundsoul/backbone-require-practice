/**
 * Created by lin.qiu on 2017/5/18.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var order = require('gulp-order');

var libname = 'ywcore.js';

gulp.task('minjs', function(){
    return gulp.src(['lib/zepto.js', 'lib/underscore.js'])
        .pipe(concat(libname, {newLine: ';'}).on('error',err=>console.log(err)))
        .pipe(uglify().on('error',err=>console.log(err)))
        .pipe(rename({suffix:'.min'}).on('error',err=>console.log(err)))
        .pipe(gulp.dest(f=>f.base));
});

gulp.task('default', ['minjs']);
