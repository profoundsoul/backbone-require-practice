﻿/*!
 @Name : layDate v1.1 date widget
 @Author: sentsin
 @Date: 2014-06-25
 @QQ群：176047195
 @Site：http://sentsin.com/layui/laydate
 */
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		// var BASE_DATE_PATH='../dist/plugins/laydate/';
		// require.config({
		//     paths:{
		//         needStyle: BASE_DATE_PATH + 'need/laydate',
		//         skinStyle: BASE_DATE_PATH + 'skins/default/laydate',
		//     }
		// });
		// ['css!needStyle', 'css!skinStyle'],
		// require(['css!needStyle', 'css!skinStyle']);
		define(function () {
			return factory(global)
		})
	} else {
		global.laydate = factory(global)
		global.laydate.loadSkin()
	}
}(this, function (win) {
	var config = {
		path: "",
		skin: "default",
		format: "YYYY-MM-DD hh:mm:ss",
		min: 1,
		max: (new Date).setMonth(12 * 100),
		isv: false,
		init: true
	}

	var Dates = {}, doc = document, creat = "createElement", byid = "getElementById", tags = "getElementsByTagName"
	var as = ["laydate_box", "laydate_void", "laydate_click", "LayDateSkin", "skins/", "/laydate.css"]
	var MonthsStr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	var laydate = function (options) {
		options = options || {}
		try {
			// options.event
			if (options.eventArg) {
				as.event = options.eventArg
			} else {
				as.event = win.event ? win.event : laydate.caller.arguments[0]
			}
		} catch (e) {
		}
		Dates.run(options)
		return laydate
	}

	laydate.v = "1.1"

	Dates.getPath = (function () {
		var js = document.scripts, jsPath = js[js.length - 1].src
		return config.path ? config.path : jsPath.substring(0, jsPath.lastIndexOf("/") + 1)
	}())

	Dates.use = function (lib, id) {
		var link = doc[creat]("link")
		link.type = "text/css"
		link.rel = "stylesheet"
		link.href = Dates.getPath + lib + as[5]
		id && (link.id = id)
		doc[tags]("head")[0].appendChild(link)
		link = null
	}

	Dates.trim = function (str) {
		str = str || ""
		return str.replace(/^\s|\s$/g, "").replace(/\s+/g, " ")
	}

	Dates.digit = function (num) {
		return num < 10 ? "0" + (num | 0) : num
	}

	Dates.stopmp = function (e) {
		e = e || win.event
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true
		return this
	}

	Dates.each = function (arr, fn) {
		var i = 0, len = arr.length
		for (; i < len; i++) {
			if (fn(i, arr[i]) === false) {
				break
			}
		}
	}

	Dates.hasClass = function (elem, cls) {
		elem = elem || {}
		return new RegExp("\\b" + cls + "\\b").test(elem.className)
	}

	Dates.addClass = function (elem, cls) {
		elem = elem || {}
		Dates.hasClass(elem, cls) || (elem.className += " " + cls)
		elem.className = Dates.trim(elem.className)
		return this
	}

	Dates.removeClass = function (elem, cls) {
		elem = elem || {}
		if (Dates.hasClass(elem, cls)) {
			var reg = new RegExp("\\b" + cls + "\\b")
			elem.className = elem.className.replace(reg, "")
		}
		return this
	}

	Dates.removeCssAttr = function (elem, attr) {
		var s = elem.style
		if (s.removeProperty) {
			s.removeProperty(attr)
		} else {
			s.removeAttribute(attr)
		}
	}

	Dates.shde = function (elem, type) {
		elem.style.display = type ? "none" : "block"
	}

	Dates.query = function (node) {
		if (node && node.nodeType === 1) {
			if (node.tagName.toLowerCase() !== "input") {
				throw new Error(" the selector of element errors")
			}
			return node
		}

		var node = (Dates.trim(node)).split(" "), elemId = doc[byid](node[0].substr(1)), arr
		if (!elemId) {
			return
		} else if (!node[1]) {
			return elemId
		} else if (/^\./.test(node[1])) {
			var find, child = node[1].substr(1), exp = new RegExp("\\b" + child + "\\b")
			arr = []
			find = doc.getElementsByClassName ? elemId.getElementsByClassName(child) : elemId[tags]("*")
			Dates.each(find, function (ii, that) {
				exp.test(that.className) && arr.push(that)
			})
			return arr[0] ? arr : ""
		} else {
			arr = elemId[tags](node[1])
			return arr[0] ? elemId[tags](node[1]) : ""
		}
	}

	Dates.on = function (elem, even, fn) {
		elem.attachEvent ? elem.attachEvent("on" + even, function () {
			fn.call(elem, win.even)
		}) : elem.addEventListener(even, fn, false)
		return Dates
	}
	Dates.off = function (elem, even, fn) {
		elem.detachEvent ? elem.detachEvent("on" + even, function () {
			fn.call(elem, win.even)
		}) : elem.removeEventListener(even, fn, false)
		return Dates
	}

	Dates.stopMosup = function (evt, elem) {
		if (evt !== "mouseup") {
			Dates.off(elem, "mouseup", Dates.stopmp)
			Dates.on(elem, "mouseup", Dates.stopmp)
		}
	}

	Dates.run = function (options) {
		var S = Dates.query, elem, devt, even = as.event, target
		try {
			target = even.target || even.srcElement || {}
		} catch (e) {
			target = {}
		}
		Dates.options = options;
		elem = options.elem ? S(options.elem) : target

		as.elemv = /textarea|input/.test(elem.tagName.toLocaleLowerCase()) ? "value" : "innerHTML"
		if (("init" in options ? options.init : config.init) && (!elem[as.elemv])) elem[as.elemv] = laydate.now(null, options.format || config.format)

		if (even && target.tagName) {
			if (!elem || elem === Dates.elem) {
				return
			}
			Dates.stopMosup(even.type, elem)
			Dates.stopmp(even)
			Dates.view(elem, options)
			Dates.reshow()
		} else {
			devt = options.event || "click"
			Dates.each((elem.length | 0) > 0 ? elem : [elem], function (ii, that) {
				Dates.stopMosup(devt, that)
				Dates.on(that, devt, function (ev) {
					Dates.stopmp(ev)
					if (that !== Dates.elem) {
						Dates.view(that, options)
						Dates.reshow()
					}
				})
			})
		}
		//chgSkin(options.skin || config.skin)
	}

	Dates.scroll = function (type) {
		type = type ? "scrollLeft" : "scrollTop"
		return doc.body[type] | doc.documentElement[type]
	}

	Dates.winarea = function (type) {
		return document.documentElement[type ? "clientWidth" : "clientHeight"]
	}

	Dates.isleap = function (year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
	}

	Dates.checkVoid = function (YY, MM, DD) {
		var back = []
		YY = YY | 0
		MM = MM | 0
		DD = DD | 0
		if (YY < Dates.mins[0]) {
			back = ["y"]
		} else if (YY > Dates.maxs[0]) {
			back = ["y", 1]
		} else if (YY >= Dates.mins[0] && YY <= Dates.maxs[0]) {
			if (YY == Dates.mins[0]) {
				if (MM < Dates.mins[1]) {
					back = ["m"]
				} else if (MM == Dates.mins[1]) {
					if (DD < Dates.mins[2]) {
						back = ["d"]
					}
				}
			}
			if (YY == Dates.maxs[0]) {
				if (MM > Dates.maxs[1]) {
					back = ["m", 1]
				} else if (MM == Dates.maxs[1]) {
					if (DD > Dates.maxs[2]) {
						back = ["d", 1]
					}
				}
			}
		}
		return back
	}

	Dates.timeVoid = function (times, index) {
		if (Dates.ymd[1] + 1 == Dates.mins[1] && Dates.ymd[2] == Dates.mins[2]) {
			if (index === 0 && (times < Dates.mins[3])) {
				return 1
			} else if (index === 1 && times < Dates.mins[4]) {
				return 1
			} else if (index === 2 && times < Dates.mins[5]) {
				return 1
			}
		} else if (Dates.ymd[1] + 1 == Dates.maxs[1] && Dates.ymd[2] == Dates.maxs[2]) {
			if (index === 0 && times > Dates.maxs[3]) {
				return 1
			} else if (index === 1 && times > Dates.maxs[4]) {
				return 1
			} else if (index === 2 && times > Dates.maxs[5]) {
				return 1
			}
		}
		if (times > (index ? 59 : 23)) {
			return 1
		}
	}


	Dates.check = function () {
		var reg = Dates.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g, "\\d+\\").replace(/\\$/g, "")
		var exp = new RegExp(reg),
			value = Dates.elem[as.elemv]
		var parseDate = Dates.dateParse(value)
		if(!parseDate){
			Dates.elem[as.elemv] = ""
			Dates.msg("The date is not in format. Please choose again。")
			return 1
		}else{
			isvoid = Dates.checkVoid(parseDate.getFullYear(), parseDate.getMonth()+1, parseDate.getDate())
			if(isvoid[0]) {
				Dates.elem[as.elemv] = ""
				Dates.msg("The date is not valid, please choose again。")
				return 1
			}
			isvoid.value = Dates.elem[as.elemv].match(exp).join()
			var arr = [parseDate.getFullYear(), parseDate.getMonth()+1, parseDate.getDate(), parseDate.getHours(), parseDate.getMinutes(), parseDate.getSeconds()]
			if (arr[1] < 1) {
				arr[1] = 1
				isvoid.auto = 1
			} else if (arr[1] > 12) {
				arr[1] = 12
				isvoid.auto = 1
			} else if (arr[1].length < 2) {
				isvoid.auto = 1
			}
			if (arr[2] < 1) {
				arr[2] = 1
				isvoid.auto = 1
			} else if (arr[2] > Dates.months[(arr[1] | 0) - 1]) {
				arr[2] = 31
				isvoid.auto = 1
			} else if (arr[2].length < 2) {
				isvoid.auto = 1
			}
			if (arr.length > 3) {
				if (Dates.timeVoid(arr[3], 0)) {
					isvoid.auto = 1
				}
				if (Dates.timeVoid(arr[4], 1)) {
					isvoid.auto = 1
				}
				if (Dates.timeVoid(arr[5], 2)) {
					isvoid.auto = 1
				}
			}
			if (isvoid.auto) {
				Dates.creation([arr[0], arr[1] | 0, arr[2] | 0], 1)
			} else if (isvoid.value !== Dates.elem[as.elemv]) {
				Dates.elem[as.elemv] = isvoid.value
			}
		}
	}

	Dates.check2 = function () {
		var reg = Dates.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g, "\\d+\\").replace(/\\$/g, "")
		var exp = new RegExp(reg), value = Dates.elem[as.elemv]
		var arr = value.match(/\d+/g) || [], isvoid = Dates.checkVoid(arr[0], arr[1], arr[2])
		if (value.replace(/\s/g, "") !== "") {
			if (!exp.test(value)) {
				Dates.elem[as.elemv] = ""
				Dates.msg("The date is not in format. Please choose again。")
				return 1
			} else if (isvoid[0]) {
				Dates.elem[as.elemv] = ""
				Dates.msg("The date is not valid, please choose again。")
				return 1
			} else {
				isvoid.value = Dates.elem[as.elemv].match(exp).join()
				arr = isvoid.value.match(/\d+/g)
				if (arr[1] < 1) {
					arr[1] = 1
					isvoid.auto = 1
				} else if (arr[1] > 12) {
					arr[1] = 12
					isvoid.auto = 1
				} else if (arr[1].length < 2) {
					isvoid.auto = 1
				}
				if (arr[2] < 1) {
					arr[2] = 1
					isvoid.auto = 1
				} else if (arr[2] > Dates.months[(arr[1] | 0) - 1]) {
					arr[2] = 31
					isvoid.auto = 1
				} else if (arr[2].length < 2) {
					isvoid.auto = 1
				}
				if (arr.length > 3) {
					if (Dates.timeVoid(arr[3], 0)) {
						isvoid.auto = 1
					}
					if (Dates.timeVoid(arr[4], 1)) {
						isvoid.auto = 1
					}
					if (Dates.timeVoid(arr[5], 2)) {
						isvoid.auto = 1
					}
				}
				if (isvoid.auto) {
					Dates.creation([arr[0], arr[1] | 0, arr[2] | 0], 1)
				} else if (isvoid.value !== Dates.elem[as.elemv]) {
					Dates.elem[as.elemv] = isvoid.value
				}
			}
		}
	}

	Dates.months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	Dates.viewDate = function (Y, M, D) {
		var S = Dates.query, log = {}, De = Dates.getSystemInputDate()
		Y < (Dates.mins[0] | 0) && (Y = (Dates.mins[0] | 0))
		Y > (Dates.maxs[0] | 0) && (Y = (Dates.maxs[0] | 0))

		De.setFullYear(Y, M, D)
		log.ymd = [De.getFullYear(), De.getMonth(), De.getDate()]

		Dates.months[1] = Dates.isleap(log.ymd[0]) ? 29 : 28

		De.setFullYear(log.ymd[0], log.ymd[1], 1)
		log.FDay = De.getDay()

		log.PDay = Dates.months[M === 0 ? 11 : M - 1] - log.FDay + 1
		log.NDay = 1

		Dates.each(as.tds, function (i, elem) {
			var YY = log.ymd[0], MM = log.ymd[1] + 1, DD
			elem.className = ""
			if (i < log.FDay) {
				elem.innerHTML = DD = i + log.PDay
				Dates.addClass(elem, "laydate_nothis")
				MM === 1 && (YY -= 1)
				MM = MM === 1 ? 12 : MM - 1
			} else if (i >= log.FDay && i < log.FDay + Dates.months[log.ymd[1]]) {
				elem.innerHTML = DD = i - log.FDay + 1
				if (i - log.FDay + 1 === log.ymd[2]) {
					Dates.addClass(elem, as[2])
					log.thisDay = elem
				}
			} else {
				elem.innerHTML = DD = log.NDay++
				Dates.addClass(elem, "laydate_nothis")
				MM === 12 && (YY += 1)
				MM = MM === 12 ? 1 : MM + 1
			}

			if (Dates.checkVoid(YY, MM, DD)[0]) {
				Dates.addClass(elem, as[1])
			}

			Dates.options.festival && Dates.festival(elem, MM + "." + DD)
			elem.setAttribute("y", YY)
			elem.setAttribute("m", MM)
			elem.setAttribute("d", DD)
			YY = MM = DD = null
		})

		Dates.valid = !Dates.hasClass(log.thisDay, as[1])
		Dates.ymd = log.ymd

		as.year.value = Dates.ymd[0] + ""
		as.month.value = MonthsStr[Dates.ymd[1]]

		Dates.each(as.mms, function (i, elem) {
			var getCheck = Dates.checkVoid(Dates.ymd[0], (elem.getAttribute("m") | 0) + 1)
			if (getCheck[0] === "y" || getCheck[0] === "m") {
				Dates.addClass(elem, as[1])
			} else {
				Dates.removeClass(elem, as[1])
			}
			Dates.removeClass(elem, as[2])
			getCheck = null
		})
		Dates.addClass(as.mms[Dates.ymd[1]], as[2])

		log.times = [
			Dates.inymd[Dates.elemIndexMap.hour] | 0 || 0,
			Dates.inymd[Dates.elemIndexMap.minute] | 0 || 0,
			Dates.inymd[Dates.elemIndexMap.second] | 0 || 0
		]
		Dates.each(new Array(3), function (i) {
			Dates.hmsin[i].value = Dates.digit(Dates.timeVoid(log.times[i], i) ? Dates.mins[i + 3] | 0 : log.times[i] | 0)
		})

		Dates[Dates.valid ? "removeClass" : "addClass"](as.ok, as[1])
	}

	Dates.festival = function (td, md) {
		var str
		switch (md) {
		case "1.1":
			str = "New Year"
			break
		case "3.8":
			str = "Women's Day"
			break
		case "4.5":
			str = "Qingming Festival"
			break
		case "5.1":
			str = "May Day"
			break
		case "6.1":
			str = "Children's Day"
			break
		case "9.10":
			str = "Teachers' Day"
			break
		case "10.1":
			str = "National Day"
			break
		}
		
		str && (td.innerHTML = str)
		str = null
	}

	Dates.viewYears = function (YY) {
		var S = Dates.query, str = ""
		Dates.each(new Array(14), function (i) {
			if (i === 7) {
				str += "<li " + (parseInt(as.year.value) === YY ? "class=\"" + as[2] + "\"" : "") + " y=\"" + YY + "\">" + YY + "</li>"
			} else {
				str += "<li y=\"" + (YY - 7 + i) + "\">" + (YY - 7 + i) + "</li>"
			}
		})
		S("#laydate_ys").innerHTML = str
		Dates.each(S("#laydate_ys li"), function (i, elem) {
			if (Dates.checkVoid(elem.getAttribute("y"))[0] === "y") {
				Dates.addClass(elem, as[1])
			} else {
				Dates.on(elem, "click", function (ev) {
					Dates.stopmp(ev).reshow()
					Dates.viewDate(this.getAttribute("y") | 0, Dates.ymd[1], Dates.ymd[2])
				})
			}
		})
	}

	Dates.getEachElementIndex = function (format) {
		var components = {}
		var currentIndex = 0
		format.replace(/YYYY|MM|DD|hh|mm|ss/g, function (str, index) {
			if (str === "YYYY") {
				components["year"] = currentIndex++
			} else if (str === "MM") {
				components["month"] = currentIndex++
			} else if (str === "DD") {
				components["day"] = currentIndex++
			} else if (str === "hh") {
				components["hour"] = currentIndex++
			} else if (str === "mm") {
				components["minute"] = currentIndex++
			} else if (str === "ss") {
				components["second"] = currentIndex++
			}
			return ""
		})
		return components
	}

	Dates.initDate = function (format) {
		var S = Dates.query, log = {}, De = Dates.getSystemInputDate()
		var ymd = Dates.elem[as.elemv].match(/\d+/g) || []
		var elemIndexMap = Dates.getEachElementIndex(format)
		Dates.elemIndexMap = elemIndexMap
		if (ymd.length < 3) {
			ymd = Dates.options.start.match(/\d+/g) || []
			if (ymd.length < 3) {
				ymd = [De.getFullYear(), De.getMonth() + 1, De.getDate()]
			}
		}
		Dates.inymd = ymd
		Dates.viewDate(ymd[elemIndexMap.year], ymd[elemIndexMap.month] - 1, ymd[elemIndexMap.day])
	}

	Dates.iswrite = function () {
		var S = Dates.query, log = {
			time: S("#laydate_hms")
		}
		Dates.shde(log.time, !Dates.options.istime)
		Dates.shde(as.oclear, !("isclear" in Dates.options ? Dates.options.isclear : 1))
		Dates.shde(as.otoday, !("istoday" in Dates.options ? Dates.options.istoday : 1))
		Dates.shde(as.ok, !("issure" in Dates.options ? Dates.options.issure : 1))
	}

	Dates.orien = function (obj, pos) {
		var tops, rect = Dates.elem.getBoundingClientRect()
		obj.style.left = rect.left + (pos ? 0 : Dates.scroll(1)) + "px"
		if (rect.bottom + obj.offsetHeight / 1.5 <= Dates.winarea()) {
			tops = rect.bottom - 1
		} else {
			tops = rect.top > obj.offsetHeight / 1.5 ? rect.top - obj.offsetHeight + 1 : Dates.winarea() - obj.offsetHeight
		}
		obj.style.top = Math.max(tops + (pos ? 0 : Dates.scroll()), 1) + "px"
	}

	Dates.follow = function (obj) {
		if (Dates.options.fixed) {
			obj.style.position = "fixed"
			Dates.orien(obj, 1)
		} else {
			obj.style.position = "absolute"
			Dates.orien(obj)
		}
	}

	Dates.viewtb = (function () {
		var tr, view = [], weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		var log = {}, table = doc[creat]("table"), thead = doc[creat]("thead")
		thead.appendChild(doc[creat]("tr"))
		log.creath = function (i) {
			var th = doc[creat]("th")
			th.innerHTML = weeks[i]
			thead[tags]("tr")[0].appendChild(th)
			th = null
		}

		Dates.each(new Array(6), function (i) {
			view.push([])
			tr = table.insertRow(0)
			Dates.each(new Array(7), function (j) {
				view[i][j] = 0
				i === 0 && log.creath(j)
				tr.insertCell(j)
			})
		})

		table.insertBefore(thead, table.children[0])
		table.id = table.className = "laydate_table"
		tr = view = null

		return table.outerHTML
	}())

	Dates.view = function (elem, options) {
		var S = Dates.query, div, log = {}
		options = options || elem

		Dates.elem = elem
		Dates.options = options
		Dates.options.format || (Dates.options.format = config.format)
		Dates.options.start = Dates.options.start || ""
		Dates.mm = log.mm = [Dates.options.min || config.min, Dates.options.max || config.max]
		// Dates.mins = log.mm[0].match(/\d+/g);
		// Dates.maxs = log.mm[1].match(/\d+/g);
		Dates.mins = Dates.getDatePart(log.mm[0], config.min)
		Dates.maxs = Dates.getDatePart(log.mm[1], config.max)
		if (!Dates.box) {
			div = doc[creat]("div")
			div.id = as[0]
			div.className = as[0]
			div.style.cssText = "position: absolute;"
			div.setAttribute("name", "laydate-v" + laydate.v)

			div.innerHTML = log.html = "<div class=\"laydate_top\">"
																+ "<div class=\"laydate_ym laydate_m\" id=\"laydate_MM\">"
																+ "<a class=\"laydate_choose laydate_chprev laydate_tab\"><cite></cite></a>"
																+ "<input id=\"laydate_m\" readonly><label style=\"display:none;\"></label>"
																+ "<a class=\"laydate_choose laydate_chnext laydate_tab\"><cite></cite></a>"
																+ "<div class=\"laydate_yms\" id=\"laydate_ms\">" + function () {
					var str = ""
					Dates.each(new Array(12), function (i) {
						str += "<span m=\"" + i + "\">" + MonthsStr[i] + "</span>"
					})
					return str
				}() + "</div>"
																+ "</div>"
																+ "<div class=\"laydate_ym laydate_y\" id=\"laydate_YY\">"
																+ "<a class=\"laydate_choose laydate_chprev laydate_tab\"><cite></cite></a>"
																+ "<input id=\"laydate_y\" readonly><label style=\"display: none;\"></label>"
																+ "<a class=\"laydate_choose laydate_chnext laydate_tab\"><cite></cite></a>"
																+ "<div class=\"laydate_yms\">"
																+ "<a class=\"laydate_tab laydate_chtop\"><cite></cite></a>"
																+ "<ul id=\"laydate_ys\"></ul>"
																+ "<a class=\"laydate_tab laydate_chdown\"><cite></cite></a>"
																+ "</div>"
																+ "</div>"
																+ "</div>"

																+ Dates.viewtb

																+ "<div class=\"laydate_bottom\">"
																+ "<ul id=\"laydate_hms\">"
																+ "<li class=\"laydate_sj\">Time</li>"
																+ "<li><input readonly>:</li>"
																+ "<li><input readonly>:</li>"
																+ "<li><input readonly></li>"
																+ "</ul>"
																+ "<div class=\"laydate_time\" id=\"laydate_time\"></div>"
																+ "<div class=\"laydate_btn\">"
																+ "<a id=\"laydate_clear\">Clear</a>"
																+ "<a id=\"laydate_today\">Today</a>"
																+ "<a id=\"laydate_ok\">OK</a>"
																+ "</div>"
																+ (config.isv ? "<a href=\"http://sentsin.com/layui/laydate/\" class=\"laydate_v\" target=\"_blank\">laydate-v" + laydate.v + "</a>" : "")
																+ "</div>"
			doc.body.appendChild(div)
			Dates.box = S("#" + as[0])
			Dates.events()
			div = null
		} else {
			Dates.shde(Dates.box)
		}
		Dates.follow(Dates.box)
		options.zIndex ? Dates.box.style.zIndex = options.zIndex : Dates.removeCssAttr(Dates.box, "z-index")
		Dates.stopMosup("click", Dates.box)

		Dates.initDate(options.format)
		Dates.iswrite()
		Dates.check()
	}

	Dates.reshow = function () {
		Dates.each(Dates.query("#" + as[0] + " .laydate_show"), function (i, elem) {
			Dates.removeClass(elem, "laydate_show")
		})
		return this
	}

	Dates.close = function () {
		Dates.reshow()
		Dates.shde(Dates.query("#" + as[0]), 1)
		Dates.elem = null
	}

	Dates.parse = function (ymd, hms, format) {
		ymd = ymd.concat(hms) // [year, month, day, hour, minute, second]
		format = format || (Dates.options ? Dates.options.format : config.format)
		return format.replace(/YYYY|MM|DD|hh|mm|ss/g, function (str, index) {
			var pos = -1
			if (str === "YYYY") {
				pos = 0
			} else if (str === "MM") {
				pos = 1
			} else if (str === "DD") {
				pos = 2
			} else if (str === "hh") {
				pos = 3
			} else if (str === "mm") {
				pos = 4
			} else if (str === "ss") {
				pos = 5
			}
			return Dates.digit(ymd[pos])
		})
	}

	Dates.creation = function (ymd, hide) {
		var S = Dates.query, hms = Dates.hmsin
		var getDates = Dates.parse(ymd, [hms[0].value, hms[1].value, hms[2].value])
		Dates.elem[as.elemv] = getDates
		if (!hide) {
			Dates.close()
			typeof Dates.options.choose === "function" && Dates.options.choose(getDates)
		}
	}

	Dates.events = function () {
		var S = Dates.query, log = {
			box: "#" + as[0]
		}

		Dates.addClass(doc.body, "laydate_body")

		as.tds = S("#laydate_table td")
		as.mms = S("#laydate_ms span")
		as.year = S("#laydate_y")
		as.month = S("#laydate_m")

		Dates.each(S(log.box + " .laydate_ym"), function (i, elem) {
			Dates.on(elem, "click", function (ev) {
				Dates.stopmp(ev).reshow()
				Dates.addClass(this[tags]("div")[0], "laydate_show")
				if (elem.id === "laydate_YY") {
					log.YY = parseInt(as.year.value)
					Dates.viewYears(log.YY)
				}
			})
		})

		Dates.on(S(log.box), "click", function () {
			Dates.reshow()
		})

		log.tabYear = function (type) {
			if (type === 0) {
				Dates.ymd[0]--
			} else if (type === 1) {
				Dates.ymd[0]++
			} else if (type === 2) {
				log.YY -= 14
			} else {
				log.YY += 14
			}
			if (type < 2) {
				Dates.viewDate(Dates.ymd[0], Dates.ymd[1], Dates.ymd[2])
				Dates.reshow()
			} else {
				Dates.viewYears(log.YY)
			}
		}
		Dates.each(S("#laydate_YY .laydate_tab"), function (i, elem) {
			Dates.on(elem, "click", function (ev) {
				Dates.stopmp(ev)
				log.tabYear(i)
			})
		})

		log.tabMonth = function (type) {
			if (type) {
				Dates.ymd[1]++
				if (Dates.ymd[1] === 12) {
					Dates.ymd[0]++
					Dates.ymd[1] = 0
				}
			} else {
				Dates.ymd[1]--
				if (Dates.ymd[1] === -1) {
					Dates.ymd[0]--
					Dates.ymd[1] = 11
				}
			}
			Dates.viewDate(Dates.ymd[0], Dates.ymd[1], Dates.ymd[2])
		}
		Dates.each(S("#laydate_MM .laydate_tab"), function (i, elem) {
			Dates.on(elem, "click", function (ev) {
				Dates.stopmp(ev).reshow()
				log.tabMonth(i)
			})
		})

		Dates.each(S("#laydate_ms span"), function (i, elem) {
			Dates.on(elem, "click", function (ev) {
				Dates.stopmp(ev).reshow()
				if (!Dates.hasClass(this, as[1])) {
					Dates.viewDate(Dates.ymd[0], this.getAttribute("m") | 0, Dates.ymd[2])
				}
			})
		})

		Dates.each(S("#laydate_table td"), function (i, elem) {
			Dates.on(elem, "click", function (ev) {
				if (!Dates.hasClass(this, as[1])) {
					Dates.stopmp(ev)
					Dates.creation([this.getAttribute("y") | 0, this.getAttribute("m") | 0, this.getAttribute("d") | 0])
				}
			})
		})

		as.oclear = S("#laydate_clear")
		Dates.on(as.oclear, "click", function () {
			Dates.elem[as.elemv] = ""
			Dates.close()
		})

		as.otoday = S("#laydate_today")
		Dates.on(as.otoday, "click", function () {
			var now = Dates.getSystemInputDate()
			// 2016-09-23 18:20:54 修复选中今天choose方法得不到数据
			// Dates.creation([now.getFullYear(), now.getMonth() + 1, now.getDate()]);

			// 2016-09-26 10:49:25 修复选中今天 如果YYYY-MM-DD hh:mm:ss格式，获取当前的时分秒
			var hms = Dates.hmsin
			var date = Dates.getSystemInputDate()
			hms[0].value = date.getHours()
			hms[1].value = date.getMinutes()
			hms[2].value = date.getSeconds()
			Dates.creation([Dates.ymd[0], Dates.ymd[1] + 1, Dates.ymd[2]])
		})

		as.ok = S("#laydate_ok")
		Dates.on(as.ok, "click", function () {
			if (Dates.valid) {
				Dates.creation([Dates.ymd[0], Dates.ymd[1] + 1, Dates.ymd[2]])
			}
		})

		log.times = S("#laydate_time")
		Dates.hmsin = log.hmsin = S("#laydate_hms input")
		log.hmss = ["Hour", "Minute", "Second"]
		log.hmsarr = []

		Dates.msg = function (i, title) {
			var str = "<div class=\"laydte_hsmtex\">" + (title || "tips") + "<span>×</span></div>"
			if (typeof i === "string") {
				str += "<p>" + i + "</p>"
				Dates.shde(S("#" + as[0]))
				Dates.removeClass(log.times, "laydate_time1").addClass(log.times, "laydate_msg")
			} else {
				if (!log.hmsarr[i]) {
					str += "<div id=\"laydate_hmsno\" class=\"laydate_hmsno\">"
					Dates.each(new Array(i === 0 ? 24 : 60), function (i) {
						str += "<span>" + i + "</span>"
					})
					str += "</div>"
					log.hmsarr[i] = str
				} else {
					str = log.hmsarr[i]
				}
				Dates.removeClass(log.times, "laydate_msg")
				Dates[i === 0 ? "removeClass" : "addClass"](log.times, "laydate_time1")
			}
			Dates.addClass(log.times, "laydate_show")
			log.times.innerHTML = str
		}

		log.hmson = function (input, index) {
			var span = S("#laydate_hmsno span"), set = Dates.valid ? null : 1
			Dates.each(span, function (i, elem) {
				if (set) {
					Dates.addClass(elem, as[1])
				} else if (Dates.timeVoid(i, index)) {
					Dates.addClass(elem, as[1])
				} else {
					Dates.on(elem, "click", function (ev) {
						if (!Dates.hasClass(this, as[1])) {
							input.value = Dates.digit(this.innerHTML | 0)
						}
					})
				}
			})
			Dates.addClass(span[input.value | 0], "laydate_click")
		}

		Dates.each(log.hmsin, function (i, elem) {
			Dates.on(elem, "click", function (ev) {
				Dates.stopmp(ev).reshow()
				Dates.msg(i, log.hmss[i])
				log.hmson(this, i)
			})
		})

		Dates.on(doc, "mouseup", function () {
			var box = S("#" + as[0])
			if (box && box.style.display !== "none") {
				Dates.check() || Dates.close()
			}
		}).on(doc, "keydown", function (event) {
			event = event || win.event
			var codes = event.keyCode

			if (codes === 13 && Dates.elem) {
				Dates.creation([Dates.ymd[0], Dates.ymd[1] + 1, Dates.ymd[2]])
			}
		})
	}

	Dates.getSystemInputDate = function(){
		var timeZones = document.getElementById("timeZones")
		if(timeZones){
			var timeStr = timeZones.value
			// var serverNow = new Date(timeStr)
            var serverNow = Dates.dateParse(timeStr)
            if(!isNaN(serverNow)) {
				return serverNow
			}
		}
		return new Date()
	}

	Dates.getDatePart = function(str, defstr){
		var d = Dates.dateParse(str) || Dates.dateParse(defstr) || new Date()
		return [d.getFullYear(), Dates.digit(d.getMonth() + 1), Dates.digit(d.getDate()), d.getHours(), d.getMinutes(), d.getSeconds()].map(function(item){
			return item + ""
		})
	}

	Dates.dateParse = function (str) {
		if (!str) {
			return false
		}
		if (Object.prototype.toString.call(str) === "[object Date]") {
			return str
		}else if (typeof str === "number") {
			return new Date(str)
		} else if (typeof str === "string") {
			// str = str || '';
			// var regtime = /^(\d{4})\-?(\d{1,2})\-?(\d{1,2})/i;
			// if (str.match(regtime)) {
			//     str = str.replace(regtime, "$2/$3/$1");
			// }
			// var st = Date.parse(str);
			// return !!str ? new Date(st) : false;
			return Dates.formatToDate(str, Dates.options.format || config.format)
		}
		return false
	}

	Dates.formatToDate = function(inputDateStr, inputFormat) {
		var cur = new Date(0)
		var obj = {
			Y: cur.getFullYear(),
			M: cur.getMonth()+1,
			D: cur.getDate(),
			h: cur.getHours(),
			m: cur.getMinutes(),
			s: cur.getSeconds(),
		}

		// 预处理, 删除format 中 yMdhmsS 之外的字符, 同时删除str对应的字符
		var str = ""
		var format = ""
		for (var i=0; i<inputFormat.length; ++i) {
			if ("YMDhms".indexOf(inputFormat.charAt(i))>=0) {
				str += inputDateStr[i]
				format += inputFormat[i]
			}
		}

		var startIdx=0, endIdx
		while (startIdx < format.length) {
			var startChar = format.charAt(startIdx)
			endIdx = startIdx+1
			while (endIdx < format.length && format.charAt(endIdx) == startChar)
				++endIdx
			obj[startChar] = parseInt(str.substring(startIdx, endIdx))
			startIdx = endIdx
		}
		return new Date(obj.Y, obj.M - 1, obj.D, obj.h, obj.m, obj.s)
	}

	// Dates.init = (function () {
	//     Dates.use('need');
	//     Dates.use(as[4] + config.skin, as[3]);
	//     Dates.skinLink = Dates.query('#' + as[3]);
	// }());

	Dates.loadSkin = function () {
		Dates.use("need")
		Dates.use(as[4] + config.skin, as[3])
		Dates.skinLink = Dates.query("#" + as[3])
	}

	laydate.loadSkin = Dates.loadSkin

	laydate.reset = function () {
		(Dates.box && Dates.elem) && Dates.follow(Dates.box)
	}

	laydate.now = function (timestamp, format) {
		var De = new Date((timestamp | 0) ? function (tamp) {
			return tamp < 86400000 ? (+Dates.getSystemInputDate() + tamp * 86400000) : tamp
		}(parseInt(timestamp)) : +Dates.getSystemInputDate())
		return Dates.parse(
			[De.getFullYear(), De.getMonth() + 1, De.getDate()],
			[De.getHours(), De.getMinutes(), De.getSeconds()],
			format
		)
	}

	laydate.skin = chgSkin

	function chgSkin(lib) {
		Dates.skinLink.href = Dates.getPath + as[4] + lib + as[5]
	}

	return laydate
}))
