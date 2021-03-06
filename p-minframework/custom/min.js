/*!
 * ZUI: zui for zentao - v1.5.0 - 2017-03-02
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2017 cnezsoft.com; Licensed MIT
 */
/*! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/
!
function(t, e) {
	"use strict"
	if ("undefined" == typeof t) throw new Error("ZUI requires jQuery")
	t.zui || (t.zui = function(e) {
		t.isPlainObject(e) && t.extend(t.zui, e)
	})
	var i = 0
	t.zui({
		uuid: function() {
			return 1e3 * (new Date).getTime() + i++%1e3
		},
		callEvent: function(e, i, a) {
			if (t.isFunction(e)) {
				void 0 !== a && (e = t.proxy(e, a))
				var o = e(i)
				return i && (i.result = o),
				!(void 0 !== o && !o)
			}
			return 1
		},
		clientLang: function() {
			var i, a = e.config
			if ("undefined" != typeof a && a.clientLang && (i = a.clientLang), !i) {
				var o = t("html").attr("lang")
				i = o ? o: navigator.userLanguage || navigator.userLanguage || "zh_cn"
			}
			return i.replace("-", "_").toLowerCase()
		},
		strCode: function(t) {
			var e = 0
			if (t && t.length) for (var i = 0; i < t.length; ++i) e += i * t.charCodeAt(i)
			return e
		}
	}),
	t.fn.callEvent = function(e, i, a) {
		var o = t(this),
			n = e.indexOf(".zui."),
			s = 0 > n ? e: e.substring(0, n),
			r = t.Event(s, i)
		if (void 0 === a && n > 0 && (a = o.data(e.substring(n + 1))), a && a.options) {
			var l = a.options[s]
			t.isFunction(l) && t.zui.callEvent(l, r, a)
		}
		return o.trigger(r),
		r
	}
} (jQuery, window),
function() {
	"use strict"
	String.prototype.format || (String.prototype.format = function(t) {
		var e = this
		if (arguments.length > 0) {
			var i
			if (arguments.length <= 2 && "object" == typeof t) for (var a in t) void 0 !== t[a] && (i = new RegExp("(" + (arguments[1] ? arguments[1].replace("0", a) : "{" + a + "}") + ")", "g"), e = e.replace(i, t[a]))
			else for (var o = 0; o < arguments.length; o++) void 0 !== arguments[o] && (i = new RegExp("({[" + o + "]})", "g"), e = e.replace(i, arguments[o]))
		}
		return e
	}),
	String.prototype.isNum || (String.prototype.isNum = function(t) {
		if (null !== t) {
			var e, i
			return i = /\d*/i,
			e = t.match(i),
			e == t ? !0 : !1
		}
		return ! 1
	})
} (),
/*!
     * jQuery resize event - v1.1
     * http://benalman.com/projects/jquery-resize-plugin/
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * MIT & GPL http://benalman.com/about/license/
     */
function(t, e, i) {
	"$:nomunge"
	function a() {
		o = e[r](function() {
			n.each(function() {
				var e = t(this),
					i = e.width(),
					a = e.height(),
					o = t.data(this, d); (i !== o.w || a !== o.h) && e.trigger(l, [o.w = i, o.h = a])
			}),
			a()
		},
		s[c])
	}
	var o, n = t([]),
		s = t.resize = t.extend(t.resize, {}),
		r = "setTimeout",
		l = "resize",
		d = l + "-special-event",
		c = "delay",
		p = "throttleWindow"
	s[c] = 250,
	s[p] = !0,
	t.event.special[l] = {
		setup: function() {
			if (!s[p] && this[r]) return ! 1
			var e = t(this)
			n = n.add(e),
			t.data(this, d, {
				w: e.width(),
				h: e.height()
			}),
			1 === n.length && a()
		},
		teardown: function() {
			if (!s[p] && this[r]) return ! 1
			var e = t(this)
			n = n.not(e),
			e.removeData(d),
			n.length || clearTimeout(o)
		},
		add: function(e) {
			function a(e, a, n) {
				var s = t(this),
					r = t.data(this, d) || {}
				r.w = a !== i ? a: s.width(),
				r.h = n !== i ? n: s.height(),
				o.apply(this, arguments)
			}
			if (!s[p] && this[r]) return ! 1
			var o
			return t.isFunction(e) ? (o = e, a) : (o = e.handler, void(e.handler = a))
		}
	}
} (jQuery, this),
function() {
	"use strict"
	Date.ONEDAY_TICKS = 864e5,
	Date.prototype.format || (Date.prototype.format = function(t) {
		var e = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		/(y+)/i.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)))
		for (var i in e) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[i] : ("00" + e[i]).substr(("" + e[i]).length)))
		return t
	}),
	Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function(t) {
		return this.setTime(this.getTime() + t),
		this
	}),
	Date.prototype.addDays || (Date.prototype.addDays = function(t) {
		return this.addMilliseconds(t * Date.ONEDAY_TICKS),
		this
	}),
	Date.prototype.clone || (Date.prototype.clone = function() {
		var t = new Date
		return t.setTime(this.getTime()),
		t
	}),
	Date.isLeapYear || (Date.isLeapYear = function(t) {
		return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
	}),
	Date.getDaysInMonth || (Date.getDaysInMonth = function(t, e) {
		return [31, Date.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
	}),
	Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function() {
		return Date.isLeapYear(this.getFullYear())
	}),
	Date.prototype.clearTime || (Date.prototype.clearTime = function() {
		return this.setHours(0),
		this.setMinutes(0),
		this.setSeconds(0),
		this.setMilliseconds(0),
		this
	}),
	Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function() {
		return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
	}),
	Date.prototype.addMonths || (Date.prototype.addMonths = function(t) {
		var e = this.getDate()
		return this.setDate(1),
		this.setMonth(this.getMonth() + t),
		this.setDate(Math.min(e, this.getDaysInMonth())),
		this
	}),
	Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function(t) {
		t = t || 1
		for (var e = this.clone(); e.getDay() != t;) e.addDays( - 1)
		return e.clearTime(),
		e
	}),
	Date.prototype.isSameDay || (Date.prototype.isSameDay = function(t) {
		return t.toDateString() === this.toDateString()
	}),
	Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function(t) {
		var e = this.getLastWeekday(),
			i = e.clone().addDays(7)
		return t >= e && i > t
	}),
	Date.prototype.isSameYear || (Date.prototype.isSameYear = function(t) {
		return this.getFullYear() === t.getFullYear()
	})
} (),
function(t, e) {
	"use strict"
	var i, a, o = "localStorage",
		n = "page_" + t.location.pathname + t.location.search,
		s = function() {
			this.slience = !0
			try {
				o in t && t[o] && t[o].setItem && (this.enable = !0, i = t[o])
			} catch(s) {}
			this.enable || (a = {},
				i = {
					getLength: function() {
						var t = 0
						return e.each(a,
							function() {
								t++
							}),
						t
					},
					key: function(t) {
						var i, o = 0
						return e.each(a,
							function(e) {
								return o === t ? (i = e, !1) : void o++
							}),
						i
					},
					removeItem: function(t) {
						delete a[t]
					},
					getItem: function(t) {
						return a[t]
					},
					setItem: function(t, e) {
						a[t] = e
					},
					clear: function() {
						a = {}
					}
				}),
			this.storage = i,
			this.page = this.get(n, {})
		}
	s.prototype.pageSave = function() {
		if (e.isEmptyObject(this.page)) this.remove(n)
		else {
			var t, i = []
			for (t in this.page) {
				var a = this.page[t]
				null === a && i.push(t)
			}
			for (t = i.length - 1; t >= 0; t--) delete this.page[i[t]]
			this.set(n, this.page)
		}
	},
	s.prototype.pageRemove = function(t) {
		"undefined" != typeof this.page[t] && (this.page[t] = null, this.pageSave())
	},
	s.prototype.pageClear = function() {
		this.page = {},
		this.pageSave()
	},
	s.prototype.pageGet = function(t, e) {
		var i = this.page[t]
		return void 0 === e || null !== i && void 0 !== i ? i: e
	},
	s.prototype.pageSet = function(t, i) {
		e.isPlainObject(t) ? e.extend(!0, this.page, t) : this.page[this.serialize(t)] = i,
		this.pageSave()
	},
	s.prototype.check = function() {
		if (!this.enable && !this.slience) throw new Error("Browser not support localStorage or enable status been set true.")
		return this.enable
	},
	s.prototype.length = function() {
		return this.check() ? i.getLength ? i.getLength() : i.length: 0
	},
	s.prototype.removeItem = function(t) {
		return i.removeItem(t),
		this
	},
	s.prototype.remove = function(t) {
		return this.removeItem(t)
	},
	s.prototype.getItem = function(t) {
		return i.getItem(t)
	},
	s.prototype.get = function(t, e) {
		var i = this.deserialize(this.getItem(t))
		return "undefined" != typeof i && null !== i || "undefined" == typeof e ? i: e
	},
	s.prototype.key = function(t) {
		return i.key(t)
	},
	s.prototype.setItem = function(t, e) {
		return i.setItem(t, e),
		this
	},
	s.prototype.set = function(t, e) {
		return void 0 === e ? this.remove(t) : (this.setItem(t, this.serialize(e)), this)
	},
	s.prototype.clear = function() {
		return i.clear(),
		this
	},
	s.prototype.forEach = function(t) {
		for (var e = this.length(), a = e - 1; a >= 0; a--) {
			var o = i.key(a)
			t(o, this.get(o))
		}
		return this
	},
	s.prototype.getAll = function() {
		var t = {}
		return this.forEach(function(e, i) {
			t[e] = i
		}),
		t
	},
	s.prototype.serialize = function(t) {
		return "string" == typeof t ? t: JSON.stringify(t)
	},
	s.prototype.deserialize = function(t) {
		if ("string" == typeof t) try {
			return JSON.parse(t)
		} catch(e) {
				return t || void 0
			}
	},
	e.zui({
		store: new s
	})
} (window, jQuery),
function(t, e, i, a) {
	"use strict"
	function o(t) {
		if (t = t.toLowerCase(), t && c.test(t)) {
			var e
			if (4 === t.length) {
				var i = "#"
				for (e = 1; 4 > e; e += 1) i += t.slice(e, e + 1).concat(t.slice(e, e + 1))
				t = i
			}
			var a = []
			for (e = 1; 7 > e; e += 2) a.push(y("0x" + t.slice(e, e + 2)))
			return {
				r: a[0],
				g: a[1],
				b: a[2],
				a: 1
			}
		}
		throw new Error("Wrong hex string! (hex: " + t + ")")
	}
	function n(e) {
		return typeof e === u && ("transparent" === e.toLowerCase() || v[e.toLowerCase()] || c.test(t.trim(e.toLowerCase())))
	}
	function s(t) {
		function e(t) {
			return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
			1 > 6 * t ? r + (s - r) * t * 6 : 1 > 2 * t ? s: 2 > 3 * t ? r + (s - r) * (2 / 3 - t) * 6 : r
		}
		var i = t.h,
			a = t.s,
			o = t.l,
			n = t.a
		i = d(i) % h / h,
		a = l(d(a)),
		o = l(d(o)),
		n = l(d(n))
		var s = .5 >= o ? o * (a + 1) : o + a - o * a,
			r = 2 * o - s,
			c = {
				r: e(i + 1 / 3) * p,
				g: e(i) * p,
				b: e(i - 1 / 3) * p,
				a: n
			}
		return c
	}
	function r(t, i, a) {
		return m(a) && (a = 0),
		m(i) && (i = p),
		e.min(e.max(t, a), i)
	}
	function l(t, e) {
		return r(t, e)
	}
	function d(t) {
		return "number" == typeof t ? t: parseFloat(t)
	}
	var c = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
		p = 255,
		h = 360,
		f = 100,
		u = "string",
		g = "object",
		v = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370db",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#db7093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		},
		m = function(t) {
			return t === a
		},
		b = function(t) {
			return ! m(t)
		},
		y = function(t) {
			return parseInt(t)
		},
		w = function(t) {
			return y(l(d(t), p))
		},
		C = function(t, e, i, a) {
			var n = this
			if (n.r = n.g = n.b = 0, n.a = 1, b(a) && (n.a = l(d(a), 1)), b(t) && b(e) && b(i)) n.r = w(t),
				n.g = w(e),
				n.b = w(i)
			else if (b(t)) {
				var r = typeof t
				if (r == u) t = t.toLowerCase(),
					"transparent" === t ? n.a = 0 : v[t] ? this.rgb(o(v[t])) : n.rgb(o(t))
				else if ("number" == r && m(e)) n.r = n.g = n.b = w(t)
				else if (r == g && b(t.r)) n.r = w(t.r),
					b(t.g) && (n.g = w(t.g)),
					b(t.b) && (n.b = w(t.b)),
					b(t.a) && (n.a = l(d(t.a), 1))
				else if (r == g && b(t.h)) {
					var c = {
						h: l(d(t.h), h),
						s: 1,
						l: 1,
						a: 1
					}
					b(t.s) && (c.s = l(d(t.s), 1)),
					b(t.l) && (c.l = l(d(t.l), 1)),
					b(t.a) && (c.a = l(d(t.a), 1)),
					n.rgb(s(c))
				}
			}
		}
	C.prototype.rgb = function(t) {
		var e = this
		if (b(t)) {
			if (typeof t == g) b(t.r) && (e.r = w(t.r)),
				b(t.g) && (e.g = w(t.g)),
				b(t.b) && (e.b = w(t.b)),
				b(t.a) && (e.a = l(d(t.a), 1))
			else {
				var i = y(d(t))
				e.r = i,
				e.g = i,
				e.b = i
			}
			return e
		}
		return {
			r: e.r,
			g: e.g,
			b: e.b,
			a: e.a
		}
	},
	C.prototype.hue = function(t) {
		var e = this,
			i = e.toHsl()
		return m(t) ? i.h: (i.h = l(d(t), h), e.rgb(s(i)), e)
	},
	C.prototype.darken = function(t) {
		var e = this,
			i = e.toHsl()
		return i.l -= t / f,
		i.l = l(i.l, 1),
		e.rgb(s(i)),
		e
	},
	C.prototype.clone = function() {
		var t = this
		return new C(t.r, t.g, t.b, t.a)
	},
	C.prototype.lighten = function(t) {
		return this.darken( - t)
	},
	C.prototype.fade = function(t) {
		return this.a = l(t / f, 1),
		this
	},
	C.prototype.spin = function(t) {
		var e = this.toHsl(),
			i = (e.h + t) % h
		return e.h = 0 > i ? h + i: i,
		this.rgb(s(e))
	},
	C.prototype.toHsl = function() {
		var t, i, a = this,
			o = a.r / p,
			n = a.g / p,
			s = a.b / p,
			r = a.a,
			l = e.max(o, n, s),
			d = e.min(o, n, s),
			c = (l + d) / 2,
			f = l - d
		if (l === d) t = i = 0
		else {
			switch (i = c > .5 ? f / (2 - l - d) : f / (l + d), l) {
			case o:
				t = (n - s) / f + (s > n ? 6 : 0)
				break
			case n:
				t = (s - o) / f + 2
				break
			case s:
				t = (o - n) / f + 4
			}
			t /= 6
		}
		return {
			h: t * h,
			s: i,
			l: c,
			a: r
		}
	},
	C.prototype.luma = function() {
		var t = this.r / p,
			i = this.g / p,
			a = this.b / p
		return t = .03928 >= t ? t / 12.92 : e.pow((t + .055) / 1.055, 2.4),
		i = .03928 >= i ? i / 12.92 : e.pow((i + .055) / 1.055, 2.4),
		a = .03928 >= a ? a / 12.92 : e.pow((a + .055) / 1.055, 2.4),
		.2126 * t + .7152 * i + .0722 * a
	},
	C.prototype.saturate = function(t) {
		var e = this.toHsl()
		return e.s += t / f,
		e.s = l(e.s),
		this.rgb(s(e))
	},
	C.prototype.desaturate = function(t) {
		return this.saturate( - t)
	},
	C.prototype.contrast = function(t, e, i) {
		if (e = m(e) ? new C(p, p, p, 1) : new C(e), t = m(t) ? new C(0, 0, 0, 1) : new C(t), t.luma() > e.luma()) {
			var a = e
			e = t,
			t = a
		}
		return this.a < .5 ? t: (i = m(i) ? .43 : d(i), this.luma() < i ? e: t)
	},
	C.prototype.hexStr = function() {
		var t = this.r.toString(16),
			e = this.g.toString(16),
			i = this.b.toString(16)
		return 1 == t.length && (t = "0" + t),
		1 == e.length && (e = "0" + e),
		1 == i.length && (i = "0" + i),
		"#" + t + e + i
	},
	C.prototype.toCssStr = function() {
		var t = this
		return t.a > 0 ? t.a < 1 ? "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")": t.hexStr() : "transparent"
	},
	C.isColor = n,
	C.names = v,
	t.zui({
		Color: C
	})
} (jQuery, Math, window, void 0),
/*!
     * ZUI: Generated from less code - v1.5.0 - 2017-03-02
     * http://zui.sexy
     * GitHub: https://github.com/easysoft/zui.git
     * Copyright (c) 2017 cnezsoft.com; Licensed MIT
     */
