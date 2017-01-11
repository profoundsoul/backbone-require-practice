(function ($) {
    function Core() {
    }

    Core.prototype = (function () {
        this.__el = 'body';
        this.el = 'body';
        this.events = {};
        this.handleBindEvent = function () {
            var _this = this,
                _evtArr = [];
            var delegateTarget = this.$el;
            for (var k in this.events) {
                if (this.events.hasOwnProperty(k)) {
                    var key = $.trim(k);
                    var value = this.events[k];
                    var evtObj = {};
                    var delegateSelector = '';

                    if (typeof value === 'string') {
                        value = $.trim(value);
                        if (this[value] && typeof this[value] === 'function') {
                            evtObj.handle = this[value];
                        }
                    } else if (typeof value === 'function') {
                        evtObj.handle = value;
                    }

                    if (evtObj.handle) {
                        evtObj.eventName = key.match(/\w+/)[0];
                        if (key.length === evtObj.eventName.length) {
                            evtObj.delegate = '';
                            _evtArr.push(evtObj);
                        } else {
                            delegateSelector = $.trim(key.substr(evtObj.eventName.length));
                            try {
                                //此处主要是为了判定选择器是否有效，如果为无效，抛出异常操作，直接PASS掉
                                var isExist = delegateTarget.find(delegateSelector).length > 0;
                                evtObj.delegate = delegateSelector;
                                _evtArr.push(evtObj);
                            } catch (e) {
                                console.error('invalid event delegate binding : ' + key + ' : ' + value);
                            }
                        }
                    }
                }
            }
            //清除所有的事件
            delegateTarget.off('.' + this.mid);
            $.each(_evtArr, function (idx, item) {
                var argArr = [item.eventName + '.' + _this.mid];
                if (item.delegate) {
                    argArr.push(item.delegate);
                }
                argArr.push(function () {
                    item.handle.apply(_this, arguments);
                });
                delegateTarget.on.apply(delegateTarget, argArr);
            });
        };
        this.__propertys__ = function () {
        };
        this.initialize = function () {
        };
        /**
         * 重写提示框弹出，关闭时自动移除Dom
         * @param msg   提示语
         * @param delay 延时多少秒后关闭
         * @param callback 回调
         * @param clickToHide 点击自动隐藏
         */
        this.showToast = function (msg, delay, callback, clickToHide) {
        };
        /**
         * 确认提示框，点击确定和取消时会自动回调oKFn与failFn
         * @param msg 消息
         * @param okFn 点击确定回调
         * @param context 改变回调事件上下文
         * @param failFn 点击取消回调
         */
        this.showConfirm = function (msg, okFn, context, failFn) {
        };
        return this;
    }).call({});
    Core.prototype.constructor = Core;

    var util = (function () {
        this.View = function (options) {
            var instance = new Core;
            $.extend(instance, options || {});
            var ulitity = this;
            //创建通用实例，将el属性包装成为jQuery或Zepto对象
            (function () {
                //生成包装对象，如果传入el无效，则使用__el对象进行包装
                this.$el = (function () {
                    var $ele = $(this.el);
                    if (!($ele && $ele.length)) {
                        $ele = $(this.__el);
                    }
                    return $ele;
                }).call(instance);
                this.mid = ulitity.getUniqueViewId();
                this.handleBindEvent();

                //业务代码异步执行处理
                var _this = this;
                setTimeout(function(){
                    _this.__propertys__();
                    _this.initialize();
                });
            }).call(instance);
            return instance;
        };

        /**
         * 将指定cookie字符串转换为对象，不传入参数cookieStr时，默认取document.cookie
         * @param cookieStr cookie字符串
         * @returns {{}} 返回cookie键值对对象
         */
        this.convertCookieObject = function (cookieStr) {
            var cookieObject = {},
                cookieArr = (cookieStr || document.cookie).split(';'),
                decodeComponent = function (str) {
                    return str ? $.trim(decodeURIComponent(str)) : '';
                };
            try {
                for (var i = 0, len = cookieArr.length; i < len; i++) {
                    var kvpair = cookieArr[i],
                        idx = kvpair.indexOf('='),
                        key = decodeComponent(kvpair.substring(0, idx)),
                        value = decodeComponent(kvpair.substring(idx + 1));
                    if (idx > -1 && key) {
                        cookieObject[key] = value;
                    }
                }
            } catch (ex) {
                console.log('Cookie is Exception And expires');
            }
            return cookieObject;
        };

        /**
         * 创建动态Script标签，loaded完成后返回回调
         * @param attrs 属性对象键值对
         * @param src 脚本src源
         * @param fn  loaded回调函数
         */
        this.createDynamicScript = function (attrs, src, fn, context) {
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
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
                    (typeof fn === 'function') && fn.call(context || null, arguments);
                }
            };
            script.src = src;
            document.body.appendChild(script);
        };

        /**
         * 去除重复数组内容,支持Predicate回调
         */
        this.uniqueArray = (function () {
            //执行次数
            var count = 0;
            /**
             * 需要去重项数字处理方法
             * @array 去重数组
             * @predicate{preItem,nextItem,obj{preIndex,nextIndex,origin}}去重比较函数，制定item相同规则并且允许做一些数据兑换处理等
             */
            return function (array, predicate) {
                var distinct = [],
                    __predicate = function (preItem, nextItem, obj) {
                        if (typeof predicate === 'function') {
                            return predicate(preItem, nextItem, obj);
                        } else {
                            return preItem === nextItem;
                        }
                    };
                for (var i = 0, l = array.length; i < l; i++) {
                    for (var j = i + 1; j < l; j++) {
                        console.log(++count);
                        if (__predicate(array[i], array[j], {preIndex: i, nextIndex: j, origin: array})) {
                            j = ++i;
                        }
                    }
                    distinct.push(array[i]);
                }
                return distinct;
            };
        }());

        /**
         * 获取页面唯一标识
         */
        this.getUniqueViewId = (function () {
            var prefixName = 'view';
            var maxIndex = 0;
            return function () {
                return prefixName + (++maxIndex);
            }
        }());

        /**
         * 获取URL中的search参数
         */
        this.getParamsFromUrl = (function () {
            return function () {
                var param = {},
                    url = location.search.substr(1);
                url.replace(/([^?&]+)=([^?&]+)/g, function (s, v, k) {
                    param[v] = $.trim(decodeURIComponent(k));
                    return k + '=' + $.trim(v);
                });
                return param;
            }
        }());

        this.generateUrlParam = function (param) {
            var _search = '?';
            _.each(param, function (v, k) {
                var keyValue = encodeURIComponent($.trim(k)) + '=' + encodeURIComponent($.trim(v));
                if (_search !== '?') {
                    _search += '&' + keyValue;
                } else {
                    _search += keyValue;
                }
            });
            return _search;
        };

        return this;
    }).call({});

    //extend jQuery statics method
    $.extend({custom: util});

    return util;
}(jQuery));