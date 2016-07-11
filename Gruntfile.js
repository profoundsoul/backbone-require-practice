/**
 * Created by Administrator on 2016/6/19.
 */
module.exports = function (grunt) {
    //grunt 三部曲（config、loadTask、register）
    //配置插件参数及各种路径
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ["lib/util.js", 'source/*.js'],
                dest: "dist/tt.js"
            },
            web: {
                files: {
                    'dist/util.min.js': 'lib/util.js'
                }
            },
            test: {
                files: [
                    {src: 'lib/util.js', dest: 'dist/util.min.js'},
                    {src: 'source/*.js', dest: 'dist/tt.js'}
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "",
                    src: ['source/*.js', 'lib/util.js'],
                    dest: 'dist/all',
                    ext:'.min.js',
                    extDot:'last',
                    flatten:true
                }]
            }
        },
        clean:{
            all:{
                src:['dist/', 'dest/'],
                options:{
                    force:true
                }
            }
        },
        htmlmin: {
            options:{
                removeComments: true,
                minifyCSS:false,
                minifyJS:false
            },
            dist: {
                options: {
                    collapseWhitespace: true,
                    minifyCSS:true,
                    minifyJS:true
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['**/*.html', '!**/node_modules/**'],
                    dest: 'dist/'
                }]
            }
        },
        copy:{
            main:{
                expand: true,
                dest:'dest/',
                src:['**/*.*', '!node_modules/**/*.*', '!dist/**/*.*','!Gruntfile.js', '!package.json'],
                filter:'isFile'
            }
        },
        watch:{
            main:{
                files:['**/*.*', '!node_modules/**/*.*', '!dist/**/*.*','!Gruntfile.js', '!package.json','!dest/**/*.*'],
                tasks:['copy:main']
            }
        },
        imagemin:{
            main:{
                expand:true,
                src:['images/*.{gif,png}'],
                dest:'dest/',
                filter:'isFile',
                fattern:false,
                rename:function(dest, src){
                    //取出文件后缀，将每个文件都加上.min.picextension,此处没有实现功能，需要自己去用node实现
                    var path = require('path'),
                        subdir  = path.dirname(src),
                        ext  = path.extname(src),
                        name = path.basename(src, ext);
                    return dest + '/' + subdir +'/' + name + '.min' + ext;
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');



    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //加载copy插件
    grunt.loadNpmTasks('grunt-contrib-copy');

    ////注册自动化任务
    //grunt.registerTask('default', ['uglify:build']);
};