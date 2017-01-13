/******************************************************
 * auth:linq
 * date:2017/01/12
 * base jquery simple component plugin
 ******************************************************/
(function ($) {
    var util = (function () {
        this.getUniqueCompId = (function () {
            var prefixName = '__component';
            var maxIndex = 0;
            return function () {
                return prefixName + (++maxIndex);
            }
        }());
        this.getTemplateByUrl = function (url, okFn, ctx, failFn) {
            $.get(url).success(function () {
                typeof okFn === 'function' && okFn.call(ctx, arguments);
            }).fail(function (res, status, xhr) {
                console.log(res, status, xhr);
                typeof failFn === 'function' && failFn.call(ctx, arguments);
            });
        };
        return this;
    }).call({});

    util.getTemplateByUrl('test.html');

    function CompClass(params) {
        //设置通用盒子
        $.extend(this, params || {});
        this.compid = util.getUniqueCompId();
        this.box = this;
    }
    CompClass.prototype = {
        templateUrl: '',         // template file path
        html: '',               // text template html
        __propertys__: function () {
        },  //component initialize propertys method
        initialize: function () {
        },     //component excute entry method
        destory: function () {
            this.box.off('.' + this.compid);
            this.box.empty();
        }
    };
    CompClass.prototype.constructor = CompClass;

    $.fn.component = function (options) {


        //recognize options available
        var instance = new CompClass(this, options);
        (function () {
            var _this = this;
            setTimeout(function () {
                _this.__propertys__.call();
                _this.initialize.call();
            });
        }).call(instance);
        return instance;
    };
}(jQuery));