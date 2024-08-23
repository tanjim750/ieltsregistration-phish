import {
	E as L,
	c as S,
	b9 as k,
	k as v,
	i as E,
	b as e,
	I as T,
	s as n,
	r as f,
	q as b,
	ba as y,
	a7 as R,
	u as B,
	bb as q,
	j as t,
	e as w,
	P as N,
	L as U,
	a as V
} from "./index-bjx_j3SS.js";
import {
	u as F
} from "./useShowResidencyConfirmation-3Bccbu_l.js";
import {
	s as _,
	C as G,
	S as M,
	E as Q,
	a as H,
	B as K,
	P as $
} from "./helpers-77i5t8HH.js";
import "./useClient-FNRZBCON.js";

function z() {
	const o = L(),
		l = S.getOrganisationAlias(),
		{
			showExamFormatChooser: u
		} = F();
	k({
		alias: l,
		productFamilyId: v(),
		locale: E().locale
	});
	const m = e(s => {
			var a;
			return (a = s.searchSelect.activeLocation) == null ? void 0 : a.ids
		}),
		d = e(T.selectors.getOrgId),
		i = e(s => s.organisationCountry.organisationDetails.error),
		r = e(s => {
			var a;
			return (a = s.searchSelect.activeCountry) == null ? void 0 : a.id
		}),
		c = e(s => s.searchSelect.locationCoords),
		C = e(s => s.searchSelect.countriesList.isLoading),
		j = e(s => {
			var a;
			return (a = s.searchSelect.activeCountry) == null ? void 0 : a.displayVenues
		}),
		x = e(s => {
			var a;
			return (a = s.searchSelect.activeCountry) == null ? void 0 : a.productFamilyId
		}),
		{
			deeplinkToken: I
		} = e(s => s.invitation),
		{
			filter: g,
			ieltsModule: D,
			needSpecialReqs: O,
			specialReqs: h
		} = e(s => s.searchSelect),
		p = e(n.selectors.isCdOnly),
		P = ((h == null ? void 0 : h.filter(s => s.checked)) || []).map(s => s.id).join(","),
		A = u && (g == null ? void 0 : g.examFormat);
	f.useEffect(() => {
		o(n.thunksOrs.loadData())
	}, [o]), f.useEffect(() => {
		x === b.ProductFamilies.UKVI && (o(n.actions.softReset()), o(n.thunksOrs.loadData()))
	}, [o, x]), y(() => {
		p && o(n.actions.setFilter({
			examFormat: R.ExamFormat.CD
		})), !C && r && o(n.thunksOrs.loadLocations()).then(_)
	}, 100, [o, l, r, p, j, I, C, i, d]), y(() => o(n.thunksOrs.loadDatesAvailable()), 500, [o, O, P, D, d, A, m, r, c])
}
const Z = () => {
	const {
		t: o
	} = B(), {
		isFetching: l
	} = q({
		locale: E().locale
	});
	z();
	const {
		isIeltsUsa: u,
		showTestOptions: m
	} = F(), {
		countriesList: {
			error: d
		}
	} = e(c => c.searchSelect), {
		availableDates: {
			data: i,
			isLoading: r
		}
	} = e(c => c.searchSelect);
	return d ? t.jsx(w.ApiErrorPage, {}) : t.jsxs("article", {
		children: [t.jsx(N, {
			"data-testid": "book-test-title",
			heading: o("APPB2C.common.findTest.title")
		}), t.jsx(U, {
			loading: r || l,
			children: t.jsxs(V, {
				children: [t.jsx(G, {
					forcedCountryIsoCode2: u ? S.countryIsoCode2.UNITED_STATES_OF_AMERICA : void 0
				}), m && t.jsxs(t.Fragment, {
					children: [t.jsx(M, {
						showNote: !!(i != null && i.length)
					}), t.jsx(Q, {}), t.jsx(H, {}), t.jsx(K, {}), t.jsx($, {})]
				})]
			})
		})]
	})
};
export {
	Z as
	default
};
//# sourceMappingURL=index-v8sKCPsW.js.map