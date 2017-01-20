/******************************************
 * @description: 查看订单高级搜索通用组件
 * @author:      dyq
 * @createdate:  20150525
 ******************************************/
(function ($) {
//define(['cBase', 'OrderCommonBiz', 'cUIAbstractView', 'AppModel', 'Validate', 'cUtility', 'text!YitbAdvanSearchHtml'],
//    function (cBase, OrderCommonBiz, cUIAbstractView, appModel, Validate, util, html) {
//    var GetCkListModel = appModel.GetCkListModel.getInstance(),
//        getImportEshopModel = appModel.GetImportEshopModel.getInstance(),
//        provincesListModel = appModel.ProvincesListModel.getInstance(),
//        citysListModel = appModel.CitysListModel.getInstance();

    var Search_Type_List = [
        {id: 1, title: '网店单号'},
        {id: 2, title: '订单号'},
        {id: 3, title: '手机号码'},
        {id: 4, title: '买家姓名'},
        {id: 5, title: '商品名称'},
    ];
    var ALL_SATUS = {
        ORDER: [
            {id: 1, name: '未付款'},
            {id: 2, name: '待发货'},
            {id: 9, name: '未受理'},
            {id: 10, name: '已受理'},
            {id: 3, name: '已发货'},
            {id: 5, name: '已签收'},
            //{id: 6, name: '等待分配仓库'},
            //{id: 7, name: '待付款'},
            //{id: 8, name: '付款中'},
            {id: 4, name: '已取消'}
        ],
        SETTING: [
            {id: 0, name: '全部'},
            {id: 1, name: '待生成'},
            {id: 2, name: '已取消'},
            {id: 3, name: '已挂起'}
        ],
        EXCEPTION: [
            {id: 0, name: '全部'},
            {id: 1, name: '身份验证失败'},
            {id: 3, name: '入境申报拒绝'},
        ],
        AFTERSALES: [
            {id: 0, name: '待审核'},
            {id: 10, name: '待退货'},
            {id: 20, name: '待仓库收货'},
            {id: 30, name: '待确认收款'},
            {id: 40, name: '已拒绝'},
            {id: 50, name: '已结束'},
        ]
    };

    /**
     * 高级搜索状态名字常亮
     * @type {{ORDER: string, SETTING: string}}
     */
    var STATUS_NAME = {
        'ORDER': 'ORDER',
        'SETTING': 'SETTING',
        'EXCEPTION': 'EXCEPTION',
        'AFTERSALES': 'AFTERSALES'
    };

    var BaseView = $.custom.Component({
        templatePath: 'advansearch.html',
        events: {
            'mouseenter [data-col="type"]': 'showSearchType',
            'click [data-col="type"] [data-dp="box"] dd': 'selectSearchType',
            'keydown input[data-col="kwd"]': 'enterFastSearch',

            'click #search_botton': 'toggleContent',
            'mouseenter .js_advance_box .inputxl': 'toggleOption',
            'click .js_advance_box .inputxlbox dd': 'selectedOption',
            'click .js_advance_box input[data-date]': 'showCalendar',
            'click .js_advance_box .select_date': 'triggerCalendar',
            'click [data-col="city"] li[data-type]': 'switchArea',
            'click [data-col="city"] [data-dp="cnt"] dd': 'selectArea',
        },
        __propertys__: function () {
            var _el = this.$el;
            // extend
            $.extend(this, {
                tpl: _.template(_el.find('#js_search').html()),
                originTplFn: _.template(_el.find('#js_orderorigin_tpl').html()),
                storeTplFn: _.template(_el.find('#js_store_tpl').html()),
                statusTplFn: _.template(_el.find('#js_status_tpl').html()),
                areaTplFn: _.template(_el.find('#js_erea_tpl').html()),
                post: {
                    isAdvancedSrch: false
                }
            });
        },
        initialize: function () {
            // render html
            this.render();
            //// TODO:只需要屏蔽高级查询的api即可屏蔽高级查询，若以后需要使用直接放开即可。
            this.loadAdvanceSearch();
        },
        render: function () {
            var sHtml = this.tpl({
                //data: this.data,
                tab: this.tab,
                post: this.post,
                typelist: Search_Type_List
            });
            // render
            this.$el.html(sHtml);

            // hide, should use css instead
            this.$el.find('.guolvtc_box').hide();
        },
        loadAdvanceSearch: function () {
            this.loadOrderStatusList();
            this.loadOrderSources();
            this.loadOrderOriginList();
            this.loadOrderStoreList();
            this.loadArea();
        },
        // 展示日历
        showCalendar: function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            var _this = this,
                _box = this.$el,
                target = e.currentTarget;
            var _type = $(target).attr('data-date'),
                options = {
                    curdate: _box.find('input[data-date="' + _type + '"]').val(),
                    seldate: _box.find('input[data-date="' + _type + '"]').val(),
                    datetype: _type
                };
            options.curTarget = target;
            if (_type === 'begin') {
                options.enddate = _box.find('input[data-date="end"]').val();
            }
            if (_type === 'end') {
                options.begindate = _box.find('input[data-date="begin"]').val();
                var nowdate = new Date();
                var nowstr = util.Date.format(nowdate, 'Y-m-d');
                options.enddate = nowstr;
            }
            //require(['YitbCalendarView'], function (yitbCalendar) {
            //    var dateView = new yitbCalendar();
            //    dateView.show(options, function (dateObj) {
            //        setDateObjFunc(dateObj, _type);
            //    });
            //}, function (err) {
            //});

            //回调函数
            function setDateObjFunc(dateObj, type) {
                _box.find('input[data-date="' + _type + '"]').val(dateObj.value);
                if (dateObj && dateObj.value) {
                    if (type == 'begin') {
                    } else {
                    }
                }
            }
        },
        triggerCalendar: function (e) {
            var target = $(e.currentTarget);
            target.find('input[data-date]').focus().click();
        },
        /**
         * enter键时进行搜索
         * @param e
         */
        enterFastSearch: function (e) {
            if ((e.keyCode || e.which) == 13) {
                e.stopPropagation();
                this.$el.find('input[name="keywords"]').blur();
                //点击Enter键时，触发查询事件
                if (this.post.isAdvancedSrch) {
                    //高级搜索
                    this.$el.find('input[data-searchbtn="2"]').click();
                } else {
                    this.$el.find('input[data-searchbtn="1"]').click();
                }
            }
        },
        showSearchType: function (e) {
            var target = $(e.currentTarget),
                box = target.find('[data-dp="box"]');
            var i = 0,
                curid = target.attr('data-value'),
                items = box.find('dd').show();
            for (i = 0; i < items.length; i++) {
                var $ele = $(items[i]),
                    id = $ele.attr('data-id');
                if (id === curid) {
                    $ele.hide();
                    break;
                }
            }
            box.show();
            target.off('mouseleave').on('mouseleave', function (e) {
                $(e.currentTarget).off('mouseleave').find('[data-dp="box"]').hide();
            });
        },
        selectSearchType: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-col="type"]'),
                box = p.find('[data-dp="box"]'),
                cnt = p.find('[data-dp="cnt"]');

            var selectid = target.attr('data-id'),
                selecttit = target.attr('data-title');

            cnt.html(selecttit);
            p.attr('data-value', selectid);
            this.$el.find('[data-col="kwd"]').attr('placeholder', '请输入完整的' + selecttit)

            box.hide();
        },
        selectedOption: function (e) {
            var target = $(e.currentTarget),
                dp = target.parents('[data-col]'),
                box = target.parents('[data-dp="box"]'),
                id = target.attr('data-id'),
                name = target.find('a').html();
            dp.attr('data-id', id);
            dp.find('.inputnr span').html(name);
            box.hide();
        },
        toggleOption: function (e) {
            var target = $(e.currentTarget),
                box = target.find('[data-dp="box"]');
            if (box && box.length) {
                box.show();
                target.off('mouseleave').on('mouseleave', function (me) {
                    var mtarget = $(e.currentTarget);
                    mtarget.off('mouseleave').find('[data-dp="box"]').hide();
                });
            }
        },
        toggleContent: function (e) {
            var dSwitch = $(e.currentTarget),
                dContent = $(dSwitch.parent().siblings());
            if (dSwitch.hasClass('advanced_search')) {
                this.post.isAdvancedSrch = true;
                dSwitch.attr('class', 'advanced_bottom');
            } else {
                dSwitch.attr('class', 'advanced_search');
                this.post.isAdvancedSrch = false;
            }
            dContent.toggle();
        },
        switchArea: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-col="city"]'),
                type = target.attr('data-type');
            if (type == 'city') {
                this.setCityActive(p.attr('data-pid'), p.attr('data-id'));
            } else {
                this.setProvinceActive(p.attr('data-pid'));
            }
        },
        selectArea: function (e) {
            var target = $(e.currentTarget),
                pcity = target.parents('[data-col="city"]'),
                activeTab = pcity.find('li.act[data-type]'),
                box = pcity.find('[data-dp="box"]'),
                id = target.attr('data-id');

            if (!target.hasClass('act')) {
                target.addClass('act').siblings('dd').removeClass('act');
            }
            if (activeTab.attr('data-type') == 'city') {
                pcity.attr('data-id', id);
                pcity.find('.inputnr span').html(target.html());
                box.hide();
            } else {
                pcity.attr('data-pid', id);
                pcity.attr('data-id', '');
                if (!id) {
                    //关闭当前选项卡
                    pcity.find('.inputnr span').html(target.html());
                    box.hide();
                }
                this.setCityActive(id);
            }
        },

        loadOrderSources: function () {
            var _box = this.$el,
                exclude = this.excludeSource;
            if (exclude && exclude.length) {
                _.each(exclude, function (item) {
                    _box.find('[data-col="sources"] [data-dp="box"] dd[data-id="' + item + '"]').hide();
                });
            }
        },
        loadOrderStatusList: function () {
            var statusName = this.statustype || STATUS_NAME.ORDER,
                idsArr = this.ids || [],
                list = ALL_SATUS[statusName] ? ALL_SATUS[statusName] : ALL_SATUS[STATUS_NAME.ORDER];
            if (idsArr && idsArr.length > 0) {
                list = _.filter(list, function (x) {
                    return _.indexOf(idsArr, +x.id) > -1;
                });
            }
            if (list.length > 1) {
                list[0].name != '全部' && list.splice(0, 0, {id: '', name: '全部'});
            }
            var cnt = this.statusTplFn({data: list});
            this.$el.find('[data-col="status"] [data-dp="box"]').html(cnt);
            //默认选中第一项，哪怕是全部选项
            this.setFirstDefaultItem(this.$el.find('[data-col="status"]'), list[0].id, list[0].name);
        },
        loadOrderStoreList: function (fn) {
            this.getStoreList(function (data) {
                var ckList = data || [];
                if (data.length > 1) {
                    ckList.splice(0, 0, {ckNo: '', ckName: '全部'});
                } else if (data.length == 1) {
                    this.setFirstDefaultItem(this.$el.find('[data-col="store"]'), data[0].ckNo, data[0].ckName);
                }
                var cnt = this.storeTplFn({data: ckList});
                this.$el.find('[data-col="store"] [data-dp="box"]').html(cnt);
                (typeof  fn === 'function') && fn.apply(this, arguments);
            });
        },
        loadOrderOriginList: function (fn) {
            this.getEshopList(function (data) {
                var shopList = data.eShops || [];
                if (shopList.length > 1) {
                    shopList.splice(0, 0, {id: '', sName: '全部'});
                } else if (shopList.length == 1) {
                    this.setFirstDefaultItem(this.$el.find('[data-col="origin"]'), shopList[0].id, shopList[0].sName);
                }
                var cnt = this.originTplFn({data: shopList});
                this.$el.find('[data-col="origin"] [data-dp="box"]').html(cnt);
                (typeof  fn === 'function') && fn.apply(this, arguments);
            });
        },
        loadArea: function () {
            var target = this.$el.find('[data-col="city"]');
            target.find('[data-dp="cnt"]').empty();
            var param = {
                id: target.attr('data-id'),
                pid: target.attr('data-pid')
            };
            if (param.id && param.pid) {
                this.setCityActive(param.pid, param.id);
            } else {
                this.setProvinceActive(param.pid);
            }
        },

        setFirstDefaultItem: function (box, id, text) {
            if (box && box.length > 0) {
                box = box.attr('data-col') ? box : box.parents('[data-col]');
                box.attr('data-id', id);
                box.find('.inputnr span').html(text);
            }
        },
        setProvinceActive: function (pid) {
            this.setActiveArea('province');
            this.getProvinceList(function (data) {
                //data.addrs
                this.renderAreaTpl(data.addrs || [], pid);
            });
        },
        setCityActive: function (pid, id) {
            this.setActiveArea('city');
            if (!pid) {
                this.renderAreaTpl([], id);
            } else {
                this.getCityList({pid: pid}, function (data) {
                    this.renderAreaTpl(data.addrs || [], id);
                });
            }
        },
        renderAreaTpl: function (data, chkid) {
            data = data || [];
            data.splice(0, 0, {id: '', aname: '全部'});

            var cnt = this.areaTplFn({data: data, chkid: chkid || ''});
            this.$el.find('[data-col="city"] [data-dp="cnt"]').html(cnt);
        },
        setActiveArea: function (type) {
            var target = this.$el.find('[data-col="city"]');
            var curTab = target.find('[data-type="' + type + '"]');
            if (curTab.length && !curTab.hasClass('act')) {
                curTab.addClass('act').siblings('li').removeClass('act');
            }
        },

        getProvinceList: function (fn) {
            //provincesListModel.param = {};
            //provincesListModel.excute(function (data) {
            //    (typeof  fn === 'function') && fn.apply(this, arguments);
            //}, function (err) {
            //}, false, this);
        },
        getCityList: function (param, fn) {
            //citysListModel.param = param;
            //citysListModel.excute(function (data) {
            //    (typeof  fn === 'function') && fn.apply(this, arguments);
            //}, function (err) {
            //}, false, this);
        },
        getEshopList: function (fn) {
            //getImportEshopModel.param = {};
            //getImportEshopModel.excute(function (data) {
            //    //data.eShops
            //    (typeof  fn === 'function') && fn.apply(this, arguments);
            //}, function (err) {
            //}, false, this);
        },
        getStoreList: function (fn) {
            //GetCkListModel.param = {};
            //GetCkListModel.excute(function (data) {
            //    (typeof  fn === 'function') && fn.apply(this, arguments);
            //}, function (err) {
            //}, false, this);
        },

        //异常订单隐藏高级搜索
        hideSearch: function () {
            this.$el.find('.advanced_search').hide();
        },
        getParams: function () {
            var result = {},
                _box = this.$el;
            var getSelectValue = function (selector, attrs) {
                return _box.find(selector).attr(attrs || 'data-id') || '';
            };
            if (this.post.isAdvancedSrch) {
                //高级搜索
                result.ckNo = getSelectValue('[data-col="store"]');
                result.eshopId = getSelectValue('[data-col="origin"]');
                result.sources = getSelectValue('[data-col="sources"]');
                result.qStatus = getSelectValue('[data-col="status"]');

                result.startTime = $.trim(_box.find('[data-date="begin"]').val());
                if (result.startTime) {
                    result.startTime += ' 00:00:00';
                }
                result.endTime = $.trim(_box.find('[data-date="end"]').val());
                if (result.endTime) {
                    result.endTime += ' 23:59:59';
                }

                //省市区值即可
                result.proviceid = getSelectValue('[data-col="city"]', 'data-pid');
                result.cityId = getSelectValue('[data-col="city"]', 'data-id');
            }
            result.qType = $.trim(_box.find('[data-col="type"]').attr('data-value') || '');
            result.kwd = $.trim(_box.find('[data-col="kwd"]').val() || '');
            $.extend(result, this.post);

            return result;
        }
    });

    $.fn.AdvanceSearch = function (attrs) {
        var instance = new BaseView(this, attrs);
        return instance;
    };
})(jQuery);
