/**
 * Created by mumu on 2016/7/11.
 */
define(['Core'], function (Core) {
    var View =  Core.Class({
        __propertys__: function () {
            this.events = {};
        },
        initialize: function ($super, options) {
            $super(options);
        },
        getRoot:function(){
            return 'myroot';
        }
    });
    return View;
});