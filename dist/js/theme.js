!(function(e) {
	var t = {};
	function n(o) {
		if (t[o]) return t[o].exports;
		var r = (t[o] = { i: o, l: !1, exports: {} });
		return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function(e, t, o) {
			n.o(e, t) ||
				Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: o,
				});
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
			return n.d(t, "a", t), t;
		}),
		(n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ""),
		n((n.s = 1));
})([
	function(e, t) {
		e.exports = function(e, t, n, o, r, a) {
			var i,
				d = (e = e || {}),
				s = typeof e.default;
			("object" !== s && "function" !== s) || ((i = e), (d = e.default));
			var c,
				l = "function" == typeof d ? d.options : d;
			if (
				(t &&
					((l.render = t.render),
					(l.staticRenderFns = t.staticRenderFns),
					(l._compiled = !0)),
				n && (l.functional = !0),
				r && (l._scopeId = r),
				a
					? ((c = function(e) {
							(e =
								e ||
								(this.$vnode && this.$vnode.ssrContext) ||
								(this.parent &&
									this.parent.$vnode &&
									this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(e = __VUE_SSR_CONTEXT__),
								o && o.call(this, e),
								e && e._registeredComponents && e._registeredComponents.add(a);
					  }),
					  (l._ssrRegister = c))
					: o && (c = o),
				c)
			) {
				var u = l.functional,
					f = u ? l.render : l.beforeCreate;
				u
					? ((l._injectStyles = c),
					  (l.render = function(e, t) {
							return c.call(t), f(e, t);
					  }))
					: (l.beforeCreate = f ? [].concat(f, c) : [c]);
			}
			return { esModule: i, exports: d, options: l };
		};
	},
	function(e, t, n) {
		n(2), (e.exports = n(13));
	},
	function(e, t, n) {
		Nova.booting(function(e, t) {
			e.component("nova-dark-theme-toggle", n(3));
		}),
			"true" === localStorage.darkThemeOn
				? (document.querySelector("html").classList.add("nova-dark-theme"),
				  document.querySelector("body").classList.add("nova-dark-theme"))
				: (document.querySelector("html").classList.remove("nova-dark-theme"),
				  document.querySelector("body").classList.remove("nova-dark-theme")),
			document.addEventListener(
				"DOMContentLoaded",
				function() {
					document
						.querySelector("meta[name=viewport]")
						.setAttribute(
							"content",
							"width=device-width, initial-scale=1, shrink-to-fit=no"
						),
						document
							.querySelector(".w-sidebar")
							.classList.add("sidebar-hidden");
					var e = document.createElement("span");
					(e.className = "hamburger-menu"),
						document.querySelector(".content .h-header").prepend(e),
						e.addEventListener(
							"click",
							function(e) {
								e.stopPropagation(),
									document
										.querySelector(".w-sidebar")
										.classList.toggle("sidebar-hidden");
							},
							!0
						),
						document
							.querySelectorAll(
								".w-sidebar a, .w-sidebar .cursor-pointer:not(.nc-head), .w-sidebar .nc-item-link"
							)
							.forEach(function(e) {
								e.addEventListener(
									"click",
									function() {
										document
											.querySelector(".w-sidebar")
											.classList.add("sidebar-hidden");
									},
									!1
								);
							}),
						document.querySelectorAll("body,html").forEach(function(e) {
							e.addEventListener("click", function(e) {
								var t = document.querySelector(".w-sidebar");
								e.target === t ||
									t.contains(e.target) ||
									t.classList.add("sidebar-hidden");
							});
						}),
						Nova.config.mmns &&
							(document.querySelectorAll(".w-sidebar h4").forEach(function(e) {
								(Nova.config.mmns.hide_all_sidebar_headlines ||
									-1 !==
										Nova.config.mmns.hidden_sidebar_headlines.indexOf(
											e.textContent
										)) &&
									e.classList.add("hidden");
							}),
							Nova.config.mmns.resource_tables_sticky_actions &&
								document.querySelectorAll(".content").forEach(function(e) {
									e.classList.add("sticky-actions");
								}),
							Nova.config.mmns.resource_tables_sticky_actions_on_mobile &&
								document.querySelectorAll(".content").forEach(function(e) {
									e.classList.add("sticky-actions-on-mobile");
								}),
							Nova.config.mmns.hide_update_and_continue_editing_button &&
								document.querySelectorAll(".content").forEach(function(e) {
									e.classList.add("hide-update-and-continue-editing-button");
								}),
							Nova.config.mmns
								.hide_update_and_continue_editing_button_on_mobile &&
								document.querySelectorAll(".content").forEach(function(e) {
									e.classList.add(
										"hide-update-and-continue-editing-button-on-mobile"
									);
								}),
							Nova.config.mmns.fixed_sidebar &&
								document.querySelector("body").classList.add("fixed-sidebar"));
				},
				!1
			);
	},
	function(e, t, n) {
		var o = n(0)(
			n(9),
			n(12),
			!1,
			function(e) {
				n(4);
			},
			"data-v-1fda6f16",
			null
		);
		e.exports = o.exports;
	},
	function(e, t, n) {
		var o = n(5);
		"string" == typeof o && (o = [[e.i, o, ""]]),
			o.locals && (e.exports = o.locals);
		n(7)("7437786e", o, !0, {});
	},
	function(e, t, n) {
		(e.exports = n(6)(!1)).push([
			e.i,
			".dark-mode-toggle[data-v-1fda6f16]{position:fixed;bottom:0;right:0;width:50px;height:50px;background:#ff5500;border-radius:.6rem 0 0;padding:1rem .6rem .6rem .8rem}.nova-dark-theme .dark-mode-toggle[data-v-1fda6f16]{background:#ff5500}.dark-mode-toggle[data-v-1fda6f16]:hover{background-color:#ff5577}.dark-mode-toggle[data-v-1fda6f16]:focus{outline:none}.nova-dark-theme .dark-mode-toggle[data-v-1fda6f16]:hover{background:#ff5577}.dark-mode-active[data-v-1fda6f16]{margin-bottom:-2px;color:#ffffff}.dark-mode-disabled[data-v-1fda6f16]{margin-bottom:-2px;-webkit-transform:rotate(180deg);transform:rotate(180deg);color:rgb(255 255 255)}",
			"",
		]);
	},
	function(e, t) {
		e.exports = function(e) {
			var t = [];
			return (
				(t.toString = function() {
					return this.map(function(t) {
						var n = (function(e, t) {
							var n = e[1] || "",
								o = e[3];
							if (!o) return n;
							if (t && "function" == typeof btoa) {
								var r =
										((i = o),
										"/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
											btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
											" */"),
									a = o.sources.map(function(e) {
										return "/*# sourceURL=" + o.sourceRoot + e + " */";
									});
								return [n]
									.concat(a)
									.concat([r])
									.join("\n");
							}
							var i;
							return [n].join("\n");
						})(t, e);
						return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
					}).join("");
				}),
				(t.i = function(e, n) {
					"string" == typeof e && (e = [[null, e, ""]]);
					for (var o = {}, r = 0; r < this.length; r++) {
						var a = this[r][0];
						"number" == typeof a && (o[a] = !0);
					}
					for (r = 0; r < e.length; r++) {
						var i = e[r];
						("number" == typeof i[0] && o[i[0]]) ||
							(n && !i[2]
								? (i[2] = n)
								: n && (i[2] = "(" + i[2] + ") and (" + n + ")"),
							t.push(i));
					}
				}),
				t
			);
		};
	},
	function(e, t, n) {
		var o = "undefined" != typeof document;
		if ("undefined" != typeof DEBUG && DEBUG && !o)
			throw new Error(
				"vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
			);
		var r = n(8),
			a = {},
			i = o && (document.head || document.getElementsByTagName("head")[0]),
			d = null,
			s = 0,
			c = !1,
			l = function() {},
			u = null,
			f = "data-vue-ssr-id",
			m =
				"undefined" != typeof navigator &&
				/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
		function h(e) {
			for (var t = 0; t < e.length; t++) {
				var n = e[t],
					o = a[n.id];
				if (o) {
					o.refs++;
					for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
					for (; r < n.parts.length; r++) o.parts.push(g(n.parts[r]));
					o.parts.length > n.parts.length && (o.parts.length = n.parts.length);
				} else {
					var i = [];
					for (r = 0; r < n.parts.length; r++) i.push(g(n.parts[r]));
					a[n.id] = { id: n.id, refs: 1, parts: i };
				}
			}
		}
		function p() {
			var e = document.createElement("style");
			return (e.type = "text/css"), i.appendChild(e), e;
		}
		function g(e) {
			var t,
				n,
				o = document.querySelector("style[" + f + '~="' + e.id + '"]');
			if (o) {
				if (c) return l;
				o.parentNode.removeChild(o);
			}
			if (m) {
				var r = s++;
				(o = d || (d = p())),
					(t = y.bind(null, o, r, !1)),
					(n = y.bind(null, o, r, !0));
			} else
				(o = p()),
					(t = function(e, t) {
						var n = t.css,
							o = t.media,
							r = t.sourceMap;
						o && e.setAttribute("media", o);
						u.ssrId && e.setAttribute(f, t.id);
						r &&
							((n += "\n/*# sourceURL=" + r.sources[0] + " */"),
							(n +=
								"\n/*# sourceMappingURL=data:application/json;base64," +
								btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
								" */"));
						if (e.styleSheet) e.styleSheet.cssText = n;
						else {
							for (; e.firstChild; ) e.removeChild(e.firstChild);
							e.appendChild(document.createTextNode(n));
						}
					}.bind(null, o)),
					(n = function() {
						o.parentNode.removeChild(o);
					});
			return (
				t(e),
				function(o) {
					if (o) {
						if (
							o.css === e.css &&
							o.media === e.media &&
							o.sourceMap === e.sourceMap
						)
							return;
						t((e = o));
					} else n();
				}
			);
		}
		e.exports = function(e, t, n, o) {
			(c = n), (u = o || {});
			var i = r(e, t);
			return (
				h(i),
				function(t) {
					for (var n = [], o = 0; o < i.length; o++) {
						var d = i[o];
						(s = a[d.id]).refs--, n.push(s);
					}
					t ? h((i = r(e, t))) : (i = []);
					for (o = 0; o < n.length; o++) {
						var s;
						if (0 === (s = n[o]).refs) {
							for (var c = 0; c < s.parts.length; c++) s.parts[c]();
							delete a[s.id];
						}
					}
				}
			);
		};
		var v,
			b =
				((v = []),
				function(e, t) {
					return (v[e] = t), v.filter(Boolean).join("\n");
				});
		function y(e, t, n, o) {
			var r = n ? "" : o.css;
			if (e.styleSheet) e.styleSheet.cssText = b(t, r);
			else {
				var a = document.createTextNode(r),
					i = e.childNodes;
				i[t] && e.removeChild(i[t]),
					i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
			}
		}
	},
	function(e, t) {
		e.exports = function(e, t) {
			for (var n = [], o = {}, r = 0; r < t.length; r++) {
				var a = t[r],
					i = a[0],
					d = { id: e + ":" + r, css: a[1], media: a[2], sourceMap: a[3] };
				o[i] ? o[i].parts.push(d) : n.push((o[i] = { id: i, parts: [d] }));
			}
			return n;
		};
	},
	function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 });
		var o = n(10),
			r = n.n(o);
		t.default = {
			name: "NovaDarkThemeToggle",
			props: {
				label: {
					type: String,
					required: !1,
					default: function() {
						return "Dark Theme";
					},
				},
			},
			data: function() {
				return { darkThemeOn: !1 };
			},
			components: { IconToggle: r.a },
			mounted: function() {
				window.matchMedia("(prefers-color-scheme: dark)").matches &&
				void 0 === localStorage.darkThemeOn
					? ((localStorage.darkThemeOn = "true"), (this.darkThemeOn = "true"))
					: (this.darkThemeOn = "true" === localStorage.darkThemeOn),
					"true" === localStorage.darkThemeOn &&
						(document.querySelector("html").classList.add("nova-dark-theme"),
						document.querySelector("body").classList.add("nova-dark-theme")),
					"false" === localStorage.darkThemeOn &&
						(document.querySelector("html").classList.remove("nova-dark-theme"),
						document.querySelector("body").classList.remove("nova-dark-theme"));
			},
			methods: {
				toggle: function() {
					(this.darkThemeOn = !this.darkThemeOn),
						(localStorage.darkThemeOn = this.darkThemeOn.toString()),
						document.querySelector("html").classList.toggle("nova-dark-theme"),
						document.querySelector("body").classList.toggle("nova-dark-theme");
				},
			},
		};
	},
	function(e, t, n) {
		var o = n(0)(null, n(11), !1, null, null, null);
		e.exports = o.exports;
	},
	function(e, t) {
		e.exports = {
			render: function() {
				var e = this.$createElement,
					t = this._self._c || e;
				return t(
					"svg",
					{
						staticClass: "svg-inline--fa fa-toggle-on fa-w-18",
						attrs: {
							xmlns: "http://www.w3.org/2000/svg",
							width: "48",
							height: "48",
							viewBox: "0 0 48 48",
							"aria-hidden": "true",
							focusable: "false",
							"data-prefix": "fas",
							"data-icon": "toggle-on",
							role: "img",
						},
					},
					[
						t("path", {
							attrs: {
								fill: "currentColor",
								d:
									"M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-1.79 0-3.48-.4-5-1.1 4.13-1.9 7-6.06 7-10.9s-2.87-9-7-10.9c1.52-.7 3.21-1.1 5-1.1 6.63 0 12 5.37 12 12s-5.37 12-12 12z",
							},
						}),
					]
				);
			},
			staticRenderFns: [],
		};
	},
	function(e, t) {
		e.exports = {
			render: function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"button",
					{
						staticClass:
							"block no-underline text-90 hover:bg-30 p-3 w-full text-left dark-mode-toggle",
						on: {
							click: function(t) {
								return e.toggle();
							},
						},
					},
					[
						e.darkThemeOn
							? n("icon-toggle", {
									staticClass:
										"w-4 h-4 text-black align-baseline ml-1 mr-4 dark-mode-active",
							  })
							: n("icon-toggle", {
									staticClass:
										"w-4 h-4 text-black align-baseline ml-1 mr-4 dark-mode-disabled",
							  }),
					],
					1
				);
			},
			staticRenderFns: [],
		};
	},
	function(e, t) {},
]);
