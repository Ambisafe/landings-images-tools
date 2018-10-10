'use strict';

var gulp = require('gulp'),
	clean = require('gulp-clean'),
	imagemin = require('gulp-imagemin'),
	imageminWebp = require('imagemin-webp'),
	resize = require('gulp-image-resize'),
	rename = require('gulp-rename'),
	webp = require('gulp-webp'); //requires imageMagick!

function buildImages() {
    gulp.src('src/**')
        .pipe(gulp.dest('build/product/images'))
   }

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});


gulp.task('toWebp', function() {
	return gulp.src('src/**')
		.pipe(webp())
		.pipe(gulp.dest('dist/'))
});

gulp.task('resize', function() {
	return gulp.src('src/**')
		.pipe(resize({
			percentage: 50,
			imageMagick: true
			}))
		.pipe(gulp.dest('src/'))
});
