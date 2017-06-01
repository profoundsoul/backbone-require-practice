/**
 * Created by lin.qiu on 2017/5/22.
 */
define('Inherit', function () {
    var Base = function () {};
    Base.Class = function () {
        if (arguments.length < 1 || arguments.length > 2) {
            throw new Error('input invalid arguments！');
            return;
        }
        var args = [].slice.call(arguments),
            options = args.pop(),
            Base = args.pop() || null;

        if (Base !== null && !(typeof Base === 'function' && Base.prototype.initialize)) {
            throw new Error('invalid Base Classes');
            return;
        }
        var Core = function () {
            this.__propertys__.apply(this, arguments);
            this.initialize.apply(this, arguments);
        };
        Core.superClass = Base;
        Core.subClasses = [];
        if (Base) {
            var F = function () {
            };
            F.prototype = Base.prototype;
            Core.prototype = new F();
            Base.subClasses.push(Core);
        }
        Core.prototype.initialize = function () {
        };

        var matchFunctionArguments = function (str) {
            var matchArr = /\s*function\s*\(([^\{\)]*?)\)/i.exec(str);
            return matchArr.length > 1 ? matchArr[1].replace(/\s/gi, '').split(',') : [];
        };
        var findIndex = function (arr, item) {
            if (arr && arr.length > 0) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (arr[i] === item) {
                        return i;
                    }
                }
            }
            return -1;
        };
        var overloadFn = function (fn, basefn) {
            var arr = matchFunctionArguments(options[k].toString());
            var idx = findIndex(arr, '$super');
            if (idx > -1) {
                //binding first argument is the initialize of the super class instance
                return function () {
                    var args = [].slice.call(arguments);
                    args.splice(idx, 0, function (basef, _this) {
                        return function () {
                            basef.apply(_this, arguments);
                        }
                    }(basefn, this));
                    fn.apply(this, args);
                };
            }
            return fn;
        };
        for (var k in options) {
            if (k !== 'prototype' && k !== 'superClass' && k !== '__propertys__' && options.hasOwnProperty(k)) {
                if (typeof options[k] === 'function' && Base && Base.prototype.hasOwnProperty(k)) {
                    Core.prototype[k] = overloadFn(options[k], Base.prototype[k]);
                } else {
                    Core.prototype[k] = options[k];
                }
            }
        }
        Core.prototype.__propertys__ = function () {
            Base && Base.prototype.__propertys__.apply(this, arguments);
            (options.__propertys__ || function () {
            }).apply(this, arguments);
        };
        Core.prototype.constructor = Core;

        return Core;
    };

    return Base;
});
