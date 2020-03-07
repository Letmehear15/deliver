const gulp        = require('gulp');
const browserSync = require('browser-sync');
const scss        = require('gulp-sass');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
      .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('server', "sass", 'watch'));