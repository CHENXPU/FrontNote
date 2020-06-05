(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{472:function(t,s,a){"use strict";a.r(s);var n=a(55),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"es7装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es7装饰器"}},[t._v("#")]),t._v(" ES7装饰器")]),t._v(" "),a("h2",{attrs:{id:"什么是装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是装饰器"}},[t._v("#")]),t._v(" 什么是装饰器")]),t._v(" "),a("p",[t._v("装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。")]),t._v(" "),a("p",[t._v("很多面向对象的语言都实现了这个用法，如Java,Python。")]),t._v(" "),a("p",[t._v("光看概念可能理解的比较慢，来看看玩家类的这个例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n  @powerUp  这个装饰器的作用是提升玩家每局战斗之前的 初始 能量值\n\n  可以理解为：你充钱，就能得到这个装饰器，没开局就能比别人强\n*/")]),t._v("\n@powerUp \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initial value + 20")]),t._v("\n")])])]),a("p",[t._v("等同于")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nPlayer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Player"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" Player\n")])])]),a("p",[t._v("其实装饰器就是起到了对玩家"),a("strong",[t._v("类")]),t._v("进行处理的功能")]),t._v(" "),a("h3",{attrs:{id:"装饰器的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器的参数"}},[t._v("#")]),t._v(" 装饰器的参数")]),t._v(" "),a("p",[t._v("在装饰器函数当中，第一个参数"),a("code",[t._v("target")]),t._v("代表的是被修饰的类")]),t._v(" "),a("p",[t._v("在这个过程中可以对函数进行封装来扩展更多的参数")]),t._v(" "),a("h4",{attrs:{id:"添加静态属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加静态属性"}},[t._v("#")]),t._v(" 添加静态属性")]),t._v(" "),a("p",[t._v("如果我们想自定义增加的能量值，就可以这么搞")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value是自定义的能量值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我氪3个亿，加30")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initial value + 30")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我氪1个亿，加10")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initial value + 10")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意，修饰器对类的行为的改变，是"),a("strong",[t._v("代码编译时")]),t._v("发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数")])]),t._v(" "),a("h4",{attrs:{id:"添加实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加实例属性"}},[t._v("#")]),t._v(" 添加实例属性")]),t._v(" "),a("p",[t._v("那我们新建了一个小号，却发现没法加成了咋整")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Player"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initial value + 20")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initial value")]),t._v("\n")])])]),a("p",[t._v("这时候老马说，再冲一个亿就行，给你一个新装饰器@allPowerUp")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要添加实例属性才有用")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allPowerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allPowerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initial value + 20, 解决")]),t._v("\n")])])]),a("h3",{attrs:{id:"装饰器的使用对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器的使用对象"}},[t._v("#")]),t._v(" 装饰器的使用对象")]),t._v(" "),a("p",[t._v("在上面的使用过程中，我们发现了，装饰器可以作用在类上")]),t._v(" "),a("p",[t._v("其实，还可以作用在类的属性上")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("powerUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Player")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("userName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'爷傲、奈我何'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  @readonly 实现方法\n  #target 指的不再是类本身 (因为方法在实例对象上才能调用，但此时没有实例对象，若要修改只能修改原型)\n  #name 是所要修饰的属性名\n  #descriptor 是该属性的描述对象\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// descriptor对象原来的值如下")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   value: specifiedFunction,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   enumerable: false,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   configurable: true,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   writable: true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// };")]),t._v("\n  descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" descriptor\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readonly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似于")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行")])]),t._v(" "),a("h2",{attrs:{id:"为啥要使用装饰器呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥要使用装饰器呢"}},[t._v("#")]),t._v(" 为啥要使用装饰器呢")]),t._v(" "),a("p",[t._v("简化代码，提高代码可读性")]),t._v(" "),a("h2",{attrs:{id:"装饰模式-与-适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰模式-与-适配器模式"}},[t._v("#")]),t._v(" 装饰模式 与 适配器模式")]),t._v(" "),a("p",[t._v("装饰模式和适配器模式都是 包装模式 (Wrapper Pattern)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("适配器模式")]),t._v("你需要包装现有的模块接口，从而使之适配")]),t._v(" "),a("li",[a("strong",[t._v("装饰模式")]),t._v("不一样，仅仅包装现有的模块，并不会影响原有接口的功能")])]),t._v(" "),a("h2",{attrs:{id:"感谢提供知识的文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感谢提供知识的文章"}},[t._v("#")]),t._v(" 感谢提供知识的文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/p/1210000009968000/read",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES7 Decorator 装饰器 | 淘宝前端团队"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/?search=%E8%A3%85%E9%A5%B0%E5%99%A8&x=0&y=0#docs/decorator",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript 6 入门 | 修饰器"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);