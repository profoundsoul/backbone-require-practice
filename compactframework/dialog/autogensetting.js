/**
 * Created by mumu on 2017/2/5.
 */
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath: 'autogensetting.html',
        events: {
            'click .icon-close': 'destory',
            'click .js_all_chk': 'toggleOrderSetting',
            'click [data-btn="save"]': 'saveOrderSetting',
            'click .order-inner-wrap[data-btn="add_act"]': 'toggleActClass',
        },
        __propertys__: function () {
            this.rootTplFn = _.template(this.$el.find('#js_root_tpl').html());
        },
        initialize: function () {
            this.getAutoGenOrderSettingApi(function (data) {
                var _this = this;
                if (!data || !data.settings) {
                    $.custom.Dialog.Toast('无效自动订单配置数据！', 3, function () {
                        _this.hide();
                    });
                }
                this.data = data.settings;
                this.render();
            });
        },
        render: function () {
            this.$el.html(this.rootTplFn({data: this.data}));
        },
        hide: function () {
            this.destory();
        },
        toggleOrderSetting: function (e) {
            var target = $(e.currentTarget),
                box = target.parents('[data-box="body"]'),
                isChk = target.prop('checked');
            var chks = box.find('.order-inner-wrap[data-btn="add_act"]');
            if (isChk) {
                chks.removeClass('order-inner-wrap-active').addClass('order-inner-wrap-active');
            } else {
                chks.removeClass('order-inner-wrap-active');
            }
        },
        toggleActClass: function (e) {
            var target = $(e.currentTarget),
                isShow = target.hasClass('order-inner-wrap-active');
            if (!isShow) {
                target.addClass('order-inner-wrap-active');
            } else {
                target.removeClass('order-inner-wrap-active');
            }
        },
        saveOrderSetting: function (e) {
            var target = $(e.currentTarget),
                box = target.parents('[data-box="body"]');

            var settingArr = [],
                chkEles = box.find('.order-inner-wrap[data-btn="add_act"]');
            for (var i = 0, len = chkEles.length; i < len; i++) {
                if (chkEles.eq(i).hasClass('order-inner-wrap-active')) {
                    settingArr.push(chkEles.eq(i).attr('data-id'))
                }
            }

            this.saveAutoGenOrderSettingApi({setIds: settingArr}, function (data) {
                var _this = this;
                if (data.flag) {
                    $.custom.Dialog.Toast('保存成功！', 2, function () {
                        _this.hide();
                    });
                } else {
                    $.custom.Dialog.Toast(data.msg);
                }
            });
        },

        saveAutoGenOrderSettingApi: function (param, fn) {
            //saveAutoGenOrderSettingModel.param = param;
            //saveAutoGenOrderSettingModel.excute(function () {
            //    typeof fn === 'function' && fn.apply(this, arguments);
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, true, this);
        },
        getAutoGenOrderSettingApi: function (fn) {
            var mockData = '{"settings":[{"id":9,"cId":127,"cName":null,"ischk":0,"infoList":[{"id":25,"sId":9,"code":"Columns1","name":"每个订单不可超过金额","value":"800","unit":"元"}]},{"id":10,"cId":211,"cName":null,"ischk":0,"infoList":[{"id":28,"sId":10,"code":"Columns1","name":"每个订单不可超过金额","value":"322.6","unit":"元"}]},{"id":11,"cId":130,"cName":null,"ischk":0,"infoList":[{"id":31,"sId":11,"code":"Columns1","name":"每个订单不可超过金额","value":"111.36","unit":"元"}]},{"id":12,"cId":128,"cName":null,"ischk":0,"infoList":[{"id":34,"sId":12,"code":"Columns1","name":"每个订单不可超过金额","value":"500","unit":"元"}]},{"id":13,"cId":129,"cName":null,"ischk":0,"infoList":[{"id":37,"sId":13,"code":"Columns1","name":"每个订单不可超过金额","value":"1000","unit":"元"}]},{"id":14,"cId":133,"cName":null,"ischk":0,"infoList":[{"id":40,"sId":14,"code":"Columns1","name":"每个订单不可超过金额","value":"500","unit":"元"}]},{"id":15,"cId":196,"cName":null,"ischk":0,"infoList":[{"id":43,"sId":15,"code":"Columns1","name":"每个订单不可超过金额","value":"500","unit":"元"}]},{"id":16,"cId":191,"cName":null,"ischk":0,"infoList":[{"id":46,"sId":16,"code":"Columns1","name":"每个订单不可超过金额","value":"500","unit":"元"}]},{"id":17,"cId":192,"cName":null,"ischk":0,"infoList":[{"id":49,"sId":17,"code":"Columns1","name":"每个订单不可超过金额","value":"500","unit":"元"}]}],"status":{"code":200,"msg":"成功"}}';

            typeof fn === 'function' && fn.apply(this, [JSON.parse(mockData)]);
            //getAutoGenOrderSettingListModel.param = {};
            //getAutoGenOrderSettingListModel.excute(function () {
            //    typeof fn === 'function' && fn.apply(this, arguments);
            //}, function (err) {
            //    var _this = this;
            //    $.custom.Dialog.Toast('服务调用异常！', 3, function(){_this.hide()});
            //}, false, this);
        },

        /**
         * 操作成功回调
         * @param data
         * @private
         */
        _callUpdateFn: function (data) {
            (typeof this.updateFn === 'function') && this.updateFn();
        },

        /**
         * 页面关闭时回调
         * @private
         */
        _callCloseCallBack: function () {
            (typeof this.callBack === 'function') && this.callBack();
        }
    });

    var defaults = {
        updateFn: function () {},
        callBack: function () {}
    };

    $.custom.Dialog.register('AutoGenSetting', function (defs) {
        return new BaseView($.extend({}, defaults, defs || {}));
    });

})(jQuery);