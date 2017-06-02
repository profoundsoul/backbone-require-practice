/**
 * Created by lin.qiu on 2017/6/1.
 */
define('AbstractDialog', ['Base', 'Zepto', 'UIBase', 'DialogPlus'], function (Base, $, UIBase, DialogPlus) {
    var getUniqueDialogId = (function () {
        return Base.generateUniqueCodeFn("dialog_");
    })();
    var Base = new Base.Class(UIBase, {
        __propertys__: function (options) {
            this.__initGlobal__(options);
            setTimeout(this.bindFn(this.__initEvent__), 0)
        },
        initialize: function () {
        },
        __initGlobal__: function (options) {
            /**
             * 唯一的表示ID
             * 主要用于与View相关的唯一标识，如事件委托
             */
            this.__uid = getUniqueDialogId();
            options = options || {};
            if (this.title) {
                options.title = this.title;
            }
            this.dialog = DialogPlus(options);
            this.$el = this.dialog._$('content');
        }
    });
    return Base;
});