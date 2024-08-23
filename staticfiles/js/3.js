import {
	bk as ee,
	w as y,
	E as z,
	r as g,
	j as e,
	bl as H,
	s as u,
	u as A,
	b as f,
	c as T,
	g as se,
	a5 as N,
	bi as te,
	bj as ne,
	as as ae,
	q as G,
	D,
	bm as _,
	a7 as k,
	e as E,
	f as O,
	d as oe,
	B as Q,
	aw as L,
	bn as ie,
	I as re,
	bo as ce,
	bp as le,
	L as X,
	a2 as de,
	bg as me,
	bq as he,
	t as ue,
	aW as $,
	i as J,
	br as pe,
	bs as ge,
	bt as xe,
	k as Y,
	X as fe,
	G as Ce,
	bu as Pe,
	bv as Se,
	bw as M
} from "./index-bjx_j3SS.js";
import {
	u as q,
	a as je,
	R as ye,
	b as Ae
} from "./useShowResidencyConfirmation-3Bccbu_l.js";
import {
	u as Te
} from "./useClient-FNRZBCON.js";

function be(s, t) {
	return (s == null ? void 0 : s.filter(n => n.districtParentName === (t != null && t.isParent ? t == null ? void 0 : t.name : t == null ? void 0 : t.districtParentName)).map(n => {
		var i;
		return {
			...n,
			checked: t != null && t.isParent ? t != null && t.districtChildNames && (t == null ? void 0 : t.districtChildNames.length) > 0 ? (i = t == null ? void 0 : t.districtChildNames) == null ? void 0 : i.some(a => a === n.name) : t.name === n.districtParentName : (t == null ? void 0 : t.name) === n.name
		}
	})) || []
}
const K = s => ({
	hasCdExamsAvailable: s.some(t => t.hasCdExamsAvailable),
	hasPbExamsAvailable: s.some(t => t.hasPbExamsAvailable)
});

function Be(s) {
	const t = s.filter(i => i.checked),
		n = t.length === s.length;
	return t.reduce((i, a, l, r) => i != null && i.name ? {
		...i,
		ids: i.ids.concat(a.ids),
		centreIds: [...i.centreIds, ...a.centreIds],
		districtChildNames: n ? void 0 : [...i.districtChildNames ? ? [], a.name],
		...K(r)
	} : {
		ids: a.ids,
		centreIds: a.centreIds,
		name: a.districtParentName ? ? "",
		districtChildNames: n ? void 0 : [a.name],
		isParent: !0,
		...K(r)
	}, {})
}
const Ee = s => t => {
		const n = ee(t != null && t.length ? s.filter(o => o.value !== "closestToMe") : s)(t),
			i = n.reduce((o, d, m) => d.isParent && !o.some(p => p.name === d.name) ? [...o, {
				name: d.name
			}] : d.parentName && !o.some(p => p.name === d.parentName) ? [...o, {
				name: d.parentName,
				index: m
			}] : [...o], []);
		let a = n.filter(o => !o.parentName),
			l, r;
		return i.forEach(o => {
			const d = a.findIndex(C => C.name === o.name && C.isParent),
				m = o.index ? ? d,
				p = m >= l && m <= r ? r + 1 : m;
			if (d < 0) {
				const C = s.find(j => j.isParent && j.name === o.name);
				C && a.splice(p, 0, {
					...C
				})
			}
			const c = n.filter(C => C.parentName === o.name),
				h = s.filter(C => C.parentName === o.name && !c.some(j => j.name === C.name));
			[...c, ...h].forEach((C, j) => a.splice(p + j + 1, 0, C)), l = p, r = p + c.length + h.length
		}), a
	},
	ke = ({
		changeHandler: s,
		locations: t,
		selectedLocation: n
	}) => {
		const i = z(),
			[a, l] = g.useState([]);
		g.useEffect(() => {
			l(be(t, n))
		}, [t, n]);
		const r = (o, d) => {
			l(m => {
				const p = m.map(c => ({
					...c,
					checked: c.name === o ? d : c.checked
				}));
				return p.some(c => c.checked) ? i(u.actions.setActiveLocation(Be(p))) : s(), p
			})
		};
		return e.jsx(Re, {
			children: a == null ? void 0 : a.map((o, d) => e.jsx("div", {
				children: e.jsx(H, {
					pill: !0,
					checked: o.checked ? ? !1,
					handleChange: m => r(o.name, m),
					children: o.name
				})
			}, d))
		})
	},
	Re = y.div `
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: -0.5em;

  > div {
    flex: 0 0 auto;
    margin-right: 1em;
  }
`;
var we = {
	BASE_URL: "/",
	MODE: "production",
	DEV: !1,
	PROD: !0,
	SSR: !1
};
const Fe = ({
		activeCountry: {
			redirectUrl: s,
			isoCode2: t
		}
	}) => {
		const {
			t: n
		} = A(), {
			organisationAlias: i,
			organisationDetails: a
		} = f(c => c.organisationCountry), {
			examType: l,
			selectedProductId: r
		} = f(c => c.searchSelect), [o, d] = g.useState("");
		g.useEffect(() => {
			async function c() {
				const h = await T.appSettings(te, ne, we.REACT_APP_ENV);
				d(h.ieltsUsaUrl)
			}
			c()
		}, []);
		const m = t === T.countryIsoCode2.UNITED_STATES_OF_AMERICA,
			p = Ne(m, o, l, se(), a.data, r) || Ie(s);
		return e.jsxs(N, {
			type: "danger",
			title: n("APPB2C.common.basic.wereSorry"),
			style: {
				marginTop: "20px"
			},
			children: [n("APPB2C.common.findTest.selectCountry.countryNotSupported"), e.jsx("div", {
				style: {
					marginTop: "10px"
				},
				children: e.jsx("a", {
					className: "btn btn-primary",
					href: p,
					children: n("APPB2C.common.findTest.selectCountry.continue")
				})
			})]
		})
	},
	ve = (s, t, n) => {
		const i = new URLSearchParams;
		return t && i.append("examType", t), n && i.append("productId", n), `${s}` + T.getSearchParamSuffix(i).replace("organisation=", "organization=")
	};

