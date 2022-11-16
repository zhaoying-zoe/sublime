!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.i = function(e) {
      return e;
    }),
    (t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, 'a', n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ''),
    t((t.s = 375));
})({
  14: function(e, t) {
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  16: function(e, t, n) {
    function r(e, t) {
      if (e) {
        if ('string' == typeof e) return o(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        );
      }
    }
    var o = n(14);
    (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  17: function(e, t, n) {
    function r(e) {
      return o(e) || u(e) || a(e) || i();
    }
    var o = n(30),
      u = n(31),
      a = n(16),
      i = n(32);
    (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  200: function(e, t, n) {
    'use strict';
    n.d(t, 'a', function() {
      return a;
    }),
      n.d(t, 'b', function() {
        return i;
      }),
      n.d(t, 'c', function() {
        return c;
      }),
      n.d(t, 'g', function() {
        return l;
      }),
      n.d(t, 'f', function() {
        return p;
      }),
      n.d(t, 'd', function() {
        return f;
      }),
      n.d(t, 'e', function() {
        return d;
      });
    var r = n(27),
      o = n.n(r),
      u = function(e) {
        return e.includes('onetalk.alibaba.com/message/weblitePWA.htm');
      },
      a = function(e) {
        if (u(e)) {
          var t = e.match(/relevanceAccountId=(\d+)/);
          return t ? t[1] : '';
        }
        return '';
      },
      i = function(e) {
        return function() {
          var t = Array.prototype.slice.call(arguments);
          return new Promise(function(n, r) {
            e.apply(null, t.concat([n]));
          });
        };
      },
      s = function(e) {
        return (e.secure ? 'https' : 'http') + '://' + e.domain.replace(/^\./, '');
      },
      c = function(e) {
        return Promise.all(
          e.map(function(e) {
            return i(chrome.cookies.remove)({ url: s(e), name: e.name, storeId: e.storeId });
          })
        );
      },
      l = function(e) {
        return Promise.all(
          e.map(function(e) {
            var t = {
              url: s(e),
              name: e.name,
              value: e.value,
              domain: e.domain,
              path: e.path,
              secure: e.secure,
              httpOnly: e.httpOnly,
              expirationDate: e.expirationDate,
              storeId: e.storeId,
            };
            return e.secure && (t.sameSite = 'no_restriction'), i(chrome.cookies.set)(t);
          })
        );
      },
      p = function() {
        return new Promise(function(e) {
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function(t) {
            e(t.length ? t[0] : null);
          });
        });
      },
      f = function(e) {
        return null !== e && 'object' === o()(e);
      },
      d = function(e, t) {
        var n = null;
        return function() {
          for (var r = this, o = arguments.length, u = new Array(o), a = 0; a < o; a++) u[a] = arguments[a];
          clearTimeout(n),
            (n = setTimeout(function() {
              e.apply(r, u);
            }, t));
        };
      };
  },
  27: function(e, t) {
    function n(t) {
      '@babel/helpers - typeof';
      return (
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? ((e.exports = n = function(e) {
              return typeof e;
            }),
            (e.exports.default = e.exports),
            (e.exports.__esModule = !0))
          : ((e.exports = n = function(e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
            (e.exports.default = e.exports),
            (e.exports.__esModule = !0)),
        n(t)
      );
    }
    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  30: function(e, t, n) {
    function r(e) {
      if (Array.isArray(e)) return o(e);
    }
    var o = n(14);
    (e.exports = r), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  31: function(e, t) {
    function n(e) {
      if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
    }
    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  32: function(e, t) {
    function n() {
      throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  375: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(17),
      o = n.n(r),
      u = n(200),
      a = window.open.bind(window);
    window.open = function() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      var o = n.i(u.a)(t[0]);
      if (!o) return a.apply(void 0, t);
      window.postMessage({ type: 'IS-OpenAlibaba', mode: 'open', data: { args: t, relevanceAccountId: o } }, '*');
    };
    var i = null;
    (window.__XM_ASSISTANT_COVER_COOKIES__ = function(e) {
      return new Promise(function(t) {
        (i = t), window.postMessage({ type: 'IS-OpenAlibaba', mode: 'other', data: { relevanceAccountId: e } }, '*');
      });
    }),
      window.addEventListener('message', function(e) {
        if ('CS-OpenAlibaba' === e.data.type) {
          var t = e.data.mode;
          'open' === t ? a.apply(void 0, o()(e.data.data.args)) : 'other' === t && i && (i(), (i = null));
        }
      });
  },
});
