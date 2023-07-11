/*! For license information please see main.b2c3194a.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{10:function(e,t,n){e.exports={banner:"Banner_banner__3fEZD",img:"Banner_img__1oMj5",container:"Banner_container__1PrfA",overview:"Banner_overview__29b7F",dflex:"Banner_dflex__1s6RY",btn:"Banner_btn__2h4el"}},11:function(e,t,n){e.exports={container:"MovieDetail_container__2_bSS",modal:"MovieDetail_modal__2teT0",name:"MovieDetail_name__zppqq",date:"MovieDetail_date__2iN4W",video:"MovieDetail_video__3uUY7",img:"MovieDetail_img__uYVgL",btn:"MovieDetail_btn__3hVCt"}},14:function(e,t,n){e.exports={container:"SearchForm_container__FKbR2",wraper:"SearchForm_wraper__26hep",searchinput:"SearchForm_searchinput__3sPZP",container_btn:"SearchForm_container_btn__1rYR2",btn:"SearchForm_btn__aEYhT",btn_search:"SearchForm_btn_search__1-UjH"}},16:function(e,t,n){e.exports={navbar:"Navbar_navbar__1zDM1",logo:"Navbar_logo__2m67e",search:"Navbar_search__2Min1",transparent:"Navbar_transparent__26umd"}},29:function(e,t,n){e.exports={list:"ListItem_list__1jmQy",listitem:"ListItem_listitem__3xZEG",image:"ListItem_image__3CXpb"}},33:function(e,t,n){e.exports={container:"MovieList_container__26Ndd"}},37:function(e,t,n){e.exports={app:"Browse_app__2JPst"}},38:function(e,t,n){e.exports={app:"Search_app__2E4sc"}},40:function(e,t,n){e.exports=n(78)},45:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(23),i=n.n(o),c=(n(45),n(39)),l=n(2),s=n(3),u=n(16),f=n.n(u),h=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(r.useEffect)((function(){var e=function(){var e=window.scrollY>100;o(e)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var i=n?f.a.navbar:f.a.navbar+" "+f.a.transparent;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:i},a.a.createElement("div",{className:f.a.logo,onClick:function(){window.location.replace("/")}},a.a.createElement("h2",null,"Movie App")),a.a.createElement("div",{className:f.a.search,onClick:function(){window.location.replace("/search")}},a.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16 ",fill:"#fff","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))))},m=n(4),v=n(10),d=n.n(v),p=n(29),g=n.n(p),y=function(e){var t=e.item,n=e.onCallBack;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:g.a.list},a.a.createElement("li",{className:g.a.listitem},a.a.createElement("img",{onClick:function(){n(t)},className:g.a.image,src:"https://image.tmdb.org/t/p/original".concat(t.poster_path)}))))},_=n(33),b=n.n(_),w=(n(46),n(47),n(26)),E=n.n(w),j=n(11),x=n.n(j),O=n(34);function L(){L=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new O(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=s;var f={};function h(){}function m(){}function v(){}var d={};l(d,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(k([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=v.prototype=h.prototype=Object.create(d);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v,r(y,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},_(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var k=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),i=Object(s.a)(o,2),c=i[0],l=i[1];return{isLoading:n,error:c,sendRequest:Object(r.useCallback)(function(){var e=Object(m.a)(L().mark((function e(t,n){var r,o;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),l(null),e.prev=2,e.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((r=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,r.json();case 10:o=e.sent,n(o),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),l(e.t0.message||"Something went wrong!");case 17:a(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[])}},S="f8a2442788001efebb0e306dd5f7ecfa",N=function(e){var t=e.item,n=e.onClose,o=Object(r.useState)([]),c=Object(s.a)(o,2),l=c[0],u=c[1],f=k(),h=f.isLoading,m=(f.error,f.sendRequest),v=t.id;Object(r.useEffect)((function(){m({url:"https://api.themoviedb.org/3/movie/".concat(t.id,"/videos?api_key=").concat(S)},(function(e){u(e.results)}))}),[v]);var d=l.find((function(e){return"YouTube"===e.site&&"Trailer"===e.type}));return i.a.createPortal(a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:x.a.container},a.a.createElement("div",{className:x.a.modal},a.a.createElement("div",{className:x.a.name},t.original_title?a.a.createElement("h4",null,t.original_title):a.a.createElement("h4",null,"Movie")),a.a.createElement("div",{className:x.a.date},a.a.createElement("p",null,"release_date: ",t.release_date),a.a.createElement("p",null,"vote: ",t.vote_count,"/",t.vote_average)),a.a.createElement("p",null,t.overview),a.a.createElement("button",{className:x.a.btn,onClick:n},"Close")),a.a.createElement("div",{className:x.a.video},h&&a.a.createElement("p",{style:{color:"#fff"}},"Loading..."),d?a.a.createElement(O.a,{videoId:d.key,opts:{height:"300",width:"98%",playerVars:{autoplay:0}}}):a.a.createElement("img",{className:x.a.img,src:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)})))),document.getElementById("modal-root"))},M=function(e){var t,n=e.data,o=Object(r.useState)(!1),i=Object(s.a)(o,2),c=i[0],l=i[1],u=Object(r.useState)(),f=Object(s.a)(u,2),h=f[0],m=f[1],v=Object(r.useState)(null),d=Object(s.a)(v,2),p=d[0],g=d[1];n&&(t=n.results);var _={dots:!1,infinite:!0,speed:800,slidesToShow:10,slidesToScroll:7,arrows:!1},w=function(e){p!==e.id?(l(!0),g(e.id),m(e)):(l(!c),g(e.id))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:b.a.container},a.a.createElement(E.a,_,t&&t.map((function(e,t){return a.a.createElement(y,{key:t,item:e,onCallBack:w})})))),c&&a.a.createElement(N,{item:h,onClose:function(){l(!1)}}))};function C(){C=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new O(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var f={};function h(){}function m(){}function v(){}var d={};l(d,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(L([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=v.prototype=h.prototype=Object.create(d);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,r(y,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},_(b.prototype),l(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var T=function(){var e=Object(r.useState)({}),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),c=Object(s.a)(i,2),l=c[0],u=c[1];Object(r.useEffect)((function(){var e="https://api.themoviedb.org/3/discover/tv?api_key=".concat(S,"&with_network=123");(function(){var t=Object(m.a)(C().mark((function t(){var n,r;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,o(r.results[Math.floor(Math.random()*r.results.length-1)]),u(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var f=n.backdrop_path;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:d.a.banner},f&&a.a.createElement("img",{className:d.a.img,src:"https://image.tmdb.org/t/p/original".concat(f)}),a.a.createElement("div",{className:d.a.container},a.a.createElement("h2",null,n.name),a.a.createElement("div",{className:d.a.dflex},a.a.createElement("button",{className:d.a.btn},"Play"),a.a.createElement("button",{className:d.a.btn},"My List")),a.a.createElement("p",{className:d.a.overview},n.overview))),a.a.createElement(M,{data:l}))},F=n(37),P=n.n(F),I=n(6),R=(n(77),n(8)),G=n.n(R),B=function(e){var t=e.items,n=e.title,r=e.onCallBack,o=e.classSearch,i=o?G.a.container+" "+G.a.search:G.a.container,c=o?G.a.list+" "+G.a.list_item:G.a.list;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:i},n&&a.a.createElement("p",{className:G.a.title},n),a.a.createElement(E.a,Object.assign({},{scroll:!0,dots:!1,infinite:!0,speed:800,slidesToShow:7.8,slidesToScroll:4.5,arrows:!1},{className:G.a.slider}),t.map((function(e){return a.a.createElement("ul",{key:e.id,className:c},a.a.createElement("li",{className:G.a.listitem},a.a.createElement("img",{onClick:function(){return function(e){r(e)}(e)},className:G.a.image,src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path)})))})))))},A={fetchTrending:"/trending/all/week?api_key=".concat(S,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(S,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(S,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(S,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(S,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(S,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(S,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(S,"&with_genres=99"),fetchSearch:"/search/movie?api_key=".concat(S,"&language=en-US")},D=[{title:"Xu h\u01b0\u1edbng",endpoin:A.fetchTrending},{title:"X\u1ebfp h\u1ea1ng cao",endpoin:A.fetchTopRated},{title:"H\xe0nh \u0111\u1ed9ng",endpoin:A.fetchTopRated},{title:"H\xe0i",endpoin:A.fetchComedyMovies},{title:"Kinh d\u1ecb",endpoin:A.fetchHorrorMovies},{title:"L\xe3ng m\u1ea1n",endpoin:A.fetchRomanceMovies},{title:"T\xe0i li\u1ec7u",endpoin:A.fetchDocumentaries}],Y=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(!1),c=Object(s.a)(i,2),l=c[0],u=c[1],f=Object(r.useState)(),h=Object(s.a)(f,2),m=h[0],v=h[1],d=Object(r.useState)(null),p=Object(s.a)(d,2),g=p[0],y=p[1],_=k(),b=(_.isLoading,_.error,_.sendRequest);Object(r.useEffect)((function(){for(var e=function(e,t){o((function(n){return[].concat(Object(I.a)(n),[{title:e,items:t.results}])}))},t=0,n=D;t<n.length;t++){var r=n[t];b({url:"https://api.themoviedb.org/3".concat(r.endpoin)},e.bind(null,r.title))}}),[b]);var w=function(e){g!==e.id?(u(!0),y(e.id),v(e)):(u(!l),y(e.id)),console.log("id",e.id),console.log("item",e)};return a.a.createElement(a.a.Fragment,null,n.map((function(e,t){return a.a.createElement(B,Object.assign({key:t},e,{onCallBack:w}))})),l&&a.a.createElement(N,{item:m,onClose:function(){u(!1)}}))};var W=function(){return a.a.createElement("div",{className:P.a.app},a.a.createElement(h,null),a.a.createElement(T,null),a.a.createElement(Y,null))},U=n(38),q=n.n(U),H=n(14),z=n.n(H),J=Object(r.memo)((function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),c=Object(s.a)(i,2),l=c[0],u=c[1],f=Object(r.useState)(""),h=Object(s.a)(f,2),m=h[0],v=h[1],d=Object(r.useRef)(),p=Object(r.useState)(null),g=Object(s.a)(p,2),y=g[0],_=g[1],b=Object(r.useState)(!1),w=Object(s.a)(b,2),E=w[0],j=w[1],x=Object(r.useState)(),O=Object(s.a)(x,2),L=O[0],M=O[1],C=Object(r.useState)(null),T=Object(s.a)(C,2),F=T[0],P=T[1],I=k(),R=(I.isLoading,I.error),G=I.sendRequest;Object(r.useEffect)((function(){G({url:"https://api.themoviedb.org/3/search/movie?api_key=".concat(S,"&query=").concat(l,"&language=en-US?api_key=").concat(S)},(function(e){o(e.results)}))}),[l]),console.log(n);return a.a.createElement("div",{className:z.a.container},a.a.createElement("div",{className:z.a.wraper},a.a.createElement("div",{className:z.a.searchinput},a.a.createElement("input",{ref:d,type:"text"}),m&&a.a.createElement("p",{style:{color:"red"}},m),R&&a.a.createElement("p",{style:{color:"red"}},R),a.a.createElement("svg",{className:"svg-inline--fa fa-search fa-w-16 ",fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))),a.a.createElement("div",{className:z.a.container_btn},a.a.createElement("button",{className:z.a.btn},"RESET"),a.a.createElement("button",{className:z.a.btn_search,onClick:function(){return""!==d.current.value.trim()?(u(d.current.value.trim()),_("Search Results "),void v("")):""===d.current.value.trim()?(v("vui l\xf2ng nh\u1eadp t\u1eeb kh\xf3a"),void _("")):void 0}},"SEARCH"))),a.a.createElement(B,{items:n,title:y,classSearch:!0,onCallBack:function(e){F!==e.id?(j(!0),P(e.id),M(e)):(j(!E),P(e.id))}}),E&&a.a.createElement(N,{item:L,onClose:function(){j(!1)}}))})),K=function(){return a.a.createElement("div",{className:q.a.app},a.a.createElement(h,null),a.a.createElement(J,null))};var X=function(){return a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",element:a.a.createElement(W,null)}),a.a.createElement(l.a,{path:"/search",element:a.a.createElement(K,null)})))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(X,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}()},8:function(e,t,n){e.exports={container:"MovieCategoryItem_container__1Kzeb",list:"MovieCategoryItem_list__2Ghev",listitem:"MovieCategoryItem_listitem__1vmu3",image:"MovieCategoryItem_image__2bBIl",title:"MovieCategoryItem_title__1chPs",slider:"MovieCategoryItem_slider__3KXEL",search:"MovieCategoryItem_search__PeJWt",list_item:"MovieCategoryItem_list_item__2Q5TR"}}},[[40,1,2]]]);
//# sourceMappingURL=main.b2c3194a.chunk.js.map