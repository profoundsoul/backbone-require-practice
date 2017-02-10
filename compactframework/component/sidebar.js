(function ($) {
    //var getWatchListModel = ProxyModel.GetWatchListModel.getInstance(),
    //    DelWatchModel = ProxyModel.DelWatchModel.getInstance(),
    //    getLookHistoryListModel = ProxyModel.GetLookHistoryListModel.getInstance(),
    //    delLookHistoryModel = ProxyModel.DelLookHistoryModel.getInstance(),
    //    clearLookHistoryModel = ProxyModel.ClearLookHistoryModel.getInstance(),
    //
    //    userLoginModel = ProxyModel.UserLoginModel.getInstance(),
    //    getUserPermissionModel = ProxyModel.GetUserPermissionModel.getInstance(),
    //    getCartQuantityModel = ProxyModel.GetCartQuantityModel.getInstance(),
    //    addCartItemModel = ProxyModel.AddCartItemModel.getInstance(),
    //    getCartListModel = ProxyModel.GetCartListModel.getInstance();

    var BaseView = $.custom.Component({
        templatePath: 'sidebar.html',
        rsaPath:'../secure/rsa.min.js',
        events: {
            'blur .sidebar_right':'hideAllLayer',
            'click ': 'stopClickPropagation',
            'click .js_concern': 'showConcern',
            'click .js_footstep': 'showFootstep',
            'click .js_cart': 'showCart',
            'click [data-root="layer"] .js_close': 'closeLayer',
            'click .js_login [data-btn="login"]': 'signIn',
            'keydown .js_login [data-col="pwd"]': 'enterFast',
            'click .js_gotop': 'goPageTop',
            'click .js_concern_body [data-btn="addcart"]': 'addCart',
            'click .js_concern_body [data-btn="delconcern"]': 'delConcernProduct',
            'click .checkbox': 'toggleCheckedBox',
            'click .js_footstep_body .js_clear': 'clearFootStep',
            'click .js_footstep_body [data-btn="delfoot"]': 'delFootStep'
        },
        __propertys__: function () {
            this.render();
        },
        initialize: function () {
            this.checkLogin();
            this.hideAllLayer();
            this.hideLoginLayer();
            this.addBlurEvent();
            this.updateCartCount();
        },
        addBlurEvent: function () {
            //$(document).on('click', $.proxy(this.hideAllLayer, this));
        },
        stopClickPropagation: function (e) {
            e.stopPropagation();
        },
        lazyLoadImage: function (opts) {
            var _el = this.$el;
            if (opts.imgs && opts.imgs.length) {
                if (this.lazyImage) {
                    this.lazyImage.refresh($.extend({
                        errorImg: '/content/imgs/noimg220.jpg'
                    }, opts));
                } else {
                    this.lazyImage = new LazyLoad($.extend({
                        errorImg: '/content/imgs/noimg220.jpg'
                    }, opts));
                }
            }
        },
        render: function () {
            var _el = this.$el;

            this.loginTplFn = _.template(_el.find('#js_login_tpl').html());
            this.concernTplFn = _.template(_el.find('#js_concern_tpl').html());
            this.footstepTplFn = _.template(_el.find('#js_footstep_tpl').html());
            this.cartTplFn = _.template(_el.find('#js_cart_tpl').html());
        },
        renderTpl: function (tplName, data) {
            tplName = (tplName || '').toLowerCase();
            data = data || [];
            var _el = this.$el,
                box = null;
            switch (tplName) {
                case 'concern':
                    box = _el.find('.js_concern_box');
                    box.html(this.concernTplFn({data: data, getDetailUrl: this.getProductDetailUrl}));
                    box.find('[data-area="list"]').css('max-height', this.getListAreaMaxHeight(90));
                    break;
                case 'cart':
                    box = _el.find('.js_cart_box');
                    box.html(this.cartTplFn({data: data, getDetailUrl: this.getProductDetailUrl}));
                    box.find('[data-area="list"]').css('max-height', this.getListAreaMaxHeight(214));
                    break;
                case 'footstep':
                    box = _el.find('.js_footstep_box');
                    box.html(this.footstepTplFn({data: data, getDetailUrl: this.getProductDetailUrl}));
                    box.find('[data-area="list"]').css('max-height', this.getListAreaMaxHeight(127));
                    break;
                default :
                    break;
            }

            //避免当前box没有展示时，提前渲染图片
            if (box && box.is(':visible')) {
                this.lazyLoadImage({
                    imgs: box.parent().find('img[data-src]'),
                    container: box.find('[data-area="list"]')
                });
            }
        },
        /**
         * 展示我的关注
         * @param e
         */
        showConcern: function (e) {
            var target = $(e.currentTarget);
            var pItem = target.parents('[data-item="sidebar"]');
            if (this.checkLogin()) {
                //已经登录成功后处理
                var concernEle = this.$el.find('.js_concern_body');
                if (!concernEle.is(':visible')) {
                    var isShowLayer = concernEle.siblings('[data-root="layer"]').is(':visible');
                    if (isShowLayer) {
                        pItem.siblings('[data-item="sidebar"]').removeClass('active');
                        this.showSwitchOtherLayer(concernEle, this.loadConcernProducts);
                    } else {
                        this.showLayer(concernEle, this.loadConcernProducts);
                    }
                    pItem.addClass('active');
                } else {
                    this.hideAllLayer(concernEle);
                }
            } else {
                this.showLoginLayer(target);
            }
        },

        /**
         * 展示我的足迹
         * @param e
         */
        showFootstep: function (e) {
            var target = $(e.currentTarget);
            var pItem = target.parents('[data-item="sidebar"]');
            if (this.checkLogin()) {
                //已经登录成功后处理
                var footstepEle = this.$el.find('.js_footstep_body');
                if (!footstepEle.is(':visible')) {
                    var isShowLayer = footstepEle.siblings('[data-root="layer"]').is(':visible');
                    if (isShowLayer) {
                        pItem.siblings('[data-item="sidebar"]').removeClass('active');
                        this.showSwitchOtherLayer(footstepEle, this.loadFootstep);
                    } else {
                        this.showLayer(footstepEle, this.loadFootstep);
                    }
                    pItem.addClass('active');
                } else {
                    this.hideAllLayer(footstepEle);
                }
            } else {
                this.showLoginLayer(target);
            }
        },
        loadConcernProducts: function () {
            this.getWatchProductList(function (data) {
                //if (data.data && data.data.length) {
                //    _.each(data.data, function (item) {
                //        item.imgurl = location.host;
                //        if (item.imgmodel && item.imgmodel.imgs80 && item.imgmodel.imgs80.length) {
                //            var imglist = item.imgmodel.imgs80;
                //            var masterImg = _.find(imglist, function (img) {
                //                return img.ismaster === 1;
                //            });
                //            if (!masterImg) {
                //                masterImg = imglist[0];
                //            }
                //            item.imgurl = masterImg.url;
                //        }
                //    });
                //}
                this.renderTpl('concern', data.data);
            });
        },
        loadFootstep: function () {
            var handleImgUrl = function (data) {
                _.each(data, function (item) {
                    item.imgurl = location.host;
                    if (item.imgmodel && item.imgmodel.imgs80 && item.imgmodel.imgs80.length) {
                        var imglist = item.imgmodel.imgs80;
                        var masterImg = _.find(imglist, function (img) {
                            return img.ismaster === 1;
                        });
                        if (!masterImg) {
                            masterImg = imglist[0];
                        }
                        item.imgurl = masterImg.url;
                    }
                });
            };
            this.getLookProductList({}, function (data) {
                var _data = data.data;
                //if (_data && _data.today && _data.before && (_data.today.length + _data.before.length) > 0) {
                //    handleImgUrl(_data.today);
                //    handleImgUrl(_data.before);
                //}
                this.renderTpl('footstep', _data);
            });
        },
        loadCartProductList: function () {
            this.getCartList(function (data) {
                console.log(data);
                this.renderTpl('cart', data.data);
                this.updateCartCount();
            })
        },
        /**
         * 展示我的购物车
         * @param e
         */
        showCart: function (e) {
            var target = $(e.currentTarget);
            var pItem = target.parents('[data-item="sidebar"]');
            if (this.checkLogin()) {
                this.hideLoginLayer();
                var cartEle = this.$el.find('.js_cart_body');
                if (!cartEle.is(':visible')) {
                    var isShowLayer = cartEle.siblings('[data-root="layer"]').is(':visible');
                    if (isShowLayer) {
                        pItem.siblings('[data-item="sidebar"]').removeClass('active');
                        this.showSwitchOtherLayer(cartEle, this.loadCartProductList);
                    } else {
                        this.showLayer(cartEle, this.loadCartProductList);
                    }
                    pItem.addClass('active');
                } else {
                    this.hideAllLayer(cartEle);
                }
            } else {
                this.showLoginLayer(target);
            }
        },
        /**
         * 关闭弹出层
         * @param e
         */
        closeLayer: function (e) {
            var _el = this.$el;
            e.preventDefault();
            e.stopPropagation();
            var target = $(e.currentTarget);
            _el.find('.sidebar_right').css('right', 0);
            _el.find('[data-item="sidebar"]').removeClass('active');
            this.transitionLayerEnd(function () {
                target.parents('[data-root="layer"]').hide();
            });
        },
        enterFast: function (e) {
            if ((e.keyCode || e.which) == 13) {
                //点击Enter键时，触发查询事件
                this.$el.find('.js_login [data-btn="login"]').click();
            }
        },
        /**
         * 用户登录
         * @param e
         */
        signIn: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('.js_login');

            var $uname = p.find('input[data-col="uname"]'),
                $pwd = p.find('input[data-col="pwd"]'),
                isagree = p.find('input[data-col="agree"]').prop('checked');

            if (!$uname) {
                $.custom.Dialog.Toast('请填写用户名！');
                return;
            }
            if (!$pwd) {
                $.custom.Dialog.Toast('请填写登录密码！');
                return;
            }
            var _this = this;
            this.getDynamicRSA(function () {
                //var uname = $.trim($uname.val()),
                //    pwd = $.trim($pwd.val());
                //
                //userLoginModel.param = {};
                //userLoginModel.setParam({
                //    uname: uname,
                //    pwd: $.custom.RSA.rsaEncrypted(pwd),
                //    isagree: 1
                //});
                //userLoginModel.excute(function (data) {
                //    if (data.flag) {
                //        this.SignInSuccess(data);
                //    } else {
                //        $.custom.Dialog.Toast(data.msg);
                //    }
                //}, function (err) {
                //    $.custom.Dialog.Toast('服务调用异常！');
                //}, true, _this);
            });
        },
        addCart: function (e) {
            e.stopPropagation();
            e.preventDefault();
            //加入购物车
            var target = $(e.currentTarget),
                p = target.parents('[data-id]'),
                id = +p.attr('data-id'),
                pbid = +p.attr('data-pbid'),
                ckno = p.attr('data-ckno');
            if (!id || !pbid || !ckno) {
                $.custom.Dialog.Toast('当前商品无货或无可用仓库！');
                return;
            }
            this.addProductToCart(id, pbid, ckno, 1, function () {
                $.custom.Dialog.Toast('商品加入购物车成功！');
            });
        },
        delConcernProduct: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.currentTarget),
                p = target.parents('[data-id]'),
                pbid = p.attr('data-pbid'),
                mid = p.attr('data-id');
            var param = {
                items: [mid],
                groupFlag: true
            };
            this.delWatchProduct(param, function (data) {
                this.loadConcernProducts();
                this.registerCancelConcernProductEvent(param);
            });
        },
        toggleCheckedBox: function (e) {
            var target = $(e.currentTarget);
            target.find('label').toggleClass('act');
        },
        clearFootStep: function (e) {
            //var target = $(e.currentTarget),
            //    p = target.parent();
            //var allItem = p.find('[data-id]'),
            //    idArr = [];
            //_.each(allItem, function(ele) {
            //    var _o = $(ele),
            //        v = $.trim(_o.attr('data-id') || '');
            //    if(v) {
            //        idArr.push(v);
            //    }
            //});
            this.clearLookProduct(function (data) {
                this.loadFootstep();
            });
        },
        delFootStep: function (e) {
            var target = $(e.currentTarget),
                p = target.parents('[data-id]'),
                id = p.attr('data-id');
            this.delLookProduct({footIds: [id]}, function (data) {
                this.loadFootstep();
            });
        },

        transitionLayerEnd: function (fn, delay) {
            var _this = this;
            setTimeout(function () {
                (typeof fn === 'function') && fn.apply(_this, arguments);
            }, delay || 300);
        },
        /**
         * 更新本地存储
         * @param data 登录成功后的数据
         */
        refleshStorage: function (data) {
            window.localStorage.clear();
        },
        /**
         * 登录成功后处理
         * {关闭登录页面，通知页面登陆成功，清除未登录时本地存储数据--购物车数据特殊处理}
         * @constructor
         */
        SignInSuccess: function (data) {
            //清除本地存储数据
            this.refleshStorage(data);

            //关闭登录窗体，处理登录信息相关入口
            this.hideLoginLayer();
            this.checkLogin();

            //(1)注册事件，通知登录成功接口
            this.registerLoginSuccessEvent(data);
        },
        /**
         * 注册登录成功事件，处理登录成功后各个页面逻辑处理
         * @param data 登陆成功数据包
         */
        registerLoginSuccessEvent: function (data) {
            $(document.body).trigger(global.CUSTOM_EVENT.LOGIN_SUCCESS, [data]);
        },
        /**
         * 取消关注商品成功事件，处理个人中心关注商品与取消关注商品同步问题
         * @param data 取消关注{product:商品数据}
         */
        registerCancelConcernProductEvent: function (data) {
            $(document.body).trigger(global.CUSTOM_EVENT.CANCEL_CONCERN_PRODUCT, [{product: data}]);
        },
        /**
         * 检查是否登录
         * @param target
         * @returns {boolean}
         */
        checkLogin: function () {
            //TODO: mock not logined
            var loginInfo = true;
            if (loginInfo) {
                this.showSSOChat();
                return true;
            } else {
                //优先隐藏所有的Layer
                this.hideAllLayer();
                //this.showAnonymousChat();
                return false;
            }
        },
        /**
         * 隐藏当前所有的弹出层
         */
        hideAllLayer: function () {
            var allLayer = this.$el.find('.sidebar_item_layer');
            this.$el.find('.sidebar_right').css('right', 0);
            this.$el.find('[data-item="sidebar"]').removeClass('active');
            this.transitionLayerEnd(function () {
                allLayer.hide();
            });
        },
        /**
         * 隐藏除当前target外的所有其它层,并显示当前层
         * @param target
         */
        showSwitchOtherLayer: function (target, fn) {
            var _el = this.$el,
                target = this.$el.find(target),
                siblings = target.siblings('[data-root="layer"]'),
                width = target.width();
            this.transitionLayerEnd(function () {
                var _this = this;
                siblings.removeClass('active');
                target.addClass('active');
                target.fadeIn('show', function () {
                    siblings.hide();
                    _this.lazyLoadImage({
                        imgs: target.find('img[data-src]'),
                        container: target.find('[data-area="list"]')
                    });
                });
                _el.css('right', width);
            }, 100);
            (typeof fn === 'function') && fn.call(this);
        },
        /**
         * 显示当前层
         * @param target
         */
        showLayer: function (target, fn) {
            var _el = this.$el,
                width = target.width();
            this.transitionLayerEnd(function () {
                target.show();
                target.addClass('active');
                this.lazyLoadImage({
                    imgs: target.find('img[data-src]'),
                    container: target.find('[data-area="list"]')
                });
                _el.find('.sidebar_right').css('right', width);
            }, 100);
            (typeof fn === 'function') && fn.call(this);
        },
        /**
         * 隐藏登录层
         */
        hideLoginLayer: function () {
            this.$el.find('.js_login').hide();
        },
        /**
         * 根据触发登录检查目标，显示登录框
         * @param target
         */
        showLoginLayer: function (target) {
            var sideItem = target.filter('[data-item="sidebar"]');
            if (!sideItem.length) {
                sideItem = target.parents('[data-item="sidebar"]');
            }
            var loginEle = sideItem.find('.js_login');
            sideItem.siblings().find('.js_login').hide();
            if (loginEle && loginEle.length) {
                loginEle.show();
            } else {
                //需要去找出当前是否有其他页面的LoginView Show状态
                sideItem.siblings().find('.js_login').hide();
                sideItem.append(this.loginTplFn({}));
                sideItem.find('.js_login').show();
            }
        },
        /**
         * 返回页面顶部
         * @returns {boolean}
         */
        goPageTop: function () {
            $([document.body, document.documentElement]).stop().animate({scrollTop: 0}, 500);
            return false;
        },
        /**
         * 显示单点登录在线聊天入口
         */
        showSSOChat: function () {
            this.$el.find('.js_kchat').hide();
            var uniqueId = 'kf5-provide-supportBox';
            var ssoKfElement = $(document.body).find('#' + uniqueId);
            var createKF5Supportbox = function (data) {
                Util.createDynamicScript({
                    'kf5-domain': 'yitb.kf5.com',
                    'id': uniqueId
                }, "//assets.kf5.com/supportbox/main.js", function () {
                    //创建脚本后成功回调
                    var api = window.KF5SupportBoxAPI,
                        userperimis = data;
                    if (api) {
                        api.init();
                        api.ready(function (scope) {
                            // 传递用户信息给组件使用
                            api.identify({
                                "name": userperimis.usertitle,
                                "email": userperimis.username,
                                "phone": userperimis.mtel
                            });
                        });
                    }
                }, this);
            };
            if (!(ssoKfElement && ssoKfElement.length)) {
                this.getUserPermission(function (data) {
                    if (data.username) {
                        createKF5Supportbox.call(this, data);
                    }
                });
            }
        },
        /**
         * 显示匿名在线聊天入口
         */
        showAnonymousChat: function () {
            this.$el.find('.js_kchat').show();
            //清除单点登录在线聊天
            $('[class^="kf5-support-"], script[src^="//assets.kf5.com"], link[href^="//assets.kf5.com"]').remove();
        },
        /**
         * 设置list区域高度，减去剔除header和footer
         * @param rejectHeight 剔除高度
         */
        getListAreaMaxHeight: function (rejectHeight) {
            rejectHeight = rejectHeight || 0;
            var viewPortHeight = $(window).height();
            return viewPortHeight - rejectHeight;
        },

        /**
         * 获取用户在线聊天权限及用户信息
         * @param fn
         */
        getUserPermission: function (fn) {
            //getUserPermissionModel.param = {};
            //getUserPermissionModel.setParam({});
            //getUserPermissionModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data.data || {});
            //}, function () {
            //}, false, this);
        },
        getWatchProductList: function (fn) {
            //getWatchListModel.param = {};
            //getWatchListModel.setParam({pageSize: 50});
            //getWatchListModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data || {});
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);

            (typeof fn === 'function') && fn.call(this, {data:[]});
        },
        delWatchProduct: function (param, fn) {
            //DelWatchModel.param = {};
            //DelWatchModel.setParam(param);
            //DelWatchModel.excute(function (data) {
            //    if (data.flag) {
            //        (typeof fn === 'function') && fn.apply(this, arguments);
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '取消关注失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, true, this);
        },
        getLookProductList: function (param, fn) {
            //getLookHistoryListModel.param = {};
            //getLookHistoryListModel.setParam({pageSize: 50});
            //getLookHistoryListModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data || {});
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
            (typeof fn === 'function') && fn.call(this, {data:[]});
        },
        delLookProduct: function (param, fn) {
            //delLookHistoryModel.param = {};
            //delLookHistoryModel.setParam(param);
            //delLookHistoryModel.excute(function (data) {
            //    if (data.flag) {
            //        (typeof fn === 'function') && fn.apply(this, arguments);
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '删除浏览历史失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！')
            //}, true, this);
        },
        clearLookProduct: function (fn) {
            //clearLookHistoryModel.param = {};
            //clearLookHistoryModel.setParam({});
            //clearLookHistoryModel.excute(function (data) {
            //    if (data.flag) {
            //        (typeof fn === 'function') && fn.apply(this, arguments);
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '清空浏览历史失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！')
            //}, true, this);
        },
        getCartQuantity: function (fn) {
            //getCartQuantityModel.setParam({});
            //getCartQuantityModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data || {});
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！')
            //}, false, this);
            (typeof fn === 'function') && fn.call(this, {data:0});
        },
        addCartItem: function (param, fn) {
            //addCartItemModel.setParam(param || {});
            //addCartItemModel.excute(function (data) {
            //    if (data.flag) {
            //        (typeof fn === 'function') && fn.apply(this, arguments);
            //    } else {
            //        $.custom.Dialog.Toast(data.msg || '商品新增购物车失败！');
            //    }
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
        },
        getCartList: function (fn) {
            //getCartListModel.setParam({});
            //getCartListModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.apply(this, arguments);
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
            (typeof fn === 'function') && fn.apply(this, [{data:[]}]);
        },

        /**
         * 将商品加入到购物车
         * @param mid 对应estore中的parentid又被称为masterid，商品主标识
         * @param pid 标准商品
         * @param ckno 仓库编号
         * @param num 加入购物车商品数量,不传时默认为1
         * @returns {boolean} 是否加入购物车成功，成功返回True，否则返回False
         */
        addProductToCart: function (mid, pid, ckno, num, fn) {
            mid = +mid;
            pid = +pid;
            num = +num || 1;
            ckno = $.trim(ckno || '');
            if (!mid || !pid || !ckno) {
                return false;
            }
            this.addCartItem({pbId: pid, ckNo: ckno, num: num}, function (data) {
                this.updateCartCount();
                typeof fn === 'function' && fn.apply(this, arguments);
            });
        },
        updateCartCount: function () {
            this.getCartQuantity(function (data) {
                if (data.data && data.data > 0) {
                    this.$el.find('.js_cartcount').addClass('hasamt').html(data.data);
                } else {
                    this.$el.find('.js_cartcount').removeClass('hasamt').html(0);
                }
            });
        },
        getProductDetailUrl: function (mid, pid, ckno) {
            mid = $.trim(mid || '');
            pid = $.trim(pid || '');
            ckno = $.trim(ckno || '');
            var url = 'http://www.yitb.com/Product/' + mid;
            if (pid) {
                if (ckno) {
                    url += '-' + pid + '-' + ckno;
                } else {
                    url += '-' + pid;
                }
            }
            url += '.aspx';
            return url;
        },
        /**
         * 获取购物车图标的坐标（相对屏幕）
         * @param isLast 是否为收缩后的坐标
         * @returns {{left: Number, top: Number, clientWidth: *, clientHeight: *}}
         */
        getCartDistCoords: function (isLast) {
            var cart = $('.js_cart').get(0),
                win = $(window),
                clientRect = cart.getBoundingClientRect(),
                left = clientRect.left;
            if (isLast) {
                var el = this.$el.get(0),
                    elClientRect = el.getBoundingClientRect(),
                    cntWidth = win.width() - elClientRect.right;
                if (cntWidth > 40) {
                    //收缩后的坐标值
                    left = left + cntWidth;
                }
            }
            return {
                left: left,
                top: clientRect.top,
                clientWidth: win.width(),
                clientHeight: win.height()
            }
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
    });


    //create root div container and singleton
    var sidebar = $(document.body).find('#js_sidebar_right');
    if (!sidebar.length) {
        sidebar = $('<div id="js_sidebar_right"></div>');
        $(document.body).append(sidebar);

        var instance = new BaseView(sidebar, {});
        window.RigthSideBar = instance;
    }
})(jQuery);