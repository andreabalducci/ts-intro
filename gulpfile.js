var gulp = require('gulp');
var merge = require('merge2');
var exec = require('child_process').exec;
var mainBowerFiles = require('main-bower-files');
var plugins = require('gulp-load-plugins')();

var tsProject = plugins.typescript.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    sortOutput: true,
    typescript: require('typescript')
});

var tsDemo = plugins.typescript.createProject({
    target: 'ES5',
    declarationFiles: true,
    noExternalResolve: false,
    sortOutput: true,
    typescript: require('typescript')
});

var helloConfig = {
    src: 'src/intro/',
    dest: 'build/intro/'
};


var paths = {
    scripts: 'src/**/*.ts',
    build: 'build/',
    definitions: 'typings/'
};


gulp.task('build-hello', function () {
    var tsResult = gulp
        .src(helloConfig.src + "**/*.ts")
        .pipe(plugins.typescript(tsDemo));

    return tsResult.js
        .pipe(plugins.concat('hello.js'))
        .pipe(gulp.dest(helloConfig.dest));
});

gulp.task('run-hello', ['build-hello'], function () {
    exec('node ./build/intro/hello.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('scripts', function () {
    var tsResult = gulp
        .src(paths.scripts)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
        tsResult.dts
            .pipe(gulp.dest(paths.definitions)),
        tsResult.js
            .pipe(plugins.concat('app.js'))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(paths.build))
    ]);
});




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var swdbConfig = {
    src: 'src/swdb/',
    dest: 'build/swdb/',
    libs: 'build/swdb/app/libs/'
};

gulp.task('bower-files', function () {
    var bower = mainBowerFiles({
    });

    return gulp.src(bower, { base: "." })
        .pipe(gulp.dest(swdbConfig.dest));
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;
    var options = {
        ignorePath: ['../..']
    };

    gulp.src(swdbConfig.src + "*.html")
        .pipe(wiredep(options))
        .pipe(gulp.dest(swdbConfig.dest));
});

gulp.task('build-swdb', ['bower-files', 'wiredep'], function () {

});

gulp.task('watch', ['scripts'], function () {
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('server', ['watch'], function () {
    console.log('starting node server');
    exec('node ./server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