function Ie(s) {
	return s || T.icLinks.takeIelts
}

function Ne(s, t, n, i, a, l) {
	if (s) return ve(t, n, l);
	if (i === "ukvi" && (a != null && a.ukviRedirectUrl)) return a == null ? void 0 : a.ukviRedirectUrl
}
const W = ({
		title: s,
		subtitle: t
	}) => e.jsxs(qe, {
		children: [e.jsx("div", {
			children: s
		}), e.jsx("span", {
			children: t
		})]
	}),
	qe = y.div `
  span {
    font-size: 0.8em;
  }
`,
	De = ({
		filters: s,
		showSpecialReq: t,
		invitationContext: n
	}) => {
		const {
			t: i
		} = A(), a = z(), l = f(u.selectors.isUkvi), r = f(u.selectors.isUkviLifeSkills);
		g.useEffect(() => {
			if (n) {
				a(ae.thunks.setInvitationFilters(n));
				return
			}
		}, [a, n]);
		const o = p => {
				switch (p) {
					case k.ExamFormat.CD:
						return G.ExamOptionType.IELTSCDUKVILRW;
					default:
						return G.ExamOptionType.IELTSUKVILRW
				}
			},
			d = g.useCallback(p => {
				a(u.actions.setFilter({
					examFormat: p
				})), l && !r && a(u.actions.setUkviSpecificData({
					examOptionType: o(p)
				}))
			}, [a, l, r]);
		return t || (n == null ? void 0 : n.examFormat) && (n == null ? void 0 : n.examFormat) !== G.BatchExamFormat.Both ? null : e.jsxs(e.Fragment, {
			children: [e.jsx(D, {}), e.jsx("h2", {
				"data-testid": "exam-format",
				children: i("APPB2C.common.findTest.examFormat.title")
			}), e.jsxs("div", {
				className: "form-group",
				children: [e.jsx(_, {
					checkedValue: k.ExamFormat.CD,
					value: s == null ? void 0 : s.examFormat,
					name: "computerDelivered",
					"data-testid": "computer-delivered",
					onChange: () => d(k.ExamFormat.CD),
					children: e.jsx(W, {
						title: i("APPB2C.common.findTest.examFormat.cd"),
						subtitle: i("APPB2C.common.findTest.examFormat.results", {
							days: l ? "3-5" : "1-5"
						})
					})
				}), e.jsx(_, {
					checkedValue: k.ExamFormat.PB,
					value: s == null ? void 0 : s.examFormat,
					name: "paperBased",
					"data-testid": "paper-based",
					onChange: () => d(k.ExamFormat.PB),
					children: e.jsx(W, {
						title: i("APPB2C.common.findTest.examFormat.pb"),
						subtitle: i("APPB2C.common.findTest.examFormat.results", {
							days: 13
						})
					})
				}), e.jsx(_, {
					checkedValue: void 0,
					value: s == null ? void 0 : s.examFormat,
					name: "chooseAll",
					"data-testid": "choose-all",
					onChange: () => d(void 0),
					children: e.jsx(W, {
						title: i("APPB2C.common.findTest.examFormat.all")
					})
				})]
			})]
		})
	},
	Oe = ({
		onChange: s,
		countries: t,
		activeCountry: n,
		isLoading: i
	}) => {
		const {
			t: a
		} = A(), l = (t || []).map(r => ({
			name: r.name ? ? "",
			value: r.id.toString()
		}));
		return g.useEffect(() => {
			setTimeout(() => {
				var r;
				(r = document.querySelector("#select-country input")) == null || r.focus()
			}, 40)
		}, []), e.jsxs("label", {
			style: {
				width: "100%"
			},
			children: [a("APPB2C.common.findTest.selectCountry.label"), e.jsx(E.BcSelect, {
				autoFocus: !0,
				id: "select-country",
				isLoading: i,
				placeholder: a("APPB2C.common.findTest.selectCountry.placeholder"),
				options: l,
				value: n != null && n.id ? n == null ? void 0 : n.id.toString() : "",
				onChange: r => {
					const o = t == null ? void 0 : t.find(d => d.id.toString() === r);
					s(o)
				}
			})]
		})
	},
	Ue = (s, t, n, i) => {
		if (!(t.value === "closestToMe" && window.document.documentMode)) return e.jsx(Le, {
			...s,
			className: i,
			type: "button",
			children: e.jsxs(ze, {
				children: [e.jsx(Ge, {
					children: t.value === "closestToMe" && e.jsx(ie, {})
				}), t.parentName ? e.jsxs(e.Fragment, {
					children: [e.jsx(_e, {
						children: e.jsx(We, {})
					}), e.jsx("span", {
						"data-testid": "is-child",
						children: t.name
					})]
				}) : e.jsx("span", {
					"data-testid": "is-parent",
					children: t.name
				})]
			})
		})
	},
	Ve = ({
		onChange: s,
		activeLocation: t,
		displayVenues: n,
		isLoading: i,
		locations: a,
		locationCoords: l
	}) => {
		const r = O(),
			{
				t: o
			} = A(),
			[d, m] = g.useState(!1),
			c = oe.hasIeltsUsaUrl() ? T.icLinks.usa.contactUs : T.icLinks.contactUs,
			h = T.hasOrganisationInUrl(),
			C = g.useMemo(() => {
				const b = (a || []).map(x => ({
					name: x.name ? ? "",
					value: x.ids + (x.isParent ? ":parent" : ""),
					isParent: x.isParent,
					parentName: x.districtParentName
				}));
				return n && b.unshift({
					name: o("APPB2C.common.findTest.selectLocation.closestToMe"),
					value: "closestToMe",
					isParent: void 0,
					parentName: void 0
				}), b
			}, [a, n, o]),
			j = b => {
				const x = a == null ? void 0 : a.find(B => B.ids.toString() === String(b).split(":")[0]);
				if (!x) {
					navigator.geolocation.getCurrentPosition(B => {
						m(!1), s(void 0, {
							latitude: B.coords.latitude,
							longitude: B.coords.longitude
						})
					}, () => {
						m(!0), s(void 0, void 0)
					});
					return
				}
				s(x, void 0)
			},
			R = () => {
				r(re.actions.resetOrganisation()), window.location.search = ""
			};
		return !i && a && !a.length ? h ? e.jsxs(N, {
			type: "warning",
			title: o("APPB2C.common.basic.wereSorry"),
			style: {
				marginTop: "2em"
			},
			children: [e.jsx("p", {
				style: {
					marginBottom: "10px"
				},
				children: o("APPB2C.common.findTest.selectLocation.noExamForThisOrganisation")
			}), e.jsxs("ul", {
				style: {
					marginTop: "10px"
				},
				children: [e.jsx("li", {
					children: o("APPB2C.common.findTest.selectLocation.noExamForThisOrganisation.option1")
				}), e.jsx(Q, {
					intent: "primary",
					size: "sm",
					onClick: R,
					children: o("APPB2C.common.findTest.selectLocation.noExamForThisOrganisation.cta")
				}), e.jsx("li", {
					style: {
						marginTop: "15px"
					},
					children: e.jsxs(L, {
						t: o,
						i18nKey: "APPB2C.common.findTest.selectLocation.noExamForThisOrganisation.option2",
						children: [".", e.jsx(E.ExternalLink, {
							href: c,
							showIcon: !1,
							children: "contact us"
						}), " ", "and we will try to help you"]
					})
				})]
			})]
		}) : e.jsx(N, {
			type: "warning",
			title: o("APPB2C.common.basic.wereSorry"),
			style: {
				marginTop: "2em"
			},
			children: e.jsxs(L, {
				t: o,
				i18nKey: "APPB2C.common.findTest.selectLocation.noExamForThisCountry",
				children: ["We can't find any tests in this country. Please try to change location, or", e.jsx(E.ExternalLink, {
					href: c,
					showIcon: !1,
					children: "contact us"
				})]
			})
		}) : e.jsxs(e.Fragment, {
			children: [e.jsx(Me, {
				children: e.jsx(E.BcSelect, {
					autoFocus: !0,
					id: "select-location",
					isLoading: i,
					placeholder: o("APPB2C.common.findTest.selectLocation.label"),
					options: C,
					value: l ? "closestToMe" : t != null && t.ids ? t == null ? void 0 : t.ids.toString() : "",
					onChange: j,
					renderOption: Ue,
					filterOptions: Ee
				})
			}), d && e.jsx(N, {
				type: "warning",
				title: o("APPB2C.common.basic.wereSorry"),
				style: {
					marginTop: "2em"
				},
				children: o("APPB2C.common.findTest.selectLocation.geolocationBlocked")
			})]
		})
	},
	Me = y.label `
  width: 100%;
  margin-top: 20px;
`,
	Le = y.button `
  padding-left: 0;
`,
	ze = y.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`,
	Ge = y.div `
  margin-left: -10px;
  margin-right: 5px;
  width: 22px;
  max-height: 36px;
  margin-top: 0px;
  margin-bottom: 0px;

  > svg {
    max-height: 26px;
  }
