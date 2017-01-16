/**
 * Created by mumu on 2017/1/16.
 */
(function($){
    var alertCommonData = {
        title: '选择确认框', message: 'xxxxxxxxxx', buttons: [{
            text: '确定',
            click: function () {}
        }]
    };
    $.custom.Dialog('alert', {
        //templateStr:'<div style="width: 500px;height: 500px;background: #008080;"></div>',
        templatePath: 'alert.html',
        isClickHide: true,
        isStartAnimation: true,
        data: alertCommonData,
        events: {
            'click .cui-btns-cancel': 'destory',
            'click .cui-btns-sure': ''
        },
        __propertys__: function () {
        },
        initialize: function () {
        }
    });
})(jQuery);
