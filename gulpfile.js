const gulp =require("gulp");
const htmlmin=require("gulp-htmlmin");
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(htmlmin({
        removeEmptyAttributes:true,
        colllapseWhitespace:true,
    }))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});


gulp.task("images",function(){
    return gulp.src("*.{jpg,png")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
});


gulp.task("script",function(){
    return gulp.src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
gulp.task("build",["copy-html","images","data","script"],function(){
    console.log("成功");
});
// 处理css:
const scss=require("gulp-sass");
const minifycss=require("gulp-minify-css");
const rename=require("gulp-rename");
// 一个文件一个任务：
gulp.task("scss",function(){
 return gulp.src("index.scss")
 .pipe(scss())
 .pipe(gulp.dest("dist/css"))
 .pipe(minifycss())
 .pipe(rename("index.mini.css"))
 .pipe(gulp.dest("dist/css"))
 .pipe(connect.reload());
})
gulp.task("scss1",function(){
    return gulp.src("openbig.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("openbig.mini.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss2",function(){
    return gulp.src("signIn.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("signIn.mini.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss3",function(){
    return gulp.src("register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("register.mini.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("scss4",function(){
    return gulp.src("shopping.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("shopping.mini.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
// 监听：
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("*.{jpg,png",["images"]);
    gulp.watch(["*.js","!gulpfile.js"],["script"]);
    gulp.watch(["*.json","!package.json"],["data"]);
    gulp.watch("index.scss",["scss"]);
    gulp.watch("openbig.scss",["scss1"]);
    gulp.watch("signIn.scss",["scss2"]);
    gulp.watch("register.scss",["scss3"]);
    gulp.watch("shopping.scss",["scss4"]);
});

const connect =require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true,

    });
});


// 同时启动server和watch两个任务：
gulp.task("default",["server","watch"]);