(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{173:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n(5),s=n(21),o=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"university",children:Object(r.jsx)("a",{href:t.link,children:t.university})}),Object(r.jsxs)("h6",{className:"degree",children:[t.year,", ",t.degree]}),Object(r.jsx)("p",{className:"school",children:t.school}),Object(r.jsx)("p",{className:"thesis",children:"\u0422\u0435\u043c\u0430 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(r.jsx)("p",{className:"description",children:t.thesis})]})})},a=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"})}),t.map((function(e){return Object(r.jsx)(o,{data:e},e.school)}))]})};a.defaultProps={data:[]};var l=a,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},b=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"\u043e\u043f\u044b\u0442"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};b.defaultProps={data:[]};var d=b;function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var c=f(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return m(this,n)}}var O=n(58),v=n(57),g=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},x=function(e){var t=e.data,n=e.categories,c=t.category,i=t.competency,s=t.title,o={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},a=Object(v.a)(Object(v.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:o,children:Object(r.jsx)("span",{children:s})}),Object(r.jsx)("div",{className:"skillbar-bar",style:a}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};x.defaultProps={categories:[]};var k=x,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,c,i=y(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(O.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(O.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=s,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(g,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"\u043d\u0430\u0432\u044b\u043a\u0438"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&j(t.prototype,n),c&&j(t,c),s}(c.Component);w.defaultProps={skills:[],categories:[]};var N=w,S=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.university," - "]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};S.defaultProps={last:!1};var P=S,C=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"\u043a\u0443\u0440\u0441\u044b"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};C.defaultProps={data:[]};var D=C,A=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"\u0441\u0441\u044b\u043b\u043a\u0438"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(i.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},R=[{title:"Developing Applications for iOS using SwiftUI",number:"CS 193p",link:"https://cs193p.sites.stanford.edu/",university:"Stanford"},{title:"Technical Support Fundamentals",number:"1/6",link:"https://www.coursera.org/account/accomplishments/certificate/EN64UB3H5XQN",university:"Google"},{title:"The Bits and Bytes of Computer Networking",number:"2/6",link:"https://www.coursera.org/account/accomplishments/certificate/JA624DHUV43R",university:"Google"},{title:"C# Programming for Unity Game Development",number:"4/4",link:"https://www.coursera.org/account/accomplishments/specialization/certificate/2GHHE6JYCVXZ",university:"University of Colorado"},{title:"Introduction to Programming in Swift 5",number:"/",link:"https://www.coursera.org/account/accomplishments/certificate/V9KAMYR623C7",university:"Learn Quest"},{title:"Crash Course on Python",number:"1/7",link:"https://www.coursera.org/account/accomplishments/certificate/SFGG5DLRDSFD",university:"Google"}],T=[{university:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0424\u0438\u0437\u0438\u043a\u043e-\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0418\u043d\u0441\u0442\u0438\u0442\u0443\u0442",school:"\u0424\u0438\u0437\u0442\u0435\u0445-\u0448\u043a\u043e\u043b\u0430 \u0420\u0430\u0434\u0438\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438 \u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0445 \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439",degree:"\u041c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430",thesis:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f   \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0438   \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b   \u0441   \u0443\u0447\u0435\u0442\u043e\u043c \u0433\u0435\u043e\u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u0438 \u0441\u0442\u0432\u043e\u043b\u0430 \u0441\u043a\u0432\u0430\u0436\u0438\u043d\u044b",link:"https://mipt.ru",year:2020},{university:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0424\u0438\u0437\u0438\u043a\u043e-\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0418\u043d\u0441\u0442\u0438\u0442\u0443\u0442",school:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442 \u041c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u043e\u0439 \u0438 \u0425\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0424\u0438\u0437\u0438\u043a\u0438",degree:"\u0411\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442",thesis:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435   \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430   \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f   \u043f\u043e\u043b\u0438\u043c\u0435\u0440\u043d\u044b\u0445\u043f\u043e\u043b\u0438\u044d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440",link:"https://mipt.ru",year:2018}],E=[{company:"Ramax Group",position:"Junior iOS \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",link:"https://www.ramax.ru/",daterange:"\u041c\u0430\u0439 2021 - \u043d.\u0432.",points:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 iOS \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442."]},{company:"\u0418\u043d\u0436\u0438\u043d\u0438\u0440\u0438\u043d\u0433\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 \u041c\u0424\u0422\u0418",position:"\u0418\u043d\u0436\u0435\u043d\u0435\u0440-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",link:"https://www.cet-mipt.ru/",daterange:"\u0418\u044e\u043b\u044c 2020 - \u041c\u0430\u0439 2021",points:["\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441\u043c\u0435\u0448\u0430\u043d\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0434 \u043e\u0447\u043a\u0438 Microsoft HoloLens 2.","\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430, \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0434\u0438\u0437\u0430\u0439\u043d \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043c\u0435\u0448\u0430\u043d\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043d\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435.","\u0417\u0430\u043a\u0443\u043f\u043a\u0430 \u043e\u0447\u043a\u043e\u0432, \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0445 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 (\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432: RU 2020661076 \u0438  RU 2020614899)"]},{company:"\u0418\u043d\u0436\u0438\u043d\u0438\u0440\u0438\u043d\u0433\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 \u041c\u0424\u0422\u0418",position:"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0438\u043d\u0436\u0435\u043d\u0435\u0440",link:"https://www.cet-mipt.ru/",daterange:"\u0410\u0432\u0433\u0443\u0441\u0442 2018 - \u0418\u044e\u043b\u044c 2020",points:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441\u043c\u0435\u0448\u0430\u043d\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0434 \u043e\u0447\u043a\u0438 Microsoft HoloLens.","\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u0438\u043f\u043e\u0442\u0435\u0437. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e UI/UX, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f.","\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e TCP-\u043a\u043b\u0438\u0435\u043d\u0442-\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Photon Unity Network."]},{company:"\u041b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432",position:"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0438\u043d\u0436\u0435\u043d\u0435\u0440",link:"https://uspex-team.org/ru",daterange:"\u041d\u043e\u044f\u0431\u0440\u044c 2017 \u2013 \u0410\u0432\u0433\u0443\u0441\u0442 2018",points:["\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u0438\u043c\u0435\u0440\u043d\u044b\u0445 \u043f\u043e\u043b\u0438\u044d\u0434\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440.","\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 USPEX, \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 BASH, \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 VASP, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043d\u0430 Phyton."]}],M=n(17);var U=n(24);var L,G=[{title:"C#",competency:3,category:["GameDev","Languages",".NET","Core"]},{title:"Unity",competency:3,category:["GameDev","Tools","3D"]},{title:"MRTK 2.x",competency:3,category:["Tools"]},{title:"Bash",competency:1,category:["Tools","Languages"]},{title:"MySQL",competency:1,category:["Databases",".NET"]},{title:"Git",competency:3,category:["Tools"]},{title:"Python",competency:2,category:["Languages","Python"]},{title:"C++",competency:1,category:["Languages"]},{title:"Java",competency:1,category:["Languages"]},{title:"Swift",competency:1,category:["iOS","Mobile Dev"]},{title:"Adobe After Effecs",competency:3,category:["Media","Tools"]},{title:"Adobe Premier Pro",competency:3,category:["Media","Tools"]},{title:"Adobe Illustrator",competency:2,category:["Media","Tools","UI/UX"]},{title:"Blender",competency:2,category:["Tools","3D"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),I=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],B=(L=new Set(G.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(M.a)(e)}(L)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(L)||Object(U.a)(L)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:I[t]}})),H=["\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435","\u041e\u043f\u044b\u0442","\u041d\u0430\u0432\u044b\u043a\u0438","\u041a\u0443\u0440\u0441\u044b","\u0421\u0441\u044b\u043b\u043a\u0438"];t.default=function(){return Object(r.jsx)(s.a,{title:"Resume",description:"Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(i.b,{to:"resume",children:"\u0420\u0435\u0437\u044e\u043c\u0435"})}),Object(r.jsx)("div",{className:"link-container",children:H.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:T}),Object(r.jsx)(d,{data:E}),Object(r.jsx)(N,{skills:G,categories:B}),Object(r.jsx)(D,{data:R}),Object(r.jsx)(A,{})]})})}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(58);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},58:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.7fce1cef.chunk.js.map