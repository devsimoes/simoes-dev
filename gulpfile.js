const {watch, src, dest, series, parallel} = require('gulp');
const postcss = require('gulp-postcss');
const browserSync= require('browser-sync').create();
const rename = require('gulp-rename');
const zip = require('gulp-zip');

browserSync.init({proxy: "http://localhost/wordpress"});

function cssBuilder(done) {

  src('assets/css/app.css')
    .pipe(postcss([require('tailwindcss')]))
    .pipe(rename('style.css'))
    .pipe(dest('.'));

  done();
}

function cssWatcher(done) {

  watch(['assets/css/*.css', 'tailwind.config.js'], cssBuilder);
  watch('style.css').on('change', browserSync.reload);

  done();
}

function phpWatcher(done) {

  watch('**/*.php').on('change', browserSync.reload);

  done();
}

const watchers = parallel(phpWatcher, cssWatcher);

function zipBuilder(done) {

  src(['**', '!node_modules/**', '!simoes-dev.zip'])
    .pipe(zip('simoes-dev.zip'))
    .pipe(dest('.'));
  done();
}

exports.css = cssBuilder;
exports.zip = zipBuilder;
exports.default = series(watchers);