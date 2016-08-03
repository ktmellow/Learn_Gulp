const gulp = require('gulp');
const sass = require('gulp-sass');

// gulp.task('first-task', function(){
//   console.log('hi first task');
// })

// gulp.task('second-task', function(){
//   console.log('hi second task');
// })

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass'])
})


// gulp.task('default', ['first-task', 'second-task'])