`,
	_e = y.div `
  width: 16px;
  margin: 0 10px;

  > svg {
    opacity: 0.8;
  }
`,
	We = ({
		...s
	}) => e.jsx("svg", {
		...s,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		children: e.jsx("path", {
			fillRule: "evenodd",
			d: "M1,12V5h3v6h10V8l5,4.5L14,17v-3H3C1.895,14,1,13.104,1,12z"
		})
	}),
	He = ({
		specialReqs: s,
		needSpecialReqs: t,
		otherSpecialReqs: n,
		loading: i = !1,
		showNote: a
	}) => {
		const {
			t: l
		} = A(), r = z(), o = f(c => {
			var h;
			return (h = c.organisationCountry.organisationDetails) == null ? void 0 : h.data
		}), d = ce(s, "id"), m = le(d), p = (c, h) => {
			r(u.actions.updateSpecialReq({
				id: c,
				checked: h
			}))
		};
		return e.jsx(X, {
			loading: i,
			children: e.jsxs(Ke, {
				children: [e.jsx(H, {
					checked: t,
					handleChange: c => r(u.thunksCommon.needSpecialReqsToggled(c)),
					id: "need-special-reqs",
					children: e.jsxs(L, {
						t: l,
						i18nKey: "APPB2C.common.findTest.specialReqs.needCheckbox",
						children: ["I have ", e.jsx("b", {
							children: "accessibility"
						}), " needs for the test date"]
					})
				}), e.jsx("p", {
					className: "small margin-bottom-sm-20",
					children: e.jsx(E.ExternalLink, {
						className: "link",
						href: (o == null ? void 0 : o.helpPageUrl) || T.icLinks.specialRequirements,
						children: l("APPB2C.common.findTest.specialReqs.findOutMore")
					})
				}), t && e.jsxs("div", {
					"data-testid": "special-requirements",
					children: [e.jsx("h2", {
						children: l("APPB2C.common.findTest.specialReqs.list.title")
					}), e.jsx("div", {
						className: "help",
						children: l("APPB2C.common.findTest.specialReqs.list.subtitle")
					}), d == null ? void 0 : d.map(c => e.jsx($e, {
						sr: c,
						onChange: p
					}, c.id)), m && e.jsx(de, {
						onChange: c => {
							r(u.actions.updateOtherSpecialReq(c))
						},
						name: "otherSpecialReq",
						value: n || "",
						onBlur: () => {},
						label: l("APPB2C.common.findTest.specialReqs.other"),
						error: !n || n.length < 1 ? l("APPB2C.common.basic.forms.requiredMessage") : void 0,
						touched: !0
					}), a && e.jsx(me, {
						type: "note",
						title: l("APPB2C.common.basic.pleaseNote"),
						children: e.jsx("p", {
							children: l("APPB2C.common.findTest.specialReqs.pleaseNoteMessage")
						})
					})]
				})]
			})
		})
	},
	$e = ({
		sr: s,
		onChange: t
	}) => {
		const {
			t: n
		} = A(), i = g.useMemo(() => {
			switch (s.shortCode) {
				case "AMANU":
					return n("APPB2C.common.specialReqs.AMANU", {
						defaultValue: s.name
					});
				case "ANTHR":
					return n("APPB2C.common.specialReqs.ANTHR", {
						defaultValue: s.name
					});
				case "BTP":
					return n("APPB2C.common.specialReqs.BTP", {
						defaultValue: s.name
					});
				case "BWP":
					return n("APPB2C.common.specialReqs.BWP", {
						defaultValue: s.name
					});
				case "EPTP":
					return n("APPB2C.common.specialReqs.EPTP", {
						defaultValue: s.name
					});
				case "ET":
					return n("APPB2C.common.specialReqs.ET", {
						defaultValue: s.name
					});
				case "LRTV":
					return n("APPB2C.common.specialReqs.LRTV", {
						defaultValue: s.name
					});
				case "SAE":
					return n("APPB2C.common.specialReqs.SAE", {
						defaultValue: s.name
					});
				case "VAS":
					return n("APPB2C.common.specialReqs.VAS", {
						defaultValue: s.name
					});
				case "WP":
					return n("APPB2C.common.specialReqs.WP", {
						defaultValue: s.name
					});
				default:
					return null
			}
		}, [s.name, s.shortCode, n]);
		return e.jsx(H, {
			checked: s.checked,
			"data-testid": "special-req-" + s.shortCode,
			handleChange: a => t(s.id, a),
			children: i
		})
	},
	Ke = y.div `
  > .checkbox {
    margin-top: 0;
    margin-bottom: 0.75em;
  }

  .bc-alert-note {
    margin-top: 2em;
  }

  h2 {
    margin-bottom: 10px;
  }
  .help {
    margin-bottom: 20px;
    font-size: 16px;
  }
