/**
 * Created by mumu on 2017/2/6.
 */
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath: 'setpaypwd.html',
        rsaPath: '../secure/rsa.min.js',
        events: {
            'click .icon-close': 'destory',
            'click .subBtn': 'submit'
        },
        __propertys__: function () {
            var _el = this.$el;
            this.elsBox = {
                paypwd_Box: _el.find('.js_paypwd_box')
            };
            this.elsTpl = {
                paypwd_Tpl: _el.find('#js_paypwd_tpl')
            };
            this.elsFun = {
                paypwd_Fun: _.template(this.elsTpl.paypwd_Tpl.html())
            };
        },
        initialize: function () {
            this.getIsPayPwdExistedApi(function(data){
                this.render(data);
            });
        },
        render: function (data) {
            var _htmls = this.elsFun.paypwd_Fun({isExist: data.existed});
            this.elsBox.paypwd_Box.html(_htmls);
        },
        submit: function (e) {
            var target = $(e.currentTarget),
                subWay = target.hasClass('js_updpwd_do');

            subWay ? this.updatePwd() : this.setNewPwd();
        },

        updatePwd: function () {
            var _this = this,
                oldPwd = this.$el.find('.js_oldpwd_val').val(),
                newPwd = this.$el.find('.js_newpwd_val').val(),
                agPwd = this.$el.find('.js_agpwd_val').val(),
                msg = this.$el.find('.js_message_info'),
                pass = /(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,16}$/;
            if (!pass.test(oldPwd)) {
                msg.html('提示：请输入正确的密码！');
                return;
            }
            if (!pass.test(newPwd)) {
                msg.html('提示：请输入6-16位字符与数字的组合密码！');
                return;
            }
            if (newPwd != agPwd) {
                msg.html('提示：新密码两次输入不一致，请重新输入!');
                return;
            }
            this.getDynamicRSA(function () {
                oldPwd = $.custom.RSA.rsaEncrypted(oldPwd);
                newPwd = $.custom.RSA.rsaEncrypted(newPwd);
                //UpdatePayPwdModel.setParam({
                //    oldpwd: oldPwd,
                //    newpwd: newPwd
                //});
                //UpdatePayPwdModel.excute(function (data) {
                //    if (data.flag) {
                //        this.hide();
                //    } else {
                //        $.custom.Dialog.Toast(data.msg || '更新支付密码失败！');
                //    }
                //}, function () {
                //    $.custom.Dialog.Toast("服务调用异常！");
                //}, false, this)
            });

        },
        setNewPwd: function () {
            var _this = this,
                newPwd = this.$el.find('.js_newpwd_val').val(),
                agPwd = this.$el.find('.js_agpwd_val').val(),
                msg = this.$el.find('.js_message_info'),
                pass = /(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,16}$/.test(newPwd);
            if (!pass) {
                msg.html('提示：请输入6-16位字符与数字的组合密码！');
                return;
            }
            if (newPwd != agPwd) {
                msg.html('提示：新密码两次输入不一致，请重新输入!');
                return;
            }
            this.getDynamicRSA(function () {
                newPwd = $.custom.RSA.rsaEncrypted(newPwd);
                //SetPayPwdModel.setParam({
                //    newpwd: newPwd
                //});
                //SetPayPwdModel.excute(function (data) {
                //    if (data.flag) {
                //        this.hide();
                //    } else {
                //        $.custom.Dialog.Toast(data.msg || '设置支付密码失败！');
                //    }
                //}, function (err) {
                //    $.custom.Dialog.Toast("服务调用异常！");
                //}, false, this);
            });
        },
        getDynamicRSA: function (fn) {
            if (typeof $.custom.RSA !== 'object') {
                var path = $.custom.getRealSourcePath(this.getCompPath(), this.rsaPath);
                $.custom.createDynamicScript(path, function () {
                    (typeof fn === 'function') && fn.apply(this, arguments);
                }, this);
            } else {
                (typeof fn === 'function') && fn.apply(this, arguments);
            }
        },
        getIsPayPwdExistedApi:function(fn){
            //IsPayPwdExistedModel.excute(function (data) {
            //    typeof fn === 'function' && fn.apply(this, arguments);
            //}, function () {
            //    var _this = this;
            //    $.custom.Dialog.Toast("服务调用异常！", 3, function(){
            //        _this.hide();
            //    });
            //}, true, this);

            //mock data
            typeof fn === 'function' && fn.apply(this, [{existed:true}]);
        },
        hide: function () {
            this._callUpdateFn();
            this.destory();
        },
        _callUpdateFn: function () {
            (typeof this.updateFn === 'function') && this.updateFn.call(this);
        }
    });

    var defaults = {
        updateFn: function () {
        },
        context: null,
    };
    $.custom.Dialog.register('SetPayPwd', function (fn, context) {
        var settings = {};
        settings.updateFn = fn || defaults.updateFn;
        settings.context = context || defaults.context;

        return new BaseView(settings);
    });
})(jQuery);