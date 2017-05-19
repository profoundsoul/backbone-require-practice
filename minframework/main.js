/**
 * Created by lin.qiu on 2017/5/18.
 * 推荐使用此脚本内的规范，规范只是为了更好地阅读性，更好地组织代码结构
 */
(function () {
    /***********************entry************************
     * 统一约定为initialize入口
     * */
    $(document).ready(function () {
        initialize();
    });
    /*******************************init**************************
     * 统一约定主要放初始化相关函数
     * initialize必须
     * bindEvent 必须
     */
    function initialize() {
        bindEvent();
        renderListTpl();
    }
    /**
     * 统一约定，使用underscore的template模板，尽量杜绝字符串拼接
     * template末班尽量使用script标签，type='text/template'存放html
     */
    function renderListTpl() {
        var box = $('.js_list_box');
        var testData = {
            data: ['linq', 'profound', 'soul', 'junk', 'lugd']
        };
        // var html = template('js_list_tpl', testData);
        var html = template.render($('#js_list_tpl').html(), testData)
        box.html(html);
    }
    /**
     * 所有事件绑定入口
     * 事件绑定统一使用on或off处理，推荐使用事件委托
     */
    function bindEvent() {
        $('.js_list_box').on('click', 'li', showDetail);
        $('.js_list_box').on('click', '.js_del', delRow);
        $('.js_list_box').on('click', '.js_add', addItem)
    }

    /***************************event*****************************
     * 统一约定一定带有e参数，有且仅有e形参。不能当做其它功能函数使用
     */
    function showDetail(e) {
        var target = $(e.currentTarget);
        alert('click!!!' + target.html());
    }
    function delRow(e) {
        e.stopPropagation();
        e.preventDefault();
        var target = $(e.currentTarget);
        delUserNameApi('linq', function (data) {
            target.parents('li').remove();
            alert('del success!!');
        });

    }
    function addItem(e){
        e.preventDefault();
        alert('addd');
    }


    /***********************util***************************
     * 此处放功能函数或其它所有的函数
     * 所有调用后台API的函数抽取出来，以Api后缀进行命名
     * */
    function delUserNameApi(userid, fn) {
        $.post('wpos/control/deluser',{
            userid: userid,
            error:function (err) {
                typeof fn === 'function' && fn.apply(null, arguments);
            }
        },function (data) {
            typeof fn === 'function' && fn.apply(null, arguments);
        });
    }
    function getDate() {
        return +new Date;
    }
})();