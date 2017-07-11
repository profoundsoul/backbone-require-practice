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

var paName = 'all.js'
gulp.task('default', function(){
    // gulp.src(['custom/lib.js', 'custom/min.js', 'custom/my.full.js', 'custom/min-choose.js', 'custom/chart.min.js', 'custom/min-date.js'])
    gulp.src(['src/**/*.js'])
        ///若有压缩顺序，填写order中数组，填写文件名字即可（注意不需要带路径）
        .pipe(order([
            'lib.js',
            'min.js',
            'my.full.js',
            'min-choose.js',
            'chart.min.js',
            'min-date.js'
        ]))
        // .pipe(concat(paName, {newLine: ';'}).on('error', err=>console.log( rr)))
        // .pipe(gulp.dest('dist/'))
        .pipe(uglifyjs()
            .on('data', f=>console.log(f.path))
            .on('error', err => console.log(err))
            .on('error', gutil.log))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['default'], function(){
    return watch(['src/**/*.js'], function(){
        gulp.start(['default']);
    });
});