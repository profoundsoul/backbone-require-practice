# lizardDemo

抽取lizard单页框架核心OOP与Model、Store部分，使得框架更minify，剔除Backbone以及Backbone.Router单页路由以适应传统动态web站点，
使用它依赖更少、引用文件更少、但依然进行OOP和模块化编程，主要包含如下功能：
+ 支持js继承和OOP编程
+ 依赖require.js和jquery.js(必须是1开头版本)，支持Require所支持的加载器
+ 内嵌underscore.js，支持undercore带来的增强功能以及html 模板
+ 支持Model和Store，本地存储支持过期时间expireTime、查询参数变化检测等。
+ 常用utility库，包括日期时间、常用验证、hash值监测等

## 使用

依赖jquery.js和require.js这两个js库可以去download下来,可以统一使用res.yitb.com库中的

```
<script src="//res.yitb.com/libs/3rdlibs/jquery.js"></script>
<script src="//res.yitb.com/libs/3rdlibs/require.min.js"></script>
<script src="//res.yitb.com/libs/core.js"></script>
<script>
require(['cBase', 'cModel'], function(cBase, cModel){
    # do something
});
</script>
```


## 继承

```
require(['cBase', 'cUILayer'], function(cBase, cUILayer){
    var PopMask = new cBase.Class(cUILayer, {
                __propertys__: function () {

                },
                initialize: function ($super, opts) {

                }
            });
});

```

## require加载器

```
define(['cModel','cStore', 'cBase'], function(AbstractModel, store, cBase){

});

#也可以使用require加载
require(['cModel','cStore', 'cBase'], function(AbstractModel, store, cBase){
    do somethings
});
```

## html 模板解析器

模板加载器是使用underscore中实例_.template

```
var tplFn = _.template('<div><%=name%></div>');
var html = tplFn({name:'linq'});

# 能够得出<div>linq</div>
console.log(html);

```

## webapi Model

具体使用看[html1](html_1.html)中的model 的Demo

