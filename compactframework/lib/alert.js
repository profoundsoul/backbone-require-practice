/**
 * Created by mumu on 2017/1/16.
 */
(function ($) {
    var Confirm = $.custom.Dialog({
        templatePath: 'alert.html',
        events: {
            'click .cui-btns-cancel': 'cancel',
            'click .cui-btns-sure': 'sure'
        },
        __propertys__:function(){
            this.tplFn = _.template(this.$el.find('#js_confirm_tpl').html());
        },
        initialize: function () {
            this.render();
            this.setMaskClickHandle();
        },
        render:function(){
            var html = this.tplFn(this);
            this.$el.find('.js_confirm_box').html(html);
        },
        setMaskClickHandle: function () {
            var _this = this;
            if (this.isClickHide) {
                this.mask.$el.on('click', function () {
                    _this.destory();
                })
            }
        },
        cancel:function(){
            this.destory();
            this._callCancelHandle();
        },
        sure: function () {
            this.destory();
            this._callOkHandle();
        },
        _callOkHandle:function(){
            typeof this.okFn === 'function' && this.okFn.call(this.context);
        },
        _callCancelHandle:function(){
            typeof this.cancelFn === 'function' && this.cancelFn.call(this.context);
        }
    });

    var defaults = {
        message: '确定?',                       //必填，确认提示消息
        okFn: function () {},                   //必填，点击确定后的回调函数
        context: null,                          //可选，是否改变回调this
        cancelFn:function(){},                  //可选，点击取消后的回调函数
        title: '选择确认框',                    //可选，框标题
        okBtnName:'确定',                       //可选，确定按钮名称
        cancelBtnName:'取消',                   //可选，取消按钮名称
        isStartAnimation: true,                 //可选，是否开启动画
        isClickHide: true,                      //可选，是否点击关闭弹窗
    };

    $.custom.Dialog.register('Confirm', function (msg, okFn, context, defs) {
        defs = defs || {};
        var settings = $.extend(true, defaults, defs, {
            message: msg, okFn: okFn, context: context
        });
        new Confirm(settings);
    });
})(jQuery);
