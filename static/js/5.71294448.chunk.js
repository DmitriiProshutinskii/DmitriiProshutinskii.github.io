(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{161:function(t,e,r){t.exports=r(162)},162:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function b(){}function j(){}var g={};g[i]=function(){return this};var m=Object.getPrototypeOf,O=m&&m(m(D([])));O&&O!==r&&n.call(O,i)&&(g=O);var w=j.prototype=y.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function D(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return b.prototype=w.constructor=j,j.constructor=b,b.displayName=u(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=D,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},173:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),i=r(5),a=r(21),c=function(t){var e=t.label,r=t.link,o=t.value,i=t.format;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"70%",children:e}),Object(n.jsx)("td",{children:r?Object(n.jsx)("a",{href:r,children:i(o)}):i(o)})]})};c.defaultProps={format:function(t){return t},link:null,value:null};var u=c,s=function(t){var e=t.data;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:e.map((function(t){return Object(n.jsx)(u,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)}))})})},l=r(22),f=function(){var t=Object(o.useState)(),e=Object(l.a)(t,2),r=e[0],i=e[1];return Object(o.useEffect)((function(){var t=setInterval((function(){return function(){var t=new Date("1996-12-31T06:45:00");i(((Date.now()-t)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(t)}}),[]),Object(n.jsx)(n.Fragment,{children:r})},h=function(){var t=(new Date).getFullYear();return Object(n.jsxs)(n.Fragment,{children:["\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e \u043a\u043d\u0438\u0433 \u0432 ",t]})},p=[{key:"age",label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",value:Object(n.jsx)(f,{})},{key:"countries",label:"\u041f\u043e\u0441\u0435\u0449\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u044b",value:11,link:"https://www.google.com/maps/d/u/0/embed?mid=1Yb2u5jH6WMYyK7A1QseHNdlNS2jzcE7G"},{key:"location",label:"\u0413\u043e\u0440\u043e\u0434 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f",value:"\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0434\u0443\u043d\u044b\u0439, \u041c\u041e"},{key:"born",label:"\u0420\u043e\u0434\u0438\u043b\u0441\u044f \u0432",value:"\u0433. \u042f\u043a\u0443\u0442\u0441\u043a",link:"https://ru.wikipedia.org/wiki/%D0%AF%D0%BA%D1%83%D1%82%D1%81%D0%BA"},{key:"books",label:Object(n.jsx)(h,{}),value:"2"}],d=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0431\u043e \u043c\u043d\u0435"}),Object(n.jsx)(s,{data:p})]})},v=r(161),y=r.n(v),b=r(57);function j(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,c,"next",t)}function c(t){j(i,n,o,a,c,"throw",t)}a(void 0)}))}}var m=[{label:"\u0423 \u043c\u0435\u043d\u044f \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",key:"app_zero",link:"https://github.com/DmitriiProshutinskii/Test_TMDB_App_iOS"}],O=function(){var t=Object(o.useState)(m),e=Object(l.a)(t,2),r=e[0],i=e[1],a=Object(o.useCallback)(g(y.a.mark((function t(){var e,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/DmitriiProshutinskii/DmitriiProshutinskii.github.io");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,i(m.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{value:Object.keys(r).includes(t.key)?r[t.key]:t.value})})));case 7:case"end":return t.stop()}}),t)}))),[]);return Object(o.useEffect)((function(){a()}),[a]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0441\u0430\u0439\u0442\u0443"}),Object(n.jsx)(s,{data:r})]})};e.default=function(){return Object(n.jsx)(a.a,{title:"Stats",description:"Some statistics about Michael D'Angelo and mldangelo.com",children:Object(n.jsxs)("article",{className:"post",id:"stats",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(i.b,{to:"/stats",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})})})}),Object(n.jsx)(d,{}),Object(n.jsx)(O,{})]})})}},57:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(58);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},58:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=5.71294448.chunk.js.map