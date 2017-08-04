/**
 * Created by lin.qiu on 2017/6/1.
 */
define("UIBase", ["Base", "UIToast", "Zepto"], function (Base, UIToast, $) {
	var EVENT_SATUS = {
		New: 0,
		Binding: 1,
	}
	var SPECIAL_EVETN_REG = "^scroll|load|error|reset|paste"
	return Base.Class({
		events: {},
		__propertys__: function () {
			this.$el
			this.__uid
			this.__eventContainer = {}
		},
		initialize: function () {
		},
		__addEventToContainer: function (type, selector, handle) {
			if (!this.__checkEventArgs__(type, selector, handle)) {
				return false
			}
			if (!this.__eventContainer[type]) {
				this.__eventContainer[type] = []
			}
			var existEvent = this.__eventContainer[type].filter(function (item) {
				return item.eventSelector === selector
			})
			if (existEvent && existEvent.length) {
				this.__removeEventFromContainer(type, existEvent.eventSelector)
			}

			var specialTypeReg = new RegExp(SPECIAL_EVETN_REG, "i")
			this.__eventContainer[type].push({
				eventSelector: selector,
				handle: handle,
				isDelegated: !specialTypeReg.test(type),
				status: EVENT_SATUS.New
			})
			var length = this.__eventContainer[type].length
			this.__bindEvent(type, this.__eventContainer[type][length - 1])
		},
		__removeEventFromContainer: function (type, selector) {
			var eventsArr = this.__eventContainer[type]
			for (var i = eventsArr.length; i > -1; i--) {
				if (selector) {
					if (eventsArr[i].eventSelector === selector) {
						this.__unBindEvent(type, eventsArr[i])
						eventsArr.splice(i, 1)
						break
					}
				} else {
					this.__unBindEvent(type, eventsArr[i])
					eventsArr.splice(i, 1)
				}
			}
			//如果当前事件array为空，清除当前事件类型
			if (eventsArr.length < 1) {
				delete this.__eventContainer[type]
			}
		},
		__bindEvent: function (type, eventObj) {
			var _el = this.$el
			var eventArr = this.__eventContainer[type]
			if (eventObj.status !== EVENT_SATUS.Binding) {
				var handle = typeof eventObj.handle === "function" ? eventObj.handle : this[eventObj.handle]
				var argsArr = [type + "." + this.__uid]
				if (eventObj.eventSelector && eventObj.isDelegated) {
					argsArr.push(eventObj.eventSelector)
				}
				argsArr.push(this.bindFn(handle))
				//调整状态，并删除事件句柄以免造成内存泄漏
				eventObj.status = EVENT_SATUS.Binding
				delete eventObj.handle
				if (eventObj.isDelegated) {
					_el.on.apply(_el, argsArr)
				} else {
					var target = _el.find(eventObj.eventSelector)
					target.on.apply(target, argsArr)
				}
			}
		},
		__unBindEvent: function (type, eventObj) {
			var _el = this.$el
			var eventArr = this.__eventContainer[type]
			if (eventObj.status === EVENT_SATUS.Binding) {
				var eventtype = type + "." + this.__uid
				//移除当前事件绑定
				if (eventObj.isDelegated) {
					_el.off(eventtype, eventObj.eventSelector)
				} else {
					_el.find(eventObj.eventSelector).off(eventtype)
				}
			}
			// //从容器中移除当前事件
			// eventsArr.splice(eventsArr.indexOf(eventObj), 1);
		},
		__checkEventArgs__: function (type, selector, handle) {
			var specialTypeReg = new RegExp(SPECIAL_EVETN_REG, "i")
			if (specialTypeReg.test(type)) {
				var target = this.$el.find(selector)
				if (!(target && target.length > 0)) {
					return false
				}
			}

			if (typeof handle === "string") {
				handle = handle.trim()
				if (!this[handle] || typeof this[handle] !== "function") {
					return false
				}
			} else if (!(typeof handle === "function")) {
				return false
			}
			return true
		},
		__initEvent__: function () {
			var eventType = ""
			var eventSelector = ""
			var typeReg = new RegExp("[\\w\\.]+", "i")
			for (var key in this.events) {
				if (this.events.hasOwnProperty(key) && this.events[key]) {
					eventType = $.trim(key.match(typeReg)[0])
					eventSelector = $.trim(key.substr(eventType.length))
					this.__addEventToContainer(eventType, eventSelector, this.events[key])
				}
			}
		},
		addEvent: function (type, selector, handle) {
			this.__addEventToContainer(type, selector, handle)
		},
		removeEvent: function (type, selector) {
			this.__removeEventFromContainer(type, selector)
		},
		bindFn: Base.bindFn,
		showConfirm: UIToast.showConfirm,
		showToast: UIToast.showToast,
		showLoading: UIToast.showLoading,
		hideLoading: UIToast.hideLoading,
	})
})
