(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    227: function (e, t, a) {
      e.exports = a.p + "static/media/brain-overview.3b0eb74b.jpg";
    },
    290: function (e, t, a) {
      e.exports = a(497);
    },
    295: function (e, t, a) {},
    300: function (e, t, a) {},
    497: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(108),
        r = a(72),
        o = a(0),
        i = a.n(o),
        c = a(12),
        l = a.n(c),
        s = (a(295), a(80)),
        m = a(13),
        u = a(30),
        d = (a(300), a(301), a(547)),
        p = a(560),
        f = a(250),
        g = a(557),
        h = a(216),
        E = a.n(h),
        b = a(558),
        v = a(568),
        y = a(563),
        x = a(564),
        O = a(552),
        w = a(551),
        j = a(553),
        S = a(554),
        k = a(572),
        T = a(567),
        P = a(221),
        C = a.n(P),
        _ = a(224),
        D = a.n(_),
        M = a(220),
        N = a.n(M),
        R = a(573),
        I = Object(d.a)(function (e) {
          return {
            appBar: { top: "auto", bottom: 0 },
            grow: { flexGrow: 1 },
            speedDial: {
              position: "absolute",
              zIndex: 1,
              bottom: 30,
              left: 0,
              right: 0,
              margin: "0 auto",
            },
          };
        }),
        L = [{ icon: i.a.createElement(N.a, null), name: "Add DataSource" }];
      function F(e) {
        var t = e.fDialog,
          a = void 0 === t ? function () {} : t,
          n = I(),
          r = i.a.useState(!1),
          o = Object(m.a)(r, 2),
          c = o[0],
          l = o[1],
          s = function (e) {
            l(!1);
          };
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(w.a, null),
          i.a.createElement(
            O.a,
            { position: "sticky", color: "primary", className: n.appBar },
            i.a.createElement(
              j.a,
              null,
              i.a.createElement(
                S.a,
                {
                  edge: "start",
                  color: "inherit",
                  "aria-label": "open drawer",
                },
                i.a.createElement(C.a, null)
              ),
              i.a.createElement(
                k.a,
                {
                  FabProps: { color: "secondary", size: "large" },
                  ariaLabel: "add",
                  icon: i.a.createElement(R.a, null),
                  onClose: s,
                  onOpen: function (e) {
                    l(!0);
                  },
                  open: c,
                  className: n.speedDial,
                },
                L.map(function (e) {
                  return i.a.createElement(T.a, {
                    key: e.name,
                    icon: e.icon,
                    tooltipTitle: e.name,
                    onClick: function () {
                      s(), a(!0);
                    },
                  });
                })
              ),
              i.a.createElement("div", { className: n.grow }),
              i.a.createElement(
                S.a,
                { edge: "end", color: "inherit" },
                i.a.createElement(D.a, null)
              )
            )
          )
        );
      }
      var A = a(76),
        z = a.n(A),
        W = a(225),
        B = a(85),
        H = a.n(B),
        K = a(555),
        G = a(149),
        J = a.n(G),
        U = a(18);
      var V = function (e, t) {
        var a = e.find(function (e) {
          return e.name === t;
        });
        return a || {};
      };
      function Y(e) {
        return (
          (function (e) {
            return e.reduce(function (e, t) {
              return e + t;
            });
          })(e) / e.length
        );
      }
      function q(e) {
        var t = Y(e);
        return Math.sqrt(
          e.reduce(function (e, a) {
            return e + (a - t) * (a - t);
          }, 0) / e.length
        );
      }
      var $ = function (e, t) {
          var a = t || {},
            n = a.lag || 5,
            r = a.threshold || 3.5,
            o = a.influece || 0.5;
          if (void 0 === e || e.length < n + 2)
            throw " ## y data array to short("
              .concat(e.length, ") for given lag of ")
              .concat(n);
          var i = Array(e.length).fill(0),
            c = e.slice(0),
            l = e.slice(0, n),
            s = [];
          s[n - 1] = Y(l);
          var m = [];
          m[n - 1] = q(l);
          for (var u = n; u < e.length; u++) {
            Math.abs(e[u] - s[u - 1]) > r * m[u - 1]
              ? (e[u] > s[u - 1] ? (i[u] = 1) : (i[u] = -1),
                (c[u] = o * e[u] + (1 - o) * c[u - 1]))
              : ((i[u] = 0), (c[u] = e[u]));
            var d = c.slice(u - n, u);
            (s[u] = Y(d)), (m[u] = q(d));
          }
          return i;
        },
        Q = a(71),
        X = Object(Q.b)({
          name: "emitters",
          initialState: [],
          reducers: {
            addEmitter: function (e, t) {
              var a = t.payload,
                n = a.name,
                r = a.position,
                o = a.synth,
                i = a.panner,
                c = a.id;
              e.push({
                name: n,
                position: r,
                synth: o,
                panner: i,
                id: c,
                enabled: !0,
              });
            },
            toggleEmitterEnabled: function (e, t) {
              var a = e.find(function (e) {
                return e.name === t.payload;
              });
              a && (a.enabled = !a.enabled);
            },
            updateEmitterPos: function (e, t) {
              var a = t.payload,
                n = a.name,
                r = a.position,
                o = e.find(function (e) {
                  return e.name === n;
                });
              o && (o.position = r);
            },
            emitterSignalData: function (e, t) {
              var a = t.payload,
                n = a.name,
                r = a.signal_data,
                o = e.find(function (e) {
                  return e.name === n;
                });
              o && (o.signal_data = r);
            },
            emitterData: function (e, t) {
              var a = t.payload,
                n = a.name,
                r = a.data,
                o = e.find(function (e) {
                  return e.name === n;
                });
              o && (o.data = r);
            },
            updateEmitterAudioNodes: function (e, t) {
              var a = t.payload,
                n = a.name,
                o = a.synth,
                i = a.panner;
              return e.map(function (e) {
                return e.name !== n
                  ? e
                  : Object(r.a)(
                      Object(r.a)({}, e),
                      {},
                      { synth: o, panner: i }
                    );
              });
            },
            removeEmitter: function (e, t) {
              return e.filter(function (e) {
                return e.name !== t.payload;
              });
            },
            updateEmitterPannerPosition: function (e, t) {
              var a = t.payload,
                n = a.name,
                r = a.position,
                o = e.find(function (e) {
                  return e.name === n;
                });
              o && o.panner.setPosition(r.x, r.y, r.z);
            },
          },
        }),
        Z = X.actions,
        ee = Z.addEmitter,
        te = Z.toggleEmitterEnabled,
        ae = Z.emitterData,
        ne = Z.emitterSignalData,
        re = (Z.removeEmitter, Z.updateEmitterAudioNodes),
        oe = Z.updateEmitterPos,
        ie = Z.updateEmitterPannerPosition,
        ce = X.reducer,
        le = Object(Q.b)({
          name: "transport",
          initialState: { events: [], max_length: 0.01 },
          reducers: {
            playStateChange: function (e, t) {
              e.playState = t.payload;
            },
            indexInc: function (e) {
              e.index = e.index++;
            },
            indexSet: function (e, t) {
              e.index = t.payload;
            },
            indexReset: function (e) {
              e.index = 0;
            },
            updateMaxLength: function (e, t) {
              var a = t.payload.max_length;
              e.max_length = a;
            },
            addAudioEvent: function (e, t) {
              e.events.push(t.payload);
            },
          },
        }),
        se = le.actions,
        me = (se.playStateChange, se.updateMaxLength),
        ue = (se.addAudioEvent, le.reducer);
      var de = {
          updateEmitterPos: oe,
          updateEmitterAudioNodes: re,
          emitterSignalData: ne,
          updateMaxLength: me,
        },
        pe = Object(u.b)(function (e, t) {
          return {
            enabled: V(e.emitters, t.name).enabled,
            synth: V(e.emitters, t.name).synth,
            panner: V(e.emitters, t.name).panner,
            position: V(e.emitters, t.name).position,
            id: V(e.emitters, t.name).id,
            events: V(e.emitters, t.name).data,
            max_length: e.transport.max_length,
          };
        }, de)(function (e) {
          var t = e.name,
            a = e.onPositionChange,
            n = e.enabled,
            r = e.synth,
            o = e.position,
            c = e.events,
            l = e.id,
            s = e.max_length,
            u = e.updateEmitterPos,
            d = e.updateEmitterAudioNodes,
            p = e.emitterSignalData,
            f = e.updateMaxLength,
            g = i.a.useState(!1),
            h = Object(m.a)(g, 2),
            E = h[0],
            b = h[1];
          return (
            i.a.useEffect(function () {
              var e = (function (e) {
                  var t = new U.Synth(),
                    a = new U.Panner3D();
                  return (
                    t.sync(),
                    (a.panningModel = "HRTF"),
                    t.chain(a, U.Master),
                    e(!0),
                    [t, a]
                  );
                })(b),
                a = Object(m.a)(e, 2),
                n = a[0],
                r = a[1];
              d({ name: t, synth: n, panner: r });
            }, []),
            i.a.useEffect(
              function () {
                E && a(o);
              },
              [o]
            ),
            i.a.useEffect(
              function () {
                if (E) {
                  r.triggerRelease();
                  var e = $(
                    c.map(function (e, t) {
                      return e.y;
                    }),
                    { lag: 5, threshold: 3.5 }
                  );
                  p({
                    name: t,
                    signal_data: e.map(function (e) {
                      return e / 3 + 0.5;
                    }),
                  });
                  var a = c.filter(function (t, a, n) {
                    return 0 !== e[a];
                  });
                  new U.Part(
                    function (e, t) {
                      (t = 1e3 * t + 250), r.triggerAttackRelease(t, 0.5, e);
                    },
                    a.map(function (e, t) {
                      return [e.x / 10, e.y];
                    })
                  ).start(0),
                    a[a.length - 1].x / 10 > s &&
                      f({ max_length: a[a.length - 1].x / 10 });
                }
              },
              [c, E]
            ),
            n
              ? i.a.createElement(
                  H.a,
                  {
                    bounds: "parent",
                    grid: [10, 10],
                    position: o,
                    onStop: function (e, a) {
                      var n = a.x,
                        r = a.y;
                      a.node, u({ name: t, position: { x: n, y: r } });
                    },
                  },
                  i.a.createElement(
                    K.a,
                    {
                      color: "secondary",
                      disabled: !E,
                      style: { position: "absolute" },
                    },
                    l.slice(0, 3),
                    i.a.createElement(J.a, null)
                  )
                )
              : i.a.createElement(i.a.Fragment, null)
          );
        }),
        fe = a(226),
        ge = a.n(fe),
        he = Object(d.a)({
          rhombus: {
            width: 75,
            height: 75,
            transform: "rotate(45deg)",
            borderRadius: 0,
          },
          micIcon: { width: 45, height: 45, transform: "rotate(-45deg)" },
        });
      var Ee = function (e) {
          var t = e.callback,
            a = void 0 === t ? console.log : t,
            n = e.defaultPos,
            r = void 0 === n ? { x: 100, y: 100 } : n,
            o = he(),
            c = i.a.useState({ x: r.x, y: r.y }),
            l = Object(m.a)(c, 2),
            s = l[0],
            u = l[1];
          return (
            i.a.useEffect(
              function () {
                a(s);
              },
              [s]
            ),
            i.a.createElement(
              H.a,
              {
                bounds: "parent",
                grid: [10, 10],
                position: s,
                onStop: function (e, t) {
                  var a = t.x,
                    n = t.y;
                  t.node, u({ x: a, y: n });
                },
              },
              i.a.createElement(
                "div",
                { style: { position: "absolute" } },
                i.a.createElement(
                  K.a,
                  {
                    color: "primary",
                    size: "large",
                    variant: "extended",
                    className: o.rhombus,
                  },
                  i.a.createElement(ge.a, { className: o.micIcon })
                )
              )
            )
          );
        },
        be = a(227),
        ve = a.n(be),
        ye = Object(d.a)(function (e) {
          return {
            container_max: { width: "100%", height: "100%", minHeight: "100%" },
            max_height: { height: "100vh" },
            responsive_img: { width: "100%", height: "auto" },
          };
        });
      var xe = { updateEmitterPos: oe, updateEmitterPannerPosition: ie },
        Oe = Object(u.b)(function (e) {
          return { sources: e.emitters };
        }, xe)(function (e) {
          var t = e.sources,
            a = e.updateEmitterPos,
            n = e.updateEmitterPannerPosition,
            r = ye(),
            o = i.a.useState(null),
            c = Object(m.a)(o, 2),
            l = c[0],
            s = c[1],
            u = i.a.useState({ x: 0, y: 0, z: 0 }),
            d = Object(m.a)(u, 2),
            p = d[0],
            f = d[1],
            h = i.a.useRef();
          return (
            i.a.useEffect(function () {
              Object(W.a)(
                z.a.mark(function e() {
                  var t;
                  return z.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            navigator.mediaDevices.getUserMedia({
                              audio: !0,
                              video: !1,
                            })
                          );
                        case 2:
                          (t = e.sent), s(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            }, []),
            i.a.useEffect(
              function () {
                console.log("new Audio Input");
              },
              [l]
            ),
            i.a.useEffect(
              function () {
                var e = p.x / h.current.clientWidth,
                  r = p.y / h.current.clientHeight;
                U.Listener.setPosition(e, r, 0).setOrientation(
                  0,
                  1,
                  0,
                  0,
                  0,
                  1
                );
                for (var o = 0; o < t.length; o++) {
                  var i = t[o],
                    c = i.name,
                    l = i.position;
                  a({ name: c, position: l });
                  var s = {
                    x: ((l.x - p.x) / h.current.clientWidth) * 10,
                    y: ((p.y - l.y) / h.current.clientHeight) * 10,
                    z: 0,
                  };
                  n({ name: c, position: s });
                }
              },
              [p]
            ),
            i.a.createElement(
              g.a,
              { className: r.container_max },
              i.a.createElement(
                "div",
                {
                  className: r.container_max,
                  style: {
                    backgroundImage: "url(" + ve.a + ")",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                  ref: h,
                },
                t.map(function (e) {
                  return i.a.createElement(pe, {
                    key: e.name,
                    name: e.name,
                    onPositionChange: function (t) {
                      return a(e.name, t);
                    },
                  });
                }),
                i.a.createElement(Ee, { callback: f }),
                i.a.createElement(
                  b.a,
                  {
                    variant: "outlined",
                    color: "secondary",
                    onClick: function () {
                      for (var e = 0; e < t.length; e++)
                        t[e].synth.oscillator.stop(),
                          t[e].synth.triggerRelease();
                    },
                    style: { position: "absolute", top: "2vh", left: "2vh" },
                  },
                  "Panic!"
                )
              )
            )
          );
        }),
        we = a(500),
        je = a(239),
        Se = a.n(je),
        ke = a(240),
        Te = a.n(ke),
        Pe = a(28),
        Ce = a(559);
      var _e = { addEmitter: ee, toggleEmitterEnabled: te },
        De = Object(u.b)(function (e, t) {
          return {
            visibility: V(e.emitters, t.name).enabled,
            id: V(e.emitters, t.name).id,
            signal_data: V(e.emitters, t.name).signal_data || [],
            data: V(e.emitters, t.name).data || [],
          };
        }, _e)(function (e) {
          var t = e.name,
            a = e.visibility,
            n = e.data,
            r = e.signal_data,
            o = e.id,
            c = e.addEmitter,
            l = e.toggleEmitterEnabled,
            s = i.a.useState({}),
            u = Object(m.a)(s, 2),
            d = u[0],
            p = u[1];
          return (
            i.a.useEffect(function () {
              c({
                name: t,
                position: { x: 0, y: 100 },
                id: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  function (e) {
                    return (
                      e ^
                      (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (e / 4)))
                    ).toString(16);
                  }
                ),
              });
            }, []),
            i.a.useEffect(
              function () {
                for (var e = [], t = 0; t < n.length; t++)
                  e.push({ x: t, y: n[t].y, y_s: r[t] });
                p(e);
              },
              [n, r]
            ),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                we.a,
                { variant: "h6" },
                t,
                i.a.createElement(
                  b.a,
                  {
                    color: a ? "default" : "secondary",
                    onClick: function () {
                      return l(t);
                    },
                  },
                  a
                    ? i.a.createElement(Se.a, null)
                    : i.a.createElement(Te.a, null)
                )
              ),
              a
                ? i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      Pe.e,
                      { width: "100%", aspect: 3, minHeight: 50 },
                      i.a.createElement(
                        Pe.d,
                        { data: d, syncId: "anyId" },
                        i.a.createElement(Pe.b, { strokeDasharray: "3 3" }),
                        i.a.createElement(Pe.g, { dataKey: "x" }),
                        i.a.createElement(Pe.h, {
                          type: "number",
                          domain: [0, 1],
                        }),
                        i.a.createElement(Pe.f, null),
                        i.a.createElement(Pe.c, {
                          type: "step",
                          dot: !1,
                          activeDot: !1,
                          dataKey: "y_s",
                          stroke: "grey",
                        }),
                        i.a.createElement(Pe.c, {
                          type: "monotone",
                          dot: !1,
                          activeDot: { stroke: "red" },
                          dataKey: "y",
                          stroke: "lightgreen",
                        })
                      )
                    ),
                    o
                      ? i.a.createElement(
                          we.a,
                          null,
                          "ID: ",
                          i.a.createElement("strong", null, o.slice(0, 3)),
                          i.a.createElement("em", null, o.slice(3))
                        )
                      : null
                  )
                : null,
              i.a.createElement(Ce.a, { light: !0 })
            )
          );
        }),
        Me = a(569),
        Ne = a(566),
        Re = a(570),
        Ie = a(562),
        Le = a(571),
        Fe = a(561),
        Ae = a(242),
        ze = a.n(Ae),
        We = a(243),
        Be = a.n(We),
        He = a(241),
        Ke = a.n(He),
        Ge = a(244),
        Je = a.n(Ge),
        Ue = Object(d.a)(function (e) {
          return {
            transportControls: {
              backgroundColor: "#eee",
              borderRadius: 50,
              position: "absolute",
              alignItems: "center",
              maxWidth: "50vw",
              bottom: 25,
              left: 100,
            },
            controlFab: { position: "relative", margin: "0 5px" },
            progressBar: { margin: "0 10px" },
            settingsDialog: {
              padding: e.spacing(2),
              minWidth: 250,
              width: "30vw",
            },
          };
        });
      var Ve = Object(u.b)(function (e) {
          return { length: e.transport.max_length };
        })(function (e) {
          var t = e.length,
            a = Ue(),
            n = i.a.useState(!1),
            r = Object(m.a)(n, 2),
            o = r[0],
            c = r[1],
            l = i.a.useState(0),
            u = Object(m.a)(l, 2),
            d = u[0],
            f = u[1],
            g = i.a.useState(!1),
            h = Object(m.a)(g, 2),
            E = h[0],
            v = h[1],
            y = i.a.useState(null),
            x = Object(m.a)(y, 2),
            O = x[0],
            w = x[1],
            j = i.a.useState(1),
            S = Object(m.a)(j, 2),
            k = S[0],
            T = S[1],
            P = i.a.useState(null),
            C = Object(m.a)(P, 2),
            _ = C[0],
            D = C[1],
            M = i.a.useState([0, t]),
            N = Object(m.a)(M, 2),
            R = N[0],
            I = N[1],
            L = i.a.useState([0, t]),
            F = Object(m.a)(L, 2),
            A = F[0],
            z = F[1];
          function W() {
            U.Transport.stop(),
              (U.Transport.seconds = A[0]),
              U.Transport.clear(E),
              v(!1),
              f(0),
              c(!1);
          }
          function B(e, t, a) {
            return t + e * (a - t);
          }
          i.a.useEffect(
            function () {
              (U.Transport.loop = !0),
                U.Transport.setLoopPoints(0, t),
                U.Transport.bpm.rampTo(120),
                I([0, t]),
                z([0, t]),
                T(1),
                f(0),
                D(0);
            },
            [t]
          ),
            i.a.useEffect(
              function () {
                D(B.apply(void 0, [d].concat(Object(s.a)(A))));
              },
              [d]
            );
          var H = Boolean(O);
          return i.a.createElement(
            p.a,
            { container: !0, className: a.transportControls, spacing: 3 },
            i.a.createElement(
              p.a,
              { item: !0, xs: 1 },
              i.a.createElement(
                K.a,
                {
                  color: "primary",
                  size: "large",
                  className: a.controlFab,
                  onClick: function () {
                    if (o) U.Transport.pause(), c(!1);
                    else if ((U.Transport.start(), c(!0), !1 === E)) {
                      var e = U.Transport.scheduleRepeat(
                        function (e) {
                          f(U.Transport.progress);
                        },
                        0.2,
                        0
                      );
                      v(e);
                    }
                  },
                },
                o
                  ? i.a.createElement(Ke.a, null)
                  : i.a.createElement(ze.a, null)
              )
            ),
            i.a.createElement(
              p.a,
              { item: !0 },
              i.a.createElement(
                K.a,
                {
                  color: "primary",
                  size: "large",
                  className: a.controlFab,
                  onClick: W,
                },
                i.a.createElement(Be.a, null)
              )
            ),
            i.a.createElement(
              p.a,
              { item: !0, xs: 7 },
              i.a.createElement(
                p.a,
                { container: !0 },
                i.a.createElement(
                  p.a,
                  { item: !0, xs: 10 },
                  i.a.createElement(Me.a, {
                    variant: "determinate",
                    value: _,
                    min: 0,
                    max: t,
                    step: 0.1,
                    marks: [
                      { value: A[0], label: "S" },
                      { value: A[1], label: "E" },
                    ],
                    style: { width: "100%" },
                    onChange: function (e, t) {
                      !(function (e) {
                        A[0] > e && (e = A[0]),
                          A[1] < e && (e = A[1]),
                          (U.Transport.seconds = e),
                          D(e);
                      })(t);
                    },
                  })
                ),
                i.a.createElement(
                  p.a,
                  { item: !0, xs: 2 },
                  i.a.createElement(
                    we.a,
                    { variant: "h6", className: a.progressBar },
                    B.apply(void 0, [d].concat(Object(s.a)(A))).toFixed(1),
                    "/",
                    A[1] !== t
                      ? A[1].toFixed(1) + "(" + t.toFixed(1) + ")"
                      : t.toFixed(1),
                    "s"
                  )
                )
              )
            ),
            i.a.createElement(
              p.a,
              { item: !0, xs: 2 },
              i.a.createElement(
                b.a,
                {
                  onClick: function (e) {
                    w(e.currentTarget);
                  },
                },
                i.a.createElement(Je.a, null)
              ),
              i.a.createElement(
                Fe.a,
                {
                  open: H,
                  onClose: function () {
                    w(null);
                  },
                  anchorEl: O,
                  PaperProps: { className: a.settingsDialog },
                  anchorOrigin: { vertical: "top", horizontal: "center" },
                  transformOrigin: { vertical: "bottom", horizontal: "center" },
                },
                i.a.createElement(
                  p.a,
                  { container: !0, direction: "column", spacing: 3 },
                  i.a.createElement(
                    p.a,
                    { item: !0 },
                    i.a.createElement(
                      Ie.a,
                      { style: { width: "100%" } },
                      i.a.createElement(Re.a, { id: "tempo-select" }, "Tempo"),
                      i.a.createElement(
                        Ne.a,
                        {
                          labelId: "tempo-select",
                          value: k,
                          onChange: function (e) {
                            return T(e.target.value);
                          },
                        },
                        i.a.createElement(Le.a, { value: 0.25 }, ".25x"),
                        i.a.createElement(Le.a, { value: 0.5 }, ".5x"),
                        i.a.createElement(Le.a, { value: 1 }, "1x"),
                        i.a.createElement(Le.a, { value: 2 }, "2x"),
                        i.a.createElement(Le.a, { value: 3 }, "3x")
                      )
                    )
                  ),
                  i.a.createElement(
                    p.a,
                    { item: !0 },
                    i.a.createElement(
                      Ie.a,
                      { style: { width: "100%" } },
                      i.a.createElement(
                        Re.a,
                        { id: "tempo-select" },
                        "Loop Points"
                      ),
                      i.a.createElement(Me.a, {
                        labelId: "tempo-select",
                        value: R,
                        max: t,
                        step: 0.1,
                        min: 0,
                        onChange: function (e, t) {
                          return I(t);
                        },
                        valueLabelDisplay: "auto",
                      })
                    )
                  ),
                  i.a.createElement(
                    p.a,
                    { item: !0 },
                    i.a.createElement(
                      b.a,
                      {
                        onClick: function () {
                          U.Transport.setLoopPoints(R[0], R[1]),
                            z(R),
                            U.Transport.bpm.rampTo(120 * k, 1),
                            W();
                        },
                      },
                      "Apply"
                    )
                  )
                )
              )
            )
          );
        }),
        Ye = [
          [0, 0, 0],
          [6.35156, 2.375, 1.11719],
          [5.15625, 2.49219, 1.03906],
          [4.17969, 2.24219, 0.74219],
          [5.36719, 1.83594, 1.14063],
          [4.14063, 1.84375, 1.13281],
          [4.08594, 0.5625, 1.16406],
          [2.26563, 2.21875, 1.07813],
          [4.53906, 1.92188, 0.92969],
          [4.32813, 1.58594, 0.70313],
          [3.53125, 3.1875, 0.98438],
          [3.35938, 2.44531, 0.64063],
          [2.39844, 2.55469, 1.28125],
          [4.84375, 2.01563, 1.46094],
          [5.22656, 2.0625, 0.90625],
          [2.26563, 2.13281, 1.22656],
          [3.92188, 2.10156, 0.89063],
          [3.28906, 2.27344, 1.375],
          [4.60156, 2.13281, 1.14063],
          [4.15625, 3.25, 1.45313],
          [4.21875, 2.00781, 0.83594],
          [3.57031, 2.27344, 1.26563],
          [5.60156, 2.39063, 1.07813],
          [3.39063, 1.76563, 0.9375],
          [5.17969, 2.38281, 1.21875],
          [4, 2.07813, 1.24219],
          [3.22656, 1.85938, 1.19531],
          [3.20313, 2.35156, 0.89844],
          [4.75, 3.33594, 0.92188],
          [5.46094, 2.19531, 1.27344],
          [4.32031, 1.94531, 1.04688],
          [4.98438, 1.74219, 1.07031],
          [2.64063, 1.61719, 1.30469],
          [4.51563, 1.13281, 0.91406],
          [4.11719, 2.09375, 0.95313],
          [3.53906, 1.57813, 0.88281],
          [6.29688, 1.78125, 1.11719],
          [4.17188, 3.0625, 0.97656],
          [4.08594, 1.64063, 1.08594],
          [3.54688, 1.42969, 0.96875],
          [2.61719, 1.82031, 0.64063],
          [6.03906, 2.33594, 1.39063],
          [3.92969, 1.71875, 1.09375],
          [6.28125, 1.27344, 1.41406],
          [5.79688, 1.38281, 1.09375],
          [7.25, 3.23438, 0.96094],
          [1.078125, 1.52344, 0.82031],
          [3.99219, 2.10156, 0.71094],
          [2.88281, 2.15625, 1.11719],
          [3.75, 1.67969, 0.97656],
          [3.88281, 1.20313, 0.95313],
          [1.034375, 1.79688, 0.79688],
          [5.14063, 1.82813, 0.85938],
          [4.66406, 2.19531, 1.21875],
          [4.66406, 2.19531, 1.21875],
          [4.63281, 2.15625, 1.32813],
          [4.63281, 2.15625, 1.32813],
          [4.64844, 1.97656, 1.02344],
          [4.64844, 1.97656, 1.02344],
          [5.35938, 2.41406, 1.26563],
          [5.35938, 2.41406, 1.26563],
          [5.60156, 2.57813, 1.01563],
          [5.60156, 2.57813, 1.01563],
          [3.38281, 1.16406, 1.14063],
          [3.38281, 1.16406, 1.14063],
          [4.27344, 1.60156, 1.00781],
          [4.27344, 1.60156, 1.00781],
          [4.51563, 2.02344, 0.98438],
          [4.51563, 2.02344, 0.98438],
          [5.36719, 1.69531, 0.94531],
          [5.36719, 1.69531, 0.94531],
          [5.10156, 1.82031, 1.08594],
          [5.10156, 1.82031, 1.08594],
          [5.46875, 2.89063, 0.95313],
          [5.46875, 2.89063, 0.95313],
          [3.05, 1.42188, 0.71094],
          [3.05, 1.42188, 0.71094],
          [4.99219, 1.96875, 1.39063],
          [4.99219, 1.96875, 1.39063],
          [5.98438, 1.75781, 1.46875],
          [5.98438, 1.75781, 1.46875],
          [6.0625, 3.46094, 1.27344],
          [6.0625, 3.46094, 1.27344],
          [3.03125, 2.21875, 1.14063],
          [3.03125, 2.21875, 1.14063],
          [4.28125, 1.53906, 0.94531],
          [4.28125, 1.53906, 0.94531],
          [4.32031, 2.24219, 0.99219],
          [4.32031, 2.24219, 0.99219],
          [5.84375, 2.08594, 1.375],
          [5.84375, 2.08594, 1.375],
          [6.97656, 1.88281, 1.03125],
          [6.97656, 1.88281, 1.03125],
          [3.67188, 1.92969, 1.13281],
          [3.67188, 1.92969, 1.13281],
          [3.96094, 2.32031, 1.32813],
          [3.96094, 2.32031, 1.32813],
          [3.05469, 2.50781, 0.88281],
          [3.05469, 2.50781, 0.88281],
          [6.07031, 1.77344, 1.35938],
          [6.07031, 1.77344, 1.35938],
          [5.32813, 1.92188, 1.07031],
          [5.32813, 1.92188, 1.07031],
          [3.13281, 2.80469, 1.46875],
          [3.13281, 2.80469, 1.46875],
          [4.64844, 1.10938, 1.32031],
          [4.64844, 1.10938, 1.32031],
          [3.78125, 1.41406, 1.14063],
          [3.78125, 1.41406, 1.14063],
          [8.20313, 2.25, 1.50781],
          [8.20313, 2.25, 1.50781],
          [5.40625, 4.42969, 1.79688],
          [5.40625, 4.42969, 1.79688],
          [2.55469, 3.57813, 1.50781],
          [2.55469, 3.57813, 1.50781],
          [4.47656, 1.67188, 1.07031],
          [4.47656, 1.67188, 1.07031],
          [8.46875, 2.05469, 1.51563],
          [8.46875, 2.05469, 1.51563],
          [3.67188, 2.00781, 1.49219],
          [3.67188, 2.00781, 1.49219],
          [3.375, 2.25781, 1.21094],
          [3.375, 2.25781, 1.21094],
          [3.02344, 2.49219, 0.79688],
          [3.02344, 2.49219, 0.79688],
          [6.73438, 1.63281, 1.15625],
          [6.73438, 1.63281, 1.15625],
          [7.83594, 2.11719, 1.23438],
          [7.83594, 2.11719, 1.23438],
          [3.46094, 1.63281, 1.33594],
          [3.46094, 1.63281, 1.33594],
          [5.625, 2.67188, 1.30469],
          [5.625, 2.67188, 1.30469],
          [6.19531, 2.60938, 1.25],
          [6.19531, 2.60938, 1.25],
          [3.95313, 1.92188, 1.0625],
          [3.95313, 1.92188, 1.0625],
          [4.58594, 1.41406, 1.10938],
          [4.58594, 1.41406, 1.10938],
          [5.57031, 1.77344, 1.59375],
          [5.57031, 1.77344, 1.59375],
          [4.70313, 1.92188, 1.32031],
          [4.70313, 1.92188, 1.32031],
          [3.85156, 1.88281, 1.10156],
          [3.85156, 1.88281, 1.10156],
          [3.14063, 2.34375, 1.39844],
          [3.14063, 2.34375, 1.39844],
          [2.34375, 2.625, 0.92969],
          [2.34375, 2.625, 0.92969],
          [3.61719, 2.13281, 0.78125],
          [3.61719, 2.13281, 0.78125],
          [7.10938, 1.90625, 0.77344],
          [7.10938, 1.90625, 0.77344],
          [4.59375, 2.02344, 1.17188],
          [4.59375, 2.02344, 1.17188],
          [5.72656, 2.39844, 0.95313],
          [5.72656, 2.39844, 0.95313],
          [2.35156, 2.07031, 1.39844],
          [2.35156, 2.07031, 1.39844],
          [2.92188, 1.54688, 0.77344],
          [2.92188, 1.54688, 0.77344],
          [5.30469, 2.10156, 1.41406],
          [5.30469, 2.10156, 1.41406],
          [4.91406, 1.86719, 1.40625],
          [4.91406, 1.86719, 1.40625],
          [4.71094, 2.91406, 0.75781],
          [4.71094, 2.91406, 0.75781],
          [4.11719, 1.61719, 1.08594],
          [4.11719, 1.61719, 1.08594],
          [4.34375, 1.85938, 1.46094],
          [4.34375, 1.85938, 1.46094],
          [3.60156, 1.57031, 0.78125],
          [3.60156, 1.57031, 0.78125],
          [4.48438, 2.19531, 0.96875],
          [4.48438, 2.19531, 0.96875],
          [3.59375, 1.28125, 1.10156],
          [3.59375, 1.28125, 1.10156],
          [3.32031, 1.55469, 0.94531],
          [3.32031, 1.55469, 0.94531],
          [7.88281, 1.42969, 1.11719],
          [7.88281, 1.42969, 1.11719],
          [4.95313, 2.25781, 1.53906],
          [4.95313, 2.25781, 1.53906],
          [5.60156, 1.16406, 1.46875],
          [5.60156, 1.16406, 1.46875],
          [4.66406, 1.625, 1.57031],
          [4.66406, 1.625, 1.57031],
          [3.88281, 2.00781, 1.10156],
          [3.88281, 2.00781, 1.10156],
          [5.71094, 0.75, 1.26563],
          [5.71094, 0.75, 1.26563],
          [5.90625, 1.30469, 1.90625],
          [5.90625, 1.30469, 1.90625],
          [4.00781, 1.25781, 1.03906],
          [4.00781, 1.25781, 1.03906],
          [7.40625, 2.17188, 0.90625],
          [7.40625, 2.17188, 0.90625],
          [6.125, 1.10938, 1.04688],
          [6.125, 1.10938, 1.04688],
          [8, 2.26563, 1.13281],
          [8, 2.26563, 1.13281],
          [5.01563, 1.83594, 0.90625],
          [5.01563, 1.83594, 0.90625],
          [4.95313, 2.44531, 1.17969],
          [4.95313, 2.44531, 1.17969],
          [3.875, 1.78906, 0.78906],
          [3.875, 1.78906, 0.78906],
          [5.82031, 1.25, 1.22656],
          [5.82031, 1.25, 1.22656],
          [2.91406, 1.82813, 1.36719],
          [2.91406, 1.82813, 1.36719],
          [3.36719, 2.19531, 1.19531],
          [3.36719, 2.19531, 1.19531],
          [6.09375, 2.28906, 1.14844],
          [6.09375, 2.28906, 1.14844],
          [5.03906, 2.10938, 1.28906],
          [5.03906, 2.10938, 1.28906],
          [4.61719, 1.94531, 1.60156],
          [4.61719, 1.94531, 1.60156],
          [4.41406, 2.65625, 0.84375],
          [4.41406, 2.65625, 0.84375],
          [4.0625, 2.11719, 0.875],
          [4.0625, 2.11719, 0.875],
          [4.70313, 1.71094, 1.03125],
          [4.70313, 1.71094, 1.03125],
          [3.34375, 1.42969, 1.53906],
          [3.34375, 1.42969, 1.53906],
          [2.25, 1.48438, 0.84375],
          [2.25, 1.48438, 0.84375],
          [2.85156, 1.89063, 1.39063],
          [2.85156, 1.89063, 1.39063],
          [7.32031, 1.32813, 1.75],
          [7.32031, 1.32813, 1.75],
          [2.42188, 1.32813, 1.52344],
          [2.42188, 1.32813, 1.52344],
          [7.52344, 1.22656, 1.14063],
          [7.52344, 1.22656, 1.14063],
          [1.058125, 2.13281, 1.0625],
          [1.058125, 2.13281, 1.0625],
          [3.99219, 2.59375, 1.09375],
          [3.99219, 2.59375, 1.09375],
          [3.76563, 1.84375, 1.22656],
          [3.76563, 1.84375, 1.22656],
          [4.09375, 2.69531, 1.16406],
          [4.09375, 2.69531, 1.16406],
          [4.89844, 1.45313, 1.41406],
          [4.89844, 1.45313, 1.41406],
          [4.20313, 1.96875, 1.02344],
          [4.20313, 1.96875, 1.02344],
          [2.67188, 1.30469, 0.96875],
          [2.67188, 1.30469, 0.96875],
          [4.14063, 3.17969, 1.47656],
          [4.14063, 3.17969, 1.47656],
          [5.16406, 2.83594, 0.89844],
          [5.16406, 2.83594, 0.89844],
          [5, 1.59375, 1.32031],
          [5, 1.59375, 1.32031],
          [4.86719, 1.67188, 0.92188],
          [4.86719, 1.67188, 0.92188],
          [5.82813, 2.07813, 1.10156],
          [5.82813, 2.07813, 1.10156],
          [2.39063, 1.67188, 1.35156],
          [2.39063, 1.67188, 1.35156],
          [4.80469, 2.80469, 1.10938],
          [4.80469, 2.80469, 1.10938],
          [3.26563, 2.25, 1.25781],
          [3.26563, 2.25, 1.25781],
          [4.70313, 2.03906, 1.14063],
          [4.70313, 2.03906, 1.14063],
          [3.13281, 1.67188, 1.67188],
          [3.13281, 1.67188, 1.67188],
          [1.033125, 1.39063, 1.41406],
          [1.033125, 1.39063, 1.41406],
          [6.60156, 1.82813, 0.94531],
          [6.60156, 1.82813, 0.94531],
          [5.35938, 2.14844, 1.52344],
          [5.35938, 2.14844, 1.52344],
          [1.038125, 1.35156, 1.26563],
          [1.038125, 1.35156, 1.26563],
          [5.96875, 2.13281, 1.07031],
          [5.96875, 2.13281, 1.07031],
          [3.74219, 2.42969, 1.19531],
          [3.74219, 2.42969, 1.19531],
          [3.82813, 1.40625, 1.10938],
          [3.82813, 1.40625, 1.10938],
          [8.13281, 2.21875, 1.75],
          [8.13281, 2.21875, 1.75],
          [3.78906, 2.73438, 1.74219],
          [3.78906, 2.73438, 1.74219],
          [5.71094, 2.70313, 4.21094],
          [5.71094, 2.70313, 4.21094],
          [4.74219, 1.66406, 1.86719],
          [4.74219, 1.66406, 1.86719],
          [4.03906, 1.17969, 0.9375],
          [4.03906, 1.17969, 0.9375],
          [6.14844, 1.07813, 0.96094],
          [6.14844, 1.07813, 0.96094],
          [4.50781, 2.00781, 1.25],
          [4.50781, 2.00781, 1.25],
          [4.375, 1.83594, 1.13281],
          [4.375, 1.83594, 1.13281],
          [3.85156, 1.45313, 1.01563],
          [3.85156, 1.45313, 1.01563],
          [4.89063, 2.17188, 0.89844],
          [4.89063, 2.17188, 0.89844],
          [4.14844, 1.83594, 0.82031],
          [4.14844, 1.83594, 0.82031],
          [7.10156, 2.41406, 1.40625],
          [7.10156, 2.41406, 1.40625],
          [4.54688, 2.10156, 1.10156],
          [4.54688, 2.10156, 1.10156],
          [5.08594, 1.41406, 1.22656],
          [5.08594, 1.41406, 1.22656],
          [5.11719, 1.80469, 1.08594],
          [5.11719, 1.80469, 1.08594],
          [5.20313, 2.125, 0.96875],
          [5.20313, 2.125, 0.96875],
          [4.70313, 2.10156, 1.32813],
          [4.70313, 2.10156, 1.32813],
          [5.72656, 1.875, 0.8125],
          [5.72656, 1.875, 0.8125],
          [4.72656, 1.80469, 1.08594],
          [4.72656, 1.80469, 1.08594],
          [4.17969, 1.1875, 1.15625],
          [4.17969, 1.1875, 1.15625],
          [4.40625, 1.45313, 0.95313],
          [4.40625, 1.45313, 0.95313],
          [3.89844, 2.79688, 0.96875],
          [3.89844, 2.79688, 0.96875],
          [4.22656, 2.42969, 1.42969],
          [4.22656, 2.42969, 1.42969],
          [5.73438, 2.23438, 1.29688],
          [5.73438, 2.23438, 1.29688],
          [5.39844, 1.92969, 1.17188],
          [5.39844, 1.92969, 1.17188],
          [5.89844, 1.42969, 1.60938],
          [5.89844, 1.42969, 1.60938],
          [4.71875, 1.71875, 1.23438],
          [4.71875, 1.71875, 1.23438],
          [4.46875, 1.88281, 1.17969],
          [4.46875, 1.88281, 1.17969],
          [4.33594, 1.70313, 1.55469],
          [4.33594, 1.70313, 1.55469],
          [4.34375, 1.92188, 1.53906],
          [4.34375, 1.92188, 1.53906],
          [4.17969, 2.19531, 0.90625],
          [4.17969, 2.19531, 0.90625],
          [2.71875, 1.89063, 1.14844],
          [2.71875, 1.89063, 1.14844],
          [3.52344, 3.44531, 1.17969],
          [3.52344, 3.44531, 1.17969],
          [3.32813, 1.54688, 1.15625],
          [3.32813, 1.54688, 1.15625],
          [4.67969, 2.60938, 1.16406],
          [4.67969, 2.60938, 1.16406],
          [5.10156, 2.0625, 1.05469],
          [5.10156, 2.0625, 1.05469],
          [4.03906, 2.54688, 1.17969],
          [4.03906, 2.54688, 1.17969],
          [4.01563, 1.57813, 1.25],
          [4.01563, 1.57813, 1.25],
          [4.42969, 2, 1.10156],
          [4.42969, 2, 1.10156],
          [5.13281, 2.30469, 1.26563],
          [5.13281, 2.30469, 1.26563],
          [4.19531, 1.97656, 1.55469],
          [4.19531, 1.97656, 1.55469],
          [5.76563, 2.10938, 1.57031],
          [5.76563, 2.10938, 1.57031],
          [6.00781, 2.21094, 1.27344],
          [6.00781, 2.21094, 1.27344],
          [5.60938, 2.13281, 1.02344],
          [5.60938, 2.13281, 1.02344],
          [4.98438, 2.84375, 1.42188],
          [4.98438, 2.84375, 1.42188],
          [2.92969, 2.05469, 1.10938],
          [2.92969, 2.05469, 1.10938],
          [4.96875, 1.67188, 1.40625],
          [4.96875, 1.67188, 1.40625],
          [4.60156, 1.85156, 1.08594],
          [4.60156, 1.85156, 1.08594],
          [5.07813, 2.86719, 1.17188],
          [5.07813, 2.86719, 1.17188],
          [5.32813, 1.92969, 0.86719],
          [5.32813, 1.92969, 0.86719],
          [3.99219, 1.82813, 1.26563],
          [3.99219, 1.82813, 1.26563],
          [1.625, 1.75781, 0.95313],
          [1.625, 1.75781, 0.95313],
          [4.60156, 2.48438, 1.27344],
          [4.60156, 2.48438, 1.27344],
          [1.048125, 1.875, 0.98438],
          [1.048125, 1.875, 0.98438],
          [1.044375, 2.05469, 1.07813],
          [1.044375, 2.05469, 1.07813],
          [7.15625, 1.57813, 1.64063],
          [7.15625, 1.57813, 1.64063],
          [2.67188, 2.49219, 1.51563],
          [2.67188, 2.49219, 1.51563],
          [2.80469, 2.30469, 1.11719],
          [2.80469, 2.30469, 1.11719],
          [5.99219, 1.64844, 1.76563],
          [5.99219, 1.64844, 1.76563],
          [5.03125, 1.77344, 1.14063],
          [5.03125, 1.77344, 1.14063],
          [1.046875, 2.14844, 1.1875],
          [1.046875, 2.14844, 1.1875],
          [3.24219, 1.875, 1.08594],
          [3.24219, 1.875, 1.08594],
          [7.03906, 2.71094, 1.61719],
          [7.03906, 2.71094, 1.61719],
          [5.35938, 2.55469, 0.875],
          [5.35938, 2.55469, 0.875],
          [4.875, 1.78906, 1.14844],
          [4.875, 1.78906, 1.14844],
          [5.14844, 1.17188, 1.25781],
          [5.14844, 1.17188, 1.25781],
          [3.97656, 1.64844, 1.07031],
          [3.97656, 1.64844, 1.07031],
          [4.54688, 1.35156, 0.84375],
          [4.54688, 1.35156, 0.84375],
          [4.71094, 0.74219, 0.99219],
          [4.71094, 0.74219, 0.99219],
          [6.03906, 1.95313, 0.8125],
          [6.03906, 1.95313, 0.8125],
          [4.48438, 1.25, 1.07031],
          [4.48438, 1.25, 1.07031],
          [2.07813, 2.85938, 1.24219],
          [2.07813, 2.85938, 1.24219],
          [5.51563, 1.83594, 0.96875],
          [5.51563, 1.83594, 0.96875],
          [3.375, 2.82031, 1.21875],
          [3.375, 2.82031, 1.21875],
          [4.64844, 2.30469, 0.88281],
          [4.64844, 2.30469, 0.88281],
          [4.24219, 1.92969, 0.88281],
          [4.24219, 1.92969, 0.88281],
          [2.21875, 1.26563, 0.78906],
          [2.21875, 1.26563, 0.78906],
          [5.23438, 1.92188, 1.58594],
          [5.23438, 1.92188, 1.58594],
          [3.97656, 1.76563, 1.40625],
          [3.97656, 1.76563, 1.40625],
          [2.46094, 1.88281, 1.28125],
          [2.46094, 1.88281, 1.28125],
          [3.14844, 1.44531, 1.32031],
          [3.14844, 1.44531, 1.32031],
          [2.625, 1.09375, 1.32031],
          [2.625, 1.09375, 1.32031],
          [6.41406, 3.125, 1.27344],
          [6.41406, 3.125, 1.27344],
          [4.50781, 3.00781, 1.03906],
          [4.50781, 3.00781, 1.03906],
          [4.875, 2.67969, 1.74219],
          [4.875, 2.67969, 1.74219],
          [4.09375, 3.21875, 1.17188],
          [4.09375, 3.21875, 1.17188],
          [4.36719, 2.45313, 1.11719],
          [4.36719, 2.45313, 1.11719],
          [5.25, 1.80469, 1.38281],
          [5.25, 1.80469, 1.38281],
          [2.14844, 2.77344, 1.35938],
          [2.14844, 2.77344, 1.35938],
          [2.85156, 2.40625, 1.29688],
          [2.85156, 2.40625, 1.29688],
          [3.76563, 1.85156, 1.34375],
          [3.76563, 1.85156, 1.34375],
          [4.09375, 0.78125, 1.36719],
          [4.09375, 0.78125, 1.36719],
          [5.13281, 1.75, 1.69531],
          [5.13281, 1.75, 1.69531],
          [5.58594, 2.23438, 1.38281],
          [5.58594, 2.23438, 1.38281],
          [4.0625, 1.74219, 0.82813],
          [4.0625, 1.74219, 0.82813],
          [5.0625, 2.55469, 1.1875],
          [5.0625, 2.55469, 1.1875],
          [6.36719, 2.10938, 0.86719],
          [6.36719, 2.10938, 0.86719],
          [2.80469, 1.84375, 1.09375],
          [2.80469, 1.84375, 1.09375],
          [3.64063, 1.96094, 1.1875],
          [3.64063, 1.96094, 1.1875],
          [5.63281, 2.40625, 1.04688],
          [5.63281, 2.40625, 1.04688],
          [6.99219, 0.96094, 1.17969],
          [6.99219, 0.96094, 1.17969],
          [4.03125, 0.91406, 0.875],
          [4.03125, 0.91406, 0.875],
          [6.14063, 2.42969, 1.11719],
          [6.14063, 2.42969, 1.11719],
          [5.60938, 2.38281, 1.26563],
          [5.60938, 2.38281, 1.26563],
          [3.40625, 1.78906, 0.78906],
          [3.40625, 1.78906, 0.78906],
          [3.98438, 1.64844, 1.07031],
          [3.98438, 1.64844, 1.07031],
          [3.19531, 1.64844, 0.94531],
          [3.19531, 1.64844, 0.94531],
          [3.60938, 2.50781, 1.28125],
          [3.60938, 2.50781, 1.28125],
          [6.82031, 3.51563, 1.53906],
          [6.82031, 3.51563, 1.53906],
        ],
        qe = Object(d.a)(function (e) {
          return {
            container_max: { width: "100%", height: "100%" },
            max_height: { height: "100vh", overflowY: "scroll" },
            responsive_img: { width: "100%", height: "auto" },
            transportControls: { position: "absolute", bottom: 25, left: 100 },
            controlFab: { position: "relative", margin: "0 5px" },
          };
        });
      var $e = { emitterData: ae },
        Qe = Object(u.b)(null, $e)(function (e) {
          var t = e.emitterData,
            a = qe(),
            n = i.a.useRef(),
            r = i.a.useState([]),
            o = Object(m.a)(r, 2),
            c = o[0],
            l = o[1],
            u = i.a.useState(!1),
            d = Object(m.a)(u, 2),
            h = d[0],
            O = d[1];
          function w() {
            O(!1);
          }
          function j(e) {
            console.log(">>>LOAD", e);
            for (
              var t = [],
                a = function () {
                  r = (r = e.map(function (e) {
                    return e[n];
                  })).filter(function (e, t, a) {
                    return !isNaN(e);
                  });
                  var a = Math.min.apply(Math, Object(s.a)(r)),
                    o = Math.max.apply(Math, Object(s.a)(r)),
                    i = r.map(function (e, t) {
                      return { x: t, y: (e - a) / (o - a) };
                    });
                  t[n] = i;
                },
                n = 0;
              n < e[0].length;
              n++
            ) {
              var r;
              a();
            }
            l(t), w();
          }
          return (
            i.a.useEffect(
              function () {
                U.Transport.clear();
                for (var e = 0; e < c.length; e++)
                  t({ name: "Channel ".concat(e), data: c[e] });
              },
              [c]
            ),
            i.a.createElement(
              "div",
              { style: { width: "100vw", height: "100vh" } },
              i.a.createElement(
                p.a,
                { container: !0, direction: "row" },
                i.a.createElement(
                  p.a,
                  {
                    item: !0,
                    component: f.a,
                    xs: 12,
                    md: 8,
                    className: a.max_height,
                  },
                  i.a.createElement(Oe, { sources: [], ref: n }),
                  i.a.createElement(Ve, null)
                ),
                i.a.createElement("div", {
                  style: { height: "5vh", width: 0 },
                }),
                i.a.createElement(
                  p.a,
                  {
                    item: !0,
                    component: f.a,
                    elevation: 3,
                    xs: 12,
                    md: 4,
                    className: a.max_height,
                    style: { position: "relative" },
                  },
                  i.a.createElement(
                    g.a,
                    {
                      className: a.container_max,
                      style: { overflowY: "scroll" },
                    },
                    i.a.createElement(
                      v.a,
                      { open: h, onClose: w },
                      i.a.createElement(y.a, null, "Load CSV EEG Recording"),
                      i.a.createElement(
                        x.a,
                        null,
                        i.a.createElement(E.a, {
                          onFileLoaded: j,
                          parserOptions: {
                            dynamicTyping: !0,
                            skipEmptyLine: !0,
                          },
                        }),
                        i.a.createElement("br", null),
                        i.a.createElement(
                          b.a,
                          {
                            color: "primary",
                            onClick: function () {
                              return j(Ye);
                            },
                          },
                          "Load Demo File"
                        ),
                        i.a.createElement("div", {
                          style: { minHeight: "50px" },
                        })
                      )
                    ),
                    c.length > 0
                      ? i.a.createElement(
                          Pe.e,
                          {
                            width: "100%",
                            height: 50,
                            style: { position: "sticky" },
                          },
                          i.a.createElement(
                            Pe.d,
                            { data: c[0], syncId: "anyId" },
                            i.a.createElement(Pe.a, { dataKey: "x" }),
                            i.a.createElement(Pe.g, { dataKey: "x" })
                          )
                        )
                      : null,
                    c.length > 0
                      ? c.map(function (e, t) {
                          return i.a.createElement(De, {
                            key: t,
                            name: "Channel ".concat(t),
                          });
                        })
                      : null
                  ),
                  i.a.createElement(F, { fDialog: O })
                )
              )
            )
          );
        });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Xe = a(21),
        Ze =
          (Object(Xe.combineReducers)({ emitters: ce, transport: ue }), a(247)),
        et = a(565),
        tt = (a(493), a(498), a(245)),
        at = a.n(tt),
        nt = a(246),
        rt = a.n(nt),
        ot = (a(496), a(90)),
        it =
          (rt.a,
          at.a,
          Object(Q.a)({
            reducer: { emitters: ce, transport: ue },
            middleware: [ot.a],
          })),
        ct = Object(Ze.a)({
          palette: {
            primary: { light: "#63ccff", main: "#009be5", dark: "#006db3" },
          },
          typography: {
            h5: { fontWeight: 500, fontSize: 26, letterSpacing: 0.5 },
          },
          shape: { borderRadius: 8 },
          props: { MuiTab: { disableRipple: !0 } },
          mixins: { toolbar: { minHeight: 48 } },
        });
      (ct = Object(r.a)(
        Object(r.a)({}, ct),
        {},
        {
          overrides: {
            MuiDrawer: { paper: { backgroundColor: "#18202c" } },
            MuiButton: {
              label: { textTransform: "none" },
              contained: {
                boxShadow: "none",
                "&:active": { boxShadow: "none" },
              },
            },
            MuiTabs: {
              root: { marginLeft: ct.spacing(1) },
              indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: ct.palette.common.white,
              },
            },
            MuiTab: {
              root: Object(n.a)(
                {
                  textTransform: "none",
                  margin: "0 16px",
                  minWidth: 0,
                  padding: 0,
                },
                ct.breakpoints.up("md"),
                { padding: 0, minWidth: 0 }
              ),
            },
            MuiIconButton: { root: { padding: ct.spacing(1) } },
            MuiTooltip: { tooltip: { borderRadius: 4 } },
            MuiDivider: { root: { backgroundColor: "#404854" } },
            MuiListItemText: {
              primary: { fontWeight: ct.typography.fontWeightMedium },
            },
            MuiListItemIcon: {
              root: {
                color: "inherit",
                marginRight: 0,
                "& svg": { fontSize: 20 },
              },
            },
            MuiAvatar: { root: { width: 32, height: 32 } },
          },
        }
      )),
        l.a.render(
          i.a.createElement(
            u.a,
            { store: it },
            i.a.createElement(et.a, { theme: ct }, i.a.createElement(Qe, null))
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[290, 1, 2]],
]);
//# sourceMappingURL=main.69593cb1.chunk.js.map
