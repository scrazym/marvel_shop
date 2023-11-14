/*! For license information please see 682.baa3962b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[682],{3957:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",o=e.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=e(184),i=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:n,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:o,alt:"Avengers logo"})]})}},5676:function(t,r,e){e.d(r,{Z:function(){return a}});var n=e.p+"static/media/error.42292aa12b6bc303ce99.gif",o=e(184),a=function(){return(0,o.jsx)("img",{className:"error__img",src:n,alt:"error gif"})}},1748:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var n=e(4270),o=e(3957),a=e(3433),i=e(9439),c=e(2791),u=e(1087),s=e(4304),l=e(3394),f=e(5676),h=e(184),p=function(t){var r=(0,c.useState)([]),e=(0,i.Z)(r,2),n=e[0],o=e[1],p=(0,c.useState)(!1),d=(0,i.Z)(p,2),v=d[0],m=d[1],g=(0,c.useState)(0),y=(0,i.Z)(g,2),w=y[0],b=y[1],x=(0,c.useState)(!1),j=(0,i.Z)(x,2),_=j[0],Z=j[1],E=(0,s.Z)(),L=E.loading,k=E.error,N=E.getAllComics;(0,c.useEffect)((function(){C(w,!0)}),[]);var C=function(t,r){m(!r),N(t).then(O)},O=function(t){var r=!1;t.length<8&&(r=!0),o([].concat((0,a.Z)(n),(0,a.Z)(t))),m(!1),b(w+8),Z(r)};var S=function(t){var r=t.map((function(t,r){return(0,h.jsx)("li",{className:"comics__item",children:(0,h.jsxs)(u.rU,{to:"/comics/".concat(t.id),children:[(0,h.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),(0,h.jsx)("div",{className:"comics__item-name",children:t.title}),(0,h.jsx)("div",{className:"comics__item-price",children:t.price})]})},r)}));return(0,h.jsx)("ul",{className:"comics__grid",children:r})}(n),P=k?(0,h.jsx)(f.Z,{}):null,A=L&&!v?(0,h.jsx)(l.Z,{}):null;return(0,h.jsxs)("div",{className:"comics__list",children:[P,A,S,(0,h.jsx)("button",{disabled:v,style:{display:_?"none":"block"},className:"button button__main button__long",onClick:function(){return C(w)},children:(0,h.jsx)("div",{className:"inner",children:"load more"})})]})},d=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.q,{children:[(0,h.jsx)("meta",{name:"description",content:"Page with list of comics"}),(0,h.jsx)("title",{children:"Comics"})]}),(0,h.jsx)(o.Z,{}),(0,h.jsx)(p,{})]})}},4304:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(4165),o=e(5861),a=e(9439),i=e(2791),c=function(){var t=function(){var t=(0,i.useState)(!1),r=(0,a.Z)(t,2),e=r[0],c=r[1],u=(0,i.useState)(null),s=(0,a.Z)(u,2),l=s[0],f=s[1],h=(0,i.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,a,i,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},c(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:o,headers:a});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return u=t.sent,c(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{loading:e,request:h,error:l,clearError:(0,i.useCallback)((function(){return f(null)}),[])}}(),r=t.loading,e=t.request,c=t.error,u=t.clearError,s="https://gateway.marvel.com:443/v1/public/",l="apikey=52bc0b04caaad7180e9bf329aa3d9735",f=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(s,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters?name=").concat(r,"&").concat(l));case 2:return o=t.sent,t.abrupt("return",o.data.results.map(m));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"characters/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",m(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var r,o,a=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,e("".concat(s,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(s,"comics/").concat(r,"?").concat(l));case 2:return o=t.sent,t.abrupt("return",g(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),m=function(t){return{id:t.id,name:t.name,description:t.description?t.description:"Sorry, we don't have description for ".concat(t.name),thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},g=function(t){var r;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(r=t.textObjects[0])||void 0===r?void 0:r.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:r,error:c,getCharacterByName:h,getAllCharacters:f,getCharacter:p,clearError:u,getAllComics:d,getComic:v}}},5861:function(t,r,e){function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},4165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(1002);function o(){o=function(){return r};var t,r={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:N(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",v="suspendedYield",m="executing",g="completed",y={};function w(){}function b(){}function x(){}var j={};f(j,u,(function(){return this}));var _=Object.getPrototypeOf,Z=_&&_(_(A([])));Z&&Z!==e&&a.call(Z,u)&&(j=Z);var E=x.prototype=w.prototype=Object.create(j);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function N(r,e,n){var o=d;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function C(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,C(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=p(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(a.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return b.prototype=x,i(E,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(k.prototype),f(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(h(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:A(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}}}]);
//# sourceMappingURL=682.baa3962b.chunk.js.map