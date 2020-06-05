(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{523:function(t,e,r){"use strict";r.r(e);var v=r(55),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"前端构建工具优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端构建工具优缺点"}},[t._v("#")]),t._v(" 前端构建工具优缺点")]),t._v(" "),r("p",[t._v("前端技术发展之快，各种可以提高开发效率的新思想和框架层出不穷。但是它们都有一个共同点：源代码无法直接运行，必须通过转换后才可以正常运行。")]),t._v(" "),r("p",[t._v("构建就是做这件事情，将源代码转换成可执行的 JavaScript、CSS、HTML 代码，包括如下内容。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("代码转换：将 TypeScript 编译成 JavaScript、将 SCSS 编译成 CSS 等。")])]),t._v(" "),r("li",[r("p",[t._v("文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等。")])]),t._v(" "),r("li",[r("p",[t._v("代码分割：提取多个页面的公共代码，提取首屏不需要执行部分的代码让其异步加载。")])]),t._v(" "),r("li",[r("p",[t._v("模块合并：在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件。")])]),t._v(" "),r("li",[r("p",[t._v("自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。")])]),t._v(" "),r("li",[r("p",[t._v("代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。")])]),t._v(" "),r("li",[r("p",[t._v("自动发布：更新代码后，自动构建出线上发布代码并传输给发布系统。")])])]),t._v(" "),r("p",[t._v("构建其实是工程化、自动化思想在前端开发中的体现，将一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。构建为前端开发注入了更大的活力，解放了我们的生产力。")]),t._v(" "),r("p",[t._v("历史上先后出现了一系列构建工具，它们各有优缺点。由于前端工程师很熟悉 JavaScript，Node.js 又可以胜任所有构建需求，所以大多数构建工具都是用 Node.js 开发的。下面来一一介绍它们。")]),t._v(" "),r("h2",{attrs:{id:"grunt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grunt"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://www.w3cplus.com/tools/grunt-tutorial-start-grunt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grunt"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("Grunt 其实就是一个基于 NodeJS,可用于自动化构建、测试、生成文档的项目管理工具。他可以更好的帮助一个团队更好的提高效率、减少错误率。")]),t._v(" "),r("p",[t._v("在前端项目中，我们为了可分工明确将 js，css 独自出一个个的文件，但这样一来用来页面上，增加了文件个数，同时也产生过多的 Http 请求，可从性能的角度来考虑，不利于页面优化。所以外卖需要利用 grunt 合并这些 js 和 css 文件。")]),t._v(" "),r("h2",{attrs:{id:"gulp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gulp"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://www.jianshu.com/p/d003e12e2f55",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gulp"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("gulp 是基于 node.js 的一个构建工具（自动任务运行器），开发者可以使用它自动化工作流程。\n一些常见的、重复的任务，例如：网页自动刷新、css 预处理、代码检测、压缩图片、等，只需要简单的命令就能全部完成。使用它可以简化工作，提高开发效率。")]),t._v(" "),r("p",[t._v("gulp 优点：")]),t._v(" "),r("ul",[r("li",[t._v("简洁：gulp 侧重“代码优于配置”，最直观的感受，更为简单和清晰，不需要 grunt 一样写一堆庞大的配置文件。")]),t._v(" "),r("li",[t._v("高效：gulp 基于 node streams（流）来构建任务，避免磁盘反复读取/写入。每个任务都是单独执行，这使得它速度更快、更为纯粹。")]),t._v(" "),r("li",[t._v("易学：gulp 核心 API 只有 4 个，简洁的 API 易于上手，学习过程平滑。")])]),t._v(" "),r("h2",{attrs:{id:"webpack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://segmentfault.com/a/1190000003970448",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("web 开发中常用到的静态资源主要有 JavaScript、CSS、图片、Jade 等文件，webpack 中将静态资源文件称之为模块。")]),t._v(" "),r("p",[t._v("webpack 是一个 module bundler(模块打包工具)，其可以兼容多种 js 书写规范，且可以处理模块间的依赖关系，具有更强大的 js 模块化的功能。")]),t._v(" "),r("p",[t._v("Webpack 对它们进行统一的管理以及打包发布。适用于 react.js 的打包工具。")]),t._v(" "),r("p",[t._v("webpack 具有 requireJs 和 browserify 的功能，但仍有很多自己的新特性：")]),t._v(" "),r("ol",[r("li",[t._v("对 CommonJS 、 AMD 、ES6 的语法做了兼容")]),t._v(" "),r("li",[t._v("对 js、css、图片等资源文件都支持打包")]),t._v(" "),r("li",[t._v("串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对 CoffeeScript、ES6 的支持")]),t._v(" "),r("li",[t._v("有独立的配置文件 webpack.config.js")]),t._v(" "),r("li",[t._v("可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间")]),t._v(" "),r("li",[t._v("支持 SourceUrls 和 SourceMaps，易于调试")]),t._v(" "),r("li",[t._v("具有强大的 Plugin 接口，大多是内部插件，使用起来比较灵活\n8.webpack 使用异步 IO 并具有多级缓存。这使得 webpack 很快且在增量编译上更加快")])]),t._v(" "),r("h2",{attrs:{id:"fis3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fis3"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"http://www.open-open.com/lib/view/open1452002802667.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fis3"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("其主要功能基本都是围绕着前端开发所需要的三种编译能力：资源定位、内容嵌入、依赖声明。")]),t._v(" "),r("p",[t._v("fis3 实现了一套“静态资源管理系统”，在开发页面的时候只需要用相对路径开发\nfis3 也提供了很多插件来对图片进行合并、对 HTML、js、css 文件进行合并，fis3 会对路径中带有 ?__sprite 的图片进行合并，减少了请求数量。")]),t._v(" "),r("p",[t._v("但单纯的资源合并是没有办法按需加载资源的，然而静态资源按需加载也是减少资源冗余的很重要的方式。")])])}),[],!1,null,null,null);e.default=_.exports}}]);