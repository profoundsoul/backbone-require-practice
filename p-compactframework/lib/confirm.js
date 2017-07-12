/**
 * Created by mumu on 2017/1/16.
 */
(function ($) {
    var Confirm = $.custom.Dialog({
        events: {
            'click .cui-btns-cancel': 'cancel',
            'click .cui-btns-sure': 'sure'
        },
        __propertys__:function(){
            var tplArr = [];
            tplArr.push('<div class="cui-pop-box">');
            tplArr.push('    <div class="cui-bd">');
            tplArr.push('        <div class="cui-error-tips"><<=message>></div>');
            tplArr.push('        <div class="cui-roller-btns">');
            tplArr.push('            <div class="cui-flexbd cui-btns-cancel"><<=cancelBtnName>></div>');
            tplArr.push('            <div class="cui-flexbd cui-btns-sure"><<=okBtnName>></div>');
            tplArr.push('        </div>');
            tplArr.push('    </div>');
            tplArr.push('</div>');

            this.tplFn = _.template(tplArr.join(''));
        },
        initialize: function () {
            this.render();
            this.setMaskClickHandle();
        },
        render:function(){
            var html = this.tplFn(this);
            this.$el.html(html);
        },
        setMaskClickHandle: function () {
            var _this = this;
            if (this.isClickHide) {
                this.mask.$el.on('click', function () {
                    _this.destory();
                });
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
        isStartAnimation: false,                //可选，是否开启动画
        isClickHide: false,                     //可选，是否点击关闭弹窗
    };

    $.custom.Dialog.register('Confirm', function (msg, okFn, context, defs) {
        defs = defs || {};
        defs.message = msg;
        defs.okFn = okFn || defaults.okFn;
        defs.context = context || defaults.context;

        var settings = $.extend(true, defaults, defs);
        new Confirm(settings);
    });
})(jQuery);
