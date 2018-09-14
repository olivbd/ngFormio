module.exports = function(gulp, plugins) {
  return function () {
    return gulp.src(plugins.bowerFiles({
        includeSelf: true
    }))
      .pipe(plugins.filter('**/*.css'))
      .pipe(plugins.concat('knitiv-form-full.css'))
      .pipe(gulp.dest('dist'))
      .pipe(plugins.cssnano({zindex: false}))
      .pipe(plugins.rename('knitiv-form-full.min.css'))
      .pipe(gulp.dest('dist'));
  };
};
