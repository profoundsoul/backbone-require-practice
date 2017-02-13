/**
 * Created by mumu on 2017/1/11.
 */
$.custom.View({
    el: 'body',
    aaa:'11',
    events: {
        'click input[name="list"]':'genList',
        'click input[name="submit"]':'submitForm'
    },
    __propertys__: function () {
        var _el = this.$el;
        //模板函数
        this.ulTplFn = _.template(_el.find('#js_ul_tpl').html());
        this.frmTplFn = _.template(_el.find('#js_frm_tpl').html());

        this.aaa = 1;
    },
    initialize: function () {
        this.initFrmData();
        console.log(this.aaa);
    },
    initFrmData:function(){
        var mockData = {
            code:'TFH2353q260',
            name:'黄秋生'
        };
        this.$el.find('.js_frm_box').html(this.frmTplFn({data:mockData}));
    },
    genList:function(e) {
        var data =[];
        var len = Math.ceil(Math.random() * 20)
        for (var i = 0; i < len; i++) {
            data.push(Math.ceil(Math.random() * 100));
        }

        this.$el.find('.js_ul_box').html(this.ulTplFn({
            data:data
        }));
    },
    submitForm:function(e){
        console.log(e);
        console.log('submit!');

        $.get('tt.aspx?action=userlogin', {id:11,name:'都是'}).success(function(data){
            //200 成功
            console.log(data);
        }).fail(function(){
            //非200错误
            console.log('error;');
        });
    }
});

var BaseView = $.custom.Class({
    __propertys__:function(){},
    initialize:function(data){
        $.extend(this, data);
        console.log('aaaaaa');
        console.log(arguments.length);
        console.log(arguments);
    }
});

new BaseView({test:11111});
