// DT173G Webbutveckling III
// Moment 2 - NodeJs & Gulp
// Mattias Bygdeson

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');

gulp.task('default', ['update'], function(){
    // Activate all automation
});

// Move all html files to pub
gulp.task('copy_html', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('pub/'))
});

// Concatenate and compress all javascript files and move to pub
gulp.task('convert_js', function(){
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('pub/js'))
});

// Concatenate and compress all css files and move to pub
gulp.task('convert_css', function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('main.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('pub/css'))
});

// Move all image files to pub
gulp.task('move_img', function(){
    return gulp.src('src/img/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('pub/img'));
});

// Look for changes in the file system
gulp.task('update', function(){
    gulp.watch('src/js/*.js', ['convert_js']);
    gulp.watch('src/css/*.css', ['convert_css']);
    gulp.watch('src/*.html', ['copy_html']);
    gulp.watch('src/img/*.jpg', ['move_img']);
})