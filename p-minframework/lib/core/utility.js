/**
 * Created by lin.qiu on 2017/6/1.
 */
define("Utility", [], function () {
	var obj = (function () {
		/**
         * 生成唯一表示偏函数
         * @param prefix 函数前缀，允许为数字或字符串都可以
         * @returns {Function} 自动生成唯一的函数
         */
		this.generateUniqueCodeFn = function (prefix) {
			var maxIndex = 0
			return function () {
				return prefix + (++maxIndex)
			}
		}

		/**
         * 将字符串解析为日期
         * @param str
         * @returns {*}
         */
		this.dateParse = function (str) {
			if (typeof str === "undefined") {
				return new Date()
			}
			if (typeof str === "string") {
				str = str || ""
				var regtime = /^(\d{4})\-?(\d{1,2})\-?(\d{1,2})/i
				if (str.match(regtime)) {
					str = str.replace(regtime, "$2/$3/$1")
				}
				var st = Date.parse(str)
				return new Date(st || new Date())
			} else if (typeof str === "number") {
				return new Date(str)
			} else if (Object.prototype.toString.call(str) === "[object Date]") {
				return str
			} else {
				return new Date()
			}
		}

		/**
         * 将日期格式化为字符串
         * @param d 当前date对象
         * @param fmt 格式
         * @returns {*}
         */
		this.dateFormat = function (d, fmt) {
			d = util.dateParse(d)

			var o = {
				"M+": d.getMonth() + 1, //月份
				"d+": d.getDate(), //日
				"h+": d.getHours(), //小时
				"m+": d.getMinutes(), //分
				"s+": d.getSeconds(), //秒
				"q+": Math.floor((d.getMonth() + 3) / 3), //季度
				"S": d.getMilliseconds() //毫秒
			}
			if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(/(y+)/, (d.getFullYear() + "").substr(4 - RegExp.$1.length))
			}
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(fmt)) {
					fmt = fmt.replace(new RegExp("(" + k + ")"), (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
				}
			}
			return fmt
		}

		/**
         * 身份证验证
         * @param idCard
         * @returns {boolean}
         */
		this.isIdCard = function (idCard) {
			var num = idCard.toLowerCase().match(/\w/g)
			if (idCard.match(/^\d{17}[\dx]$/i)) {
				var sum = 0, times = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
				for (var i = 0; i < 17; i++)
					sum += parseInt(num[i], 10) * times[i]
				if ("10x98765432".charAt(sum % 11) != num[17]) {
					return false
				}
				return !!idCard.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, "$1-$2-$3")
			}
			if (idCard.match(/^\d{15}$/)) {
				return !!idCard.replace(/^\d{6}(\d{2})(\d{2})(\d{2}).+$/, "19$1-$2-$3")
			}
			return false
		}

		/**
         * 绑定fn的this值
         * @fn 函数
         * @context 上下文变量
         */
		this.bindFn = function (fn, context){
			var _self = context || this
			return function () {
                typeof fn === "function" && fn.apply(_self, arguments)
			}
		}

		return this
	}).call({})
	return obj
})
