/**
 * Created by lin.qiu on 2017/5/18.
 */
var gulp = require('gulp');
var uglifyjs = require('gulp-uglify');
var order = require('gulp-order');
var fs = require('fs');
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var requirename = 'ywrequire.js';
var zeptoname = 'ywcore.js';

gulp.task('minzepto', function(){
    return gulp.src(['lib/zepto.js', 'lib/arttemplate3.1.0.js', '!lib/ywcore.min.js'])
        .pipe(concat(zeptoname, {newLine: ';'}).on('error', err=>console.log(err)))
        .pipe(uglifyjs().on('error', err=>console.log(err)))
        .pipe(rename({suffix:'.min'}).on('error',err=>console.log(err)))
        .pipe(gulp.dest('dist/'));
});

gulp.task('minerquire', function(){
    return gulp.src(['lib/require.js', 'lib/require.text.js', 'lib/require.config.js', 'lib/core/*.js', '!lib/ywrequire.min.js'])
        // .pipe(order([
        //     'lib/require.js',
        //     'lib/require.text.js',
        //     'lib/require.config.js',
        //     'lib/core/*.js'
        // ]))
        .pipe(concat(requirename, {newLine: ';'}).on('error', err=>console.log(err)))
        .pipe(uglifyjs().on('error', err=>console.log(err)))
        .pipe(rename({suffix:'.min'}).on('error',err=>console.log(err)))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minzepto', 'minerquire']);