function(t) {
	"use strict"
	var e = 0,
		i = ["primary", "red", "yellow", "green", "blue", "purple", "brown", "dark"],
		a = {
			primary: "#3280fc",
			secondary: "#145ccd",
			pale: "#ebf2f9",
			fore: "#353535",
			back: "#fff",
			grayDarker: "#222222",
			grayDark: "#333333",
			gray: "#808080",
			grayLight: "#dddddd",
			grayLighter: "#e5e5e5",
			grayPale: "#f1f1f1",
			white: "#fff",
			black: "#000",
			red: "#ea644a",
			yellow: "#f1a325",
			green: "#38b03f",
			blue: "#03b8cf",
			purple: "#8666b8",
			brown: "#bd7b46",
			greenPale: "#ddf4df",
			yellowPale: "#fff0d5",
			redPale: "#ffe5e0",
			bluePale: "#ddf3f5",
			brownPale: "#f7ebe1",
			purplePale: "#f5eeff",
			light: "#fff",
			dark: "#353535",
			success: "#38b03f",
			warning: "#f1a325",
			danger: "#ea644a",
			info: "#03b8cf",
			important: "#bd7b46",
			special: "#8666b8",
			successPale: "#ddf4df",
			warningPale: "#fff0d5",
			dangerPale: "#ffe5e0",
			infoPale: "#ddf3f5",
			importantPale: "#f7ebe1",
			specialPale: "#f5eeff"
		}
	a.get = function(o) { ("undefined" == typeof o || "random" === o) && (o = i[e++%i.length])
		var n = a[o] ? a[o] : o
		return t.zui.Color ? new t.zui.Color(n) : n
	},
	t.zui({
		colorset: a
	}),
	t.zui.Color && t.extend(t.zui.Color, a)
} (jQuery),
+
function(t) {
	"use strict"
	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			}
		for (var i in e) if (void 0 !== t.style[i]) return {
			end: e[i]
		}
		return ! 1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var i = !1,
			a = this
		t(this).one("bsTransitionEnd",
			function() {
				i = !0
			})
		var o = function() {
			i || t(a).trigger(t.support.transition.end)
		}
		return setTimeout(o, e),
		this
	},
	t(function() {
		t.support.transition = e(),
		t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function(e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
} (jQuery),
+
function(t) {
	"use strict"
	var e = function(i, a) {
		this.$element = t(i),
		this.options = t.extend({},
			e.DEFAULTS, a),
		this.isLoading = !1
	}
	e.DEFAULTS = {
		loadingText: "loading..."
	},
	e.prototype.setState = function(e) {
		var i = "disabled",
			a = this.$element,
			o = a.is("input") ? "val": "html",
			n = a.data()
		e += "Text",
		n.resetText || a.data("resetText", a[o]()),
		a[o](n[e] || this.options[e]),
		setTimeout(t.proxy(function() {
			"loadingText" == e ? (this.isLoading = !0, a.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, a.removeClass(i).removeAttr(i))
		},
		this), 0)
	},
	e.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest("[data-toggle=\"buttons\"]")
		if (e.length) {
			var i = this.$element.find("input")
			"radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
			t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
		}
		t && this.$element.toggleClass("active")
	}
	var i = t.fn.button
	t.fn.button = function(i) {
		return this.each(function() {
			var a = t(this),
				o = a.data("zui.button"),
				n = "object" == typeof i && i
			o || a.data("zui.button", o = new e(this, n)),
			"toggle" == i ? o.toggle() : i && o.setState(i)
		})
	},
	t.fn.button.Constructor = e,
	t.fn.button.noConflict = function() {
		return t.fn.button = i,
		this
	},
	t(document).on("click.zui.button.data-api", "[data-toggle^=button]",
		function(e) {
			var i = t(e.target)
			i.hasClass("btn") || (i = i.closest(".btn")),
			i.button("toggle"),
			e.preventDefault()
		})
} (jQuery),
function(t) {
	"use strict"
	var e = {
			zh_cn: "您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href=\"http://browsehappy.com/\" target=\"_blank\" class=\"alert-link\">了解更多...</a>",
			zh_tw: "您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href=\"http://browsehappy.com/\" target=\"_blank\" class=\"alert-link\">了解更多...</a>",
			en: "Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href=\"http://browsehappy.com/\" target=\"_blank\" class=\"alert-link\">Learn more...</a>"
		},
		i = function() {
			var t = this.isIE() || this.isIE10() || !1
			if (t) for (var e = 10; e > 5; e--) if (this.isIE(e)) {
				t = e
				break
			}
			this.ie = t,
			this.cssHelper()
		}
	i.prototype.cssHelper = function() {
		var e = this.ie,
			i = t("html")
		i.toggleClass("ie", e).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"),
		e && i.addClass("ie-" + e).toggleClass("gt-ie-7 gte-ie-8 support-ie", e >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", 8 > e).toggleClass("gt-ie-8 gte-ie-9", e >= 9).toggleClass("lte-ie-8 lt-ie-9", 9 > e).toggleClass("gt-ie-9 gte-ie-10", e >= 10).toggleClass("lte-ie-9 lt-ie-10", 10 > e)
	},
	i.prototype.tip = function(i) {
		var a = t("#browseHappyTip")
		a.length || (a = t("<div id=\"browseHappyTip\" class=\"alert alert-dismissable alert-danger-inverse alert-block\" style=\"position: relative; z-index: 99999\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button><div class=\"container\"><div class=\"content text-center\"></div></div></div>"), a.prependTo("body")),
		a.find(".content").html(i || this.browseHappyTip || e[t.zui.clientLang() || "zh_cn"])
	},
	i.prototype.isIE = function(t) {
		if (10 === t) return this.isIE10()
		var e = document.createElement("b")
		return e.innerHTML = "<!--[if IE " + (t || "") + "]><i></i><![endif]-->",
		1 === e.getElementsByTagName("i").length
	},
	i.prototype.isIE10 = function() {
		return ! 1
	},
	t.zui({
		browser: new i
	}),
	t(function() {
		t("body").hasClass("disabled-browser-tip") || t.zui.browser.ie && t.zui.browser.ie < 8 && t.zui.browser.tip()
	})
} (jQuery),
+
function(t) {
	"use strict"
	var e = "zui.collapse",
		i = function(e, a) {
			this.$element = t(e),
			this.options = t.extend({},
				i.DEFAULTS, a),
			this.transitioning = null,
			this.options.parent && (this.$parent = t(this.options.parent)),
			this.options.toggle && this.toggle()
		}
	i.DEFAULTS = {
		toggle: !0
	},
	i.prototype.dimension = function() {
		var t = this.$element.hasClass("width")
		return t ? "width": "height"
	},
	i.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var i = t.Event("show." + e)
			if (this.$element.trigger(i), !i.isDefaultPrevented()) {
				var a = this.$parent && this.$parent.find(".in")
				if (a && a.length) {
					var o = a.data(e)
					if (o && o.transitioning) return
					a.collapse("hide"),
					o || a.data(e, null)
				}
				var n = this.dimension()
				this.$element.removeClass("collapse").addClass("collapsing")[n](0),
				this.transitioning = 1
				var s = function() {
					this.$element.removeClass("collapsing").addClass("in")[n]("auto"),
					this.transitioning = 0,
					this.$element.trigger("shown." + e)
				}
				if (!t.support.transition) return s.call(this)
				var r = t.camelCase(["scroll", n].join("-"))
				this.$element.one(t.support.transition.end, t.proxy(s, this)).emulateTransitionEnd(350)[n](this.$element[0][r])
			}
		}
	},
	i.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var i = t.Event("hide." + e)
			if (this.$element.trigger(i), !i.isDefaultPrevented()) {
				var a = this.dimension()
				this.$element[a](this.$element[a]())[0].offsetHeight,
				this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
				this.transitioning = 1
				var o = function() {
					this.transitioning = 0,
					this.$element.trigger("hidden." + e).removeClass("collapsing").addClass("collapse")
				}
				return t.support.transition ? void this.$element[a](0).one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350) : o.call(this)
			}
		}
	},
	i.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide": "show"]()
	}
	var a = t.fn.collapse
	t.fn.collapse = function(a) {
		return this.each(function() {
			var o = t(this),
				n = o.data(e),
				s = t.extend({},
					i.DEFAULTS, o.data(), "object" == typeof a && a)
			n || o.data(e, n = new i(this, s)),
			"string" == typeof a && n[a]()
		})
	},
	t.fn.collapse.Constructor = i,
	t.fn.collapse.noConflict = function() {
		return t.fn.collapse = a,
		this
	},
	t(document).on("click." + e + ".data-api", "[data-toggle=collapse]",
		function(i) {
			var a, o = t(this),
				n = o.attr("data-target") || i.preventDefault() || (a = o.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""),
				s = t(n),
				r = s.data(e),
				l = r ? "toggle": o.data(),
				d = o.attr("data-parent"),
				c = d && t(d)
			r && r.transitioning || (c && c.find("[data-toggle=collapse][data-parent=\"" + d + "\"]").not(o).addClass("collapsed"), o[s.hasClass("in") ? "addClass": "removeClass"]("collapsed")),
			s.collapse(l)
		})
} (window.jQuery),
+
function(t) {
	"use strict"
	function e() {
		t(o).remove(),
		t(n).each(function(e) {
			var o = i(t(this))
			o.hasClass("open") && (o.trigger(e = t.Event("hide." + a)), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden." + a))
		})
	}
	function i(e) {
		var i = e.attr("data-target")
		i || (i = e.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""))
		var a
		try {
			a = i && t(i)
		} catch(o) {}
		return a && a.length ? a: e.parent()
	}
	var a = "zui.dropdown",
		o = ".dropdown-backdrop",
		n = "[data-toggle=dropdown]",
		s = function(e) {
			t(e).on("click." + a, this.toggle)
		}
	s.prototype.toggle = function(o) {
		var n = t(this)
		if (!n.is(".disabled, :disabled")) {
			var s = i(n),
				r = s.hasClass("open")
			if (e(), !r) {
				if ("ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t("<div class=\"dropdown-backdrop\"/>").insertAfter(t(this)).on("click", e), s.trigger(o = t.Event("show." + a)), o.isDefaultPrevented()) return
				s.toggleClass("open").trigger("shown." + a),
				n.focus()
			}
			return ! 1
		}
	},
	s.prototype.keydown = function(e) {
		if (/(38|40|27)/.test(e.keyCode)) {
			var a = t(this)
			if (e.preventDefault(), e.stopPropagation(), !a.is(".disabled, :disabled")) {
				var o = i(a),
					s = o.hasClass("open")
				if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(n).focus(),
					a.click()
				var r = t("[role=menu] li:not(.divider):visible a", o)
				if (r.length) {
					var l = r.index(r.filter(":focus"))
					38 == e.keyCode && l > 0 && l--,
					40 == e.keyCode && l < r.length - 1 && l++,
					~l || (l = 0),
					r.eq(l).focus()
				}
			}
		}
	}
	var r = t.fn.dropdown
	t.fn.dropdown = function(e) {
		return this.each(function() {
			var i = t(this),
				a = i.data("dropdown")
			a || i.data("dropdown", a = new s(this)),
			"string" == typeof e && a[e].call(i)
		})
	},
	t.fn.dropdown.Constructor = s,
	t.fn.dropdown.noConflict = function() {
		return t.fn.dropdown = r,
		this
	}
	var l = a + ".data-api"
	t(document).on("click." + l, e).on("click." + l, ".dropdown form",
		function(t) {
			t.stopPropagation()
		}).on("click." + l, n, s.prototype.toggle).on("keydown." + l, n + ", [role=menu]", s.prototype.keydown)
} (window.jQuery),
+
function(t) {
	"use strict"
	var e = "[data-dismiss=\"alert\"]",
		i = "zui.alert",
		a = function(i) {
			t(i).on("click", e, this.close)
		}
	a.prototype.close = function(e) {
		function a() {
			s.trigger("closed." + i).remove()
		}
		var o = t(this),
			n = o.attr("data-target")
		n || (n = o.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""))
		var s = t(n)
		e && e.preventDefault(),
		s.length || (s = o.hasClass("alert") ? o: o.parent()),
		s.trigger(e = t.Event("close." + i)),
		e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one(t.support.transition.end, a).emulateTransitionEnd(150) : a())
	}
	var o = t.fn.alert
	t.fn.alert = function(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data(i)
			n || o.data(i, n = new a(this)),
			"string" == typeof e && n[e].call(o)
		})
	},
	t.fn.alert.Constructor = a,
	t.fn.alert.noConflict = function() {
		return t.fn.alert = o,
		this
	},
	t(document).on("click." + i + ".data-api", e, a.prototype.close)
} (window.jQuery),
+
function(t) {
	"use strict"
	var e = "zui.tab",
		i = function(e) {
			this.element = t(e)
		}
	i.prototype.show = function() {
		var i = this.element,
			a = i.closest("ul:not(.dropdown-menu)"),
			o = i.attr("data-target") || i.attr("data-tab")
		if (o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !i.parent("li").hasClass("active")) {
			var n = a.find(".active:last a")[0],
				s = t.Event("show." + e, {
					relatedTarget: n
				})
			if (i.trigger(s), !s.isDefaultPrevented()) {
				var r = t(o)
				this.activate(i.parent("li"), a),
				this.activate(r, r.parent(),
					function() {
						i.trigger({
							type: "shown." + e,
							relatedTarget: n
						})
					})
			}
		}
	},
	i.prototype.activate = function(e, i, a) {
		function o() {
			n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
			e.addClass("active"),
			s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
			e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
			a && a()
		}
		var n = i.find("> .active"),
			s = a && t.support.transition && n.hasClass("fade")
		s ? n.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(),
		n.removeClass("in")
	}
	var a = t.fn.tab
	t.fn.tab = function(a) {
		return this.each(function() {
			var o = t(this),
				n = o.data(e)
			n || o.data(e, n = new i(this)),
			"string" == typeof a && n[a]()
		})
	},
	t.fn.tab.Constructor = i,
	t.fn.tab.noConflict = function() {
		return t.fn.tab = a,
		this
	},
	t(document).on("click.zui.tab.data-api", "[data-toggle=\"tab\"], [data-tab]",
		function(e) {
			e.preventDefault(),
			t(this).tab("show")
		})
} (window.jQuery),
+
function(t) {
	"use strict"
	function e(e, o, n) {
		return this.each(function() {
			var s = t(this),
				r = s.data(i),
				l = t.extend({},
					a.DEFAULTS, s.data(), "object" == typeof e && e)
			r || s.data(i, r = new a(this, l)),
			"string" == typeof e ? r[e](o, n) : l.show && r.show(o, n)
		})
	}
	var i = "zui.modal",
		a = function(e, a) {
			this.options = a,
			this.$body = t(document.body),
			this.$element = t(e),
			this.$backdrop = this.isShown = null,
			this.scrollbarWidth = 0,
			"undefined" == typeof this.options.moveable && (this.options.moveable = this.$element.hasClass("modal-moveable")),
			this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
				this.$element.trigger("loaded." + i)
			},
			this))
		}
	a.VERSION = "3.2.0",
	a.TRANSITION_DURATION = 300,
	a.BACKDROP_TRANSITION_DURATION = 150,
	a.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0,
		position: "fit"
	},
	a.prototype.toggle = function(t, e) {
		return this.isShown ? this.hide() : this.show(t, e)
	},
	a.prototype.ajustPosition = function(e) {
		if ("undefined" == typeof e && (e = this.options.position), "undefined" != typeof e) {
			var a = this.$element.find(".modal-dialog"),
				o = Math.max(0, (t(window).height() - a.outerHeight()) / 2),
				n = "fit" == e ? 2 * o / 3 : "center" == e ? o: e
			if (a.hasClass("modal-moveable")) {
				var s = null
				this.options.rememberPos && (this.options.rememberPos === !0 ? s = this.$element.data("modal-pos") : t.zui.store && (s = t.zui.store.pageGet(i + ".rememberPos"))),
				s || (s = {
					left: Math.max(0, (t(window).width() - a.outerWidth()) / 2),
					top: n
				}),
				a.css(s)
			} else {
				a.css("transform", "translate(0px," + (n-100) + "px)")
			}
		}
	},
	a.prototype.setMoveale = function() {
		t.fn.draggable || console.error("Moveable modal requires draggable.js.")
		var e = this,
			a = e.options,
			o = e.$element.find(".modal-dialog").removeClass("modal-dragged")
		o.toggleClass("modal-moveable", a.moveable),
		e.$element.data("modal-moveable-setup") || o.draggable({
			container: e.$element,
			handle: ".modal-header",
			before: function() {
				o.css("margin-top", "").addClass("modal-dragged")
			},
			finish: function(o) {
				a.rememberPos && (e.$element.data("modal-pos", o.pos), t.zui.store && a.rememberPos !== !0 && t.zui.store.pageSet(i + ".rememberPos", o.pos))
			}
		})
	},
	a.prototype.show = function(e, o) {
		var n = this,
			s = t.Event("show." + i, {
				relatedTarget: e
			})
		n.$element.trigger(s),
		n.isShown || s.isDefaultPrevented() || (n.isShown = !0, n.options.moveable && n.setMoveale(), n.checkScrollbar(), n.$body.addClass("modal-open"), n.setScrollbar(), n.escape(), n.$element.on("click.dismiss." + i, "[data-dismiss=\"modal\"]", t.proxy(n.hide, n)), n.backdrop(function() {
			var s = t.support.transition && n.$element.hasClass("fade")
			n.$element.parent().length || n.$element.appendTo(n.$body),
			n.$element.show().scrollTop(0),
			s && n.$element[0].offsetWidth,
			n.$element.addClass("in").attr("aria-hidden", !1),
			n.ajustPosition(o),
			n.enforceFocus()
			var r = t.Event("shown." + i, {
				relatedTarget: e
			})
			s ? n.$element.find(".modal-dialog").one("bsTransitionEnd",
				function() {
					n.$element.trigger("focus").trigger(r)
				}).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
		}))
	},
	a.prototype.hide = function(e) {
		e && e.preventDefault(),
		e = t.Event("hide." + i),
		this.$element.trigger(e),
		this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin." + i), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss." + i), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
	},
	a.prototype.enforceFocus = function() {
		t(document).off("focusin." + i).on("focusin." + i, t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		},
		this))
	},
	a.prototype.escape = function() {
		this.isShown && this.options.keyboard ? t(document).on("keydown.dismiss." + i, t.proxy(function(e) {
			if (27 == e.which) {
				var a = t.Event("escaping." + i),
					o = this.$element.triggerHandler(a, "esc")
				if (void 0 != o && !o) return
				this.hide()
			}
		},
		this)) : this.isShown || t(document).off("keydown.dismiss." + i)
	},
	a.prototype.hideModal = function() {
		var t = this
		this.$element.hide(),
		this.backdrop(function() {
			t.$element.trigger("hidden." + i)
		})
	},
	a.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(),
		this.$backdrop = null
	},
	a.prototype.backdrop = function(e) {
		var o = this,
			n = this.$element.hasClass("fade") ? "fade": ""
		if (this.isShown && this.options.backdrop) {
			var s = t.support.transition && n
			if (this.$backdrop = t("<div class=\"modal-backdrop " + n + "\" />").appendTo(this.$body), this.$element.on("mousedown.dismiss." + i, t.proxy(function(t) {
				t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
			},
			this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return
			s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in")
			var r = function() {
				o.removeBackdrop(),
				e && e()
			}
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : r()
		} else e && e()
	},
	a.prototype.checkScrollbar = function() {
		document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
	},
	a.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10)
		this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
	},
	a.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	},
	a.prototype.measureScrollbar = function() {
		var t = document.createElement("div")
		t.className = "modal-scrollbar-measure",
		this.$body.append(t)
		var e = t.offsetWidth - t.clientWidth
		return this.$body[0].removeChild(t),
		e
	}
	var o = t.fn.modal
	t.fn.modal = e,
	t.fn.modal.Constructor = a,
	t.fn.modal.noConflict = function() {
		return t.fn.modal = o,
		this
	},
	t(document).on("click." + i + ".data-api", "[data-toggle=\"modal\"]",
		function(a) {
			var o = t(this),
				n = o.attr("href"),
				s = null
			try {
				s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
			} catch(r) {
				return
			}
			if (s.length) {
				var l = s.data(i) ? "toggle": t.extend({
					remote: !/#/.test(n) && n
				},
				s.data(), o.data())
				o.is("a") && a.preventDefault(),
				s.one("show." + i,
					function(t) {
						t.isDefaultPrevented() || s.one("hidden." + i,
							function() {
								o.is(":visible") && o.trigger("focus")
							})
					}),
				e.call(s, l, this, o.data("position"))
			}
		})
} (jQuery),
+
function(t) {
	"use strict"
	var e = function(t, e) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
		this.init("tooltip", t, e)
	}
	e.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: "<div class=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	},
	e.prototype.init = function(e, i, a) {
		this.enabled = !0,
		this.type = e,
		this.$element = t(i),
		this.options = this.getOptions(a)
		for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
			var s = o[n]
			if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this))
			else if ("manual" != s) {
				var r = "hover" == s ? "mouseenter": "focus",
					l = "hover" == s ? "mouseleave": "blur"
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
				this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({},
			this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
	},
	e.prototype.getDefaults = function() {
		return e.DEFAULTS
	},
	e.prototype.getOptions = function(e) {
		return e = t.extend({},
			this.getDefaults(), this.$element.data(), e),
		e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}),
		e
	},
	e.prototype.getDelegateOptions = function() {
		var e = {},
			i = this.getDefaults()
		return this._options && t.each(this._options,
			function(t, a) {
				i[t] != a && (e[t] = a)
			}),
		e
	},
	e.prototype.enter = function(e) {
		var i = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type)
		return clearTimeout(i.timeout),
		i.hoverState = "in",
		i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		},
		i.options.delay.show)) : i.show()
	},
	e.prototype.leave = function(e) {
		var i = e instanceof this.constructor ? e: t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type)
		return clearTimeout(i.timeout),
		i.hoverState = "out",
		i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		},
		i.options.delay.hide)) : i.hide()
	},
	e.prototype.show = function(e) {
		var i = t.Event("show.zui." + this.type)
		if ((e || this.hasContent()) && this.enabled) {
			if (this.$element.trigger(i), i.isDefaultPrevented()) return
			var a = this.tip()
			this.setContent(e),
			this.options.animation && a.addClass("fade")
			var o = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
				n = /\s?auto?\s?/i,
				s = n.test(o)
			s && (o = o.replace(n, "") || "top"),
			a.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(o),
			this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element)
			var r = this.getPosition(),
				l = a[0].offsetWidth,
				d = a[0].offsetHeight
			if (s) {
				var c = this.$element.parent(),
					p = o,
					h = document.documentElement.scrollTop || document.body.scrollTop,
					f = "body" == this.options.container ? window.innerWidth: c.outerWidth(),
					u = "body" == this.options.container ? window.innerHeight: c.outerHeight(),
					g = "body" == this.options.container ? 0 : c.offset().left
				o = "bottom" == o && r.top + r.height + d - h > u ? "top": "top" == o && r.top - h - d < 0 ? "bottom": "right" == o && r.right + l > f ? "left": "left" == o && r.left - l < g ? "right": o,
				a.removeClass(p).addClass(o)
			}
			var v = this.getCalculatedOffset(o, r, l, d)
			this.applyPlacement(v, o),
			this.$element.trigger("shown.zui." + this.type)
		}
	},
	e.prototype.applyPlacement = function(t, e) {
		var i, a = this.tip(),
			o = a[0].offsetWidth,
			n = a[0].offsetHeight,
			s = parseInt(a.css("margin-top"), 10),
			r = parseInt(a.css("margin-left"), 10)
		isNaN(s) && (s = 0),
		isNaN(r) && (r = 0),
		t.top = t.top + s,
		t.left = t.left + r,
		a.offset(t).addClass("in")
		var l = a[0].offsetWidth,
			d = a[0].offsetHeight
		if ("top" == e && d != n && (i = !0, t.top = t.top + n - d), /bottom|top/.test(e)) {
			var c = 0
			t.left < 0 && (c = -2 * t.left, t.left = 0, a.offset(t), l = a[0].offsetWidth, d = a[0].offsetHeight),
			this.replaceArrow(c - o + l, l, "left")
		} else this.replaceArrow(d - n, d, "top")
		i && a.offset(t)
	},
	e.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i, t ? 50 * (1 - t / e) + "%": "")
	},
	e.prototype.setContent = function(t) {
		var e = this.tip(),
			i = t || this.getTitle()
		this.options.tipId && e.attr("id", this.options.tipId),
		this.options.tipClass && e.addClass(this.options.tipClass),
		e.find(".tooltip-inner")[this.options.html ? "html": "text"](i),
		e.removeClass("fade in top bottom left right")
	},
	e.prototype.hide = function() {
		function e() {
			"in" != i.hoverState && a.detach()
		}
		var i = this,
			a = this.tip(),
			o = t.Event("hide.zui." + this.type)
		return this.$element.trigger(o),
		o.isDefaultPrevented() ? void 0 : (a.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? a.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.zui." + this.type), this)
	},
	e.prototype.fixTitle = function() {
		var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	},
	e.prototype.hasContent = function() {
		return this.getTitle()
	},
	e.prototype.getPosition = function() {
		var e = this.$element[0]
		return t.extend({},
			"function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
				width: e.offsetWidth,
				height: e.offsetHeight
			},
			this.$element.offset())
	},
	e.prototype.getCalculatedOffset = function(t, e, i, a) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		}: "top" == t ? {
			top: e.top - a,
			left: e.left + e.width / 2 - i / 2
		}: "left" == t ? {
			top: e.top + e.height / 2 - a / 2,
			left: e.left - i
		}: {
			top: e.top + e.height / 2 - a / 2,
			left: e.left + e.width
		}
	},
	e.prototype.getTitle = function() {
		var t, e = this.$element,
			i = this.options
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	},
	e.prototype.tip = function() {
		return this.$tip = this.$tip || t(this.options.template)
	},
	e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	},
	e.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	},
	e.prototype.enable = function() {
		this.enabled = !0
	},
	e.prototype.disable = function() {
		this.enabled = !1
	},
	e.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	},
	e.prototype.toggle = function(e) {
		var i = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this
		i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	},
	e.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("zui." + this.type)
	}
	var i = t.fn.tooltip
	t.fn.tooltip = function(i, a) {
		return this.each(function() {
			var o = t(this),
				n = o.data("zui.tooltip"),
				s = "object" == typeof i && i
			n || o.data("zui.tooltip", n = new e(this, s)),
			"string" == typeof i && n[i](a)
		})
	},
	t.fn.tooltip.Constructor = e,
	t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = i,
		this
	}
} (window.jQuery),
+
function(t) {
	"use strict"
	var e = function(t, e) {
		this.init("popover", t, e)
	}
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js")
	e.DEFAULTS = t.extend({},
		t.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right",
			trigger: "click",
			content: "",
			template: "<div class=\"popover\"><div class=\"arrow\"></div><h3 class=\"popover-title\"></h3><div class=\"popover-content\"></div></div>"
		}),
	e.prototype = t.extend({},
		t.fn.tooltip.Constructor.prototype),
	e.prototype.constructor = e,
	e.prototype.getDefaults = function() {
		return e.DEFAULTS
	},
	e.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTarget()
		if (e) return e.find(".arrow").length < 1 && t.addClass("no-arrow"),
			void t.html(e.html())
		var i = this.getTitle(),
			a = this.getContent()
		t.find(".popover-title")[this.options.html ? "html": "text"](i),
		t.find(".popover-content")[this.options.html ? "html": "text"](a),
		t.removeClass("fade top bottom left right in"),
		this.options.tipId && t.attr("id", this.options.tipId),
		this.options.tipClass && t.addClass(this.options.tipClass),
		t.find(".popover-title").html() || t.find(".popover-title").hide()
	},
	e.prototype.hasContent = function() {
		return this.getTarget() || this.getTitle() || this.getContent()
	},
	e.prototype.getContent = function() {
		var t = this.$element,
			e = this.options
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	},
	e.prototype.getTarget = function() {
		var e = this.$element,
			i = this.options,
			a = e.attr("data-target") || ("function" == typeof i.target ? i.target.call(e[0]) : i.target)
		return a ? "$next" == a ? e.next(".popover") : t(a) : !1
	},
	e.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	},
	e.prototype.tip = function() {
		return this.$tip || (this.$tip = t(this.options.template)),
		this.$tip
	}
	var i = t.fn.popover
	t.fn.popover = function(i) {
		return this.each(function() {
			var a = t(this),
				o = a.data("zui.popover"),
				n = "object" == typeof i && i
			o || a.data("zui.popover", o = new e(this, n)),
			"string" == typeof i && o[i]()
		})
	},
	t.fn.popover.Constructor = e,
	t.fn.popover.noConflict = function() {
		return t.fn.popover = i,
		this
	}
} (window.jQuery),
function(t, e, i) {
	"use strict"
	var a = function(e, i) {
		this.$ = t(e),
		this.options = this.getOptions(i),
		this.init()
	}
	a.DEFAULTS = {
		container: "body",
		deviation: 5,
		sensorOffsetX: 0,
		sensorOffsetY: 0
	},
	a.prototype.getOptions = function(e) {
		return e = t.extend({},
			a.DEFAULTS, this.$.data(), e)
	},
	a.prototype.callEvent = function(e, i) {
		return t.zui.callEvent(this.options[e], i, this)
	},
	a.prototype.init = function() {
		this.handleMouseEvents()
	},
	a.prototype.handleMouseEvents = function() {
		var a = this.$,
			o = this,
			n = this.options,
			s = "before"
		this.$triggerTarget = n.trigger ? (t.isFunction(n.trigger) ? n.trigger(a) : a.find(n.trigger)).first() : a,
		this.$triggerTarget.on("mousedown",
			function(r) {
				function l(e) {
					var s = {
						left: e.pageX,
						top: e.pageY
					}
					if (! (i.abs(s.left - y.left) < n.deviation && i.abs(s.top - y.top) < n.deviation)) {
						if (null === u) {
							var r = g.css("position")
							"absolute" != r && "relative" != r && "fixed" != r && (p = r, g.css("position", "relative")),
							u = a.clone().removeClass("drag-from").addClass("drag-shadow").css({
								position: "absolute",
								width: a.outerWidth(),
								transition: "none"
							}).appendTo(g),
							a.addClass("dragging"),
							o.callEvent("start", {
								event: e,
								element: a
							})
						}
						var l = {
								left: s.left - C.left,
								top: s.top - C.top
							},
							d = {
								left: l.left - w.left,
								top: l.top - w.top
							}
						u.css(d),
						x.left = s.left,
						x.top = s.top
						var c = !1
						v = !1,
						n.flex || h.removeClass("drop-to")
						var b = null
						if (h.each(function() {
							var e = t(this),
								i = e.offset(),
								a = e.outerWidth(),
								o = e.outerHeight(),
								r = i.left + n.sensorOffsetX,
								l = i.top + n.sensorOffsetY
							return s.left > r && s.top > l && s.left < r + a && s.top < l + o && (b && b.removeClass("drop-to"), b = e, !n.nested) ? !1 : void 0
						}), b) {
							v = !0
							var $ = b.data("id")
							a.data("id") != $ && (m = !1),
							(null === f || f.data("id") !== $ && !m) && (c = !0),
							f = b,
							n.flex && h.removeClass("drop-to"),
							f.addClass("drop-to")
						}
						n.flex ? null !== f && f.length && (v = !0) : (a.toggleClass("drop-in", v), u.toggleClass("drop-in", v)),
						o.callEvent("drag", {
							event: e,
							isIn: v,
							target: f,
							element: a,
							isNew: c,
							selfTarget: m,
							clickOffset: C,
							offset: l,
							position: {
								left: l.left - w.left,
								top: l.top - w.top
							},
							mouseOffset: s
						}),
						e.preventDefault()
					}
				}
				function d(i) {
					if (p && g.css("position", p), null === u) return a.removeClass("drag-from"),
						t(e).unbind("mousemove", l).unbind("mouseup", d),
						void o.callEvent("always", {
							event: i,
							cancel: !0
						})
					v || (f = null)
					var n = !0,
						s = {
							left: i.pageX,
							top: i.pageY
						},
						r = {
							left: s.left - C.left,
							top: s.top - C.top
						},
						c = {
							left: s.left - x.left,
							top: s.top - x.top
						}
					x.left = s.left,
					x.top = s.top
					var b = {
						event: i,
						isIn: v,
						target: f,
						element: a,
						isNew: !m && null !== f,
						selfTarget: m,
						offset: r,
						mouseOffset: s,
						position: {
							left: r.left - w.left,
							top: r.top - w.top
						},
						lastMouseOffset: x,
						moveOffset: c
					}
					n = o.callEvent("beforeDrop", b),
					n && v && o.callEvent("drop", b),
					t(e).unbind("mousemove", l).unbind("mouseup", d),
					h.removeClass("drop-to"),
					a.removeClass("dragging").removeClass("drag-from"),
					u.remove(),
					o.callEvent("finish", b),
					o.callEvent("always", b),
					i.preventDefault()
				}
				if (t.isFunction(n[s])) {
					var c = n[s]({
						event: r,
						element: a
					})
					if (c === !1) return
				}
				var p, h = t.isFunction(n.target) ? n.target(a) : t(n.target),
					f = null,
					u = null,
					g = t(n.container).first(),
					v = !1,
					m = !0,
					b = a.offset(),
					y = {
						left: r.pageX,
						top: r.pageY
					},
					w = g.offset(),
					C = {
						left: y.left - b.left,
						top: y.top - b.top
					},
					x = {
						left: y.left,
						top: y.top
					}
				a.addClass("drag-from"),
				t(e).bind("mousemove", l).bind("mouseup", d),
				r.preventDefault()
			})
	},
	a.prototype.reset = function() {
		this.$triggerTarget.off("mousedown"),
		this.handleMouseEvents()
	},
	t.fn.droppable = function(e) {
		return this.each(function() {
			var i = t(this),
				o = i.data("zui.droppable"),
				n = "object" == typeof e && e
			o || i.data("zui.droppable", o = new a(this, n)),
			"string" == typeof e && o[e]()
		})
	},
	t.fn.droppable.Constructor = a
} (jQuery, document, Math),
+
function(t, e, i, a) {
	"use strict"
	if (!t.fn.droppable) return void console.error("Sortable requires droppable.js")
	var o = function(e, i) {
		this.$ = t(e),
		this.options = this.getOptions(i),
		this.init()
	}
	o.DEFAULTS = {
		selector: "li, div",
		dragCssClass: "invisible"
	},
	o.prototype.getOptions = function(e) {
		return e = t.extend({},
			o.DEFAULTS, this.$.data(), e)
	},
	o.prototype.init = function() {
		this.bindEventToList(this.$.children(this.options.selector))
	},
	o.prototype.reset = function() {
		var e = this,
			i = this.$.children(this.options.selector).not(".drag-shadow")
		i.each(function() {
			var a = t(this)
			return a.data("zui.droppable") ? (a.data("zui.droppable").options.target = i, void a.droppable("reset")) : (e.bindEventToList(i), !1)
		})
	},
	o.prototype.bindEventToList = function(e) {
		function i(e) {
			var i = []
			e.each(function() {
				var e = t(this).data("order")
				"number" == typeof e && i.push(e)
			}),
			i.sort(function(t, e) {
				return t - e
			})
			for (var a = e.length; i.length < a;) i.push(i.length ? i[i.length - 1] + 1 : 0)
			n && i.reverse()
			var o = 0
			e.each(function() {
				t(this).attr("data-order", i[o++])
			})
		}
		var a = this.$,
			o = this.options,
			n = o.reverse
		i(e),
		e.droppable({
			trigger: o.trigger,
			target: a.children(o.selector),
			container: a,
			always: o.always,
			flex: !0,
			before: o.before,
			start: function(e) {
				o.dragCssClass && e.element.addClass(o.dragCssClass),
				t.zui.callEvent(o.start)
			},
			drag: function(e) {
				if (a.addClass("sortable-sorting"), e.isIn) {
					var s = e.element,
						r = e.target,
						l = s.attr("data-order"),
						d = r.attr("data-order")
					if (l == d) return
					l > d ? r[n ? "after": "before"](s) : r[n ? "before": "after"](s)
					var c = a.children(o.selector).not(".drag-shadow")
					i(c),
					t.zui.callEvent(o.order, {
						list: c,
						element: s
					})
				}
			},
			finish: function(e) {
				o.dragCssClass && e.element && e.element.removeClass(o.dragCssClass),
				t.zui.callEvent(o.finish, {
					list: a.children(o.selector),
					element: e.element
				}),
				a.removeClass("sortable-sorting")
			}
		})
	},
	t.fn.sortable = function(e) {
		return this.each(function() {
			var i = t(this),
				a = i.data("zui.sortable"),
				n = "object" == typeof e && e
			a ? "object" == typeof e && a.reset() : i.data("zui.sortable", a = new o(this, n)),
			"string" == typeof e && a[e]()
		})
	},
	t.fn.sortable.Constructor = o
} (jQuery, window, document, Math),
/*! bootbox.js v4.4.0 http://bootboxjs.com/license.txt */
function(t, e) {
	"use strict"
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.bootbox = e(t.jQuery)
} (this,
	function t(e, i) {
		"use strict"
		function a(t) {
			var e = v[u.locale]
			return e ? e[t] : v.en[t]
		}
		function o(t, i, a) {
			t.stopPropagation(),
			t.preventDefault()
			var o = e.isFunction(a) && a.call(i, t) === !1
			o || i.modal("hide")
		}
		function n(t) {
			var e, i = 0
			for (e in t) i++
			return i
		}
		function s(t, i) {
			var a = 0
			e.each(t,
				function(t, e) {
					i(t, e, a++)
				})
		}
		function r(t) {
			var i, a
			if ("object" != typeof t) throw new Error("Please supply an object of options")
			if (!t.message) throw new Error("Please specify a message")
			return t = e.extend({},
				u, t),
			t.buttons || (t.buttons = {}),
			i = t.buttons,
			a = n(i),
			s(i,
				function(t, o, n) {
					if (e.isFunction(o) && (o = i[t] = {
						callback: o
					}), "object" !== e.type(o)) throw new Error("button with key " + t + " must be an object")
					o.label || (o.label = t),
					o.className || (2 === a && ("ok" === t || "confirm" === t) || 1 === a ? o.className = "btn-primary": o.className = "btn-default")
				}),
			t
		}
		function l(t, e) {
			var i = t.length,
				a = {}
			if (1 > i || i > 2) throw new Error("Invalid argument length")
			return 2 === i || "string" == typeof t[0] ? (a[e[0]] = t[0], a[e[1]] = t[1]) : a = t[0],
			a
		}
		function d(t, i, a) {
			return e.extend(!0, {},
				t, l(i, a))
		}
		function c(t, e, i, a) {
			var o = {
				className: "bootbox-" + t,
				buttons: p.apply(null, e)
			}
			return h(d(o, a, i), e)
		}
		function p() {
			for (var t = {},
				e = 0,
				i = arguments.length; i > e; e++) {
				var o = arguments[e],
					n = o.toLowerCase(),
					s = o.toUpperCase()
				t[n] = {
					label: a(s)
				}
			}
			return t
		}
		function h(t, e) {
			var a = {}
			return s(e,
				function(t, e) {
					a[e] = !0
				}),
			s(t.buttons,
				function(t) {
					if (a[t] === i) throw new Error("button key " + t + " is not allowed (options are " + e.join("\n") + ")")
				}),
			t
		}
		var f = {
				dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
				header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
				footer: "<div class='modal-footer'></div>",
				closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
				form: "<form class='bootbox-form'></form>",
				inputs: {
					text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
					textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
					email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
					select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
					checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
					date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
					time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
					number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
					password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
				}
			},
			u = {
				locale: e.zui && e.zui.clientLang ? e.zui.clientLang() : "zh_cn",
				backdrop: "static",
				animate: !0,
				className: null,
				closeButton: !0,
				show: !0,
				container: "body"
			},
			g = {}
		g.alert = function() {
			var t
			if (t = c("alert", ["ok"], ["message", "callback"], arguments), t.callback && !e.isFunction(t.callback)) throw new Error("alert requires callback property to be a function when provided")
			return t.buttons.ok.callback = t.onEscape = function() {
				return e.isFunction(t.callback) ? t.callback.call(this) : !0
			},
			g.dialog(t)
		},
		g.confirm = function() {
			var t
			if (t = c("confirm", ["confirm", "cancel"], ["message", "callback"], arguments), t.buttons.cancel.callback = t.onEscape = function() {
				return t.callback.call(this, !1)
			},
				t.buttons.confirm.callback = function() {
					return t.callback.call(this, !0)
				},
				!e.isFunction(t.callback)) throw new Error("confirm requires a callback")
			return g.dialog(t)
		},
		g.prompt = function() {
			var t, a, o, n, r, l, c
			if (n = e(f.form), a = {
				className: "bootbox-prompt",
				buttons: p("cancel", "confirm"),
				value: "",
				inputType: "text"
			},
				t = h(d(a, arguments, ["title", "callback"]), ["confirm", "cancel"]), l = t.show === i ? !0 : t.show, t.message = n, t.buttons.cancel.callback = t.onEscape = function() {
					return t.callback.call(this, null)
				},
				t.buttons.confirm.callback = function() {
					var i
					switch (t.inputType) {
					case "text":
					case "textarea":
					case "email":
					case "select":
					case "date":
					case "time":
					case "number":
					case "password":
						i = r.val()
						break
					case "checkbox":
						var a = r.find("input:checked")
						i = [],
						s(a,
							function(t, a) {
								i.push(e(a).val())
							})
					}
					return t.callback.call(this, i)
				},
				t.show = !1, !t.title) throw new Error("prompt requires a title")
			if (!e.isFunction(t.callback)) throw new Error("prompt requires a callback")
			if (!f.inputs[t.inputType]) throw new Error("invalid prompt type")
			switch (r = e(f.inputs[t.inputType]), t.inputType) {
			case "text":
			case "textarea":
			case "email":
			case "date":
			case "time":
			case "number":
			case "password":
				r.val(t.value)
				break
			case "select":
				var u = {}
				if (c = t.inputOptions || [], !e.isArray(c)) throw new Error("Please pass an array of input options")
				if (!c.length) throw new Error("prompt with select requires options")
				s(c,
					function(t, a) {
						var o = r
						if (a.value === i || a.text === i) throw new Error("given options in wrong format")
						a.group && (u[a.group] || (u[a.group] = e("<optgroup/>").attr("label", a.group)), o = u[a.group]),
						o.append("<option value='" + a.value + "'>" + a.text + "</option>")
					}),
				s(u,
					function(t, e) {
						r.append(e)
					}),
				r.val(t.value)
				break
			case "checkbox":
				var v = e.isArray(t.value) ? t.value: [t.value]
				if (c = t.inputOptions || [], !c.length) throw new Error("prompt with checkbox requires options")
				if (!c[0].value || !c[0].text) throw new Error("given options in wrong format")
				r = e("<div/>"),
				s(c,
					function(i, a) {
						var o = e(f.inputs[t.inputType])
						o.find("input").attr("value", a.value),
						o.find("label").append(a.text),
						s(v,
							function(t, e) {
								e === a.value && o.find("input").prop("checked", !0)
							}),
						r.append(o)
					})
			}
			return t.placeholder && r.attr("placeholder", t.placeholder),
			t.pattern && r.attr("pattern", t.pattern),
			t.maxlength && r.attr("maxlength", t.maxlength),
			n.append(r),
			n.on("submit",
				function(t) {
					t.preventDefault(),
					t.stopPropagation(),
					o.find(".btn-primary").click()
				}),
			o = g.dialog(t),
			o.off("shown.zui.modal"),
			o.on("shown.zui.modal",
				function() {
					r.focus()
				}),
			l === !0 && o.modal("show"),
			o
		},
		g.dialog = function(t) {
			t = r(t)
			var a = e(f.dialog),
				n = a.find(".modal-dialog"),
				l = a.find(".modal-body"),
				d = t.buttons,
				c = "",
				p = {
					onEscape: t.onEscape
				}
			if (e.fn.modal === i) throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.")
			if (s(d,
				function(t, e) {
					c += "<button data-bb-handler='" + t + "' type='button' class='btn " + e.className + "'>" + e.label + "</button>",
					p[t] = e.callback
				}), l.find(".bootbox-body").html(t.message), t.animate === !0 && a.addClass("fade"), t.className && a.addClass(t.className), "large" === t.size ? n.addClass("modal-lg") : "small" === t.size && n.addClass("modal-sm"), t.title && l.before(f.header), t.closeButton) {
				var h = e(f.closeButton)
				t.title ? a.find(".modal-header").prepend(h) : h.css("margin-top", "-10px").prependTo(l)
			}
			return t.title && a.find(".modal-title").html(t.title),
			c.length && (l.after(f.footer), a.find(".modal-footer").html(c)),
			a.on("hidden.zui.modal",
				function(t) {
					t.target === this && a.remove()
				}),
			a.on("shown.zui.modal",
				function() {
					a.find(".btn-primary:first").focus()
				}),
			"static" !== t.backdrop && a.on("click.dismiss.zui.modal",
				function(t) {
					a.children(".modal-backdrop").length && (t.currentTarget = a.children(".modal-backdrop").get(0)),
					t.target === t.currentTarget && a.trigger("escape.close.bb")
				}),
			a.on("escape.close.bb",
				function(t) {
					p.onEscape && o(t, a, p.onEscape)
				}),
			a.on("click", ".modal-footer button",
				function(t) {
					var i = e(this).data("bb-handler")
					o(t, a, p[i])
				}),
			a.on("click", ".bootbox-close-button",
				function(t) {
					o(t, a, p.onEscape)
				}),
			a.on("keyup",
				function(t) {
					27 === t.which && a.trigger("escape.close.bb")
				}),
			e(t.container).append(a),
			a.modal({
				backdrop: t.backdrop ? "static": !1,
				keyboard: !1,
				show: !1
			}),
			t.show && a.modal("show"),
			a
		},
		g.setDefaults = function() {
			var t = {}
			2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0],
			e.extend(u, t)
		},
		g.hideAll = function() {
			return e(".bootbox").modal("hide"),
			g
		}
		var v = {
			en: {
				OK: "OK",
				CANCEL: "Cancel",
				CONFIRM: "OK"
			},
			zh_cn: {
				OK: "确认",
				CANCEL: "取消",
				CONFIRM: "确认"
			},
			zh_tw: {
				OK: "確認",
				CANCEL: "取消",
				CONFIRM: "確認"
			}
		}
		return g.addLocale = function(t, i) {
			return e.each(["OK", "CANCEL", "CONFIRM"],
				function(t, e) {
					if (!i[e]) throw new Error("Please supply a translation for '" + e + "'")
				}),
			v[t] = {
				OK: i.OK,
				CANCEL: i.CANCEL,
				CONFIRM: i.CONFIRM
			},
			g
		},
		g.removeLocale = function(t) {
			return delete v[t],
			g
		},
		g.setLocale = function(t) {
			return g.setDefaults("locale", t)
		},
		g.init = function(i) {
			return t(i || e)
		},
		g
	}),
