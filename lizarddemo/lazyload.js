/**
 * Created by mumu on 2016/8/3.
 */
define(['cBase'], function (cBase) {
    'use strict'
    var ImgLazyload = new cBase.Class({
        __propertys__: function () {
            this.imgs = [];
            this.imgContainer = {};
            this.container = $(window);
        },
        initialize: function (opts) {
            $.extend(this, opts);
            this.init();
            this.lazyLoad();
            this.bindEvent();
        },
        init: function () {
            for (var i = 0, len = this.imgs.length; i < len; i++) {
                var o = $(this.imgs[i]);
                var offset = o.offset(),
                    y = offset.top;
                if (this.imgContainer[y]) {
                    this.imgContainer[y].push(o);
                } else {
                    this.imgContainer[y] = [o];
                }
            }
        },
        lazyLoad: function () {
            var scrollTop = $(this.container).scrollTop(),
                height = $(window).height();
            for (var k in this.imgContainer) {
                k = +k;
                if (scrollTop < k && k < scrollTop + height) {
                    $.each(this.imgContainer[k], this._handleImg)
                    delete this.imgContainer[k];
                }
            }
        },
        _handleImg: function (idx, img) {
            var tmpImg = new Image,
                src = img.attr('data-src');
            tmpImg.onload = function () {
                console.log('图片加载成功了！');
                img.attr('src', src);
            };
            tmpImg.onerror = function () {
                console.log('图片加载失败了！');
            }
            tmpImg.src=src;
        },
        bindEvent:function() {
            var _this = this;
            this.container.on('scroll.lazyimageload',function(e) {
                _this.lazyLoad();
            });
            $(window).on('resize.lazyimageload',function(e) {
                _this.lazyLoad();
            });
        },
        destory:function(){
            this.container.off('lazyimageload');
            $(window).off('lazyimageload');
        }
    });
    return ImgLazyload;
});