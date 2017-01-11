/**
 * Created by mumu on 2017/1/11.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
    gulp.src(['underscore.js', 'core.js'])
        .pipe(uglify())
        .pipe(concat({path:'core.min.js'}))
        .pipe(gulp.dest(''));
});
