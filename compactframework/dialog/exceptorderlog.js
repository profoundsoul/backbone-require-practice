/**
 * Created by mumu on 2017/2/5.
 */
(function($){
    var BaseView = $.custom.Dialog({
        templatePath:'exceptorderlog.html',
        events:{
            'click .icon-close': 'destory'
        },
        __propertys__:function(){
            this.tplFn = _.template(this.$el.find('#js_popwin_tpl').html());
        },
        initialize:function(){
            this.$el.html(this.tplFn({data:this.data}));
        }
    });

    var defaults={
        data:[],
        updateFn:function(){},
        callBack: function () {},
        context:null
    };

    $.custom.Dialog.register('ExceptOrderLog', function(data, defs){
        defs=defs || {};
        defs.data = data || defaults.data;
        var settings = $.extend({}, defaults, defs);
        return new BaseView(settings);
    });
})(jQuery);
