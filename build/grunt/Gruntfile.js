/**
 * Created by Administrator on 2016/6/19.
 */
module.exports=function(){
    //grunt 三部曲（config、loadTask、register）
    //配置插件参数及各种路径
    grunt.initConfig({
        pkg:grunt.file.readJSON('../package.json'),
        uglify:{
            src:["<%=pkg.dir%>/**/*.js"],
            dest:["<%=pkg.dir%>/dist/**/*.js"]
        }
    });

    //加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //注册自动化任务
    grunt.registerTask('default', ['uglify']);

};