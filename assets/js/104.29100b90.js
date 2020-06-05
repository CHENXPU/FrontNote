(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{534:function(t,a,s){"use strict";s.r(a);var n=s(55),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"为什么要使用中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用中间件"}},[t._v("#")]),t._v(" 为什么要使用中间件")]),t._v(" "),s("p",[t._v("Redux 的基本做法：用户发出 Action，Reducer 函数算出新的 State，View 重新渲染。那异步操作怎么办？Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。\n怎么才能 Reducer 在异步操作结束后自动执行呢？这就要用到新的工具：中间件（middleware）.中间件处理的是 "),s("code",[t._v("action")]),t._v(" 对象")]),t._v(" "),s("h3",{attrs:{id:"中间件特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件特点"}},[t._v("#")]),t._v(" 中间件特点")]),t._v(" "),s("ul",[s("li",[t._v("中间件是个独立的函数")]),t._v(" "),s("li",[t._v("中间件可以独立使用")]),t._v(" "),s("li",[t._v("中间件有一个统一的接口")])]),t._v(" "),s("p",[t._v("一个什么都不做的中间件代码如下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("loggerMiddleware")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dispatching: '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);