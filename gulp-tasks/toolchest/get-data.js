var gulp = require('gulp');
var dataTools = require('./get-posts');

gulp.task('get:data', gulp.series('get:posts', function(done) {
    console.log("data retrieved");
    done();
}));
