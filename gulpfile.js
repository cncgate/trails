var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var convertEncoding = require('gulp-convert-encoding');
var rimraf = require('rimraf');
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var project = require("./project.json");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";

paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";

paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.js";


gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task('clean', ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    gulp.src([paths.js, "!" + paths.minJs], {})
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.js, "!" + paths.minCss], {})
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

/* Some setup notes:
 * 
 Go to Tools > Options > Projects and Solutions > External Web Tools 
 and reorder locations so that $(PATH) is above $(DevEnvDir)\Extensions\Microsoft\Web Tools\External. 
 
 */