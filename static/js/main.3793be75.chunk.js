(this.webpackJsonpTypeScript=this.webpackJsonpTypeScript||[]).push([[0],{17:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(31),a=n.n(i),o=(n(39),n(2)),j=n(9),u=n(3),l="/",b="/about",d="/sign-in",O="/concerts",x="/calendar",h="/artists",f="/editprofile",p=(n(17),function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("button",{onClick:function(){return s(n+1)},children:"Incrementation"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{disabled:n<2,onClick:function(){return s(n-1)},children:"Decrementation"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{disabled:0===n,onClick:function(){return s(0)},children:"Reset"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{disabled:3!==n,onClick:function(){return alert("3 is the magic number!")},children:"Magic!"})]})}),m=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Whatchu' talkin' bout Willis?"})})},v=n(14),g=n(18),C=Object(r.createContext)(null),k=function(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),s=n[0],i=n[1],a=e.children;return Object(c.jsx)(C.Provider,{value:[s,i],children:a})},N=function(e){var t=Object(u.f)(),n=Object(r.useState)({username:"",password:""}),s=Object(o.a)(n,2),i=s[0],a=s[1],j=Object(r.useContext)(C),b=Object(o.a)(j,2)[1],d=function(e){a(Object(g.a)(Object(g.a)({},i),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",name:"username",placeholder:"Enter username",onChange:d}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"password",placeholder:"Enter password",onChange:d}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return localStorage.setItem("user",i.username),b(i),void t.push(l)},children:"Sign In!"})]}),Object(c.jsx)("h1",{children:i.username}),Object(c.jsx)("h1",{children:i.password})]})},w=n(12),S=n.n(w),y=n(21),I=n(33),T=n.n(I).a.create({baseURL:"https://pokeapi.co/api/v2/"}),E=function(e){return T.get("pokemon/".concat(e))},H=function(){return T.get("pokemon?limit=2000")},L=function(){var e=Object(r.useState)({}),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),a=Object(o.a)(i,2),j=a[0],u=a[1],l=Object(r.useState)(!1),b=Object(o.a)(l,2),d=b[0],O=b[1],x=Object(r.useState)([]),h=Object(o.a)(x,2),f=h[0],p=h[1];Object(r.useEffect)((function(){m()}),[]),Object(r.useEffect)((function(){v()}),[j]);var m=function(){var e=Object(y.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:t=e.sent,n=t.data,p(n.results),console.log(f);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(j);case 3:t=e.sent,s(t),O(d),console.log(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),O(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)("select",{children:f.sort((function(e,t){return e.name>t.name})).map((function(e){return Object(c.jsx)("option",{onClick:function(){return t=e.name,void u(t);var t},value:e.name,children:e.name})}))}),Object(c.jsx)("br",{}),function(){return d||""===j?Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"No pokemon selected."})}):Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{style:{textTransform:"capitalize"},children:["Name: ",null===(e=n.data)||void 0===e||null===(t=e.species)||void 0===t?void 0:t.name]}),Object(c.jsxs)("h1",{children:["Pokedex #: ",null===(r=n.data)||void 0===r?void 0:r.id]}),Object(c.jsx)("img",{src:null===(s=n.data)||void 0===s||null===(i=s.sprites)||void 0===i?void 0:i.front_default,alt:"Not found."})]});var e,t,r,s,i}()]})},W=function(){return Object(c.jsx)("div",{children:"Calender coming..."})},A=function(){return Object(c.jsx)("div",{})},D=function(){return Object(c.jsx)("div",{children:"Edit your profile"})},F=function(e){var t,n,s=Object(r.useContext)(C),i=Object(o.a)(s,2),a=i[0],v=i[1],g=e.children;return Object(r.useEffect)((function(){v({username:localStorage.getItem("user")})}),[]),Object(c.jsxs)(j.a,{children:[g,Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:l,component:p}),Object(c.jsx)(u.a,{exact:!0,path:b,component:m}),Object(c.jsx)(u.a,{exact:!0,path:d,component:N}),Object(c.jsx)(u.a,{exact:!0,path:O,component:L}),Object(c.jsx)(u.a,{exact:!0,path:x,component:W}),Object(c.jsx)(u.a,{exact:!0,path:h,component:A}),Object(c.jsx)(u.a,{exact:!0,path:f,component:(t=D,n=p,a?t:n)}),Object(c.jsx)(u.a,{component:p})]})]})},P=(n(64),n(65),n.p+"static/media/logotype.cf842b52.svg"),_=(n(66),n(67),function(){var e=Object(u.f)(),t=Object(r.useContext)(C),n=Object(o.a)(t,2),s=(n[0],n[1]);return Object(c.jsxs)("div",{className:"profileDropdown",children:[Object(c.jsx)("span",{children:"Alt 1"}),Object(c.jsx)("span",{children:"Alt 2"}),Object(c.jsx)("span",{children:"Alt 3"}),Object(c.jsx)("span",{onClick:function(){return localStorage.removeItem("user"),s(!1),void e.push(l)},children:"Log out"})]})}),z=function(){var e=Object(r.useContext)(C),t=Object(o.a)(e,1)[0];return Object(c.jsxs)("div",{className:"profileWrapper",children:[Object(c.jsx)("img",{className:"photo",src:"http://thispersondoesnotexist.com/image",alt:""}),t.username,Object(c.jsx)(_,{})]})},B=(n(68),function(){var e=Object(u.f)();return Object(c.jsxs)("ul",{className:"ulTabsWrapper",children:[Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(l)},children:"Home"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(b)},children:"About"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(O)},children:"Concerts"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(x)},children:"Dates"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(h)},children:"Artists"})]})}),J=function(){var e=Object(u.f)(),t=Object(r.useContext)(C),n=Object(o.a)(t,2),s=n[0];n[1];return Object(c.jsxs)("div",{className:"desktopNavigationWrapper",children:[Object(c.jsx)("img",{className:"navigationIcon",src:P,alt:"",onClick:function(){return e.push(l)}}),Object(c.jsx)("div",{className:"desktopNavigationTabs",children:Object(c.jsx)(B,{})}),(null===s||void 0===s?void 0:s.username)?Object(c.jsx)("div",{className:"profile",children:Object(c.jsx)(z,{})}):Object(c.jsx)("span",{className:"signInButton",onClick:function(){return e.push(d)},children:"Sign in"})]})},M=(n(69),n(70),n(13)),R=function(e){var t=Object(u.f)(),n=function(n){t.push(n),e.sidebarHandler(!1)};return Object(c.jsx)("div",{className:e.sidebarIsOpen?"sidebar open":"sidebar",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{onClick:function(){return n(l)},children:[Object(c.jsx)(M.c,{}),"Home"]}),Object(c.jsx)(M.b,{}),Object(c.jsx)("li",{onClick:function(){return e.sidebarHandler(!1)},children:"Close!"}),Object(c.jsx)(M.d,{}),Object(c.jsx)("li",{children:"Images"}),Object(c.jsx)(M.a,{}),Object(c.jsx)("li",{onClick:function(){return n(x)},children:"Calendar"})]})})},U=(n(71),function(e){return Object(c.jsxs)("button",{className:"toggle-button",onClick:function(){return e.sidebarHandler(!0)},children:[Object(c.jsx)("div",{className:"toggle-button_line"}),Object(c.jsx)("div",{className:"toggle-button_line"}),Object(c.jsx)("div",{className:"toggle-button_line"})]})}),q=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(U,{sidebarHandler:s}),Object(c.jsx)(R,{sidebarIsOpen:n,sidebarHandler:s})]})},G=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},K=function(){var e=function(){var e=Object(r.useState)(G()),t=Object(o.a)(e,2),n=t[0],c=t[1],s=function(){c(G())};return Object(r.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),n}(),t=(e.height,e.width);return Object(c.jsx)("div",{children:t<1e3?Object(c.jsx)(q,{}):Object(c.jsx)(J,{})})};var Q=function(){return Object(c.jsx)(k,{children:Object(c.jsx)(F,{children:Object(c.jsx)(K,{})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),V()}},[[72,1,2]]]);
//# sourceMappingURL=main.3793be75.chunk.js.map