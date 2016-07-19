/**
 * Created by Administrator on 2016/7/17.
 */
define([], function () {
    var util = {};

    util.page = function (options) {
        var handleBindEvent = function () {
            var _this = this,
             _evtArr = [];

            for (var k in this.events) {
                if (this.events.hasOwnProperty(k)) {
                    var key = $.trim(k);
                    var value = this.events[k];
                    var evtObj = {};

                    if (typeof value === 'string') {
                        value = $.trim(value);
                        if (this[value] && typeof this[value] === 'function') {
                            evtObj.handle = this[value];
                        }
                    } else {
                        evtObj.handle = value;
                    }
                    if (evtObj.handle) {
                        evtObj.eventName = key.match(/\w+/)[0];
                        evtObj.delegate = key.substr(evtObj.eventName.length);
                        _evtArr.push(evtObj);
                    }
                }
            }
            var delegateTarget = $(this.el);
            $.each(_evtArr, function(idx, item){
                delegateTarget.off(item.eventName).on(item.eventName, item.delegate, function(){
                    item.handle.apply(_this, arguments);
                });
            });
        }
        var instance = (function () {
            this.el =this.el || 'body';
            this.events =this.events || {};
            this.initialize =this.initialize || function () {};
            return this;
        }).call(options);
        instance.initialize();
        handleBindEvent.call(instance);
        return instance;
    }
    return util;
});