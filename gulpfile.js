var gulp = require('gulp'),
    sass = require('gulp-sass'), //Подключаем Sass пакет
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('mytask', function () {
  return gulp.src('source-files') // Выборка исходных файлов для обработки плагином
    .pipe(plugin()) // Вызов Gulp плагина для обработки файла
    .pipe(gulp.dest('folder')) // Вывод результирующего файла в папку назначения (dest - пункт назначения)
})

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('sass/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('sass/*.sass', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});