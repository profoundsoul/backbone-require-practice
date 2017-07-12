/**
 * Created by lin.qiu on 2017/5/24.
 */
define(['Zepto', 'Inherit', 'AbstractView'], function($, Inherit, AbstractView){
    return Inherit.Class(AbstractView, {
        __propertys__:function(){},
        initialize:function(){
            console.log('mylist initialize!');
        }
    });
})