!(function(funcList) {
  function importFunc(index) {
    if (loadedFuncList[index]) return loadedFuncList[index].exports;
    var r = (loadedFuncList[index] = { i: index, l: !1, exports: {} });
    return funcList[index].call(r.exports, r, r.exports, importFunc), (r.l = !0), r.exports;
  }

  // 已加载 function 集合
  var loadedFuncList = {};
  // 所有 function 集合
  (importFunc.m = funcList),
    // 已加载 function 集合
    (importFunc.c = loadedFuncList),
    // 原样返回
    (importFunc.i = function(e) {
      return e;
    }),
    // 往对象上添加 key
    (importFunc.d = function(data, key, getFunc) {
      importFunc.o(data, key) || Object.defineProperty(data, key, { configurable: !1, enumerable: !0, get: getFunc });
    }),
    // export module + export module 为 a 属性
    (importFunc.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return importFunc.d(n, 'a', n), n;
    }),
    // 检查对象上是否存在 key
    (importFunc.o = function(data, key) {
      return Object.prototype.hasOwnProperty.call(data, key);
    }),
    (importFunc.p = ''),
    // 程序运行入口
    importFunc((importFunc.s = 387));
})({
  0: function(e, a, n) {
    (function(e) {
      var a;
      !(function(a, n) {
        e.exports = n();
      })(0, function() {
        'use strict';

        function t() {
          return ni.apply(null, arguments);
        }

        function i(e) {
          return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e);
        }

        function o(e) {
          return null != e && '[object Object]' === Object.prototype.toString.call(e);
        }

        function r(e, a) {
          return Object.prototype.hasOwnProperty.call(e, a);
        }

        function s(e) {
          if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
          var a;
          for (a in e) if (r(e, a)) return !1;
          return !0;
        }

        function u(e) {
          return void 0 === e;
        }

        function m(e) {
          return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e);
        }

        function d(e) {
          return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e);
        }

        function l(e, a) {
          var n,
            t = [];
          for (n = 0; n < e.length; ++n) t.push(a(e[n], n));
          return t;
        }

        function c(e, a) {
          for (var n in a) r(a, n) && (e[n] = a[n]);
          return r(a, 'toString') && (e.toString = a.toString), r(a, 'valueOf') && (e.valueOf = a.valueOf), e;
        }

        function _(e, a, n, t) {
          return Da(e, a, n, t, !0).utc();
        }

        function h() {
          return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          };
        }

        function p(e) {
          return null == e._pf && (e._pf = h()), e._pf;
        }

        function f(e) {
          if (null == e._isValid) {
            var a = p(e),
              n = ti.call(a.parsedDateParts, function(e) {
                return null != e;
              }),
              t =
                !isNaN(e._d.getTime()) &&
                a.overflow < 0 &&
                !a.empty &&
                !a.invalidEra &&
                !a.invalidMonth &&
                !a.invalidWeekday &&
                !a.weekdayMismatch &&
                !a.nullInput &&
                !a.invalidFormat &&
                !a.userInvalidated &&
                (!a.meridiem || (a.meridiem && n));
            if ((e._strict && (t = t && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e))) return t;
            e._isValid = t;
          }
          return e._isValid;
        }

        function k(e) {
          var a = _(NaN);
          return null != e ? c(p(a), e) : (p(a).userInvalidated = !0), a;
        }

        function g(e, a) {
          var n, t, i;
          if (
            (u(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject),
            u(a._i) || (e._i = a._i),
            u(a._f) || (e._f = a._f),
            u(a._l) || (e._l = a._l),
            u(a._strict) || (e._strict = a._strict),
            u(a._tzm) || (e._tzm = a._tzm),
            u(a._isUTC) || (e._isUTC = a._isUTC),
            u(a._offset) || (e._offset = a._offset),
            u(a._pf) || (e._pf = p(a)),
            u(a._locale) || (e._locale = a._locale),
            ii.length > 0)
          )
            for (n = 0; n < ii.length; n++) (t = ii[n]), (i = a[t]), u(i) || (e[t] = i);
          return e;
        }

        function y(e) {
          g(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === oi && ((oi = !0), t.updateOffset(this), (oi = !1));
        }

        function M(e) {
          return e instanceof y || (null != e && null != e._isAMomentObject);
        }

        function j(e) {
          !1 === t.suppressDeprecationWarnings && 'undefined' != typeof console && console.warn && console.warn('Deprecation warning: ' + e);
        }

        function b(e, a) {
          var n = !0;
          return c(function() {
            if ((null != t.deprecationHandler && t.deprecationHandler(null, e), n)) {
              var i,
                o,
                s,
                u = [];
              for (o = 0; o < arguments.length; o++) {
                if (((i = ''), 'object' == typeof arguments[o])) {
                  i += '\n[' + o + '] ';
                  for (s in arguments[0]) r(arguments[0], s) && (i += s + ': ' + arguments[0][s] + ', ');
                  i = i.slice(0, -2);
                } else i = arguments[o];
                u.push(i);
              }
              j(e + '\nArguments: ' + Array.prototype.slice.call(u).join('') + '\n' + new Error().stack), (n = !1);
            }
            return a.apply(this, arguments);
          }, a);
        }

        function v(e, a) {
          null != t.deprecationHandler && t.deprecationHandler(e, a), ri[e] || (j(a), (ri[e] = !0));
        }

        function L(e) {
          return ('undefined' != typeof Function && e instanceof Function) || '[object Function]' === Object.prototype.toString.call(e);
        }

        function Y(e) {
          var a, n;
          for (n in e) r(e, n) && ((a = e[n]), L(a) ? (this[n] = a) : (this['_' + n] = a));
          (this._config = e), (this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source));
        }

        function w(e, a) {
          var n,
            t = c({}, e);
          for (n in a) r(a, n) && (o(e[n]) && o(a[n]) ? ((t[n] = {}), c(t[n], e[n]), c(t[n], a[n])) : null != a[n] ? (t[n] = a[n]) : delete t[n]);
          for (n in e) r(e, n) && !r(a, n) && o(e[n]) && (t[n] = c({}, t[n]));
          return t;
        }

        function D(e) {
          null != e && this.set(e);
        }

        function T(e, a, n) {
          var t = this._calendar[e] || this._calendar.sameElse;
          return L(t) ? t.call(a, n) : t;
        }

        function S(e, a, n) {
          var t = '' + Math.abs(e),
            i = a - t.length;
          return (
            (e >= 0 ? (n ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, i))
              .toString()
              .substr(1) +
            t
          );
        }

        function H(e, a, n, t) {
          var i = t;
          'string' == typeof t &&
            (i = function() {
              return this[t]();
            }),
            e && (_i[e] = i),
            a &&
              (_i[a[0]] = function() {
                return S(i.apply(this, arguments), a[1], a[2]);
              }),
            n &&
              (_i[n] = function() {
                return this.localeData().ordinal(i.apply(this, arguments), e);
              });
        }

        function x(e) {
          return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '');
        }

        function z(e) {
          var a,
            n,
            t = e.match(di);
          for (a = 0, n = t.length; a < n; a++) _i[t[a]] ? (t[a] = _i[t[a]]) : (t[a] = x(t[a]));
          return function(a) {
            var i,
              o = '';
            for (i = 0; i < n; i++) o += L(t[i]) ? t[i].call(a, e) : t[i];
            return o;
          };
        }

        function O(e, a) {
          return e.isValid() ? ((a = E(a, e.localeData())), (ci[a] = ci[a] || z(a)), ci[a](e)) : e.localeData().invalidDate();
        }

        function E(e, a) {
          function n(e) {
            return a.longDateFormat(e) || e;
          }

          var t = 5;
          for (li.lastIndex = 0; t >= 0 && li.test(e); ) (e = e.replace(li, n)), (li.lastIndex = 0), (t -= 1);
          return e;
        }

        function A(e) {
          var a = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()];
          return a || !n
            ? a
            : ((this._longDateFormat[e] = n
                .match(di)
                .map(function(e) {
                  return 'MMMM' === e || 'MM' === e || 'DD' === e || 'dddd' === e ? e.slice(1) : e;
                })
                .join('')),
              this._longDateFormat[e]);
        }

        function P() {
          return this._invalidDate;
        }

        function W(e) {
          return this._ordinal.replace('%d', e);
        }

        function F(e, a, n, t) {
          var i = this._relativeTime[n];
          return L(i) ? i(e, a, n, t) : i.replace(/%d/i, e);
        }

        function N(e, a) {
          var n = this._relativeTime[e > 0 ? 'future' : 'past'];
          return L(n) ? n(a) : n.replace(/%s/i, a);
        }

        function R(e, a) {
          var n = e.toLowerCase();
          ki[n] = ki[n + 's'] = ki[a] = e;
        }

        function I(e) {
          return 'string' == typeof e ? ki[e] || ki[e.toLowerCase()] : void 0;
        }

        function C(e) {
          var a,
            n,
            t = {};
          for (n in e) r(e, n) && (a = I(n)) && (t[a] = e[n]);
          return t;
        }

        function J(e, a) {
          gi[e] = a;
        }

        function U(e) {
          var a,
            n = [];
          for (a in e) r(e, a) && n.push({ unit: a, priority: gi[a] });
          return (
            n.sort(function(e, a) {
              return e.priority - a.priority;
            }),
            n
          );
        }

        function G(e) {
          return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
        }

        function q(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }

        function V(e) {
          var a = +e,
            n = 0;
          return 0 !== a && isFinite(a) && (n = q(a)), n;
        }

        function B(e, a) {
          return function(n) {
            return null != n ? (Z(this, e, n), t.updateOffset(this, a), this) : $(this, e);
          };
        }

        function $(e, a) {
          return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + a]() : NaN;
        }

        function Z(e, a, n) {
          e.isValid() &&
            !isNaN(n) &&
            ('FullYear' === a && G(e.year()) && 1 === e.month() && 29 === e.date()
              ? ((n = V(n)), e._d['set' + (e._isUTC ? 'UTC' : '') + a](n, e.month(), se(n, e.month())))
              : e._d['set' + (e._isUTC ? 'UTC' : '') + a](n));
        }

        function K(e) {
          return (e = I(e)), L(this[e]) ? this[e]() : this;
        }

        function Q(e, a) {
          if ('object' == typeof e) {
            e = C(e);
            var n,
              t = U(e);
            for (n = 0; n < t.length; n++) this[t[n].unit](e[t[n].unit]);
          } else if (((e = I(e)), L(this[e]))) return this[e](a);
          return this;
        }

        function X(e, a, n) {
          ui[e] = L(a)
            ? a
            : function(e, t) {
                return e && n ? n : a;
              };
        }

        function ee(e, a) {
          return r(ui, e) ? ui[e](a._strict, a._locale) : new RegExp(ae(e));
        }

        function ae(e) {
          return ne(
            e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, a, n, t, i) {
              return a || n || t || i;
            })
          );
        }

        function ne(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }

        function te(e, a) {
          var n,
            t = a;
          for (
            'string' == typeof e && (e = [e]),
              m(a) &&
                (t = function(e, n) {
                  n[a] = V(e);
                }),
              n = 0;
            n < e.length;
            n++
          )
            Wi[e[n]] = t;
        }

        function ie(e, a) {
          te(e, function(e, n, t, i) {
            (t._w = t._w || {}), a(e, t._w, t, i);
          });
        }

        function oe(e, a, n) {
          null != a && r(Wi, e) && Wi[e](a, n._a, n, e);
        }

        function re(e, a) {
          return ((e % a) + a) % a;
        }

        function se(e, a) {
          if (isNaN(e) || isNaN(a)) return NaN;
          var n = re(a, 12);
          return (e += (a - n) / 12), 1 === n ? (G(e) ? 29 : 28) : 31 - ((n % 7) % 2);
        }

        function ue(e, a) {
          return e
            ? i(this._months)
              ? this._months[e.month()]
              : this._months[(this._months.isFormat || $i).test(a) ? 'format' : 'standalone'][e.month()]
            : i(this._months)
            ? this._months
            : this._months.standalone;
        }

        function me(e, a) {
          return e
            ? i(this._monthsShort)
              ? this._monthsShort[e.month()]
              : this._monthsShort[$i.test(a) ? 'format' : 'standalone'][e.month()]
            : i(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort.standalone;
        }

        function de(e, a, n) {
          var t,
            i,
            o,
            r = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], t = 0; t < 12; ++t)
              (o = _([2e3, t])), (this._shortMonthsParse[t] = this.monthsShort(o, '').toLocaleLowerCase()), (this._longMonthsParse[t] = this.months(o, '').toLocaleLowerCase());
          return n
            ? 'MMM' === a
              ? ((i = Pi.call(this._shortMonthsParse, r)), -1 !== i ? i : null)
              : ((i = Pi.call(this._longMonthsParse, r)), -1 !== i ? i : null)
            : 'MMM' === a
            ? -1 !== (i = Pi.call(this._shortMonthsParse, r))
              ? i
              : ((i = Pi.call(this._longMonthsParse, r)), -1 !== i ? i : null)
            : -1 !== (i = Pi.call(this._longMonthsParse, r))
            ? i
            : ((i = Pi.call(this._shortMonthsParse, r)), -1 !== i ? i : null);
        }

        function le(e, a, n) {
          var t, i, o;
          if (this._monthsParseExact) return de.call(this, e, a, n);
          for (this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])), t = 0; t < 12; t++) {
            if (
              ((i = _([2e3, t])),
              n &&
                !this._longMonthsParse[t] &&
                ((this._longMonthsParse[t] = new RegExp('^' + this.months(i, '').replace('.', '') + '$', 'i')),
                (this._shortMonthsParse[t] = new RegExp('^' + this.monthsShort(i, '').replace('.', '') + '$', 'i'))),
              n || this._monthsParse[t] || ((o = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')), (this._monthsParse[t] = new RegExp(o.replace('.', ''), 'i'))),
              n && 'MMMM' === a && this._longMonthsParse[t].test(e))
            )
              return t;
            if (n && 'MMM' === a && this._shortMonthsParse[t].test(e)) return t;
            if (!n && this._monthsParse[t].test(e)) return t;
          }
        }

        function ce(e, a) {
          var n;
          if (!e.isValid()) return e;
          if ('string' == typeof a)
            if (/^\d+$/.test(a)) a = V(a);
            else if (((a = e.localeData().monthsParse(a)), !m(a))) return e;
          return (n = Math.min(e.date(), se(e.year(), a))), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](a, n), e;
        }

        function _e(e) {
          return null != e ? (ce(this, e), t.updateOffset(this, !0), this) : $(this, 'Month');
        }

        function he() {
          return se(this.year(), this.month());
        }

        function pe(e) {
          return this._monthsParseExact
            ? (r(this, '_monthsRegex') || ke.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            : (r(this, '_monthsShortRegex') || (this._monthsShortRegex = Zi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }

        function fe(e) {
          return this._monthsParseExact
            ? (r(this, '_monthsRegex') || ke.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
            : (r(this, '_monthsRegex') || (this._monthsRegex = Ki), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
        }

        function ke() {
          function e(e, a) {
            return a.length - e.length;
          }

          var a,
            n,
            t = [],
            i = [],
            o = [];
          for (a = 0; a < 12; a++) (n = _([2e3, a])), t.push(this.monthsShort(n, '')), i.push(this.months(n, '')), o.push(this.months(n, '')), o.push(this.monthsShort(n, ''));
          for (t.sort(e), i.sort(e), o.sort(e), a = 0; a < 12; a++) (t[a] = ne(t[a])), (i[a] = ne(i[a]));
          for (a = 0; a < 24; a++) o[a] = ne(o[a]);
          (this._monthsRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
            (this._monthsShortStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'));
        }

        function ge(e) {
          return G(e) ? 366 : 365;
        }

        function ye() {
          return G(this.year());
        }

        function Me(e, a, n, t, i, o, r) {
          var s;
          return e < 100 && e >= 0 ? ((s = new Date(e + 400, a, n, t, i, o, r)), isFinite(s.getFullYear()) && s.setFullYear(e)) : (s = new Date(e, a, n, t, i, o, r)), s;
        }

        function je(e) {
          var a, n;
          return (
            e < 100 && e >= 0
              ? ((n = Array.prototype.slice.call(arguments)), (n[0] = e + 400), (a = new Date(Date.UTC.apply(null, n))), isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e))
              : (a = new Date(Date.UTC.apply(null, arguments))),
            a
          );
        }

        function be(e, a, n) {
          var t = 7 + a - n;
          return (-(7 + je(e, 0, t).getUTCDay() - a) % 7) + t - 1;
        }

        function ve(e, a, n, t, i) {
          var o,
            r,
            s = (7 + n - t) % 7,
            u = be(e, t, i),
            m = 1 + 7 * (a - 1) + s + u;
          return (
            m <= 0 ? ((o = e - 1), (r = ge(o) + m)) : m > ge(e) ? ((o = e + 1), (r = m - ge(e))) : ((o = e), (r = m)),
            {
              year: o,
              dayOfYear: r,
            }
          );
        }

        function Le(e, a, n) {
          var t,
            i,
            o = be(e.year(), a, n),
            r = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
          return (
            r < 1 ? ((i = e.year() - 1), (t = r + Ye(i, a, n))) : r > Ye(e.year(), a, n) ? ((t = r - Ye(e.year(), a, n)), (i = e.year() + 1)) : ((i = e.year()), (t = r)),
            { week: t, year: i }
          );
        }

        function Ye(e, a, n) {
          var t = be(e, a, n),
            i = be(e + 1, a, n);
          return (ge(e) - t + i) / 7;
        }

        function we(e) {
          return Le(e, this._week.dow, this._week.doy).week;
        }

        function De() {
          return this._week.dow;
        }

        function Te() {
          return this._week.doy;
        }

        function Se(e) {
          var a = this.localeData().week(this);
          return null == e ? a : this.add(7 * (e - a), 'd');
        }

        function He(e) {
          var a = Le(this, 1, 4).week;
          return null == e ? a : this.add(7 * (e - a), 'd');
        }

        function xe(e, a) {
          return 'string' != typeof e ? e : isNaN(e) ? ((e = a.weekdaysParse(e)), 'number' == typeof e ? e : null) : parseInt(e, 10);
        }

        function ze(e, a) {
          return 'string' == typeof e ? a.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
        }

        function Oe(e, a) {
          return e.slice(a, 7).concat(e.slice(0, a));
        }

        function Ee(e, a) {
          var n = i(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(a) ? 'format' : 'standalone'];
          return !0 === e ? Oe(n, this._week.dow) : e ? n[e.day()] : n;
        }

        function Ae(e) {
          return !0 === e ? Oe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
        }

        function Pe(e) {
          return !0 === e ? Oe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
        }

        function We(e, a, n) {
          var t,
            i,
            o,
            r = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], t = 0; t < 7; ++t)
              (o = _([2e3, 1]).day(t)),
                (this._minWeekdaysParse[t] = this.weekdaysMin(o, '').toLocaleLowerCase()),
                (this._shortWeekdaysParse[t] = this.weekdaysShort(o, '').toLocaleLowerCase()),
                (this._weekdaysParse[t] = this.weekdays(o, '').toLocaleLowerCase());
          return n
            ? 'dddd' === a
              ? ((i = Pi.call(this._weekdaysParse, r)), -1 !== i ? i : null)
              : 'ddd' === a
              ? ((i = Pi.call(this._shortWeekdaysParse, r)), -1 !== i ? i : null)
              : ((i = Pi.call(this._minWeekdaysParse, r)), -1 !== i ? i : null)
            : 'dddd' === a
            ? -1 !== (i = Pi.call(this._weekdaysParse, r))
              ? i
              : -1 !== (i = Pi.call(this._shortWeekdaysParse, r))
              ? i
              : ((i = Pi.call(this._minWeekdaysParse, r)), -1 !== i ? i : null)
            : 'ddd' === a
            ? -1 !== (i = Pi.call(this._shortWeekdaysParse, r))
              ? i
              : -1 !== (i = Pi.call(this._weekdaysParse, r))
              ? i
              : ((i = Pi.call(this._minWeekdaysParse, r)), -1 !== i ? i : null)
            : -1 !== (i = Pi.call(this._minWeekdaysParse, r))
            ? i
            : -1 !== (i = Pi.call(this._weekdaysParse, r))
            ? i
            : ((i = Pi.call(this._shortWeekdaysParse, r)), -1 !== i ? i : null);
        }

        function Fe(e, a, n) {
          var t, i, o;
          if (this._weekdaysParseExact) return We.call(this, e, a, n);
          for (
            this._weekdaysParse || ((this._weekdaysParse = []), (this._minWeekdaysParse = []), (this._shortWeekdaysParse = []), (this._fullWeekdaysParse = [])), t = 0;
            t < 7;
            t++
          ) {
            if (
              ((i = _([2e3, 1]).day(t)),
              n &&
                !this._fullWeekdaysParse[t] &&
                ((this._fullWeekdaysParse[t] = new RegExp('^' + this.weekdays(i, '').replace('.', '\\.?') + '$', 'i')),
                (this._shortWeekdaysParse[t] = new RegExp('^' + this.weekdaysShort(i, '').replace('.', '\\.?') + '$', 'i')),
                (this._minWeekdaysParse[t] = new RegExp('^' + this.weekdaysMin(i, '').replace('.', '\\.?') + '$', 'i'))),
              this._weekdaysParse[t] ||
                ((o = '^' + this.weekdays(i, '') + '|^' + this.weekdaysShort(i, '') + '|^' + this.weekdaysMin(i, '')),
                (this._weekdaysParse[t] = new RegExp(o.replace('.', ''), 'i'))),
              n && 'dddd' === a && this._fullWeekdaysParse[t].test(e))
            )
              return t;
            if (n && 'ddd' === a && this._shortWeekdaysParse[t].test(e)) return t;
            if (n && 'dd' === a && this._minWeekdaysParse[t].test(e)) return t;
            if (!n && this._weekdaysParse[t].test(e)) return t;
          }
        }

        function Ne(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var a = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e ? ((e = xe(e, this.localeData())), this.add(e - a, 'd')) : a;
        }

        function Re(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var a = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return null == e ? a : this.add(e - a, 'd');
        }

        function Ie(e) {
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            var a = ze(e, this.localeData());
            return this.day(this.day() % 7 ? a : a - 7);
          }
          return this.day() || 7;
        }

        function Ce(e) {
          return this._weekdaysParseExact
            ? (r(this, '_weekdaysRegex') || Ge.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            : (r(this, '_weekdaysRegex') || (this._weekdaysRegex = to), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }

        function Je(e) {
          return this._weekdaysParseExact
            ? (r(this, '_weekdaysRegex') || Ge.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            : (r(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = io), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }

        function Ue(e) {
          return this._weekdaysParseExact
            ? (r(this, '_weekdaysRegex') || Ge.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            : (r(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = oo), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }

        function Ge() {
          function e(e, a) {
            return a.length - e.length;
          }

          var a,
            n,
            t,
            i,
            o,
            r = [],
            s = [],
            u = [],
            m = [];
          for (a = 0; a < 7; a++)
            (n = _([2e3, 1]).day(a)),
              (t = ne(this.weekdaysMin(n, ''))),
              (i = ne(this.weekdaysShort(n, ''))),
              (o = ne(this.weekdays(n, ''))),
              r.push(t),
              s.push(i),
              u.push(o),
              m.push(t),
              m.push(i),
              m.push(o);
          r.sort(e),
            s.sort(e),
            u.sort(e),
            m.sort(e),
            (this._weekdaysRegex = new RegExp('^(' + m.join('|') + ')', 'i')),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
            (this._weekdaysShortStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
            (this._weekdaysMinStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i'));
        }

        function qe() {
          return this.hours() % 12 || 12;
        }

        function Ve() {
          return this.hours() || 24;
        }

        function Be(e, a) {
          H(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), a);
          });
        }

        function $e(e, a) {
          return a._meridiemParse;
        }

        function Ze(e) {
          return 'p' === (e + '').toLowerCase().charAt(0);
        }

        function Ke(e, a, n) {
          return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
        }

        function Qe(e, a) {
          var n,
            t = Math.min(e.length, a.length);
          for (n = 0; n < t; n += 1) if (e[n] !== a[n]) return n;
          return t;
        }

        function Xe(e) {
          return e ? e.toLowerCase().replace('_', '-') : e;
        }

        function ea(e) {
          for (var a, n, t, i, o = 0; o < e.length; ) {
            for (i = Xe(e[o]).split('-'), a = i.length, n = Xe(e[o + 1]), n = n ? n.split('-') : null; a > 0; ) {
              if ((t = aa(i.slice(0, a).join('-')))) return t;
              if (n && n.length >= a && Qe(i, n) >= a - 1) break;
              a--;
            }
            o++;
          }
          return ro;
        }

        function aa(t) {
          var i = null;
          if (void 0 === lo[t] && void 0 !== e && e && e.exports)
            try {
              (i = ro._abbr), a, n(190)('./' + t), na(i);
            } catch (e) {
              lo[t] = null;
            }
          return lo[t];
        }

        function na(e, a) {
          var n;
          return (
            e &&
              ((n = u(a) ? oa(e) : ta(e, a)),
              n ? (ro = n) : 'undefined' != typeof console && console.warn && console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
            ro._abbr
          );
        }

        function ta(e, a) {
          if (null !== a) {
            var n,
              t = mo;
            if (((a.abbr = e), null != lo[e]))
              v(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
              ),
                (t = lo[e]._config);
            else if (null != a.parentLocale)
              if (null != lo[a.parentLocale]) t = lo[a.parentLocale]._config;
              else {
                if (null == (n = aa(a.parentLocale)))
                  return (
                    co[a.parentLocale] || (co[a.parentLocale] = []),
                    co[a.parentLocale].push({
                      name: e,
                      config: a,
                    }),
                    null
                  );
                t = n._config;
              }
            return (
              (lo[e] = new D(w(t, a))),
              co[e] &&
                co[e].forEach(function(e) {
                  ta(e.name, e.config);
                }),
              na(e),
              lo[e]
            );
          }
          return delete lo[e], null;
        }

        function ia(e, a) {
          if (null != a) {
            var n,
              t,
              i = mo;
            null != lo[e] && null != lo[e].parentLocale
              ? lo[e].set(w(lo[e]._config, a))
              : ((t = aa(e)), null != t && (i = t._config), (a = w(i, a)), null == t && (a.abbr = e), (n = new D(a)), (n.parentLocale = lo[e]), (lo[e] = n)),
              na(e);
          } else null != lo[e] && (null != lo[e].parentLocale ? ((lo[e] = lo[e].parentLocale), e === na() && na(e)) : null != lo[e] && delete lo[e]);
          return lo[e];
        }

        function oa(e) {
          var a;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return ro;
          if (!i(e)) {
            if ((a = aa(e))) return a;
            e = [e];
          }
          return ea(e);
        }

        function ra() {
          return si(lo);
        }

        function sa(e) {
          var a,
            n = e._a;
          return (
            n &&
              -2 === p(e).overflow &&
              ((a =
                n[Ni] < 0 || n[Ni] > 11
                  ? Ni
                  : n[Ri] < 1 || n[Ri] > se(n[Fi], n[Ni])
                  ? Ri
                  : n[Ii] < 0 || n[Ii] > 24 || (24 === n[Ii] && (0 !== n[Ci] || 0 !== n[Ji] || 0 !== n[Ui]))
                  ? Ii
                  : n[Ci] < 0 || n[Ci] > 59
                  ? Ci
                  : n[Ji] < 0 || n[Ji] > 59
                  ? Ji
                  : n[Ui] < 0 || n[Ui] > 999
                  ? Ui
                  : -1),
              p(e)._overflowDayOfYear && (a < Fi || a > Ri) && (a = Ri),
              p(e)._overflowWeeks && -1 === a && (a = Gi),
              p(e)._overflowWeekday && -1 === a && (a = qi),
              (p(e).overflow = a)),
            e
          );
        }

        function ua(e) {
          var a,
            n,
            t,
            i,
            o,
            r,
            s = e._i,
            u = _o.exec(s) || ho.exec(s);
          if (u) {
            for (p(e).iso = !0, a = 0, n = fo.length; a < n; a++)
              if (fo[a][1].exec(u[1])) {
                (i = fo[a][0]), (t = !1 !== fo[a][2]);
                break;
              }
            if (null == i) return void (e._isValid = !1);
            if (u[3]) {
              for (a = 0, n = ko.length; a < n; a++)
                if (ko[a][1].exec(u[3])) {
                  o = (u[2] || ' ') + ko[a][0];
                  break;
                }
              if (null == o) return void (e._isValid = !1);
            }
            if (!t && null != o) return void (e._isValid = !1);
            if (u[4]) {
              if (!po.exec(u[4])) return void (e._isValid = !1);
              r = 'Z';
            }
            (e._f = i + (o || '') + (r || '')), Ma(e);
          } else e._isValid = !1;
        }

        function ma(e, a, n, t, i, o) {
          var r = [da(e), Bi.indexOf(a), parseInt(n, 10), parseInt(t, 10), parseInt(i, 10)];
          return o && r.push(parseInt(o, 10)), r;
        }

        function da(e) {
          var a = parseInt(e, 10);
          return a <= 49 ? 2e3 + a : a <= 999 ? 1900 + a : a;
        }

        function la(e) {
          return e
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
        }

        function ca(e, a, n) {
          if (e) {
            if (ao.indexOf(e) !== new Date(a[0], a[1], a[2]).getDay()) return (p(n).weekdayMismatch = !0), (n._isValid = !1), !1;
          }
          return !0;
        }

        function _a(e, a, n) {
          if (e) return Mo[e];
          if (a) return 0;
          var t = parseInt(n, 10),
            i = t % 100;
          return ((t - i) / 100) * 60 + i;
        }

        function ha(e) {
          var a,
            n = yo.exec(la(e._i));
          if (n) {
            if (((a = ma(n[4], n[3], n[2], n[5], n[6], n[7])), !ca(n[1], a, e))) return;
            (e._a = a), (e._tzm = _a(n[8], n[9], n[10])), (e._d = je.apply(null, e._a)), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), (p(e).rfc2822 = !0);
          } else e._isValid = !1;
        }

        function pa(e) {
          var a = go.exec(e._i);
          if (null !== a) return void (e._d = new Date(+a[1]));
          ua(e), !1 === e._isValid && (delete e._isValid, ha(e), !1 === e._isValid && (delete e._isValid, e._strict ? (e._isValid = !1) : t.createFromInputFallback(e)));
        }

        function fa(e, a, n) {
          return null != e ? e : null != a ? a : n;
        }

        function ka(e) {
          var a = new Date(t.now());
          return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()];
        }

        function ga(e) {
          var a,
            n,
            t,
            i,
            o,
            r = [];
          if (!e._d) {
            for (
              t = ka(e),
                e._w && null == e._a[Ri] && null == e._a[Ni] && ya(e),
                null != e._dayOfYear &&
                  ((o = fa(e._a[Fi], t[Fi])),
                  (e._dayOfYear > ge(o) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0),
                  (n = je(o, 0, e._dayOfYear)),
                  (e._a[Ni] = n.getUTCMonth()),
                  (e._a[Ri] = n.getUTCDate())),
                a = 0;
              a < 3 && null == e._a[a];
              ++a
            )
              e._a[a] = r[a] = t[a];
            for (; a < 7; a++) e._a[a] = r[a] = null == e._a[a] ? (2 === a ? 1 : 0) : e._a[a];
            24 === e._a[Ii] && 0 === e._a[Ci] && 0 === e._a[Ji] && 0 === e._a[Ui] && ((e._nextDay = !0), (e._a[Ii] = 0)),
              (e._d = (e._useUTC ? je : Me).apply(null, r)),
              (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
              null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[Ii] = 24),
              e._w && void 0 !== e._w.d && e._w.d !== i && (p(e).weekdayMismatch = !0);
          }
        }

        function ya(e) {
          var a, n, t, i, o, r, s, u, m;
          (a = e._w),
            null != a.GG || null != a.W || null != a.E
              ? ((o = 1), (r = 4), (n = fa(a.GG, e._a[Fi], Le(Ta(), 1, 4).year)), (t = fa(a.W, 1)), ((i = fa(a.E, 1)) < 1 || i > 7) && (u = !0))
              : ((o = e._locale._week.dow),
                (r = e._locale._week.doy),
                (m = Le(Ta(), o, r)),
                (n = fa(a.gg, e._a[Fi], m.year)),
                (t = fa(a.w, m.week)),
                null != a.d ? ((i = a.d) < 0 || i > 6) && (u = !0) : null != a.e ? ((i = a.e + o), (a.e < 0 || a.e > 6) && (u = !0)) : (i = o)),
            t < 1 || t > Ye(n, o, r)
              ? (p(e)._overflowWeeks = !0)
              : null != u
              ? (p(e)._overflowWeekday = !0)
              : ((s = ve(n, t, i, o, r)), (e._a[Fi] = s.year), (e._dayOfYear = s.dayOfYear));
        }

        function Ma(e) {
          if (e._f === t.ISO_8601) return void ua(e);
          if (e._f === t.RFC_2822) return void ha(e);
          (e._a = []), (p(e).empty = !0);
          var a,
            n,
            i,
            o,
            r,
            s,
            u = '' + e._i,
            m = u.length,
            d = 0;
          for (i = E(e._f, e._locale).match(di) || [], a = 0; a < i.length; a++)
            (o = i[a]),
              (n = (u.match(ee(o, e)) || [])[0]),
              n && ((r = u.substr(0, u.indexOf(n))), r.length > 0 && p(e).unusedInput.push(r), (u = u.slice(u.indexOf(n) + n.length)), (d += n.length)),
              _i[o] ? (n ? (p(e).empty = !1) : p(e).unusedTokens.push(o), oe(o, n, e)) : e._strict && !n && p(e).unusedTokens.push(o);
          (p(e).charsLeftOver = m - d),
            u.length > 0 && p(e).unusedInput.push(u),
            e._a[Ii] <= 12 && !0 === p(e).bigHour && e._a[Ii] > 0 && (p(e).bigHour = void 0),
            (p(e).parsedDateParts = e._a.slice(0)),
            (p(e).meridiem = e._meridiem),
            (e._a[Ii] = ja(e._locale, e._a[Ii], e._meridiem)),
            (s = p(e).era),
            null !== s && (e._a[Fi] = e._locale.erasConvertYear(s, e._a[Fi])),
            ga(e),
            sa(e);
        }

        function ja(e, a, n) {
          var t;
          return null == n ? a : null != e.meridiemHour ? e.meridiemHour(a, n) : null != e.isPM ? ((t = e.isPM(n)), t && a < 12 && (a += 12), t || 12 !== a || (a = 0), a) : a;
        }

        function ba(e) {
          var a,
            n,
            t,
            i,
            o,
            r,
            s = !1;
          if (0 === e._f.length) return (p(e).invalidFormat = !0), void (e._d = new Date(NaN));
          for (i = 0; i < e._f.length; i++)
            (o = 0),
              (r = !1),
              (a = g({}, e)),
              null != e._useUTC && (a._useUTC = e._useUTC),
              (a._f = e._f[i]),
              Ma(a),
              f(a) && (r = !0),
              (o += p(a).charsLeftOver),
              (o += 10 * p(a).unusedTokens.length),
              (p(a).score = o),
              s ? o < t && ((t = o), (n = a)) : (null == t || o < t || r) && ((t = o), (n = a), r && (s = !0));
          c(e, n || a);
        }

        function va(e) {
          if (!e._d) {
            var a = C(e._i),
              n = void 0 === a.day ? a.date : a.day;
            (e._a = l([a.year, a.month, n, a.hour, a.minute, a.second, a.millisecond], function(e) {
              return e && parseInt(e, 10);
            })),
              ga(e);
          }
        }

        function La(e) {
          var a = new y(sa(Ya(e)));
          return a._nextDay && (a.add(1, 'd'), (a._nextDay = void 0)), a;
        }

        function Ya(e) {
          var a = e._i,
            n = e._f;
          return (
            (e._locale = e._locale || oa(e._l)),
            null === a || (void 0 === n && '' === a)
              ? k({ nullInput: !0 })
              : ('string' == typeof a && (e._i = a = e._locale.preparse(a)), M(a) ? new y(sa(a)) : (d(a) ? (e._d = a) : i(n) ? ba(e) : n ? Ma(e) : wa(e), f(e) || (e._d = null), e))
          );
        }

        function wa(e) {
          var a = e._i;
          u(a)
            ? (e._d = new Date(t.now()))
            : d(a)
            ? (e._d = new Date(a.valueOf()))
            : 'string' == typeof a
            ? pa(e)
            : i(a)
            ? ((e._a = l(a.slice(0), function(e) {
                return parseInt(e, 10);
              })),
              ga(e))
            : o(a)
            ? va(e)
            : m(a)
            ? (e._d = new Date(a))
            : t.createFromInputFallback(e);
        }

        function Da(e, a, n, t, r) {
          var u = {};
          return (
            (!0 !== a && !1 !== a) || ((t = a), (a = void 0)),
            (!0 !== n && !1 !== n) || ((t = n), (n = void 0)),
            ((o(e) && s(e)) || (i(e) && 0 === e.length)) && (e = void 0),
            (u._isAMomentObject = !0),
            (u._useUTC = u._isUTC = r),
            (u._l = n),
            (u._i = e),
            (u._f = a),
            (u._strict = t),
            La(u)
          );
        }

        function Ta(e, a, n, t) {
          return Da(e, a, n, t, !1);
        }

        function Sa(e, a) {
          var n, t;
          if ((1 === a.length && i(a[0]) && (a = a[0]), !a.length)) return Ta();
          for (n = a[0], t = 1; t < a.length; ++t) (a[t].isValid() && !a[t][e](n)) || (n = a[t]);
          return n;
        }

        function Ha() {
          return Sa('isBefore', [].slice.call(arguments, 0));
        }

        function xa() {
          return Sa('isAfter', [].slice.call(arguments, 0));
        }

        function za(e) {
          var a,
            n,
            t = !1;
          for (a in e) if (r(e, a) && (-1 === Pi.call(Lo, a) || (null != e[a] && isNaN(e[a])))) return !1;
          for (n = 0; n < Lo.length; ++n)
            if (e[Lo[n]]) {
              if (t) return !1;
              parseFloat(e[Lo[n]]) !== V(e[Lo[n]]) && (t = !0);
            }
          return !0;
        }

        function Oa() {
          return this._isValid;
        }

        function Ea() {
          return en(NaN);
        }

        function Aa(e) {
          var a = C(e),
            n = a.year || 0,
            t = a.quarter || 0,
            i = a.month || 0,
            o = a.week || a.isoWeek || 0,
            r = a.day || 0,
            s = a.hour || 0,
            u = a.minute || 0,
            m = a.second || 0,
            d = a.millisecond || 0;
          (this._isValid = za(a)),
            (this._milliseconds = +d + 1e3 * m + 6e4 * u + 1e3 * s * 60 * 60),
            (this._days = +r + 7 * o),
            (this._months = +i + 3 * t + 12 * n),
            (this._data = {}),
            (this._locale = oa()),
            this._bubble();
        }

        function Pa(e) {
          return e instanceof Aa;
        }

        function Wa(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }

        function Fa(e, a, n) {
          var t,
            i = Math.min(e.length, a.length),
            o = Math.abs(e.length - a.length),
            r = 0;
          for (t = 0; t < i; t++) ((n && e[t] !== a[t]) || (!n && V(e[t]) !== V(a[t]))) && r++;
          return r + o;
        }

        function Na(e, a) {
          H(e, 0, 0, function() {
            var e = this.utcOffset(),
              n = '+';
            return e < 0 && ((e = -e), (n = '-')), n + S(~~(e / 60), 2) + a + S(~~e % 60, 2);
          });
        }

        function Ra(e, a) {
          var n,
            t,
            i,
            o = (a || '').match(e);
          return null === o ? null : ((n = o[o.length - 1] || []), (t = (n + '').match(Yo) || ['-', 0, 0]), (i = 60 * t[1] + V(t[2])), 0 === i ? 0 : '+' === t[0] ? i : -i);
        }

        function Ia(e, a) {
          var n, i;
          return a._isUTC
            ? ((n = a.clone()), (i = (M(e) || d(e) ? e.valueOf() : Ta(e).valueOf()) - n.valueOf()), n._d.setTime(n._d.valueOf() + i), t.updateOffset(n, !1), n)
            : Ta(e).local();
        }

        function Ca(e) {
          return -Math.round(e._d.getTimezoneOffset());
        }

        function Ja(e, a, n) {
          var i,
            o = this._offset || 0;
          if (!this.isValid()) return null != e ? this : NaN;
          if (null != e) {
            if ('string' == typeof e) {
              if (null === (e = Ra(Oi, e))) return this;
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return (
              !this._isUTC && a && (i = Ca(this)),
              (this._offset = e),
              (this._isUTC = !0),
              null != i && this.add(i, 'm'),
              o !== e &&
                (!a || this._changeInProgress
                  ? rn(this, en(e - o, 'm'), 1, !1)
                  : this._changeInProgress || ((this._changeInProgress = !0), t.updateOffset(this, !0), (this._changeInProgress = null))),
              this
            );
          }
          return this._isUTC ? o : Ca(this);
        }

        function Ua(e, a) {
          return null != e ? ('string' != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset();
        }

        function Ga(e) {
          return this.utcOffset(0, e);
        }

        function qa(e) {
          return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(Ca(this), 'm')), this;
        }

        function Va() {
          if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
          else if ('string' == typeof this._i) {
            var e = Ra(zi, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
          }
          return this;
        }

        function Ba(e) {
          return !!this.isValid() && ((e = e ? Ta(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
        }

        function $a() {
          return (
            this.utcOffset() >
              this.clone()
                .month(0)
                .utcOffset() ||
            this.utcOffset() >
              this.clone()
                .month(5)
                .utcOffset()
          );
        }

        function Za() {
          if (!u(this._isDSTShifted)) return this._isDSTShifted;
          var e,
            a = {};
          return (
            g(a, this),
            (a = Ya(a)),
            a._a ? ((e = a._isUTC ? _(a._a) : Ta(a._a)), (this._isDSTShifted = this.isValid() && Fa(a._a, e.toArray()) > 0)) : (this._isDSTShifted = !1),
            this._isDSTShifted
          );
        }

        function Ka() {
          return !!this.isValid() && !this._isUTC;
        }

        function Qa() {
          return !!this.isValid() && this._isUTC;
        }

        function Xa() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }

        function en(e, a) {
          var n,
            t,
            i,
            o = e,
            s = null;
          return (
            Pa(e)
              ? (o = { ms: e._milliseconds, d: e._days, M: e._months })
              : m(e) || !isNaN(+e)
              ? ((o = {}), a ? (o[a] = +e) : (o.milliseconds = +e))
              : (s = wo.exec(e))
              ? ((n = '-' === s[1] ? -1 : 1),
                (o = {
                  y: 0,
                  d: V(s[Ri]) * n,
                  h: V(s[Ii]) * n,
                  m: V(s[Ci]) * n,
                  s: V(s[Ji]) * n,
                  ms: V(Wa(1e3 * s[Ui])) * n,
                }))
              : (s = Do.exec(e))
              ? ((n = '-' === s[1] ? -1 : 1),
                (o = {
                  y: an(s[2], n),
                  M: an(s[3], n),
                  w: an(s[4], n),
                  d: an(s[5], n),
                  h: an(s[6], n),
                  m: an(s[7], n),
                  s: an(s[8], n),
                }))
              : null == o
              ? (o = {})
              : 'object' == typeof o && ('from' in o || 'to' in o) && ((i = tn(Ta(o.from), Ta(o.to))), (o = {}), (o.ms = i.milliseconds), (o.M = i.months)),
            (t = new Aa(o)),
            Pa(e) && r(e, '_locale') && (t._locale = e._locale),
            Pa(e) && r(e, '_isValid') && (t._isValid = e._isValid),
            t
          );
        }

        function an(e, a) {
          var n = e && parseFloat(e.replace(',', '.'));
          return (isNaN(n) ? 0 : n) * a;
        }

        function nn(e, a) {
          var n = {};
          return (
            (n.months = a.month() - e.month() + 12 * (a.year() - e.year())),
            e
              .clone()
              .add(n.months, 'M')
              .isAfter(a) && --n.months,
            (n.milliseconds = +a - +e.clone().add(n.months, 'M')),
            n
          );
        }

        function tn(e, a) {
          var n;
          return e.isValid() && a.isValid()
            ? ((a = Ia(a, e)), e.isBefore(a) ? (n = nn(e, a)) : ((n = nn(a, e)), (n.milliseconds = -n.milliseconds), (n.months = -n.months)), n)
            : { milliseconds: 0, months: 0 };
        }

        function on(e, a) {
          return function(n, t) {
            var i, o;
            return (
              null === t ||
                isNaN(+t) ||
                (v(
                  a,
                  'moment().' +
                    a +
                    '(period, number) is deprecated. Please use moment().' +
                    a +
                    '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                ),
                (o = n),
                (n = t),
                (t = o)),
              (i = en(n, t)),
              rn(this, i, e),
              this
            );
          };
        }

        function rn(e, a, n, i) {
          var o = a._milliseconds,
            r = Wa(a._days),
            s = Wa(a._months);
          e.isValid() &&
            ((i = null == i || i),
            s && ce(e, $(e, 'Month') + s * n),
            r && Z(e, 'Date', $(e, 'Date') + r * n),
            o && e._d.setTime(e._d.valueOf() + o * n),
            i && t.updateOffset(e, r || s));
        }

        function sn(e) {
          return 'string' == typeof e || e instanceof String;
        }

        function un(e) {
          return M(e) || d(e) || sn(e) || m(e) || dn(e) || mn(e) || null === e || void 0 === e;
        }

        function mn(e) {
          var a,
            n,
            t = o(e) && !s(e),
            i = !1,
            u = [
              'years',
              'year',
              'y',
              'months',
              'month',
              'M',
              'days',
              'day',
              'd',
              'dates',
              'date',
              'D',
              'hours',
              'hour',
              'h',
              'minutes',
              'minute',
              'm',
              'seconds',
              'second',
              's',
              'milliseconds',
              'millisecond',
              'ms',
            ];
          for (a = 0; a < u.length; a += 1) (n = u[a]), (i = i || r(e, n));
          return t && i;
        }

        function dn(e) {
          var a = i(e),
            n = !1;
          return (
            a &&
              (n =
                0 ===
                e.filter(function(a) {
                  return !m(a) && sn(e);
                }).length),
            a && n
          );
        }

        function ln(e) {
          var a,
            n,
            t = o(e) && !s(e),
            i = !1,
            u = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'];
          for (a = 0; a < u.length; a += 1) (n = u[a]), (i = i || r(e, n));
          return t && i;
        }

        function cn(e, a) {
          var n = e.diff(a, 'days', !0);
          return n < -6 ? 'sameElse' : n < -1 ? 'lastWeek' : n < 0 ? 'lastDay' : n < 1 ? 'sameDay' : n < 2 ? 'nextDay' : n < 7 ? 'nextWeek' : 'sameElse';
        }

        function _n(e, a) {
          1 === arguments.length && (un(arguments[0]) ? ((e = arguments[0]), (a = void 0)) : ln(arguments[0]) && ((a = arguments[0]), (e = void 0)));
          var n = e || Ta(),
            i = Ia(n, this).startOf('day'),
            o = t.calendarFormat(this, i) || 'sameElse',
            r = a && (L(a[o]) ? a[o].call(this, n) : a[o]);
          return this.format(r || this.localeData().calendar(o, this, Ta(n)));
        }

        function hn() {
          return new y(this);
        }

        function pn(e, a) {
          var n = M(e) ? e : Ta(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ((a = I(a) || 'millisecond'),
            'millisecond' === a
              ? this.valueOf() > n.valueOf()
              : n.valueOf() <
                this.clone()
                  .startOf(a)
                  .valueOf())
          );
        }

        function fn(e, a) {
          var n = M(e) ? e : Ta(e);
          return (
            !(!this.isValid() || !n.isValid()) &&
            ((a = I(a) || 'millisecond'),
            'millisecond' === a
              ? this.valueOf() < n.valueOf()
              : this.clone()
                  .endOf(a)
                  .valueOf() < n.valueOf())
          );
        }

        function kn(e, a, n, t) {
          var i = M(e) ? e : Ta(e),
            o = M(a) ? a : Ta(a);
          return (
            !!(this.isValid() && i.isValid() && o.isValid()) &&
            ((t = t || '()'), ('(' === t[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (')' === t[1] ? this.isBefore(o, n) : !this.isAfter(o, n)))
          );
        }

        function gn(e, a) {
          var n,
            t = M(e) ? e : Ta(e);
          return (
            !(!this.isValid() || !t.isValid()) &&
            ((a = I(a) || 'millisecond'),
            'millisecond' === a
              ? this.valueOf() === t.valueOf()
              : ((n = t.valueOf()),
                this.clone()
                  .startOf(a)
                  .valueOf() <= n &&
                  n <=
                    this.clone()
                      .endOf(a)
                      .valueOf()))
          );
        }

        function yn(e, a) {
          return this.isSame(e, a) || this.isAfter(e, a);
        }

        function Mn(e, a) {
          return this.isSame(e, a) || this.isBefore(e, a);
        }

        function jn(e, a, n) {
          var t, i, o;
          if (!this.isValid()) return NaN;
          if (((t = Ia(e, this)), !t.isValid())) return NaN;
          switch (((i = 6e4 * (t.utcOffset() - this.utcOffset())), (a = I(a)))) {
            case 'year':
              o = bn(this, t) / 12;
              break;
            case 'month':
              o = bn(this, t);
              break;
            case 'quarter':
              o = bn(this, t) / 3;
              break;
            case 'second':
              o = (this - t) / 1e3;
              break;
            case 'minute':
              o = (this - t) / 6e4;
              break;
            case 'hour':
              o = (this - t) / 36e5;
              break;
            case 'day':
              o = (this - t - i) / 864e5;
              break;
            case 'week':
              o = (this - t - i) / 6048e5;
              break;
            default:
              o = this - t;
          }
          return n ? o : q(o);
        }

        function bn(e, a) {
          if (e.date() < a.date()) return -bn(a, e);
          var n,
            t,
            i = 12 * (a.year() - e.year()) + (a.month() - e.month()),
            o = e.clone().add(i, 'months');
          return a - o < 0 ? ((n = e.clone().add(i - 1, 'months')), (t = (a - o) / (o - n))) : ((n = e.clone().add(i + 1, 'months')), (t = (a - o) / (n - o))), -(i + t) || 0;
        }

        function vn() {
          return this.clone()
            .locale('en')
            .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }

        function Ln(e) {
          if (!this.isValid()) return null;
          var a = !0 !== e,
            n = a ? this.clone().utc() : this;
          return n.year() < 0 || n.year() > 9999
            ? O(n, a ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
            : L(Date.prototype.toISOString)
            ? a
              ? this.toDate().toISOString()
              : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace('Z', O(n, 'Z'))
            : O(n, a ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }

        function Yn() {
          if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
          var e,
            a,
            n,
            t,
            i = 'moment',
            o = '';
          return (
            this.isLocal() || ((i = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'), (o = 'Z')),
            (e = '[' + i + '("]'),
            (a = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
            (n = '-MM-DD[T]HH:mm:ss.SSS'),
            (t = o + '[")]'),
            this.format(e + a + n + t)
          );
        }

        function wn(e) {
          e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
          var a = O(this, e);
          return this.localeData().postformat(a);
        }

        function Dn(e, a) {
          return this.isValid() && ((M(e) && e.isValid()) || Ta(e).isValid())
            ? en({ to: this, from: e })
                .locale(this.locale())
                .humanize(!a)
            : this.localeData().invalidDate();
        }

        function Tn(e) {
          return this.from(Ta(), e);
        }

        function Sn(e, a) {
          return this.isValid() && ((M(e) && e.isValid()) || Ta(e).isValid())
            ? en({ from: this, to: e })
                .locale(this.locale())
                .humanize(!a)
            : this.localeData().invalidDate();
        }

        function Hn(e) {
          return this.to(Ta(), e);
        }

        function xn(e) {
          var a;
          return void 0 === e ? this._locale._abbr : ((a = oa(e)), null != a && (this._locale = a), this);
        }

        function zn() {
          return this._locale;
        }

        function On(e, a) {
          return ((e % a) + a) % a;
        }

        function En(e, a, n) {
          return e < 100 && e >= 0 ? new Date(e + 400, a, n) - Eo : new Date(e, a, n).valueOf();
        }

        function An(e, a, n) {
          return e < 100 && e >= 0 ? Date.UTC(e + 400, a, n) - Eo : Date.UTC(e, a, n);
        }

        function Pn(e) {
          var a, n;
          if (void 0 === (e = I(e)) || 'millisecond' === e || !this.isValid()) return this;
          switch (((n = this._isUTC ? An : En), e)) {
            case 'year':
              a = n(this.year(), 0, 1);
              break;
            case 'quarter':
              a = n(this.year(), this.month() - (this.month() % 3), 1);
              break;
            case 'month':
              a = n(this.year(), this.month(), 1);
              break;
            case 'week':
              a = n(this.year(), this.month(), this.date() - this.weekday());
              break;
            case 'isoWeek':
              a = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;
            case 'day':
            case 'date':
              a = n(this.year(), this.month(), this.date());
              break;
            case 'hour':
              (a = this._d.valueOf()), (a -= On(a + (this._isUTC ? 0 : this.utcOffset() * zo), Oo));
              break;
            case 'minute':
              (a = this._d.valueOf()), (a -= On(a, zo));
              break;
            case 'second':
              (a = this._d.valueOf()), (a -= On(a, xo));
          }
          return this._d.setTime(a), t.updateOffset(this, !0), this;
        }

        function Wn(e) {
          var a, n;
          if (void 0 === (e = I(e)) || 'millisecond' === e || !this.isValid()) return this;
          switch (((n = this._isUTC ? An : En), e)) {
            case 'year':
              a = n(this.year() + 1, 0, 1) - 1;
              break;
            case 'quarter':
              a = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
              break;
            case 'month':
              a = n(this.year(), this.month() + 1, 1) - 1;
              break;
            case 'week':
              a = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;
            case 'isoWeek':
              a = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;
            case 'day':
            case 'date':
              a = n(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case 'hour':
              (a = this._d.valueOf()), (a += Oo - On(a + (this._isUTC ? 0 : this.utcOffset() * zo), Oo) - 1);
              break;
            case 'minute':
              (a = this._d.valueOf()), (a += zo - On(a, zo) - 1);
              break;
            case 'second':
              (a = this._d.valueOf()), (a += xo - On(a, xo) - 1);
          }
          return this._d.setTime(a), t.updateOffset(this, !0), this;
        }

        function Fn() {
          return this._d.valueOf() - 6e4 * (this._offset || 0);
        }

        function Nn() {
          return Math.floor(this.valueOf() / 1e3);
        }

        function Rn() {
          return new Date(this.valueOf());
        }

        function In() {
          var e = this;
          return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
        }

        function Cn() {
          var e = this;
          return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds(),
          };
        }

        function Jn() {
          return this.isValid() ? this.toISOString() : null;
        }

        function Un() {
          return f(this);
        }

        function Gn() {
          return c({}, p(this));
        }

        function qn() {
          return p(this).overflow;
        }

        function Vn() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
          };
        }

        function Bn(e, a) {
          var n,
            i,
            o,
            r = this._eras || oa('en')._eras;
          for (n = 0, i = r.length; n < i; ++n) {
            switch (typeof r[n].since) {
              case 'string':
                (o = t(r[n].since).startOf('day')), (r[n].since = o.valueOf());
            }
            switch (typeof r[n].until) {
              case 'undefined':
                r[n].until = 1 / 0;
                break;
              case 'string':
                (o = t(r[n].until)
                  .startOf('day')
                  .valueOf()),
                  (r[n].until = o.valueOf());
            }
          }
          return r;
        }

        function $n(e, a, n) {
          var t,
            i,
            o,
            r,
            s,
            u = this.eras();
          for (e = e.toUpperCase(), t = 0, i = u.length; t < i; ++t)
            if (((o = u[t].name.toUpperCase()), (r = u[t].abbr.toUpperCase()), (s = u[t].narrow.toUpperCase()), n))
              switch (a) {
                case 'N':
                case 'NN':
                case 'NNN':
                  if (r === e) return u[t];
                  break;
                case 'NNNN':
                  if (o === e) return u[t];
                  break;
                case 'NNNNN':
                  if (s === e) return u[t];
              }
            else if ([o, r, s].indexOf(e) >= 0) return u[t];
        }

        function Zn(e, a) {
          var n = e.since <= e.until ? 1 : -1;
          return void 0 === a ? t(e.since).year() : t(e.since).year() + (a - e.offset) * n;
        }

        function Kn() {
          var e,
            a,
            n,
            t = this.localeData().eras();
          for (e = 0, a = t.length; e < a; ++e) {
            if (((n = this.startOf('day').valueOf()), t[e].since <= n && n <= t[e].until)) return t[e].name;
            if (t[e].until <= n && n <= t[e].since) return t[e].name;
          }
          return '';
        }

        function Qn() {
          var e,
            a,
            n,
            t = this.localeData().eras();
          for (e = 0, a = t.length; e < a; ++e) {
            if (((n = this.startOf('day').valueOf()), t[e].since <= n && n <= t[e].until)) return t[e].narrow;
            if (t[e].until <= n && n <= t[e].since) return t[e].narrow;
          }
          return '';
        }

        function Xn() {
          var e,
            a,
            n,
            t = this.localeData().eras();
          for (e = 0, a = t.length; e < a; ++e) {
            if (((n = this.startOf('day').valueOf()), t[e].since <= n && n <= t[e].until)) return t[e].abbr;
            if (t[e].until <= n && n <= t[e].since) return t[e].abbr;
          }
          return '';
        }

        function et() {
          var e,
            a,
            n,
            i,
            o = this.localeData().eras();
          for (e = 0, a = o.length; e < a; ++e)
            if (((n = o[e].since <= o[e].until ? 1 : -1), (i = this.startOf('day').valueOf()), (o[e].since <= i && i <= o[e].until) || (o[e].until <= i && i <= o[e].since)))
              return (this.year() - t(o[e].since).year()) * n + o[e].offset;
          return this.year();
        }

        function at(e) {
          return r(this, '_erasNameRegex') || ut.call(this), e ? this._erasNameRegex : this._erasRegex;
        }

        function nt(e) {
          return r(this, '_erasAbbrRegex') || ut.call(this), e ? this._erasAbbrRegex : this._erasRegex;
        }

        function tt(e) {
          return r(this, '_erasNarrowRegex') || ut.call(this), e ? this._erasNarrowRegex : this._erasRegex;
        }

        function it(e, a) {
          return a.erasAbbrRegex(e);
        }

        function ot(e, a) {
          return a.erasNameRegex(e);
        }

        function rt(e, a) {
          return a.erasNarrowRegex(e);
        }

        function st(e, a) {
          return a._eraYearOrdinalRegex || Hi;
        }

        function ut() {
          var e,
            a,
            n = [],
            t = [],
            i = [],
            o = [],
            r = this.eras();
          for (e = 0, a = r.length; e < a; ++e)
            t.push(ne(r[e].name)), n.push(ne(r[e].abbr)), i.push(ne(r[e].narrow)), o.push(ne(r[e].name)), o.push(ne(r[e].abbr)), o.push(ne(r[e].narrow));
          (this._erasRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
            (this._erasNameRegex = new RegExp('^(' + t.join('|') + ')', 'i')),
            (this._erasAbbrRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
            (this._erasNarrowRegex = new RegExp('^(' + i.join('|') + ')', 'i'));
        }

        function mt(e, a) {
          H(0, [e, e.length], 0, a);
        }

        function dt(e) {
          return ft.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }

        function lt(e) {
          return ft.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
        }

        function ct() {
          return Ye(this.year(), 1, 4);
        }

        function _t() {
          return Ye(this.isoWeekYear(), 1, 4);
        }

        function ht() {
          var e = this.localeData()._week;
          return Ye(this.year(), e.dow, e.doy);
        }

        function pt() {
          var e = this.localeData()._week;
          return Ye(this.weekYear(), e.dow, e.doy);
        }

        function ft(e, a, n, t, i) {
          var o;
          return null == e ? Le(this, t, i).year : ((o = Ye(e, t, i)), a > o && (a = o), kt.call(this, e, a, n, t, i));
        }

        function kt(e, a, n, t, i) {
          var o = ve(e, a, n, t, i),
            r = je(o.year, 0, o.dayOfYear);
          return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this;
        }

        function gt(e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
        }

        function yt(e) {
          var a = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
          return null == e ? a : this.add(e - a, 'd');
        }

        function Mt(e, a) {
          a[Ui] = V(1e3 * ('0.' + e));
        }

        function jt() {
          return this._isUTC ? 'UTC' : '';
        }

        function bt() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
        }

        function vt(e) {
          return Ta(1e3 * e);
        }

        function Lt() {
          return Ta.apply(null, arguments).parseZone();
        }

        function Yt(e) {
          return e;
        }

        function wt(e, a, n, t) {
          var i = oa(),
            o = _().set(t, a);
          return i[n](o, e);
        }

        function Dt(e, a, n) {
          if ((m(e) && ((a = e), (e = void 0)), (e = e || ''), null != a)) return wt(e, a, n, 'month');
          var t,
            i = [];
          for (t = 0; t < 12; t++) i[t] = wt(e, t, n, 'month');
          return i;
        }

        function Tt(e, a, n, t) {
          'boolean' == typeof e ? (m(a) && ((n = a), (a = void 0)), (a = a || '')) : ((a = e), (n = a), (e = !1), m(a) && ((n = a), (a = void 0)), (a = a || ''));
          var i,
            o = oa(),
            r = e ? o._week.dow : 0,
            s = [];
          if (null != n) return wt(a, (n + r) % 7, t, 'day');
          for (i = 0; i < 7; i++) s[i] = wt(a, (i + r) % 7, t, 'day');
          return s;
        }

        function St(e, a) {
          return Dt(e, a, 'months');
        }

        function Ht(e, a) {
          return Dt(e, a, 'monthsShort');
        }

        function xt(e, a, n) {
          return Tt(e, a, n, 'weekdays');
        }

        function zt(e, a, n) {
          return Tt(e, a, n, 'weekdaysShort');
        }

        function Ot(e, a, n) {
          return Tt(e, a, n, 'weekdaysMin');
        }

        function Et() {
          var e = this._data;
          return (
            (this._milliseconds = Co(this._milliseconds)),
            (this._days = Co(this._days)),
            (this._months = Co(this._months)),
            (e.milliseconds = Co(e.milliseconds)),
            (e.seconds = Co(e.seconds)),
            (e.minutes = Co(e.minutes)),
            (e.hours = Co(e.hours)),
            (e.months = Co(e.months)),
            (e.years = Co(e.years)),
            this
          );
        }

        function At(e, a, n, t) {
          var i = en(a, n);
          return (e._milliseconds += t * i._milliseconds), (e._days += t * i._days), (e._months += t * i._months), e._bubble();
        }

        function Pt(e, a) {
          return At(this, e, a, 1);
        }

        function Wt(e, a) {
          return At(this, e, a, -1);
        }

        function Ft(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }

        function Nt() {
          var e,
            a,
            n,
            t,
            i,
            o = this._milliseconds,
            r = this._days,
            s = this._months,
            u = this._data;
          return (
            (o >= 0 && r >= 0 && s >= 0) || (o <= 0 && r <= 0 && s <= 0) || ((o += 864e5 * Ft(It(s) + r)), (r = 0), (s = 0)),
            (u.milliseconds = o % 1e3),
            (e = q(o / 1e3)),
            (u.seconds = e % 60),
            (a = q(e / 60)),
            (u.minutes = a % 60),
            (n = q(a / 60)),
            (u.hours = n % 24),
            (r += q(n / 24)),
            (i = q(Rt(r))),
            (s += i),
            (r -= Ft(It(i))),
            (t = q(s / 12)),
            (s %= 12),
            (u.days = r),
            (u.months = s),
            (u.years = t),
            this
          );
        }

        function Rt(e) {
          return (4800 * e) / 146097;
        }

        function It(e) {
          return (146097 * e) / 4800;
        }

        function Ct(e) {
          if (!this.isValid()) return NaN;
          var a,
            n,
            t = this._milliseconds;
          if ('month' === (e = I(e)) || 'quarter' === e || 'year' === e)
            switch (((a = this._days + t / 864e5), (n = this._months + Rt(a)), e)) {
              case 'month':
                return n;
              case 'quarter':
                return n / 3;
              case 'year':
                return n / 12;
            }
          else
            switch (((a = this._days + Math.round(It(this._months))), e)) {
              case 'week':
                return a / 7 + t / 6048e5;
              case 'day':
                return a + t / 864e5;
              case 'hour':
                return 24 * a + t / 36e5;
              case 'minute':
                return 1440 * a + t / 6e4;
              case 'second':
                return 86400 * a + t / 1e3;
              case 'millisecond':
                return Math.floor(864e5 * a) + t;
              default:
                throw new Error('Unknown unit ' + e);
            }
        }

        function Jt() {
          return this.isValid() ? this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * V(this._months / 12) : NaN;
        }

        function Ut(e) {
          return function() {
            return this.as(e);
          };
        }

        function Gt() {
          return en(this);
        }

        function qt(e) {
          return (e = I(e)), this.isValid() ? this[e + 's']() : NaN;
        }

        function Vt(e) {
          return function() {
            return this.isValid() ? this._data[e] : NaN;
          };
        }

        function Bt() {
          return q(this.days() / 7);
        }

        function $t(e, a, n, t, i) {
          return i.relativeTime(a || 1, !!n, e, t);
        }

        function Zt(e, a, n, t) {
          var i = en(e).abs(),
            o = or(i.as('s')),
            r = or(i.as('m')),
            s = or(i.as('h')),
            u = or(i.as('d')),
            m = or(i.as('M')),
            d = or(i.as('w')),
            l = or(i.as('y')),
            c =
              (o <= n.ss && ['s', o]) ||
              (o < n.s && ['ss', o]) ||
              (r <= 1 && ['m']) ||
              (r < n.m && ['mm', r]) ||
              (s <= 1 && ['h']) ||
              (s < n.h && ['hh', s]) ||
              (u <= 1 && ['d']) ||
              (u < n.d && ['dd', u]);
          return (
            null != n.w && (c = c || (d <= 1 && ['w']) || (d < n.w && ['ww', d])),
            (c = c || (m <= 1 && ['M']) || (m < n.M && ['MM', m]) || (l <= 1 && ['y']) || ['yy', l]),
            (c[2] = a),
            (c[3] = +e > 0),
            (c[4] = t),
            $t.apply(null, c)
          );
        }

        function Kt(e) {
          return void 0 === e ? or : 'function' == typeof e && ((or = e), !0);
        }

        function Qt(e, a) {
          return void 0 !== rr[e] && (void 0 === a ? rr[e] : ((rr[e] = a), 's' === e && (rr.ss = a - 1), !0));
        }

        function Xt(e, a) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var n,
            t,
            i = !1,
            o = rr;
          return (
            'object' == typeof e && ((a = e), (e = !1)),
            'boolean' == typeof e && (i = e),
            'object' == typeof a && ((o = Object.assign({}, rr, a)), null != a.s && null == a.ss && (o.ss = a.s - 1)),
            (n = this.localeData()),
            (t = Zt(this, !i, o, n)),
            i && (t = n.pastFuture(+this, t)),
            n.postformat(t)
          );
        }

        function ei(e) {
          return (e > 0) - (e < 0) || +e;
        }

        function ai() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e,
            a,
            n,
            t,
            i,
            o,
            r,
            s,
            u = sr(this._milliseconds) / 1e3,
            m = sr(this._days),
            d = sr(this._months),
            l = this.asSeconds();
          return l
            ? ((e = q(u / 60)),
              (a = q(e / 60)),
              (u %= 60),
              (e %= 60),
              (n = q(d / 12)),
              (d %= 12),
              (t = u ? u.toFixed(3).replace(/\.?0+$/, '') : ''),
              (i = l < 0 ? '-' : ''),
              (o = ei(this._months) !== ei(l) ? '-' : ''),
              (r = ei(this._days) !== ei(l) ? '-' : ''),
              (s = ei(this._milliseconds) !== ei(l) ? '-' : ''),
              i +
                'P' +
                (n ? o + n + 'Y' : '') +
                (d ? o + d + 'M' : '') +
                (m ? r + m + 'D' : '') +
                (a || e || u ? 'T' : '') +
                (a ? s + a + 'H' : '') +
                (e ? s + e + 'M' : '') +
                (u ? s + t + 'S' : ''))
            : 'P0D';
        }

        var ni, ti;
        ti = Array.prototype.some
          ? Array.prototype.some
          : function(e) {
              var a,
                n = Object(this),
                t = n.length >>> 0;
              for (a = 0; a < t; a++) if (a in n && e.call(this, n[a], a, n)) return !0;
              return !1;
            };
        var ii = (t.momentProperties = []),
          oi = !1,
          ri = {};
        (t.suppressDeprecationWarnings = !1), (t.deprecationHandler = null);
        var si;
        si = Object.keys
          ? Object.keys
          : function(e) {
              var a,
                n = [];
              for (a in e) r(e, a) && n.push(a);
              return n;
            };
        var ui,
          mi = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          },
          di = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          li = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          ci = {},
          _i = {},
          hi = {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A',
          },
          pi = /\d{1,2}/,
          fi = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            w: 'a week',
            ww: '%d weeks',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          },
          ki = {},
          gi = {},
          yi = /\d/,
          Mi = /\d\d/,
          ji = /\d{3}/,
          bi = /\d{4}/,
          vi = /[+-]?\d{6}/,
          Li = /\d\d?/,
          Yi = /\d\d\d\d?/,
          wi = /\d\d\d\d\d\d?/,
          Di = /\d{1,3}/,
          Ti = /\d{1,4}/,
          Si = /[+-]?\d{1,6}/,
          Hi = /\d+/,
          xi = /[+-]?\d+/,
          zi = /Z|[+-]\d\d:?\d\d/gi,
          Oi = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Ei = /[+-]?\d+(\.\d{1,3})?/,
          Ai = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        ui = {};
        var Pi,
          Wi = {},
          Fi = 0,
          Ni = 1,
          Ri = 2,
          Ii = 3,
          Ci = 4,
          Ji = 5,
          Ui = 6,
          Gi = 7,
          qi = 8;
        (Pi = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function(e) {
              var a;
              for (a = 0; a < this.length; ++a) if (this[a] === e) return a;
              return -1;
            }),
          H('M', ['MM', 2], 'Mo', function() {
            return this.month() + 1;
          }),
          H('MMM', 0, 0, function(e) {
            return this.localeData().monthsShort(this, e);
          }),
          H('MMMM', 0, 0, function(e) {
            return this.localeData().months(this, e);
          }),
          R('month', 'M'),
          J('month', 8),
          X('M', Li),
          X('MM', Li, Mi),
          X('MMM', function(e, a) {
            return a.monthsShortRegex(e);
          }),
          X('MMMM', function(e, a) {
            return a.monthsRegex(e);
          }),
          te(['M', 'MM'], function(e, a) {
            a[Ni] = V(e) - 1;
          }),
          te(['MMM', 'MMMM'], function(e, a, n, t) {
            var i = n._locale.monthsParse(e, t, n._strict);
            null != i ? (a[Ni] = i) : (p(n).invalidMonth = e);
          });
        var Vi = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          Bi = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          $i = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Zi = Ai,
          Ki = Ai;
        H('Y', 0, 0, function() {
          var e = this.year();
          return e <= 9999 ? S(e, 4) : '+' + e;
        }),
          H(0, ['YY', 2], 0, function() {
            return this.year() % 100;
          }),
          H(0, ['YYYY', 4], 0, 'year'),
          H(0, ['YYYYY', 5], 0, 'year'),
          H(0, ['YYYYYY', 6, !0], 0, 'year'),
          R('year', 'y'),
          J('year', 1),
          X('Y', xi),
          X('YY', Li, Mi),
          X('YYYY', Ti, bi),
          X('YYYYY', Si, vi),
          X('YYYYYY', Si, vi),
          te(['YYYYY', 'YYYYYY'], Fi),
          te('YYYY', function(e, a) {
            a[Fi] = 2 === e.length ? t.parseTwoDigitYear(e) : V(e);
          }),
          te('YY', function(e, a) {
            a[Fi] = t.parseTwoDigitYear(e);
          }),
          te('Y', function(e, a) {
            a[Fi] = parseInt(e, 10);
          }),
          (t.parseTwoDigitYear = function(e) {
            return V(e) + (V(e) > 68 ? 1900 : 2e3);
          });
        var Qi = B('FullYear', !0);
        H('w', ['ww', 2], 'wo', 'week'),
          H('W', ['WW', 2], 'Wo', 'isoWeek'),
          R('week', 'w'),
          R('isoWeek', 'W'),
          J('week', 5),
          J('isoWeek', 5),
          X('w', Li),
          X('ww', Li, Mi),
          X('W', Li),
          X('WW', Li, Mi),
          ie(['w', 'ww', 'W', 'WW'], function(e, a, n, t) {
            a[t.substr(0, 1)] = V(e);
          });
        var Xi = { dow: 0, doy: 6 };
        H('d', 0, 'do', 'day'),
          H('dd', 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          H('ddd', 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          H('dddd', 0, 0, function(e) {
            return this.localeData().weekdays(this, e);
          }),
          H('e', 0, 0, 'weekday'),
          H('E', 0, 0, 'isoWeekday'),
          R('day', 'd'),
          R('weekday', 'e'),
          R('isoWeekday', 'E'),
          J('day', 11),
          J('weekday', 11),
          J('isoWeekday', 11),
          X('d', Li),
          X('e', Li),
          X('E', Li),
          X('dd', function(e, a) {
            return a.weekdaysMinRegex(e);
          }),
          X('ddd', function(e, a) {
            return a.weekdaysShortRegex(e);
          }),
          X('dddd', function(e, a) {
            return a.weekdaysRegex(e);
          }),
          ie(['dd', 'ddd', 'dddd'], function(e, a, n, t) {
            var i = n._locale.weekdaysParse(e, t, n._strict);
            null != i ? (a.d = i) : (p(n).invalidWeekday = e);
          }),
          ie(['d', 'e', 'E'], function(e, a, n, t) {
            a[t] = V(e);
          });
        var eo = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          ao = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          no = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          to = Ai,
          io = Ai,
          oo = Ai;
        H('H', ['HH', 2], 0, 'hour'),
          H('h', ['hh', 2], 0, qe),
          H('k', ['kk', 2], 0, Ve),
          H('hmm', 0, 0, function() {
            return '' + qe.apply(this) + S(this.minutes(), 2);
          }),
          H('hmmss', 0, 0, function() {
            return '' + qe.apply(this) + S(this.minutes(), 2) + S(this.seconds(), 2);
          }),
          H('Hmm', 0, 0, function() {
            return '' + this.hours() + S(this.minutes(), 2);
          }),
          H('Hmmss', 0, 0, function() {
            return '' + this.hours() + S(this.minutes(), 2) + S(this.seconds(), 2);
          }),
          Be('a', !0),
          Be('A', !1),
          R('hour', 'h'),
          J('hour', 13),
          X('a', $e),
          X('A', $e),
          X('H', Li),
          X('h', Li),
          X('k', Li),
          X('HH', Li, Mi),
          X('hh', Li, Mi),
          X('kk', Li, Mi),
          X('hmm', Yi),
          X('hmmss', wi),
          X('Hmm', Yi),
          X('Hmmss', wi),
          te(['H', 'HH'], Ii),
          te(['k', 'kk'], function(e, a, n) {
            var t = V(e);
            a[Ii] = 24 === t ? 0 : t;
          }),
          te(['a', 'A'], function(e, a, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
          }),
          te(['h', 'hh'], function(e, a, n) {
            (a[Ii] = V(e)), (p(n).bigHour = !0);
          }),
          te('hmm', function(e, a, n) {
            var t = e.length - 2;
            (a[Ii] = V(e.substr(0, t))), (a[Ci] = V(e.substr(t))), (p(n).bigHour = !0);
          }),
          te('hmmss', function(e, a, n) {
            var t = e.length - 4,
              i = e.length - 2;
            (a[Ii] = V(e.substr(0, t))), (a[Ci] = V(e.substr(t, 2))), (a[Ji] = V(e.substr(i))), (p(n).bigHour = !0);
          }),
          te('Hmm', function(e, a, n) {
            var t = e.length - 2;
            (a[Ii] = V(e.substr(0, t))), (a[Ci] = V(e.substr(t)));
          }),
          te('Hmmss', function(e, a, n) {
            var t = e.length - 4,
              i = e.length - 2;
            (a[Ii] = V(e.substr(0, t))), (a[Ci] = V(e.substr(t, 2))), (a[Ji] = V(e.substr(i)));
          });
        var ro,
          so = /[ap]\.?m?\.?/i,
          uo = B('Hours', !0),
          mo = {
            calendar: mi,
            longDateFormat: hi,
            invalidDate: 'Invalid date',
            ordinal: '%d',
            dayOfMonthOrdinalParse: pi,
            relativeTime: fi,
            months: Vi,
            monthsShort: Bi,
            week: Xi,
            weekdays: eo,
            weekdaysMin: no,
            weekdaysShort: ao,
            meridiemParse: so,
          },
          lo = {},
          co = {},
          _o = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ho = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          po = /Z|[+-]\d\d(?::?\d\d)?/,
          fo = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, !1],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, !1],
            ['YYYY', /\d{4}/, !1],
          ],
          ko = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
          ],
          go = /^\/?Date\((-?\d+)/i,
          yo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Mo = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        (t.createFromInputFallback = b(
          'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
          function(e) {
            e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
          }
        )),
          (t.ISO_8601 = function() {}),
          (t.RFC_2822 = function() {});
        var jo = b('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
            var e = Ta.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e < this ? this : e) : k();
          }),
          bo = b('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
            var e = Ta.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e > this ? this : e) : k();
          }),
          vo = function() {
            return Date.now ? Date.now() : +new Date();
          },
          Lo = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
        Na('Z', ':'),
          Na('ZZ', ''),
          X('Z', Oi),
          X('ZZ', Oi),
          te(['Z', 'ZZ'], function(e, a, n) {
            (n._useUTC = !0), (n._tzm = Ra(Oi, e));
          });
        var Yo = /([\+\-]|\d\d)/gi;
        t.updateOffset = function() {};
        var wo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          Do = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        (en.fn = Aa.prototype), (en.invalid = Ea);
        var To = on(1, 'add'),
          So = on(-1, 'subtract');
        (t.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'), (t.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
        var Ho = b('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(e) {
            return void 0 === e ? this.localeData() : this.locale(e);
          }),
          xo = 1e3,
          zo = 60 * xo,
          Oo = 60 * zo,
          Eo = 3506328 * Oo;
        H('N', 0, 0, 'eraAbbr'),
          H('NN', 0, 0, 'eraAbbr'),
          H('NNN', 0, 0, 'eraAbbr'),
          H('NNNN', 0, 0, 'eraName'),
          H('NNNNN', 0, 0, 'eraNarrow'),
          H('y', ['y', 1], 'yo', 'eraYear'),
          H('y', ['yy', 2], 0, 'eraYear'),
          H('y', ['yyy', 3], 0, 'eraYear'),
          H('y', ['yyyy', 4], 0, 'eraYear'),
          X('N', it),
          X('NN', it),
          X('NNN', it),
          X('NNNN', ot),
          X('NNNNN', rt),
          te(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function(e, a, n, t) {
            var i = n._locale.erasParse(e, t, n._strict);
            i ? (p(n).era = i) : (p(n).invalidEra = e);
          }),
          X('y', Hi),
          X('yy', Hi),
          X('yyy', Hi),
          X('yyyy', Hi),
          X('yo', st),
          te(['y', 'yy', 'yyy', 'yyyy'], Fi),
          te(['yo'], function(e, a, n, t) {
            var i;
            n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
              n._locale.eraYearOrdinalParse ? (a[Fi] = n._locale.eraYearOrdinalParse(e, i)) : (a[Fi] = parseInt(e, 10));
          }),
          H(0, ['gg', 2], 0, function() {
            return this.weekYear() % 100;
          }),
          H(0, ['GG', 2], 0, function() {
            return this.isoWeekYear() % 100;
          }),
          mt('gggg', 'weekYear'),
          mt('ggggg', 'weekYear'),
          mt('GGGG', 'isoWeekYear'),
          mt('GGGGG', 'isoWeekYear'),
          R('weekYear', 'gg'),
          R('isoWeekYear', 'GG'),
          J('weekYear', 1),
          J('isoWeekYear', 1),
          X('G', xi),
          X('g', xi),
          X('GG', Li, Mi),
          X('gg', Li, Mi),
          X('GGGG', Ti, bi),
          X('gggg', Ti, bi),
          X('GGGGG', Si, vi),
          X('ggggg', Si, vi),
          ie(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(e, a, n, t) {
            a[t.substr(0, 2)] = V(e);
          }),
          ie(['gg', 'GG'], function(e, a, n, i) {
            a[i] = t.parseTwoDigitYear(e);
          }),
          H('Q', 0, 'Qo', 'quarter'),
          R('quarter', 'Q'),
          J('quarter', 7),
          X('Q', yi),
          te('Q', function(e, a) {
            a[Ni] = 3 * (V(e) - 1);
          }),
          H('D', ['DD', 2], 'Do', 'date'),
          R('date', 'D'),
          J('date', 9),
          X('D', Li),
          X('DD', Li, Mi),
          X('Do', function(e, a) {
            return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient;
          }),
          te(['D', 'DD'], Ri),
          te('Do', function(e, a) {
            a[Ri] = V(e.match(Li)[0]);
          });
        var Ao = B('Date', !0);
        H('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
          R('dayOfYear', 'DDD'),
          J('dayOfYear', 4),
          X('DDD', Di),
          X('DDDD', ji),
          te(['DDD', 'DDDD'], function(e, a, n) {
            n._dayOfYear = V(e);
          }),
          H('m', ['mm', 2], 0, 'minute'),
          R('minute', 'm'),
          J('minute', 14),
          X('m', Li),
          X('mm', Li, Mi),
          te(['m', 'mm'], Ci);
        var Po = B('Minutes', !1);
        H('s', ['ss', 2], 0, 'second'), R('second', 's'), J('second', 15), X('s', Li), X('ss', Li, Mi), te(['s', 'ss'], Ji);
        var Wo = B('Seconds', !1);
        H('S', 0, 0, function() {
          return ~~(this.millisecond() / 100);
        }),
          H(0, ['SS', 2], 0, function() {
            return ~~(this.millisecond() / 10);
          }),
          H(0, ['SSS', 3], 0, 'millisecond'),
          H(0, ['SSSS', 4], 0, function() {
            return 10 * this.millisecond();
          }),
          H(0, ['SSSSS', 5], 0, function() {
            return 100 * this.millisecond();
          }),
          H(0, ['SSSSSS', 6], 0, function() {
            return 1e3 * this.millisecond();
          }),
          H(0, ['SSSSSSS', 7], 0, function() {
            return 1e4 * this.millisecond();
          }),
          H(0, ['SSSSSSSS', 8], 0, function() {
            return 1e5 * this.millisecond();
          }),
          H(0, ['SSSSSSSSS', 9], 0, function() {
            return 1e6 * this.millisecond();
          }),
          R('millisecond', 'ms'),
          J('millisecond', 16),
          X('S', Di, yi),
          X('SS', Di, Mi),
          X('SSS', Di, ji);
        var Fo, No;
        for (Fo = 'SSSS'; Fo.length <= 9; Fo += 'S') X(Fo, Hi);
        for (Fo = 'S'; Fo.length <= 9; Fo += 'S') te(Fo, Mt);
        (No = B('Milliseconds', !1)), H('z', 0, 0, 'zoneAbbr'), H('zz', 0, 0, 'zoneName');
        var Ro = y.prototype;
        (Ro.add = To),
          (Ro.calendar = _n),
          (Ro.clone = hn),
          (Ro.diff = jn),
          (Ro.endOf = Wn),
          (Ro.format = wn),
          (Ro.from = Dn),
          (Ro.fromNow = Tn),
          (Ro.to = Sn),
          (Ro.toNow = Hn),
          (Ro.get = K),
          (Ro.invalidAt = qn),
          (Ro.isAfter = pn),
          (Ro.isBefore = fn),
          (Ro.isBetween = kn),
          (Ro.isSame = gn),
          (Ro.isSameOrAfter = yn),
          (Ro.isSameOrBefore = Mn),
          (Ro.isValid = Un),
          (Ro.lang = Ho),
          (Ro.locale = xn),
          (Ro.localeData = zn),
          (Ro.max = bo),
          (Ro.min = jo),
          (Ro.parsingFlags = Gn),
          (Ro.set = Q),
          (Ro.startOf = Pn),
          (Ro.subtract = So),
          (Ro.toArray = In),
          (Ro.toObject = Cn),
          (Ro.toDate = Rn),
          (Ro.toISOString = Ln),
          (Ro.inspect = Yn),
          'undefined' != typeof Symbol &&
            null != Symbol.for &&
            (Ro[Symbol.for('nodejs.util.inspect.custom')] = function() {
              return 'Moment<' + this.format() + '>';
            }),
          (Ro.toJSON = Jn),
          (Ro.toString = vn),
          (Ro.unix = Nn),
          (Ro.valueOf = Fn),
          (Ro.creationData = Vn),
          (Ro.eraName = Kn),
          (Ro.eraNarrow = Qn),
          (Ro.eraAbbr = Xn),
          (Ro.eraYear = et),
          (Ro.year = Qi),
          (Ro.isLeapYear = ye),
          (Ro.weekYear = dt),
          (Ro.isoWeekYear = lt),
          (Ro.quarter = Ro.quarters = gt),
          (Ro.month = _e),
          (Ro.daysInMonth = he),
          (Ro.week = Ro.weeks = Se),
          (Ro.isoWeek = Ro.isoWeeks = He),
          (Ro.weeksInYear = ht),
          (Ro.weeksInWeekYear = pt),
          (Ro.isoWeeksInYear = ct),
          (Ro.isoWeeksInISOWeekYear = _t),
          (Ro.date = Ao),
          (Ro.day = Ro.days = Ne),
          (Ro.weekday = Re),
          (Ro.isoWeekday = Ie),
          (Ro.dayOfYear = yt),
          (Ro.hour = Ro.hours = uo),
          (Ro.minute = Ro.minutes = Po),
          (Ro.second = Ro.seconds = Wo),
          (Ro.millisecond = Ro.milliseconds = No),
          (Ro.utcOffset = Ja),
          (Ro.utc = Ga),
          (Ro.local = qa),
          (Ro.parseZone = Va),
          (Ro.hasAlignedHourOffset = Ba),
          (Ro.isDST = $a),
          (Ro.isLocal = Ka),
          (Ro.isUtcOffset = Qa),
          (Ro.isUtc = Xa),
          (Ro.isUTC = Xa),
          (Ro.zoneAbbr = jt),
          (Ro.zoneName = bt),
          (Ro.dates = b('dates accessor is deprecated. Use date instead.', Ao)),
          (Ro.months = b('months accessor is deprecated. Use month instead', _e)),
          (Ro.years = b('years accessor is deprecated. Use year instead', Qi)),
          (Ro.zone = b('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', Ua)),
          (Ro.isDSTShifted = b('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', Za));
        var Io = D.prototype;
        (Io.calendar = T),
          (Io.longDateFormat = A),
          (Io.invalidDate = P),
          (Io.ordinal = W),
          (Io.preparse = Yt),
          (Io.postformat = Yt),
          (Io.relativeTime = F),
          (Io.pastFuture = N),
          (Io.set = Y),
          (Io.eras = Bn),
          (Io.erasParse = $n),
          (Io.erasConvertYear = Zn),
          (Io.erasAbbrRegex = nt),
          (Io.erasNameRegex = at),
          (Io.erasNarrowRegex = tt),
          (Io.months = ue),
          (Io.monthsShort = me),
          (Io.monthsParse = le),
          (Io.monthsRegex = fe),
          (Io.monthsShortRegex = pe),
          (Io.week = we),
          (Io.firstDayOfYear = Te),
          (Io.firstDayOfWeek = De),
          (Io.weekdays = Ee),
          (Io.weekdaysMin = Pe),
          (Io.weekdaysShort = Ae),
          (Io.weekdaysParse = Fe),
          (Io.weekdaysRegex = Ce),
          (Io.weekdaysShortRegex = Je),
          (Io.weekdaysMinRegex = Ue),
          (Io.isPM = Ze),
          (Io.meridiem = Ke),
          na('en', {
            eras: [
              {
                since: '0001-01-01',
                until: 1 / 0,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
              },
              {
                since: '0000-12-31',
                until: -1 / 0,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
              var a = e % 10;
              return e + (1 === V((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
            },
          }),
          (t.lang = b('moment.lang is deprecated. Use moment.locale instead.', na)),
          (t.langData = b('moment.langData is deprecated. Use moment.localeData instead.', oa));
        var Co = Math.abs,
          Jo = Ut('ms'),
          Uo = Ut('s'),
          Go = Ut('m'),
          qo = Ut('h'),
          Vo = Ut('d'),
          Bo = Ut('w'),
          $o = Ut('M'),
          Zo = Ut('Q'),
          Ko = Ut('y'),
          Qo = Vt('milliseconds'),
          Xo = Vt('seconds'),
          er = Vt('minutes'),
          ar = Vt('hours'),
          nr = Vt('days'),
          tr = Vt('months'),
          ir = Vt('years'),
          or = Math.round,
          rr = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 },
          sr = Math.abs,
          ur = Aa.prototype;
        //! moment.js
        return (
          (ur.isValid = Oa),
          (ur.abs = Et),
          (ur.add = Pt),
          (ur.subtract = Wt),
          (ur.as = Ct),
          (ur.asMilliseconds = Jo),
          (ur.asSeconds = Uo),
          (ur.asMinutes = Go),
          (ur.asHours = qo),
          (ur.asDays = Vo),
          (ur.asWeeks = Bo),
          (ur.asMonths = $o),
          (ur.asQuarters = Zo),
          (ur.asYears = Ko),
          (ur.valueOf = Jt),
          (ur._bubble = Nt),
          (ur.clone = Gt),
          (ur.get = qt),
          (ur.milliseconds = Qo),
          (ur.seconds = Xo),
          (ur.minutes = er),
          (ur.hours = ar),
          (ur.days = nr),
          (ur.weeks = Bt),
          (ur.months = tr),
          (ur.years = ir),
          (ur.humanize = Xt),
          (ur.toISOString = ai),
          (ur.toString = ai),
          (ur.toJSON = ai),
          (ur.locale = xn),
          (ur.localeData = zn),
          (ur.toIsoString = b('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', ai)),
          (ur.lang = Ho),
          H('X', 0, 0, 'unix'),
          H('x', 0, 0, 'valueOf'),
          X('x', xi),
          X('X', Ei),
          te('X', function(e, a, n) {
            n._d = new Date(1e3 * parseFloat(e));
          }),
          te('x', function(e, a, n) {
            n._d = new Date(V(e));
          }),
          (t.version = '2.27.0'),
          (function(e) {
            ni = e;
          })(Ta),
          (t.fn = Ro),
          (t.min = Ha),
          (t.max = xa),
          (t.now = vo),
          (t.utc = _),
          (t.unix = vt),
          (t.months = St),
          (t.isDate = d),
          (t.locale = na),
          (t.invalid = k),
          (t.duration = en),
          (t.isMoment = M),
          (t.weekdays = xt),
          (t.parseZone = Lt),
          (t.localeData = oa),
          (t.isDuration = Pa),
          (t.monthsShort = Ht),
          (t.weekdaysMin = Ot),
          (t.defineLocale = ta),
          (t.updateLocale = ia),
          (t.locales = ra),
          (t.weekdaysShort = zt),
          (t.normalizeUnits = I),
          (t.relativeTimeRounding = Kt),
          (t.relativeTimeThreshold = Qt),
          (t.calendarFormat = cn),
          (t.prototype = Ro),
          (t.HTML5_FMT = {
            DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
            DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
            DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
            DATE: 'YYYY-MM-DD',
            TIME: 'HH:mm',
            TIME_SECONDS: 'HH:mm:ss',
            TIME_MS: 'HH:mm:ss.SSS',
            WEEK: 'GGGG-[W]WW',
            MONTH: 'YYYY-MM',
          }),
          t
        );
      });
    }.call(a, n(11)(e)));
  },
  1: function(e, a) {
    function n(e, a, n) {
      return (
        a in e
          ? Object.defineProperty(e, a, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[a] = n),
        e
      );
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  2: function(e, a, n) {
    'use strict';
    n.d(a, 'm', function() {
      return t;
    }),
      n.d(a, 'A', function() {
        return i;
      }),
      n.d(a, 'C', function() {
        return o;
      }),
      n.d(a, 'B', function() {
        return r;
      }),
      n.d(a, 'n', function() {
        return s;
      }),
      n.d(a, 'o', function() {
        return u;
      }),
      n.d(a, 'p', function() {
        return m;
      }),
      n.d(a, 'q', function() {
        return d;
      }),
      n.d(a, 'r', function() {
        return l;
      }),
      n.d(a, 's', function() {
        return c;
      }),
      n.d(a, 't', function() {
        return _;
      }),
      n.d(a, 'u', function() {
        return h;
      }),
      n.d(a, 'v', function() {
        return p;
      }),
      n.d(a, 'w', function() {
        return f;
      }),
      n.d(a, 'x', function() {
        return k;
      }),
      n.d(a, 'e', function() {
        return g;
      }),
      n.d(a, 'd', function() {
        return y;
      }),
      n.d(a, 'f', function() {
        return M;
      }),
      n.d(a, 'b', function() {
        return j;
      }),
      n.d(a, 'i', function() {
        return b;
      }),
      n.d(a, 'g', function() {
        return v;
      }),
      n.d(a, 'h', function() {
        return L;
      }),
      n.d(a, 'j', function() {
        return Y;
      }),
      n.d(a, 'k', function() {
        return w;
      }),
      n.d(a, 'G', function() {
        return D;
      }),
      n.d(a, 'H', function() {
        return T;
      }),
      n.d(a, 'I', function() {
        return S;
      }),
      n.d(a, 'J', function() {
        return H;
      }),
      n.d(a, 'K', function() {
        return x;
      }),
      n.d(a, 'y', function() {
        return z;
      }),
      n.d(a, 'l', function() {
        return O;
      }),
      n.d(a, 'z', function() {
        return E;
      }),
      n.d(a, 'D', function() {
        return A;
      }),
      n.d(a, 'F', function() {
        return P;
      }),
      n.d(a, 'a', function() {
        return W;
      }),
      n.d(a, 'c', function() {
        return F;
      }),
      n.d(a, 'E', function() {
        return N;
      }),
      n.d(a, 'L', function() {
        return R;
      });
    var t = 'FINDER_SWITCH',
      i = 'FINDER_POSITION',
      o = 'FINDER_FULL_VIEW',
      r = 'FINDER_AUTO_MODE',
      s = 'FINDER_COUNT',
      u = 'FINDER_RECENTLY',
      m = 'FINDER_URL',
      d = 'FINDER_PHONE_SWITCH',
      l = 'FINDER_PHONE_COUNT',
      c = 'FINDER_PHONE_RECENTLY',
      _ = 'FINDER_PHONE_URL',
      h = 'DELIVERY_SWITCH',
      p = 'DELIVERY_LATEST_MAIL_TITLE',
      f = 'DELIVERY_LAST_MAIL_TIME',
      k = 'PROXY_SWITCH',
      g = 'ORDER_GUIDE_SWITCH',
      y = 'WHATSAPP_SWITCH',
      M = 'WHATSAPP_STATUS',
      j = 'ALIBABA_LOGIN_SWITCH',
      b = 'pskey',
      v = 'account',
      L = 'is_login',
      Y = 'is_ames',
      w = 'is_dx_v2',
      D = 'delivery_version',
      T = 'delivery_update_version',
      S = 'delivery_update_url',
      H = 'delivery_is_force',
      x = 'version',
      z = 'update_version',
      O = 'update_url',
      E = 'is_force_update',
      A = 'uuid',
      P = 'alibaba_login_cookies',
      W = 'COVER_ALIBABA_COOKIES',
      F = 'SENTRY_REPORT',
      N = { AMES_FREE: 17, SMART: 13, LITE: 15, CRM_PLUS: 9, LITE_2021: 16 },
      R = { GETTING: 'GETTING', MONITORING: 'MONITORING', FAIL: 'FAIL', STOPPED: 'STOPPED' };
  },
  3: function(e, a) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (n = window);
    }
    e.exports = n;
  },
  4: undefined,
  5: undefined,
  6: undefined,
  7: undefined,
  8: function(e, a, n) {
    'use strict';

    function t(e, a) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        a &&
          (t = t.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable;
          })),
          n.push.apply(n, t);
      }
      return n;
    }

    function i(e) {
      for (var a = 1; a < arguments.length; a++) {
        var n = null != arguments[a] ? arguments[a] : {};
        a % 2
          ? t(Object(n), !0).forEach(function(a) {
              u()(e, a, n[a]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : t(Object(n)).forEach(function(a) {
              Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
            });
      }
      return e;
    }

    n.d(a, 'f', function() {
      return _;
    }),
      n.d(a, 'g', function() {
        return h;
      }),
      n.d(a, 'e', function() {
        return p;
      }),
      n.d(a, 'a', function() {
        return f;
      }),
      n.d(a, 'd', function() {
        return k;
      }),
      n.d(a, 'c', function() {
        return g;
      }),
      // 发送 message 失败回调
      n.d(a, 'b', function() {
        return M;
      });
    var o = n(9),
      r = n.n(o),
      s = n(1),
      u = n.n(s),
      m = n(10),
      d = n.n(m),
      l = n(23),
      c = (n.n(l), n(2)),
      _ = function(e) {
        var a = document.createElement('a');
        return (a.href = e), a.host;
      },
      h = function(e) {
        var a = _(e);
        return l.parse(a).domain;
      },
      p = function(e, a) {
        var n = _(a);
        return e.some(function(e) {
          if (n === e) return !0;
          if (n.indexOf(e) > -1) {
            var a = n.indexOf(e);
            return '.' === n.charAt(a - 1);
          }
          return !1;
        });
      },
      f = function(e, a) {
        var n = a || document.body,
          t = document.createElement('script');
        t.setAttribute('type', 'text/javascript'), t.setAttribute('src', e), n.appendChild(t);
      },
      k = function(e) {
        return 'string' == typeof e
          ? e
          : e && e.stack
          ? JSON.stringify({ name: e.name, message: e.message, stack: e.stack })
          : e && e.error && e.error.stack
          ? JSON.stringify(
              i(
                {
                  error: {
                    name: e.error.name,
                    message: e.error.message,
                    stack: e.error.stack,
                  },
                },
                e
              )
            )
          : JSON.stringify(e);
      },
      g = function(e) {
        return new Promise(function(a) {
          return chrome.extension.sendRequest(
            {
              cmd: c.c,
              body: i(i({}, e), {}, { detail: k(e.detail) }),
            },
            a
          );
        });
      },
      y = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = e.onError;
        return (function() {
          var e = r()(
            d.a.mark(function e(n) {
              var t,
                i,
                o = arguments;
              return d.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (t = o.length > 1 && void 0 !== o[1] ? o[1] : null), (i = [t]), (e.prev = 2), (e.next = 5), n();
                      case 5:
                        (i[0] = e.sent), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(2)), (i[1] = e.t0), 'function' == typeof a && a(e.t0);
                      case 12:
                        return e.abrupt('return', i);
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 8]]
              );
            })
          );
          return function(a) {
            return e.apply(this, arguments);
          };
        })();
      },
      M =
        (y({
          onError: function(e) {
            return console.error('tryAsync', e);
          },
        }),
        y({
          onError: function(e) {
            console.error('tryAsync', e),
              g({
                message: e && e.message ? e.message : e,
                detail: e,
                tags: ['try-async-report'],
              });
          },
        }));
  },
  9: function(e, a) {
    function n(e, a, n, t, i, o, r) {
      try {
        var s = e[o](r),
          u = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? a(u) : Promise.resolve(u).then(t, i);
    }

    function t(e) {
      return function() {
        var a = this,
          t = arguments;
        return new Promise(function(i, o) {
          function r(e) {
            n(u, i, o, r, s, 'next', e);
          }

          function s(e) {
            n(u, i, o, r, s, 'throw', e);
          }

          var u = e.apply(a, t);
          r(void 0);
        });
      };
    }

    (e.exports = t), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  10: function(e, a, n) {
    e.exports = n(25);
  },
  11: function(e, a) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  12: undefined,
  13: undefined,
  // 转换字符串为数组
  14: function(e, a) {
    function n(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var n = 0, t = new Array(a); n < a; n++) t[n] = e[n];
      return t;
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  // 复制字符串/数组/Map/Set/String 等 iterable 类的变量为数组
  15: function(e, a, n) {
    function t(e, a) {
      return i(e) || o(e, a) || r(e, a) || s();
    }

    var i = n(174),
      o = n(176),
      r = n(16),
      s = n(177);
    (e.exports = t), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  // 复制数组/Map/Set
  16: function(e, a, n) {
    function t(e, a) {
      if (e) {
        if ('string' == typeof e) return i(e, a);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, a) : void 0
        );
      }
    }

    var i = n(14);
    (e.exports = t), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  17: function(e, a, n) {
    function t(e) {
      return i(e) || o(e) || r(e) || s();
    }

    var i = n(30),
      o = n(31),
      r = n(16),
      s = n(32);
    (e.exports = t), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  18: undefined,
  19: undefined,
  20: function(e, a, n) {
    'use strict';
    var t = n(35),
      i = n(37),
      o = n(36),
      r = n(34),
      s = n(33),
      u = { dev: t.a, prod: i.a, omg: o.a, bugfix: r.a, ames: s.a },
      m = u.prod || t.a;
    a.a = m;
  },
  21: undefined,
  22: function(e, a) {
    e.exports = [
      'ac',
      'com.ac',
      'edu.ac',
      'gov.ac',
      'net.ac',
      'mil.ac',
      'org.ac',
      'ad',
      'nom.ad',
      'ae',
      'co.ae',
      'net.ae',
      'org.ae',
      'sch.ae',
      'ac.ae',
      'gov.ae',
      'mil.ae',
      'aero',
      'accident-investigation.aero',
      'accident-prevention.aero',
      'aerobatic.aero',
      'aeroclub.aero',
      'aerodrome.aero',
      'agents.aero',
      'aircraft.aero',
      'airline.aero',
      'airport.aero',
      'air-surveillance.aero',
      'airtraffic.aero',
      'air-traffic-control.aero',
      'ambulance.aero',
      'amusement.aero',
      'association.aero',
      'author.aero',
      'ballooning.aero',
      'broker.aero',
      'caa.aero',
      'cargo.aero',
      'catering.aero',
      'certification.aero',
      'championship.aero',
      'charter.aero',
      'civilaviation.aero',
      'club.aero',
      'conference.aero',
      'consultant.aero',
      'consulting.aero',
      'control.aero',
      'council.aero',
      'crew.aero',
      'design.aero',
      'dgca.aero',
      'educator.aero',
      'emergency.aero',
      'engine.aero',
      'engineer.aero',
      'entertainment.aero',
      'equipment.aero',
      'exchange.aero',
      'express.aero',
      'federation.aero',
      'flight.aero',
      'freight.aero',
      'fuel.aero',
      'gliding.aero',
      'government.aero',
      'groundhandling.aero',
      'group.aero',
      'hanggliding.aero',
      'homebuilt.aero',
      'insurance.aero',
      'journal.aero',
      'journalist.aero',
      'leasing.aero',
      'logistics.aero',
      'magazine.aero',
      'maintenance.aero',
      'media.aero',
      'microlight.aero',
      'modelling.aero',
      'navigation.aero',
      'parachuting.aero',
      'paragliding.aero',
      'passenger-association.aero',
      'pilot.aero',
      'press.aero',
      'production.aero',
      'recreation.aero',
      'repbody.aero',
      'res.aero',
      'research.aero',
      'rotorcraft.aero',
      'safety.aero',
      'scientist.aero',
      'services.aero',
      'show.aero',
      'skydiving.aero',
      'software.aero',
      'student.aero',
      'trader.aero',
      'trading.aero',
      'trainer.aero',
      'union.aero',
      'workinggroup.aero',
      'works.aero',
      'af',
      'gov.af',
      'com.af',
      'org.af',
      'net.af',
      'edu.af',
      'ag',
      'com.ag',
      'org.ag',
      'net.ag',
      'co.ag',
      'nom.ag',
      'ai',
      'off.ai',
      'com.ai',
      'net.ai',
      'org.ai',
      'al',
      'com.al',
      'edu.al',
      'gov.al',
      'mil.al',
      'net.al',
      'org.al',
      'am',
      'co.am',
      'com.am',
      'commune.am',
      'net.am',
      'org.am',
      'ao',
      'ed.ao',
      'gv.ao',
      'og.ao',
      'co.ao',
      'pb.ao',
      'it.ao',
      'aq',
      'ar',
      'com.ar',
      'edu.ar',
      'gob.ar',
      'gov.ar',
      'int.ar',
      'mil.ar',
      'musica.ar',
      'net.ar',
      'org.ar',
      'tur.ar',
      'arpa',
      'e164.arpa',
      'in-addr.arpa',
      'ip6.arpa',
      'iris.arpa',
      'uri.arpa',
      'urn.arpa',
      'as',
      'gov.as',
      'asia',
      'at',
      'ac.at',
      'co.at',
      'gv.at',
      'or.at',
      'au',
      'com.au',
      'net.au',
      'org.au',
      'edu.au',
      'gov.au',
      'asn.au',
      'id.au',
      'info.au',
      'conf.au',
      'oz.au',
      'act.au',
      'nsw.au',
      'nt.au',
      'qld.au',
      'sa.au',
      'tas.au',
      'vic.au',
      'wa.au',
      'act.edu.au',
      'catholic.edu.au',
      'nsw.edu.au',
      'nt.edu.au',
      'qld.edu.au',
      'sa.edu.au',
      'tas.edu.au',
      'vic.edu.au',
      'wa.edu.au',
      'qld.gov.au',
      'sa.gov.au',
      'tas.gov.au',
      'vic.gov.au',
      'wa.gov.au',
      'education.tas.edu.au',
      'schools.nsw.edu.au',
      'aw',
      'com.aw',
      'ax',
      'az',
      'com.az',
      'net.az',
      'int.az',
      'gov.az',
      'org.az',
      'edu.az',
      'info.az',
      'pp.az',
      'mil.az',
      'name.az',
      'pro.az',
      'biz.az',
      'ba',
      'com.ba',
      'edu.ba',
      'gov.ba',
      'mil.ba',
      'net.ba',
      'org.ba',
      'bb',
      'biz.bb',
      'co.bb',
      'com.bb',
      'edu.bb',
      'gov.bb',
      'info.bb',
      'net.bb',
      'org.bb',
      'store.bb',
      'tv.bb',
      '*.bd',
      'be',
      'ac.be',
      'bf',
      'gov.bf',
      'bg',
      'a.bg',
      'b.bg',
      'c.bg',
      'd.bg',
      'e.bg',
      'f.bg',
      'g.bg',
      'h.bg',
      'i.bg',
      'j.bg',
      'k.bg',
      'l.bg',
      'm.bg',
      'n.bg',
      'o.bg',
      'p.bg',
      'q.bg',
      'r.bg',
      's.bg',
      't.bg',
      'u.bg',
      'v.bg',
      'w.bg',
      'x.bg',
      'y.bg',
      'z.bg',
      '0.bg',
      '1.bg',
      '2.bg',
      '3.bg',
      '4.bg',
      '5.bg',
      '6.bg',
      '7.bg',
      '8.bg',
      '9.bg',
      'bh',
      'com.bh',
      'edu.bh',
      'net.bh',
      'org.bh',
      'gov.bh',
      'bi',
      'co.bi',
      'com.bi',
      'edu.bi',
      'or.bi',
      'org.bi',
      'biz',
      'bj',
      'asso.bj',
      'barreau.bj',
      'gouv.bj',
      'bm',
      'com.bm',
      'edu.bm',
      'gov.bm',
      'net.bm',
      'org.bm',
      'bn',
      'com.bn',
      'edu.bn',
      'gov.bn',
      'net.bn',
      'org.bn',
      'bo',
      'com.bo',
      'edu.bo',
      'gob.bo',
      'int.bo',
      'org.bo',
      'net.bo',
      'mil.bo',
      'tv.bo',
      'web.bo',
      'academia.bo',
      'agro.bo',
      'arte.bo',
      'blog.bo',
      'bolivia.bo',
      'ciencia.bo',
      'cooperativa.bo',
      'democracia.bo',
      'deporte.bo',
      'ecologia.bo',
      'economia.bo',
      'empresa.bo',
      'indigena.bo',
      'industria.bo',
      'info.bo',
      'medicina.bo',
      'movimiento.bo',
      'musica.bo',
      'natural.bo',
      'nombre.bo',
      'noticias.bo',
      'patria.bo',
      'politica.bo',
      'profesional.bo',
      'plurinacional.bo',
      'pueblo.bo',
      'revista.bo',
      'salud.bo',
      'tecnologia.bo',
      'tksat.bo',
      'transporte.bo',
      'wiki.bo',
      'br',
      '9guacu.br',
      'abc.br',
      'adm.br',
      'adv.br',
      'agr.br',
      'aju.br',
      'am.br',
      'anani.br',
      'aparecida.br',
      'arq.br',
      'art.br',
      'ato.br',
      'b.br',
      'barueri.br',
      'belem.br',
      'bhz.br',
      'bio.br',
      'blog.br',
      'bmd.br',
      'boavista.br',
      'bsb.br',
      'campinagrande.br',
      'campinas.br',
      'caxias.br',
      'cim.br',
      'cng.br',
      'cnt.br',
      'com.br',
      'contagem.br',
      'coop.br',
      'cri.br',
      'cuiaba.br',
      'curitiba.br',
      'def.br',
      'ecn.br',
      'eco.br',
      'edu.br',
      'emp.br',
      'eng.br',
      'esp.br',
      'etc.br',
      'eti.br',
      'far.br',
      'feira.br',
      'flog.br',
      'floripa.br',
      'fm.br',
      'fnd.br',
      'fortal.br',
      'fot.br',
      'foz.br',
      'fst.br',
      'g12.br',
      'ggf.br',
      'goiania.br',
      'gov.br',
      'ac.gov.br',
      'al.gov.br',
      'am.gov.br',
      'ap.gov.br',
      'ba.gov.br',
      'ce.gov.br',
      'df.gov.br',
      'es.gov.br',
      'go.gov.br',
      'ma.gov.br',
      'mg.gov.br',
      'ms.gov.br',
      'mt.gov.br',
      'pa.gov.br',
      'pb.gov.br',
      'pe.gov.br',
      'pi.gov.br',
      'pr.gov.br',
      'rj.gov.br',
      'rn.gov.br',
      'ro.gov.br',
      'rr.gov.br',
      'rs.gov.br',
      'sc.gov.br',
      'se.gov.br',
      'sp.gov.br',
      'to.gov.br',
      'gru.br',
      'imb.br',
      'ind.br',
      'inf.br',
      'jab.br',
      'jampa.br',
      'jdf.br',
      'joinville.br',
      'jor.br',
      'jus.br',
      'leg.br',
      'lel.br',
      'londrina.br',
      'macapa.br',
      'maceio.br',
      'manaus.br',
      'maringa.br',
      'mat.br',
      'med.br',
      'mil.br',
      'morena.br',
      'mp.br',
      'mus.br',
      'natal.br',
      'net.br',
      'niteroi.br',
      '*.nom.br',
      'not.br',
      'ntr.br',
      'odo.br',
      'ong.br',
      'org.br',
      'osasco.br',
      'palmas.br',
      'poa.br',
      'ppg.br',
      'pro.br',
      'psc.br',
      'psi.br',
      'pvh.br',
      'qsl.br',
      'radio.br',
      'rec.br',
      'recife.br',
      'ribeirao.br',
      'rio.br',
      'riobranco.br',
      'riopreto.br',
      'salvador.br',
      'sampa.br',
      'santamaria.br',
      'santoandre.br',
      'saobernardo.br',
      'saogonca.br',
      'sjc.br',
      'slg.br',
      'slz.br',
      'sorocaba.br',
      'srv.br',
      'taxi.br',
      'tc.br',
      'teo.br',
      'the.br',
      'tmp.br',
      'trd.br',
      'tur.br',
      'tv.br',
      'udi.br',
      'vet.br',
      'vix.br',
      'vlog.br',
      'wiki.br',
      'zlg.br',
      'bs',
      'com.bs',
      'net.bs',
      'org.bs',
      'edu.bs',
      'gov.bs',
      'bt',
      'com.bt',
      'edu.bt',
      'gov.bt',
      'net.bt',
      'org.bt',
      'bv',
      'bw',
      'co.bw',
      'org.bw',
      'by',
      'gov.by',
      'mil.by',
      'com.by',
      'of.by',
      'bz',
      'com.bz',
      'net.bz',
      'org.bz',
      'edu.bz',
      'gov.bz',
      'ca',
      'ab.ca',
      'bc.ca',
      'mb.ca',
      'nb.ca',
      'nf.ca',
      'nl.ca',
      'ns.ca',
      'nt.ca',
      'nu.ca',
      'on.ca',
      'pe.ca',
      'qc.ca',
      'sk.ca',
      'yk.ca',
      'gc.ca',
      'cat',
      'cc',
      'cd',
      'gov.cd',
      'cf',
      'cg',
      'ch',
      'ci',
      'org.ci',
      'or.ci',
      'com.ci',
      'co.ci',
      'edu.ci',
      'ed.ci',
      'ac.ci',
      'net.ci',
      'go.ci',
      'asso.ci',
      'aéroport.ci',
      'int.ci',
      'presse.ci',
      'md.ci',
      'gouv.ci',
      '*.ck',
      '!www.ck',
      'cl',
      'aprendemas.cl',
      'co.cl',
      'gob.cl',
      'gov.cl',
      'mil.cl',
      'cm',
      'co.cm',
      'com.cm',
      'gov.cm',
      'net.cm',
      'cn',
      'ac.cn',
      'com.cn',
      'edu.cn',
      'gov.cn',
      'net.cn',
      'org.cn',
      'mil.cn',
      '公司.cn',
      '网络.cn',
      '網絡.cn',
      'ah.cn',
      'bj.cn',
      'cq.cn',
      'fj.cn',
      'gd.cn',
      'gs.cn',
      'gz.cn',
      'gx.cn',
      'ha.cn',
      'hb.cn',
      'he.cn',
      'hi.cn',
      'hl.cn',
      'hn.cn',
      'jl.cn',
      'js.cn',
      'jx.cn',
      'ln.cn',
      'nm.cn',
      'nx.cn',
      'qh.cn',
      'sc.cn',
      'sd.cn',
      'sh.cn',
      'sn.cn',
      'sx.cn',
      'tj.cn',
      'xj.cn',
      'xz.cn',
      'yn.cn',
      'zj.cn',
      'hk.cn',
      'mo.cn',
      'tw.cn',
      'co',
      'arts.co',
      'com.co',
      'edu.co',
      'firm.co',
      'gov.co',
      'info.co',
      'int.co',
      'mil.co',
      'net.co',
      'nom.co',
      'org.co',
      'rec.co',
      'web.co',
      'com',
      'coop',
      'cr',
      'ac.cr',
      'co.cr',
      'ed.cr',
      'fi.cr',
      'go.cr',
      'or.cr',
      'sa.cr',
      'cu',
      'com.cu',
      'edu.cu',
      'org.cu',
      'net.cu',
      'gov.cu',
      'inf.cu',
      'cv',
      'cw',
      'com.cw',
      'edu.cw',
      'net.cw',
      'org.cw',
      'cx',
      'gov.cx',
      'cy',
      'ac.cy',
      'biz.cy',
      'com.cy',
      'ekloges.cy',
      'gov.cy',
      'ltd.cy',
      'name.cy',
      'net.cy',
      'org.cy',
      'parliament.cy',
      'press.cy',
      'pro.cy',
      'tm.cy',
      'cz',
      'de',
      'dj',
      'dk',
      'dm',
      'com.dm',
      'net.dm',
      'org.dm',
      'edu.dm',
      'gov.dm',
      'do',
      'art.do',
      'com.do',
      'edu.do',
      'gob.do',
      'gov.do',
      'mil.do',
      'net.do',
      'org.do',
      'sld.do',
      'web.do',
      'dz',
      'com.dz',
      'org.dz',
      'net.dz',
      'gov.dz',
      'edu.dz',
      'asso.dz',
      'pol.dz',
      'art.dz',
      'ec',
      'com.ec',
      'info.ec',
      'net.ec',
      'fin.ec',
      'k12.ec',
      'med.ec',
      'pro.ec',
      'org.ec',
      'edu.ec',
      'gov.ec',
      'gob.ec',
      'mil.ec',
      'edu',
      'ee',
      'edu.ee',
      'gov.ee',
      'riik.ee',
      'lib.ee',
      'med.ee',
      'com.ee',
      'pri.ee',
      'aip.ee',
      'org.ee',
      'fie.ee',
      'eg',
      'com.eg',
      'edu.eg',
      'eun.eg',
      'gov.eg',
      'mil.eg',
      'name.eg',
      'net.eg',
      'org.eg',
      'sci.eg',
      '*.er',
      'es',
      'com.es',
      'nom.es',
      'org.es',
      'gob.es',
      'edu.es',
      'et',
      'com.et',
      'gov.et',
      'org.et',
      'edu.et',
      'biz.et',
      'name.et',
      'info.et',
      'net.et',
      'eu',
      'fi',
      'aland.fi',
      'fj',
      'ac.fj',
      'biz.fj',
      'com.fj',
      'gov.fj',
      'info.fj',
      'mil.fj',
      'name.fj',
      'net.fj',
      'org.fj',
      'pro.fj',
      '*.fk',
      'fm',
      'fo',
      'fr',
      'asso.fr',
      'com.fr',
      'gouv.fr',
      'nom.fr',
      'prd.fr',
      'tm.fr',
      'aeroport.fr',
      'avocat.fr',
      'avoues.fr',
      'cci.fr',
      'chambagri.fr',
      'chirurgiens-dentistes.fr',
      'experts-comptables.fr',
      'geometre-expert.fr',
      'greta.fr',
      'huissier-justice.fr',
      'medecin.fr',
      'notaires.fr',
      'pharmacien.fr',
      'port.fr',
      'veterinaire.fr',
      'ga',
      'gb',
      'gd',
      'ge',
      'com.ge',
      'edu.ge',
      'gov.ge',
      'org.ge',
      'mil.ge',
      'net.ge',
      'pvt.ge',
      'gf',
      'gg',
      'co.gg',
      'net.gg',
      'org.gg',
      'gh',
      'com.gh',
      'edu.gh',
      'gov.gh',
      'org.gh',
      'mil.gh',
      'gi',
      'com.gi',
      'ltd.gi',
      'gov.gi',
      'mod.gi',
      'edu.gi',
      'org.gi',
      'gl',
      'co.gl',
      'com.gl',
      'edu.gl',
      'net.gl',
      'org.gl',
      'gm',
      'gn',
      'ac.gn',
      'com.gn',
      'edu.gn',
      'gov.gn',
      'org.gn',
      'net.gn',
      'gov',
      'gp',
      'com.gp',
      'net.gp',
      'mobi.gp',
      'edu.gp',
      'org.gp',
      'asso.gp',
      'gq',
      'gr',
      'com.gr',
      'edu.gr',
      'net.gr',
      'org.gr',
      'gov.gr',
      'gs',
      'gt',
      'com.gt',
      'edu.gt',
      'gob.gt',
      'ind.gt',
      'mil.gt',
      'net.gt',
      'org.gt',
      'gu',
      'com.gu',
      'edu.gu',
      'gov.gu',
      'guam.gu',
      'info.gu',
      'net.gu',
      'org.gu',
      'web.gu',
      'gw',
      'gy',
      'co.gy',
      'com.gy',
      'edu.gy',
      'gov.gy',
      'net.gy',
      'org.gy',
      'hk',
      'com.hk',
      'edu.hk',
      'gov.hk',
      'idv.hk',
      'net.hk',
      'org.hk',
      '公司.hk',
      '教育.hk',
      '敎育.hk',
      '政府.hk',
      '個人.hk',
      '个人.hk',
      '箇人.hk',
      '網络.hk',
      '网络.hk',
      '组織.hk',
      '網絡.hk',
      '网絡.hk',
      '组织.hk',
      '組織.hk',
      '組织.hk',
      'hm',
      'hn',
      'com.hn',
      'edu.hn',
      'org.hn',
      'net.hn',
      'mil.hn',
      'gob.hn',
      'hr',
      'iz.hr',
      'from.hr',
      'name.hr',
      'com.hr',
      'ht',
      'com.ht',
      'shop.ht',
      'firm.ht',
      'info.ht',
      'adult.ht',
      'net.ht',
      'pro.ht',
      'org.ht',
      'med.ht',
      'art.ht',
      'coop.ht',
      'pol.ht',
      'asso.ht',
      'edu.ht',
      'rel.ht',
      'gouv.ht',
      'perso.ht',
      'hu',
      'co.hu',
      'info.hu',
      'org.hu',
      'priv.hu',
      'sport.hu',
      'tm.hu',
      '2000.hu',
      'agrar.hu',
      'bolt.hu',
      'casino.hu',
      'city.hu',
      'erotica.hu',
      'erotika.hu',
      'film.hu',
      'forum.hu',
      'games.hu',
      'hotel.hu',
      'ingatlan.hu',
      'jogasz.hu',
      'konyvelo.hu',
      'lakas.hu',
      'media.hu',
      'news.hu',
      'reklam.hu',
      'sex.hu',
      'shop.hu',
      'suli.hu',
      'szex.hu',
      'tozsde.hu',
      'utazas.hu',
      'video.hu',
      'id',
      'ac.id',
      'biz.id',
      'co.id',
      'desa.id',
      'go.id',
      'mil.id',
      'my.id',
      'net.id',
      'or.id',
      'ponpes.id',
      'sch.id',
      'web.id',
      'ie',
      'gov.ie',
      'il',
      'ac.il',
      'co.il',
      'gov.il',
      'idf.il',
      'k12.il',
      'muni.il',
      'net.il',
      'org.il',
      'im',
      'ac.im',
      'co.im',
      'com.im',
      'ltd.co.im',
      'net.im',
      'org.im',
      'plc.co.im',
      'tt.im',
      'tv.im',
      'in',
      'co.in',
      'firm.in',
      'net.in',
      'org.in',
      'gen.in',
      'ind.in',
      'nic.in',
      'ac.in',
      'edu.in',
      'res.in',
      'gov.in',
      'mil.in',
      'info',
      'int',
      'eu.int',
      'io',
      'com.io',
      'iq',
      'gov.iq',
      'edu.iq',
      'mil.iq',
      'com.iq',
      'org.iq',
      'net.iq',
      'ir',
      'ac.ir',
      'co.ir',
      'gov.ir',
      'id.ir',
      'net.ir',
      'org.ir',
      'sch.ir',
      'ایران.ir',
      'ايران.ir',
      'is',
      'net.is',
      'com.is',
      'edu.is',
      'gov.is',
      'org.is',
      'int.is',
      'it',
      'gov.it',
      'edu.it',
      'abr.it',
      'abruzzo.it',
      'aosta-valley.it',
      'aostavalley.it',
      'bas.it',
      'basilicata.it',
      'cal.it',
      'calabria.it',
      'cam.it',
      'campania.it',
      'emilia-romagna.it',
      'emiliaromagna.it',
      'emr.it',
      'friuli-v-giulia.it',
      'friuli-ve-giulia.it',
      'friuli-vegiulia.it',
      'friuli-venezia-giulia.it',
      'friuli-veneziagiulia.it',
      'friuli-vgiulia.it',
      'friuliv-giulia.it',
      'friulive-giulia.it',
      'friulivegiulia.it',
      'friulivenezia-giulia.it',
      'friuliveneziagiulia.it',
      'friulivgiulia.it',
      'fvg.it',
      'laz.it',
      'lazio.it',
      'lig.it',
      'liguria.it',
      'lom.it',
      'lombardia.it',
      'lombardy.it',
      'lucania.it',
      'mar.it',
      'marche.it',
      'mol.it',
      'molise.it',
      'piedmont.it',
      'piemonte.it',
      'pmn.it',
      'pug.it',
      'puglia.it',
      'sar.it',
      'sardegna.it',
      'sardinia.it',
      'sic.it',
      'sicilia.it',
      'sicily.it',
      'taa.it',
      'tos.it',
      'toscana.it',
      'trentin-sud-tirol.it',
      'trentin-süd-tirol.it',
      'trentin-sudtirol.it',
      'trentin-südtirol.it',
      'trentin-sued-tirol.it',
      'trentin-suedtirol.it',
      'trentino-a-adige.it',
      'trentino-aadige.it',
      'trentino-alto-adige.it',
      'trentino-altoadige.it',
      'trentino-s-tirol.it',
      'trentino-stirol.it',
      'trentino-sud-tirol.it',
      'trentino-süd-tirol.it',
      'trentino-sudtirol.it',
      'trentino-südtirol.it',
      'trentino-sued-tirol.it',
      'trentino-suedtirol.it',
      'trentino.it',
      'trentinoa-adige.it',
      'trentinoaadige.it',
      'trentinoalto-adige.it',
      'trentinoaltoadige.it',
      'trentinos-tirol.it',
      'trentinostirol.it',
      'trentinosud-tirol.it',
      'trentinosüd-tirol.it',
      'trentinosudtirol.it',
      'trentinosüdtirol.it',
      'trentinosued-tirol.it',
      'trentinosuedtirol.it',
      'trentinsud-tirol.it',
      'trentinsüd-tirol.it',
      'trentinsudtirol.it',
      'trentinsüdtirol.it',
      'trentinsued-tirol.it',
      'trentinsuedtirol.it',
      'tuscany.it',
      'umb.it',
      'umbria.it',
      'val-d-aosta.it',
      'val-daosta.it',
      'vald-aosta.it',
      'valdaosta.it',
      'valle-aosta.it',
      'valle-d-aosta.it',
      'valle-daosta.it',
      'valleaosta.it',
      'valled-aosta.it',
      'valledaosta.it',
      'vallee-aoste.it',
      'vallée-aoste.it',
      'vallee-d-aoste.it',
      'vallée-d-aoste.it',
      'valleeaoste.it',
      'valléeaoste.it',
      'valleedaoste.it',
      'valléedaoste.it',
      'vao.it',
      'vda.it',
      'ven.it',
      'veneto.it',
      'ag.it',
      'agrigento.it',
      'al.it',
      'alessandria.it',
      'alto-adige.it',
      'altoadige.it',
      'an.it',
      'ancona.it',
      'andria-barletta-trani.it',
      'andria-trani-barletta.it',
      'andriabarlettatrani.it',
      'andriatranibarletta.it',
      'ao.it',
      'aosta.it',
      'aoste.it',
      'ap.it',
      'aq.it',
      'aquila.it',
      'ar.it',
      'arezzo.it',
      'ascoli-piceno.it',
      'ascolipiceno.it',
      'asti.it',
      'at.it',
      'av.it',
      'avellino.it',
      'ba.it',
      'balsan-sudtirol.it',
      'balsan-südtirol.it',
      'balsan-suedtirol.it',
      'balsan.it',
      'bari.it',
      'barletta-trani-andria.it',
      'barlettatraniandria.it',
      'belluno.it',
      'benevento.it',
      'bergamo.it',
      'bg.it',
      'bi.it',
      'biella.it',
      'bl.it',
      'bn.it',
      'bo.it',
      'bologna.it',
      'bolzano-altoadige.it',
      'bolzano.it',
      'bozen-sudtirol.it',
      'bozen-südtirol.it',
      'bozen-suedtirol.it',
      'bozen.it',
      'br.it',
      'brescia.it',
      'brindisi.it',
      'bs.it',
      'bt.it',
      'bulsan-sudtirol.it',
      'bulsan-südtirol.it',
      'bulsan-suedtirol.it',
      'bulsan.it',
      'bz.it',
      'ca.it',
      'cagliari.it',
      'caltanissetta.it',
      'campidano-medio.it',
      'campidanomedio.it',
      'campobasso.it',
      'carbonia-iglesias.it',
      'carboniaiglesias.it',
      'carrara-massa.it',
      'carraramassa.it',
      'caserta.it',
      'catania.it',
      'catanzaro.it',
      'cb.it',
      'ce.it',
      'cesena-forli.it',
      'cesena-forlì.it',
      'cesenaforli.it',
      'cesenaforlì.it',
      'ch.it',
      'chieti.it',
      'ci.it',
      'cl.it',
      'cn.it',
      'co.it',
      'como.it',
      'cosenza.it',
      'cr.it',
      'cremona.it',
      'crotone.it',
      'cs.it',
      'ct.it',
      'cuneo.it',
      'cz.it',
      'dell-ogliastra.it',
      'dellogliastra.it',
      'en.it',
      'enna.it',
      'fc.it',
      'fe.it',
      'fermo.it',
      'ferrara.it',
      'fg.it',
      'fi.it',
      'firenze.it',
      'florence.it',
      'fm.it',
      'foggia.it',
      'forli-cesena.it',
      'forlì-cesena.it',
      'forlicesena.it',
      'forlìcesena.it',
      'fr.it',
      'frosinone.it',
      'ge.it',
      'genoa.it',
      'genova.it',
      'go.it',
      'gorizia.it',
      'gr.it',
      'grosseto.it',
      'iglesias-carbonia.it',
      'iglesiascarbonia.it',
      'im.it',
      'imperia.it',
      'is.it',
      'isernia.it',
      'kr.it',
      'la-spezia.it',
      'laquila.it',
      'laspezia.it',
      'latina.it',
      'lc.it',
      'le.it',
      'lecce.it',
      'lecco.it',
      'li.it',
      'livorno.it',
      'lo.it',
      'lodi.it',
      'lt.it',
      'lu.it',
      'lucca.it',
      'macerata.it',
      'mantova.it',
      'massa-carrara.it',
      'massacarrara.it',
      'matera.it',
      'mb.it',
      'mc.it',
      'me.it',
      'medio-campidano.it',
      'mediocampidano.it',
      'messina.it',
      'mi.it',
      'milan.it',
      'milano.it',
      'mn.it',
      'mo.it',
      'modena.it',
      'monza-brianza.it',
      'monza-e-della-brianza.it',
      'monza.it',
      'monzabrianza.it',
      'monzaebrianza.it',
      'monzaedellabrianza.it',
      'ms.it',
      'mt.it',
      'na.it',
      'naples.it',
      'napoli.it',
      'no.it',
      'novara.it',
      'nu.it',
      'nuoro.it',
      'og.it',
      'ogliastra.it',
      'olbia-tempio.it',
      'olbiatempio.it',
      'or.it',
      'oristano.it',
      'ot.it',
      'pa.it',
      'padova.it',
      'padua.it',
      'palermo.it',
      'parma.it',
      'pavia.it',
      'pc.it',
      'pd.it',
      'pe.it',
      'perugia.it',
      'pesaro-urbino.it',
      'pesarourbino.it',
      'pescara.it',
      'pg.it',
      'pi.it',
      'piacenza.it',
      'pisa.it',
      'pistoia.it',
      'pn.it',
      'po.it',
      'pordenone.it',
      'potenza.it',
      'pr.it',
      'prato.it',
      'pt.it',
      'pu.it',
      'pv.it',
      'pz.it',
      'ra.it',
      'ragusa.it',
      'ravenna.it',
      'rc.it',
      're.it',
      'reggio-calabria.it',
      'reggio-emilia.it',
      'reggiocalabria.it',
      'reggioemilia.it',
      'rg.it',
      'ri.it',
      'rieti.it',
      'rimini.it',
      'rm.it',
      'rn.it',
      'ro.it',
      'roma.it',
      'rome.it',
      'rovigo.it',
      'sa.it',
      'salerno.it',
      'sassari.it',
      'savona.it',
      'si.it',
      'siena.it',
      'siracusa.it',
      'so.it',
      'sondrio.it',
      'sp.it',
      'sr.it',
      'ss.it',
      'suedtirol.it',
      'südtirol.it',
      'sv.it',
      'ta.it',
      'taranto.it',
      'te.it',
      'tempio-olbia.it',
      'tempioolbia.it',
      'teramo.it',
      'terni.it',
      'tn.it',
      'to.it',
      'torino.it',
      'tp.it',
      'tr.it',
      'trani-andria-barletta.it',
      'trani-barletta-andria.it',
      'traniandriabarletta.it',
      'tranibarlettaandria.it',
      'trapani.it',
      'trento.it',
      'treviso.it',
      'trieste.it',
      'ts.it',
      'turin.it',
      'tv.it',
      'ud.it',
      'udine.it',
      'urbino-pesaro.it',
      'urbinopesaro.it',
      'va.it',
      'varese.it',
      'vb.it',
      'vc.it',
      've.it',
      'venezia.it',
      'venice.it',
      'verbania.it',
      'vercelli.it',
      'verona.it',
      'vi.it',
      'vibo-valentia.it',
      'vibovalentia.it',
      'vicenza.it',
      'viterbo.it',
      'vr.it',
      'vs.it',
      'vt.it',
      'vv.it',
      'je',
      'co.je',
      'net.je',
      'org.je',
      '*.jm',
      'jo',
      'com.jo',
      'org.jo',
      'net.jo',
      'edu.jo',
      'sch.jo',
      'gov.jo',
      'mil.jo',
      'name.jo',
      'jobs',
      'jp',
      'ac.jp',
      'ad.jp',
      'co.jp',
      'ed.jp',
      'go.jp',
      'gr.jp',
      'lg.jp',
      'ne.jp',
      'or.jp',
      'aichi.jp',
      'akita.jp',
      'aomori.jp',
      'chiba.jp',
      'ehime.jp',
      'fukui.jp',
      'fukuoka.jp',
      'fukushima.jp',
      'gifu.jp',
      'gunma.jp',
      'hiroshima.jp',
      'hokkaido.jp',
      'hyogo.jp',
      'ibaraki.jp',
      'ishikawa.jp',
      'iwate.jp',
      'kagawa.jp',
      'kagoshima.jp',
      'kanagawa.jp',
      'kochi.jp',
      'kumamoto.jp',
      'kyoto.jp',
      'mie.jp',
      'miyagi.jp',
      'miyazaki.jp',
      'nagano.jp',
      'nagasaki.jp',
      'nara.jp',
      'niigata.jp',
      'oita.jp',
      'okayama.jp',
      'okinawa.jp',
      'osaka.jp',
      'saga.jp',
      'saitama.jp',
      'shiga.jp',
      'shimane.jp',
      'shizuoka.jp',
      'tochigi.jp',
      'tokushima.jp',
      'tokyo.jp',
      'tottori.jp',
      'toyama.jp',
      'wakayama.jp',
      'yamagata.jp',
      'yamaguchi.jp',
      'yamanashi.jp',
      '栃木.jp',
      '愛知.jp',
      '愛媛.jp',
      '兵庫.jp',
      '熊本.jp',
      '茨城.jp',
      '北海道.jp',
      '千葉.jp',
      '和歌山.jp',
      '長崎.jp',
      '長野.jp',
      '新潟.jp',
      '青森.jp',
      '静岡.jp',
      '東京.jp',
      '石川.jp',
      '埼玉.jp',
      '三重.jp',
      '京都.jp',
      '佐賀.jp',
      '大分.jp',
      '大阪.jp',
      '奈良.jp',
      '宮城.jp',
      '宮崎.jp',
      '富山.jp',
      '山口.jp',
      '山形.jp',
      '山梨.jp',
      '岩手.jp',
      '岐阜.jp',
      '岡山.jp',
      '島根.jp',
      '広島.jp',
      '徳島.jp',
      '沖縄.jp',
      '滋賀.jp',
      '神奈川.jp',
      '福井.jp',
      '福岡.jp',
      '福島.jp',
      '秋田.jp',
      '群馬.jp',
      '香川.jp',
      '高知.jp',
      '鳥取.jp',
      '鹿児島.jp',
      '*.kawasaki.jp',
      '*.kitakyushu.jp',
      '*.kobe.jp',
      '*.nagoya.jp',
      '*.sapporo.jp',
      '*.sendai.jp',
      '*.yokohama.jp',
      '!city.kawasaki.jp',
      '!city.kitakyushu.jp',
      '!city.kobe.jp',
      '!city.nagoya.jp',
      '!city.sapporo.jp',
      '!city.sendai.jp',
      '!city.yokohama.jp',
      'aisai.aichi.jp',
      'ama.aichi.jp',
      'anjo.aichi.jp',
      'asuke.aichi.jp',
      'chiryu.aichi.jp',
      'chita.aichi.jp',
      'fuso.aichi.jp',
      'gamagori.aichi.jp',
      'handa.aichi.jp',
      'hazu.aichi.jp',
      'hekinan.aichi.jp',
      'higashiura.aichi.jp',
      'ichinomiya.aichi.jp',
      'inazawa.aichi.jp',
      'inuyama.aichi.jp',
      'isshiki.aichi.jp',
      'iwakura.aichi.jp',
      'kanie.aichi.jp',
      'kariya.aichi.jp',
      'kasugai.aichi.jp',
      'kira.aichi.jp',
      'kiyosu.aichi.jp',
      'komaki.aichi.jp',
      'konan.aichi.jp',
      'kota.aichi.jp',
      'mihama.aichi.jp',
      'miyoshi.aichi.jp',
      'nishio.aichi.jp',
      'nisshin.aichi.jp',
      'obu.aichi.jp',
      'oguchi.aichi.jp',
      'oharu.aichi.jp',
      'okazaki.aichi.jp',
      'owariasahi.aichi.jp',
      'seto.aichi.jp',
      'shikatsu.aichi.jp',
      'shinshiro.aichi.jp',
      'shitara.aichi.jp',
      'tahara.aichi.jp',
      'takahama.aichi.jp',
      'tobishima.aichi.jp',
      'toei.aichi.jp',
      'togo.aichi.jp',
      'tokai.aichi.jp',
      'tokoname.aichi.jp',
      'toyoake.aichi.jp',
      'toyohashi.aichi.jp',
      'toyokawa.aichi.jp',
      'toyone.aichi.jp',
      'toyota.aichi.jp',
      'tsushima.aichi.jp',
      'yatomi.aichi.jp',
      'akita.akita.jp',
      'daisen.akita.jp',
      'fujisato.akita.jp',
      'gojome.akita.jp',
      'hachirogata.akita.jp',
      'happou.akita.jp',
      'higashinaruse.akita.jp',
      'honjo.akita.jp',
      'honjyo.akita.jp',
      'ikawa.akita.jp',
      'kamikoani.akita.jp',
      'kamioka.akita.jp',
      'katagami.akita.jp',
      'kazuno.akita.jp',
      'kitaakita.akita.jp',
      'kosaka.akita.jp',
      'kyowa.akita.jp',
      'misato.akita.jp',
      'mitane.akita.jp',
      'moriyoshi.akita.jp',
      'nikaho.akita.jp',
      'noshiro.akita.jp',
      'odate.akita.jp',
      'oga.akita.jp',
      'ogata.akita.jp',
      'semboku.akita.jp',
      'yokote.akita.jp',
      'yurihonjo.akita.jp',
      'aomori.aomori.jp',
      'gonohe.aomori.jp',
      'hachinohe.aomori.jp',
      'hashikami.aomori.jp',
      'hiranai.aomori.jp',
      'hirosaki.aomori.jp',
      'itayanagi.aomori.jp',
      'kuroishi.aomori.jp',
      'misawa.aomori.jp',
      'mutsu.aomori.jp',
      'nakadomari.aomori.jp',
      'noheji.aomori.jp',
      'oirase.aomori.jp',
      'owani.aomori.jp',
      'rokunohe.aomori.jp',
      'sannohe.aomori.jp',
      'shichinohe.aomori.jp',
      'shingo.aomori.jp',
      'takko.aomori.jp',
      'towada.aomori.jp',
      'tsugaru.aomori.jp',
      'tsuruta.aomori.jp',
      'abiko.chiba.jp',
      'asahi.chiba.jp',
      'chonan.chiba.jp',
      'chosei.chiba.jp',
      'choshi.chiba.jp',
      'chuo.chiba.jp',
      'funabashi.chiba.jp',
      'futtsu.chiba.jp',
      'hanamigawa.chiba.jp',
      'ichihara.chiba.jp',
      'ichikawa.chiba.jp',
      'ichinomiya.chiba.jp',
      'inzai.chiba.jp',
      'isumi.chiba.jp',
      'kamagaya.chiba.jp',
      'kamogawa.chiba.jp',
      'kashiwa.chiba.jp',
      'katori.chiba.jp',
      'katsuura.chiba.jp',
      'kimitsu.chiba.jp',
      'kisarazu.chiba.jp',
      'kozaki.chiba.jp',
      'kujukuri.chiba.jp',
      'kyonan.chiba.jp',
      'matsudo.chiba.jp',
      'midori.chiba.jp',
      'mihama.chiba.jp',
      'minamiboso.chiba.jp',
      'mobara.chiba.jp',
      'mutsuzawa.chiba.jp',
      'nagara.chiba.jp',
      'nagareyama.chiba.jp',
      'narashino.chiba.jp',
      'narita.chiba.jp',
      'noda.chiba.jp',
      'oamishirasato.chiba.jp',
      'omigawa.chiba.jp',
      'onjuku.chiba.jp',
      'otaki.chiba.jp',
      'sakae.chiba.jp',
      'sakura.chiba.jp',
      'shimofusa.chiba.jp',
      'shirako.chiba.jp',
      'shiroi.chiba.jp',
      'shisui.chiba.jp',
      'sodegaura.chiba.jp',
      'sosa.chiba.jp',
      'tako.chiba.jp',
      'tateyama.chiba.jp',
      'togane.chiba.jp',
      'tohnosho.chiba.jp',
      'tomisato.chiba.jp',
      'urayasu.chiba.jp',
      'yachimata.chiba.jp',
      'yachiyo.chiba.jp',
      'yokaichiba.chiba.jp',
      'yokoshibahikari.chiba.jp',
      'yotsukaido.chiba.jp',
      'ainan.ehime.jp',
      'honai.ehime.jp',
      'ikata.ehime.jp',
      'imabari.ehime.jp',
      'iyo.ehime.jp',
      'kamijima.ehime.jp',
      'kihoku.ehime.jp',
      'kumakogen.ehime.jp',
      'masaki.ehime.jp',
      'matsuno.ehime.jp',
      'matsuyama.ehime.jp',
      'namikata.ehime.jp',
      'niihama.ehime.jp',
      'ozu.ehime.jp',
      'saijo.ehime.jp',
      'seiyo.ehime.jp',
      'shikokuchuo.ehime.jp',
      'tobe.ehime.jp',
      'toon.ehime.jp',
      'uchiko.ehime.jp',
      'uwajima.ehime.jp',
      'yawatahama.ehime.jp',
      'echizen.fukui.jp',
      'eiheiji.fukui.jp',
      'fukui.fukui.jp',
      'ikeda.fukui.jp',
      'katsuyama.fukui.jp',
      'mihama.fukui.jp',
      'minamiechizen.fukui.jp',
      'obama.fukui.jp',
      'ohi.fukui.jp',
      'ono.fukui.jp',
      'sabae.fukui.jp',
      'sakai.fukui.jp',
      'takahama.fukui.jp',
      'tsuruga.fukui.jp',
      'wakasa.fukui.jp',
      'ashiya.fukuoka.jp',
      'buzen.fukuoka.jp',
      'chikugo.fukuoka.jp',
      'chikuho.fukuoka.jp',
      'chikujo.fukuoka.jp',
      'chikushino.fukuoka.jp',
      'chikuzen.fukuoka.jp',
      'chuo.fukuoka.jp',
      'dazaifu.fukuoka.jp',
      'fukuchi.fukuoka.jp',
      'hakata.fukuoka.jp',
      'higashi.fukuoka.jp',
      'hirokawa.fukuoka.jp',
      'hisayama.fukuoka.jp',
      'iizuka.fukuoka.jp',
      'inatsuki.fukuoka.jp',
      'kaho.fukuoka.jp',
      'kasuga.fukuoka.jp',
      'kasuya.fukuoka.jp',
      'kawara.fukuoka.jp',
      'keisen.fukuoka.jp',
      'koga.fukuoka.jp',
      'kurate.fukuoka.jp',
      'kurogi.fukuoka.jp',
      'kurume.fukuoka.jp',
      'minami.fukuoka.jp',
      'miyako.fukuoka.jp',
      'miyama.fukuoka.jp',
      'miyawaka.fukuoka.jp',
      'mizumaki.fukuoka.jp',
      'munakata.fukuoka.jp',
      'nakagawa.fukuoka.jp',
      'nakama.fukuoka.jp',
      'nishi.fukuoka.jp',
      'nogata.fukuoka.jp',
      'ogori.fukuoka.jp',
      'okagaki.fukuoka.jp',
      'okawa.fukuoka.jp',
      'oki.fukuoka.jp',
      'omuta.fukuoka.jp',
      'onga.fukuoka.jp',
      'onojo.fukuoka.jp',
      'oto.fukuoka.jp',
      'saigawa.fukuoka.jp',
      'sasaguri.fukuoka.jp',
      'shingu.fukuoka.jp',
      'shinyoshitomi.fukuoka.jp',
      'shonai.fukuoka.jp',
      'soeda.fukuoka.jp',
      'sue.fukuoka.jp',
      'tachiarai.fukuoka.jp',
      'tagawa.fukuoka.jp',
      'takata.fukuoka.jp',
      'toho.fukuoka.jp',
      'toyotsu.fukuoka.jp',
      'tsuiki.fukuoka.jp',
      'ukiha.fukuoka.jp',
      'umi.fukuoka.jp',
      'usui.fukuoka.jp',
      'yamada.fukuoka.jp',
      'yame.fukuoka.jp',
      'yanagawa.fukuoka.jp',
      'yukuhashi.fukuoka.jp',
      'aizubange.fukushima.jp',
      'aizumisato.fukushima.jp',
      'aizuwakamatsu.fukushima.jp',
      'asakawa.fukushima.jp',
      'bandai.fukushima.jp',
      'date.fukushima.jp',
      'fukushima.fukushima.jp',
      'furudono.fukushima.jp',
      'futaba.fukushima.jp',
      'hanawa.fukushima.jp',
      'higashi.fukushima.jp',
      'hirata.fukushima.jp',
      'hirono.fukushima.jp',
      'iitate.fukushima.jp',
      'inawashiro.fukushima.jp',
      'ishikawa.fukushima.jp',
      'iwaki.fukushima.jp',
      'izumizaki.fukushima.jp',
      'kagamiishi.fukushima.jp',
      'kaneyama.fukushima.jp',
      'kawamata.fukushima.jp',
      'kitakata.fukushima.jp',
      'kitashiobara.fukushima.jp',
      'koori.fukushima.jp',
      'koriyama.fukushima.jp',
      'kunimi.fukushima.jp',
      'miharu.fukushima.jp',
      'mishima.fukushima.jp',
      'namie.fukushima.jp',
      'nango.fukushima.jp',
      'nishiaizu.fukushima.jp',
      'nishigo.fukushima.jp',
      'okuma.fukushima.jp',
      'omotego.fukushima.jp',
      'ono.fukushima.jp',
      'otama.fukushima.jp',
      'samegawa.fukushima.jp',
      'shimogo.fukushima.jp',
      'shirakawa.fukushima.jp',
      'showa.fukushima.jp',
      'soma.fukushima.jp',
      'sukagawa.fukushima.jp',
      'taishin.fukushima.jp',
      'tamakawa.fukushima.jp',
      'tanagura.fukushima.jp',
      'tenei.fukushima.jp',
      'yabuki.fukushima.jp',
      'yamato.fukushima.jp',
      'yamatsuri.fukushima.jp',
      'yanaizu.fukushima.jp',
      'yugawa.fukushima.jp',
      'anpachi.gifu.jp',
      'ena.gifu.jp',
      'gifu.gifu.jp',
      'ginan.gifu.jp',
      'godo.gifu.jp',
      'gujo.gifu.jp',
      'hashima.gifu.jp',
      'hichiso.gifu.jp',
      'hida.gifu.jp',
      'higashishirakawa.gifu.jp',
      'ibigawa.gifu.jp',
      'ikeda.gifu.jp',
      'kakamigahara.gifu.jp',
      'kani.gifu.jp',
      'kasahara.gifu.jp',
      'kasamatsu.gifu.jp',
      'kawaue.gifu.jp',
      'kitagata.gifu.jp',
      'mino.gifu.jp',
      'minokamo.gifu.jp',
      'mitake.gifu.jp',
      'mizunami.gifu.jp',
      'motosu.gifu.jp',
      'nakatsugawa.gifu.jp',
      'ogaki.gifu.jp',
      'sakahogi.gifu.jp',
      'seki.gifu.jp',
      'sekigahara.gifu.jp',
      'shirakawa.gifu.jp',
      'tajimi.gifu.jp',
      'takayama.gifu.jp',
      'tarui.gifu.jp',
      'toki.gifu.jp',
      'tomika.gifu.jp',
      'wanouchi.gifu.jp',
      'yamagata.gifu.jp',
      'yaotsu.gifu.jp',
      'yoro.gifu.jp',
      'annaka.gunma.jp',
      'chiyoda.gunma.jp',
      'fujioka.gunma.jp',
      'higashiagatsuma.gunma.jp',
      'isesaki.gunma.jp',
      'itakura.gunma.jp',
      'kanna.gunma.jp',
      'kanra.gunma.jp',
      'katashina.gunma.jp',
      'kawaba.gunma.jp',
      'kiryu.gunma.jp',
      'kusatsu.gunma.jp',
      'maebashi.gunma.jp',
      'meiwa.gunma.jp',
      'midori.gunma.jp',
      'minakami.gunma.jp',
      'naganohara.gunma.jp',
      'nakanojo.gunma.jp',
      'nanmoku.gunma.jp',
      'numata.gunma.jp',
      'oizumi.gunma.jp',
      'ora.gunma.jp',
      'ota.gunma.jp',
      'shibukawa.gunma.jp',
      'shimonita.gunma.jp',
      'shinto.gunma.jp',
      'showa.gunma.jp',
      'takasaki.gunma.jp',
      'takayama.gunma.jp',
      'tamamura.gunma.jp',
      'tatebayashi.gunma.jp',
      'tomioka.gunma.jp',
      'tsukiyono.gunma.jp',
      'tsumagoi.gunma.jp',
      'ueno.gunma.jp',
      'yoshioka.gunma.jp',
      'asaminami.hiroshima.jp',
      'daiwa.hiroshima.jp',
      'etajima.hiroshima.jp',
      'fuchu.hiroshima.jp',
      'fukuyama.hiroshima.jp',
      'hatsukaichi.hiroshima.jp',
      'higashihiroshima.hiroshima.jp',
      'hongo.hiroshima.jp',
      'jinsekikogen.hiroshima.jp',
      'kaita.hiroshima.jp',
      'kui.hiroshima.jp',
      'kumano.hiroshima.jp',
      'kure.hiroshima.jp',
      'mihara.hiroshima.jp',
      'miyoshi.hiroshima.jp',
      'naka.hiroshima.jp',
      'onomichi.hiroshima.jp',
      'osakikamijima.hiroshima.jp',
      'otake.hiroshima.jp',
      'saka.hiroshima.jp',
      'sera.hiroshima.jp',
      'seranishi.hiroshima.jp',
      'shinichi.hiroshima.jp',
      'shobara.hiroshima.jp',
      'takehara.hiroshima.jp',
      'abashiri.hokkaido.jp',
      'abira.hokkaido.jp',
      'aibetsu.hokkaido.jp',
      'akabira.hokkaido.jp',
      'akkeshi.hokkaido.jp',
      'asahikawa.hokkaido.jp',
      'ashibetsu.hokkaido.jp',
      'ashoro.hokkaido.jp',
      'assabu.hokkaido.jp',
      'atsuma.hokkaido.jp',
      'bibai.hokkaido.jp',
      'biei.hokkaido.jp',
      'bifuka.hokkaido.jp',
      'bihoro.hokkaido.jp',
      'biratori.hokkaido.jp',
      'chippubetsu.hokkaido.jp',
      'chitose.hokkaido.jp',
      'date.hokkaido.jp',
      'ebetsu.hokkaido.jp',
      'embetsu.hokkaido.jp',
      'eniwa.hokkaido.jp',
      'erimo.hokkaido.jp',
      'esan.hokkaido.jp',
      'esashi.hokkaido.jp',
      'fukagawa.hokkaido.jp',
      'fukushima.hokkaido.jp',
      'furano.hokkaido.jp',
      'furubira.hokkaido.jp',
      'haboro.hokkaido.jp',
      'hakodate.hokkaido.jp',
      'hamatonbetsu.hokkaido.jp',
      'hidaka.hokkaido.jp',
      'higashikagura.hokkaido.jp',
      'higashikawa.hokkaido.jp',
      'hiroo.hokkaido.jp',
      'hokuryu.hokkaido.jp',
      'hokuto.hokkaido.jp',
      'honbetsu.hokkaido.jp',
      'horokanai.hokkaido.jp',
      'horonobe.hokkaido.jp',
      'ikeda.hokkaido.jp',
      'imakane.hokkaido.jp',
      'ishikari.hokkaido.jp',
      'iwamizawa.hokkaido.jp',
      'iwanai.hokkaido.jp',
      'kamifurano.hokkaido.jp',
      'kamikawa.hokkaido.jp',
      'kamishihoro.hokkaido.jp',
      'kamisunagawa.hokkaido.jp',
      'kamoenai.hokkaido.jp',
      'kayabe.hokkaido.jp',
      'kembuchi.hokkaido.jp',
      'kikonai.hokkaido.jp',
      'kimobetsu.hokkaido.jp',
      'kitahiroshima.hokkaido.jp',
      'kitami.hokkaido.jp',
      'kiyosato.hokkaido.jp',
      'koshimizu.hokkaido.jp',
      'kunneppu.hokkaido.jp',
      'kuriyama.hokkaido.jp',
      'kuromatsunai.hokkaido.jp',
      'kushiro.hokkaido.jp',
      'kutchan.hokkaido.jp',
      'kyowa.hokkaido.jp',
      'mashike.hokkaido.jp',
      'matsumae.hokkaido.jp',
      'mikasa.hokkaido.jp',
      'minamifurano.hokkaido.jp',
      'mombetsu.hokkaido.jp',
      'moseushi.hokkaido.jp',
      'mukawa.hokkaido.jp',
      'muroran.hokkaido.jp',
      'naie.hokkaido.jp',
      'nakagawa.hokkaido.jp',
      'nakasatsunai.hokkaido.jp',
      'nakatombetsu.hokkaido.jp',
      'nanae.hokkaido.jp',
      'nanporo.hokkaido.jp',
      'nayoro.hokkaido.jp',
      'nemuro.hokkaido.jp',
      'niikappu.hokkaido.jp',
      'niki.hokkaido.jp',
      'nishiokoppe.hokkaido.jp',
      'noboribetsu.hokkaido.jp',
      'numata.hokkaido.jp',
      'obihiro.hokkaido.jp',
      'obira.hokkaido.jp',
      'oketo.hokkaido.jp',
      'okoppe.hokkaido.jp',
      'otaru.hokkaido.jp',
      'otobe.hokkaido.jp',
      'otofuke.hokkaido.jp',
      'otoineppu.hokkaido.jp',
      'oumu.hokkaido.jp',
      'ozora.hokkaido.jp',
      'pippu.hokkaido.jp',
      'rankoshi.hokkaido.jp',
      'rebun.hokkaido.jp',
      'rikubetsu.hokkaido.jp',
      'rishiri.hokkaido.jp',
      'rishirifuji.hokkaido.jp',
      'saroma.hokkaido.jp',
      'sarufutsu.hokkaido.jp',
      'shakotan.hokkaido.jp',
      'shari.hokkaido.jp',
      'shibecha.hokkaido.jp',
      'shibetsu.hokkaido.jp',
      'shikabe.hokkaido.jp',
      'shikaoi.hokkaido.jp',
      'shimamaki.hokkaido.jp',
      'shimizu.hokkaido.jp',
      'shimokawa.hokkaido.jp',
      'shinshinotsu.hokkaido.jp',
      'shintoku.hokkaido.jp',
      'shiranuka.hokkaido.jp',
      'shiraoi.hokkaido.jp',
      'shiriuchi.hokkaido.jp',
      'sobetsu.hokkaido.jp',
      'sunagawa.hokkaido.jp',
      'taiki.hokkaido.jp',
      'takasu.hokkaido.jp',
      'takikawa.hokkaido.jp',
      'takinoue.hokkaido.jp',
      'teshikaga.hokkaido.jp',
      'tobetsu.hokkaido.jp',
      'tohma.hokkaido.jp',
      'tomakomai.hokkaido.jp',
      'tomari.hokkaido.jp',
      'toya.hokkaido.jp',
      'toyako.hokkaido.jp',
      'toyotomi.hokkaido.jp',
      'toyoura.hokkaido.jp',
      'tsubetsu.hokkaido.jp',
      'tsukigata.hokkaido.jp',
      'urakawa.hokkaido.jp',
      'urausu.hokkaido.jp',
      'uryu.hokkaido.jp',
      'utashinai.hokkaido.jp',
      'wakkanai.hokkaido.jp',
      'wassamu.hokkaido.jp',
      'yakumo.hokkaido.jp',
      'yoichi.hokkaido.jp',
      'aioi.hyogo.jp',
      'akashi.hyogo.jp',
      'ako.hyogo.jp',
      'amagasaki.hyogo.jp',
      'aogaki.hyogo.jp',
      'asago.hyogo.jp',
      'ashiya.hyogo.jp',
      'awaji.hyogo.jp',
      'fukusaki.hyogo.jp',
      'goshiki.hyogo.jp',
      'harima.hyogo.jp',
      'himeji.hyogo.jp',
      'ichikawa.hyogo.jp',
      'inagawa.hyogo.jp',
      'itami.hyogo.jp',
      'kakogawa.hyogo.jp',
      'kamigori.hyogo.jp',
      'kamikawa.hyogo.jp',
      'kasai.hyogo.jp',
      'kasuga.hyogo.jp',
      'kawanishi.hyogo.jp',
      'miki.hyogo.jp',
      'minamiawaji.hyogo.jp',
      'nishinomiya.hyogo.jp',
      'nishiwaki.hyogo.jp',
      'ono.hyogo.jp',
      'sanda.hyogo.jp',
      'sannan.hyogo.jp',
      'sasayama.hyogo.jp',
      'sayo.hyogo.jp',
      'shingu.hyogo.jp',
      'shinonsen.hyogo.jp',
      'shiso.hyogo.jp',
      'sumoto.hyogo.jp',
      'taishi.hyogo.jp',
      'taka.hyogo.jp',
      'takarazuka.hyogo.jp',
      'takasago.hyogo.jp',
      'takino.hyogo.jp',
      'tamba.hyogo.jp',
      'tatsuno.hyogo.jp',
      'toyooka.hyogo.jp',
      'yabu.hyogo.jp',
      'yashiro.hyogo.jp',
      'yoka.hyogo.jp',
      'yokawa.hyogo.jp',
      'ami.ibaraki.jp',
      'asahi.ibaraki.jp',
      'bando.ibaraki.jp',
      'chikusei.ibaraki.jp',
      'daigo.ibaraki.jp',
      'fujishiro.ibaraki.jp',
      'hitachi.ibaraki.jp',
      'hitachinaka.ibaraki.jp',
      'hitachiomiya.ibaraki.jp',
      'hitachiota.ibaraki.jp',
      'ibaraki.ibaraki.jp',
      'ina.ibaraki.jp',
      'inashiki.ibaraki.jp',
      'itako.ibaraki.jp',
      'iwama.ibaraki.jp',
      'joso.ibaraki.jp',
      'kamisu.ibaraki.jp',
      'kasama.ibaraki.jp',
      'kashima.ibaraki.jp',
      'kasumigaura.ibaraki.jp',
      'koga.ibaraki.jp',
      'miho.ibaraki.jp',
      'mito.ibaraki.jp',
      'moriya.ibaraki.jp',
      'naka.ibaraki.jp',
      'namegata.ibaraki.jp',
      'oarai.ibaraki.jp',
      'ogawa.ibaraki.jp',
      'omitama.ibaraki.jp',
      'ryugasaki.ibaraki.jp',
      'sakai.ibaraki.jp',
      'sakuragawa.ibaraki.jp',
      'shimodate.ibaraki.jp',
      'shimotsuma.ibaraki.jp',
      'shirosato.ibaraki.jp',
      'sowa.ibaraki.jp',
      'suifu.ibaraki.jp',
      'takahagi.ibaraki.jp',
      'tamatsukuri.ibaraki.jp',
      'tokai.ibaraki.jp',
      'tomobe.ibaraki.jp',
      'tone.ibaraki.jp',
      'toride.ibaraki.jp',
      'tsuchiura.ibaraki.jp',
      'tsukuba.ibaraki.jp',
      'uchihara.ibaraki.jp',
      'ushiku.ibaraki.jp',
      'yachiyo.ibaraki.jp',
      'yamagata.ibaraki.jp',
      'yawara.ibaraki.jp',
      'yuki.ibaraki.jp',
      'anamizu.ishikawa.jp',
      'hakui.ishikawa.jp',
      'hakusan.ishikawa.jp',
      'kaga.ishikawa.jp',
      'kahoku.ishikawa.jp',
      'kanazawa.ishikawa.jp',
      'kawakita.ishikawa.jp',
      'komatsu.ishikawa.jp',
      'nakanoto.ishikawa.jp',
      'nanao.ishikawa.jp',
      'nomi.ishikawa.jp',
      'nonoichi.ishikawa.jp',
      'noto.ishikawa.jp',
      'shika.ishikawa.jp',
      'suzu.ishikawa.jp',
      'tsubata.ishikawa.jp',
      'tsurugi.ishikawa.jp',
      'uchinada.ishikawa.jp',
      'wajima.ishikawa.jp',
      'fudai.iwate.jp',
      'fujisawa.iwate.jp',
      'hanamaki.iwate.jp',
      'hiraizumi.iwate.jp',
      'hirono.iwate.jp',
      'ichinohe.iwate.jp',
      'ichinoseki.iwate.jp',
      'iwaizumi.iwate.jp',
      'iwate.iwate.jp',
      'joboji.iwate.jp',
      'kamaishi.iwate.jp',
      'kanegasaki.iwate.jp',
      'karumai.iwate.jp',
      'kawai.iwate.jp',
      'kitakami.iwate.jp',
      'kuji.iwate.jp',
      'kunohe.iwate.jp',
      'kuzumaki.iwate.jp',
      'miyako.iwate.jp',
      'mizusawa.iwate.jp',
      'morioka.iwate.jp',
      'ninohe.iwate.jp',
      'noda.iwate.jp',
      'ofunato.iwate.jp',
      'oshu.iwate.jp',
      'otsuchi.iwate.jp',
      'rikuzentakata.iwate.jp',
      'shiwa.iwate.jp',
      'shizukuishi.iwate.jp',
      'sumita.iwate.jp',
      'tanohata.iwate.jp',
      'tono.iwate.jp',
      'yahaba.iwate.jp',
      'yamada.iwate.jp',
      'ayagawa.kagawa.jp',
      'higashikagawa.kagawa.jp',
      'kanonji.kagawa.jp',
      'kotohira.kagawa.jp',
      'manno.kagawa.jp',
      'marugame.kagawa.jp',
      'mitoyo.kagawa.jp',
      'naoshima.kagawa.jp',
      'sanuki.kagawa.jp',
      'tadotsu.kagawa.jp',
      'takamatsu.kagawa.jp',
      'tonosho.kagawa.jp',
      'uchinomi.kagawa.jp',
      'utazu.kagawa.jp',
      'zentsuji.kagawa.jp',
      'akune.kagoshima.jp',
      'amami.kagoshima.jp',
      'hioki.kagoshima.jp',
      'isa.kagoshima.jp',
      'isen.kagoshima.jp',
      'izumi.kagoshima.jp',
      'kagoshima.kagoshima.jp',
      'kanoya.kagoshima.jp',
      'kawanabe.kagoshima.jp',
      'kinko.kagoshima.jp',
      'kouyama.kagoshima.jp',
      'makurazaki.kagoshima.jp',
      'matsumoto.kagoshima.jp',
      'minamitane.kagoshima.jp',
      'nakatane.kagoshima.jp',
      'nishinoomote.kagoshima.jp',
      'satsumasendai.kagoshima.jp',
      'soo.kagoshima.jp',
      'tarumizu.kagoshima.jp',
      'yusui.kagoshima.jp',
      'aikawa.kanagawa.jp',
      'atsugi.kanagawa.jp',
      'ayase.kanagawa.jp',
      'chigasaki.kanagawa.jp',
      'ebina.kanagawa.jp',
      'fujisawa.kanagawa.jp',
      'hadano.kanagawa.jp',
      'hakone.kanagawa.jp',
      'hiratsuka.kanagawa.jp',
      'isehara.kanagawa.jp',
      'kaisei.kanagawa.jp',
      'kamakura.kanagawa.jp',
      'kiyokawa.kanagawa.jp',
      'matsuda.kanagawa.jp',
      'minamiashigara.kanagawa.jp',
      'miura.kanagawa.jp',
      'nakai.kanagawa.jp',
      'ninomiya.kanagawa.jp',
      'odawara.kanagawa.jp',
      'oi.kanagawa.jp',
      'oiso.kanagawa.jp',
      'sagamihara.kanagawa.jp',
      'samukawa.kanagawa.jp',
      'tsukui.kanagawa.jp',
      'yamakita.kanagawa.jp',
      'yamato.kanagawa.jp',
      'yokosuka.kanagawa.jp',
      'yugawara.kanagawa.jp',
      'zama.kanagawa.jp',
      'zushi.kanagawa.jp',
      'aki.kochi.jp',
      'geisei.kochi.jp',
      'hidaka.kochi.jp',
      'higashitsuno.kochi.jp',
      'ino.kochi.jp',
      'kagami.kochi.jp',
      'kami.kochi.jp',
      'kitagawa.kochi.jp',
      'kochi.kochi.jp',
      'mihara.kochi.jp',
      'motoyama.kochi.jp',
      'muroto.kochi.jp',
      'nahari.kochi.jp',
      'nakamura.kochi.jp',
      'nankoku.kochi.jp',
      'nishitosa.kochi.jp',
      'niyodogawa.kochi.jp',
      'ochi.kochi.jp',
      'okawa.kochi.jp',
      'otoyo.kochi.jp',
      'otsuki.kochi.jp',
      'sakawa.kochi.jp',
      'sukumo.kochi.jp',
      'susaki.kochi.jp',
      'tosa.kochi.jp',
      'tosashimizu.kochi.jp',
      'toyo.kochi.jp',
      'tsuno.kochi.jp',
      'umaji.kochi.jp',
      'yasuda.kochi.jp',
      'yusuhara.kochi.jp',
      'amakusa.kumamoto.jp',
      'arao.kumamoto.jp',
      'aso.kumamoto.jp',
      'choyo.kumamoto.jp',
      'gyokuto.kumamoto.jp',
      'kamiamakusa.kumamoto.jp',
      'kikuchi.kumamoto.jp',
      'kumamoto.kumamoto.jp',
      'mashiki.kumamoto.jp',
      'mifune.kumamoto.jp',
      'minamata.kumamoto.jp',
      'minamioguni.kumamoto.jp',
      'nagasu.kumamoto.jp',
      'nishihara.kumamoto.jp',
      'oguni.kumamoto.jp',
      'ozu.kumamoto.jp',
      'sumoto.kumamoto.jp',
      'takamori.kumamoto.jp',
      'uki.kumamoto.jp',
      'uto.kumamoto.jp',
      'yamaga.kumamoto.jp',
      'yamato.kumamoto.jp',
      'yatsushiro.kumamoto.jp',
      'ayabe.kyoto.jp',
      'fukuchiyama.kyoto.jp',
      'higashiyama.kyoto.jp',
      'ide.kyoto.jp',
      'ine.kyoto.jp',
      'joyo.kyoto.jp',
      'kameoka.kyoto.jp',
      'kamo.kyoto.jp',
      'kita.kyoto.jp',
      'kizu.kyoto.jp',
      'kumiyama.kyoto.jp',
      'kyotamba.kyoto.jp',
      'kyotanabe.kyoto.jp',
      'kyotango.kyoto.jp',
      'maizuru.kyoto.jp',
      'minami.kyoto.jp',
      'minamiyamashiro.kyoto.jp',
      'miyazu.kyoto.jp',
      'muko.kyoto.jp',
      'nagaokakyo.kyoto.jp',
      'nakagyo.kyoto.jp',
      'nantan.kyoto.jp',
      'oyamazaki.kyoto.jp',
      'sakyo.kyoto.jp',
      'seika.kyoto.jp',
      'tanabe.kyoto.jp',
      'uji.kyoto.jp',
      'ujitawara.kyoto.jp',
      'wazuka.kyoto.jp',
      'yamashina.kyoto.jp',
      'yawata.kyoto.jp',
      'asahi.mie.jp',
      'inabe.mie.jp',
      'ise.mie.jp',
      'kameyama.mie.jp',
      'kawagoe.mie.jp',
      'kiho.mie.jp',
      'kisosaki.mie.jp',
      'kiwa.mie.jp',
      'komono.mie.jp',
      'kumano.mie.jp',
      'kuwana.mie.jp',
      'matsusaka.mie.jp',
      'meiwa.mie.jp',
      'mihama.mie.jp',
      'minamiise.mie.jp',
      'misugi.mie.jp',
      'miyama.mie.jp',
      'nabari.mie.jp',
      'shima.mie.jp',
      'suzuka.mie.jp',
      'tado.mie.jp',
      'taiki.mie.jp',
      'taki.mie.jp',
      'tamaki.mie.jp',
      'toba.mie.jp',
      'tsu.mie.jp',
      'udono.mie.jp',
      'ureshino.mie.jp',
      'watarai.mie.jp',
      'yokkaichi.mie.jp',
      'furukawa.miyagi.jp',
      'higashimatsushima.miyagi.jp',
      'ishinomaki.miyagi.jp',
      'iwanuma.miyagi.jp',
      'kakuda.miyagi.jp',
      'kami.miyagi.jp',
      'kawasaki.miyagi.jp',
      'marumori.miyagi.jp',
      'matsushima.miyagi.jp',
      'minamisanriku.miyagi.jp',
      'misato.miyagi.jp',
      'murata.miyagi.jp',
      'natori.miyagi.jp',
      'ogawara.miyagi.jp',
      'ohira.miyagi.jp',
      'onagawa.miyagi.jp',
      'osaki.miyagi.jp',
      'rifu.miyagi.jp',
      'semine.miyagi.jp',
      'shibata.miyagi.jp',
      'shichikashuku.miyagi.jp',
      'shikama.miyagi.jp',
      'shiogama.miyagi.jp',
      'shiroishi.miyagi.jp',
      'tagajo.miyagi.jp',
      'taiwa.miyagi.jp',
      'tome.miyagi.jp',
      'tomiya.miyagi.jp',
      'wakuya.miyagi.jp',
      'watari.miyagi.jp',
      'yamamoto.miyagi.jp',
      'zao.miyagi.jp',
      'aya.miyazaki.jp',
      'ebino.miyazaki.jp',
      'gokase.miyazaki.jp',
      'hyuga.miyazaki.jp',
      'kadogawa.miyazaki.jp',
      'kawaminami.miyazaki.jp',
      'kijo.miyazaki.jp',
      'kitagawa.miyazaki.jp',
      'kitakata.miyazaki.jp',
      'kitaura.miyazaki.jp',
      'kobayashi.miyazaki.jp',
      'kunitomi.miyazaki.jp',
      'kushima.miyazaki.jp',
      'mimata.miyazaki.jp',
      'miyakonojo.miyazaki.jp',
      'miyazaki.miyazaki.jp',
      'morotsuka.miyazaki.jp',
      'nichinan.miyazaki.jp',
      'nishimera.miyazaki.jp',
      'nobeoka.miyazaki.jp',
      'saito.miyazaki.jp',
      'shiiba.miyazaki.jp',
      'shintomi.miyazaki.jp',
      'takaharu.miyazaki.jp',
      'takanabe.miyazaki.jp',
      'takazaki.miyazaki.jp',
      'tsuno.miyazaki.jp',
      'achi.nagano.jp',
      'agematsu.nagano.jp',
      'anan.nagano.jp',
      'aoki.nagano.jp',
      'asahi.nagano.jp',
      'azumino.nagano.jp',
      'chikuhoku.nagano.jp',
      'chikuma.nagano.jp',
      'chino.nagano.jp',
      'fujimi.nagano.jp',
      'hakuba.nagano.jp',
      'hara.nagano.jp',
      'hiraya.nagano.jp',
      'iida.nagano.jp',
      'iijima.nagano.jp',
      'iiyama.nagano.jp',
      'iizuna.nagano.jp',
      'ikeda.nagano.jp',
      'ikusaka.nagano.jp',
      'ina.nagano.jp',
      'karuizawa.nagano.jp',
      'kawakami.nagano.jp',
      'kiso.nagano.jp',
      'kisofukushima.nagano.jp',
      'kitaaiki.nagano.jp',
      'komagane.nagano.jp',
      'komoro.nagano.jp',
      'matsukawa.nagano.jp',
      'matsumoto.nagano.jp',
      'miasa.nagano.jp',
      'minamiaiki.nagano.jp',
      'minamimaki.nagano.jp',
      'minamiminowa.nagano.jp',
      'minowa.nagano.jp',
      'miyada.nagano.jp',
      'miyota.nagano.jp',
      'mochizuki.nagano.jp',
      'nagano.nagano.jp',
      'nagawa.nagano.jp',
      'nagiso.nagano.jp',
      'nakagawa.nagano.jp',
      'nakano.nagano.jp',
      'nozawaonsen.nagano.jp',
      'obuse.nagano.jp',
      'ogawa.nagano.jp',
      'okaya.nagano.jp',
      'omachi.nagano.jp',
      'omi.nagano.jp',
      'ookuwa.nagano.jp',
      'ooshika.nagano.jp',
      'otaki.nagano.jp',
      'otari.nagano.jp',
      'sakae.nagano.jp',
      'sakaki.nagano.jp',
      'saku.nagano.jp',
      'sakuho.nagano.jp',
      'shimosuwa.nagano.jp',
      'shinanomachi.nagano.jp',
      'shiojiri.nagano.jp',
      'suwa.nagano.jp',
      'suzaka.nagano.jp',
      'takagi.nagano.jp',
      'takamori.nagano.jp',
      'takayama.nagano.jp',
      'tateshina.nagano.jp',
      'tatsuno.nagano.jp',
      'togakushi.nagano.jp',
      'togura.nagano.jp',
      'tomi.nagano.jp',
      'ueda.nagano.jp',
      'wada.nagano.jp',
      'yamagata.nagano.jp',
      'yamanouchi.nagano.jp',
      'yasaka.nagano.jp',
      'yasuoka.nagano.jp',
      'chijiwa.nagasaki.jp',
      'futsu.nagasaki.jp',
      'goto.nagasaki.jp',
      'hasami.nagasaki.jp',
      'hirado.nagasaki.jp',
      'iki.nagasaki.jp',
      'isahaya.nagasaki.jp',
      'kawatana.nagasaki.jp',
      'kuchinotsu.nagasaki.jp',
      'matsuura.nagasaki.jp',
      'nagasaki.nagasaki.jp',
      'obama.nagasaki.jp',
      'omura.nagasaki.jp',
      'oseto.nagasaki.jp',
      'saikai.nagasaki.jp',
      'sasebo.nagasaki.jp',
      'seihi.nagasaki.jp',
      'shimabara.nagasaki.jp',
      'shinkamigoto.nagasaki.jp',
      'togitsu.nagasaki.jp',
      'tsushima.nagasaki.jp',
      'unzen.nagasaki.jp',
      'ando.nara.jp',
      'gose.nara.jp',
      'heguri.nara.jp',
      'higashiyoshino.nara.jp',
      'ikaruga.nara.jp',
      'ikoma.nara.jp',
      'kamikitayama.nara.jp',
      'kanmaki.nara.jp',
      'kashiba.nara.jp',
      'kashihara.nara.jp',
      'katsuragi.nara.jp',
      'kawai.nara.jp',
      'kawakami.nara.jp',
      'kawanishi.nara.jp',
      'koryo.nara.jp',
      'kurotaki.nara.jp',
      'mitsue.nara.jp',
      'miyake.nara.jp',
      'nara.nara.jp',
      'nosegawa.nara.jp',
      'oji.nara.jp',
      'ouda.nara.jp',
      'oyodo.nara.jp',
      'sakurai.nara.jp',
      'sango.nara.jp',
      'shimoichi.nara.jp',
      'shimokitayama.nara.jp',
      'shinjo.nara.jp',
      'soni.nara.jp',
      'takatori.nara.jp',
      'tawaramoto.nara.jp',
      'tenkawa.nara.jp',
      'tenri.nara.jp',
      'uda.nara.jp',
      'yamatokoriyama.nara.jp',
      'yamatotakada.nara.jp',
      'yamazoe.nara.jp',
      'yoshino.nara.jp',
      'aga.niigata.jp',
      'agano.niigata.jp',
      'gosen.niigata.jp',
      'itoigawa.niigata.jp',
      'izumozaki.niigata.jp',
      'joetsu.niigata.jp',
      'kamo.niigata.jp',
      'kariwa.niigata.jp',
      'kashiwazaki.niigata.jp',
      'minamiuonuma.niigata.jp',
      'mitsuke.niigata.jp',
      'muika.niigata.jp',
      'murakami.niigata.jp',
      'myoko.niigata.jp',
      'nagaoka.niigata.jp',
      'niigata.niigata.jp',
      'ojiya.niigata.jp',
      'omi.niigata.jp',
      'sado.niigata.jp',
      'sanjo.niigata.jp',
      'seiro.niigata.jp',
      'seirou.niigata.jp',
      'sekikawa.niigata.jp',
      'shibata.niigata.jp',
      'tagami.niigata.jp',
      'tainai.niigata.jp',
      'tochio.niigata.jp',
      'tokamachi.niigata.jp',
      'tsubame.niigata.jp',
      'tsunan.niigata.jp',
      'uonuma.niigata.jp',
      'yahiko.niigata.jp',
      'yoita.niigata.jp',
      'yuzawa.niigata.jp',
      'beppu.oita.jp',
      'bungoono.oita.jp',
      'bungotakada.oita.jp',
      'hasama.oita.jp',
      'hiji.oita.jp',
      'himeshima.oita.jp',
      'hita.oita.jp',
      'kamitsue.oita.jp',
      'kokonoe.oita.jp',
      'kuju.oita.jp',
      'kunisaki.oita.jp',
      'kusu.oita.jp',
      'oita.oita.jp',
      'saiki.oita.jp',
      'taketa.oita.jp',
      'tsukumi.oita.jp',
      'usa.oita.jp',
      'usuki.oita.jp',
      'yufu.oita.jp',
      'akaiwa.okayama.jp',
      'asakuchi.okayama.jp',
      'bizen.okayama.jp',
      'hayashima.okayama.jp',
      'ibara.okayama.jp',
      'kagamino.okayama.jp',
      'kasaoka.okayama.jp',
      'kibichuo.okayama.jp',
      'kumenan.okayama.jp',
      'kurashiki.okayama.jp',
      'maniwa.okayama.jp',
      'misaki.okayama.jp',
      'nagi.okayama.jp',
      'niimi.okayama.jp',
      'nishiawakura.okayama.jp',
      'okayama.okayama.jp',
      'satosho.okayama.jp',
      'setouchi.okayama.jp',
      'shinjo.okayama.jp',
      'shoo.okayama.jp',
      'soja.okayama.jp',
      'takahashi.okayama.jp',
      'tamano.okayama.jp',
      'tsuyama.okayama.jp',
      'wake.okayama.jp',
      'yakage.okayama.jp',
      'aguni.okinawa.jp',
      'ginowan.okinawa.jp',
      'ginoza.okinawa.jp',
      'gushikami.okinawa.jp',
      'haebaru.okinawa.jp',
      'higashi.okinawa.jp',
      'hirara.okinawa.jp',
      'iheya.okinawa.jp',
      'ishigaki.okinawa.jp',
      'ishikawa.okinawa.jp',
      'itoman.okinawa.jp',
      'izena.okinawa.jp',
      'kadena.okinawa.jp',
      'kin.okinawa.jp',
      'kitadaito.okinawa.jp',
      'kitanakagusuku.okinawa.jp',
      'kumejima.okinawa.jp',
      'kunigami.okinawa.jp',
      'minamidaito.okinawa.jp',
      'motobu.okinawa.jp',
      'nago.okinawa.jp',
      'naha.okinawa.jp',
      'nakagusuku.okinawa.jp',
      'nakijin.okinawa.jp',
      'nanjo.okinawa.jp',
      'nishihara.okinawa.jp',
      'ogimi.okinawa.jp',
      'okinawa.okinawa.jp',
      'onna.okinawa.jp',
      'shimoji.okinawa.jp',
      'taketomi.okinawa.jp',
      'tarama.okinawa.jp',
      'tokashiki.okinawa.jp',
      'tomigusuku.okinawa.jp',
      'tonaki.okinawa.jp',
      'urasoe.okinawa.jp',
      'uruma.okinawa.jp',
      'yaese.okinawa.jp',
      'yomitan.okinawa.jp',
      'yonabaru.okinawa.jp',
      'yonaguni.okinawa.jp',
      'zamami.okinawa.jp',
      'abeno.osaka.jp',
      'chihayaakasaka.osaka.jp',
      'chuo.osaka.jp',
      'daito.osaka.jp',
      'fujiidera.osaka.jp',
      'habikino.osaka.jp',
      'hannan.osaka.jp',
      'higashiosaka.osaka.jp',
      'higashisumiyoshi.osaka.jp',
      'higashiyodogawa.osaka.jp',
      'hirakata.osaka.jp',
      'ibaraki.osaka.jp',
      'ikeda.osaka.jp',
      'izumi.osaka.jp',
      'izumiotsu.osaka.jp',
      'izumisano.osaka.jp',
      'kadoma.osaka.jp',
      'kaizuka.osaka.jp',
      'kanan.osaka.jp',
      'kashiwara.osaka.jp',
      'katano.osaka.jp',
      'kawachinagano.osaka.jp',
      'kishiwada.osaka.jp',
      'kita.osaka.jp',
      'kumatori.osaka.jp',
      'matsubara.osaka.jp',
      'minato.osaka.jp',
      'minoh.osaka.jp',
      'misaki.osaka.jp',
      'moriguchi.osaka.jp',
      'neyagawa.osaka.jp',
      'nishi.osaka.jp',
      'nose.osaka.jp',
      'osakasayama.osaka.jp',
      'sakai.osaka.jp',
      'sayama.osaka.jp',
      'sennan.osaka.jp',
      'settsu.osaka.jp',
      'shijonawate.osaka.jp',
      'shimamoto.osaka.jp',
      'suita.osaka.jp',
      'tadaoka.osaka.jp',
      'taishi.osaka.jp',
      'tajiri.osaka.jp',
      'takaishi.osaka.jp',
      'takatsuki.osaka.jp',
      'tondabayashi.osaka.jp',
      'toyonaka.osaka.jp',
      'toyono.osaka.jp',
      'yao.osaka.jp',
      'ariake.saga.jp',
      'arita.saga.jp',
      'fukudomi.saga.jp',
      'genkai.saga.jp',
      'hamatama.saga.jp',
      'hizen.saga.jp',
      'imari.saga.jp',
      'kamimine.saga.jp',
      'kanzaki.saga.jp',
      'karatsu.saga.jp',
      'kashima.saga.jp',
      'kitagata.saga.jp',
      'kitahata.saga.jp',
      'kiyama.saga.jp',
      'kouhoku.saga.jp',
      'kyuragi.saga.jp',
      'nishiarita.saga.jp',
      'ogi.saga.jp',
      'omachi.saga.jp',
      'ouchi.saga.jp',
      'saga.saga.jp',
      'shiroishi.saga.jp',
      'taku.saga.jp',
      'tara.saga.jp',
      'tosu.saga.jp',
      'yoshinogari.saga.jp',
      'arakawa.saitama.jp',
      'asaka.saitama.jp',
      'chichibu.saitama.jp',
      'fujimi.saitama.jp',
      'fujimino.saitama.jp',
      'fukaya.saitama.jp',
      'hanno.saitama.jp',
      'hanyu.saitama.jp',
      'hasuda.saitama.jp',
      'hatogaya.saitama.jp',
      'hatoyama.saitama.jp',
      'hidaka.saitama.jp',
      'higashichichibu.saitama.jp',
      'higashimatsuyama.saitama.jp',
      'honjo.saitama.jp',
      'ina.saitama.jp',
      'iruma.saitama.jp',
      'iwatsuki.saitama.jp',
      'kamiizumi.saitama.jp',
      'kamikawa.saitama.jp',
      'kamisato.saitama.jp',
      'kasukabe.saitama.jp',
      'kawagoe.saitama.jp',
      'kawaguchi.saitama.jp',
      'kawajima.saitama.jp',
      'kazo.saitama.jp',
      'kitamoto.saitama.jp',
      'koshigaya.saitama.jp',
      'kounosu.saitama.jp',
      'kuki.saitama.jp',
      'kumagaya.saitama.jp',
      'matsubushi.saitama.jp',
      'minano.saitama.jp',
      'misato.saitama.jp',
      'miyashiro.saitama.jp',
      'miyoshi.saitama.jp',
      'moroyama.saitama.jp',
      'nagatoro.saitama.jp',
      'namegawa.saitama.jp',
      'niiza.saitama.jp',
      'ogano.saitama.jp',
      'ogawa.saitama.jp',
      'ogose.saitama.jp',
      'okegawa.saitama.jp',
      'omiya.saitama.jp',
      'otaki.saitama.jp',
      'ranzan.saitama.jp',
      'ryokami.saitama.jp',
      'saitama.saitama.jp',
      'sakado.saitama.jp',
      'satte.saitama.jp',
      'sayama.saitama.jp',
      'shiki.saitama.jp',
      'shiraoka.saitama.jp',
      'soka.saitama.jp',
      'sugito.saitama.jp',
      'toda.saitama.jp',
      'tokigawa.saitama.jp',
      'tokorozawa.saitama.jp',
      'tsurugashima.saitama.jp',
      'urawa.saitama.jp',
      'warabi.saitama.jp',
      'yashio.saitama.jp',
      'yokoze.saitama.jp',
      'yono.saitama.jp',
      'yorii.saitama.jp',
      'yoshida.saitama.jp',
      'yoshikawa.saitama.jp',
      'yoshimi.saitama.jp',
      'aisho.shiga.jp',
      'gamo.shiga.jp',
      'higashiomi.shiga.jp',
      'hikone.shiga.jp',
      'koka.shiga.jp',
      'konan.shiga.jp',
      'kosei.shiga.jp',
      'koto.shiga.jp',
      'kusatsu.shiga.jp',
      'maibara.shiga.jp',
      'moriyama.shiga.jp',
      'nagahama.shiga.jp',
      'nishiazai.shiga.jp',
      'notogawa.shiga.jp',
      'omihachiman.shiga.jp',
      'otsu.shiga.jp',
      'ritto.shiga.jp',
      'ryuoh.shiga.jp',
      'takashima.shiga.jp',
      'takatsuki.shiga.jp',
      'torahime.shiga.jp',
      'toyosato.shiga.jp',
      'yasu.shiga.jp',
      'akagi.shimane.jp',
      'ama.shimane.jp',
      'gotsu.shimane.jp',
      'hamada.shimane.jp',
      'higashiizumo.shimane.jp',
      'hikawa.shimane.jp',
      'hikimi.shimane.jp',
      'izumo.shimane.jp',
      'kakinoki.shimane.jp',
      'masuda.shimane.jp',
      'matsue.shimane.jp',
      'misato.shimane.jp',
      'nishinoshima.shimane.jp',
      'ohda.shimane.jp',
      'okinoshima.shimane.jp',
      'okuizumo.shimane.jp',
      'shimane.shimane.jp',
      'tamayu.shimane.jp',
      'tsuwano.shimane.jp',
      'unnan.shimane.jp',
      'yakumo.shimane.jp',
      'yasugi.shimane.jp',
      'yatsuka.shimane.jp',
      'arai.shizuoka.jp',
      'atami.shizuoka.jp',
      'fuji.shizuoka.jp',
      'fujieda.shizuoka.jp',
      'fujikawa.shizuoka.jp',
      'fujinomiya.shizuoka.jp',
      'fukuroi.shizuoka.jp',
      'gotemba.shizuoka.jp',
      'haibara.shizuoka.jp',
      'hamamatsu.shizuoka.jp',
      'higashiizu.shizuoka.jp',
      'ito.shizuoka.jp',
      'iwata.shizuoka.jp',
      'izu.shizuoka.jp',
      'izunokuni.shizuoka.jp',
      'kakegawa.shizuoka.jp',
      'kannami.shizuoka.jp',
      'kawanehon.shizuoka.jp',
      'kawazu.shizuoka.jp',
      'kikugawa.shizuoka.jp',
      'kosai.shizuoka.jp',
      'makinohara.shizuoka.jp',
      'matsuzaki.shizuoka.jp',
      'minamiizu.shizuoka.jp',
      'mishima.shizuoka.jp',
      'morimachi.shizuoka.jp',
      'nishiizu.shizuoka.jp',
      'numazu.shizuoka.jp',
      'omaezaki.shizuoka.jp',
      'shimada.shizuoka.jp',
      'shimizu.shizuoka.jp',
      'shimoda.shizuoka.jp',
      'shizuoka.shizuoka.jp',
      'susono.shizuoka.jp',
      'yaizu.shizuoka.jp',
      'yoshida.shizuoka.jp',
      'ashikaga.tochigi.jp',
      'bato.tochigi.jp',
      'haga.tochigi.jp',
      'ichikai.tochigi.jp',
      'iwafune.tochigi.jp',
      'kaminokawa.tochigi.jp',
      'kanuma.tochigi.jp',
      'karasuyama.tochigi.jp',
      'kuroiso.tochigi.jp',
      'mashiko.tochigi.jp',
      'mibu.tochigi.jp',
      'moka.tochigi.jp',
      'motegi.tochigi.jp',
      'nasu.tochigi.jp',
      'nasushiobara.tochigi.jp',
      'nikko.tochigi.jp',
      'nishikata.tochigi.jp',
      'nogi.tochigi.jp',
      'ohira.tochigi.jp',
      'ohtawara.tochigi.jp',
      'oyama.tochigi.jp',
      'sakura.tochigi.jp',
      'sano.tochigi.jp',
      'shimotsuke.tochigi.jp',
      'shioya.tochigi.jp',
      'takanezawa.tochigi.jp',
      'tochigi.tochigi.jp',
      'tsuga.tochigi.jp',
      'ujiie.tochigi.jp',
      'utsunomiya.tochigi.jp',
      'yaita.tochigi.jp',
      'aizumi.tokushima.jp',
      'anan.tokushima.jp',
      'ichiba.tokushima.jp',
      'itano.tokushima.jp',
      'kainan.tokushima.jp',
      'komatsushima.tokushima.jp',
      'matsushige.tokushima.jp',
      'mima.tokushima.jp',
      'minami.tokushima.jp',
      'miyoshi.tokushima.jp',
      'mugi.tokushima.jp',
      'nakagawa.tokushima.jp',
      'naruto.tokushima.jp',
      'sanagochi.tokushima.jp',
      'shishikui.tokushima.jp',
      'tokushima.tokushima.jp',
      'wajiki.tokushima.jp',
      'adachi.tokyo.jp',
      'akiruno.tokyo.jp',
      'akishima.tokyo.jp',
      'aogashima.tokyo.jp',
      'arakawa.tokyo.jp',
      'bunkyo.tokyo.jp',
      'chiyoda.tokyo.jp',
      'chofu.tokyo.jp',
      'chuo.tokyo.jp',
      'edogawa.tokyo.jp',
      'fuchu.tokyo.jp',
      'fussa.tokyo.jp',
      'hachijo.tokyo.jp',
      'hachioji.tokyo.jp',
      'hamura.tokyo.jp',
      'higashikurume.tokyo.jp',
      'higashimurayama.tokyo.jp',
      'higashiyamato.tokyo.jp',
      'hino.tokyo.jp',
      'hinode.tokyo.jp',
      'hinohara.tokyo.jp',
      'inagi.tokyo.jp',
      'itabashi.tokyo.jp',
      'katsushika.tokyo.jp',
      'kita.tokyo.jp',
      'kiyose.tokyo.jp',
      'kodaira.tokyo.jp',
      'koganei.tokyo.jp',
      'kokubunji.tokyo.jp',
      'komae.tokyo.jp',
      'koto.tokyo.jp',
      'kouzushima.tokyo.jp',
      'kunitachi.tokyo.jp',
      'machida.tokyo.jp',
      'meguro.tokyo.jp',
      'minato.tokyo.jp',
      'mitaka.tokyo.jp',
      'mizuho.tokyo.jp',
      'musashimurayama.tokyo.jp',
      'musashino.tokyo.jp',
      'nakano.tokyo.jp',
      'nerima.tokyo.jp',
      'ogasawara.tokyo.jp',
      'okutama.tokyo.jp',
      'ome.tokyo.jp',
      'oshima.tokyo.jp',
      'ota.tokyo.jp',
      'setagaya.tokyo.jp',
      'shibuya.tokyo.jp',
      'shinagawa.tokyo.jp',
      'shinjuku.tokyo.jp',
      'suginami.tokyo.jp',
      'sumida.tokyo.jp',
      'tachikawa.tokyo.jp',
      'taito.tokyo.jp',
      'tama.tokyo.jp',
      'toshima.tokyo.jp',
      'chizu.tottori.jp',
      'hino.tottori.jp',
      'kawahara.tottori.jp',
      'koge.tottori.jp',
      'kotoura.tottori.jp',
      'misasa.tottori.jp',
      'nanbu.tottori.jp',
      'nichinan.tottori.jp',
      'sakaiminato.tottori.jp',
      'tottori.tottori.jp',
      'wakasa.tottori.jp',
      'yazu.tottori.jp',
      'yonago.tottori.jp',
      'asahi.toyama.jp',
      'fuchu.toyama.jp',
      'fukumitsu.toyama.jp',
      'funahashi.toyama.jp',
      'himi.toyama.jp',
      'imizu.toyama.jp',
      'inami.toyama.jp',
      'johana.toyama.jp',
      'kamiichi.toyama.jp',
      'kurobe.toyama.jp',
      'nakaniikawa.toyama.jp',
      'namerikawa.toyama.jp',
      'nanto.toyama.jp',
      'nyuzen.toyama.jp',
      'oyabe.toyama.jp',
      'taira.toyama.jp',
      'takaoka.toyama.jp',
      'tateyama.toyama.jp',
      'toga.toyama.jp',
      'tonami.toyama.jp',
      'toyama.toyama.jp',
      'unazuki.toyama.jp',
      'uozu.toyama.jp',
      'yamada.toyama.jp',
      'arida.wakayama.jp',
      'aridagawa.wakayama.jp',
      'gobo.wakayama.jp',
      'hashimoto.wakayama.jp',
      'hidaka.wakayama.jp',
      'hirogawa.wakayama.jp',
      'inami.wakayama.jp',
      'iwade.wakayama.jp',
      'kainan.wakayama.jp',
      'kamitonda.wakayama.jp',
      'katsuragi.wakayama.jp',
      'kimino.wakayama.jp',
      'kinokawa.wakayama.jp',
      'kitayama.wakayama.jp',
      'koya.wakayama.jp',
      'koza.wakayama.jp',
      'kozagawa.wakayama.jp',
      'kudoyama.wakayama.jp',
      'kushimoto.wakayama.jp',
      'mihama.wakayama.jp',
      'misato.wakayama.jp',
      'nachikatsuura.wakayama.jp',
      'shingu.wakayama.jp',
      'shirahama.wakayama.jp',
      'taiji.wakayama.jp',
      'tanabe.wakayama.jp',
      'wakayama.wakayama.jp',
      'yuasa.wakayama.jp',
      'yura.wakayama.jp',
      'asahi.yamagata.jp',
      'funagata.yamagata.jp',
      'higashine.yamagata.jp',
      'iide.yamagata.jp',
      'kahoku.yamagata.jp',
      'kaminoyama.yamagata.jp',
      'kaneyama.yamagata.jp',
      'kawanishi.yamagata.jp',
      'mamurogawa.yamagata.jp',
      'mikawa.yamagata.jp',
      'murayama.yamagata.jp',
      'nagai.yamagata.jp',
      'nakayama.yamagata.jp',
      'nanyo.yamagata.jp',
      'nishikawa.yamagata.jp',
      'obanazawa.yamagata.jp',
      'oe.yamagata.jp',
      'oguni.yamagata.jp',
      'ohkura.yamagata.jp',
      'oishida.yamagata.jp',
      'sagae.yamagata.jp',
      'sakata.yamagata.jp',
      'sakegawa.yamagata.jp',
      'shinjo.yamagata.jp',
      'shirataka.yamagata.jp',
      'shonai.yamagata.jp',
      'takahata.yamagata.jp',
      'tendo.yamagata.jp',
      'tozawa.yamagata.jp',
      'tsuruoka.yamagata.jp',
      'yamagata.yamagata.jp',
      'yamanobe.yamagata.jp',
      'yonezawa.yamagata.jp',
      'yuza.yamagata.jp',
      'abu.yamaguchi.jp',
      'hagi.yamaguchi.jp',
      'hikari.yamaguchi.jp',
      'hofu.yamaguchi.jp',
      'iwakuni.yamaguchi.jp',
      'kudamatsu.yamaguchi.jp',
      'mitou.yamaguchi.jp',
      'nagato.yamaguchi.jp',
      'oshima.yamaguchi.jp',
      'shimonoseki.yamaguchi.jp',
      'shunan.yamaguchi.jp',
      'tabuse.yamaguchi.jp',
      'tokuyama.yamaguchi.jp',
      'toyota.yamaguchi.jp',
      'ube.yamaguchi.jp',
      'yuu.yamaguchi.jp',
      'chuo.yamanashi.jp',
      'doshi.yamanashi.jp',
      'fuefuki.yamanashi.jp',
      'fujikawa.yamanashi.jp',
      'fujikawaguchiko.yamanashi.jp',
      'fujiyoshida.yamanashi.jp',
      'hayakawa.yamanashi.jp',
      'hokuto.yamanashi.jp',
      'ichikawamisato.yamanashi.jp',
      'kai.yamanashi.jp',
      'kofu.yamanashi.jp',
      'koshu.yamanashi.jp',
      'kosuge.yamanashi.jp',
      'minami-alps.yamanashi.jp',
      'minobu.yamanashi.jp',
      'nakamichi.yamanashi.jp',
      'nanbu.yamanashi.jp',
      'narusawa.yamanashi.jp',
      'nirasaki.yamanashi.jp',
      'nishikatsura.yamanashi.jp',
      'oshino.yamanashi.jp',
      'otsuki.yamanashi.jp',
      'showa.yamanashi.jp',
      'tabayama.yamanashi.jp',
      'tsuru.yamanashi.jp',
      'uenohara.yamanashi.jp',
      'yamanakako.yamanashi.jp',
      'yamanashi.yamanashi.jp',
      'ke',
      'ac.ke',
      'co.ke',
      'go.ke',
      'info.ke',
      'me.ke',
      'mobi.ke',
      'ne.ke',
      'or.ke',
      'sc.ke',
      'kg',
      'org.kg',
      'net.kg',
      'com.kg',
      'edu.kg',
      'gov.kg',
      'mil.kg',
      '*.kh',
      'ki',
      'edu.ki',
      'biz.ki',
      'net.ki',
      'org.ki',
      'gov.ki',
      'info.ki',
      'com.ki',
      'km',
      'org.km',
      'nom.km',
      'gov.km',
      'prd.km',
      'tm.km',
      'edu.km',
      'mil.km',
      'ass.km',
      'com.km',
      'coop.km',
      'asso.km',
      'presse.km',
      'medecin.km',
      'notaires.km',
      'pharmaciens.km',
      'veterinaire.km',
      'gouv.km',
      'kn',
      'net.kn',
      'org.kn',
      'edu.kn',
      'gov.kn',
      'kp',
      'com.kp',
      'edu.kp',
      'gov.kp',
      'org.kp',
      'rep.kp',
      'tra.kp',
      'kr',
      'ac.kr',
      'co.kr',
      'es.kr',
      'go.kr',
      'hs.kr',
      'kg.kr',
      'mil.kr',
      'ms.kr',
      'ne.kr',
      'or.kr',
      'pe.kr',
      're.kr',
      'sc.kr',
      'busan.kr',
      'chungbuk.kr',
      'chungnam.kr',
      'daegu.kr',
      'daejeon.kr',
      'gangwon.kr',
      'gwangju.kr',
      'gyeongbuk.kr',
      'gyeonggi.kr',
      'gyeongnam.kr',
      'incheon.kr',
      'jeju.kr',
      'jeonbuk.kr',
      'jeonnam.kr',
      'seoul.kr',
      'ulsan.kr',
      'kw',
      'com.kw',
      'edu.kw',
      'emb.kw',
      'gov.kw',
      'ind.kw',
      'net.kw',
      'org.kw',
      'ky',
      'edu.ky',
      'gov.ky',
      'com.ky',
      'org.ky',
      'net.ky',
      'kz',
      'org.kz',
      'edu.kz',
      'net.kz',
      'gov.kz',
      'mil.kz',
      'com.kz',
      'la',
      'int.la',
      'net.la',
      'info.la',
      'edu.la',
      'gov.la',
      'per.la',
      'com.la',
      'org.la',
      'lb',
      'com.lb',
      'edu.lb',
      'gov.lb',
      'net.lb',
      'org.lb',
      'lc',
      'com.lc',
      'net.lc',
      'co.lc',
      'org.lc',
      'edu.lc',
      'gov.lc',
      'li',
      'lk',
      'gov.lk',
      'sch.lk',
      'net.lk',
      'int.lk',
      'com.lk',
      'org.lk',
      'edu.lk',
      'ngo.lk',
      'soc.lk',
      'web.lk',
      'ltd.lk',
      'assn.lk',
      'grp.lk',
      'hotel.lk',
      'ac.lk',
      'lr',
      'com.lr',
      'edu.lr',
      'gov.lr',
      'org.lr',
      'net.lr',
      'ls',
      'ac.ls',
      'biz.ls',
      'co.ls',
      'edu.ls',
      'gov.ls',
      'info.ls',
      'net.ls',
      'org.ls',
      'sc.ls',
      'lt',
      'gov.lt',
      'lu',
      'lv',
      'com.lv',
      'edu.lv',
      'gov.lv',
      'org.lv',
      'mil.lv',
      'id.lv',
      'net.lv',
      'asn.lv',
      'conf.lv',
      'ly',
      'com.ly',
      'net.ly',
      'gov.ly',
      'plc.ly',
      'edu.ly',
      'sch.ly',
      'med.ly',
      'org.ly',
      'id.ly',
      'ma',
      'co.ma',
      'net.ma',
      'gov.ma',
      'org.ma',
      'ac.ma',
      'press.ma',
      'mc',
      'tm.mc',
      'asso.mc',
      'md',
      'me',
      'co.me',
      'net.me',
      'org.me',
      'edu.me',
      'ac.me',
      'gov.me',
      'its.me',
      'priv.me',
      'mg',
      'org.mg',
      'nom.mg',
      'gov.mg',
      'prd.mg',
      'tm.mg',
      'edu.mg',
      'mil.mg',
      'com.mg',
      'co.mg',
      'mh',
      'mil',
      'mk',
      'com.mk',
      'org.mk',
      'net.mk',
      'edu.mk',
      'gov.mk',
      'inf.mk',
      'name.mk',
      'ml',
      'com.ml',
      'edu.ml',
      'gouv.ml',
      'gov.ml',
      'net.ml',
      'org.ml',
      'presse.ml',
      '*.mm',
      'mn',
      'gov.mn',
      'edu.mn',
      'org.mn',
      'mo',
      'com.mo',
      'net.mo',
      'org.mo',
      'edu.mo',
      'gov.mo',
      'mobi',
      'mp',
      'mq',
      'mr',
      'gov.mr',
      'ms',
      'com.ms',
      'edu.ms',
      'gov.ms',
      'net.ms',
      'org.ms',
      'mt',
      'com.mt',
      'edu.mt',
      'net.mt',
      'org.mt',
      'mu',
      'com.mu',
      'net.mu',
      'org.mu',
      'gov.mu',
      'ac.mu',
      'co.mu',
      'or.mu',
      'museum',
      'academy.museum',
      'agriculture.museum',
      'air.museum',
      'airguard.museum',
      'alabama.museum',
      'alaska.museum',
      'amber.museum',
      'ambulance.museum',
      'american.museum',
      'americana.museum',
      'americanantiques.museum',
      'americanart.museum',
      'amsterdam.museum',
      'and.museum',
      'annefrank.museum',
      'anthro.museum',
      'anthropology.museum',
      'antiques.museum',
      'aquarium.museum',
      'arboretum.museum',
      'archaeological.museum',
      'archaeology.museum',
      'architecture.museum',
      'art.museum',
      'artanddesign.museum',
      'artcenter.museum',
      'artdeco.museum',
      'arteducation.museum',
      'artgallery.museum',
      'arts.museum',
      'artsandcrafts.museum',
      'asmatart.museum',
      'assassination.museum',
      'assisi.museum',
      'association.museum',
      'astronomy.museum',
      'atlanta.museum',
      'austin.museum',
      'australia.museum',
      'automotive.museum',
      'aviation.museum',
      'axis.museum',
      'badajoz.museum',
      'baghdad.museum',
      'bahn.museum',
      'bale.museum',
      'baltimore.museum',
      'barcelona.museum',
      'baseball.museum',
      'basel.museum',
      'baths.museum',
      'bauern.museum',
      'beauxarts.museum',
      'beeldengeluid.museum',
      'bellevue.museum',
      'bergbau.museum',
      'berkeley.museum',
      'berlin.museum',
      'bern.museum',
      'bible.museum',
      'bilbao.museum',
      'bill.museum',
      'birdart.museum',
      'birthplace.museum',
      'bonn.museum',
      'boston.museum',
      'botanical.museum',
      'botanicalgarden.museum',
      'botanicgarden.museum',
      'botany.museum',
      'brandywinevalley.museum',
      'brasil.museum',
      'bristol.museum',
      'british.museum',
      'britishcolumbia.museum',
      'broadcast.museum',
      'brunel.museum',
      'brussel.museum',
      'brussels.museum',
      'bruxelles.museum',
      'building.museum',
      'burghof.museum',
      'bus.museum',
      'bushey.museum',
      'cadaques.museum',
      'california.museum',
      'cambridge.museum',
      'can.museum',
      'canada.museum',
      'capebreton.museum',
      'carrier.museum',
      'cartoonart.museum',
      'casadelamoneda.museum',
      'castle.museum',
      'castres.museum',
      'celtic.museum',
      'center.museum',
      'chattanooga.museum',
      'cheltenham.museum',
      'chesapeakebay.museum',
      'chicago.museum',
      'children.museum',
      'childrens.museum',
      'childrensgarden.museum',
      'chiropractic.museum',
      'chocolate.museum',
      'christiansburg.museum',
      'cincinnati.museum',
      'cinema.museum',
      'circus.museum',
      'civilisation.museum',
      'civilization.museum',
      'civilwar.museum',
      'clinton.museum',
      'clock.museum',
      'coal.museum',
      'coastaldefence.museum',
      'cody.museum',
      'coldwar.museum',
      'collection.museum',
      'colonialwilliamsburg.museum',
      'coloradoplateau.museum',
      'columbia.museum',
      'columbus.museum',
      'communication.museum',
      'communications.museum',
      'community.museum',
      'computer.museum',
      'computerhistory.museum',
      'comunicações.museum',
      'contemporary.museum',
      'contemporaryart.museum',
      'convent.museum',
      'copenhagen.museum',
      'corporation.museum',
      'correios-e-telecomunicações.museum',
      'corvette.museum',
      'costume.museum',
      'countryestate.museum',
      'county.museum',
      'crafts.museum',
      'cranbrook.museum',
      'creation.museum',
      'cultural.museum',
      'culturalcenter.museum',
      'culture.museum',
      'cyber.museum',
      'cymru.museum',
      'dali.museum',
      'dallas.museum',
      'database.museum',
      'ddr.museum',
      'decorativearts.museum',
      'delaware.museum',
      'delmenhorst.museum',
      'denmark.museum',
      'depot.museum',
      'design.museum',
      'detroit.museum',
      'dinosaur.museum',
      'discovery.museum',
      'dolls.museum',
      'donostia.museum',
      'durham.museum',
      'eastafrica.museum',
      'eastcoast.museum',
      'education.museum',
      'educational.museum',
      'egyptian.museum',
      'eisenbahn.museum',
      'elburg.museum',
      'elvendrell.museum',
      'embroidery.museum',
      'encyclopedic.museum',
      'england.museum',
      'entomology.museum',
      'environment.museum',
      'environmentalconservation.museum',
      'epilepsy.museum',
      'essex.museum',
      'estate.museum',
      'ethnology.museum',
      'exeter.museum',
      'exhibition.museum',
      'family.museum',
      'farm.museum',
      'farmequipment.museum',
      'farmers.museum',
      'farmstead.museum',
      'field.museum',
      'figueres.museum',
      'filatelia.museum',
      'film.museum',
      'fineart.museum',
      'finearts.museum',
      'finland.museum',
      'flanders.museum',
      'florida.museum',
      'force.museum',
      'fortmissoula.museum',
      'fortworth.museum',
      'foundation.museum',
      'francaise.museum',
      'frankfurt.museum',
      'franziskaner.museum',
      'freemasonry.museum',
      'freiburg.museum',
      'fribourg.museum',
      'frog.museum',
      'fundacio.museum',
      'furniture.museum',
      'gallery.museum',
      'garden.museum',
      'gateway.museum',
      'geelvinck.museum',
      'gemological.museum',
      'geology.museum',
      'georgia.museum',
      'giessen.museum',
      'glas.museum',
      'glass.museum',
      'gorge.museum',
      'grandrapids.museum',
      'graz.museum',
      'guernsey.museum',
      'halloffame.museum',
      'hamburg.museum',
      'handson.museum',
      'harvestcelebration.museum',
      'hawaii.museum',
      'health.museum',
      'heimatunduhren.museum',
      'hellas.museum',
      'helsinki.museum',
      'hembygdsforbund.museum',
      'heritage.museum',
      'histoire.museum',
      'historical.museum',
      'historicalsociety.museum',
      'historichouses.museum',
      'historisch.museum',
      'historisches.museum',
      'history.museum',
      'historyofscience.museum',
      'horology.museum',
      'house.museum',
      'humanities.museum',
      'illustration.museum',
      'imageandsound.museum',
      'indian.museum',
      'indiana.museum',
      'indianapolis.museum',
      'indianmarket.museum',
      'intelligence.museum',
      'interactive.museum',
      'iraq.museum',
      'iron.museum',
      'isleofman.museum',
      'jamison.museum',
      'jefferson.museum',
      'jerusalem.museum',
      'jewelry.museum',
      'jewish.museum',
      'jewishart.museum',
      'jfk.museum',
      'journalism.museum',
      'judaica.museum',
      'judygarland.museum',
      'juedisches.museum',
      'juif.museum',
      'karate.museum',
      'karikatur.museum',
      'kids.museum',
      'koebenhavn.museum',
      'koeln.museum',
      'kunst.museum',
      'kunstsammlung.museum',
      'kunstunddesign.museum',
      'labor.museum',
      'labour.museum',
      'lajolla.museum',
      'lancashire.museum',
      'landes.museum',
      'lans.museum',
      'läns.museum',
      'larsson.museum',
      'lewismiller.museum',
      'lincoln.museum',
      'linz.museum',
      'living.museum',
      'livinghistory.museum',
      'localhistory.museum',
      'london.museum',
      'losangeles.museum',
      'louvre.museum',
      'loyalist.museum',
      'lucerne.museum',
      'luxembourg.museum',
      'luzern.museum',
      'mad.museum',
      'madrid.museum',
      'mallorca.museum',
      'manchester.museum',
      'mansion.museum',
      'mansions.museum',
      'manx.museum',
      'marburg.museum',
      'maritime.museum',
      'maritimo.museum',
      'maryland.museum',
      'marylhurst.museum',
      'media.museum',
      'medical.museum',
      'medizinhistorisches.museum',
      'meeres.museum',
      'memorial.museum',
      'mesaverde.museum',
      'michigan.museum',
      'midatlantic.museum',
      'military.museum',
      'mill.museum',
      'miners.museum',
      'mining.museum',
      'minnesota.museum',
      'missile.museum',
      'missoula.museum',
      'modern.museum',
      'moma.museum',
      'money.museum',
      'monmouth.museum',
      'monticello.museum',
      'montreal.museum',
      'moscow.museum',
      'motorcycle.museum',
      'muenchen.museum',
      'muenster.museum',
      'mulhouse.museum',
      'muncie.museum',
      'museet.museum',
      'museumcenter.museum',
      'museumvereniging.museum',
      'music.museum',
      'national.museum',
      'nationalfirearms.museum',
      'nationalheritage.museum',
      'nativeamerican.museum',
      'naturalhistory.museum',
      'naturalhistorymuseum.museum',
      'naturalsciences.museum',
      'nature.museum',
      'naturhistorisches.museum',
      'natuurwetenschappen.museum',
      'naumburg.museum',
      'naval.museum',
      'nebraska.museum',
      'neues.museum',
      'newhampshire.museum',
      'newjersey.museum',
      'newmexico.museum',
      'newport.museum',
      'newspaper.museum',
      'newyork.museum',
      'niepce.museum',
      'norfolk.museum',
      'north.museum',
      'nrw.museum',
      'nyc.museum',
      'nyny.museum',
      'oceanographic.museum',
      'oceanographique.museum',
      'omaha.museum',
      'online.museum',
      'ontario.museum',
      'openair.museum',
      'oregon.museum',
      'oregontrail.museum',
      'otago.museum',
      'oxford.museum',
      'pacific.museum',
      'paderborn.museum',
      'palace.museum',
      'paleo.museum',
      'palmsprings.museum',
      'panama.museum',
      'paris.museum',
      'pasadena.museum',
      'pharmacy.museum',
      'philadelphia.museum',
      'philadelphiaarea.museum',
      'philately.museum',
      'phoenix.museum',
      'photography.museum',
      'pilots.museum',
      'pittsburgh.museum',
      'planetarium.museum',
      'plantation.museum',
      'plants.museum',
      'plaza.museum',
      'portal.museum',
      'portland.museum',
      'portlligat.museum',
      'posts-and-telecommunications.museum',
      'preservation.museum',
      'presidio.museum',
      'press.museum',
      'project.museum',
      'public.museum',
      'pubol.museum',
      'quebec.museum',
      'railroad.museum',
      'railway.museum',
      'research.museum',
      'resistance.museum',
      'riodejaneiro.museum',
      'rochester.museum',
      'rockart.museum',
      'roma.museum',
      'russia.museum',
      'saintlouis.museum',
      'salem.museum',
      'salvadordali.museum',
      'salzburg.museum',
      'sandiego.museum',
      'sanfrancisco.museum',
      'santabarbara.museum',
      'santacruz.museum',
      'santafe.museum',
      'saskatchewan.museum',
      'satx.museum',
      'savannahga.museum',
      'schlesisches.museum',
      'schoenbrunn.museum',
      'schokoladen.museum',
      'school.museum',
      'schweiz.museum',
      'science.museum',
      'scienceandhistory.museum',
      'scienceandindustry.museum',
      'sciencecenter.museum',
      'sciencecenters.museum',
      'science-fiction.museum',
      'sciencehistory.museum',
      'sciences.museum',
      'sciencesnaturelles.museum',
      'scotland.museum',
      'seaport.museum',
      'settlement.museum',
      'settlers.museum',
      'shell.museum',
      'sherbrooke.museum',
      'sibenik.museum',
      'silk.museum',
      'ski.museum',
      'skole.museum',
      'society.museum',
      'sologne.museum',
      'soundandvision.museum',
      'southcarolina.museum',
      'southwest.museum',
      'space.museum',
      'spy.museum',
      'square.museum',
      'stadt.museum',
      'stalbans.museum',
      'starnberg.museum',
      'state.museum',
      'stateofdelaware.museum',
      'station.museum',
      'steam.museum',
      'steiermark.museum',
      'stjohn.museum',
      'stockholm.museum',
      'stpetersburg.museum',
      'stuttgart.museum',
      'suisse.museum',
      'surgeonshall.museum',
      'surrey.museum',
      'svizzera.museum',
      'sweden.museum',
      'sydney.museum',
      'tank.museum',
      'tcm.museum',
      'technology.museum',
      'telekommunikation.museum',
      'television.museum',
      'texas.museum',
      'textile.museum',
      'theater.museum',
      'time.museum',
      'timekeeping.museum',
      'topology.museum',
      'torino.museum',
      'touch.museum',
      'town.museum',
      'transport.museum',
      'tree.museum',
      'trolley.museum',
      'trust.museum',
      'trustee.museum',
      'uhren.museum',
      'ulm.museum',
      'undersea.museum',
      'university.museum',
      'usa.museum',
      'usantiques.museum',
      'usarts.museum',
      'uscountryestate.museum',
      'usculture.museum',
      'usdecorativearts.museum',
      'usgarden.museum',
      'ushistory.museum',
      'ushuaia.museum',
      'uslivinghistory.museum',
      'utah.museum',
      'uvic.museum',
      'valley.museum',
      'vantaa.museum',
      'versailles.museum',
      'viking.museum',
      'village.museum',
      'virginia.museum',
      'virtual.museum',
      'virtuel.museum',
      'vlaanderen.museum',
      'volkenkunde.museum',
      'wales.museum',
      'wallonie.museum',
      'war.museum',
      'washingtondc.museum',
      'watchandclock.museum',
      'watch-and-clock.museum',
      'western.museum',
      'westfalen.museum',
      'whaling.museum',
      'wildlife.museum',
      'williamsburg.museum',
      'windmill.museum',
      'workshop.museum',
      'york.museum',
      'yorkshire.museum',
      'yosemite.museum',
      'youth.museum',
      'zoological.museum',
      'zoology.museum',
      'ירושלים.museum',
      'иком.museum',
      'mv',
      'aero.mv',
      'biz.mv',
      'com.mv',
      'coop.mv',
      'edu.mv',
      'gov.mv',
      'info.mv',
      'int.mv',
      'mil.mv',
      'museum.mv',
      'name.mv',
      'net.mv',
      'org.mv',
      'pro.mv',
      'mw',
      'ac.mw',
      'biz.mw',
      'co.mw',
      'com.mw',
      'coop.mw',
      'edu.mw',
      'gov.mw',
      'int.mw',
      'museum.mw',
      'net.mw',
      'org.mw',
      'mx',
      'com.mx',
      'org.mx',
      'gob.mx',
      'edu.mx',
      'net.mx',
      'my',
      'com.my',
      'net.my',
      'org.my',
      'gov.my',
      'edu.my',
      'mil.my',
      'name.my',
      'mz',
      'ac.mz',
      'adv.mz',
      'co.mz',
      'edu.mz',
      'gov.mz',
      'mil.mz',
      'net.mz',
      'org.mz',
      'na',
      'info.na',
      'pro.na',
      'name.na',
      'school.na',
      'or.na',
      'dr.na',
      'us.na',
      'mx.na',
      'ca.na',
      'in.na',
      'cc.na',
      'tv.na',
      'ws.na',
      'mobi.na',
      'co.na',
      'com.na',
      'org.na',
      'name',
      'nc',
      'asso.nc',
      'nom.nc',
      'ne',
      'net',
      'nf',
      'com.nf',
      'net.nf',
      'per.nf',
      'rec.nf',
      'web.nf',
      'arts.nf',
      'firm.nf',
      'info.nf',
      'other.nf',
      'store.nf',
      'ng',
      'com.ng',
      'edu.ng',
      'gov.ng',
      'i.ng',
      'mil.ng',
      'mobi.ng',
      'name.ng',
      'net.ng',
      'org.ng',
      'sch.ng',
      'ni',
      'ac.ni',
      'biz.ni',
      'co.ni',
      'com.ni',
      'edu.ni',
      'gob.ni',
      'in.ni',
      'info.ni',
      'int.ni',
      'mil.ni',
      'net.ni',
      'nom.ni',
      'org.ni',
      'web.ni',
      'nl',
      'no',
      'fhs.no',
      'vgs.no',
      'fylkesbibl.no',
      'folkebibl.no',
      'museum.no',
      'idrett.no',
      'priv.no',
      'mil.no',
      'stat.no',
      'dep.no',
      'kommune.no',
      'herad.no',
      'aa.no',
      'ah.no',
      'bu.no',
      'fm.no',
      'hl.no',
      'hm.no',
      'jan-mayen.no',
      'mr.no',
      'nl.no',
      'nt.no',
      'of.no',
      'ol.no',
      'oslo.no',
      'rl.no',
      'sf.no',
      'st.no',
      'svalbard.no',
      'tm.no',
      'tr.no',
      'va.no',
      'vf.no',
      'gs.aa.no',
      'gs.ah.no',
      'gs.bu.no',
      'gs.fm.no',
      'gs.hl.no',
      'gs.hm.no',
      'gs.jan-mayen.no',
      'gs.mr.no',
      'gs.nl.no',
      'gs.nt.no',
      'gs.of.no',
      'gs.ol.no',
      'gs.oslo.no',
      'gs.rl.no',
      'gs.sf.no',
      'gs.st.no',
      'gs.svalbard.no',
      'gs.tm.no',
      'gs.tr.no',
      'gs.va.no',
      'gs.vf.no',
      'akrehamn.no',
      'åkrehamn.no',
      'algard.no',
      'ålgård.no',
      'arna.no',
      'brumunddal.no',
      'bryne.no',
      'bronnoysund.no',
      'brønnøysund.no',
      'drobak.no',
      'drøbak.no',
      'egersund.no',
      'fetsund.no',
      'floro.no',
      'florø.no',
      'fredrikstad.no',
      'hokksund.no',
      'honefoss.no',
      'hønefoss.no',
      'jessheim.no',
      'jorpeland.no',
      'jørpeland.no',
      'kirkenes.no',
      'kopervik.no',
      'krokstadelva.no',
      'langevag.no',
      'langevåg.no',
      'leirvik.no',
      'mjondalen.no',
      'mjøndalen.no',
      'mo-i-rana.no',
      'mosjoen.no',
      'mosjøen.no',
      'nesoddtangen.no',
      'orkanger.no',
      'osoyro.no',
      'osøyro.no',
      'raholt.no',
      'råholt.no',
      'sandnessjoen.no',
      'sandnessjøen.no',
      'skedsmokorset.no',
      'slattum.no',
      'spjelkavik.no',
      'stathelle.no',
      'stavern.no',
      'stjordalshalsen.no',
      'stjørdalshalsen.no',
      'tananger.no',
      'tranby.no',
      'vossevangen.no',
      'afjord.no',
      'åfjord.no',
      'agdenes.no',
      'al.no',
      'ål.no',
      'alesund.no',
      'ålesund.no',
      'alstahaug.no',
      'alta.no',
      'áltá.no',
      'alaheadju.no',
      'álaheadju.no',
      'alvdal.no',
      'amli.no',
      'åmli.no',
      'amot.no',
      'åmot.no',
      'andebu.no',
      'andoy.no',
      'andøy.no',
      'andasuolo.no',
      'ardal.no',
      'årdal.no',
      'aremark.no',
      'arendal.no',
      'ås.no',
      'aseral.no',
      'åseral.no',
      'asker.no',
      'askim.no',
      'askvoll.no',
      'askoy.no',
      'askøy.no',
      'asnes.no',
      'åsnes.no',
      'audnedaln.no',
      'aukra.no',
      'aure.no',
      'aurland.no',
      'aurskog-holand.no',
      'aurskog-høland.no',
      'austevoll.no',
      'austrheim.no',
      'averoy.no',
      'averøy.no',
      'balestrand.no',
      'ballangen.no',
      'balat.no',
      'bálát.no',
      'balsfjord.no',
      'bahccavuotna.no',
      'báhccavuotna.no',
      'bamble.no',
      'bardu.no',
      'beardu.no',
      'beiarn.no',
      'bajddar.no',
      'bájddar.no',
      'baidar.no',
      'báidár.no',
      'berg.no',
      'bergen.no',
      'berlevag.no',
      'berlevåg.no',
      'bearalvahki.no',
      'bearalváhki.no',
      'bindal.no',
      'birkenes.no',
      'bjarkoy.no',
      'bjarkøy.no',
      'bjerkreim.no',
      'bjugn.no',
      'bodo.no',
      'bodø.no',
      'badaddja.no',
      'bådåddjå.no',
      'budejju.no',
      'bokn.no',
      'bremanger.no',
      'bronnoy.no',
      'brønnøy.no',
      'bygland.no',
      'bykle.no',
      'barum.no',
      'bærum.no',
      'bo.telemark.no',
      'bø.telemark.no',
      'bo.nordland.no',
      'bø.nordland.no',
      'bievat.no',
      'bievát.no',
      'bomlo.no',
      'bømlo.no',
      'batsfjord.no',
      'båtsfjord.no',
      'bahcavuotna.no',
      'báhcavuotna.no',
      'dovre.no',
      'drammen.no',
      'drangedal.no',
      'dyroy.no',
      'dyrøy.no',
      'donna.no',
      'dønna.no',
      'eid.no',
      'eidfjord.no',
      'eidsberg.no',
      'eidskog.no',
      'eidsvoll.no',
      'eigersund.no',
      'elverum.no',
      'enebakk.no',
      'engerdal.no',
      'etne.no',
      'etnedal.no',
      'evenes.no',
      'evenassi.no',
      'evenášši.no',
      'evje-og-hornnes.no',
      'farsund.no',
      'fauske.no',
      'fuossko.no',
      'fuoisku.no',
      'fedje.no',
      'fet.no',
      'finnoy.no',
      'finnøy.no',
      'fitjar.no',
      'fjaler.no',
      'fjell.no',
      'flakstad.no',
      'flatanger.no',
      'flekkefjord.no',
      'flesberg.no',
      'flora.no',
      'fla.no',
      'flå.no',
      'folldal.no',
      'forsand.no',
      'fosnes.no',
      'frei.no',
      'frogn.no',
      'froland.no',
      'frosta.no',
      'frana.no',
      'fræna.no',
      'froya.no',
      'frøya.no',
      'fusa.no',
      'fyresdal.no',
      'forde.no',
      'førde.no',
      'gamvik.no',
      'gangaviika.no',
      'gáŋgaviika.no',
      'gaular.no',
      'gausdal.no',
      'gildeskal.no',
      'gildeskål.no',
      'giske.no',
      'gjemnes.no',
      'gjerdrum.no',
      'gjerstad.no',
      'gjesdal.no',
      'gjovik.no',
      'gjøvik.no',
      'gloppen.no',
      'gol.no',
      'gran.no',
      'grane.no',
      'granvin.no',
      'gratangen.no',
      'grimstad.no',
      'grong.no',
      'kraanghke.no',
      'kråanghke.no',
      'grue.no',
      'gulen.no',
      'hadsel.no',
      'halden.no',
      'halsa.no',
      'hamar.no',
      'hamaroy.no',
      'habmer.no',
      'hábmer.no',
      'hapmir.no',
      'hápmir.no',
      'hammerfest.no',
      'hammarfeasta.no',
      'hámmárfeasta.no',
      'haram.no',
      'hareid.no',
      'harstad.no',
      'hasvik.no',
      'aknoluokta.no',
      'ákŋoluokta.no',
      'hattfjelldal.no',
      'aarborte.no',
      'haugesund.no',
      'hemne.no',
      'hemnes.no',
      'hemsedal.no',
      'heroy.more-og-romsdal.no',
      'herøy.møre-og-romsdal.no',
      'heroy.nordland.no',
      'herøy.nordland.no',
      'hitra.no',
      'hjartdal.no',
      'hjelmeland.no',
      'hobol.no',
      'hobøl.no',
      'hof.no',
      'hol.no',
      'hole.no',
      'holmestrand.no',
      'holtalen.no',
      'holtålen.no',
      'hornindal.no',
      'horten.no',
      'hurdal.no',
      'hurum.no',
      'hvaler.no',
      'hyllestad.no',
      'hagebostad.no',
      'hægebostad.no',
      'hoyanger.no',
      'høyanger.no',
      'hoylandet.no',
      'høylandet.no',
      'ha.no',
      'hå.no',
      'ibestad.no',
      'inderoy.no',
      'inderøy.no',
      'iveland.no',
      'jevnaker.no',
      'jondal.no',
      'jolster.no',
      'jølster.no',
      'karasjok.no',
      'karasjohka.no',
      'kárášjohka.no',
      'karlsoy.no',
      'galsa.no',
      'gálsá.no',
      'karmoy.no',
      'karmøy.no',
      'kautokeino.no',
      'guovdageaidnu.no',
      'klepp.no',
      'klabu.no',
      'klæbu.no',
      'kongsberg.no',
      'kongsvinger.no',
      'kragero.no',
      'kragerø.no',
      'kristiansand.no',
      'kristiansund.no',
      'krodsherad.no',
      'krødsherad.no',
      'kvalsund.no',
      'rahkkeravju.no',
      'ráhkkerávju.no',
      'kvam.no',
      'kvinesdal.no',
      'kvinnherad.no',
      'kviteseid.no',
      'kvitsoy.no',
      'kvitsøy.no',
      'kvafjord.no',
      'kvæfjord.no',
      'giehtavuoatna.no',
      'kvanangen.no',
      'kvænangen.no',
      'navuotna.no',
      'návuotna.no',
      'kafjord.no',
      'kåfjord.no',
      'gaivuotna.no',
      'gáivuotna.no',
      'larvik.no',
      'lavangen.no',
      'lavagis.no',
      'loabat.no',
      'loabát.no',
      'lebesby.no',
      'davvesiida.no',
      'leikanger.no',
      'leirfjord.no',
      'leka.no',
      'leksvik.no',
      'lenvik.no',
      'leangaviika.no',
      'leaŋgaviika.no',
      'lesja.no',
      'levanger.no',
      'lier.no',
      'lierne.no',
      'lillehammer.no',
      'lillesand.no',
      'lindesnes.no',
      'lindas.no',
      'lindås.no',
      'lom.no',
      'loppa.no',
      'lahppi.no',
      'láhppi.no',
      'lund.no',
      'lunner.no',
      'luroy.no',
      'lurøy.no',
      'luster.no',
      'lyngdal.no',
      'lyngen.no',
      'ivgu.no',
      'lardal.no',
      'lerdal.no',
      'lærdal.no',
      'lodingen.no',
      'lødingen.no',
      'lorenskog.no',
      'lørenskog.no',
      'loten.no',
      'løten.no',
      'malvik.no',
      'masoy.no',
      'måsøy.no',
      'muosat.no',
      'muosát.no',
      'mandal.no',
      'marker.no',
      'marnardal.no',
      'masfjorden.no',
      'meland.no',
      'meldal.no',
      'melhus.no',
      'meloy.no',
      'meløy.no',
      'meraker.no',
      'meråker.no',
      'moareke.no',
      'moåreke.no',
      'midsund.no',
      'midtre-gauldal.no',
      'modalen.no',
      'modum.no',
      'molde.no',
      'moskenes.no',
      'moss.no',
      'mosvik.no',
      'malselv.no',
      'målselv.no',
      'malatvuopmi.no',
      'málatvuopmi.no',
      'namdalseid.no',
      'aejrie.no',
      'namsos.no',
      'namsskogan.no',
      'naamesjevuemie.no',
      'nååmesjevuemie.no',
      'laakesvuemie.no',
      'nannestad.no',
      'narvik.no',
      'narviika.no',
      'naustdal.no',
      'nedre-eiker.no',
      'nes.akershus.no',
      'nes.buskerud.no',
      'nesna.no',
      'nesodden.no',
      'nesseby.no',
      'unjarga.no',
      'unjárga.no',
      'nesset.no',
      'nissedal.no',
      'nittedal.no',
      'nord-aurdal.no',
      'nord-fron.no',
      'nord-odal.no',
      'norddal.no',
      'nordkapp.no',
      'davvenjarga.no',
      'davvenjárga.no',
      'nordre-land.no',
      'nordreisa.no',
      'raisa.no',
      'ráisa.no',
      'nore-og-uvdal.no',
      'notodden.no',
      'naroy.no',
      'nærøy.no',
      'notteroy.no',
      'nøtterøy.no',
      'odda.no',
      'oksnes.no',
      'øksnes.no',
      'oppdal.no',
      'oppegard.no',
      'oppegård.no',
      'orkdal.no',
      'orland.no',
      'ørland.no',
      'orskog.no',
      'ørskog.no',
      'orsta.no',
      'ørsta.no',
      'os.hedmark.no',
      'os.hordaland.no',
      'osen.no',
      'osteroy.no',
      'osterøy.no',
      'ostre-toten.no',
      'østre-toten.no',
      'overhalla.no',
      'ovre-eiker.no',
      'øvre-eiker.no',
      'oyer.no',
      'øyer.no',
      'oygarden.no',
      'øygarden.no',
      'oystre-slidre.no',
      'øystre-slidre.no',
      'porsanger.no',
      'porsangu.no',
      'porsáŋgu.no',
      'porsgrunn.no',
      'radoy.no',
      'radøy.no',
      'rakkestad.no',
      'rana.no',
      'ruovat.no',
      'randaberg.no',
      'rauma.no',
      'rendalen.no',
      'rennebu.no',
      'rennesoy.no',
      'rennesøy.no',
      'rindal.no',
      'ringebu.no',
      'ringerike.no',
      'ringsaker.no',
      'rissa.no',
      'risor.no',
      'risør.no',
      'roan.no',
      'rollag.no',
      'rygge.no',
      'ralingen.no',
      'rælingen.no',
      'rodoy.no',
      'rødøy.no',
      'romskog.no',
      'rømskog.no',
      'roros.no',
      'røros.no',
      'rost.no',
      'røst.no',
      'royken.no',
      'røyken.no',
      'royrvik.no',
      'røyrvik.no',
      'rade.no',
      'råde.no',
      'salangen.no',
      'siellak.no',
      'saltdal.no',
      'salat.no',
      'sálát.no',
      'sálat.no',
      'samnanger.no',
      'sande.more-og-romsdal.no',
      'sande.møre-og-romsdal.no',
      'sande.vestfold.no',
      'sandefjord.no',
      'sandnes.no',
      'sandoy.no',
      'sandøy.no',
      'sarpsborg.no',
      'sauda.no',
      'sauherad.no',
      'sel.no',
      'selbu.no',
      'selje.no',
      'seljord.no',
      'sigdal.no',
      'siljan.no',
      'sirdal.no',
      'skaun.no',
      'skedsmo.no',
      'ski.no',
      'skien.no',
      'skiptvet.no',
      'skjervoy.no',
      'skjervøy.no',
      'skierva.no',
      'skiervá.no',
      'skjak.no',
      'skjåk.no',
      'skodje.no',
      'skanland.no',
      'skånland.no',
      'skanit.no',
      'skánit.no',
      'smola.no',
      'smøla.no',
      'snillfjord.no',
      'snasa.no',
      'snåsa.no',
      'snoasa.no',
      'snaase.no',
      'snåase.no',
      'sogndal.no',
      'sokndal.no',
      'sola.no',
      'solund.no',
      'songdalen.no',
      'sortland.no',
      'spydeberg.no',
      'stange.no',
      'stavanger.no',
      'steigen.no',
      'steinkjer.no',
      'stjordal.no',
      'stjørdal.no',
      'stokke.no',
      'stor-elvdal.no',
      'stord.no',
      'stordal.no',
      'storfjord.no',
      'omasvuotna.no',
      'strand.no',
      'stranda.no',
      'stryn.no',
      'sula.no',
      'suldal.no',
      'sund.no',
      'sunndal.no',
      'surnadal.no',
      'sveio.no',
      'svelvik.no',
      'sykkylven.no',
      'sogne.no',
      'søgne.no',
      'somna.no',
      'sømna.no',
      'sondre-land.no',
      'søndre-land.no',
      'sor-aurdal.no',
      'sør-aurdal.no',
      'sor-fron.no',
      'sør-fron.no',
      'sor-odal.no',
      'sør-odal.no',
      'sor-varanger.no',
      'sør-varanger.no',
      'matta-varjjat.no',
      'mátta-várjjat.no',
      'sorfold.no',
      'sørfold.no',
      'sorreisa.no',
      'sørreisa.no',
      'sorum.no',
      'sørum.no',
      'tana.no',
      'deatnu.no',
      'time.no',
      'tingvoll.no',
      'tinn.no',
      'tjeldsund.no',
      'dielddanuorri.no',
      'tjome.no',
      'tjøme.no',
      'tokke.no',
      'tolga.no',
      'torsken.no',
      'tranoy.no',
      'tranøy.no',
      'tromso.no',
      'tromsø.no',
      'tromsa.no',
      'romsa.no',
      'trondheim.no',
      'troandin.no',
      'trysil.no',
      'trana.no',
      'træna.no',
      'trogstad.no',
      'trøgstad.no',
      'tvedestrand.no',
      'tydal.no',
      'tynset.no',
      'tysfjord.no',
      'divtasvuodna.no',
      'divttasvuotna.no',
      'tysnes.no',
      'tysvar.no',
      'tysvær.no',
      'tonsberg.no',
      'tønsberg.no',
      'ullensaker.no',
      'ullensvang.no',
      'ulvik.no',
      'utsira.no',
      'vadso.no',
      'vadsø.no',
      'cahcesuolo.no',
      'čáhcesuolo.no',
      'vaksdal.no',
      'valle.no',
      'vang.no',
      'vanylven.no',
      'vardo.no',
      'vardø.no',
      'varggat.no',
      'várggát.no',
      'vefsn.no',
      'vaapste.no',
      'vega.no',
      'vegarshei.no',
      'vegårshei.no',
      'vennesla.no',
      'verdal.no',
      'verran.no',
      'vestby.no',
      'vestnes.no',
      'vestre-slidre.no',
      'vestre-toten.no',
      'vestvagoy.no',
      'vestvågøy.no',
      'vevelstad.no',
      'vik.no',
      'vikna.no',
      'vindafjord.no',
      'volda.no',
      'voss.no',
      'varoy.no',
      'værøy.no',
      'vagan.no',
      'vågan.no',
      'voagat.no',
      'vagsoy.no',
      'vågsøy.no',
      'vaga.no',
      'vågå.no',
      'valer.ostfold.no',
      'våler.østfold.no',
      'valer.hedmark.no',
      'våler.hedmark.no',
      '*.np',
      'nr',
      'biz.nr',
      'info.nr',
      'gov.nr',
      'edu.nr',
      'org.nr',
      'net.nr',
      'com.nr',
      'nu',
      'nz',
      'ac.nz',
      'co.nz',
      'cri.nz',
      'geek.nz',
      'gen.nz',
      'govt.nz',
      'health.nz',
      'iwi.nz',
      'kiwi.nz',
      'maori.nz',
      'mil.nz',
      'māori.nz',
      'net.nz',
      'org.nz',
      'parliament.nz',
      'school.nz',
      'om',
      'co.om',
      'com.om',
      'edu.om',
      'gov.om',
      'med.om',
      'museum.om',
      'net.om',
      'org.om',
      'pro.om',
      'onion',
      'org',
      'pa',
      'ac.pa',
      'gob.pa',
      'com.pa',
      'org.pa',
      'sld.pa',
      'edu.pa',
      'net.pa',
      'ing.pa',
      'abo.pa',
      'med.pa',
      'nom.pa',
      'pe',
      'edu.pe',
      'gob.pe',
      'nom.pe',
      'mil.pe',
      'org.pe',
      'com.pe',
      'net.pe',
      'pf',
      'com.pf',
      'org.pf',
      'edu.pf',
      '*.pg',
      'ph',
      'com.ph',
      'net.ph',
      'org.ph',
      'gov.ph',
      'edu.ph',
      'ngo.ph',
      'mil.ph',
      'i.ph',
      'pk',
      'com.pk',
      'net.pk',
      'edu.pk',
      'org.pk',
      'fam.pk',
      'biz.pk',
      'web.pk',
      'gov.pk',
      'gob.pk',
      'gok.pk',
      'gon.pk',
      'gop.pk',
      'gos.pk',
      'info.pk',
      'pl',
      'com.pl',
      'net.pl',
      'org.pl',
      'aid.pl',
      'agro.pl',
      'atm.pl',
      'auto.pl',
      'biz.pl',
      'edu.pl',
      'gmina.pl',
      'gsm.pl',
      'info.pl',
      'mail.pl',
      'miasta.pl',
      'media.pl',
      'mil.pl',
      'nieruchomosci.pl',
      'nom.pl',
      'pc.pl',
      'powiat.pl',
      'priv.pl',
      'realestate.pl',
      'rel.pl',
      'sex.pl',
      'shop.pl',
      'sklep.pl',
      'sos.pl',
      'szkola.pl',
      'targi.pl',
      'tm.pl',
      'tourism.pl',
      'travel.pl',
      'turystyka.pl',
      'gov.pl',
      'ap.gov.pl',
      'ic.gov.pl',
      'is.gov.pl',
      'us.gov.pl',
      'kmpsp.gov.pl',
      'kppsp.gov.pl',
      'kwpsp.gov.pl',
      'psp.gov.pl',
      'wskr.gov.pl',
      'kwp.gov.pl',
      'mw.gov.pl',
      'ug.gov.pl',
      'um.gov.pl',
      'umig.gov.pl',
      'ugim.gov.pl',
      'upow.gov.pl',
      'uw.gov.pl',
      'starostwo.gov.pl',
      'pa.gov.pl',
      'po.gov.pl',
      'psse.gov.pl',
      'pup.gov.pl',
      'rzgw.gov.pl',
      'sa.gov.pl',
      'so.gov.pl',
      'sr.gov.pl',
      'wsa.gov.pl',
      'sko.gov.pl',
      'uzs.gov.pl',
      'wiih.gov.pl',
      'winb.gov.pl',
      'pinb.gov.pl',
      'wios.gov.pl',
      'witd.gov.pl',
      'wzmiuw.gov.pl',
      'piw.gov.pl',
      'wiw.gov.pl',
      'griw.gov.pl',
      'wif.gov.pl',
      'oum.gov.pl',
      'sdn.gov.pl',
      'zp.gov.pl',
      'uppo.gov.pl',
      'mup.gov.pl',
      'wuoz.gov.pl',
      'konsulat.gov.pl',
      'oirm.gov.pl',
      'augustow.pl',
      'babia-gora.pl',
      'bedzin.pl',
      'beskidy.pl',
      'bialowieza.pl',
      'bialystok.pl',
      'bielawa.pl',
      'bieszczady.pl',
      'boleslawiec.pl',
      'bydgoszcz.pl',
      'bytom.pl',
      'cieszyn.pl',
      'czeladz.pl',
      'czest.pl',
      'dlugoleka.pl',
      'elblag.pl',
      'elk.pl',
      'glogow.pl',
      'gniezno.pl',
      'gorlice.pl',
      'grajewo.pl',
      'ilawa.pl',
      'jaworzno.pl',
      'jelenia-gora.pl',
      'jgora.pl',
      'kalisz.pl',
      'kazimierz-dolny.pl',
      'karpacz.pl',
      'kartuzy.pl',
      'kaszuby.pl',
      'katowice.pl',
      'kepno.pl',
      'ketrzyn.pl',
      'klodzko.pl',
      'kobierzyce.pl',
      'kolobrzeg.pl',
      'konin.pl',
      'konskowola.pl',
      'kutno.pl',
      'lapy.pl',
      'lebork.pl',
      'legnica.pl',
      'lezajsk.pl',
      'limanowa.pl',
      'lomza.pl',
      'lowicz.pl',
      'lubin.pl',
      'lukow.pl',
      'malbork.pl',
      'malopolska.pl',
      'mazowsze.pl',
      'mazury.pl',
      'mielec.pl',
      'mielno.pl',
      'mragowo.pl',
      'naklo.pl',
      'nowaruda.pl',
      'nysa.pl',
      'olawa.pl',
      'olecko.pl',
      'olkusz.pl',
      'olsztyn.pl',
      'opoczno.pl',
      'opole.pl',
      'ostroda.pl',
      'ostroleka.pl',
      'ostrowiec.pl',
      'ostrowwlkp.pl',
      'pila.pl',
      'pisz.pl',
      'podhale.pl',
      'podlasie.pl',
      'polkowice.pl',
      'pomorze.pl',
      'pomorskie.pl',
      'prochowice.pl',
      'pruszkow.pl',
      'przeworsk.pl',
      'pulawy.pl',
      'radom.pl',
      'rawa-maz.pl',
      'rybnik.pl',
      'rzeszow.pl',
      'sanok.pl',
      'sejny.pl',
      'slask.pl',
      'slupsk.pl',
      'sosnowiec.pl',
      'stalowa-wola.pl',
      'skoczow.pl',
      'starachowice.pl',
      'stargard.pl',
      'suwalki.pl',
      'swidnica.pl',
      'swiebodzin.pl',
      'swinoujscie.pl',
      'szczecin.pl',
      'szczytno.pl',
      'tarnobrzeg.pl',
      'tgory.pl',
      'turek.pl',
      'tychy.pl',
      'ustka.pl',
      'walbrzych.pl',
      'warmia.pl',
      'warszawa.pl',
      'waw.pl',
      'wegrow.pl',
      'wielun.pl',
      'wlocl.pl',
      'wloclawek.pl',
      'wodzislaw.pl',
      'wolomin.pl',
      'wroclaw.pl',
      'zachpomor.pl',
      'zagan.pl',
      'zarow.pl',
      'zgora.pl',
      'zgorzelec.pl',
      'pm',
      'pn',
      'gov.pn',
      'co.pn',
      'org.pn',
      'edu.pn',
      'net.pn',
      'post',
      'pr',
      'com.pr',
      'net.pr',
      'org.pr',
      'gov.pr',
      'edu.pr',
      'isla.pr',
      'pro.pr',
      'biz.pr',
      'info.pr',
      'name.pr',
      'est.pr',
      'prof.pr',
      'ac.pr',
      'pro',
      'aaa.pro',
      'aca.pro',
      'acct.pro',
      'avocat.pro',
      'bar.pro',
      'cpa.pro',
      'eng.pro',
      'jur.pro',
      'law.pro',
      'med.pro',
      'recht.pro',
      'ps',
      'edu.ps',
      'gov.ps',
      'sec.ps',
      'plo.ps',
      'com.ps',
      'org.ps',
      'net.ps',
      'pt',
      'net.pt',
      'gov.pt',
      'org.pt',
      'edu.pt',
      'int.pt',
      'publ.pt',
      'com.pt',
      'nome.pt',
      'pw',
      'co.pw',
      'ne.pw',
      'or.pw',
      'ed.pw',
      'go.pw',
      'belau.pw',
      'py',
      'com.py',
      'coop.py',
      'edu.py',
      'gov.py',
      'mil.py',
      'net.py',
      'org.py',
      'qa',
      'com.qa',
      'edu.qa',
      'gov.qa',
      'mil.qa',
      'name.qa',
      'net.qa',
      'org.qa',
      'sch.qa',
      're',
      'asso.re',
      'com.re',
      'nom.re',
      'ro',
      'arts.ro',
      'com.ro',
      'firm.ro',
      'info.ro',
      'nom.ro',
      'nt.ro',
      'org.ro',
      'rec.ro',
      'store.ro',
      'tm.ro',
      'www.ro',
      'rs',
      'ac.rs',
      'co.rs',
      'edu.rs',
      'gov.rs',
      'in.rs',
      'org.rs',
      'ru',
      'rw',
      'ac.rw',
      'co.rw',
      'coop.rw',
      'gov.rw',
      'mil.rw',
      'net.rw',
      'org.rw',
      'sa',
      'com.sa',
      'net.sa',
      'org.sa',
      'gov.sa',
      'med.sa',
      'pub.sa',
      'edu.sa',
      'sch.sa',
      'sb',
      'com.sb',
      'edu.sb',
      'gov.sb',
      'net.sb',
      'org.sb',
      'sc',
      'com.sc',
      'gov.sc',
      'net.sc',
      'org.sc',
      'edu.sc',
      'sd',
      'com.sd',
      'net.sd',
      'org.sd',
      'edu.sd',
      'med.sd',
      'tv.sd',
      'gov.sd',
      'info.sd',
      'se',
      'a.se',
      'ac.se',
      'b.se',
      'bd.se',
      'brand.se',
      'c.se',
      'd.se',
      'e.se',
      'f.se',
      'fh.se',
      'fhsk.se',
      'fhv.se',
      'g.se',
      'h.se',
      'i.se',
      'k.se',
      'komforb.se',
      'kommunalforbund.se',
      'komvux.se',
      'l.se',
      'lanbib.se',
      'm.se',
      'n.se',
      'naturbruksgymn.se',
      'o.se',
      'org.se',
      'p.se',
      'parti.se',
      'pp.se',
      'press.se',
      'r.se',
      's.se',
      't.se',
      'tm.se',
      'u.se',
      'w.se',
      'x.se',
      'y.se',
      'z.se',
      'sg',
      'com.sg',
      'net.sg',
      'org.sg',
      'gov.sg',
      'edu.sg',
      'per.sg',
      'sh',
      'com.sh',
      'net.sh',
      'gov.sh',
      'org.sh',
      'mil.sh',
      'si',
      'sj',
      'sk',
      'sl',
      'com.sl',
      'net.sl',
      'edu.sl',
      'gov.sl',
      'org.sl',
      'sm',
      'sn',
      'art.sn',
      'com.sn',
      'edu.sn',
      'gouv.sn',
      'org.sn',
      'perso.sn',
      'univ.sn',
      'so',
      'com.so',
      'edu.so',
      'gov.so',
      'me.so',
      'net.so',
      'org.so',
      'sr',
      'ss',
      'biz.ss',
      'com.ss',
      'edu.ss',
      'gov.ss',
      'net.ss',
      'org.ss',
      'st',
      'co.st',
      'com.st',
      'consulado.st',
      'edu.st',
      'embaixada.st',
      'gov.st',
      'mil.st',
      'net.st',
      'org.st',
      'principe.st',
      'saotome.st',
      'store.st',
      'su',
      'sv',
      'com.sv',
      'edu.sv',
      'gob.sv',
      'org.sv',
      'red.sv',
      'sx',
      'gov.sx',
      'sy',
      'edu.sy',
      'gov.sy',
      'net.sy',
      'mil.sy',
      'com.sy',
      'org.sy',
      'sz',
      'co.sz',
      'ac.sz',
      'org.sz',
      'tc',
      'td',
      'tel',
      'tf',
      'tg',
      'th',
      'ac.th',
      'co.th',
      'go.th',
      'in.th',
      'mi.th',
      'net.th',
      'or.th',
      'tj',
      'ac.tj',
      'biz.tj',
      'co.tj',
      'com.tj',
      'edu.tj',
      'go.tj',
      'gov.tj',
      'int.tj',
      'mil.tj',
      'name.tj',
      'net.tj',
      'nic.tj',
      'org.tj',
      'test.tj',
      'web.tj',
      'tk',
      'tl',
      'gov.tl',
      'tm',
      'com.tm',
      'co.tm',
      'org.tm',
      'net.tm',
      'nom.tm',
      'gov.tm',
      'mil.tm',
      'edu.tm',
      'tn',
      'com.tn',
      'ens.tn',
      'fin.tn',
      'gov.tn',
      'ind.tn',
      'intl.tn',
      'nat.tn',
      'net.tn',
      'org.tn',
      'info.tn',
      'perso.tn',
      'tourism.tn',
      'edunet.tn',
      'rnrt.tn',
      'rns.tn',
      'rnu.tn',
      'mincom.tn',
      'agrinet.tn',
      'defense.tn',
      'turen.tn',
      'to',
      'com.to',
      'gov.to',
      'net.to',
      'org.to',
      'edu.to',
      'mil.to',
      'tr',
      'av.tr',
      'bbs.tr',
      'bel.tr',
      'biz.tr',
      'com.tr',
      'dr.tr',
      'edu.tr',
      'gen.tr',
      'gov.tr',
      'info.tr',
      'mil.tr',
      'k12.tr',
      'kep.tr',
      'name.tr',
      'net.tr',
      'org.tr',
      'pol.tr',
      'tel.tr',
      'tsk.tr',
      'tv.tr',
      'web.tr',
      'nc.tr',
      'gov.nc.tr',
      'tt',
      'co.tt',
      'com.tt',
      'org.tt',
      'net.tt',
      'biz.tt',
      'info.tt',
      'pro.tt',
      'int.tt',
      'coop.tt',
      'jobs.tt',
      'mobi.tt',
      'travel.tt',
      'museum.tt',
      'aero.tt',
      'name.tt',
      'gov.tt',
      'edu.tt',
      'tv',
      'tw',
      'edu.tw',
      'gov.tw',
      'mil.tw',
      'com.tw',
      'net.tw',
      'org.tw',
      'idv.tw',
      'game.tw',
      'ebiz.tw',
      'club.tw',
      '網路.tw',
      '組織.tw',
      '商業.tw',
      'tz',
      'ac.tz',
      'co.tz',
      'go.tz',
      'hotel.tz',
      'info.tz',
      'me.tz',
      'mil.tz',
      'mobi.tz',
      'ne.tz',
      'or.tz',
      'sc.tz',
      'tv.tz',
      'ua',
      'com.ua',
      'edu.ua',
      'gov.ua',
      'in.ua',
      'net.ua',
      'org.ua',
      'cherkassy.ua',
      'cherkasy.ua',
      'chernigov.ua',
      'chernihiv.ua',
      'chernivtsi.ua',
      'chernovtsy.ua',
      'ck.ua',
      'cn.ua',
      'cr.ua',
      'crimea.ua',
      'cv.ua',
      'dn.ua',
      'dnepropetrovsk.ua',
      'dnipropetrovsk.ua',
      'dominic.ua',
      'donetsk.ua',
      'dp.ua',
      'if.ua',
      'ivano-frankivsk.ua',
      'kh.ua',
      'kharkiv.ua',
      'kharkov.ua',
      'kherson.ua',
      'khmelnitskiy.ua',
      'khmelnytskyi.ua',
      'kiev.ua',
      'kirovograd.ua',
      'km.ua',
      'kr.ua',
      'krym.ua',
      'ks.ua',
      'kv.ua',
      'kyiv.ua',
      'lg.ua',
      'lt.ua',
      'lugansk.ua',
      'lutsk.ua',
      'lv.ua',
      'lviv.ua',
      'mk.ua',
      'mykolaiv.ua',
      'nikolaev.ua',
      'od.ua',
      'odesa.ua',
      'odessa.ua',
      'pl.ua',
      'poltava.ua',
      'rivne.ua',
      'rovno.ua',
      'rv.ua',
      'sb.ua',
      'sebastopol.ua',
      'sevastopol.ua',
      'sm.ua',
      'sumy.ua',
      'te.ua',
      'ternopil.ua',
      'uz.ua',
      'uzhgorod.ua',
      'vinnica.ua',
      'vinnytsia.ua',
      'vn.ua',
      'volyn.ua',
      'yalta.ua',
      'zaporizhzhe.ua',
      'zaporizhzhia.ua',
      'zhitomir.ua',
      'zhytomyr.ua',
      'zp.ua',
      'zt.ua',
      'ug',
      'co.ug',
      'or.ug',
      'ac.ug',
      'sc.ug',
      'go.ug',
      'ne.ug',
      'com.ug',
      'org.ug',
      'uk',
      'ac.uk',
      'co.uk',
      'gov.uk',
      'ltd.uk',
      'me.uk',
      'net.uk',
      'nhs.uk',
      'org.uk',
      'plc.uk',
      'police.uk',
      '*.sch.uk',
      'us',
      'dni.us',
      'fed.us',
      'isa.us',
      'kids.us',
      'nsn.us',
      'ak.us',
      'al.us',
      'ar.us',
      'as.us',
      'az.us',
      'ca.us',
      'co.us',
      'ct.us',
      'dc.us',
      'de.us',
      'fl.us',
      'ga.us',
      'gu.us',
      'hi.us',
      'ia.us',
      'id.us',
      'il.us',
      'in.us',
      'ks.us',
      'ky.us',
      'la.us',
      'ma.us',
      'md.us',
      'me.us',
      'mi.us',
      'mn.us',
      'mo.us',
      'ms.us',
      'mt.us',
      'nc.us',
      'nd.us',
      'ne.us',
      'nh.us',
      'nj.us',
      'nm.us',
      'nv.us',
      'ny.us',
      'oh.us',
      'ok.us',
      'or.us',
      'pa.us',
      'pr.us',
      'ri.us',
      'sc.us',
      'sd.us',
      'tn.us',
      'tx.us',
      'ut.us',
      'vi.us',
      'vt.us',
      'va.us',
      'wa.us',
      'wi.us',
      'wv.us',
      'wy.us',
      'k12.ak.us',
      'k12.al.us',
      'k12.ar.us',
      'k12.as.us',
      'k12.az.us',
      'k12.ca.us',
      'k12.co.us',
      'k12.ct.us',
      'k12.dc.us',
      'k12.de.us',
      'k12.fl.us',
      'k12.ga.us',
      'k12.gu.us',
      'k12.ia.us',
      'k12.id.us',
      'k12.il.us',
      'k12.in.us',
      'k12.ks.us',
      'k12.ky.us',
      'k12.la.us',
      'k12.ma.us',
      'k12.md.us',
      'k12.me.us',
      'k12.mi.us',
      'k12.mn.us',
      'k12.mo.us',
      'k12.ms.us',
      'k12.mt.us',
      'k12.nc.us',
      'k12.ne.us',
      'k12.nh.us',
      'k12.nj.us',
      'k12.nm.us',
      'k12.nv.us',
      'k12.ny.us',
      'k12.oh.us',
      'k12.ok.us',
      'k12.or.us',
      'k12.pa.us',
      'k12.pr.us',
      'k12.ri.us',
      'k12.sc.us',
      'k12.tn.us',
      'k12.tx.us',
      'k12.ut.us',
      'k12.vi.us',
      'k12.vt.us',
      'k12.va.us',
      'k12.wa.us',
      'k12.wi.us',
      'k12.wy.us',
      'cc.ak.us',
      'cc.al.us',
      'cc.ar.us',
      'cc.as.us',
      'cc.az.us',
      'cc.ca.us',
      'cc.co.us',
      'cc.ct.us',
      'cc.dc.us',
      'cc.de.us',
      'cc.fl.us',
      'cc.ga.us',
      'cc.gu.us',
      'cc.hi.us',
      'cc.ia.us',
      'cc.id.us',
      'cc.il.us',
      'cc.in.us',
      'cc.ks.us',
      'cc.ky.us',
      'cc.la.us',
      'cc.ma.us',
      'cc.md.us',
      'cc.me.us',
      'cc.mi.us',
      'cc.mn.us',
      'cc.mo.us',
      'cc.ms.us',
      'cc.mt.us',
      'cc.nc.us',
      'cc.nd.us',
      'cc.ne.us',
      'cc.nh.us',
      'cc.nj.us',
      'cc.nm.us',
      'cc.nv.us',
      'cc.ny.us',
      'cc.oh.us',
      'cc.ok.us',
      'cc.or.us',
      'cc.pa.us',
      'cc.pr.us',
      'cc.ri.us',
      'cc.sc.us',
      'cc.sd.us',
      'cc.tn.us',
      'cc.tx.us',
      'cc.ut.us',
      'cc.vi.us',
      'cc.vt.us',
      'cc.va.us',
      'cc.wa.us',
      'cc.wi.us',
      'cc.wv.us',
      'cc.wy.us',
      'lib.ak.us',
      'lib.al.us',
      'lib.ar.us',
      'lib.as.us',
      'lib.az.us',
      'lib.ca.us',
      'lib.co.us',
      'lib.ct.us',
      'lib.dc.us',
      'lib.fl.us',
      'lib.ga.us',
      'lib.gu.us',
      'lib.hi.us',
      'lib.ia.us',
      'lib.id.us',
      'lib.il.us',
      'lib.in.us',
      'lib.ks.us',
      'lib.ky.us',
      'lib.la.us',
      'lib.ma.us',
      'lib.md.us',
      'lib.me.us',
      'lib.mi.us',
      'lib.mn.us',
      'lib.mo.us',
      'lib.ms.us',
      'lib.mt.us',
      'lib.nc.us',
      'lib.nd.us',
      'lib.ne.us',
      'lib.nh.us',
      'lib.nj.us',
      'lib.nm.us',
      'lib.nv.us',
      'lib.ny.us',
      'lib.oh.us',
      'lib.ok.us',
      'lib.or.us',
      'lib.pa.us',
      'lib.pr.us',
      'lib.ri.us',
      'lib.sc.us',
      'lib.sd.us',
      'lib.tn.us',
      'lib.tx.us',
      'lib.ut.us',
      'lib.vi.us',
      'lib.vt.us',
      'lib.va.us',
      'lib.wa.us',
      'lib.wi.us',
      'lib.wy.us',
      'pvt.k12.ma.us',
      'chtr.k12.ma.us',
      'paroch.k12.ma.us',
      'ann-arbor.mi.us',
      'cog.mi.us',
      'dst.mi.us',
      'eaton.mi.us',
      'gen.mi.us',
      'mus.mi.us',
      'tec.mi.us',
      'washtenaw.mi.us',
      'uy',
      'com.uy',
      'edu.uy',
      'gub.uy',
      'mil.uy',
      'net.uy',
      'org.uy',
      'uz',
      'co.uz',
      'com.uz',
      'net.uz',
      'org.uz',
      'va',
      'vc',
      'com.vc',
      'net.vc',
      'org.vc',
      'gov.vc',
      'mil.vc',
      'edu.vc',
      've',
      'arts.ve',
      'co.ve',
      'com.ve',
      'e12.ve',
      'edu.ve',
      'firm.ve',
      'gob.ve',
      'gov.ve',
      'info.ve',
      'int.ve',
      'mil.ve',
      'net.ve',
      'org.ve',
      'rec.ve',
      'store.ve',
      'tec.ve',
      'web.ve',
      'vg',
      'vi',
      'co.vi',
      'com.vi',
      'k12.vi',
      'net.vi',
      'org.vi',
      'vn',
      'com.vn',
      'net.vn',
      'org.vn',
      'edu.vn',
      'gov.vn',
      'int.vn',
      'ac.vn',
      'biz.vn',
      'info.vn',
      'name.vn',
      'pro.vn',
      'health.vn',
      'vu',
      'com.vu',
      'edu.vu',
      'net.vu',
      'org.vu',
      'wf',
      'ws',
      'com.ws',
      'net.ws',
      'org.ws',
      'gov.ws',
      'edu.ws',
      'yt',
      'امارات',
      'հայ',
      'বাংলা',
      'бг',
      'бел',
      '中国',
      '中國',
      'الجزائر',
      'مصر',
      'ею',
      'ευ',
      'موريتانيا',
      'გე',
      'ελ',
      '香港',
      '公司.香港',
      '教育.香港',
      '政府.香港',
      '個人.香港',
      '網絡.香港',
      '組織.香港',
      'ಭಾರತ',
      'ଭାରତ',
      'ভাৰত',
      'भारतम्',
      'भारोत',
      'ڀارت',
      'ഭാരതം',
      'भारत',
      'بارت',
      'بھارت',
      'భారత్',
      'ભારત',
      'ਭਾਰਤ',
      'ভারত',
      'இந்தியா',
      'ایران',
      'ايران',
      'عراق',
      'الاردن',
      '한국',
      'қаз',
      'ලංකා',
      'இலங்கை',
      'المغرب',
      'мкд',
      'мон',
      '澳門',
      '澳门',
      'مليسيا',
      'عمان',
      'پاکستان',
      'پاكستان',
      'فلسطين',
      'срб',
      'пр.срб',
      'орг.срб',
      'обр.срб',
      'од.срб',
      'упр.срб',
      'ак.срб',
      'рф',
      'قطر',
      'السعودية',
      'السعودیة',
      'السعودیۃ',
      'السعوديه',
      'سودان',
      '新加坡',
      'சிங்கப்பூர்',
      'سورية',
      'سوريا',
      'ไทย',
      'ศึกษา.ไทย',
      'ธุรกิจ.ไทย',
      'รัฐบาล.ไทย',
      'ทหาร.ไทย',
      'เน็ต.ไทย',
      'องค์กร.ไทย',
      'تونس',
      '台灣',
      '台湾',
      '臺灣',
      'укр',
      'اليمن',
      'xxx',
      '*.ye',
      'ac.za',
      'agric.za',
      'alt.za',
      'co.za',
      'edu.za',
      'gov.za',
      'grondar.za',
      'law.za',
      'mil.za',
      'net.za',
      'ngo.za',
      'nic.za',
      'nis.za',
      'nom.za',
      'org.za',
      'school.za',
      'tm.za',
      'web.za',
      'zm',
      'ac.zm',
      'biz.zm',
      'co.zm',
      'com.zm',
      'edu.zm',
      'gov.zm',
      'info.zm',
      'mil.zm',
      'net.zm',
      'org.zm',
      'sch.zm',
      'zw',
      'ac.zw',
      'co.zw',
      'gov.zw',
      'mil.zw',
      'org.zw',
      'aaa',
      'aarp',
      'abarth',
      'abb',
      'abbott',
      'abbvie',
      'abc',
      'able',
      'abogado',
      'abudhabi',
      'academy',
      'accenture',
      'accountant',
      'accountants',
      'aco',
      'actor',
      'adac',
      'ads',
      'adult',
      'aeg',
      'aetna',
      'afamilycompany',
      'afl',
      'africa',
      'agakhan',
      'agency',
      'aig',
      'aigo',
      'airbus',
      'airforce',
      'airtel',
      'akdn',
      'alfaromeo',
      'alibaba',
      'alipay',
      'allfinanz',
      'allstate',
      'ally',
      'alsace',
      'alstom',
      'amazon',
      'americanexpress',
      'americanfamily',
      'amex',
      'amfam',
      'amica',
      'amsterdam',
      'analytics',
      'android',
      'anquan',
      'anz',
      'aol',
      'apartments',
      'app',
      'apple',
      'aquarelle',
      'arab',
      'aramco',
      'archi',
      'army',
      'art',
      'arte',
      'asda',
      'associates',
      'athleta',
      'attorney',
      'auction',
      'audi',
      'audible',
      'audio',
      'auspost',
      'author',
      'auto',
      'autos',
      'avianca',
      'aws',
      'axa',
      'azure',
      'baby',
      'baidu',
      'banamex',
      'bananarepublic',
      'band',
      'bank',
      'bar',
      'barcelona',
      'barclaycard',
      'barclays',
      'barefoot',
      'bargains',
      'baseball',
      'basketball',
      'bauhaus',
      'bayern',
      'bbc',
      'bbt',
      'bbva',
      'bcg',
      'bcn',
      'beats',
      'beauty',
      'beer',
      'bentley',
      'berlin',
      'best',
      'bestbuy',
      'bet',
      'bharti',
      'bible',
      'bid',
      'bike',
      'bing',
      'bingo',
      'bio',
      'black',
      'blackfriday',
      'blockbuster',
      'blog',
      'bloomberg',
      'blue',
      'bms',
      'bmw',
      'bnpparibas',
      'boats',
      'boehringer',
      'bofa',
      'bom',
      'bond',
      'boo',
      'book',
      'booking',
      'bosch',
      'bostik',
      'boston',
      'bot',
      'boutique',
      'box',
      'bradesco',
      'bridgestone',
      'broadway',
      'broker',
      'brother',
      'brussels',
      'budapest',
      'bugatti',
      'build',
      'builders',
      'business',
      'buy',
      'buzz',
      'bzh',
      'cab',
      'cafe',
      'cal',
      'call',
      'calvinklein',
      'cam',
      'camera',
      'camp',
      'cancerresearch',
      'canon',
      'capetown',
      'capital',
      'capitalone',
      'car',
      'caravan',
      'cards',
      'care',
      'career',
      'careers',
      'cars',
      'casa',
      'case',
      'caseih',
      'cash',
      'casino',
      'catering',
      'catholic',
      'cba',
      'cbn',
      'cbre',
      'cbs',
      'ceb',
      'center',
      'ceo',
      'cern',
      'cfa',
      'cfd',
      'chanel',
      'channel',
      'charity',
      'chase',
      'chat',
      'cheap',
      'chintai',
      'christmas',
      'chrome',
      'church',
      'cipriani',
      'circle',
      'cisco',
      'citadel',
      'citi',
      'citic',
      'city',
      'cityeats',
      'claims',
      'cleaning',
      'click',
      'clinic',
      'clinique',
      'clothing',
      'cloud',
      'club',
      'clubmed',
      'coach',
      'codes',
      'coffee',
      'college',
      'cologne',
      'comcast',
      'commbank',
      'community',
      'company',
      'compare',
      'computer',
      'comsec',
      'condos',
      'construction',
      'consulting',
      'contact',
      'contractors',
      'cooking',
      'cookingchannel',
      'cool',
      'corsica',
      'country',
      'coupon',
      'coupons',
      'courses',
      'cpa',
      'credit',
      'creditcard',
      'creditunion',
      'cricket',
      'crown',
      'crs',
      'cruise',
      'cruises',
      'csc',
      'cuisinella',
      'cymru',
      'cyou',
      'dabur',
      'dad',
      'dance',
      'data',
      'date',
      'dating',
      'datsun',
      'day',
      'dclk',
      'dds',
      'deal',
      'dealer',
      'deals',
      'degree',
      'delivery',
      'dell',
      'deloitte',
      'delta',
      'democrat',
      'dental',
      'dentist',
      'desi',
      'design',
      'dev',
      'dhl',
      'diamonds',
      'diet',
      'digital',
      'direct',
      'directory',
      'discount',
      'discover',
      'dish',
      'diy',
      'dnp',
      'docs',
      'doctor',
      'dog',
      'domains',
      'dot',
      'download',
      'drive',
      'dtv',
      'dubai',
      'duck',
      'dunlop',
      'dupont',
      'durban',
      'dvag',
      'dvr',
      'earth',
      'eat',
      'eco',
      'edeka',
      'education',
      'email',
      'emerck',
      'energy',
      'engineer',
      'engineering',
      'enterprises',
      'epson',
      'equipment',
      'ericsson',
      'erni',
      'esq',
      'estate',
      'esurance',
      'etisalat',
      'eurovision',
      'eus',
      'events',
      'exchange',
      'expert',
      'exposed',
      'express',
      'extraspace',
      'fage',
      'fail',
      'fairwinds',
      'faith',
      'family',
      'fan',
      'fans',
      'farm',
      'farmers',
      'fashion',
      'fast',
      'fedex',
      'feedback',
      'ferrari',
      'ferrero',
      'fiat',
      'fidelity',
      'fido',
      'film',
      'final',
      'finance',
      'financial',
      'fire',
      'firestone',
      'firmdale',
      'fish',
      'fishing',
      'fit',
      'fitness',
      'flickr',
      'flights',
      'flir',
      'florist',
      'flowers',
      'fly',
      'foo',
      'food',
      'foodnetwork',
      'football',
      'ford',
      'forex',
      'forsale',
      'forum',
      'foundation',
      'fox',
      'free',
      'fresenius',
      'frl',
      'frogans',
      'frontdoor',
      'frontier',
      'ftr',
      'fujitsu',
      'fujixerox',
      'fun',
      'fund',
      'furniture',
      'futbol',
      'fyi',
      'gal',
      'gallery',
      'gallo',
      'gallup',
      'game',
      'games',
      'gap',
      'garden',
      'gay',
      'gbiz',
      'gdn',
      'gea',
      'gent',
      'genting',
      'george',
      'ggee',
      'gift',
      'gifts',
      'gives',
      'giving',
      'glade',
      'glass',
      'gle',
      'global',
      'globo',
      'gmail',
      'gmbh',
      'gmo',
      'gmx',
      'godaddy',
      'gold',
      'goldpoint',
      'golf',
      'goo',
      'goodyear',
      'goog',
      'google',
      'gop',
      'got',
      'grainger',
      'graphics',
      'gratis',
      'green',
      'gripe',
      'grocery',
      'group',
      'guardian',
      'gucci',
      'guge',
      'guide',
      'guitars',
      'guru',
      'hair',
      'hamburg',
      'hangout',
      'haus',
      'hbo',
      'hdfc',
      'hdfcbank',
      'health',
      'healthcare',
      'help',
      'helsinki',
      'here',
      'hermes',
      'hgtv',
      'hiphop',
      'hisamitsu',
      'hitachi',
      'hiv',
      'hkt',
      'hockey',
      'holdings',
      'holiday',
      'homedepot',
      'homegoods',
      'homes',
      'homesense',
      'honda',
      'horse',
      'hospital',
      'host',
      'hosting',
      'hot',
      'hoteles',
      'hotels',
      'hotmail',
      'house',
      'how',
      'hsbc',
      'hughes',
      'hyatt',
      'hyundai',
      'ibm',
      'icbc',
      'ice',
      'icu',
      'ieee',
      'ifm',
      'ikano',
      'imamat',
      'imdb',
      'immo',
      'immobilien',
      'inc',
      'industries',
      'infiniti',
      'ing',
      'ink',
      'institute',
      'insurance',
      'insure',
      'intel',
      'international',
      'intuit',
      'investments',
      'ipiranga',
      'irish',
      'ismaili',
      'ist',
      'istanbul',
      'itau',
      'itv',
      'iveco',
      'jaguar',
      'java',
      'jcb',
      'jcp',
      'jeep',
      'jetzt',
      'jewelry',
      'jio',
      'jll',
      'jmp',
      'jnj',
      'joburg',
      'jot',
      'joy',
      'jpmorgan',
      'jprs',
      'juegos',
      'juniper',
      'kaufen',
      'kddi',
      'kerryhotels',
      'kerrylogistics',
      'kerryproperties',
      'kfh',
      'kia',
      'kim',
      'kinder',
      'kindle',
      'kitchen',
      'kiwi',
      'koeln',
      'komatsu',
      'kosher',
      'kpmg',
      'kpn',
      'krd',
      'kred',
      'kuokgroup',
      'kyoto',
      'lacaixa',
      'lamborghini',
      'lamer',
      'lancaster',
      'lancia',
      'land',
      'landrover',
      'lanxess',
      'lasalle',
      'lat',
      'latino',
      'latrobe',
      'law',
      'lawyer',
      'lds',
      'lease',
      'leclerc',
      'lefrak',
      'legal',
      'lego',
      'lexus',
      'lgbt',
      'lidl',
      'life',
      'lifeinsurance',
      'lifestyle',
      'lighting',
      'like',
      'lilly',
      'limited',
      'limo',
      'lincoln',
      'linde',
      'link',
      'lipsy',
      'live',
      'living',
      'lixil',
      'llc',
      'llp',
      'loan',
      'loans',
      'locker',
      'locus',
      'loft',
      'lol',
      'london',
      'lotte',
      'lotto',
      'love',
      'lpl',
      'lplfinancial',
      'ltd',
      'ltda',
      'lundbeck',
      'lupin',
      'luxe',
      'luxury',
      'macys',
      'madrid',
      'maif',
      'maison',
      'makeup',
      'man',
      'management',
      'mango',
      'map',
      'market',
      'marketing',
      'markets',
      'marriott',
      'marshalls',
      'maserati',
      'mattel',
      'mba',
      'mckinsey',
      'med',
      'media',
      'meet',
      'melbourne',
      'meme',
      'memorial',
      'men',
      'menu',
      'merckmsd',
      'metlife',
      'miami',
      'microsoft',
      'mini',
      'mint',
      'mit',
      'mitsubishi',
      'mlb',
      'mls',
      'mma',
      'mobile',
      'moda',
      'moe',
      'moi',
      'mom',
      'monash',
      'money',
      'monster',
      'mormon',
      'mortgage',
      'moscow',
      'moto',
      'motorcycles',
      'mov',
      'movie',
      'msd',
      'mtn',
      'mtr',
      'mutual',
      'nab',
      'nadex',
      'nagoya',
      'nationwide',
      'natura',
      'navy',
      'nba',
      'nec',
      'netbank',
      'netflix',
      'network',
      'neustar',
      'new',
      'newholland',
      'news',
      'next',
      'nextdirect',
      'nexus',
      'nfl',
      'ngo',
      'nhk',
      'nico',
      'nike',
      'nikon',
      'ninja',
      'nissan',
      'nissay',
      'nokia',
      'northwesternmutual',
      'norton',
      'now',
      'nowruz',
      'nowtv',
      'nra',
      'nrw',
      'ntt',
      'nyc',
      'obi',
      'observer',
      'off',
      'office',
      'okinawa',
      'olayan',
      'olayangroup',
      'oldnavy',
      'ollo',
      'omega',
      'one',
      'ong',
      'onl',
      'online',
      'onyourside',
      'ooo',
      'open',
      'oracle',
      'orange',
      'organic',
      'origins',
      'osaka',
      'otsuka',
      'ott',
      'ovh',
      'page',
      'panasonic',
      'paris',
      'pars',
      'partners',
      'parts',
      'party',
      'passagens',
      'pay',
      'pccw',
      'pet',
      'pfizer',
      'pharmacy',
      'phd',
      'philips',
      'phone',
      'photo',
      'photography',
      'photos',
      'physio',
      'pics',
      'pictet',
      'pictures',
      'pid',
      'pin',
      'ping',
      'pink',
      'pioneer',
      'pizza',
      'place',
      'play',
      'playstation',
      'plumbing',
      'plus',
      'pnc',
      'pohl',
      'poker',
      'politie',
      'porn',
      'pramerica',
      'praxi',
      'press',
      'prime',
      'prod',
      'productions',
      'prof',
      'progressive',
      'promo',
      'properties',
      'property',
      'protection',
      'pru',
      'prudential',
      'pub',
      'pwc',
      'qpon',
      'quebec',
      'quest',
      'qvc',
      'racing',
      'radio',
      'raid',
      'read',
      'realestate',
      'realtor',
      'realty',
      'recipes',
      'red',
      'redstone',
      'redumbrella',
      'rehab',
      'reise',
      'reisen',
      'reit',
      'reliance',
      'ren',
      'rent',
      'rentals',
      'repair',
      'report',
      'republican',
      'rest',
      'restaurant',
      'review',
      'reviews',
      'rexroth',
      'rich',
      'richardli',
      'ricoh',
      'rightathome',
      'ril',
      'rio',
      'rip',
      'rmit',
      'rocher',
      'rocks',
      'rodeo',
      'rogers',
      'room',
      'rsvp',
      'rugby',
      'ruhr',
      'run',
      'rwe',
      'ryukyu',
      'saarland',
      'safe',
      'safety',
      'sakura',
      'sale',
      'salon',
      'samsclub',
      'samsung',
      'sandvik',
      'sandvikcoromant',
      'sanofi',
      'sap',
      'sarl',
      'sas',
      'save',
      'saxo',
      'sbi',
      'sbs',
      'sca',
      'scb',
      'schaeffler',
      'schmidt',
      'scholarships',
      'school',
      'schule',
      'schwarz',
      'science',
      'scjohnson',
      'scor',
      'scot',
      'search',
      'seat',
      'secure',
      'security',
      'seek',
      'select',
      'sener',
      'services',
      'ses',
      'seven',
      'sew',
      'sex',
      'sexy',
      'sfr',
      'shangrila',
      'sharp',
      'shaw',
      'shell',
      'shia',
      'shiksha',
      'shoes',
      'shop',
      'shopping',
      'shouji',
      'show',
      'showtime',
      'shriram',
      'silk',
      'sina',
      'singles',
      'site',
      'ski',
      'skin',
      'sky',
      'skype',
      'sling',
      'smart',
      'smile',
      'sncf',
      'soccer',
      'social',
      'softbank',
      'software',
      'sohu',
      'solar',
      'solutions',
      'song',
      'sony',
      'soy',
      'spa',
      'space',
      'sport',
      'spot',
      'spreadbetting',
      'srl',
      'stada',
      'staples',
      'star',
      'statebank',
      'statefarm',
      'stc',
      'stcgroup',
      'stockholm',
      'storage',
      'store',
      'stream',
      'studio',
      'study',
      'style',
      'sucks',
      'supplies',
      'supply',
      'support',
      'surf',
      'surgery',
      'suzuki',
      'swatch',
      'swiftcover',
      'swiss',
      'sydney',
      'symantec',
      'systems',
      'tab',
      'taipei',
      'talk',
      'taobao',
      'target',
      'tatamotors',
      'tatar',
      'tattoo',
      'tax',
      'taxi',
      'tci',
      'tdk',
      'team',
      'tech',
      'technology',
      'temasek',
      'tennis',
      'teva',
      'thd',
      'theater',
      'theatre',
      'tiaa',
      'tickets',
      'tienda',
      'tiffany',
      'tips',
      'tires',
      'tirol',
      'tjmaxx',
      'tjx',
      'tkmaxx',
      'tmall',
      'today',
      'tokyo',
      'tools',
      'top',
      'toray',
      'toshiba',
      'total',
      'tours',
      'town',
      'toyota',
      'toys',
      'trade',
      'trading',
      'training',
      'travel',
      'travelchannel',
      'travelers',
      'travelersinsurance',
      'trust',
      'trv',
      'tube',
      'tui',
      'tunes',
      'tushu',
      'tvs',
      'ubank',
      'ubs',
      'unicom',
      'university',
      'uno',
      'uol',
      'ups',
      'vacations',
      'vana',
      'vanguard',
      'vegas',
      'ventures',
      'verisign',
      'versicherung',
      'vet',
      'viajes',
      'video',
      'vig',
      'viking',
      'villas',
      'vin',
      'vip',
      'virgin',
      'visa',
      'vision',
      'viva',
      'vivo',
      'vlaanderen',
      'vodka',
      'volkswagen',
      'volvo',
      'vote',
      'voting',
      'voto',
      'voyage',
      'vuelos',
      'wales',
      'walmart',
      'walter',
      'wang',
      'wanggou',
      'watch',
      'watches',
      'weather',
      'weatherchannel',
      'webcam',
      'weber',
      'website',
      'wed',
      'wedding',
      'weibo',
      'weir',
      'whoswho',
      'wien',
      'wiki',
      'williamhill',
      'win',
      'windows',
      'wine',
      'winners',
      'wme',
      'wolterskluwer',
      'woodside',
      'work',
      'works',
      'world',
      'wow',
      'wtc',
      'wtf',
      'xbox',
      'xerox',
      'xfinity',
      'xihuan',
      'xin',
      'कॉम',
      'セール',
      '佛山',
      '慈善',
      '集团',
      '在线',
      '大众汽车',
      '点看',
      'คอม',
      '八卦',
      'موقع',
      '公益',
      '公司',
      '香格里拉',
      '网站',
      '移动',
      '我爱你',
      'москва',
      'католик',
      'онлайн',
      'сайт',
      '联通',
      'קום',
      '时尚',
      '微博',
      '淡马锡',
      'ファッション',
      'орг',
      'नेट',
      'ストア',
      'アマゾン',
      '삼성',
      '商标',
      '商店',
      '商城',
      'дети',
      'ポイント',
      '新闻',
      '工行',
      '家電',
      'كوم',
      '中文网',
      '中信',
      '娱乐',
      '谷歌',
      '電訊盈科',
      '购物',
      'クラウド',
      '通販',
      '网店',
      'संगठन',
      '餐厅',
      '网络',
      'ком',
      '亚马逊',
      '诺基亚',
      '食品',
      '飞利浦',
      '手表',
      '手机',
      'ارامكو',
      'العليان',
      'اتصالات',
      'بازار',
      'ابوظبي',
      'كاثوليك',
      'همراه',
      '닷컴',
      '政府',
      'شبكة',
      'بيتك',
      'عرب',
      '机构',
      '组织机构',
      '健康',
      '招聘',
      'рус',
      '珠宝',
      '大拿',
      'みんな',
      'グーグル',
      '世界',
      '書籍',
      '网址',
      '닷넷',
      'コム',
      '天主教',
      '游戏',
      'vermögensberater',
      'vermögensberatung',
      '企业',
      '信息',
      '嘉里大酒店',
      '嘉里',
      '广东',
      '政务',
      'xyz',
      'yachts',
      'yahoo',
      'yamaxun',
      'yandex',
      'yodobashi',
      'yoga',
      'yokohama',
      'you',
      'youtube',
      'yun',
      'zappos',
      'zara',
      'zero',
      'zip',
      'zone',
      'zuerich',
      'cc.ua',
      'inf.ua',
      'ltd.ua',
      'adobeaemcloud.com',
      'adobeaemcloud.net',
      '*.dev.adobeaemcloud.com',
      'beep.pl',
      'barsy.ca',
      '*.compute.estate',
      '*.alces.network',
      'altervista.org',
      'alwaysdata.net',
      'cloudfront.net',
      '*.compute.amazonaws.com',
      '*.compute-1.amazonaws.com',
      '*.compute.amazonaws.com.cn',
      'us-east-1.amazonaws.com',
      'cn-north-1.eb.amazonaws.com.cn',
      'cn-northwest-1.eb.amazonaws.com.cn',
      'elasticbeanstalk.com',
      'ap-northeast-1.elasticbeanstalk.com',
      'ap-northeast-2.elasticbeanstalk.com',
      'ap-northeast-3.elasticbeanstalk.com',
      'ap-south-1.elasticbeanstalk.com',
      'ap-southeast-1.elasticbeanstalk.com',
      'ap-southeast-2.elasticbeanstalk.com',
      'ca-central-1.elasticbeanstalk.com',
      'eu-central-1.elasticbeanstalk.com',
      'eu-west-1.elasticbeanstalk.com',
      'eu-west-2.elasticbeanstalk.com',
      'eu-west-3.elasticbeanstalk.com',
      'sa-east-1.elasticbeanstalk.com',
      'us-east-1.elasticbeanstalk.com',
      'us-east-2.elasticbeanstalk.com',
      'us-gov-west-1.elasticbeanstalk.com',
      'us-west-1.elasticbeanstalk.com',
      'us-west-2.elasticbeanstalk.com',
      '*.elb.amazonaws.com',
      '*.elb.amazonaws.com.cn',
      's3.amazonaws.com',
      's3-ap-northeast-1.amazonaws.com',
      's3-ap-northeast-2.amazonaws.com',
      's3-ap-south-1.amazonaws.com',
      's3-ap-southeast-1.amazonaws.com',
      's3-ap-southeast-2.amazonaws.com',
      's3-ca-central-1.amazonaws.com',
      's3-eu-central-1.amazonaws.com',
      's3-eu-west-1.amazonaws.com',
      's3-eu-west-2.amazonaws.com',
      's3-eu-west-3.amazonaws.com',
      's3-external-1.amazonaws.com',
      's3-fips-us-gov-west-1.amazonaws.com',
      's3-sa-east-1.amazonaws.com',
      's3-us-gov-west-1.amazonaws.com',
      's3-us-east-2.amazonaws.com',
      's3-us-west-1.amazonaws.com',
      's3-us-west-2.amazonaws.com',
      's3.ap-northeast-2.amazonaws.com',
      's3.ap-south-1.amazonaws.com',
      's3.cn-north-1.amazonaws.com.cn',
      's3.ca-central-1.amazonaws.com',
      's3.eu-central-1.amazonaws.com',
      's3.eu-west-2.amazonaws.com',
      's3.eu-west-3.amazonaws.com',
      's3.us-east-2.amazonaws.com',
      's3.dualstack.ap-northeast-1.amazonaws.com',
      's3.dualstack.ap-northeast-2.amazonaws.com',
      's3.dualstack.ap-south-1.amazonaws.com',
      's3.dualstack.ap-southeast-1.amazonaws.com',
      's3.dualstack.ap-southeast-2.amazonaws.com',
      's3.dualstack.ca-central-1.amazonaws.com',
      's3.dualstack.eu-central-1.amazonaws.com',
      's3.dualstack.eu-west-1.amazonaws.com',
      's3.dualstack.eu-west-2.amazonaws.com',
      's3.dualstack.eu-west-3.amazonaws.com',
      's3.dualstack.sa-east-1.amazonaws.com',
      's3.dualstack.us-east-1.amazonaws.com',
      's3.dualstack.us-east-2.amazonaws.com',
      's3-website-us-east-1.amazonaws.com',
      's3-website-us-west-1.amazonaws.com',
      's3-website-us-west-2.amazonaws.com',
      's3-website-ap-northeast-1.amazonaws.com',
      's3-website-ap-southeast-1.amazonaws.com',
      's3-website-ap-southeast-2.amazonaws.com',
      's3-website-eu-west-1.amazonaws.com',
      's3-website-sa-east-1.amazonaws.com',
      's3-website.ap-northeast-2.amazonaws.com',
      's3-website.ap-south-1.amazonaws.com',
      's3-website.ca-central-1.amazonaws.com',
      's3-website.eu-central-1.amazonaws.com',
      's3-website.eu-west-2.amazonaws.com',
      's3-website.eu-west-3.amazonaws.com',
      's3-website.us-east-2.amazonaws.com',
      'amsw.nl',
      't3l3p0rt.net',
      'tele.amune.org',
      'apigee.io',
      'on-aptible.com',
      'user.aseinet.ne.jp',
      'gv.vc',
      'd.gv.vc',
      'user.party.eus',
      'pimienta.org',
      'poivron.org',
      'potager.org',
      'sweetpepper.org',
      'myasustor.com',
      'myfritz.net',
      '*.awdev.ca',
      '*.advisor.ws',
      'b-data.io',
      'backplaneapp.io',
      'balena-devices.com',
      'app.banzaicloud.io',
      'betainabox.com',
      'bnr.la',
      'blackbaudcdn.net',
      'boomla.net',
      'boxfuse.io',
      'square7.ch',
      'bplaced.com',
      'bplaced.de',
      'square7.de',
      'bplaced.net',
      'square7.net',
      'browsersafetymark.io',
      'uk0.bigv.io',
      'dh.bytemark.co.uk',
      'vm.bytemark.co.uk',
      'mycd.eu',
      'carrd.co',
      'crd.co',
      'uwu.ai',
      'ae.org',
      'ar.com',
      'br.com',
      'cn.com',
      'com.de',
      'com.se',
      'de.com',
      'eu.com',
      'gb.com',
      'gb.net',
      'hu.com',
      'hu.net',
      'jp.net',
      'jpn.com',
      'kr.com',
      'mex.com',
      'no.com',
      'qc.com',
      'ru.com',
      'sa.com',
      'se.net',
      'uk.com',
      'uk.net',
      'us.com',
      'uy.com',
      'za.bz',
      'za.com',
      'africa.com',
      'gr.com',
      'in.net',
      'us.org',
      'co.com',
      'c.la',
      'certmgr.org',
      'xenapponazure.com',
      'discourse.group',
      'discourse.team',
      'virtueeldomein.nl',
      'cleverapps.io',
      '*.lcl.dev',
      '*.stg.dev',
      'c66.me',
      'cloud66.ws',
      'cloud66.zone',
      'jdevcloud.com',
      'wpdevcloud.com',
      'cloudaccess.host',
      'freesite.host',
      'cloudaccess.net',
      'cloudcontrolled.com',
      'cloudcontrolapp.com',
      'cloudera.site',
      'trycloudflare.com',
      'workers.dev',
      'wnext.app',
      'co.ca',
      '*.otap.co',
      'co.cz',
      'c.cdn77.org',
      'cdn77-ssl.net',
      'r.cdn77.net',
      'rsc.cdn77.org',
      'ssl.origin.cdn77-secure.org',
      'cloudns.asia',
      'cloudns.biz',
      'cloudns.club',
      'cloudns.cc',
      'cloudns.eu',
      'cloudns.in',
      'cloudns.info',
      'cloudns.org',
      'cloudns.pro',
      'cloudns.pw',
      'cloudns.us',
      'cloudeity.net',
      'cnpy.gdn',
      'co.nl',
      'co.no',
      'webhosting.be',
      'hosting-cluster.nl',
      'ac.ru',
      'edu.ru',
      'gov.ru',
      'int.ru',
      'mil.ru',
      'test.ru',
      'dyn.cosidns.de',
      'dynamisches-dns.de',
      'dnsupdater.de',
      'internet-dns.de',
      'l-o-g-i-n.de',
      'dynamic-dns.info',
      'feste-ip.net',
      'knx-server.net',
      'static-access.net',
      'realm.cz',
      '*.cryptonomic.net',
      'cupcake.is',
      '*.customer-oci.com',
      '*.oci.customer-oci.com',
      '*.ocp.customer-oci.com',
      '*.ocs.customer-oci.com',
      'cyon.link',
      'cyon.site',
      'daplie.me',
      'localhost.daplie.me',
      'dattolocal.com',
      'dattorelay.com',
      'dattoweb.com',
      'mydatto.com',
      'dattolocal.net',
      'mydatto.net',
      'biz.dk',
      'co.dk',
      'firm.dk',
      'reg.dk',
      'store.dk',
      '*.dapps.earth',
      '*.bzz.dapps.earth',
      'builtwithdark.com',
      'edgestack.me',
      'debian.net',
      'dedyn.io',
      'dnshome.de',
      'online.th',
      'shop.th',
      'drayddns.com',
      'dreamhosters.com',
      'mydrobo.com',
      'drud.io',
      'drud.us',
      'duckdns.org',
      'dy.fi',
      'tunk.org',
      'dyndns-at-home.com',
      'dyndns-at-work.com',
      'dyndns-blog.com',
      'dyndns-free.com',
      'dyndns-home.com',
      'dyndns-ip.com',
      'dyndns-mail.com',
      'dyndns-office.com',
      'dyndns-pics.com',
      'dyndns-remote.com',
      'dyndns-server.com',
      'dyndns-web.com',
      'dyndns-wiki.com',
      'dyndns-work.com',
      'dyndns.biz',
      'dyndns.info',
      'dyndns.org',
      'dyndns.tv',
      'at-band-camp.net',
      'ath.cx',
      'barrel-of-knowledge.info',
      'barrell-of-knowledge.info',
      'better-than.tv',
      'blogdns.com',
      'blogdns.net',
      'blogdns.org',
      'blogsite.org',
      'boldlygoingnowhere.org',
      'broke-it.net',
      'buyshouses.net',
      'cechire.com',
      'dnsalias.com',
      'dnsalias.net',
      'dnsalias.org',
      'dnsdojo.com',
      'dnsdojo.net',
      'dnsdojo.org',
      'does-it.net',
      'doesntexist.com',
      'doesntexist.org',
      'dontexist.com',
      'dontexist.net',
      'dontexist.org',
      'doomdns.com',
      'doomdns.org',
      'dvrdns.org',
      'dyn-o-saur.com',
      'dynalias.com',
      'dynalias.net',
      'dynalias.org',
      'dynathome.net',
      'dyndns.ws',
      'endofinternet.net',
      'endofinternet.org',
      'endoftheinternet.org',
      'est-a-la-maison.com',
      'est-a-la-masion.com',
      'est-le-patron.com',
      'est-mon-blogueur.com',
      'for-better.biz',
      'for-more.biz',
      'for-our.info',
      'for-some.biz',
      'for-the.biz',
      'forgot.her.name',
      'forgot.his.name',
      'from-ak.com',
      'from-al.com',
      'from-ar.com',
      'from-az.net',
      'from-ca.com',
      'from-co.net',
      'from-ct.com',
      'from-dc.com',
      'from-de.com',
      'from-fl.com',
      'from-ga.com',
      'from-hi.com',
      'from-ia.com',
      'from-id.com',
      'from-il.com',
      'from-in.com',
      'from-ks.com',
      'from-ky.com',
      'from-la.net',
      'from-ma.com',
      'from-md.com',
      'from-me.org',
      'from-mi.com',
      'from-mn.com',
      'from-mo.com',
      'from-ms.com',
      'from-mt.com',
      'from-nc.com',
      'from-nd.com',
      'from-ne.com',
      'from-nh.com',
      'from-nj.com',
      'from-nm.com',
      'from-nv.com',
      'from-ny.net',
      'from-oh.com',
      'from-ok.com',
      'from-or.com',
      'from-pa.com',
      'from-pr.com',
      'from-ri.com',
      'from-sc.com',
      'from-sd.com',
      'from-tn.com',
      'from-tx.com',
      'from-ut.com',
      'from-va.com',
      'from-vt.com',
      'from-wa.com',
      'from-wi.com',
      'from-wv.com',
      'from-wy.com',
      'ftpaccess.cc',
      'fuettertdasnetz.de',
      'game-host.org',
      'game-server.cc',
      'getmyip.com',
      'gets-it.net',
      'go.dyndns.org',
      'gotdns.com',
      'gotdns.org',
      'groks-the.info',
      'groks-this.info',
      'ham-radio-op.net',
      'here-for-more.info',
      'hobby-site.com',
      'hobby-site.org',
      'home.dyndns.org',
      'homedns.org',
      'homeftp.net',
      'homeftp.org',
      'homeip.net',
      'homelinux.com',
      'homelinux.net',
      'homelinux.org',
      'homeunix.com',
      'homeunix.net',
      'homeunix.org',
      'iamallama.com',
      'in-the-band.net',
      'is-a-anarchist.com',
      'is-a-blogger.com',
      'is-a-bookkeeper.com',
      'is-a-bruinsfan.org',
      'is-a-bulls-fan.com',
      'is-a-candidate.org',
      'is-a-caterer.com',
      'is-a-celticsfan.org',
      'is-a-chef.com',
      'is-a-chef.net',
      'is-a-chef.org',
      'is-a-conservative.com',
      'is-a-cpa.com',
      'is-a-cubicle-slave.com',
      'is-a-democrat.com',
      'is-a-designer.com',
      'is-a-doctor.com',
      'is-a-financialadvisor.com',
      'is-a-geek.com',
      'is-a-geek.net',
      'is-a-geek.org',
      'is-a-green.com',
      'is-a-guru.com',
      'is-a-hard-worker.com',
      'is-a-hunter.com',
      'is-a-knight.org',
      'is-a-landscaper.com',
      'is-a-lawyer.com',
      'is-a-liberal.com',
      'is-a-libertarian.com',
      'is-a-linux-user.org',
      'is-a-llama.com',
      'is-a-musician.com',
      'is-a-nascarfan.com',
      'is-a-nurse.com',
      'is-a-painter.com',
      'is-a-patsfan.org',
      'is-a-personaltrainer.com',
      'is-a-photographer.com',
      'is-a-player.com',
      'is-a-republican.com',
      'is-a-rockstar.com',
      'is-a-socialist.com',
      'is-a-soxfan.org',
      'is-a-student.com',
      'is-a-teacher.com',
      'is-a-techie.com',
      'is-a-therapist.com',
      'is-an-accountant.com',
      'is-an-actor.com',
      'is-an-actress.com',
      'is-an-anarchist.com',
      'is-an-artist.com',
      'is-an-engineer.com',
      'is-an-entertainer.com',
      'is-by.us',
      'is-certified.com',
      'is-found.org',
      'is-gone.com',
      'is-into-anime.com',
      'is-into-cars.com',
      'is-into-cartoons.com',
      'is-into-games.com',
      'is-leet.com',
      'is-lost.org',
      'is-not-certified.com',
      'is-saved.org',
      'is-slick.com',
      'is-uberleet.com',
      'is-very-bad.org',
      'is-very-evil.org',
      'is-very-good.org',
      'is-very-nice.org',
      'is-very-sweet.org',
      'is-with-theband.com',
      'isa-geek.com',
      'isa-geek.net',
      'isa-geek.org',
      'isa-hockeynut.com',
      'issmarterthanyou.com',
      'isteingeek.de',
      'istmein.de',
      'kicks-ass.net',
      'kicks-ass.org',
      'knowsitall.info',
      'land-4-sale.us',
      'lebtimnetz.de',
      'leitungsen.de',
      'likes-pie.com',
      'likescandy.com',
      'merseine.nu',
      'mine.nu',
      'misconfused.org',
      'mypets.ws',
      'myphotos.cc',
      'neat-url.com',
      'office-on-the.net',
      'on-the-web.tv',
      'podzone.net',
      'podzone.org',
      'readmyblog.org',
      'saves-the-whales.com',
      'scrapper-site.net',
      'scrapping.cc',
      'selfip.biz',
      'selfip.com',
      'selfip.info',
      'selfip.net',
      'selfip.org',
      'sells-for-less.com',
      'sells-for-u.com',
      'sells-it.net',
      'sellsyourhome.org',
      'servebbs.com',
      'servebbs.net',
      'servebbs.org',
      'serveftp.net',
      'serveftp.org',
      'servegame.org',
      'shacknet.nu',
      'simple-url.com',
      'space-to-rent.com',
      'stuff-4-sale.org',
      'stuff-4-sale.us',
      'teaches-yoga.com',
      'thruhere.net',
      'traeumtgerade.de',
      'webhop.biz',
      'webhop.info',
      'webhop.net',
      'webhop.org',
      'worse-than.tv',
      'writesthisblog.com',
      'ddnss.de',
      'dyn.ddnss.de',
      'dyndns.ddnss.de',
      'dyndns1.de',
      'dyn-ip24.de',
      'home-webserver.de',
      'dyn.home-webserver.de',
      'myhome-server.de',
      'ddnss.org',
      'definima.net',
      'definima.io',
      'bci.dnstrace.pro',
      'ddnsfree.com',
      'ddnsgeek.com',
      'giize.com',
      'gleeze.com',
      'kozow.com',
      'loseyourip.com',
      'ooguy.com',
      'theworkpc.com',
      'casacam.net',
      'dynu.net',
      'accesscam.org',
      'camdvr.org',
      'freeddns.org',
      'mywire.org',
      'webredirect.org',
      'myddns.rocks',
      'blogsite.xyz',
      'dynv6.net',
      'e4.cz',
      'en-root.fr',
      'mytuleap.com',
      'onred.one',
      'staging.onred.one',
      'enonic.io',
      'customer.enonic.io',
      'eu.org',
      'al.eu.org',
      'asso.eu.org',
      'at.eu.org',
      'au.eu.org',
      'be.eu.org',
      'bg.eu.org',
      'ca.eu.org',
      'cd.eu.org',
      'ch.eu.org',
      'cn.eu.org',
      'cy.eu.org',
      'cz.eu.org',
      'de.eu.org',
      'dk.eu.org',
      'edu.eu.org',
      'ee.eu.org',
      'es.eu.org',
      'fi.eu.org',
      'fr.eu.org',
      'gr.eu.org',
      'hr.eu.org',
      'hu.eu.org',
      'ie.eu.org',
      'il.eu.org',
      'in.eu.org',
      'int.eu.org',
      'is.eu.org',
      'it.eu.org',
      'jp.eu.org',
      'kr.eu.org',
      'lt.eu.org',
      'lu.eu.org',
      'lv.eu.org',
      'mc.eu.org',
      'me.eu.org',
      'mk.eu.org',
      'mt.eu.org',
      'my.eu.org',
      'net.eu.org',
      'ng.eu.org',
      'nl.eu.org',
      'no.eu.org',
      'nz.eu.org',
      'paris.eu.org',
      'pl.eu.org',
      'pt.eu.org',
      'q-a.eu.org',
      'ro.eu.org',
      'ru.eu.org',
      'se.eu.org',
      'si.eu.org',
      'sk.eu.org',
      'tr.eu.org',
      'uk.eu.org',
      'us.eu.org',
      'eu-1.evennode.com',
      'eu-2.evennode.com',
      'eu-3.evennode.com',
      'eu-4.evennode.com',
      'us-1.evennode.com',
      'us-2.evennode.com',
      'us-3.evennode.com',
      'us-4.evennode.com',
      'twmail.cc',
      'twmail.net',
      'twmail.org',
      'mymailer.com.tw',
      'url.tw',
      'apps.fbsbx.com',
      'ru.net',
      'adygeya.ru',
      'bashkiria.ru',
      'bir.ru',
      'cbg.ru',
      'com.ru',
      'dagestan.ru',
      'grozny.ru',
      'kalmykia.ru',
      'kustanai.ru',
      'marine.ru',
      'mordovia.ru',
      'msk.ru',
      'mytis.ru',
      'nalchik.ru',
      'nov.ru',
      'pyatigorsk.ru',
      'spb.ru',
      'vladikavkaz.ru',
      'vladimir.ru',
      'abkhazia.su',
      'adygeya.su',
      'aktyubinsk.su',
      'arkhangelsk.su',
      'armenia.su',
      'ashgabad.su',
      'azerbaijan.su',
      'balashov.su',
      'bashkiria.su',
      'bryansk.su',
      'bukhara.su',
      'chimkent.su',
      'dagestan.su',
      'east-kazakhstan.su',
      'exnet.su',
      'georgia.su',
      'grozny.su',
      'ivanovo.su',
      'jambyl.su',
      'kalmykia.su',
      'kaluga.su',
      'karacol.su',
      'karaganda.su',
      'karelia.su',
      'khakassia.su',
      'krasnodar.su',
      'kurgan.su',
      'kustanai.su',
      'lenug.su',
      'mangyshlak.su',
      'mordovia.su',
      'msk.su',
      'murmansk.su',
      'nalchik.su',
      'navoi.su',
      'north-kazakhstan.su',
      'nov.su',
      'obninsk.su',
      'penza.su',
      'pokrovsk.su',
      'sochi.su',
      'spb.su',
      'tashkent.su',
      'termez.su',
      'togliatti.su',
      'troitsk.su',
      'tselinograd.su',
      'tula.su',
      'tuva.su',
      'vladikavkaz.su',
      'vladimir.su',
      'vologda.su',
      'channelsdvr.net',
      'u.channelsdvr.net',
      'fastly-terrarium.com',
      'fastlylb.net',
      'map.fastlylb.net',
      'freetls.fastly.net',
      'map.fastly.net',
      'a.prod.fastly.net',
      'global.prod.fastly.net',
      'a.ssl.fastly.net',
      'b.ssl.fastly.net',
      'global.ssl.fastly.net',
      'fastpanel.direct',
      'fastvps-server.com',
      'fhapp.xyz',
      'fedorainfracloud.org',
      'fedorapeople.org',
      'cloud.fedoraproject.org',
      'app.os.fedoraproject.org',
      'app.os.stg.fedoraproject.org',
      'mydobiss.com',
      'filegear.me',
      'filegear-au.me',
      'filegear-de.me',
      'filegear-gb.me',
      'filegear-ie.me',
      'filegear-jp.me',
      'filegear-sg.me',
      'firebaseapp.com',
      'flynnhub.com',
      'flynnhosting.net',
      '0e.vc',
      'freebox-os.com',
      'freeboxos.com',
      'fbx-os.fr',
      'fbxos.fr',
      'freebox-os.fr',
      'freeboxos.fr',
      'freedesktop.org',
      '*.futurecms.at',
      '*.ex.futurecms.at',
      '*.in.futurecms.at',
      'futurehosting.at',
      'futuremailing.at',
      '*.ex.ortsinfo.at',
      '*.kunden.ortsinfo.at',
      '*.statics.cloud',
      'service.gov.uk',
      'gehirn.ne.jp',
      'usercontent.jp',
      'gentapps.com',
      'lab.ms',
      'github.io',
      'githubusercontent.com',
      'gitlab.io',
      'glitch.me',
      'lolipop.io',
      'cloudapps.digital',
      'london.cloudapps.digital',
      'homeoffice.gov.uk',
      'ro.im',
      'shop.ro',
      'goip.de',
      'run.app',
      'a.run.app',
      'web.app',
      '*.0emm.com',
      'appspot.com',
      '*.r.appspot.com',
      'blogspot.ae',
      'blogspot.al',
      'blogspot.am',
      'blogspot.ba',
      'blogspot.be',
      'blogspot.bg',
      'blogspot.bj',
      'blogspot.ca',
      'blogspot.cf',
      'blogspot.ch',
      'blogspot.cl',
      'blogspot.co.at',
      'blogspot.co.id',
      'blogspot.co.il',
      'blogspot.co.ke',
      'blogspot.co.nz',
      'blogspot.co.uk',
      'blogspot.co.za',
      'blogspot.com',
      'blogspot.com.ar',
      'blogspot.com.au',
      'blogspot.com.br',
      'blogspot.com.by',
      'blogspot.com.co',
      'blogspot.com.cy',
      'blogspot.com.ee',
      'blogspot.com.eg',
      'blogspot.com.es',
      'blogspot.com.mt',
      'blogspot.com.ng',
      'blogspot.com.tr',
      'blogspot.com.uy',
      'blogspot.cv',
      'blogspot.cz',
      'blogspot.de',
      'blogspot.dk',
      'blogspot.fi',
      'blogspot.fr',
      'blogspot.gr',
      'blogspot.hk',
      'blogspot.hr',
      'blogspot.hu',
      'blogspot.ie',
      'blogspot.in',
      'blogspot.is',
      'blogspot.it',
      'blogspot.jp',
      'blogspot.kr',
      'blogspot.li',
      'blogspot.lt',
      'blogspot.lu',
      'blogspot.md',
      'blogspot.mk',
      'blogspot.mr',
      'blogspot.mx',
      'blogspot.my',
      'blogspot.nl',
      'blogspot.no',
      'blogspot.pe',
      'blogspot.pt',
      'blogspot.qa',
      'blogspot.re',
      'blogspot.ro',
      'blogspot.rs',
      'blogspot.ru',
      'blogspot.se',
      'blogspot.sg',
      'blogspot.si',
      'blogspot.sk',
      'blogspot.sn',
      'blogspot.td',
      'blogspot.tw',
      'blogspot.ug',
      'blogspot.vn',
      'cloudfunctions.net',
      'cloud.goog',
      'codespot.com',
      'googleapis.com',
      'googlecode.com',
      'pagespeedmobilizer.com',
      'publishproxy.com',
      'withgoogle.com',
      'withyoutube.com',
      'awsmppl.com',
      'fin.ci',
      'free.hr',
      'caa.li',
      'ua.rs',
      'conf.se',
      'hs.zone',
      'hs.run',
      'hashbang.sh',
      'hasura.app',
      'hasura-app.io',
      'hepforge.org',
      'herokuapp.com',
      'herokussl.com',
      'myravendb.com',
      'ravendb.community',
      'ravendb.me',
      'development.run',
      'ravendb.run',
      'bpl.biz',
      'orx.biz',
      'ng.city',
      'biz.gl',
      'ng.ink',
      'col.ng',
      'firm.ng',
      'gen.ng',
      'ltd.ng',
      'ngo.ng',
      'ng.school',
      'sch.so',
      'häkkinen.fi',
      '*.moonscale.io',
      'moonscale.net',
      'iki.fi',
      'dyn-berlin.de',
      'in-berlin.de',
      'in-brb.de',
      'in-butter.de',
      'in-dsl.de',
      'in-dsl.net',
      'in-dsl.org',
      'in-vpn.de',
      'in-vpn.net',
      'in-vpn.org',
      'biz.at',
      'info.at',
      'info.cx',
      'ac.leg.br',
      'al.leg.br',
      'am.leg.br',
      'ap.leg.br',
      'ba.leg.br',
      'ce.leg.br',
      'df.leg.br',
      'es.leg.br',
      'go.leg.br',
      'ma.leg.br',
      'mg.leg.br',
      'ms.leg.br',
      'mt.leg.br',
      'pa.leg.br',
      'pb.leg.br',
      'pe.leg.br',
      'pi.leg.br',
      'pr.leg.br',
      'rj.leg.br',
      'rn.leg.br',
      'ro.leg.br',
      'rr.leg.br',
      'rs.leg.br',
      'sc.leg.br',
      'se.leg.br',
      'sp.leg.br',
      'to.leg.br',
      'pixolino.com',
      'ipifony.net',
      'mein-iserv.de',
      'test-iserv.de',
      'iserv.dev',
      'iobb.net',
      'myjino.ru',
      '*.hosting.myjino.ru',
      '*.landing.myjino.ru',
      '*.spectrum.myjino.ru',
      '*.vps.myjino.ru',
      '*.triton.zone',
      '*.cns.joyent.com',
      'js.org',
      'kaas.gg',
      'khplay.nl',
      'keymachine.de',
      'kinghost.net',
      'uni5.net',
      'knightpoint.systems',
      'oya.to',
      'co.krd',
      'edu.krd',
      'git-repos.de',
      'lcube-server.de',
      'svn-repos.de',
      'leadpages.co',
      'lpages.co',
      'lpusercontent.com',
      'lelux.site',
      'co.business',
      'co.education',
      'co.events',
      'co.financial',
      'co.network',
      'co.place',
      'co.technology',
      'app.lmpm.com',
      'linkitools.space',
      'linkyard.cloud',
      'linkyard-cloud.ch',
      'members.linode.com',
      'nodebalancer.linode.com',
      'we.bs',
      'loginline.app',
      'loginline.dev',
      'loginline.io',
      'loginline.services',
      'loginline.site',
      'krasnik.pl',
      'leczna.pl',
      'lubartow.pl',
      'lublin.pl',
      'poniatowa.pl',
      'swidnik.pl',
      'uklugs.org',
      'glug.org.uk',
      'lug.org.uk',
      'lugs.org.uk',
      'barsy.bg',
      'barsy.co.uk',
      'barsyonline.co.uk',
      'barsycenter.com',
      'barsyonline.com',
      'barsy.club',
      'barsy.de',
      'barsy.eu',
      'barsy.in',
      'barsy.info',
      'barsy.io',
      'barsy.me',
      'barsy.menu',
      'barsy.mobi',
      'barsy.net',
      'barsy.online',
      'barsy.org',
      'barsy.pro',
      'barsy.pub',
      'barsy.shop',
      'barsy.site',
      'barsy.support',
      'barsy.uk',
      '*.magentosite.cloud',
      'mayfirst.info',
      'mayfirst.org',
      'hb.cldmail.ru',
      'miniserver.com',
      'memset.net',
      'cloud.metacentrum.cz',
      'custom.metacentrum.cz',
      'flt.cloud.muni.cz',
      'usr.cloud.muni.cz',
      'meteorapp.com',
      'eu.meteorapp.com',
      'co.pl',
      'azurecontainer.io',
      'azurewebsites.net',
      'azure-mobile.net',
      'cloudapp.net',
      'mozilla-iot.org',
      'bmoattachments.org',
      'net.ru',
      'org.ru',
      'pp.ru',
      'ui.nabu.casa',
      'pony.club',
      'of.fashion',
      'on.fashion',
      'of.football',
      'in.london',
      'of.london',
      'for.men',
      'and.mom',
      'for.mom',
      'for.one',
      'for.sale',
      'of.work',
      'to.work',
      'nctu.me',
      'bitballoon.com',
      'netlify.com',
      '4u.com',
      'ngrok.io',
      'nh-serv.co.uk',
      'nfshost.com',
      'dnsking.ch',
      'mypi.co',
      'n4t.co',
      '001www.com',
      'ddnslive.com',
      'myiphost.com',
      'forumz.info',
      '16-b.it',
      '32-b.it',
      '64-b.it',
      'soundcast.me',
      'tcp4.me',
      'dnsup.net',
      'hicam.net',
      'now-dns.net',
      'ownip.net',
      'vpndns.net',
      'dynserv.org',
      'now-dns.org',
      'x443.pw',
      'now-dns.top',
      'ntdll.top',
      'freeddns.us',
      'crafting.xyz',
      'zapto.xyz',
      'nsupdate.info',
      'nerdpol.ovh',
      'blogsyte.com',
      'brasilia.me',
      'cable-modem.org',
      'ciscofreak.com',
      'collegefan.org',
      'couchpotatofries.org',
      'damnserver.com',
      'ddns.me',
      'ditchyourip.com',
      'dnsfor.me',
      'dnsiskinky.com',
      'dvrcam.info',
      'dynns.com',
      'eating-organic.net',
      'fantasyleague.cc',
      'geekgalaxy.com',
      'golffan.us',
      'health-carereform.com',
      'homesecuritymac.com',
      'homesecuritypc.com',
      'hopto.me',
      'ilovecollege.info',
      'loginto.me',
      'mlbfan.org',
      'mmafan.biz',
      'myactivedirectory.com',
      'mydissent.net',
      'myeffect.net',
      'mymediapc.net',
      'mypsx.net',
      'mysecuritycamera.com',
      'mysecuritycamera.net',
      'mysecuritycamera.org',
      'net-freaks.com',
      'nflfan.org',
      'nhlfan.net',
      'no-ip.ca',
      'no-ip.co.uk',
      'no-ip.net',
      'noip.us',
      'onthewifi.com',
      'pgafan.net',
      'point2this.com',
      'pointto.us',
      'privatizehealthinsurance.net',
      'quicksytes.com',
      'read-books.org',
      'securitytactics.com',
      'serveexchange.com',
      'servehumour.com',
      'servep2p.com',
      'servesarcasm.com',
      'stufftoread.com',
      'ufcfan.org',
      'unusualperson.com',
      'workisboring.com',
      '3utilities.com',
      'bounceme.net',
      'ddns.net',
      'ddnsking.com',
      'gotdns.ch',
      'hopto.org',
      'myftp.biz',
      'myftp.org',
      'myvnc.com',
      'no-ip.biz',
      'no-ip.info',
      'no-ip.org',
      'noip.me',
      'redirectme.net',
      'servebeer.com',
      'serveblog.net',
      'servecounterstrike.com',
      'serveftp.com',
      'servegame.com',
      'servehalflife.com',
      'servehttp.com',
      'serveirc.com',
      'serveminecraft.net',
      'servemp3.com',
      'servepics.com',
      'servequake.com',
      'sytes.net',
      'webhop.me',
      'zapto.org',
      'stage.nodeart.io',
      'nodum.co',
      'nodum.io',
      'pcloud.host',
      'nyc.mn',
      'nom.ae',
      'nom.af',
      'nom.ai',
      'nom.al',
      'nym.by',
      'nom.bz',
      'nym.bz',
      'nom.cl',
      'nym.ec',
      'nom.gd',
      'nom.ge',
      'nom.gl',
      'nym.gr',
      'nom.gt',
      'nym.gy',
      'nym.hk',
      'nom.hn',
      'nym.ie',
      'nom.im',
      'nom.ke',
      'nym.kz',
      'nym.la',
      'nym.lc',
      'nom.li',
      'nym.li',
      'nym.lt',
      'nym.lu',
      'nom.lv',
      'nym.me',
      'nom.mk',
      'nym.mn',
      'nym.mx',
      'nom.nu',
      'nym.nz',
      'nym.pe',
      'nym.pt',
      'nom.pw',
      'nom.qa',
      'nym.ro',
      'nom.rs',
      'nom.si',
      'nym.sk',
      'nom.st',
      'nym.su',
      'nym.sx',
      'nom.tj',
      'nym.tw',
      'nom.ug',
      'nom.uy',
      'nom.vc',
      'nom.vg',
      'static.observableusercontent.com',
      'cya.gg',
      'cloudycluster.net',
      'nid.io',
      'opencraft.hosting',
      'operaunite.com',
      'skygearapp.com',
      'outsystemscloud.com',
      'ownprovider.com',
      'own.pm',
      'ox.rs',
      'oy.lc',
      'pgfog.com',
      'pagefrontapp.com',
      'art.pl',
      'gliwice.pl',
      'krakow.pl',
      'poznan.pl',
      'wroc.pl',
      'zakopane.pl',
      'pantheonsite.io',
      'gotpantheon.com',
      'mypep.link',
      'perspecta.cloud',
      'on-web.fr',
      '*.platform.sh',
      '*.platformsh.site',
      'dyn53.io',
      'co.bn',
      'xen.prgmr.com',
      'priv.at',
      'prvcy.page',
      '*.dweb.link',
      'protonet.io',
      'chirurgiens-dentistes-en-france.fr',
      'byen.site',
      'pubtls.org',
      'qualifioapp.com',
      'qbuser.com',
      'instantcloud.cn',
      'ras.ru',
      'qa2.com',
      'qcx.io',
      '*.sys.qcx.io',
      'dev-myqnapcloud.com',
      'alpha-myqnapcloud.com',
      'myqnapcloud.com',
      '*.quipelements.com',
      'vapor.cloud',
      'vaporcloud.io',
      'rackmaze.com',
      'rackmaze.net',
      '*.on-k3s.io',
      '*.on-rancher.cloud',
      '*.on-rio.io',
      'readthedocs.io',
      'rhcloud.com',
      'app.render.com',
      'onrender.com',
      'repl.co',
      'repl.run',
      'resindevice.io',
      'devices.resinstaging.io',
      'hzc.io',
      'wellbeingzone.eu',
      'ptplus.fit',
      'wellbeingzone.co.uk',
      'git-pages.rit.edu',
      'sandcats.io',
      'logoip.de',
      'logoip.com',
      'schokokeks.net',
      'gov.scot',
      'scrysec.com',
      'firewall-gateway.com',
      'firewall-gateway.de',
      'my-gateway.de',
      'my-router.de',
      'spdns.de',
      'spdns.eu',
      'firewall-gateway.net',
      'my-firewall.org',
      'myfirewall.org',
      'spdns.org',
      'senseering.net',
      'biz.ua',
      'co.ua',
      'pp.ua',
      'shiftedit.io',
      'myshopblocks.com',
      'shopitsite.com',
      'mo-siemens.io',
      '1kapp.com',
      'appchizi.com',
      'applinzi.com',
      'sinaapp.com',
      'vipsinaapp.com',
      'siteleaf.net',
      'bounty-full.com',
      'alpha.bounty-full.com',
      'beta.bounty-full.com',
      'stackhero-network.com',
      'static.land',
      'dev.static.land',
      'sites.static.land',
      'apps.lair.io',
      '*.stolos.io',
      'spacekit.io',
      'customer.speedpartner.de',
      'api.stdlib.com',
      'storj.farm',
      'utwente.io',
      'soc.srcf.net',
      'user.srcf.net',
      'temp-dns.com',
      'applicationcloud.io',
      'scapp.io',
      '*.s5y.io',
      '*.sensiosite.cloud',
      'syncloud.it',
      'diskstation.me',
      'dscloud.biz',
      'dscloud.me',
      'dscloud.mobi',
      'dsmynas.com',
      'dsmynas.net',
      'dsmynas.org',
      'familyds.com',
      'familyds.net',
      'familyds.org',
      'i234.me',
      'myds.me',
      'synology.me',
      'vpnplus.to',
      'direct.quickconnect.to',
      'taifun-dns.de',
      'gda.pl',
      'gdansk.pl',
      'gdynia.pl',
      'med.pl',
      'sopot.pl',
      'edugit.org',
      'telebit.app',
      'telebit.io',
      '*.telebit.xyz',
      'gwiddle.co.uk',
      'thingdustdata.com',
      'cust.dev.thingdust.io',
      'cust.disrec.thingdust.io',
      'cust.prod.thingdust.io',
      'cust.testing.thingdust.io',
      'arvo.network',
      'azimuth.network',
      'bloxcms.com',
      'townnews-staging.com',
      '12hp.at',
      '2ix.at',
      '4lima.at',
      'lima-city.at',
      '12hp.ch',
      '2ix.ch',
      '4lima.ch',
      'lima-city.ch',
      'trafficplex.cloud',
      'de.cool',
      '12hp.de',
      '2ix.de',
      '4lima.de',
      'lima-city.de',
      '1337.pictures',
      'clan.rip',
      'lima-city.rocks',
      'webspace.rocks',
      'lima.zone',
      '*.transurl.be',
      '*.transurl.eu',
      '*.transurl.nl',
      'tuxfamily.org',
      'dd-dns.de',
      'diskstation.eu',
      'diskstation.org',
      'dray-dns.de',
      'draydns.de',
      'dyn-vpn.de',
      'dynvpn.de',
      'mein-vigor.de',
      'my-vigor.de',
      'my-wan.de',
      'syno-ds.de',
      'synology-diskstation.de',
      'synology-ds.de',
      'uber.space',
      '*.uberspace.de',
      'hk.com',
      'hk.org',
      'ltd.hk',
      'inc.hk',
      'virtualuser.de',
      'virtual-user.de',
      'urown.cloud',
      'dnsupdate.info',
      'lib.de.us',
      '2038.io',
      'router.management',
      'v-info.info',
      'voorloper.cloud',
      'v.ua',
      'wafflecell.com',
      '*.webhare.dev',
      'wedeploy.io',
      'wedeploy.me',
      'wedeploy.sh',
      'remotewd.com',
      'wmflabs.org',
      'myforum.community',
      'community-pro.de',
      'diskussionsbereich.de',
      'community-pro.net',
      'meinforum.net',
      'half.host',
      'xnbay.com',
      'u2.xnbay.com',
      'u2-local.xnbay.com',
      'cistron.nl',
      'demon.nl',
      'xs4all.space',
      'yandexcloud.net',
      'storage.yandexcloud.net',
      'website.yandexcloud.net',
      'official.academy',
      'yolasite.com',
      'ybo.faith',
      'yombo.me',
      'homelink.one',
      'ybo.party',
      'ybo.review',
      'ybo.science',
      'ybo.trade',
      'nohost.me',
      'noho.st',
      'za.net',
      'za.org',
      'now.sh',
      'bss.design',
      'basicserver.io',
      'virtualserver.io',
      'enterprisecloud.nu',
    ];
  },
  23: function(e, a, n) {
    'use strict';
    var t = n(24),
      i = {};
    (i.rules = n(22).map(function(e) {
      return {
        rule: e,
        suffix: e.replace(/^(\*\.|\!)/, ''),
        punySuffix: -1,
        wildcard: '*' === e.charAt(0),
        exception: '!' === e.charAt(0),
      };
    })),
      (i.endsWith = function(e, a) {
        return -1 !== e.indexOf(a, e.length - a.length);
      }),
      (i.findRule = function(e) {
        var a = t.toASCII(e);
        return i.rules.reduce(function(e, n) {
          return -1 === n.punySuffix && (n.punySuffix = t.toASCII(n.suffix)), i.endsWith(a, '.' + n.punySuffix) || a === n.punySuffix ? n : e;
        }, null);
      }),
      (a.errorCodes = {
        DOMAIN_TOO_SHORT: 'Domain name too short.',
        DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
        LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
        LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
        LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
        LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
        LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.',
      }),
      (i.validate = function(e) {
        var a = t.toASCII(e);
        if (a.length < 1) return 'DOMAIN_TOO_SHORT';
        if (a.length > 255) return 'DOMAIN_TOO_LONG';
        for (var n, i = a.split('.'), o = 0; o < i.length; ++o) {
          if (((n = i[o]), !n.length)) return 'LABEL_TOO_SHORT';
          if (n.length > 63) return 'LABEL_TOO_LONG';
          if ('-' === n.charAt(0)) return 'LABEL_STARTS_WITH_DASH';
          if ('-' === n.charAt(n.length - 1)) return 'LABEL_ENDS_WITH_DASH';
          if (!/^[a-z0-9\-]+$/.test(n)) return 'LABEL_INVALID_CHARS';
        }
      }),
      (a.parse = function(e) {
        if ('string' != typeof e) throw new TypeError('Domain name must be a string.');
        var n = e.slice(0).toLowerCase();
        '.' === n.charAt(n.length - 1) && (n = n.slice(0, n.length - 1));
        var o = i.validate(n);
        if (o) return { input: e, error: { message: a.errorCodes[o], code: o } };
        var r = { input: e, tld: null, sld: null, domain: null, subdomain: null, listed: !1 },
          s = n.split('.');
        if ('local' === s[s.length - 1]) return r;
        var u = function() {
            return /xn--/.test(n) ? (r.domain && (r.domain = t.toASCII(r.domain)), r.subdomain && (r.subdomain = t.toASCII(r.subdomain)), r) : r;
          },
          m = i.findRule(n);
        if (!m) return s.length < 2 ? r : ((r.tld = s.pop()), (r.sld = s.pop()), (r.domain = [r.sld, r.tld].join('.')), s.length && (r.subdomain = s.pop()), u());
        r.listed = !0;
        var d = m.suffix.split('.'),
          l = s.slice(0, s.length - d.length);
        return (
          m.exception && l.push(d.shift()),
          (r.tld = d.join('.')),
          l.length
            ? (m.wildcard && (d.unshift(l.pop()), (r.tld = d.join('.'))),
              l.length ? ((r.sld = l.pop()), (r.domain = [r.sld, r.tld].join('.')), l.length && (r.subdomain = l.join('.')), u()) : u())
            : u()
        );
      }),
      (a.get = function(e) {
        return e ? a.parse(e).domain || null : null;
      }),
      (a.isValid = function(e) {
        var n = a.parse(e);
        return Boolean(n.domain && n.listed);
      });
  },
  24: function(e, a, n) {
    (function(e, t) {
      var i;
      !(function(o) {
        function r(e) {
          throw new RangeError(z[e]);
        }

        function s(e, a) {
          for (var n = e.length, t = []; n--; ) t[n] = a(e[n]);
          return t;
        }

        function u(e, a) {
          var n = e.split('@'),
            t = '';
          return n.length > 1 && ((t = n[0] + '@'), (e = n[1])), (e = e.replace(x, '.')), t + s(e.split('.'), a).join('.');
        }

        function m(e) {
          for (var a, n, t = [], i = 0, o = e.length; i < o; )
            (a = e.charCodeAt(i++)),
              a >= 55296 && a <= 56319 && i < o ? ((n = e.charCodeAt(i++)), 56320 == (64512 & n) ? t.push(((1023 & a) << 10) + (1023 & n) + 65536) : (t.push(a), i--)) : t.push(a);
          return t;
        }

        function d(e) {
          return s(e, function(e) {
            var a = '';
            return e > 65535 && ((e -= 65536), (a += A(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (a += A(e));
          }).join('');
        }

        function l(e) {
          return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : j;
        }

        function c(e, a) {
          return e + 22 + 75 * (e < 26) - ((0 != a) << 5);
        }

        function _(e, a, n) {
          var t = 0;
          for (e = n ? E(e / Y) : e >> 1, e += E(e / a); e > (O * v) >> 1; t += j) e = E(e / O);
          return E(t + ((O + 1) * e) / (e + L));
        }

        function h(e) {
          var a,
            n,
            t,
            i,
            o,
            s,
            u,
            m,
            c,
            h,
            p = [],
            f = e.length,
            k = 0,
            g = D,
            y = w;
          for (n = e.lastIndexOf(T), n < 0 && (n = 0), t = 0; t < n; ++t) e.charCodeAt(t) >= 128 && r('not-basic'), p.push(e.charCodeAt(t));
          for (i = n > 0 ? n + 1 : 0; i < f; ) {
            for (
              o = k, s = 1, u = j;
              i >= f && r('invalid-input'),
                (m = l(e.charCodeAt(i++))),
                (m >= j || m > E((M - k) / s)) && r('overflow'),
                (k += m * s),
                (c = u <= y ? b : u >= y + v ? v : u - y),
                !(m < c);
              u += j
            )
              (h = j - c), s > E(M / h) && r('overflow'), (s *= h);
            (a = p.length + 1), (y = _(k - o, a, 0 == o)), E(k / a) > M - g && r('overflow'), (g += E(k / a)), (k %= a), p.splice(k++, 0, g);
          }
          return d(p);
        }

        function p(e) {
          var a,
            n,
            t,
            i,
            o,
            s,
            u,
            d,
            l,
            h,
            p,
            f,
            k,
            g,
            y,
            L = [];
          for (e = m(e), f = e.length, a = D, n = 0, o = w, s = 0; s < f; ++s) (p = e[s]) < 128 && L.push(A(p));
          for (t = i = L.length, i && L.push(T); t < f; ) {
            for (u = M, s = 0; s < f; ++s) (p = e[s]) >= a && p < u && (u = p);
            for (k = t + 1, u - a > E((M - n) / k) && r('overflow'), n += (u - a) * k, a = u, s = 0; s < f; ++s)
              if (((p = e[s]), p < a && ++n > M && r('overflow'), p == a)) {
                for (d = n, l = j; (h = l <= o ? b : l >= o + v ? v : l - o), !(d < h); l += j) (y = d - h), (g = j - h), L.push(A(c(h + (y % g), 0))), (d = E(y / g));
                L.push(A(c(d, 0))), (o = _(n, k, t == i)), (n = 0), ++t;
              }
            ++n, ++a;
          }
          return L.join('');
        }

        function f(e) {
          return u(e, function(e) {
            return S.test(e) ? h(e.slice(4).toLowerCase()) : e;
          });
        }

        function k(e) {
          return u(e, function(e) {
            return H.test(e) ? 'xn--' + p(e) : e;
          });
        }

        var g = ('object' == typeof a && a && a.nodeType, 'object' == typeof e && e && e.nodeType, 'object' == typeof t && t);
        var y,
          M = 2147483647,
          j = 36,
          b = 1,
          v = 26,
          L = 38,
          Y = 700,
          w = 72,
          D = 128,
          T = '-',
          S = /^xn--/,
          H = /[^\x20-\x7E]/,
          x = /[\x2E\u3002\uFF0E\uFF61]/g,
          z = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          O = j - b,
          E = Math.floor,
          A = String.fromCharCode;
        (y = {
          version: '1.4.1',
          ucs2: { decode: m, encode: d },
          decode: h,
          encode: p,
          toASCII: k,
          toUnicode: f,
        }),
          void 0 !==
            (i = function() {
              return y;
            }.call(a, n, a, e)) && (e.exports = i);
      })();
    }.call(a, n(11)(e), n(3)));
  },
  // 重写 regeneratorRuntime , 把一些东西重新封装
  25: function(e, a, n) {
    var t = (function(e) {
      'use strict';

      function a(e, a, n) {
        return Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[a];
      }

      function n(e, a, n, t) {
        var o = a && a.prototype instanceof i ? a : i,
          r = Object.create(o.prototype),
          s = new _(t || []);
        return (r._invoke = m(e, n, s)), r;
      }

      function t(e, a, n) {
        try {
          return { type: 'normal', arg: e.call(a, n) };
        } catch (e) {
          return { type: 'throw', arg: e };
        }
      }

      function i() {}

      function o() {}

      function r() {}

      function s(e) {
        ['next', 'throw', 'return'].forEach(function(n) {
          a(e, n, function(e) {
            return this._invoke(n, e);
          });
        });
      }

      function u(e, a) {
        function n(i, o, r, s) {
          var u = t(e[i], e, o);
          if ('throw' !== u.type) {
            var m = u.arg,
              d = m.value;
            return d && 'object' == typeof d && g.call(d, '__await')
              ? a.resolve(d.__await).then(
                  function(e) {
                    n('next', e, r, s);
                  },
                  function(e) {
                    n('throw', e, r, s);
                  }
                )
              : a.resolve(d).then(
                  function(e) {
                    (m.value = e), r(m);
                  },
                  function(e) {
                    return n('throw', e, r, s);
                  }
                );
          }
          s(u.arg);
        }

        function i(e, t) {
          function i() {
            return new a(function(a, i) {
              n(e, t, a, i);
            });
          }

          return (o = o ? o.then(i, i) : i());
        }

        var o;
        this._invoke = i;
      }

      function m(e, a, n) {
        var i = v;
        return function(o, r) {
          if (i === Y) throw new Error('Generator is already running');
          if (i === w) {
            if ('throw' === o) throw r;
            return p();
          }
          for (n.method = o, n.arg = r; ; ) {
            var s = n.delegate;
            if (s) {
              var u = d(s, n);
              if (u) {
                if (u === D) continue;
                return u;
              }
            }
            if ('next' === n.method) n.sent = n._sent = n.arg;
            else if ('throw' === n.method) {
              if (i === v) throw ((i = w), n.arg);
              n.dispatchException(n.arg);
            } else 'return' === n.method && n.abrupt('return', n.arg);
            i = Y;
            var m = t(e, a, n);
            if ('normal' === m.type) {
              if (((i = n.done ? w : L), m.arg === D)) continue;
              return { value: m.arg, done: n.done };
            }
            'throw' === m.type && ((i = w), (n.method = 'throw'), (n.arg = m.arg));
          }
        };
      }

      function d(e, a) {
        var n = e.iterator[a.method];
        if (n === f) {
          if (((a.delegate = null), 'throw' === a.method)) {
            if (e.iterator.return && ((a.method = 'return'), (a.arg = f), d(e, a), 'throw' === a.method)) return D;
            (a.method = 'throw'), (a.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return D;
        }
        var i = t(n, e.iterator, a.arg);
        if ('throw' === i.type) return (a.method = 'throw'), (a.arg = i.arg), (a.delegate = null), D;
        var o = i.arg;
        return o
          ? o.done
            ? ((a[e.resultName] = o.value), (a.next = e.nextLoc), 'return' !== a.method && ((a.method = 'next'), (a.arg = f)), (a.delegate = null), D)
            : o
          : ((a.method = 'throw'), (a.arg = new TypeError('iterator result is not an object')), (a.delegate = null), D);
      }

      function l(e) {
        var a = { tryLoc: e[0] };
        1 in e && (a.catchLoc = e[1]), 2 in e && ((a.finallyLoc = e[2]), (a.afterLoc = e[3])), this.tryEntries.push(a);
      }

      function c(e) {
        var a = e.completion || {};
        (a.type = 'normal'), delete a.arg, (e.completion = a);
      }

      function _(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(l, this), this.reset(!0);
      }

      function h(e) {
        if (e) {
          var a = e[M];
          if (a) return a.call(e);
          if ('function' == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              t = function a() {
                for (; ++n < e.length; ) if (g.call(e, n)) return (a.value = e[n]), (a.done = !1), a;
                return (a.value = f), (a.done = !0), a;
              };
            return (t.next = t);
          }
        }
        return { next: p };
      }

      function p() {
        return { value: f, done: !0 };
      }

      var f,
        k = Object.prototype,
        g = k.hasOwnProperty,
        y = 'function' == typeof Symbol ? Symbol : {},
        M = y.iterator || '@@iterator',
        j = y.asyncIterator || '@@asyncIterator',
        b = y.toStringTag || '@@toStringTag';
      try {
        a({}, '');
      } catch (e) {
        a = function(e, a, n) {
          return (e[a] = n);
        };
      }
      e.wrap = n;
      var v = 'suspendedStart',
        L = 'suspendedYield',
        Y = 'executing',
        w = 'completed',
        D = {},
        T = {};
      a(T, M, function() {
        return this;
      });
      var S = Object.getPrototypeOf,
        H = S && S(S(h([])));
      H && H !== k && g.call(H, M) && (T = H);
      var x = (r.prototype = i.prototype = Object.create(T));
      return (
        (o.prototype = r),
        a(x, 'constructor', r),
        a(r, 'constructor', o),
        (o.displayName = a(r, b, 'GeneratorFunction')),
        (e.isGeneratorFunction = function(e) {
          var a = 'function' == typeof e && e.constructor;
          return !!a && (a === o || 'GeneratorFunction' === (a.displayName || a.name));
        }),
        // 把函数原型指向本方法中的空 function
        (e.mark = function(e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : ((e.__proto__ = r), a(e, b, 'GeneratorFunction')), (e.prototype = Object.create(x)), e;
        }),
        (e.awrap = function(e) {
          return { __await: e };
        }),
        s(u.prototype),
        a(u.prototype, j, function() {
          return this;
        }),
        (e.AsyncIterator = u),
        (e.async = function(a, t, i, o, r) {
          void 0 === r && (r = Promise);
          var s = new u(n(a, t, i, o), r);
          return e.isGeneratorFunction(t)
            ? s
            : s.next().then(function(e) {
                return e.done ? e.value : s.next();
              });
        }),
        s(x),
        a(x, b, 'Generator'),
        a(x, M, function() {
          return this;
        }),
        a(x, 'toString', function() {
          return '[object Generator]';
        }),
        (e.keys = function(e) {
          var a = [];
          for (var n in e) a.push(n);
          return (
            a.reverse(),
            function n() {
              for (; a.length; ) {
                var t = a.pop();
                if (t in e) return (n.value = t), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = h),
        (_.prototype = {
          constructor: _,
          reset: function(e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = f),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = f),
              this.tryEntries.forEach(c),
              !e)
            )
              for (var a in this) 't' === a.charAt(0) && g.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = f);
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0],
              a = e.completion;
            if ('throw' === a.type) throw a.arg;
            return this.rval;
          },
          dispatchException: function(e) {
            function a(a, t) {
              return (o.type = 'throw'), (o.arg = e), (n.next = a), t && ((n.method = 'next'), (n.arg = f)), !!t;
            }

            if (this.done) throw e;
            for (var n = this, t = this.tryEntries.length - 1; t >= 0; --t) {
              var i = this.tryEntries[t],
                o = i.completion;
              if ('root' === i.tryLoc) return a('end');
              if (i.tryLoc <= this.prev) {
                var r = g.call(i, 'catchLoc'),
                  s = g.call(i, 'finallyLoc');
                if (r && s) {
                  if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                } else if (r) {
                  if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                } else {
                  if (!s) throw new Error('try statement without catch or finally');
                  if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function(e, a) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var t = this.tryEntries[n];
              if (t.tryLoc <= this.prev && g.call(t, 'finallyLoc') && this.prev < t.finallyLoc) {
                var i = t;
                break;
              }
            }
            i && ('break' === e || 'continue' === e) && i.tryLoc <= a && a <= i.finallyLoc && (i = null);
            var o = i ? i.completion : {};
            return (o.type = e), (o.arg = a), i ? ((this.method = 'next'), (this.next = i.finallyLoc), D) : this.complete(o);
          },
          complete: function(e, a) {
            if ('throw' === e.type) throw e.arg;
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === e.type && a && (this.next = a),
              D
            );
          },
          finish: function(e) {
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var n = this.tryEntries[a];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), c(n), D;
            }
          },
          catch: function(e) {
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var n = this.tryEntries[a];
              if (n.tryLoc === e) {
                var t = n.completion;
                if ('throw' === t.type) {
                  var i = t.arg;
                  c(n);
                }
                return i;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function(e, a, n) {
            return (
              (this.delegate = {
                iterator: h(e),
                resultName: a,
                nextLoc: n,
              }),
              'next' === this.method && (this.arg = f),
              D
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = t;
    } catch (e) {
      'object' == typeof globalThis ? (globalThis.regeneratorRuntime = t) : Function('r', 'regeneratorRuntime = r')(t);
    }
  },
  26: undefined,
  27: undefined,
  28: undefined,
  29: function(e, a, n) {
    (function(e, t) {
      var i;
      (function() {
        function o(e, a, n) {
          switch (n.length) {
            case 0:
              return e.call(a);
            case 1:
              return e.call(a, n[0]);
            case 2:
              return e.call(a, n[0], n[1]);
            case 3:
              return e.call(a, n[0], n[1], n[2]);
          }
          return e.apply(a, n);
        }

        function r(e, a, n, t) {
          for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
            var r = e[i];
            a(t, r, n(r), e);
          }
          return t;
        }

        function s(e, a) {
          for (var n = -1, t = null == e ? 0 : e.length; ++n < t && !1 !== a(e[n], n, e); );
          return e;
        }

        function u(e, a) {
          for (var n = null == e ? 0 : e.length; n-- && !1 !== a(e[n], n, e); );
          return e;
        }

        function m(e, a) {
          for (var n = -1, t = null == e ? 0 : e.length; ++n < t; ) if (!a(e[n], n, e)) return !1;
          return !0;
        }

        function d(e, a) {
          for (var n = -1, t = null == e ? 0 : e.length, i = 0, o = []; ++n < t; ) {
            var r = e[n];
            a(r, n, e) && (o[i++] = r);
          }
          return o;
        }

        function l(e, a) {
          return !!(null == e ? 0 : e.length) && b(e, a, 0) > -1;
        }

        function c(e, a, n) {
          for (var t = -1, i = null == e ? 0 : e.length; ++t < i; ) if (n(a, e[t])) return !0;
          return !1;
        }

        function _(e, a) {
          for (var n = -1, t = null == e ? 0 : e.length, i = Array(t); ++n < t; ) i[n] = a(e[n], n, e);
          return i;
        }

        function h(e, a) {
          for (var n = -1, t = a.length, i = e.length; ++n < t; ) e[i + n] = a[n];
          return e;
        }

        function p(e, a, n, t) {
          var i = -1,
            o = null == e ? 0 : e.length;
          for (t && o && (n = e[++i]); ++i < o; ) n = a(n, e[i], i, e);
          return n;
        }

        function f(e, a, n, t) {
          var i = null == e ? 0 : e.length;
          for (t && i && (n = e[--i]); i--; ) n = a(n, e[i], i, e);
          return n;
        }

        function k(e, a) {
          for (var n = -1, t = null == e ? 0 : e.length; ++n < t; ) if (a(e[n], n, e)) return !0;
          return !1;
        }

        function g(e) {
          return e.split('');
        }

        function y(e) {
          return e.match(Wa) || [];
        }

        function M(e, a, n) {
          var t;
          return (
            n(e, function(e, n, i) {
              if (a(e, n, i)) return (t = n), !1;
            }),
            t
          );
        }

        function j(e, a, n, t) {
          for (var i = e.length, o = n + (t ? 1 : -1); t ? o-- : ++o < i; ) if (a(e[o], o, e)) return o;
          return -1;
        }

        function b(e, a, n) {
          return a === a ? $(e, a, n) : j(e, L, n);
        }

        function v(e, a, n, t) {
          for (var i = n - 1, o = e.length; ++i < o; ) if (t(e[i], a)) return i;
          return -1;
        }

        function L(e) {
          return e !== e;
        }

        function Y(e, a) {
          var n = null == e ? 0 : e.length;
          return n ? H(e, a) / n : Oe;
        }

        function w(e) {
          return function(a) {
            return null == a ? ne : a[e];
          };
        }

        function D(e) {
          return function(a) {
            return null == e ? ne : e[a];
          };
        }

        function T(e, a, n, t, i) {
          return (
            i(e, function(e, i, o) {
              n = t ? ((t = !1), e) : a(n, e, i, o);
            }),
            n
          );
        }

        function S(e, a) {
          var n = e.length;
          for (e.sort(a); n--; ) e[n] = e[n].value;
          return e;
        }

        function H(e, a) {
          for (var n, t = -1, i = e.length; ++t < i; ) {
            var o = a(e[t]);
            o !== ne && (n = n === ne ? o : n + o);
          }
          return n;
        }

        function x(e, a) {
          for (var n = -1, t = Array(e); ++n < e; ) t[n] = a(n);
          return t;
        }

        function z(e, a) {
          return _(a, function(a) {
            return [a, e[a]];
          });
        }

        function O(e) {
          return function(a) {
            return e(a);
          };
        }

        function E(e, a) {
          return _(a, function(a) {
            return e[a];
          });
        }

        function A(e, a) {
          return e.has(a);
        }

        function P(e, a) {
          for (var n = -1, t = e.length; ++n < t && b(a, e[n], 0) > -1; );
          return n;
        }

        function W(e, a) {
          for (var n = e.length; n-- && b(a, e[n], 0) > -1; );
          return n;
        }

        function F(e, a) {
          for (var n = e.length, t = 0; n--; ) e[n] === a && ++t;
          return t;
        }

        function N(e) {
          return '\\' + Yn[e];
        }

        function R(e, a) {
          return null == e ? ne : e[a];
        }

        function I(e) {
          return fn.test(e);
        }

        function C(e) {
          return kn.test(e);
        }

        function J(e) {
          for (var a, n = []; !(a = e.next()).done; ) n.push(a.value);
          return n;
        }

        function U(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e, t) {
              n[++a] = [t, e];
            }),
            n
          );
        }

        function G(e, a) {
          return function(n) {
            return e(a(n));
          };
        }

        function q(e, a) {
          for (var n = -1, t = e.length, i = 0, o = []; ++n < t; ) {
            var r = e[n];
            (r !== a && r !== ue) || ((e[n] = ue), (o[i++] = n));
          }
          return o;
        }

        function V(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++a] = e;
            }),
            n
          );
        }

        function B(e) {
          var a = -1,
            n = Array(e.size);
          return (
            e.forEach(function(e) {
              n[++a] = [e, e];
            }),
            n
          );
        }

        function $(e, a, n) {
          for (var t = n - 1, i = e.length; ++t < i; ) if (e[t] === a) return t;
          return -1;
        }

        function Z(e, a, n) {
          for (var t = n + 1; t--; ) if (e[t] === a) return t;
          return t;
        }

        function K(e) {
          return I(e) ? X(e) : Cn(e);
        }

        function Q(e) {
          return I(e) ? ee(e) : g(e);
        }

        function X(e) {
          for (var a = (hn.lastIndex = 0); hn.test(e); ) ++a;
          return a;
        }

        function ee(e) {
          return e.match(hn) || [];
        }

        function ae(e) {
          return e.match(pn) || [];
        }

        var ne,
          te = 200,
          ie = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
          oe = 'Expected a function',
          re = '__lodash_hash_undefined__',
          se = 500,
          ue = '__lodash_placeholder__',
          me = 1,
          de = 2,
          le = 4,
          ce = 1,
          _e = 2,
          he = 1,
          pe = 2,
          fe = 4,
          ke = 8,
          ge = 16,
          ye = 32,
          Me = 64,
          je = 128,
          be = 256,
          ve = 512,
          Le = 30,
          Ye = '...',
          we = 800,
          De = 16,
          Te = 1,
          Se = 2,
          He = 1 / 0,
          xe = 9007199254740991,
          ze = 1.7976931348623157e308,
          Oe = NaN,
          Ee = 4294967295,
          Ae = Ee - 1,
          Pe = Ee >>> 1,
          We = [
            ['ary', je],
            ['bind', he],
            ['bindKey', pe],
            ['curry', ke],
            ['curryRight', ge],
            ['flip', ve],
            ['partial', ye],
            ['partialRight', Me],
            ['rearg', be],
          ],
          Fe = '[object Arguments]',
          Ne = '[object Array]',
          Re = '[object AsyncFunction]',
          Ie = '[object Boolean]',
          Ce = '[object Date]',
          Je = '[object DOMException]',
          Ue = '[object Error]',
          Ge = '[object Function]',
          qe = '[object GeneratorFunction]',
          Ve = '[object Map]',
          Be = '[object Number]',
          $e = '[object Null]',
          Ze = '[object Object]',
          Ke = '[object Proxy]',
          Qe = '[object RegExp]',
          Xe = '[object Set]',
          ea = '[object String]',
          aa = '[object Symbol]',
          na = '[object Undefined]',
          ta = '[object WeakMap]',
          ia = '[object WeakSet]',
          oa = '[object ArrayBuffer]',
          ra = '[object DataView]',
          sa = '[object Float32Array]',
          ua = '[object Float64Array]',
          ma = '[object Int8Array]',
          da = '[object Int16Array]',
          la = '[object Int32Array]',
          ca = '[object Uint8Array]',
          _a = '[object Uint8ClampedArray]',
          ha = '[object Uint16Array]',
          pa = '[object Uint32Array]',
          fa = /\b__p \+= '';/g,
          ka = /\b(__p \+=) '' \+/g,
          ga = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          ya = /&(?:amp|lt|gt|quot|#39);/g,
          Ma = /[&<>"']/g,
          ja = RegExp(ya.source),
          ba = RegExp(Ma.source),
          va = /<%-([\s\S]+?)%>/g,
          La = /<%([\s\S]+?)%>/g,
          Ya = /<%=([\s\S]+?)%>/g,
          wa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          Da = /^\w*$/,
          Ta = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          Sa = /[\\^$.*+?()[\]{}|]/g,
          Ha = RegExp(Sa.source),
          xa = /^\s+|\s+$/g,
          za = /^\s+/,
          Oa = /\s+$/,
          Ea = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          Aa = /\{\n\/\* \[wrapped with (.+)\] \*/,
          Pa = /,? & /,
          Wa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          Fa = /\\(\\)?/g,
          Na = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          Ra = /\w*$/,
          Ia = /^[-+]0x[0-9a-f]+$/i,
          Ca = /^0b[01]+$/i,
          Ja = /^\[object .+?Constructor\]$/,
          Ua = /^0o[0-7]+$/i,
          Ga = /^(?:0|[1-9]\d*)$/,
          qa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          Va = /($^)/,
          Ba = /['\n\r\u2028\u2029\\]/g,
          $a = '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
          Za =
            '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
          Ka = '[' + Za + ']',
          Qa = '[' + $a + ']',
          Xa = '[a-z\\xdf-\\xf6\\xf8-\\xff]',
          en = '[^\\ud800-\\udfff' + Za + '\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]',
          an = '\\ud83c[\\udffb-\\udfff]',
          nn = '(?:\\ud83c[\\udde6-\\uddff]){2}',
          tn = '[\\ud800-\\udbff][\\udc00-\\udfff]',
          on = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
          rn = '(?:' + Xa + '|' + en + ')',
          sn = '(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?',
          un = '(?:\\u200d(?:' + ['[^\\ud800-\\udfff]', nn, tn].join('|') + ')[\\ufe0e\\ufe0f]?' + sn + ')*',
          mn = '[\\ufe0e\\ufe0f]?' + sn + un,
          dn = '(?:' + ['[\\u2700-\\u27bf]', nn, tn].join('|') + ')' + mn,
          ln = '(?:' + ['[^\\ud800-\\udfff]' + Qa + '?', Qa, nn, tn, '[\\ud800-\\udfff]'].join('|') + ')',
          cn = RegExp("['’]", 'g'),
          _n = RegExp(Qa, 'g'),
          hn = RegExp(an + '(?=' + an + ')|' + ln + mn, 'g'),
          pn = RegExp(
            [
              on + '?' + Xa + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [Ka, on, '$'].join('|') + ')',
              "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                [Ka, on + rn, '$'].join('|') +
                ')',
              on + '?' + rn + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              on + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
              '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
              '\\d+',
              dn,
            ].join('|'),
            'g'
          ),
          fn = RegExp('[\\u200d\\ud800-\\udfff' + $a + '\\ufe0e\\ufe0f]'),
          kn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          gn = [
            'Array',
            'Buffer',
            'DataView',
            'Date',
            'Error',
            'Float32Array',
            'Float64Array',
            'Function',
            'Int8Array',
            'Int16Array',
            'Int32Array',
            'Map',
            'Math',
            'Object',
            'Promise',
            'RegExp',
            'Set',
            'String',
            'Symbol',
            'TypeError',
            'Uint8Array',
            'Uint8ClampedArray',
            'Uint16Array',
            'Uint32Array',
            'WeakMap',
            '_',
            'clearTimeout',
            'isFinite',
            'parseInt',
            'setTimeout',
          ],
          yn = -1,
          Mn = {};
        (Mn[sa] = Mn[ua] = Mn[ma] = Mn[da] = Mn[la] = Mn[ca] = Mn[_a] = Mn[ha] = Mn[pa] = !0),
          (Mn[Fe] = Mn[Ne] = Mn[oa] = Mn[Ie] = Mn[ra] = Mn[Ce] = Mn[Ue] = Mn[Ge] = Mn[Ve] = Mn[Be] = Mn[Ze] = Mn[Qe] = Mn[Xe] = Mn[ea] = Mn[ta] = !1);
        var jn = {};
        (jn[Fe] = jn[Ne] = jn[oa] = jn[ra] = jn[Ie] = jn[Ce] = jn[sa] = jn[ua] = jn[ma] = jn[da] = jn[la] = jn[Ve] = jn[Be] = jn[Ze] = jn[Qe] = jn[Xe] = jn[ea] = jn[aa] = jn[
          ca
        ] = jn[_a] = jn[ha] = jn[pa] = !0),
          (jn[Ue] = jn[Ge] = jn[ta] = !1);
        var bn = {
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
            Ā: 'A',
            Ă: 'A',
            Ą: 'A',
            ā: 'a',
            ă: 'a',
            ą: 'a',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            Ď: 'D',
            Đ: 'D',
            ď: 'd',
            đ: 'd',
            Ē: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ę: 'E',
            Ě: 'E',
            ē: 'e',
            ĕ: 'e',
            ė: 'e',
            ę: 'e',
            ě: 'e',
            Ĝ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ģ: 'G',
            ĝ: 'g',
            ğ: 'g',
            ġ: 'g',
            ģ: 'g',
            Ĥ: 'H',
            Ħ: 'H',
            ĥ: 'h',
            ħ: 'h',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            Į: 'I',
            İ: 'I',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            į: 'i',
            ı: 'i',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            ĸ: 'k',
            Ĺ: 'L',
            Ļ: 'L',
            Ľ: 'L',
            Ŀ: 'L',
            Ł: 'L',
            ĺ: 'l',
            ļ: 'l',
            ľ: 'l',
            ŀ: 'l',
            ł: 'l',
            Ń: 'N',
            Ņ: 'N',
            Ň: 'N',
            Ŋ: 'N',
            ń: 'n',
            ņ: 'n',
            ň: 'n',
            ŋ: 'n',
            Ō: 'O',
            Ŏ: 'O',
            Ő: 'O',
            ō: 'o',
            ŏ: 'o',
            ő: 'o',
            Ŕ: 'R',
            Ŗ: 'R',
            Ř: 'R',
            ŕ: 'r',
            ŗ: 'r',
            ř: 'r',
            Ś: 'S',
            Ŝ: 'S',
            Ş: 'S',
            Š: 'S',
            ś: 's',
            ŝ: 's',
            ş: 's',
            š: 's',
            Ţ: 'T',
            Ť: 'T',
            Ŧ: 'T',
            ţ: 't',
            ť: 't',
            ŧ: 't',
            Ũ: 'U',
            Ū: 'U',
            Ŭ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ų: 'U',
            ũ: 'u',
            ū: 'u',
            ŭ: 'u',
            ů: 'u',
            ű: 'u',
            ų: 'u',
            Ŵ: 'W',
            ŵ: 'w',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Ź: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            ź: 'z',
            ż: 'z',
            ž: 'z',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Œ: 'Oe',
            œ: 'oe',
            ŉ: "'n",
            ſ: 's',
          },
          vn = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
          Ln = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
          Yn = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
          wn = parseFloat,
          Dn = parseInt,
          Tn = 'object' == typeof e && e && e.Object === Object && e,
          Sn = 'object' == typeof self && self && self.Object === Object && self,
          Hn = Tn || Sn || Function('return this')(),
          xn = 'object' == typeof a && a && !a.nodeType && a,
          zn = xn && 'object' == typeof t && t && !t.nodeType && t,
          On = zn && zn.exports === xn,
          En = On && Tn.process,
          An = (function() {
            try {
              var e = zn && zn.require && zn.require('util').types;
              return e || (En && En.binding && En.binding('util'));
            } catch (e) {}
          })(),
          Pn = An && An.isArrayBuffer,
          Wn = An && An.isDate,
          Fn = An && An.isMap,
          Nn = An && An.isRegExp,
          Rn = An && An.isSet,
          In = An && An.isTypedArray,
          Cn = w('length'),
          Jn = D(bn),
          Un = D(vn),
          Gn = D(Ln),
          qn = (function e(a) {
            function n(e) {
              if (au(e) && !cc(e) && !(e instanceof g)) {
                if (e instanceof i) return e;
                if (cd.call(e, '__wrapped__')) return Qo(e);
              }
              return new i(e);
            }

            function t() {}

            function i(e, a) {
              (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!a), (this.__index__ = 0), (this.__values__ = ne);
            }

            function g(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = Ee),
                (this.__views__ = []);
            }

            function D() {
              var e = new g(this.__wrapped__);
              return (
                (e.__actions__ = zi(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = zi(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = zi(this.__views__)),
                e
              );
            }

            function $() {
              if (this.__filtered__) {
                var e = new g(this);
                (e.__dir__ = -1), (e.__filtered__ = !0);
              } else (e = this.clone()), (e.__dir__ *= -1);
              return e;
            }

            function X() {
              var e = this.__wrapped__.value(),
                a = this.__dir__,
                n = cc(e),
                t = a < 0,
                i = n ? e.length : 0,
                o = bo(0, i, this.__views__),
                r = o.start,
                s = o.end,
                u = s - r,
                m = t ? s : r - 1,
                d = this.__iteratees__,
                l = d.length,
                c = 0,
                _ = Cd(u, this.__takeCount__);
              if (!n || (!t && i == u && _ == u)) return pi(e, this.__actions__);
              var h = [];
              e: for (; u-- && c < _; ) {
                m += a;
                for (var p = -1, f = e[m]; ++p < l; ) {
                  var k = d[p],
                    g = k.iteratee,
                    y = k.type,
                    M = g(f);
                  if (y == Se) f = M;
                  else if (!M) {
                    if (y == Te) continue e;
                    break e;
                  }
                }
                h[c++] = f;
              }
              return h;
            }

            function ee(e) {
              var a = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++a < n; ) {
                var t = e[a];
                this.set(t[0], t[1]);
              }
            }

            function Wa() {
              (this.__data__ = Qd ? Qd(null) : {}), (this.size = 0);
            }

            function $a(e) {
              var a = this.has(e) && delete this.__data__[e];
              return (this.size -= a ? 1 : 0), a;
            }

            function Za(e) {
              var a = this.__data__;
              if (Qd) {
                var n = a[e];
                return n === re ? ne : n;
              }
              return cd.call(a, e) ? a[e] : ne;
            }

            function Ka(e) {
              var a = this.__data__;
              return Qd ? a[e] !== ne : cd.call(a, e);
            }

            function Qa(e, a) {
              var n = this.__data__;
              return (this.size += this.has(e) ? 0 : 1), (n[e] = Qd && a === ne ? re : a), this;
            }

            function Xa(e) {
              var a = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++a < n; ) {
                var t = e[a];
                this.set(t[0], t[1]);
              }
            }

            function en() {
              (this.__data__ = []), (this.size = 0);
            }

            function an(e) {
              var a = this.__data__,
                n = Vn(a, e);
              return !(n < 0) && (n == a.length - 1 ? a.pop() : wd.call(a, n, 1), --this.size, !0);
            }

            function nn(e) {
              var a = this.__data__,
                n = Vn(a, e);
              return n < 0 ? ne : a[n][1];
            }

            function tn(e) {
              return Vn(this.__data__, e) > -1;
            }

            function on(e, a) {
              var n = this.__data__,
                t = Vn(n, e);
              return t < 0 ? (++this.size, n.push([e, a])) : (n[t][1] = a), this;
            }

            function rn(e) {
              var a = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++a < n; ) {
                var t = e[a];
                this.set(t[0], t[1]);
              }
            }

            function sn() {
              (this.size = 0),
                (this.__data__ = {
                  hash: new ee(),
                  map: new (Bd || Xa)(),
                  string: new ee(),
                });
            }

            function un(e) {
              var a = go(this, e).delete(e);
              return (this.size -= a ? 1 : 0), a;
            }

            function mn(e) {
              return go(this, e).get(e);
            }

            function dn(e) {
              return go(this, e).has(e);
            }

            function ln(e, a) {
              var n = go(this, e),
                t = n.size;
              return n.set(e, a), (this.size += n.size == t ? 0 : 1), this;
            }

            function hn(e) {
              var a = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new rn(); ++a < n; ) this.add(e[a]);
            }

            function pn(e) {
              return this.__data__.set(e, re), this;
            }

            function fn(e) {
              return this.__data__.has(e);
            }

            function kn(e) {
              var a = (this.__data__ = new Xa(e));
              this.size = a.size;
            }

            function bn() {
              (this.__data__ = new Xa()), (this.size = 0);
            }

            function vn(e) {
              var a = this.__data__,
                n = a.delete(e);
              return (this.size = a.size), n;
            }

            function Ln(e) {
              return this.__data__.get(e);
            }

            function Yn(e) {
              return this.__data__.has(e);
            }

            function Tn(e, a) {
              var n = this.__data__;
              if (n instanceof Xa) {
                var t = n.__data__;
                if (!Bd || t.length < te - 1) return t.push([e, a]), (this.size = ++n.size), this;
                n = this.__data__ = new rn(t);
              }
              return n.set(e, a), (this.size = n.size), this;
            }

            function Sn(e, a) {
              var n = cc(e),
                t = !n && lc(e),
                i = !n && !t && hc(e),
                o = !n && !t && !i && yc(e),
                r = n || t || i || o,
                s = r ? x(e.length, od) : [],
                u = s.length;
              for (var m in e)
                (!a && !cd.call(e, m)) ||
                  (r && ('length' == m || (i && ('offset' == m || 'parent' == m)) || (o && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || Ho(m, u))) ||
                  s.push(m);
              return s;
            }

            function xn(e) {
              var a = e.length;
              return a ? e[Zt(0, a - 1)] : ne;
            }

            function zn(e, a) {
              return Bo(zi(e), Xn(a, 0, e.length));
            }

            function En(e) {
              return Bo(zi(e));
            }

            function An(e, a, n) {
              ((n === ne || Is(e[a], n)) && (n !== ne || a in e)) || Kn(e, a, n);
            }

            function Cn(e, a, n) {
              var t = e[a];
              (cd.call(e, a) && Is(t, n) && (n !== ne || a in e)) || Kn(e, a, n);
            }

            function Vn(e, a) {
              for (var n = e.length; n--; ) if (Is(e[n][0], a)) return n;
              return -1;
            }

            function Bn(e, a, n, t) {
              return (
                dl(e, function(e, i, o) {
                  a(t, e, n(e), o);
                }),
                t
              );
            }

            function $n(e, a) {
              return e && Oi(a, Pu(a), e);
            }

            function Zn(e, a) {
              return e && Oi(a, Wu(a), e);
            }

            function Kn(e, a, n) {
              '__proto__' == a && Hd
                ? Hd(e, a, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0,
                  })
                : (e[a] = n);
            }

            function Qn(e, a) {
              for (var n = -1, t = a.length, i = Qm(t), o = null == e; ++n < t; ) i[n] = o ? ne : Ou(e, a[n]);
              return i;
            }

            function Xn(e, a, n) {
              return e === e && (n !== ne && (e = e <= n ? e : n), a !== ne && (e = e >= a ? e : a)), e;
            }

            function et(e, a, n, t, i, o) {
              var r,
                u = a & me,
                m = a & de,
                d = a & le;
              if ((n && (r = i ? n(e, t, i, o) : n(e)), r !== ne)) return r;
              if (!eu(e)) return e;
              var l = cc(e);
              if (l) {
                if (((r = Yo(e)), !u)) return zi(e, r);
              } else {
                var c = bl(e),
                  _ = c == Ge || c == qe;
                if (hc(e)) return bi(e, u);
                if (c == Ze || c == Fe || (_ && !i)) {
                  if (((r = m || _ ? {} : wo(e)), !u)) return m ? Ai(e, Zn(r, e)) : Ei(e, $n(r, e));
                } else {
                  if (!jn[c]) return i ? e : {};
                  r = Do(e, c, u);
                }
              }
              o || (o = new kn());
              var h = o.get(e);
              if (h) return h;
              o.set(e, r),
                gc(e)
                  ? e.forEach(function(t) {
                      r.add(et(t, a, n, t, e, o));
                    })
                  : fc(e) &&
                    e.forEach(function(t, i) {
                      r.set(i, et(t, a, n, i, e, o));
                    });
              var p = d ? (m ? ho : _o) : m ? Wu : Pu,
                f = l ? ne : p(e);
              return (
                s(f || e, function(t, i) {
                  f && ((i = t), (t = e[i])), Cn(r, i, et(t, a, n, i, e, o));
                }),
                r
              );
            }

            function at(e) {
              var a = Pu(e);
              return function(n) {
                return nt(n, e, a);
              };
            }

            function nt(e, a, n) {
              var t = n.length;
              if (null == e) return !t;
              for (e = td(e); t--; ) {
                var i = n[t],
                  o = a[i],
                  r = e[i];
                if ((r === ne && !(i in e)) || !o(r)) return !1;
              }
              return !0;
            }

            function tt(e, a, n) {
              if ('function' != typeof e) throw new rd(oe);
              return Yl(function() {
                e.apply(ne, n);
              }, a);
            }

            function it(e, a, n, t) {
              var i = -1,
                o = l,
                r = !0,
                s = e.length,
                u = [],
                m = a.length;
              if (!s) return u;
              n && (a = _(a, O(n))), t ? ((o = c), (r = !1)) : a.length >= te && ((o = A), (r = !1), (a = new hn(a)));
              e: for (; ++i < s; ) {
                var d = e[i],
                  h = null == n ? d : n(d);
                if (((d = t || 0 !== d ? d : 0), r && h === h)) {
                  for (var p = m; p--; ) if (a[p] === h) continue e;
                  u.push(d);
                } else o(a, h, t) || u.push(d);
              }
              return u;
            }

            function ot(e, a) {
              var n = !0;
              return (
                dl(e, function(e, t, i) {
                  return (n = !!a(e, t, i));
                }),
                n
              );
            }

            function rt(e, a, n) {
              for (var t = -1, i = e.length; ++t < i; ) {
                var o = e[t],
                  r = a(o);
                if (null != r && (s === ne ? r === r && !cu(r) : n(r, s)))
                  var s = r,
                    u = o;
              }
              return u;
            }

            function st(e, a, n, t) {
              var i = e.length;
              for (n = gu(n), n < 0 && (n = -n > i ? 0 : i + n), t = t === ne || t > i ? i : gu(t), t < 0 && (t += i), t = n > t ? 0 : yu(t); n < t; ) e[n++] = a;
              return e;
            }

            function ut(e, a) {
              var n = [];
              return (
                dl(e, function(e, t, i) {
                  a(e, t, i) && n.push(e);
                }),
                n
              );
            }

            function mt(e, a, n, t, i) {
              var o = -1,
                r = e.length;
              for (n || (n = So), i || (i = []); ++o < r; ) {
                var s = e[o];
                a > 0 && n(s) ? (a > 1 ? mt(s, a - 1, n, t, i) : h(i, s)) : t || (i[i.length] = s);
              }
              return i;
            }

            function dt(e, a) {
              return e && cl(e, a, Pu);
            }

            function lt(e, a) {
              return e && _l(e, a, Pu);
            }

            function ct(e, a) {
              return d(a, function(a) {
                return Ks(e[a]);
              });
            }

            function _t(e, a) {
              a = Mi(a, e);
              for (var n = 0, t = a.length; null != e && n < t; ) e = e[$o(a[n++])];
              return n && n == t ? e : ne;
            }

            function ht(e, a, n) {
              var t = a(e);
              return cc(e) ? t : h(t, n(e));
            }

            function pt(e) {
              return null == e ? (e === ne ? na : $e) : Sd && Sd in td(e) ? jo(e) : Io(e);
            }

            function ft(e, a) {
              return e > a;
            }

            function kt(e, a) {
              return null != e && cd.call(e, a);
            }

            function gt(e, a) {
              return null != e && a in td(e);
            }

            function yt(e, a, n) {
              return e >= Cd(a, n) && e < Id(a, n);
            }

            function Mt(e, a, n) {
              for (var t = n ? c : l, i = e[0].length, o = e.length, r = o, s = Qm(o), u = 1 / 0, m = []; r--; ) {
                var d = e[r];
                r && a && (d = _(d, O(a))), (u = Cd(d.length, u)), (s[r] = !n && (a || (i >= 120 && d.length >= 120)) ? new hn(r && d) : ne);
              }
              d = e[0];
              var h = -1,
                p = s[0];
              e: for (; ++h < i && m.length < u; ) {
                var f = d[h],
                  k = a ? a(f) : f;
                if (((f = n || 0 !== f ? f : 0), !(p ? A(p, k) : t(m, k, n)))) {
                  for (r = o; --r; ) {
                    var g = s[r];
                    if (!(g ? A(g, k) : t(e[r], k, n))) continue e;
                  }
                  p && p.push(k), m.push(f);
                }
              }
              return m;
            }

            function jt(e, a, n, t) {
              return (
                dt(e, function(e, i, o) {
                  a(t, n(e), i, o);
                }),
                t
              );
            }

            function bt(e, a, n) {
              (a = Mi(a, e)), (e = Jo(e, a));
              var t = null == e ? e : e[$o(kr(a))];
              return null == t ? ne : o(t, e, n);
            }

            function vt(e) {
              return au(e) && pt(e) == Fe;
            }

            function Lt(e) {
              return au(e) && pt(e) == oa;
            }

            function Yt(e) {
              return au(e) && pt(e) == Ce;
            }

            function wt(e, a, n, t, i) {
              return e === a || (null == e || null == a || (!au(e) && !au(a)) ? e !== e && a !== a : Dt(e, a, n, t, wt, i));
            }

            function Dt(e, a, n, t, i, o) {
              var r = cc(e),
                s = cc(a),
                u = r ? Ne : bl(e),
                m = s ? Ne : bl(a);
              (u = u == Fe ? Ze : u), (m = m == Fe ? Ze : m);
              var d = u == Ze,
                l = m == Ze,
                c = u == m;
              if (c && hc(e)) {
                if (!hc(a)) return !1;
                (r = !0), (d = !1);
              }
              if (c && !d) return o || (o = new kn()), r || yc(e) ? uo(e, a, n, t, i, o) : mo(e, a, u, n, t, i, o);
              if (!(n & ce)) {
                var _ = d && cd.call(e, '__wrapped__'),
                  h = l && cd.call(a, '__wrapped__');
                if (_ || h) {
                  var p = _ ? e.value() : e,
                    f = h ? a.value() : a;
                  return o || (o = new kn()), i(p, f, n, t, o);
                }
              }
              return !!c && (o || (o = new kn()), lo(e, a, n, t, i, o));
            }

            function Tt(e) {
              return au(e) && bl(e) == Ve;
            }

            function St(e, a, n, t) {
              var i = n.length,
                o = i,
                r = !t;
              if (null == e) return !o;
              for (e = td(e); i--; ) {
                var s = n[i];
                if (r && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
              }
              for (; ++i < o; ) {
                s = n[i];
                var u = s[0],
                  m = e[u],
                  d = s[1];
                if (r && s[2]) {
                  if (m === ne && !(u in e)) return !1;
                } else {
                  var l = new kn();
                  if (t) var c = t(m, d, u, e, a, l);
                  if (!(c === ne ? wt(d, m, ce | _e, t, l) : c)) return !1;
                }
              }
              return !0;
            }

            function Ht(e) {
              return !(!eu(e) || Ao(e)) && (Ks(e) ? gd : Ja).test(Zo(e));
            }

            function xt(e) {
              return au(e) && pt(e) == Qe;
            }

            function zt(e) {
              return au(e) && bl(e) == Xe;
            }

            function Ot(e) {
              return au(e) && Xs(e.length) && !!Mn[pt(e)];
            }

            function Et(e) {
              return 'function' == typeof e ? e : null == e ? wm : 'object' == typeof e ? (cc(e) ? Rt(e[0], e[1]) : Nt(e)) : Em(e);
            }

            function At(e) {
              if (!Po(e)) return Rd(e);
              var a = [];
              for (var n in td(e)) cd.call(e, n) && 'constructor' != n && a.push(n);
              return a;
            }

            function Pt(e) {
              if (!eu(e)) return Ro(e);
              var a = Po(e),
                n = [];
              for (var t in e) ('constructor' != t || (!a && cd.call(e, t))) && n.push(t);
              return n;
            }

            function Wt(e, a) {
              return e < a;
            }

            function Ft(e, a) {
              var n = -1,
                t = Cs(e) ? Qm(e.length) : [];
              return (
                dl(e, function(e, i, o) {
                  t[++n] = a(e, i, o);
                }),
                t
              );
            }

            function Nt(e) {
              var a = yo(e);
              return 1 == a.length && a[0][2]
                ? Fo(a[0][0], a[0][1])
                : function(n) {
                    return n === e || St(n, e, a);
                  };
            }

            function Rt(e, a) {
              return zo(e) && Wo(a)
                ? Fo($o(e), a)
                : function(n) {
                    var t = Ou(n, e);
                    return t === ne && t === a ? Au(n, e) : wt(a, t, ce | _e);
                  };
            }

            function It(e, a, n, t, i) {
              e !== a &&
                cl(
                  a,
                  function(o, r) {
                    if ((i || (i = new kn()), eu(o))) Ct(e, a, r, n, It, t, i);
                    else {
                      var s = t ? t(Go(e, r), o, r + '', e, a, i) : ne;
                      s === ne && (s = o), An(e, r, s);
                    }
                  },
                  Wu
                );
            }

            function Ct(e, a, n, t, i, o, r) {
              var s = Go(e, n),
                u = Go(a, n),
                m = r.get(u);
              if (m) return void An(e, n, m);
              var d = o ? o(s, u, n + '', e, a, r) : ne,
                l = d === ne;
              if (l) {
                var c = cc(u),
                  _ = !c && hc(u),
                  h = !c && !_ && yc(u);
                (d = u),
                  c || _ || h
                    ? cc(s)
                      ? (d = s)
                      : Js(s)
                      ? (d = zi(s))
                      : _
                      ? ((l = !1), (d = bi(u, !0)))
                      : h
                      ? ((l = !1), (d = Di(u, !0)))
                      : (d = [])
                    : mu(u) || lc(u)
                    ? ((d = s), lc(s) ? (d = ju(s)) : (eu(s) && !Ks(s)) || (d = wo(u)))
                    : (l = !1);
              }
              l && (r.set(u, d), i(d, u, t, o, r), r.delete(u)), An(e, n, d);
            }

            function Jt(e, a) {
              var n = e.length;
              if (n) return (a += a < 0 ? n : 0), Ho(a, n) ? e[a] : ne;
            }

            function Ut(e, a, n) {
              a = a.length
                ? _(a, function(e) {
                    return cc(e)
                      ? function(a) {
                          return _t(a, 1 === e.length ? e[0] : e);
                        }
                      : e;
                  })
                : [wm];
              var t = -1;
              return (
                (a = _(a, O(ko()))),
                S(
                  Ft(e, function(e, n, i) {
                    return {
                      criteria: _(a, function(a) {
                        return a(e);
                      }),
                      index: ++t,
                      value: e,
                    };
                  }),
                  function(e, a) {
                    return Si(e, a, n);
                  }
                )
              );
            }

            function Gt(e, a) {
              return qt(e, a, function(a, n) {
                return Au(e, n);
              });
            }

            function qt(e, a, n) {
              for (var t = -1, i = a.length, o = {}; ++t < i; ) {
                var r = a[t],
                  s = _t(e, r);
                n(s, r) && ni(o, Mi(r, e), s);
              }
              return o;
            }

            function Vt(e) {
              return function(a) {
                return _t(a, e);
              };
            }

            function Bt(e, a, n, t) {
              var i = t ? v : b,
                o = -1,
                r = a.length,
                s = e;
              for (e === a && (a = zi(a)), n && (s = _(e, O(n))); ++o < r; )
                for (var u = 0, m = a[o], d = n ? n(m) : m; (u = i(s, d, u, t)) > -1; ) s !== e && wd.call(s, u, 1), wd.call(e, u, 1);
              return e;
            }

            function $t(e, a) {
              for (var n = e ? a.length : 0, t = n - 1; n--; ) {
                var i = a[n];
                if (n == t || i !== o) {
                  var o = i;
                  Ho(i) ? wd.call(e, i, 1) : ci(e, i);
                }
              }
              return e;
            }

            function Zt(e, a) {
              return e + Ad(Gd() * (a - e + 1));
            }

            function Kt(e, a, n, t) {
              for (var i = -1, o = Id(Ed((a - e) / (n || 1)), 0), r = Qm(o); o--; ) (r[t ? o : ++i] = e), (e += n);
              return r;
            }

            function Qt(e, a) {
              var n = '';
              if (!e || a < 1 || a > xe) return n;
              do {
                a % 2 && (n += e), (a = Ad(a / 2)) && (e += e);
              } while (a);
              return n;
            }

            function Xt(e, a) {
              return wl(Co(e, a, wm), e + '');
            }

            function ei(e) {
              return xn($u(e));
            }

            function ai(e, a) {
              var n = $u(e);
              return Bo(n, Xn(a, 0, n.length));
            }

            function ni(e, a, n, t) {
              if (!eu(e)) return e;
              a = Mi(a, e);
              for (var i = -1, o = a.length, r = o - 1, s = e; null != s && ++i < o; ) {
                var u = $o(a[i]),
                  m = n;
                if ('__proto__' === u || 'constructor' === u || 'prototype' === u) return e;
                if (i != r) {
                  var d = s[u];
                  (m = t ? t(d, u, s) : ne), m === ne && (m = eu(d) ? d : Ho(a[i + 1]) ? [] : {});
                }
                Cn(s, u, m), (s = s[u]);
              }
              return e;
            }

            function ti(e) {
              return Bo($u(e));
            }

            function ii(e, a, n) {
              var t = -1,
                i = e.length;
              a < 0 && (a = -a > i ? 0 : i + a), (n = n > i ? i : n), n < 0 && (n += i), (i = a > n ? 0 : (n - a) >>> 0), (a >>>= 0);
              for (var o = Qm(i); ++t < i; ) o[t] = e[t + a];
              return o;
            }

            function oi(e, a) {
              var n;
              return (
                dl(e, function(e, t, i) {
                  return !(n = a(e, t, i));
                }),
                !!n
              );
            }

            function ri(e, a, n) {
              var t = 0,
                i = null == e ? t : e.length;
              if ('number' == typeof a && a === a && i <= Pe) {
                for (; t < i; ) {
                  var o = (t + i) >>> 1,
                    r = e[o];
                  null !== r && !cu(r) && (n ? r <= a : r < a) ? (t = o + 1) : (i = o);
                }
                return i;
              }
              return si(e, a, wm, n);
            }

            function si(e, a, n, t) {
              var i = 0,
                o = null == e ? 0 : e.length;
              if (0 === o) return 0;
              a = n(a);
              for (var r = a !== a, s = null === a, u = cu(a), m = a === ne; i < o; ) {
                var d = Ad((i + o) / 2),
                  l = n(e[d]),
                  c = l !== ne,
                  _ = null === l,
                  h = l === l,
                  p = cu(l);
                if (r) var f = t || h;
                else f = m ? h && (t || c) : s ? h && c && (t || !_) : u ? h && c && !_ && (t || !p) : !_ && !p && (t ? l <= a : l < a);
                f ? (i = d + 1) : (o = d);
              }
              return Cd(o, Ae);
            }

            function ui(e, a) {
              for (var n = -1, t = e.length, i = 0, o = []; ++n < t; ) {
                var r = e[n],
                  s = a ? a(r) : r;
                if (!n || !Is(s, u)) {
                  var u = s;
                  o[i++] = 0 === r ? 0 : r;
                }
              }
              return o;
            }

            function mi(e) {
              return 'number' == typeof e ? e : cu(e) ? Oe : +e;
            }

            function di(e) {
              if ('string' == typeof e) return e;
              if (cc(e)) return _(e, di) + '';
              if (cu(e)) return ul ? ul.call(e) : '';
              var a = e + '';
              return '0' == a && 1 / e == -He ? '-0' : a;
            }

            function li(e, a, n) {
              var t = -1,
                i = l,
                o = e.length,
                r = !0,
                s = [],
                u = s;
              if (n) (r = !1), (i = c);
              else if (o >= te) {
                var m = a ? null : gl(e);
                if (m) return V(m);
                (r = !1), (i = A), (u = new hn());
              } else u = a ? [] : s;
              e: for (; ++t < o; ) {
                var d = e[t],
                  _ = a ? a(d) : d;
                if (((d = n || 0 !== d ? d : 0), r && _ === _)) {
                  for (var h = u.length; h--; ) if (u[h] === _) continue e;
                  a && u.push(_), s.push(d);
                } else i(u, _, n) || (u !== s && u.push(_), s.push(d));
              }
              return s;
            }

            function ci(e, a) {
              return (a = Mi(a, e)), null == (e = Jo(e, a)) || delete e[$o(kr(a))];
            }

            function _i(e, a, n, t) {
              return ni(e, a, n(_t(e, a)), t);
            }

            function hi(e, a, n, t) {
              for (var i = e.length, o = t ? i : -1; (t ? o-- : ++o < i) && a(e[o], o, e); );
              return n ? ii(e, t ? 0 : o, t ? o + 1 : i) : ii(e, t ? o + 1 : 0, t ? i : o);
            }

            function pi(e, a) {
              var n = e;
              return (
                n instanceof g && (n = n.value()),
                p(
                  a,
                  function(e, a) {
                    return a.func.apply(a.thisArg, h([e], a.args));
                  },
                  n
                )
              );
            }

            function fi(e, a, n) {
              var t = e.length;
              if (t < 2) return t ? li(e[0]) : [];
              for (var i = -1, o = Qm(t); ++i < t; ) for (var r = e[i], s = -1; ++s < t; ) s != i && (o[i] = it(o[i] || r, e[s], a, n));
              return li(mt(o, 1), a, n);
            }

            function ki(e, a, n) {
              for (var t = -1, i = e.length, o = a.length, r = {}; ++t < i; ) {
                var s = t < o ? a[t] : ne;
                n(r, e[t], s);
              }
              return r;
            }

            function gi(e) {
              return Js(e) ? e : [];
            }

            function yi(e) {
              return 'function' == typeof e ? e : wm;
            }

            function Mi(e, a) {
              return cc(e) ? e : zo(e, a) ? [e] : Dl(vu(e));
            }

            function ji(e, a, n) {
              var t = e.length;
              return (n = n === ne ? t : n), !a && n >= t ? e : ii(e, a, n);
            }

            function bi(e, a) {
              if (a) return e.slice();
              var n = e.length,
                t = bd ? bd(n) : new e.constructor(n);
              return e.copy(t), t;
            }

            function vi(e) {
              var a = new e.constructor(e.byteLength);
              return new jd(a).set(new jd(e)), a;
            }

            function Li(e, a) {
              var n = a ? vi(e.buffer) : e.buffer;
              return new e.constructor(n, e.byteOffset, e.byteLength);
            }

            function Yi(e) {
              var a = new e.constructor(e.source, Ra.exec(e));
              return (a.lastIndex = e.lastIndex), a;
            }

            function wi(e) {
              return sl ? td(sl.call(e)) : {};
            }

            function Di(e, a) {
              var n = a ? vi(e.buffer) : e.buffer;
              return new e.constructor(n, e.byteOffset, e.length);
            }

            function Ti(e, a) {
              if (e !== a) {
                var n = e !== ne,
                  t = null === e,
                  i = e === e,
                  o = cu(e),
                  r = a !== ne,
                  s = null === a,
                  u = a === a,
                  m = cu(a);
                if ((!s && !m && !o && e > a) || (o && r && u && !s && !m) || (t && r && u) || (!n && u) || !i) return 1;
                if ((!t && !o && !m && e < a) || (m && n && i && !t && !o) || (s && n && i) || (!r && i) || !u) return -1;
              }
              return 0;
            }

            function Si(e, a, n) {
              for (var t = -1, i = e.criteria, o = a.criteria, r = i.length, s = n.length; ++t < r; ) {
                var u = Ti(i[t], o[t]);
                if (u) {
                  if (t >= s) return u;
                  return u * ('desc' == n[t] ? -1 : 1);
                }
              }
              return e.index - a.index;
            }

            function Hi(e, a, n, t) {
              for (var i = -1, o = e.length, r = n.length, s = -1, u = a.length, m = Id(o - r, 0), d = Qm(u + m), l = !t; ++s < u; ) d[s] = a[s];
              for (; ++i < r; ) (l || i < o) && (d[n[i]] = e[i]);
              for (; m--; ) d[s++] = e[i++];
              return d;
            }

            function xi(e, a, n, t) {
              for (var i = -1, o = e.length, r = -1, s = n.length, u = -1, m = a.length, d = Id(o - s, 0), l = Qm(d + m), c = !t; ++i < d; ) l[i] = e[i];
              for (var _ = i; ++u < m; ) l[_ + u] = a[u];
              for (; ++r < s; ) (c || i < o) && (l[_ + n[r]] = e[i++]);
              return l;
            }

            function zi(e, a) {
              var n = -1,
                t = e.length;
              for (a || (a = Qm(t)); ++n < t; ) a[n] = e[n];
              return a;
            }

            function Oi(e, a, n, t) {
              var i = !n;
              n || (n = {});
              for (var o = -1, r = a.length; ++o < r; ) {
                var s = a[o],
                  u = t ? t(n[s], e[s], s, n, e) : ne;
                u === ne && (u = e[s]), i ? Kn(n, s, u) : Cn(n, s, u);
              }
              return n;
            }

            function Ei(e, a) {
              return Oi(e, Ml(e), a);
            }

            function Ai(e, a) {
              return Oi(e, jl(e), a);
            }

            function Pi(e, a) {
              return function(n, t) {
                var i = cc(n) ? r : Bn,
                  o = a ? a() : {};
                return i(n, e, ko(t, 2), o);
              };
            }

            function Wi(e) {
              return Xt(function(a, n) {
                var t = -1,
                  i = n.length,
                  o = i > 1 ? n[i - 1] : ne,
                  r = i > 2 ? n[2] : ne;
                for (o = e.length > 3 && 'function' == typeof o ? (i--, o) : ne, r && xo(n[0], n[1], r) && ((o = i < 3 ? ne : o), (i = 1)), a = td(a); ++t < i; ) {
                  var s = n[t];
                  s && e(a, s, t, o);
                }
                return a;
              });
            }

            function Fi(e, a) {
              return function(n, t) {
                if (null == n) return n;
                if (!Cs(n)) return e(n, t);
                for (var i = n.length, o = a ? i : -1, r = td(n); (a ? o-- : ++o < i) && !1 !== t(r[o], o, r); );
                return n;
              };
            }

            function Ni(e) {
              return function(a, n, t) {
                for (var i = -1, o = td(a), r = t(a), s = r.length; s--; ) {
                  var u = r[e ? s : ++i];
                  if (!1 === n(o[u], u, o)) break;
                }
                return a;
              };
            }

            function Ri(e, a, n) {
              function t() {
                return (this && this !== Hn && this instanceof t ? o : e).apply(i ? n : this, arguments);
              }

              var i = a & he,
                o = Ji(e);
              return t;
            }

            function Ii(e) {
              return function(a) {
                a = vu(a);
                var n = I(a) ? Q(a) : ne,
                  t = n ? n[0] : a.charAt(0),
                  i = n ? ji(n, 1).join('') : a.slice(1);
                return t[e]() + i;
              };
            }

            function Ci(e) {
              return function(a) {
                return p(jm(am(a).replace(cn, '')), e, '');
              };
            }

            function Ji(e) {
              return function() {
                var a = arguments;
                switch (a.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(a[0]);
                  case 2:
                    return new e(a[0], a[1]);
                  case 3:
                    return new e(a[0], a[1], a[2]);
                  case 4:
                    return new e(a[0], a[1], a[2], a[3]);
                  case 5:
                    return new e(a[0], a[1], a[2], a[3], a[4]);
                  case 6:
                    return new e(a[0], a[1], a[2], a[3], a[4], a[5]);
                  case 7:
                    return new e(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
                }
                var n = ml(e.prototype),
                  t = e.apply(n, a);
                return eu(t) ? t : n;
              };
            }

            function Ui(e, a, n) {
              function t() {
                for (var r = arguments.length, s = Qm(r), u = r, m = fo(t); u--; ) s[u] = arguments[u];
                var d = r < 3 && s[0] !== m && s[r - 1] !== m ? [] : q(s, m);
                return (r -= d.length) < n ? ao(e, a, Vi, t.placeholder, ne, s, d, ne, ne, n - r) : o(this && this !== Hn && this instanceof t ? i : e, this, s);
              }

              var i = Ji(e);
              return t;
            }

            function Gi(e) {
              return function(a, n, t) {
                var i = td(a);
                if (!Cs(a)) {
                  var o = ko(n, 3);
                  (a = Pu(a)),
                    (n = function(e) {
                      return o(i[e], e, i);
                    });
                }
                var r = e(a, n, t);
                return r > -1 ? i[o ? a[r] : r] : ne;
              };
            }

            function qi(e) {
              return co(function(a) {
                var n = a.length,
                  t = n,
                  o = i.prototype.thru;
                for (e && a.reverse(); t--; ) {
                  var r = a[t];
                  if ('function' != typeof r) throw new rd(oe);
                  if (o && !s && 'wrapper' == po(r)) var s = new i([], !0);
                }
                for (t = s ? t : n; ++t < n; ) {
                  r = a[t];
                  var u = po(r),
                    m = 'wrapper' == u ? yl(r) : ne;
                  s = m && Eo(m[0]) && m[1] == (je | ke | ye | be) && !m[4].length && 1 == m[9] ? s[po(m[0])].apply(s, m[3]) : 1 == r.length && Eo(r) ? s[u]() : s.thru(r);
                }
                return function() {
                  var e = arguments,
                    t = e[0];
                  if (s && 1 == e.length && cc(t)) return s.plant(t).value();
                  for (var i = 0, o = n ? a[i].apply(this, e) : t; ++i < n; ) o = a[i].call(this, o);
                  return o;
                };
              });
            }

            function Vi(e, a, n, t, i, o, r, s, u, m) {
              function d() {
                for (var k = arguments.length, g = Qm(k), y = k; y--; ) g[y] = arguments[y];
                if (h)
                  var M = fo(d),
                    j = F(g, M);
                if ((t && (g = Hi(g, t, i, h)), o && (g = xi(g, o, r, h)), (k -= j), h && k < m)) {
                  var b = q(g, M);
                  return ao(e, a, Vi, d.placeholder, n, g, b, s, u, m - k);
                }
                var v = c ? n : this,
                  L = _ ? v[e] : e;
                return (
                  (k = g.length),
                  s ? (g = Uo(g, s)) : p && k > 1 && g.reverse(),
                  l && u < k && (g.length = u),
                  this && this !== Hn && this instanceof d && (L = f || Ji(L)),
                  L.apply(v, g)
                );
              }

              var l = a & je,
                c = a & he,
                _ = a & pe,
                h = a & (ke | ge),
                p = a & ve,
                f = _ ? ne : Ji(e);
              return d;
            }

            function Bi(e, a) {
              return function(n, t) {
                return jt(n, e, a(t), {});
              };
            }

            function $i(e, a) {
              return function(n, t) {
                var i;
                if (n === ne && t === ne) return a;
                if ((n !== ne && (i = n), t !== ne)) {
                  if (i === ne) return t;
                  'string' == typeof n || 'string' == typeof t ? ((n = di(n)), (t = di(t))) : ((n = mi(n)), (t = mi(t))), (i = e(n, t));
                }
                return i;
              };
            }

            function Zi(e) {
              return co(function(a) {
                return (
                  (a = _(a, O(ko()))),
                  Xt(function(n) {
                    var t = this;
                    return e(a, function(e) {
                      return o(e, t, n);
                    });
                  })
                );
              });
            }

            function Ki(e, a) {
              a = a === ne ? ' ' : di(a);
              var n = a.length;
              if (n < 2) return n ? Qt(a, e) : a;
              var t = Qt(a, Ed(e / K(a)));
              return I(a) ? ji(Q(t), 0, e).join('') : t.slice(0, e);
            }

            function Qi(e, a, n, t) {
              function i() {
                for (var a = -1, u = arguments.length, m = -1, d = t.length, l = Qm(d + u), c = this && this !== Hn && this instanceof i ? s : e; ++m < d; ) l[m] = t[m];
                for (; u--; ) l[m++] = arguments[++a];
                return o(c, r ? n : this, l);
              }

              var r = a & he,
                s = Ji(e);
              return i;
            }

            function Xi(e) {
              return function(a, n, t) {
                return (
                  t && 'number' != typeof t && xo(a, n, t) && (n = t = ne),
                  (a = ku(a)),
                  n === ne ? ((n = a), (a = 0)) : (n = ku(n)),
                  (t = t === ne ? (a < n ? 1 : -1) : ku(t)),
                  Kt(a, n, t, e)
                );
              };
            }

            function eo(e) {
              return function(a, n) {
                return ('string' == typeof a && 'string' == typeof n) || ((a = Mu(a)), (n = Mu(n))), e(a, n);
              };
            }

            function ao(e, a, n, t, i, o, r, s, u, m) {
              var d = a & ke,
                l = d ? r : ne,
                c = d ? ne : r,
                _ = d ? o : ne,
                h = d ? ne : o;
              (a |= d ? ye : Me), (a &= ~(d ? Me : ye)) & fe || (a &= ~(he | pe));
              var p = [e, a, i, _, l, h, c, s, u, m],
                f = n.apply(ne, p);
              return Eo(e) && Ll(f, p), (f.placeholder = t), qo(f, e, a);
            }

            function no(e) {
              var a = nd[e];
              return function(e, n) {
                if (((e = Mu(e)), (n = null == n ? 0 : Cd(gu(n), 292)) && Fd(e))) {
                  var t = (vu(e) + 'e').split('e');
                  return (t = (vu(a(t[0] + 'e' + (+t[1] + n))) + 'e').split('e')), +(t[0] + 'e' + (+t[1] - n));
                }
                return a(e);
              };
            }

            function to(e) {
              return function(a) {
                var n = bl(a);
                return n == Ve ? U(a) : n == Xe ? B(a) : z(a, e(a));
              };
            }

            function io(e, a, n, t, i, o, r, s) {
              var u = a & pe;
              if (!u && 'function' != typeof e) throw new rd(oe);
              var m = t ? t.length : 0;
              if ((m || ((a &= ~(ye | Me)), (t = i = ne)), (r = r === ne ? r : Id(gu(r), 0)), (s = s === ne ? s : gu(s)), (m -= i ? i.length : 0), a & Me)) {
                var d = t,
                  l = i;
                t = i = ne;
              }
              var c = u ? ne : yl(e),
                _ = [e, a, n, t, i, d, l, o, r, s];
              if (
                (c && No(_, c),
                (e = _[0]),
                (a = _[1]),
                (n = _[2]),
                (t = _[3]),
                (i = _[4]),
                (s = _[9] = _[9] === ne ? (u ? 0 : e.length) : Id(_[9] - m, 0)),
                !s && a & (ke | ge) && (a &= ~(ke | ge)),
                a && a != he)
              )
                h = a == ke || a == ge ? Ui(e, a, s) : (a != ye && a != (he | ye)) || i.length ? Vi.apply(ne, _) : Qi(e, a, n, t);
              else var h = Ri(e, a, n);
              return qo((c ? hl : Ll)(h, _), e, a);
            }

            function oo(e, a, n, t) {
              return e === ne || (Is(e, md[n]) && !cd.call(t, n)) ? a : e;
            }

            function ro(e, a, n, t, i, o) {
              return eu(e) && eu(a) && (o.set(a, e), It(e, a, ne, ro, o), o.delete(a)), e;
            }

            function so(e) {
              return mu(e) ? ne : e;
            }

            function uo(e, a, n, t, i, o) {
              var r = n & ce,
                s = e.length,
                u = a.length;
              if (s != u && !(r && u > s)) return !1;
              var m = o.get(e),
                d = o.get(a);
              if (m && d) return m == a && d == e;
              var l = -1,
                c = !0,
                _ = n & _e ? new hn() : ne;
              for (o.set(e, a), o.set(a, e); ++l < s; ) {
                var h = e[l],
                  p = a[l];
                if (t) var f = r ? t(p, h, l, a, e, o) : t(h, p, l, e, a, o);
                if (f !== ne) {
                  if (f) continue;
                  c = !1;
                  break;
                }
                if (_) {
                  if (
                    !k(a, function(e, a) {
                      if (!A(_, a) && (h === e || i(h, e, n, t, o))) return _.push(a);
                    })
                  ) {
                    c = !1;
                    break;
                  }
                } else if (h !== p && !i(h, p, n, t, o)) {
                  c = !1;
                  break;
                }
              }
              return o.delete(e), o.delete(a), c;
            }

            function mo(e, a, n, t, i, o, r) {
              switch (n) {
                case ra:
                  if (e.byteLength != a.byteLength || e.byteOffset != a.byteOffset) return !1;
                  (e = e.buffer), (a = a.buffer);
                case oa:
                  return !(e.byteLength != a.byteLength || !o(new jd(e), new jd(a)));
                case Ie:
                case Ce:
                case Be:
                  return Is(+e, +a);
                case Ue:
                  return e.name == a.name && e.message == a.message;
                case Qe:
                case ea:
                  return e == a + '';
                case Ve:
                  var s = U;
                case Xe:
                  var u = t & ce;
                  if ((s || (s = V), e.size != a.size && !u)) return !1;
                  var m = r.get(e);
                  if (m) return m == a;
                  (t |= _e), r.set(e, a);
                  var d = uo(s(e), s(a), t, i, o, r);
                  return r.delete(e), d;
                case aa:
                  if (sl) return sl.call(e) == sl.call(a);
              }
              return !1;
            }

            function lo(e, a, n, t, i, o) {
              var r = n & ce,
                s = _o(e),
                u = s.length;
              if (u != _o(a).length && !r) return !1;
              for (var m = u; m--; ) {
                var d = s[m];
                if (!(r ? d in a : cd.call(a, d))) return !1;
              }
              var l = o.get(e),
                c = o.get(a);
              if (l && c) return l == a && c == e;
              var _ = !0;
              o.set(e, a), o.set(a, e);
              for (var h = r; ++m < u; ) {
                d = s[m];
                var p = e[d],
                  f = a[d];
                if (t) var k = r ? t(f, p, d, a, e, o) : t(p, f, d, e, a, o);
                if (!(k === ne ? p === f || i(p, f, n, t, o) : k)) {
                  _ = !1;
                  break;
                }
                h || (h = 'constructor' == d);
              }
              if (_ && !h) {
                var g = e.constructor,
                  y = a.constructor;
                g != y && 'constructor' in e && 'constructor' in a && !('function' == typeof g && g instanceof g && 'function' == typeof y && y instanceof y) && (_ = !1);
              }
              return o.delete(e), o.delete(a), _;
            }

            function co(e) {
              return wl(Co(e, ne, mr), e + '');
            }

            function _o(e) {
              return ht(e, Pu, Ml);
            }

            function ho(e) {
              return ht(e, Wu, jl);
            }

            function po(e) {
              for (var a = e.name + '', n = el[a], t = cd.call(el, a) ? n.length : 0; t--; ) {
                var i = n[t],
                  o = i.func;
                if (null == o || o == e) return i.name;
              }
              return a;
            }

            function fo(e) {
              return (cd.call(n, 'placeholder') ? n : e).placeholder;
            }

            function ko() {
              var e = n.iteratee || Dm;
              return (e = e === Dm ? Et : e), arguments.length ? e(arguments[0], arguments[1]) : e;
            }

            function go(e, a) {
              var n = e.__data__;
              return Oo(a) ? n['string' == typeof a ? 'string' : 'hash'] : n.map;
            }

            function yo(e) {
              for (var a = Pu(e), n = a.length; n--; ) {
                var t = a[n],
                  i = e[t];
                a[n] = [t, i, Wo(i)];
              }
              return a;
            }

            function Mo(e, a) {
              var n = R(e, a);
              return Ht(n) ? n : ne;
            }

            function jo(e) {
              var a = cd.call(e, Sd),
                n = e[Sd];
              try {
                e[Sd] = ne;
                var t = !0;
              } catch (e) {}
              var i = pd.call(e);
              return t && (a ? (e[Sd] = n) : delete e[Sd]), i;
            }

            function bo(e, a, n) {
              for (var t = -1, i = n.length; ++t < i; ) {
                var o = n[t],
                  r = o.size;
                switch (o.type) {
                  case 'drop':
                    e += r;
                    break;
                  case 'dropRight':
                    a -= r;
                    break;
                  case 'take':
                    a = Cd(a, e + r);
                    break;
                  case 'takeRight':
                    e = Id(e, a - r);
                }
              }
              return { start: e, end: a };
            }

            function vo(e) {
              var a = e.match(Aa);
              return a ? a[1].split(Pa) : [];
            }

            function Lo(e, a, n) {
              a = Mi(a, e);
              for (var t = -1, i = a.length, o = !1; ++t < i; ) {
                var r = $o(a[t]);
                if (!(o = null != e && n(e, r))) break;
                e = e[r];
              }
              return o || ++t != i ? o : !!(i = null == e ? 0 : e.length) && Xs(i) && Ho(r, i) && (cc(e) || lc(e));
            }

            function Yo(e) {
              var a = e.length,
                n = new e.constructor(a);
              return a && 'string' == typeof e[0] && cd.call(e, 'index') && ((n.index = e.index), (n.input = e.input)), n;
            }

            function wo(e) {
              return 'function' != typeof e.constructor || Po(e) ? {} : ml(vd(e));
            }

            function Do(e, a, n) {
              var t = e.constructor;
              switch (a) {
                case oa:
                  return vi(e);
                case Ie:
                case Ce:
                  return new t(+e);
                case ra:
                  return Li(e, n);
                case sa:
                case ua:
                case ma:
                case da:
                case la:
                case ca:
                case _a:
                case ha:
                case pa:
                  return Di(e, n);
                case Ve:
                  return new t();
                case Be:
                case ea:
                  return new t(e);
                case Qe:
                  return Yi(e);
                case Xe:
                  return new t();
                case aa:
                  return wi(e);
              }
            }

            function To(e, a) {
              var n = a.length;
              if (!n) return e;
              var t = n - 1;
              return (a[t] = (n > 1 ? '& ' : '') + a[t]), (a = a.join(n > 2 ? ', ' : ' ')), e.replace(Ea, '{\n/* [wrapped with ' + a + '] */\n');
            }

            function So(e) {
              return cc(e) || lc(e) || !!(Dd && e && e[Dd]);
            }

            function Ho(e, a) {
              var n = typeof e;
              return !!(a = null == a ? xe : a) && ('number' == n || ('symbol' != n && Ga.test(e))) && e > -1 && e % 1 == 0 && e < a;
            }

            function xo(e, a, n) {
              if (!eu(n)) return !1;
              var t = typeof a;
              return !!('number' == t ? Cs(n) && Ho(a, n.length) : 'string' == t && a in n) && Is(n[a], e);
            }

            function zo(e, a) {
              if (cc(e)) return !1;
              var n = typeof e;
              return !('number' != n && 'symbol' != n && 'boolean' != n && null != e && !cu(e)) || Da.test(e) || !wa.test(e) || (null != a && e in td(a));
            }

            function Oo(e) {
              var a = typeof e;
              return 'string' == a || 'number' == a || 'symbol' == a || 'boolean' == a ? '__proto__' !== e : null === e;
            }

            function Eo(e) {
              var a = po(e),
                t = n[a];
              if ('function' != typeof t || !(a in g.prototype)) return !1;
              if (e === t) return !0;
              var i = yl(t);
              return !!i && e === i[0];
            }

            function Ao(e) {
              return !!hd && hd in e;
            }

            function Po(e) {
              var a = e && e.constructor;
              return e === (('function' == typeof a && a.prototype) || md);
            }

            function Wo(e) {
              return e === e && !eu(e);
            }

            function Fo(e, a) {
              return function(n) {
                return null != n && n[e] === a && (a !== ne || e in td(n));
              };
            }

            function No(e, a) {
              var n = e[1],
                t = a[1],
                i = n | t,
                o = i < (he | pe | je),
                r = (t == je && n == ke) || (t == je && n == be && e[7].length <= a[8]) || (t == (je | be) && a[7].length <= a[8] && n == ke);
              if (!o && !r) return e;
              t & he && ((e[2] = a[2]), (i |= n & he ? 0 : fe));
              var s = a[3];
              if (s) {
                var u = e[3];
                (e[3] = u ? Hi(u, s, a[4]) : s), (e[4] = u ? q(e[3], ue) : a[4]);
              }
              return (
                (s = a[5]),
                s && ((u = e[5]), (e[5] = u ? xi(u, s, a[6]) : s), (e[6] = u ? q(e[5], ue) : a[6])),
                (s = a[7]),
                s && (e[7] = s),
                t & je && (e[8] = null == e[8] ? a[8] : Cd(e[8], a[8])),
                null == e[9] && (e[9] = a[9]),
                (e[0] = a[0]),
                (e[1] = i),
                e
              );
            }

            function Ro(e) {
              var a = [];
              if (null != e) for (var n in td(e)) a.push(n);
              return a;
            }

            function Io(e) {
              return pd.call(e);
            }

            function Co(e, a, n) {
              return (
                (a = Id(a === ne ? e.length - 1 : a, 0)),
                function() {
                  for (var t = arguments, i = -1, r = Id(t.length - a, 0), s = Qm(r); ++i < r; ) s[i] = t[a + i];
                  i = -1;
                  for (var u = Qm(a + 1); ++i < a; ) u[i] = t[i];
                  return (u[a] = n(s)), o(e, this, u);
                }
              );
            }

            function Jo(e, a) {
              return a.length < 2 ? e : _t(e, ii(a, 0, -1));
            }

            function Uo(e, a) {
              for (var n = e.length, t = Cd(a.length, n), i = zi(e); t--; ) {
                var o = a[t];
                e[t] = Ho(o, n) ? i[o] : ne;
              }
              return e;
            }

            function Go(e, a) {
              if (('constructor' !== a || 'function' != typeof e[a]) && '__proto__' != a) return e[a];
            }

            function qo(e, a, n) {
              var t = a + '';
              return wl(e, To(t, Ko(vo(t), n)));
            }

            function Vo(e) {
              var a = 0,
                n = 0;
              return function() {
                var t = Jd(),
                  i = De - (t - n);
                if (((n = t), i > 0)) {
                  if (++a >= we) return arguments[0];
                } else a = 0;
                return e.apply(ne, arguments);
              };
            }

            function Bo(e, a) {
              var n = -1,
                t = e.length,
                i = t - 1;
              for (a = a === ne ? t : a; ++n < a; ) {
                var o = Zt(n, i),
                  r = e[o];
                (e[o] = e[n]), (e[n] = r);
              }
              return (e.length = a), e;
            }

            function $o(e) {
              if ('string' == typeof e || cu(e)) return e;
              var a = e + '';
              return '0' == a && 1 / e == -He ? '-0' : a;
            }

            function Zo(e) {
              if (null != e) {
                try {
                  return ld.call(e);
                } catch (e) {}
                try {
                  return e + '';
                } catch (e) {}
              }
              return '';
            }

            function Ko(e, a) {
              return (
                s(We, function(n) {
                  var t = '_.' + n[0];
                  a & n[1] && !l(e, t) && e.push(t);
                }),
                e.sort()
              );
            }

            function Qo(e) {
              if (e instanceof g) return e.clone();
              var a = new i(e.__wrapped__, e.__chain__);
              return (a.__actions__ = zi(e.__actions__)), (a.__index__ = e.__index__), (a.__values__ = e.__values__), a;
            }

            function Xo(e, a, n) {
              a = (n ? xo(e, a, n) : a === ne) ? 1 : Id(gu(a), 0);
              var t = null == e ? 0 : e.length;
              if (!t || a < 1) return [];
              for (var i = 0, o = 0, r = Qm(Ed(t / a)); i < t; ) r[o++] = ii(e, i, (i += a));
              return r;
            }

            function er(e) {
              for (var a = -1, n = null == e ? 0 : e.length, t = 0, i = []; ++a < n; ) {
                var o = e[a];
                o && (i[t++] = o);
              }
              return i;
            }

            function ar() {
              var e = arguments.length;
              if (!e) return [];
              for (var a = Qm(e - 1), n = arguments[0], t = e; t--; ) a[t - 1] = arguments[t];
              return h(cc(n) ? zi(n) : [n], mt(a, 1));
            }

            function nr(e, a, n) {
              var t = null == e ? 0 : e.length;
              return t ? ((a = n || a === ne ? 1 : gu(a)), ii(e, a < 0 ? 0 : a, t)) : [];
            }

            function tr(e, a, n) {
              var t = null == e ? 0 : e.length;
              return t ? ((a = n || a === ne ? 1 : gu(a)), (a = t - a), ii(e, 0, a < 0 ? 0 : a)) : [];
            }

            function ir(e, a) {
              return e && e.length ? hi(e, ko(a, 3), !0, !0) : [];
            }

            function or(e, a) {
              return e && e.length ? hi(e, ko(a, 3), !0) : [];
            }

            function rr(e, a, n, t) {
              var i = null == e ? 0 : e.length;
              return i ? (n && 'number' != typeof n && xo(e, a, n) && ((n = 0), (t = i)), st(e, a, n, t)) : [];
            }

            function sr(e, a, n) {
              var t = null == e ? 0 : e.length;
              if (!t) return -1;
              var i = null == n ? 0 : gu(n);
              return i < 0 && (i = Id(t + i, 0)), j(e, ko(a, 3), i);
            }

            function ur(e, a, n) {
              var t = null == e ? 0 : e.length;
              if (!t) return -1;
              var i = t - 1;
              return n !== ne && ((i = gu(n)), (i = n < 0 ? Id(t + i, 0) : Cd(i, t - 1))), j(e, ko(a, 3), i, !0);
            }

            function mr(e) {
              return (null == e ? 0 : e.length) ? mt(e, 1) : [];
            }

            function dr(e) {
              return (null == e ? 0 : e.length) ? mt(e, He) : [];
            }

            function lr(e, a) {
              return (null == e ? 0 : e.length) ? ((a = a === ne ? 1 : gu(a)), mt(e, a)) : [];
            }

            function cr(e) {
              for (var a = -1, n = null == e ? 0 : e.length, t = {}; ++a < n; ) {
                var i = e[a];
                t[i[0]] = i[1];
              }
              return t;
            }

            function _r(e) {
              return e && e.length ? e[0] : ne;
            }

            function hr(e, a, n) {
              var t = null == e ? 0 : e.length;
              if (!t) return -1;
              var i = null == n ? 0 : gu(n);
              return i < 0 && (i = Id(t + i, 0)), b(e, a, i);
            }

            function pr(e) {
              return (null == e ? 0 : e.length) ? ii(e, 0, -1) : [];
            }

            function fr(e, a) {
              return null == e ? '' : Nd.call(e, a);
            }

            function kr(e) {
              var a = null == e ? 0 : e.length;
              return a ? e[a - 1] : ne;
            }

            function gr(e, a, n) {
              var t = null == e ? 0 : e.length;
              if (!t) return -1;
              var i = t;
              return n !== ne && ((i = gu(n)), (i = i < 0 ? Id(t + i, 0) : Cd(i, t - 1))), a === a ? Z(e, a, i) : j(e, L, i, !0);
            }

            function yr(e, a) {
              return e && e.length ? Jt(e, gu(a)) : ne;
            }

            function Mr(e, a) {
              return e && e.length && a && a.length ? Bt(e, a) : e;
            }

            function jr(e, a, n) {
              return e && e.length && a && a.length ? Bt(e, a, ko(n, 2)) : e;
            }

            function br(e, a, n) {
              return e && e.length && a && a.length ? Bt(e, a, ne, n) : e;
            }

            function vr(e, a) {
              var n = [];
              if (!e || !e.length) return n;
              var t = -1,
                i = [],
                o = e.length;
              for (a = ko(a, 3); ++t < o; ) {
                var r = e[t];
                a(r, t, e) && (n.push(r), i.push(t));
              }
              return $t(e, i), n;
            }

            function Lr(e) {
              return null == e ? e : qd.call(e);
            }

            function Yr(e, a, n) {
              var t = null == e ? 0 : e.length;
              return t ? (n && 'number' != typeof n && xo(e, a, n) ? ((a = 0), (n = t)) : ((a = null == a ? 0 : gu(a)), (n = n === ne ? t : gu(n))), ii(e, a, n)) : [];
            }

            function wr(e, a) {
              return ri(e, a);
            }

            function Dr(e, a, n) {
              return si(e, a, ko(n, 2));
            }

            function Tr(e, a) {
              var n = null == e ? 0 : e.length;
              if (n) {
                var t = ri(e, a);
                if (t < n && Is(e[t], a)) return t;
              }
              return -1;
            }

            function Sr(e, a) {
              return ri(e, a, !0);
            }

            function Hr(e, a, n) {
              return si(e, a, ko(n, 2), !0);
            }

            function xr(e, a) {
              if (null == e ? 0 : e.length) {
                var n = ri(e, a, !0) - 1;
                if (Is(e[n], a)) return n;
              }
              return -1;
            }

            function zr(e) {
              return e && e.length ? ui(e) : [];
            }

            function Or(e, a) {
              return e && e.length ? ui(e, ko(a, 2)) : [];
            }

            function Er(e) {
              var a = null == e ? 0 : e.length;
              return a ? ii(e, 1, a) : [];
            }

            function Ar(e, a, n) {
              return e && e.length ? ((a = n || a === ne ? 1 : gu(a)), ii(e, 0, a < 0 ? 0 : a)) : [];
            }

            function Pr(e, a, n) {
              var t = null == e ? 0 : e.length;
              return t ? ((a = n || a === ne ? 1 : gu(a)), (a = t - a), ii(e, a < 0 ? 0 : a, t)) : [];
            }

            function Wr(e, a) {
              return e && e.length ? hi(e, ko(a, 3), !1, !0) : [];
            }

            function Fr(e, a) {
              return e && e.length ? hi(e, ko(a, 3)) : [];
            }

            function Nr(e) {
              return e && e.length ? li(e) : [];
            }

            function Rr(e, a) {
              return e && e.length ? li(e, ko(a, 2)) : [];
            }

            function Ir(e, a) {
              return (a = 'function' == typeof a ? a : ne), e && e.length ? li(e, ne, a) : [];
            }

            function Cr(e) {
              if (!e || !e.length) return [];
              var a = 0;
              return (
                (e = d(e, function(e) {
                  if (Js(e)) return (a = Id(e.length, a)), !0;
                })),
                x(a, function(a) {
                  return _(e, w(a));
                })
              );
            }

            function Jr(e, a) {
              if (!e || !e.length) return [];
              var n = Cr(e);
              return null == a
                ? n
                : _(n, function(e) {
                    return o(a, ne, e);
                  });
            }

            function Ur(e, a) {
              return ki(e || [], a || [], Cn);
            }

            function Gr(e, a) {
              return ki(e || [], a || [], ni);
            }

            function qr(e) {
              var a = n(e);
              return (a.__chain__ = !0), a;
            }

            function Vr(e, a) {
              return a(e), e;
            }

            function Br(e, a) {
              return a(e);
            }

            function $r() {
              return qr(this);
            }

            function Zr() {
              return new i(this.value(), this.__chain__);
            }

            function Kr() {
              this.__values__ === ne && (this.__values__ = fu(this.value()));
              var e = this.__index__ >= this.__values__.length;
              return { done: e, value: e ? ne : this.__values__[this.__index__++] };
            }

            function Qr() {
              return this;
            }

            function Xr(e) {
              for (var a, n = this; n instanceof t; ) {
                var i = Qo(n);
                (i.__index__ = 0), (i.__values__ = ne), a ? (o.__wrapped__ = i) : (a = i);
                var o = i;
                n = n.__wrapped__;
              }
              return (o.__wrapped__ = e), a;
            }

            function es() {
              var e = this.__wrapped__;
              if (e instanceof g) {
                var a = e;
                return (
                  this.__actions__.length && (a = new g(this)),
                  (a = a.reverse()),
                  a.__actions__.push({
                    func: Br,
                    args: [Lr],
                    thisArg: ne,
                  }),
                  new i(a, this.__chain__)
                );
              }
              return this.thru(Lr);
            }

            function as() {
              return pi(this.__wrapped__, this.__actions__);
            }

            function ns(e, a, n) {
              var t = cc(e) ? m : ot;
              return n && xo(e, a, n) && (a = ne), t(e, ko(a, 3));
            }

            function ts(e, a) {
              return (cc(e) ? d : ut)(e, ko(a, 3));
            }

            function is(e, a) {
              return mt(ds(e, a), 1);
            }

            function os(e, a) {
              return mt(ds(e, a), He);
            }

            function rs(e, a, n) {
              return (n = n === ne ? 1 : gu(n)), mt(ds(e, a), n);
            }

            function ss(e, a) {
              return (cc(e) ? s : dl)(e, ko(a, 3));
            }

            function us(e, a) {
              return (cc(e) ? u : ll)(e, ko(a, 3));
            }

            function ms(e, a, n, t) {
              (e = Cs(e) ? e : $u(e)), (n = n && !t ? gu(n) : 0);
              var i = e.length;
              return n < 0 && (n = Id(i + n, 0)), lu(e) ? n <= i && e.indexOf(a, n) > -1 : !!i && b(e, a, n) > -1;
            }

            function ds(e, a) {
              return (cc(e) ? _ : Ft)(e, ko(a, 3));
            }

            function ls(e, a, n, t) {
              return null == e ? [] : (cc(a) || (a = null == a ? [] : [a]), (n = t ? ne : n), cc(n) || (n = null == n ? [] : [n]), Ut(e, a, n));
            }

            function cs(e, a, n) {
              var t = cc(e) ? p : T,
                i = arguments.length < 3;
              return t(e, ko(a, 4), n, i, dl);
            }

            function _s(e, a, n) {
              var t = cc(e) ? f : T,
                i = arguments.length < 3;
              return t(e, ko(a, 4), n, i, ll);
            }

            function hs(e, a) {
              return (cc(e) ? d : ut)(e, Ts(ko(a, 3)));
            }

            function ps(e) {
              return (cc(e) ? xn : ei)(e);
            }

            function fs(e, a, n) {
              return (a = (n ? xo(e, a, n) : a === ne) ? 1 : gu(a)), (cc(e) ? zn : ai)(e, a);
            }

            function ks(e) {
              return (cc(e) ? En : ti)(e);
            }

            function gs(e) {
              if (null == e) return 0;
              if (Cs(e)) return lu(e) ? K(e) : e.length;
              var a = bl(e);
              return a == Ve || a == Xe ? e.size : At(e).length;
            }

            function ys(e, a, n) {
              var t = cc(e) ? k : oi;
              return n && xo(e, a, n) && (a = ne), t(e, ko(a, 3));
            }

            function Ms(e, a) {
              if ('function' != typeof a) throw new rd(oe);
              return (
                (e = gu(e)),
                function() {
                  if (--e < 1) return a.apply(this, arguments);
                }
              );
            }

            function js(e, a, n) {
              return (a = n ? ne : a), (a = e && null == a ? e.length : a), io(e, je, ne, ne, ne, ne, a);
            }

            function bs(e, a) {
              var n;
              if ('function' != typeof a) throw new rd(oe);
              return (
                (e = gu(e)),
                function() {
                  return --e > 0 && (n = a.apply(this, arguments)), e <= 1 && (a = ne), n;
                }
              );
            }

            function vs(e, a, n) {
              a = n ? ne : a;
              var t = io(e, ke, ne, ne, ne, ne, ne, a);
              return (t.placeholder = vs.placeholder), t;
            }

            function Ls(e, a, n) {
              a = n ? ne : a;
              var t = io(e, ge, ne, ne, ne, ne, ne, a);
              return (t.placeholder = Ls.placeholder), t;
            }

            function Ys(e, a, n) {
              function t(a) {
                var n = c,
                  t = _;
                return (c = _ = ne), (g = a), (p = e.apply(t, n));
              }

              function i(e) {
                return (g = e), (f = Yl(s, a)), y ? t(e) : p;
              }

              function o(e) {
                var n = e - k,
                  t = e - g,
                  i = a - n;
                return M ? Cd(i, h - t) : i;
              }

              function r(e) {
                var n = e - k,
                  t = e - g;
                return k === ne || n >= a || n < 0 || (M && t >= h);
              }

              function s() {
                var e = ec();
                if (r(e)) return u(e);
                f = Yl(s, o(e));
              }

              function u(e) {
                return (f = ne), j && c ? t(e) : ((c = _ = ne), p);
              }

              function m() {
                f !== ne && kl(f), (g = 0), (c = k = _ = f = ne);
              }

              function d() {
                return f === ne ? p : u(ec());
              }

              function l() {
                var e = ec(),
                  n = r(e);
                if (((c = arguments), (_ = this), (k = e), n)) {
                  if (f === ne) return i(k);
                  if (M) return kl(f), (f = Yl(s, a)), t(k);
                }
                return f === ne && (f = Yl(s, a)), p;
              }

              var c,
                _,
                h,
                p,
                f,
                k,
                g = 0,
                y = !1,
                M = !1,
                j = !0;
              if ('function' != typeof e) throw new rd(oe);
              return (
                (a = Mu(a) || 0),
                eu(n) && ((y = !!n.leading), (M = 'maxWait' in n), (h = M ? Id(Mu(n.maxWait) || 0, a) : h), (j = 'trailing' in n ? !!n.trailing : j)),
                (l.cancel = m),
                (l.flush = d),
                l
              );
            }

            function ws(e) {
              return io(e, ve);
            }

            function Ds(e, a) {
              if ('function' != typeof e || (null != a && 'function' != typeof a)) throw new rd(oe);
              var n = function() {
                var t = arguments,
                  i = a ? a.apply(this, t) : t[0],
                  o = n.cache;
                if (o.has(i)) return o.get(i);
                var r = e.apply(this, t);
                return (n.cache = o.set(i, r) || o), r;
              };
              return (n.cache = new (Ds.Cache || rn)()), n;
            }

            function Ts(e) {
              if ('function' != typeof e) throw new rd(oe);
              return function() {
                var a = arguments;
                switch (a.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, a[0]);
                  case 2:
                    return !e.call(this, a[0], a[1]);
                  case 3:
                    return !e.call(this, a[0], a[1], a[2]);
                }
                return !e.apply(this, a);
              };
            }

            function Ss(e) {
              return bs(2, e);
            }

            function Hs(e, a) {
              if ('function' != typeof e) throw new rd(oe);
              return (a = a === ne ? a : gu(a)), Xt(e, a);
            }

            function xs(e, a) {
              if ('function' != typeof e) throw new rd(oe);
              return (
                (a = null == a ? 0 : Id(gu(a), 0)),
                Xt(function(n) {
                  var t = n[a],
                    i = ji(n, 0, a);
                  return t && h(i, t), o(e, this, i);
                })
              );
            }

            function zs(e, a, n) {
              var t = !0,
                i = !0;
              if ('function' != typeof e) throw new rd(oe);
              return (
                eu(n) && ((t = 'leading' in n ? !!n.leading : t), (i = 'trailing' in n ? !!n.trailing : i)),
                Ys(e, a, {
                  leading: t,
                  maxWait: a,
                  trailing: i,
                })
              );
            }

            function Os(e) {
              return js(e, 1);
            }

            function Es(e, a) {
              return rc(yi(a), e);
            }

            function As() {
              if (!arguments.length) return [];
              var e = arguments[0];
              return cc(e) ? e : [e];
            }

            function Ps(e) {
              return et(e, le);
            }

            function Ws(e, a) {
              return (a = 'function' == typeof a ? a : ne), et(e, le, a);
            }

            function Fs(e) {
              return et(e, me | le);
            }

            function Ns(e, a) {
              return (a = 'function' == typeof a ? a : ne), et(e, me | le, a);
            }

            function Rs(e, a) {
              return null == a || nt(e, a, Pu(a));
            }

            function Is(e, a) {
              return e === a || (e !== e && a !== a);
            }

            function Cs(e) {
              return null != e && Xs(e.length) && !Ks(e);
            }

            function Js(e) {
              return au(e) && Cs(e);
            }

            function Us(e) {
              return !0 === e || !1 === e || (au(e) && pt(e) == Ie);
            }

            function Gs(e) {
              return au(e) && 1 === e.nodeType && !mu(e);
            }

            function qs(e) {
              if (null == e) return !0;
              if (Cs(e) && (cc(e) || 'string' == typeof e || 'function' == typeof e.splice || hc(e) || yc(e) || lc(e))) return !e.length;
              var a = bl(e);
              if (a == Ve || a == Xe) return !e.size;
              if (Po(e)) return !At(e).length;
              for (var n in e) if (cd.call(e, n)) return !1;
              return !0;
            }

            function Vs(e, a) {
              return wt(e, a);
            }

            function Bs(e, a, n) {
              n = 'function' == typeof n ? n : ne;
              var t = n ? n(e, a) : ne;
              return t === ne ? wt(e, a, ne, n) : !!t;
            }

            function $s(e) {
              if (!au(e)) return !1;
              var a = pt(e);
              return a == Ue || a == Je || ('string' == typeof e.message && 'string' == typeof e.name && !mu(e));
            }

            function Zs(e) {
              return 'number' == typeof e && Fd(e);
            }

            function Ks(e) {
              if (!eu(e)) return !1;
              var a = pt(e);
              return a == Ge || a == qe || a == Re || a == Ke;
            }

            function Qs(e) {
              return 'number' == typeof e && e == gu(e);
            }

            function Xs(e) {
              return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= xe;
            }

            function eu(e) {
              var a = typeof e;
              return null != e && ('object' == a || 'function' == a);
            }

            function au(e) {
              return null != e && 'object' == typeof e;
            }

            function nu(e, a) {
              return e === a || St(e, a, yo(a));
            }

            function tu(e, a, n) {
              return (n = 'function' == typeof n ? n : ne), St(e, a, yo(a), n);
            }

            function iu(e) {
              return uu(e) && e != +e;
            }

            function ou(e) {
              if (vl(e)) throw new ed(ie);
              return Ht(e);
            }

            function ru(e) {
              return null === e;
            }

            function su(e) {
              return null == e;
            }

            function uu(e) {
              return 'number' == typeof e || (au(e) && pt(e) == Be);
            }

            function mu(e) {
              if (!au(e) || pt(e) != Ze) return !1;
              var a = vd(e);
              if (null === a) return !0;
              var n = cd.call(a, 'constructor') && a.constructor;
              return 'function' == typeof n && n instanceof n && ld.call(n) == fd;
            }

            function du(e) {
              return Qs(e) && e >= -xe && e <= xe;
            }

            function lu(e) {
              return 'string' == typeof e || (!cc(e) && au(e) && pt(e) == ea);
            }

            function cu(e) {
              return 'symbol' == typeof e || (au(e) && pt(e) == aa);
            }

            function _u(e) {
              return e === ne;
            }

            function hu(e) {
              return au(e) && bl(e) == ta;
            }

            function pu(e) {
              return au(e) && pt(e) == ia;
            }

            function fu(e) {
              if (!e) return [];
              if (Cs(e)) return lu(e) ? Q(e) : zi(e);
              if (Td && e[Td]) return J(e[Td]());
              var a = bl(e);
              return (a == Ve ? U : a == Xe ? V : $u)(e);
            }

            function ku(e) {
              if (!e) return 0 === e ? e : 0;
              if ((e = Mu(e)) === He || e === -He) {
                return (e < 0 ? -1 : 1) * ze;
              }
              return e === e ? e : 0;
            }

            function gu(e) {
              var a = ku(e),
                n = a % 1;
              return a === a ? (n ? a - n : a) : 0;
            }

            function yu(e) {
              return e ? Xn(gu(e), 0, Ee) : 0;
            }

            function Mu(e) {
              if ('number' == typeof e) return e;
              if (cu(e)) return Oe;
              if (eu(e)) {
                var a = 'function' == typeof e.valueOf ? e.valueOf() : e;
                e = eu(a) ? a + '' : a;
              }
              if ('string' != typeof e) return 0 === e ? e : +e;
              e = e.replace(xa, '');
              var n = Ca.test(e);
              return n || Ua.test(e) ? Dn(e.slice(2), n ? 2 : 8) : Ia.test(e) ? Oe : +e;
            }

            function ju(e) {
              return Oi(e, Wu(e));
            }

            function bu(e) {
              return e ? Xn(gu(e), -xe, xe) : 0 === e ? e : 0;
            }

            function vu(e) {
              return null == e ? '' : di(e);
            }

            function Lu(e, a) {
              var n = ml(e);
              return null == a ? n : $n(n, a);
            }

            function Yu(e, a) {
              return M(e, ko(a, 3), dt);
            }

            function wu(e, a) {
              return M(e, ko(a, 3), lt);
            }

            function Du(e, a) {
              return null == e ? e : cl(e, ko(a, 3), Wu);
            }

            function Tu(e, a) {
              return null == e ? e : _l(e, ko(a, 3), Wu);
            }

            function Su(e, a) {
              return e && dt(e, ko(a, 3));
            }

            function Hu(e, a) {
              return e && lt(e, ko(a, 3));
            }

            function xu(e) {
              return null == e ? [] : ct(e, Pu(e));
            }

            function zu(e) {
              return null == e ? [] : ct(e, Wu(e));
            }

            function Ou(e, a, n) {
              var t = null == e ? ne : _t(e, a);
              return t === ne ? n : t;
            }

            function Eu(e, a) {
              return null != e && Lo(e, a, kt);
            }

            function Au(e, a) {
              return null != e && Lo(e, a, gt);
            }

            function Pu(e) {
              return Cs(e) ? Sn(e) : At(e);
            }

            function Wu(e) {
              return Cs(e) ? Sn(e, !0) : Pt(e);
            }

            function Fu(e, a) {
              var n = {};
              return (
                (a = ko(a, 3)),
                dt(e, function(e, t, i) {
                  Kn(n, a(e, t, i), e);
                }),
                n
              );
            }

            function Nu(e, a) {
              var n = {};
              return (
                (a = ko(a, 3)),
                dt(e, function(e, t, i) {
                  Kn(n, t, a(e, t, i));
                }),
                n
              );
            }

            function Ru(e, a) {
              return Iu(e, Ts(ko(a)));
            }

            function Iu(e, a) {
              if (null == e) return {};
              var n = _(ho(e), function(e) {
                return [e];
              });
              return (
                (a = ko(a)),
                qt(e, n, function(e, n) {
                  return a(e, n[0]);
                })
              );
            }

            function Cu(e, a, n) {
              a = Mi(a, e);
              var t = -1,
                i = a.length;
              for (i || ((i = 1), (e = ne)); ++t < i; ) {
                var o = null == e ? ne : e[$o(a[t])];
                o === ne && ((t = i), (o = n)), (e = Ks(o) ? o.call(e) : o);
              }
              return e;
            }

            function Ju(e, a, n) {
              return null == e ? e : ni(e, a, n);
            }

            function Uu(e, a, n, t) {
              return (t = 'function' == typeof t ? t : ne), null == e ? e : ni(e, a, n, t);
            }

            function Gu(e, a, n) {
              var t = cc(e),
                i = t || hc(e) || yc(e);
              if (((a = ko(a, 4)), null == n)) {
                var o = e && e.constructor;
                n = i ? (t ? new o() : []) : eu(e) && Ks(o) ? ml(vd(e)) : {};
              }
              return (
                (i ? s : dt)(e, function(e, t, i) {
                  return a(n, e, t, i);
                }),
                n
              );
            }

            function qu(e, a) {
              return null == e || ci(e, a);
            }

            function Vu(e, a, n) {
              return null == e ? e : _i(e, a, yi(n));
            }

            function Bu(e, a, n, t) {
              return (t = 'function' == typeof t ? t : ne), null == e ? e : _i(e, a, yi(n), t);
            }

            function $u(e) {
              return null == e ? [] : E(e, Pu(e));
            }

            function Zu(e) {
              return null == e ? [] : E(e, Wu(e));
            }

            function Ku(e, a, n) {
              return n === ne && ((n = a), (a = ne)), n !== ne && ((n = Mu(n)), (n = n === n ? n : 0)), a !== ne && ((a = Mu(a)), (a = a === a ? a : 0)), Xn(Mu(e), a, n);
            }

            function Qu(e, a, n) {
              return (a = ku(a)), n === ne ? ((n = a), (a = 0)) : (n = ku(n)), (e = Mu(e)), yt(e, a, n);
            }

            function Xu(e, a, n) {
              if (
                (n && 'boolean' != typeof n && xo(e, a, n) && (a = n = ne),
                n === ne && ('boolean' == typeof a ? ((n = a), (a = ne)) : 'boolean' == typeof e && ((n = e), (e = ne))),
                e === ne && a === ne ? ((e = 0), (a = 1)) : ((e = ku(e)), a === ne ? ((a = e), (e = 0)) : (a = ku(a))),
                e > a)
              ) {
                var t = e;
                (e = a), (a = t);
              }
              if (n || e % 1 || a % 1) {
                var i = Gd();
                return Cd(e + i * (a - e + wn('1e-' + ((i + '').length - 1))), a);
              }
              return Zt(e, a);
            }

            function em(e) {
              return Gc(vu(e).toLowerCase());
            }

            function am(e) {
              return (e = vu(e)) && e.replace(qa, Jn).replace(_n, '');
            }

            function nm(e, a, n) {
              (e = vu(e)), (a = di(a));
              var t = e.length;
              n = n === ne ? t : Xn(gu(n), 0, t);
              var i = n;
              return (n -= a.length) >= 0 && e.slice(n, i) == a;
            }

            function tm(e) {
              return (e = vu(e)), e && ba.test(e) ? e.replace(Ma, Un) : e;
            }

            function im(e) {
              return (e = vu(e)), e && Ha.test(e) ? e.replace(Sa, '\\$&') : e;
            }

            function om(e, a, n) {
              (e = vu(e)), (a = gu(a));
              var t = a ? K(e) : 0;
              if (!a || t >= a) return e;
              var i = (a - t) / 2;
              return Ki(Ad(i), n) + e + Ki(Ed(i), n);
            }

            function rm(e, a, n) {
              (e = vu(e)), (a = gu(a));
              var t = a ? K(e) : 0;
              return a && t < a ? e + Ki(a - t, n) : e;
            }

            function sm(e, a, n) {
              (e = vu(e)), (a = gu(a));
              var t = a ? K(e) : 0;
              return a && t < a ? Ki(a - t, n) + e : e;
            }

            function um(e, a, n) {
              return n || null == a ? (a = 0) : a && (a = +a), Ud(vu(e).replace(za, ''), a || 0);
            }

            function mm(e, a, n) {
              return (a = (n ? xo(e, a, n) : a === ne) ? 1 : gu(a)), Qt(vu(e), a);
            }

            function dm() {
              var e = arguments,
                a = vu(e[0]);
              return e.length < 3 ? a : a.replace(e[1], e[2]);
            }

            function lm(e, a, n) {
              return (
                n && 'number' != typeof n && xo(e, a, n) && (a = n = ne),
                (n = n === ne ? Ee : n >>> 0) ? ((e = vu(e)), e && ('string' == typeof a || (null != a && !kc(a))) && !(a = di(a)) && I(e) ? ji(Q(e), 0, n) : e.split(a, n)) : []
              );
            }

            function cm(e, a, n) {
              return (e = vu(e)), (n = null == n ? 0 : Xn(gu(n), 0, e.length)), (a = di(a)), e.slice(n, n + a.length) == a;
            }

            function _m(e, a, t) {
              var i = n.templateSettings;
              t && xo(e, a, t) && (a = ne), (e = vu(e)), (a = Lc({}, a, i, oo));
              var o,
                r,
                s = Lc({}, a.imports, i.imports, oo),
                u = Pu(s),
                m = E(s, u),
                d = 0,
                l = a.interpolate || Va,
                c = "__p += '",
                _ = id((a.escape || Va).source + '|' + l.source + '|' + (l === Ya ? Na : Va).source + '|' + (a.evaluate || Va).source + '|$', 'g'),
                h = '//# sourceURL=' + (cd.call(a, 'sourceURL') ? (a.sourceURL + '').replace(/\s/g, ' ') : 'lodash.templateSources[' + ++yn + ']') + '\n';
              e.replace(_, function(a, n, t, i, s, u) {
                return (
                  t || (t = i),
                  (c += e.slice(d, u).replace(Ba, N)),
                  n && ((o = !0), (c += "' +\n__e(" + n + ") +\n'")),
                  s && ((r = !0), (c += "';\n" + s + ";\n__p += '")),
                  t && (c += "' +\n((__t = (" + t + ")) == null ? '' : __t) +\n'"),
                  (d = u + a.length),
                  a
                );
              }),
                (c += "';\n");
              var p = cd.call(a, 'variable') && a.variable;
              p || (c = 'with (obj) {\n' + c + '\n}\n'),
                (c = (r ? c.replace(fa, '') : c).replace(ka, '$1').replace(ga, '$1;')),
                (c =
                  'function(' +
                  (p || 'obj') +
                  ') {\n' +
                  (p ? '' : 'obj || (obj = {});\n') +
                  "var __t, __p = ''" +
                  (o ? ', __e = _.escape' : '') +
                  (r ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ';\n') +
                  c +
                  'return __p\n}');
              var f = qc(function() {
                return ad(u, h + 'return ' + c).apply(ne, m);
              });
              if (((f.source = c), $s(f))) throw f;
              return f;
            }

            function hm(e) {
              return vu(e).toLowerCase();
            }

            function pm(e) {
              return vu(e).toUpperCase();
            }

            function fm(e, a, n) {
              if ((e = vu(e)) && (n || a === ne)) return e.replace(xa, '');
              if (!e || !(a = di(a))) return e;
              var t = Q(e),
                i = Q(a);
              return ji(t, P(t, i), W(t, i) + 1).join('');
            }

            function km(e, a, n) {
              if ((e = vu(e)) && (n || a === ne)) return e.replace(Oa, '');
              if (!e || !(a = di(a))) return e;
              var t = Q(e);
              return ji(t, 0, W(t, Q(a)) + 1).join('');
            }

            function gm(e, a, n) {
              if ((e = vu(e)) && (n || a === ne)) return e.replace(za, '');
              if (!e || !(a = di(a))) return e;
              var t = Q(e);
              return ji(t, P(t, Q(a))).join('');
            }

            function ym(e, a) {
              var n = Le,
                t = Ye;
              if (eu(a)) {
                var i = 'separator' in a ? a.separator : i;
                (n = 'length' in a ? gu(a.length) : n), (t = 'omission' in a ? di(a.omission) : t);
              }
              e = vu(e);
              var o = e.length;
              if (I(e)) {
                var r = Q(e);
                o = r.length;
              }
              if (n >= o) return e;
              var s = n - K(t);
              if (s < 1) return t;
              var u = r ? ji(r, 0, s).join('') : e.slice(0, s);
              if (i === ne) return u + t;
              if ((r && (s += u.length - s), kc(i))) {
                if (e.slice(s).search(i)) {
                  var m,
                    d = u;
                  for (i.global || (i = id(i.source, vu(Ra.exec(i)) + 'g')), i.lastIndex = 0; (m = i.exec(d)); ) var l = m.index;
                  u = u.slice(0, l === ne ? s : l);
                }
              } else if (e.indexOf(di(i), s) != s) {
                var c = u.lastIndexOf(i);
                c > -1 && (u = u.slice(0, c));
              }
              return u + t;
            }

            function Mm(e) {
              return (e = vu(e)), e && ja.test(e) ? e.replace(ya, Gn) : e;
            }

            function jm(e, a, n) {
              return (e = vu(e)), (a = n ? ne : a), a === ne ? (C(e) ? ae(e) : y(e)) : e.match(a) || [];
            }

            function bm(e) {
              var a = null == e ? 0 : e.length,
                n = ko();
              return (
                (e = a
                  ? _(e, function(e) {
                      if ('function' != typeof e[1]) throw new rd(oe);
                      return [n(e[0]), e[1]];
                    })
                  : []),
                Xt(function(n) {
                  for (var t = -1; ++t < a; ) {
                    var i = e[t];
                    if (o(i[0], this, n)) return o(i[1], this, n);
                  }
                })
              );
            }

            function vm(e) {
              return at(et(e, me));
            }

            function Lm(e) {
              return function() {
                return e;
              };
            }

            function Ym(e, a) {
              return null == e || e !== e ? a : e;
            }

            function wm(e) {
              return e;
            }

            function Dm(e) {
              return Et('function' == typeof e ? e : et(e, me));
            }

            function Tm(e) {
              return Nt(et(e, me));
            }

            function Sm(e, a) {
              return Rt(e, et(a, me));
            }

            function Hm(e, a, n) {
              var t = Pu(a),
                i = ct(a, t);
              null != n || (eu(a) && (i.length || !t.length)) || ((n = a), (a = e), (e = this), (i = ct(a, Pu(a))));
              var o = !(eu(n) && 'chain' in n && !n.chain),
                r = Ks(e);
              return (
                s(i, function(n) {
                  var t = a[n];
                  (e[n] = t),
                    r &&
                      (e.prototype[n] = function() {
                        var a = this.__chain__;
                        if (o || a) {
                          var n = e(this.__wrapped__);
                          return (
                            (n.__actions__ = zi(this.__actions__)).push({
                              func: t,
                              args: arguments,
                              thisArg: e,
                            }),
                            (n.__chain__ = a),
                            n
                          );
                        }
                        return t.apply(e, h([this.value()], arguments));
                      });
                }),
                e
              );
            }

            function xm() {
              return Hn._ === this && (Hn._ = kd), this;
            }

            function zm() {}

            function Om(e) {
              return (
                (e = gu(e)),
                Xt(function(a) {
                  return Jt(a, e);
                })
              );
            }

            function Em(e) {
              return zo(e) ? w($o(e)) : Vt(e);
            }

            function Am(e) {
              return function(a) {
                return null == e ? ne : _t(e, a);
              };
            }

            function Pm() {
              return [];
            }

            function Wm() {
              return !1;
            }

            function Fm() {
              return {};
            }

            function Nm() {
              return '';
            }

            function Rm() {
              return !0;
            }

            function Im(e, a) {
              if ((e = gu(e)) < 1 || e > xe) return [];
              var n = Ee,
                t = Cd(e, Ee);
              (a = ko(a)), (e -= Ee);
              for (var i = x(t, a); ++n < e; ) a(n);
              return i;
            }

            function Cm(e) {
              return cc(e) ? _(e, $o) : cu(e) ? [e] : zi(Dl(vu(e)));
            }

            function Jm(e) {
              var a = ++_d;
              return vu(e) + a;
            }

            function Um(e) {
              return e && e.length ? rt(e, wm, ft) : ne;
            }

            function Gm(e, a) {
              return e && e.length ? rt(e, ko(a, 2), ft) : ne;
            }

            function qm(e) {
              return Y(e, wm);
            }

            function Vm(e, a) {
              return Y(e, ko(a, 2));
            }

            function Bm(e) {
              return e && e.length ? rt(e, wm, Wt) : ne;
            }

            function $m(e, a) {
              return e && e.length ? rt(e, ko(a, 2), Wt) : ne;
            }

            function Zm(e) {
              return e && e.length ? H(e, wm) : 0;
            }

            function Km(e, a) {
              return e && e.length ? H(e, ko(a, 2)) : 0;
            }

            a = null == a ? Hn : qn.defaults(Hn.Object(), a, qn.pick(Hn, gn));
            var Qm = a.Array,
              Xm = a.Date,
              ed = a.Error,
              ad = a.Function,
              nd = a.Math,
              td = a.Object,
              id = a.RegExp,
              od = a.String,
              rd = a.TypeError,
              sd = Qm.prototype,
              ud = ad.prototype,
              md = td.prototype,
              dd = a['__core-js_shared__'],
              ld = ud.toString,
              cd = md.hasOwnProperty,
              _d = 0,
              hd = (function() {
                var e = /[^.]+$/.exec((dd && dd.keys && dd.keys.IE_PROTO) || '');
                return e ? 'Symbol(src)_1.' + e : '';
              })(),
              pd = md.toString,
              fd = ld.call(td),
              kd = Hn._,
              gd = id(
                '^' +
                  ld
                    .call(cd)
                    .replace(Sa, '\\$&')
                    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                  '$'
              ),
              yd = On ? a.Buffer : ne,
              Md = a.Symbol,
              jd = a.Uint8Array,
              bd = yd ? yd.allocUnsafe : ne,
              vd = G(td.getPrototypeOf, td),
              Ld = td.create,
              Yd = md.propertyIsEnumerable,
              wd = sd.splice,
              Dd = Md ? Md.isConcatSpreadable : ne,
              Td = Md ? Md.iterator : ne,
              Sd = Md ? Md.toStringTag : ne,
              Hd = (function() {
                try {
                  var e = Mo(td, 'defineProperty');
                  return e({}, '', {}), e;
                } catch (e) {}
              })(),
              xd = a.clearTimeout !== Hn.clearTimeout && a.clearTimeout,
              zd = Xm && Xm.now !== Hn.Date.now && Xm.now,
              Od = a.setTimeout !== Hn.setTimeout && a.setTimeout,
              Ed = nd.ceil,
              Ad = nd.floor,
              Pd = td.getOwnPropertySymbols,
              Wd = yd ? yd.isBuffer : ne,
              Fd = a.isFinite,
              Nd = sd.join,
              Rd = G(td.keys, td),
              Id = nd.max,
              Cd = nd.min,
              Jd = Xm.now,
              Ud = a.parseInt,
              Gd = nd.random,
              qd = sd.reverse,
              Vd = Mo(a, 'DataView'),
              Bd = Mo(a, 'Map'),
              $d = Mo(a, 'Promise'),
              Zd = Mo(a, 'Set'),
              Kd = Mo(a, 'WeakMap'),
              Qd = Mo(td, 'create'),
              Xd = Kd && new Kd(),
              el = {},
              al = Zo(Vd),
              nl = Zo(Bd),
              tl = Zo($d),
              il = Zo(Zd),
              ol = Zo(Kd),
              rl = Md ? Md.prototype : ne,
              sl = rl ? rl.valueOf : ne,
              ul = rl ? rl.toString : ne,
              ml = (function() {
                function e() {}

                return function(a) {
                  if (!eu(a)) return {};
                  if (Ld) return Ld(a);
                  e.prototype = a;
                  var n = new e();
                  return (e.prototype = ne), n;
                };
              })();
            (n.templateSettings = {
              escape: va,
              evaluate: La,
              interpolate: Ya,
              variable: '',
              imports: { _: n },
            }),
              (n.prototype = t.prototype),
              (n.prototype.constructor = n),
              (i.prototype = ml(t.prototype)),
              (i.prototype.constructor = i),
              (g.prototype = ml(t.prototype)),
              (g.prototype.constructor = g),
              (ee.prototype.clear = Wa),
              (ee.prototype.delete = $a),
              (ee.prototype.get = Za),
              (ee.prototype.has = Ka),
              (ee.prototype.set = Qa),
              (Xa.prototype.clear = en),
              (Xa.prototype.delete = an),
              (Xa.prototype.get = nn),
              (Xa.prototype.has = tn),
              (Xa.prototype.set = on),
              (rn.prototype.clear = sn),
              (rn.prototype.delete = un),
              (rn.prototype.get = mn),
              (rn.prototype.has = dn),
              (rn.prototype.set = ln),
              (hn.prototype.add = hn.prototype.push = pn),
              (hn.prototype.has = fn),
              (kn.prototype.clear = bn),
              (kn.prototype.delete = vn),
              (kn.prototype.get = Ln),
              (kn.prototype.has = Yn),
              (kn.prototype.set = Tn);
            var dl = Fi(dt),
              ll = Fi(lt, !0),
              cl = Ni(),
              _l = Ni(!0),
              hl = Xd
                ? function(e, a) {
                    return Xd.set(e, a), e;
                  }
                : wm,
              pl = Hd
                ? function(e, a) {
                    return Hd(e, 'toString', {
                      configurable: !0,
                      enumerable: !1,
                      value: Lm(a),
                      writable: !0,
                    });
                  }
                : wm,
              fl = Xt,
              kl =
                xd ||
                function(e) {
                  return Hn.clearTimeout(e);
                },
              gl =
                Zd && 1 / V(new Zd([, -0]))[1] == He
                  ? function(e) {
                      return new Zd(e);
                    }
                  : zm,
              yl = Xd
                ? function(e) {
                    return Xd.get(e);
                  }
                : zm,
              Ml = Pd
                ? function(e) {
                    return null == e
                      ? []
                      : ((e = td(e)),
                        d(Pd(e), function(a) {
                          return Yd.call(e, a);
                        }));
                  }
                : Pm,
              jl = Pd
                ? function(e) {
                    for (var a = []; e; ) h(a, Ml(e)), (e = vd(e));
                    return a;
                  }
                : Pm,
              bl = pt;
            ((Vd && bl(new Vd(new ArrayBuffer(1))) != ra) ||
              (Bd && bl(new Bd()) != Ve) ||
              ($d && '[object Promise]' != bl($d.resolve())) ||
              (Zd && bl(new Zd()) != Xe) ||
              (Kd && bl(new Kd()) != ta)) &&
              (bl = function(e) {
                var a = pt(e),
                  n = a == Ze ? e.constructor : ne,
                  t = n ? Zo(n) : '';
                if (t)
                  switch (t) {
                    case al:
                      return ra;
                    case nl:
                      return Ve;
                    case tl:
                      return '[object Promise]';
                    case il:
                      return Xe;
                    case ol:
                      return ta;
                  }
                return a;
              });
            var vl = dd ? Ks : Wm,
              Ll = Vo(hl),
              Yl =
                Od ||
                function(e, a) {
                  return Hn.setTimeout(e, a);
                },
              wl = Vo(pl),
              Dl = (function(e) {
                var a = Ds(e, function(e) {
                    return n.size === se && n.clear(), e;
                  }),
                  n = a.cache;
                return a;
              })(function(e) {
                var a = [];
                return (
                  46 === e.charCodeAt(0) && a.push(''),
                  e.replace(Ta, function(e, n, t, i) {
                    a.push(t ? i.replace(Fa, '$1') : n || e);
                  }),
                  a
                );
              }),
              Tl = Xt(function(e, a) {
                return Js(e) ? it(e, mt(a, 1, Js, !0)) : [];
              }),
              Sl = Xt(function(e, a) {
                var n = kr(a);
                return Js(n) && (n = ne), Js(e) ? it(e, mt(a, 1, Js, !0), ko(n, 2)) : [];
              }),
              Hl = Xt(function(e, a) {
                var n = kr(a);
                return Js(n) && (n = ne), Js(e) ? it(e, mt(a, 1, Js, !0), ne, n) : [];
              }),
              xl = Xt(function(e) {
                var a = _(e, gi);
                return a.length && a[0] === e[0] ? Mt(a) : [];
              }),
              zl = Xt(function(e) {
                var a = kr(e),
                  n = _(e, gi);
                return a === kr(n) ? (a = ne) : n.pop(), n.length && n[0] === e[0] ? Mt(n, ko(a, 2)) : [];
              }),
              Ol = Xt(function(e) {
                var a = kr(e),
                  n = _(e, gi);
                return (a = 'function' == typeof a ? a : ne), a && n.pop(), n.length && n[0] === e[0] ? Mt(n, ne, a) : [];
              }),
              El = Xt(Mr),
              Al = co(function(e, a) {
                var n = null == e ? 0 : e.length,
                  t = Qn(e, a);
                return (
                  $t(
                    e,
                    _(a, function(e) {
                      return Ho(e, n) ? +e : e;
                    }).sort(Ti)
                  ),
                  t
                );
              }),
              Pl = Xt(function(e) {
                return li(mt(e, 1, Js, !0));
              }),
              Wl = Xt(function(e) {
                var a = kr(e);
                return Js(a) && (a = ne), li(mt(e, 1, Js, !0), ko(a, 2));
              }),
              Fl = Xt(function(e) {
                var a = kr(e);
                return (a = 'function' == typeof a ? a : ne), li(mt(e, 1, Js, !0), ne, a);
              }),
              Nl = Xt(function(e, a) {
                return Js(e) ? it(e, a) : [];
              }),
              Rl = Xt(function(e) {
                return fi(d(e, Js));
              }),
              Il = Xt(function(e) {
                var a = kr(e);
                return Js(a) && (a = ne), fi(d(e, Js), ko(a, 2));
              }),
              Cl = Xt(function(e) {
                var a = kr(e);
                return (a = 'function' == typeof a ? a : ne), fi(d(e, Js), ne, a);
              }),
              Jl = Xt(Cr),
              Ul = Xt(function(e) {
                var a = e.length,
                  n = a > 1 ? e[a - 1] : ne;
                return (n = 'function' == typeof n ? (e.pop(), n) : ne), Jr(e, n);
              }),
              Gl = co(function(e) {
                var a = e.length,
                  n = a ? e[0] : 0,
                  t = this.__wrapped__,
                  o = function(a) {
                    return Qn(a, e);
                  };
                return !(a > 1 || this.__actions__.length) && t instanceof g && Ho(n)
                  ? ((t = t.slice(n, +n + (a ? 1 : 0))),
                    t.__actions__.push({ func: Br, args: [o], thisArg: ne }),
                    new i(t, this.__chain__).thru(function(e) {
                      return a && !e.length && e.push(ne), e;
                    }))
                  : this.thru(o);
              }),
              ql = Pi(function(e, a, n) {
                cd.call(e, n) ? ++e[n] : Kn(e, n, 1);
              }),
              Vl = Gi(sr),
              Bl = Gi(ur),
              $l = Pi(function(e, a, n) {
                cd.call(e, n) ? e[n].push(a) : Kn(e, n, [a]);
              }),
              Zl = Xt(function(e, a, n) {
                var t = -1,
                  i = 'function' == typeof a,
                  r = Cs(e) ? Qm(e.length) : [];
                return (
                  dl(e, function(e) {
                    r[++t] = i ? o(a, e, n) : bt(e, a, n);
                  }),
                  r
                );
              }),
              Kl = Pi(function(e, a, n) {
                Kn(e, n, a);
              }),
              Ql = Pi(
                function(e, a, n) {
                  e[n ? 0 : 1].push(a);
                },
                function() {
                  return [[], []];
                }
              ),
              Xl = Xt(function(e, a) {
                if (null == e) return [];
                var n = a.length;
                return n > 1 && xo(e, a[0], a[1]) ? (a = []) : n > 2 && xo(a[0], a[1], a[2]) && (a = [a[0]]), Ut(e, mt(a, 1), []);
              }),
              ec =
                zd ||
                function() {
                  return Hn.Date.now();
                },
              ac = Xt(function(e, a, n) {
                var t = he;
                if (n.length) {
                  var i = q(n, fo(ac));
                  t |= ye;
                }
                return io(e, t, a, n, i);
              }),
              nc = Xt(function(e, a, n) {
                var t = he | pe;
                if (n.length) {
                  var i = q(n, fo(nc));
                  t |= ye;
                }
                return io(a, t, e, n, i);
              }),
              tc = Xt(function(e, a) {
                return tt(e, 1, a);
              }),
              ic = Xt(function(e, a, n) {
                return tt(e, Mu(a) || 0, n);
              });
            Ds.Cache = rn;
            var oc = fl(function(e, a) {
                a = 1 == a.length && cc(a[0]) ? _(a[0], O(ko())) : _(mt(a, 1), O(ko()));
                var n = a.length;
                return Xt(function(t) {
                  for (var i = -1, r = Cd(t.length, n); ++i < r; ) t[i] = a[i].call(this, t[i]);
                  return o(e, this, t);
                });
              }),
              rc = Xt(function(e, a) {
                var n = q(a, fo(rc));
                return io(e, ye, ne, a, n);
              }),
              sc = Xt(function(e, a) {
                var n = q(a, fo(sc));
                return io(e, Me, ne, a, n);
              }),
              uc = co(function(e, a) {
                return io(e, be, ne, ne, ne, a);
              }),
              mc = eo(ft),
              dc = eo(function(e, a) {
                return e >= a;
              }),
              lc = vt(
                (function() {
                  return arguments;
                })()
              )
                ? vt
                : function(e) {
                    return au(e) && cd.call(e, 'callee') && !Yd.call(e, 'callee');
                  },
              cc = Qm.isArray,
              _c = Pn ? O(Pn) : Lt,
              hc = Wd || Wm,
              pc = Wn ? O(Wn) : Yt,
              fc = Fn ? O(Fn) : Tt,
              kc = Nn ? O(Nn) : xt,
              gc = Rn ? O(Rn) : zt,
              yc = In ? O(In) : Ot,
              Mc = eo(Wt),
              jc = eo(function(e, a) {
                return e <= a;
              }),
              bc = Wi(function(e, a) {
                if (Po(a) || Cs(a)) return void Oi(a, Pu(a), e);
                for (var n in a) cd.call(a, n) && Cn(e, n, a[n]);
              }),
              vc = Wi(function(e, a) {
                Oi(a, Wu(a), e);
              }),
              Lc = Wi(function(e, a, n, t) {
                Oi(a, Wu(a), e, t);
              }),
              Yc = Wi(function(e, a, n, t) {
                Oi(a, Pu(a), e, t);
              }),
              wc = co(Qn),
              Dc = Xt(function(e, a) {
                e = td(e);
                var n = -1,
                  t = a.length,
                  i = t > 2 ? a[2] : ne;
                for (i && xo(a[0], a[1], i) && (t = 1); ++n < t; )
                  for (var o = a[n], r = Wu(o), s = -1, u = r.length; ++s < u; ) {
                    var m = r[s],
                      d = e[m];
                    (d === ne || (Is(d, md[m]) && !cd.call(e, m))) && (e[m] = o[m]);
                  }
                return e;
              }),
              Tc = Xt(function(e) {
                return e.push(ne, ro), o(Oc, ne, e);
              }),
              Sc = Bi(function(e, a, n) {
                null != a && 'function' != typeof a.toString && (a = pd.call(a)), (e[a] = n);
              }, Lm(wm)),
              Hc = Bi(function(e, a, n) {
                null != a && 'function' != typeof a.toString && (a = pd.call(a)), cd.call(e, a) ? e[a].push(n) : (e[a] = [n]);
              }, ko),
              xc = Xt(bt),
              zc = Wi(function(e, a, n) {
                It(e, a, n);
              }),
              Oc = Wi(function(e, a, n, t) {
                It(e, a, n, t);
              }),
              Ec = co(function(e, a) {
                var n = {};
                if (null == e) return n;
                var t = !1;
                (a = _(a, function(a) {
                  return (a = Mi(a, e)), t || (t = a.length > 1), a;
                })),
                  Oi(e, ho(e), n),
                  t && (n = et(n, me | de | le, so));
                for (var i = a.length; i--; ) ci(n, a[i]);
                return n;
              }),
              Ac = co(function(e, a) {
                return null == e ? {} : Gt(e, a);
              }),
              Pc = to(Pu),
              Wc = to(Wu),
              Fc = Ci(function(e, a, n) {
                return (a = a.toLowerCase()), e + (n ? em(a) : a);
              }),
              Nc = Ci(function(e, a, n) {
                return e + (n ? '-' : '') + a.toLowerCase();
              }),
              Rc = Ci(function(e, a, n) {
                return e + (n ? ' ' : '') + a.toLowerCase();
              }),
              Ic = Ii('toLowerCase'),
              Cc = Ci(function(e, a, n) {
                return e + (n ? '_' : '') + a.toLowerCase();
              }),
              Jc = Ci(function(e, a, n) {
                return e + (n ? ' ' : '') + Gc(a);
              }),
              Uc = Ci(function(e, a, n) {
                return e + (n ? ' ' : '') + a.toUpperCase();
              }),
              Gc = Ii('toUpperCase'),
              qc = Xt(function(e, a) {
                try {
                  return o(e, ne, a);
                } catch (e) {
                  return $s(e) ? e : new ed(e);
                }
              }),
              Vc = co(function(e, a) {
                return (
                  s(a, function(a) {
                    (a = $o(a)), Kn(e, a, ac(e[a], e));
                  }),
                  e
                );
              }),
              Bc = qi(),
              $c = qi(!0),
              Zc = Xt(function(e, a) {
                return function(n) {
                  return bt(n, e, a);
                };
              }),
              Kc = Xt(function(e, a) {
                return function(n) {
                  return bt(e, n, a);
                };
              }),
              Qc = Zi(_),
              Xc = Zi(m),
              e_ = Zi(k),
              a_ = Xi(),
              n_ = Xi(!0),
              t_ = $i(function(e, a) {
                return e + a;
              }, 0),
              i_ = no('ceil'),
              o_ = $i(function(e, a) {
                return e / a;
              }, 1),
              r_ = no('floor'),
              s_ = $i(function(e, a) {
                return e * a;
              }, 1),
              u_ = no('round'),
              m_ = $i(function(e, a) {
                return e - a;
              }, 0);
            return (
              (n.after = Ms),
              (n.ary = js),
              (n.assign = bc),
              (n.assignIn = vc),
              (n.assignInWith = Lc),
              (n.assignWith = Yc),
              (n.at = wc),
              (n.before = bs),
              (n.bind = ac),
              (n.bindAll = Vc),
              (n.bindKey = nc),
              (n.castArray = As),
              (n.chain = qr),
              (n.chunk = Xo),
              (n.compact = er),
              (n.concat = ar),
              (n.cond = bm),
              (n.conforms = vm),
              (n.constant = Lm),
              (n.countBy = ql),
              (n.create = Lu),
              (n.curry = vs),
              (n.curryRight = Ls),
              (n.debounce = Ys),
              (n.defaults = Dc),
              (n.defaultsDeep = Tc),
              (n.defer = tc),
              (n.delay = ic),
              (n.difference = Tl),
              (n.differenceBy = Sl),
              (n.differenceWith = Hl),
              (n.drop = nr),
              (n.dropRight = tr),
              (n.dropRightWhile = ir),
              (n.dropWhile = or),
              (n.fill = rr),
              (n.filter = ts),
              (n.flatMap = is),
              (n.flatMapDeep = os),
              (n.flatMapDepth = rs),
              (n.flatten = mr),
              (n.flattenDeep = dr),
              (n.flattenDepth = lr),
              (n.flip = ws),
              (n.flow = Bc),
              (n.flowRight = $c),
              (n.fromPairs = cr),
              (n.functions = xu),
              (n.functionsIn = zu),
              (n.groupBy = $l),
              (n.initial = pr),
              (n.intersection = xl),
              (n.intersectionBy = zl),
              (n.intersectionWith = Ol),
              (n.invert = Sc),
              (n.invertBy = Hc),
              (n.invokeMap = Zl),
              (n.iteratee = Dm),
              (n.keyBy = Kl),
              (n.keys = Pu),
              (n.keysIn = Wu),
              (n.map = ds),
              (n.mapKeys = Fu),
              (n.mapValues = Nu),
              (n.matches = Tm),
              (n.matchesProperty = Sm),
              (n.memoize = Ds),
              (n.merge = zc),
              (n.mergeWith = Oc),
              (n.method = Zc),
              (n.methodOf = Kc),
              (n.mixin = Hm),
              (n.negate = Ts),
              (n.nthArg = Om),
              (n.omit = Ec),
              (n.omitBy = Ru),
              (n.once = Ss),
              (n.orderBy = ls),
              (n.over = Qc),
              (n.overArgs = oc),
              (n.overEvery = Xc),
              (n.overSome = e_),
              (n.partial = rc),
              (n.partialRight = sc),
              (n.partition = Ql),
              (n.pick = Ac),
              (n.pickBy = Iu),
              (n.property = Em),
              (n.propertyOf = Am),
              (n.pull = El),
              (n.pullAll = Mr),
              (n.pullAllBy = jr),
              (n.pullAllWith = br),
              (n.pullAt = Al),
              (n.range = a_),
              (n.rangeRight = n_),
              (n.rearg = uc),
              (n.reject = hs),
              (n.remove = vr),
              (n.rest = Hs),
              (n.reverse = Lr),
              (n.sampleSize = fs),
              (n.set = Ju),
              (n.setWith = Uu),
              (n.shuffle = ks),
              (n.slice = Yr),
              (n.sortBy = Xl),
              (n.sortedUniq = zr),
              (n.sortedUniqBy = Or),
              (n.split = lm),
              (n.spread = xs),
              (n.tail = Er),
              (n.take = Ar),
              (n.takeRight = Pr),
              (n.takeRightWhile = Wr),
              (n.takeWhile = Fr),
              (n.tap = Vr),
              (n.throttle = zs),
              (n.thru = Br),
              (n.toArray = fu),
              (n.toPairs = Pc),
              (n.toPairsIn = Wc),
              (n.toPath = Cm),
              (n.toPlainObject = ju),
              (n.transform = Gu),
              (n.unary = Os),
              (n.union = Pl),
              (n.unionBy = Wl),
              (n.unionWith = Fl),
              (n.uniq = Nr),
              (n.uniqBy = Rr),
              (n.uniqWith = Ir),
              (n.unset = qu),
              (n.unzip = Cr),
              (n.unzipWith = Jr),
              (n.update = Vu),
              (n.updateWith = Bu),
              (n.values = $u),
              (n.valuesIn = Zu),
              (n.without = Nl),
              (n.words = jm),
              (n.wrap = Es),
              (n.xor = Rl),
              (n.xorBy = Il),
              (n.xorWith = Cl),
              (n.zip = Jl),
              (n.zipObject = Ur),
              (n.zipObjectDeep = Gr),
              (n.zipWith = Ul),
              (n.entries = Pc),
              (n.entriesIn = Wc),
              (n.extend = vc),
              (n.extendWith = Lc),
              Hm(n, n),
              (n.add = t_),
              (n.attempt = qc),
              (n.camelCase = Fc),
              (n.capitalize = em),
              (n.ceil = i_),
              (n.clamp = Ku),
              (n.clone = Ps),
              (n.cloneDeep = Fs),
              (n.cloneDeepWith = Ns),
              (n.cloneWith = Ws),
              (n.conformsTo = Rs),
              (n.deburr = am),
              (n.defaultTo = Ym),
              (n.divide = o_),
              (n.endsWith = nm),
              (n.eq = Is),
              (n.escape = tm),
              (n.escapeRegExp = im),
              (n.every = ns),
              (n.find = Vl),
              (n.findIndex = sr),
              (n.findKey = Yu),
              (n.findLast = Bl),
              (n.findLastIndex = ur),
              (n.findLastKey = wu),
              (n.floor = r_),
              (n.forEach = ss),
              (n.forEachRight = us),
              (n.forIn = Du),
              (n.forInRight = Tu),
              (n.forOwn = Su),
              (n.forOwnRight = Hu),
              (n.get = Ou),
              (n.gt = mc),
              (n.gte = dc),
              (n.has = Eu),
              (n.hasIn = Au),
              (n.head = _r),
              (n.identity = wm),
              (n.includes = ms),
              (n.indexOf = hr),
              (n.inRange = Qu),
              (n.invoke = xc),
              (n.isArguments = lc),
              (n.isArray = cc),
              (n.isArrayBuffer = _c),
              (n.isArrayLike = Cs),
              (n.isArrayLikeObject = Js),
              (n.isBoolean = Us),
              (n.isBuffer = hc),
              (n.isDate = pc),
              (n.isElement = Gs),
              (n.isEmpty = qs),
              (n.isEqual = Vs),
              (n.isEqualWith = Bs),
              (n.isError = $s),
              (n.isFinite = Zs),
              (n.isFunction = Ks),
              (n.isInteger = Qs),
              (n.isLength = Xs),
              (n.isMap = fc),
              (n.isMatch = nu),
              (n.isMatchWith = tu),
              (n.isNaN = iu),
              (n.isNative = ou),
              (n.isNil = su),
              (n.isNull = ru),
              (n.isNumber = uu),
              (n.isObject = eu),
              (n.isObjectLike = au),
              (n.isPlainObject = mu),
              (n.isRegExp = kc),
              (n.isSafeInteger = du),
              (n.isSet = gc),
              (n.isString = lu),
              (n.isSymbol = cu),
              (n.isTypedArray = yc),
              (n.isUndefined = _u),
              (n.isWeakMap = hu),
              (n.isWeakSet = pu),
              (n.join = fr),
              (n.kebabCase = Nc),
              (n.last = kr),
              (n.lastIndexOf = gr),
              (n.lowerCase = Rc),
              (n.lowerFirst = Ic),
              (n.lt = Mc),
              (n.lte = jc),
              (n.max = Um),
              (n.maxBy = Gm),
              (n.mean = qm),
              (n.meanBy = Vm),
              (n.min = Bm),
              (n.minBy = $m),
              (n.stubArray = Pm),
              (n.stubFalse = Wm),
              (n.stubObject = Fm),
              (n.stubString = Nm),
              (n.stubTrue = Rm),
              (n.multiply = s_),
              (n.nth = yr),
              (n.noConflict = xm),
              (n.noop = zm),
              (n.now = ec),
              (n.pad = om),
              (n.padEnd = rm),
              (n.padStart = sm),
              (n.parseInt = um),
              (n.random = Xu),
              (n.reduce = cs),
              (n.reduceRight = _s),
              (n.repeat = mm),
              (n.replace = dm),
              (n.result = Cu),
              (n.round = u_),
              (n.runInContext = e),
              (n.sample = ps),
              (n.size = gs),
              (n.snakeCase = Cc),
              (n.some = ys),
              (n.sortedIndex = wr),
              (n.sortedIndexBy = Dr),
              (n.sortedIndexOf = Tr),
              (n.sortedLastIndex = Sr),
              (n.sortedLastIndexBy = Hr),
              (n.sortedLastIndexOf = xr),
              (n.startCase = Jc),
              (n.startsWith = cm),
              (n.subtract = m_),
              (n.sum = Zm),
              (n.sumBy = Km),
              (n.template = _m),
              (n.times = Im),
              (n.toFinite = ku),
              (n.toInteger = gu),
              (n.toLength = yu),
              (n.toLower = hm),
              (n.toNumber = Mu),
              (n.toSafeInteger = bu),
              (n.toString = vu),
              (n.toUpper = pm),
              (n.trim = fm),
              (n.trimEnd = km),
              (n.trimStart = gm),
              (n.truncate = ym),
              (n.unescape = Mm),
              (n.uniqueId = Jm),
              (n.upperCase = Uc),
              (n.upperFirst = Gc),
              (n.each = ss),
              (n.eachRight = us),
              (n.first = _r),
              Hm(
                n,
                (function() {
                  var e = {};
                  return (
                    dt(n, function(a, t) {
                      cd.call(n.prototype, t) || (e[t] = a);
                    }),
                    e
                  );
                })(),
                { chain: !1 }
              ),
              (n.VERSION = '4.17.20'),
              s(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(e) {
                n[e].placeholder = n;
              }),
              s(['drop', 'take'], function(e, a) {
                (g.prototype[e] = function(n) {
                  n = n === ne ? 1 : Id(gu(n), 0);
                  var t = this.__filtered__ && !a ? new g(this) : this.clone();
                  return (
                    t.__filtered__
                      ? (t.__takeCount__ = Cd(n, t.__takeCount__))
                      : t.__views__.push({
                          size: Cd(n, Ee),
                          type: e + (t.__dir__ < 0 ? 'Right' : ''),
                        }),
                    t
                  );
                }),
                  (g.prototype[e + 'Right'] = function(a) {
                    return this.reverse()
                      [e](a)
                      .reverse();
                  });
              }),
              s(['filter', 'map', 'takeWhile'], function(e, a) {
                var n = a + 1,
                  t = n == Te || 3 == n;
                g.prototype[e] = function(e) {
                  var a = this.clone();
                  return (
                    a.__iteratees__.push({
                      iteratee: ko(e, 3),
                      type: n,
                    }),
                    (a.__filtered__ = a.__filtered__ || t),
                    a
                  );
                };
              }),
              s(['head', 'last'], function(e, a) {
                var n = 'take' + (a ? 'Right' : '');
                g.prototype[e] = function() {
                  return this[n](1).value()[0];
                };
              }),
              s(['initial', 'tail'], function(e, a) {
                var n = 'drop' + (a ? '' : 'Right');
                g.prototype[e] = function() {
                  return this.__filtered__ ? new g(this) : this[n](1);
                };
              }),
              (g.prototype.compact = function() {
                return this.filter(wm);
              }),
              (g.prototype.find = function(e) {
                return this.filter(e).head();
              }),
              (g.prototype.findLast = function(e) {
                return this.reverse().find(e);
              }),
              (g.prototype.invokeMap = Xt(function(e, a) {
                return 'function' == typeof e
                  ? new g(this)
                  : this.map(function(n) {
                      return bt(n, e, a);
                    });
              })),
              (g.prototype.reject = function(e) {
                return this.filter(Ts(ko(e)));
              }),
              (g.prototype.slice = function(e, a) {
                e = gu(e);
                var n = this;
                return n.__filtered__ && (e > 0 || a < 0)
                  ? new g(n)
                  : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)), a !== ne && ((a = gu(a)), (n = a < 0 ? n.dropRight(-a) : n.take(a - e))), n);
              }),
              (g.prototype.takeRightWhile = function(e) {
                return this.reverse()
                  .takeWhile(e)
                  .reverse();
              }),
              (g.prototype.toArray = function() {
                return this.take(Ee);
              }),
              dt(g.prototype, function(e, a) {
                var t = /^(?:filter|find|map|reject)|While$/.test(a),
                  o = /^(?:head|last)$/.test(a),
                  r = n[o ? 'take' + ('last' == a ? 'Right' : '') : a],
                  s = o || /^find/.test(a);
                r &&
                  (n.prototype[a] = function() {
                    var a = this.__wrapped__,
                      u = o ? [1] : arguments,
                      m = a instanceof g,
                      d = u[0],
                      l = m || cc(a),
                      c = function(e) {
                        var a = r.apply(n, h([e], u));
                        return o && _ ? a[0] : a;
                      };
                    l && t && 'function' == typeof d && 1 != d.length && (m = l = !1);
                    var _ = this.__chain__,
                      p = !!this.__actions__.length,
                      f = s && !_,
                      k = m && !p;
                    if (!s && l) {
                      a = k ? a : new g(this);
                      var y = e.apply(a, u);
                      return y.__actions__.push({ func: Br, args: [c], thisArg: ne }), new i(y, _);
                    }
                    return f && k ? e.apply(this, u) : ((y = this.thru(c)), f ? (o ? y.value()[0] : y.value()) : y);
                  });
              }),
              s(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(e) {
                var a = sd[e],
                  t = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
                  i = /^(?:pop|shift)$/.test(e);
                n.prototype[e] = function() {
                  var e = arguments;
                  if (i && !this.__chain__) {
                    var n = this.value();
                    return a.apply(cc(n) ? n : [], e);
                  }
                  return this[t](function(n) {
                    return a.apply(cc(n) ? n : [], e);
                  });
                };
              }),
              dt(g.prototype, function(e, a) {
                var t = n[a];
                if (t) {
                  var i = t.name + '';
                  cd.call(el, i) || (el[i] = []), el[i].push({ name: a, func: t });
                }
              }),
              (el[Vi(ne, pe).name] = [{ name: 'wrapper', func: ne }]),
              (g.prototype.clone = D),
              (g.prototype.reverse = $),
              (g.prototype.value = X),
              (n.prototype.at = Gl),
              (n.prototype.chain = $r),
              (n.prototype.commit = Zr),
              (n.prototype.next = Kr),
              (n.prototype.plant = Xr),
              (n.prototype.reverse = es),
              (n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = as),
              (n.prototype.first = n.prototype.head),
              Td && (n.prototype[Td] = Qr),
              n
            );
          })();
        (Hn._ = qn),
          (i = function() {
            return qn;
          }.call(a, n, a, t)) !== ne && (t.exports = i);
      }.call(this));
    }.call(a, n(3), n(11)(e)));
  },
  30: function(e, a, n) {
    function t(e) {
      if (Array.isArray(e)) return i(e);
    }

    var i = n(14);
    (e.exports = t), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  31: function(e, a) {
    function n(e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  32: function(e, a) {
    function n() {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  33: function(e, a, n) {
    'use strict';
    a.a = {
      SERVERS: { CRM: 'https://crm.xiaoman.cn', AMES: 'https://ames.beta.xiaoman.cn' },
      HOSTS: {
        LOGIN: 'https://login.xiaoman.cn',
        CRM: 'https://crm.xiaoman.cn',
        AMES: 'https://work.okki.com',
        AMES_LOGIN: 'https://work.okki.com/web/login.htm',
      },
    };
  },
  34: function(e, a, n) {
    'use strict';
    a.a = {
      SERVERS: { CRM: 'https://'.concat('1111', '.bugfix.dev.xiaoman.cn') },
      HOSTS: {
        LOGIN: 'https://login.dev.xiaoman.cn/login?return_url=https://'.concat('1111', '.bugfix.dev.xiaoman.cn/dashboard'),
        CRM: 'https://'.concat('1111', '.bugfix.dev.xiaoman.cn'),
      },
    };
  },
  35: function(e, a, n) {
    'use strict';
    a.a = {
      SERVERS: { CRM: 'https://discovery.feature.dev.xiaoman.cn' },
      HOSTS: { LOGIN: 'https://login.dev.xiaoman.cn', CRM: 'https://discovery.feature.dev.xiaoman.cn' },
    };
  },
  36: function(e, a, n) {
    'use strict';
    a.a = {
      SERVERS: { CRM: 'https://discovery.feature.beta.xiaoman.cn' },
      HOSTS: { LOGIN: 'https://login.xiaoman.cn', CRM: 'https://discovery.feature.beta.xiaoman.cn' },
    };
  },
  37: function(e, a, n) {
    'use strict';
    a.a = {
      SERVERS: { CRM: 'https://crm.xiaoman.cn', AMES: 'https://ames.xiaoman.cn' },
      HOSTS: {
        LOGIN: 'https://login.xiaoman.cn',
        CRM: 'https://crm.xiaoman.cn',
        AMES: 'https://work.okki.com',
        AMES_LOGIN: 'https://work.okki.com/web/login.htm',
      },
    };
  },
  38: undefined,
  39: undefined,
  40: function(e, a, n) {
    'use strict';
    n.d(a, 'a', function() {
      return r;
    }),
      n.d(a, 'c', function() {
        return s;
      }),
      n.d(a, 'd', function() {
        return u;
      }),
      n.d(a, 'b', function() {
        return m;
      }),
      n.d(a, 'e', function() {
        return d;
      });
    var t = n(0),
      i = n.n(t),
      o = n(20),
      r = function(e) {
        return new URL(e).searchParams.get('e') || '';
      },
      s = function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        if ('今天' === e || 'TODAY' === e) return i()().format('YYYY-MM-DD');
        if ('昨天' === e || 'YESTERDAY' === e)
          return i()()
            .subtract(1, 'days')
            .format('YYYY-MM-DD');
        var n = {
          星期一: 1,
          星期二: 2,
          星期三: 3,
          星期四: 4,
          星期五: 5,
          星期六: 6,
          星期日: 7,
          MONDAY: 1,
          TUESDAY: 2,
          WEDNESDAY: 3,
          THURSDAY: 4,
          FRIDAY: 5,
          SATURDAY: 6,
          SUNDAY: 7,
        };
        if (n[e]) {
          var t = +i()().format('E'),
            o = t - n[e];
          return (
            o < 0 && (o = 7 - Math.abs(o)),
            i()()
              .subtract(o, 'days')
              .format('YYYY-MM-DD')
          );
        }
        if ('string' == typeof e && /[Mm]/.test(a) && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e)) {
          var r = e.split('/'),
            s = [r[1], r[0]];
          (r[0] = s[0]), (r[1] = s[1]), (e = r.join('/'));
        }
        return i()(e, ['YYYY年MM月DD日', 'MM/DD/YYYY']).format('YYYY-MM-DD');
      },
      u = function(e) {
        /^24:\d{1,2}$/.test(e) && (e = '00:' + e.split(':')[1]);
        var a = i()(e, 'HH:mm').format('HH:mm'),
          n = i()('1970-01-01 '.concat(a)).hour(),
          t = i()('1970-01-01 '.concat(a)).minutes(),
          o = new RegExp(/凌晨|[Aa][Mm]/, 'g'),
          r = new RegExp(/下午|晚上|[Pp][Mm]/, 'g');
        return (
          12 === n ? (n = e.match(o) ? 0 : 12) : e.match(r) && (n += 12),
          i()({
            hours: n,
            minutes: t,
          }).format('HH:mm')
        );
      },
      m = function(e) {
        return fetch(e)
          .then(function(e) {
            return e.blob();
          })
          .then(function(e) {
            return new Promise(function(a, n) {
              var t = new FileReader();
              (t.onloadend = function() {
                return a(t.result);
              }),
                (t.onerror = n),
                t.readAsDataURL(e);
            });
          })
          .catch(function(e) {
            console.log('parse image error', e);
          });
      },
      d = function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'v1',
          n = e ? ''.concat(o.a.HOSTS.AMES, '/crm') : o.a.HOSTS.CRM;
        return e ? ''.concat(n, '/').concat(a) : n;
      };
  },
  41: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM: function(e) {
          return /^nm$/i.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 12 ? (n ? 'vm' : 'VM') : n ? 'nm' : 'NM';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Vandag om] LT',
          nextDay: '[Môre om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[Gister om] LT',
          lastWeek: '[Laas] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'oor %s',
          past: '%s gelede',
          s: "'n paar sekondes",
          ss: '%d sekondes',
          m: "'n minuut",
          mm: '%d minute',
          h: "'n uur",
          hh: '%d ure',
          d: "'n dag",
          dd: '%d dae',
          M: "'n maand",
          MM: '%d maande',
          y: "'n jaar",
          yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  42: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        },
        n = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
        },
        t = function(e) {
          return function(t, i, o, r) {
            var s = a(t),
              u = n[e][a(t)];
            return 2 === s && (u = u[i ? 0 : 1]), u.replace(/%d/i, t);
          };
        },
        i = ['جانفي', 'فيفري', 'مارس', 'أفريل', 'ماي', 'جوان', 'جويلية', 'أوت', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      return e.defineLocale('ar-dz', {
        months: i,
        monthsShort: i,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/‏M/‏YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
          return 'م' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: t('s'),
          ss: t('s'),
          m: t('m'),
          mm: t('m'),
          h: t('h'),
          hh: t('h'),
          d: t('d'),
          dd: t('d'),
          M: t('M'),
          MM: t('M'),
          y: t('y'),
          yy: t('y'),
        },
        postformat: function(e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 0, doy: 4 },
      });
    });
  },
  43: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 0, doy: 12 },
      });
    });
  },
  44: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0' },
        n = function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        },
        t = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
        },
        i = function(e) {
          return function(a, i, o, r) {
            var s = n(a),
              u = t[e][n(a)];
            return 2 === s && (u = u[i ? 0 : 1]), u.replace(/%d/i, a);
          };
        },
        o = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      return e.defineLocale('ar-ly', {
        months: o,
        monthsShort: o,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/‏M/‏YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
          return 'م' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: i('s'),
          ss: i('s'),
          m: i('m'),
          mm: i('m'),
          h: i('h'),
          hh: i('h'),
          d: i('d'),
          dd: i('d'),
          M: i('M'),
          MM: i('M'),
          y: i('y'),
          yy: i('y'),
        },
        preparse: function(e) {
          return e.replace(/،/g, ',');
        },
        postformat: function(e) {
          return e
            .replace(/\d/g, function(e) {
              return a[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  45: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  46: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
        n = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0',
        };
      return e.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
          return 'م' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        preparse: function(e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function(e) {
          return e
            .replace(/\d/g, function(e) {
              return a[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  47: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات',
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  48: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
        n = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0',
        },
        t = function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        },
        i = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
        },
        o = function(e) {
          return function(a, n, o, r) {
            var s = t(a),
              u = i[e][t(a)];
            return 2 === s && (u = u[n ? 0 : 1]), u.replace(/%d/i, a);
          };
        },
        r = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      return e.defineLocale('ar', {
        months: r,
        monthsShort: r,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/‏M/‏YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
          return 'م' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: o('s'),
          ss: o('s'),
          m: o('m'),
          mm: o('m'),
          h: o('h'),
          hh: o('h'),
          d: o('d'),
          dd: o('d'),
          M: o('M'),
          MM: o('M'),
          y: o('y'),
          yy: o('y'),
        },
        preparse: function(e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function(e) {
          return e
            .replace(/\d/g, function(e) {
              return a[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  49: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı',
      };
      return e.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[sabah saat] LT',
          nextWeek: '[gələn həftə] dddd [saat] LT',
          lastDay: '[dünən] LT',
          lastWeek: '[keçən həftə] dddd [saat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s əvvəl',
          s: 'birneçə saniyə',
          ss: '%d saniyə',
          m: 'bir dəqiqə',
          mm: '%d dəqiqə',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir il',
          yy: '%d il',
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function(e) {
          return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'gecə' : e < 12 ? 'səhər' : e < 17 ? 'gündüz' : 'axşam';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function(e) {
          if (0 === e) return e + '-ıncı';
          var n = e % 10,
            t = (e % 100) - n,
            i = e >= 100 ? 100 : null;
          return e + (a[n] || a[t] || a[i]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  50: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a) {
        var n = e.split('_');
        return a % 10 == 1 && a % 100 != 11 ? n[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? n[1] : n[2];
      }

      function n(e, n, t) {
        var i = {
          ss: n ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          mm: n ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
          hh: n ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
          dd: 'дзень_дні_дзён',
          MM: 'месяц_месяцы_месяцаў',
          yy: 'год_гады_гадоў',
        };
        return 'm' === t ? (n ? 'хвіліна' : 'хвіліну') : 'h' === t ? (n ? 'гадзіна' : 'гадзіну') : e + ' ' + a(i[t], +e);
      }

      return e.defineLocale('be', {
        months: {
          format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
          standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
          format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
          standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., HH:mm',
          LLLL: 'dddd, D MMMM YYYY г., HH:mm',
        },
        calendar: {
          sameDay: '[Сёння ў] LT',
          nextDay: '[Заўтра ў] LT',
          lastDay: '[Учора ў] LT',
          nextWeek: function() {
            return '[У] dddd [ў] LT';
          },
          lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return '[У мінулую] dddd [ў] LT';
              case 1:
              case 2:
              case 4:
                return '[У мінулы] dddd [ў] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'праз %s',
          past: '%s таму',
          s: 'некалькі секунд',
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: 'дзень',
          dd: n,
          M: 'месяц',
          MM: n,
          y: 'год',
          yy: n,
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(e) {
          return /^(дня|вечара)$/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return (e % 10 != 2 && e % 10 != 3) || e % 100 == 12 || e % 100 == 13 ? e + '-ы' : e + '-і';
            case 'D':
              return e + '-га';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  51: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Днес в] LT',
          nextDay: '[Утре в] LT',
          nextWeek: 'dddd [в] LT',
          lastDay: '[Вчера в] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[Миналата] dddd [в] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[Миналия] dddd [в] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'след %s',
          past: 'преди %s',
          s: 'няколко секунди',
          ss: '%d секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дена',
          M: 'месец',
          MM: '%d месеца',
          y: 'година',
          yy: '%d години',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
          var a = e % 10,
            n = e % 100;
          return 0 === e ? e + '-ев' : 0 === n ? e + '-ен' : n > 10 && n < 20 ? e + '-ти' : 1 === a ? e + '-ви' : 2 === a ? e + '-ри' : 7 === a || 8 === a ? e + '-ми' : e + '-ти';
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  52: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('bm', {
        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'MMMM [tile] D [san] YYYY',
          LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
          LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
        },
        calendar: {
          sameDay: '[Bi lɛrɛ] LT',
          nextDay: '[Sini lɛrɛ] LT',
          nextWeek: 'dddd [don lɛrɛ] LT',
          lastDay: '[Kunu lɛrɛ] LT',
          lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s kɔnɔ',
          past: 'a bɛ %s bɔ',
          s: 'sanga dama dama',
          ss: 'sekondi %d',
          m: 'miniti kelen',
          mm: 'miniti %d',
          h: 'lɛrɛ kelen',
          hh: 'lɛrɛ %d',
          d: 'tile kelen',
          dd: 'tile %d',
          M: 'kalo kelen',
          MM: 'kalo %d',
          y: 'san kelen',
          yy: 'san %d',
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  53: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯', 0: '০' },
        n = {
          '১': '1',
          '২': '2',
          '৩': '3',
          '৪': '4',
          '৫': '5',
          '৬': '6',
          '৭': '7',
          '৮': '8',
          '৯': '9',
          '০': '0',
        };
      return e.defineLocale('bn', {
        months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
        longDateFormat: {
          LT: 'A h:mm সময়',
          LTS: 'A h:mm:ss সময়',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm সময়',
          LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
        },
        calendar: {
          sameDay: '[আজ] LT',
          nextDay: '[আগামীকাল] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[গতকাল] LT',
          lastWeek: '[গত] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s পরে',
          past: '%s আগে',
          s: 'কয়েক সেকেন্ড',
          ss: '%d সেকেন্ড',
          m: 'এক মিনিট',
          mm: '%d মিনিট',
          h: 'এক ঘন্টা',
          hh: '%d ঘন্টা',
          d: 'এক দিন',
          dd: '%d দিন',
          M: 'এক মাস',
          MM: '%d মাস',
          y: 'এক বছর',
          yy: '%d বছর',
        },
        preparse: function(e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), ('রাত' === a && e >= 4) || ('দুপুর' === a && e < 5) || 'বিকাল' === a ? e + 12 : e;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'রাত' : e < 10 ? 'সকাল' : e < 17 ? 'দুপুর' : e < 20 ? 'বিকাল' : 'রাত';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  54: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '༡', 2: '༢', 3: '༣', 4: '༤', 5: '༥', 6: '༦', 7: '༧', 8: '༨', 9: '༩', 0: '༠' },
        n = {
          '༡': '1',
          '༢': '2',
          '༣': '3',
          '༤': '4',
          '༥': '5',
          '༦': '6',
          '༧': '7',
          '༨': '8',
          '༩': '9',
          '༠': '0',
        };
      return e.defineLocale('bo', {
        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort: 'ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12'.split('_'),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: !0,
        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin: 'ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[དི་རིང] LT',
          nextDay: '[སང་ཉིན] LT',
          nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
          lastDay: '[ཁ་སང] LT',
          lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ལ་',
          past: '%s སྔན་ལ',
          s: 'ལམ་སང',
          ss: '%d སྐར་ཆ།',
          m: 'སྐར་མ་གཅིག',
          mm: '%d སྐར་མ',
          h: 'ཆུ་ཚོད་གཅིག',
          hh: '%d ཆུ་ཚོད',
          d: 'ཉིན་གཅིག',
          dd: '%d ཉིན་',
          M: 'ཟླ་བ་གཅིག',
          MM: '%d ཟླ་བ',
          y: 'ལོ་གཅིག',
          yy: '%d ལོ',
        },
        preparse: function(e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), ('མཚན་མོ' === a && e >= 4) || ('ཉིན་གུང' === a && e < 5) || 'དགོང་དག' === a ? e + 12 : e;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'མཚན་མོ' : e < 10 ? 'ཞོགས་ཀས' : e < 17 ? 'ཉིན་གུང' : e < 20 ? 'དགོང་དག' : 'མཚན་མོ';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  55: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n) {
        return e + ' ' + i({ mm: 'munutenn', MM: 'miz', dd: 'devezh' }[n], e);
      }

      function n(e) {
        switch (t(e)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return e + ' bloaz';
          default:
            return e + ' vloaz';
        }
      }

      function t(e) {
        return e > 9 ? t(e % 10) : e;
      }

      function i(e, a) {
        return 2 === a ? o(e) : e;
      }

      function o(e) {
        var a = { m: 'v', b: 'v', d: 'z' };
        return void 0 === a[e.charAt(0)] ? e : a[e.charAt(0)] + e.substring(1);
      }

      var r = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
        s = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        u = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
        m = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        d = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
        l = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
        c = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
      return e.defineLocale('br', {
        months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParse: c,
        fullWeekdaysParse: d,
        shortWeekdaysParse: l,
        minWeekdaysParse: c,
        monthsRegex: s,
        monthsShortRegex: s,
        monthsStrictRegex: u,
        monthsShortStrictRegex: m,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [a viz] MMMM YYYY',
          LLL: 'D [a viz] MMMM YYYY HH:mm',
          LLLL: 'dddd, D [a viz] MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hiziv da] LT',
          nextDay: '[Warcʼhoazh da] LT',
          nextWeek: 'dddd [da] LT',
          lastDay: '[Decʼh da] LT',
          lastWeek: 'dddd [paset da] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'a-benn %s',
          past: '%s ʼzo',
          s: 'un nebeud segondennoù',
          ss: '%d eilenn',
          m: 'ur vunutenn',
          mm: a,
          h: 'un eur',
          hh: '%d eur',
          d: 'un devezh',
          dd: a,
          M: 'ur miz',
          MM: a,
          y: 'ur bloaz',
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(e) {
          return e + (1 === e ? 'añ' : 'vet');
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /a.m.|g.m./,
        isPM: function(e) {
          return 'g.m.' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'a.m.' : 'g.m.';
        },
      });
    });
  },
  56: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n) {
        var t = e + ' ';
        switch (n) {
          case 'ss':
            return (t += 1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi');
          case 'm':
            return a ? 'jedna minuta' : 'jedne minute';
          case 'mm':
            return (t += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta');
          case 'h':
            return a ? 'jedan sat' : 'jednog sata';
          case 'hh':
            return (t += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati');
          case 'dd':
            return (t += 1 === e ? 'dan' : 'dana');
          case 'MM':
            return (t += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci');
          case 'yy':
            return (t += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina');
        }
      }

      return e.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';
              case 3:
                return '[u] [srijedu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
                return '[prošlu] dddd [u] LT';
              case 6:
                return '[prošle] [subote] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: 'dan',
          dd: a,
          M: 'mjesec',
          MM: a,
          y: 'godinu',
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  57: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ca', {
        months: {
          standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
          format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split('_'),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a les] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
          llll: 'ddd D MMM YYYY, H:mm',
        },
        calendar: {
          sameDay: function() {
            return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          nextDay: function() {
            return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          nextWeek: function() {
            return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          lastDay: function() {
            return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          lastWeek: function() {
            return '[el] dddd [passat a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: "d'aquí %s",
          past: 'fa %s',
          s: 'uns segons',
          ss: '%d segons',
          m: 'un minut',
          mm: '%d minuts',
          h: 'una hora',
          hh: '%d hores',
          d: 'un dia',
          dd: '%d dies',
          M: 'un mes',
          MM: '%d mesos',
          y: 'un any',
          yy: '%d anys',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(e, a) {
          var n = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
          return ('w' !== a && 'W' !== a) || (n = 'a'), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  58: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
      }

      function n(e, n, t, i) {
        var o = e + ' ';
        switch (t) {
          case 's':
            return n || i ? 'pár sekund' : 'pár sekundami';
          case 'ss':
            return n || i ? o + (a(e) ? 'sekundy' : 'sekund') : o + 'sekundami';
          case 'm':
            return n ? 'minuta' : i ? 'minutu' : 'minutou';
          case 'mm':
            return n || i ? o + (a(e) ? 'minuty' : 'minut') : o + 'minutami';
          case 'h':
            return n ? 'hodina' : i ? 'hodinu' : 'hodinou';
          case 'hh':
            return n || i ? o + (a(e) ? 'hodiny' : 'hodin') : o + 'hodinami';
          case 'd':
            return n || i ? 'den' : 'dnem';
          case 'dd':
            return n || i ? o + (a(e) ? 'dny' : 'dní') : o + 'dny';
          case 'M':
            return n || i ? 'měsíc' : 'měsícem';
          case 'MM':
            return n || i ? o + (a(e) ? 'měsíce' : 'měsíců') : o + 'měsíci';
          case 'y':
            return n || i ? 'rok' : 'rokem';
          case 'yy':
            return n || i ? o + (a(e) ? 'roky' : 'let') : o + 'lety';
        }
      }

      //! moment.js locale configuration
      var t = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        i = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
        o = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
        r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
      return e.defineLocale('cs', {
        months: t,
        monthsShort: i,
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: o,
        longMonthsParse: o,
        shortMonthsParse: o,
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
          l: 'D. M. YYYY',
        },
        calendar: {
          sameDay: '[dnes v] LT',
          nextDay: '[zítra v] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[v neděli v] LT';
              case 1:
              case 2:
                return '[v] dddd [v] LT';
              case 3:
                return '[ve středu v] LT';
              case 4:
                return '[ve čtvrtek v] LT';
              case 5:
                return '[v pátek v] LT';
              case 6:
                return '[v sobotu v] LT';
            }
          },
          lastDay: '[včera v] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[minulou neděli v] LT';
              case 1:
              case 2:
                return '[minulé] dddd [v] LT';
              case 3:
                return '[minulou středu v] LT';
              case 4:
              case 5:
                return '[minulý] dddd [v] LT';
              case 6:
                return '[minulou sobotu v] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'před %s',
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  59: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
          LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
        },
        calendar: {
          sameDay: '[Паян] LT [сехетре]',
          nextDay: '[Ыран] LT [сехетре]',
          lastDay: '[Ӗнер] LT [сехетре]',
          nextWeek: '[Ҫитес] dddd LT [сехетре]',
          lastWeek: '[Иртнӗ] dddd LT [сехетре]',
          sameElse: 'L',
        },
        relativeTime: {
          future: function(e) {
            return e + (/сехет$/i.exec(e) ? 'рен' : /ҫул$/i.exec(e) ? 'тан' : 'ран');
          },
          past: '%s каялла',
          s: 'пӗр-ик ҫеккунт',
          ss: '%d ҫеккунт',
          m: 'пӗр минут',
          mm: '%d минут',
          h: 'пӗр сехет',
          hh: '%d сехет',
          d: 'пӗр кун',
          dd: '%d кун',
          M: 'пӗр уйӑх',
          MM: '%d уйӑх',
          y: 'пӗр ҫул',
          yy: '%d ҫул',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: '%d-мӗш',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  60: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Heddiw am] LT',
          nextDay: '[Yfory am] LT',
          nextWeek: 'dddd [am] LT',
          lastDay: '[Ddoe am] LT',
          lastWeek: 'dddd [diwethaf am] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'mewn %s',
          past: '%s yn ôl',
          s: 'ychydig eiliadau',
          ss: '%d eiliad',
          m: 'munud',
          mm: '%d munud',
          h: 'awr',
          hh: '%d awr',
          d: 'diwrnod',
          dd: '%d diwrnod',
          M: 'mis',
          MM: '%d mis',
          y: 'blwyddyn',
          yy: '%d flynedd',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(e) {
          var a = e,
            n = '',
            t = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed'];
          return a > 20 ? (n = 40 === a || 50 === a || 60 === a || 80 === a || 100 === a ? 'fed' : 'ain') : a > 0 && (n = t[a]), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  61: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'på dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[i] dddd[s kl.] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'få sekunder',
          ss: '%d sekunder',
          m: 'et minut',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dage',
          M: 'en måned',
          MM: '%d måneder',
          y: 'et år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  62: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [e + ' Tage', e + ' Tagen'],
          w: ['eine Woche', 'einer Woche'],
          M: ['ein Monat', 'einem Monat'],
          MM: [e + ' Monate', e + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [e + ' Jahre', e + ' Jahren'],
        };
        return a ? i[n][0] : i[n][1];
      }

      return e.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: a,
          mm: '%d Minuten',
          h: a,
          hh: '%d Stunden',
          d: a,
          dd: a,
          w: a,
          ww: '%d Wochen',
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  63: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [e + ' Tage', e + ' Tagen'],
          w: ['eine Woche', 'einer Woche'],
          M: ['ein Monat', 'einem Monat'],
          MM: [e + ' Monate', e + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [e + ' Jahre', e + ' Jahren'],
        };
        return a ? i[n][0] : i[n][1];
      }

      return e.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: a,
          mm: '%d Minuten',
          h: a,
          hh: '%d Stunden',
          d: a,
          dd: a,
          w: a,
          ww: '%d Wochen',
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  64: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          m: ['eine Minute', 'einer Minute'],
          h: ['eine Stunde', 'einer Stunde'],
          d: ['ein Tag', 'einem Tag'],
          dd: [e + ' Tage', e + ' Tagen'],
          w: ['eine Woche', 'einer Woche'],
          M: ['ein Monat', 'einem Monat'],
          MM: [e + ' Monate', e + ' Monaten'],
          y: ['ein Jahr', 'einem Jahr'],
          yy: [e + ' Jahre', e + ' Jahren'],
        };
        return a ? i[n][0] : i[n][1];
      }

      return e.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: a,
          mm: '%d Minuten',
          h: a,
          hh: '%d Stunden',
          d: a,
          dd: a,
          w: a,
          ww: '%d Wochen',
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  65: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
        n = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
      return e.defineLocale('dv', {
        months: a,
        monthsShort: a,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/M/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /މކ|މފ/,
        isPM: function(e) {
          return 'މފ' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'މކ' : 'މފ';
        },
        calendar: {
          sameDay: '[މިއަދު] LT',
          nextDay: '[މާދަމާ] LT',
          nextWeek: 'dddd LT',
          lastDay: '[އިއްޔެ] LT',
          lastWeek: '[ފާއިތުވި] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ތެރޭގައި %s',
          past: 'ކުރިން %s',
          s: 'ސިކުންތުކޮޅެއް',
          ss: 'd% ސިކުންތު',
          m: 'މިނިޓެއް',
          mm: 'މިނިޓު %d',
          h: 'ގަޑިއިރެއް',
          hh: 'ގަޑިއިރު %d',
          d: 'ދުވަހެއް',
          dd: 'ދުވަސް %d',
          M: 'މަހެއް',
          MM: 'މަސް %d',
          y: 'އަހަރެއް',
          yy: 'އަހަރު %d',
        },
        preparse: function(e) {
          return e.replace(/،/g, ',');
        },
        postformat: function(e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 7, doy: 12 },
      });
    });
  },
  66: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e) {
        return ('undefined' != typeof Function && e instanceof Function) || '[object Function]' === Object.prototype.toString.call(e);
      }

      return e.defineLocale('el', {
        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months: function(e, a) {
          return e
            ? 'string' == typeof a && /D/.test(a.substring(0, a.indexOf('MMMM')))
              ? this._monthsGenitiveEl[e.month()]
              : this._monthsNominativeEl[e.month()]
            : this._monthsNominativeEl;
        },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem: function(e, a, n) {
          return e > 11 ? (n ? 'μμ' : 'ΜΜ') : n ? 'πμ' : 'ΠΜ';
        },
        isPM: function(e) {
          return 'μ' === (e + '').toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendarEl: {
          sameDay: '[Σήμερα {}] LT',
          nextDay: '[Αύριο {}] LT',
          nextWeek: 'dddd [{}] LT',
          lastDay: '[Χθες {}] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 6:
                return '[το προηγούμενο] dddd [{}] LT';
              default:
                return '[την προηγούμενη] dddd [{}] LT';
            }
          },
          sameElse: 'L',
        },
        calendar: function(e, n) {
          var t = this._calendarEl[e],
            i = n && n.hours();
          return a(t) && (t = t.apply(n)), t.replace('{}', i % 12 == 1 ? 'στη' : 'στις');
        },
        relativeTime: {
          future: 'σε %s',
          past: '%s πριν',
          s: 'λίγα δευτερόλεπτα',
          ss: '%d δευτερόλεπτα',
          m: 'ένα λεπτό',
          mm: '%d λεπτά',
          h: 'μία ώρα',
          hh: '%d ώρες',
          d: 'μία μέρα',
          dd: '%d μέρες',
          M: 'ένας μήνας',
          MM: '%d μήνες',
          y: 'ένας χρόνος',
          yy: '%d χρόνια',
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  67: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 0, doy: 4 },
      });
    });
  },
  68: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'YYYY-MM-DD',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
      });
    });
  },
  69: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  70: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  71: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-il', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
      });
    });
  },
  72: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-in', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  73: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  74: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('en-sg', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  75: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: '[la] D[-an de] MMMM, YYYY',
          LLL: '[la] D[-an de] MMMM, YYYY HH:mm',
          LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',
          llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm',
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(e) {
          return 'p' === e.charAt(0).toLowerCase();
        },
        meridiem: function(e, a, n) {
          return e > 11 ? (n ? 'p.t.m.' : 'P.T.M.') : n ? 'a.t.m.' : 'A.T.M.';
        },
        calendar: {
          sameDay: '[Hodiaŭ je] LT',
          nextDay: '[Morgaŭ je] LT',
          nextWeek: 'dddd[n je] LT',
          lastDay: '[Hieraŭ je] LT',
          lastWeek: '[pasintan] dddd[n je] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'post %s',
          past: 'antaŭ %s',
          s: 'kelkaj sekundoj',
          ss: '%d sekundoj',
          m: 'unu minuto',
          mm: '%d minutoj',
          h: 'unu horo',
          hh: '%d horoj',
          d: 'unu tago',
          dd: '%d tagoj',
          M: 'unu monato',
          MM: '%d monatoj',
          y: 'unu jaro',
          yy: '%d jaroj',
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  76: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
        t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function(e, t) {
          return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
        },
        calendar: {
          sameDay: function() {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function() {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function() {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function() {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function() {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  77: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
        t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function(e, t) {
          return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'MM/DD/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
        },
        calendar: {
          sameDay: function() {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function() {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function() {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function() {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function() {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 0, doy: 6 },
      });
    });
  },
  78: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
        t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function(e, t) {
          return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        calendar: {
          sameDay: function() {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function() {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function() {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function() {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function() {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
        invalidDate: 'Fecha invalida',
      });
    });
  },
  79: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
          ss: [e + 'sekundi', e + 'sekundit'],
          m: ['ühe minuti', 'üks minut'],
          mm: [e + ' minuti', e + ' minutit'],
          h: ['ühe tunni', 'tund aega', 'üks tund'],
          hh: [e + ' tunni', e + ' tundi'],
          d: ['ühe päeva', 'üks päev'],
          M: ['kuu aja', 'kuu aega', 'üks kuu'],
          MM: [e + ' kuu', e + ' kuud'],
          y: ['ühe aasta', 'aasta', 'üks aasta'],
          yy: [e + ' aasta', e + ' aastat'],
        };
        return a ? (i[n][2] ? i[n][2] : i[n][1]) : t ? i[n][0] : i[n][1];
      }

      return e.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Täna,] LT',
          nextDay: '[Homme,] LT',
          nextWeek: '[Järgmine] dddd LT',
          lastDay: '[Eile,] LT',
          lastWeek: '[Eelmine] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s pärast',
          past: '%s tagasi',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: '%d päeva',
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  80: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY[ko] MMMM[ren] D[a]',
          LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
          LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
          l: 'YYYY-M-D',
          ll: 'YYYY[ko] MMM D[a]',
          lll: 'YYYY[ko] MMM D[a] HH:mm',
          llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
        },
        calendar: {
          sameDay: '[gaur] LT[etan]',
          nextDay: '[bihar] LT[etan]',
          nextWeek: 'dddd LT[etan]',
          lastDay: '[atzo] LT[etan]',
          lastWeek: '[aurreko] dddd LT[etan]',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s barru',
          past: 'duela %s',
          s: 'segundo batzuk',
          ss: '%d segundo',
          m: 'minutu bat',
          mm: '%d minutu',
          h: 'ordu bat',
          hh: '%d ordu',
          d: 'egun bat',
          dd: '%d egun',
          M: 'hilabete bat',
          MM: '%d hilabete',
          y: 'urte bat',
          yy: '%d urte',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  81: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹', 0: '۰' },
        n = {
          '۱': '1',
          '۲': '2',
          '۳': '3',
          '۴': '4',
          '۵': '5',
          '۶': '6',
          '۷': '7',
          '۸': '8',
          '۹': '9',
          '۰': '0',
        };
      return e.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function(e) {
          return /بعد از ظهر/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
        },
        calendar: {
          sameDay: '[امروز ساعت] LT',
          nextDay: '[فردا ساعت] LT',
          nextWeek: 'dddd [ساعت] LT',
          lastDay: '[دیروز ساعت] LT',
          lastWeek: 'dddd [پیش] [ساعت] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'در %s',
          past: '%s پیش',
          s: 'چند ثانیه',
          ss: '%d ثانیه',
          m: 'یک دقیقه',
          mm: '%d دقیقه',
          h: 'یک ساعت',
          hh: '%d ساعت',
          d: 'یک روز',
          dd: '%d روز',
          M: 'یک ماه',
          MM: '%d ماه',
          y: 'یک سال',
          yy: '%d سال',
        },
        preparse: function(e) {
          return e
            .replace(/[۰-۹]/g, function(e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function(e) {
          return e
            .replace(/\d/g, function(e) {
              return a[e];
            })
            .replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: '%dم',
        week: { dow: 6, doy: 12 },
      });
    });
  },
  82: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e, a, t, i) {
        var o = '';
        switch (t) {
          case 's':
            return i ? 'muutaman sekunnin' : 'muutama sekunti';
          case 'ss':
            o = i ? 'sekunnin' : 'sekuntia';
            break;
          case 'm':
            return i ? 'minuutin' : 'minuutti';
          case 'mm':
            o = i ? 'minuutin' : 'minuuttia';
            break;
          case 'h':
            return i ? 'tunnin' : 'tunti';
          case 'hh':
            o = i ? 'tunnin' : 'tuntia';
            break;
          case 'd':
            return i ? 'päivän' : 'päivä';
          case 'dd':
            o = i ? 'päivän' : 'päivää';
            break;
          case 'M':
            return i ? 'kuukauden' : 'kuukausi';
          case 'MM':
            o = i ? 'kuukauden' : 'kuukautta';
            break;
          case 'y':
            return i ? 'vuoden' : 'vuosi';
          case 'yy':
            o = i ? 'vuoden' : 'vuotta';
        }
        return (o = n(e, i) + ' ' + o);
      }

      function n(e, a) {
        return e < 10 ? (a ? i[e] : t[e]) : e;
      }

      //! moment.js locale configuration
      var t = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        i = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', t[7], t[8], t[9]];
      return e.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM[ta] YYYY',
          LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
          LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
          l: 'D.M.YYYY',
          ll: 'Do MMM YYYY',
          lll: 'Do MMM YYYY, [klo] HH.mm',
          llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
        },
        calendar: {
          sameDay: '[tänään] [klo] LT',
          nextDay: '[huomenna] [klo] LT',
          nextWeek: 'dddd [klo] LT',
          lastDay: '[eilen] [klo] LT',
          lastWeek: '[viime] dddd[na] [klo] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s päästä',
          past: '%s sitten',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  83: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('fil', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm',
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          ss: '%d segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  84: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D. MMMM, YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Í dag kl.] LT',
          nextDay: '[Í morgin kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[Í gjár kl.] LT',
          lastWeek: '[síðstu] dddd [kl] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'um %s',
          past: '%s síðani',
          s: 'fá sekund',
          ss: '%d sekundir',
          m: 'ein minuttur',
          mm: '%d minuttir',
          h: 'ein tími',
          hh: '%d tímar',
          d: 'ein dagur',
          dd: '%d dagar',
          M: 'ein mánaður',
          MM: '%d mánaðir',
          y: 'eitt ár',
          yy: '%d ár',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  85: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e, a) {
          switch (a) {
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
              return e + (1 === e ? 're' : 'e');
          }
        },
      });
    });
  },
  86: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e, a) {
          switch (a) {
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
              return e + (1 === e ? 're' : 'e');
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  87: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        n = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
        t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        i = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
      return e.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsRegex: t,
        monthsShortRegex: t,
        monthsStrictRegex: a,
        monthsShortStrictRegex: n,
        monthsParse: i,
        longMonthsParse: i,
        shortMonthsParse: i,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'D':
              return e + (1 === e ? 'er' : '');
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
              return e + (1 === e ? 'er' : 'e');
            case 'w':
            case 'W':
              return e + (1 === e ? 're' : 'e');
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  88: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        n = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
      return e.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort: function(e, t) {
          return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
        },
        monthsParseExact: !0,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[hjoed om] LT',
          nextDay: '[moarn om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[juster om] LT',
          lastWeek: '[ôfrûne] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'oer %s',
          past: '%s lyn',
          s: 'in pear sekonden',
          ss: '%d sekonden',
          m: 'ien minút',
          mm: '%d minuten',
          h: 'ien oere',
          hh: '%d oeren',
          d: 'ien dei',
          dd: '%d dagen',
          M: 'ien moanne',
          MM: '%d moannen',
          y: 'ien jier',
          yy: '%d jierren',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  89: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig'],
        n = ['Ean', 'Feabh', 'Márt', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'M.F.', 'D.F.', 'Samh', 'Noll'],
        t = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'],
        i = ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
        o = ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'A', 'Sa'];
      return e.defineLocale('ga', {
        months: a,
        monthsShort: n,
        monthsParseExact: !0,
        weekdays: t,
        weekdaysShort: i,
        weekdaysMin: o,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Inniu ag] LT',
          nextDay: '[Amárach ag] LT',
          nextWeek: 'dddd [ag] LT',
          lastDay: '[Inné ag] LT',
          lastWeek: 'dddd [seo caite] [ag] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'i %s',
          past: '%s ó shin',
          s: 'cúpla soicind',
          ss: '%d soicind',
          m: 'nóiméad',
          mm: '%d nóiméad',
          h: 'uair an chloig',
          hh: '%d uair an chloig',
          d: 'lá',
          dd: '%d lá',
          M: 'mí',
          MM: '%d míonna',
          y: 'bliain',
          yy: '%d bliain',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(e) {
          return e + (1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  90: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = [
          'Am Faoilleach',
          'An Gearran',
          'Am Màrt',
          'An Giblean',
          'An Cèitean',
          'An t-Ògmhios',
          'An t-Iuchar',
          'An Lùnastal',
          'An t-Sultain',
          'An Dàmhair',
          'An t-Samhain',
          'An Dùbhlachd',
        ],
        n = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'],
        t = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'],
        i = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
        o = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
      return e.defineLocale('gd', {
        months: a,
        monthsShort: n,
        monthsParseExact: !0,
        weekdays: t,
        weekdaysShort: i,
        weekdaysMin: o,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[An-diugh aig] LT',
          nextDay: '[A-màireach aig] LT',
          nextWeek: 'dddd [aig] LT',
          lastDay: '[An-dè aig] LT',
          lastWeek: 'dddd [seo chaidh] [aig] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ann an %s',
          past: 'bho chionn %s',
          s: 'beagan diogan',
          ss: '%d diogan',
          m: 'mionaid',
          mm: '%d mionaidean',
          h: 'uair',
          hh: '%d uairean',
          d: 'latha',
          dd: '%d latha',
          M: 'mìos',
          MM: '%d mìosan',
          y: 'bliadhna',
          yy: '%d bliadhna',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(e) {
          return e + (1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  91: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        calendar: {
          sameDay: function() {
            return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
          },
          nextDay: function() {
            return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
          },
          nextWeek: function() {
            return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
          },
          lastDay: function() {
            return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT';
          },
          lastWeek: function() {
            return '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: function(e) {
            return 0 === e.indexOf('un') ? 'n' + e : 'en ' + e;
          },
          past: 'hai %s',
          s: 'uns segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'unha hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un ano',
          yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  92: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          s: ['थोडया सॅकंडांनी', 'थोडे सॅकंड'],
          ss: [e + ' सॅकंडांनी', e + ' सॅकंड'],
          m: ['एका मिणटान', 'एक मिनूट'],
          mm: [e + ' मिणटांनी', e + ' मिणटां'],
          h: ['एका वरान', 'एक वर'],
          hh: [e + ' वरांनी', e + ' वरां'],
          d: ['एका दिसान', 'एक दीस'],
          dd: [e + ' दिसांनी', e + ' दीस'],
          M: ['एका म्हयन्यान', 'एक म्हयनो'],
          MM: [e + ' म्हयन्यानी', e + ' म्हयने'],
          y: ['एका वर्सान', 'एक वर्स'],
          yy: [e + ' वर्सांनी', e + ' वर्सां'],
        };
        return t ? i[n][0] : i[n][1];
      }

      return e.defineLocale('gom-deva', {
        months: {
          standalone: 'जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
          format: 'जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या'.split('_'),
          isFormat: /MMMM(\s)+D[oD]?/,
        },
        monthsShort: 'जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार'.split('_'),
        weekdaysShort: 'आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.'.split('_'),
        weekdaysMin: 'आ_सो_मं_बु_ब्रे_सु_शे'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'A h:mm [वाजतां]',
          LTS: 'A h:mm:ss [वाजतां]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [वाजतां]',
          LLLL: 'dddd, MMMM Do, YYYY, A h:mm [वाजतां]',
          llll: 'ddd, D MMM YYYY, A h:mm [वाजतां]',
        },
        calendar: {
          sameDay: '[आयज] LT',
          nextDay: '[फाल्यां] LT',
          nextWeek: '[फुडलो] dddd[,] LT',
          lastDay: '[काल] LT',
          lastWeek: '[फाटलो] dddd[,] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s',
          past: '%s आदीं',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'D':
              return e + 'वेर';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'राती' === a ? (e < 4 ? e : e + 12) : 'सकाळीं' === a ? e : 'दनपारां' === a ? (e > 12 ? e : e + 12) : 'सांजे' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'राती' : e < 12 ? 'सकाळीं' : e < 16 ? 'दनपारां' : e < 20 ? 'सांजे' : 'राती';
        },
      });
    });
  },
  93: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          s: ['thoddea sekondamni', 'thodde sekond'],
          ss: [e + ' sekondamni', e + ' sekond'],
          m: ['eka mintan', 'ek minut'],
          mm: [e + ' mintamni', e + ' mintam'],
          h: ['eka voran', 'ek vor'],
          hh: [e + ' voramni', e + ' voram'],
          d: ['eka disan', 'ek dis'],
          dd: [e + ' disamni', e + ' dis'],
          M: ['eka mhoinean', 'ek mhoino'],
          MM: [e + ' mhoineamni', e + ' mhoine'],
          y: ['eka vorsan', 'ek voros'],
          yy: [e + ' vorsamni', e + ' vorsam'],
        };
        return t ? i[n][0] : i[n][1];
      }

      return e.defineLocale('gom-latn', {
        months: {
          standalone: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
          format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split('_'),
          isFormat: /MMMM(\s)+D[oD]?/,
        },
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'A h:mm [vazta]',
          LTS: 'A h:mm:ss [vazta]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [vazta]',
          LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
          llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
        },
        calendar: {
          sameDay: '[Aiz] LT',
          nextDay: '[Faleam] LT',
          nextWeek: '[Fuddlo] dddd[,] LT',
          lastDay: '[Kal] LT',
          lastWeek: '[Fattlo] dddd[,] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s',
          past: '%s adim',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'D':
              return e + 'er';
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /rati|sokallim|donparam|sanje/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'rati' === a ? (e < 4 ? e : e + 12) : 'sokallim' === a ? e : 'donparam' === a ? (e > 12 ? e : e + 12) : 'sanje' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'rati' : e < 12 ? 'sokallim' : e < 16 ? 'donparam' : e < 20 ? 'sanje' : 'rati';
        },
      });
    });
  },
  94: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '૧', 2: '૨', 3: '૩', 4: '૪', 5: '૫', 6: '૬', 7: '૭', 8: '૮', 9: '૯', 0: '૦' },
        n = {
          '૧': '1',
          '૨': '2',
          '૩': '3',
          '૪': '4',
          '૫': '5',
          '૬': '6',
          '૭': '7',
          '૮': '8',
          '૯': '9',
          '૦': '0',
        };
      return e.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm વાગ્યે',
          LTS: 'A h:mm:ss વાગ્યે',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
          LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે',
        },
        calendar: {
          sameDay: '[આજ] LT',
          nextDay: '[કાલે] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ગઇકાલે] LT',
          lastWeek: '[પાછલા] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s મા',
          past: '%s પહેલા',
          s: 'અમુક પળો',
          ss: '%d સેકંડ',
          m: 'એક મિનિટ',
          mm: '%d મિનિટ',
          h: 'એક કલાક',
          hh: '%d કલાક',
          d: 'એક દિવસ',
          dd: '%d દિવસ',
          M: 'એક મહિનો',
          MM: '%d મહિનો',
          y: 'એક વર્ષ',
          yy: '%d વર્ષ',
        },
        preparse: function(e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'રાત' === a ? (e < 4 ? e : e + 12) : 'સવાર' === a ? e : 'બપોર' === a ? (e >= 10 ? e : e + 12) : 'સાંજ' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'રાત' : e < 10 ? 'સવાર' : e < 17 ? 'બપોર' : e < 20 ? 'સાંજ' : 'રાત';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  95: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [ב]MMMM YYYY',
          LLL: 'D [ב]MMMM YYYY HH:mm',
          LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
          l: 'D/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[היום ב־]LT',
          nextDay: '[מחר ב־]LT',
          nextWeek: 'dddd [בשעה] LT',
          lastDay: '[אתמול ב־]LT',
          lastWeek: '[ביום] dddd [האחרון בשעה] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'בעוד %s',
          past: 'לפני %s',
          s: 'מספר שניות',
          ss: '%d שניות',
          m: 'דקה',
          mm: '%d דקות',
          h: 'שעה',
          hh: function(e) {
            return 2 === e ? 'שעתיים' : e + ' שעות';
          },
          d: 'יום',
          dd: function(e) {
            return 2 === e ? 'יומיים' : e + ' ימים';
          },
          M: 'חודש',
          MM: function(e) {
            return 2 === e ? 'חודשיים' : e + ' חודשים';
          },
          y: 'שנה',
          yy: function(e) {
            return 2 === e ? 'שנתיים' : e % 10 == 0 && 10 !== e ? e + ' שנה' : e + ' שנים';
          },
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function(e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 5 ? 'לפנות בוקר' : e < 10 ? 'בבוקר' : e < 12 ? (n ? 'לפנה"צ' : 'לפני הצהריים') : e < 18 ? (n ? 'אחה"צ' : 'אחרי הצהריים') : 'בערב';
        },
      });
    });
  },
  96: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
        n = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0',
        };
      return e.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm बजे',
          LTS: 'A h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[कल] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[कल] LT',
          lastWeek: '[पिछले] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s में',
          past: '%s पहले',
          s: 'कुछ ही क्षण',
          ss: '%d सेकंड',
          m: 'एक मिनट',
          mm: '%d मिनट',
          h: 'एक घंटा',
          hh: '%d घंटे',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महीने',
          MM: '%d महीने',
          y: 'एक वर्ष',
          yy: '%d वर्ष',
        },
        preparse: function(e) {
          return e.replace(/[१२३४५६७८९०]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'रात' === a ? (e < 4 ? e : e + 12) : 'सुबह' === a ? e : 'दोपहर' === a ? (e >= 10 ? e : e + 12) : 'शाम' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'रात' : e < 10 ? 'सुबह' : e < 17 ? 'दोपहर' : e < 20 ? 'शाम' : 'रात';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  97: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n) {
        var t = e + ' ';
        switch (n) {
          case 'ss':
            return (t += 1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi');
          case 'm':
            return a ? 'jedna minuta' : 'jedne minute';
          case 'mm':
            return (t += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta');
          case 'h':
            return a ? 'jedan sat' : 'jednog sata';
          case 'hh':
            return (t += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati');
          case 'dd':
            return (t += 1 === e ? 'dan' : 'dana');
          case 'MM':
            return (t += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci');
          case 'yy':
            return (t += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina');
        }
      }

      return e.defineLocale('hr', {
        months: {
          format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
          standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
        },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM YYYY',
          LLL: 'Do MMMM YYYY H:mm',
          LLLL: 'dddd, Do MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';
              case 3:
                return '[u] [srijedu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[prošlu] [nedjelju] [u] LT';
              case 3:
                return '[prošlu] [srijedu] [u] LT';
              case 6:
                return '[prošle] [subote] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: 'dan',
          dd: a,
          M: 'mjesec',
          MM: a,
          y: 'godinu',
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  98: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e, a, n, t) {
        var i = e;
        switch (n) {
          case 's':
            return t || a ? 'néhány másodperc' : 'néhány másodperce';
          case 'ss':
            return i + (t || a) ? ' másodperc' : ' másodperce';
          case 'm':
            return 'egy' + (t || a ? ' perc' : ' perce');
          case 'mm':
            return i + (t || a ? ' perc' : ' perce');
          case 'h':
            return 'egy' + (t || a ? ' óra' : ' órája');
          case 'hh':
            return i + (t || a ? ' óra' : ' órája');
          case 'd':
            return 'egy' + (t || a ? ' nap' : ' napja');
          case 'dd':
            return i + (t || a ? ' nap' : ' napja');
          case 'M':
            return 'egy' + (t || a ? ' hónap' : ' hónapja');
          case 'MM':
            return i + (t || a ? ' hónap' : ' hónapja');
          case 'y':
            return 'egy' + (t || a ? ' év' : ' éve');
          case 'yy':
            return i + (t || a ? ' év' : ' éve');
        }
        return '';
      }

      function n(e) {
        return (e ? '' : '[múlt] ') + '[' + t[this.day()] + '] LT[-kor]';
      }

      //! moment.js locale configuration
      var t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
      return e.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY. MMMM D.',
          LLL: 'YYYY. MMMM D. H:mm',
          LLLL: 'YYYY. MMMM D., dddd H:mm',
        },
        meridiemParse: /de|du/i,
        isPM: function(e) {
          return 'u' === e.charAt(1).toLowerCase();
        },
        meridiem: function(e, a, n) {
          return e < 12 ? (!0 === n ? 'de' : 'DE') : !0 === n ? 'du' : 'DU';
        },
        calendar: {
          sameDay: '[ma] LT[-kor]',
          nextDay: '[holnap] LT[-kor]',
          nextWeek: function() {
            return n.call(this, !0);
          },
          lastDay: '[tegnap] LT[-kor]',
          lastWeek: function() {
            return n.call(this, !1);
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s múlva',
          past: '%s',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  99: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('hy-am', {
        months: {
          format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
          standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
        },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY թ.',
          LLL: 'D MMMM YYYY թ., HH:mm',
          LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
        },
        calendar: {
          sameDay: '[այսօր] LT',
          nextDay: '[վաղը] LT',
          lastDay: '[երեկ] LT',
          nextWeek: function() {
            return 'dddd [օրը ժամը] LT';
          },
          lastWeek: function() {
            return '[անցած] dddd [օրը ժամը] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s հետո',
          past: '%s առաջ',
          s: 'մի քանի վայրկյան',
          ss: '%d վայրկյան',
          m: 'րոպե',
          mm: '%d րոպե',
          h: 'ժամ',
          hh: '%d ժամ',
          d: 'օր',
          dd: '%d օր',
          M: 'ամիս',
          MM: '%d ամիս',
          y: 'տարի',
          yy: '%d տարի',
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function(e) {
          return e < 4 ? 'գիշերվա' : e < 12 ? 'առավոտվա' : e < 17 ? 'ցերեկվա' : 'երեկոյան';
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
              return 1 === e ? e + '-ին' : e + '-րդ';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  100: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'pagi' === a ? e : 'siang' === a ? (e >= 11 ? e : e + 12) : 'sore' === a || 'malam' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Besok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kemarin pukul] LT',
          lastWeek: 'dddd [lalu pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lalu',
          s: 'beberapa detik',
          ss: '%d detik',
          m: 'semenit',
          mm: '%d menit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun',
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  101: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e) {
        return e % 100 == 11 || e % 10 != 1;
      }

      function n(e, n, t, i) {
        var o = e + ' ';
        switch (t) {
          case 's':
            return n || i ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
          case 'ss':
            return a(e) ? o + (n || i ? 'sekúndur' : 'sekúndum') : o + 'sekúnda';
          case 'm':
            return n ? 'mínúta' : 'mínútu';
          case 'mm':
            return a(e) ? o + (n || i ? 'mínútur' : 'mínútum') : n ? o + 'mínúta' : o + 'mínútu';
          case 'hh':
            return a(e) ? o + (n || i ? 'klukkustundir' : 'klukkustundum') : o + 'klukkustund';
          case 'd':
            return n ? 'dagur' : i ? 'dag' : 'degi';
          case 'dd':
            return a(e) ? (n ? o + 'dagar' : o + (i ? 'daga' : 'dögum')) : n ? o + 'dagur' : o + (i ? 'dag' : 'degi');
          case 'M':
            return n ? 'mánuður' : i ? 'mánuð' : 'mánuði';
          case 'MM':
            return a(e) ? (n ? o + 'mánuðir' : o + (i ? 'mánuði' : 'mánuðum')) : n ? o + 'mánuður' : o + (i ? 'mánuð' : 'mánuði');
          case 'y':
            return n || i ? 'ár' : 'ári';
          case 'yy':
            return a(e) ? o + (n || i ? 'ár' : 'árum') : o + (n || i ? 'ár' : 'ári');
        }
      }

      return e.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
        },
        calendar: {
          sameDay: '[í dag kl.] LT',
          nextDay: '[á morgun kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[í gær kl.] LT',
          lastWeek: '[síðasta] dddd [kl.] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'eftir %s',
          past: 'fyrir %s síðan',
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: 'klukkustund',
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  102: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('it-ch', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[la scorsa] dddd [alle] LT';
              default:
                return '[lo scorso] dddd [alle] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: function(e) {
            return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
          },
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: "un'ora",
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  103: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: function() {
            return '[Oggi a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : "ll'") + ']LT';
          },
          nextDay: function() {
            return '[Domani a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : "ll'") + ']LT';
          },
          nextWeek: function() {
            return 'dddd [a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : "ll'") + ']LT';
          },
          lastDay: function() {
            return '[Ieri a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : "ll'") + ']LT';
          },
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[La scorsa] dddd [a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : "ll'") + ']LT';
              default:
                return '[Lo scorso] dddd [a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : "ll'") + ']LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'tra %s',
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: "un'ora",
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  104: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ja', {
        eras: [
          { since: '2019-05-01', offset: 1, name: '令和', narrow: '㋿', abbr: 'R' },
          { since: '1989-01-08', until: '2019-04-30', offset: 1, name: '平成', narrow: '㍻', abbr: 'H' },
          { since: '1926-12-25', until: '1989-01-07', offset: 1, name: '昭和', narrow: '㍼', abbr: 'S' },
          { since: '1912-07-30', until: '1926-12-24', offset: 1, name: '大正', narrow: '㍽', abbr: 'T' },
          { since: '1873-01-01', until: '1912-07-29', offset: 6, name: '明治', narrow: '㍾', abbr: 'M' },
          { since: '0001-01-01', until: '1873-12-31', offset: 1, name: '西暦', narrow: 'AD', abbr: 'AD' },
          { since: '0000-12-31', until: -1 / 0, offset: 1, name: '紀元前', narrow: 'BC', abbr: 'BC' },
        ],
        eraYearOrdinalRegex: /(元|\d+)年/,
        eraYearOrdinalParse: function(e, a) {
          return '元' === a[1] ? 1 : parseInt(a[1] || e, 10);
        },
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日 dddd HH:mm',
          l: 'YYYY/MM/DD',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日(ddd) HH:mm',
        },
        meridiemParse: /午前|午後/i,
        isPM: function(e) {
          return '午後' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? '午前' : '午後';
        },
        calendar: {
          sameDay: '[今日] LT',
          nextDay: '[明日] LT',
          nextWeek: function(e) {
            return e.week() !== this.week() ? '[来週]dddd LT' : 'dddd LT';
          },
          lastDay: '[昨日] LT',
          lastWeek: function(e) {
            return this.week() !== e.week() ? '[先週]dddd LT' : 'dddd LT';
          },
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function(e, a) {
          switch (a) {
            case 'y':
              return 1 === e ? '元年' : e + '年';
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '数秒',
          ss: '%d秒',
          m: '1分',
          mm: '%d分',
          h: '1時間',
          hh: '%d時間',
          d: '1日',
          dd: '%d日',
          M: '1ヶ月',
          MM: '%dヶ月',
          y: '1年',
          yy: '%d年',
        },
      });
    });
  },
  105: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'enjing' === a ? e : 'siyang' === a ? (e >= 11 ? e : e + 12) : 'sonten' === a || 'ndalu' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu';
        },
        calendar: {
          sameDay: '[Dinten puniko pukul] LT',
          nextDay: '[Mbenjang pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kala wingi pukul] LT',
          lastWeek: 'dddd [kepengker pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'wonten ing %s',
          past: '%s ingkang kepengker',
          s: 'sawetawis detik',
          ss: '%d detik',
          m: 'setunggal menit',
          mm: '%d menit',
          h: 'setunggal jam',
          hh: '%d jam',
          d: 'sedinten',
          dd: '%d dinten',
          M: 'sewulan',
          MM: '%d wulan',
          y: 'setaun',
          yy: '%d taun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  106: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ka', {
        months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: {
          standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
          isFormat: /(წინა|შემდეგ)/,
        },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[დღეს] LT[-ზე]',
          nextDay: '[ხვალ] LT[-ზე]',
          lastDay: '[გუშინ] LT[-ზე]',
          nextWeek: '[შემდეგ] dddd LT[-ზე]',
          lastWeek: '[წინა] dddd LT-ზე',
          sameElse: 'L',
        },
        relativeTime: {
          future: function(e) {
            return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function(e, a, n) {
              return 'ი' === n ? a + 'ში' : a + n + 'ში';
            });
          },
          past: function(e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, 'ის წინ') : /წელი/.test(e) ? e.replace(/წელი$/, 'წლის წინ') : e;
          },
          s: 'რამდენიმე წამი',
          ss: '%d წამი',
          m: 'წუთი',
          mm: '%d წუთი',
          h: 'საათი',
          hh: '%d საათი',
          d: 'დღე',
          dd: '%d დღე',
          M: 'თვე',
          MM: '%d თვე',
          y: 'წელი',
          yy: '%d წელი',
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function(e) {
          return 0 === e ? e : 1 === e ? e + '-ლი' : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0 ? 'მე-' + e : e + '-ე';
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  107: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші',
      };
      return e.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Бүгін сағат] LT',
          nextDay: '[Ертең сағат] LT',
          nextWeek: 'dddd [сағат] LT',
          lastDay: '[Кеше сағат] LT',
          lastWeek: '[Өткен аптаның] dddd [сағат] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ішінде',
          past: '%s бұрын',
          s: 'бірнеше секунд',
          ss: '%d секунд',
          m: 'бір минут',
          mm: '%d минут',
          h: 'бір сағат',
          hh: '%d сағат',
          d: 'бір күн',
          dd: '%d күн',
          M: 'бір ай',
          MM: '%d ай',
          y: 'бір жыл',
          yy: '%d жыл',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function(e) {
          var n = e % 10,
            t = e >= 100 ? 100 : null;
          return e + (a[e] || a[n] || a[t]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  108: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '១', 2: '២', 3: '៣', 4: '៤', 5: '៥', 6: '៦', 7: '៧', 8: '៨', 9: '៩', 0: '០' },
        n = {
          '១': '1',
          '២': '2',
          '៣': '3',
          '៤': '4',
          '៥': '5',
          '៦': '6',
          '៧': '7',
          '៨': '8',
          '៩': '9',
          '០': '0',
        };
      return e.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function(e) {
          return 'ល្ងាច' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ព្រឹក' : 'ល្ងាច';
        },
        calendar: {
          sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
          nextDay: '[ស្អែក ម៉ោង] LT',
          nextWeek: 'dddd [ម៉ោង] LT',
          lastDay: '[ម្សិលមិញ ម៉ោង] LT',
          lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sទៀត',
          past: '%sមុន',
          s: 'ប៉ុន្មានវិនាទី',
          ss: '%d វិនាទី',
          m: 'មួយនាទី',
          mm: '%d នាទី',
          h: 'មួយម៉ោង',
          hh: '%d ម៉ោង',
          d: 'មួយថ្ងៃ',
          dd: '%d ថ្ងៃ',
          M: 'មួយខែ',
          MM: '%d ខែ',
          y: 'មួយឆ្នាំ',
          yy: '%d ឆ្នាំ',
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: 'ទី%d',
        preparse: function(e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  109: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '೧', 2: '೨', 3: '೩', 4: '೪', 5: '೫', 6: '೬', 7: '೭', 8: '೮', 9: '೯', 0: '೦' },
        n = {
          '೧': '1',
          '೨': '2',
          '೩': '3',
          '೪': '4',
          '೫': '5',
          '೬': '6',
          '೭': '7',
          '೮': '8',
          '೯': '9',
          '೦': '0',
        };
      return e.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[ಇಂದು] LT',
          nextDay: '[ನಾಳೆ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ನಿನ್ನೆ] LT',
          lastWeek: '[ಕೊನೆಯ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ನಂತರ',
          past: '%s ಹಿಂದೆ',
          s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
          ss: '%d ಸೆಕೆಂಡುಗಳು',
          m: 'ಒಂದು ನಿಮಿಷ',
          mm: '%d ನಿಮಿಷ',
          h: 'ಒಂದು ಗಂಟೆ',
          hh: '%d ಗಂಟೆ',
          d: 'ಒಂದು ದಿನ',
          dd: '%d ದಿನ',
          M: 'ಒಂದು ತಿಂಗಳು',
          MM: '%d ತಿಂಗಳು',
          y: 'ಒಂದು ವರ್ಷ',
          yy: '%d ವರ್ಷ',
        },
        preparse: function(e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'ರಾತ್ರಿ' === a ? (e < 4 ? e : e + 12) : 'ಬೆಳಿಗ್ಗೆ' === a ? e : 'ಮಧ್ಯಾಹ್ನ' === a ? (e >= 10 ? e : e + 12) : 'ಸಂಜೆ' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'ರಾತ್ರಿ' : e < 10 ? 'ಬೆಳಿಗ್ಗೆ' : e < 17 ? 'ಮಧ್ಯಾಹ್ನ' : e < 20 ? 'ಸಂಜೆ' : 'ರಾತ್ರಿ';
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function(e) {
          return e + 'ನೇ';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  110: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY년 MMMM D일',
          LLL: 'YYYY년 MMMM D일 A h:mm',
          LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
          l: 'YYYY.MM.DD.',
          ll: 'YYYY년 MMMM D일',
          lll: 'YYYY년 MMMM D일 A h:mm',
          llll: 'YYYY년 MMMM D일 dddd A h:mm',
        },
        calendar: {
          sameDay: '오늘 LT',
          nextDay: '내일 LT',
          nextWeek: 'dddd LT',
          lastDay: '어제 LT',
          lastWeek: '지난주 dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s 후',
          past: '%s 전',
          s: '몇 초',
          ss: '%d초',
          m: '1분',
          mm: '%d분',
          h: '한 시간',
          hh: '%d시간',
          d: '하루',
          dd: '%d일',
          M: '한 달',
          MM: '%d달',
          y: '일 년',
          yy: '%d년',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '일';
            case 'M':
              return e + '월';
            case 'w':
            case 'W':
              return e + '주';
            default:
              return e;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function(e) {
          return '오후' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? '오전' : '오후';
        },
      });
    });
  },
  111: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠' },
        n = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0',
        },
        t = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];
      return e.defineLocale('ku', {
        months: t,
        monthsShort: t,
        weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function(e) {
          return /ئێواره‌/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'به‌یانی' : 'ئێواره‌';
        },
        calendar: {
          sameDay: '[ئه‌مرۆ كاتژمێر] LT',
          nextDay: '[به‌یانی كاتژمێر] LT',
          nextWeek: 'dddd [كاتژمێر] LT',
          lastDay: '[دوێنێ كاتژمێر] LT',
          lastWeek: 'dddd [كاتژمێر] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'له‌ %s',
          past: '%s',
          s: 'چه‌ند چركه‌یه‌ك',
          ss: 'چركه‌ %d',
          m: 'یه‌ك خوله‌ك',
          mm: '%d خوله‌ك',
          h: 'یه‌ك كاتژمێر',
          hh: '%d كاتژمێر',
          d: 'یه‌ك ڕۆژ',
          dd: '%d ڕۆژ',
          M: 'یه‌ك مانگ',
          MM: '%d مانگ',
          y: 'یه‌ك ساڵ',
          yy: '%d ساڵ',
        },
        preparse: function(e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
              return n[e];
            })
            .replace(/،/g, ',');
        },
        postformat: function(e) {
          return e
            .replace(/\d/g, function(e) {
              return a[e];
            })
            .replace(/,/g, '،');
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  112: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү',
      };
      return e.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Бүгүн саат] LT',
          nextDay: '[Эртең саат] LT',
          nextWeek: 'dddd [саат] LT',
          lastDay: '[Кечээ саат] LT',
          lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ичинде',
          past: '%s мурун',
          s: 'бирнече секунд',
          ss: '%d секунд',
          m: 'бир мүнөт',
          mm: '%d мүнөт',
          h: 'бир саат',
          hh: '%d саат',
          d: 'бир күн',
          dd: '%d күн',
          M: 'бир ай',
          MM: '%d ай',
          y: 'бир жыл',
          yy: '%d жыл',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function(e) {
          var n = e % 10,
            t = e >= 100 ? 100 : null;
          return e + (a[e] || a[n] || a[t]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  113: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = {
          m: ['eng Minutt', 'enger Minutt'],
          h: ['eng Stonn', 'enger Stonn'],
          d: ['een Dag', 'engem Dag'],
          M: ['ee Mount', 'engem Mount'],
          y: ['ee Joer', 'engem Joer'],
        };
        return a ? i[n][0] : i[n][1];
      }

      function n(e) {
        return i(e.substr(0, e.indexOf(' '))) ? 'a ' + e : 'an ' + e;
      }

      function t(e) {
        return i(e.substr(0, e.indexOf(' '))) ? 'viru ' + e : 'virun ' + e;
      }

      function i(e) {
        if (((e = parseInt(e, 10)), isNaN(e))) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var a = e % 10,
            n = e / 10;
          return i(0 === a ? n : a);
        }
        if (e < 1e4) {
          for (; e >= 10; ) e /= 10;
          return i(e);
        }
        return (e /= 1e3), i(e);
      }

      return e.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm [Auer]',
          LTS: 'H:mm:ss [Auer]',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm [Auer]',
          LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
        },
        calendar: {
          sameDay: '[Haut um] LT',
          sameElse: 'L',
          nextDay: '[Muer um] LT',
          nextWeek: 'dddd [um] LT',
          lastDay: '[Gëschter um] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 2:
              case 4:
                return '[Leschten] dddd [um] LT';
              default:
                return '[Leschte] dddd [um] LT';
            }
          },
        },
        relativeTime: {
          future: n,
          past: t,
          s: 'e puer Sekonnen',
          ss: '%d Sekonnen',
          m: a,
          mm: '%d Minutten',
          h: a,
          hh: '%d Stonnen',
          d: a,
          dd: '%d Deeg',
          M: a,
          MM: '%d Méint',
          y: a,
          yy: '%d Joer',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  114: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function(e) {
          return 'ຕອນແລງ' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ';
        },
        calendar: {
          sameDay: '[ມື້ນີ້ເວລາ] LT',
          nextDay: '[ມື້ອື່ນເວລາ] LT',
          nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
          lastDay: '[ມື້ວານນີ້ເວລາ] LT',
          lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ອີກ %s',
          past: '%sຜ່ານມາ',
          s: 'ບໍ່ເທົ່າໃດວິນາທີ',
          ss: '%d ວິນາທີ',
          m: '1 ນາທີ',
          mm: '%d ນາທີ',
          h: '1 ຊົ່ວໂມງ',
          hh: '%d ຊົ່ວໂມງ',
          d: '1 ມື້',
          dd: '%d ມື້',
          M: '1 ເດືອນ',
          MM: '%d ເດືອນ',
          y: '1 ປີ',
          yy: '%d ປີ',
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function(e) {
          return 'ທີ່' + e;
        },
      });
    });
  },
  115: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e, a, n, t) {
        return a ? 'kelios sekundės' : t ? 'kelių sekundžių' : 'kelias sekundes';
      }

      function n(e, a, n, t) {
        return a ? i(n)[0] : t ? i(n)[1] : i(n)[2];
      }

      function t(e) {
        return e % 10 == 0 || (e > 10 && e < 20);
      }

      function i(e) {
        return r[e].split('_');
      }

      function o(e, a, o, r) {
        var s = e + ' ';
        return 1 === e ? s + n(e, a, o[0], r) : a ? s + (t(e) ? i(o)[1] : i(o)[0]) : r ? s + i(o)[1] : s + (t(e) ? i(o)[1] : i(o)[2]);
      }

      //! moment.js locale configuration
      var r = {
        ss: 'sekundė_sekundžių_sekundes',
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus',
      };
      return e.defineLocale('lt', {
        months: {
          format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
          standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
          format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
          standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
          isFormat: /dddd HH:mm/,
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY [m.] MMMM D [d.]',
          LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
          l: 'YYYY-MM-DD',
          ll: 'YYYY [m.] MMMM D [d.]',
          lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
        },
        calendar: {
          sameDay: '[Šiandien] LT',
          nextDay: '[Rytoj] LT',
          nextWeek: 'dddd LT',
          lastDay: '[Vakar] LT',
          lastWeek: '[Praėjusį] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'po %s',
          past: 'prieš %s',
          s: a,
          ss: o,
          m: n,
          mm: o,
          h: n,
          hh: o,
          d: n,
          dd: o,
          M: n,
          MM: o,
          y: n,
          yy: o,
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function(e) {
          return e + '-oji';
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  116: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e, a, n) {
        return n ? (a % 10 == 1 && a % 100 != 11 ? e[2] : e[3]) : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1];
      }

      function n(e, n, t) {
        return e + ' ' + a(o[t], e, n);
      }

      function t(e, n, t) {
        return a(o[t], e, n);
      }

      function i(e, a) {
        return a ? 'dažas sekundes' : 'dažām sekundēm';
      }

      //! moment.js locale configuration
      var o = {
        ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        h: 'stundas_stundām_stunda_stundas'.split('_'),
        hh: 'stundas_stundām_stunda_stundas'.split('_'),
        d: 'dienas_dienām_diena_dienas'.split('_'),
        dd: 'dienas_dienām_diena_dienas'.split('_'),
        M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        y: 'gada_gadiem_gads_gadi'.split('_'),
        yy: 'gada_gadiem_gads_gadi'.split('_'),
      };
      return e.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY.',
          LL: 'YYYY. [gada] D. MMMM',
          LLL: 'YYYY. [gada] D. MMMM, HH:mm',
          LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
        },
        calendar: {
          sameDay: '[Šodien pulksten] LT',
          nextDay: '[Rīt pulksten] LT',
          nextWeek: 'dddd [pulksten] LT',
          lastDay: '[Vakar pulksten] LT',
          lastWeek: '[Pagājušā] dddd [pulksten] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'pēc %s',
          past: 'pirms %s',
          s: i,
          ss: n,
          m: t,
          mm: n,
          h: t,
          hh: n,
          d: t,
          dd: n,
          M: t,
          MM: n,
          y: t,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  117: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        words: {
          ss: ['sekund', 'sekunda', 'sekundi'],
          m: ['jedan minut', 'jednog minuta'],
          mm: ['minut', 'minuta', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mjesec', 'mjeseca', 'mjeseci'],
          yy: ['godina', 'godine', 'godina'],
        },
        correctGrammaticalCase: function(e, a) {
          return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
        },
        translate: function(e, n, t) {
          var i = a.words[t];
          return 1 === t.length ? (n ? i[0] : i[1]) : e + ' ' + a.correctGrammaticalCase(e, i);
        },
      };
      return e.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sjutra u] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';
              case 3:
                return '[u] [srijedu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function() {
            return [
              '[prošle] [nedjelje] [u] LT',
              '[prošlog] [ponedjeljka] [u] LT',
              '[prošlog] [utorka] [u] LT',
              '[prošle] [srijede] [u] LT',
              '[prošlog] [četvrtka] [u] LT',
              '[prošlog] [petka] [u] LT',
              '[prošle] [subote] [u] LT',
            ][this.day()];
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'nekoliko sekundi',
          ss: a.translate,
          m: a.translate,
          mm: a.translate,
          h: a.translate,
          hh: a.translate,
          d: 'dan',
          dd: a.translate,
          M: 'mjesec',
          MM: a.translate,
          y: 'godinu',
          yy: a.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  118: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [i] HH:mm',
          LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
        },
        calendar: {
          sameDay: '[i teie mahana, i] LT',
          nextDay: '[apopo i] LT',
          nextWeek: 'dddd [i] LT',
          lastDay: '[inanahi i] LT',
          lastWeek: 'dddd [whakamutunga i] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'i roto i %s',
          past: '%s i mua',
          s: 'te hēkona ruarua',
          ss: '%d hēkona',
          m: 'he meneti',
          mm: '%d meneti',
          h: 'te haora',
          hh: '%d haora',
          d: 'he ra',
          dd: '%d ra',
          M: 'he marama',
          MM: '%d marama',
          y: 'he tau',
          yy: '%d tau',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  119: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Денес во] LT',
          nextDay: '[Утре во] LT',
          nextWeek: '[Во] dddd [во] LT',
          lastDay: '[Вчера во] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[Изминатата] dddd [во] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[Изминатиот] dddd [во] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s',
          past: 'пред %s',
          s: 'неколку секунди',
          ss: '%d секунди',
          m: 'една минута',
          mm: '%d минути',
          h: 'еден час',
          hh: '%d часа',
          d: 'еден ден',
          dd: '%d дена',
          M: 'еден месец',
          MM: '%d месеци',
          y: 'една година',
          yy: '%d години',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
          var a = e % 10,
            n = e % 100;
          return 0 === e ? e + '-ев' : 0 === n ? e + '-ен' : n > 10 && n < 20 ? e + '-ти' : 1 === a ? e + '-ви' : 2 === a ? e + '-ри' : 7 === a || 8 === a ? e + '-ми' : e + '-ти';
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  120: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm -നു',
          LTS: 'A h:mm:ss -നു',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm -നു',
          LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
        },
        calendar: {
          sameDay: '[ഇന്ന്] LT',
          nextDay: '[നാളെ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ഇന്നലെ] LT',
          lastWeek: '[കഴിഞ്ഞ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s കഴിഞ്ഞ്',
          past: '%s മുൻപ്',
          s: 'അൽപ നിമിഷങ്ങൾ',
          ss: '%d സെക്കൻഡ്',
          m: 'ഒരു മിനിറ്റ്',
          mm: '%d മിനിറ്റ്',
          h: 'ഒരു മണിക്കൂർ',
          hh: '%d മണിക്കൂർ',
          d: 'ഒരു ദിവസം',
          dd: '%d ദിവസം',
          M: 'ഒരു മാസം',
          MM: '%d മാസം',
          y: 'ഒരു വർഷം',
          yy: '%d വർഷം',
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), ('രാത്രി' === a && e >= 4) || 'ഉച്ച കഴിഞ്ഞ്' === a || 'വൈകുന്നേരം' === a ? e + 12 : e;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'രാത്രി' : e < 12 ? 'രാവിലെ' : e < 17 ? 'ഉച്ച കഴിഞ്ഞ്' : e < 20 ? 'വൈകുന്നേരം' : 'രാത്രി';
        },
      });
    });
  },
  121: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        switch (n) {
          case 's':
            return a ? 'хэдхэн секунд' : 'хэдхэн секундын';
          case 'ss':
            return e + (a ? ' секунд' : ' секундын');
          case 'm':
          case 'mm':
            return e + (a ? ' минут' : ' минутын');
          case 'h':
          case 'hh':
            return e + (a ? ' цаг' : ' цагийн');
          case 'd':
          case 'dd':
            return e + (a ? ' өдөр' : ' өдрийн');
          case 'M':
          case 'MM':
            return e + (a ? ' сар' : ' сарын');
          case 'y':
          case 'yy':
            return e + (a ? ' жил' : ' жилийн');
          default:
            return e;
        }
      }

      return e.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split(
          '_'
        ),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY оны MMMMын D',
          LLL: 'YYYY оны MMMMын D HH:mm',
          LLLL: 'dddd, YYYY оны MMMMын D HH:mm',
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function(e) {
          return 'ҮХ' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ҮӨ' : 'ҮХ';
        },
        calendar: {
          sameDay: '[Өнөөдөр] LT',
          nextDay: '[Маргааш] LT',
          nextWeek: '[Ирэх] dddd LT',
          lastDay: '[Өчигдөр] LT',
          lastWeek: '[Өнгөрсөн] dddd LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s дараа',
          past: '%s өмнө',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + ' өдөр';
            default:
              return e;
          }
        },
      });
    });
  },
  122: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e, a, n, t) {
        var i = '';
        if (a)
          switch (n) {
            case 's':
              i = 'काही सेकंद';
              break;
            case 'ss':
              i = '%d सेकंद';
              break;
            case 'm':
              i = 'एक मिनिट';
              break;
            case 'mm':
              i = '%d मिनिटे';
              break;
            case 'h':
              i = 'एक तास';
              break;
            case 'hh':
              i = '%d तास';
              break;
            case 'd':
              i = 'एक दिवस';
              break;
            case 'dd':
              i = '%d दिवस';
              break;
            case 'M':
              i = 'एक महिना';
              break;
            case 'MM':
              i = '%d महिने';
              break;
            case 'y':
              i = 'एक वर्ष';
              break;
            case 'yy':
              i = '%d वर्षे';
          }
        else
          switch (n) {
            case 's':
              i = 'काही सेकंदां';
              break;
            case 'ss':
              i = '%d सेकंदां';
              break;
            case 'm':
              i = 'एका मिनिटा';
              break;
            case 'mm':
              i = '%d मिनिटां';
              break;
            case 'h':
              i = 'एका तासा';
              break;
            case 'hh':
              i = '%d तासां';
              break;
            case 'd':
              i = 'एका दिवसा';
              break;
            case 'dd':
              i = '%d दिवसां';
              break;
            case 'M':
              i = 'एका महिन्या';
              break;
            case 'MM':
              i = '%d महिन्यां';
              break;
            case 'y':
              i = 'एका वर्षा';
              break;
            case 'yy':
              i = '%d वर्षां';
          }
        return i.replace(/%d/i, e);
      }

      //! moment.js locale configuration
      var n = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
        t = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0',
        };
      return e.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm वाजता',
          LTS: 'A h:mm:ss वाजता',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm वाजता',
          LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[उद्या] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[काल] LT',
          lastWeek: '[मागील] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sमध्ये',
          past: '%sपूर्वी',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        preparse: function(e) {
          return e.replace(/[१२३४५६७८९०]/g, function(e) {
            return t[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return n[e];
          });
        },
        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'पहाटे' === a || 'सकाळी' === a ? e : 'दुपारी' === a || 'सायंकाळी' === a || 'रात्री' === a ? (e >= 12 ? e : e + 12) : void 0;
        },
        meridiem: function(e, a, n) {
          return e >= 0 && e < 6 ? 'पहाटे' : e < 12 ? 'सकाळी' : e < 17 ? 'दुपारी' : e < 20 ? 'सायंकाळी' : 'रात्री';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  123: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'pagi' === a ? e : 'tengahari' === a ? (e >= 11 ? e : e + 12) : 'petang' === a || 'malam' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  124: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'pagi' === a ? e : 'tengahari' === a ? (e >= 11 ? e : e + 12) : 'petang' === a || 'malam' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  125: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Illum fil-]LT',
          nextDay: '[Għada fil-]LT',
          nextWeek: 'dddd [fil-]LT',
          lastDay: '[Il-bieraħ fil-]LT',
          lastWeek: 'dddd [li għadda] [fil-]LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'f’ %s',
          past: '%s ilu',
          s: 'ftit sekondi',
          ss: '%d sekondi',
          m: 'minuta',
          mm: '%d minuti',
          h: 'siegħa',
          hh: '%d siegħat',
          d: 'ġurnata',
          dd: '%d ġranet',
          M: 'xahar',
          MM: '%d xhur',
          y: 'sena',
          yy: '%d sni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  126: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '၁', 2: '၂', 3: '၃', 4: '၄', 5: '၅', 6: '၆', 7: '၇', 8: '၈', 9: '၉', 0: '၀' },
        n = {
          '၁': '1',
          '၂': '2',
          '၃': '3',
          '၄': '4',
          '၅': '5',
          '၆': '6',
          '၇': '7',
          '၈': '8',
          '၉': '9',
          '၀': '0',
        };
      return e.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ယနေ.] LT [မှာ]',
          nextDay: '[မနက်ဖြန်] LT [မှာ]',
          nextWeek: 'dddd LT [မှာ]',
          lastDay: '[မနေ.က] LT [မှာ]',
          lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'လာမည့် %s မှာ',
          past: 'လွန်ခဲ့သော %s က',
          s: 'စက္ကန်.အနည်းငယ်',
          ss: '%d စက္ကန့်',
          m: 'တစ်မိနစ်',
          mm: '%d မိနစ်',
          h: 'တစ်နာရီ',
          hh: '%d နာရီ',
          d: 'တစ်ရက်',
          dd: '%d ရက်',
          M: 'တစ်လ',
          MM: '%d လ',
          y: 'တစ်နှစ်',
          yy: '%d နှစ်',
        },
        preparse: function(e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  127: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[forrige] dddd [kl.] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'noen sekunder',
          ss: '%d sekunder',
          m: 'ett minutt',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dager',
          M: 'en måned',
          MM: '%d måneder',
          y: 'ett år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  128: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०' },
        n = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0',
        };
      return e.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'Aको h:mm बजे',
          LTS: 'Aको h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, Aको h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
        },
        preparse: function(e) {
          return e.replace(/[१२३४५६७८९०]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'राति' === a ? (e < 4 ? e : e + 12) : 'बिहान' === a ? e : 'दिउँसो' === a ? (e >= 10 ? e : e + 12) : 'साँझ' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 3 ? 'राति' : e < 12 ? 'बिहान' : e < 16 ? 'दिउँसो' : e < 20 ? 'साँझ' : 'राति';
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[भोलि] LT',
          nextWeek: '[आउँदो] dddd[,] LT',
          lastDay: '[हिजो] LT',
          lastWeek: '[गएको] dddd[,] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sमा',
          past: '%s अगाडि',
          s: 'केही क्षण',
          ss: '%d सेकेण्ड',
          m: 'एक मिनेट',
          mm: '%d मिनेट',
          h: 'एक घण्टा',
          hh: '%d घण्टा',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महिना',
          MM: '%d महिना',
          y: 'एक बर्ष',
          yy: '%d बर्ष',
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  129: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function(e, t) {
          return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  130: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        i = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function(e, t) {
          return e ? (/-MMM-/.test(t) ? n[e.month()] : a[e.month()]) : a;
        },
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  131: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[I dag klokka] LT',
          nextDay: '[I morgon klokka] LT',
          nextWeek: 'dddd [klokka] LT',
          lastDay: '[I går klokka] LT',
          lastWeek: '[Føregåande] dddd [klokka] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s sidan',
          s: 'nokre sekund',
          ss: '%d sekund',
          m: 'eit minutt',
          mm: '%d minutt',
          h: 'ein time',
          hh: '%d timar',
          d: 'ein dag',
          dd: '%d dagar',
          M: 'ein månad',
          MM: '%d månader',
          y: 'eit år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  132: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('oc-lnc', {
        months: {
          standalone: 'genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split('_'),
          format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split('_'),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort: 'gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
          llll: 'ddd D MMM YYYY, H:mm',
        },
        calendar: {
          sameDay: '[uèi a] LT',
          nextDay: '[deman a] LT',
          nextWeek: 'dddd [a] LT',
          lastDay: '[ièr a] LT',
          lastWeek: 'dddd [passat a] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: "d'aquí %s",
          past: 'fa %s',
          s: 'unas segondas',
          ss: '%d segondas',
          m: 'una minuta',
          mm: '%d minutas',
          h: 'una ora',
          hh: '%d oras',
          d: 'un jorn',
          dd: '%d jorns',
          M: 'un mes',
          MM: '%d meses',
          y: 'un an',
          yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(e, a) {
          var n = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
          return ('w' !== a && 'W' !== a) || (n = 'a'), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  133: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '੧', 2: '੨', 3: '੩', 4: '੪', 5: '੫', 6: '੬', 7: '੭', 8: '੮', 9: '੯', 0: '੦' },
        n = {
          '੧': '1',
          '੨': '2',
          '੩': '3',
          '੪': '4',
          '੫': '5',
          '੬': '6',
          '੭': '7',
          '੮': '8',
          '੯': '9',
          '੦': '0',
        };
      return e.defineLocale('pa-in', {
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm ਵਜੇ',
          LTS: 'A h:mm:ss ਵਜੇ',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
          LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ',
        },
        calendar: {
          sameDay: '[ਅਜ] LT',
          nextDay: '[ਕਲ] LT',
          nextWeek: '[ਅਗਲਾ] dddd, LT',
          lastDay: '[ਕਲ] LT',
          lastWeek: '[ਪਿਛਲੇ] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s ਵਿੱਚ',
          past: '%s ਪਿਛਲੇ',
          s: 'ਕੁਝ ਸਕਿੰਟ',
          ss: '%d ਸਕਿੰਟ',
          m: 'ਇਕ ਮਿੰਟ',
          mm: '%d ਮਿੰਟ',
          h: 'ਇੱਕ ਘੰਟਾ',
          hh: '%d ਘੰਟੇ',
          d: 'ਇੱਕ ਦਿਨ',
          dd: '%d ਦਿਨ',
          M: 'ਇੱਕ ਮਹੀਨਾ',
          MM: '%d ਮਹੀਨੇ',
          y: 'ਇੱਕ ਸਾਲ',
          yy: '%d ਸਾਲ',
        },
        preparse: function(e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'ਰਾਤ' === a ? (e < 4 ? e : e + 12) : 'ਸਵੇਰ' === a ? e : 'ਦੁਪਹਿਰ' === a ? (e >= 10 ? e : e + 12) : 'ਸ਼ਾਮ' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'ਰਾਤ' : e < 10 ? 'ਸਵੇਰ' : e < 17 ? 'ਦੁਪਹਿਰ' : e < 20 ? 'ਸ਼ਾਮ' : 'ਰਾਤ';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  134: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
      }

      function n(e, n, t) {
        var i = e + ' ';
        switch (t) {
          case 'ss':
            return i + (a(e) ? 'sekundy' : 'sekund');
          case 'm':
            return n ? 'minuta' : 'minutę';
          case 'mm':
            return i + (a(e) ? 'minuty' : 'minut');
          case 'h':
            return n ? 'godzina' : 'godzinę';
          case 'hh':
            return i + (a(e) ? 'godziny' : 'godzin');
          case 'MM':
            return i + (a(e) ? 'miesiące' : 'miesięcy');
          case 'yy':
            return i + (a(e) ? 'lata' : 'lat');
        }
      }

      //! moment.js locale configuration
      var t = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        i = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
      return e.defineLocale('pl', {
        months: function(e, a) {
          return e ? ('' === a ? '(' + i[e.month()] + '|' + t[e.month()] + ')' : /D MMMM/.test(a) ? i[e.month()] : t[e.month()]) : t;
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Dziś o] LT',
          nextDay: '[Jutro o] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[W niedzielę o] LT';
              case 2:
                return '[We wtorek o] LT';
              case 3:
                return '[W środę o] LT';
              case 6:
                return '[W sobotę o] LT';
              default:
                return '[W] dddd [o] LT';
            }
          },
          lastDay: '[Wczoraj o] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[W zeszłą niedzielę o] LT';
              case 3:
                return '[W zeszłą środę o] LT';
              case 6:
                return '[W zeszłą sobotę o] LT';
              default:
                return '[W zeszły] dddd [o] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: '%s temu',
          s: 'kilka sekund',
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: '1 dzień',
          dd: '%d dni',
          M: 'miesiąc',
          MM: n,
          y: 'rok',
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  135: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('pt-br', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
        weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function() {
            return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'poucos segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
      });
    });
  },
  136: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('pt', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function() {
            return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  137: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n) {
        var t = { ss: 'secunde', mm: 'minute', hh: 'ore', dd: 'zile', MM: 'luni', yy: 'ani' },
          i = ' ';
        return (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (i = ' de '), e + i + t[n];
      }

      return e.defineLocale('ro', {
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[azi la] LT',
          nextDay: '[mâine la] LT',
          nextWeek: 'dddd [la] LT',
          lastDay: '[ieri la] LT',
          lastWeek: '[fosta] dddd [la] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'peste %s',
          past: '%s în urmă',
          s: 'câteva secunde',
          ss: a,
          m: 'un minut',
          mm: a,
          h: 'o oră',
          hh: a,
          d: 'o zi',
          dd: a,
          M: 'o lună',
          MM: a,
          y: 'un an',
          yy: a,
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  138: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a) {
        var n = e.split('_');
        return a % 10 == 1 && a % 100 != 11 ? n[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? n[1] : n[2];
      }

      function n(e, n, t) {
        var i = {
          ss: n ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          mm: n ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          hh: 'час_часа_часов',
          dd: 'день_дня_дней',
          MM: 'месяц_месяца_месяцев',
          yy: 'год_года_лет',
        };
        return 'm' === t ? (n ? 'минута' : 'минуту') : e + ' ' + a(i[t], +e);
      }

      var t = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
      return e.defineLocale('ru', {
        months: {
          format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
          standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        },
        monthsShort: {
          format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
          standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_'),
        },
        weekdays: {
          standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: t,
        longMonthsParse: t,
        shortMonthsParse: t,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., H:mm',
          LLLL: 'dddd, D MMMM YYYY г., H:mm',
        },
        calendar: {
          sameDay: '[Сегодня, в] LT',
          nextDay: '[Завтра, в] LT',
          lastDay: '[Вчера, в] LT',
          nextWeek: function(e) {
            if (e.week() === this.week()) return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
            switch (this.day()) {
              case 0:
                return '[В следующее] dddd, [в] LT';
              case 1:
              case 2:
              case 4:
                return '[В следующий] dddd, [в] LT';
              case 3:
              case 5:
              case 6:
                return '[В следующую] dddd, [в] LT';
            }
          },
          lastWeek: function(e) {
            if (e.week() === this.week()) return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
            switch (this.day()) {
              case 0:
                return '[В прошлое] dddd, [в] LT';
              case 1:
              case 2:
              case 4:
                return '[В прошлый] dddd, [в] LT';
              case 3:
              case 5:
              case 6:
                return '[В прошлую] dddd, [в] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'через %s',
          past: '%s назад',
          s: 'несколько секунд',
          ss: n,
          m: n,
          mm: n,
          h: 'час',
          hh: n,
          d: 'день',
          dd: n,
          M: 'месяц',
          MM: n,
          y: 'год',
          yy: n,
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(e) {
          return /^(дня|вечера)$/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'M':
            case 'd':
            case 'DDD':
              return e + '-й';
            case 'D':
              return e + '-го';
            case 'w':
            case 'W':
              return e + '-я';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  139: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'],
        n = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
      return e.defineLocale('sd', {
        months: a,
        monthsShort: a,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm',
        },
        meridiemParse: /صبح|شام/,
        isPM: function(e) {
          return 'شام' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
          sameDay: '[اڄ] LT',
          nextDay: '[سڀاڻي] LT',
          nextWeek: 'dddd [اڳين هفتي تي] LT',
          lastDay: '[ڪالهه] LT',
          lastWeek: '[گزريل هفتي] dddd [تي] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s پوء',
          past: '%s اڳ',
          s: 'چند سيڪنڊ',
          ss: '%d سيڪنڊ',
          m: 'هڪ منٽ',
          mm: '%d منٽ',
          h: 'هڪ ڪلاڪ',
          hh: '%d ڪلاڪ',
          d: 'هڪ ڏينهن',
          dd: '%d ڏينهن',
          M: 'هڪ مهينو',
          MM: '%d مهينا',
          y: 'هڪ سال',
          yy: '%d سال',
        },
        preparse: function(e) {
          return e.replace(/،/g, ',');
        },
        postformat: function(e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  140: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('se', {
        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'MMMM D. [b.] YYYY',
          LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
          LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
        },
        calendar: {
          sameDay: '[otne ti] LT',
          nextDay: '[ihttin ti] LT',
          nextWeek: 'dddd [ti] LT',
          lastDay: '[ikte ti] LT',
          lastWeek: '[ovddit] dddd [ti] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s geažes',
          past: 'maŋit %s',
          s: 'moadde sekunddat',
          ss: '%d sekunddat',
          m: 'okta minuhta',
          mm: '%d minuhtat',
          h: 'okta diimmu',
          hh: '%d diimmut',
          d: 'okta beaivi',
          dd: '%d beaivvit',
          M: 'okta mánnu',
          MM: '%d mánut',
          y: 'okta jahki',
          yy: '%d jagit',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  141: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'a h:mm',
          LTS: 'a h:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY MMMM D',
          LLL: 'YYYY MMMM D, a h:mm',
          LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
        },
        calendar: {
          sameDay: '[අද] LT[ට]',
          nextDay: '[හෙට] LT[ට]',
          nextWeek: 'dddd LT[ට]',
          lastDay: '[ඊයේ] LT[ට]',
          lastWeek: '[පසුගිය] dddd LT[ට]',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%sකින්',
          past: '%sකට පෙර',
          s: 'තත්පර කිහිපය',
          ss: 'තත්පර %d',
          m: 'මිනිත්තුව',
          mm: 'මිනිත්තු %d',
          h: 'පැය',
          hh: 'පැය %d',
          d: 'දිනය',
          dd: 'දින %d',
          M: 'මාසය',
          MM: 'මාස %d',
          y: 'වසර',
          yy: 'වසර %d',
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function(e) {
          return e + ' වැනි';
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function(e) {
          return 'ප.ව.' === e || 'පස් වරු' === e;
        },
        meridiem: function(e, a, n) {
          return e > 11 ? (n ? 'ප.ව.' : 'පස් වරු') : n ? 'පෙ.ව.' : 'පෙර වරු';
        },
      });
    });
  },
  142: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e) {
        return e > 1 && e < 5;
      }

      function n(e, n, t, i) {
        var o = e + ' ';
        switch (t) {
          case 's':
            return n || i ? 'pár sekúnd' : 'pár sekundami';
          case 'ss':
            return n || i ? o + (a(e) ? 'sekundy' : 'sekúnd') : o + 'sekundami';
          case 'm':
            return n ? 'minúta' : i ? 'minútu' : 'minútou';
          case 'mm':
            return n || i ? o + (a(e) ? 'minúty' : 'minút') : o + 'minútami';
          case 'h':
            return n ? 'hodina' : i ? 'hodinu' : 'hodinou';
          case 'hh':
            return n || i ? o + (a(e) ? 'hodiny' : 'hodín') : o + 'hodinami';
          case 'd':
            return n || i ? 'deň' : 'dňom';
          case 'dd':
            return n || i ? o + (a(e) ? 'dni' : 'dní') : o + 'dňami';
          case 'M':
            return n || i ? 'mesiac' : 'mesiacom';
          case 'MM':
            return n || i ? o + (a(e) ? 'mesiace' : 'mesiacov') : o + 'mesiacmi';
          case 'y':
            return n || i ? 'rok' : 'rokom';
          case 'yy':
            return n || i ? o + (a(e) ? 'roky' : 'rokov') : o + 'rokmi';
        }
      }

      //! moment.js locale configuration
      var t = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        i = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
      return e.defineLocale('sk', {
        months: t,
        monthsShort: i,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[dnes o] LT',
          nextDay: '[zajtra o] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[v nedeľu o] LT';
              case 1:
              case 2:
                return '[v] dddd [o] LT';
              case 3:
                return '[v stredu o] LT';
              case 4:
                return '[vo štvrtok o] LT';
              case 5:
                return '[v piatok o] LT';
              case 6:
                return '[v sobotu o] LT';
            }
          },
          lastDay: '[včera o] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[minulú nedeľu o] LT';
              case 1:
              case 2:
                return '[minulý] dddd [o] LT';
              case 3:
                return '[minulú stredu o] LT';
              case 4:
              case 5:
                return '[minulý] dddd [o] LT';
              case 6:
                return '[minulú sobotu o] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'pred %s',
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  143: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a, n, t) {
        var i = e + ' ';
        switch (n) {
          case 's':
            return a || t ? 'nekaj sekund' : 'nekaj sekundami';
          case 'ss':
            return (i += 1 === e ? (a ? 'sekundo' : 'sekundi') : 2 === e ? (a || t ? 'sekundi' : 'sekundah') : e < 5 ? (a || t ? 'sekunde' : 'sekundah') : 'sekund');
          case 'm':
            return a ? 'ena minuta' : 'eno minuto';
          case 'mm':
            return (i +=
              1 === e ? (a ? 'minuta' : 'minuto') : 2 === e ? (a || t ? 'minuti' : 'minutama') : e < 5 ? (a || t ? 'minute' : 'minutami') : a || t ? 'minut' : 'minutami');
          case 'h':
            return a ? 'ena ura' : 'eno uro';
          case 'hh':
            return (i += 1 === e ? (a ? 'ura' : 'uro') : 2 === e ? (a || t ? 'uri' : 'urama') : e < 5 ? (a || t ? 'ure' : 'urami') : a || t ? 'ur' : 'urami');
          case 'd':
            return a || t ? 'en dan' : 'enim dnem';
          case 'dd':
            return (i += 1 === e ? (a || t ? 'dan' : 'dnem') : 2 === e ? (a || t ? 'dni' : 'dnevoma') : a || t ? 'dni' : 'dnevi');
          case 'M':
            return a || t ? 'en mesec' : 'enim mesecem';
          case 'MM':
            return (i +=
              1 === e ? (a || t ? 'mesec' : 'mesecem') : 2 === e ? (a || t ? 'meseca' : 'mesecema') : e < 5 ? (a || t ? 'mesece' : 'meseci') : a || t ? 'mesecev' : 'meseci');
          case 'y':
            return a || t ? 'eno leto' : 'enim letom';
          case 'yy':
            return (i += 1 === e ? (a || t ? 'leto' : 'letom') : 2 === e ? (a || t ? 'leti' : 'letoma') : e < 5 ? (a || t ? 'leta' : 'leti') : a || t ? 'let' : 'leti');
        }
      }

      return e.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD. MM. YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danes ob] LT',
          nextDay: '[jutri ob] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[v] [nedeljo] [ob] LT';
              case 3:
                return '[v] [sredo] [ob] LT';
              case 6:
                return '[v] [soboto] [ob] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[v] dddd [ob] LT';
            }
          },
          lastDay: '[včeraj ob] LT',
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return '[prejšnjo] [nedeljo] [ob] LT';
              case 3:
                return '[prejšnjo] [sredo] [ob] LT';
              case 6:
                return '[prejšnjo] [soboto] [ob] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[prejšnji] dddd [ob] LT';
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'čez %s',
          past: 'pred %s',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  144: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function(e) {
          return 'M' === e.charAt(0);
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'PD' : 'MD';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Sot në] LT',
          nextDay: '[Nesër në] LT',
          nextWeek: 'dddd [në] LT',
          lastDay: '[Dje në] LT',
          lastWeek: 'dddd [e kaluar në] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'në %s',
          past: '%s më parë',
          s: 'disa sekonda',
          ss: '%d sekonda',
          m: 'një minutë',
          mm: '%d minuta',
          h: 'një orë',
          hh: '%d orë',
          d: 'një ditë',
          dd: '%d ditë',
          M: 'një muaj',
          MM: '%d muaj',
          y: 'një vit',
          yy: '%d vite',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  145: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        words: {
          ss: ['секунда', 'секунде', 'секунди'],
          m: ['један минут', 'једне минуте'],
          mm: ['минут', 'минуте', 'минута'],
          h: ['један сат', 'једног сата'],
          hh: ['сат', 'сата', 'сати'],
          dd: ['дан', 'дана', 'дана'],
          MM: ['месец', 'месеца', 'месеци'],
          yy: ['година', 'године', 'година'],
        },
        correctGrammaticalCase: function(e, a) {
          return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
        },
        translate: function(e, n, t) {
          var i = a.words[t];
          return 1 === t.length ? (n ? i[0] : i[1]) : e + ' ' + a.correctGrammaticalCase(e, i);
        },
      };
      return e.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[данас у] LT',
          nextDay: '[сутра у] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[у] [недељу] [у] LT';
              case 3:
                return '[у] [среду] [у] LT';
              case 6:
                return '[у] [суботу] [у] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[у] dddd [у] LT';
            }
          },
          lastDay: '[јуче у] LT',
          lastWeek: function() {
            return [
              '[прошле] [недеље] [у] LT',
              '[прошлог] [понедељка] [у] LT',
              '[прошлог] [уторка] [у] LT',
              '[прошле] [среде] [у] LT',
              '[прошлог] [четвртка] [у] LT',
              '[прошлог] [петка] [у] LT',
              '[прошле] [суботе] [у] LT',
            ][this.day()];
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s',
          past: 'пре %s',
          s: 'неколико секунди',
          ss: a.translate,
          m: a.translate,
          mm: a.translate,
          h: a.translate,
          hh: a.translate,
          d: 'дан',
          dd: a.translate,
          M: 'месец',
          MM: a.translate,
          y: 'годину',
          yy: a.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  146: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        words: {
          ss: ['sekunda', 'sekunde', 'sekundi'],
          m: ['jedan minut', 'jedne minute'],
          mm: ['minut', 'minute', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mesec', 'meseca', 'meseci'],
          yy: ['godina', 'godine', 'godina'],
        },
        correctGrammaticalCase: function(e, a) {
          return 1 === e ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2];
        },
        translate: function(e, n, t) {
          var i = a.words[t];
          return 1 === t.length ? (n ? i[0] : i[1]) : e + ' ' + a.correctGrammaticalCase(e, i);
        },
      };
      return e.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return '[u] [nedelju] [u] LT';
              case 3:
                return '[u] [sredu] [u] LT';
              case 6:
                return '[u] [subotu] [u] LT';
              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function() {
            return [
              '[prošle] [nedelje] [u] LT',
              '[prošlog] [ponedeljka] [u] LT',
              '[prošlog] [utorka] [u] LT',
              '[prošle] [srede] [u] LT',
              '[prošlog] [četvrtka] [u] LT',
              '[prošlog] [petka] [u] LT',
              '[prošle] [subote] [u] LT',
            ][this.day()];
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s',
          past: 'pre %s',
          s: 'nekoliko sekundi',
          ss: a.translate,
          m: a.translate,
          mm: a.translate,
          h: a.translate,
          hh: a.translate,
          d: 'dan',
          dd: a.translate,
          M: 'mesec',
          MM: a.translate,
          y: 'godinu',
          yy: a.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      });
    });
  },
  147: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ss', {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Namuhla nga] LT',
          nextDay: '[Kusasa nga] LT',
          nextWeek: 'dddd [nga] LT',
          lastDay: '[Itolo nga] LT',
          lastWeek: 'dddd [leliphelile] [nga] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'nga %s',
          past: 'wenteka nga %s',
          s: 'emizuzwana lomcane',
          ss: '%d mzuzwana',
          m: 'umzuzu',
          mm: '%d emizuzu',
          h: 'lihora',
          hh: '%d emahora',
          d: 'lilanga',
          dd: '%d emalanga',
          M: 'inyanga',
          MM: '%d tinyanga',
          y: 'umnyaka',
          yy: '%d iminyaka',
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(e, a, n) {
          return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku';
        },
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'ekuseni' === a ? e : 'emini' === a ? (e >= 11 ? e : e + 12) : 'entsambama' === a || 'ebusuku' === a ? (0 === e ? 0 : e + 12) : void 0;
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  148: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Idag] LT',
          nextDay: '[Imorgon] LT',
          lastDay: '[Igår] LT',
          nextWeek: '[På] dddd LT',
          lastWeek: '[I] dddd[s] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s',
          past: 'för %s sedan',
          s: 'några sekunder',
          ss: '%d sekunder',
          m: 'en minut',
          mm: '%d minuter',
          h: 'en timme',
          hh: '%d timmar',
          d: 'en dag',
          dd: '%d dagar',
          M: 'en månad',
          MM: '%d månader',
          y: 'ett år',
          yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? ':e' : 1 === a ? ':a' : 2 === a ? ':a' : ':e');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  149: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'hh:mm A',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[leo saa] LT',
          nextDay: '[kesho saa] LT',
          nextWeek: '[wiki ijayo] dddd [saat] LT',
          lastDay: '[jana] LT',
          lastWeek: '[wiki iliyopita] dddd [saat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s baadaye',
          past: 'tokea %s',
          s: 'hivi punde',
          ss: 'sekunde %d',
          m: 'dakika moja',
          mm: 'dakika %d',
          h: 'saa limoja',
          hh: 'masaa %d',
          d: 'siku moja',
          dd: 'siku %d',
          M: 'mwezi mmoja',
          MM: 'miezi %d',
          y: 'mwaka mmoja',
          yy: 'miaka %d',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  150: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = { 1: '௧', 2: '௨', 3: '௩', 4: '௪', 5: '௫', 6: '௬', 7: '௭', 8: '௮', 9: '௯', 0: '௦' },
        n = {
          '௧': '1',
          '௨': '2',
          '௩': '3',
          '௪': '4',
          '௫': '5',
          '௬': '6',
          '௭': '7',
          '௮': '8',
          '௯': '9',
          '௦': '0',
        };
      return e.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, HH:mm',
          LLLL: 'dddd, D MMMM YYYY, HH:mm',
        },
        calendar: {
          sameDay: '[இன்று] LT',
          nextDay: '[நாளை] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[நேற்று] LT',
          lastWeek: '[கடந்த வாரம்] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s இல்',
          past: '%s முன்',
          s: 'ஒரு சில விநாடிகள்',
          ss: '%d விநாடிகள்',
          m: 'ஒரு நிமிடம்',
          mm: '%d நிமிடங்கள்',
          h: 'ஒரு மணி நேரம்',
          hh: '%d மணி நேரம்',
          d: 'ஒரு நாள்',
          dd: '%d நாட்கள்',
          M: 'ஒரு மாதம்',
          MM: '%d மாதங்கள்',
          y: 'ஒரு வருடம்',
          yy: '%d ஆண்டுகள்',
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function(e) {
          return e + 'வது';
        },
        preparse: function(e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
            return n[e];
          });
        },
        postformat: function(e) {
          return e.replace(/\d/g, function(e) {
            return a[e];
          });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function(e, a, n) {
          return e < 2 ? ' யாமம்' : e < 6 ? ' வைகறை' : e < 10 ? ' காலை' : e < 14 ? ' நண்பகல்' : e < 18 ? ' எற்பாடு' : e < 22 ? ' மாலை' : ' யாமம்';
        },
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'யாமம்' === a ? (e < 2 ? e : e + 12) : 'வைகறை' === a || 'காலை' === a ? e : 'நண்பகல்' === a && e >= 10 ? e : e + 12;
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  151: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[నేడు] LT',
          nextDay: '[రేపు] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[నిన్న] LT',
          lastWeek: '[గత] dddd, LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s లో',
          past: '%s క్రితం',
          s: 'కొన్ని క్షణాలు',
          ss: '%d సెకన్లు',
          m: 'ఒక నిమిషం',
          mm: '%d నిమిషాలు',
          h: 'ఒక గంట',
          hh: '%d గంటలు',
          d: 'ఒక రోజు',
          dd: '%d రోజులు',
          M: 'ఒక నెల',
          MM: '%d నెలలు',
          y: 'ఒక సంవత్సరం',
          yy: '%d సంవత్సరాలు',
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'రాత్రి' === a ? (e < 4 ? e : e + 12) : 'ఉదయం' === a ? e : 'మధ్యాహ్నం' === a ? (e >= 10 ? e : e + 12) : 'సాయంత్రం' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'రాత్రి' : e < 10 ? 'ఉదయం' : e < 17 ? 'మధ్యాహ్నం' : e < 20 ? 'సాయంత్రం' : 'రాత్రి';
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  152: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Ohin iha] LT',
          nextDay: '[Aban iha] LT',
          nextWeek: 'dddd [iha] LT',
          lastDay: '[Horiseik iha] LT',
          lastWeek: 'dddd [semana kotuk] [iha] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'iha %s',
          past: '%s liuba',
          s: 'segundu balun',
          ss: 'segundu %d',
          m: 'minutu ida',
          mm: 'minutu %d',
          h: 'oras ida',
          hh: 'oras %d',
          d: 'loron ida',
          dd: 'loron %d',
          M: 'fulan ida',
          MM: 'fulan %d',
          y: 'tinan ida',
          yy: 'tinan %d',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  153: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум',
      };
      return e.defineLocale('tg', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Имрӯз соати] LT',
          nextDay: '[Пагоҳ соати] LT',
          lastDay: '[Дирӯз соати] LT',
          nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
          lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'баъди %s',
          past: '%s пеш',
          s: 'якчанд сония',
          m: 'як дақиқа',
          mm: '%d дақиқа',
          h: 'як соат',
          hh: '%d соат',
          d: 'як рӯз',
          dd: '%d рӯз',
          M: 'як моҳ',
          MM: '%d моҳ',
          y: 'як сол',
          yy: '%d сол',
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'шаб' === a ? (e < 4 ? e : e + 12) : 'субҳ' === a ? e : 'рӯз' === a ? (e >= 11 ? e : e + 12) : 'бегоҳ' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'шаб' : e < 11 ? 'субҳ' : e < 16 ? 'рӯз' : e < 19 ? 'бегоҳ' : 'шаб';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function(e) {
          var n = e % 10,
            t = e >= 100 ? 100 : null;
          return e + (a[e] || a[n] || a[t]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  154: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('th', {
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY เวลา H:mm',
          LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function(e) {
          return 'หลังเที่ยง' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
        },
        calendar: {
          sameDay: '[วันนี้ เวลา] LT',
          nextDay: '[พรุ่งนี้ เวลา] LT',
          nextWeek: 'dddd[หน้า เวลา] LT',
          lastDay: '[เมื่อวานนี้ เวลา] LT',
          lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'อีก %s',
          past: '%sที่แล้ว',
          s: 'ไม่กี่วินาที',
          ss: '%d วินาที',
          m: '1 นาที',
          mm: '%d นาที',
          h: '1 ชั่วโมง',
          hh: '%d ชั่วโมง',
          d: '1 วัน',
          dd: '%d วัน',
          M: '1 เดือน',
          MM: '%d เดือน',
          y: '1 ปี',
          yy: '%d ปี',
        },
      });
    });
  },
  155: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        1: "'inji",
        5: "'inji",
        8: "'inji",
        70: "'inji",
        80: "'inji",
        2: "'nji",
        7: "'nji",
        20: "'nji",
        50: "'nji",
        3: "'ünji",
        4: "'ünji",
        100: "'ünji",
        6: "'njy",
        9: "'unjy",
        10: "'unjy",
        30: "'unjy",
        60: "'ynjy",
        90: "'ynjy",
      };
      return e.defineLocale('tk', {
        months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split('_'),
        monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),
        weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split('_'),
        weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),
        weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün sagat] LT',
          nextDay: '[ertir sagat] LT',
          nextWeek: '[indiki] dddd [sagat] LT',
          lastDay: '[düýn] LT',
          lastWeek: '[geçen] dddd [sagat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s soň',
          past: '%s öň',
          s: 'birnäçe sekunt',
          m: 'bir minut',
          mm: '%d minut',
          h: 'bir sagat',
          hh: '%d sagat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir aý',
          MM: '%d aý',
          y: 'bir ýyl',
          yy: '%d ýyl',
        },
        ordinal: function(e, n) {
          switch (n) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
              return e;
            default:
              if (0 === e) return e + "'unjy";
              var t = e % 10,
                i = (e % 100) - t,
                o = e >= 100 ? 100 : null;
              return e + (a[t] || a[i] || a[o]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  156: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('tl-ph', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm',
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          ss: '%d segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  157: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e) {
        var a = e;
        return (a =
          -1 !== e.indexOf('jaj') ? a.slice(0, -3) + 'leS' : -1 !== e.indexOf('jar') ? a.slice(0, -3) + 'waQ' : -1 !== e.indexOf('DIS') ? a.slice(0, -3) + 'nem' : a + ' pIq');
      }

      function n(e) {
        var a = e;
        return (a =
          -1 !== e.indexOf('jaj') ? a.slice(0, -3) + 'Hu’' : -1 !== e.indexOf('jar') ? a.slice(0, -3) + 'wen' : -1 !== e.indexOf('DIS') ? a.slice(0, -3) + 'ben' : a + ' ret');
      }

      function t(e, a, n, t) {
        var o = i(e);
        switch (n) {
          case 'ss':
            return o + ' lup';
          case 'mm':
            return o + ' tup';
          case 'hh':
            return o + ' rep';
          case 'dd':
            return o + ' jaj';
          case 'MM':
            return o + ' jar';
          case 'yy':
            return o + ' DIS';
        }
      }

      function i(e) {
        var a = Math.floor((e % 1e3) / 100),
          n = Math.floor((e % 100) / 10),
          t = e % 10,
          i = '';
        return a > 0 && (i += o[a] + 'vatlh'), n > 0 && (i += ('' !== i ? ' ' : '') + o[n] + 'maH'), t > 0 && (i += ('' !== i ? ' ' : '') + o[t]), '' === i ? 'pagh' : i;
      }

      //! moment.js locale configuration
      var o = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
      return e.defineLocale('tlh', {
        months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split(
          '_'
        ),
        monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact: !0,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[DaHjaj] LT',
          nextDay: '[wa’leS] LT',
          nextWeek: 'LLL',
          lastDay: '[wa’Hu’] LT',
          lastWeek: 'LLL',
          sameElse: 'L',
        },
        relativeTime: {
          future: a,
          past: n,
          s: 'puS lup',
          ss: t,
          m: 'wa’ tup',
          mm: t,
          h: 'wa’ rep',
          hh: t,
          d: 'wa’ jaj',
          dd: t,
          M: 'wa’ jar',
          MM: t,
          y: 'wa’ DIS',
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  158: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı",
      };
      return e.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        meridiem: function(e, a, n) {
          return e < 12 ? (n ? 'öö' : 'ÖÖ') : n ? 'ös' : 'ÖS';
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM: function(e) {
          return 'ös' === e || 'ÖS' === e;
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[yarın saat] LT',
          nextWeek: '[gelecek] dddd [saat] LT',
          lastDay: '[dün] LT',
          lastWeek: '[geçen] dddd [saat] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s önce',
          s: 'birkaç saniye',
          ss: '%d saniye',
          m: 'bir dakika',
          mm: '%d dakika',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir yıl',
          yy: '%d yıl',
        },
        ordinal: function(e, n) {
          switch (n) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
              return e;
            default:
              if (0 === e) return e + "'ıncı";
              var t = e % 10,
                i = (e % 100) - t,
                o = e >= 100 ? 100 : null;
              return e + (a[t] || a[i] || a[o]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  159: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      function a(e, a, n, t) {
        var i = {
          s: ['viensas secunds', "'iensas secunds"],
          ss: [e + ' secunds', e + ' secunds'],
          m: ["'n míut", "'iens míut"],
          mm: [e + ' míuts', e + ' míuts'],
          h: ["'n þora", "'iensa þora"],
          hh: [e + ' þoras', e + ' þoras'],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + ' ziuas', e + ' ziuas'],
          M: ["'n mes", "'iens mes"],
          MM: [e + ' mesen', e + ' mesen'],
          y: ["'n ar", "'iens ar"],
          yy: [e + ' ars', e + ' ars'],
        };
        return t ? i[n][0] : a ? i[n][0] : i[n][1];
      }

      return e.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM [dallas] YYYY',
          LLL: 'D. MMMM [dallas] YYYY HH.mm',
          LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(e) {
          return "d'o" === e.toLowerCase();
        },
        meridiem: function(e, a, n) {
          return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
        },
        calendar: {
          sameDay: '[oxhi à] LT',
          nextDay: '[demà à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[ieiri à] LT',
          lastWeek: '[sür el] dddd [lasteu à] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'osprei %s',
          past: 'ja%s',
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  160: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[asdkh g] LT',
          nextDay: '[aska g] LT',
          nextWeek: 'dddd [g] LT',
          lastDay: '[assant g] LT',
          lastWeek: 'dddd [g] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'dadkh s yan %s',
          past: 'yan %s',
          s: 'imik',
          ss: '%d imik',
          m: 'minuḍ',
          mm: '%d minuḍ',
          h: 'saɛa',
          hh: '%d tassaɛin',
          d: 'ass',
          dd: '%d ossan',
          M: 'ayowr',
          MM: '%d iyyirn',
          y: 'asgas',
          yy: '%d isgasn',
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  161: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
          nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
          nextWeek: 'dddd [ⴴ] LT',
          lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
          lastWeek: 'dddd [ⴴ] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
          past: 'ⵢⴰⵏ %s',
          s: 'ⵉⵎⵉⴽ',
          ss: '%d ⵉⵎⵉⴽ',
          m: 'ⵎⵉⵏⵓⴺ',
          mm: '%d ⵎⵉⵏⵓⴺ',
          h: 'ⵙⴰⵄⴰ',
          hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
          d: 'ⴰⵙⵙ',
          dd: '%d oⵙⵙⴰⵏ',
          M: 'ⴰⵢoⵓⵔ',
          MM: '%d ⵉⵢⵢⵉⵔⵏ',
          y: 'ⴰⵙⴳⴰⵙ',
          yy: '%d ⵉⵙⴳⴰⵙⵏ',
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  162: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
          LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
          LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), 'يېرىم كېچە' === a || 'سەھەر' === a || 'چۈشتىن بۇرۇن' === a ? e : 'چۈشتىن كېيىن' === a || 'كەچ' === a ? e + 12 : e >= 11 ? e : e + 12;
        },
        meridiem: function(e, a, n) {
          var t = 100 * e + a;
          return t < 600 ? 'يېرىم كېچە' : t < 900 ? 'سەھەر' : t < 1130 ? 'چۈشتىن بۇرۇن' : t < 1230 ? 'چۈش' : t < 1800 ? 'چۈشتىن كېيىن' : 'كەچ';
        },
        calendar: {
          sameDay: '[بۈگۈن سائەت] LT',
          nextDay: '[ئەتە سائەت] LT',
          nextWeek: '[كېلەركى] dddd [سائەت] LT',
          lastDay: '[تۆنۈگۈن] LT',
          lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s كېيىن',
          past: '%s بۇرۇن',
          s: 'نەچچە سېكونت',
          ss: '%d سېكونت',
          m: 'بىر مىنۇت',
          mm: '%d مىنۇت',
          h: 'بىر سائەت',
          hh: '%d سائەت',
          d: 'بىر كۈن',
          dd: '%d كۈن',
          M: 'بىر ئاي',
          MM: '%d ئاي',
          y: 'بىر يىل',
          yy: '%d يىل',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '-كۈنى';
            case 'w':
            case 'W':
              return e + '-ھەپتە';
            default:
              return e;
          }
        },
        preparse: function(e) {
          return e.replace(/،/g, ',');
        },
        postformat: function(e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  163: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';

      //! moment.js locale configuration
      function a(e, a) {
        var n = e.split('_');
        return a % 10 == 1 && a % 100 != 11 ? n[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? n[1] : n[2];
      }

      function n(e, n, t) {
        var i = {
          ss: n ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
          mm: n ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
          hh: n ? 'година_години_годин' : 'годину_години_годин',
          dd: 'день_дні_днів',
          MM: 'місяць_місяці_місяців',
          yy: 'рік_роки_років',
        };
        return 'm' === t ? (n ? 'хвилина' : 'хвилину') : 'h' === t ? (n ? 'година' : 'годину') : e + ' ' + a(i[t], +e);
      }

      function t(e, a) {
        var n,
          t = {
            nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
            accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
            genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_'),
          };
        return !0 === e
          ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1))
          : e
          ? ((n = /(\[[ВвУу]\]) ?dddd/.test(a) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(a) ? 'genitive' : 'nominative'), t[n][e.day()])
          : t.nominative;
      }

      function i(e) {
        return function() {
          return e + 'о' + (11 === this.hours() ? 'б' : '') + '] LT';
        };
      }

      return e.defineLocale('uk', {
        months: {
          format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
          standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
        },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: t,
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY р.',
          LLL: 'D MMMM YYYY р., HH:mm',
          LLLL: 'dddd, D MMMM YYYY р., HH:mm',
        },
        calendar: {
          sameDay: i('[Сьогодні '),
          nextDay: i('[Завтра '),
          lastDay: i('[Вчора '),
          nextWeek: i('[У] dddd ['),
          lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return i('[Минулої] dddd [').call(this);
              case 1:
              case 2:
              case 4:
                return i('[Минулого] dddd [').call(this);
            }
          },
          sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s',
          past: '%s тому',
          s: 'декілька секунд',
          ss: n,
          m: n,
          mm: n,
          h: 'годину',
          hh: n,
          d: 'день',
          dd: n,
          M: 'місяць',
          MM: n,
          y: 'рік',
          yy: n,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(e) {
          return /^(дня|вечора)$/.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 4 ? 'ночі' : e < 12 ? 'ранку' : e < 17 ? 'дня' : 'вечора';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return e + '-й';
            case 'D':
              return e + '-го';
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  164: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      //! moment.js locale configuration
      var a = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
        n = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
      return e.defineLocale('ur', {
        months: a,
        monthsShort: a,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm',
        },
        meridiemParse: /صبح|شام/,
        isPM: function(e) {
          return 'شام' === e;
        },
        meridiem: function(e, a, n) {
          return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
          sameDay: '[آج بوقت] LT',
          nextDay: '[کل بوقت] LT',
          nextWeek: 'dddd [بوقت] LT',
          lastDay: '[گذشتہ روز بوقت] LT',
          lastWeek: '[گذشتہ] dddd [بوقت] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s بعد',
          past: '%s قبل',
          s: 'چند سیکنڈ',
          ss: '%d سیکنڈ',
          m: 'ایک منٹ',
          mm: '%d منٹ',
          h: 'ایک گھنٹہ',
          hh: '%d گھنٹے',
          d: 'ایک دن',
          dd: '%d دن',
          M: 'ایک ماہ',
          MM: '%d ماہ',
          y: 'ایک سال',
          yy: '%d سال',
        },
        preparse: function(e) {
          return e.replace(/،/g, ',');
        },
        postformat: function(e) {
          return e.replace(/,/g, '،');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  165: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm',
        },
        calendar: {
          sameDay: '[Bugun soat] LT [da]',
          nextDay: '[Ertaga] LT [da]',
          nextWeek: 'dddd [kuni soat] LT [da]',
          lastDay: '[Kecha soat] LT [da]',
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: 'L',
        },
        relativeTime: {
          future: 'Yaqin %s ichida',
          past: 'Bir necha %s oldin',
          s: 'soniya',
          ss: '%d soniya',
          m: 'bir daqiqa',
          mm: '%d daqiqa',
          h: 'bir soat',
          hh: '%d soat',
          d: 'bir kun',
          dd: '%d kun',
          M: 'bir oy',
          MM: '%d oy',
          y: 'bir yil',
          yy: '%d yil',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  166: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm',
        },
        calendar: {
          sameDay: '[Бугун соат] LT [да]',
          nextDay: '[Эртага] LT [да]',
          nextWeek: 'dddd [куни соат] LT [да]',
          lastDay: '[Кеча соат] LT [да]',
          lastWeek: '[Утган] dddd [куни соат] LT [да]',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'Якин %s ичида',
          past: 'Бир неча %s олдин',
          s: 'фурсат',
          ss: '%d фурсат',
          m: 'бир дакика',
          mm: '%d дакика',
          h: 'бир соат',
          hh: '%d соат',
          d: 'бир кун',
          dd: '%d кун',
          M: 'бир ой',
          MM: '%d ой',
          y: 'бир йил',
          yy: '%d йил',
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  167: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('vi', {
        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split('_'),
        monthsParseExact: !0,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function(e) {
          return /^ch$/i.test(e);
        },
        meridiem: function(e, a, n) {
          return e < 12 ? (n ? 'sa' : 'SA') : n ? 'ch' : 'CH';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [năm] YYYY',
          LLL: 'D MMMM [năm] YYYY HH:mm',
          LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
          l: 'DD/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hôm nay lúc] LT',
          nextDay: '[Ngày mai lúc] LT',
          nextWeek: 'dddd [tuần tới lúc] LT',
          lastDay: '[Hôm qua lúc] LT',
          lastWeek: 'dddd [tuần trước lúc] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: '%s tới',
          past: '%s trước',
          s: 'vài giây',
          ss: '%d giây',
          m: 'một phút',
          mm: '%d phút',
          h: 'một giờ',
          hh: '%d giờ',
          d: 'một ngày',
          dd: '%d ngày',
          M: 'một tháng',
          MM: '%d tháng',
          y: 'một năm',
          yy: '%d năm',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  168: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('x-pseudo', {
        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: !0,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[T~ódá~ý át] LT',
          nextDay: '[T~ómó~rró~w át] LT',
          nextWeek: 'dddd [át] LT',
          lastDay: '[Ý~ést~érdá~ý át] LT',
          lastWeek: '[L~ást] dddd [át] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'í~ñ %s',
          past: '%s á~gó',
          s: 'á ~féw ~sécó~ñds',
          ss: '%d s~écóñ~ds',
          m: 'á ~míñ~úté',
          mm: '%d m~íñú~tés',
          h: 'á~ñ hó~úr',
          hh: '%d h~óúrs',
          d: 'á ~dáý',
          dd: '%d d~áýs',
          M: 'á ~móñ~th',
          MM: '%d m~óñt~hs',
          y: 'á ~ýéár',
          yy: '%d ý~éárs',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
          var a = e % 10;
          return e + (1 == ~~((e % 100) / 10) ? 'th' : 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th');
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  169: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Ònì ni] LT',
          nextDay: '[Ọ̀la ni] LT',
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: '[Àna ni] LT',
          lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
          sameElse: 'L',
        },
        relativeTime: {
          future: 'ní %s',
          past: '%s kọjá',
          s: 'ìsẹjú aayá die',
          ss: 'aayá %d',
          m: 'ìsẹjú kan',
          mm: 'ìsẹjú %d',
          h: 'wákati kan',
          hh: 'wákati %d',
          d: 'ọjọ́ kan',
          dd: 'ọjọ́ %d',
          M: 'osù kan',
          MM: 'osù %d',
          y: 'ọdún kan',
          yy: 'ọdún %d',
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: { dow: 1, doy: 4 },
      });
    });
  },
  170: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日Ah点mm分',
          LLLL: 'YYYY年M月D日ddddAh点mm分',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '下午' === a || '晚上' === a ? e + 12 : e >= 11 ? e : e + 12;
        },
        meridiem: function(e, a, n) {
          var t = 100 * e + a;
          return t < 600 ? '凌晨' : t < 900 ? '早上' : t < 1130 ? '上午' : t < 1230 ? '中午' : t < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: function(e) {
            return e.week() !== this.week() ? '[下]dddLT' : '[本]dddLT';
          },
          lastDay: '[昨天]LT',
          lastWeek: function(e) {
            return this.week() !== e.week() ? '[上]dddLT' : '[本]dddLT';
          },
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '周';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s后',
          past: '%s前',
          s: '几秒',
          ss: '%d 秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年',
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  171: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '中午' === a ? (e >= 11 ? e : e + 12) : '下午' === a || '晚上' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          var t = 100 * e + a;
          return t < 600 ? '凌晨' : t < 900 ? '早上' : t < 1200 ? '上午' : 1200 === t ? '中午' : t < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '週';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年',
        },
      });
    });
  },
  172: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('zh-mo', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'D/M/YYYY',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '中午' === a ? (e >= 11 ? e : e + 12) : '下午' === a || '晚上' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          var t = 100 * e + a;
          return t < 600 ? '凌晨' : t < 900 ? '早上' : t < 1130 ? '上午' : t < 1230 ? '中午' : t < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '週';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年',
        },
      });
    });
  },
  173: function(e, a, n) {
    !(function(e, a) {
      a(n(0));
    })(0, function(e) {
      'use strict';
      return e.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, a) {
          return 12 === e && (e = 0), '凌晨' === a || '早上' === a || '上午' === a ? e : '中午' === a ? (e >= 11 ? e : e + 12) : '下午' === a || '晚上' === a ? e + 12 : void 0;
        },
        meridiem: function(e, a, n) {
          var t = 100 * e + a;
          return t < 600 ? '凌晨' : t < 900 ? '早上' : t < 1130 ? '上午' : t < 1230 ? '中午' : t < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, a) {
          switch (a) {
            case 'd':
            case 'D':
            case 'DDD':
              return e + '日';
            case 'M':
              return e + '月';
            case 'w':
            case 'W':
              return e + '週';
            default:
              return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年',
        },
      });
    });
  },
  // 判断传入参数为数组则直接返回原参数, 否则不反悔
  174: function(e, a) {
    function n(e) {
      if (Array.isArray(e)) return e;
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  175: undefined,
  176: function(e, a) {
    function n(e, a) {
      var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != n) {
        var t,
          i,
          o = [],
          r = !0,
          s = !1;
        try {
          for (n = n.call(e); !(r = (t = n.next()).done) && (o.push(t.value), !a || o.length !== a); r = !0);
        } catch (e) {
          (s = !0), (i = e);
        } finally {
          try {
            r || null == n.return || n.return();
          } finally {
            if (s) throw i;
          }
        }
        return o;
      }
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  // 抛出解构数组出错提示
  177: function(e, a) {
    function n() {
      throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }

    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  178: undefined,
  179: undefined,
  180: undefined,
  181: undefined,
  182: undefined,
  183: undefined,
  184: undefined,
  185: undefined,
  186: undefined,
  187: undefined,
  188: undefined,
  189: undefined,
  190: function(e, a, n) {
    function t(e) {
      return n(i(e));
    }

    function i(e) {
      var a = o[e];
      if (!(a + 1)) throw new Error("Cannot find module '" + e + "'.");
      return a;
    }

    var o = {
      './af': 41,
      './af.js': 41,
      './ar': 48,
      './ar-dz': 42,
      './ar-dz.js': 42,
      './ar-kw': 43,
      './ar-kw.js': 43,
      './ar-ly': 44,
      './ar-ly.js': 44,
      './ar-ma': 45,
      './ar-ma.js': 45,
      './ar-sa': 46,
      './ar-sa.js': 46,
      './ar-tn': 47,
      './ar-tn.js': 47,
      './ar.js': 48,
      './az': 49,
      './az.js': 49,
      './be': 50,
      './be.js': 50,
      './bg': 51,
      './bg.js': 51,
      './bm': 52,
      './bm.js': 52,
      './bn': 53,
      './bn.js': 53,
      './bo': 54,
      './bo.js': 54,
      './br': 55,
      './br.js': 55,
      './bs': 56,
      './bs.js': 56,
      './ca': 57,
      './ca.js': 57,
      './cs': 58,
      './cs.js': 58,
      './cv': 59,
      './cv.js': 59,
      './cy': 60,
      './cy.js': 60,
      './da': 61,
      './da.js': 61,
      './de': 64,
      './de-at': 62,
      './de-at.js': 62,
      './de-ch': 63,
      './de-ch.js': 63,
      './de.js': 64,
      './dv': 65,
      './dv.js': 65,
      './el': 66,
      './el.js': 66,
      './en-au': 67,
      './en-au.js': 67,
      './en-ca': 68,
      './en-ca.js': 68,
      './en-gb': 69,
      './en-gb.js': 69,
      './en-ie': 70,
      './en-ie.js': 70,
      './en-il': 71,
      './en-il.js': 71,
      './en-in': 72,
      './en-in.js': 72,
      './en-nz': 73,
      './en-nz.js': 73,
      './en-sg': 74,
      './en-sg.js': 74,
      './eo': 75,
      './eo.js': 75,
      './es': 78,
      './es-do': 76,
      './es-do.js': 76,
      './es-us': 77,
      './es-us.js': 77,
      './es.js': 78,
      './et': 79,
      './et.js': 79,
      './eu': 80,
      './eu.js': 80,
      './fa': 81,
      './fa.js': 81,
      './fi': 82,
      './fi.js': 82,
      './fil': 83,
      './fil.js': 83,
      './fo': 84,
      './fo.js': 84,
      './fr': 87,
      './fr-ca': 85,
      './fr-ca.js': 85,
      './fr-ch': 86,
      './fr-ch.js': 86,
      './fr.js': 87,
      './fy': 88,
      './fy.js': 88,
      './ga': 89,
      './ga.js': 89,
      './gd': 90,
      './gd.js': 90,
      './gl': 91,
      './gl.js': 91,
      './gom-deva': 92,
      './gom-deva.js': 92,
      './gom-latn': 93,
      './gom-latn.js': 93,
      './gu': 94,
      './gu.js': 94,
      './he': 95,
      './he.js': 95,
      './hi': 96,
      './hi.js': 96,
      './hr': 97,
      './hr.js': 97,
      './hu': 98,
      './hu.js': 98,
      './hy-am': 99,
      './hy-am.js': 99,
      './id': 100,
      './id.js': 100,
      './is': 101,
      './is.js': 101,
      './it': 103,
      './it-ch': 102,
      './it-ch.js': 102,
      './it.js': 103,
      './ja': 104,
      './ja.js': 104,
      './jv': 105,
      './jv.js': 105,
      './ka': 106,
      './ka.js': 106,
      './kk': 107,
      './kk.js': 107,
      './km': 108,
      './km.js': 108,
      './kn': 109,
      './kn.js': 109,
      './ko': 110,
      './ko.js': 110,
      './ku': 111,
      './ku.js': 111,
      './ky': 112,
      './ky.js': 112,
      './lb': 113,
      './lb.js': 113,
      './lo': 114,
      './lo.js': 114,
      './lt': 115,
      './lt.js': 115,
      './lv': 116,
      './lv.js': 116,
      './me': 117,
      './me.js': 117,
      './mi': 118,
      './mi.js': 118,
      './mk': 119,
      './mk.js': 119,
      './ml': 120,
      './ml.js': 120,
      './mn': 121,
      './mn.js': 121,
      './mr': 122,
      './mr.js': 122,
      './ms': 124,
      './ms-my': 123,
      './ms-my.js': 123,
      './ms.js': 124,
      './mt': 125,
      './mt.js': 125,
      './my': 126,
      './my.js': 126,
      './nb': 127,
      './nb.js': 127,
      './ne': 128,
      './ne.js': 128,
      './nl': 130,
      './nl-be': 129,
      './nl-be.js': 129,
      './nl.js': 130,
      './nn': 131,
      './nn.js': 131,
      './oc-lnc': 132,
      './oc-lnc.js': 132,
      './pa-in': 133,
      './pa-in.js': 133,
      './pl': 134,
      './pl.js': 134,
      './pt': 136,
      './pt-br': 135,
      './pt-br.js': 135,
      './pt.js': 136,
      './ro': 137,
      './ro.js': 137,
      './ru': 138,
      './ru.js': 138,
      './sd': 139,
      './sd.js': 139,
      './se': 140,
      './se.js': 140,
      './si': 141,
      './si.js': 141,
      './sk': 142,
      './sk.js': 142,
      './sl': 143,
      './sl.js': 143,
      './sq': 144,
      './sq.js': 144,
      './sr': 146,
      './sr-cyrl': 145,
      './sr-cyrl.js': 145,
      './sr.js': 146,
      './ss': 147,
      './ss.js': 147,
      './sv': 148,
      './sv.js': 148,
      './sw': 149,
      './sw.js': 149,
      './ta': 150,
      './ta.js': 150,
      './te': 151,
      './te.js': 151,
      './tet': 152,
      './tet.js': 152,
      './tg': 153,
      './tg.js': 153,
      './th': 154,
      './th.js': 154,
      './tk': 155,
      './tk.js': 155,
      './tl-ph': 156,
      './tl-ph.js': 156,
      './tlh': 157,
      './tlh.js': 157,
      './tr': 158,
      './tr.js': 158,
      './tzl': 159,
      './tzl.js': 159,
      './tzm': 161,
      './tzm-latn': 160,
      './tzm-latn.js': 160,
      './tzm.js': 161,
      './ug-cn': 162,
      './ug-cn.js': 162,
      './uk': 163,
      './uk.js': 163,
      './ur': 164,
      './ur.js': 164,
      './uz': 166,
      './uz-latn': 165,
      './uz-latn.js': 165,
      './uz.js': 166,
      './vi': 167,
      './vi.js': 167,
      './x-pseudo': 168,
      './x-pseudo.js': 168,
      './yo': 169,
      './yo.js': 169,
      './zh-cn': 170,
      './zh-cn.js': 170,
      './zh-hk': 171,
      './zh-hk.js': 171,
      './zh-mo': 172,
      './zh-mo.js': 172,
      './zh-tw': 173,
      './zh-tw.js': 173,
    };
    (t.keys = function() {
      return Object.keys(o);
    }),
      (t.resolve = i),
      (e.exports = t),
      (t.id = 190);
  },
  191: undefined,
  192: undefined,
  193: function(e, a, n) {
    'use strict';
    n.d(a, 'a', function() {
      return o;
    });
    var t = n(17),
      i = n.n(t),
      o = function(e) {
        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'main',
          n = new MutationObserver(function(n) {
            n.forEach(function(n) {
              if ('childList' === n.type) {
                i()(n.addedNodes).forEach(function(n) {
                  n.id === a && (null === e || void 0 === e || e());
                });
              }
            });
          });
        return (
          n.observe(document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !1,
            characterData: !1,
          }),
          {
            observer: n,
            destroy: function() {
              n && n.disconnect();
            },
          }
        );
      };
  },
  // 收/发 message 消息控制层
  194: function(e, a, n) {
    'use strict';
    n.d(a, 'a', function() {
      return i;
    });
    var t = n(217),
      i = function(e) {
        var a = e.origin,
          i = n.i(t.a)({
            post: function(e) {
              return window.postMessage(e, '*');
            },
          }),
          o = i.receive,
          r = i.MessageHandler;
        return (
          window.addEventListener('message', function(e) {
            return o(e.data);
          }),
          r({ origin: a })
        );
      };
  },
  195: undefined,
  196: function(e, a, n) {
    'use strict';
    n.d(a, 'b', function() {
      return c;
    }),
      n.d(a, 'a', function() {
        return _;
      });
    var t = n(15),
      i = n.n(t),
      o = n(9),
      r = n.n(o),
      s = n(10),
      u = n.n(s),
      m = n(40),
      d = n(8),
      // 发送 message
      l = n(197),
      c = function() {
        var e = document.querySelector('#side img'),
          a = localStorage.getItem('last-wid') || sessionStorage.getItem('last-wid') || localStorage.getItem('last-wid-md') || sessionStorage.getItem('last-wid-md'),
          t = localStorage.getItem('RdmcuRv5GjbGrjZe7kKL/g==') || sessionStorage.getItem('RdmcuRv5GjbGrjZe7kKL/g==');
        return {
          userSnsId: a
            ? JSON.parse(a)
                .replace(/@c.us/, '')
                .replace(/:.*/, '')
            : '',
          userSnsAvatar: e ? n.i(m.a)(e.src) : '',
          userSnsNickname: t ? JSON.parse(t) : '',
        };
      },
      _ = (function() {
        var e = r()(
          u.a.mark(function e() {
            var a, t, o, r, s, c;
            return u.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      // 发送 message + 发送失败回调处理
                      n.i(d.b)(function() {
                        return n.i(l.a)();
                      })
                    );
                  case 2:
                    if (((a = e.sent), (t = i()(a, 1)), !(o = t[0]))) {
                      e.next = 8;
                      break;
                    }
                    return console.log('sns info by inject', o), e.abrupt('return', o);
                  case 8:
                    return (
                      (r = document.querySelector('div[aria-selected=true]')),
                      (s = r ? r.querySelector('span[title]').innerText || '' : ''),
                      (c = r ? r.querySelector('img') : null),
                      (o = {
                        snsId: h(),
                        snsAvatar: c ? n.i(m.a)(c.src) : '',
                        snsNickname: s,
                      }),
                      console.log('sns info by selected-dom', o),
                      e.abrupt('return', o)
                    );
                  case 14:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        );
        return function() {
          return e.apply(this, arguments);
        };
      })(),
      h = function() {
        var e = document.querySelector('[data-id]'),
          a = e ? e.dataset.id : '',
          n = a.split('@c.us');
        if (!a.includes('@broadcast') && !a.includes('@g.us')) {
          return n[0].replace(/false_|true_|grouped-sticker--/g, '');
        }
      };
  },
  // 定义"发送 message"相关方法
  197: function(e, a, n) {
    'use strict';
    n.d(a, 'a', function() {
      return o;
    }),
      n.d(a, 'b', function() {
        return r;
      }),
      n.d(a, 'c', function() {
        return s;
      });
    var t = n(194),
      i = n.i(t.a)({ origin: 'CONTENT_WHATSAPP' }),
      // 发送"获取当前会话数据" message
      o = function() {
        return new Promise(function(e) {
          i.send('GET_SNS_INFO', '', function(a, n, t) {
            (0, t.off)(), e(a);
          }),
            setTimeout(function() {
              return e(null);
            }, 2e3);
        });
      },
      r = function(e) {
        return new Promise(function(a) {
          i.send('GET_MESSAGE_AUDIO_BLOB_URL', e, function(e, n, t) {
            (0, t.off)(), a(e);
          }),
            setTimeout(function() {
              return a(null);
            }, 2e3);
        });
      },
      s = function(e) {
        return new Promise(function(a) {
          i.send('GET_MESSAGE_SEND_TIMESTAMP', e, function(e, n, t) {
            (0, t.off)(), a(e);
          }),
            setTimeout(function() {
              return a(null);
            }, 2e3);
        });
      };
  },
  198: undefined,
  199: undefined,
  200: undefined,
  201: undefined,
  202: undefined,
  203: undefined,
  204: undefined,
  205: undefined,
  206: undefined,
  207: undefined,
  208: undefined,
  209: undefined,
  210: undefined,
  211: undefined,
  212: undefined,
  213: undefined,
  214: undefined,
  215: undefined,
  216: undefined,
  // message 消息收发包装
  217: function(e, a, n) {
    'use strict';
    n.d(a, 'a', function() {
      return u;
    });
    var t = n(15),
      i = n.n(t),
      o = n(8),
      r = function() {
        return Math.random().toString();
      },
      s = function(e) {
        return 'string' == typeof e && e.startsWith('0.');
      },
      u = function(e) {
        var a = e.post,
          t = void 0 === a ? function(e) {} : a,
          u = e.timeout,
          m = void 0 === u ? 1e4 : u,
          d = {},
          l = {};
        return {
          receive: function(e) {
            if (s(null === e || void 0 === e ? void 0 : e.uid)) {
              var a = e.uid,
                r = e.origin,
                u = e.key,
                m = e.value;
              if ('receive send' === e.type) {
                var c = m,
                  _ = i()(c, 2),
                  h = _[0],
                  p = _[1],
                  f = l[e.uid];
                return void (f && f(h, p));
              }
              Object.values(d[u] || {}).forEach(function(e) {
                n.i(o.b)(function() {
                  return e(m, { origin: r });
                }).then(function(e) {
                  t({ type: 'receive send', uid: a, origin: r, value: e });
                });
              });
            }
          },
          MessageHandler: function(e) {
            var a = e.origin;
            return {
              on: function(e, a) {
                var n = r(),
                  t = d[e] || {};
                return (
                  (d[e] = t),
                  (t[n] = a),
                  function() {
                    delete t[n];
                  }
                );
              },
              send: function(e, n, i) {
                var o = { uid: r(), key: e, value: n, origin: a };
                if ((t(o), i)) {
                  var s,
                    u = function() {
                      clearTimeout(s), delete l[o.uid];
                    };
                  return (
                    (l[o.uid] = function(e, n) {
                      return i(e, n, { off: u, origin: a });
                    }),
                    (s = setTimeout(function() {
                      return u();
                    }, m)),
                    u
                  );
                }
                return function() {};
              },
            };
          },
        };
      };
  },
  218: undefined,
  219: undefined,
  220: undefined,
  221: undefined,
  222: undefined,
  223: undefined,
  224: undefined,
  225: undefined,
  226: undefined,
  227: undefined,
  228: undefined,
  229: undefined,
  230: undefined,
  231: undefined,
  232: undefined,
  233: undefined,
  234: undefined,
  235: undefined,
  236: undefined,
  237: undefined,
  238: undefined,
  239: undefined,
  240: undefined,
  241: undefined,
  242: undefined,
  243: undefined,
  244: undefined,
  245: undefined,
  246: undefined,
  247: undefined,
  248: undefined,
  249: undefined,
  250: undefined,
  251: undefined,
  252: undefined,
  253: undefined,
  254: undefined,
  255: undefined,
  256: undefined,
  257: undefined,
  258: undefined,
  259: undefined,
  // 监听 message , 实现插入话术
  260: function(e, a, n) {
    'use strict';
    n.d(a, 'a', function() {
      return h;
    });
    var t = n(15),
      i = n.n(t),
      o = n(9),
      r = n.n(o),
      s = n(10),
      u = n.n(s),
      m = n(29),
      d = (n.n(m), n(196)),
      l = n(8),
      c = function() {
        var e = document.querySelector('.selectable-text[spellcheck="true"][role="textbox"][dir="ltr"]'),
          a = document.querySelector('#main footer > .copyable-area .selectable-text');
        return e || ('P' === (null === a || void 0 === a ? void 0 : a.tagName) ? a.parentNode : a);
      },
      _ = function(e) {
        var a = Object.keys(e || {}),
          n = a.find(function(e) {
            return e.includes('reactEventHandlers') || e.includes('reactProps');
          });
        return n ? e[n] : null;
      },
      h = n.i(m.debounce)(
        r()(
          u.a.mark(function e() {
            var a, t, o, r, s, m, c, _, h, p, f, k, g;
            return u.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      n.i(l.b)(function() {
                        return n.i(d.a)();
                      }, {})
                    );
                  case 2:
                    (a = e.sent),
                      (t = i()(a, 1)),
                      (o = t[0]),
                      (r = o.snsId),
                      (s = void 0 === r ? '' : r),
                      (m = o.snsAvatar),
                      (c = void 0 === m ? '' : m),
                      (_ = o.snsNickname),
                      (h = void 0 === _ ? '' : _),
                      (p = n.i(d.b)()),
                      (f = p.userSnsId),
                      (k = p.userSnsAvatar),
                      (g = p.userSnsNickname),
                      window.parent.postMessage(
                        {
                          type: 'WHATSAPP_CHANGE_USER',
                          data: {
                            snsId: s,
                            snsAvatar: c,
                            snsNickname: h,
                            userSnsId: f,
                            userSnsAvatar: k,
                            userSnsNickname: g,
                          },
                        },
                        '*'
                      );
                  case 13:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )
      ),
      p = function(e) {
        return (e || '').replace(/<\/?[a-zA-Z]+(\s+[a-zA-Z]+=".*")*>/g, '');
      },
      insertContentToInputArea = function(e, a) {
        var n,
          t = c();
        if (t && t.previousElementSibling) {
          var i,
            o,
            r = null === (i = _(t.parentElement)) || void 0 === i ? void 0 : null === (o = i.children) || void 0 === o ? void 0 : o[1].props;
          t.previousElementSibling.style.visibility = 'hidden';
          var s = t.innerText || '',
            u = p(e);
          (t.innerText = a ? u : s + u), r.onInput(new InputEvent(''));
        } else if ('P' === (null === t || void 0 === t ? void 0 : null === (n = t.children[0]) || void 0 === n ? void 0 : n.tagName)) {
          var m = null === t || void 0 === t ? void 0 : t.children[0],
            d = m.innerText || '\n' == m.innerText ? '' : m.innerText,
            l = p(e),
            h = a ? l : d + l,
            f = new Event('paste');
          (f.clipboardData = f.clipboardData || {}),
            (f.clipboardData.getData = function() {
              return h;
            }),
            t.dispatchEvent(f);
        }
      },
      insertVerbal = function(e) {
        insertContentToInputArea(e.orderContext);
      },
      g = function e(a) {
        var n,
          t = c(),
          i = t.innerText || '',
          o = window.localStorage.getItem('trade_document_info'),
          r = JSON.parse(null !== o && void 0 !== o ? o : '{}');
        i.includes(null === r || void 0 === r ? void 0 : r.url) &&
          '' !== r.url &&
          window.parent.postMessage({ type: 'WHATSAPP_SEND_CUSTOMER_DOCUMENT', data: { document_info: r } }, '*'),
          window.localStorage.removeItem('trade_document_info'),
          null === (n = a.target) || void 0 === n || n.removeEventListener('click', e);
      },
      y = function(e) {
        var a;
        insertContentToInputArea(e.url, !0), window.localStorage.setItem('trade_document_info', JSON.stringify(e));
        var n = document.querySelector('span[data-testid="send"][data-icon="send"]'),
          t = null === n || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement;
        null === t || void 0 === t || t.addEventListener('click', g);
      },
      M = function() {
        var e = c();
        'false' === e.getAttribute('contenteditable') && e.setAttribute('contenteditable', !0);
      },
      j = function() {
        var e = c();
        e.setAttribute('contenteditable', !1), e.addEventListener('click', M);
      };
    // message 监听
    window.addEventListener('message', function(e) {
      var msgData = e.data;
      'ORDER_INTRO_CONTEXT' === msgData.type
        ? insertVerbal(null === msgData || void 0 === msgData ? void 0 : msgData.data)
        : 'TRADE_DOCUMENT_CONTENT' === msgData.type
        ? y(null === msgData || void 0 === msgData ? void 0 : msgData.data)
        : 'CLEAR_WHATS_APP_CONTENT_EDITABLE' === msgData.type && j();
    });
  },
  261: undefined,
  262: undefined,
  263: undefined,
  264: undefined,
  265: undefined,
  266: undefined,
  267: undefined,
  268: undefined,
  269: undefined,
  270: undefined,
  271: undefined,
  272: undefined,
  273: undefined,
  274: undefined,
  275: undefined,
  276: undefined,
  277: undefined,
  278: undefined,
  279: undefined,
  280: undefined,
  281: undefined,
  282: undefined,
  283: undefined,
  284: undefined,
  285: undefined,
  286: undefined,
  287: undefined,
  288: undefined,
  289: undefined,
  290: undefined,
  291: undefined,
  292: undefined,
  293: undefined,
  294: undefined,
  295: undefined,
  296: undefined,
  297: undefined,
  298: undefined,
  299: undefined,
  300: undefined,
  301: undefined,
  302: undefined,
  303: undefined,
  304: undefined,
  305: undefined,
  306: undefined,
  307: undefined,
  308: undefined,
  309: undefined,
  310: undefined,
  311: undefined,
  312: undefined,
  313: undefined,
  314: undefined,
  315: undefined,
  316: undefined,
  317: undefined,
  318: undefined,
  319: undefined,
  320: undefined,
  321: undefined,
  322: undefined,
  323: undefined,
  324: undefined,
  325: undefined,
  326: undefined,
  327: undefined,
  328: undefined,
  329: undefined,
  330: undefined,
  331: undefined,
  332: undefined,
  333: undefined,
  334: undefined,
  335: undefined,
  336: undefined,
  337: undefined,
  338: undefined,
  339: undefined,
  340: undefined,
  341: undefined,
  342: undefined,
  343: undefined,
  344: undefined,
  345: undefined,
  346: undefined,
  347: undefined,
  348: undefined,
  349: undefined,
  350: undefined,
  351: undefined,
  352: undefined,
  353: undefined,
  354: undefined,
  355: undefined,
  356: undefined,
  357: undefined,
  358: undefined,
  359: undefined,
  360: undefined,
  361: undefined,
  362: undefined,
  363: undefined,
  364: undefined,
  365: undefined,
  366: undefined,
  367: undefined,
  368: undefined,
  369: undefined,
  370: undefined,
  371: undefined,
  372: undefined,
  373: undefined,
  374: undefined,
  375: undefined,
  376: undefined,
  377: undefined,
  378: undefined,
  379: undefined,
  380: undefined,
  381: undefined,
  382: undefined,
  383: undefined,
  384: undefined,
  385: undefined,
  386: undefined,
  387: function(e, a, n) {
    'use strict';
    Object.defineProperty(a, '__esModule', { value: !0 });
    var t = n(40),
      i = n(194),
      o = n(193),
      r = n(260),
      s = function(e) {
        if (!e) return null;
        var a = Object.keys(e || {}),
          n = a.find(function(e) {
            return e.includes('reactEventHandlers') || e.includes('reactProps');
          });
        return n ? e[n] : null;
      },
      u = function() {
        var e,
          a,
          i,
          o,
          r = document.querySelector('#main header');
        if (!r) return null;
        var u = r.querySelector('span[title][dir="auto"]'),
          m =
            null === (e = s(null === u || void 0 === u ? void 0 : u.parentElement)) || void 0 === e
              ? void 0
              : null === (a = e.children) || void 0 === a
              ? void 0
              : null === (i = a.props) || void 0 === i
              ? void 0
              : i.chat,
          d = null === m || void 0 === m ? void 0 : null === (o = m.id) || void 0 === o ? void 0 : o.user;
        if (null === m || void 0 === m || !m.isUser || !d) return null;
        var l = m.formattedTitle || m.name || '',
          c = r.querySelector('img');
        return { snsId: d, snsAvatar: c ? n.i(t.a)(c.src) : '', snsNickname: l };
      },
      m = function(e) {
        if (!e) return '';
        document.querySelector('div[data-id="'.concat(e, '"]'));
        return '';
      },
      d = function(e) {
        var a, n, t;
        if (!e) return '';
        var i = document.querySelector('div[data-id="'.concat(e, '"]'));
        if (!i) return '';
        var o = i.querySelector('div[data-testid="msg-meta"]'),
          r =
            null === (a = s(null === o || void 0 === o ? void 0 : o.parentNode)) || void 0 === a
              ? void 0
              : null === (n = a.children) || void 0 === n
              ? void 0
              : null === (t = n.props) || void 0 === t
              ? void 0
              : t.msg;
        if (r) {
          var u,
            m,
            d =
              null !== (u = null === r || void 0 === r ? void 0 : null === (m = r.$ProxyState$state) || void 0 === m ? void 0 : m.__x_t) && void 0 !== u
                ? u
                : null === r || void 0 === r
                ? void 0
                : r.__x_t;
          if ('number' == typeof d) return Number(d + '000');
        }
        return '';
      },
      l = n.i(i.a)({ origin: 'INJECT_WHATSAPP' });
    l.on('GET_SNS_INFO', function() {
      return u();
    }),
      l.on('GET_MESSAGE_AUDIO_BLOB_URL', function(e) {
        return m(e);
      }),
      l.on('GET_MESSAGE_SEND_TIMESTAMP', function(e) {
        return d(e);
      });
    var c = null;
    'is_anivia' === new URL(window.location.href).searchParams.get('iframe_channel') && (c = n.i(o.a)(r.a).destroy),
      (window.onunload = function() {
        var e;
        null === (e = c) || void 0 === e || e();
      });
  },
});
