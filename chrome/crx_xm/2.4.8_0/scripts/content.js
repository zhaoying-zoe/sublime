!(function(n) {
  function t(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  var e = {};
  (t.m = n),
    (t.c = e),
    (t.i = function(n) {
      return n;
    }),
    (t.d = function(n, e, o) {
      t.o(n, e) || Object.defineProperty(n, e, { configurable: !1, enumerable: !0, get: o });
    }),
    (t.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return t.d(e, 'a', e), e;
    }),
    (t.o = function(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (t.p = ''),
    t((t.s = 377));
})({
  1: function(n, t) {
    function e(n, t, e) {
      return t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (n[t] = e), n;
    }
    (n.exports = e), (n.exports.default = n.exports), (n.exports.__esModule = !0);
  },
  2: function(n, t, e) {
    'use strict';
    e.d(t, 'm', function() {
      return o;
    }),
      e.d(t, 'A', function() {
        return r;
      }),
      e.d(t, 'C', function() {
        return i;
      }),
      e.d(t, 'B', function() {
        return u;
      }),
      e.d(t, 'n', function() {
        return a;
      }),
      e.d(t, 'o', function() {
        return c;
      }),
      e.d(t, 'p', function() {
        return d;
      }),
      e.d(t, 'q', function() {
        return s;
      }),
      e.d(t, 'r', function() {
        return f;
      }),
      e.d(t, 's', function() {
        return l;
      }),
      e.d(t, 't', function() {
        return m;
      }),
      e.d(t, 'u', function() {
        return v;
      }),
      e.d(t, 'v', function() {
        return p;
      }),
      e.d(t, 'w', function() {
        return _;
      }),
      e.d(t, 'x', function() {
        return E;
      }),
      e.d(t, 'e', function() {
        return I;
      }),
      e.d(t, 'd', function() {
        return h;
      }),
      e.d(t, 'f', function() {
        return g;
      }),
      e.d(t, 'b', function() {
        return T;
      }),
      e.d(t, 'i', function() {
        return y;
      }),
      e.d(t, 'g', function() {
        return A;
      }),
      e.d(t, 'h', function() {
        return x;
      }),
      e.d(t, 'j', function() {
        return R;
      }),
      e.d(t, 'k', function() {
        return L;
      }),
      e.d(t, 'G', function() {
        return N;
      }),
      e.d(t, 'H', function() {
        return O;
      }),
      e.d(t, 'I', function() {
        return P;
      }),
      e.d(t, 'J', function() {
        return w;
      }),
      e.d(t, 'K', function() {
        return C;
      }),
      e.d(t, 'y', function() {
        return b;
      }),
      e.d(t, 'l', function() {
        return S;
      }),
      e.d(t, 'z', function() {
        return k;
      }),
      e.d(t, 'D', function() {
        return D;
      }),
      e.d(t, 'F', function() {
        return M;
      }),
      e.d(t, 'a', function() {
        return F;
      }),
      e.d(t, 'c', function() {
        return H;
      }),
      e.d(t, 'E', function() {
        return W;
      }),
      e.d(t, 'L', function() {
        return B;
      });
    var o = 'FINDER_SWITCH',
      r = 'FINDER_POSITION',
      i = 'FINDER_FULL_VIEW',
      u = 'FINDER_AUTO_MODE',
      a = 'FINDER_COUNT',
      c = 'FINDER_RECENTLY',
      d = 'FINDER_URL',
      s = 'FINDER_PHONE_SWITCH',
      f = 'FINDER_PHONE_COUNT',
      l = 'FINDER_PHONE_RECENTLY',
      m = 'FINDER_PHONE_URL',
      v = 'DELIVERY_SWITCH',
      p = 'DELIVERY_LATEST_MAIL_TITLE',
      _ = 'DELIVERY_LAST_MAIL_TIME',
      E = 'PROXY_SWITCH',
      I = 'ORDER_GUIDE_SWITCH',
      h = 'WHATSAPP_SWITCH',
      g = 'WHATSAPP_STATUS',
      T = 'ALIBABA_LOGIN_SWITCH',
      y = 'pskey',
      A = 'account',
      x = 'is_login',
      R = 'is_ames',
      L = 'is_dx_v2',
      N = 'delivery_version',
      O = 'delivery_update_version',
      P = 'delivery_update_url',
      w = 'delivery_is_force',
      C = 'version',
      b = 'update_version',
      S = 'update_url',
      k = 'is_force_update',
      D = 'uuid',
      M = 'alibaba_login_cookies',
      F = 'COVER_ALIBABA_COOKIES',
      H = 'SENTRY_REPORT',
      W = { AMES_FREE: 17, SMART: 13, LITE: 15, CRM_PLUS: 9, LITE_2021: 16 },
      B = { GETTING: 'GETTING', MONITORING: 'MONITORING', FAIL: 'FAIL', STOPPED: 'STOPPED' };
  },
  262: function(n, t) {},
  377: function(n, t, e) {
    'use strict';
    function o(n) {
      var t = document.createElement('div');
      return (t.innerHTML = n.trim()), t.firstChild;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = e(2),
      i = e(5),
      u = e(262);
    e.n(u);
    !(function() {
      var n = window.location.host;
      if ('xiaoman.cn' === n || n.endsWith('.xiaoman.cn') || 'work.okki.com' === n) {
        var t = function() {
          var n = window.localStorage.promoteXiaomanVersion;
          if (!(n && n >= 1) && 'bestmail.xiaoman.cn' !== window.location.hostname) {
            var t = o(
              '\n<div id="promote-xiaoman" class="promote-xiaoman" title="下载桌面端">\n  <div id="promote-xiaoman-mask" class="dialog-mask"></div>\n  <div class="dialog">\n    <div id="promote-xiaoman-close" class="dialog-close">\n      &times;\n    </div>\n    <div class="dialog-content">\n      小满桌面端全新升级，极速收发邮件，智能识别联系人，轻松管理客户，让工作更简单！\n    </div>\n    <div class="dialog-footer">\n      <a id="promote-xiaoman-ok" class="dialog-ok"\n        href="https://bestmail.xiaoman.cn/"\n        target="_blank"\n        >\n        立即下载使用\n      </a>\n    </div>\n  </div>\n</div>\n'
            );
            document.body.appendChild(t);
            var e = function() {
                t.remove(), (window.localStorage.promoteXiaomanVersion = 1);
              },
              r = document.getElementById('promote-xiaoman-mask'),
              i = document.getElementById('promote-xiaoman-close'),
              u = document.getElementById('promote-xiaoman-ok');
            r.addEventListener('click', e), i.addEventListener('click', e), u.addEventListener('click', e);
          }
        };
        !(function() {
          if (!document.getElementById('popup-xiaoman')) {
            var n = o('\n<div id="popup-xiaoman" class="popup-xiaoman" title="启动桌面端">\n  <div class="icon"></div>\n</div>\n');
            n.addEventListener('click', function() {
              n.getAttribute('status') || window.open('https://bestmail.xiaoman.cn/'), e.postMessage({ cmd: 'app', action: 'popup' });
            }),
              n.addEventListener('mouseover', function() {
                'ready' !== n.getAttribute('status') && e.postMessage({ cmd: 'app', action: 'connect' });
              }),
              document.body.appendChild(n),
              (window.patchPromoteXiaoman = t);
            var e = chrome.runtime.connect({ name: 'irelia' });
            e.onMessage.addListener(function(t) {
              var e = t.cmd,
                o = t.action,
                r = t.data;
              if ('connection' === e && 'status' === o) {
                var i = { '': { title: '下载桌面端' }, connect: { title: '启动桌面端' }, ready: { title: '打开桌面端' } },
                  u = i[r];
                if (!u) return void console.warn('invalid status', r);
                n.setAttribute('status', r), n.setAttribute('title', u.title);
              }
            });
          }
        })();
      }
    })();
    var a = 'ExtensionCheck_XiaomanAssistant_Update',
      c = function() {
        if (!document.querySelector('#' + a)) {
          var n = document.createElement('div');
          (n.id = a), document.head.appendChild(n);
        }
      },
      d = function() {
        var n = document.querySelector('#' + a);
        n && n.parentNode.removeChild(n);
      };
    !(function() {
      var n = document.createElement('div');
      (n.id = 'ExtensionCheck_XiaomanAssistant_Installed'), document.head.appendChild(n);
    })(),
      chrome.storage.onChanged.addListener(function(n) {
        r.y in n &&
          i.e([r.y]).then(function(n) {
            n[r.y] ? c() : d();
          }),
          r.e in n && f();
      });
    var s = 'ExtensionCheck_XiaomanAssistant_Whatsapp_Installed',
      f = function() {
        var n = window.location.host;
        ('xiaoman.cn' === n || n.endsWith('.xiaoman.cn') || 'work.okki.com' === n) &&
          i.a([r.e]).then(function(n) {
            if (n[r.e]) {
              var t = document.createElement('div');
              (t.id = s), document.head.appendChild(t);
            } else {
              var e = document.querySelector('#' + s);
              e && e.parentNode.removeChild(e);
            }
          });
      };
    f();
  },
  5: function(n, t, e) {
    'use strict';
    function o() {
      return chrome.runtime.getManifest().version;
    }
    e.d(t, 'e', function() {
      return d;
    }),
      e.d(t, 'h', function() {
        return s;
      }),
      e.d(t, 'c', function() {
        return f;
      }),
      e.d(t, 'a', function() {
        return l;
      }),
      e.d(t, 'd', function() {
        return m;
      }),
      e.d(t, 'g', function() {
        return v;
      }),
      e.d(t, 'f', function() {
        return p;
      }),
      e.d(t, 'j', function() {
        return _;
      }),
      e.d(t, 'i', function() {
        return E;
      }),
      (t.b = o);
    var r = e(1),
      i = e.n(r),
      u = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'local',
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new Promise(function(e, o) {
          chrome.storage[n].get(t, function(n) {
            e(n);
          });
        });
      },
      a = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'local',
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new Promise(function(e, o) {
          chrome.storage[n].set(t, function(n) {
            e(n);
          });
        });
      },
      c = function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'local',
          t = arguments.length > 1 ? arguments[1] : void 0;
        return new Promise(function(e, o) {
          chrome.storage[n].remove(t, function(n) {
            e(n);
          });
        });
      },
      d = function(n) {
        return u('local', Array.isArray(n) ? n : [n]);
      },
      s = function(n) {
        return c('local', Array.isArray(n) ? n : [n]);
      },
      f = function(n) {
        return a('local', n);
      },
      l = function(n) {
        return u('sync', Array.isArray(n) ? n : [n]);
      },
      m = function(n) {
        return a('sync', n);
      },
      v = function(n) {
        return Promise.all(n).then(function(n) {
          return n.reduce(function(n, t) {
            return Object.assign(n, t);
          }, {});
        });
      },
      p = function(n, t) {
        return new Promise(function(e, o) {
          var r = { cmd: 'API', body: { api: n, data: t } };
          chrome.extension.sendRequest(r, function(n) {
            0 === n.code ? e(n.data) : o(n.data);
          });
        });
      },
      _ = function(n) {
        chrome.extension.sendRequest({ cmd: 'OPEN_TAB', body: n });
      },
      E = function(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2592e5;
        return function(e) {
          for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) r[u - 1] = arguments[u];
          var a = function(n) {
            return f(i()({}, e, { create: Date.now(), data: n }));
          };
          return d(e).then(function(o) {
            var i = o[e];
            if (i && Date.now() <= i.create + t) return i.data;
            var u = n.apply(void 0, r);
            return (
              u.then || (u = Promise.resolve(u)),
              u.then(function(n) {
                return a(n), n;
              })
            );
          });
        };
      };
  },
});
