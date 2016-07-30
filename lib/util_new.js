/**
 * Created by mumu on 2016/7/20.
 */
define([], function () {
    function Core() {
    }
    Core.prototype = (function () {
        this.el = 'body';
        this.events = {};
        this.handleBindEvent = function () {
            var _this = this,
                _evtArr = [];
            for (var k in this.events) {
                if (this.events.hasOwnProperty(k)) {
                    var key = $.trim(k);
                    var value = this.events[k];
                    var evtObj = {};

                    if (typeof value === 'string') {
                        value = $.trim(value);
                        if (this[value] && typeof this[value] === 'function') {
                            evtObj.handle = this[value];
                        }
                    } else {
                        evtObj.handle = value;
                    }
                    if (evtObj.handle) {
                        evtObj.eventName = key.match(/\w+/)[0];
                        if (key.length === evtObj.eventName) {
                            evtObj.delegate = '';
                        } else {
                            evtObj.delegate = $.trim(key.substr(evtObj.eventName.length));
                        }
                        _evtArr.push(evtObj);
                    }
                }
            }
            var delegateTarget = this.$el;
            //清除所有的事件
            delegateTarget.off();
            $.each(_evtArr, function (idx, item) {
                var argArr = [item.eventName];
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
         * 重写错误提示框弹出，关闭时自动移除Dom
         * @param err   XMLHttpRequest对象
         * @param msg   提示语
         * @param delay 延时多少秒后关闭
         * @param callback 回调
         * @param clickToHide 点击自动隐藏
         */
        this.showExceptionToast = function (err, msg, delay, callback, clickToHide) {
            //参数位移，允许err为对象时，表示是错误对象;
            if (typeof err !== 'object' || err === null) {
                clickToHide = callback;
                callback = delay;
                delay = msg;
                msg = err;
                err = null;
            }
            //自动识别XMLHttpRequest请求401等常见错误
            if (err && err.status && err.readyState === 4) {
                //错误列表
                switch (err.status) {
                    case 401:
                        msg = '系统登录超时，请重新登录！';
                        break;
                    case 403:
                        msg = '服务器拒绝请求！';
                        break;
                    case 408:
                        msg = '服务请求超时！';
                        break;
                    case 503:
                        msg = '服务不可用！';
                        break;
                    default:
                        msg = msg || '服务调用异常！';
                        break;
                }
            }
            this.showToast(msg, delay, callback, clickToHide);
        };
        this.showToast = function (msg, delay, callback, clickToHide) {
            //默认没有填写时，支持点击自动关闭提示框
            (typeof clickToHide === 'undefined') && (clickToHide = true);
            if (this.uitoast) {
                this.uitoast.setzIndexTop();
                this.uitoast.show(msg, delay, callback, !!clickToHide);
            } else {
                var _this = this;
                require(['cUIToast'], function (cUIToast) {
                    _this.uitoast = new cUIToast();
                    _this.uitoast.show(msg, delay, callback, !!clickToHide);
                }, function (err) {
                    console.log('uitoast require error!')
                });
            }
        };
        this.showLoading = function () {
            if (this.uiloading) {
                this.uiloading.setzIndexTop();
                this.uiloading.show();
            } else {
                var _this = this;
                require(['cUILoading'], function (cUILoading) {
                    _this.uiloading = new cUILoading();
                    _this.uiloading.show();
                }, function (err) {
                    console.log('uiloading require error!');
                });
            }
        };
        this.hideLoading = function () {
            this.uiloading && this.uiloading.hide();
        };
        /**
         * 确认提示框，点击确定和取消时会自动回调oKFn与failFn
         * @param msg 消息
         * @param okFn 点击确定回调
         * @param context 改变回调事件上下文
         * @param failFn 点击取消回调
         */
        this.showConfirm = function (msg, okFn, context, failFn) {
            require(['cUIAlert'], function (cUIAlert) {
                var btnArr = [];
                context = context ? context : null;
                btnArr.push({
                    text: '取消',
                    click: function () {
                        this.destroy();
                        (typeof failFn == 'function') && failFn.call(context);
                    }
                });
                btnArr.push({
                    text: '确定',
                    click: function () {
                        this.destroy();
                        (typeof okFn == 'function') && okFn.call(context);
                    }
                });
                var crmAlert = new cUIAlert({message: msg, buttons: btnArr});
                crmAlert.destroy = function () {
                    this.hide();
                    this.maskToHide();
                    this.mask.remove();
                    this.mask.remove();
                };
                crmAlert.show();
            }, function (err) {
                console.log('uiconfirm require failed!');
            })
        };
        return this;
    }).call({});
    Core.prototype.constructor = Core;
    var util = (function () {
        this.View = function (options, isSyncLogin) {
            var instance = new Core;
            $.extend(instance, options);
            if (isSyncLogin) {
                this.plantLoginStorage();
            }
            //创建通用实例，将el属性包装成为jQuery或Zepto对象
            (function () {
                this.$el = $(this.el);
                this.handleBindEvent();
                this.__propertys__();
                this.initialize();
            }).call(instance);
            return instance;
        };

        /**
         * 根据当前Cookie自动终止Login Storage，同步Cookie登录信息
         */
        this.plantLoginStorage = function () {
            var cookieObj = this.convertCookieObject();
            if (cookieObj.YTBLOGININFO) {
                require(['CommonStore'], function (CommonStore) {
                    var userStore = CommonStore.UserStore.getInstance();
                    var loginobj = {};
                    for (var p in cookieObj) {
                        if (cookieObj.hasOwnProperty(p)) {
                            switch (p) {
                                case 'YTBLOGININFO':
                                    loginobj.auth = cookieObj[p];
                                    break;
                                case 'UNAME':
                                    loginobj.login = cookieObj[p];
                                    break;
                                case 'IS_FULL':
                                    loginobj.isFull = cookieObj[p];
                                    break;
                                case 'IS_SHOP_BOUND':
                                    loginobj.bindShop = cookieObj[p];
                                    break;
                                default :
                                    loginobj[p] = cookieObj[p];
                                    break;
                            }
                        }
                    }
                    userStore.set(loginobj);
                }, function () {
                    console.log('Login Store Require Failed！')
                });
            } else {
                //清除所有本地存储
                window.localStorage.clear();
            }
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
         * 获取URL中的search参数
         */
        this.getParamsFromUrl = (function () {
            return function () {
                var param = {},
                    url = location.search.substr(1);
                url.replace(/([^?&]+)=([^?&]+)/g, function (s, v, k) {
                    param[v] = decodeURIComponent(k);
                    return k + '=' + v;
                });
                return param;
            }
        }());
        return this;
    }).call({});
    return util;
});