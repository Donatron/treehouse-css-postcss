var gulp = require('gulp'),
    postcss = require('gulp-postcss');

// Plugins
var cssnext = require('postcss-cssnext'),
    pxtorem = require('postcss-pxtorem'),
    svgFragments = require('postcss-svg-fragments'),
    cssnano = require('cssnano');


gulp.task("css", function() {
  var processors = [
    cssnext({browsers: ['last 4 versions', 'Firefox < 27']}),
    svgFragments,
    cssnano,
    pxtorem({
      propWhiteList: [],
      mediaQuery: true
    })
  ];

  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
  gulp.watch('./src/*.css', ['css']);
});
