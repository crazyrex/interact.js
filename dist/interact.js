/**
 * interact.js @41ef1c4
 *
 * Copyright (c) 2012-2017 Taye Adeyemi <dev@taye.me>
 * Open source under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.interact = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* interact.js @332e9a2-dirty | https://raw.github.com/taye/interact.js/master/LICENSE */
!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.interact = e();
  }
}(function () {
  return function e(t, n, r) {
    function i(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var l = "function" == typeof require && require;if (!a && l) return l(s, !0);if (o) return o(s, !0);var c = new Error("Cannot find module '" + s + "'");throw c.code = "MODULE_NOT_FOUND", c;
        }var p = n[s] = { exports: {} };t[s][0].call(p.exports, function (e) {
          var n = t[s][1][e];return i(n ? n : e);
        }, p, p.exports, e, t, n, r);
      }return n[s].exports;
    }for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) {
      i(r[s]);
    }return i;
  }({ 1: [function (e, t, n) {
      "use strict";
      "undefined" == typeof window ? t.exports = function (t) {
        return e("./src/utils/window").init(t), e("./src/index");
      } : t.exports = e("./src/index");
    }, { "./src/index": 19, "./src/utils/window": 48 }], 2: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function i(e, t) {
        for (var n = 0, r = t.length; n < r && !e.immediatePropagationStopped; n++) {
          t[n](e);
        }
      }var o = e("./utils/arr"),
          s = o.indexOf,
          a = e("./utils/extend.js"),
          l = function () {
        function e(t) {
          r(this, e), this.options = a({}, t || {});
        }return e.prototype.fire = function (e) {
          var t = void 0,
              n = "on" + e.type,
              r = this.global;(t = this[e.type]) && i(e, t), this[n] && this[n](e), !e.propagationStopped && r && (t = r[e.type]) && i(e, t);
        }, e.prototype.on = function (e, t) {
          this[e] ? this[e].push(t) : this[e] = [t];
        }, e.prototype.off = function (e, t) {
          var n = this[e],
              r = n ? s(n, t) : -1;r !== -1 && n.splice(r, 1), (n && 0 === n.length || !t) && (this[e] = t);
        }, e;
      }();t.exports = l;
    }, { "./utils/arr": 33, "./utils/extend.js": 38 }], 3: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }var i = e("./utils/extend"),
          o = e("./utils/getOriginXY"),
          s = e("./defaultOptions"),
          a = e("./utils/Signals").new(),
          l = function () {
        function e(t, n, l, c, p, u) {
          var d = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];r(this, e);var f = t.target,
              v = (f && f.options || s).deltaSource,
              g = o(f, p, l),
              h = "start" === c,
              m = "end" === c,
              y = h ? t.startCoords : t.curCoords,
              x = t.prevEvent;p = p || t.element;var b = i({}, y.page),
              w = i({}, y.client);b.x -= g.x, b.y -= g.y, w.x -= g.x, w.y -= g.y, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.button = n.button, this.buttons = n.buttons, this.target = p, this.currentTarget = p, this.relatedTarget = u || null, this.preEnd = d, this.type = l + (c || ""), this.interaction = t, this.interactable = f, this.t0 = h ? t.downTimes[t.downTimes.length - 1] : x.t0;var E = { interaction: t, event: n, action: l, phase: c, element: p, related: u, page: b, client: w, coords: y, starting: h, ending: m, deltaSource: v, iEvent: this };a.fire("set-xy", E), m ? (this.pageX = x.pageX, this.pageY = x.pageY, this.clientX = x.clientX, this.clientY = x.clientY) : (this.pageX = b.x, this.pageY = b.y, this.clientX = w.x, this.clientY = w.y), this.x0 = t.startCoords.page.x - g.x, this.y0 = t.startCoords.page.y - g.y, this.clientX0 = t.startCoords.client.x - g.x, this.clientY0 = t.startCoords.client.y - g.y, a.fire("set-delta", E), this.timeStamp = y.timeStamp, this.dt = t.pointerDelta.timeStamp, this.duration = this.timeStamp - this.t0, this.speed = t.pointerDelta[v].speed, this.velocityX = t.pointerDelta[v].vx, this.velocityY = t.pointerDelta[v].vy, this.swipe = m || "inertiastart" === c ? this.getSwipe() : null, a.fire("new", E);
        }return e.prototype.getSwipe = function () {
          var e = this.interaction;if (e.prevEvent.speed < 600 || this.timeStamp - e.prevEvent.timeStamp > 150) return null;var t = 180 * Math.atan2(e.prevEvent.velocityY, e.prevEvent.velocityX) / Math.PI;t < 0 && (t += 360);var n = 112.5 <= t && t < 247.5,
              r = 202.5 <= t && t < 337.5,
              i = !n && (292.5 <= t || t < 67.5);return { up: r, down: !r && 22.5 <= t && t < 157.5, left: n, right: i, angle: t, speed: e.prevEvent.speed, velocity: { x: e.prevEvent.velocityX, y: e.prevEvent.velocityY } };
        }, e.prototype.preventDefault = function () {}, e.prototype.stopImmediatePropagation = function () {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        }, e.prototype.stopPropagation = function () {
          this.propagationStopped = !0;
        }, e;
      }();a.on("set-delta", function (e) {
        var t = e.iEvent,
            n = e.interaction,
            r = e.starting,
            i = e.deltaSource,
            o = r ? t : n.prevEvent;"client" === i ? (t.dx = t.clientX - o.clientX, t.dy = t.clientY - o.clientY) : (t.dx = t.pageX - o.pageX, t.dy = t.pageY - o.pageY);
      }), l.signals = a, t.exports = l;
    }, { "./defaultOptions": 18, "./utils/Signals": 32, "./utils/extend": 38, "./utils/getOriginXY": 39 }], 4: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }var i = e("./utils/is"),
          o = e("./utils/events"),
          s = e("./utils/extend"),
          a = e("./actions/base"),
          l = e("./scope"),
          c = e("./Eventable"),
          p = e("./defaultOptions"),
          u = e("./utils/Signals").new(),
          d = e("./utils/domUtils"),
          f = d.getElementRect,
          v = d.nodeContains,
          g = d.trySelector,
          h = e("./utils/window"),
          m = h.getWindow,
          y = e("./utils/arr"),
          x = y.indexOf,
          b = y.contains,
          w = e("./utils/browser"),
          E = w.wheelEvent;l.interactables = [];var S = function () {
        function e(t, n) {
          r(this, e), n = n || {}, this.target = t, this.events = new c(), this._context = n.context || l.document, this._win = m(g(t) ? this._context : t), this._doc = this._win.document, u.fire("new", { target: t, options: n, interactable: this, win: this._win }), l.addDocument(this._doc, this._win), l.interactables.push(this), this.set(n);
        }return e.prototype.setOnEvents = function (e, t) {
          var n = "on" + e;return i.function(t.onstart) && (this.events[n + "start"] = t.onstart), i.function(t.onmove) && (this.events[n + "move"] = t.onmove), i.function(t.onend) && (this.events[n + "end"] = t.onend), i.function(t.oninertiastart) && (this.events[n + "inertiastart"] = t.oninertiastart), this;
        }, e.prototype.setPerAction = function (e, t) {
          for (var n in t) {
            n in p[e] && (i.object(t[n]) ? (this.options[e][n] = s(this.options[e][n] || {}, t[n]), i.object(p.perAction[n]) && "enabled" in p.perAction[n] && (this.options[e][n].enabled = t[n].enabled !== !1)) : i.bool(t[n]) && i.object(p.perAction[n]) ? this.options[e][n].enabled = t[n] : void 0 !== t[n] && (this.options[e][n] = t[n]));
          }
        }, e.prototype.getRect = function (e) {
          return e = e || this.target, i.string(this.target) && !i.element(e) && (e = this._context.querySelector(this.target)), f(e);
        }, e.prototype.rectChecker = function (e) {
          return i.function(e) ? (this.getRect = e, this) : null === e ? (delete this.options.getRect, this) : this.getRect;
        }, e.prototype._backCompatOption = function (e, t) {
          if (g(t) || i.object(t)) {
            this.options[e] = t;for (var n = a.names, r = Array.isArray(n), o = 0, n = r ? n : n[Symbol.iterator]();;) {
              var s;if (r) {
                if (o >= n.length) break;s = n[o++];
              } else {
                if (o = n.next(), o.done) break;s = o.value;
              }var l = s;this.options[l][e] = t;
            }return this;
          }return this.options[e];
        }, e.prototype.origin = function (e) {
          return this._backCompatOption("origin", e);
        }, e.prototype.deltaSource = function (e) {
          return "page" === e || "client" === e ? (this.options.deltaSource = e, this) : this.options.deltaSource;
        }, e.prototype.context = function () {
          return this._context;
        }, e.prototype.inContext = function (e) {
          return this._context === e.ownerDocument || v(this._context, e);
        }, e.prototype.fire = function (e) {
          return this.events.fire(e), this;
        }, e.prototype._onOffMultiple = function (e, t, n, r) {
          if (i.string(t) && t.search(" ") !== -1 && (t = t.trim().split(/ +/)), i.array(t)) {
            for (var o = 0; o < t.length; o++) {
              this[e](t[o], n, r);
            }return !0;
          }if (i.object(t)) {
            for (var s in t) {
              this[e](s, t[s], n);
            }return !0;
          }
        }, e.prototype.on = function (t, n, r) {
          return r = !!r, this._onOffMultiple("on", t, n, r) ? this : ("wheel" === t && (t = E), b(e.eventTypes, t) ? this.events.on(t, n) : i.string(this.target) ? o.addDelegate(this.target, this._context, t, n, r) : o.add(this.target, t, n, r), this);
        }, e.prototype.off = function (t, n, r) {
          return r = !!r, this._onOffMultiple("off", t, n, r) ? this : ("wheel" === t && (t = E), b(e.eventTypes, t) ? this.events.off(t, n) : i.string(this.target) ? o.removeDelegate(this.target, this._context, t, n, r) : o.remove(this.target, t, n, r), this);
        }, e.prototype.set = function (t) {
          i.object(t) || (t = {}), this.options = s({}, p.base);var n = s({}, p.perAction);for (var r in a.methodDict) {
            var o = a.methodDict[r];this.options[r] = s({}, p[r]), this.setPerAction(r, n), this[o](t[r]);
          }for (var l = e.settingsMethods, c = Array.isArray(l), d = 0, l = c ? l : l[Symbol.iterator]();;) {
            var f;if (c) {
              if (d >= l.length) break;f = l[d++];
            } else {
              if (d = l.next(), d.done) break;f = d.value;
            }var v = f;this.options[v] = p.base[v], v in t && this[v](t[v]);
          }return u.fire("set", { options: t, interactable: this }), this;
        }, e.prototype.unset = function () {
          if (o.remove(this.target, "all"), i.string(this.target)) for (var e in o.delegatedEvents) {
            var t = o.delegatedEvents[e];t.selectors[0] === this.target && t.contexts[0] === this._context && (t.selectors.splice(0, 1), t.contexts.splice(0, 1), t.listeners.splice(0, 1), t.selectors.length || (t[e] = null)), o.remove(this._context, e, o.delegateListener), o.remove(this._context, e, o.delegateUseCapture, !0);
          } else o.remove(this, "all");u.fire("unset", { interactable: this }), l.interactables.splice(x(l.interactables, this), 1);for (var n = l.interactions || [], r = Array.isArray(n), s = 0, n = r ? n : n[Symbol.iterator]();;) {
            var a;if (r) {
              if (s >= n.length) break;a = n[s++];
            } else {
              if (s = n.next(), s.done) break;a = s.value;
            }var c = a;c.target === this && c.interacting() && c.stop();
          }return l.interact;
        }, e;
      }();l.interactables.indexOfElement = function (e, t) {
        t = t || l.document;for (var n = 0; n < this.length; n++) {
          var r = this[n];if (r.target === e && (!i.string(e) || r._context === t)) return n;
        }return -1;
      }, l.interactables.get = function (e, t, n) {
        var r = this[this.indexOfElement(e, t && t.context)];return r && (n || r.inContext(e)) ? r : null;
      }, l.interactables.forEachSelector = function (e, t) {
        for (var n = 0; n < this.length; n++) {
          var r = this[n];if (i.string(r.target) && (!t || r.inContext(t))) {
            var o = e(r, r.target, r._context, n, this);if (void 0 !== o) return o;
          }
        }
      }, S.eventTypes = l.eventTypes = [], S.signals = u, S.settingsMethods = ["deltaSource", "origin", "preventDefault", "rectChecker"], t.exports = S;
    }, { "./Eventable": 2, "./actions/base": 6, "./defaultOptions": 18, "./scope": 31, "./utils/Signals": 32, "./utils/arr": 33, "./utils/browser": 34, "./utils/domUtils": 36, "./utils/events": 37, "./utils/extend": 38, "./utils/is": 43, "./utils/window": 48 }], 5: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function i(e) {
        return function (t) {
          var n = l.getEventTargets(t),
              r = n[0],
              i = n[1],
              o = [];if (p.supportsTouch && /touch/.test(t.type)) {
            g = new Date().getTime();for (var s = 0; s < t.changedTouches.length; s++) {
              var c = t.changedTouches[s],
                  d = u.search(c, t.type, r);o.push([c, d || new h()]);
            }
          } else {
            var f = !1;if (!p.supportsPointerEvent && /mouse/.test(t.type)) {
              for (var v = 0; v < a.interactions.length && !f; v++) {
                f = !a.interactions[v].mouse && a.interactions[v].pointerIsDown;
              }f = f || new Date().getTime() - g < 500 || 0 === t.timeStamp;
            }if (!f) {
              var m = u.search(t, t.type, r);m || (m = new h(), m.mouse = /mouse/i.test(t.pointerType || t.type) || 4 === t.pointerType || !t.pointerType), o.push([t, m]);
            }
          }for (var y = o, x = Array.isArray(y), b = 0, y = x ? y : y[Symbol.iterator]();;) {
            var w;if (x) {
              if (b >= y.length) break;w = y[b++];
            } else {
              if (b = y.next(), b.done) break;w = b.value;
            }var E = w,
                S = E[0],
                T = E[1];T._updateEventTargets(r, i), T[e](S, t, r, i);
          }
        };
      }function o(e) {
        for (var t = 0; t < a.interactions.length; t++) {
          var n = a.interactions[t];n.end(e), d.fire("endall", { event: e, interaction: n });
        }
      }function s(e, t) {
        var n = e.doc,
            r = 0 === t.indexOf("add") ? c.add : c.remove;for (var i in a.delegatedEvents) {
          r(n, i, c.delegateListener), r(n, i, c.delegateUseCapture, !0);
        }for (var o in b) {
          r(n, o, b[o]);
        }
      }var a = e("./scope"),
          l = e("./utils"),
          c = e("./utils/events"),
          p = e("./utils/browser"),
          u = e("./utils/interactionFinder"),
          d = e("./utils/Signals").new(),
          f = {},
          v = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer"],
          g = 0;a.interactions = [];for (var h = function () {
        function e() {
          r(this, e), this.target = null, this.element = null, this.prepared = { name: null, axis: null, edges: null }, this.pointers = [], this.pointerIds = [], this.downTargets = [], this.downTimes = [], this.prevCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.curCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.startCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.pointerDelta = { page: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 }, client: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 }, timeStamp: 0 }, this.downEvent = null, this.downPointer = {}, this._eventTarget = null, this._curEventTarget = null, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this.mouse = !1, d.fire("new", this), a.interactions.push(this);
        }return e.prototype.pointerDown = function (e, t, n) {
          var r = this.updatePointer(e, t, !0);d.fire("down", { pointer: e, event: t, eventTarget: n, pointerIndex: r, interaction: this });
        }, e.prototype.start = function (e, t, n) {
          this.interacting() || !this.pointerIsDown || this.pointerIds.length < ("gesture" === e.name ? 2 : 1) || (l.indexOf(a.interactions, this) === -1 && a.interactions.push(this), l.copyAction(this.prepared, e), this.target = t, this.element = n, d.fire("action-start", { interaction: this, event: this.downEvent }));
        }, e.prototype.pointerMove = function (t, n, r) {
          this.simulation || (this.updatePointer(t), l.setCoords(this.curCoords, this.pointers));var i = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y,
              o = void 0,
              s = void 0;this.pointerIsDown && !this.pointerWasMoved && (o = this.curCoords.client.x - this.startCoords.client.x, s = this.curCoords.client.y - this.startCoords.client.y, this.pointerWasMoved = l.hypot(o, s) > e.pointerMoveTolerance);var a = { pointer: t, pointerIndex: this.getPointerIndex(t), event: n, eventTarget: r, dx: o, dy: s, duplicate: i, interaction: this, interactingBeforeMove: this.interacting() };i || l.setCoordDeltas(this.pointerDelta, this.prevCoords, this.curCoords), d.fire("move", a), i || (this.interacting() && this.doMove(a), this.pointerWasMoved && l.copyCoords(this.prevCoords, this.curCoords));
        }, e.prototype.doMove = function (e) {
          e = l.extend({ pointer: this.pointers[0], event: this.prevEvent, eventTarget: this._eventTarget, interaction: this }, e || {}), d.fire("before-action-move", e), this._dontFireMove || d.fire("action-move", e), this._dontFireMove = !1;
        }, e.prototype.pointerUp = function (e, t, n, r) {
          var i = this.getPointerIndex(e);d.fire(/cancel$/i.test(t.type) ? "cancel" : "up", { pointer: e, pointerIndex: i, event: t, eventTarget: n, curEventTarget: r, interaction: this }), this.simulation || this.end(t), this.pointerIsDown = !1, this.removePointer(e, t);
        }, e.prototype.end = function (e) {
          e = e || this.prevEvent, this.interacting() && d.fire("action-end", { event: e, interaction: this }), this.stop();
        }, e.prototype.currentAction = function () {
          return this._interacting ? this.prepared.name : null;
        }, e.prototype.interacting = function () {
          return this._interacting;
        }, e.prototype.stop = function () {
          d.fire("stop", { interaction: this }), this._interacting && (d.fire("stop-active", { interaction: this }), d.fire("stop-" + this.prepared.name, { interaction: this })), this.target = this.element = null, this._interacting = !1, this.prepared.name = this.prevEvent = null;
        }, e.prototype.getPointerIndex = function (e) {
          return l.indexOf(this.pointerIds, l.getPointerId(e));
        }, e.prototype.updatePointer = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t && /(down|start)$/i.test(t.type),
              r = l.getPointerId(e),
              i = this.getPointerIndex(e);return i === -1 && (i = this.pointerIds.length, this.pointerIds[i] = r), n && d.fire("update-pointer-down", { pointer: e, event: t, down: n, pointerId: r, pointerIndex: i, interaction: this }), this.pointers[i] = e, i;
        }, e.prototype.removePointer = function (e, t) {
          var n = l.getPointerId(e),
              r = this.mouse ? 0 : l.indexOf(this.pointerIds, n);r !== -1 && (d.fire("remove-pointer", { pointer: e, event: t, pointerIndex: r, interaction: this }), this.pointers.splice(r, 1), this.pointerIds.splice(r, 1), this.downTargets.splice(r, 1), this.downTimes.splice(r, 1));
        }, e.prototype._updateEventTargets = function (e, t) {
          this._eventTarget = e, this._curEventTarget = t;
        }, e;
      }(), m = 0, y = v.length; m < y; m++) {
        var x = v[m];f[x] = i(x);
      }var b = {},
          w = p.pEventTypes;a.PointerEvent ? (b[w.down] = f.pointerDown, b[w.move] = f.pointerMove, b[w.up] = f.pointerUp, b[w.cancel] = f.pointerUp) : (b.mousedown = f.pointerDown, b.mousemove = f.pointerMove, b.mouseup = f.pointerUp, b.touchstart = f.pointerDown, b.touchmove = f.pointerMove, b.touchend = f.pointerUp, b.touchcancel = f.pointerUp), b.blur = o, d.on("update-pointer-down", function (e) {
        var t = e.interaction,
            n = e.pointer,
            r = e.pointerId,
            i = e.pointerIndex,
            o = e.event,
            s = e.eventTarget,
            a = e.down;t.pointerIds[i] = r, t.pointers[i] = n, a && (t.pointerIsDown = !0), t.interacting() || (l.setCoords(t.startCoords, t.pointers), l.copyCoords(t.curCoords, t.startCoords), l.copyCoords(t.prevCoords, t.startCoords), t.downEvent = o, t.downTimes[i] = t.curCoords.timeStamp, t.downTargets[i] = s || o && l.getEventTargets(o)[0], t.pointerWasMoved = !1, l.pointerExtend(t.downPointer, n));
      }), a.signals.on("add-document", s), a.signals.on("remove-document", s), h.pointerMoveTolerance = 1, h.doOnInteractions = i, h.endAll = o, h.signals = d, h.docEvents = b, a.endAllInteractions = o, t.exports = h;
    }, { "./scope": 31, "./utils": 41, "./utils/Signals": 32, "./utils/browser": 34, "./utils/events": 37, "./utils/interactionFinder": 42 }], 6: [function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        var i = e.prepared.name,
            s = new o(e, t, i, n, e.element, null, r);e.target.fire(s), e.prevEvent = s;
      }var i = e("../Interaction"),
          o = e("../InteractEvent"),
          s = { firePrepared: r, names: [], methodDict: {} };i.signals.on("action-start", function (e) {
        var t = e.interaction;r(t, e.event, "start"), t._interacting = !0;
      }), i.signals.on("action-move", function (e) {
        var t = e.interaction;if (r(t, e.event, "move", e.preEnd), !t.interacting()) return !1;
      }), i.signals.on("action-end", function (e) {
        r(e.interaction, e.event, "end");
      }), t.exports = s;
    }, { "../InteractEvent": 3, "../Interaction": 5 }], 7: [function (e, t, n) {
      "use strict";
      var r = e("./base"),
          i = e("../utils"),
          o = e("../InteractEvent"),
          s = e("../Interactable"),
          a = e("../Interaction"),
          l = e("../defaultOptions"),
          c = { defaults: { enabled: !1, mouseButtons: null, origin: null, snap: null, restrict: null, inertia: null, autoScroll: null, startAxis: "xy", lockAxis: "xy" }, checker: function checker(e, t, n) {
          var r = n.options.drag;return r.enabled ? { name: "drag", axis: "start" === r.lockAxis ? r.startAxis : r.lockAxis } : null;
        }, getCursor: function getCursor() {
          return "move";
        } };a.signals.on("before-action-move", function (e) {
        var t = e.interaction;if ("drag" === t.prepared.name) {
          var n = t.prepared.axis;"x" === n ? (t.curCoords.page.y = t.startCoords.page.y, t.curCoords.client.y = t.startCoords.client.y, t.pointerDelta.page.speed = Math.abs(t.pointerDelta.page.vx), t.pointerDelta.client.speed = Math.abs(t.pointerDelta.client.vx), t.pointerDelta.client.vy = 0, t.pointerDelta.page.vy = 0) : "y" === n && (t.curCoords.page.x = t.startCoords.page.x, t.curCoords.client.x = t.startCoords.client.x, t.pointerDelta.page.speed = Math.abs(t.pointerDelta.page.vy), t.pointerDelta.client.speed = Math.abs(t.pointerDelta.client.vy), t.pointerDelta.client.vx = 0, t.pointerDelta.page.vx = 0);
        }
      }), o.signals.on("new", function (e) {
        var t = e.iEvent,
            n = e.interaction;if ("dragmove" === t.type) {
          var r = n.prepared.axis;"x" === r ? (t.pageY = n.startCoords.page.y, t.clientY = n.startCoords.client.y, t.dy = 0) : "y" === r && (t.pageX = n.startCoords.page.x, t.clientX = n.startCoords.client.x, t.dx = 0);
        }
      }), s.prototype.draggable = function (e) {
        return i.is.object(e) ? (this.options.drag.enabled = e.enabled !== !1, this.setPerAction("drag", e), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(e.lockAxis) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(e.startAxis) && (this.options.drag.startAxis = e.startAxis), this) : i.is.bool(e) ? (this.options.drag.enabled = e, e || (this.ondragstart = this.ondragstart = this.ondragend = null), this) : this.options.drag;
      }, r.drag = c, r.names.push("drag"), i.merge(s.eventTypes, ["dragstart", "dragmove", "draginertiastart", "draginertiaresume", "dragend"]), r.methodDict.drag = "draggable", l.drag = c.defaults, t.exports = c;
    }, { "../InteractEvent": 3, "../Interactable": 4, "../Interaction": 5, "../defaultOptions": 18, "../utils": 41, "./base": 6 }], 8: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = [],
            r = [];t = t || e.element;for (var i = u.interactables, o = Array.isArray(i), s = 0, i = o ? i : i[Symbol.iterator]();;) {
          var a;if (o) {
            if (s >= i.length) break;a = i[s++];
          } else {
            if (s = i.next(), s.done) break;a = s.value;
          }var l = a;if (l.options.drop.enabled) {
            var c = l.options.drop.accept;if (!(p.is.element(c) && c !== t || p.is.string(c) && !p.matchesSelector(t, c))) for (var d = p.is.string(l.target) ? l._context.querySelectorAll(l.target) : [l.target], f = 0; f < d.length; f++) {
              var v = d[f];v !== t && (n.push(l), r.push(v));
            }
          }
        }return { elements: r, dropzones: n };
      }function i(e, t) {
        for (var n = void 0, r = 0; r < e.activeDrops.dropzones.length; r++) {
          var i = e.activeDrops.dropzones[r],
              o = e.activeDrops.elements[r];o !== n && (t.target = o, i.fire(t)), n = o;
        }
      }function o(e, t) {
        var n = r(e, t, !0);e.activeDrops.dropzones = n.dropzones, e.activeDrops.elements = n.elements, e.activeDrops.rects = [];for (var i = 0; i < e.activeDrops.dropzones.length; i++) {
          e.activeDrops.rects[i] = e.activeDrops.dropzones[i].getRect(e.activeDrops.elements[i]);
        }
      }function s(e, t, n) {
        var r = e.interaction,
            i = [];y && o(r, n);for (var s = 0; s < r.activeDrops.dropzones.length; s++) {
          var a = r.activeDrops.dropzones[s],
              l = r.activeDrops.elements[s],
              c = r.activeDrops.rects[s];i.push(a.dropCheck(e, t, r.target, n, l, c) ? l : null);
        }var u = p.indexOfDeepestElement(i);return { dropzone: r.activeDrops.dropzones[u] || null, element: r.activeDrops.elements[u] || null };
      }function a(e, t, n) {
        var r = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null },
            i = { dragEvent: n, interaction: e, target: e.dropElement, dropzone: e.dropTarget, relatedTarget: n.target, draggable: n.interactable, timeStamp: n.timeStamp };return e.dropElement !== e.prevDropElement && (e.prevDropTarget && (r.leave = p.extend({ type: "dragleave" }, i), n.dragLeave = r.leave.target = e.prevDropElement, n.prevDropzone = r.leave.dropzone = e.prevDropTarget), e.dropTarget && (r.enter = { dragEvent: n, interaction: e, target: e.dropElement, dropzone: e.dropTarget, relatedTarget: n.target, draggable: n.interactable, timeStamp: n.timeStamp, type: "dragenter" }, n.dragEnter = e.dropElement, n.dropzone = e.dropTarget)), "dragend" === n.type && e.dropTarget && (r.drop = p.extend({ type: "drop" }, i), n.dropzone = e.dropTarget, n.relatedTarget = e.dropElement), "dragstart" === n.type && (r.activate = p.extend({ type: "dropactivate" }, i), r.activate.target = null, r.activate.dropzone = null), "dragend" === n.type && (r.deactivate = p.extend({ type: "dropdeactivate" }, i), r.deactivate.target = null, r.deactivate.dropzone = null), "dragmove" === n.type && e.dropTarget && (r.move = p.extend({ dragmove: n, type: "dropmove" }, i), n.dropzone = e.dropTarget), r;
      }function l(e, t) {
        t.leave && e.prevDropTarget.fire(t.leave), t.move && e.dropTarget.fire(t.move), t.enter && e.dropTarget.fire(t.enter), t.drop && e.dropTarget.fire(t.drop), t.move && e.dropTarget.fire(t.move), t.deactivate && i(e, t.deactivate), e.prevDropTarget = e.dropTarget, e.prevDropElement = e.dropElement;
      }var c = e("./base"),
          p = e("../utils"),
          u = e("../scope"),
          d = e("../interact"),
          f = e("../InteractEvent"),
          v = e("../Interactable"),
          g = e("../Interaction"),
          h = e("../defaultOptions"),
          m = { defaults: { enabled: !1, accept: null, overlap: "pointer" } },
          y = !1;g.signals.on("action-start", function (e) {
        var t = e.interaction,
            n = e.event;if ("drag" === t.prepared.name) {
          t.activeDrops.dropzones = [], t.activeDrops.elements = [], t.activeDrops.rects = [], t.dropEvents = null, t.dynamicDrop || o(t, t.element);var r = t.prevEvent,
              s = a(t, n, r);s.activate && i(t, s.activate);
        }
      }), f.signals.on("new", function (e) {
        var t = e.interaction,
            n = e.iEvent,
            r = e.event;if ("dragmove" === n.type || "dragend" === n.type) {
          var i = t.element,
              o = n,
              l = s(o, r, i);t.dropTarget = l.dropzone, t.dropElement = l.element, t.dropEvents = a(t, r, o);
        }
      }), g.signals.on("action-move", function (e) {
        var t = e.interaction;"drag" === t.prepared.name && l(t, t.dropEvents);
      }), g.signals.on("action-end", function (e) {
        var t = e.interaction;"drag" === t.prepared.name && l(t, t.dropEvents);
      }), g.signals.on("stop-drag", function (e) {
        var t = e.interaction;t.activeDrops.dropzones = t.activeDrops.elements = t.activeDrops.rects = t.dropEvents = null;
      }), v.prototype.dropzone = function (e) {
        return p.is.object(e) ? (this.options.drop.enabled = e.enabled !== !1, p.is.function(e.ondrop) && (this.events.ondrop = e.ondrop), p.is.function(e.ondropactivate) && (this.events.ondropactivate = e.ondropactivate), p.is.function(e.ondropdeactivate) && (this.events.ondropdeactivate = e.ondropdeactivate), p.is.function(e.ondragenter) && (this.events.ondragenter = e.ondragenter), p.is.function(e.ondragleave) && (this.events.ondragleave = e.ondragleave), p.is.function(e.ondropmove) && (this.events.ondropmove = e.ondropmove), /^(pointer|center)$/.test(e.overlap) ? this.options.drop.overlap = e.overlap : p.is.number(e.overlap) && (this.options.drop.overlap = Math.max(Math.min(1, e.overlap), 0)), "accept" in e && (this.options.drop.accept = e.accept), "checker" in e && (this.options.drop.checker = e.checker), this) : p.is.bool(e) ? (this.options.drop.enabled = e, e || (this.ondragenter = this.ondragleave = this.ondrop = this.ondropactivate = this.ondropdeactivate = null), this) : this.options.drop;
      }, v.prototype.dropCheck = function (e, t, n, r, i, o) {
        var s = !1;if (!(o = o || this.getRect(i))) return !!this.options.drop.checker && this.options.drop.checker(e, t, s, this, i, n, r);var a = this.options.drop.overlap;if ("pointer" === a) {
          var l = p.getOriginXY(n, r, "drag"),
              c = p.getPageXY(e);c.x += l.x, c.y += l.y;var u = c.x > o.left && c.x < o.right,
              d = c.y > o.top && c.y < o.bottom;s = u && d;
        }var f = n.getRect(r);if (f && "center" === a) {
          var v = f.left + f.width / 2,
              g = f.top + f.height / 2;s = v >= o.left && v <= o.right && g >= o.top && g <= o.bottom;
        }if (f && p.is.number(a)) {
          s = Math.max(0, Math.min(o.right, f.right) - Math.max(o.left, f.left)) * Math.max(0, Math.min(o.bottom, f.bottom) - Math.max(o.top, f.top)) / (f.width * f.height) >= a;
        }return this.options.drop.checker && (s = this.options.drop.checker(e, t, s, this, i, n, r)), s;
      }, v.signals.on("unset", function (e) {
        e.interactable.dropzone(!1);
      }), v.settingsMethods.push("dropChecker"), g.signals.on("new", function (e) {
        e.dropTarget = null, e.dropElement = null, e.prevDropTarget = null, e.prevDropElement = null, e.dropEvents = null, e.activeDrops = { dropzones: [], elements: [], rects: [] };
      }), g.signals.on("stop", function (e) {
        var t = e.interaction;t.dropTarget = t.dropElement = t.prevDropTarget = t.prevDropElement = null;
      }), d.dynamicDrop = function (e) {
        return p.is.bool(e) ? (y = e, d) : y;
      }, p.merge(v.eventTypes, ["dragenter", "dragleave", "dropactivate", "dropdeactivate", "dropmove", "drop"]), c.methodDict.drop = "dropzone", h.drop = m.defaults, t.exports = m;
    }, { "../InteractEvent": 3, "../Interactable": 4, "../Interaction": 5, "../defaultOptions": 18, "../interact": 21, "../scope": 31, "../utils": 41, "./base": 6 }], 9: [function (e, t, n) {
      "use strict";
      var r = e("./base"),
          i = e("../utils"),
          o = e("../InteractEvent"),
          s = e("../Interactable"),
          a = e("../Interaction"),
          l = e("../defaultOptions"),
          c = { defaults: { enabled: !1, origin: null, restrict: null }, checker: function checker(e, t, n, r, i) {
          return i.pointerIds.length >= 2 ? { name: "gesture" } : null;
        }, getCursor: function getCursor() {
          return "";
        } };o.signals.on("new", function (e) {
        var t = e.iEvent,
            n = e.interaction;"gesturestart" === t.type && (t.ds = 0, n.gesture.startDistance = n.gesture.prevDistance = t.distance, n.gesture.startAngle = n.gesture.prevAngle = t.angle, n.gesture.scale = 1);
      }), o.signals.on("new", function (e) {
        var t = e.iEvent,
            n = e.interaction;"gesturemove" === t.type && (t.ds = t.scale - n.gesture.scale, n.target.fire(t), n.gesture.prevAngle = t.angle, n.gesture.prevDistance = t.distance, t.scale === 1 / 0 || null === t.scale || void 0 === t.scale || isNaN(t.scale) || (n.gesture.scale = t.scale));
      }), s.prototype.gesturable = function (e) {
        return i.is.object(e) ? (this.options.gesture.enabled = e.enabled !== !1, this.setPerAction("gesture", e), this.setOnEvents("gesture", e), this) : i.is.bool(e) ? (this.options.gesture.enabled = e, e || (this.ongesturestart = this.ongesturestart = this.ongestureend = null), this) : this.options.gesture;
      }, o.signals.on("set-delta", function (e) {
        var t = e.interaction,
            n = e.iEvent,
            r = e.action,
            s = e.event,
            a = e.starting,
            l = e.ending,
            c = e.deltaSource;if ("gesture" === r) {
          var p = t.pointers;n.touches = [p[0], p[1]], a ? (n.distance = i.touchDistance(p, c), n.box = i.touchBBox(p), n.scale = 1, n.ds = 0, n.angle = i.touchAngle(p, void 0, c), n.da = 0) : l || s instanceof o ? (n.distance = t.prevEvent.distance, n.box = t.prevEvent.box, n.scale = t.prevEvent.scale, n.ds = n.scale - 1, n.angle = t.prevEvent.angle, n.da = n.angle - t.gesture.startAngle) : (n.distance = i.touchDistance(p, c), n.box = i.touchBBox(p), n.scale = n.distance / t.gesture.startDistance, n.angle = i.touchAngle(p, t.gesture.prevAngle, c), n.ds = n.scale - t.gesture.prevScale, n.da = n.angle - t.gesture.prevAngle);
        }
      }), a.signals.on("new", function (e) {
        e.gesture = { start: { x: 0, y: 0 }, startDistance: 0, prevDistance: 0, distance: 0, scale: 1, startAngle: 0, prevAngle: 0 };
      }), r.gesture = c, r.names.push("gesture"), i.merge(s.eventTypes, ["gesturestart", "gesturemove", "gestureend"]), r.methodDict.gesture = "gesturable", l.gesture = c.defaults, t.exports = c;
    }, { "../InteractEvent": 3, "../Interactable": 4, "../Interaction": 5, "../defaultOptions": 18, "../utils": 41, "./base": 6 }], 10: [function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i, s, a) {
        if (!t) return !1;if (t === !0) {
          var l = o.is.number(s.width) ? s.width : s.right - s.left,
              c = o.is.number(s.height) ? s.height : s.bottom - s.top;if (l < 0 && ("left" === e ? e = "right" : "right" === e && (e = "left")), c < 0 && ("top" === e ? e = "bottom" : "bottom" === e && (e = "top")), "left" === e) return n.x < (l >= 0 ? s.left : s.right) + a;if ("top" === e) return n.y < (c >= 0 ? s.top : s.bottom) + a;if ("right" === e) return n.x > (l >= 0 ? s.right : s.left) - a;if ("bottom" === e) return n.y > (c >= 0 ? s.bottom : s.top) - a;
        }return !!o.is.element(r) && (o.is.element(t) ? t === r : o.matchesUpTo(r, t, i));
      }var i = e("./base"),
          o = e("../utils"),
          s = e("../utils/browser"),
          a = e("../InteractEvent"),
          l = e("../Interactable"),
          c = e("../Interaction"),
          p = e("../defaultOptions"),
          u = s.supportsTouch || s.supportsPointerEvent ? 20 : 10,
          d = { defaults: { enabled: !1, mouseButtons: null, origin: null, snap: null, restrict: null, inertia: null, autoScroll: null, square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, checker: function checker(e, t, n, i, s, a) {
          if (!a) return null;var l = o.extend({}, s.curCoords.page),
              c = n.options;if (c.resize.enabled) {
            var p = c.resize,
                d = { left: !1, right: !1, top: !1, bottom: !1 };if (o.is.object(p.edges)) {
              for (var f in d) {
                d[f] = r(f, p.edges[f], l, s._eventTarget, i, a, p.margin || u);
              }if (d.left = d.left && !d.right, d.top = d.top && !d.bottom, d.left || d.right || d.top || d.bottom) return { name: "resize", edges: d };
            } else {
              var v = "y" !== c.resize.axis && l.x > a.right - u,
                  g = "x" !== c.resize.axis && l.y > a.bottom - u;if (v || g) return { name: "resize", axes: (v ? "x" : "") + (g ? "y" : "") };
            }
          }return null;
        }, cursors: s.isIe9OrOlder ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" }, getCursor: function getCursor(e) {
          if (e.axis) return d.cursors[e.name + e.axis];if (e.edges) {
            for (var t = "", n = ["top", "bottom", "left", "right"], r = 0; r < 4; r++) {
              e.edges[n[r]] && (t += n[r]);
            }return d.cursors[t];
          }
        } };a.signals.on("new", function (e) {
        var t = e.iEvent,
            n = e.interaction;if ("resizestart" === t.type && n.prepared.edges) {
          var r = n.target.getRect(n.element),
              i = n.target.options.resize;if (i.square || i.preserveAspectRatio) {
            var s = o.extend({}, n.prepared.edges);s.top = s.top || s.left && !s.bottom, s.left = s.left || s.top && !s.right, s.bottom = s.bottom || s.right && !s.top, s.right = s.right || s.bottom && !s.left, n.prepared._linkedEdges = s;
          } else n.prepared._linkedEdges = null;i.preserveAspectRatio && (n.resizeStartAspectRatio = r.width / r.height), n.resizeRects = { start: r, current: o.extend({}, r), restricted: o.extend({}, r), previous: o.extend({}, r), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, t.rect = n.resizeRects.restricted, t.deltaRect = n.resizeRects.delta;
        }
      }), a.signals.on("new", function (e) {
        var t = e.iEvent,
            n = e.phase,
            r = e.interaction;if ("move" === n && r.prepared.edges) {
          var i = r.target.options.resize,
              s = i.invert,
              a = "reposition" === s || "negate" === s,
              l = r.prepared.edges,
              c = r.resizeRects.start,
              p = r.resizeRects.current,
              u = r.resizeRects.restricted,
              d = r.resizeRects.delta,
              f = o.extend(r.resizeRects.previous, u),
              v = l,
              g = t.dx,
              h = t.dy;if (i.preserveAspectRatio || i.square) {
            var m = i.preserveAspectRatio ? r.resizeStartAspectRatio : 1;l = r.prepared._linkedEdges, v.left && v.bottom || v.right && v.top ? h = -g / m : v.left || v.right ? h = g / m : (v.top || v.bottom) && (g = h * m);
          }if (l.top && (p.top += h), l.bottom && (p.bottom += h), l.left && (p.left += g), l.right && (p.right += g), a) {
            if (o.extend(u, p), "reposition" === s) {
              var y = void 0;u.top > u.bottom && (y = u.top, u.top = u.bottom, u.bottom = y), u.left > u.right && (y = u.left, u.left = u.right, u.right = y);
            }
          } else u.top = Math.min(p.top, c.bottom), u.bottom = Math.max(p.bottom, c.top), u.left = Math.min(p.left, c.right), u.right = Math.max(p.right, c.left);u.width = u.right - u.left, u.height = u.bottom - u.top;for (var x in u) {
            d[x] = u[x] - f[x];
          }t.edges = r.prepared.edges, t.rect = u, t.deltaRect = d;
        }
      }), l.prototype.resizable = function (e) {
        return o.is.object(e) ? (this.options.resize.enabled = e.enabled !== !1, this.setPerAction("resize", e), this.setOnEvents("resize", e), /^x$|^y$|^xy$/.test(e.axis) ? this.options.resize.axis = e.axis : null === e.axis && (this.options.resize.axis = p.resize.axis), o.is.bool(e.preserveAspectRatio) ? this.options.resize.preserveAspectRatio = e.preserveAspectRatio : o.is.bool(e.square) && (this.options.resize.square = e.square), this) : o.is.bool(e) ? (this.options.resize.enabled = e, e || (this.onresizestart = this.onresizestart = this.onresizeend = null), this) : this.options.resize;
      }, c.signals.on("new", function (e) {
        e.resizeAxes = "xy";
      }), a.signals.on("set-delta", function (e) {
        var t = e.interaction,
            n = e.iEvent;"resize" === e.action && t.resizeAxes && (t.target.options.resize.square ? ("y" === t.resizeAxes ? n.dx = n.dy : n.dy = n.dx, n.axes = "xy") : (n.axes = t.resizeAxes, "x" === t.resizeAxes ? n.dy = 0 : "y" === t.resizeAxes && (n.dx = 0)));
      }), i.resize = d, i.names.push("resize"), o.merge(l.eventTypes, ["resizestart", "resizemove", "resizeinertiastart", "resizeinertiaresume", "resizeend"]), i.methodDict.resize = "resizable", p.resize = d.defaults, t.exports = d;
    }, { "../InteractEvent": 3, "../Interactable": 4, "../Interaction": 5, "../defaultOptions": 18, "../utils": 41, "../utils/browser": 34, "./base": 6 }], 11: [function (e, t, n) {
      "use strict";
      var r = e("./utils/raf"),
          i = e("./utils/window").getWindow,
          o = e("./utils/is"),
          s = e("./utils/domUtils"),
          a = e("./Interaction"),
          l = e("./defaultOptions"),
          c = { defaults: { enabled: !1, container: null, margin: 60, speed: 300 }, interaction: null, i: null, x: 0, y: 0, isScrolling: !1, prevTime: 0, start: function start(e) {
          c.isScrolling = !0, r.cancel(c.i), c.interaction = e, c.prevTime = new Date().getTime(), c.i = r.request(c.scroll);
        }, stop: function stop() {
          c.isScrolling = !1, r.cancel(c.i);
        }, scroll: function scroll() {
          var e = c.interaction.target.options[c.interaction.prepared.name].autoScroll,
              t = e.container || i(c.interaction.element),
              n = new Date().getTime(),
              s = (n - c.prevTime) / 1e3,
              a = e.speed * s;a >= 1 && (o.window(t) ? t.scrollBy(c.x * a, c.y * a) : t && (t.scrollLeft += c.x * a, t.scrollTop += c.y * a), c.prevTime = n), c.isScrolling && (r.cancel(c.i), c.i = r.request(c.scroll));
        }, check: function check(e, t) {
          var n = e.options;return n[t].autoScroll && n[t].autoScroll.enabled;
        }, onInteractionMove: function onInteractionMove(e) {
          var t = e.interaction,
              n = e.pointer;if (t.interacting() && c.check(t.target, t.prepared.name)) {
            if (t.simulation) return void (c.x = c.y = 0);var r = void 0,
                a = void 0,
                l = void 0,
                p = void 0,
                u = t.target.options[t.prepared.name].autoScroll,
                d = u.container || i(t.element);if (o.window(d)) p = n.clientX < c.margin, r = n.clientY < c.margin, a = n.clientX > d.innerWidth - c.margin, l = n.clientY > d.innerHeight - c.margin;else {
              var f = s.getElementClientRect(d);p = n.clientX < f.left + c.margin, r = n.clientY < f.top + c.margin, a = n.clientX > f.right - c.margin, l = n.clientY > f.bottom - c.margin;
            }c.x = a ? 1 : p ? -1 : 0, c.y = l ? 1 : r ? -1 : 0, c.isScrolling || (c.margin = u.margin, c.speed = u.speed, c.start(t));
          }
        } };a.signals.on("stop-active", function () {
        c.stop();
      }), a.signals.on("action-move", c.onInteractionMove), l.perAction.autoScroll = c.defaults, t.exports = c;
    }, { "./Interaction": 5, "./defaultOptions": 18, "./utils/domUtils": 36, "./utils/is": 43, "./utils/raf": 47, "./utils/window": 48 }], 12: [function (e, t, n) {
      "use strict";
      var r = e("../Interactable"),
          i = e("../actions/base"),
          o = e("../utils/is"),
          s = e("../utils/domUtils");r.prototype.getAction = function (e, t, n, r) {
        var i = this.defaultActionChecker(e, t, n, r);return this.options.actionChecker ? this.options.actionChecker(e, t, i, this, r, n) : i;
      }, r.prototype.ignoreFrom = function (e) {
        return this._backCompatOption("ignoreFrom", e);
      }, r.prototype.allowFrom = function (e) {
        return this._backCompatOption("allowFrom", e);
      }, r.prototype.testIgnore = function (e, t, n) {
        return !(!e || !o.element(n)) && (o.string(e) ? s.matchesUpTo(n, e, t) : !!o.element(e) && s.nodeContains(e, n));
      }, r.prototype.testAllow = function (e, t, n) {
        return !e || !!o.element(n) && (o.string(e) ? s.matchesUpTo(n, e, t) : !!o.element(e) && s.nodeContains(e, n));
      }, r.prototype.testIgnoreAllow = function (e, t, n) {
        return !this.testIgnore(e.ignoreFrom, t, n) && this.testAllow(e.allowFrom, t, n);
      }, r.prototype.actionChecker = function (e) {
        return o.function(e) ? (this.options.actionChecker = e, this) : null === e ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }, r.prototype.styleCursor = function (e) {
        return o.bool(e) ? (this.options.styleCursor = e, this) : null === e ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }, r.prototype.defaultActionChecker = function (e, t, n, r) {
        for (var o = this.getRect(r), s = null, a = i.names, l = Array.isArray(a), c = 0, a = l ? a : a[Symbol.iterator]();;) {
          var p;if (l) {
            if (c >= a.length) break;p = a[c++];
          } else {
            if (c = a.next(), c.done) break;p = c.value;
          }var u = p;if ((!n.pointerIsDown || !n.mouse || 0 != (t.buttons & this.options[u].mouseButtons)) && (s = i[u].checker(e, t, this, r, n, o))) return s;
        }
      };
    }, { "../Interactable": 4, "../actions/base": 6, "../utils/domUtils": 36, "../utils/is": 43 }], 13: [function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return g.is.object(e) && t.testIgnoreAllow(t.options[e.name], n, r) && t.options[e.name].enabled && a(t, n, e) ? e : null;
      }function i(e, t, n, i, o, s) {
        for (var a = 0, l = i.length; a < l; a++) {
          var c = i[a],
              p = o[a],
              u = r(c.getAction(t, n, e, p), c, p, s);if (u) return { action: u, target: c, element: p };
        }return {};
      }function o(e, t, n, o) {
        function s(e, t, n) {
          var r = f.useMatchesSelectorPolyfill ? n.querySelectorAll(t) : void 0;g.matchesSelector(c, t, r) && (a.push(e), l.push(c));
        }for (var a = [], l = [], c = o, p = null; g.is.element(c);) {
          a = [], l = [];var u = v.interactables.get(c);if (u && (p = r(u.getAction(t, n, e, c, o), u, c, o)) && !u.options[p.name].manualStart) return { element: c, action: p, target: u };v.interactables.forEachSelector(s, c);var d = i(e, t, n, a, l, o);if (d.action && !d.target.options[d.action.name].manualStart) return d;c = g.parentNode(c);
        }return {};
      }function s(e, t) {
        var n = t.action,
            r = t.target,
            i = t.element;if (n = n || {}, e.target && e.target.options.styleCursor && (e.target._doc.documentElement.style.cursor = ""), e.target = r, e.element = i, g.copyAction(e.prepared, n), r && r.options.styleCursor) {
          var o = n ? u[n.name].getCursor(n) : "";e.target._doc.documentElement.style.cursor = o;
        }h.fire("prepared", { interaction: e });
      }function a(e, t, n) {
        var r = e.options,
            i = r[n.name].max,
            o = r[n.name].maxPerElement,
            s = 0,
            a = 0,
            l = 0;if (i && o && m.maxInteractions) {
          for (var c = 0, p = v.interactions.length; c < p; c++) {
            var u = v.interactions[c],
                d = u.prepared.name;if (u.interacting()) {
              if (++s >= m.maxInteractions) return !1;if (u.target === e) {
                if ((a += d === n.name | 0) >= i) return !1;if (u.element === t && (l++, d !== n.name || l >= o)) return !1;
              }
            }
          }return m.maxInteractions > 0;
        }
      }var l = e("../interact"),
          c = e("../Interactable"),
          p = e("../Interaction"),
          u = e("../actions/base"),
          d = e("../defaultOptions"),
          f = e("../utils/browser"),
          v = e("../scope"),
          g = e("../utils"),
          h = e("../utils/Signals").new();e("./InteractableMethods");var m = { signals: h, withinInteractionLimit: a, maxInteractions: 1 / 0, defaults: { perAction: { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null } }, setActionDefaults: function setActionDefaults(e) {
          g.extend(e.defaults, m.defaults.perAction);
        } };p.signals.on("down", function (e) {
        var t = e.interaction,
            n = e.pointer,
            r = e.event,
            i = e.eventTarget;if (!t.interacting()) {
          s(t, o(t, n, r, i));
        }
      }), p.signals.on("move", function (e) {
        var t = e.interaction,
            n = e.pointer,
            r = e.event,
            i = e.eventTarget;if (t.mouse && !t.pointerIsDown && !t.interacting()) {
          s(t, o(t, n, r, i));
        }
      }), p.signals.on("move", function (e) {
        var t = e.interaction,
            n = e.event;if (t.pointerIsDown && !t.interacting() && t.pointerWasMoved && t.prepared.name) {
          h.fire("before-start", e);var r = t.target;t.prepared.name && r && (r.options[t.prepared.name].manualStart || !a(r, t.element, t.prepared) ? t.stop(n) : t.start(t.prepared, r, t.element));
        }
      }), p.signals.on("stop", function (e) {
        var t = e.interaction,
            n = t.target;n && n.options.styleCursor && (n._doc.documentElement.style.cursor = "");
      }), c.prototype.getAction = function (e, t, n, r) {
        var i = this.defaultActionChecker(e, t, n, r);return this.options.actionChecker ? this.options.actionChecker(e, t, i, this, r, n) : i;
      }, c.prototype.actionChecker = function (e) {
        return g.is.function(e) ? (this.options.actionChecker = e, this) : null === e ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }, c.prototype.styleCursor = function (e) {
        return g.is.bool(e) ? (this.options.styleCursor = e, this) : null === e ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }, c.prototype.defaultActionChecker = function (e, t, n, r) {
        for (var i = this.getRect(r), o = t.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[t.button], s = null, a = u.names, l = Array.isArray(a), c = 0, a = l ? a : a[Symbol.iterator]();;) {
          var p;if (l) {
            if (c >= a.length) break;p = a[c++];
          } else {
            if (c = a.next(), c.done) break;p = c.value;
          }var d = p;if ((!n.pointerIsDown || !n.mouse || 0 != (o & this.options[d].mouseButtons)) && (s = u[d].checker(e, t, this, r, n, i))) return s;
        }
      }, l.maxInteractions = function (e) {
        return g.is.number(e) ? (m.maxInteractions = e, this) : m.maxInteractions;
      }, c.settingsMethods.push("styleCursor"), c.settingsMethods.push("actionChecker"), c.settingsMethods.push("ignoreFrom"), c.settingsMethods.push("allowFrom"), d.base.actionChecker = null, d.base.styleCursor = !0, g.extend(d.perAction, m.defaults.perAction), t.exports = m;
    }, { "../Interactable": 4, "../Interaction": 5, "../actions/base": 6, "../defaultOptions": 18, "../interact": 21, "../scope": 31, "../utils": 41, "../utils/Signals": 32, "../utils/browser": 34, "./InteractableMethods": 12 }], 14: [function (e, t, n) {
      "use strict";
      var r = e("./base"),
          i = e("../Interaction");i.signals.on("new", function (e) {
        e.delayTimer = null;
      }), r.signals.on("prepared", function (e) {
        var t = e.interaction,
            n = t.prepared.name;if (n) {
          var r = t.target.options[n].delay;r > 0 && (t.delayTimer = setTimeout(function () {
            t.start(t.prepared, t.target, t.element);
          }, r));
        }
      }), i.signals.on("move", function (e) {
        var t = e.interaction,
            n = e.duplicate;t.pointerWasMoved && !n && clearTimeout(t.delayTimer);
      }), r.signals.on("before-start", function (e) {
        var t = e.interaction,
            n = t.prepared.name;if (n) {
          t.target.options[n].delay > 0 && (t.prepared.name = null);
        }
      });
    }, { "../Interaction": 5, "./base": 13 }], 15: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!t) return !1;var n = t.options.drag.startAxis;return "xy" === e || "xy" === n || n === e;
      }var i = e("./base"),
          o = e("../scope"),
          s = e("../utils/browser"),
          a = e("../utils/is"),
          l = e("../utils/domUtils"),
          c = l.matchesSelector,
          p = l.parentNode;i.setActionDefaults(e("../actions/drag")), i.signals.on("before-start", function (e) {
        var t = e.interaction,
            n = e.eventTarget,
            l = e.dx,
            u = e.dy;if ("drag" === t.prepared.name) {
          var d = Math.abs(l),
              f = Math.abs(u),
              v = t.target.options.drag,
              g = v.startAxis,
              h = d > f ? "x" : d < f ? "y" : "xy";if (t.prepared.axis = "start" === v.lockAxis ? h[0] : v.lockAxis, "xy" !== h && "xy" !== g && g !== h && (t.prepared.name = null, !t.prepared.name)) for (var m = n, y = function y(e, o, a) {
            var l = s.useMatchesSelectorPolyfill ? a.querySelectorAll(o) : void 0;if (e !== t.target && !v.manualStart && !e.testIgnoreAllow(v, m, n) && c(m, o, l)) {
              var p = e.getAction(t.downPointer, t.downEvent, t, m);if (p && "drag" === p.name && r(h, e) && i.validateAction(p, e, m, n)) return e;
            }
          }, x = null; a.element(m);) {
            var b = o.interactables.get(m);if (b && b !== t.target && !b.options.drag.manualStart && (x = b.getAction(t.downPointer, t.downEvent, t, m)), x && "drag" === x.name && r(h, b)) {
              t.prepared.name = "drag", t.target = b, t.element = m;break;
            }var w = o.interactables.forEachSelector(y, m);if (w) {
              t.prepared.name = "drag", t.target = w, t.element = m;break;
            }m = p(m);
          }
        }
      });
    }, { "../actions/drag": 7, "../scope": 31, "../utils/browser": 34, "../utils/domUtils": 36, "../utils/is": 43, "./base": 13 }], 16: [function (e, t, n) {
      "use strict";
      e("./base").setActionDefaults(e("../actions/gesture"));
    }, { "../actions/gesture": 9, "./base": 13 }], 17: [function (e, t, n) {
      "use strict";
      e("./base").setActionDefaults(e("../actions/resize"));
    }, { "../actions/resize": 10, "./base": 13 }], 18: [function (e, t, n) {
      "use strict";
      t.exports = { base: { accept: null, preventDefault: "auto", deltaSource: "page" }, perAction: { origin: { x: 0, y: 0 }, mouseButtons: 1, inertia: { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 } } };
    }, {}], 19: [function (e, t, n) {
      "use strict";
      e("./legacyBrowsers"), e("./inertia"), e("./modifiers/snap"), e("./modifiers/restrict"), e("./pointerEvents/base"), e("./pointerEvents/holdRepeat"), e("./pointerEvents/interactableTargets"), e("./autoStart/delay"), e("./actions/gesture"), e("./actions/resize"), e("./actions/drag"), e("./actions/drop"), e("./autoStart/gesture"), e("./autoStart/resize"), e("./autoStart/drag"), e("./interactablePreventDefault.js"), e("./autoScroll"), t.exports = e("./interact");
    }, { "./actions/drag": 7, "./actions/drop": 8, "./actions/gesture": 9, "./actions/resize": 10, "./autoScroll": 11, "./autoStart/delay": 14, "./autoStart/drag": 15, "./autoStart/gesture": 16, "./autoStart/resize": 17, "./inertia": 20, "./interact": 21, "./interactablePreventDefault.js": 22, "./legacyBrowsers": 23, "./modifiers/restrict": 25, "./modifiers/snap": 26, "./pointerEvents/base": 28, "./pointerEvents/holdRepeat": 29, "./pointerEvents/interactableTargets": 30 }], 20: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = e.target.options[e.prepared.name].inertia,
            r = n.resistance,
            i = -Math.log(n.endSpeed / t.v0) / r;t.x0 = e.prevEvent.pageX, t.y0 = e.prevEvent.pageY, t.t0 = t.startEvent.timeStamp / 1e3, t.sx = t.sy = 0, t.modifiedXe = t.xe = (t.vx0 - i) / r, t.modifiedYe = t.ye = (t.vy0 - i) / r, t.te = i, t.lambda_v0 = r / t.v0, t.one_ve_v0 = 1 - n.endSpeed / t.v0;
      }function i() {
        s(this), p.setCoordDeltas(this.pointerDelta, this.prevCoords, this.curCoords);var e = this.inertiaStatus,
            t = this.target.options[this.prepared.name].inertia,
            n = t.resistance,
            r = new Date().getTime() / 1e3 - e.t0;if (r < e.te) {
          var i = 1 - (Math.exp(-n * r) - e.lambda_v0) / e.one_ve_v0;if (e.modifiedXe === e.xe && e.modifiedYe === e.ye) e.sx = e.xe * i, e.sy = e.ye * i;else {
            var o = p.getQuadraticCurvePoint(0, 0, e.xe, e.ye, e.modifiedXe, e.modifiedYe, i);e.sx = o.x, e.sy = o.y;
          }this.doMove(), e.i = u.request(this.boundInertiaFrame);
        } else e.sx = e.modifiedXe, e.sy = e.modifiedYe, this.doMove(), this.end(e.startEvent), e.active = !1, this.simulation = null;p.copyCoords(this.prevCoords, this.curCoords);
      }function o() {
        s(this);var e = this.inertiaStatus,
            t = new Date().getTime() - e.t0,
            n = this.target.options[this.prepared.name].inertia.smoothEndDuration;t < n ? (e.sx = p.easeOutQuad(t, 0, e.xe, n), e.sy = p.easeOutQuad(t, 0, e.ye, n), this.pointerMove(e.startEvent, e.startEvent), e.i = u.request(this.boundSmoothEndFrame)) : (e.sx = e.xe, e.sy = e.ye, this.pointerMove(e.startEvent, e.startEvent), this.end(e.startEvent), e.smoothEnd = e.active = !1, this.simulation = null);
      }function s(e) {
        var t = e.inertiaStatus;if (t.active) {
          var n = t.upCoords.page,
              r = t.upCoords.client;p.setCoords(e.curCoords, [{ pageX: n.x + t.sx, pageY: n.y + t.sy, clientX: r.x + t.sx, clientY: r.y + t.sy }]);
        }
      }var a = e("./InteractEvent"),
          l = e("./Interaction"),
          c = e("./modifiers"),
          p = e("./utils"),
          u = e("./utils/raf");l.signals.on("new", function (e) {
        e.inertiaStatus = { active: !1, smoothEnd: !1, allowResume: !1, startEvent: null, upCoords: {}, xe: 0, ye: 0, sx: 0, sy: 0, t0: 0, vx0: 0, vys: 0, duration: 0, lambda_v0: 0, one_ve_v0: 0, i: null }, e.boundInertiaFrame = function () {
          return i.apply(e);
        }, e.boundSmoothEndFrame = function () {
          return o.apply(e);
        };
      }), l.signals.on("down", function (e) {
        var t = e.interaction,
            n = e.event,
            r = e.pointer,
            i = e.eventTarget,
            o = t.inertiaStatus;if (o.active) for (var s = i; p.is.element(s);) {
          if (s === t.element) {
            u.cancel(o.i), o.active = !1, t.simulation = null, t.updatePointer(r), p.setCoords(t.curCoords, t.pointers);var d = { interaction: t };l.signals.fire("before-action-move", d), l.signals.fire("action-resume", d);var f = new a(t, n, t.prepared.name, "inertiaresume", t.element);t.target.fire(f), t.prevEvent = f, c.resetStatuses(t.modifierStatuses), p.copyCoords(t.prevCoords, t.curCoords);break;
          }s = p.parentNode(s);
        }
      }), l.signals.on("up", function (e) {
        var t = e.interaction,
            n = e.event,
            i = t.inertiaStatus;if (t.interacting() && !i.active) {
          var o = t.target,
              s = o && o.options,
              l = s && t.prepared.name && s[t.prepared.name].inertia,
              d = new Date().getTime(),
              f = {},
              v = p.extend({}, t.curCoords.page),
              g = t.pointerDelta.client.speed,
              h = !1,
              m = !1,
              y = !1,
              x = void 0;h = l && l.enabled && "gesture" !== t.prepared.name && n !== i.startEvent, m = h && d - t.curCoords.timeStamp < 50 && g > l.minSpeed && g > l.endSpeed, h && !m && (c.resetStatuses(f), x = c.setAll(t, v, f, !0, !0), x.shouldMove && x.locked && (y = !0)), (m || y) && (p.copyCoords(i.upCoords, t.curCoords), t.pointers[0] = i.startEvent = new a(t, n, t.prepared.name, "inertiastart", t.element), i.t0 = d, i.active = !0, i.allowResume = l.allowResume, t.simulation = i, o.fire(i.startEvent), m ? (i.vx0 = t.pointerDelta.client.vx, i.vy0 = t.pointerDelta.client.vy, i.v0 = g, r(t, i), p.extend(v, t.curCoords.page), v.x += i.xe, v.y += i.ye, c.resetStatuses(f), x = c.setAll(t, v, f, !0, !0), i.modifiedXe += x.dx, i.modifiedYe += x.dy, i.i = u.request(t.boundInertiaFrame)) : (i.smoothEnd = !0, i.xe = x.dx, i.ye = x.dy, i.sx = i.sy = 0, i.i = u.request(t.boundSmoothEndFrame)));
        }
      }), l.signals.on("stop-active", function (e) {
        var t = e.interaction,
            n = t.inertiaStatus;n.active && (u.cancel(n.i), n.active = !1, t.simulation = null);
      });
    }, { "./InteractEvent": 3, "./Interaction": 5, "./modifiers": 24, "./utils": 41, "./utils/raf": 47 }], 21: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n = a.interactables.get(e, t);return n || (n = new l(e, t), n.events.global = p), n;
      }var i = e("./utils/browser"),
          o = e("./utils/events"),
          s = e("./utils"),
          a = e("./scope"),
          l = e("./Interactable"),
          c = e("./Interaction"),
          p = {};r.isSet = function (e, t) {
        return a.interactables.indexOfElement(e, t && t.context) !== -1;
      }, r.on = function (e, t, n) {
        if (s.is.string(e) && e.search(" ") !== -1 && (e = e.trim().split(/ +/)), s.is.array(e)) {
          for (var i = e, c = Array.isArray(i), u = 0, i = c ? i : i[Symbol.iterator]();;) {
            var d;if (c) {
              if (u >= i.length) break;d = i[u++];
            } else {
              if (u = i.next(), u.done) break;d = u.value;
            }var f = d;r.on(f, t, n);
          }return r;
        }if (s.is.object(e)) {
          for (var v in e) {
            r.on(v, e[v], t);
          }return r;
        }return s.contains(l.eventTypes, e) ? p[e] ? p[e].push(t) : p[e] = [t] : o.add(a.document, e, t, n), r;
      }, r.off = function (e, t, n) {
        if (s.is.string(e) && e.search(" ") !== -1 && (e = e.trim().split(/ +/)), s.is.array(e)) {
          for (var i = e, c = Array.isArray(i), u = 0, i = c ? i : i[Symbol.iterator]();;) {
            var d;if (c) {
              if (u >= i.length) break;d = i[u++];
            } else {
              if (u = i.next(), u.done) break;d = u.value;
            }var f = d;r.off(f, t, n);
          }return r;
        }if (s.is.object(e)) {
          for (var v in e) {
            r.off(v, e[v], t);
          }return r;
        }if (s.contains(l.eventTypes, e)) {
          var g = void 0;e in p && (g = s.indexOf(p[e], t)) !== -1 && p[e].splice(g, 1);
        } else o.remove(a.document, e, t, n);return r;
      }, r.debug = function () {
        return a;
      }, r.getPointerAverage = s.pointerAverage, r.getTouchBBox = s.touchBBox, r.getTouchDistance = s.touchDistance, r.getTouchAngle = s.touchAngle, r.getElementRect = s.getElementRect, r.getElementClientRect = s.getElementClientRect, r.matchesSelector = s.matchesSelector, r.closest = s.closest, r.supportsTouch = function () {
        return i.supportsTouch;
      }, r.supportsPointerEvent = function () {
        return i.supportsPointerEvent;
      }, r.stop = function (e) {
        for (var t = a.interactions.length - 1; t >= 0; t--) {
          a.interactions[t].stop(e);
        }return r;
      }, r.pointerMoveTolerance = function (e) {
        return s.is.number(e) ? (c.pointerMoveTolerance = e, this) : c.pointerMoveTolerance;
      }, r.addDocument = a.addDocument, r.removeDocument = a.removeDocument, a.interact = r, t.exports = r;
    }, { "./Interactable": 4, "./Interaction": 5, "./scope": 31, "./utils": 41, "./utils/browser": 34, "./utils/events": 37 }], 22: [function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.interaction,
            n = e.event;t.target && t.target.checkAndPreventDefault(n);
      }var i = e("./Interactable"),
          o = e("./Interaction"),
          s = e("./scope"),
          a = e("./utils/is"),
          l = e("./utils/domUtils"),
          c = l.nodeContains,
          p = l.matchesSelector;i.prototype.preventDefault = function (e) {
        return (/^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : a.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault
        );
      }, i.prototype.checkAndPreventDefault = function (e) {
        var t = this.options.preventDefault;if ("never" !== t) return "always" === t ? void e.preventDefault() : void (/^(mouse|pointer|touch)*(down|start)/i.test(e.type) || p(e.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || e.preventDefault());
      };for (var u = ["down", "move", "up", "cancel"], d = 0; d < u.length; d++) {
        var f = u[d];o.signals.on(f, r);
      }o.docEvents.dragstart = function (e) {
        for (var t = s.interactions, n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator]();;) {
          var i;if (n) {
            if (r >= t.length) break;i = t[r++];
          } else {
            if (r = t.next(), r.done) break;i = r.value;
          }var o = i;if (o.element && (o.element === e.target || c(o.element, e.target))) return void o.target.checkAndPreventDefault(e);
        }
      };
    }, { "./Interactable": 4, "./Interaction": 5, "./scope": 31, "./utils/domUtils": 36, "./utils/is": 43 }], 23: [function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.target,
            n = a.search(e, e.type, t);n && n.prevTap && e.clientX === n.prevTap.clientX && e.clientY === n.prevTap.clientY && t === n.prevTap.target && (n.downTargets[0] = t, n.downTimes[0] = new Date().getTime(), l.fire({ interaction: n, event: e, eventTarget: t, pointer: e, type: "tap" }));
      }var i = e("./scope"),
          o = e("./utils/events"),
          s = e("./utils/browser"),
          a = e("./utils/interactionFinder"),
          l = e("./pointerEvents/base"),
          c = e("./utils/window"),
          p = c.window,
          u = Object.prototype.toString;if (p.Array.isArray || (p.Array.isArray = function (e) {
        return "[object Array]" === u.call(e);
      }), String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }), s.isIE8) {
        var d = function d(e) {
          for (var t = i.interactions, n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator]();;) {
            var o;if (n) {
              if (r >= t.length) break;o = t[r++];
            } else {
              if (r = t.next(), r.done) break;o = r.value;
            }var s = o;s.interacting() && s.target.checkAndPreventDefault(e);
          }
        },
            f = function f(e, t) {
          var n = e.doc,
              i = (e.win, 0 === t.indexOf("listen") ? o.add : o.remove);i(n, "selectstart", d), l && i(n, "dblclick", r);
        };i.signals.on("add-document", f), i.signals.on("remove-document", f);
      }t.exports = null;
    }, { "./pointerEvents/base": 28, "./scope": 31, "./utils/browser": 34, "./utils/events": 37, "./utils/interactionFinder": 42, "./utils/window": 48 }], 24: [function (e, t, n) {
      "use strict";
      var r = e("../InteractEvent"),
          i = e("../Interaction"),
          o = e("../utils/extend"),
          s = { names: [], setOffsets: function setOffsets(e, t) {
          var n = e.target,
              r = e.element,
              i = n.getRect(r);i ? (e.startOffset.left = t.page.x - i.left, e.startOffset.top = t.page.y - i.top, e.startOffset.right = i.right - t.page.x, e.startOffset.bottom = i.bottom - t.page.y, "width" in i || (i.width = i.right - i.left), "height" in i || (i.height = i.bottom - i.top)) : e.startOffset.left = e.startOffset.top = e.startOffset.right = e.startOffset.bottom = 0, s.setModifierOffsets(e, n, r, i, e.modifierOffsets);
        }, setModifierOffsets: function setModifierOffsets(e, t, n, r, i) {
          for (var o = 0; o < s.names.length; o++) {
            var a = s.names[o];i[a] = s[a].setOffset(e, t, n, r, e.startOffset);
          }
        }, setAll: function setAll(e, t, n, r, i) {
          for (var a = { dx: 0, dy: 0, changed: !1, locked: !1, shouldMove: !0 }, l = e.target, c = o({}, t), p = void 0, u = s.names, d = Array.isArray(u), f = 0, u = d ? u : u[Symbol.iterator]();;) {
            var v;if (d) {
              if (f >= u.length) break;v = u[f++];
            } else {
              if (f = u.next(), f.done) break;v = f.value;
            }var g = v,
                h = s[g];h.shouldDo(l, e.prepared.name, r, i) && (p = h.set(c, e, n[g]), p.locked && (c.x += p.dx, c.y += p.dy, a.dx += p.dx, a.dy += p.dy, a.locked = !0));
          }return a.shouldMove = !p || p.changed, a;
        }, resetStatuses: function resetStatuses(e) {
          for (var t = s.names, n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator]();;) {
            var i;if (n) {
              if (r >= t.length) break;i = t[r++];
            } else {
              if (r = t.next(), r.done) break;i = r.value;
            }var o = i;e[o] = s[o].reset(e[o] || {});
          }return e;
        }, start: function start(e, t) {
          var n = e.interaction;s.setOffsets(n, "action-resume" === t ? n.curCoords : n.startCoords), s.resetStatuses(n.modifierStatuses), n.modifierResult = s.setAll(n, n.startCoords.page, n.modifierStatuses);
        } };i.signals.on("new", function (e) {
        e.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, e.modifierOffsets = {}, e.modifierStatuses = s.resetStatuses({}), e.modifierResult = null;
      }), i.signals.on("action-start", s.start), i.signals.on("action-resume", s.start), i.signals.on("before-action-move", function (e) {
        var t = e.interaction,
            n = e.preEnd,
            r = e.interactingBeforeMove,
            i = s.setAll(t, t.curCoords.page, t.modifierStatuses, n);!i.shouldMove && r && (t._dontFireMove = !0), t.modifierResult = i;
      }), i.signals.on("action-end", function (e) {
        for (var t = e.interaction, n = e.event, r = 0; r < s.names.length; r++) {
          if (s[s.names[r]].shouldDo(t.target, t.prepared.name, !0, !0)) {
            t.doMove({ event: n, preEnd: !0 });break;
          }
        }
      }), r.signals.on("set-xy", function (e) {
        for (var t = e.iEvent, n = e.interaction, r = e.page, i = e.client, o = e.phase, a = e.action, l = n.target, c = 0; c < s.names.length; c++) {
          var p = s.names[c],
              u = s[p];t[p] = u.modifyCoords(r, i, l, n.modifierStatuses[p], a, o);
        }
      }), t.exports = s;
    }, { "../InteractEvent": 3, "../Interaction": 5, "../utils/extend": 38 }], 25: [function (e, t, n) {
      "use strict";
      var r = e("./index"),
          i = e("../utils"),
          o = e("../defaultOptions"),
          s = { defaults: { enabled: !1, endOnly: !1, restriction: null, elementRect: null }, shouldDo: function shouldDo(e, t, n, r) {
          var i = e.options[t].restrict;return i && i.enabled && (n || !i.endOnly) && (!r || i.endOnly);
        }, setOffset: function setOffset(e, t, n, r, i) {
          var o = t.options[e.prepared.name].restrict.elementRect,
              s = {};return r && o ? (s.left = i.left - r.width * o.left, s.top = i.top - r.height * o.top, s.right = i.right - r.width * (1 - o.right), s.bottom = i.bottom - r.height * (1 - o.bottom)) : s.left = s.top = s.right = s.bottom = 0, s;
        }, set: function set(e, t, n) {
          var r = t.target,
              o = r && r.options[t.prepared.name].restrict,
              s = o && o.restriction;if (!s) return n;var a = n.useStatusXY ? { x: n.x, y: n.y } : i.extend({}, e);if (n.dx = 0, n.dy = 0, n.locked = !1, i.is.string(s) && !(s = "parent" === s ? i.parentNode(t.element) : "self" === s ? r.getRect(t.element) : i.closest(t.element, s))) return n;i.is.function(s) && (s = s(a.x, a.y, t.element)), i.is.element(s) && (s = i.getElementRect(s));var l = s,
              c = void 0,
              p = void 0,
              u = t.modifierOffsets.restrict;return s ? "x" in s && "y" in s ? (c = Math.max(Math.min(l.x + l.width - u.right, a.x), l.x + u.left), p = Math.max(Math.min(l.y + l.height - u.bottom, a.y), l.y + u.top)) : (c = Math.max(Math.min(l.right - u.right, a.x), l.left + u.left), p = Math.max(Math.min(l.bottom - u.bottom, a.y), l.top + u.top)) : (c = a.x, p = a.y), n.dx = c - a.x, n.dy = p - a.y, n.changed = n.restrictedX !== c || n.restrictedY !== p, n.locked = !(!n.dx && !n.dy), n.restrictedX = c, n.restrictedY = p, n;
        }, reset: function reset(e) {
          return e.dx = e.dy = 0, e.modifiedX = e.modifiedY = NaN, e.locked = !1, e.changed = !0, e;
        }, modifyCoords: function modifyCoords(e, t, n, r, i, o) {
          var s = n.options[i].restrict,
              a = s && s.elementRect;if (s && s.enabled && ("start" !== o || !a || !r.locked) && r.locked) return e.x += r.dx, e.y += r.dy, t.x += r.dx, t.y += r.dy, { dx: r.dx, dy: r.dy };
        } };r.restrict = s, r.names.push("restrict"), o.perAction.restrict = s.defaults, t.exports = s;
    }, { "../defaultOptions": 18, "../utils": 41, "./index": 24 }], 26: [function (e, t, n) {
      "use strict";
      var r = e("./index"),
          i = e("../interact"),
          o = e("../utils"),
          s = e("../defaultOptions"),
          a = { defaults: { enabled: !1, endOnly: !1, range: 1 / 0, targets: null, offsets: null, relativePoints: null }, shouldDo: function shouldDo(e, t, n, r) {
          var i = e.options[t].snap;return i && i.enabled && (n || !i.endOnly) && (!r || i.endOnly);
        }, setOffset: function setOffset(e, t, n, r, i) {
          var s = [],
              a = o.getOriginXY(t, n, e.prepared.name),
              l = t.options[e.prepared.name].snap || {},
              c = void 0;if (c = "startCoords" === l.offset ? { x: e.startCoords.page.x - a.x, y: e.startCoords.page.y - a.y } : "self" === l.offset ? { x: r.left - a.x, y: r.top - a.y } : l.offset || { x: 0, y: 0 }, r && l.relativePoints && l.relativePoints.length) for (var p = l.relativePoints, u = Array.isArray(p), d = 0, p = u ? p : p[Symbol.iterator]();;) {
            var f;if (u) {
              if (d >= p.length) break;f = p[d++];
            } else {
              if (d = p.next(), d.done) break;f = d.value;
            }var v = f,
                g = v.x,
                h = v.y;s.push({ x: i.left - r.width * g + c.x, y: i.top - r.height * h + c.y });
          } else s.push(c);return s;
        }, set: function set(e, t, n) {
          var r = t.target.options[t.prepared.name].snap,
              i = [],
              s = void 0,
              a = void 0,
              l = void 0;if (n.useStatusXY) a = { x: n.x, y: n.y };else {
            var c = o.getOriginXY(t.target, t.element, t.prepared.name);a = o.extend({}, e), a.x -= c.x, a.y -= c.y;
          }n.realX = a.x, n.realY = a.y;for (var p = t.modifierOffsets.snap, u = r.targets ? r.targets.length : 0, d = p, f = Array.isArray(d), v = 0, d = f ? d : d[Symbol.iterator]();;) {
            var g;if (f) {
              if (v >= d.length) break;g = d[v++];
            } else {
              if (v = d.next(), v.done) break;g = v.value;
            }for (var h = g, m = h.x, y = h.y, x = a.x - m, b = a.y - y, w = r.targets, E = Array.isArray(w), S = 0, w = E ? w : w[Symbol.iterator]();;) {
              var T;if (E) {
                if (S >= w.length) break;T = w[S++];
              } else {
                if (S = w.next(), S.done) break;T = S.value;
              }var A = T;s = o.is.function(A) ? A(x, b, t) : A, s && i.push({ x: o.is.number(s.x) ? s.x + m : x, y: o.is.number(s.y) ? s.y + y : b, range: o.is.number(s.range) ? s.range : r.range });
            }
          }var C = { target: null, inRange: !1, distance: 0, range: 0, dx: 0, dy: 0 };for (l = 0, u = i.length; l < u; l++) {
            s = i[l];var D = s.range,
                I = s.x - a.x,
                k = s.y - a.y,
                M = o.hypot(I, k),
                O = M <= D;D === 1 / 0 && C.inRange && C.range !== 1 / 0 && (O = !1), C.target && !(O ? C.inRange && D !== 1 / 0 ? M / D < C.distance / C.range : D === 1 / 0 && C.range !== 1 / 0 || M < C.distance : !C.inRange && M < C.distance) || (C.target = s, C.distance = M, C.range = D, C.inRange = O, C.dx = I, C.dy = k, n.range = D);
          }var P = void 0;return C.target ? (P = n.snappedX !== C.target.x || n.snappedY !== C.target.y, n.snappedX = C.target.x, n.snappedY = C.target.y) : (P = !0, n.snappedX = NaN, n.snappedY = NaN), n.dx = C.dx, n.dy = C.dy, n.changed = P || C.inRange && !n.locked, n.locked = C.inRange, n;
        }, reset: function reset(e) {
          return e.dx = e.dy = 0, e.snappedX = e.snappedY = NaN, e.locked = !1, e.changed = !0, e;
        }, modifyCoords: function modifyCoords(e, t, n, r, i, o) {
          var s = n.options[i].snap,
              a = s && s.relativePoints;if (s && s.enabled && ("start" !== o || !a || !a.length)) return r.locked && (e.x += r.dx, e.y += r.dy, t.x += r.dx, t.y += r.dy), { range: r.range, locked: r.locked, x: r.snappedX, y: r.snappedY, realX: r.realX, realY: r.realY, dx: r.dx, dy: r.dy };
        } };i.createSnapGrid = function (e) {
        return function (t, n) {
          var r = e.limits || { left: -(1 / 0), right: 1 / 0, top: -(1 / 0), bottom: 1 / 0 },
              i = 0,
              s = 0;o.is.object(e.offset) && (i = e.offset.x, s = e.offset.y);var a = Math.round((t - i) / e.x),
              l = Math.round((n - s) / e.y);return { x: Math.max(r.left, Math.min(r.right, a * e.x + i)), y: Math.max(r.top, Math.min(r.bottom, l * e.y + s)), range: e.range };
        };
      }, r.snap = a, r.names.push("snap"), s.perAction.snap = a.defaults, t.exports = a;
    }, { "../defaultOptions": 18, "../interact": 21, "../utils": 41, "./index": 24 }], 27: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }var i = e("../utils/pointerUtils");t.exports = function () {
        function e(t, n, o, s, a) {
          if (r(this, e), i.pointerExtend(this, o), o !== n && i.pointerExtend(this, n), this.interaction = a, this.timeStamp = new Date().getTime(), this.originalEvent = o, this.type = t, this.pointerId = i.getPointerId(n), this.pointerType = i.getPointerType(n, a), this.target = s, this.currentTarget = null, "tap" === t) {
            var l = a.getPointerIndex(n);this.dt = this.timeStamp - a.downTimes[l];var c = this.timeStamp - a.tapTime;this.double = !!(a.prevTap && "doubletap" !== a.prevTap.type && a.prevTap.target === this.target && c < 500);
          } else "doubletap" === t && (this.dt = n.timeStamp - a.tapTime);
        }return e.prototype.subtractOrigin = function (e) {
          var t = e.x,
              n = e.y;return this.pageX -= t, this.pageY -= n, this.clientX -= t, this.clientY -= n, this;
        }, e.prototype.addOrigin = function (e) {
          var t = e.x,
              n = e.y;return this.pageX += t, this.pageY += n, this.clientX += t, this.clientY += n, this;
        }, e.prototype.preventDefault = function () {
          this.originalEvent.preventDefault();
        }, e.prototype.stopPropagation = function () {
          this.propagationStopped = !0;
        }, e.prototype.stopImmediatePropagation = function () {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        }, e;
      }();
    }, { "../utils/pointerUtils": 46 }], 28: [function (e, t, n) {
      "use strict";
      function r(e) {
        for (var t = e.interaction, n = e.pointer, s = e.event, l = e.eventTarget, c = e.type, u = void 0 === c ? e.pointerEvent.type : c, d = e.targets, f = void 0 === d ? i(e) : d, v = e.pointerEvent, g = void 0 === v ? new o(u, n, s, l, t) : v, h = { interaction: t, pointer: n, event: s, eventTarget: l, targets: f, type: u, pointerEvent: g }, m = 0; m < f.length; m++) {
          var y = f[m];for (var x in y.props || {}) {
            g[x] = y.props[x];
          }var b = a.getOriginXY(y.eventable, y.element);if (g.subtractOrigin(b), g.eventable = y.eventable, g.currentTarget = y.element, y.eventable.fire(g), g.addOrigin(b), g.immediatePropagationStopped || g.propagationStopped && m + 1 < f.length && f[m + 1].element !== g.currentTarget) break;
        }if (p.fire("fired", h), "tap" === u) {
          var w = g.double ? r({ interaction: t, pointer: n, event: s, eventTarget: l, type: "doubletap" }) : g;t.prevTap = w, t.tapTime = w.timeStamp;
        }return g;
      }function i(e) {
        var t = e.interaction,
            n = e.pointer,
            r = e.event,
            i = e.eventTarget,
            o = e.type,
            s = t.getPointerIndex(n);if ("tap" === o && (t.pointerWasMoved || !t.downTargets[s] || t.downTargets[s] !== i)) return [];for (var l = a.getPath(i), c = { interaction: t, pointer: n, event: r, eventTarget: i, type: o, path: l, targets: [], element: null }, u = l, f = Array.isArray(u), v = 0, u = f ? u : u[Symbol.iterator]();;) {
          var g;if (f) {
            if (v >= u.length) break;g = u[v++];
          } else {
            if (v = u.next(), v.done) break;g = v.value;
          }var h = g;c.element = h, p.fire("collect-targets", c);
        }return "hold" === o && (c.targets = d(c.targets, function (e) {
          return e.eventable.options.holdDuration === t.holdTimers[s].duration;
        })), c.targets;
      }var o = e("./PointerEvent"),
          s = e("../Interaction"),
          a = e("../utils"),
          l = e("../utils/browser"),
          c = e("../defaultOptions"),
          p = e("../utils/Signals").new(),
          u = e("../utils/arr"),
          d = u.filter,
          f = ["down", "up", "cancel"],
          v = ["down", "up", "cancel"],
          g = { PointerEvent: o, fire: r, collectEventTargets: i, signals: p, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: ["down", "move", "up", "cancel", "tap", "doubletap", "hold"] };s.signals.on("update-pointer-down", function (e) {
        var t = e.interaction,
            n = e.pointerIndex;t.holdTimers[n] = { duration: 1 / 0, timeout: null };
      }), s.signals.on("remove-pointer", function (e) {
        var t = e.interaction,
            n = e.pointerIndex;t.holdTimers.splice(n, 1);
      }), s.signals.on("move", function (e) {
        var t = e.interaction,
            n = e.pointer,
            i = e.event,
            o = e.eventTarget,
            s = e.duplicateMove,
            a = t.getPointerIndex(n);s || t.pointerIsDown && !t.pointerWasMoved || (t.pointerIsDown && clearTimeout(t.holdTimers[a].timeout), r({ interaction: t, pointer: n, event: i, eventTarget: o, type: "move" }));
      }), s.signals.on("down", function (e) {
        for (var t = e.interaction, n = e.pointer, i = e.event, o = e.eventTarget, s = e.pointerIndex, c = l.isIE8 ? a.extend({}, i) : i, u = t.holdTimers[s], d = a.getPath(o), f = { interaction: t, pointer: n, event: i, eventTarget: o, type: "hold", targets: [], path: d, element: null }, v = d, g = Array.isArray(v), h = 0, v = g ? v : v[Symbol.iterator]();;) {
          var m;if (g) {
            if (h >= v.length) break;m = v[h++];
          } else {
            if (h = v.next(), h.done) break;m = h.value;
          }var y = m;f.element = y, p.fire("collect-targets", f);
        }if (f.targets.length) {
          for (var x = 1 / 0, b = 0; b < f.targets.length; b++) {
            var w = f.targets[b],
                E = w.eventable.options.holdDuration;E < x && (x = E);
          }u.duration = x, u.timeout = setTimeout(function () {
            r({ interaction: t, eventCopy: c, eventTarget: o, pointer: l.isIE8 ? c : n, type: "hold" });
          }, x);
        }
      }), s.signals.on("up", function (e) {
        var t = e.interaction,
            n = e.pointer,
            i = e.event,
            o = e.eventTarget;t.pointerWasMoved || r({ interaction: t, eventTarget: o, pointer: n, event: i, type: "tap" });
      }), ["up", "cancel"].forEach(function (e) {
        s.signals.on(e, function (e) {
          var t = e.interaction,
              n = e.pointerIndex;t.holdTimers[n] && clearTimeout(t.holdTimers[n].timeout);
        });
      });for (var h = 0; h < f.length; h++) {
        s.signals.on(f[h], function (e) {
          return function (t) {
            var n = t.interaction,
                i = t.pointer,
                o = t.event;r({ interaction: n, eventTarget: t.eventTarget, pointer: i, event: o, type: e });
          };
        }(v[h]));
      }s.signals.on("new", function (e) {
        e.prevTap = null, e.tapTime = 0, e.holdTimers = [];
      }), c.pointerEvents = g.defaults, t.exports = g;
    }, { "../Interaction": 5, "../defaultOptions": 18, "../utils": 41, "../utils/Signals": 32, "../utils/arr": 33, "../utils/browser": 34, "./PointerEvent": 27 }], 29: [function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.pointerEvent;"hold" === t.type && (t.count = (t.count || 0) + 1);
      }function i(e) {
        var t = e.interaction,
            n = e.pointerEvent,
            r = e.eventTarget,
            i = e.targets;if ("hold" === n.type && i.length) {
          var o = i[0].eventable.options.holdRepeatInterval;o <= 0 || (t.holdIntervalHandle = setTimeout(function () {
            s.fire({ interaction: t, eventTarget: r, type: "hold", pointer: n, event: n });
          }, o));
        }
      }function o(e) {
        var t = e.interaction;t.holdIntervalHandle && (clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null);
      }var s = e("./base"),
          a = e("../Interaction");s.signals.on("new", r), s.signals.on("fired", i);for (var l = ["move", "up", "cancel", "endall"], c = 0; c < l.length; c++) {
        var p = l[c];a.signals.on(p, o);
      }s.defaults.holdRepeatInterval = 0, s.types.push("holdrepeat"), t.exports = { onNew: r, onFired: i, endHoldRepeat: o };
    }, { "../Interaction": 5, "./base": 28 }], 30: [function (e, t, n) {
      "use strict";
      var r = e("./base"),
          i = e("../Interactable"),
          o = e("../utils/browser"),
          s = e("../utils/is"),
          a = e("../utils/domUtils"),
          l = e("../scope"),
          c = e("../utils/extend"),
          p = e("../utils/arr"),
          u = p.merge;r.signals.on("collect-targets", function (e) {
        function t(e, t, l) {
          var p = o.useMatchesSelectorPolyfill ? l.querySelectorAll(t) : void 0,
              u = e.events,
              d = u.options;u[i] && s.element(r) && a.matchesSelector(r, t, p) && e.testIgnoreAllow(d, r, c) && n.push({ element: r, eventable: u, props: { interactable: e } });
        }var n = e.targets,
            r = e.element,
            i = e.type,
            c = e.eventTarget,
            p = l.interactables.get(r);if (p) {
          var u = p.events,
              d = u.options;u[i] && p.testIgnoreAllow(d, r, c) && n.push({ element: r, eventable: u, props: { interactable: p } });
        }l.interactables.forEachSelector(t, r);
      }), i.signals.on("new", function (e) {
        var t = e.interactable;t.events.getRect = function (e) {
          return t.getRect(e);
        };
      }), i.signals.on("set", function (e) {
        var t = e.interactable,
            n = e.options;c(t.events.options, r.defaults), c(t.events.options, n);
      }), u(i.eventTypes, r.types), i.prototype.pointerEvents = function (e) {
        return c(this.events.options, e), this;
      };var d = i.prototype._backCompatOption;i.prototype._backCompatOption = function (e, t) {
        var n = d.call(this, e, t);return n === this && (this.events.options[e] = t), n;
      }, i.settingsMethods.push("pointerEvents");
    }, { "../Interactable": 4, "../scope": 31, "../utils/arr": 33, "../utils/browser": 34, "../utils/domUtils": 36, "../utils/extend": 38, "../utils/is": 43, "./base": 28 }], 31: [function (e, t, n) {
      "use strict";
      var r = e("./utils"),
          i = e("./utils/events"),
          o = e("./utils/Signals").new(),
          s = { signals: o, events: i, utils: r, document: e("./utils/domObjects").document, documents: [], addDocument: function addDocument(e, t) {
          if (r.contains(s.documents, e)) return !1;t = t || s.getWindow(e), s.documents.push(e), i.documents.push(e), e !== s.document && i.add(t, "unload", s.onWindowUnload), o.fire("add-document", { doc: e, win: t });
        }, removeDocument: function removeDocument(e, t) {
          var n = r.indexOf(s.documents, e);t = t || s.getWindow(e), i.remove(t, "unload", s.onWindowUnload), s.documents.splice(n, 1), i.documents.splice(n, 1), o.fire("remove-document", { win: t, doc: e });
        }, onWindowUnload: function onWindowUnload() {
          s.removeDocument(this.document, this);
        } };t.exports = s;
    }, { "./utils": 41, "./utils/Signals": 32, "./utils/domObjects": 35, "./utils/events": 37 }], 32: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }var i = e("./arr"),
          o = i.indexOf,
          s = function () {
        function e() {
          r(this, e), this.listeners = {};
        }return e.prototype.on = function (e, t) {
          if (!this.listeners[e]) return void (this.listeners[e] = [t]);this.listeners[e].push(t);
        }, e.prototype.off = function (e, t) {
          if (this.listeners[e]) {
            var n = o(this.listeners[e], t);n !== -1 && this.listeners[e].splice(n, 1);
          }
        }, e.prototype.fire = function (e, t) {
          var n = this.listeners[e];if (n) for (var r = 0; r < n.length; r++) {
            if (n[r](t, e) === !1) return;
          }
        }, e;
      }();s.new = function () {
        return new s();
      }, t.exports = s;
    }, { "./arr": 33 }], 33: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }return -1;
      }function i(e, t) {
        return r(e, t) !== -1;
      }function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          e.push(t[n]);
        }return e;
      }function s(e, t) {
        for (var n = [], r = 0; r < e.length; r++) {
          t(e[r]) && n.push(e[r]);
        }return n;
      }t.exports = { indexOf: r, contains: i, merge: o, filter: s };
    }, {}], 34: [function (e, t, n) {
      "use strict";
      var r = e("./window"),
          i = r.window,
          o = e("./is"),
          s = e("./domObjects"),
          a = s.Element,
          l = i.navigator,
          c = { supportsTouch: !!("ontouchstart" in i || o.function(i.DocumentTouch) && s.document instanceof i.DocumentTouch), supportsPointerEvent: !!s.PointerEvent, isIE8: "attachEvent" in i && !("addEventListener" in i), isOperaMobile: "Opera" === l.appName && c.supportsTouch && l.userAgent.match("Presto"), isIOS7: /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), isIe9OrOlder: /MSIE (8|9)/.test(l.userAgent), prefixedMatchesSelector: "matches" in a.prototype ? "matches" : "webkitMatchesSelector" in a.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in a.prototype ? "mozMatchesSelector" : "oMatchesSelector" in a.prototype ? "oMatchesSelector" : "msMatchesSelector", useMatchesSelectorPolyfill: !1, pEventTypes: s.PointerEvent ? s.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, wheelEvent: "onmousewheel" in s.document ? "mousewheel" : "wheel" };c.useMatchesSelectorPolyfill = !o.function(a.prototype[c.prefixedMatchesSelector]), t.exports = c;
    }, { "./domObjects": 35, "./is": 43, "./window": 48 }], 35: [function (e, t, n) {
      "use strict";
      function r() {}var i = {},
          o = e("./window").window;i.document = o.document, i.DocumentFragment = o.DocumentFragment || r, i.SVGElement = o.SVGElement || r, i.SVGSVGElement = o.SVGSVGElement || r, i.SVGElementInstance = o.SVGElementInstance || r, i.Element = o.Element || r, i.HTMLElement = o.HTMLElement || i.Element, i.Event = o.Event, i.Touch = o.Touch || r, i.PointerEvent = o.PointerEvent || o.MSPointerEvent, t.exports = i;
    }, { "./window": 48 }], 36: [function (e, t, n) {
      "use strict";
      var r = e("./window"),
          i = e("./browser"),
          o = e("./is"),
          s = e("./domObjects"),
          a = { nodeContains: function nodeContains(e, t) {
          for (; t;) {
            if (t === e) return !0;t = t.parentNode;
          }return !1;
        }, closest: function closest(e, t) {
          for (; o.element(e);) {
            if (a.matchesSelector(e, t)) return e;e = a.parentNode(e);
          }return null;
        }, parentNode: function parentNode(e) {
          var t = e.parentNode;if (o.docFrag(t)) {
            for (; (t = t.host) && o.docFrag(t);) {}return t;
          }return t;
        }, matchesSelectorPolyfill: i.useMatchesSelectorPolyfill ? function (e, t, n) {
          n = n || e.parentNode.querySelectorAll(t);for (var r = 0, i = n.length; r < i; r++) {
            if (n[r] === e) return !0;
          }return !1;
        } : null, matchesSelector: function matchesSelector(e, t, n) {
          return i.useMatchesSelectorPolyfill ? a.matchesSelectorPolyfill(e, t, n) : (r.window !== r.realWindow && (t = t.replace(/\/deep\//g, " ")), e[i.prefixedMatchesSelector](t));
        }, indexOfDeepestElement: function indexOfDeepestElement(e) {
          var t = [],
              n = [],
              r = void 0,
              i = e[0],
              o = i ? 0 : -1,
              a = void 0,
              l = void 0,
              c = void 0,
              p = void 0;for (c = 1; c < e.length; c++) {
            if ((r = e[c]) && r !== i) if (i) {
              if (r.parentNode !== r.ownerDocument) if (i.parentNode !== r.ownerDocument) {
                if (!t.length) for (a = i; a.parentNode && a.parentNode !== a.ownerDocument;) {
                  t.unshift(a), a = a.parentNode;
                }if (i instanceof s.HTMLElement && r instanceof s.SVGElement && !(r instanceof s.SVGSVGElement)) {
                  if (r === i.parentNode) continue;a = r.ownerSVGElement;
                } else a = r;for (n = []; a.parentNode !== a.ownerDocument;) {
                  n.unshift(a), a = a.parentNode;
                }for (p = 0; n[p] && n[p] === t[p];) {
                  p++;
                }var u = [n[p - 1], n[p], t[p]];for (l = u[0].lastChild; l;) {
                  if (l === u[1]) {
                    i = r, o = c, t = [];break;
                  }if (l === u[2]) break;l = l.previousSibling;
                }
              } else i = r, o = c;
            } else i = r, o = c;
          }return o;
        }, matchesUpTo: function matchesUpTo(e, t, n) {
          for (; o.element(e);) {
            if (a.matchesSelector(e, t)) return !0;if ((e = a.parentNode(e)) === n) return a.matchesSelector(e, t);
          }return !1;
        }, getActualElement: function getActualElement(e) {
          return e instanceof s.SVGElementInstance ? e.correspondingUseElement : e;
        }, getScrollXY: function getScrollXY(e) {
          return e = e || r.window, { x: e.scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
        }, getElementClientRect: function getElementClientRect(e) {
          var t = e instanceof s.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];return t && { left: t.left, right: t.right, top: t.top, bottom: t.bottom, width: t.width || t.right - t.left, height: t.height || t.bottom - t.top };
        }, getElementRect: function getElementRect(e) {
          var t = a.getElementClientRect(e);if (!i.isIOS7 && t) {
            var n = a.getScrollXY(r.getWindow(e));t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y;
          }return t;
        }, getPath: function getPath(e) {
          for (var t = []; e;) {
            t.push(e), e = a.parentNode(e);
          }return t;
        }, trySelector: function trySelector(e) {
          return !!o.string(e) && (s.document.querySelector(e), !0);
        } };t.exports = a;
    }, { "./browser": 34, "./domObjects": 35, "./is": 43, "./window": 48 }], 37: [function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        var i = f(r),
            o = w(D, e),
            s = I[o];if (s || (s = { events: {}, typeCount: 0 }, o = D.push(e) - 1, I.push(s), k.push(S ? { supplied: [], wrapped: [], useCount: [] } : null)), s.events[t] || (s.events[t] = [], s.typeCount++), !E(s.events[t], n)) {
          var a = void 0;if (S) {
            var l = k[o],
                p = l.supplied,
                v = l.wrapped,
                g = l.useCount,
                h = w(p, n),
                m = v[h] || function (t) {
              t.immediatePropagationStopped || (t.target = t.srcElement, t.currentTarget = e, t.preventDefault = t.preventDefault || c, t.stopPropagation = t.stopPropagation || u, t.stopImmediatePropagation = t.stopImmediatePropagation || d, /mouse|click/.test(t.type) && (t.pageX = t.clientX + x(e).document.documentElement.scrollLeft, t.pageY = t.clientY + x(e).document.documentElement.scrollTop), n(t));
            };a = e[T](C + t, m, !!i.capture), h === -1 ? (p.push(n), v.push(m), g.push(1)) : g[h]++;
          } else a = e[T](t, n, P ? i : !!i.capture);return s.events[t].push(n), a;
        }
      }function i(e, t, n, r) {
        var o = f(r),
            s = w(D, e),
            a = I[s];if (a && a.events) {
          var l = n,
              c = void 0,
              p = void 0;if (S && (c = k[s], p = w(c.supplied, n), l = c.wrapped[p]), "all" !== t) {
            if (a.events[t]) {
              var u = a.events[t].length;if ("all" === n) {
                for (var d = 0; d < u; d++) {
                  i(e, t, a.events[t][d], o);
                }return;
              }for (var v = 0; v < u; v++) {
                if (a.events[t][v] === n) {
                  e[A](C + t, l, P ? o : !!o.capture), a.events[t].splice(v, 1), S && c && 0 === --c.useCount[p] && (c.supplied.splice(p, 1), c.wrapped.splice(p, 1), c.useCount.splice(p, 1));break;
                }
              }a.events[t] && 0 === a.events[t].length && (a.events[t] = null, a.typeCount--);
            }a.typeCount || (I.splice(s, 1), D.splice(s, 1), k.splice(s, 1));
          } else for (t in a.events) {
            a.events.hasOwnProperty(t) && i(e, t, "all");
          }
        }
      }function o(e, t, n, i, o) {
        var s = f(o);if (!M[n]) {
          M[n] = { selectors: [], contexts: [], listeners: [] };for (var c = 0; c < O.length; c++) {
            r(O[c], n, a), r(O[c], n, l, !0);
          }
        }var p = M[n],
            u = void 0;for (u = p.selectors.length - 1; u >= 0 && (p.selectors[u] !== e || p.contexts[u] !== t); u--) {}u === -1 && (u = p.selectors.length, p.selectors.push(e), p.contexts.push(t), p.listeners.push([])), p.listeners[u].push([i, !!s.capture, s.passive]);
      }function s(e, t, n, r, o) {
        var s = f(o),
            c = M[n],
            p = !1,
            u = void 0;if (c) for (u = c.selectors.length - 1; u >= 0; u--) {
          if (c.selectors[u] === e && c.contexts[u] === t) {
            for (var d = c.listeners[u], v = d.length - 1; v >= 0; v--) {
              var g = d[v],
                  h = g[0],
                  m = g[1],
                  y = g[2];if (h === r && m === !!s.capture && y === s.passive) {
                d.splice(v, 1), d.length || (c.selectors.splice(u, 1), c.contexts.splice(u, 1), c.listeners.splice(u, 1), i(t, n, a), i(t, n, l, !0), c.selectors.length || (M[n] = null)), p = !0;break;
              }
            }if (p) break;
          }
        }
      }function a(e, t) {
        var n = f(t),
            r = {},
            i = M[e.type],
            o = g.getActualElement(e.path ? e.path[0] : e.target),
            s = o;for (h(r, e), r.originalEvent = e, r.preventDefault = p; v.element(s);) {
          for (var a = 0; a < i.selectors.length; a++) {
            var l = i.selectors[a],
                c = i.contexts[a];if (g.matchesSelector(s, l) && g.nodeContains(c, o) && g.nodeContains(c, s)) {
              var u = i.listeners[a];r.currentTarget = s;for (var d = 0; d < u.length; d++) {
                var m = u[d],
                    y = m[0],
                    x = m[1],
                    b = m[2];x === !!n.capture && b === n.passive && y(r);
              }
            }
          }s = g.parentNode(s);
        }
      }function l(e) {
        return a.call(this, e, !0);
      }function c() {
        this.returnValue = !1;
      }function p() {
        this.originalEvent.preventDefault();
      }function u() {
        this.cancelBubble = !0;
      }function d() {
        this.cancelBubble = !0, this.immediatePropagationStopped = !0;
      }function f(e) {
        return v.object(e) ? e : { capture: e };
      }var v = e("./is"),
          g = e("./domUtils"),
          h = e("./pointerExtend"),
          m = e("./window"),
          y = m.window,
          x = m.getWindow,
          b = e("./arr"),
          w = b.indexOf,
          E = b.contains,
          S = "attachEvent" in y && !("addEventListener" in y),
          T = S ? "attachEvent" : "addEventListener",
          A = S ? "detachEvent" : "removeEventListener",
          C = S ? "on" : "",
          D = [],
          I = [],
          k = [],
          M = {},
          O = [],
          P = !S && function () {
        var e = !1;return y.document.createElement("div").addEventListener("test", null, { get capture() {
            e = !0;
          } }), e;
      }();t.exports = { add: r, remove: i, addDelegate: o, removeDelegate: s, delegateListener: a, delegateUseCapture: l, delegatedEvents: M, documents: O, useAttachEvent: S, supportsOptions: P, _elements: D, _targets: I, _attachedListeners: k };
    }, { "./arr": 33, "./domUtils": 36, "./is": 43, "./pointerExtend": 45, "./window": 48 }], 38: [function (e, t, n) {
      "use strict";
      t.exports = function (e, t) {
        for (var n in t) {
          e[n] = t[n];
        }return e;
      };
    }, {}], 39: [function (e, t, n) {
      "use strict";
      var r = e("./is"),
          i = e("./domUtils"),
          o = i.closest,
          s = i.parentNode,
          a = i.getElementRect,
          l = i.trySelector;t.exports = function (e, t, n) {
        var i = e.options[n],
            c = i && i.origin,
            p = c || e.options.origin;return "parent" === p ? p = s(t) : "self" === p ? p = e.getRect(t) : l(p) && (p = o(t, p) || { x: 0, y: 0 }), r.function(p) && (p = p(e && t)), r.element(p) && (p = a(p)), p.x = "x" in p ? p.x : p.left, p.y = "y" in p ? p.y : p.top, p;
      };
    }, { "./domUtils": 36, "./is": 43 }], 40: [function (e, t, n) {
      "use strict";
      t.exports = function (e, t) {
        return Math.sqrt(e * e + t * t);
      };
    }, {}], 41: [function (e, t, n) {
      "use strict";
      var r = e("./extend"),
          i = e("./window"),
          o = { warnOnce: function warnOnce(e, t) {
          var n = !1;return function () {
            return n || (i.window.console.warn(t), n = !0), e.apply(this, arguments);
          };
        }, _getQBezierValue: function _getQBezierValue(e, t, n, r) {
          var i = 1 - e;return i * i * t + 2 * i * e * n + e * e * r;
        }, getQuadraticCurvePoint: function getQuadraticCurvePoint(e, t, n, r, i, s, a) {
          return { x: o._getQBezierValue(a, e, n, i), y: o._getQBezierValue(a, t, r, s) };
        }, easeOutQuad: function easeOutQuad(e, t, n, r) {
          return e /= r, -n * e * (e - 2) + t;
        }, copyAction: function copyAction(e, t) {
          return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e;
        }, getStringOptionResult: function getStringOptionResult(e, t, n) {
          return o.is.string(e) ? e = "parent" === e ? o.parentNode(n) : "self" === e ? t.getRect(n) : o.closest(n, e) : null;
        }, is: e("./is"), extend: r, hypot: e("./hypot"), getOriginXY: e("./getOriginXY") };r(o, e("./arr")), r(o, e("./domUtils")), r(o, e("./pointerUtils")), t.exports = o;
    }, { "./arr": 33, "./domUtils": 36, "./extend": 38, "./getOriginXY": 39, "./hypot": 40, "./is": 43, "./pointerUtils": 46, "./window": 48 }], 42: [function (e, t, n) {
      "use strict";
      var r = e("../scope"),
          i = e("./index"),
          o = e("./browser"),
          s = { methodOrder: ["simulationResume", "mouse", "hasPointer", "idle"], search: function search(e, t, n) {
          for (var r = /mouse/i.test(e.pointerType || t) || 4 === e.pointerType, o = i.getPointerId(e), a = { pointer: e, pointerId: o, mouseEvent: r, eventType: t, eventTarget: n }, l = s.methodOrder, c = Array.isArray(l), p = 0, l = c ? l : l[Symbol.iterator]();;) {
            var u;if (c) {
              if (p >= l.length) break;u = l[p++];
            } else {
              if (p = l.next(), p.done) break;u = p.value;
            }var d = u,
                f = s[d](a);if (f) return f;
          }
        }, simulationResume: function simulationResume(e) {
          var t = e.mouseEvent,
              n = e.eventType,
              o = e.eventTarget;if (!/down|start/i.test(n)) return null;for (var s = r.interactions, a = Array.isArray(s), l = 0, s = a ? s : s[Symbol.iterator]();;) {
            var c;if (a) {
              if (l >= s.length) break;c = s[l++];
            } else {
              if (l = s.next(), l.done) break;c = l.value;
            }var p = c,
                u = o;if (p.simulation && p.simulation.allowResume && p.mouse === t) for (; u;) {
              if (u === p.element) return p;u = i.parentNode(u);
            }
          }return null;
        }, mouse: function mouse(e) {
          var t = e.pointerId,
              n = e.mouseEvent,
              s = e.eventType;if (!n && (o.supportsTouch || o.supportsPointerEvent)) return null;for (var a = void 0, l = r.interactions, c = Array.isArray(l), p = 0, l = c ? l : l[Symbol.iterator]();;) {
            var u;if (c) {
              if (p >= l.length) break;u = l[p++];
            } else {
              if (p = l.next(), p.done) break;u = p.value;
            }var d = u;if (d.mouse) {
              if (d.simulation && !i.contains(d.pointerIds, t)) continue;if (d.interacting()) return d;a || (a = d);
            }
          }if (a) return a;for (var f = r.interactions, v = Array.isArray(f), g = 0, f = v ? f : f[Symbol.iterator]();;) {
            var h;if (v) {
              if (g >= f.length) break;h = f[g++];
            } else {
              if (g = f.next(), g.done) break;h = g.value;
            }var m = h;if (m.mouse && (!/down/.test(s) || !m.simulation)) return m;
          }return null;
        }, hasPointer: function hasPointer(e) {
          for (var t = e.pointerId, n = r.interactions, o = Array.isArray(n), s = 0, n = o ? n : n[Symbol.iterator]();;) {
            var a;if (o) {
              if (s >= n.length) break;a = n[s++];
            } else {
              if (s = n.next(), s.done) break;a = s.value;
            }var l = a;if (i.contains(l.pointerIds, t)) return l;
          }
        }, idle: function idle(e) {
          for (var t = e.mouseEvent, n = r.interactions, i = Array.isArray(n), o = 0, n = i ? n : n[Symbol.iterator]();;) {
            var s;if (i) {
              if (o >= n.length) break;s = n[o++];
            } else {
              if (o = n.next(), o.done) break;s = o.value;
            }var a = s;if (1 === a.pointerIds.length) {
              var l = a.target;if (l && !l.options.gesture.enabled) continue;
            } else if (a.pointerIds.length >= 2) continue;if (!a.interacting() && t === a.mouse) return a;
          }return null;
        } };t.exports = s;
    }, { "../scope": 31, "./browser": 34, "./index": 41 }], 43: [function (e, t, n) {
      "use strict";
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          i = e("./window"),
          o = e("./isWindow"),
          s = { array: function array() {}, window: function window(e) {
          return e === i.window || o(e);
        }, docFrag: function docFrag(e) {
          return s.object(e) && 11 === e.nodeType;
        }, object: function object(e) {
          return !!e && "object" === (void 0 === e ? "undefined" : r(e));
        }, function: function _function(e) {
          return "function" == typeof e;
        }, number: function number(e) {
          return "number" == typeof e;
        }, bool: function bool(e) {
          return "boolean" == typeof e;
        }, string: function string(e) {
          return "string" == typeof e;
        }, element: function element(e) {
          if (!e || "object" !== (void 0 === e ? "undefined" : r(e))) return !1;var t = i.getWindow(e) || i.window;return (/object|function/.test(r(t.Element)) ? e instanceof t.Element : 1 === e.nodeType && "string" == typeof e.nodeName
          );
        } };s.array = function (e) {
        return s.object(e) && void 0 !== e.length && s.function(e.splice);
      }, t.exports = s;
    }, { "./isWindow": 44, "./window": 48 }], 44: [function (e, t, n) {
      "use strict";
      t.exports = function (e) {
        return !(!e || !e.Window) && e instanceof e.Window;
      };
    }, {}], 45: [function (e, t, n) {
      "use strict";
      function r(e, n) {
        for (var r in n) {
          var i = t.exports.prefixedPropREs,
              o = !1;for (var s in i) {
            if (0 === r.indexOf(s) && i[s].test(r)) {
              o = !0;break;
            }
          }o || "function" == typeof n[r] || (e[r] = n[r]);
        }return e;
      }r.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/ }, t.exports = r;
    }, {}], 46: [function (e, t, n) {
      "use strict";
      var r = e("./hypot"),
          i = e("./browser"),
          o = e("./domObjects"),
          s = e("./domUtils"),
          a = e("./is"),
          l = e("./pointerExtend"),
          c = { copyCoords: function copyCoords(e, t) {
          e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp;
        }, setCoordDeltas: function setCoordDeltas(e, t, n) {
          e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp;var i = Math.max(e.timeStamp / 1e3, .001);e.page.speed = r(e.page.x, e.page.y) / i, e.page.vx = e.page.x / i, e.page.vy = e.page.y / i, e.client.speed = r(e.client.x, e.page.y) / i, e.client.vx = e.client.x / i, e.client.vy = e.client.y / i;
        }, isNativePointer: function isNativePointer(e) {
          return e instanceof o.Event || e instanceof o.Touch;
        }, getXY: function getXY(e, t, n) {
          return n = n || {}, e = e || "page", n.x = t[e + "X"], n.y = t[e + "Y"], n;
        }, getPageXY: function getPageXY(e, t) {
          return t = t || {}, i.isOperaMobile && c.isNativePointer(e) ? (c.getXY("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : c.getXY("page", e, t), t;
        }, getClientXY: function getClientXY(e, t) {
          return t = t || {}, i.isOperaMobile && c.isNativePointer(e) ? c.getXY("screen", e, t) : c.getXY("client", e, t), t;
        }, getPointerId: function getPointerId(e) {
          return a.number(e.pointerId) ? e.pointerId : e.identifier;
        }, setCoords: function setCoords(e, t, n) {
          var r = t.length > 1 ? c.pointerAverage(t) : t[0],
              i = {};c.getPageXY(r, i), e.page.x = i.x, e.page.y = i.y, c.getClientXY(r, i), e.client.x = i.x, e.client.y = i.y, e.timeStamp = a.number(n) ? n : new Date().getTime();
        }, pointerExtend: l, getTouchPair: function getTouchPair(e) {
          var t = [];return a.array(e) ? (t[0] = e[0], t[1] = e[1]) : "touchend" === e.type ? 1 === e.touches.length ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : 0 === e.touches.length && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t;
        }, pointerAverage: function pointerAverage(e) {
          for (var t = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = e, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
            var o;if (r) {
              if (i >= n.length) break;o = n[i++];
            } else {
              if (i = n.next(), i.done) break;o = i.value;
            }var s = o;for (var a in t) {
              t[a] += s[a];
            }
          }for (var l in t) {
            t[l] /= e.length;
          }return t;
        }, touchBBox: function touchBBox(e) {
          if (e.length || e.touches && e.touches.length > 1) {
            var t = c.getTouchPair(e),
                n = Math.min(t[0].pageX, t[1].pageX),
                r = Math.min(t[0].pageY, t[1].pageY);return { x: n, y: r, left: n, top: r, width: Math.max(t[0].pageX, t[1].pageX) - n, height: Math.max(t[0].pageY, t[1].pageY) - r };
          }
        }, touchDistance: function touchDistance(e, t) {
          var n = t + "X",
              i = t + "Y",
              o = c.getTouchPair(e);return r(o[0][n] - o[1][n], o[0][i] - o[1][i]);
        }, touchAngle: function touchAngle(e, t, n) {
          var r = n + "X",
              i = n + "Y",
              o = c.getTouchPair(e),
              s = o[1][r] - o[0][r],
              a = o[1][i] - o[0][i];return 180 * Math.atan2(a, s) / Math.PI;
        }, getPointerType: function getPointerType(e, t) {
          return t.mouse ? "mouse" : i.supportsPointerEvent ? a.string(e.pointerType) ? e.pointerType : [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : "touch";
        }, getEventTargets: function getEventTargets(e) {
          return [s.getActualElement(e.path ? e.path[0] : e.target), s.getActualElement(e.currentTarget)];
        } };t.exports = c;
    }, { "./browser": 34, "./domObjects": 35, "./domUtils": 36, "./hypot": 40, "./is": 43, "./pointerExtend": 45 }], 47: [function (e, t, n) {
      "use strict";
      for (var r = e("./window"), i = r.window, o = ["ms", "moz", "webkit", "o"], s = 0, a = void 0, l = void 0, c = 0; c < o.length && !i.requestAnimationFrame; c++) {
        a = i[o[c] + "RequestAnimationFrame"], l = i[o[c] + "CancelAnimationFrame"] || i[o[c] + "CancelRequestAnimationFrame"];
      }a || (a = function a(e) {
        var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - s)),
            r = setTimeout(function () {
          e(t + n);
        }, n);return s = t + n, r;
      }), l || (l = function l(e) {
        clearTimeout(e);
      }), t.exports = { request: a, cancel: l };
    }, { "./window": 48 }], 48: [function (e, t, n) {
      "use strict";
      function r(e) {
        i.realWindow = e;var t = e.document.createTextNode("");t.ownerDocument !== e.document && "function" == typeof e.wrap && e.wrap(t) === t && (e = e.wrap(e)), i.window = e;
      }var i = t.exports,
          o = e("./isWindow");"undefined" == typeof window ? (i.window = void 0, i.realWindow = void 0) : r(window), i.getWindow = function (e) {
        if (o(e)) return e;var t = e.ownerDocument || e;return t.defaultView || t.parentWindow || i.window;
      }, i.init = r;
    }, { "./isWindow": 44 }] }, {}, [1])(1);
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});


//# sourceMappingURL=interact.js.map
