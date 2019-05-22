var gulp = require('gulp');

var less = require('gulp-less');

var browserSync = require('browser-sync');

var del = require('del');

var imagemin = require('gulp-imagemin');

var pngquant = require('pngquant');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
    gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});

gulp.task('clean', function () {
    return del.sync('dist');
})

gulp.task('img', function() {
    return gulp.src('app/images/**/*')
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/less/*.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);

});

gulp.task('build', ['clean', 'img', 'less'], function() {
    var buildCss = gulp.src(['app/css/style.css'])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))

    var buildPhp = gulp.src('app/*.php')
    .pipe(gulp.dest('dist'))
});
