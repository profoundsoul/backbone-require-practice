/**
 * Created by lin.qiu on 2017/5/22.
 */
define('AbstractView', ['Inherit'], function(Inherit) {
    return Inherit.Class({
    	__el:'body',
    	events:{},
        __propertys__: function() {
        	this.__initGlobal__();
        	this.__delegateEvent__();
            console.log('Excute View __propertys__');
        },
        initialize: function() {
            console.log('Excute View initialize');
        },
        __initGlobal__:function(){
        	var $el = $(this.$el || this.__el);
        	if($el.length<0){
				$el = $(this.__el)
        	}
        	this.$el = $el;
        },
        __delegateEvent__:function(){

        },
        addEvent: function() {

        },
        removeEvent: function() {

        },
        _bind: function(fn) {
            var _self = this;
            return function() {
                fn.apply(_self, arguments);
            }
        },
    });
});
