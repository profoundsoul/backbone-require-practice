(function ($) {
    var ORDER_CONFIG_CONSTANT = {
            SplitChar: '|',
            NotFilterChar: '$'
        },
        ORDER_TYPE_LIST = [
            {type: 0, typeName: "全部订单"},
            {type: 1, typeName: "普通订单"},
            {type: 2, typeName: "货到付款订单"}
        ];

    var BaseView = $.custom.Dialog({
        templatePath: 'syncsetting.html',
        events: {
            'click .icon-close': 'destory',
            'mouseenter div[data-col="ordertype"]':'showOrderType',
            'click div[data-col="ordertype"] [data-dp="box"] dd':'selectOrderType',
            'click div[data-config-save]':'saveConfig'
        },
        textTagPath:'../component/texttag.js',
        __propertys__:function(){
            this.rootTplFn = _.template(this.$el.find('#js_popwin_tpl').html());
            this.ordertypeTplFn = _.template(this.$el.find('#js_ordertype_tpl').html());
        },
        initialize:function(){
            this.render();
        },
        render:function(){
            this.getEShopConfigApi({eshopId: this.eshopId}, function (data) {
                if (data.config.length < 1) {
                    var _this = this;
                    $.custom.Dialog.Toast('无效的网店标识！', 3, function(){
                        _this.hide();
                    });
                    return false;
                }
                this.data = data.config[0];
                this.handleConfig(this.data);
                var cnt = this.rootTplFn(this)
                this.$el.html(cnt);

                this.renderOrderTypeTpl();
                this.getDynamicTextTag(function(){
                    this.initTextTag();
                });
            });
        },
        handleConfig: function (data) {
            var _config = data;
            _config.statusObj = {};
            if (_config.isAutoDwnO == 1) {
                _config.statusObj.autoDown = true;
            }
            if (_config.autoDwnMin != 0) {
                _config.statusObj.downTime = _config.autoDwnMin;
            }
            if (_config.isAutoAddO == 1) {
                _config.statusObj.autoGen = true;
            }
            if (_config.paraBuyerRmk == 1) {
                _config.statusObj.buyerNo = true;
            }
            if (_config.paraSellerRmk == 1) {
                _config.statusObj.sellerNo = true;
            }
            if (_config.paraExpCodOCrt == 1) {
                _config.statusObj.codNo = true;
            }
            if (_config.isFltKwdRmk == 1) {
                _config.statusObj.keyWordfilter = true;
            }
            if (_config.isFltRmk == 1) {
                _config.statusObj.sellerKeyFilter = true;
            }
            if (_config.isFxsNoBTakeO == 1) {
                _config.statusObj.autoOrdercheck = true;
            }
            if (_config.isAutoMergeO == 1) {
                _config.statusObj.autoMerge = true;
            }
            if (_config.fltOType == 1) {
                _config.statusObj.orderType = true;
            }
            _config.statusObj.orderTypeName = _config.fltOType == 0 ? "全部订单" : _config.fltOType == 1 ? "普通订单" : "货到付款订单";
            _config.statusObj.orderType = _config.fltOType == 0 ? 0 : _config.fltOType == 1 ? 1 : 2;

            //需要取出含有$符号和不含有$的两部分内容
            _config.statusObj.sellerRemarkFilter = _config.fltRmkKwd;
            _config.statusObj.sellerRemarkObj = this.getFilterObj(_config.fltRmkKwd, ORDER_CONFIG_CONSTANT.SplitChar, ORDER_CONFIG_CONSTANT.NotFilterChar);

            //需要取出含有$符号和不含有$的两部分内容
            _config.statusObj.orderWordfilter = _config.fltKwd;
            _config.statusObj.orderWordObj = this.getFilterObj(_config.fltKwd, ORDER_CONFIG_CONSTANT.SplitChar, ORDER_CONFIG_CONSTANT.NotFilterChar);

            //不需要额外处理
            _config.statusObj.addWordfilter = _config.fltAddrKwd;
        },
        initTextTag: function () {
            var _el = this.$el,
                config = this.data;
            //asynchronous init TextTag
            _el.find('[data-col="addwordfilter"]').TextTag({
                splitChar: ORDER_CONFIG_CONSTANT.SplitChar,
                height: 56,
                placeholder: '关键字标签',
                content: config.statusObj.addWordfilter || '',
                changed: function (content) {
                    this.$el.attr('data-value', content);
                }
            });

            _el.find('[data-col="orderwordfilter"]').TextTag({
                height: 85,
                splitChar: ORDER_CONFIG_CONSTANT.SplitChar,
                placeholder: '包含关键字标签',
                content: config.statusObj.orderWordObj.filter || '',
                changed: function (content) {
                    this.$el.attr('data-value', content);
                }
            });

            _el.find('[data-col="notorderwordfilter"]').TextTag({
                height: 85,
                splitChar: ORDER_CONFIG_CONSTANT.SplitChar,
                placeholder: '不包含关键字标签',
                content: config.statusObj.orderWordObj.notFilter || '',
                changed: function (content) {
                    this.$el.attr('data-value', content);
                }
            });

            _el.find('[data-col="sellerremarkfilter"]').TextTag({
                splitChar: ORDER_CONFIG_CONSTANT.SplitChar,
                height: 85,
                placeholder: '包含关键字标签',
                content: config.statusObj.sellerRemarkObj.filter || '',
                changed: function (content) {
                    this.$el.attr('data-value', content);
                }
            });

            _el.find('[data-col="notsellerremarkfilter"]').TextTag({
                splitChar: ORDER_CONFIG_CONSTANT.SplitChar,
                height: 85,
                placeholder: '不包含关键字标签',
                content: config.statusObj.sellerRemarkObj.notFilter || '',
                changed: function (content) {
                    this.$el.attr('data-value', content);
                }
            });
        },
        renderOrderTypeTpl: function () {
            var box = this.$el.find('div[data-col="ordertype"] [data-dp="box"]');
            var cnt = this.ordertypeTplFn({data: ORDER_TYPE_LIST, config: this.data});
            box.hide();
            box.html(cnt);
        },

        saveConfig: function (e) {
            var target = $(e.currentTarget),
                root = target.parents('[data-root]');

            var downtime = root.find('input[data-col="downtime"]').val(),
                codno = root.find('input[data-col="codno"]').prop("checked"),
                ordertype = root.find('div[data-col="ordertype"]').data('value'),
                autodown = root.find('input[data-col="autodown"]').prop("checked"),
                buyerno = root.find('input[data-col="buyerno"]').prop("checked"),
                sellerno = root.find('input[data-col="sellerno"]').prop("checked"),
                autoorder = root.find('input[data-col="autoorder"]').prop("checked"),

            // 开启订单自动生成
                autogen = root.find('input[data-col="autogen"]').prop("checked"),
                addwordfilter = root.find('div[data-col="addwordfilter"]').attr('data-value'),

            //开启卖家备注关键字过滤
                sellerkeyfilter = root.find('input[data-col="sellerkeyfilter"]').prop("checked"),
                sellerremarkfilter = root.find('div[data-col="sellerremarkfilter"]').attr('data-value'),
                notsellerremarkfilter = root.find('div[data-col="notsellerremarkfilter"]').attr('data-value'),

            //开启订单商品标题自动生成
                keywordfilter = root.find('input[data-col="keywordfilter"]').prop("checked"),
                orderwordfilter = root.find('div[data-col="orderwordfilter"]').attr('data-value'),
                notorderwordfilter = root.find('div[data-col="notorderwordfilter"]').attr('data-value');

            //开启订单自动下载
            if (autodown) {
                if (isNaN(downtime) || (+downtime) < 10) {
                    $.custom.Dialog.Toast('订单自动下载时间间隔不小于10分钟，请重新设置！');
                    return;
                }
            }
            //开启卖家备注关键字过滤;sellerkeyfilter
            var srfilter = this.getFilterStr(sellerremarkfilter, notsellerremarkfilter, ORDER_CONFIG_CONSTANT.SplitChar, ORDER_CONFIG_CONSTANT.NotFilterChar);

            //开启订单商品标题过滤;keywordfilter
            var owfilter = this.getFilterStr(orderwordfilter, notorderwordfilter, ORDER_CONFIG_CONSTANT.SplitChar, ORDER_CONFIG_CONSTANT.NotFilterChar)

            var param = {
                eshopId: this.eshopId,
                Is_Filter_Remark: sellerkeyfilter ? 1 : 0,
                Filter_Remark_Keyword: srfilter,
                Filter_Order_Type: ordertype,
                Is_Auto_Down_Order: autodown ? 1 : 0,
                Auto_Down_Min: downtime,
                Is_Auto_Add_Order: autogen ? 1 : 0,
                set_Para_All_Shop: 1,
                Para_Buyer_Remark: buyerno ? 1 : 0,
                Para_Seller_Remark: sellerno ? 1 : 0,
                Para_ExpCodOrderCreate: codno ? 1 : 0,
                Is_Filter_Keyword_Order: keywordfilter ? 1 : 0,
                Filter_Keyword: owfilter,
                Is_FxsNoB_Take_Order: autoorder ? 1 : 0,
                Is_Auto_Merge_Order: 0,
                Filter_Addr_Keyword: addwordfilter
            };
            this.saveEShopConfigApi(param, function (data) {
                var _this = this;
                if (data.flag) {
                    this._callUpdateFn();
                    $.custom.Dialog.Toast("保存成功！", 2, function () {
                        _this.hide();
                    });
                } else {
                    $.custom.Dialog.Toast(data.msg || '保存失败！请稍后再试。');
                }
            });
        },
        showOrderType: function (e) {
            var target = $(e.currentTarget),
                box = target.find('[data-dp="box"]');
            box.show();
            target.off('mouseleave').on('mouseleave', function (e) {
                box.hide();
            });
        },
        selectOrderType: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('div[data-col="ordertype"]'),
                box = p.find('[data-dp="box"]'),
                cnt = p.find('[data-dp="cnt"]');

            var itemObj = target.attr("data-item"),
                data = JSON.parse(itemObj);

            cnt.find('span').html(data.typeName);
            p.data("value", data.type);

            box.hide();
        },

        /**
         * 专门解析分隔后以$开头和不以$开头的字符串
         * @param filter 原生过滤字符
         * @param splitChar 分隔符
         * @param startWithChar 开头字符
         */
        getFilterObj: function (filter, splitChar, startWithChar) {
            var result = {
                filter: '',
                notFilter: ''
            };
            filter = $.trim(filter || '');
            if (filter) {
                var filterArr = [],
                    notFilterArr = [],
                    arr = filter.split(splitChar);
                if (arr.length) {
                    filterArr = _.filter(arr, function (item) {
                        return $.trim(String(item)).substr(0, startWithChar.length) !== startWithChar;
                    });
                    notFilterArr = _.map(_.filter(arr, function (item) {
                        return $.trim(String(item)).substr(0, startWithChar.length) === startWithChar;
                    }), function (str) {
                        return str.substr(startWithChar.length);
                    });
                    //待过滤和过滤内容
                    result.filter = filterArr.join(splitChar);
                    result.notFilter = notFilterArr.join(splitChar);
                }
            }
            return result;
        },
        /**
         * 合并两个不同Filter数据，返回字符串
         * @param filter
         * @param notFilter
         * @param splitChar
         * @param startWithChar
         */
        getFilterStr: function (filter, notFilter, splitChar, startWithChar) {
            var newFitlerArr = [],
                notFilterArr = [];
            notFilter = $.trim(String(notFilter || ''));
            filter = $.trim(String(filter || ''));
            startWithChar = String(startWithChar);

            if (filter) {
                newFitlerArr.push(filter);
            }
            if (notFilter) {
                notFilterArr = _.map(notFilter.split(splitChar), function (item) {
                    return startWithChar + item;
                });
                newFitlerArr.push(notFilterArr.join(splitChar));
            }
            return newFitlerArr.join(splitChar);
        },
        /**
         * 动态获取TextTag组件实例，自动注入至jQuery插件中并使用
         * @param fn
         */
        getDynamicTextTag: function (fn) {
            if (typeof this.$el.TextTag !== 'function') {
                var path = $.custom.getRealSourcePath(this.getCompPath(), this.textTagPath);
                $.custom.createDynamicScript(path, function () {
                    (typeof fn === 'function') && fn.apply(this, arguments);
                }, this);
            } else {
                (typeof fn === 'function') && fn.apply(this, arguments);
            }
        },

        getEShopConfigApi: function (param, fn) {
            //eShopConfigModel.param = param;
            //eShopConfigModel.excute(function () {
            //    typeof fn === 'function' && fn.apply(this, arguments);
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //    this.hide();
            //}, true, this);

            ////mock data
            var data = {};
            var datastr= '{"id":4697,"scode":"BZ-test.yitb-4697","sName":"苏宁测试店铺","sWeb":"苏宁易购","stype":0,"paraExpCodOCrt":0,"autoDwnMin":20,"fltRmkKwd":"李四月份|$赵六","fltKwd":"张三月|$王五","fltAddrKwd":"","fltOType":0,"isFltRmk":0,"isFxsNoBTakeO":0,"isAutoDwnO":1,"isAutoAddO":0,"paraBuyerRmk":0,"paraSellerRmk":0,"isFltKwdRmk":0,"isAutoMergeO":0,"setParaAllShop":1,"shopUName":null,"appKey":null,"appSecret":null,"appSession":null,"isOpenRds":0}';
            data.config=[JSON.parse(datastr)];
            typeof fn === 'function' && fn.apply(this, [data]);
        },
        saveEShopConfigApi: function (param, fn) {
            //saveEShopConfigModel.param = param;
            //saveEShopConfigModel.excute(function () {
            //    typeof fn === 'function' && fn.apply(this, arguments);
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, true, this);

            console.log(param);
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
        eshopId:0,
        updateFn: function () {},
        context: null,
    };

    $.custom.Dialog.register('SyncOrderSetting', function (eshopId, fn, context) {
        var settings = {};
        if(!eshopId) {
            $.custom.Dialog.Toast('无效的网店单号！', 3);
            return ;
        }
        settings.eshopId = eshopId || defaults.eshopId;
        settings.updateFn = fn || defaults.updateFn;
        settings.context = context || defaults.context;
        return new BaseView(settings);
    });
})(jQuery);
