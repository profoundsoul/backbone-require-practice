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
        lazyLoadPath:'../secure/img.lazyload.js',
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
                    this.getDynamicLazyLoad(function(){
                        this.lazyImage = new $.custom.ImgLazyload($.extend({
                            errorImg: '/content/imgs/noimg220.jpg'
                        }, opts));
                    });
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
                $.custom.createDynamicScript({
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

            var str = '{"data":{"username":"test@yitb.com","usertitle":"一通百测试专用","email":"zhangshengyu@kjy.com","mtel":"13265236874"},"status":{"code":200,"msg":"成功"}}';
            (typeof fn === 'function') && fn.call(this, JSON.parse(str).data || {});
        },
        getWatchProductList: function (fn) {
            //getWatchListModel.param = {};
            //getWatchListModel.setParam({pageSize: 50});
            //getWatchListModel.excute(function (data) {
            //    (typeof fn === 'function') && fn.call(this, data || {});
            //}, function (err) {
            //    $.custom.Dialog.Toast('服务调用异常！');
            //}, false, this);
            var str = '{"data":[{"FavID":15,"ProductName":"德国爱他美Aptamil奶粉 2+段 600g","CurrentPrice":78,"ID":"YZ-MSDNS0029","MasterId":231,"ProBaseId":231,"ProBaseNo":"KJE-9545","Image":"http://newad.yitb.com/upload/master/231/552d494a-e77c-4919-a83d-b1b8efb623e1.jpg","ImgSmall":"http://newad.yitb.com/upload/master/231/552d494a-e77c-4919-a83d-b1b8efb623e1.jpg","WarehouseNo":"D2318","WarehouseName":"环球E站南沙仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":14,"ProductName":"德国爱他美Aptamil奶粉 1段 800g","CurrentPrice":110,"ID":"SZ-GE0014","MasterId":227,"ProBaseId":227,"ProBaseNo":"KJE-9541","Image":"http://newad.yitb.com/upload/master/227/aab3c7b1-8bf1-4d0b-9a2f-41d947330457.jpg","ImgSmall":"http://newad.yitb.com/upload/master/227/aab3c7b1-8bf1-4d0b-9a2f-41d947330457.jpg","WarehouseNo":"D1204","WarehouseName":"深圳售后仓","IsOffSale":true,"WarehouseType":5,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":13,"ProductName":"荷兰牛栏Nutrilon奶粉 4段 800g 珍珠罐装","CurrentPrice":105,"ID":"MSDNS1958","MasterId":269,"ProBaseId":269,"ProBaseNo":"KJE-1924","Image":"http://newad.yitb.com/upload/master/269/48dfd8d2-7c20-4fce-8d1c-03761c5caa75.jpg","ImgSmall":"http://newad.yitb.com/upload/master/269/48dfd8d2-7c20-4fce-8d1c-03761c5caa75.jpg","WarehouseNo":"D1859","WarehouseName":"广州南沙保税仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":12,"ProductName":"英国牛栏Cow&Gate奶粉 2段 900g","CurrentPrice":78,"ID":"XBY-MSDNS0055","MasterId":296,"ProBaseId":296,"ProBaseNo":"KJE-5882","Image":"http://newad.yitb.com/upload/master/296/614fecd0-10cf-4dfa-a1d2-40a4f2aa67ab.jpg","ImgSmall":"http://newad.yitb.com/upload/master/296/614fecd0-10cf-4dfa-a1d2-40a4f2aa67ab.jpg","WarehouseNo":"D2432","WarehouseName":"希宝源南沙仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"英国","Abb":"UK","Code":"44","Image":"countrys/UK.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/UK.png","ID":447,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":11,"ProductName":"荷兰牛栏Nutrilon奶粉 4段 800g","CurrentPrice":116,"ID":"SZ-GE0277","MasterId":259,"ProBaseId":259,"ProBaseNo":"KJE-1913","Image":"http://newad.yitb.com/upload/master/259/91a6706a-7bb1-4f79-bc13-72a515475562.jpg","ImgSmall":"http://newad.yitb.com/upload/master/259/91a6706a-7bb1-4f79-bc13-72a515475562.jpg","WarehouseNo":"D1204","WarehouseName":"深圳售后仓","IsOffSale":true,"WarehouseType":5,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":10,"ProductName":"荷兰牛栏Nutrilon奶粉 4段 800g 铁罐装","CurrentPrice":78,"ID":"XBY-MSDNS1764","MasterId":265,"ProBaseId":265,"ProBaseNo":"KJE-1919","Image":"http://newad.yitb.com/upload/master/265/f8a8adf5-2eee-49f6-ae40-fb200060c8ec.jpg","ImgSmall":"http://newad.yitb.com/upload/master/265/f8a8adf5-2eee-49f6-ae40-fb200060c8ec.jpg","WarehouseNo":"D2432","WarehouseName":"希宝源南沙仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":9,"ProductName":"荷兰牛栏Nutrilon奶粉 5段 800g 铁罐装","CurrentPrice":78,"ID":"XBY-MSDNS1765","MasterId":266,"ProBaseId":266,"ProBaseNo":"KJE-1920","Image":"http://newad.yitb.com/upload/master/266/d1a4b870-e2d7-47c5-bfd0-673d92df68b5.jpg","ImgSmall":"http://newad.yitb.com/upload/master/266/d1a4b870-e2d7-47c5-bfd0-673d92df68b5.jpg","WarehouseNo":"D2432","WarehouseName":"希宝源南沙仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":8,"ProductName":"荷兰佳贝艾特Kabrita羊奶粉 1段 800g","CurrentPrice":214,"ID":"CQ-8716677005744","MasterId":248,"ProBaseId":248,"ProBaseNo":"KJE-6552","Image":"http://newad.yitb.com/upload/master/248/4ebb6cfa-0228-4149-8cbc-3f7855796b8e.jpg","ImgSmall":"http://newad.yitb.com/upload/master/248/4ebb6cfa-0228-4149-8cbc-3f7855796b8e.jpg","WarehouseNo":"D4505","WarehouseName":"重庆保税仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":7,"ProductName":"荷兰佳贝艾特Kabrita羊奶粉 2段 800g","CurrentPrice":211,"ID":"wl8716677005751","MasterId":249,"ProBaseId":249,"ProBaseNo":"KJE-6553","Image":"http://newad.yitb.com/upload/master/249/70d6e4c5-f453-4522-a832-e888772ffe8e.jpg","ImgSmall":"http://newad.yitb.com/upload/master/249/70d6e4c5-f453-4522-a832-e888772ffe8e.jpg","WarehouseNo":"D3005","WarehouseName":"重庆保税二仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"FavID":6,"ProductName":"荷兰佳贝艾特Kabrita羊奶粉 3段 800g","CurrentPrice":209,"ID":"wl8716677005768","MasterId":250,"ProBaseId":250,"ProBaseNo":"KJE-6554","Image":"http://newad.yitb.com/upload/master/250/9894d91e-d94a-419a-a79f-fb70c12bc96f.jpg","ImgSmall":"http://newad.yitb.com/upload/master/250/9894d91e-d94a-419a-a79f-fb70c12bc96f.jpg","WarehouseNo":"D3005","WarehouseName":"重庆保税二仓","IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}}],"flag":true,"msg":"成功。","recordCount":0,"pageCount":0,"status":{"code":200,"msg":"成功。"}}';
            (typeof fn === 'function') && fn.call(this, JSON.parse(str) || {});
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
            var str = '{"data":{"tody":[],"other":[{"AddTime":"2017-02-09","ProductName":"荷兰佳贝艾特Kabrita羊奶粉 2段 800g","CurrentPrice":219,"ID":"wl8716677005751-1","MasterId":249,"ProBaseId":2919,"ProBaseNo":"KJY-N-249-2","Image":"http://newad.yitb.com/upload/master/249/70d6e4c5-f453-4522-a832-e888772ffe8e.jpg","ImgSmall":"http://newad.yitb.com/upload/master/249/70d6e4c5-f453-4522-a832-e888772ffe8e.jpg","WarehouseNo":"D3005","WarehouseName":"重庆保税二仓","FootID":60196,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-09","ProductName":"澳洲贝拉米Bellamy‘s有机婴幼儿奶粉 3段 900g  3罐起","CurrentPrice":169,"ID":"BO0030Y-3","MasterId":1346,"ProBaseId":1222,"ProBaseNo":"KJE-1258","Image":"http://newad.yitb.com/upload/master/1346/1478135718287.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1346/1478135718287.jpg","WarehouseNo":"D4766","WarehouseName":"澳洲直邮仓","FootID":59950,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"澳大利亚","Abb":"AU","Code":"61","Image":"countrys/AU.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/AU.png","ID":244,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-09","ProductName":"荷兰佳贝艾特Kabrita羊奶粉 3段 800g","CurrentPrice":219,"ID":"wl8716677005768-1","MasterId":250,"ProBaseId":2921,"ProBaseNo":"KJY-N-250-2","Image":"http://newad.yitb.com/upload/master/250/9894d91e-d94a-419a-a79f-fb70c12bc96f.jpg","ImgSmall":"http://newad.yitb.com/upload/master/250/9894d91e-d94a-419a-a79f-fb70c12bc96f.jpg","WarehouseNo":"D3005","WarehouseName":"重庆保税二仓","FootID":59949,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-09","ProductName":"德国爱他美Aptamil奶粉 2段 800g","CurrentPrice":113,"ID":"SZ-GE0016","MasterId":228,"ProBaseId":228,"ProBaseNo":"KJE-9542","Image":"http://newad.yitb.com/upload/master/228/9c0571f0-0a0d-4f51-b835-2d2a58d0ca30.jpg","ImgSmall":"http://newad.yitb.com/upload/master/228/9c0571f0-0a0d-4f51-b835-2d2a58d0ca30.jpg","WarehouseNo":"D1204","WarehouseName":"深圳售后仓","FootID":59909,"IsOffSale":true,"WarehouseType":5,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"美国百傲钙儿童钙片 60粒","CurrentPrice":112,"ID":"HB-MSDNS2693","MasterId":411,"ProBaseId":411,"ProBaseNo":"KJE-1860","Image":"http://newad.yitb.com/upload/master/411/8225a998-741e-4bf8-9ff2-952a91d38806.jpg","ImgSmall":"http://newad.yitb.com/upload/master/411/8225a998-741e-4bf8-9ff2-952a91d38806.jpg","WarehouseNo":"D4014","WarehouseName":"汉邦南沙仓","FootID":59531,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"美国","Abb":"US","Code":"1","Image":"countrys/US.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/US.png","ID":448,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"美国百傲钙口嚼片 草莓味 90粒","CurrentPrice":116,"ID":"HB-MSDNS2691","MasterId":412,"ProBaseId":412,"ProBaseNo":"KJE-1861","Image":"http://newad.yitb.com/upload/master/412/2d325858-145d-4117-8177-845410ddb44f.jpg","ImgSmall":"http://newad.yitb.com/upload/master/412/2d325858-145d-4117-8177-845410ddb44f.jpg","WarehouseNo":"D4014","WarehouseName":"汉邦南沙仓","FootID":59530,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"美国","Abb":"US","Code":"1","Image":"countrys/US.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/US.png","ID":448,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"德国爱他美Aptamil白金版奶粉 pre段 800g","CurrentPrice":145,"ID":"SZ-GE1953","MasterId":481,"ProBaseId":486,"ProBaseNo":"KJE-8788","Image":"http://newad.yitb.com/upload/master/481/8f86a8de-f3c4-4951-98a0-05f90e7b922e.jpg","ImgSmall":"http://newad.yitb.com/upload/master/481/8f86a8de-f3c4-4951-98a0-05f90e7b922e.jpg","WarehouseNo":"D1204","WarehouseName":"深圳售后仓","FootID":59491,"IsOffSale":true,"WarehouseType":5,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"德国Milumil米路米1段 800g","CurrentPrice":114,"ID":"Mil002","MasterId":1624,"ProBaseId":1709,"ProBaseNo":"KJE-1166","Image":"http://newad.yitb.com/upload/master/1624/1477649030140.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1624/1477649030140.jpg","WarehouseNo":"D4867","WarehouseName":"德国直邮二仓","FootID":59395,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"澳洲斯维斯Swisse胶原蛋白液 500ml 橙子味","CurrentPrice":100,"ID":"SW0080X","MasterId":1,"ProBaseId":1,"ProBaseNo":"KJE-3865","Image":"http://newad.yitb.com/upload/master/1/27107853-ebd7-4f5f-9501-69ff090b7cd9.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1/27107853-ebd7-4f5f-9501-69ff090b7cd9.jpg","WarehouseNo":"D4766","WarehouseName":"澳洲直邮仓","FootID":58327,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"澳大利亚","Abb":"AU","Code":"61","Image":"countrys/AU.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/AU.png","ID":244,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"澳洲苏芊Sukin玫瑰果保湿日霜 120ml","CurrentPrice":106,"ID":"SK0110Y","MasterId":1335,"ProBaseId":1202,"ProBaseNo":"KJE-8120","Image":"http://newad.yitb.com/upload/master/1335/1478057324787.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1335/1478057324787.jpg","WarehouseNo":"D4766","WarehouseName":"澳洲直邮仓","FootID":58323,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"澳大利亚","Abb":"AU","Code":"61","Image":"countrys/AU.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/AU.png","ID":244,"IsNew":false,"IsValid":true,"ValidationMessage":""}}],"all":[{"AddTime":"2017-02-09","ProductName":"荷兰佳贝艾特Kabrita羊奶粉 2段 800g","CurrentPrice":219,"ID":"wl8716677005751-1","MasterId":249,"ProBaseId":2919,"ProBaseNo":"KJY-N-249-2","Image":"http://newad.yitb.com/upload/master/249/70d6e4c5-f453-4522-a832-e888772ffe8e.jpg","ImgSmall":"http://newad.yitb.com/upload/master/249/70d6e4c5-f453-4522-a832-e888772ffe8e.jpg","WarehouseNo":"D3005","WarehouseName":"重庆保税二仓","FootID":60196,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-09","ProductName":"澳洲贝拉米Bellamy‘s有机婴幼儿奶粉 3段 900g  3罐起","CurrentPrice":169,"ID":"BO0030Y-3","MasterId":1346,"ProBaseId":1222,"ProBaseNo":"KJE-1258","Image":"http://newad.yitb.com/upload/master/1346/1478135718287.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1346/1478135718287.jpg","WarehouseNo":"D4766","WarehouseName":"澳洲直邮仓","FootID":59950,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"澳大利亚","Abb":"AU","Code":"61","Image":"countrys/AU.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/AU.png","ID":244,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-09","ProductName":"荷兰佳贝艾特Kabrita羊奶粉 3段 800g","CurrentPrice":219,"ID":"wl8716677005768-1","MasterId":250,"ProBaseId":2921,"ProBaseNo":"KJY-N-250-2","Image":"http://newad.yitb.com/upload/master/250/9894d91e-d94a-419a-a79f-fb70c12bc96f.jpg","ImgSmall":"http://newad.yitb.com/upload/master/250/9894d91e-d94a-419a-a79f-fb70c12bc96f.jpg","WarehouseNo":"D3005","WarehouseName":"重庆保税二仓","FootID":59949,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"荷兰","Abb":"NL","Code":"31","Image":"countrys/NL.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/NL.png","ID":376,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-09","ProductName":"德国爱他美Aptamil奶粉 2段 800g","CurrentPrice":113,"ID":"SZ-GE0016","MasterId":228,"ProBaseId":228,"ProBaseNo":"KJE-9542","Image":"http://newad.yitb.com/upload/master/228/9c0571f0-0a0d-4f51-b835-2d2a58d0ca30.jpg","ImgSmall":"http://newad.yitb.com/upload/master/228/9c0571f0-0a0d-4f51-b835-2d2a58d0ca30.jpg","WarehouseNo":"D1204","WarehouseName":"深圳售后仓","FootID":59909,"IsOffSale":true,"WarehouseType":5,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"美国百傲钙儿童钙片 60粒","CurrentPrice":112,"ID":"HB-MSDNS2693","MasterId":411,"ProBaseId":411,"ProBaseNo":"KJE-1860","Image":"http://newad.yitb.com/upload/master/411/8225a998-741e-4bf8-9ff2-952a91d38806.jpg","ImgSmall":"http://newad.yitb.com/upload/master/411/8225a998-741e-4bf8-9ff2-952a91d38806.jpg","WarehouseNo":"D4014","WarehouseName":"汉邦南沙仓","FootID":59531,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"美国","Abb":"US","Code":"1","Image":"countrys/US.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/US.png","ID":448,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"美国百傲钙口嚼片 草莓味 90粒","CurrentPrice":116,"ID":"HB-MSDNS2691","MasterId":412,"ProBaseId":412,"ProBaseNo":"KJE-1861","Image":"http://newad.yitb.com/upload/master/412/2d325858-145d-4117-8177-845410ddb44f.jpg","ImgSmall":"http://newad.yitb.com/upload/master/412/2d325858-145d-4117-8177-845410ddb44f.jpg","WarehouseNo":"D4014","WarehouseName":"汉邦南沙仓","FootID":59530,"IsOffSale":true,"WarehouseType":0,"CountrysBy":{"Name":"美国","Abb":"US","Code":"1","Image":"countrys/US.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/US.png","ID":448,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"德国爱他美Aptamil白金版奶粉 pre段 800g","CurrentPrice":145,"ID":"SZ-GE1953","MasterId":481,"ProBaseId":486,"ProBaseNo":"KJE-8788","Image":"http://newad.yitb.com/upload/master/481/8f86a8de-f3c4-4951-98a0-05f90e7b922e.jpg","ImgSmall":"http://newad.yitb.com/upload/master/481/8f86a8de-f3c4-4951-98a0-05f90e7b922e.jpg","WarehouseNo":"D1204","WarehouseName":"深圳售后仓","FootID":59491,"IsOffSale":true,"WarehouseType":5,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"德国Milumil米路米1段 800g","CurrentPrice":114,"ID":"Mil002","MasterId":1624,"ProBaseId":1709,"ProBaseNo":"KJE-1166","Image":"http://newad.yitb.com/upload/master/1624/1477649030140.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1624/1477649030140.jpg","WarehouseNo":"D4867","WarehouseName":"德国直邮二仓","FootID":59395,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"德国","Abb":"DE","Code":"49","Image":"countrys/DE.jpg","AbsoluteImage":"http://newad.yitb.com/upload//countrys/DE.jpg","ID":311,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"澳洲斯维斯Swisse胶原蛋白液 500ml 橙子味","CurrentPrice":100,"ID":"SW0080X","MasterId":1,"ProBaseId":1,"ProBaseNo":"KJE-3865","Image":"http://newad.yitb.com/upload/master/1/27107853-ebd7-4f5f-9501-69ff090b7cd9.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1/27107853-ebd7-4f5f-9501-69ff090b7cd9.jpg","WarehouseNo":"D4766","WarehouseName":"澳洲直邮仓","FootID":58327,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"澳大利亚","Abb":"AU","Code":"61","Image":"countrys/AU.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/AU.png","ID":244,"IsNew":false,"IsValid":true,"ValidationMessage":""}},{"AddTime":"2017-02-08","ProductName":"澳洲苏芊Sukin玫瑰果保湿日霜 120ml","CurrentPrice":106,"ID":"SK0110Y","MasterId":1335,"ProBaseId":1202,"ProBaseNo":"KJE-8120","Image":"http://newad.yitb.com/upload/master/1335/1478057324787.jpg","ImgSmall":"http://newad.yitb.com/upload/master/1335/1478057324787.jpg","WarehouseNo":"D4766","WarehouseName":"澳洲直邮仓","FootID":58323,"IsOffSale":true,"WarehouseType":1,"CountrysBy":{"Name":"澳大利亚","Abb":"AU","Code":"61","Image":"countrys/AU.png","AbsoluteImage":"http://newad.yitb.com/upload//countrys/AU.png","ID":244,"IsNew":false,"IsValid":true,"ValidationMessage":""}}]},"flag":true,"msg":"成功","recordCount":0,"pageCount":0,"status":{"code":200,"msg":"成功"}}';
            (typeof fn === 'function') && fn.call(this, JSON.parse(str) || {});
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
            var str = '{"data":20,"flag":true,"msg":"获取成功","recordCount":0,"pageCount":0,"status":{"code":200,"msg":"成功"}}';
            (typeof fn === 'function') && fn.call(this, JSON.parse(str));
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
            var str = '{"data":[{"MasterId":256,"Pbid":256,"Num":1,"Qty":82,"Price":142,"Image":"http://res.yitb.com/upload/master/256/5079b766-cff5-412b-9af2-086ed198dac4_80.jpg","CkName":"重庆保税仓","CKNo":"D4505","Title":"荷兰牛栏Nutrilon奶粉 1段 850g","CartItemId":1740},{"MasterId":256,"Pbid":256,"Num":1,"Qty":82,"Price":142,"Image":"http://res.yitb.com/upload/master/256/5079b766-cff5-412b-9af2-086ed198dac4_80.jpg","CkName":"重庆保税仓","CKNo":"D4505","Title":"荷兰牛栏Nutrilon奶粉 1段 850g","CartItemId":1739},{"MasterId":256,"Pbid":256,"Num":1,"Qty":82,"Price":142,"Image":"http://res.yitb.com/upload/master/256/5079b766-cff5-412b-9af2-086ed198dac4_80.jpg","CkName":"重庆保税仓","CKNo":"D4505","Title":"荷兰牛栏Nutrilon奶粉 1段 850g","CartItemId":1738},{"MasterId":256,"Pbid":256,"Num":1,"Qty":82,"Price":142,"Image":"http://res.yitb.com/upload/master/256/5079b766-cff5-412b-9af2-086ed198dac4_80.jpg","CkName":"重庆保税仓","CKNo":"D4505","Title":"荷兰牛栏Nutrilon奶粉 1段 850g","CartItemId":1737},{"MasterId":1352,"Pbid":1228,"Num":1,"Qty":49,"Price":222,"Image":"http://res.yitb.com/upload/master/1352/1478057324996_80.jpg","CkName":"澳洲直邮仓","CKNo":"D4766","Title":"澳洲Karicare可瑞康羊奶2段 900g/罐  3罐起","CartItemId":1224}],"flag":true,"msg":""}';
            (typeof fn === 'function') && fn.call(this, JSON.parse(str));
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
        getDynamicLazyLoad:function(fn) {
            if (typeof $.custom.ImgLazyload !== 'object') {
                var path = $.custom.getRealSourcePath(this.getCompPath(), this.lazyLoadPath);
                $.custom.createDynamicScript(path, function () {
                    (typeof fn === 'function') && fn.apply(this, arguments);
                }, this);
            } else {
                (typeof fn === 'function') && fn.apply(this, arguments);
            }
        }
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