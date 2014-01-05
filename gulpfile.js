var gulp = require('gulp');
var pureHTML = require('./index');

gulp.task('default', function () {
    gulp.src('index.html')
        .pipe(pureHTML(['h1', '.details', 'h3']))
        .pipe(gulp.dest('dist'));
});

