(function ($) {
    'use strict'
    //well compatible
    if (!(window.console && console.log && console.error || console.warn)) {
        window.console = window.console || {};
        console.log = console.log || function () {
        };
        console.error = console.error || function () {
        };
        console.warn = console.warn || function () {
        };
    }

    var currentDirRegExp = /([\\\/]*)(\w+\.?)*\w+$/i;
    var util = (function () {
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
         * 生成唯一标识id偏函数
         */
        this.generateUniqueId = function (prefix) {
            var maxIndex = 0;
            return function () {
                return prefix + (++maxIndex);
            }
        };

        this.getTemplateByUrl = function (url, okFn, ctx, failFn) {
            $.get(url).success(function () {
                typeof okFn === 'function' && okFn.apply(ctx, arguments);
            }).fail(function (res, status, xhr) {
                console.log(res, status, xhr);
                typeof failFn === 'function' && failFn.apply(ctx, arguments);
            });
        };

        this.getTemplateSync = function (url, okFn, ctx, failFn) {
            $.ajax({
                type: "get",
                url: url,
                async: false
            }).success(function () {
                typeof okFn === 'function' && okFn.apply(ctx, arguments);
            }).fail(function (res, status, xhr) {
                console.log(res, status, xhr);
                typeof failFn === 'function' && failFn.apply(ctx, arguments);
            });
        };

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

        this.getCurrentScript = function () {
            if (document.currentScript) {
                return document.currentScript;
            }

            // For IE6-9 browsers, the script onload event may not fire right
            // after the script is evaluated. Kris Zyp found that it
            // could query the script nodes and the one that is in "interactive"
            // mode indicates the current script
            // ref: http://goo.gl/JHfFW
            var scripts = document.getElementsByTagName("script");
            for (var i = scripts.length - 1; i >= 0; i--) {
                var script = scripts[i];
                if (script.readyState === "interactive") {
                    var interactiveScript = script;
                    return interactiveScript
                }
            }
            return scripts[scripts.length - 1];
        };

        this.getScriptRelativeUrl = function (path) {
            var script = this.getCurrentScript(),
                src = $(script).attr('src');
            return src.replace(currentDirRegExp, '$1' + path);
        };

        this.dateParse = function (str) {
            if (typeof str === 'undefined') {
                return new Date();
            }
            if (typeof str === 'string') {
                str = str || '';
                var regtime = /^(\d{4})\-?(\d{1,2})\-?(\d{1,2})/i;
                if (str.match(regtime)) {
                    str = str.replace(regtime, "$2/$3/$1");
                }
                var st = Date.parse(str);
                return new Date(st || new Date());
            } else if (typeof str === 'number') {
                return new Date(str);
            } else if(Object.prototype.toString.call(str) === '[object Date]'){
                return str;
            } else {
                return new Date();
            }
        };

        this.dateFormat = function (d, fmt) {
            d = util.dateParse(d);

            var o = {
                "M+": d.getMonth() + 1, //月份
                "d+": d.getDate(), //日
                "h+": d.getHours(), //小时
                "m+": d.getMinutes(), //分
                "s+": d.getSeconds(), //秒
                "q+": Math.floor((d.getMonth() + 3) / 3), //季度
                "S": d.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(/(y+)/, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(new RegExp("(" + k + ")"), (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        };

        return this;
    }).call({});

    var uiHelper = (function (ulitity) {
        var __dialogNameReg = '^[A-z]\\w{2,16}$';
        var __absoluteAddrReg = '^(https?|file|ftp|\/\/|\/)';
        //new RegExp('^(https?|file|ftp|\/\/|\/)','i')
        var __getViewId = ulitity.generateUniqueId('__view_');
        var __getComponentId = ulitity.generateUniqueId('__component_');
        var __getMaskId = ulitity.generateUniqueId('__mask_');
        var __getDialogId = ulitity.generateUniqueId('__dialog_');
        var __handleBindEvent = function () {
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
            delegateTarget.off('.' + this.__mid);
            $.each(_evtArr, function (idx, item) {
                var argArr = [item.eventName + '.' + _this.__mid];
                if (item.delegate) {
                    argArr.push(item.delegate);
                }
                argArr.push(function () {
                    item.handle.apply(_this, arguments);
                });
                delegateTarget.on.apply(delegateTarget, argArr);
            });
        };
        var __checkTemplate = function (attrs, fn, ctx) {
            if (attrs.templatePath) {
                //识别当前地址是否为绝对地址或相对domain地址
                var absoluteAddrReg = new RegExp(__absoluteAddrReg, 'i');
                var tplSrc = attrs.templatePath;
                if (!absoluteAddrReg.test(attrs.templatePath)) {
                    tplSrc = attrs.__compPath.replace(currentDirRegExp, '$1' + attrs.templatePath);
                }
                //模板路径等价于当前组件路径，出现死循环问题，应该规避
                if (tplSrc === attrs.__compPath) {
                    console.log('Template Path is the same as the current path!');
                    return false;
                }
                util.getTemplateSync(tplSrc, function (str) {
                    typeof fn === 'function' && fn.apply(ctx, arguments);
                }, this, function () {
                    console.log('无效的template path！');
                });
            } else {
                typeof fn === 'function' && fn.call(ctx, attrs.templateStr);
            }
        };

        this.View = function (options) {
            var instance = new Core;
            $.extend(instance, options || {});
            (function () {
                this.__create = function () {
                    //生成包装对象，如果传入el无效，则使用__el对象进行包装
                    this.$el = (function () {
                        var $ele = $(this.el);
                        if (!($ele && $ele.length)) {
                            $ele = $(this.__el);
                        }
                        return $ele;
                    }).call(instance);
                    this.__mid = __getViewId();
                    this.__propertys__();
                    //业务代码异步执行处理
                    var _this = this;
                    setTimeout(function () {
                        _this.__handleBindEvent();
                        _this.initialize();
                    });
                };
            }).call(instance);
            instance.__create();
            return instance;
        };

        this.Component = function (options) {
            var currentSrc = $(ulitity.getCurrentScript()).attr('src');
            var defaults = {
                __compPath: currentSrc || location.href,
                templatePath: '',   // template file path
                templateStr: ''     // text template html
            };
            return function (box, attrs) {
                var instance = new Core;
                //创建通用实例，将el属性包装成为jQuery或Zepto对象
                (function () {
                    this.__create = function () {
                        this.$el = $(box);
                        if (!(this.$el && this.$el.length)) {
                            throw new Error("no available box element!");
                        }
                        this.__mid = __getComponentId();
                        //业务代码异步执行处理
                        var _this = this;
                        var settings = $.extend(true, {}, defaults, options || {}, attrs);
                        __checkTemplate(settings, function (str) {
                            $.extend(instance, settings, {templateStr: str});
                            var wrapper = $('<div>').attr('data-compid', _this.__mid);
                            wrapper.html(str);
                            _this.$el.html(wrapper);
                            _this.__propertys__();
                            setTimeout(function () {
                                _this.__handleBindEvent();
                                _this.initialize();
                            });
                        }, this);
                    };
                }).call(instance);
                instance.__create();
                return instance;
            };
        };

        this.Mask = function (options) {
            var instance = new Core();
            (function () {
                this.__create = function () {
                    $.extend(instance, options || {});
                    this.__mid = __getMaskId();
                    this.el = '<div class="cfui_mask"></div>';
                    this.$el = $(this.el);
                    this.$el.attr('data-maskid', this.__mid);
                    this.setzIndexTop();
                    $(document.body).append(this.$el);

                    this.__propertys__();
                    var _this = this;
                    setTimeout(function () {
                        _this.__handleBindEvent();
                        _this.initialize();
                    });
                };
                this.destory = function () {
                    this.$el.remove();
                };
                this.setzIndexTop = function () {
                    this.$el.css('z-index', this.getBiggerzIndex());
                };
            }).call(instance);
            instance.__create();
            return instance;
        };

        this.Dialog = function (options) {
            var currentSrc = $(ulitity.getCurrentScript()).attr('src');
            var defaults = {
                __compPath: currentSrc || location.href,
                isStartAnimation: false,
                isClickHide: false,
                templatePath: '',   // template file path
                templateStr: ''     // text template html
            };

            return function (attrs) {
                var instance = new Core();

                //创建通用实例，将el属性包装成为jQuery或Zepto对象
                (function () {
                    //业务代码异步执行处理
                    this.__create = function () {
                        var settings = $.extend(true, {}, defaults, options || {}, attrs || {});
                        this.__mid = __getDialogId();
                        __checkTemplate(settings, function (str) {
                            $.extend(instance, settings, {templateStr: str});
                        }, this);
                    };
                    this.__show = function () {
                        this.$el = $('<div class="cfui_view cfui_view_pos">').attr('data-dialogid', this.__mid);
                        this.$el.html(this.templateStr);
                        this.mask = new uiHelper.Mask();

                        this.setzIndexTop();
                        $(document.body).append(this.$el);
                        this.__propertys__();

                        var _this = this;
                        setTimeout(function () {
                            _this.__handleBindEvent();
                            _this.initialize();
                        });
                    };
                    this.destory = function () {
                        var _this = this;
                        if (this.isStartAnimation) {
                            _this.$el.addClass('cfui_view_out');
                            setTimeout(function () {
                                _this.mask.destory();
                                _this.$el.remove();
                            }, 1500);
                        } else {
                            this.mask.destory();
                            this.$el.remove();
                        }
                    };
                    this.setzIndexTop = function () {
                        this.$el.css('z-index', this.getBiggerzIndex());
                    };
                }).call(instance);
                instance.__create();
                instance.__show();
                return instance;
            };
        };

        this.Dialog.register = function (name, fn) {
            var dialogHash = uiHelper.Dialog;
            if (typeof name !== 'string' || !new RegExp(__dialogNameReg, 'i').test(name)) {
                console.error('the name of the dialog  is not availble, Regular expression rules is /^[A-z]\w{2,16}$/gi');
                return fn;
            }

            if (typeof fn !== 'function') {
                console.error('= the dialog must be availble function');
                return fn;
            }
            if (dialogHash[name]) {
                console.warn('$.custom.dialog.' + name + ' is exist，please rename dialog name or check dialog');
                return fn;
            }
            dialogHash[name] = fn;
            return fn;
        };

        function Core() {
        }

        Core.prototype = (function () {
            this.__el = 'body';
            this.el = 'body';
            this.events = {};
            this.__handleBindEvent = __handleBindEvent;
            this.__propertys__ = function () {
            };
            this.initialize = function () {
            };
            this.destory = function () {
                this.$el.empty().off('.' + this.__mid);
            };
            this.getBiggerzIndex = (function () {
                var startzIndex = 3000;
                return function () {
                    return ++startzIndex;
                };
            })();
            return this;
        }).call({});
        Core.prototype.constructor = Core;

        return this;
    }).call({}, util);

    //extend jQuery statics method
    if (typeof $.custom !== 'object') {
        $.extend({custom: {}});
    }
    $.extend($.custom, util, uiHelper);

}(jQuery));