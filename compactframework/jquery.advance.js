/**
 * Created by mumu on 2017/1/12.
 */
(function($){
    var BaseView = $.custom.Component({
        events:{
            'click li':'handle',
            'click p':'test'
        },
        initialize:function(){},
        __propertys__:function(){},

        handle:function(){},
        test:function(){
            console.log('11111');
        }
    });

    $.fn.advanceSearch = function(attrs){
        var instance = new BaseView(this, attrs);
        return instance;
    };
})(jQuery);