/**
 * Created by lin.qiu on 2017/5/22.
 */
define("AbstractView", ["Base", "UIBase", "Zepto"], function(Base, UIBase, $) {
	var getUniqueViewId = (function() {
		return Base.generateUniqueCodeFn("_view_")
	})()
	return Base.Class(UIBase, {
		__el: "body",
		events: {},
		__propertys__: function() {
			this.__initGlobal__()
			setTimeout(this.bindFn(this.__initEvent__), 0)
			console.log("Excute View Abstract __propertys__")
		},
		initialize: function() {
			console.log("Excute View Abstract initialize")
		},
		__initGlobal__: function() {
			/**
             * 唯一的表示ID
             * 主要用于与View相关的唯一标识，如事件委托
             */
			this.__uid = getUniqueViewId()

			var $el = $(this.$el || this.__el)
			if ($el.length < 0) {
				$el = $(this.__el)
			}
			this.$el = $el
		}
	})
})
