(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{528:function(t,a,r){"use strict";r.r(a);var s=r(55),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"白屏问题和-fouc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#白屏问题和-fouc"}},[t._v("#")]),t._v(" 白屏问题和 FOUC")]),t._v(" "),r("h2",{attrs:{id:"白屏不是-bug，而是由于浏览器的渲染机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#白屏不是-bug，而是由于浏览器的渲染机制"}},[t._v("#")]),t._v(" 白屏不是 bug，而是由于浏览器的渲染机制")]),t._v(" "),r("ol",[r("li",[t._v("白屏的根本原因是浏览器在渲染的时候没有请求到或请求时间过长造成的。")]),t._v(" "),r("li",[t._v("浏览器对于图片和 CSS，在加载时会并发加载（比如一个域名下同时加载多个文件），浏览器对于 JavaScript，在加载时会禁用并发，并且阻止其后的文件及组件的下载。所以将 js 放在页面的顶部也可能会导致白屏。")]),t._v(" "),r("li",[t._v("不同浏览器的处理 CSS 和 HTML 的方式是不同的：\n比如，IE、chrome 浏览器的渲染机制，采用的是等 CSS 全部加载解析完后再渲染展示页面。\nFirefox 则是在 CSS 未加载前先展示 html 的内容，等 CSS 加载后重新对样式进行修改。")])]),t._v(" "),r("p",[t._v("所以：白屏的出现情况往往因为 CSS 样式被置于底部（最后加载）,当新窗口打开,刷新等的时候，页面会出现白屏。\n如果使用 @import 标签,它引用的文件则会等页面全部下载完毕再被加载，也可能出现白屏。")]),t._v(" "),r("p",[t._v("因此，css 使用 link 标签将样式表放在顶部，防止白屏问题出现,JS 的放置位置一般是在 body 的闭合标签之前。")]),t._v(" "),r("h2",{attrs:{id:"fouc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fouc"}},[t._v("#")]),t._v(" FOUC")]),t._v(" "),r("p",[t._v("FOUC (Flash of Unstyled Content) 无样式内容闪烁：\n如果把样式放在底部，对于 IE 浏览器,在某些场景下(点击链接,输入 URL,使用书签进入等),会出现 FOUC 现象(逐步加载无样式的内容,等 CSS 加载后页面才突然展现出样式)。对于 Firefox 会一直表现出 FOUC 。")]),t._v(" "),r("ul",[r("li",[t._v("脚本会阻塞后面内容的呈现")]),t._v(" "),r("li",[t._v("脚本会阻塞其后组件的下载")]),t._v(" "),r("li",[t._v("对于图片和 CSS, 在加载时会并发加载(如一个域名下同时加载两个文件)。但在加载 JavaScript 时,会禁用并发,并且阻止其他内容的下载。")])]),t._v(" "),r("p",[t._v("所以尽量把 JavaScript 放入页面 body 底部。")])])}),[],!1,null,null,null);a.default=v.exports}}]);