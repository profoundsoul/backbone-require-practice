/**
 * Created by lin.qiu on 2017/5/22.
 */
require.config({
    // shim:{
    //     select:{
    //         exports:'$.fn.mySelect'
    //         // init:function(){
    //         //     return $.fn.mySelect;
    //         // }
    //     }
    // },
    paths:{
        select:'../lib/jquery.search',
        list:'mylist'
    }
});

require(['Inherit', 'AbstractView', 'template', 'text!addlist.html', 'list', 'select'], function (Inherit, AbstractView, template, html, list, se) {

    console.log(se);
    var View = Inherit.Class(AbstractView, {
        el: 'body',
        events: {
            'click .js_list_box': 'showDetail',
            'click .js_list_box .js_del': 'delRow',
            'click .js_list_box .js_add': 'addItem',
        },
        __propertys__: function () {
            this.test = 1111;
        },
        initialize: function ($super) {
            $super();
            this.addList();
            this.renderListTpl();
            console.log(this.test);
            console.log(this.$el);
        },
        /**
         * 统一约定，使用underscore的template模板，尽量杜绝字符串拼接
         * template末班尽量使用script标签，type='text/template'存放html
         */
        renderListTpl: function () {
            var box = $('.js_list_box');
            var testData = {
                data: ['linq', 'profound', 'soul', 'junk', 'lugd']
            };
            // var html = template('js_list_tpl', testData);
            var html = template.render($('#js_list_tpl').html(), testData)
            box.html(html);
        },
        addList: function () {
            var result = template.render(html, {});
            console.log(result);
            document.body.appendChild($(result)[0]);
        },
        showDetail: function (e) {
            var target = $(e.currentTarget);
            alert('click!!!' + target.html());
        },
        delRow: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.currentTarget);
            this.delUserNameApi('linq', function (data) {
                target.parents('li').remove();
                alert('del success!!');
            });

        },
        addItem: function (e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            alert('addd');
        },
        /***********************util***************************
         * 此处放功能函数或其它所有的函数
         * 所有调用后台API的函数抽取出来，以Api后缀进行命名
         * */
        delUserNameApi: function (userid, fn) {
            var _this = this;
            $.post('wpos/control/deluser', {
                userid: userid,
                error: function (err) {
                    typeof fn === 'function' && fn.apply(_this, arguments);
                }
            }, function (data) {
                typeof fn === 'function' && fn.apply(_this, arguments);
            });
        },
        getDate: function () {
            return +new Date;
        }
    });
    new View();
});