`,
	ns = ({
		showNote: s
	}) => {
		const {
			showCountryNotSupported: t,
			isCdOnly: n
		} = q(), i = f(u.selectors.getShowSpecialNeeds), {
			specialReqs: a,
			fetchingSpecialReqs: l,
			needSpecialReqs: r,
			otherSpecialReqs: o
		} = f(d => d.searchSelect);
		return e.jsx(e.Fragment, {
			children: i && !t && !n && e.jsxs(e.Fragment, {
				children: [e.jsx(D, {}), e.jsx(He, {
					loading: l,
					needSpecialReqs: r,
					specialReqs: a || [],
					otherSpecialReqs: o,
					showNote: s
				})]
			})
		})
	},
	as = () => {
		const {
			t: s
		} = A(), {
			showExamFormatChooser: t
		} = q(), n = O(), {
			needSpecialReqs: i,
			activeCountry: a
		} = f(m => m.searchSelect), l = f(u.selectors.getFilters), {
			invitationContext: r
		} = f(m => m.invitation), o = f(u.selectors.isUkviLifeSkills), d = (l == null ? void 0 : l.examFormat) !== k.ExamFormat.CD && (a == null ? void 0 : a.hasOsrEnabled);
		return g.useEffect(() => {
			(!t || o) && n(u.actions.setFilter({
				examFormat: void 0
			}))
		}, [n, t]), e.jsx(e.Fragment, {
			children: t && !o && e.jsxs(e.Fragment, {
				children: [e.jsx(De, {
					filters: l,
					showSpecialReq: i,
					invitationContext: r == null ? void 0 : r.data
				}), d && e.jsxs(N, {
					type: "warning",
					size: "sm",
					children: [e.jsx("p", {
						style: {
							marginBottom: "10px"
						},
						children: e.jsx(L, {
							i18nKey: "APPB2C.common.findTest.osrInfo",
							components: {
								bold: e.jsx("strong", {})
							}
						})
					}), e.jsx("p", {
						children: e.jsx(E.ExternalLink, {
							href: T.icLinks.aboutOsr,
							className: "link",
							children: s("APPB2C.common.findTest.osrInfoLink")
						})
					})]
				})]
			})
		})
	},
	Ze = ({
		chosenSpecialReqs: s
	}) => {
		const {
			t
		} = A(), [n, i] = g.useState(), [a, l] = g.useState(), [r, o] = g.useState(!1), [d, m] = g.useState(!1), p = f(w => {
			var F;
			return (F = w.searchSelect.activeLocation) == null ? void 0 : F.centreIds[0]
		}), c = f(w => {
			var F, U, V;
			return (V = (U = (F = w.searchSelect.locationsList.data) == null ? void 0 : F[0]) == null ? void 0 : U.centreIds) == null ? void 0 : V[0]
		}), h = p || c, j = {
			mustBeLoggedIn: !1,
			enabled: !!(s && h)
		}, R = he() ? ue.centreClient : k.centreClient, {
			status: b,
			data: x,
			error: B
		} = Te(() => R.getCentreContactDetails(h), j);
		g.useEffect(() => {
			o(b === "PENDING")
		}, [b]), g.useEffect(() => {
			!(x != null && x.publicEmail) || !(x != null && x.publicTel) ? m(!0): (m(!1), i(x == null ? void 0 : x.publicTel), l(x == null ? void 0 : x.publicEmail))
		}, [x]), g.useEffect(() => {
			B && m(!0)
		}, [B]);
		const S = t(s ? "APPB2C.common.findTest.dates.noresultsSpecialReqs.title" : "APPB2C.common.findTest.dates.noresults.title"),
			v = t(s ? "APPB2C.common.findTest.dates.noresultsSpecialReqs.details" : "APPB2C.common.findTest.dates.noresults.details");
		return e.jsxs(e.Fragment, {
			children: [e.jsx(D, {}), r ? e.jsx(X, {
				loading: !0
			}) : e.jsx(N, {
				title: S,
				type: "warning",
				children: e.jsxs(e.Fragment, {
					children: [v, s && e.jsx(E.CentreContactInfo, {
						hasError: d,
						phone: n,
						email: a
					})]
				})
			})]
		})
	},
	os = () => {
		const {
			showCountryNotSupported: s,
			isErrorVisible: t
		} = q(), {
			availableDates: {
				error: n
			},
			activeCountry: i
		} = f(d => d.searchSelect), a = f(u.selectors.isChosenSpecialReqs), {
			needSpecialReqs: l
		} = f(d => d.searchSelect), r = t && !s && (n == null ? void 0 : n.type) === $.ServerError, o = t && !s && (n == null ? void 0 : n.type) !== $.ServerError;
		return e.jsxs(e.Fragment, {
			children: [o && e.jsx(Ze, {
				chosenSpecialReqs: l || a
			}), s && i && e.jsx(Fe, {
				activeCountry: i
			}), r && n && e.jsx(E.ApiErrorsAlert, {
				apiError: n.type
			})]
		})
	},
	is = () => {
		const s = O(),
			{
				showExamsCalendar: t
			} = q(),
			{
				locale: n,
				localeDate: i
			} = J(),
			{
				availableDates: {
					data: a
				},
				activeLocation: l,
				showAllDates: r,
				datesRange: o,
				locationCoords: d
			} = f(h => h.searchSelect),
			m = f(u.selectors.noExamsAvailableInSelectedDates(a || [])),
			p = g.useCallback(h => {
				const C = h ? pe(h, a) : void 0;
				s(u.actions.datesRangeChanged(C))
			}, [s, a]),
			c = h => {
				s(u.actions.showAllDatesToggled(h))
			};
		return e.jsx(e.Fragment, {
			children: t && e.jsxs(e.Fragment, {
				children: [e.jsx(D, {}), e.jsx(E.CustomCalendar, {
					showAllDates: r,
					chooseDatesDisabled: !l && !d,
					handleAllDatesToggle: c,
					datesRange: o,
					availableDates: a,
					onDatesChange: p,
					localeDateFunction: i,
					noExamsAvailableInSelectedDates: m,
					currentLang: n
				})]
			})
		})
	},
	rs = () => {
		const s = O(),
			{
				t
			} = A(),
			{
				showCountryNotSupported: n
			} = q(),
			{
				showResidencyConfirmationMsg: i
			} = je(),
			{
				availableDates: {
					data: a
				},
				activeLocation: l,
				locationCoords: r
			} = f(p => p.searchSelect),
			o = f(u.selectors.isSearchButtonEnabled),
			d = (l || r) && !n && !ge(a),
			m = () => s(u.thunksOrs.proceed());
		return e.jsx(e.Fragment, {
			children: d && e.jsxs(e.Fragment, {
				children: [e.jsx(D, {}), e.jsx(Qe, {
					children: i ? e.jsx(ye, {
						type: Ae.warning,
						disabled: !o,
						btnTestId: "search-for-tests",
						action: m
					}) : e.jsx(Q, {
						intent: "primary",
						"data-testid": "search-for-tests",
						disabled: !o,
						onClick: m,
						children: t("APPB2C.common.findTest.cta")
					})
				})]
			})
		})
	},
	Qe = y.div `
  margin-top: 2em;
