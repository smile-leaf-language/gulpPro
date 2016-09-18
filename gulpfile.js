var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var prefix = require('./plugin/prefix.js');

// gulp.task("rice",function(){
//     console.log("rice");
// });
// gulp.task("egg",function(cb){
//     setTimeout(function(){
//         console.log("egg");
//         cb();
//     },1000);
// });
// gulp.task("cook",["rice","egg"],function(){
//     console.log("cook");
// });
// gulp.task("eat",["cook"],function(){
//     console.log("eat");
// });
// gulp.task("copy",function(){
//     gulp.src("./app/index.html")
//          .pipe(gulp.dest("./dist"));
// });
//--------------------------------------------------------------------
// gulp.task("watch",function(){
//     gulp.watch("./app/index.html",["copy"]);
// });
// gulp.task("watch2",function(){
//     //event是一个对象他有两个参数   type：指定文件变化的类型   added   changed   deleted
//     //path 是变化文件的绝对路径
//     gulp.watch("./app/index.html",function(event){
//         if(event.type == "changed") {
//             console.log("event");
//         };
//     });
// });
//---------------------------------------------------------------------
// gulp.task("css", function () {
//     gulp.src("./app/css/*.less")
//         .pipe($.less())
//         .pipe(gulp.dest("./dist/css"));
// });
// gulp.task("js", function () {
//     gulp.src("./app/js/*.js")
//         .pipe($.concat("app.js"))
//         .pipe(gulp.dest("./dist/js"))
//         .pipe($.uglify())
//         .pipe($.rename("app.min.js"))
//         .pipe(gulp.dest("./dist/js/"));
// });
// gulp.task("image", function () {
//     gulp.src("./app/image/*.jpg")
//         .pipe($.imagemin())
//         .pipe(gulp.dest("./dist/image/"));
// });
//------------------------------------------------------------
// gulp.task("copy",function(){
//     gulp.src("./app/index.html")
//         .pipe(gulp.dest("./dist"))
//         .pipe($.connect.reload());//启动浏览器自动刷新
// });
// gulp.task("watch",function(){
//     gulp.watch("./app/index.html",["copy"]);
// });
// gulp.task("server",function(){
//     $.connect.server({
//         root:"./dist",
//         port:8080,
//         livereload:true//配置浏览器可以自动刷新
//     });
// });
// gulp.task("default",["server","watch"]);
//-------------------------------------------------------------

// gulp.task("jshint",function(){
//     gulp.src("./app/js/*.js")
//         .pipe($.jshint())//执行代码检查 需要配置.jshintrc文件  代码检查才会生效 配置参考官网（http://jshint.com/docs/）
//         .pipe($.jshint.reporter());//输出检查结果
// });

//---------------------------自定义插件----------------------------------
gulp.task("default",function(){
    gulp.src('./app/js/app.js')
        .pipe(prefix('go up'))
        .pipe(gulp.dest('./dist/js/'));
});
