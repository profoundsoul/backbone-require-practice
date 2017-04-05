!function (t) {
    function e(n) {
        if (r[n])return r[n].exports;
        var o = r[n] = {i: n, l: !1, exports: {}};
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    var r = {};
    e.m = t, e.c = r, e.i = function (t) {
        return t
    }, e.d = function (t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var r = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 3)
}([function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e, r) {
    "use strict";
    e.getJSON = function (t, e) {
        return "jons"
    }
}, function (t, e, r) {
    "use strict";
    function n() {
        return i.default.wrap(function (t) {
            for (; ;)switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, "one";
                case 2:
                    return t.next = 4, "two";
                case 4:
                    return t.next = 6, "three";
                case 6:
                    return t.abrupt("return", "true");
                case 7:
                case"end":
                    return t.stop()
            }
        }, a[0], this)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = r(4), i = function (t) {
        return t && t.__esModule ? t : {default: t}
    }(o);
    e.default = n;
    var a = [n].map(i.default.mark)
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.add = void 0;
    var n = r(2), o = (function (t) {
        t && t.__esModule
    }(n), r(1)), i = function (t, e) {
        return console.log(o.getJSON()), console.log("111111"), t + e
    };
    console.log(i(1, 3)), e.add = i
}, function (t, e, r) {
    t.exports = r(6)
}, function (t, e) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (s === setTimeout)return setTimeout(t, 0);
        if ((s === r || !s) && setTimeout)return s = setTimeout, setTimeout(t, 0);
        try {
            return s(t, 0)
        } catch (e) {
            try {
                return s.call(null, t, 0)
            } catch (e) {
                return s.call(this, t, 0)
            }
        }
    }

    function i(t) {
        if (l === clearTimeout)return clearTimeout(t);
        if ((l === n || !l) && clearTimeout)return l = clearTimeout, clearTimeout(t);
        try {
            return l(t)
        } catch (e) {
            try {
                return l.call(null, t)
            } catch (e) {
                return l.call(this, t)
            }
        }
    }

    function a() {
        y && p && (y = !1, p.length ? d = p.concat(d) : v = -1, d.length && c())
    }

    function c() {
        if (!y) {
            var t = o(a);
            y = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++v < e;)p && p[v].run();
                v = -1, e = d.length
            }
            p = null, y = !1, i(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function f() {
    }

    var s, l, h = t.exports = {};
    !function () {
        try {
            s = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            s = r
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            l = n
        }
    }();
    var p, d = [], y = !1, v = -1;
    h.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var r = 1; r < arguments.length; r++)e[r - 1] = arguments[r];
        d.push(new u(t, e)), 1 !== d.length || y || o(c)
    }, u.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = f, h.addListener = f, h.once = f, h.off = f, h.removeListener = f, h.removeAllListeners = f, h.emit = f, h.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function () {
        return "/"
    }, h.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function () {
        return 0
    }
}, function (t, e, r) {
    (function (e) {
        var n = "object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this, o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0, i = o && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, t.exports = r(7), o)n.regeneratorRuntime = i; else try {
            delete n.regeneratorRuntime
        } catch (t) {
            n.regeneratorRuntime = void 0
        }
    }).call(e, r(0))
}, function (t, e, r) {
    (function (e, r) {
        !function (e) {
            "use strict";
            function n(t, e, r, n) {
                var o = e && e.prototype instanceof i ? e : i, a = Object.create(o.prototype), c = new d(n || []);
                return a._invoke = s(t, r, c), a
            }

            function o(t, e, r) {
                try {
                    return {type: "normal", arg: t.call(e, r)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function i() {
            }

            function a() {
            }

            function c() {
            }

            function u(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function f(t) {
                function e(r, n, i, a) {
                    var c = o(t[r], t, n);
                    if ("throw" !== c.type) {
                        var u = c.arg, f = u.value;
                        return f && "object" == typeof f && w.call(f, "__await") ? Promise.resolve(f.__await).then(function (t) {
                            e("next", t, i, a)
                        }, function (t) {
                            e("throw", t, i, a)
                        }) : Promise.resolve(f).then(function (t) {
                            u.value = t, i(u)
                        }, a)
                    }
                    a(c.arg)
                }

                function n(t, r) {
                    function n() {
                        return new Promise(function (n, o) {
                            e(t, r, n, o)
                        })
                    }

                    return i = i ? i.then(n, n) : n()
                }

                "object" == typeof r && r.domain && (e = r.domain.bind(e));
                var i;
                this._invoke = n
            }

            function s(t, e, r) {
                var n = _;
                return function (i, a) {
                    if (n === O)throw new Error("Generator is already running");
                    if (n === P) {
                        if ("throw" === i)throw a;
                        return v()
                    }
                    for (r.method = i, r.arg = a; ;) {
                        var c = r.delegate;
                        if (c) {
                            var u = l(c, r);
                            if (u) {
                                if (u === k)continue;
                                return u
                            }
                        }
                        if ("next" === r.method)r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                            if (n === _)throw n = P, r.arg;
                            r.dispatchException(r.arg)
                        } else"return" === r.method && r.abrupt("return", r.arg);
                        n = O;
                        var f = o(t, e, r);
                        if ("normal" === f.type) {
                            if (n = r.done ? P : T, f.arg === k)continue;
                            return {value: f.arg, done: r.done}
                        }
                        "throw" === f.type && (n = P, r.method = "throw", r.arg = f.arg)
                    }
                }
            }

            function l(t, e) {
                var r = t.iterator[e.method];
                if (r === g) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = g, l(t, e), "throw" === e.method))return k;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return k
                }
                var n = o(r, t.iterator, e.arg);
                if ("throw" === n.type)return e.method = "throw", e.arg = n.arg, e.delegate = null, k;
                var i = n.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = g), e.delegate = null, k) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, k)
            }

            function h(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function p(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function d(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(h, this), this.reset(!0)
            }

            function y(t) {
                if (t) {
                    var e = t[b];
                    if (e)return e.call(t);
                    if ("function" == typeof t.next)return t;
                    if (!isNaN(t.length)) {
                        var r = -1, n = function e() {
                            for (; ++r < t.length;)if (w.call(t, r))return e.value = t[r], e.done = !1, e;
                            return e.value = g, e.done = !0, e
                        };
                        return n.next = n
                    }
                }
                return {next: v}
            }

            function v() {
                return {value: g, done: !0}
            }

            var g, m = Object.prototype, w = m.hasOwnProperty, x = "function" == typeof Symbol ? Symbol : {}, b = x.iterator || "@@iterator", L = x.toStringTag || "@@toStringTag", E = "object" == typeof t, j = e.regeneratorRuntime;
            if (j)return void(E && (t.exports = j));
            j = e.regeneratorRuntime = E ? t.exports : {}, j.wrap = n;
            var _ = "suspendedStart", T = "suspendedYield", O = "executing", P = "completed", k = {}, N = {};
            N[b] = function () {
                return this
            };
            var R = Object.getPrototypeOf, G = R && R(R(y([])));
            G && G !== m && w.call(G, b) && (N = G);
            var S = c.prototype = i.prototype = Object.create(N);
            a.prototype = S.constructor = c, c.constructor = a, c[L] = a.displayName = "GeneratorFunction", j.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name))
            }, j.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, L in t || (t[L] = "GeneratorFunction")), t.prototype = Object.create(S), t
            }, j.awrap = function (t) {
                return {__await: t}
            }, u(f.prototype), j.AsyncIterator = f, j.async = function (t, e, r, o) {
                var i = new f(n(t, e, r, o));
                return j.isGeneratorFunction(e) ? i : i.next().then(function (t) {
                    return t.done ? t.value : i.next()
                })
            }, u(S), S[L] = "Generator", S.toString = function () {
                return "[object Generator]"
            }, j.keys = function (t) {
                var e = [];
                for (var r in t)e.push(r);
                return e.reverse(), function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t)return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
            }, j.values = y, d.prototype = {
                constructor: d, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = "next", this.arg = g, this.tryEntries.forEach(p), !t)for (var e in this)"t" === e.charAt(0) && w.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = g)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0], e = t.completion;
                    if ("throw" === e.type)throw e.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    function e(e, n) {
                        return i.type = "throw", i.arg = t, r.next = e, n && (r.method = "next", r.arg = g), !!n
                    }

                    if (this.done)throw t;
                    for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n], i = o.completion;
                        if ("root" === o.tryLoc)return e("end");
                        if (o.tryLoc <= this.prev) {
                            var a = w.call(o, "catchLoc"), c = w.call(o, "finallyLoc");
                            if (a && c) {
                                if (this.prev < o.catchLoc)return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)return e(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc)return e(o.catchLoc, !0)
                            } else {
                                if (!c)throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)return e(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && w.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, k) : this.complete(i)
                }, complete: function (t, e) {
                    if ("throw" === t.type)throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), k
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)return this.complete(r.completion, r.afterLoc), p(r), k
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                p(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, r) {
                    return this.delegate = {
                        iterator: y(t),
                        resultName: e,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = g), k
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(e, r(0), r(5))
}]);