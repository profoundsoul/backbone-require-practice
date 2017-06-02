/**
 * Created by lin.qiu on 2017/6/1.
 */
define(['Zepto', 'Base', 'AbstractDialog', 'text!TestDialogHtml'], function($, Base, AbstractDialog, html){
    var View = new Base.Class(AbstractDialog, {
        title: 'Abstract 弹窗',
        events:{
            'click ul li':'detail',
            'click .js_loading':'loading'
        },
        __propertys__:function(options){
        },
        initialize:function(options){
            this.options = options;
        },
        show:function(){
            this.dialog.content(html);
            this.dialog.showModal();
        },
        detail:function(e) {
            // alert('弹出alert了！');
            this.showConfirm('aaaa', function(){
                console.log(this.title);
            });
        },
        loading:function(){
            this.showLoading();
        }
    });
    return View;
})