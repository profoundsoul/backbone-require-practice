/**
 * Created by mumu on 2017/1/20.
 */
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath: 'cancelOrders.html',
        events: {
            'click .icon-close': 'destory',
            'click #js_cancel_confirm': 'confirm'
        },
        confirm: function (e) {
            var _this = this;
            var type = this.$el.find('input[type="radio"]:checked').attr('data-reason-type');

            _this.destory();
            _this._callUpdateFn({oid: _this.oids, reason: type});

            //orderCancelModel.setParam({oid: this.oids, reason: type});
            //orderCancelModel.excute(function (data) {
            //    _this.destory();
            //    if (data.flag) {
            //        _this._callUpdateFn({oid: _this.oids, reason: type});
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '取消订单失败！');
            //    }
            //});
        },
        _callUpdateFn: function () {
            (typeof this.updateFn === 'function') && this.updateFn.apply(this.context, arguments);
        }
    });

    var defaults = {
        updateFn: function () {},
        context: null,
        oids: ''
    };

    $.custom.Dialog.register('CancelOrders', function (oids, updateFn, context) {
        var settings = {};
        settings.oids = oids || defaults.oids;
        settings.updateFn = updateFn || defaults.updateFn;
        settings.context = context || defaults.context;

        return new BaseView(settings);
    });
})(jQuery);