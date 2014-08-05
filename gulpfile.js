var wiredep = require('wiredep').stream;
var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('bower', function() {
  gulp.src('./templates/layouts/*.jade')
      .pipe(wiredep({
        ignorePath: '../../build/'
      }))
      .pipe(gulp.dest('./templates/layouts'));
});

gulp.task('jade', function() {
  gulp.src('./templates/*.jade')
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest('./build'));
});

gulp.task('default', ['bower', 'jade']);
