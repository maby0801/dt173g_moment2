// DT173G Webbutveckling III
// Moment 3 - CSS-preprocessorer och SASS
// Mattias Bygdeson

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['copy_html', 'convert_js', 'convert_css', 'move_img', 'move_fonts', 'update'], function(){
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

// Convert all sass files to css. Concatenate and compress all css files and move to pub
gulp.task('convert_css', function(){
    return gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(concat('style.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('pub/css'))
});

// Move all jpg and png image files to pub
gulp.task('move_img', function(){
    return gulp.src('src/img/*.{jpg,png}')
        .pipe(imagemin())
        .pipe(gulp.dest('pub/img'));
});

// Move all fonts to pub
gulp.task('move_fonts', function(){
    return gulp.src('src/fonts/*.{ttf,otf}')
        .pipe(gulp.dest('pub/fonts/'));
});

// Look for changes in the file system
gulp.task('update', function(){
    gulp.watch('src/js/*.js', ['convert_js']);
    gulp.watch('src/scss/*.scss', ['convert_css']);
    gulp.watch('src/*.html', ['copy_html']);
    gulp.watch('src/img/*.{jpg,png}', ['move_img']);
    gulp.watch('src/fonts/*.{ttf,otf}', ['move_fonts']);
})