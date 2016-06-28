/**
 * 本文件加载页面右侧个人中心
 * Created by mumu on 2016/6/27.
 */
(function () {
    var util = (function () {
        return {
            /**
             * 按照属性异步加载js文件
             * @param urlArr 是顺序下载路径、过滤、回调函数对象数组
             *              url:js文件路径
             *              fn:加载成功回调函数
             *              filter：是否已经存在该库
             */
            batchLoadScript: function (urlArr, fn) {
                if (urlArr.length) {
                    var _this = this,
                        urlObj = urlArr.shift();
                    if (!(typeof urlObj.filter === 'function' && urlObj.filter())) {
                        this.asyncLoadScripts(urlObj.url, function () {
                            _this.batchLoadScript(urlArr, fn);
                        })
                    } else {
                        _this.batchLoadScript(urlArr, fn);
                    }
                } else {
                    //全部都执行完成时执行
                    (typeof fn === 'function') && fn(this, arguments);
                }
            },
            /**
             * 异步加载js库
             * @param url uri地址
             * @param fn  加载成功后fn
             */
            asyncLoadScripts: function (url, fn) {
                var script = document.createElement('script');
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('charset', 'utf-8');
                if (script.readyState) {//IE兼容
                    script.onreadystatechange = function () {
                        if (this.readyState === 'loaded' || this.readyState === 'completed') {
                            script.onreadystatechange = null;
                            (typeof fn === 'function') && fn.apply(this, arguments);
                        }
                    };
                } else {
                    script.onload = function () {
                        (typeof fn === 'function') && fn.apply(this, arguments);
                    }
                }
                script.setAttribute('src', url);
                document.body.appendChild(script);
            }
        };
    }());

    // 组件依赖说明，本组件依赖于jQuery/Zepto、requirejs、core核心框架
    // 文件加载前先检查是否已经存在项目中，否则asyncLoadLibs
    var baseDir = 'http://res.yitb.com/libs/',
        $jquery = baseDir + '3rdlibs/jquery.js',
        $require = baseDir + '3rdlibs/require.min.js',
        $core = baseDir + 'core.js';
    var urlArray = [{
        url: $jquery, filter: function () {
            return !!$;
        }
    }];
    urlArray.push({
        url: $require, filter: function () {
            return typeof define === 'function' && define.amd;
        }
    });
    urlArray.push({
        url: $core, filter: function () {
            if (typeof define === 'function' && define.amd) {
                var __path = require.s.contexts._.config.paths;
                return __path.cModel && __path.cCoreInherit;
            }
            return false;
        }
    });
    util.batchLoadScript(urlArray, function () {
        //加载成功
        require(['cModel'], function(cModel){
            console.log(cModel);
        });

        setTimeout(function(){
            require(['cUILoading'], function(loading){
                var l = new loading();
                l.show();
            });
            //require(['cUIToast']);
            //require(['cUILayer']);

        }, 2000)
    });
}());
