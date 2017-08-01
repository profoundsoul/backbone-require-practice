/**
 * Created by lin.qiu on 2017/8/1.
 */
(function (win) {
    //cdn 替换类
    var helper = (function () {
        this.createCssLink = function(url){
            var html ='<link rel="stylesheet" href="'+url+'"/>';
            document.write(html)
        };
        this.createScript = function(url){
            var script ='<script src="'+url+'"></script>';
            document.write(script)
        }
        this.createAsyncScript = function(attrs, src, fn, context){
            //模仿jquery参数漂移
            if (typeof  attrs === 'string') {
                context = fn;
                fn = src;
                src = attrs;
                attrs = {};
            }
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('async', '');
            script.setAttribute('charset', 'utf-8');
            if (attrs) {
                for (var key in attrs) {
                    //不处理src为了兼容IE对于动态Script标签问题
                    if (attrs.hasOwnProperty(key) && key !== 'src') {
                        script.setAttribute(key, attrs[key]);
                    }
                }
            }
            script.onload = script.onreadystatechange = function () {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                    script.onreadystatechange = script.onload = null;
                    script.parentNode && script.parentNode.removeChild(script);
                    (typeof fn === 'function') && fn.call(context || null, arguments);
                }
            };
            script.src = src;
            document.body.appendChild(script);
        }
        return this;
    }).call({});
    win.cdnHelper = helper;
})(this);