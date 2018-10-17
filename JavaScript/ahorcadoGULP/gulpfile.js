/*
* Dependencias
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;;

/*
* Configuración de la tarea 'demo'
*/
gulp.task('default', function () {
     gulp.src('js/source/*.js')
     .pipe(concat('todo.js'))
     .pipe(uglify())
     .pipe(gulp.dest('js/build/'))
});

var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var notify = require('gulp-notify');


//Tarea para comprimir imagenes
gulp.task('images', function () {
//Ruta a la carpeta images apuntando a las imágenes 
gulp.src('./images/**/*.{png,jpg,jpeg,gif,svg}')
  .pipe(imagemin({
       progressive: true,
       svgoPlugins:  [{removeViewBox: false}],
      use: [pngcrush()]
  }))
 //Carpeta donde se guardaran las imágenes comprimidas
  .pipe(gulp.dest('./dist/images'))
  .pipe(notify("La tarea images ha culminado!"));//Mensaje gracias a `gulp-notify`
});





//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
      gulp.watch('./images/**/*', ['images']);
});

//Tarea por defecto
gulp.task('default',['watch', 'images']);