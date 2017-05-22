/**
 * Created by lin.qiu on 2017/5/18.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var order = require('gulp-order');
var tojson = require('gulp-file-contents-to-json');
var rjs = require('gulp-requirejs');
var fs = require('fs');
var amdOptimize = require("amd-optimize");
var concat = require("gulp-concat");
var requirejs = require('requirejs');

var requirejsOptimize = require('gulp-requirejs-optimize');


var zeptoname = 'ywcore.js';
var requirename = 'ywrequire.js';

gulp.task('minzepto', function(){
    return gulp.src(['lib/zepto.js', 'lib/arttemplate3.1.0.js', '!lib/ywcore.min.js'])
        .pipe(concat(zeptoname, {newLine: ';'}).on('error', err=>console.log(err)))
        .pipe(uglify().on('error',err=>console.log(err)))
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
        .pipe(uglify().on('error',err=>console.log(err)))
        .pipe(rename({suffix:'.min'}).on('error',err=>console.log(err)))
        .pipe(gulp.dest('dist/'));
});


function readProjectSetting(path) {
    var json = {};
    try {
        var file = fs.readFileSync(path);
        json = JSON.parse(file);
    } catch (err) {
        throw err;
    }
    return json;
}

gulp.task('default', ['minzepto', 'minerquire']);
