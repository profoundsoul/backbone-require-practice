/**
 * Created by lin.qiu on 2017/6/1.
 */
define('Base', ['Zepto', 'Inherit', 'Utility'], function ($, Inherit, util) {
    var common = {
        extend: $.extend
    };
    return $.extend(common, Inherit, util);
});