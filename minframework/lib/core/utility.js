/**
 * Created by lin.qiu on 2017/6/1.
 */
define('Utility', [], function () {
    var obj = (function(){
        /**
         * 生成唯一表示偏函数
         * @param prefix 函数前缀，允许为数字或字符串都可以
         * @returns {Function} 自动生成唯一的函数
         */
        this.generateUniqueCodeFn = function (prefix) {
            var maxIndex = 0;
            return function () {
                return prefix + (++maxIndex);
            }
        };

        return this;
    }).call({});
    return obj;
});