`,
	Xe = () => {
		const s = O(),
			{
				locale: t
			} = J(),
			{
				isLoading: n
			} = f(r => r.organisationCountry.organisationDetails),
			i = f(r => {
				var o;
				return (o = r.organisationCountry.organisationDetails.data) == null ? void 0 : o.organisationId
			}),
			{
				data: a,
				isFetching: l
			} = xe({
				locale: t,
				awardingBodySystem: k.AwardingBodySystem.CMDS,
				productFamilyId: Y(),
				organisationId: i
			}, {
				skip: !t || n
			});
		g.useEffect(() => {
			if (s(u.actions.updateCountriesList({
					isLoading: !0
				})), a && (s(u.actions.updateCountriesList({
					isLoading: !1,
					data: a
				})), a.length === 1)) {
				const r = a[0];
				s(u.actions.setActiveCountry(r))
			}
		}, [a, l])
	},
	cs = ({
		forcedCountryIsoCode2: s
	}) => {
		const {
			t
		} = A(), n = z(), {
			showCountryNotSupported: i
		} = q(), {
			deeplinkToken: a
		} = f(P => P.invitation), {
			currentLanguage: l,
			showLanguageOptionsModal: r
		} = f(P => P.language), {
			countriesList: {
				data: o,
				isLoading: d
			},
			locationsList: {
				data: m,
				isLoading: p
			},
			activeCountry: c,
			activeLocation: h,
			locationCoords: C
		} = f(P => P.searchSelect);
		Xe();
		const [j, R] = g.useState(!c), [b, x] = g.useState(!h), B = i || r, S = g.useMemo(() => s ? o == null ? void 0 : o.filter(P => P.isoCode2 === s) : o, [o, s]), v = (S == null ? void 0 : S.length) === 1, w = T.getOrganisationAlias(), F = (S == null ? void 0 : S.length) === 1 || a !== null || !!s || p, U = g.useCallback(() => {
			n(u.actions.setActiveCountry(void 0)), n(u.actions.setActiveLocation(void 0)), R(!0), Ce.trackRegistrationEvent("changeCountry")
		}, []), V = g.useCallback(P => {
			if (R(!1), P) {
				n(u.thunksCommon.setActiveCountry(P));
				const {
					activeCountryHasLangs: I
				} = Pe(l, P);
				I && n(Se.actions.setShowLanguageOptionsModal(!0))
			}
		}, []);
		return g.useEffect(() => {
			const P = v && !!w;
			R((!c || !c.id) && !P)
		}, [c, v, w]), g.useEffect(() => {
			x((!h || !(h != null && h.ids && h.ids.length)) && !C)
		}, [c, h, C, w]), g.useEffect(() => {
			var P;
			v && S && (c == null ? void 0 : c.id) !== ((P = S[0]) == null ? void 0 : P.id) && n(u.thunksCommon.setActiveCountry(S[0]))
		}, [v, n, S == null ? void 0 : S.length]), g.useEffect(() => {
			if (c) {
				const P = o == null ? void 0 : o.find(I => I.id === (c == null ? void 0 : c.id));
				P && n(u.actions.setActiveCountry(P))
			}
		}, [o]), g.useEffect(() => {
			c && c.productFamilyId !== Y() && !s && n(u.actions.setActiveCountry(void 0))
		}, []), e.jsxs(e.Fragment, {
			children: [e.jsx("h2", {
				children: t("APPB2C.common.findTest.subtitle")
			}), j ? e.jsx(Oe, {
				isLoading: d,
				activeCountry: c,
				countries: S,
				onChange: V
			}) : e.jsxs(e.Fragment, {
				children: [e.jsx(Z, {
					linkText: t("APPB2C.common.findTest.changeCountry"),
					type: "country",
					selectionText: c == null ? void 0 : c.name,
					changeHandler: U,
					disabled: F
				}), B ? null : b ? e.jsx(Ve, {
					onChange: (P, I) => {
						x(!P && !I), n(u.thunksCommon.setGelocation(I)), n(u.thunksCommon.setActiveLocation(P))
					},
					displayVenues: (c == null ? void 0 : c.displayVenues) || !1,
					isLoading: p,
					locations: m,
					locationCoords: C
				}) : e.jsx(Z, {
					linkText: t("APPB2C.common.findTest.changeCity"),
					type: "location",
					selectionText: C ? t("APPB2C.common.findTest.selectLocation.closestToMe") : (h == null ? void 0 : h.districtParentName) || (h == null ? void 0 : h.name),
					locations: m,
					selectedLocation: h,
					changeHandler: () => {
						n(u.actions.setActiveLocation(void 0)), x(!0)
					}
				})]
			})]
		})
	},
	Z = ({
		type: s,
		linkText: t,
		changeHandler: n,
		selectionText: i = "",
		disabled: a = !1,
		locations: l,
		selectedLocation: r
	}) => {
		const {
			t: o
		} = A();
		return e.jsxs(e.Fragment, {
			children: [e.jsxs(Ye, {
				disabled: a,
				children: [e.jsxs("span", {
					children: [o("APPB2C.common.findTest.searchIn"), " ", e.jsx("b", {
						"data-testid": "selected-" + s,
						children: i
					})]
				}), e.jsx(Je, {
					onClick: n,
					id: "btn-change-" + s,
					disabled: a,
					children: t
				})]
			}), ((r == null ? void 0 : r.isParent) || !!(r != null && r.districtParentName)) && e.jsx(ke, {
				locations: l,
				selectedLocation: r,
				changeHandler: n
			})]
		})
	},
	Je = y(fe)
`
  padding: 0;
  white-space: nowrap;
  border: none;
