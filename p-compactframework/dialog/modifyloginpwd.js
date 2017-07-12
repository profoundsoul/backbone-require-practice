/**
 * Created by mumu on 2017/2/6.
 */
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath: 'modifyloginpwd.html',
        rsaPath:'../secure/rsa.min.js',
        events: {
            'click .icon-close': 'destory',
            'click [data-btn="save"]': 'modify'
        },
        modify: function (e) {
            var target = $(e.currentTarget);
            var param = {},
                p = target.parents('.js_pwd_box');

            var cols = p.find('input[data-col]');
            _.each(cols, function (ele) {
                var _o = $(ele),
                    n = _o.data('col');
                param[n] = $.trim(_o.val());
            });
            //校验当前密码
            var reg = /(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,16}$/;
            if (!reg.test(param.oldpwd)) {
                $.custom.Dialog.Toast('请输入6-16位字符与数字的组合的旧密码！');
                return;
            }
            if (!reg.test(param.newpwd)) {
                $.custom.Dialog.Toast('提示：请输入6-16位字符与数字的组合的新密码！');
                return;
            }
            if (param.newpwd != param.agnewpwd) {
                $.custom.Dialog.Toast('提示：新密码两次输入不一致，请重新输入!');
                return;
            }
            this.getDynamicRSA(function () {
                param.oldpwd = $.custom.RSA.rsaEncrypted(param.oldpwd);
                param.newpwd = $.custom.RSA.rsaEncrypted(param.newpwd);
                param.agnewpwd = $.custom.RSA.rsaEncrypted(param.agnewpwd);
                this.modifyUserLoginPwdApi(param);
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
        modifyUserLoginPwdApi: function (param, fn) {
            //modifyUserLoginPwdModel.param = param;
            //modifyUserLoginPwdModel.excute(function (data) {
            //    if (data.flag) {
            //        $.custom.Dialog.Toast('密码修改成功', 2, function () {
            //            this.hide();
            //        });
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '密码修改失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, true, this);
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
        updateFn: function () {},
        context: null,
    };
    $.custom.Dialog.register('ModifyLoginPwd', function (fn, context) {
        var settings = {};
        settings.updateFn = fn || defaults.updateFn;
        settings.context = context || defaults.context;

        return new BaseView(settings);
    });
})(jQuery);