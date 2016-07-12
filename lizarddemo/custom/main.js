/**
 * Created by mumu on 2016/7/11.
 */
require.config({
    paths: {
        "Core":"c.core.inherit",
        "UserCore":"user.core",
        "cModel":"c.abstract.model",
        "TestModel":"c.test.model",
        "AbstractView":"c.abstract.view",
        "Layer": "c.ui.layer",
        "App":'c.app'
    }
});

require(['App'], function(App) {
    var app =new App();
    app.start();
});

require(['Layer'], function(Layer){
}, function(err){
    console.log(err);
});

require(['TestModel', 'Layer'], function(TestModel, Layer){
    var t = new TestModel('myname is linq');
    var l = new Layer();
    console.log(t);
    console.log(l);
}, function(){
    console.log(arguments);
})




