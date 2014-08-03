var wiredep = require('wiredep').stream;
var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('bower', function() {
  gulp.src('./templates/*.jade')
      .pipe(wiredep())
      .pipe(gulp.dest('./templates/'));
});

gulp.task('jade', function() {
  gulp.src('./templates/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./build'));
});

gulp.task('default', ['bower', 'jade']);
