var gulp = require('gulp');
var merge = require('merge2');
var exec = require('child_process').exec;
var mainBowerFiles = require('main-bower-files');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var vinylPaths = require('vinyl-paths');

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


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var swdbConfig = {
    src: 'src/swdb/',
    dest: 'build/swdb/',
    libs: 'build/swdb/app/libs/',
    definitions: 'typings/',
    tmp : 'build/temp/'
};

var tsStarWars = plugins.typescript.createProject({
    target: 'ES5',
    declarationFiles: true,
    noExternalResolve: false,
    sortOutput: true,
    typescript: require('typescript'),
});

gulp.task('remove-app', function(){
    del(swdbConfig.dest+"app");
});

gulp.task('ts-files', function () {
    var tsResult = gulp
        .src(swdbConfig.src + '**/*.ts')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(tsStarWars));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
        tsResult.dts
            .pipe(gulp.dest(swdbConfig.definitions)),
        tsResult.js
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(swdbConfig.tmp))
            .pipe(gulp.dest(swdbConfig.dest))
    ]);
});

gulp.task('bower-files', function () {
    var bower = mainBowerFiles({
    });

    return gulp.src(bower, { base: "." })
        .pipe(gulp.dest(swdbConfig.dest));
});

gulp.task('app-js', function () {
    return gulp.src(swdbConfig.src + "**/*.js")
        .pipe(gulp.dest(swdbConfig.dest));
});

gulp.task('app-templates', function () {
    return gulp.src(swdbConfig.src + "**/*.html")
        .pipe(gulp.dest(swdbConfig.dest));
});


// inject bower components
gulp.task('wiredep',['ts-files'], function () {
    var wiredep = require('wiredep').stream;
    var options = {
        ignorePath: ['../..']
    };
    var sources = gulp.src(
        [
            swdbConfig.src + '**/*.js', 
            swdbConfig.src + '**/*.css'
        ],
        { read: false }
    );
   
    var ts = gulp.src(
       swdbConfig.tmp + '**/*.js',
        {read:false}
    );

    gulp.src(swdbConfig.src + "*.html")
        .pipe(wiredep(options))
        .pipe(plugins.inject(ts, {name:'typescript', ignorePath: swdbConfig.tmp}))
        .pipe(plugins.inject(sources, { name:'javascript', ignorePath: swdbConfig.src }))
        .pipe(gulp.dest(swdbConfig.dest));
});

gulp.task('build-swdb', ['bower-files', 'wiredep', 'app-js','app-templates'], function () {

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

