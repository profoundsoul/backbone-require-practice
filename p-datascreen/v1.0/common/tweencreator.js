define(['Tween', 'underscore'], function (Tween, _) {
    var requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
              window.setTimeout(callback, 16)
          }
    })()

    var nullFn = function () {}
    var isObject = function (obj) {
        return Object.prototype.toString.apply(obj) === '[object Object]'
    }
    var isFunction = function (fn) {
        return Object.prototype.toString.apply(fn) === '[object Function]'
    }

    function testTween() {
         new Tween.Tween({tweeningNumber: 1})
          .easing(Tween.Easing.Quadratic.Out)
          .to({tweeningNumber: 100}, 500)
          .onUpdate(function (item) {
              console.log(Math.floor(item.tweeningNumber))
          })
          .start()
        animateStart()

        function animateStart () {
            if (TWEEN.update()) {
                requestAnimationFrame(animateStart)
            }
        }
    }


    /**
     *
     * @param options {startValue, endValue, duration, updateFn, tweenEasing}
     * @param isThrottle
     * @param wait
     * @returns {start, empty, instance, group}
     */
    function createTweenAnimateFn (options, isThrottle, interval) {
        if (!(isObject(options)
            && isObject(options.startValue)
            && isObject(options.endValue)
            && isFunction(options.updateFn))) {
            console.warn('Invalid tween animation parameters！')
            return {
                start: nullFn,
                empty: nullFn,
                instance: null,
                group: null
            }
        }

        var group = new Tween.Group()
        var instance = new Tween.Tween(options.startValue, group)
          .easing(options.tweenEasing || Tween.Easing.Quadratic.Out)
          .to(options.endValue, options.duration)
          .onUpdate(options.updateFn)
          .start()

        var throttleAnimate = animate
        if (isThrottle && (+interval) > 16) {
            throttleAnimate = _.throttle(animate, +interval)
        }

        function animate () {
            if (group.update()) {
                requestAnimFrame(throttleAnimate)
            }
        }

        function empty () {
            group.removeAll()
        }

        return {
            start: animate,
            empty: empty,
            instance: instance,
            group: group
        }
    }

    return {
        createTweenAnimateFn: createTweenAnimateFn
    }
})