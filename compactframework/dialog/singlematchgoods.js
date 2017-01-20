/******************************************
 * @description: 匹配商品弹出页面
 * @author:      linq
 * @createdate:  20150529
 ******************************************/
//define(['cBase', 'AppModel', 'cUIAbstractView', 'PopWidget', 'cUILayer', 'cUILoading', 'AppCommonBiz', 'text!MatchGoodsHtml'],
//    function (cBase, appModel, cUIAbstractView, PopWidget, cLayer, cUILoading, AppCommonBiz, html) {
(function ($) {
    //var autoQueryGoodsModel = appModel.AutoQueryGoodsModel.getInstance(),
    //    addProAndOrderModel = appModel.AddProAndOrderModel.getInstance(),
    //    matchSameGoodsOrderModel = appModel.MatchSameGoodsOrderModel.getInstance(),
    //    getStoragePriceListModel = appModel.GetStoragePriceListModel.getInstance();
    //var _loading = null;

    var BaseView = $.custom.Dialog({
        templatePath: 'singlematchgoods.html',
        events: {
            'click .icon-close': 'destory',
            'click [data-btn="srch"]': 'searchGoodsStock',
            'keydown [data-srch="kwd"]': 'enterFastSearch',

            'click [data-btn="cancel"]': 'cancelMatch',
            'click [data-btn="confirm"]': 'confirmMatch',
            'click [data-btn="del"]': 'delMatchGoods',

            'change input[type="radio"][name="matchway"]': 'switchMatchWay',
            'click [data-btn="single"]': 'chooseSingleGoods',
            'click [data-btn="advan"]': 'chooseMultiGoods',

            'click [data-btn="minus"]': 'minusMatchCount',
            'click [data-btn="add"]': 'addMatchCount',
            'blur [data-col="procount"]': 'blurGoodsCounts',

            'mouseenter [data-col="storageprice"]': 'toggleStoragePriceList'
        },
        __propertys__: function () {
            this.body = this.$el.find('[data-box="body"]');
            this.matchGoodsBox = this.$el.find('.js_matchgoods_box');
            this.goodsStockBox = this.$el.find('.js_goodsstock_box');

            this.matchGoodsTplFn = _.template(this.$el.find('#js_matchgoods_tpl').html());
            this.goodsStockTplFn = _.template(this.$el.find('#js_goodsstock_tpl').html());
            this.storagePriceTplFn = _.template(this.$el.find('#js_storageprice_tpl').html());
        },
        initialize: function () {
            this.initMatchPro();
            this.setMatchMode();
            this.setAutoMatch();
            this.renderTpl('matchgoods', this);
            if (this.pro.mps && this.pro.mps.length) {
                this.autoMatchGoods(true);
            } else {
                this.autoRecommendGoods();
            }
        },
        hide: function () {
            this.destory();
        },

        setAutoMatch: function () {
            this.body.find('#js_autochk').prop('checked', this.pro.isMatch);
        },

        /**
         * 设置匹配模式【高级匹配{1}/单品{0}】
         */
        setMatchMode: function () {
            if (this.isAdvan == 1) {
                this.body.find('input[name="matchway"][value="1"]').prop('checked', true);
            } else {
                this.body.find('input[name="matchway"][value="0"]').prop('checked', true);
            }
        },
        initMatchPro: function () {
            //temp vaiable for uniform parameter
            this.pro.isMatch = false;
            //默认为库存充足
            this.pro.isEnough = true;
            this.isAdvan = this.pro.mps.length > 1 || this.pro.mmode;
            //TODO:如果当前匹配为高级匹配数量，应该变为网店商品单元匹配关系处理
            if (this.isAdvan) {
                var curPro = $.extend(true, {}, this.pro);
                _.each(curPro.mps, function (matchPro) {
                    matchPro.pCount = Math.round(matchPro.pCount / curPro.pCount);
                });
                this.pro = curPro;
            }
            var existAutoMatch = _.find(this.pro.mps, function (matchpro) {
                return matchpro.isMatch == true;
            });
            if (existAutoMatch) {
                this.pro.isMatch = true;
            }
        },
        renderTpl: function (tplName, data) {
            data = data || {};
            var name = tplName.toLowerCase();
            data.isAdvan = +this.body.find('[name="matchway"]:checked').val();
            switch (name) {
                case 'matchgoods':
                    this.matchGoodsBox.html(this.matchGoodsTplFn(data));
                    break;
                case 'goodsstock':
                    this.goodsStockBox.html(this.goodsStockTplFn(data));
                    break;
                default:
                    break;
            }
        },
        /**
         * 根据商品pid获取商品在各个仓库中的售价
         * @param pid 标准商品标识
         * @param fn  获取完成回调函数
         */
        getStoragePriceList: function (pid, fn) {
            //getStoragePriceListModel.param = {pbid: pid};
            //getStoragePriceListModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data, pid);
            //}, function (err) {
            //    //AppCommonBiz.showExceptionToast(err, '服务调用异常！');
            //}, false, this);
        },
        bindAll: function (handler) {
            var _this = this;
            return function () {
                handler.apply(_this, arguments);
            };
        },

        loadGoodsStock: function (param, isAutoChk) {
            this._getStandardGoods(param, function (data) {
                data.isAutoChk = !!isAutoChk;
                this.renderTpl('goodsstock', data);

                this.asynLoadStoragePrice();

                this.$el.find('.js_scroll').off('scroll').on('scroll', this.bindAll(this.scrollGoods));
            });
        },

        /**
         * enter键时进行搜索
         * @param e
         */
        enterFastSearch: function (e) {
            if ((e.keyCode || e.which) == 13) {
                //点击Enter键时，触发查询事件
                e.stopPropagation();
                this.body.find('[data-btn="srch"]').click();
            }
        },

        searchGoodsStock: function (e) {
            var param = {};
            param.kwd = $.trim(this.body.find('[data-srch="kwd"]').val() || '');
            this.loadGoodsStock(param);
        },

        delMatchGoods: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-item]'),
                itemstr = p.attr('data-item');
            if (itemstr) {
                var data = JSON.parse(itemstr),
                    mapping = this._getMatchMapping();
                this._delMappingByPid(mapping.mps, data.pId);
                this._cancelCheckedGoodsStatus(data.pId);
                this.renderTpl('matchgoods', {pro: mapping});
            }
        },

        cancelMatch: function (e) {
            this.hide();
        },

        confirmMatchSameGoods: function (param) {
            param.ipno = this.pro.pNo;
            param.ioplid = this.pro.id;
            this.showConfirm('是否根据该订单的商品匹配关系批量匹配包含该商品所有订单？', function () {
                this._matchSameGoods(param);
            }, this, function () {
                this._callCloseCallBack();
            });
        },

        confirmMatch: function (e) {
            var param = {},
                order = this.order,
                mappingData = this._getMatchMapping();
            param.ioplid = mappingData.id;
            param.iolid = order.id;
            param.isbind = Boolean(this.body.find('#js_autochk').prop('checked')) ? 1 : 2;
            param.mmode = +this.body.find('input[name="matchway"]:checked').val();
            param.mdata = [];

            _.each(mappingData.mps, function (item) {
                param.mdata.push({
                    pbid: item.pId,
                    pcount: item.pCount
                });
            });
            //addProAndOrderModel.param = param;
            //addProAndOrderModel.excute(function (data) {
            //    if (data.flag) {
            //        this._callUpdateFn();
            //        this.hide();
            //        //TODO:如果仅仅表示删除匹配关系的，不做批量批量处理
            //        if (param.mdata && param.mdata.length) {
            //            this.confirmMatchSameGoods(param);
            //        } else {
            //            this._callCloseCallBack();
            //        }
            //    } else {
            //        this.showToast(data.msg);
            //    }
            //}, function (err) {
            //    AppCommonBiz.showExceptionToast(err, '服务调用异常！')
            //}, true, this);
        },

        switchMatchWay: function (e) {
            this.renderTpl('matchgoods', {pro: this._getEmptyMapping()});
            this.autoRecommendGoods();
        },

        scrollGoods: function (e) {
            this.asynLoadStoragePrice();
        },

        autoRecommendGoods: function () {
            var pro = this.pro,
                param = {
                    pno: pro.pNo
                };
            this.body.find('[data-srch="kwd"]').val('');
            this.loadGoodsStock(param);
        },

        autoMatchGoods: function (isAutoChk) {
            var pro = this.pro,
                order = this.order,
                param = {
                    oid: order.oId,
                    ioplid: pro.id
                };
            this.loadGoodsStock(param, true);
        },

        asynLoadStoragePrice: function () {
            var scrollEle = this.goodsStockBox.find('.js_scroll'),
                sTop = scrollEle.scrollTop(),
                sHeight = scrollEle.height(),
                itemHeight = 42;

            var startIdx = Math.floor(sTop / itemHeight), //向下取整数
                len = Math.ceil(sHeight / itemHeight),    //向上取整数
                matchEles = scrollEle.find('.match_item'),
                elen = matchEles.length,
                proArr = [];

            var l = (startIdx + len + 1) > elen ? elen : (startIdx + len + 1);
            if (startIdx < elen) {
                for (var i = startIdx; i < l; i++) {
                    var matchEle = matchEles.eq(i);
                    if (matchEle.length > 0 && !matchEle.attr('data-ready')) {
                        matchEle.attr('data-ready', true);
                        proArr.push(matchEle.attr('data-pid'));
                    } else {
                        continue;
                    }
                }
            }

            var _this = this;
            _.each(proArr, function (p) {
                _this.loadStoragePrice(p);
            });
        },

        loadStoragePrice: function (pid) {
            //加载并渲染
            this.getStoragePriceList(pid, function (data) {
                var pEle = this.goodsStockBox.find('.match_item[data-pid="' + pid + '"]'),
                    box = pEle.find('.js_storageprice_box');
                //计算最终售价
                _.each(data.data, function (item) {
                    item.salePrice = AppCommonBiz.getNumberPresision(+item.cprice || 0).toFixed(2);
                });
                setSalePriceRange(data.data, pEle);
                box.html(this.storagePriceTplFn(data));
            });

            function setSalePriceRange(cklist, pEle) {
                if (cklist && cklist.length > 0) {
                    var salePriceTitle = '¥' + cklist[0].salePrice;
                    if (cklist.length > 1) {
                        var minItem = _.min(cklist, function (item) {
                                return +item.salePrice
                            }),
                            maxItem = _.max(cklist, function (item) {
                                return +item.salePrice
                            });
                        if (typeof minItem === 'object' && typeof maxItem === 'object'
                            && minItem.salePrice !== maxItem.salePrice) {
                            salePriceTitle = '¥' + minItem.salePrice + '~¥' + maxItem.salePrice;
                        }
                    }
                    pEle.find('[data-dp="cnt"]').html(salePriceTitle);
                } else {
                    pEle.find('[data-dp="cnt"]').html('暂无可用仓库');
                }
            }
        },

        toggleStoragePriceList: function (e) {
            var target = $(e.currentTarget),
                pid = target.attr('data-pid') || '',
                originOffsetTop = target.offset().top,
                box = target.find('.js_storageprice_box');
            if (box.has('*').length < 1) {
                this.loadStoragePrice(pid);
            } else {
                showBox();
            }


            function showBox() {
                //采用开始和结束之间的offset差值判定是否需要展示当前内容
                var curOffsetTop = target.offset().top;
                if (Math.abs(curOffsetTop - originOffsetTop) < 5) {
                    box.find('[data-dp="box"]').css('marginTop', box.parents('.js_scroll').scrollTop() * -1);
                    box.show();
                    target.off('mouseleave').on('mouseleave', function (ee) {
                        $(ee.currentTarget).off('mouseleave').find('.js_storageprice_box').hide();
                    });
                }
            }
        },

        blurGoodsCounts: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-item]'),
                input = p.find('[data-col="procount"]'),
                oldval = +input.attr('data-value'),
                val = +input.val();
            if (isNaN(val)) {
                this.showToast('输入的商品数量有误！');
                input.val(parseInt(oldval));
                return;
            } else {
                if (val < 1) {
                    this.showToast('购买的商品数量至少1个！');
                    input.val(parseInt(oldval));
                    return;
                } else {
                    val = parseInt(val);
                    input.val(val);
                    p.find('[data-col="total"]').html(parseInt(val * this.pro.pCount));
                }
            }
        },

        minusMatchCount: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-item]'),
                input = p.find('[data-col="procount"]'),
                val = +input.val();
            val = val > 1 ? --val : 1;
            input.val(val);
            p.find('[data-col="total"]').html(parseInt(val * this.pro.pCount));
        },

        addMatchCount: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-item]'),
                input = p.find('[data-col="procount"]'),
                val = +input.val();
            val = val > 0 ? ++val : 1;
            input.val(val);
            p.find('[data-col="total"]').html(parseInt(val * this.pro.pCount));
        },

        chooseMultiGoods: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-item]'),
                itemstr = p.attr('data-item'),
                pChk = p.find('.js_chk'),
                matchlist = p.find('ul.matchList');

            if (itemstr) {
                var ischk = !matchlist.hasClass('matchListCur');
                pChk.prop('checked', ischk);
                matchlist.toggleClass('matchListCur');

                var data = JSON.parse(itemstr),
                    mappting = this._getMatchMapping();
                var existMapping = _.find(mappting.mps, function (item) {
                    return item.pId == data.pid;
                });
                if (ischk) {
                    if (!existMapping) {
                        mappting.mps.push({
                            pNo: data.pno,
                            pCount: 1,
                            pId: data.pid,
                            stkubl: data.stkubl
                        });
                    }
                } else {
                    if (existMapping) {
                        this._delMappingByPid(mappting.mps, data.pid);
                    }
                }
                this._calcStkublEnough(mappting, true);
                this.renderTpl('matchgoods', {pro: mappting});
            }
        },

        chooseSingleGoods: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-item]'),
                itemstr = p.attr('data-item'),
                matchList = p.find('ul.matchList'),
                pChk = p.find('.js_chk');
            if (itemstr) {
                pChk.prop('checked', true);
                matchList.addClass('matchListCur');
                p.siblings('[data-item]').find('.matchListCur').removeClass('matchListCur');

                var data = JSON.parse(itemstr),
                    mappting = this._getEmptyMapping();
                mappting.mps.push({
                    pNo: data.pno,
                    pCount: this.pro.pCount,
                    pId: data.pid,
                    stkubl: data.stkubl
                });
                this._calcStkublEnough(mappting);
                this.renderTpl('matchgoods', {pro: mappting});
            }
        },

        /**
         * 计算商品库存是否充足
         * @param mapping 已匹配的商品映射关系
         * @private
         */
        _calcStkublEnough: function (mapping, isAdvan) {
            mapping.isEnough = true;
            if (mapping.mps && mapping.mps.length) {
                for (var i = 0, len = mapping.mps.length; i < len; i++) {
                    var obj = mapping.mps[i];
                    if (typeof obj.stkubl !== undefined) {
                        // 存在ptotalCount时，表示为高级匹配，采用总数量比较库存是否充足
                        if (isAdvan) {
                            if (+obj.stkubl < obj.pCount * this.pro.pCount) {
                                mapping.isEnough = false;
                                break;
                            }
                        } else {
                            //不存在时，采用pCount进行比较
                            if (+obj.stkubl < obj.pCount) {
                                mapping.isEnough = false;
                                break;
                            }
                        }
                    }
                }
            }
        },

        _delMappingByPid: function (mps, pid) {
            if (!(mps && _.isArray(mps) && mps.length)) {
                return;
            }
            for (var i = 0, len = mps.length; i < len; i++) {
                if (mps[i].pId == pid) {
                    mps.splice(i, 1);
                    break;
                }
            }
        },

        _cancelCheckedGoodsStatus: function (pid) {
            var matchItems = this.goodsStockBox.find('[data-item]');
            for (var i = 0, len = matchItems.length; i < len; i++) {
                var _o = $(matchItems[i]),
                    _d = _o.attr('data-item') || '';
                if (_d) {
                    var item = JSON.parse(_d);
                    if (item.pid == pid) {
                        _o.find('.js_chk').prop('checked', false);
                        _o.find('ul.matchList').removeClass('matchListCur');
                        break;
                    }
                }
            }
        },

        _getEmptyMapping: function () {
            var pro = this.pro,
                mapping = {
                    pTitle: pro.pTitle,
                    pCount: pro.pCount,
                    pNo: pro.pNo,
                    id: pro.id,
                    impOId: pro.impOId,
                    isEnough: true,
                    mps: []
                };
            return mapping;
        },

        _getMatchMapping: function () {
            var mapping = this._getEmptyMapping(),
                matchItems = this.matchGoodsBox.find('[data-item]');
            _.each(matchItems, function (ele) {
                var _o = $(ele),
                    _countele = _o.find('[data-col="procount"]'),
                    _d = _o.attr('data-item') || '';
                if (_d) {
                    var item = JSON.parse(_d);
                    if (_countele[0].nodeType === 1 && _countele[0].tagName.toLowerCase() == 'input') {
                        item.pCount = _countele.val();
                    }
                    mapping.mps.push(item);
                }
            });
            return mapping;
        },

        _getStandardGoods: function (param, fn) {
            //autoQueryGoodsModel.param = param;
            //autoQueryGoodsModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data);
            //}, function (err) {
            //    AppCommonBiz.showExceptionToast(err, '服务调用异常！');
            //}, false, this);
        },

        _matchSameGoods: function (param, fn) {
            //matchSameGoodsOrderModel.param = param;
            //matchSameGoodsOrderModel.excute(function (data) {
            //    var _this = this;
            //    if (data.flag) {
            //        this.showToast(data.msg || '批量匹配成功！', 3, function () {
            //            _this._callCloseCallBack();
            //        });
            //    } else {
            //        this.showToast(data.msg, 3, function () {
            //            _this._callCloseCallBack();
            //        });
            //    }
            //}, function (err) {
            //    var _this = this;
            //    AppCommonBiz.showExceptionToast(err, '服务调用异常！', 3, function () {
            //        _this._callCloseCallBack();
            //    });
            //}, true, this);
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
        },

        /**
         * 重写提示框弹出，关闭时自动移除Dom
         * @param msg   提示语
         * @param delay 延时多少秒后关闭
         * @param callback 回调
         * @param clickToHide 点击自动隐藏
         */
        showToast: function (msg, delay, callback, clickToHide) {
            AppCommonBiz.showToast(msg, delay, callback, clickToHide);
        },
        /**
         * 确认提示框，点击确定和取消时会自动回调oKFn与failFn
         * @param msg 消息
         * @param okFn 点击确定回调
         * @param context 改变回调事件上下文
         * @param failFn 点击取消回调
         */
        showConfirm: function (msg, okFn, context, failFn) {
            AppCommonBiz.showConfirm(msg, okFn, context, failFn);
        },
    });

    var defaults = {
        order: {},
        proIdx: 0,
        updateFn: function () {},
        callBack: function () {}
    };

    $.custom.Dialog.register('SingleMatchGoods', function (defs) {
        defs = defs || {};
        var settings = $.extend(true, defaults, defs);
        // TODO:先做一下优先异常处理
        if (!settings.pro) {
            settings.pro = settings.order.oProList[settings.proIdx || 0]
        }
        new BaseView(settings);
    });
})(jQuery);
