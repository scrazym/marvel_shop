"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[666],{5676:function(e,r,n){n.d(r,{Z:function(){return c}});var a=n.p+"static/media/error.42292aa12b6bc303ce99.gif",t=n(184),c=function(){return(0,t.jsx)("img",{className:"error__img",src:a,alt:"error gif"})}},5999:function(e,r,n){n.r(r),n.d(r,{default:function(){return q}});var a=n(9439),t=n(2791),c=n(4270),s=n(4304),i=n(5676),o=n(3394),l=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",u=n(184),h=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"contain"}),(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:t,alt:"Random character",className:"randomchar__img",style:i}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:n}),(0,u.jsx)("p",{className:"randomchar__descr",children:a}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],d=(0,s.Z)(),m=d.loading,f=d.error,p=d.getCharacter,v=d.clearError;(0,t.useEffect)((function(){_();var e=setInterval(_,6e4);return function(){clearInterval(e)}}),[]);var x=function(e){c(e)},_=function(){v();var e=Math.floor(400*Math.random()+1011e3);p(e).then(x)},j=f?(0,u.jsx)(i.Z,{}):null,b=m?(0,u.jsx)(o.Z,{}):null,g=m||f||!n?null:(0,u.jsx)(h,{char:n});return(0,u.jsxs)("div",{className:"randomchar",children:[j,b,g,(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{onClick:_,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},m=n(4165),f=n(3433),p=n(5861),v=n(6983),x=n(5660),_=function(e){var r=(0,t.useState)([]),n=(0,a.Z)(r,2),c=n[0],l=n[1],h=(0,t.useState)(!1),d=(0,a.Z)(h,2),_=d[0],j=d[1],b=(0,t.useState)(210),g=(0,a.Z)(b,2),N=g[0],Z=g[1],k=(0,t.useState)(!1),y=(0,a.Z)(k,2),w=y[0],C=y[1],S=(0,s.Z)(),E=S.loading,F=S.error,T=S.getAllCharacters;(0,t.useEffect)((function(){I(N,!0)}),[]);var I=function(e,r){j(!r),T(e).then(q)},q=function(){var e=(0,p.Z)((0,m.Z)().mark((function e(r){var n;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,r.length<9&&(n=!0),l((function(e){return[].concat((0,f.Z)(e),(0,f.Z)(r))})),j((function(e){return!1})),Z((function(e){return e+9})),C((function(e){return n}));case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),A=(0,t.useRef)([]),B=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var M=function(r){var n=r.map((function(r,n){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail&&(a={objectFit:"unset"}),(0,u.jsx)(v.Z,{timeout:500,classNames:"char__item",children:(0,u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[n]=e},onClick:function(){e.onCharSelected(r.id),B(n)},onKeyDown:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(r.id),B(n))},children:[(0,u.jsx)("img",{src:r.thumbnail,alt:r.name,style:a}),(0,u.jsx)("div",{className:"char__name",children:r.name})]},r.id)},r.id)}));return(0,u.jsx)("ul",{className:"char__grid",children:(0,u.jsx)(x.Z,{component:null,children:n})})}(c),R=F?(0,u.jsx)(i.Z,{}):null,D=E&&!_?(0,u.jsx)(o.Z,{}):null;return(0,u.jsxs)("div",{className:"char__list",children:[R,D,M,(0,u.jsx)("button",{className:"button button__main button__long",disabled:_,onClick:function(){return I(N)},style:{display:w?"none":"block"},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},j=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,u.jsxs)("div",{className:"skeleton",children:[(0,u.jsxs)("div",{className:"pulse skeleton__header",children:[(0,u.jsx)("div",{className:"pulse skeleton__circle"}),(0,u.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"})]})]})},b=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i=r.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(o={objectFit:"contain"}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:t,alt:n,style:o}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:n}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:a}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,r){if(!(r>9))return(0,u.jsx)("li",{className:"char__comics-item",children:e.name},r)}))]})]})},g=function(e){var r=(0,t.useState)(null),n=(0,a.Z)(r,2),c=n[0],l=n[1],h=(0,s.Z)(),d=h.loading,m=h.error,f=h.getCharacter;(0,t.useEffect)((function(){p()}),[e.charId]);var p=function(){var r=e.charId;r&&f(r).then(v)},v=function(e){l(e)},x=c||d||m?null:(0,u.jsx)(j,{}),_=m?(0,u.jsx)(i.Z,{}):null,g=d?(0,u.jsx)(o.Z,{}):null,N=d||m||!c?null:(0,u.jsx)(b,{char:c});return(0,u.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},N=n(5671),Z=n(3144),k=n(136),y=n(7277),w=function(e){(0,k.Z)(n,e);var r=(0,y.Z)(n);function n(){var e;(0,N.Z)(this,n);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=r.call.apply(r,[this].concat(t))).state={error:!1},e}return(0,Z.Z)(n,[{key:"componentDidCatch",value:function(e,r){console.log(r,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsx)(i.Z,{}):this.props.children}}]),n}(t.Component),C=w,S=n(5705),E=n(7670),F=n(1087),T=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],o=(0,s.Z)(),l=o.loading,h=o.error,d=o.getCharacterByName,m=o.clearError,f=function(e){c(e)},p=h?(0,u.jsx)("div",{className:"char__search-critical-error",children:(0,u.jsx)(i.Z,{})}):null,v=n?n.length>0?(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,u.jsx)(F.rU,{to:"/characters/".concat(n[0].id),className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"To page"})})]}):(0,u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,u.jsxs)("div",{className:"char__search-form",children:[(0,u.jsx)(S.J9,{initialValues:{charName:""},validationSchema:E.Ry({charName:E.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;r=n,m(),d(r).then(f)},children:(0,u.jsxs)(S.l0,{children:[(0,u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsx)(S.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,u.jsx)("button",{type:"submit",className:"button button__main",disabled:l,children:(0,u.jsx)("div",{className:"inner",children:"find"})})]}),(0,u.jsx)(S.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),v,p]})},I=n.p+"static/media/vision.067d4ae1936d64a577ce.png",q=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],s=r[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.q,{children:[(0,u.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,u.jsx)("title",{children:"Marvel information portal"})]}),(0,u.jsx)(C,{children:(0,u.jsx)(d,{})}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(C,{children:(0,u.jsx)(_,{onCharSelected:function(e){s(e)}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(C,{children:(0,u.jsx)(g,{charId:n})}),(0,u.jsx)(C,{children:(0,u.jsx)(T,{})})]})]}),(0,u.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})}},4304:function(e,r,n){n.d(r,{Z:function(){return i}});var a=n(4165),t=n(5861),c=n(9439),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)(!1),r=(0,c.Z)(e,2),n=r[0],i=r[1],o=(0,s.useState)(null),l=(0,c.Z)(o,2),u=l[0],h=l[1],d=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n,t,c,s,o,l=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",t=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(r,{method:n,body:t,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,i(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),i(!1),h(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:n,request:d,error:u,clearError:(0,s.useCallback)((function(){return h(null)}),[])}}(),r=e.loading,n=e.request,i=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=52bc0b04caaad7180e9bf329aa3d9735",h=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:210,e.next=3,n("".concat(l,"characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"characters?name=").concat(r,"&").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results.map(v));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"characters/").concat(r,"?").concat(u));case 2:return t=e.sent,e.abrupt("return",v(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,n("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"comics/").concat(r,"?").concat(u));case 2:return t=e.sent,e.abrupt("return",x(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(e){return{id:e.id,name:e.name,description:e.description?e.description:"Sorry, we don't have description for ".concat(e.name),thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){var r;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(r=e.textObjects[0])||void 0===r?void 0:r.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:r,error:i,getCharacterByName:d,getAllCharacters:h,getCharacter:m,clearError:o,getAllComics:f,getComic:p}}}}]);
//# sourceMappingURL=666.ff9b414e.chunk.js.map