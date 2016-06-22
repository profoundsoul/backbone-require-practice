/**
 * Created by mumu on 2016/6/17.
 */
define(['cModel','cStore', 'cBase', 'userstore'], function(AbstractModel, store, cBase, appStore){
    var Model = {};
    AbstractModel.baseurl=function(){
        var _path = "";
        var _domain = location.host + "/restapi";
        return {
            domain: _domain,
            path: _path
        }
    };
    Model.ProvincesListModel = new cBase.Class(AbstractModel, {
        __propertys__: function () {
            this.method = 'POST';
            this.url ="orders/api/address/getcitys";
            this.param = {
                pid: 0
            };
            this.result = appStore.ProvinceListStore.getInstance();
        },
        initialize: function ($super, options) {
            $super(options);
        }
    });


    Model.QueryUserInfoModel = new cBase.Class(AbstractModel, {
        __propertys__: function () {
            this.method = 'POST';
            this.url = "accounts/api/account/userinfo";
            this.param = {};
            this.isUserData = true;
        },
        initialize: function ($super, options) {
            $super(options);
        }
    });

    /******************************************
     * @description:  获取网店平台数据Model
     * @author:      linq
     ******************************************/
    Model.GetShopWebTypeModel = new cBase.Class(AbstractModel, {
        __propertys__: function () {
            this.method = 'POST';
            this.url = "products/api/FxShop/getshopwebtype";
            this.param = {};
            this.isUserData = true;
        },
        initialize: function ($super, options) {
            $super(options);
        }
    });

    return Model;
});
