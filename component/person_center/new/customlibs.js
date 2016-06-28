/**
 * Created by mumu on 2016/6/28.
 */
var utilty = (function () {

    var __dll = function (obj) {
        if (obj instanceof  __dll) return obj;
        if (!(this instanceof __dll))return new __dll(obj);
        this._wrapped = this;
        this.timeout = 30000;
        this.successFnArr = [];
        this.failFnArr = [];
    };

    /**
     * 异步加载js库
     * @param url uri地址
     * @param fn  加载成功后fn
     */
    __dll.prototype.asyncLoadScripts = function (url, fn) {
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
    };

    __dll.prototype.concurrencyLoadScript = function (url, filter) {
        var _this = this;
        this.status = this.status || {};
        this.status[url] = false;

        if (!(typeof filter === 'function' && filter())) {
            this.asyncLoadScripts(url, function () {
                _this.status[url] = true;
            });
        } else {
            this.status[url] = true;
        }
        return this;
    };

    __dll.prototype.checkStatus = function () {
        var _this = this,
            isAllCompleted = true;
        for (var keys in _this.status) {
            if (_this.status.hasOwnProperty(keys)) {
                if (!_this.status[keys]) {
                    isAllCompleted = false;
                    break;
                }
            }
        }
        return isAllCompleted;
    };

    var callCompleteFn = function (obj) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            for (var i = 0, len = obj.length; i < len; i++) {
                if (typeof obj[i] === 'function') {
                    obj[i].call(this);
                }
            }
        } else {
            if (typeof obj[i] === 'function') {
                obj[i].call(this);
            }
        }
    };

    __dll.prototype._start = function (timeout) {
        var _this = this,
            timeout = (typeof timeout === 'undefined') ? this.timeout : timeout,
            start = new Date().getTime();
        return setTimeout(function () {
            var end = new Date().getTime();
            timeout = timeout - (end - start);
            if (timeout > 0) {
                if (_this.checkStatus()) {
                    callCompleteFn(_this.successFnArr)
                } else {
                    _this._start(timeout);
                }
            } else {
                callCompleteFn(_this.failFnArr);
            }
        }, 20);
    };

    __dll.prototype.then = function (fn) {
        this.successFnArr.push(fn);
        if(!this.timeoutid){
            this.timeoutid = this._start();
        }
        return this;
    };

    __dll.prototype.fail = function (fn) {
        this.failFnArr.push(fn);
        if(!this.timeoutid){
            this.timeoutid = this._start();
        }
        return this;
    };
    return __dll;
}());

(function(){
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

    utilty().concurrencyLoadScript(urlArray[0].url, urlArray[0].filter)
        .concurrencyLoadScript(urlArray[1].url, urlArray[1].filter)
        .concurrencyLoadScript(urlArray[2].url, urlArray[2].filter).then(function () {
            console.log('成功了！');
        })
        .fail(function () {
            console.log('失败了！');
        });
}())