(function () {
    if (window.yiwillJSBridge) {
        return
    }

    var _MESSAGE_TYPE = '__msg_type'
    var _CALLBACK_ID = '__callbackid'
    var _PARAM_NAME = '__param'
    var __CALLBACK_HANDLER_QUEUE = {}
    var __JAVA_PROXY_ORIGIN_METHODS = 'yiwill'
    if (!window[__JAVA_PROXY_ORIGIN_METHODS]) {
        return
    }

    var getCallbackId = function () {
        var callBackId = 1000
        return function () {
            return callBackId++
        }
    }()

    function getAllBridgeMethods () {
        var arr = []
        for (var prop in window[__JAVA_PROXY_ORIGIN_METHODS]) {
            if (window[__JAVA_PROXY_ORIGIN_METHODS].hasOwnProperty(prop)) {
                arr.push(prop)
            }
        }
        return arr;
    }

    var allBridgeMethods = getAllBridgeMethods()
    var __yiwillJSBridge = {
        _getCallbackId: getCallbackId
    }

    function __handleMessageFromYiwill (message) {
        var msgObj = message
        switch (msgObj[_MESSAGE_TYPE]) {
            case 'callback':
                var callbackId = +msgObj[_CALLBACK_ID] || 0
                var handler = __CALLBACK_HANDLER_QUEUE[callbackId]
                if (handler && typeof handler === 'function') {
                    delete __CALLBACK_HANDLER_QUEUE[callbackId]
                    try {
                        handler.call(null, message[_PARAM_NAME])
                    } catch (e) {}
                }
                break
            case 'event':

                break
            default:
                break
        }
    }

    __yiwillJSBridge.__handleMessageFromYiwill = __handleMessageFromYiwill
    allBridgeMethods.forEach(function (item) {
        Object.defineProperty(__yiwillJSBridge, item, {
            value: function () {
                var args = Array.prototype.slice.apply(arguments)
                //获取第一个function 作为callback，存放第一位，其余参数自动按照排序
                var index = -1
                args.some(function (g, idx) {
                    if (typeof g === 'function') {
                        index = idx
                    }
                })
                var callbackHandler = args.splice(index, 1)
                var callBackId = getCallbackId()
                __CALLBACK_HANDLER_QUEUE[callBackId] = callbackHandler[0]
                args.unshift(callBackId)
                try {
                    if(window[__JAVA_PROXY_ORIGIN_METHODS] && typeof window[__JAVA_PROXY_ORIGIN_METHODS][item] === 'function') {
                        window[__JAVA_PROXY_ORIGIN_METHODS][item].apply(null, args)
                    }
                } catch (e) {}
            },
            writable: false,
            configurable: false
        })
    })
    try {
        Object.defineProperty(window, 'yiwillJSBridge', {
            value: __yiwillJSBridge,
            writable: false,
            configurable: false
        })
    } catch (e) {
        console.log('定义失败了~~~', e);
    }
})()

