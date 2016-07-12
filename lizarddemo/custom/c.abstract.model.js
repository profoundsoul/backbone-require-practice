/**
 * Created by Administrator on 2016/7/12.
 */
define(['UserCore'], function(UserCore) {
    var Model = new UserCore.Class({
        __propertys__: function() {
            this.domain = "";
            this.Method = "post";
        },
        initialize: function($super, options){
//            $super(options);
        }
    });

    console.log(new Model());

    return Model;
});