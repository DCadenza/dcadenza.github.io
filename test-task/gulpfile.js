'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass:watch', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
});

var browserSync = require('browser-sync');

var del = require('del');

var imagemin = require('gulp-imagemin');

var pngquant = require('pngquant');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false,
    })
});

gulp.task('clean', gulp.series(async function () {
    return del.sync('dist');
    return console.log("HTTP Server Started");
}));

gulp.task('img', gulp.series(function() {
    return gulp.src(['app/images/**/*'])
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
}));

gulp.task('watch', gulp.parallel('browser-sync', 'sass', function() {
    gulp.watch('app/sass/*', gulp.parallel('sass'));
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
}));

gulp.task('build', gulp.series('clean', 'img', 'sass', async function() {
    var buildCss = gulp.src(['app/css/*.css'])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))

    var buildPhp = gulp.src('app/*.php')
    .pipe(gulp.dest('dist'))

    var buildAssets = gulp.src('app/assets/**/*/*')
    .pipe(gulp.dest('dist/assets'))
    return console.log("HTTP Server Started");
}));
