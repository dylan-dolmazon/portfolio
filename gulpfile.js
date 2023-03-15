const gulp = require('gulp');
const  sass  =  require ( 'gulp-sass' ) ( require ( 'sass' ) ) ;
const minify = require('gulp-minify');
const concat = require ( 'gulp-concat' ) ;
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('min-js', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('all.js'))
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-css', function() {
    return gulp.src('dist/css/all.css')
        .pipe(cleanCSS())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('css', function() {

    return gulp.src(['src/assets/scss/*.scss', 'src/assets/scss/**/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function(){
    return gulp.src('src/assets/img/*.+(png|jpg|gif|svg)')
        .pipe(gulp.dest('dist/img'))
});

function watch() {
    browserSync.init({
      server: {
        baseDir: './',
        index: 'index.html'
      }
    });
    gulp.watch('src/assets/js/*.js', gulp.series('min-js'));
    gulp.watch('src/assets/scss/*.scss', gulp.series('css','minify-css'));
    gulp.watch('src/assets/img/*.*',gulp.series('images'));
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function defaut() {
    browserSync.init({
        server: {
          baseDir: './',
          index: 'index.html'
        }
      });
    gulp.series('min-js', 'css','minify-css','images');
}

exports.watch = watch;
exports.default = defaut;