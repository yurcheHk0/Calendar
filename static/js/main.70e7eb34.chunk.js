(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{11:function(e,t,a){e.exports={sidebar:"sidebar_sidebar__1sSqA",backLayer:"sidebar_backLayer__2bGUI",wrapper:"sidebar_wrapper__q4s8X",hidden:"sidebar_hidden__3lRVV",visible:"sidebar_visible__138iS",header:"sidebar_header__1rtKt"}},13:function(e,t,a){e.exports={selectStyle:"select_selectStyle__Kwtl9"}},19:function(e,t,a){e.exports={btn:"button_btn__3qewh",default:"button_default__1OHvJ",primary:"button_primary__1tSnQ",secondary:"button_secondary__3qqe5",disabled:"button_disabled__2Xt-Y"}},31:function(e,t,a){e.exports={content:"main_content__26n-v"}},34:function(e){e.exports=JSON.parse('{"test":"Home Page"}')},35:function(e){e.exports=JSON.parse('{"test":"\u0414\u043e\u043c\u0430\u0448\u043d\u044f \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430","Info":"\u0406\u043d\u0444\u043e"}')},43:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(27),s=a.n(r),i=(a(43),a(44),a(20)),o=a(7),l=a.n(o),d=a(13),b=a.n(d),j=c.a.createContext({}),u=a(9),h=a(0);function _(){var e=Object(n.useContext)(j).methods;return Object(h.jsxs)("header",{className:l.a.header,children:[Object(h.jsxs)("div",{className:l.a.menu,onClick:e.toggleSidebar,children:[Object(h.jsx)("span",{className:"".concat(l.a.global," ").concat(l.a.top)}),Object(h.jsx)("span",{className:"".concat(l.a.global," ").concat(l.a.middle)}),Object(h.jsx)("span",{className:"".concat(l.a.global," ").concat(l.a.bottom)})]}),Object(h.jsx)(u.b,{to:"/",children:Object(h.jsx)("div",{className:l.a.name,children:"Calendar generator"})}),Object(h.jsx)("select",{className:"".concat(l.a.lang," ").concat(b.a.selectStyle),onChange:function(t){var a=t.target.value;e.changeLanguage(a),localStorage.setItem("lang",a||"en")},defaultValue:localStorage.getItem("lang")||"en",children:["en","ua"].map((function(e){return Object(h.jsx)("option",{value:e,children:e.toUpperCase()},e)}))})]})}var O=a(11),p=a.n(O);function x(){var e=Object(n.useContext)(j),t=e.data,a=t.isSidebarOpen,c=t.translation,r=e.methods;return Object(h.jsxs)("aside",{className:"".concat(p.a.sidebar," ").concat(a?p.a.visible:p.a.hidden),children:[Object(h.jsx)("div",{className:p.a.backLayer,onClick:r.toggleSidebar}),Object(h.jsxs)("div",{className:p.a.wrapper,children:[Object(h.jsx)("div",{className:p.a.header}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/",onClick:r.toggleSidebar,children:c.Home||"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/create",onClick:r.toggleSidebar,children:c.Create||"Create"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/info",onClick:r.toggleSidebar,children:c.Info||"Info"})})]})]})]})}function m(){var e=Object(n.useContext)(j).data.translation;return Object(h.jsx)("div",{children:e.test})}function g(){return Object(h.jsx)("div",{children:"info Page"})}var f=a(24),v=a(8),S=a.n(v),y=a(19),N=a.n(y);function w(e){var t=e.txt,a=e.color,n=e.handleClick;return Object(h.jsx)("button",{className:"".concat(N.a.btn," ").concat(a?N.a[a]:N.a.default),onClick:n,children:t})}var C=a(37);function k(){return Object(C.a)(Array(5)).map((function(e,t){return Object(h.jsx)("div",{className:S.a.divider},"divider-"+t)}))}var A=function(){return(new Date).getFullYear()},I=function(){return(new Date).getMonth()},L=["January","February","March","April","May","June","July","August","September","October","November","December"],D=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function J(){var e=Object(n.useState)(I()),t=Object(f.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(A()),s=Object(f.a)(r,2),i=s[0],o=s[1],l=I(),d=A(),j=function(e,t,a){for(var n=[e],c=e;c<t;)n.push(c+=a||1);return c>t?n.slice(0,-1):n}(d-3,d+3,1),u=new Date(i+"-"+(a+1)+"-01").getDay(),_=function(e,t){for(var a=[],n=[],c=0===t?6:t-1,r=35-c-e,s=0;s<c;s++)n.push(0);for(var i=0;i<e;i++)n.push(i+1);for(var o=0;o<r;o++)n.push(0);if(n.map((function(e,t){return t%7?[]:a.push([n.slice(t,t+7)])})),6===a.length)for(var l=7-a[a.length-1][0].length,d=0;d<l;d++)a[a.length-1][0].push(0);return a}(function(e,t){return new Date(t,e+1,0).getDate()}(a,i),u);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:S.a.filters,children:[Object(h.jsx)("h2",{children:"Settings"}),Object(h.jsx)("select",{className:b.a.selectStyle,defaultValue:d,onChange:function(e){return function(e){o(Number.parseInt(e.target.value))}(e)},children:j.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))}),Object(h.jsx)("select",{className:b.a.selectStyle,defaultValue:l,onChange:function(e){return function(e){c(Number.parseInt(e.target.value))}(e)},children:L.map((function(e,t){return Object(h.jsx)("option",{value:t,children:e},e)}))}),Object(h.jsx)(w,{txt:"Print",color:"primary",handleClick:function(){return window.print()}})]}),Object(h.jsxs)("div",{id:"section-to-print",className:"".concat(S.a.toPrint," ").concat(S.a.A4),children:[Object(h.jsx)("div",{className:S.a.top,children:Object(h.jsx)("h2",{children:"".concat(L[a]," ").concat(i)})}),Object(h.jsxs)("table",{className:S.a.table,children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:D.map((function(e){return Object(h.jsx)("td",{children:e},e)}))})}),Object(h.jsx)("tbody",{children:_.map((function(e){return Object(h.jsx)("tr",{children:e[0].map((function(e){return Object(h.jsx)("td",{children:Object(h.jsx)("div",{className:S.a.wrapper,children:Object(h.jsx)("div",{className:S.a.day,children:0!==e?e:null})})},"tdKey"+Math.random())}))},"trKey"+e)}))})]}),Object(h.jsx)(k,{})]})]})}var V=a(4),M=a(31),P=a.n(M);function q(){return Object(h.jsxs)(i.b,{children:[Object(h.jsxs)(i.a,{children:[Object(h.jsx)("title",{children:"Calendar app"}),Object(h.jsx)("meta",{name:"description",content:"Calendar generator site"}),Object(h.jsx)("meta",{name:"keywords",content:"calendar,generate"})]}),Object(h.jsxs)(u.a,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(_,{}),Object(h.jsx)("main",{className:P.a.content,children:Object(h.jsxs)(V.d,{children:[Object(h.jsx)(V.b,{exact:!0,path:"/",component:m}),Object(h.jsx)(V.b,{path:"/info",component:g}),Object(h.jsx)(V.b,{path:"/create",component:J}),Object(h.jsx)(V.a,{from:"*",to:"/"})]})})]})]})}var B=a(12),H=a(32),F=a(33),K=a(38),R=a(36),T=a(34),W={ua:a(35),en:T},U=function(e){Object(K.a)(a,e);var t=Object(R.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).toggleSidebarAction=function(){n.setState(Object(B.a)(Object(B.a)({},n.state),{},{isSidebarOpen:!n.state.isSidebarOpen}))},n.changeLanguageAction=function(e){n.setState(Object(B.a)(Object(B.a)({},n.state),{},{translation:W[e]}))},n.state={isSidebarOpen:!1,translation:W[localStorage.getItem("lang")||"en"]},n}return Object(F.a)(a,[{key:"render",value:function(){var e={data:Object(B.a)({},this.state),methods:{toggleSidebar:this.toggleSidebarAction,changeLanguage:this.changeLanguageAction}};return Object(h.jsx)(j.Provider,{value:e,children:this.props.children})}}]),a}(n.Component);var Y=function(){return Object(h.jsx)(U,{children:Object(h.jsx)(q,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={header:"header_header__12iA4",menu:"header_menu__qCHEy",global:"header_global__S_xed",top:"header_top__3jBR-",middle:"header_middle__3OTVo",bottom:"header_bottom__1Av-y",name:"header_name__1aRwe",lang:"header_lang__1W3pF"}},8:function(e,t,a){e.exports={filters:"create_filters__ZuDxU",toPrint:"create_toPrint__1BT1B",A4:"create_A4__cn6j5",landscape:"create_landscape__3MLly",top:"create_top__3hrHu",table:"create_table__AmV9V",wrapper:"create_wrapper__RBYyC",day:"create_day__1_Ifw",divider:"create_divider__1QjlL"}}},[[51,1,2]]]);
//# sourceMappingURL=main.70e7eb34.chunk.js.map