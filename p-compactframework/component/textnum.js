/**
 * Created by mumu on 2017/2/21.
 */
(function ($) {
    var BaseView = $.custom.Component({
        templatePath: 'textnum.html',
        events: {
            'click .cfui-minus': 'minus',
            'click .cfui-add': 'add',
            'focus .cfui-text': 'focusText',
            'blur .cfui-text': 'blurText',
        },
        __propertys__: function () {
            var _el = this.$el;

            this.INVAILD_CLSNAME = 'cfui-num-invaild';
            this.textDom = _el.find('.cfui-text');
            this.addDom = _el.find('.cfui-add');
            this.minusDom = _el.find('.cfui-minus');
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            this.setButtonAvailable(this.value);
            this.textDom.val(this.value);
        },
        minus: function (e) {
            var target = $(e.currentTarget);
            if (!target.hasClass(this.INVAILD_CLSNAME)) {
                var newV = this.value - 1;
                if (this.min <= newV) {
                    this.value = newV;
                    this.setButtonAvailable(newV);
                    this.textDom.val(this.value);
                    this._callChangeFn();
                }
            }
        },
        add: function (e) {
             var target = $(e.currentTarget);
            if (!target.hasClass(this.INVAILD_CLSNAME)) {
                var newV = this.value + 1;
                if (this.max >= newV) {
                    this.value = newV;
                    this.setButtonAvailable(newV);
                    this.textDom.val(newV);
                    this._callChangeFn();
                }
            }
        },
        focusText: function (e) {
            this.textDom.val('');
        },
        blurText: function (e) {
            var str = $.trim(this.textDom.val());
            if (str && this.validateNumber(str)) {
                var num = this.getInteger(str);
                this.setButtonAvailable(num);
                this.value = num;
                this.textDom.val(this.value);
                this._callChangeFn();
            } else {
                this.textDom.val(this.value);
            }
        },
        setButtonAvailable: function (v) {
            if (this.max <= v) {
                this.addDom.addClass(this.INVAILD_CLSNAME);
            } else {
                this.addDom.removeClass(this.INVAILD_CLSNAME);
            }

            if (this.min >= v) {
                this.minusDom.addClass(this.INVAILD_CLSNAME);
            } else {
                this.minusDom.removeClass(this.INVAILD_CLSNAME);
            }
        },
        validateNumber: function (str) {
            str = +str;
            if (isNaN(str) || !isFinite(str)) {
                return false;
            }
            str = Math.floor(str);
            return (this.min <= str && this.max >= str) ? true : false;
        },
        getInteger: function (str) {
            str = +str;
            return Math.floor(str);
        },
        _callChangeFn: function () {
            typeof this.change === 'function' && this.change.call(this.context, {
                value: this.value,
                max: this.max,
                min: this.min
            }, this);
        },

        getValue: function () {
            return this.value;
        },
        setValue: function (str) {
            if (str && this.validateNumber(str)) {
                var num = this.getInteger(str);
                this.setButtonAvailable(num);
                this.value = num;
                this.textDom.val(this.value);
                this._callChangeFn();
            }else{
                console.warn('not availble value！')
            }
        },
        setMaxRange: function (str) {
            var num = this.getInteger(str);
            if (num >= this.min) {
                this.max = num;
                this.setButtonAvailable(this.value);
            }else{
                console.warn('not availble value！')
            }
        },
        setMinRange: function (str) {
            var num = this.getInteger(str);
            if (num <= this.max) {
                this.min = num;
                this.setButtonAvailable(this.value);
            }else{
                console.warn('not availble value！')
            }
        }
    });

    var defaults = {
        value: 1,
        max: 10,
        min: 0,
        changed: function () {},
        context: null,
    };

    $.fn.TextNum = function (options) {
        var settings = $.extend({}, defaults, options || {});
        settings.max = Math.floor(settings.max);
        settings.min = Math.floor(settings.min);
        settings.value = Math.floor(settings.value);

        var bv = new BaseView(this, settings);
        return (function () {
            /**************统一暴露API******************/
            this.setMaxRange = function (str) {
                return bv.setMaxRange(str);
            };
            this.setMinRange = function (str) {
                return bv.setMinRange(str);
            };
            this.getValue = function () {
                return bv.getValue();
            };
            this.setValue = function (str) {
                return bv.setValue(str);
            };
            return this;
        }).call({});
    };
})(jQuery);