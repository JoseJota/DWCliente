/*
* Dependencias
*/
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify-es").default;
var dollar = require('gulp-load-plugins')
/*
* Configuración de la tarea 'demo'
*/
gulp.task("javascript", function() {
  gulp
    .src("js/source/*.js")
    .pipe(concat("todo.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js/build/"));
});

/* gulp.task("sass", function() {
  gulp
    .src("css/scss/*.scss")
    .pipe(concat("todo.css"))
    .pipe(uglify())
    .pipe(gulp.dest("css/css/"));
});
 */
var sass = require('gulp-sass');
var notify = require('gulp-notify');

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {

//Ruta de la carpeta sass apuntando a los archivos `.scss`
 return gulp.src('css/scss/*.scss') 

 .pipe(concat('todo.css'))



//Compila los archivos `.scss` y muestra posibles errores
  .pipe(sass().on('error', sass.logError))  

//Carpeta donde se guardaran los archivos `.css` compilado
 .pipe(gulp.dest('css/css/'))

//Mensaje gracias al plugin `gulp-notify`
.pipe(notify("Tarea sass terminada!"));
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
     gulp.watch('./sass/**/*', ['sass']);
});

//Tarea por defecto
  gulp.task('default',['watch', 'sass']);





gulp.task('images', function () {
  return gulp.src('image/*.{jpg,png}')
    .pipe(dollar.responsive({
      '*.jpg': {
        // Resize all JPG images to 200 pixels wide
        width: 200,
      },
      '*.png': {
        // Resize all PNG images to 50% of original pixels wide
        width: '50%',
      },
      // Resize all images to 100 pixels wide and add suffix -thumbnail
      '*': {
        width: 100,
        rename: { suffix: '-thumbnail' },
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist'));
});