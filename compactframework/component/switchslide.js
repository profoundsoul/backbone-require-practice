(function ($) {
    var SwitchSlide = $.custom.Component({
        __propertys__: function () {
            var _el = this.$el,
                _events = this.events;
            _events['click ' + this.forwardSelector] = 'forward';
            _events['click ' + this.backwardSelector] = 'backward';

            this.container = _el.find(this.containerSelector);
            this.items = this.container.find(this.itemSelector);
            this.left = 0;

        },
        initialize: function () {
            if (this.items && this.items.length > 1) {
                this.render();
                this.setButtonEnabled();
                this.bindResize();
            }
        },
        render: function () {
            var itemArr = this.items,
                second = itemArr.eq(1),
                first = itemArr.first(),
                singleWidth = second.offset().left - first.offset().left;
            this.container.css({
                width: singleWidth * itemArr.length,
                position: 'absolute',
                left: 0,
                overflow: 'hidden'
            });
            this.container.parent().css({
                overflow: 'hidden',
                position: 'relative'
            });
            this.$el.css({
                overflow: 'hidden',
                position: 'relative'
            });

            this.singleWidth = singleWidth;
            this.maxLeft = singleWidth * itemArr.length - this.$el.width();
        },
        bindResize:function(){
            var _this = this;
            var resizeThrottle = _.throttle(function () {
                _this.resize.apply(_this, arguments);
            }, 200);

            $(window).off('resize.'+this.__mid).on('resize.'+this.__mid, resizeThrottle);
        },
        resize:function(e) {
            var len = this.items.length;
            this.maxLeft = this.singleWidth * len - this.$el.width();
            console.log(this.maxLeft);
            this.setButtonEnabled();
        },
        forward: function (e) {
            var _el = this.$el,
                target = $(e.currentTarget),
                predictLeft =this.left - this.unitCount * this.singleWidth;
            if(!target.hasClass(this.invalidClsName)) {
                predictLeft = predictLeft > 0 ? predictLeft : 0;
                this.left = predictLeft;
                this.container.animate({'left': -1 * predictLeft}, this.speed);
                this.setButtonEnabled();
                this._callUpdateFn();
            }
        },
        backward: function (e) {
            var _el = this.$el,
                target = $(e.currentTarget),
                predictLeft = this.unitCount * this.singleWidth + this.left;
            if(!target.hasClass(this.invalidClsName)) {
                predictLeft = predictLeft > this.maxLeft ? this.maxLeft : predictLeft;
                this.left = predictLeft;
                this.container.animate({'left': -1 * predictLeft}, this.speed);
                this.setButtonEnabled();
                this._callUpdateFn();
            }
        },
        setButtonEnabled: function () {
            var _el = this.$el;
            if (this.left <= 0) {
                _el.find(this.forwardSelector).addClass(this.invalidClsName);
            } else {
                _el.find(this.forwardSelector).removeClass(this.invalidClsName);
            }

            if (this.left >= this.maxLeft) {
                _el.find(this.backwardSelector).addClass(this.invalidClsName);
            } else {
                _el.find(this.backwardSelector).removeClass(this.invalidClsName);
            }
        },
        _callUpdateFn: function () {
            typeof  this.updateFn === 'function' && this.updateFn.apply(this.context, arguments);
        }
    });

    var defaults = {
        forwardSelector: '.prev',        //向前箭头按钮选择器
        containerSelector: 'ul',         //元素容器选择器
        itemSelector: 'li',              //元素选择器选择器
        backwardSelector: '.next',       //向后箭头按钮选择器
        invalidClsName: 'invalid',       //箭头按钮禁用选择器
        speed: 300,                     //滚动速度
        unitCount: 1,                   //每次滚动元素数量,
        updateFn: function () {
        },
        context: null,
    };

    $.fn.SwitchSlide = function (options) {
        return new SwitchSlide(this, $.extend({}, defaults, options));
    }
})(jQuery);