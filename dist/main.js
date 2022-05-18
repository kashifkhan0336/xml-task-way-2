(() => {
  "use strict";
  var t = {
      710: (t, e, n) => {
        n.d(e, { Z: () => i });
        var r = n(532),
          a = n.n(r),
          o = n(329),
          s = n.n(o)()(a());
        s.push([
          t.id,
          "table,\r\nth,\r\ntd {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  border: 1px solid black;\r\n}\r\n",
          "",
        ]);
        const i = s;
      },
      329: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, a, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (s[l] = !0);
                }
              for (var d = 0; d < t.length; d++) {
                var p = [].concat(t[d]);
                (r && s[p[0]]) ||
                  (void 0 !== o &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = o)),
                  n &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = n))
                      : (p[2] = n)),
                  a &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = a))
                      : (p[4] = "".concat(a))),
                  e.push(p));
              }
            }),
            e
          );
        };
      },
      532: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      870: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, s = [], i = 0; i < t.length; i++) {
            var l = t[i],
              d = r.base ? l[0] + r.base : l[0],
              p = o[d] || 0,
              c = "".concat(d, " ").concat(p);
            o[d] = p + 1;
            var u = n(c),
              m = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(m);
            else {
              var f = a(m, r);
              (r.byIndex = i),
                e.splice(i, 0, { identifier: c, updater: f, references: 1 });
            }
            s.push(c);
          }
          return s;
        }
        function a(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var o = r((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < o.length; s++) {
              var i = n(o[s]);
              e[i].references--;
            }
            for (var l = r(t, a), d = 0; d < o.length; d++) {
              var p = n(o[d]);
              0 === e[p].references && (e[p].updater(), e.splice(p, 1));
            }
            o = l;
          };
        };
      },
      103: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      626: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      341: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      822: (t) => {
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      828: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      const t =
        '<?xml version="1.0" encoding="UTF-8"?>\r\n<persons xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r\n xsi:noNamespaceSchemaLocation="index.xsd">\r\n\t<person>\r\n\t\t<first-name>Zelda</first-name>\r\n\t\t<last-name>Xena</last-name>\r\n\t\t<phone>1-979-333-5341</phone>\r\n\t\t<email>malesuada.id@protonmail.ca</email>\r\n\t\t<address>P.O. Box 316, 2251 Dapibus Street</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Thaddeus</first-name>\r\n\t\t<last-name>Piper</last-name>\r\n\t\t<phone>(135) 610-9346</phone>\r\n\t\t<email>auctor.nunc.nulla@icloud.edu</email>\r\n\t\t<address>Ap #699-3522 Lectus Av.</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Winter</first-name>\r\n\t\t<last-name>Dexter</last-name>\r\n\t\t<phone>(832) 828-6340</phone>\r\n\t\t<email>mauris.rhoncus@outlook.edu</email>\r\n\t\t<address>Ap #392-7796 Integer St.</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Rhiannon</first-name>\r\n\t\t<last-name>Madaline</last-name>\r\n\t\t<phone>1-234-567-2185</phone>\r\n\t\t<email>vivamus@outlook.net</email>\r\n\t\t<address>Ap #161-2747 Ut St.</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Robert</first-name>\r\n\t\t<last-name>Jerome</last-name>\r\n\t\t<phone>1-406-538-8724</phone>\r\n\t\t<email>aliquam.nec@yahoo.net</email>\r\n\t\t<address>Ap #844-5644 Mauris Street</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Autumn</first-name>\r\n\t\t<last-name>Ivy</last-name>\r\n\t\t<phone>1-271-398-1835</phone>\r\n\t\t<email>neque.nullam@protonmail.org</email>\r\n\t\t<address>7136 Odio, Street</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Melyssa</first-name>\r\n\t\t<last-name>Simon</last-name>\r\n\t\t<phone>1-677-664-3423</phone>\r\n\t\t<email>et.magna@hotmail.net</email>\r\n\t\t<address>P.O. Box 144, 9036 Aliquam Ave</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Ulric</first-name>\r\n\t\t<last-name>Idona</last-name>\r\n\t\t<phone>(896) 511-4354</phone>\r\n\t\t<email>elit.pede@icloud.couk</email>\r\n\t\t<address>P.O. Box 375, 7741 Vel Rd.</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Abbot</first-name>\r\n\t\t<last-name>Wanda</last-name>\r\n\t\t<phone>1-447-782-1280</phone>\r\n\t\t<email>fermentum.risus@outlook.org</email>\r\n\t\t<address>Ap #942-926 Morbi Av.</address>\r\n\t</person>\r\n\t<person>\r\n\t\t<first-name>Miranda</first-name>\r\n\t\t<last-name>Odessa</last-name>\r\n\t\t<phone>(687) 350-7505</phone>\r\n\t\t<email>phasellus@aol.couk</email>\r\n\t\t<address>4589 Turpis Road</address>\r\n\t</person>\r\n</persons>';
      var e = n(870),
        r = n.n(e),
        a = n(822),
        o = n.n(a),
        s = n(103),
        i = n.n(s),
        l = n(341),
        d = n.n(l),
        p = n(626),
        c = n.n(p),
        u = n(828),
        m = n.n(u),
        f = n(710),
        h = {};
      function v(t, e) {
        return document.evaluate(
          t,
          e,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        ).singleNodeValue;
      }
      (h.styleTagTransform = m()),
        (h.setAttributes = d()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = c()),
        r()(f.Z, h),
        f.Z && f.Z.locals && f.Z.locals,
        console.log(t),
        (function (t, e) {
          let n = [],
            r = document.evaluate(
              "persons/person",
              e || document,
              null,
              XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
              null
            );
          for (let t = 0, e = r.snapshotLength; t < e; ++t)
            n.push(r.snapshotItem(t));
          return n;
        })(0, new DOMParser().parseFromString(t, "text/xml")).forEach((t) => {
          console.log(v("email", t).textContent),
            (document.querySelector(
              "table"
            ).innerHTML += `<tr>\n            <td>${
              v("first-name", t).textContent
            }</td>\n            <td>${
              v("last-name", t).textContent
            }</td>\n            <td>${
              v("address", t).textContent
            }</td>\n            <td>${
              v("phone", t).textContent
            }</td>\n            <td>${
              v("email", t).textContent
            }</td>\n        </tr>`);
        });
    })();
})();
