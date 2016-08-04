/**
 * Created by mumu on 2016/8/3.
 */
(function(global){
    require(['lazyload'], function(LazyLoad) {
        var l = new LazyLoad({
            imgs:$('img[data-src]')
        });
    })

}(this));
