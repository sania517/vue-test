(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-75d02754":"33224f45"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-75d02754":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-75d02754":"c1e76d4b"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/my-project/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("2dad"),o=n.n(r);o.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("5c0b"),n("2877")),i={},u=Object(s["a"])(i,o,a,!1,null,null,null),c=u.exports,l=n("9483");Object(l["a"])("".concat("/my-project/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"add",attrs:{to:"/edit"}},[e._v("Add new user")]),n("table",{staticClass:"table"},[e._m(0),n("tbody",[n("tr",{directives:[{name:"show",rawName:"v-show",value:0===e.users.length,expression:"users.length === 0"}]},[n("td",{attrs:{colspan:"7"}},[e._v("Not Users yet. Add Users")])]),e._l(e.users,(function(t,r){return n("tr",{key:t.id},[n("td",[e._v(e._s(r+1))]),n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.surname))]),n("td",[e._v(e._s(t.phone))]),n("td",[e._v(e._s(t.email))]),n("td",[n("router-link",{staticClass:"edit-button",attrs:{to:"edit/"+t.id}},[e._v("Edit")])],1),n("td",[n("button",{staticClass:"delete-button",attrs:{type:"button"},on:{click:function(t){return e.onDeleteClick(r)}}},[e._v("X")])])])}))],2)])],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("#")]),n("th",[e._v("name:")]),n("th",[e._v("surname:")]),n("th",[e._v("phone:")]),n("th",[e._v("email:")]),n("th",[e._v("edit")]),n("th",[e._v("delete")])])])}],h=(n("4de4"),n("13d5"),{name:"Home",methods:{onDeleteClick:function(e){this.users=this.users.filter((function(t,n){return n!==e})),localStorage.setItem("users",JSON.stringify(this.users))}},data:function(){return{users:[]}},mounted:function(){var e;if(localStorage.getItem("users"))try{this.users=JSON.parse(localStorage.getItem("users")),e=this.users.reduce((function(e,t){return e>=t.id?e:t.id}),1),localStorage.setItem("nextId",e+1)}catch(t){localStorage.removeItem("users"),localStorage.setItem("nextId",1)}}}),v=h,m=(n("21bb"),Object(s["a"])(v,f,p,!1,null,null,null)),g=m.exports;r["a"].use(d["a"]);var b=[{path:"/",name:"Home",component:g},{path:"/edit/:id?",name:"Edit",component:function(){return n.e("chunk-75d02754").then(n.bind(null,"1071"))}}],y=new d["a"]({mode:"history",base:"/my-project/",routes:b}),_=y,w=n("2f62");r["a"].use(w["a"]);var k=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:_,store:k,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.634952fa.js.map