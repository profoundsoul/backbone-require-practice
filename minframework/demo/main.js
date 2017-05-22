/**
 * Created by lin.qiu on 2017/5/22.
 */
require(['Inherit', 'AbstractView', 'template', 'text!addlist.html'], function(Inherit, AbstractView, template, html) {
    
    var View = Inherit.Class(AbstractView, {
        __propertys__: function() {
            this.test = 1111;
        },
        initialize: function($super) {
            $super();
            this.addList();
            console.log(this.test);
            console.log(this.$el);
        },
        addList: function() {
            var result = template.render(html, {});
            console.log(result);
            document.body.appendChild($(result)[0]);
        }
    });
    new View();
});
