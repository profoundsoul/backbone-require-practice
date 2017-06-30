/**
 * Created by lin.qiu on 2017/5/18.
 */
var gulp = require('gulp');
var uglifyjs = require('gulp-uglify');
var order = require('gulp-order');
var fs = require('fs');
var path = require('path');
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var requirename = 'ywrequire.js';
var zeptoname = 'ywcore.js';
var watch = require('gulp-watch');
var gutil = require('gulp-util');

gulp.task('minzepto', function(){
    return gulp.src(['lib/zepto.js', 'lib/zepto.fx.js', 'lib/zepto.fx_methods.js', 'lib/zepto.callbacks.js', 'lib/zepto.deferred.js', 'lib/arttemplate3.1.0.js', '!lib/ywcore.min.js'])
        .pipe(concat(zeptoname, {newLine: ';'}).on('error', err=>console.log(err)))
        .pipe(uglifyjs().on('error', err=>console.log(err))
            .on('error', err => console.log(err))
            .on('error', gutil.log))
        .pipe(rename({suffix:'.min'}).on('error',err=>console.log(err)))
        .pipe(gulp.dest('dist/'));
});

gulp.task('minerquire', function(){
    return gulp.src(['lib/require.js', 'lib/require.text.js', 'lib/require.css.js', 'lib/require.config.js', 'lib/core/**/*.js', '!lib/ywrequire.min.js'])
        // .pipe(order([
        //     'lib/require.js',
        //     'lib/require.text.js',
        //     'lib/require.config.js',
        //     'lib/core/*.js'
        // ]))
        .pipe(concat(requirename, {newLine: ';'}).on('error', err=>console.log(err)))
        .pipe(uglifyjs().on('data', f=>console.log(f.path))
            .on('error', err => console.log(err))
            .on('error', gutil.log))
        .pipe(rename({suffix:'.min'}).on('error',err=>console.log(err)))
        .pipe(gulp.dest('dist/'));
});

var pluginDest = 'dist/plugins';
gulp.task('pluginjs', ['copyplugin'], function(){
    gulp.src(['lib/plugins/**/*.js'])
        .pipe(uglifyjs()
            .on('data', f=>console.log(f.path))
            .on('error', err => console.log(err))
            .on('error', gutil.log))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(pluginDest))
});

gulp.task('plugincss', ['copyplugin'], function(){
    gulp.src(['lib/plugins/**/*.css'])
        .pipe(cssmin({output:{comments:'license'}})
            .on('data', f=>console.log(f.path))
            .on('error', err => console.log(err))
            .on('error', gutil.log))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(pluginDest))
});

gulp.task('copyplugin', function(){
    gulp.src(['lib/plugins/**/*.*'])
        .pipe(gulp.dest(pluginDest));
});

gulp.task('plugin', ['pluginjs', 'plugincss']);

gulp.task('default', ['minzepto', 'minerquire']);

gulp.task('watch', ['pluginjs', 'plugincss'], function(){
   return watch(['lib/plugins/**/*.js'], function(){
       gulp.start(['pluginjs', 'plugincss']);
   })
});
