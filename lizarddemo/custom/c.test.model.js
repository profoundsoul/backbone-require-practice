/**
 * Created by Administrator on 2016/7/12.
 */
define(['UserCore', 'cModel'], function(UserCore, cModel){
    var Model = new UserCore.Class(cModel, {
        __propertys__: function(){
            this.url = "restapi/api/get";
        },
        initialize: function($super, options){
//            $super(options);
        }
    });
    return Model;
});
