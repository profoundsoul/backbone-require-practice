/**
 * Created by mumu on 2016/8/3.
 */
define(['cBase'], function (cBase) {
    'use strict'
    var ImgLazyload = new cBase.Class({
        __propertys__: function () {
            this.imgList=[];
        },
        initialize: function (opts) {
            $.extend(this, opts);
        }
    });
    return ImgLazyload;
});