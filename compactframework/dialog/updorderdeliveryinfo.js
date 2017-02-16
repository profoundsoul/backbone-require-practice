(function ($) {
    var BaseView = $.custom.Dialog({
        templatePath:'updorderdeliveryinfo.html',
        events: {
            'click .icon-close': 'destory',
            'change .js_selprovince': 'selProvince',
            'change #js_city_box': 'selCity',
            'click  #editBtn': 'save'
        },
        __propertys__: function () {
            var _el = this.$el;
            this.tplFn = _.template(_el.find('#js_popup_tpl').html());

            this.provinceTplFn = _.template(_el.find('#js_province_tpl').html());
            this.cityTplFn = _.template(_el.find('#js_city_tpl').html());
            this.areaTplFn = _.template(_el.find('#js_area_tpl').html());
        },
        initialize: function () {
            this.render();
        },
        render:function(){
            this.$el.html(this.tplFn({data:this.order}));

            this.getProvinceListApi(function(data){
                var addrs = data.addrs || [],
                    order = this.order,
                    provinceid = 0;
                if (addrs && addrs.length && order.province) {
                    addrs.selprovinceid = 0;
                    var selAddr = _.find(addrs, function(item){
                        return item.akeys === order.province || item.aname === order.province;
                    });
                    if(selAddr) {
                        addrs.selprovinceid = selAddr.id;
                        provinceid = selAddr.id;
                    }
                }
                //渲染省
                this.renderProvince(addrs);
                //渲染市区
                this.renderCity(provinceid, order.cityid);
                //渲染县区
                this.renderAres(order.cityid, order.countyid);
            });
        },

        selProvince: function (e) {
            var target = $(e.currentTarget),
                id = target.val();
            this.renderCity(id);
            this.renderAresEmpty();
        },
        selCity: function (e) {
            var target = $(e.currentTarget),
                id = target.val();
            this.renderAres(id);
        },
        save: function (e) {
            var _el = this.$el,
                order = this.order,
                cname = $.trim(_el.find('#txtname').val() || ''),
                address = $.trim(_el.find('#txtaddress').val() || ''),
                idCardNo = $.trim(_el.find('#txtIdCardNo').val() || ''),
                mobile = $.trim(_el.find('#txtMTel').val() || ''),
                ctel = $.trim(_el.find('#txtCTel').val() || ''),
                zip = $.trim(_el.find('#txtzip').val() || ''),
                pid = _el.find('.js_selprovince').val() || '',
                pname = _el.find('.js_selprovince option').not(function () {
                    return !this.selected
                }).text(),
                cid = _el.find('#js_city_box').val(),
                cObj = _el.find('#js_city_box option').not(function () {
                    return !this.selected
                }),
                cityname = cObj.text(),
                aid = _el.find('#js_area_box').val(),
                aname = _el.find('#js_area_box option').not(function () {
                    return !this.selected
                }).text();
            if (!cname) {
                $.custom.Dialog.Toast('请填写收件人姓名');
                return;
            }
            var validateIdCardName = function (icName) {
                var reg = /^[\u4e00-\u9fff][\u4e00-\u9fff\u00b7]{0,}[\u4e00-\u9fff]$/;
                return reg.test(icName);
            };
            if (!validateIdCardName(cname)) {
                $.custom.Dialog.Toast('收件人姓名请填写中文');
                return;
            }
            if ((cname + '').length >= 26) {
                $.custom.Dialog.Toast('您填写的收件人姓名太长了，请检查下');
                return;
            }
            if (!pid) {
                $.custom.Dialog.Toast('请选择省份/州');
                return;
            }
            if (!cid) {
                $.custom.Dialog.Toast('请选择城市/县区');
                return;
            }
            if (!aid) {
                $.custom.Dialog.Toast('请选择县区');
                return;
            }
            if (!address || address.length < 5) {
                $.custom.Dialog.Toast('请填写详细的收件地址');
                return;
            }
            if (!idCardNo) {
                $.custom.Dialog.Toast('请填写身份证号码');
                return;
            }
            if (!$.custom.isIdCard(idCardNo)) {
                $.custom.Dialog.Toast('请填写正确的身份证号码');
                return;
            }
            /*if (!zip) {
             $.custom.Dialog.Toast('请填写邮政编码');
             return;
             }*/
            if (zip && !(/^\d{6}$/.test(zip))) {
                $.custom.Dialog.Toast('请填写正确的邮政编码');
                return;
            }

            if (!mobile && !ctel) {
                $.custom.Dialog.Toast('手机号，固定电话必须填一项');
                return;
            }
            if (mobile) {
                if (!(/^(1[3-8][0-9])\d{8}$/.test(mobile))) {
                    $.custom.Dialog.Toast('请填写正确的手机号码');
                    return;
                }
            }

            var param = {
                oid: order.oid,
                name: cname,
                idcno: idCardNo,
                mtel: mobile,
                ctel: ctel,
                pcode: zip,
                addetails: address,
                pid: pid,
                pname: pname,
                cid: cid,
                cityname: cityname,
                aid: aid,
                aname: aname
            };

            this.updateOrderAddressApi(param, function(){
                this.hide();
            });
        },

        renderProvince: function (data) {
            var htmls = this.provinceTplFn({data: data});
            this.$el.find('.js_selprovince').html(htmls);
        },
        renderCity: function (pid, selcityid) {
            if (pid && +pid > 0) {
                var _this = this,
                    city_box = this.$el.find('#js_city_box');
                this.getCityListApi(pid, function (data) {
                    var htmls = this.cityTplFn({data: data.addrs, selid: selcityid || 0});
                    city_box.html(htmls);
                });
            }
        },
        renderAres: function (cid, selaid) {
            if (cid && +cid > 0) {
                this.getAreaListApi(cid, function (data) {
                    var areas_box = this.$el.find('#js_area_box');
                    var htmls = this.areaTplFn({data: data.addrs, selid: selaid || 0});
                    areas_box.html(htmls);
                });
            }
        },
        renderAresEmpty: function () {
            var areas_box = this.$el.find('#js_area_box');
            var htmls = this.areaTplFn({data: [], selid: 0});
            areas_box.html(htmls);
        },

        updateOrderAddressApi:function(param, fn){
            console.log(param);
            //orderAddressUpdateModel.setParam(param);
            //orderAddressUpdateModel.excute(function (data) {
            //    var _this = this;
            //    if (data.flag) {
            //        $.custom.Dialog.Toast('收货地址修改成功', 2, function () {
            //            typeof fn === 'function' && fn.call(_this);
            //        });
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '收货地址修改失败');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('收货地址修改失败');
            //}, true, this);
        },
        getProvinceListApi: function (fn) {
            //provincesListModel.excute(function (data) {
            // typeof fn === 'function' && fn.call(this, data);
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);

            var mockStr = '{"totalPage":0,"recordCount":0,"addrs":[{"id":1,"aname":"北京","pid":0,"agrade":1,"akeys":"北京","zip":"110000","acode":"110000"},{"id":22,"aname":"天津","pid":0,"agrade":1,"akeys":"天津","zip":"120000","acode":"120000"},{"id":43,"aname":"河北","pid":0,"agrade":1,"akeys":"河北","zip":"130000","acode":"130000"},{"id":238,"aname":"山西","pid":0,"agrade":1,"akeys":"山西","zip":"140000","acode":"140000"},{"id":380,"aname":"内蒙古","pid":0,"agrade":1,"akeys":"内蒙古自治区,内蒙","zip":"150000","acode":"150000"},{"id":502,"aname":"辽宁","pid":0,"agrade":1,"akeys":"辽宁","zip":"210000","acode":"210000"},{"id":631,"aname":"吉林","pid":0,"agrade":1,"akeys":"吉林","zip":"220000","acode":"220000"},{"id":709,"aname":"黑龙江","pid":0,"agrade":1,"akeys":"黑龙","zip":"230000","acode":"230000"},{"id":865,"aname":"上海","pid":0,"agrade":1,"akeys":"上海","zip":"310000","acode":"310000"},{"id":887,"aname":"江苏","pid":0,"agrade":1,"akeys":"江苏","zip":"320000","acode":"320000"},{"id":1020,"aname":"浙江","pid":0,"agrade":1,"akeys":"浙江","zip":"330000","acode":"330000"},{"id":1133,"aname":"安徽","pid":0,"agrade":1,"akeys":"安徽","zip":"340000","acode":"340000"},{"id":1273,"aname":"福建","pid":0,"agrade":1,"akeys":"福建","zip":"350000","acode":"350000"},{"id":1377,"aname":"江西","pid":0,"agrade":1,"akeys":"江西","zip":"360000","acode":"360000"},{"id":1499,"aname":"山东","pid":0,"agrade":1,"akeys":"山东","zip":"370000","acode":"370000"},{"id":1674,"aname":"河南","pid":0,"agrade":1,"akeys":"河南","zip":"410000","acode":"410000"},{"id":1868,"aname":"湖北","pid":0,"agrade":1,"akeys":"湖北","zip":"420000","acode":"420000"},{"id":1997,"aname":"湖南","pid":0,"agrade":1,"akeys":"湖南","zip":"430000","acode":"430000"},{"id":2147,"aname":"广东","pid":0,"agrade":1,"akeys":"广东","zip":"440000","acode":"440000"},{"id":2309,"aname":"广西","pid":0,"agrade":1,"akeys":"广西壮族自治区,广西","zip":"450000","acode":"450000"},{"id":2447,"aname":"海南","pid":0,"agrade":1,"akeys":"海南","zip":"460000","acode":"460000"},{"id":2476,"aname":"重庆","pid":0,"agrade":1,"akeys":"重庆","zip":"500000","acode":"500000"},{"id":2520,"aname":"四川","pid":0,"agrade":1,"akeys":"四川","zip":"510000","acode":"510000"},{"id":2741,"aname":"贵州","pid":0,"agrade":1,"akeys":"贵州","zip":"520000","acode":"520000"},{"id":2842,"aname":"云南","pid":0,"agrade":1,"akeys":"云南","zip":"530000","acode":"530000"},{"id":2996,"aname":"西藏","pid":0,"agrade":1,"akeys":"西藏自治区,西藏","zip":"540000","acode":"540000"},{"id":3078,"aname":"陕西","pid":0,"agrade":1,"akeys":"陕西","zip":"610000","acode":"610000"},{"id":3206,"aname":"甘肃","pid":0,"agrade":1,"akeys":"甘肃","zip":"620000","acode":"620000"},{"id":3319,"aname":"青海","pid":0,"agrade":1,"akeys":"青海","zip":"630000","acode":"630000"},{"id":3372,"aname":"宁夏","pid":0,"agrade":1,"akeys":"宁夏回族自治区,宁夏","zip":"640000","acode":"640000"},{"id":3404,"aname":"新疆","pid":0,"agrade":1,"akeys":"新疆维吾尔自治区,新疆","zip":"650000","acode":"650000"},{"id":3521,"aname":"台湾","pid":0,"agrade":1,"akeys":"台湾","zip":"999079","acode":"710000"},{"id":3522,"aname":"香港","pid":0,"agrade":1,"akeys":"香港特别行政区,香港","zip":"999077","acode":"810000"},{"id":3523,"aname":"澳门","pid":0,"agrade":1,"akeys":"澳门特别行政区,澳门","zip":"999078","acode":"820000"},{"id":3524,"aname":"海外","pid":0,"agrade":1,"akeys":"海外","zip":"0","acode":"990000"}],"flag":true,"msg":null,"status":{"code":200,"msg":"成功"}}';
            typeof fn === 'function' && fn.call(this, JSON.parse(mockStr));
        },
        getCityListApi: function (parentId, fn) {
            //citysListModel.param = {};
            //citysListModel.setParam('pid', parentId);
            //citysListModel.excute(function (data) {
            //    if (data && data.addrs && data.addrs.length) {
            //        typeof fn === 'function' && fn.call(this, data);
            //    } else {
            //        data.addrs = data.addrs || [];
            //        typeof fn === 'function' && fn.call(this, data);
            //        $.custom.Dialog.Toast('暂无城市信息');
            //    }
            //}, function (err) {
            //    typeof fn === 'function' && fn.call(this);
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
            var mockStr = '{"totalPage":0,"recordCount":0,"addrs":[{"id":2148,"aname":"广州市","pid":2147,"agrade":2,"akeys":"广州","zip":"440100","acode":"440100"},{"id":2162,"aname":"韶关市","pid":2147,"agrade":2,"akeys":"韶关","zip":"440200","acode":"440200"},{"id":2174,"aname":"深圳市","pid":2147,"agrade":2,"akeys":"深圳","zip":"440300","acode":"440300"},{"id":2182,"aname":"珠海市","pid":2147,"agrade":2,"akeys":"珠海","zip":"440400","acode":"440400"},{"id":2187,"aname":"汕头市","pid":2147,"agrade":2,"akeys":"汕头","zip":"440500","acode":"440500"},{"id":2196,"aname":"佛山市","pid":2147,"agrade":2,"akeys":"佛山","zip":"440600","acode":"440600"},{"id":2203,"aname":"江门市","pid":2147,"agrade":2,"akeys":"江门","zip":"440700","acode":"440700"},{"id":2212,"aname":"湛江市","pid":2147,"agrade":2,"akeys":"湛江","zip":"440800","acode":"440800"},{"id":2223,"aname":"茂名市","pid":2147,"agrade":2,"akeys":"茂名","zip":"440900","acode":"440900"},{"id":2231,"aname":"肇庆市","pid":2147,"agrade":2,"akeys":"肇庆","zip":"441200","acode":"441200"},{"id":2241,"aname":"惠州市","pid":2147,"agrade":2,"akeys":"惠州","zip":"441300","acode":"441300"},{"id":2248,"aname":"梅州市","pid":2147,"agrade":2,"akeys":"梅州","zip":"441400","acode":"441400"},{"id":2258,"aname":"汕尾市","pid":2147,"agrade":2,"akeys":"汕尾","zip":"441500","acode":"441500"},{"id":2264,"aname":"河源市","pid":2147,"agrade":2,"akeys":"河源","zip":"441600","acode":"441600"},{"id":2272,"aname":"阳江市","pid":2147,"agrade":2,"akeys":"阳江","zip":"441700","acode":"441700"},{"id":2278,"aname":"清远市","pid":2147,"agrade":2,"akeys":"清远","zip":"441800","acode":"441800"},{"id":2288,"aname":"东莞市","pid":2147,"agrade":2,"akeys":"东莞","zip":"441900","acode":"441900"},{"id":2289,"aname":"中山市","pid":2147,"agrade":2,"akeys":"中山","zip":"442000","acode":"442000"},{"id":2290,"aname":"潮州市","pid":2147,"agrade":2,"akeys":"潮州","zip":"445100","acode":"445100"},{"id":2295,"aname":"揭阳市","pid":2147,"agrade":2,"akeys":"揭阳","zip":"445200","acode":"445200"},{"id":2302,"aname":"云浮市","pid":2147,"agrade":2,"akeys":"云浮","zip":"445300","acode":"445300"}],"flag":true,"msg":null,"status":{"code":200,"msg":"成功"}}';
            typeof fn === 'function' && fn.call(this, JSON.parse(mockStr));
        },
        getAreaListApi: function (parentId, fn) {
            //areasListModel.param = {};
            //areasListModel.setParam('pid', parentId);
            //areasListModel.excute(function (data) {
            //    if (data && data.addrs && data.addrs.length) {
            //        fun && fun(data);
            //    } else {
            //        data.addrs = data.addrs || [];
            //        typeof fn === 'function' && fn.call(this, data);
            //        $.custom.Dialog.Toast('暂无区/县信息');
            //    }
            //}, function (err) {
            //    typeof fn === 'function' && fn.call(this, data);
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);

            var mockStr = '{"totalPage":0,"recordCount":0,"addrs":[{"id":2175,"aname":"其它区","pid":2174,"agrade":3,"akeys":"县,区,镇","zip":"440301","acode":"440309"},{"id":2176,"aname":"罗湖区","pid":2174,"agrade":3,"akeys":"罗湖","zip":"440303","acode":"440303"},{"id":2177,"aname":"福田区","pid":2174,"agrade":3,"akeys":"福田","zip":"440304","acode":"440304"},{"id":2178,"aname":"南山区","pid":2174,"agrade":3,"akeys":"南山","zip":"440305","acode":"230404"},{"id":2179,"aname":"宝安区","pid":2174,"agrade":3,"akeys":"宝安","zip":"440306","acode":"440306"},{"id":2180,"aname":"龙岗区","pid":2174,"agrade":3,"akeys":"龙岗","zip":"440307","acode":"440307"},{"id":2181,"aname":"盐田区","pid":2174,"agrade":3,"akeys":"盐田","zip":"440308","acode":"440308"}],"flag":true,"msg":null,"status":{"code":200,"msg":"成功"}}';
            typeof fn === 'function' && fn.call(this, JSON.parse(mockStr));
        },

        hide: function () {
            this._callUpdateFn();
            this.destory();
        },
        _callUpdateFn: function () {
            (typeof this.updateFn === 'function') && this.updateFn.call(this);
        },
        _callCallBack: function () {
            (typeof this.callBack === 'function') && this.callBack.call(this);
        }
    });

    var defaults = {
        order: {},
        updateFn: function () {
        },
        callBack: function () {
        },
        context: null
    };

    $.custom.Dialog.register('UpdOrderDeliveryInfo', function (order, updateFn, defs) {
        if (!order) {
            $.custom.Dialog.Toast('组件输入参数有误！');
            return;
        }

        //handle order detail address info
        order.addrdetails = "";
        if (order.cAddr) {
            var arr = $.trim(order.cAddr || '').split(' ');
            if (arr && arr.length > 0) {
                arr = _.filter(arr, function (item) {
                    return item != "";
                });
                if (arr.length > 3) {
                    arr = arr.slice(3);
                }
                order.addrdetails = arr.join(' ');
            }
        }

        defs = defs || {};
        defs.order = order;
        defs.updateFn = updateFn || defaults.updateFn;
        var settings = $.extend({}, defaults, defs);
        return new BaseView(settings);
    });
})(jQuery);