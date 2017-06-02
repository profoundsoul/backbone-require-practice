/**
 * Created by lin.qiu on 2017/6/1.
 */
define('Base', ['Zepto', 'Inherit', 'Utility'], function ($, Inherit, Utility) {
    if(typeof console == "undefined"){
        console = {
            log: function() {},
            error: function() {}
        }
    }
    var common = {
        extend: $.extend,
        $:$
    };
    return $.extend(common, Inherit, Utility);
});