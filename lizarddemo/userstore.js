/**
 * Created by mumu on 2016/6/22.
 */
/******************************************
 * @description:  Store存储设置，Store Key设置规则如下(统一大写)：
 * 1. 服务下发的数据，以P_开头
 * 2. 存储的数据为查询参数，以Q_开头
 * 3. 存储为其他数据，以O_开头
 * @author:      caof
 ******************************************/
define(['cStore', 'cBase'], function (AbstractStore, cBase) {
    var Store = {};

    /******************************************
     * @description:   省份Store
     * @author:       caofu
     ******************************************/
    Store.ProvinceListStore = new cBase.Class(AbstractStore, {
        __propertys__: function () {
            this.key = "P_PROVINCES";  //localStore 本地存储key
            this.lifeTime = "7D";      //expire time过期时间（D表示天、H表示小时、M表示分钟、S表示秒）
        },
        initialize: function ($super, options) {
            $super(options);
        }
    });

    return Store;
});