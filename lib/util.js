/**
 * 手写原生js库
 * Created by mumu on 2016/6/2.
 */
(function(global, undefined){
    var _ = window.util = {};
    _.addEventListener = function(event, listener, useCapture){
        if(global.addEventListener) {
            global.addEventListener(event, listener, useCapture);
        }else if(global.attachEvent) {
            global.attachEvent('on'+event, listener);
        }
    };
}(window));
