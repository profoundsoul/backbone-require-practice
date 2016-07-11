/**
 * Created by mumu on 2016/7/11.
 */
define(['Core', 'AbstractView'], function(Core, AbstractView) {
    var options = {};

    options.__propertys__=function(){
        this.layer = {};
    };

    options.initialize = function(){

    };

    options.getData=function(){
        return {};
    };

    return new Core.Class(AbstractView, options);
});
