# costom framework小框架

> 基于jquery，使用前必须先引入jquery，对jQuery静态对象进行拓展，具有如下特点：
+ 所有拓展均在jQuery.custom
+ 内部集成underscore库，使用underscore模板引擎和underscore常用的拓展库
+ 页面Controller，使用$.custom.View() 进行使用
+ 页面组件Component，使用$.custom.component()进行组件拓展和使用
+ 页面蒙版Mask，使用$.custom.Mask()展示页面蒙版
+ 页面弹窗Dialog，使用$.custom.Dialog()进行弹窗展示
+ 注册弹窗至Dialog命名空间下面，使用$.custom.Dialog.register进行弹窗名字注册



## jQuery.custom

目前拓展方法：
+ $.custom.View                  页面Controller函数拓展
+ $.custom.Component
+ $.custom.Mask
+ $.custom.Dialog
+ $.custom.Dialog.Register
+ $.custom.convertCookieObject   获取当前页面cookie，并转化为object
+ $.custom.createDynamicScript   动态创建script脚本标签，创建成功后执行回调函数
+ $.custom.uniqueArray           数组去重
+ $.custom.getParamsFromUrl      从Url中获取？后面参数
+ $.custom.generateUrlParam      将对象生成？参数字符串
+ $.custom.dateParse             日期解析函数
+ $.custom.dateFormat            日期格式化函数


##jQuery.custom.View

> 主要是为了解决js零散，events和method统一管理和调用。

参数：options   (类型：对象）
```javascript
$.custom.View({
    //表示当前Controller需要管理的元素选择器，默认值或无效选择器均为body
    //运行时自动生成this.$el 的jQuery对象
    //所有events均使用委托方式绑定在此元素上
    el:'body',
    //事件绑定统一处理对象，controller会自动统一管理所有事件
    //对象{key:value},
    //key---string类型，内容：事件名称 + 空格 + 事件元素选择器
    //value---string或object类型，在当前View中能找到的函数名称或函数对象
    events:{
        'click #id':'eventHandle'
    },
    __propertys__:function(){
        //写属性
    },
    initialize:function(){
        //页面入口函数
    },
    //事件处理函数
    eventHandle:function(e){
        //事件处理
    }
});
```

##jQuery.custom.Component

> 解决组件比较难于管理和编写问题，使用templatePath或templateStr参数支持组件内容模板

##jQuery.custom.Mask

> 统一蒙版管理，支持蒙版自带事件处理

##jQuery.custom.Dialog

> 统一弹窗，使用与View 一致Controller控制思想处理入口、属性、事件管理等，并能够自动管理蒙版与弹窗关系，默认保持Dialog自动居中处理。

##jQuery.custom.Dialog.register

> 弹窗对象注册至jQuery.custom.Dialog命名空间下，便于用户使用与调用


##underscore.template 

> 使用undercore模板引擎，具体写法类似aspx模板引擎，但调整模板通配符：
> + evaluate js语句写法：<<   >>
> + interpolate js变量渲染，语句写法：<<=   >>
> + escape      语句写法：<<-    >>

```html
<script type="text/template" id='js_tpl'>
    << if(data){ >>
        <div>展示内容为：<<= data >></div>
    << }else{ >>
        <div>无法显示内容</div>
    << } >>
</script>
```

