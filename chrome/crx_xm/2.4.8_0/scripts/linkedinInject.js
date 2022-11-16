!(function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var r = {};
  (t.m = e),
    (t.c = r),
    (t.i = function(e) {
      return e;
    }),
    (t.d = function(e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ''),
    t((t.s = 381));
})({
  381: function(e, t) {
    var r = function() {
      var e = /^\/voyager\/api\/identity\/profiles\/(.+?)\/profileView$/,
        t = /^\/voyager\/api\/identity\/profiles\/(.+?)\/profileContactInfo$/,
        r = /^\/voyager\/api\/search\/cluster/;
      window.jQuery(document).ajaxSuccess(function(n, o, i) {
        return i.url.match(e)
          ? void window.postMessage({ type: 'LINKEDIN_PEOPLE', data: JSON.parse(o.responseText) }, '*')
          : i.url.match(t)
          ? void window.postMessage({ type: 'LINKEDIN_PEOPLE_CONTACT_INFO', data: JSON.parse(o.responseText) }, '*')
          : void (i.url.match(r) && window.postMessage({ type: 'LINKEDIN_SEARCH_PEOPLE', data: JSON.parse(o.responseText) }, '*'));
      });
    };
    if (window.jQuery) r();
    else {
      var n;
      Object.defineProperty(window, 'jQuery', {
        set: function(e) {
          (n = e), r();
        },
        get: function() {
          return n;
        },
      });
    }
  },
});
