/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;

/*
* Configuración de la tarea 'demo'
*/
gulp.task('default', function () {
     gulp.src('js/source/*.js')
     .pipe(concat('todo.js'))
     .pipe(uglify())
     .pipe(gulp.dest('js/build/'))
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
    gulp.watch('./js/source/*.js', ['default']);
});

//Tarea por defecto
 gulp.task('demo',['watch', 'default']);