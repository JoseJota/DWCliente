/*
* Dependencias
*/
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify-es").default;

/*
* Configuración de la tarea 'demo'
*/
gulp.task("demo", function() {
  gulp
    .src("js/source/*.js")
    .pipe(concat("todo.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js/build/"));
});