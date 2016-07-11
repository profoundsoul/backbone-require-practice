/**
 * Created by mumu on 2016/7/11.
 */
require.config({
    paths: {
        "Core":"c.core.inherit",
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


