!(function(e) {
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  var t = {};
  (n.m = e),
    (n.c = t),
    (n.i = function(e) {
      return e;
    }),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (n.p = ''),
    n((n.s = 373));
})({
  373: function(e, n) {
    window.addEventListener('message', function(e) {
      'CS-RequestVersion' === e.data.type && (window.__XM_ASSISTANT_VERSION__ = e.data.version);
    }),
      window.postMessage({ type: 'IS-RequestVersion' }, '*');
  },
});
