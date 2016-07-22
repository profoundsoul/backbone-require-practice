/**
 * Created by mumu on 2016/7/13.
 */
define(['cBase'], function (cBase) {
    var utils = (function () {
        var me = {};
        var _elementStyle = document.createElement('div').style;

        //获得需要兼容CSS3前缀
        var _vendor = (function () {
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
            var transform;
            var i = 0;
            var l = vendors.length;

            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
            }
            return false;
        })();

        function _getTransitionEndEvent() {
            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
            var transform;
            var i = 0;
            var l = vendors.length;

            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in _elementStyle) {
                    //表示支持一种前缀
                    return vendors[i] + 'ransitionEnd';
                }
            }
        }

        //获取样式（CSS3兼容）
        function _prefixStyle(style) {
            if (_vendor === false) return false;
            if (_vendor === '') return style;
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
        }

        $.extend(me, {
            hasTouch: 'ontouchstart' in window
        });

        // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
        me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

        //我们暂时只判断touch 和 mouse即可
        $.extend(me.style = {}, {
            transform: _prefixStyle('transform'),
            transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
            transitionDuration: _prefixStyle('transitionDuration'),
            transitionDelay: _prefixStyle('transitionDelay'),
            transformOrigin: _prefixStyle('transformOrigin')
        });

        //CSS3事件兼容
        $.extend(me.events = {}, {
            transitionEnd: _getTransitionEndEvent()
        });


        return me;
    }());

    var IListRefresh = new cBase.Class({
        __propertys__: function () {
            //mousestart相对于Page的位置
            this.startY = 0;
            //容器定位初始Y坐标值
            this.originY = -50;

            //mousemove相对于Page的位置
            this.pointY = 0;
            //容器定位Y坐标值
            this.y = -50;

            //刷新时相对Y坐标
            this.refreshY = 50;

            //最大的Y值
            this.maxRange = 200;

            //移动灵敏度控制,最小值为5
            this.moveSensibility = 5;
            //刷新灵敏度控制，最小值为30
            this.refreshSensibility = 20;

            //动画事件
            this.transitionDuration = 300;

            this.box = $('body');
            this.template = '<div class="list_fresh_box js_listfresh_box">' +
            '<div class="fresh_box">' +
            '<div class="fresh_icon js_fresh_icon"></div>' +
            '</div>' +
            '</div>';
            this.tplBoxClsName = '.js_listfresh_box';
            this.iconClsName = '.js_fresh_icon';
            this.spinAnimationName = 'addspin';
        },
        initialize: function (options) {
            $.extend(this, options);
            this.createRoot();
        },
        createRoot: function () {
            this.box.css('position', 'relative');
            //判断是否存在重复的刷新结构
            if (!this.box.find(this.tplBoxClsName).length) {
                this.box.append(this.template);
            }
            //获取最新的fleshBox
            this.freshBox = this.box.find(this.tplBoxClsName);
        },
        bindEvent: function () {
            var _this = this,
                bind = (function (fn) {
                    return function () {
                        fn.apply(_this, arguments)
                    };
                });
            this.box.off('touchstart').on('touchstart', bind(this._start));
            this.box.off('touchmove').on('touchmove', bind(this._move));
            this.box.off('touchend').on('touchend', bind(this._end));
            this.freshBox.off(utils.events.transitionEnd).on(utils.events.transitionEnd, bind(this._animationEnd));
        },
        listener: function (fn) {
            this.bindEvent();
            this.refreshFn = fn || function () {
            };
        },
        destory: function () {
            this.box.off('touchstart');
            this.box.off('touchmove');
            this.box.off('touchend');
            this.box.find(this.tplBoxClsName).remove();
        },
        hide: function () {
            this._translate(this.originY);
        },

        /**
         * 方便调试和测试
         * @param str 内容
         * @private
         */
        _consoleTest: function (str) {
            var _this = this;
            var useLog = false;

            //console.log(useLog = true);

            useLog && consoleLog();

            function consoleLog() {
                var $test = _this.box.find('.js_test');
                if (!$test.length) {
                    var test_html = '<div style="position: fixed;z-index: 10000;display: block;right: 15px;top: 0px;color: #5c8ca2;" >';
                    test_html += '<div class="js_test" style="overflow: auto;max-height: 500px;">';
                    test_html += '</div>';
                    test_html += '</div>';
                    _this.box.append($(test_html));
                    $test = _this.box.find('.js_test');
                }
                var allHtml = $test.html();
                $test.html(allHtml + '<br/>' + str);
                if (typeof $test[0].scrollTop !== 'undefined') {
                    $test[0].scrollTop = $test[0].scrollHeight;
                }
                return '';
            }
        },
        /**
         * 针对此功能调试和测试
         * @param prefix 前缀
         * @private
         */
        _test: function (prefix) {
            this._consoleTest((prefix ? prefix + '---' : '') + 'y:' + this.y + '    pointY:' + this.pointY + '     client:Y:'+this.clientY);
        },

        _animationEnd: function (e) {
            if (this.y === this.originY) {
                var icon = this.freshBox.find(this.iconClsName);
                if (icon.hasClass(this.spinAnimationName)) {
                    icon.removeClass(this.spinAnimationName);
                }
            }
        },
        _start: function (e) {
            e = e.touches ? e : e.originalEvent;
            var point = e.touches ? e.touches[0] : e;
            //添加动态动画元素
            var icon = this.freshBox.find(this.iconClsName);
            if (!icon.hasClass(this.spinAnimationName)) {
                icon.addClass(this.spinAnimationName);
            }
            this._translateTime();
            this.pointY = point.pageY;
            this.startY = point.pageY;
            this.clientY = point.clientY;
            this._translate(this.y = this.originY);
            this._test('start');

        },
        _move: function (e) {
            e = e.touches ? e : e.originalEvent;
            var point = e.touches ? e.touches[0] : e;
            var deltaY = point.pageY - this.pointY,
                newY = Math.round(deltaY + this.y);
            this.pointY = point.pageY;
            this.clientY = point.clientY;
            //Math.abs(deltaY) < this.moveSensibility ||

            //计算出当前DocumentElement元素的高度及坐标
            //var MaxvisialY = $(document.documentElement).offset().height -100;

            if (deltaY <= 0 || point.pageY >point.clientY) {
                //此处必须返回True，如果是false可能会禁用掉当前的触摸事件
                return true;
            } else {
                e.preventDefault();
            }
            newY = newY > this.maxRange ? this.maxRange : newY;
            this._translate(newY);
            this._test('move');
        },
        _end: function (e) {
            var deltaY = Math.round(this.y - this.startY);
            if (this.y < this.refreshY) {
                this._translateTime(this.transitionDuration);
                this._translateTimeFunction();
                this._translate(this.originY);
                this._test('end');
            } else {
                this._translateTime(this.transitionDuration);
                this._translateTimeFunction();
                this._translate(this.refreshY);
                this._exec();
                this._test('end');
            }
        },
        _exec: function () {
            var _this = this;
            setTimeout(function () {
                (typeof _this.refreshFn === 'function') && _this.refreshFn.call(_this);
            }, this.transitionDuration * 1.5);
        },
        _translateTimeFunction: function () {
            this.freshBox[0].style[utils.style.transitionTimingFunction] = "cubic-bezier(0.1, 0.57, 0.1, 1)";
        },
        _translateTime: function (time) {
            time = time || 0;
            this.freshBox[0].style[utils.style.transitionDuration] = time + "ms ";
        },
        _translate: function (newY) {
            this.y = newY;
            this.freshBox[0].style[utils.style.transform] = "translate3d(0px," + newY + "px,0px)";
        }
    });

    return IListRefresh;
});