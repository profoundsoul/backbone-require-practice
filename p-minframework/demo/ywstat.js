/**
 * Created by lin.qiu on 2017/6/7.
 */
(function (global, $) {
	//依赖$.param 进行统一处理list型参数，后续自己模拟
	var performance = global.performance
	if (!performance) {
		console.log("Browser does not support performance interface!")
		return
	}

	var getUniqueid = function () {
		var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
		return function () {
			var chars = CHARS, uuid = new Array(36), rnd = 0, r
			for (var i = 0; i < 36; i++) {
				if (i == 8 || i == 13 || i == 18 || i == 23) {
					uuid[i] = "."
				} else if (i == 14) {
					uuid[i] = "4"
				} else {
					if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0
					r = rnd & 0xf
					rnd = rnd >> 4
					uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
				}
			}
			return uuid.join("")
		}
	}()

	function autoStat() {

	}

	function send(url, data) {
		var img = new Image()
		img.onload = img.onerror = img.onabort = function () {
			img = img.onload = img.onerror = img.onabort = null
		}
		img.src = url + /\?/.test(url) ? "&" : "?" + $.param(data)
	}

	function getCookieByName(name) {
		var cookieStr = document.cookie.split(";")
		name = new RegExp("^\\s*" + name + "=\\s*(.*?)\\s*$")
		for (var i = 0; i < cookieStr.length; i++) {
			var matchlist = c[i].match(name)
			if (matchlist) {
				return decodeURIComponent(matchlist[1])
			}
		}
		return null
	}

	function setCookie(name, value, time) {
		var strsec = getSeconds(time)
		var exp = new Date()
		exp.setTime(exp.getTime() + strsec * 1)
		document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/"
	}

	function getSeconds(str) {
		str = str || "1d"
		if (/^\d$/.test(str)) {
			return +str
		}
		var num = +str.substring(1, str.length) || 1
		var units = str.substring(0, 1)
		switch (units) {
		case "s":
			num = num * 1000
			break
		case "h":
			num = num * 60 * 60 * 1000
			break
		case "d":
			num = num * 24 * 60 * 60 * 1000
			break
		default:
			break
		}
		return num
	}

	autoStat()

})(this, jQuery || Zepto || $)