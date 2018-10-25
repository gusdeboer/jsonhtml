'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    pump = require('pump'),
    rename = require('gulp-rename');

gulp.task('clean', function () {
    return del('dist/*');
});

gulp.task('copy', function () {
    return gulp.src(['src/*.js']).pipe(gulp.dest('dist/'));
});

gulp.task('minify', function (cb) {
    pump([
            gulp.src('src/*.js')
                .pipe(uglify())
                .pipe(rename({suffix: '.min'})),
            gulp.dest('dist')
        ],
        cb
    );
});

/* Main task */
gulp.task('build', ['clean', 'minify','copy']);
