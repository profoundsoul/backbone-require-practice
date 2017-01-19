/**
 * Created by mumu on 2017/1/19.
 */
(function ($) {
    var Toast = $.custom.Dialog({
        __propertys__: function () {
            var tplArr = [];
            tplArr.push('<div class="cui-layer-padding">');
            tplArr.push('<div class="cui-layer-content"><<=message>></div>');
            tplArr.push('</div>');

            this.timeoutid = 0;
            this.tplFn = _.template(tplArr.join(' '));
        },
        initialize: function () {
            this.render();
            this.setMaskClickHandle();
            this.delayHanlde();

        },
        delayHanlde: function () {
            var _this = this;
            this.timeoutid = setTimeout(function () {
                _this._close();
            }, this.delay * 1000);
        },
        render: function () {
            var html = this.tplFn(this);
            //兼容css部分前样式
            this.$el.addClass('cui-toast').html(html);
        },
        setMaskClickHandle: function () {
            var _this = this;
            if (this.isClickHide) {
                this.mask.$el.on('click', function () {
                    clearTimeout(_this.timeoutid);
                    _this._close();
                });
            }
        },
        _close: function () {
            this.destory();
            this._callOkHandle();
        },
        _callOkHandle: function () {
            typeof this.okFn === 'function' && this.okFn.call(this.context);
        }
    });

    var defaults = {
        message: '确定?',                       //必填，确认提示消息
        delay: 2,                               //选填，多长时间关闭当前消息框
        okFn: function () {},                   //选填，点击确定后的回调函数
        context: null,                          //可选，是否改变回调this
        isClickHide: true,                      //可选，是否点击关闭弹窗
    };
    $.custom.Dialog.register('Toast', function (msg, delay, okFn, defs) {
        defs = defs || {};
        defs.message = msg;
        defs.delay = delay || defaults.delay;
        defs.okFn = okFn || defaults.okFn;

        var settings = $.extend(true, defaults, defs);
        new Toast(settings);
    });

})(jQuery);
