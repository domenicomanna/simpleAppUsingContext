(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},22:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(16),o=n.n(r),c=(n(14),n(7)),l=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"container"},i.a.createElement("ul",{className:"navbar"},i.a.createElement("li",null,i.a.createElement(c.b,{to:"/"},"All Clothes")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/favorited-clothes"},"Favorited Clothes"))))),i.a.createElement("main",{className:"container"},t),i.a.createElement("footer",null))},s=n(21),u=n(12),d=n(19),m=n(20),v=new(function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,[{key:"getClothes",value:function(){return[{id:1,description:"A lovely t-shirt",isFavorited:!1},{id:2,description:"A lovely blouse",isFavorited:!1},{id:3,description:"A lovely dress",isFavorited:!1},{id:4,description:"A lovely suit",isFavorited:!1},{id:5,description:"An awesome pair of shoes",isFavorited:!1},{id:6,description:"An awesome belt",isFavorited:!1}]}}]),e}()),h=Object(a.createContext)({}),f=function(e){var t=e.children,n=Object(a.useState)([]),r=Object(u.a)(n,2),o=r[0],c=r[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),m=d[0],f=d[1];return Object(a.useEffect)((function(){f(!0);var e=v.getClothes();c(e),f(!1)}),[]),i.a.createElement(h.Provider,{value:{clotheItems:o,toggleFavorite:function(e){var t=o.map((function(t){return t.id===e?Object(s.a)({},t,{isFavorited:!t.isFavorited}):t}));c(t)},isLoading:m}},t)},p=function(e){var t=e.id,n=e.description,r=e.isFavorited,o=Object(a.useContext)(h);return i.a.createElement("li",{className:"clotheItem"},i.a.createElement("p",null,n),i.a.createElement("button",{onClick:function(){return o.toggleFavorite(t)},className:"favorite-clothe-item-button"},r?"Unfavorite":"Favorite"))};var E=function(){var e=Object(a.useContext)(h);return e.isLoading?i.a.createElement("h1",null,"Loading..."):i.a.createElement("ul",{className:"clotheItems"},e.clotheItems.map((function(e){return i.a.createElement(p,{key:e.id,id:e.id,description:e.description,isFavorited:e.isFavorited})})))},b=n(5);var F=function(){var e=Object(a.useContext)(h).clotheItems.filter((function(e){return e.isFavorited}));return 0===e.length?i.a.createElement("h1",null,"You have no favorited clothes :("):i.a.createElement("ul",{className:"clotheItems"},e.map((function(e){return i.a.createElement(p,{key:e.id,id:e.id,description:e.description,isFavorited:e.isFavorited})})))},g=function(){return i.a.createElement(l,null,i.a.createElement(f,null,i.a.createElement(b.c,null,i.a.createElement(b.a,{path:"/",component:E,exact:!0}),i.a.createElement(b.a,{path:"/favorited-clothes",component:F}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=i.a.createElement(c.a,null,i.a.createElement(g,null));o.a.render(j,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f525f3fc.chunk.js.map