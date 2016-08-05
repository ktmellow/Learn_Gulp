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

// If you forget to write sass:watch or sass at the end, then we should just do a watch!
gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss', ['sass'])
})

// gulp.task('default', ['first-task', 'second-task'])





// NOTES FROM ALEX: 
// Alexander Chang [10:04 AM]  
// this was an example of using gulp to convert sass into css that our browser understands

// [10:05]  
// the first two gulp tasks are commented out, but if you type gulp first-task it will run the first-task

// [10:06]  
// the important part is the sass task, it takes the source of your sass files, pipes it through a sass function 
// that converts it to css and then pipe it to a destination

// [10:09]  
// https://github.com/teamKT/Learn_Gulp

// [10:10]  
// go ahead and clone, npm install to check it out