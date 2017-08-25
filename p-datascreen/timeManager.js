(function (win) {
    win.timeManager = (function () {
        var _ = this;
        this.push = function () {
            [].push.apply(_.execQueue, arguments);
        };
        this.start = function () {
            var first = _.execQueue.shift();
            first.fn();
            _.execQueue.push(first);

            this.listenNextAction(first.delay);
        };
        this.listenNextAction = function(delay){
            var next = this.execQueue[0];
            this.$timeoutid = _._createTimeout(next.fn, delay);

        };
        this.stop = function () {
            if(_.$timeoutid) {
                clearTimeout(_.$timeoutid);
                _.$timeoutid = 0;

                if(_.execQueue.length) {
                    _.execQueue.unshift(_.execQueue.pop());
                }
            }
        };
        this.clear = function () {
            this.execQueue.length = 0;
            this.stop();
        };

        this._createTimeout = function(fn, delay){
            return setTimeout(function(){
                _.$timeoutid = 0;
                var cur = _.execQueue.shift();
                _.execQueue.push(cur);
                _.listenNextAction(cur.delay);
                typeof fn === 'function' && fn.call(_);
            }, delay);
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

