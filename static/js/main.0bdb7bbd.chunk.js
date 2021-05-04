(this["webpackJsonpmy-react-countries"]=this["webpackJsonpmy-react-countries"]||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);t(18);var c=t(3),i=t.n(c),a=t(14),s=t.n(a),o=(t(23),t(24),t(30)),r=t(16),l=t(13),d=t(7),j=t.n(d),u=t(1),h=function(e){var n=e.ccode,t=e.cname,a=e.countries,s=Object(c.useState)(null),o=Object(l.a)(s,2),d=(o[0],o[1],function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=i.a.useState(n),c=Object(l.a)(t,2),a=c[0],s=c[1];return{items:i.a.useMemo((function(){var n=Object(r.a)(e);return null!==a&&n.sort((function(e,n){return e[a.key]<n[a.key]?"ascending"===a.direction?-1:1:e[a.key]>n[a.key]?"ascending"===a.direction?1:-1:0})),n}),[e,a]),requestSort:function(e){var n="ascending";a&&a.key===e&&"ascending"===a.direction&&(n="descending"),s({key:e,direction:n})},sortConfig:a}}(a)),h=d.items,b=d.requestSort,m=d.sortConfig,O=function(e){if(m)return m.key===e?m.direction:void 0},g=function(e){b(e.target.getAttribute("name"))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("thead",{className:"thead-dark",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scople:"col",name:"code",onClick:g,className:j.a[O("code")],children:"code"}),Object(u.jsx)("th",{scople:"col",name:"emoji",onClick:g,className:j.a[O("emoji")],children:"emoji"}),Object(u.jsx)("th",{scople:"col",name:"name",onClick:g,className:j.a[O("name")],children:"name"}),Object(u.jsx)("th",{scople:"col",name:"native",onClick:g,className:j.a[O("native")],children:"native"}),Object(u.jsx)("th",{scople:"col",name:"ccy",onClick:g,className:j.a[O("ccy")],children:"ccy"}),Object(u.jsx)("th",{scople:"col",name:"capital",onClick:g,className:j.a[O("capital")],children:"capital"}),Object(u.jsx)("th",{scople:"col",children:"phone"}),Object(u.jsx)("th",{scople:"col",name:"languages",onClick:g,className:j.a[O("languages")],children:"languages"}),Object(u.jsx)("th",{scople:"col",name:"continent",onClick:g,className:j.a[O("continent")],children:"continent"}),Object(u.jsx)("th",{scople:"col",children:"ccode"})]})}),Object(u.jsx)("tbody",{children:a&&a.length>0&&h.map((function(e){return Object(u.jsxs)("tr",{className:j.a.country,children:[Object(u.jsx)("td",{children:e.code}),Object(u.jsx)("td",{children:e.emoji}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.native}),Object(u.jsx)("td",{children:e.currency}),Object(u.jsx)("td",{children:e.capital}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.languages&&e.languages.map((function(e){return e.name})).join("/")}),Object(u.jsx)("td",{children:n}),Object(u.jsx)("td",{children:t})]},e.code)}))})]})},b=function(e){var n=e.continents;return Object(u.jsx)("div",{children:Object(u.jsxs)("table",{className:"table table-sm table-stripped table-dark table-hover",children:[n&&n.map((function(e){return Object(u.jsx)(h,{ccode:e.code,cname:e.name,countries:e.countries})})),!n&&Object(u.jsx)("div",{children:"No continents"})]})})},m=(t(26),function(){var e=Object(o.a)("launches",(function(){return fetch("https://countries.trevorblades.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n  {\n    continents(filter:{code:{eq:"AS"}}) {\n        code name countries { \n            code emoji name native capital currency phone\n            languages {name native code} \n        } \n    }\n  }\n'})}).then((function(e){if(e.status>=400)throw new Error("Error fetching data");return e.json()})).then((function(e){return e.data}))})),n=e.data,t=e.isLoading,c=e.error;return t?"Loading...":c?Object(u.jsx)("pre",{children:c.message}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Home"}),console.log(n.continents),n&&n.continents&&n.continents.length>0&&Object(u.jsx)(b,{continents:n.continents}),!n&&Object(u.jsx)("div",{children:"no data..."}),Object(u.jsx)("div",{children:"End"})]})});var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(m,{})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),a(e),s(e)}))},x=t(29),p=t(15),f=new x.a;s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p.a,{client:f,children:Object(u.jsx)(O,{})})}),document.getElementById("root")),g()},7:function(e,n,t){e.exports={ascending:"CountryList_ascending__21XMM",descending:"CountryList_descending__3Z7Dg"}}},[[27,1,2]]]);
//# sourceMappingURL=main.0bdb7bbd.chunk.js.map