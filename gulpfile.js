var gulp = require ('gulp');
browserSync = require('browser-sync');
reload = browserSync.reload;

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

gulp.task('default',  ['serve', 'watch']);