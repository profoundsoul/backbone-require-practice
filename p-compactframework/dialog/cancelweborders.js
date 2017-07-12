/**
 * Created by mumu on 2017/2/8.
 */
/**
 * Created by mumu on 2017/1/20.
 */
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath: 'cancelweborders.html',
        events: {
            'click .icon-close': 'destory',
            'click .js_cancel_confirm':'confirmCancelOrders',
            'click input[data-reason-type]':'switchCancelReason'
        },
        confirmCancelOrders: function (e) {
            var _this = this,
                target = $(e.currentTarget),
                container = target.parents('[data-box="body"]');
            var checkedEle = container.find("input[data-reason-type]:checked");
            var type = parseInt(checkedEle.attr("data-reason-type"), 10);
            var reason = "";
            switch (type) {
                case 1:
                    reason = "缺货";
                    break;
                case 2:
                    reason = "顾客不要了";
                    break;
                case 3:
                    var detailReason = container.find("textarea[data-col='other']").val();
                    if (detailReason.length > 48) {
                        _this.showToast("您输入的原因过长!");
                        return false;
                    } else if (detailReason.length == 0) {
                        _this.showToast("请输入取消原因!");
                        return false;
                    }
                    reason = detailReason;
                    break;
                default:
            }
            var len = this.orders.length;
            //cancelGenOrdersModel.setParam({
            //    reason: reason,
            //    orders: this.orders
            //});
            //cancelGenOrdersModel.excute(function (data) {
            //    var count = len;
            //    $.custom.Dialog.Toast("操作完成！成功（" + data.count + "）个，失败（" + (count - data.count) + "）个。");
            //    _this.hide();
            //    _this.callUpdateFn();
            //}, function (err) {
            //    $.custom.Dialog.Toast("服务调用异常！");
            //}, true, this);
        },
        switchCancelReason: function (e) {
            var target = $(e.currentTarget),
                type = parseInt(target.attr("data-reason-type"), 10),
                remEle = target.parents('[data-box="body"]').find("textarea[data-col='other']");
            if (type === 3) {
                remEle.show();
            } else {
                remEle.hide();
            }
        },
        hide:function(){
            this.destory();
        },
        _callUpdateFn: function () {
            (typeof this.updateFn === 'function') && this.updateFn.apply(this.context, arguments);
        }
    });

    var defaults = {
        orders:[],
        updateFn: function () {},
        context: null,
    };

    $.custom.Dialog.register('CancelWebOrders', function (orders, updateFn, context) {
        var settings = {};
        if(!(orders && orders.length)){
            $.custom.Dialog.Toast('请选择需要取消的网店单号！');
            return;
        }
        settings.orders = orders || defaults.orders;
        settings.updateFn = updateFn || defaults.updateFn;
        settings.context = context || defaults.context;
        return new BaseView(settings);
    });
})(jQuery);