(function (win) {
    var requestNextAnimationFrame = function (){
        return window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame
            || window.oRequestAnimationFrame;
    }();
    var cancelNextRequestAnimationFrame = function () {
        return window.cancelAnimationFrame
            || window.webkitCancelAnimationFrame
            || window.webkitCancelAnimationFrame
            || window.mozCancelAnimationFrame
            || window.oCancelAnimationFrame
            || window.msCancelAnimationFrame;
    }();

    win.timeManager = (function () {
        var curInstance = this;
        this.push = function () {
            [].push.apply(curInstance.execQueue, arguments);
        };
        this.start = function () {
            var first = curInstance.execQueue.shift();
            curInstance.execQueue.push(first);
            curInstance._exec(first.fn);
            this.listenNextAction(first.delay);
        };
        this.listenNextAction = function(delay){
            var next = this.execQueue[0];
            this.$timeoutid = curInstance.$createTimeout(next.fn, delay);
        };
        this.stop = function () {
            if(curInstance.$timeoutid) {
                clearTimeout(curInstance.$timeoutid);
                curInstance.$timeoutid = 0;

                if(curInstance.execQueue.length) {
                    curInstance.execQueue.unshift(curInstance.execQueue.pop());
                }
            }
        };
        this.clear = function () {
            this.execQueue.length = 0;
            this.stop();
        };

        this.$createTimeout = function(fn, delay){
            return setTimeout(function(){
                curInstance.$timeoutid = 0;
                var current = curInstance.execQueue.shift();
                curInstance.execQueue.push(current);
                curInstance.listenNextAction(current.delay);
                curInstance._exec(fn);
            }, delay);
        }
        this._exec = function (fn) {
            // if(requestNextAnimationFrame) {
            //     requestNextAnimationFrame(function(){
            //         typeof fn === 'function' && fn.call(curInstance);
            //     });
            // }else{
                typeof fn === 'function' && fn.call(curInstance);
            // }
        }

        return this;
    }).call({
        execQueue: [],
        $timeoutid: 0
    })
}(this))

// timeManager.push({
//     delay:1000,
//     fn:function(){
//         console.log('first!!!');
//     }
// });
// timeManager.push({
//     delay:1000,
//     fn:function(){
//         console.log('second!!!');
//     }
// });
//
// timeManager.push({
//     delay:1000,
//     fn:function(){
//         console.log('third!!!');
//     }
// });
//
// timeManager.start();

