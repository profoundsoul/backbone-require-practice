/**
 * Created by Administrator on 2016/7/17.
 */
define([], function () {
    var util = {};

    util.page = function (options) {
        var handleBindEvent = function () {
            var _evtArr = [];
            for (var k in this.events) {
                if (this.events.hasOwnProperty(k)) {
                    var key = k.replace(/(^\s*)|(\s*$)/g, '');
                    var value = this.events[k];
                    var evtObj = {};

                    if (typeof value === 'string') {
                        value = value.replace(/(^\s*)|(\s*$)/g, '');
                        if (this[value]) {
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
            var _this = this,
                delegateTarget = $(this.el);
            _evtArr.forEach(function(item){
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