var gulp = require ('gulp');
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync');
reload = browserSync.reload;

gulp.task('uglify', function () {
	gulp.src([
		'site/js/jquery.js',
		'site/js/bootstrap.min.js',
		'site/js/scrollReveal.min.js',
		'site/js/jquery-ui.js',
		'site/js/jquery.cookie.js',
		'site/js/jquery.mask.js',
		'site/js/validator.min.js',
		'site/js/smoothscroll.js',
		'site/js/mousescroll.js',
		'site/js/jquery.easing.min.js',
		'site/js/jquery.plusanchor.min.js',
		'site/js/jquery.barrating.js',
		'site/js/cropit.js',
		'site/js/validation_cdv.js'
		])
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(rename({
		suffix:'.min',
		basename: 'main'
	}))
	.pipe(gulp.dest('site/dist'))
});

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: './site/'
		}
	});
});

gulp.task('watch', function(){
	gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'site'}, reload);
});

gulp.task('default',  ['serve', 'uglify', 'watch']);