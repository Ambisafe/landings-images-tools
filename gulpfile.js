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
		.pipe(gulp.dest('dist/'))
		.pipe(webp())
		.pipe(gulp.dest('dist/'))
});

gulp.task('resize', ['clean'], function() {
	return gulp.src('src/**')
		.pipe(resize({
			percentage: 50,
			imageMagick: true,
			crop: true,
			interlace: true,
			quality: 1,
			upscale: false
			}))
		.pipe(rename(function (path) {
		    path.basename = path.basename.slice(0, path.basename.length-3)
		  }))
		.pipe(gulp.dest('src/'))
});

gulp.task('min', ['clean'], function() {
	return gulp.src('src/**')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/'))
});
