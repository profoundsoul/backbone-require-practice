(function ($) {
    "use strict";
    var util = (function () {
        var eventidx = 100;
        return {
            getBiggerEventIndex: function () {
                return eventidx++;
            }
        };
    }());

    var ImgLazyload = $.custom.Class({
        __propertys__: function () {
            this.isError = false;
            this.isResizeListener = false;
            this.isFilterLoadError = false;
        },
        initialize: function (opts) {
            this.handleOpts(opts);
            this.init();
        },
        handleOpts: function (opts) {
            $.extend(this, opts || {});

            this.isError = false;
            if (!opts || !opts.imgs || !opts.imgs.length) {
                this.isError = true;
                return
            }

            this.needWrapper = false;
            if (this.width || this.height)
                this.needWrapper = true;
            this.imgContainer = {};

            //新增lazyload命名空间，防止同一页面中事件不经意地被移除
            this.lazyLoadNSName = '.imglazyload' + util.getBiggerEventIndex();
        },
        init: function () {
            if (this.isError) return;
            this.initImgContainer();
            this.lazyLoad();
            this.bindEvents();
        },
        refresh: function (opts) {
            this.destroy();
            if (opts) {
                this.handleOpts(opts);
            }
            this.init();
        },
        bindEvents: function () {
            var _this = this;
            if (this.isError) return;
            this.destroy();
            //暂时引入underscore节流函数
            var scrollThrottle = _.throttle(function () {
                _this.lazyLoad();
            }, 100);
            this.container.on('scroll' + this.lazyLoadNSName, scrollThrottle);

            //暂时引入underscore节流函数
            var resizeThrottle = _.throttle(function () {
                _this.initImgContainer();
                _this.isResizeListener && _this.lazyLoad();
            }, 300);
            $(window).on('resize' + this.lazyLoadNSName, resizeThrottle);
        },
        initImgContainer: function () {
            if (this.isError) return;
            var el, i, len, offset;
            var containerOffset = this.container.offset() || {top: 0, left: 0};
            for (i = 0, len = this.imgs.length; i < len; i++) {
                el = $(this.imgs[i]);
                if (!el.attr('data-src') || el.attr('data-src') == '' || el.attr('data-load') == '1') continue;
                if (this.isFilterLoadError && el.attr('data-load') == '2')continue;
                // bugs ----issues by linq repair
                //jquery 或zepto的offset取值均是相对document而出，
                // （1）如果存在container且非document时，此时计算el的偏移量应该以container为准，而非document；因此需要减去container的偏移量
                // el 相对于container的偏移量 = el相对document的偏移量-container相对于document偏移量
                offset = el.offset();
                var top = offset.top - containerOffset.top;
                if (!this.imgContainer[top]) {
                    this.imgContainer[top] = [];
                }
                this.imgContainer[top].push(el);
            }
        },
        _handleImg: function (tmpImg) {
            var sysImg, wrapper, scope, imgWidth, imgHeight;
            if (tmpImg.attr('data-src') && tmpImg.attr('data-src') != '') {
                if (this.needWrapper) {
                    wrapper = $(this.wrapper);
                    wrapper.css({
                        width: this.width + 'px',
                        height: this.height + 'px',
                        'background-color': this.loadingBg
                    });
                    wrapper.insertBefore(tmpImg);
                    wrapper.append(tmpImg);
                }

                sysImg = $(new Image());
                imgWidth = tmpImg.attr('data-width');
                imgHeight = tmpImg.attr('data-height');

                if (!tmpImg.attr('src'))
                    tmpImg.attr('src', this.loadingImg);

                var errorImg = this.errorImg;
                sysImg.on('error', function () {
                    if (imgWidth) {
                        tmpImg.css('width', imgWidth);
                    }
                    if (imgHeight) {
                        tmpImg.css('height', imgHeight);
                    }
                    tmpImg.attr('src', errorImg);
                    tmpImg.attr('data-load', '2');
                }).on('load', function () {
                    if (imgWidth) {
                        tmpImg.css('width', imgWidth);
                    }
                    if (imgHeight) {
                        tmpImg.css('height', imgHeight);
                    }
                    tmpImg.attr('src', tmpImg.attr('data-src'));
                    tmpImg.attr('data-load', '1');

                    setTimeout(function () {
                        if (wrapper && wrapper[0]) {
                            tmpImg.insertBefore(wrapper);
                            wrapper.remove();
                        }
                    }, 1);
                }).attr('src', tmpImg.attr('data-src'));
            }
        },
        lazyLoad: function () {
            if (this.isError) return;

            var height = this.container.height();
            var srollHeight = this.container.scrollTop();
            var k, _imgs, tmpImg, i, len;

            for (k in this.imgContainer) {
                if (parseInt(k) < srollHeight + height) {
                    _imgs = this.imgContainer[k];
                    for (i = 0, len = _imgs.length; i < len; i++) {
                        tmpImg = $(_imgs[i]);
                        this._handleImg(tmpImg);
                    }
                    delete this.imgContainer[k];
                }
            } // for
        },
        destroy: function () {
            if (this.isError) return;
            //为container绑定事件
            this.container.off(this.lazyLoadNSName);
            $(window).off(this.lazyLoadNSName);
        }
    });

    var defaults = {
        imgs: [],
        container: $(window),
        width: 0,
        height: 0,
        isResizeListener: function () {},
        isFilterLoadError: function () {},
        loadingImg: '',
        loadingBg: '#ebebeb',
        errorImg: '',
        wrapper: '<div class="cui_lazyload_wrapper" style="text-align: center; vertical-align: middle; "></div>'
    };

    $.custom.Register('ImgLazyload', function (options) {
        return new ImgLazyload($.extend({}, options, defaults));
    });
})(jQuery);

