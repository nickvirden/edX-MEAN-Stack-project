var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
    gulp.
        src('./MochaTest.js').
        pipe(mocha()).
        on('error', function(err) {
            this.emit('end');
        });
});

gulp.task('watch', function() {
    // First argument is file you want to watch
    // Second argument is the task you want to run
    gulp.watch('./*.js', ['test']);
});