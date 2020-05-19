(function () {
    if (window.yiwillJSBridge) {
        return
    }
    var _MESSAGE_TYPE = '__msg_type'
    var _CALLBACK_ID = '__callbackid'
    var _EVENTS_ID = '__eventid'
    var _PARAM_NAME = '__param'
    var _JAVA_PROXY_ORIGIN_METHODS = 'yiwill'
    if (!window[_JAVA_PROXY_ORIGIN_METHODS]) {
        window[_JAVA_PROXY_ORIGIN_METHODS] = {}
    }
    var _callback_handler_map = {}            //回调函数的handler列表
    var _event_hook_map = {}                  //所有网页上hook的事件列表
    var _getCallbackId = function () {
        var callBackId = 1000
        return function () {
            return callBackId++
        }
    }()

    function getAllBridgeMethods () {
        var arr = []
        if(window[_JAVA_PROXY_ORIGIN_METHODS]) {
            for (var prop in window[_JAVA_PROXY_ORIGIN_METHODS]) {
                if (window[_JAVA_PROXY_ORIGIN_METHODS].hasOwnProperty(prop)) {
                    arr.push(prop)
                }
            }
        }
        return arr
    }

    /**
     * 通过方法名字调用Android Api，不定参数
     * @param funcName string类型 第一个参数必须是方法名称
     * @param ...arg 参数列表，列表中的第一个function为callback，其余的参数按顺序即可
     * @returns {*}
     * @private
     */
    function _call () {
        var args = Array.prototype.slice.apply(arguments)
        //获取第一个参数为functionName，从第二位开始便利到的第一个function作为callback，存放参数第一位，其余参数自动按照排序
        var funcName = args.shift()
        if (typeof funcName !== 'string' || typeof window[_JAVA_PROXY_ORIGIN_METHODS][funcName] !== 'function') {
            return _setFailCommonReturn('当前版本apk不存在' + funcName + '方法，请下载最新版本apk升级！', 'apk版本过低，需要升级！')
        }
        var index = -1
        args.some(function (g, idx) {
            if (typeof g === 'function') {
                index = idx
            }
        })
        if (index > -1) {
            var callbackHandler = args.splice(index, 1)
            var callBackId = _getCallbackId()
            _callback_handler_map[callBackId] = callbackHandler[0]
            args.unshift(callBackId)
        }
        try {
            return window[_JAVA_PROXY_ORIGIN_METHODS][funcName].apply(window[_JAVA_PROXY_ORIGIN_METHODS], args)

        } catch (e) {
            return _setFailCommonReturn('调用apk：' + funcName + '方法失败！', e)
        }
    }

    function _on (event, callback) {
        if (!event || typeof event !== 'string') {
            return
        }
        if (typeof callback !== 'function') {
            return
        }
        _event_hook_map[event] = callback
    }

    function _setFailCommonReturn (msg, detail) {
        return {
            flag: false,
            msg: msg || '',
            detail: detail || ''
        }
    }

    function _emit (event, argv) {
        if (typeof event !== 'string') {
            return
        }
        if (_event_hook_map[event] !== 'function') {
            return
        }
        return _event_hook_map[event](argv)
    }

    function _log () {
        if (window.console && typeof console.log === 'function') {
            console.log.apply(console, arguments)
        }
    }

    function _logForYiwill () {
        _log.apply(null, arguments)
        //需要通知Yiwill Server
    }

    function __handleMessageFromYiwill (message) {
        var msgObj = message || {}
        switch (msgObj[_MESSAGE_TYPE]) {
            case 'callback':
                var callbackId = +msgObj[_CALLBACK_ID] || 0
                var handler = _callback_handler_map[callbackId]
                if (handler && typeof handler === 'function') {
                    delete _callback_handler_map[callbackId]
                    try {
                        return handler.call(null, msgObj[_PARAM_NAME])
                    } catch (e) {
                        _logForYiwill('调用网页事件失败！', e)
                    }
                }
                break
            case 'event':
                if (typeof msgObj[_EVENTS_ID] === 'string') {
                    if (typeof _event_hook_map[msgObj[_EVENTS_ID]] === 'function') {
                        var ret = _event_hook_map[msgObj[_EVENTS_ID]](msgObj[_PARAM_NAME])
                        return ret
                    }
                }
                break
            default:
                break
        }
    }

    var __yiwillJSBridge = {
        on: _on,
        emit: _emit,
        call: _call,
        _getCallbackId: _getCallbackId
    }

    var allBridgeMethods = getAllBridgeMethods()
    allBridgeMethods.forEach(function (item) {
        Object.defineProperty(__yiwillJSBridge, item, {
            value: function () {
                var args = Array.prototype.slice.apply(arguments)
                args.unshift(item)
                return _call.apply(null, args)
            },
            writable: false,
            configurable: false
        })
    })

    try {
        Object.defineProperty(__yiwillJSBridge, '__handleMessageFromYiwill', {
            value: __handleMessageFromYiwill,
            writable: false,
            configurable: false
        })
    } catch (e) {
        return _log('定义yiwillJSBridge.__handleMessageFromYiwill属性失败！', e)
    }

    try {
        Object.defineProperty(window, 'yiwillJSBridge', {
            value: __yiwillJSBridge,
            writable: false,
            configurable: false
        })
    } catch (e) {
        _log('定义window.yiwillJSBridge属性失败！', e)
        return
    }
})()

