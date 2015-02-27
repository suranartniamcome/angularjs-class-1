'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var del = require('del');
var runSequence = require('run-sequence');

// Add vendor prefix support for the following browsers
var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 21',
    'chrome >= 31',
    'safari >= 5',
    'opera >= 23',
    'ios >= 6',
    'android >= 2.3',
    'bb >= 10'
];


// Compile Sass for Test
gulp.task('sass', function() {
    return gulp.src(['app/scss/**/*.scss'])
        .pipe($.rubySass({
            style: 'compressed',
            // "sourcemap=none": true
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('cmq', function() {
    gulp.src('dist/css/*.css')
        .pipe($.combineMediaQueries({
            log: true
        }))
        .pipe($.minifyCss())
        .pipe(gulp.dest('dist/css'));
});


// Concat JS & Uglify Them
gulp.task('js', function() {
    return gulp.src(['app/js/*.js', '!app/js/all.js'])
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
        .pipe($.uglify({
            preserveComments: 'some'
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('dist/js'));
});

// Copy Partials To Dist
gulp.task('partials', function() {
    return gulp.src(['app/partials/**/*'])
        .pipe(gulp.dest('dist/partials'));
});

// Copy Images To Dist
gulp.task('images', function() {
    return gulp.src(['app/images/**/*'])
        .pipe(gulp.dest('dist/images'));
});


// Copy Web Fonts To Dist
gulp.task('fonts', function() {
    return gulp.src(['app/fonts/**'])
        .pipe(gulp.dest('dist/fonts'));
});

// Copy All Files At The Root Level (app)
gulp.task('copy', function() {
    return gulp.src(['app/*', '!app/scss', '!app/js'])
        .pipe(gulp.dest('dist'));
});


// Start BrowserSync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app",
            proxy: 'localhost'
        }
    });
});

// Serve, Default Task
gulp.task('default', ['sass', 'js', 'browser-sync'], function() {
    
    gulp.watch(['app/**/*.html'], browserSync.reload);
    gulp.watch(['app/scss/**/*.scss'], ['sass']);
    gulp.watch(['app/js/**/*.js'], ['js']);

});

gulp.task('clean', del.bind(null, ['dist']));


// Build Production Files
gulp.task('build', ['clean'], function(cb) {
    runSequence('sass', ['cmq', 'js', 'partials', 'images', 'fonts', 'copy'], cb);
});