`, Ye = y.div `
  display: flex;
  margin-bottom: 0.5em;
  align-items: flex-start;

  > span {
    flex: 1 1 auto;
  }
  button {
    color: ${({disabled:s})=>s?"#999":"auto"};
    text-decoration: ${({disabled:s})=>s?"none":"auto"};
    cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};
  }
`, ls = s => {
	var d;
	const t = M.getState(),
		n = (d = t.searchSelect.activeCountry) == null ? void 0 : d.displayVenues,
		{
			deeplinkToken: i
		} = t.invitation,
		a = t.searchSelect.locationsList.data,
		{
			activeLocation: l,
			locationCoords: r
		} = t.searchSelect,
		o = a == null ? void 0 : a.find(m => s && m.name === (l == null ? void 0 : l.name));
	setTimeout(() => {
		var m;
		a && a.length === 1 && (!n || i) ? M.dispatch(u.actions.setActiveLocation(a[0])) : s ? !o && r ? M.dispatch(u.actions.setGeolocationPosition({
			...r
		})) : M.dispatch(u.actions.setActiveLocation(o)) : (m = document.querySelector("#select-location input")) == null || m.focus()
	}, 40)
};
export {
	os as B, cs as C, as as E, rs as P, ns as S, is as a, ls as s
};
//# sourceMappingURL=helpers-77i5t8HH.js.map