(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75d02754"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?a(t):o(n(t))}},1071:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isEdit?r("h1",{staticClass:"title"},[t._v("Edit User Data")]):r("h1",{staticClass:"title"},[t._v("Add new User")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("label",[t._v("name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Enter name",required:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("label",[t._v("surname: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.surname,expression:"user.surname"}],attrs:{type:"text",placeholder:"Enter Surname",required:""},domProps:{value:t.user.surname},on:{input:function(e){e.target.composing||t.$set(t.user,"surname",e.target.value)}}})]),r("label",[t._v("email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"Enter email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("label",[t._v("number phone: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],attrs:{type:"text",placeholder:"Enter phone number",required:""},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),r("div",{staticClass:"button-container"},[r("button",{staticClass:"button",attrs:{type:"submit"}},[t._v(t._s(t.isEdit?"Save":"Add"))]),r("router-link",{staticClass:"button",attrs:{to:"/"}},[t._v("Return")])],1)]),r("ImportForm")],1)},o=[],i=(r("7db0"),r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"import-form",on:{submit:function(e){return e.preventDefault(),t.onLoadClick(e)}}},[r("label",{staticClass:"label-json"},[t._v(" Type your JSON Object for Users"),r("br"),r("p",{staticClass:"note"},[t._v("Note: Fields name, surname and phone are obligatory.")]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputText,expression:"inputText",modifiers:{trim:!0}}],staticClass:"textarea-json",attrs:{placeholder:'[{"name":"","surname":"","email":"","phone":""}]',rows:"10",cols:"35"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("p",{staticClass:"error"},[t._v(t._s(t.isSuccess))]),r("p"),r("p",{staticClass:"error"},[t._v(t._s(t.error))]),r("p"),r("button",{staticClass:"button button-json",attrs:{type:"submit"}},[t._v("Load")])])}),s=[];r("4160"),r("159b"),r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var u={name:"ImportForm",methods:{onLoadClick:function(){this.error="",this.isSuccess="";var t=null;if(this.inputText.length)try{t=JSON.parse(this.inputText)}catch(i){this.error="Error parsing JSON"}if(console.log(t),t)if("object"===a(t)){Array.isArray(t)||(t=[t]);var e=[],r=[];if(t.forEach((function(t){var n="name"in t&&"string"===typeof t.name&&t.name.length&&"surname"in t&&"string"===typeof t.surname&&t.surname.length&&"phone"in t&&"string"===typeof t.phone&&t.phone.length;n?e.push(t):r.push(t)})),console.log(e),console.log(r),e.length){var n=JSON.parse(localStorage.getItem("users")),o=+localStorage.getItem("nextId");e.forEach((function(t){var e={id:o++,name:t.name,surname:t.surname,phone:t.phone,email:t.email||""};console.log("newUser",e),n.push(e)})),console.log(n),localStorage.setItem("users",JSON.stringify(n)),localStorage.setItem("nextId",o)}r.length&&(this.inputText=JSON.stringify(r)),e.length&&r.length&&(this.isSuccess="Valid users was loaded.\n              Some data was incorrect.\n              Check the remaining data."),e.length&&!r.length&&(this.isSuccess="All Users was loaded",this.inputText=""),!e.length&&r.length&&(this.isSuccess="All Users was incorrect")}else this.isSuccess="Data can be Object or Array of Objects"}},data:function(){return{inputText:"",error:"",isSuccess:""}}},c=u,l=(r("9432"),r("2877")),f=Object(l["a"])(c,i,s,!1,null,null,null),m=f.exports,d={name:"Edit",components:{ImportForm:m},data:function(){return{users:[],isEdit:!1,user:{name:"",surname:"",email:"",phone:"",id:0}}},methods:{onSubmit:function(){console.log(this.users),this.user.name&&this.user.surname&&this.user.phone&&(this.isEdit?(console.log("innn",this.user),console.log("innn",this.users),console.log("innn",this.user),localStorage.setItem("users",JSON.stringify(this.users))):(this.user.id=+localStorage.getItem("nextId"),this.users.push(this.user),localStorage.setItem("nextId",this.user.id+1),localStorage.setItem("users",JSON.stringify(this.users)),this.user={name:"",surname:"",email:"",phone:"",id:0}))}},mounted:function(){var t,e=this;if(localStorage.getItem("users"))try{this.users=JSON.parse(localStorage.getItem("users"))}catch(r){localStorage.removeItem("users")}this.users.length&&this.$route.params.id&&(t=this.users.find((function(t){return t.id===+e.$route.params.id}))),t&&(this.user=t,this.isEdit=!0)}},p=d,h=(r("1b9b"),Object(l["a"])(p,n,o,!1,null,null,null));e["default"]=h.exports},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),s=r("9112");for(var a in o){var u=n[a],c=u&&u.prototype;if(c&&c.forEach!==i)try{s(c,"forEach",i)}catch(l){c.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),s=o("forEach"),a=i("forEach");t.exports=s&&a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1b9b":function(t,e,r){"use strict";var n=r("5383"),o=r.n(n);o.a},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),s="String Iterator",a=o.set,u=o.getterFor(s);i(String,"String",(function(t){a(this,{type:s,string:String(t),index:0})}),(function(){var t,e=u(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5383:function(t,e,r){},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,s,a=String(o(e)),u=n(r),c=a.length;return u<0||u>=c?t?"":void 0:(i=a.charCodeAt(u),i<55296||i>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):i:t?a.slice(u,u+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").find,i=r("44d2"),s=r("ae40"),a="find",u=!0,c=s(a);a in[]&&Array(1)[a]((function(){u=!1})),n({target:"Array",proto:!0,forced:u||!c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},9432:function(t,e,r){"use strict";var n=r("c26c"),o=r.n(n);o.a},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),s=r("c430"),a=r("83ab"),u=r("4930"),c=r("fdbf"),l=r("d039"),f=r("5135"),m=r("e8b5"),d=r("861d"),p=r("825a"),h=r("7b0b"),g=r("fc6a"),v=r("c04e"),b=r("5c6c"),y=r("7c73"),S=r("df75"),w=r("241c"),x=r("057f"),O=r("7418"),E=r("06cf"),L=r("9bf2"),T=r("d1e7"),C=r("9112"),N=r("6eeb"),I=r("5692"),j=r("f772"),_=r("d012"),A=r("90e3"),P=r("b622"),J=r("e538"),k=r("746f"),$=r("d44e"),D=r("69f3"),F=r("b727").forEach,M=j("hidden"),V="Symbol",U="prototype",G=P("toPrimitive"),R=D.set,q=D.getterFor(V),H=Object[U],B=o.Symbol,Q=i("JSON","stringify"),W=E.f,z=L.f,K=x.f,X=T.f,Y=I("symbols"),Z=I("op-symbols"),tt=I("string-to-symbol-registry"),et=I("symbol-to-string-registry"),rt=I("wks"),nt=o.QObject,ot=!nt||!nt[U]||!nt[U].findChild,it=a&&l((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(H,e);n&&delete H[e],z(t,e,r),n&&t!==H&&z(H,e,n)}:z,st=function(t,e){var r=Y[t]=y(B[U]);return R(r,{type:V,tag:t,description:e}),a||(r.description=e),r},at=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ut=function(t,e,r){t===H&&ut(Z,e,r),p(t);var n=v(e,!0);return p(r),f(Y,n)?(r.enumerable?(f(t,M)&&t[M][n]&&(t[M][n]=!1),r=y(r,{enumerable:b(0,!1)})):(f(t,M)||z(t,M,b(1,{})),t[M][n]=!0),it(t,n,r)):z(t,n,r)},ct=function(t,e){p(t);var r=g(e),n=S(r).concat(pt(r));return F(n,(function(e){a&&!ft.call(r,e)||ut(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ct(y(t),e)},ft=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===H&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,M)&&this[M][e])||r)},mt=function(t,e){var r=g(t),n=v(e,!0);if(r!==H||!f(Y,n)||f(Z,n)){var o=W(r,n);return!o||!f(Y,n)||f(r,M)&&r[M][n]||(o.enumerable=!0),o}},dt=function(t){var e=K(g(t)),r=[];return F(e,(function(t){f(Y,t)||f(_,t)||r.push(t)})),r},pt=function(t){var e=t===H,r=K(e?Z:g(t)),n=[];return F(r,(function(t){!f(Y,t)||e&&!f(H,t)||n.push(Y[t])})),n};if(u||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===H&&r.call(Z,t),f(this,M)&&f(this[M],e)&&(this[M][e]=!1),it(this,e,b(1,t))};return a&&ot&&it(H,e,{configurable:!0,set:r}),st(e,t)},N(B[U],"toString",(function(){return q(this).tag})),N(B,"withoutSetter",(function(t){return st(A(t),t)})),T.f=ft,L.f=ut,E.f=mt,w.f=x.f=dt,O.f=pt,J.f=function(t){return st(P(t),t)},a&&(z(B[U],"description",{configurable:!0,get:function(){return q(this).description}}),s||N(H,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:B}),F(S(rt),(function(t){k(t)})),n({target:V,stat:!0,forced:!u},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:lt,defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:mt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),Q){var ht=!u||l((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,Q.apply(null,o)}})}B[U][G]||C(B[U],G,B[U].valueOf),$(B,V),_[M]=!0},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,s=i.toString,a=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},c26c:function(t,e,r){},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),s=r("9112"),a=r("b622"),u=a("iterator"),c=a("toStringTag"),l=i.values;for(var f in o){var m=n[f],d=m&&m.prototype;if(d){if(d[u]!==l)try{s(d,u,l)}catch(h){d[u]=l}if(d[c]||s(d,c,f),o[f])for(var p in i)if(d[p]!==i[p])try{s(d,p,i[p])}catch(h){d[p]=i[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),s=r("5135"),a=r("861d"),u=r("9bf2").f,c=r("e893"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};c(m,l);var d=m.prototype=l.prototype;d.constructor=m;var p=d.toString,h="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(s(f,t))return"";var r=h?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-75d02754.33224f45.js.map