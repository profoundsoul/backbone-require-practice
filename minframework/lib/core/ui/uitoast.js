/**
 * Created by lin.qiu on 2017/6/2.
 */
define('UIToast', ['DialogPlus', 'Base', 'Zepto'], function (Dialog, Base, $) {

    return (function () {
        /**
         * 确认提示框，点击确定和取消时会自动回调oKFn与failFn
         * @param msg 消息
         * @param okFn 点击确定回调
         * @param failFn 点击取消回调
         * @param options dialog参数选项{context}
         */
        this.showConfirm = function(msg, okFn, failFn, options) {
            var defaults = {
                title: 'Confirm',
                content: 'confirm current operation？',
                okValue: 'ok',
                cancelValue: 'cancel',
                width: '260px',
                ok: function () {},
                cancel: function () {}
            };
            options = $.extend({}, defaults, options||{});
            options.content = msg || options.content;

            //bind this value is current context
            options.ok = Base.bindFn(okFn || options.ok, options.context || this);
            options.cancel = Base.bindFn(failFn || options.cancel, options.context || this);

            var confirm = Dialog(options);
            confirm.showModal();
        };

        /**
         * 重写提示框弹出，关闭时自动移除Dom
         * @param msg   提示语
         * @param callback 回调
         * @param delay 延时多少秒后关闭
         * @param options dialog参数选项{context}
         */
        this.showToast = function (msg, callback, delay, options) {
            var defaults = {
                quickClose: true,
                content: 'tips',
                onclose: function(){}
            };
            options = $.extend({}, defaults, options||{});
            var context = options.context || this;
            options.content = msg || defaults.content;
            options.onclose =  (function(fn){
                return function(){
                    if(timeoutid) {
                        clearTimeout(timeoutid);
                        timeoutid = null;
                    }
                    callback.apply(context);
                }
            })(typeof callback ==='function' ? callback: defaults.onclose);
            var toast = Dialog(options);
            toast.showModal();

            //auto overtime handle
            delay = (+delay && +delay>0) ? +delay : 2;
            var timeoutid = setTimeout(function(){
                toast.close().remove();
            }, delay*1000);
        };

        var loading = null;
        this.showLoading = function(quickClose){
            if(!loading) {
                loading = Dialog({
                    quickClose:!!quickClose,
                    onclose:function(){
                        loading = null;
                    }
                });
                loading.showModal();
            }else{
                loading.focus();
            }
        };
        this.hideLoading = function(){
            if(loading){
                loading.close().remove();
                loading=null;
            }
        };

        return this;
    }).call({});
})