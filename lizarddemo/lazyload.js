/**
 * Created by mumu on 2016/8/3.
 */
define(['cBase'], function (cBase) {
    'use strict'
    var ImgLazyload = new cBase.Class({
        __propertys__: function () {
            this.isError = false;
        },
        initialize: function (opts) {
            this.init();
        }
    });
    return ImgLazyload;
});