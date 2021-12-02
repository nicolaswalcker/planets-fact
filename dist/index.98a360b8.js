/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ !function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.anime = e();
}(this, function() {
    "use strict";
    var n1 = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    }, e1 = {
        duration: 1000,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    }, t1 = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective",
        "matrix",
        "matrix3d"
    ], r1 = {
        CSS: {
        },
        springs: {
        }
    };
    function a1(n, e, t) {
        return Math.min(Math.max(n, e), t);
    }
    function o1(n, e) {
        return n.indexOf(e) > -1;
    }
    function u1(n, e) {
        return n.apply(null, e);
    }
    var i1 = {
        arr: function(n) {
            return Array.isArray(n);
        },
        obj: function(n) {
            return o1(Object.prototype.toString.call(n), "Object");
        },
        pth: function(n) {
            return i1.obj(n) && n.hasOwnProperty("totalLength");
        },
        svg: function(n) {
            return n instanceof SVGElement;
        },
        inp: function(n) {
            return n instanceof HTMLInputElement;
        },
        dom: function(n) {
            return n.nodeType || i1.svg(n);
        },
        str: function(n) {
            return "string" == typeof n;
        },
        fnc: function(n) {
            return "function" == typeof n;
        },
        und: function(n) {
            return void 0 === n;
        },
        nil: function(n) {
            return i1.und(n) || null === n;
        },
        hex: function(n) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
        },
        rgb: function(n) {
            return /^rgb/.test(n);
        },
        hsl: function(n) {
            return /^hsl/.test(n);
        },
        col: function(n) {
            return i1.hex(n) || i1.rgb(n) || i1.hsl(n);
        },
        key: function(t) {
            return !n1.hasOwnProperty(t) && !e1.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t;
        }
    };
    function c1(n2) {
        var e = /\(([^)]+)\)/.exec(n2);
        return e ? e[1].split(",").map(function(n) {
            return parseFloat(n);
        }) : [];
    }
    function s1(n3, e2) {
        var t2 = c1(n3), o2 = a1(i1.und(t2[0]) ? 1 : t2[0], 0.1, 100), u = a1(i1.und(t2[1]) ? 100 : t2[1], 0.1, 100), s = a1(i1.und(t2[2]) ? 10 : t2[2], 0.1, 100), f = a1(i1.und(t2[3]) ? 0 : t2[3], 0.1, 100), l = Math.sqrt(u / o2), d = s / (2 * Math.sqrt(u * o2)), p = d < 1 ? l * Math.sqrt(1 - d * d) : 0, v = 1, h = d < 1 ? (d * l - f) / p : -f + l;
        function g(n) {
            var t = e2 ? e2 * n / 1000 : n;
            return t = d < 1 ? Math.exp(-t * d * l) * (v * Math.cos(p * t) + h * Math.sin(p * t)) : (v + h * t) * Math.exp(-t * l), 0 === n || 1 === n ? n : 1 - t;
        }
        return e2 ? g : function() {
            var e = r1.springs[n3];
            if (e) return e;
            for(var t = 0, a = 0;;)if (1 === g(t += 1 / 6)) {
                if (++a >= 16) break;
            } else a = 0;
            var o = t * (1 / 6) * 1000;
            return r1.springs[n3] = o, o;
        };
    }
    function f1(n) {
        return void 0 === n && (n = 10), function(e) {
            return Math.ceil(a1(e, 0.000001, 1) * n) * (1 / n);
        };
    }
    var l1, d1, p1 = function() {
        var n4 = 11, e3 = 1 / (n4 - 1);
        function t3(n, e) {
            return 1 - 3 * e + 3 * n;
        }
        function r2(n, e) {
            return 3 * e - 6 * n;
        }
        function a2(n) {
            return 3 * n;
        }
        function o3(n, e, o) {
            return ((t3(e, o) * n + r2(e, o)) * n + a2(e)) * n;
        }
        function u2(n, e, o) {
            return 3 * t3(e, o) * n * n + 2 * r2(e, o) * n + a2(e);
        }
        return function(t4, r3, a3, i2) {
            if (0 <= t4 && t4 <= 1 && 0 <= a3 && a3 <= 1) {
                var c = new Float32Array(n4);
                if (t4 !== r3 || a3 !== i2) for(var s = 0; s < n4; ++s)c[s] = o3(s * e3, t4, a3);
                return function(n) {
                    return t4 === r3 && a3 === i2 ? n : 0 === n || 1 === n ? n : o3(f2(n), r3, i2);
                };
            }
            function f2(r4) {
                for(var i3 = 0, s = 1, f = n4 - 1; s !== f && c[s] <= r4; ++s)i3 += e3;
                var l = i3 + (r4 - c[--s]) / (c[s + 1] - c[s]) * e3, d = u2(l, t4, a3);
                return d >= 0.001 ? (function(n, e, t, r) {
                    for(var a = 0; a < 4; ++a){
                        var i = u2(e, t, r);
                        if (0 === i) return e;
                        e -= (o3(e, t, r) - n) / i;
                    }
                    return e;
                })(r4, l, t4, a3) : 0 === d ? l : (function(n, e, t, r, a) {
                    for(var u, i, c = 0; (u = o3(i = e + (t - e) / 2, r, a) - n) > 0 ? t = i : e = i, Math.abs(u) > 0.0000001 && ++c < 10;);
                    return i;
                })(r4, i3, i3 + e3, t4, a3);
            }
        };
    }(), v1 = (l1 = {
        linear: function() {
            return function(n) {
                return n;
            };
        }
    }, d1 = {
        Sine: function() {
            return function(n) {
                return 1 - Math.cos(n * Math.PI / 2);
            };
        },
        Circ: function() {
            return function(n) {
                return 1 - Math.sqrt(1 - n * n);
            };
        },
        Back: function() {
            return function(n) {
                return n * n * (3 * n - 2);
            };
        },
        Bounce: function() {
            return function(n) {
                for(var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - t) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2);
            };
        },
        Elastic: function(n5, e) {
            void 0 === n5 && (n5 = 1), void 0 === e && (e = 0.5);
            var t = a1(n5, 1, 10), r = a1(e, 0.1, 2);
            return function(n) {
                return 0 === n || 1 === n ? n : -t * Math.pow(2, 10 * (n - 1)) * Math.sin((n - 1 - r / (2 * Math.PI) * Math.asin(1 / t)) * (2 * Math.PI) / r);
            };
        }
    }, [
        "Quad",
        "Cubic",
        "Quart",
        "Quint",
        "Expo"
    ].forEach(function(n6, e) {
        d1[n6] = function() {
            return function(n) {
                return Math.pow(n, e + 2);
            };
        };
    }), Object.keys(d1).forEach(function(n7) {
        var e = d1[n7];
        l1["easeIn" + n7] = e, l1["easeOut" + n7] = function(n, t) {
            return function(r) {
                return 1 - e(n, t)(1 - r);
            };
        }, l1["easeInOut" + n7] = function(n, t) {
            return function(r) {
                return r < 0.5 ? e(n, t)(2 * r) / 2 : 1 - e(n, t)(-2 * r + 2) / 2;
            };
        }, l1["easeOutIn" + n7] = function(n, t) {
            return function(r) {
                return r < 0.5 ? (1 - e(n, t)(1 - 2 * r)) / 2 : (e(n, t)(2 * r - 1) + 1) / 2;
            };
        };
    }), l1);
    function h1(n, e) {
        if (i1.fnc(n)) return n;
        var t = n.split("(")[0], r = v1[t], a = c1(n);
        switch(t){
            case "spring":
                return s1(n, e);
            case "cubicBezier":
                return u1(p1, a);
            case "steps":
                return u1(f1, a);
            default:
                return u1(r, a);
        }
    }
    function g1(n) {
        try {
            return document.querySelectorAll(n);
        } catch (n8) {
            return;
        }
    }
    function m1(n, e) {
        for(var t = n.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < t; o++)if (o in n) {
            var u = n[o];
            e.call(r, u, o, n) && a.push(u);
        }
        return a;
    }
    function y1(n9) {
        return n9.reduce(function(n, e) {
            return n.concat(i1.arr(e) ? y1(e) : e);
        }, []);
    }
    function b1(n) {
        return i1.arr(n) ? n : (i1.str(n) && (n = g1(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [
            n
        ]);
    }
    function M1(n10, e) {
        return n10.some(function(n) {
            return n === e;
        });
    }
    function x1(n) {
        var e = {
        };
        for(var t in n)e[t] = n[t];
        return e;
    }
    function w1(n, e) {
        var t = x1(n);
        for(var r in n)t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
        return t;
    }
    function k1(n, e) {
        var t = x1(n);
        for(var r in e)t[r] = i1.und(n[r]) ? e[r] : n[r];
        return t;
    }
    function O1(n11) {
        var e4, t5, r5, a4;
        return i1.rgb(n11) ? (t5 = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e4 = n11)) ? "rgba(" + t5[1] + ",1)" : e4 : i1.hex(n11) ? (r5 = n11.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, e, t, r) {
            return e + e + t + t + r + r;
        }), a4 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r5), "rgba(" + parseInt(a4[1], 16) + "," + parseInt(a4[2], 16) + "," + parseInt(a4[3], 16) + ",1)") : i1.hsl(n11) ? (function(n12) {
            var e5, t6, r, a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n12) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n12), o = parseInt(a[1], 10) / 360, u = parseInt(a[2], 10) / 100, i = parseInt(a[3], 10) / 100, c = a[4] || 1;
            function s(n, e, t) {
                return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < 0.5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n;
            }
            if (0 == u) e5 = t6 = r = i;
            else {
                var f = i < 0.5 ? i * (1 + u) : i + u - i * u, l = 2 * i - f;
                e5 = s(l, f, o + 1 / 3), t6 = s(l, f, o), r = s(l, f, o - 1 / 3);
            }
            return "rgba(" + 255 * e5 + "," + 255 * t6 + "," + 255 * r + "," + c + ")";
        })(n11) : void 0;
    }
    function C1(n) {
        var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
        if (e) return e[1];
    }
    function P1(n, e) {
        return i1.fnc(n) ? n(e.target, e.id, e.total) : n;
    }
    function I1(n, e) {
        return n.getAttribute(e);
    }
    function D1(n, e, t) {
        if (M1([
            t,
            "deg",
            "rad",
            "turn"
        ], C1(e))) return e;
        var a = r1.CSS[e + t];
        if (!i1.und(a)) return a;
        var o = document.createElement(n.tagName), u = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
        u.appendChild(o), o.style.position = "absolute", o.style.width = 100 + t;
        var c = 100 / o.offsetWidth;
        u.removeChild(o);
        var s = c * parseFloat(e);
        return r1.CSS[e + t] = s, s;
    }
    function B1(n, e, t) {
        if (e in n.style) {
            var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
            return t ? D1(n, a, t) : a;
        }
    }
    function T(n, e) {
        return i1.dom(n) && !i1.inp(n) && (!i1.nil(I1(n, e)) || i1.svg(n) && n[e]) ? "attribute" : i1.dom(n) && M1(t1, e) ? "transform" : i1.dom(n) && "transform" !== e && B1(n, e) ? "css" : null != n[e] ? "object" : void 0;
    }
    function E(n) {
        if (i1.dom(n)) {
            for(var e, t = n.style.transform || "", r = /(\w+)\(([^)]*)\)/g, a = new Map; e = r.exec(t);)a.set(e[1], e[2]);
            return a;
        }
    }
    function F(n, e, t, r) {
        var a, u = o1(e, "scale") ? 1 : 0 + (o1(a = e, "translate") || "perspective" === a ? "px" : o1(a, "rotate") || o1(a, "skew") ? "deg" : void 0), i = E(n).get(e) || u;
        return t && (t.transforms.list.set(e, i), t.transforms.last = e), r ? D1(n, i, r) : i;
    }
    function A(n, e, t, r) {
        switch(T(n, e)){
            case "transform":
                return F(n, e, r, t);
            case "css":
                return B1(n, e, t);
            case "attribute":
                return I1(n, e);
            default:
                return n[e] || 0;
        }
    }
    function N(n, e) {
        var t = /^(\*=|\+=|-=)/.exec(n);
        if (!t) return n;
        var r = C1(n) || 0, a = parseFloat(e), o = parseFloat(n.replace(t[0], ""));
        switch(t[0][0]){
            case "+":
                return a + o + r;
            case "-":
                return a - o + r;
            case "*":
                return a * o + r;
        }
    }
    function S(n, e) {
        if (i1.col(n)) return O1(n);
        if (/\s/g.test(n)) return n;
        var t = C1(n), r = t ? n.substr(0, n.length - t.length) : n;
        return e ? r + e : r;
    }
    function L(n, e) {
        return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
    }
    function j(n) {
        for(var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++){
            var o = t.getItem(a);
            a > 0 && (r += L(e, o)), e = o;
        }
        return r;
    }
    function q(n) {
        if (n.getTotalLength) return n.getTotalLength();
        switch(n.tagName.toLowerCase()){
            case "circle":
                return o = n, 2 * Math.PI * I1(o, "r");
            case "rect":
                return 2 * I1(a = n, "width") + 2 * I1(a, "height");
            case "line":
                return L({
                    x: I1(r = n, "x1"),
                    y: I1(r, "y1")
                }, {
                    x: I1(r, "x2"),
                    y: I1(r, "y2")
                });
            case "polyline":
                return j(n);
            case "polygon":
                return t = (e = n).points, j(e) + L(t.getItem(t.numberOfItems - 1), t.getItem(0));
        }
        var e, t, r, a, o;
    }
    function H(n13, e6) {
        var t = e6 || {
        }, r = t.el || function(n) {
            for(var e = n.parentNode; i1.svg(e) && i1.svg(e.parentNode);)e = e.parentNode;
            return e;
        }(n13), a = r.getBoundingClientRect(), o = I1(r, "viewBox"), u = a.width, c = a.height, s = t.viewBox || (o ? o.split(" ") : [
            0,
            0,
            u,
            c
        ]);
        return {
            el: r,
            viewBox: s,
            x: s[0] / 1,
            y: s[1] / 1,
            w: u,
            h: c,
            vW: s[2],
            vH: s[3]
        };
    }
    function V(n, e, t7) {
        function r6(t) {
            void 0 === t && (t = 0);
            var r = e + t >= 1 ? e + t : 0;
            return n.el.getPointAtLength(r);
        }
        var a = H(n.el, n.svg), o = r6(), u = r6(-1), i = r6(1), c = t7 ? 1 : a.w / a.vW, s = t7 ? 1 : a.h / a.vH;
        switch(n.property){
            case "x":
                return (o.x - a.x) * c;
            case "y":
                return (o.y - a.y) * s;
            case "angle":
                return 180 * Math.atan2(i.y - u.y, i.x - u.x) / Math.PI;
        }
    }
    function $(n, e) {
        var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, r = S(i1.pth(n) ? n.totalLength : n, e) + "";
        return {
            original: r,
            numbers: r.match(t) ? r.match(t).map(Number) : [
                0
            ],
            strings: i1.str(n) || e ? r.split(t) : []
        };
    }
    function W(n14) {
        return m1(n14 ? y1(i1.arr(n14) ? n14.map(b1) : b1(n14)) : [], function(n, e, t) {
            return t.indexOf(n) === e;
        });
    }
    function X(n15) {
        var e = W(n15);
        return e.map(function(n, t) {
            return {
                target: n,
                id: t,
                total: e.length,
                transforms: {
                    list: E(n)
                }
            };
        });
    }
    function Y(n16, e) {
        var t8 = x1(e);
        if (/^spring/.test(t8.easing) && (t8.duration = s1(t8.easing)), i1.arr(n16)) {
            var r = n16.length;
            2 === r && !i1.obj(n16[0]) ? n16 = {
                value: n16
            } : i1.fnc(e.duration) || (t8.duration = e.duration / r);
        }
        var a = i1.arr(n16) ? n16 : [
            n16
        ];
        return a.map(function(n, t) {
            var r = i1.obj(n) && !i1.pth(n) ? n : {
                value: n
            };
            return i1.und(r.delay) && (r.delay = t ? 0 : e.delay), i1.und(r.endDelay) && (r.endDelay = t === a.length - 1 ? e.endDelay : 0), r;
        }).map(function(n) {
            return k1(n, t8);
        });
    }
    function Z(n17, e7) {
        var t9 = [], r7 = e7.keyframes;
        for(var a5 in r7 && (e7 = k1(function(n18) {
            for(var e8 = m1(y1(n18.map(function(n) {
                return Object.keys(n);
            })), function(n) {
                return i1.key(n);
            }).reduce(function(n, e) {
                return n.indexOf(e) < 0 && n.push(e), n;
            }, []), t10 = {
            }, r = function(r) {
                var a = e8[r];
                t10[a] = n18.map(function(n) {
                    var e = {
                    };
                    for(var t in n)i1.key(t) ? t == a && (e.value = n[t]) : e[t] = n[t];
                    return e;
                });
            }, a6 = 0; a6 < e8.length; a6++)r(a6);
            return t10;
        }(r7), e7)), e7)i1.key(a5) && t9.push({
            name: a5,
            tweens: Y(e7[a5], n17)
        });
        return t9;
    }
    function G(n19, e9) {
        var t11;
        return n19.tweens.map(function(r) {
            var a7 = function(n20, e) {
                var t = {
                };
                for(var r in n20){
                    var a = P1(n20[r], e);
                    i1.arr(a) && 1 === (a = a.map(function(n) {
                        return P1(n, e);
                    })).length && (a = a[0]), t[r] = a;
                }
                return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t;
            }(r, e9), o = a7.value, u = i1.arr(o) ? o[1] : o, c = C1(u), s = A(e9.target, n19.name, c, e9), f = t11 ? t11.to.original : s, l = i1.arr(o) ? o[0] : f, d = C1(l) || C1(s), p = c || d;
            return i1.und(u) && (u = f), a7.from = $(l, p), a7.to = $(N(u, l), p), a7.start = t11 ? t11.end : 0, a7.end = a7.start + a7.delay + a7.duration + a7.endDelay, a7.easing = h1(a7.easing, a7.duration), a7.isPath = i1.pth(o), a7.isPathTargetInsideSVG = a7.isPath && i1.svg(e9.target), a7.isColor = i1.col(a7.from.original), a7.isColor && (a7.round = 1), t11 = a7, a7;
        });
    }
    var Q = {
        css: function(n, e, t) {
            return n.style[e] = t;
        },
        attribute: function(n, e, t) {
            return n.setAttribute(e, t);
        },
        object: function(n, e, t) {
            return n[e] = t;
        },
        transform: function(n21, e10, t, r, a) {
            if (r.list.set(e10, t), e10 === r.last || a) {
                var o = "";
                r.list.forEach(function(n, e) {
                    o += e + "(" + n + ") ";
                }), n21.style.transform = o;
            }
        }
    };
    function z(n22, e) {
        X(n22).forEach(function(n) {
            for(var t in e){
                var r = P1(e[t], n), a = n.target, o = C1(r), u = A(a, t, o, n), i = N(S(r, o || C1(u)), u), c = T(a, t);
                Q[c](a, t, i, n.transforms, !0);
            }
        });
    }
    function _(n23, e11) {
        return m1(y1(n23.map(function(n24) {
            return e11.map(function(e12) {
                return (function(n, e) {
                    var t = T(n.target, e.name);
                    if (t) {
                        var r = G(e, n), a = r[r.length - 1];
                        return {
                            type: t,
                            property: e.name,
                            animatable: n,
                            tweens: r,
                            duration: a.end,
                            delay: r[0].delay,
                            endDelay: a.endDelay
                        };
                    }
                })(n24, e12);
            });
        })), function(n) {
            return !i1.und(n);
        });
    }
    function R(n25, e) {
        var t = n25.length, r = function(n) {
            return n.timelineOffset ? n.timelineOffset : 0;
        }, a = {
        };
        return a.duration = t ? Math.max.apply(Math, n25.map(function(n) {
            return r(n) + n.duration;
        })) : e.duration, a.delay = t ? Math.min.apply(Math, n25.map(function(n) {
            return r(n) + n.delay;
        })) : e.delay, a.endDelay = t ? a.duration - Math.max.apply(Math, n25.map(function(n) {
            return r(n) + n.duration - n.endDelay;
        })) : e.endDelay, a;
    }
    var J = 0;
    var K = [], U = function() {
        var n26;
        function e(t) {
            for(var r = K.length, a = 0; a < r;){
                var o = K[a];
                o.paused ? (K.splice(a, 1), r--) : (o.tick(t), a++);
            }
            n26 = a > 0 ? requestAnimationFrame(e) : void 0;
        }
        return "undefined" != typeof document && document.addEventListener("visibilitychange", function() {
            en.suspendWhenDocumentHidden && (nn() ? n26 = cancelAnimationFrame(n26) : (K.forEach(function(n) {
                return n._onDocumentVisibility();
            }), U()));
        }), function() {
            n26 || nn() && en.suspendWhenDocumentHidden || !(K.length > 0) || (n26 = requestAnimationFrame(e));
        };
    }();
    function nn() {
        return !!document && document.hidden;
    }
    function en(t12) {
        void 0 === t12 && (t12 = {
        });
        var r8, o4 = 0, u3 = 0, i4 = 0, c2 = 0, s2 = null;
        function f3(n27) {
            var e = window.Promise && new Promise(function(n) {
                return s2 = n;
            });
            return n27.finished = e, e;
        }
        var l2, d2, p2, v2, h2, g2, y2, b2, M = (d2 = w1(n1, l2 = t12), p2 = w1(e1, l2), v2 = Z(p2, l2), h2 = X(l2.targets), g2 = _(h2, v2), y2 = R(g2, p2), b2 = J, J++, k1(d2, {
            id: b2,
            children: [],
            animatables: h2,
            animations: g2,
            duration: y2.duration,
            delay: y2.delay,
            endDelay: y2.endDelay
        }));
        f3(M);
        function x2() {
            var n28 = M.direction;
            "alternate" !== n28 && (M.direction = "normal" !== n28 ? "normal" : "reverse"), M.reversed = !M.reversed, r8.forEach(function(n) {
                return n.reversed = M.reversed;
            });
        }
        function O2(n) {
            return M.reversed ? M.duration - n : n;
        }
        function C2() {
            o4 = 0, u3 = O2(M.currentTime) * (1 / en.speed);
        }
        function P2(n, e) {
            e && e.seek(n - e.timelineOffset);
        }
        function I(n) {
            for(var e13 = 0, t = M.animations, r = t.length; e13 < r;){
                var o = t[e13], u = o.animatable, i = o.tweens, c = i.length - 1, s = i[c];
                c && (s = m1(i, function(e) {
                    return n < e.end;
                })[0] || s);
                for(var f = a1(n - s.start - s.delay, 0, s.duration) / s.duration, l = isNaN(f) ? 1 : s.easing(f), d = s.to.strings, p = s.round, v = [], h = s.to.numbers.length, g = void 0, y = 0; y < h; y++){
                    var b = void 0, x = s.to.numbers[y], w = s.from.numbers[y] || 0;
                    b = s.isPath ? V(s.value, l * x, s.isPathTargetInsideSVG) : w + l * (x - w), p && (s.isColor && y > 2 || (b = Math.round(b * p) / p)), v.push(b);
                }
                var k = d.length;
                if (k) {
                    g = d[0];
                    for(var O = 0; O < k; O++){
                        d[O];
                        var C = d[O + 1], P = v[O];
                        isNaN(P) || (g += C ? P + C : P + " ");
                    }
                } else g = v[0];
                Q[o.type](u.target, o.property, g, u.transforms), o.currentValue = g, e13++;
            }
        }
        function D(n) {
            M[n] && !M.passThrough && M[n](M);
        }
        function B(n29) {
            var e14 = M.duration, t13 = M.delay, l = e14 - M.endDelay, d = O2(n29);
            M.progress = a1(d / e14 * 100, 0, 100), M.reversePlayback = d < M.currentTime, r8 && (function(n) {
                if (M.reversePlayback) for(var e = c2; e--;)P2(n, r8[e]);
                else for(var t = 0; t < c2; t++)P2(n, r8[t]);
            })(d), !M.began && M.currentTime > 0 && (M.began = !0, D("begin")), !M.loopBegan && M.currentTime > 0 && (M.loopBegan = !0, D("loopBegin")), d <= t13 && 0 !== M.currentTime && I(0), (d >= l && M.currentTime !== e14 || !e14) && I(e14), d > t13 && d < l ? (M.changeBegan || (M.changeBegan = !0, M.changeCompleted = !1, D("changeBegin")), D("change"), I(d)) : M.changeBegan && (M.changeCompleted = !0, M.changeBegan = !1, D("changeComplete")), M.currentTime = a1(d, 0, e14), M.began && D("update"), n29 >= e14 && (u3 = 0, M.remaining && !0 !== M.remaining && M.remaining--, M.remaining ? (o4 = i4, D("loopComplete"), M.loopBegan = !1, "alternate" === M.direction && x2()) : (M.paused = !0, M.completed || (M.completed = !0, D("loopComplete"), D("complete"), !M.passThrough && "Promise" in window && (s2(), f3(M)))));
        }
        return M.reset = function() {
            var n = M.direction;
            M.passThrough = !1, M.currentTime = 0, M.progress = 0, M.paused = !0, M.began = !1, M.loopBegan = !1, M.changeBegan = !1, M.completed = !1, M.changeCompleted = !1, M.reversePlayback = !1, M.reversed = "reverse" === n, M.remaining = M.loop, r8 = M.children;
            for(var e = c2 = r8.length; e--;)M.children[e].reset();
            (M.reversed && !0 !== M.loop || "alternate" === n && 1 === M.loop) && M.remaining++, I(M.reversed ? M.duration : 0);
        }, M._onDocumentVisibility = C2, M.set = function(n, e) {
            return z(n, e), M;
        }, M.tick = function(n) {
            i4 = n, o4 || (o4 = i4), B((i4 + (u3 - o4)) * en.speed);
        }, M.seek = function(n) {
            B(O2(n));
        }, M.pause = function() {
            M.paused = !0, C2();
        }, M.play = function() {
            M.paused && (M.completed && M.reset(), M.paused = !1, K.push(M), C2(), U());
        }, M.reverse = function() {
            x2(), M.completed = !M.reversed, C2();
        }, M.restart = function() {
            M.reset(), M.play();
        }, M.remove = function(n) {
            rn(W(n), M);
        }, M.reset(), M.autoplay && M.play(), M;
    }
    function tn(n, e) {
        for(var t = e.length; t--;)M1(n, e[t].animatable.target) && e.splice(t, 1);
    }
    function rn(n, e) {
        var t = e.animations, r = e.children;
        tn(n, t);
        for(var a = r.length; a--;){
            var o = r[a], u = o.animations;
            tn(n, u), u.length || o.children.length || r.splice(a, 1);
        }
        t.length || r.length || e.pause();
    }
    return en.version = "3.2.1", en.speed = 1, en.suspendWhenDocumentHidden = !0, en.running = K, en.remove = function(n) {
        for(var e = W(n), t = K.length; t--;)rn(e, K[t]);
    }, en.get = A, en.set = z, en.convertPx = D1, en.path = function(n30, e) {
        var t = i1.str(n30) ? g1(n30)[0] : n30, r = e || 100;
        return function(n) {
            return {
                property: n,
                el: t,
                svg: H(t),
                totalLength: q(t) * (r / 100)
            };
        };
    }, en.setDashoffset = function(n) {
        var e = q(n);
        return n.setAttribute("stroke-dasharray", e), e;
    }, en.stagger = function(n31, e) {
        void 0 === e && (e = {
        });
        var t = e.direction || "normal", r = e.easing ? h1(e.easing) : null, a = e.grid, o = e.axis, u = e.from || 0, c = "first" === u, s = "center" === u, f = "last" === u, l = i1.arr(n31), d = l ? parseFloat(n31[0]) : parseFloat(n31), p = l ? parseFloat(n31[1]) : 0, v = C1(l ? n31[1] : n31) || 0, g = e.start || 0 + (l ? d : 0), m = [], y = 0;
        return function(n32, e, i) {
            if (c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length) {
                for(var h = 0; h < i; h++){
                    if (a) {
                        var b = s ? (a[0] - 1) / 2 : u % a[0], M = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]), x = b - h % a[0], w = M - Math.floor(h / a[0]), k = Math.sqrt(x * x + w * w);
                        "x" === o && (k = -x), "y" === o && (k = -w), m.push(k);
                    } else m.push(Math.abs(u - h));
                    y = Math.max.apply(Math, m);
                }
                r && (m = m.map(function(n) {
                    return r(n / y) * y;
                })), "reverse" === t && (m = m.map(function(n) {
                    return o ? n < 0 ? -1 * n : -n : Math.abs(y - n);
                }));
            }
            return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + v;
        };
    }, en.timeline = function(n33) {
        void 0 === n33 && (n33 = {
        });
        var t = en(n33);
        return t.duration = 0, t.add = function(r, a) {
            var o = K.indexOf(t), u = t.children;
            function c(n) {
                n.passThrough = !0;
            }
            o > -1 && K.splice(o, 1);
            for(var s = 0; s < u.length; s++)c(u[s]);
            var f = k1(r, w1(e1, n33));
            f.targets = f.targets || n33.targets;
            var l = t.duration;
            f.autoplay = !1, f.direction = t.direction, f.timelineOffset = i1.und(a) ? l : N(a, l), c(t), t.seek(f.timelineOffset);
            var d = en(f);
            c(d), u.push(d);
            var p = R(u, n33);
            return t.delay = p.delay, t.endDelay = p.endDelay, t.duration = p.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t;
        }, t;
    }, en.easing = h1, en.penner = v1, en.random = function(n, e) {
        return Math.floor(Math.random() * (e - n + 1)) + n;
    }, en;
});

//# sourceMappingURL=index.98a360b8.js.map