function(t) {
	"use strict"
	var e = function(e, i) {
		this.$ = t(e),
		this.options = this.getOptions(i),
		this.init()
	}
	e.DEFAULTS = {
		container: "body",
		move: !0
	},
	e.prototype.getOptions = function(i) {
		return i = t.extend({},
			e.DEFAULTS, this.$.data(), i)
	},
	e.prototype.init = function() {
		this.handleMouseEvents()
	},
	e.prototype.handleMouseEvents = function() {
		var e, i, a, o, n, s = this.$,
			r = "before",
			l = "drag",
			d = "finish",
			c = this.options,
			p = function(l) {
				if (t.isFunction(c[r])) {
					var d = c[r]({
						event: l,
						element: s
					})
					if (d === !1) return
				}
				var p = t(c.container),
					u = s.offset()
				i = p.offset(),
				e = {
					x: l.pageX,
					y: l.pageY
				},
				a = {
					x: l.pageX - u.left + i.left,
					y: l.pageY - u.top + i.top
				},
				o = t.extend({},
					e),
				n = !1,
				s.addClass("drag-ready"),
				t(document).bind("mousemove", h).bind("mouseup", f),
				l.preventDefault(),
				c.stopPropagation && l.stopPropagation()
			},
			h = function(i) {
				n = !0
				var r = i.pageX,
					d = i.pageY,
					p = {
						left: r - a.x,
						top: d - a.y
					}
				s.removeClass("drag-ready").addClass("dragging"),
				c.move && s.css(p),
				t.isFunction(c[l]) && c[l]({
					event: i,
					element: s,
					startOffset: a,
					pos: p,
					offset: {
						x: r - e.x,
						y: d - e.y
					},
					smallOffset: {
						x: r - o.x,
						y: d - o.y
					}
				}),
				o.x = r,
				o.y = d,
				c.stopPropagation && i.stopPropagation()
			},
			f = function(i) {
				if (t(document).unbind("mousemove", h).unbind("mouseup", f), !n) return void s.removeClass("drag-ready")
				var r = {
					left: i.pageX - a.x,
					top: i.pageY - a.y
				}
				s.removeClass("drag-ready").removeClass("dragging"),
				c.move && s.css(r),
				t.isFunction(c[d]) && c[d]({
					event: i,
					element: s,
					startOffset: a,
					pos: r,
					offset: {
						x: i.pageX - e.x,
						y: i.pageY - e.y
					},
					smallOffset: {
						x: i.pageX - o.x,
						y: i.pageY - o.y
					}
				}),
				i.preventDefault(),
				c.stopPropagation && i.stopPropagation()
			}
		c.handle ? s.on("mousedown", c.handle, p) : s.on("mousedown", p)
	},
	t.fn.draggable = function(i) {
		return this.each(function() {
			var a = t(this),
				o = a.data("zui.draggable"),
				n = "object" == typeof i && i
			o || a.data("zui.draggable", o = new e(this, n)),
			"string" == typeof i && o[i]()
		})
	},
	t.fn.draggable.Constructor = e
} (jQuery),
function(t) {
	"use strict"
	function e(e, i) {
		if (e === !1) return e
		if (!e) return i
		e === !0 ? e = {
			add: !0,
			"delete": !0,
			edit: !0,
			sort: !0
		}: "string" == typeof e && (e = e.split(","))
		var a
		return t.isArray(e) && (a = {},
			t.each(e,
				function(e, i) {
					t.isPlainObject(i) ? a[i.action] = i: a[i] = !0
				}), e = a),
		t.isPlainObject(e) && (a = {},
			t.each(e,
				function(e, i) {
					i ? a[e] = t.extend({
						type: e
					},
					s[e], t.isPlainObject(i) ? i: null) : a[e] = !1
				}), e = a),
		i ? t.extend(!0, {},
			i, e) : e
	}
	function i(e, i, a) {
		return i = i || e.type,
		t(a || e.template).addClass("tree-action").attr(t.extend({
			"data-type": i,
			title: e.title || ""
		},
		e.attr)).data("action", e)
	}
	var a = "zui.tree",
		o = 0,
		n = function(e, i) {
			this.name = a,
			this.$ = t(e),
			this.getOptions(i),
			this._init()
		},
		s = {
			sort: {
				template: "<a class=\"sort-handler\" href=\"javascript:;\"><i class=\"icon icon-move\"></i></a>"
			},
			add: {
				template: "<a href=\"javascript:;\"><i class=\"icon icon-plus\"></i></a>"
			},
			edit: {
				template: "<a href=\"javascript:;\"><i class=\"icon icon-pencil\"></i></a>"
			},
			"delete": {
				template: "<a href=\"javascript:;\"><i class=\"icon icon-trash\"></i></a>"
			}
		}
	n.DEFAULTS = {
		animate: null,
		initialState: "normal",
		toggleTemplate: "<i class=\"list-toggle icon\"></i>"
	},
	n.prototype.add = function(e, i, a, o, n) {
		var s, r = t(e),
			l = this.options
		if (r.is("li") ? (s = r.children("ul"), s.length || (s = t("<ul/>"), r.append(s), this._initList(s, r))) : s = r, s) {
			var d = this
			t.isArray(i) || (i = [i]),
			t.each(i,
				function(e, i) {
					var a = t("<li/>").data(i).appendTo(s)
					void 0 !== i.id && a.attr("data-id", i.id)
					var o = l.itemWrapper ? t(l.itemWrapper === !0 ? "<div class=\"tree-item-wrapper\"/>": l.itemWrapper).appendTo(a) : a
					if (i.html) o.html(i.html)
					else if (t.isFunction(d.options.itemCreator)) {
						var n = d.options.itemCreator(a, i)
						n !== !0 && n !== !1 && o.html(n)
					} else i.url ? o.append(t("<a/>", {
						href: i.url
					}).text(i.title || i.name)) : o.append(t("<span/>").text(i.title || i.name))
					d._initItem(a, i.idx || e, s, i),
					i.children && i.children.length && d.add(a, i.children)
				}),
			this._initList(s),
			a && !s.hasClass("tree") && d.expand(s.parent("li"), o, n)
		}
	},
	n.prototype.reload = function(e) {
		var i = this
		e && (i.$.empty(), i.add(i.$, e)),
		i.isPreserve && i.store.time && i.$.find("li:not(.tree-action-item)").each(function() {
			var e = t(this)
			i[i.store[e.data("id")] ? "expand": "collapse"](e, !0, !0)
		})
	},
	n.prototype._initList = function(a, o, n, s) {
		var r = this
		a.hasClass("tree") ? (n = 0, o = null) : (o = (o || a.closest("li")).addClass("has-list"), o.find(".list-toggle").length || o.prepend(this.options.toggleTemplate), n = n || o.data("idx"))
		var l = a.attr("data-idx", n || 0).children("li:not(.tree-action-item)").each(function(e) {
			r._initItem(t(this), e + 1, a)
		})
		1 !== l.length || l.find("ul").length || l.addClass("tree-single-item"),
		s = s || (o ? o.data() : null)
		var d = e(s ? s.actions: null, this.actions)
		if (d) {
			if (d.add && d.add.templateInList !== !1) {
				var c = a.children("li.tree-action-item")
				c.length ? c.detach().appendTo(a) : t("<li class=\"tree-action-item\"/>").append(i(d.add, "add", d.add.templateInList)).appendTo(a)
			}
			d.sort && a.sortable(t.extend({
				dragCssClass: "tree-drag-holder",
				trigger: ".sort-handler",
				selector: "li:not(.tree-action-item)",
				finish: function(t) {
					r.callEvent("action", {
						action: d.sort,
						$list: a,
						target: t.target,
						item: s
					})
				}
			},
			d.sort.options, t.isPlainObject(this.options.sortable) ? this.options.sortable: null))
		}
		o && (o.hasClass("open") || s && s.open) && o.addClass("open in")
	},
	n.prototype._initItem = function(a, o, n, s) {
		if (void 0 === o) {
			var r = a.prev("li")
			o = r.length ? r.data("idx") + 1 : 1
		}
		if (n = n || a.closest("ul"), a.attr("data-idx", o).removeClass("tree-single-item"), !a.data("id")) {
			var l = o
			n.hasClass("tree") || (l = n.parent("li").data("id") + "-" + l),
			a.attr("data-id", l)
		}
		s = s || a.data()
		var d = e(s.actions, this.actions)
		if (d) {
			var c = a.find(".tree-actions")
			c.length || (c = t("<div class=\"tree-actions\"/>").appendTo(this.options.itemWrapper ? a.find(".tree-item-wrapper") : a), t.each(d,
				function(t, e) {
					e && c.append(i(e, t))
				}))
		}
		var p = a.children("ul")
		p.length && this._initList(p, a, o, s)
	},
	n.prototype._init = function() {
		var i = this.options,
			n = this
		this.actions = e(i.actions),
		this.$.addClass("tree"),
		i.animate && this.$.addClass("tree-animate"),
		this._initList(this.$)
		var s = i.initialState,
			r = t.zui && t.zui.store && t.zui.store.enable
		r && (this.selector = a + "::" + (i.name || "") + "#" + (this.$.attr("id") || o++), this.store = t.zui.store[i.name ? "get": "pageGet"](this.selector, {})),
		"preserve" === s && (r ? this.isPreserve = !0 : this.options.initialState = s = "normal"),
		this.reload(i.data),
		r && (this.isPreserve = !0),
		"expand" === s ? this.expand() : "collapse" === s && this.collapse(),
		this.$.on("click", ".list-toggle,a[href=\"#\"],.tree-toggle",
			function(e) {
				var i = t(this),
					a = i.parent("li")
				n.callEvent("hit", {
					target: a,
					item: a.data()
				}),
				n.toggle(a),
				i.is("a") && e.preventDefault()
			}).on("click", ".tree-action",
			function() {
				var e = t(this),
					i = e.data()
				if (i.action && (i = i.action), "sort" !== i.type) {
					var a = e.closest("li:not(.tree-action-item)")
					n.callEvent("action", {
						action: i,
						target: this,
						$item: a,
						item: a.data()
					})
				}
			})
	},
	n.prototype.preserve = function(e, i, a) {
		if (this.isPreserve) if (e) i = i || e.data("id"),
			a = void 0 === a ? e.hasClass("open") : !1,
			a ? this.store[i] = a: delete this.store[i],
			this.store.time = (new Date).getTime(),
			t.zui.store[this.options.name ? "set": "pageSet"](this.selector, this.store)
			else {
			var o = this
			this.store = {},
			this.$.find("li").each(function() {
				o.preserve(t(this))
			})
		}
	},
	n.prototype.expand = function(t, e, i) {
		t ? (t.addClass("open"), !e && this.options.animate ? setTimeout(function() {
			t.addClass("in")
		},
		10) : t.addClass("in")) : t = this.$.find("li.has-list").addClass("open in"),
		i || this.preserve(t),
		this.callEvent("expand", t, this)
	},
	n.prototype.show = function(e, i, a) {
		var o = this
		e.each(function() {
			var e = t(this)
			if (o.expand(e, i, a), e) for (var n = e.parent("ul"); n && n.length && !n.hasClass("tree");) {
				var s = n.parent("li")
				s.length ? (o.expand(s, i, a), n = s.parent("ul")) : n = !1
			}
		})
	},
	n.prototype.collapse = function(t, e, i) {
		t ? !e && this.options.animate ? (t.removeClass("in"), setTimeout(function() {
			t.removeClass("open")
		},
		300)) : t.removeClass("open in") : t = this.$.find("li.has-list").removeClass("open in"),
		i || this.preserve(t),
		this.callEvent("collapse", t, this)
	},
	n.prototype.toggle = function(t) {
		var e = t && t.hasClass("open") || t === !1 || void 0 === t && this.$.find("li.has-list.open").length
		this[e ? "collapse": "expand"](t)
	},
	n.prototype.getOptions = function(e) {
		this.options = t.extend({},
			n.DEFAULTS, this.$.data(), e),
		null === this.options.animate && this.$.hasClass("tree-animate") && (this.options.animate = !0)
	},
	n.prototype.toData = function(e, i) {
		t.isFunction(e) && (i = e, e = null),
		e = e || this.$
		var a = this
		return e.children("li:not(.tree-action-item)").map(function() {
			var e = t(this),
				o = e.data()
			delete o["zui.droppable"]
			var n = e.children("ul")
			return n.length && (o.children = a.toData(n)),
			t.isFunction(i) ? i(o, e) : o
		}).get()
	},
	n.prototype.callEvent = function(e, i) {
		var a
		return t.isFunction(this.options[e]) && (a = this.options[e](i, this)),
		this.$.trigger(t.Event(e + "." + this.name, i)),
		a
	},
	t.fn.tree = function(e, i) {
		return this.each(function() {
			var o = t(this),
				s = o.data(a),
				r = "object" == typeof e && e
			s || o.data(a, s = new n(this, r)),
			"string" == typeof e && s[e](i)
		})
	},
	t.fn.tree.Constructor = n,
	t(function() {
		t("[data-ride=\"tree\"]").tree()
	})
} (jQuery),
function(t, e) {
	function i(e, o) {
		if (t.isArray(e)) return void t.each(e,
			function(t, e) {
				i(e, o)
			})
		var n = {}
		n[e] = a[e],
		o ? t.extend(o, n) : t.extend(n)
	}
	var a = t.zui
	a && (i(["uuid", "callEvent", "clientLang", "browser", "messager", "Messager", "showMessager", "closeModal", "ajustModalPosition", "ModalTrigger", "modalTrigger", "store"]), i(["Color", "imgReady", "messager", "Messager", "showMessager", "closeModal", "ajustModalPosition", "ModalTrigger", "modalTrigger", "store"], e))
} (jQuery, window),
function(t, e, i) {
	"use strict"
	function a(t, i, a, o) {
		return e.abs((a - t) * (o - i))
	}
	function o(t, e, i, a, o, n) {
		return t >= i && o >= t && e >= a && n >= e
	}
	function n(t, i, n, s, r, l, d, c) {
		var p = e.max(t, r),
			h = e.max(i, l),
			f = e.min(n, d),
			u = e.min(s, c)
		return o(p, h, t, i, n, s) && o(f, u, t, i, n, s) && o(p, h, r, l, d, c) && o(f, u, r, l, d, c) ? a(p, h, f, u) : 0
	}
	var s = t.zui.Messager ? new t.zui.Messager({
			placement: "top",
			time: 1500,
			close: 0,
			scale: !1,
			fade: !1
		}) : 0,
		r = function(e, i) {
			this.$ = t(e),
			this.options = this.getOptions(i),
			this.draggable = this.$.hasClass("dashboard-draggable") || this.options.draggable,
			this.init()
		}
	r.DEFAULTS = {
		minHeight: 100,
		height: 360,
		shadowType: "normal",
		sensitive: !1,
		circleShadowSize: 100,
		onlyRefreshBody: !0,
		resizable: !0,
		resizeMessage: !1
	},
	r.prototype.getOptions = function(e) {
		return e = t.extend({},
			r.DEFAULTS, this.$.data(), e)
	},
	r.prototype.handleRemoveEvent = function() {
		var e = this.options.afterPanelRemoved,
			a = this.options.panelRemovingTip
		this.$.on("click", ".remove-panel",
			function() {
				var o = t(this).closest(".panel"),
					n = o.data("name") || o.find(".panel-heading").text().replace("\n", "").replace(/(^\s*)|(\s*$)/g, ""),
					s = o.attr("data-id"); (a === i || a === !1 || confirm(a.format(n))) && (o.parent().remove(), e && t.isFunction(e) && e(s))
			})
	},
	r.prototype.handleRefreshEvent = function() {
		var e = this,
			i = this.options.onlyRefreshBody
		this.$.on("click", ".refresh-panel",
			function() {
				var a = t(this).closest(".panel")
				e.refresh(a, i)
			})
	},
	r.prototype.handleDraggable = function() {
		var i = this.$,
			o = this.options,
			s = "circle" === o.shadowType,
			r = o.circleShadowSize,
			l = r / 2,
			d = o.afterOrdered
		this.$.addClass("dashboard-draggable"),
		this.$.on("mousedown", ".panel-actions, .drag-disabled",
			function(t) {
				t.stopPropagation()
			})
		var c
		this.$.on("mousedown", ".panel-heading, .panel-drag-handler",
			function(p) {
				function h(i) {
					var s = E.data("mouseOffset")
					g = i.pageX - s.x,
					v = i.pageY - s.y,
					m = g + L,
					b = v + O,
					E.css({
						left: g,
						top: v
					}),
					T.find(".dragging-in").removeClass("dragging-in"),
					C = !1,
					w = null
					var r, l = 0
					T.children(":not(.dragging-col)").each(function() {
						var s = t(this)
						if (s.hasClass("dragging-col-holder")) return C = !o.sensitive || 100 > l,
							!0
						var d = s.children(".panel"),
							c = d.offset(),
							p = d.width(),
							h = d.height(),
							f = c.left,
							u = c.top
						if (o.sensitive) f -= S.left,
							u -= S.top,
							r = n(g, v, m, b, f, u, f + p, u + h),
							r > 100 && r > l && r > e.min(a(g, v, m, b), a(f, u, f + p, u + h)) / 3 && (l = r, w = s)
						else {
							var y = i.pageX,
								x = i.pageY
							if (y > f && x > u && f + p > y && u + h > x) return w = s,
								!1
						}
					}),
					w && (y && clearTimeout(y), x = w, y = setTimeout(f, 50)),
					i.preventDefault()
				}
				function f() {
					x && (x.addClass("dragging-in"), C ? D.insertAfter(x) : D.insertBefore(x), i.addClass("dashboard-holding"), y = null, x = null)
				}
				function u(e) {
					y && clearTimeout(y)
					var a = $.data("order")
					$.parent().insertAfter(D)
					var o = 0,
						n = {}
					T.children(":not(.dragging-col-holder)").each(function() {
						var e = t(this).children(".panel")
						e.data("order", ++o),
						n[e.data("id") || e.attr("id")] = o,
						e.parent().attr("data-order", o)
					}),
					a != n[$.data("id") || $.attr("id")] && (T.data("orders", n), d && t.isFunction(d) && d(n)),
					E.remove(),
					i.removeClass("dashboard-holding"),
					i.find(".dragging-col").removeClass("dragging-col"),
					i.find(".panel-dragging").removeClass("panel-dragging"),
					T.find(".dragging-in").removeClass("dragging-in"),
					i.removeClass("dashboard-dragging"),
					t(document).unbind("mousemove", h).unbind("mouseup", u),
					e.preventDefault()
				}
				var g, v, m, b, y, w, C, x, $ = t(this).closest(".panel"),
					k = $.parent(),
					T = $.closest(".row"),
					E = $.clone().addClass("panel-dragging-shadow"),
					z = $.offset(),
					S = i.offset(),
					D = T.find(".dragging-col-holder"),
					L = $.width(),
					O = $.height()
				D.length || (D = t("<div class=\"dragging-col-holder\"><div class=\"panel\"></div></div>").removeClass("dragging-col").appendTo(T)),
				c && D.removeClass(c),
				D.addClass(c = k.attr("class")),
				D.insertBefore(k).find(".panel").replaceWith($.clone().addClass("panel-dragging panel-dragging-holder")),
				i.addClass("dashboard-dragging"),
				$.addClass("panel-dragging").parent().addClass("dragging-col"),
				E.css({
					left: z.left - S.left,
					top: z.top - S.top,
					width: L,
					height: O
				}).appendTo(i).data("mouseOffset", {
					x: p.pageX - z.left + S.left,
					y: p.pageY - z.top + S.top
				}),
				s && (E.addClass("circle"), setTimeout(function() {
					E.css({
						left: p.pageX - S.left - l,
						top: p.pageY - S.top - l,
						width: r,
						height: r
					}).data("mouseOffset", {
						x: S.left + l,
						y: S.top + l
					})
				},
				100)),
				t(document).bind("mousemove", h).bind("mouseup", u),
				p.preventDefault()
			})
	},
	r.prototype.handlePanelPadding = function() {
		this.$.find(".panel-body > table, .panel-body > .list-group").parent().addClass("no-padding")
	},
	r.prototype.updatePanelHeight = function() {
		var i = this,
			a = i.options.height,
			o = i.options.minHeight,
			n = {}
		return i.id && t.zui.store && (n = t.zui.store.pageGet("zui.dashboard." + i.id + ".sizeConfig", n)),
		this.$.children(".row").each(function() {
			var i = t(this),
				s = i.width(),
				r = [],
				l = [],
				d = 0
			i.children(":not(.dragging-col-holder)").each(function() {
				var e = t(this),
					i = e.width()
				d + i > s ? (l.length && r.push(l), l = [e], d = i) : (d += i, l.push(e))
			}),
			l.length && r.push(l),
			r.length && t.each(r,
				function(i) {
					l = r[i]
					var s = 0,
						d = [],
						c = !1
					t.each(l,
						function(t) {
							var a = l[t].data("row-id", i),
								r = a.children(".panel:first")
							if (d.push(r), !c) {
								var p = r.data("newHeight")
								if (p) r.data("newHeight", null).data("height", p),
									s = e.max(o, p),
									c = !0
								else {
									var h = r.data("height") || n[r.data("id")]
									h && (s = e.max(s, h))
								}
							}
						}),
					s || (s = a),
					t.each(d,
						function(t) {
							var e = d[t].css("height", s)
							n[e.data("id")] = e.data("height")
						})
				})
		}),
		i.id && t.zui.store && t.zui.store.pageSet("zui.dashboard." + i.id + ".sizeConfig", n),
		n
	},
	r.prototype.handleResizeEvent = function() {
		var i = this,
			a = i.options,
			o = a.resizable,
			n = a.onResize,
			r = a.minHeight,
			l = a.resizeMessage,
			d = l && s
		i.$.on("mousedown", ".resize-handle",
			function(a) {
				var o = t(this),
					l = o.hasClass("resize-vertical"),
					c = o.parent().addClass("resizing").toggleClass("resizing-v", l).toggleClass("resizing-h", !l),
					p = c.closest(".row"),
					h = c.children(".panel"),
					f = a.pageX,
					u = a.pageY,
					g = c.width(),
					v = h.height(),
					m = p.width(),
					b = e.round(12 * g / m),
					y = b
				l || c.attr("data-grid", b)
				var w = function(t) {
						if (l) h.css("height", e.max(r, v + (t.pageY - u)))
						else {
							var i = t.pageX,
								a = e.max(1, e.min(12, e.round(12 * (g + (i - f)) / m)))
							y != a && (c.attr("data-grid", a).css("width", 100 * a / 12 + "%"), d && s[s.isShow ? "update": "show"](e.round(100 * a / 12) + "% (" + a + "/12)"), y = a)
						}
						t.preventDefault(),
						t.stopPropagation()
					},
					C = function(a) {
						if (c.removeClass("resizing resizing-v resizing-h"), l) {
							var o = e.max(r, v + (a.pageY - u))
							if (o !== v) {
								if (t.isFunction(n)) {
									var p = function() {
											h.css("height", v).data("height", v),
											i.updatePanelHeight()
										},
										f = n({
											type: "vertical",
											id: h.data("id"),
											element: c,
											old: v,
											height: o,
											revert: p
										})
									f === !1 && p()
								}
								h.css("height", o).data("newHeight", o)
							}
						} else {
							var g = c.attr("data-grid")
							if (b != g && t.isFunction(n)) {
								var p = function() {
										c.attr("data-grid", b).css("width", null),
										i.updatePanelHeight()
									},
									f = n({
										type: "horizontal",
										id: h.data("id"),
										element: c,
										old: b,
										grid: g,
										revert: p
									})
								f === !1 ? p() : f !== !0 && d && s.show(e.round(100 * g / 12) + "% (" + g + "/12)")
							}
						}
						i.updatePanelHeight(),
						t("body").off("mousemove.resize", w).off("mouseup.resize", C),
						a.preventDefault(),
						a.stopPropagation()
					}
				t("body").on("mousemove.resize", w).on("mouseup.resize", C),
				a.preventDefault(),
				a.stopPropagation()
			})
		var c = i.$.children(".row").children(":not(.dragging-col-holder)"); (o === !0 || "horizontal" === o) && c.append("<div class=\"resize-handle resize-horizontal\"><i class=\"icon icon-resize-h\"></i></div>"),
		(o === !0 || "vertical" === o) && c.append("<div class=\"resize-handle resize-vertical\"><i class=\"icon icon-resize-v\"></i></div>")
	},
	r.prototype.refresh = function(e, a) {
		a === i && (a = this.options.onlyRefreshBody)
		var o = this.options.afterRefresh
		e = t(e)
		var n = e.data("url")
		n && (e.addClass("panel-loading").find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").addClass("icon-spin"), t.ajax({
			url: n,
			dataType: "html"
		}).done(function(i) {
			var n = t(i)
			n.hasClass("panel") ? e.empty().append(n.children()) : a ? e.find(".panel-body").empty().html(i) : e.html(i),
			t.isFunction(o) && o.call(this, {
				result: !0,
				data: i,
				$panel: e
			})
		}).fail(function() {
			e.addClass("panel-error"),
			t.isFunction(o) && o.call(this, {
				result: !1,
				$panel: e
			})
		}).always(function() {
			e.removeClass("panel-loading"),
			e.find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").removeClass("icon-spin")
		}))
	},
	r.prototype.init = function() {
		var e = this.options,
			a = this
		if (a.id = e.id ? e.id: a.$.attr("id"), e.data) {
			var o = t("<div class=\"row\"/>")
			t.each(e.data,
				function(e, a) {
					var n = t("<div class=\"col-sm-" + (a.colWidth || 4) + "\"/>", a.colAttrs),
						s = t("<div class=\"panel\" data-id=\"" + (a.id || t.zui.uuid()) + "\"/>", a.panelAttrs)
					if (a.height !== i && s.data("height", a.height), a.content !== i) if (t.isFunction(a.content)) {
						var r = a.content(s)
						r !== !0 && s.html(r)
					} else s.html(a.content)
					o.append(n.append(s.data("url", a.url)))
				}),
			a.$.append(o)
		}
		a.updatePanelHeight(),
		a.handlePanelPadding(),
		a.handleRemoveEvent(),
		a.handleRefreshEvent(),
		e.resizable && a.handleResizeEvent(),
		a.draggable && a.handleDraggable()
		var n = 0
		a.$.find(".panel").each(function() {
			var i = t(this)
			i.data("order", ++n),
			i.attr("id") || i.attr("id", "panel" + n),
			i.attr("data-id") || i.attr("data-id", n),
			a.refresh(i, e.onlyRefreshBody)
		}),
		a.$.find("[data-toggle=\"tooltip\"]").tooltip({
			container: "body"
		})
	},
	t.fn.dashboard = function(e) {
		return this.each(function() {
			var i = t(this),
				a = i.data("zui.dashboard"),
				o = "object" == typeof e && e
			a || i.data("zui.dashboard", a = new r(this, o)),
			"string" == typeof e && a[e]()
		})
	},
	t.fn.dashboard.Constructor = r
} (jQuery, Math, void 0),
function(t) {
	"use strict"
	var e = "zui.colorPicker",
		i = "<div class=\"colorpicker\"><button type=\"button\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"cp-title\"></span><i class=\"ic\"></i></button><ul class=\"dropdown-menu clearfix\"></ul></div>",
		a = {
			zh_cn: {
				errorTip: "不是有效的颜色值"
			},
			zh_tw: {
				errorTip: "不是有效的顏色值"
			},
			en: {
				errorTip: "Not a valid color value"
			}
		},
		o = function(i, a) {
			this.name = e,
			this.$ = t(i),
			this.getOptions(a),
			this.init()
		}
	o.DEFAULTS = {
		colors: ["#00BCD4", "#388E3C", "#3280fc", "#3F51B5", "#9C27B0", "#795548", "#F57C00", "#F44336", "#E91E63"],
		pullMenuRight: !0,
		wrapper: "btn-wrapper",
		tileSize: 30,
		lineCount: 5,
		optional: !0,
		tooltip: "top",
		icon: "caret-down"
	},
	o.prototype.init = function() {
		var e = this.options,
			a = this
		this.$picker = t(i).addClass(e.wrapper),
		this.$picker.find(".cp-title").toggle(void 0 !== e.title).text(e.title),
		this.$menu = this.$picker.find(".dropdown-menu").toggleClass("pull-right", e.pullMenuRight),
		this.$btn = this.$picker.find(".btn.dropdown-toggle"),
		this.$btn.find(".ic").addClass("icon-" + e.icon),
		e.btnTip && this.$picker.attr("data-toggle", "tooltip").tooltip({
			title: e.btnTip,
			placement: e.tooltip,
			container: "body"
		}),
		this.$.attr("data-provide", null).after(this.$picker),
		this.colors = {},
		t.each(this.options.colors,
			function(e, i) {
				if (t.zui.Color.isColor(i)) {
					var o = new t.zui.Color(i)
					a.colors[o.toCssStr()] = o
				}
			}),
		this.updateColors()
		var a = this
		this.$picker.on("click", ".cp-tile",
			function() {
				a.setValue(t(this).data("color"))
			})
		var o = this.$,
			n = function() {
				var i = o.val(),
					n = t.zui.Color.isColor(i)
				o.parent().toggleClass("has-error", !(n || e.optional && "" === i)),
				n ? a.setValue(i, !0) : e.optional && "" === i ? o.tooltip("hide") : o.is(":focus") || o.tooltip("show", e.errorTip)
			}
		o.is("input:not([type=hidden])") ? (e.tooltip && o.attr("data-toggle", "tooltip").tooltip({
			trigger: "manual",
			placement: e.tooltip,
			tipClass: "tooltip-danger",
			container: "body"
		}), o.on("keyup paste input change", n)) : o.appendTo(this.$picker),
		n()
	},
	o.prototype.addColor = function(e) {
		var i = e.toCssStr(),
			a = this.options
		this.colors[i] || (this.colors[i] = e)
		var o = t("<a href=\"###\" class=\"cp-tile\"></a>", {
			titile: e
		}).data("color", e).css({
			color: e.contrast().toCssStr(),
			background: i,
			"border-color": e.luma() > .43 ? "#ccc": "transparent"
		}).attr("data-color", i)
		this.$menu.append(t("<li/>").css({
			width: a.tileSize,
			height: a.tileSize
		}).append(o)),
		a.optional && this.$menu.find(".cp-tile.empty").parent().detach().appendTo(this.$menu)
	},
	o.prototype.updateColors = function(e) {
		var i = (this.$picker, this.$menu.empty()),
			a = this.options,
			e = e || this.colors,
			o = this,
			n = 0
		if (t.each(e,
			function(t, e) {
				o.addColor(e),
				n++
			}), a.optional) {
			var s = t("<li><a class=\"cp-tile empty\" href=\"###\"></a></li>").css({
				width: a.tileSize,
				height: a.tileSize
			})
			this.$menu.append(s),
			n++
		}
		i.css("width", Math.min(n, a.lineCount) * a.tileSize + 6)
	},
	o.prototype.setValue = function(e, i) {
		var a = this.options
		this.$menu.find(".cp-tile.active").removeClass("active")
		var o = ""
		if (e) {
			var n = new t.zui.Color(e)
			o = n.toCssStr().toLowerCase(),
			this.$btn.css({
				background: o,
				color: n.contrast().toCssStr(),
				borderColor: n.luma() > .43 ? "#ccc": o
			}),
			this.colors[o] || this.addColor(n),
			i || this.$.val().toLowerCase() === o || this.$.val(o).trigger("change"),
			this.$menu.find(".cp-tile[data-color=\"" + o + "\"]").addClass("active"),
			this.$.tooltip("hide"),
			this.$.trigger("colorchange", n)
		} else this.$btn.attr("style", null),
			i || "" === this.$.val() || this.$.val(o).trigger("change"),
			a.optional && this.$.tooltip("hide"),
			this.$menu.find(".cp-tile.empty").addClass("active"),
			this.$.trigger("colorchange", null)
		a.updateBorder && t(a.updateBorder).css("border-color", o),
		a.updateBackground && t(a.updateBackground).css("background-color", o),
		a.updateColor && t(a.updateText).css("color", o),
		a.updateText && t(a.updateText).text(o)
	},
	o.prototype.getOptions = function(e) {
		var i = t.extend({},
			o.DEFAULTS, this.$.data(), e)
		"string" == typeof i.colors && (i.colors = i.colors.split(","))
		var n = (i.lang || t.zui.clientLang()).toLowerCase()
		i.errorTip || (i.errorTip = a[n].errorTip),
		t.fn.tooltip || (i.btnTip = !1),
		this.options = i
	},
	t.fn.colorPicker = function(i) {
		return this.each(function() {
			var a = t(this),
				n = a.data(e),
				s = "object" == typeof i && i
			n || a.data(e, n = new o(this, s)),
			"string" == typeof i && n[i]()
		})
	},
	t.fn.colorPicker.Constructor = o,
	t(function() {
		t("[data-provide=\"colorpicker\"]").colorPicker()
	})
} (jQuery),
function(t, e, i) {
	"use strict"
	var a = 0,
		o = "<div class=\"messager messager-{type} {placement}\" style=\"display: none\"><div class=\"messager-content\"></div><div class=\"messager-actions\"></div></div>",
		n = {
			type: "default",
			placement: "top",
			time: 4e3,
			parent: "body",
			icon: null,
			close: !0,
			fade: !0,
			scale: !0
		},
		s = {},
		r = function(e, r) {
			t.isPlainObject(e) && (r = e, e = r.message)
			var l = this
			r = l.options = t.extend({},
				n, r),
			l.id = r.id || a++
			var d = s[l.id]
			d && d.destroy(),
			s[l.id] = l,
			l.message = (r.icon ? "<i class=\"icon-" + r.icon + " icon\"></i> ": "") + e,
			l.$ = t(o.format(r)).toggleClass("fade", r.fade).toggleClass("scale", r.scale).attr("id", "messager-" + l.id),
			r.cssClass && l.$.addClass(r.cssClass)
			var c = !1,
				p = l.$.find(".messager-actions"),
				h = function(e) {
					var a = t("<button type=\"button\" class=\"action action-" + e.name + "\"/>")
					"close" === e.name && a.addClass("close"),
					e.html !== i && a.html(e.html),
					e.icon !== i && a.append("<i class=\"action-icon icon-" + e.icon + "\"/>"),
					e.text !== i && a.append("<span class=\"action-text\">" + e.text + "</span>"),
					e.tooltip !== i && a.attr("title", e.tooltip).tooltip(),
					a.data("action", e),
					p.append(a)
				}
			r.actions && t.each(r.actions,
				function(t, e) {
					e.name === i && (e.name = t),
					"close" == e.name && (c = !0),
					h(e)
				}),
			!c && r.close && h({
				name: "close",
				html: "&times;"
			}),
			l.$.on("click", ".action",
				function(e) {
					var i, a = t(this).data("action")
					r.onAction && (i = r.onAction.call(this, a.name, a, l), i === !1) || t.isFunction(a.action) && (i = a.action.call(this, l), i === !1) || (l.hide(), e.stopPropagation())
				}),
			l.$.on("click",
				function(t) {
					r.onAction && (result = r.onAction.call(this, "content", null, l), result === !0 && l.hide())
				})
			var f = l.$.find(".messager-content").html(l.message)
			r.contentClass && f.addClass(r.cssClass),
			l.$.data("zui.messager", l),
			r.show && l.message !== i && l.show()
		}
	r.prototype.update = function(e, i) {
		var a = this,
			o = a.options
		a.$.removeClass("messager-" + o.type),
		i && (o = t.extend(o, i)),
		a.$.addClass("messager-" + o.type),
		e && (a.message = (o.icon ? "<i class=\"icon-" + o.icon + " icon\"></i> ": "") + e, a.$.find(".messager-content").html(a.message))
	},
	r.prototype.show = function(a, o) {
		var n = this,
			s = this.options
		if (t.isFunction(a)) {
			var r = o
			o = a,
			r !== i && (a = r)
		}
		if (n.isShow) return void n.hide(function() {
			n.show(a, o)
		})
		n.hiding && (clearTimeout(n.hiding), n.hiding = null),
		n.update(a)
		var l = s.placement,
			d = t(s.parent),
			c = d.children(".messagers-holder." + l)
		if (c.length || (c = t("<div/>").attr("class", "messagers-holder " + l).appendTo(d)), c.append(n.$), "center" === l) {
			var p = t(e).height() - c.height()
			c.css("top", Math.max( - p, p / 2))
		}
		return n.$.show().addClass("in"),
		s.time && (n.hiding = setTimeout(function() {
			n.hide()
		},
		s.time)),
		n.isShow = !0,
		o && o(),
		n
	},
	r.prototype.hide = function(t, e) {
		t === !0 && (e = !0, t = null)
		var i = this
		if (i.$.hasClass("in")) {
			i.$.removeClass("in")
			var a = function() {
				var e = i.$.parent()
				i.$.detach(),
				e.children().length || e.remove(),
				t && t(!0)
			}
			e ? a() : setTimeout(a, 200)
		} else t && t(!1)
		i.isShow = !1
	},
	r.prototype.destroy = function() {
		var t = this
		t.hide(function() {
			t.$.remove(),
			t.$ = null
		},
		!0),
		delete s[t.id]
	},
	r.all = s
	var l = function() {
			t(".messager").each(function() {
				var e = t(this).data("zui.messager")
				e && e.hide && e.hide(!0)
			})
		},
		d = function(e, a) {
			"string" == typeof a && (a = {
				type: a
			}),
			a = t.extend({},
				a),
			a.id === i && l()
			var o = s[a.id] || new r(e, a)
			return o.show(),
			o
		},
		c = function(t) {
			return "string" == typeof t ? {
				placement: t
			}: t
		},
		p = {
			show: d,
			hide: l
		}
	t.each({
		primary: 0,
		success: "ok-sign",
		info: "info-sign",
		warning: "warning-sign",
		danger: "exclamation-sign",
		important: 0,
		special: 0
	},
	function(e, i) {
		p[e] = function(a, o) {
			return d(a, t.extend({
				type: e,
				icon: i || null
			},
			c(o)))
		}
	}),
	t.zui({
		Messager: r,
		showMessager: d,
		messager: p
	})
} (jQuery, window, void 0),
function(t) {
	"use strict"
	var e = "zui.selectable",
		i = function(i, a) {
			this.name = e,
			this.$ = t(i),
			this.id = t.zui.uuid(),
			this.selectOrder = 1,
			this.selections = {},
			this.getOptions(a),
			this._init()
		},
		a = function(t, e, i) {
			return t >= i.left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height
		},
		o = function(t, e) {
			var i = Math.max(t.left, e.left),
				o = Math.max(t.top, e.top),
				n = Math.min(t.left + t.width, e.left + e.width),
				s = Math.min(t.top + t.height, e.top + e.height)
			return a(i, o, t) && a(n, s, t) && a(i, o, e) && a(n, s, e)
		}
	i.DEFAULTS = {
		selector: "li,tr,div",
		trigger: "",
		selectClass: "active",
		rangeStyle: {
			border: "1px solid " + (t.zui.colorset ? t.zui.colorset.primary: "#3280fc"),
			backgroundColor: t.zui.colorset ? new t.zui.Color(t.zui.colorset.primary).fade(20).toCssStr() : "rgba(50, 128, 252, 0.2)"
		},
		clickBehavior: "toggle",
		ignoreVal: 3
	},
	i.prototype.getOptions = function(e) {
		this.options = t.extend({},
			i.DEFAULTS, this.$.data(), e)
	},
	i.prototype.select = function(t) {
		this.toggle(t, !0)
	},
	i.prototype.unselect = function(t) {
		this.toggle(t, !1)
	},
	i.prototype.toggle = function(e, i, a) {
		var o, n, s = this.options.selector,
			r = this
		if (void 0 === e) return void this.$.find(s).each(function() {
			r.toggle(this, i)
		})
		if ("object" == typeof e ? (o = t(e).closest(s), n = o.data("id")) : (n = e, o = r.$.find(".slectable-item[data-id=\"" + n + "\"]")), o && o.length) {
			if (n || (n = t.zui.uuid(), o.attr("data-id", n)), (void 0 === i || null === i) && (i = !r.selections[n]), !!i != !!r.selections[n]) {
				var l
				t.isFunction(a) && (l = a(i)),
				l !== !0 && (r.selections[n] = i ? r.selectOrder++:!1, r.callEvent(i ? "select": "unselect", {
					id: n,
					selections: r.selections,
					target: o,
					selected: r.getSelectedArray()
				},
				r))
			}
			o.toggleClass(r.options.selectClass, i)
		}
	},
	i.prototype.getSelectedArray = function() {
		var e = []
		return t.each(this.selections,
			function(t, i) {
				i && e.push(t)
			}),
		e
	},
	i.prototype._init = function() {
		var e, i, a, n, s, r, l, d = this.options,
			c = this,
			p = d.ignoreVal,
			h = !0,
			f = "." + this.name + "." + this.id,
			u = t.isFunction(d.checkFunc) ? d.checkFunc: null,
			g = t.isFunction(d.rangeFunc) ? d.rangeFunc: null,
			v = function() {
				n && c.$children.each(function() {
					var e = t(this),
						i = e.offset()
					i.width = e.outerWidth(),
					i.height = e.outerHeight()
					var a = g ? g.call(this, n, i) : o(n, i)
					if (u) {
						var s = u.call(c, {
							intersect: a,
							target: e,
							range: n,
							targetRange: i
						})
						s === !0 ? c.select(e) : s === !1 && c.unselect(e)
					} else a ? c.select(e) : c.multiKey || c.unselect(e)
				})
			},
			m = function(o) {
				s = o.pageX,
				r = o.pageY,
				n = {
					width: Math.abs(s - e),
					height: Math.abs(r - i),
					left: s > e ? e: s,
					top: r > i ? i: r
				},
				h && n.width < p && n.height < p || (a || (a = t(".selectable-range[data-id=\"" + c.id + "\"]"), a.length || (a = t("<div class=\"selectable-range\" data-id=\"" + c.id + "\"></div>").css(t.extend({
					zIndex: 1060,
					position: "absolute",
					top: e,
					left: i,
					pointerEvents: "none"
				},
				c.options.rangeStyle)).appendTo(t("body")))), a.css(n), clearTimeout(l), l = setTimeout(v, 10), h = !1)
			},
			b = function(e) {
				t(document).off(f),
				a && a.remove(),
				h || n && (clearTimeout(l), v(), n = null),
				c.callEvent("finish", {
					selections: c.selections,
					selected: c.getSelectedArray()
				}),
				e.preventDefault()
			},
			y = function(o) {
				if (!c.altKey && 3 !== o.which && c.callEvent("start", o) !== !1) {
					var n = c.$children = c.$.find(d.selector)
					n.addClass("slectable-item")
					var s = c.multiKey ? "multi": d.clickBehavior
					if ("multi" === s ? c.toggle(o.target) : "single" === s ? (c.unselect(), c.select(o.target)) : "toggle" === s && c.toggle(o.target, null,
						function(t) {
							c.unselect()
						}), c.callEvent("startDrag", o) === !1) return void c.callEvent("finish", {
						selections: c.selections,
						selected: c.getSelectedArray()
					})
					e = o.pageX,
					i = o.pageY,
					a = null,
					h = !0,
					t(document).on("mousemove" + f, m).on("mouseup" + f, b),
					o.preventDefault()
				}
			},
			w = d.container && "default" !== d.container ? t(d.container) : this.$
		d.trigger ? w.on("mousedown" + f, d.trigger, y) : w.on("mousedown" + f, y),
		t(document).on("keydown",
			function(t) {
				var e = t.keyCode
				17 === e || 91 == e ? c.multiKey = e: 18 === e && (c.altKey = !0)
			}).on("keyup",
			function(t) {
				c.multiKey = !1,
				c.altKey = !1
			})
	},
	i.prototype.callEvent = function(e, i) {
		var a = t.Event(e + "." + this.name)
		this.$.trigger(a, i)
		var o = a.result,
			n = this.options[e]
		return t.isFunction(n) && (o = n.apply(this, t.isArray(i) ? i: [i])),
		o
	},
	t.fn.selectable = function(a) {
		return this.each(function() {
			var o = t(this),
				n = o.data(e),
				s = "object" == typeof a && a
			n || o.data(e, n = new i(this, s)),
			"string" == typeof a && n[a]()
		})
	},
	t.fn.selectable.Constructor = i,
	t(function() {
		t("[data-ride=\"selectable\"]").selectable()
	})
} (jQuery),
function(t) {
	"use strict"
	var e = "zui.datatable",
		i = t.zui.store,
		a = function(i, a) {
			this.name = e,
			this.$ = t(i),
			this.isTable = "TABLE" === this.$[0].tagName,
			this.firstShow = !0,
			this.isTable ? (this.$table = this.$, this.id = "datatable-" + (this.$.attr("id") || t.zui.uuid())) : (this.$datatable = this.$.addClass("datatable"), this.$.attr("id") ? this.id = this.$.attr("id") : (this.id = "datatable-" + t.zui.uuid(), this.$.attr("id", this.id))),
			this.getOptions(a),
			this.load(),
			this.callEvent("ready")
		}
	a.DEFAULTS = {
		checkable: !1,
		checkByClickRow: !0,
		checkedClass: "active",
		checkboxName: null,
		selectable: !0,
		sortable: !1,
		storage: !0,
		fixedHeader: !1,
		fixedHeaderOffset: 0,
		fixedLeftWidth: "30%",
		fixedRightWidth: "30%",
		flexHeadDrag: !0,
		scrollPos: "in",
		rowHover: !0,
		colHover: !0,
		hoverClass: "hover",
		colHoverClass: "col-hover",
		mergeRows: !1,
		minColWidth: 20,
		minFixedLeftWidth: 200,
		minFixedRightWidth: 200,
		minFlexAreaWidth: 200
	},
	a.prototype.getOptions = function(e) {
		var i = this.$
		e = t.extend({},
			a.DEFAULTS, this.$.data(), e),
		e.tableClass = e.tableClass || "",
		e.tableClass = " " + e.tableClass + " table-datatable",
		t.each(["bordered", "condensed", "striped", "condensed", "fixed"],
			function(t, a) {
				a = "table-" + a,
				i.hasClass(a) && (e.tableClass += " " + a)
			}),
		(i.hasClass("table-hover") || e.rowHover) && (e.tableClass += " table-hover"),
		e.checkable && t.fn.selectable || (e.selectable = !1),
		this.options = e
	},
	a.prototype.load = function(i) {
		var a, o = this.options
		if (t.isFunction(i)) i = i(this.data, this),
			i.keepSort = !0
		else if (t.isPlainObject(i)) this.data = i
		else if ("string" == typeof i) {
			var n = t(i)
			n.length && (this.$table = n.first(), this.$table.data(e, this), this.isTable = !0),
			i = null
		} else i = o.data
		if (!i) {
			if (!this.isTable) throw new Error("No data avaliable!")
			i = {
				cols: [],
				rows: []
			},
			a = i.cols
			var s, r, l, d, c, p, h = i.rows,
				f = this.$table
			f.find("thead > tr:first").children("th").each(function() {
				r = t(this),
				a.push(t.extend({
					text: r.html(),
					flex: r.hasClass("flex-col"),
					width: "auto",
					cssClass: r.attr("class"),
					css: r.attr("style"),
					type: "string",
					ignore: r.hasClass("ignore"),
					sort: !r.hasClass("sort-disabled"),
					mergeRows: r.attr("merge-rows")
				},
				r.data()))
			}),
			f.find("tbody > tr").each(function() {
				l = t(this),
				c = t.extend({
					data: [],
					checked: !1,
					cssClass: l.attr("class"),
					css: l.attr("style"),
					id: l.attr("id")
				},
				l.data()),
				l.children("td").each(function() {
					if (d = t(this), p = d.attr("colspan") || 1, c.data.push(t.extend({
						cssClass: d.attr("class"),
						css: d.attr("style"),
						text: d.html(),
						colSpan: p,
						title: d.attr("title")
					},
					d.data())), p > 1) for (s = 1; p > s; s++) c.data.push({
						empty: !0
					})
				}),
				h.push(c)
			})
			var u = f.find("tfoot")
			u.length && (i.footer = t("<table class=\"table" + o.tableClass + "\"></table>").append(u))
		}
		i.flexStart = -1,
		i.flexEnd = -1,
		a = i.cols,
		i.colsLength = a.length
		for (var s = 0; s < i.colsLength; ++s) {
			var g = a[s]
			g.flex && (i.flexStart < 0 && (i.flexStart = s), i.flexEnd = s)
		}
		0 === i.flexStart && i.flexEnd === i.colsLength && (i.flexStart = -1, i.flexEnd = -1),
		i.flexArea = i.flexStart >= 0,
		i.fixedRight = i.flexEnd >= 0 && i.flexEnd < i.colsLength - 1,
		i.fixedLeft = i.flexStart > 0,
		i.flexStart < 0 && i.flexEnd < 0 && (i.fixedLeft = !0, i.flexStart = i.colsLength, i.flexEnd = i.colsLength),
		this.data = i,
		this.callEvent("afterLoad", {
			data: i
		}),
		this.render()
	},
	a.prototype.render = function() {
		var i, a, o, n, s = this,
			r = s.$datatable || (s.isTable ? t("<div class=\"datatable\" id=\"" + s.id + "\"/>") : s.$datatable),
			l = s.options,
			d = s.data,
			c = s.data.cols,
			p = s.data.rows,
			h = l.checkable,
			f = "<div class=\"datatable-rows-span datatable-span\"><div class=\"datatable-wrapper\"><table class=\"table\"></table></div></div>",
			u = "<div class=\"datatable-head-span datatable-span\"><div class=\"datatable-wrapper\"><table class=\"table\"><thead></thead></table></div></div>"
		r.children(".datatable-head, .datatable-rows, .scroll-wrapper").remove(),
		r.toggleClass("sortable", l.sortable)
		var g, v, m, b = t("<div class=\"datatable-head\"/>")
		for (i = t("<tr/>"), o = t("<tr/>"), n = t("<tr/>"), a = 0; a < c.length; a++) m = c[a],
			g = a < d.flexStart ? i: a >= d.flexStart && a <= d.flexEnd ? n: o,
			0 === a && h && g.append("<th data-index=\"check\" class=\"check-all check-btn\"><i class=\"icon-check-empty\"></i></th>"),
			m.ignore || (v = t("<th/>"), v.toggleClass("sort-down", "down" === m.sort).toggleClass("sort-up", "up" === m.sort).toggleClass("sort-disabled", m.sort === !1), v.addClass(m.cssClass).addClass(m.colClass).html(m.text).attr({
				"data-index": a,
				"data-type": m.type,
				style: m.css
			}), g.append(v))
		var y
		d.fixedLeft && (y = t(u), y.addClass("fixed-left").find("table").addClass(l.tableClass).find("thead").append(i), b.append(y)),
		d.flexArea && (y = t(u), y.addClass("flexarea").find(".datatable-wrapper").append("<div class=\"scrolled-shadow scrolled-in-shadow\"></div><div class=\"scrolled-shadow scrolled-out-shadow\"></div>").find("table").addClass(l.tableClass).find("thead").append(n), b.append(y)),
		d.fixedRight && (y = t(u), y.addClass("fixed-right").find("table").addClass(l.tableClass).find("thead").append(o), b.append(y)),
		r.append(b)
		var w, C, x, $, k, T, E, z, S = t("<div class=\"datatable-rows\">"),
			D = p.length
		i = t("<tbody/>"),
		o = t("<tbody/>"),
		n = t("<tbody/>")
		for (var L = 0; D > L; ++L) {
			for (T = p[L], "undefined" == typeof T.id && (T.id = L), T.index = L, w = t("<tr/>"), w.addClass(T.cssClass).toggleClass(l.checkedClass, !!T.checked).attr({
				"data-index": L,
				"data-id": T.id
			}), C = w.clone(), x = w.clone(), z = T.data.length, a = 0; z > a; ++a) E = T.data[a],
				a > 0 && E.empty || (g = a < d.flexStart ? w: a >= d.flexStart && a <= d.flexEnd ? C: x, 0 === a && h && (k = t("<td data-index=\"check\" class=\"check-row check-btn\"><i class=\"icon-check-empty\"></i></td>"), l.checkboxName && k.append("<input class=\"hide\" type=\"checkbox\" name=\"" + l.checkboxName + "\" value=\"" + T.id + "\">"), g.append(k)), c[a].ignore || (t.isPlainObject(E) ? (E.row = L, E.index = a) : E = {
					text: E,
					row: L,
					index: a
				},
					T.data[a] = E, $ = t("<td/>"), $.html(E.text).addClass(E.cssClass).addClass(c[a].colClass).attr("colspan", E.colSpan).attr({
						"data-row": L,
						"data-index": a,
						"data-flex": !1,
						"data-type": c[a].type,
						style: E.css,
						title: E.title || ""
					}), g.append($)))
			i.append(w),
			n.append(C),
			o.append(x)
		}
		var O
		d.fixedLeft && (O = t(f), O.addClass("fixed-left").find("table").addClass(l.tableClass).append(i), S.append(O)),
		d.flexArea && (O = t(f), O.addClass("flexarea").find(".datatable-wrapper").append("<div class=\"scrolled-shadow scrolled-in-shadow\"></div><div class=\"scrolled-shadow scrolled-out-shadow\"></div>").find("table").addClass(l.tableClass).append(n), S.append(O)),
		d.fixedRight && (O = t(f), O.addClass("fixed-right").find("table").addClass(l.tableClass).append(o), S.append(O)),
		r.append(S),
		d.flexArea && r.append("<div class=\"scroll-wrapper\"><div class=\"scroll-slide scroll-pos-" + l.scrollPos + "\"><div class=\"bar\"></div></div></div>")
		var A = r.children(".datatable-footer").detach()
		d.footer ? (r.append(t("<div class=\"datatable-footer\"/>").append(d.footer)), d.footer = null) : A.length && r.append(A),
		s.$datatable = r.data(e, s),
		s.isTable && s.firstShow && (s.$table.attr("data-datatable-id", this.id).hide().after(r), s.firstShow = !1),
		s.bindEvents(),
		s.refreshSize(),
		s.callEvent("render")
	},
	a.prototype.bindEvents = function() {
		var e = this,
			a = this.data,
			o = this.options,
			n = this.$datatable,
			s = e.$dataSpans = n.children(".datatable-head, .datatable-rows").find(".datatable-span"),
			r = e.$rowsSpans = n.children(".datatable-rows").children(".datatable-rows-span"),
			l = e.$headSpans = n.children(".datatable-head").children(".datatable-head-span"),
			d = e.$cells = s.find("td, th"),
			c = e.$dataCells = d.filter("td")
		e.$headCells = d.filter("th")
		var p = e.$rows = e.$rowsSpans.find(".table > tbody > tr")
		if (o.rowHover) {
			var h = o.hoverClass
			r.on("mouseenter", "td",
				function() {
					c.filter("." + h).removeClass(h),
					p.filter("." + h).removeClass(h),
					p.filter("[data-index=\"" + t(this).addClass(h).closest("tr").data("index") + "\"]").addClass(h)
				}).on("mouseleave", "td",
				function() {
					c.filter("." + h).removeClass(h),
					p.filter("." + h).removeClass(h)
				})
		}
		if (o.colHover) {
			var f = o.colHoverClass
			l.on("mouseenter", "th",
				function() {
					d.filter("." + f).removeClass(f),
					d.filter("[data-index=\"" + t(this).data("index") + "\"]").addClass(f)
				}).on("mouseleave", "th",
				function() {
					d.filter("." + f).removeClass(f)
				})
		}
		if (a.flexArea) {
			var u, g, v, m, b, y, w, C = n.find(".scroll-slide"),
				x = n.find(".datatable-span.flexarea"),
				$ = n.find(".datatable-span.fixed-left"),
				k = n.find(".datatable-span.flexarea .table"),
				T = C.children(".bar"),
				E = e.id + "_scrollOffset"
			e.width = n.width(),
			n.resize(function() {
				e.width = n.width()
			})
			var z = function(t, e) {
					b = Math.max(0, Math.min(u - g, t)),
					e || n.addClass("scrolling"),
					T.css("left", b),
					w = 0 - Math.floor((v - u) * b / (u - g)),
					k.css("left", w),
					m = b,
					n.toggleClass("scrolled-in", b > 2).toggleClass("scrolled-out", u - g - 2 > b),
					o.storage && i.pageSet(E, b)
				},
				S = function() {
					u = x.width(),
					C.width(u).css("left", $.width()),
					v = k.width(),
					g = Math.floor(u * u / v),
					T.css("width", g),
					k.css("min-width", u),
					n.toggleClass("show-scroll-slide", v > u),
					y || u === g || (y = !0, z(i.pageGet(E, 0), !0)),
					n.hasClass("size-changing") && z(b, !0)
				}
			x.resize(S),
			o.storage && S()
			var D = {
				move: !1,
				stopPropagation: !0,
				drag: function(t) {
					z(T.position().left + t.smallOffset.x * (t.element.hasClass("bar") ? 1 : -1))
				},
				finish: function() {
					n.removeClass("scrolling")
				}
			}
			t.fn.draggable ? (T.draggable(D), o.flexHeadDrag && n.find(".datatable-head-span.flexarea").draggable(D)) : console.error("DataTable requires draggable.js to improve UI."),
			C.mousedown(function(t) {
				var e = t.pageX - C.offset().left
				z(e - g / 2)
			})
		}
		if (o.checkable) {
			var L, O = e.id + "_checkedStatus",
				A = o.checkedClass,
				P = function() {
					var n = r.first().find(".table > tbody > tr"),
						s = n.filter("." + A)
					o.checkboxName && n.find(".check-row input:checkbox").prop("checked", !1)
					var d = {
						checkedAll: n.length === s.length && s.length > 0,
						checks: s.map(function() {
							return L = t(this).data("id"),
							o.checkboxName && t(this).find(".check-row input:checkbox").prop("checked", !0),
							L
						}).toArray()
					}
					e.checks = d,
					t.each(a.rows,
						function(e, i) {
							i.checked = t.inArray(i.id, d.checks) > -1
						}),
					l.find(".check-all").toggleClass("checked", !!d.checkedAll),
					o.storage && i.pageSet(O, d),
					e.callEvent("checksChanged", {
						checks: d
					})
				},
				F = function(e, i) {
					var a = t(e).closest("tr")
					void 0 === i && (i = !a.hasClass(A)),
					p.filter("[data-index=\"" + a.data("index") + "\"]").toggleClass(A, !!i)
				},
				M = "click.zui.datatable.check"
			if (o.selectable) {
				var j = {
					selector: ".datatable-rows tr",
					trigger: ".datatable-rows",
					start: function(e) {
						var i = t(e.target).closest(".check-row, .check-btn")
						return i.length ? (i.is(".check-row") && (F(i), P()), !1) : void 0
					},
					rangeFunc: function(t, e) {
						return Math.max(t.top, e.top) < Math.min(t.top + t.height, e.top + e.height)
					},
					select: function(t) {
						F(t.target, !0)
					},
					unselect: function(t) {
						F(t.target, !1)
					},
					finish: function(t) {
						P()
					}
				}
				t.isPlainObject(o.selectable) && t.extend(j, o.selectable),
				this.$datatable.selectable(j)
			} else this.$rowsSpans.off(M).on(M + "row", o.checkByClickRow ? "tr": ".check-row",
				function() {
					F(this),
					P()
				})
			if (this.$datatable.off(M).on("click.zui.datatable.check", ".check-all",
				function() {
					p.toggleClass(A, t(this).toggleClass("checked").hasClass("checked")),
					P()
				}).on(M + ".none", ".check-none",
				function() {
					p.toggleClass(A, !1),
					P()
				}).on(M + ".inverse", ".check-inverse",
				function() {
					p.toggleClass(A),
					P()
				}), o.storage) {
				var I = i.pageGet(O)
				I && (l.find(".check-all").toggleClass("checked", I.checkedAll), I.checkedAll ? p.addClass(A) : (p.removeClass(A), t.each(I.checks,
					function(t, e) {
						p.filter("[data-id=\"" + e + "\"]").addClass(A)
					})), I.checks.length && P())
			}
		}
		if (o.fixedHeader) {
			var N, R, H, W = n.children(".datatable-head"),
				_ = o.fixedHeaderOffset || t(".navbar.navbar-fixed-top").height() || 0,
				U = function() {
					N = n.offset().top,
					H = t(window).scrollTop(),
					R = n.height(),
					n.toggleClass("head-fixed", H + _ > N && N + R > H + _),
					n.hasClass("head-fixed") ? W.css({
						width: n.width(),
						top: _
					}) : W.attr("style", "")
				}
			t(window).scroll(U),
			U()
		}
		o.sortable ? (l.on("click", "th:not(.sort-disabled, .check-btn)",
			function() {
				n.hasClass("size-changing") || e.sortTable(t(this))
			}), o.storage && e.sortTable()) : o.mergeRows && this.mergeRows()
	},
	a.prototype.mergeRows = function() {
		for (var e = this.$rowsSpans.find(".table > tbody > tr > td"), i = this.data.cols, a = 0; a < i.length; a++) {
			var o = i[a]
			if (o.mergeRows) {
				var n = e.filter("[data-index=\"" + a + "\"]")
				if (n.length > 1) {
					var s, r
					n.each(function() {
						var e = t(this)
						s && e.html() === s.html() ? (r = s.attr("rowspan") || 1, "number" != typeof r && (r = parseInt(r), isNaN(r) && (r = 1)), s.attr("rowspan", r + 1).css("vertical-align", "middle"), e.remove()) : s = e
					})
				}
			}
		}
	},
	a.prototype.sortTable = function(e) {
		var i = t.zui.store,
			a = this.options,
			o = this.id + "_datatableSorter",
			n = a.storage ? i.pageGet(o) : null
		if (e || (e = n ? this.$headCells.filter("[data-index=\"" + n.index + "\"]").addClass("sort-" + n.type) : this.$headCells.filter(".sort-up, .sort-down").first()), e.length) {
			var s, r, l, d = this.data,
				c = d.cols,
				p = d.rows,
				h = this.$headCells
			s = !e.hasClass("sort-up"),
			d.keepSort && (s = !s),
			d.keepSort = null,
			h.removeClass("sort-up sort-down"),
			e.addClass(s ? "sort-up": "sort-down"),
			l = e.data("index"),
			t.each(c,
				function(t, e) {
					t == l || "up" !== e.sort && "down" !== e.sort ? t == l && (e.sort = s ? "up": "down", r = e.type) : e.sort = !0
				})
			var f, u, g, v = this.$dataCells.filter("[data-index=\"" + l + "\"]")
			p.sort(function(t, e) {
				return t = t.data[l],
				e = e.data[l],
				f = v.filter("[data-row=\"" + t.row + "\"]").text(),
				u = v.filter("[data-row=\"" + e.row + "\"]").text(),
				"number" === r ? (f = parseFloat(f), u = parseFloat(u)) : "date" === r ? (f = Date.parse(f), u = Date.parse(u)) : (f = f.toLowerCase(), u = u.toLowerCase()),
				g = f > u ? 1 : u > f ? -1 : 0,
				s && (g = -1 * g),
				g
			})
			var m, b, y, w = this.$rows,
				C = []
			t.each(p,
				function(e, i) {
					m = w.filter("[data-index=\"" + i.index + "\"]"),
					m.each(function(e) {
						y = t(this),
						b = C[e],
						b ? b.after(y) : y.parent().prepend(y),
						C[e] = y
					})
				}),
			n = {
				index: l,
				type: s ? "up": "down"
			},
			a.storage && i.pageSet(o, n),
			this.callEvent("sort", {
				sorter: n
			})
		}
	},
	a.prototype.refreshSize = function() {
		var e, i = this.$datatable,
			a = this.options,
			o = this.data.rows,
			n = this.data.cols
		i.find(".datatable-span.fixed-left").css("width", a.fixedLeftWidth),
		i.find(".datatable-span.fixed-right").css("width", a.fixedRightWidth)
		var s = function(e) {
				var i, a, o = 0
				return e.css("height", "auto"),
				e.each(function() {
					i = t(this),
					a = i.attr("rowspan"),
					a && 1 != a || (o = Math.max(o, i.outerHeight()))
				}),
				o
			},
			r = this.$dataCells,
			l = this.$cells,
			d = this.$headCells
		for (e = 0; e < n.length; ++e) l.filter("[data-index=\"" + e + "\"]").css("width", n[e].width)
		var c = s(d)
		d.css("min-height", c).css("height", c)
		var p
		for (e = 0; e < o.length; ++e) {
			p = r.filter("[data-row=\"" + e + "\"]")
			var h = s(p)
			p.css("min-height", h).css("height", h)
		}
	},
	a.prototype.callEvent = function(t, e) {
		var i = this.$.callEvent(t + "." + this.name, e, this).result
		return ! (void 0 !== i && !i)
	},
	t.fn.datatable = function(i, o) {
		return this.each(function() {
			var n = t(this),
				s = n.data(e),
				r = "object" == typeof i && i
			s || n.data(e, s = new a(this, r)),
			"string" == typeof i && ("load" !== i || !t.isPlainObject(o) || void 0 !== o.keepSort && null !== o.keepSort || (o.keepSort = !0), s[i](o))
		})
	},
	t.fn.datatable.Constructor = a
} (jQuery)