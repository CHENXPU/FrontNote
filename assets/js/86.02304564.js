(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{519:function(a,v,_){"use strict";_.r(v);var t=_(55),r=Object(t.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"v8-种的垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v8-种的垃圾回收"}},[a._v("#")]),a._v(" V8 种的垃圾回收")]),a._v(" "),_("h2",{attrs:{id:"种类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[a._v("#")]),a._v(" 种类")]),a._v(" "),_("ul",[_("li",[a._v("新生代内存区：基本的数据对象都被分配在这里，特点是小而频。其区域小但是垃圾回收频繁")]),a._v(" "),_("li",[a._v("老生代指针区：这是一堆指向老生代内存区具体数据内容的指针。基本上从新生代蜕变过来的对象会被移动至此")]),a._v(" "),_("li",[a._v("老生代数据区：存放数据对象，而不是指向其他对象的指针。老生代指针区的指针就往这边指")]),a._v(" "),_("li",[a._v("大对象区：这里存放体积超越其他区大小的对象，每个对象有自己的内存，垃圾回收并不会移动大对象")]),a._v(" "),_("li",[a._v("代码区：代码对象，也就是包含 JIT 之后指令的对象，会被分配在这里。这是唯一拥有执行权限的内存区")]),a._v(" "),_("li",[a._v("Cell 区、属性 Cell 区、Map 区：存放 Cell、属性 Cell 和 Map，每个区域都是存放相同大小的元素，结构简单")])]),a._v(" "),_("h3",{attrs:{id:"新生代内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新生代内存"}},[a._v("#")]),a._v(" 新生代内存")]),a._v(" "),_("p",[a._v("新生代分配内存非常容易，只需要保存一个指向内存区的指针，不断根据新对象的大小进行递增既可。当该指针到达了新生代内存区的末尾时，会有一次清理")]),a._v(" "),_("p",[a._v("新生代使用 Scavenge 算法进行回收，大致思想为，将内存一分为二，每部分的空间都被称为 Semispace。在两个 Semispace 中，总有一个处于使用状态，成为 From 空间；另一个处于闲置状态，成为 To 空间")]),a._v(" "),_("p",[a._v("在分配对象时，使用 From 空间进行分配；在垃圾回收时，Chrome V8 检查 From 空间的存活对象，然后将这些对象复制到 To 空间中，剩下的对象就会被释放，完成复制后的 From 空间和 To 空间的角色对调")]),a._v(" "),_("p",[a._v("由此可见，新生代内存中，至少有一半的内存是空闲不用的")]),a._v(" "),_("p",[a._v("当一个新生代对象经过多次垃圾回收，而依然存在在内存区中时，这个时候他就会被移动到老生代内存，这种操作被成为称为 "),_("strong",[a._v("对象")]),a._v("的晋升")]),a._v(" "),_("p",[a._v("标准有两条：")]),a._v(" "),_("ul",[_("li",[a._v("经历过一次新生代清理")]),a._v(" "),_("li",[a._v("To 空间的使用已经尝过了 25%，那么这个对象也会晋升")])]),a._v(" "),_("h3",{attrs:{id:"老生代内存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#老生代内存"}},[a._v("#")]),a._v(" 老生代内存")]),a._v(" "),_("p",[a._v("老生代所保存的对象大多数是生存周期很长的甚至是常驻内存的对象，而且老生代占用的内存较多。因为老生代内存占用的空间非常大，所以此处为了避免内存浪费，并没有使用 Scavenge 算法进行垃圾回收")]),a._v(" "),_("p",[a._v("于是他们的垃圾回收机制变成了 Mark-Sweep（主要）和 Mark-Compack 的结合体")]),a._v(" "),_("h4",{attrs:{id:"mark-sweep（标记清除）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mark-sweep（标记清除）"}},[a._v("#")]),a._v(" Mark-Sweep（标记清除）")]),a._v(" "),_("ul",[_("li",[a._v("标记：在标记阶段，需要遍历老生代堆中所有对象，并标记那些活着的对象，然后进入清除阶段")]),a._v(" "),_("li",[a._v("清除：在清除阶段，Chrome V8 只清除没有被标记的对象")])]),a._v(" "),_("p",[a._v("由于死亡对象在老生代中占用的比例通常比较小，因此效率比较高（比如从一筐苹果挑出三个烂苹果比挑出半篮烂苹果快）")]),a._v(" "),_("h4",{attrs:{id:"mark-compact（标记整理）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mark-compact（标记整理）"}},[a._v("#")]),a._v(" Mark-Compact（标记整理）")]),a._v(" "),_("p",[a._v("在标记清除时，容易产生内存碎片的问题。标记整理在清除的时候，让活着的剩余对象尽可能往内存区域的前面靠，相当于碎片整理")]),a._v(" "),_("p",[a._v("所以其效率相对标记清楚较低，但是优势是不会产生内存碎片")]),a._v(" "),_("h4",{attrs:{id:"惰性清理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#惰性清理"}},[a._v("#")]),a._v(" 惰性清理")]),a._v(" "),_("p",[a._v("垃圾回收器可以根据自身需要来清理死掉的对象")])])}),[],!1,null,null,null);v.default=r.exports}}]);