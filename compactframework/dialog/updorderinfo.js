//define(['cBase', 'cUIAbstractView', 'cUILayer', 'cUILoading', 'AppModel', 'Validate', 'AppCommonBiz', 'text!UpdOrderInfoHtml'], function (cBase, cUIAbstractView, cLayer, cUILoading, appModel, Validate, AppCommonBiz, htmlStr) {
(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath:'updorderinfo.html',
        events: {
            'click .icon-close': 'destory',
            'change .js_province_box': 'selProvince',
            'change .js_city_box': 'selCity',
            'click input[data-btn="save"]': 'saveOrderInfo'
        },
        __propertys__: function () {
            var _el = this.$el;
            this.provinceTplFn = _.template(_el.find('#js_province_tpl').html());
            this.cityTplFn = _.template(_el.find('#js_city_tpl').html());
            this.areaTplFn = _.template(_el.find('#js_area_tpl').html());
            this.updateTplFn = _.template(_el.find('#js_addressedit_tpl').html());
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            var _el = this.$el,
                order = this.order;

            this.getAddrDetail(order);
            var htmls = this.updateTplFn({data: order});
            _el.html(htmls);

            this.renderProvince(order.provinceid);
            if (order.provinceid) {
                this.renderCity(order.provinceid, order.cityid)
            }
            if (order.cityid > 0) {
                this.renderAres(order.cityid, order.countyid);
            }
        },
        saveOrderInfo: function (e) {
            var target = $(e.currentTarget),
                order = this.order,
                p = this.$el;
            var param = this.getColValue(p);
            param.impolId = order.id;
            if (this.checkRequire(param) == false) {
                return;
            }
            var pname = p.find('.js_province_box option').not(function () {
                    return !this.selected
                }).text(),
                cityname = p.find('.js_city_box option').not(function () {
                    return !this.selected
                }).text(),
                aname = p.find('.js_area_box option').not(function () {
                    return !this.selected
                }).text();

            param.pname = pname;
            param.cityname = cityname;
            param.aname = aname;
            this.saveOrderInfoApi(param, function (data) {
                var _this = this;
                $.custom.Dialog.Toast(data.msg || '网单信息修改成功！', 2, function () {
                    _this.destory();
                    _this._callUpdateFn();
                }, {context: this});
            });
        },
        selCity: function (e) {
            var target = $(e.currentTarget),
                id = target.val();
            this.renderAres(id, 0);
        },
        selProvince: function (e) {
            var target = $(e.currentTarget),
                id = target.val();
            this.renderCity(id, 0);
            this.renderAresEmpty();
        },

        renderProvince: function (provinceid) {
            var provinceBox = this.$el.find('.js_province_box');
            this.getProvinceApi(function (data) {
                if (data && data.addrs && data.addrs.length) {
                    data.addrs.selprovinceid = provinceid;
                    provinceBox.html(this.provinceTplFn({data: data.addrs}));
                }
            });
        },
        renderCity: function (provinceid, selcityid) {
            var cityBox = this.$el.find('.js_city_box');
            this.getCitysApi(provinceid, function (data) {
                data.addrs.selid = selcityid;
                cityBox.html(this.cityTplFn({data: data.addrs}));
            });
        },
        renderAres: function (cityid, selareaid) {
            var areaBox = this.$el.find('.js_area_box');
            this.getAreaApi(cityid, function (data) {
                data.addrs.selid = selareaid;
                areaBox.html(this.areaTplFn({data: data.addrs}));
            });
        },

        checkRequire: function (param) {
            if (!param.ono) {
                $.custom.Dialog.Toast('请网店单号');
                return false;
            }

            if (/^[\u4e00-\u9fff]{0,}$/.test(param.ono)) {
                $.custom.Dialog.Toast('请填写非中文的网店单号');
                return false;
            }

            if (!param.name) {
                $.custom.Dialog.Toast('请填写收件人姓名');
                return false;
            }

            var validateIdCardName = function (icName) {
                var reg = /^[\u4e00-\u9fff][\u4e00-\u9fff\u00b7]{0,}[\u4e00-\u9fff]$/;
                return reg.test(icName);
            };
            if (!validateIdCardName(param.name)) {
                $.custom.Dialog.Toast('收件人姓名请填写中文');
                return false;
            }
            if ((param.name + '').length >= 26) {
                $.custom.Dialog.Toast('您填写的收件人姓名太长了，请检查下');
                return false;
            }
            if (!param.pid) {
                $.custom.Dialog.Toast('请选择省份/州');
                return false;
            }
            if (!param.cid) {
                $.custom.Dialog.Toast('请选择城市/县区');
                return false;
            }
            if (!param.aid) {
                $.custom.Dialog.Toast('请选择县区');
                return false;
            }
            if (!param.addetails || param.addetails.length < 5) {
                $.custom.Dialog.Toast('请填写详细的收件地址');
                return false;
            }
            if (!param.idno) {
                $.custom.Dialog.Toast('请填写身份证号码');
                return false;
            }
            if (!$.custom.isIdCard(param.idno)) {
                $.custom.Dialog.Toast('请填写正确的身份证号码');
                return false;
            }
            if (param.pcode && !(/^\d{6}$/.test(param.pcode))) {
                $.custom.Dialog.Toast('请填写正确的邮政编码');
                return false;
            }

            if (!param.mtel && !param.ctel) {
                $.custom.Dialog.Toast('手机号，固定电话必须填一项');
                return false;
            }
            if (param.mtel) {
                if (!(/^(1[3-8][0-9])\d{8}$/.test(param.mtel))) {
                    $.custom.Dialog.Toast('请填写正确的手机号码');
                    return false;
                }
            }
            if (param.ctel) {
                if (!/^[0-9]{3,4}-{0,1}[0-9]{7,8}$/.test(param.ctel)) {
                    $.custom.Dialog.Toast('请填写正确的座机电话');
                    return false;
                }
            }
            return true;
        },
        renderAresEmpty: function () {
            var areaBox = this.$el.find('.js_area_box');
            areaBox.html(this.areaTplFn({data: []}));
        },
        getColValue: function ($p) {
            var param = {};
            var cols = $p.find("[data-col]");
            _.each(cols, function (ele) {
                var _o = $(ele),
                    name = _o.attr('data-col'),
                    v = $.trim(_o.attr('data-value') || '');
                if (!v) {
                    param[name] = $.trim(_o.val() || '');
                } else {
                    param[name] = v;
                }
            });
            return param;
        },
        /**
         * 获取订单详情
         * @param data
         * @returns {*}
         */
        getAddrDetail: function (data) {
            if (data.addrdetails) {
                return data;
            }
            data.addrdetails = "";
            if (data.cAddr) {
                var arr = $.trim(data.cAddr || '').split(' ');
                if (arr && arr.length > 0) {
                    arr = _.filter(arr, function (item) {
                        return item != "";
                    });
                    if (arr.length > 3) {
                        arr = arr.slice(3);
                    }
                    data.addrdetails = arr.join(' ');
                }
            }
            return data;
        },

        saveOrderInfoApi: function (param, fn) {
            //saveAddressInfoModel.param = param;
            //saveAddressInfoModel.excute(function (data) {
            //    var _this = this;
            //    if (data.flag) {
            //        (typeof fn === 'function') && fn.call(this, data);
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '网单信息修改失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast("服务调用异常！");
            //}, true, this);
        },
        getProvinceApi: function (fn) {
            //provincesListModel.param = {};
            //provincesListModel.excute(function (data) {
            //    if (data.flag) {
            //        (typeof fn === 'function') && fn.call(this, data);
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '获取省份失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常!');
            //}, false, this);
        },
        getCitysApi: function (parentId, fn) {
            //citysListModel.param = {};
            //citysListModel.setParam('pid', parentId);
            //citysListModel.excute(function (data) {
            //    if (data && data.addrs && data.addrs.length) {
            //        (typeof fn === 'function') && fn.call(this, data);
            //    } else {
            //        data.addrs = data.addrs || [];
            //        (typeof fn === 'function') && fn.call(this, data);
            //        $.custom.Dialog.Toast('暂无城市信息');
            //    }
            //}, function (err) {
            //    (typeof fn === 'function') && fn.call(this);
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
        },
        getAreaApi: function (parentId, fn) {
            //areasListModel.param = {};
            //areasListModel.setParam('pid', parentId);
            //areasListModel.excute(function (data) {
            //    if (data && data.addrs && data.addrs.length) {
            //        (typeof fn === 'function') && fn.call(this, data);
            //    } else {
            //        data.addrs = data.addrs || [];
            //        (typeof fn === 'function') && fn.call(this, data);
            //        $.custom.Dialog.Toast('暂无区/县信息');
            //    }
            //}, function (err) {
            //    (typeof fn === 'function') && fn.call(this);
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
        },

        hide: function () {
            this._callCallBack();
            this.destory();
        },
        _callUpdateFn: function () {
            (typeof this.updateFn === 'function') && this.updateFn.call(this);
        },
        _callCallBack: function () {
            (typeof this.callBack === 'function') && this.callBack.call(this);
        },
    });

    var defaults = {
        order: {},
        updateFn:function(){},
        callBack: function () {},
        context:null
    };
    $.custom.Dialog.register('UpdOrderInfo', function (order, updateFn, defs) {
        if (!order) {
            $.custom.Dialog.Toast('组件输入参数有误！');
            return;
        }
        defs = defs || {};
        defs.order = order;
        defs.updateFn = updateFn || defaults.updateFn;
        var settings = $.extend({}, defaults, defs);

        return new BaseView(settings);
    });
})(jQuery);
