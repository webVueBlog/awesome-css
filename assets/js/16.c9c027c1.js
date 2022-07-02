(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{607:function(t,s,a){"use strict";a.r(s);var e=a(8),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("点击勘误"),a("a",{attrs:{href:"https://github.com/webVueBlog/awesome-css/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),a("OutboundLink")],1),t._v("，感谢大家的阅读")])]),t._v(" "),a("p",[t._v("首先，我们需要一个用于放置窗帘的容器，我们将给它.curtain，我们有一个.invert子元素，它将作为我们的“粘性”框。最后，我们在这个盒子里有了内容。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curtain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invert"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Section title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"让我们设置一些-css-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#让我们设置一些-css-变量"}},[t._v("#")]),t._v(" 让我们设置一些 CSS 变量")]),t._v(" "),a("p",[t._v("需要三个值。让我们用它们制作 CSS 变量:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("--minh")]),t._v(" 容器高度")]),t._v(" "),a("li",[a("code",[t._v("--color1")]),t._v(" 浅颜色")]),t._v(" "),a("li",[a("code",[t._v("--color2")]),t._v(" 深颜色")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("minh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 98vh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("color1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wheat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("color2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" midnightblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"是时候拉开帷幕了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是时候拉开帷幕了"}},[t._v("#")]),t._v(" 是时候拉开帷幕了")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("linear-gradient")]),t._v(" 代表“分裂”背景")]),t._v(" "),a("li",[a("code",[t._v("min-height")]),t._v(" 容器底部的额外空间")])]),t._v(" "),a("p",[t._v("我们使用"),a("code",[t._v("::after")]),t._v("伪元素将额外的空间添加到底部。这样，我们的“粘性”内容实际上会在滚动经过"),a("code",[t._v("::after")]),t._v("元素时粘在容器上。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("curtain "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/** create the "split" background **/')]),t._v("\n  background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" linear"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("color2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("color1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/** add extra space to the bottom (need this for the "sticky" effect) **/')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("curtain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("after "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("minh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"制作粘性内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作粘性内容"}},[t._v("#")]),t._v(" 制作粘性内容")]),t._v(" "),a("p",[t._v("接下来，我们需要使我们的内容“粘性”，因为它完全位于容器内，因为背景和文本交换颜色值。事实上，我们已经为.curtain的子元素提供了一个.invert可以用作粘性容器的类。")]),t._v(" "),a("ul",[a("li",[t._v("position: sticky并top定义粘性。")]),t._v(" "),a("li",[t._v("mix-blend-mode: difference 将元素内部内容的颜色混合到.curtain的背景渐变中。")]),t._v(" "),a("li",[t._v("display: flex将演示内容居中。")]),t._v(" "),a("li",[t._v("min-height定义容器的高度并允许底部的额外空间。")]),t._v(" "),a("li",[t._v("color设置标题的颜色。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("invert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** make the content sticky **/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" sticky"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** blend the content with the contrast effect **/")]),t._v("\n  mix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("blend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" difference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** center the content **/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  align"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  justify"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** set the minimum height of the section **/")]),t._v("\n  min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("minh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nh2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** set the color of the text **/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("color1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v(".curtain::after内容的高度是使用 CSS 变量设置的，其值与伪元素的高度值相同。")]),t._v(" "),a("p",[t._v("声明将mix-blend-mode: difference我们的内容与背景融合在一起。该difference值很复杂，但您可能会将其可视化为背景的反转文本颜色。")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"mix-blend-mode",src:"https://codepen.io/webvueblog/embed/RwQpYdw?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/webvueblog/pen/RwQpYdw"}},[t._v("\n  mix-blend-mode")]),t._v(" by 我是哪吒（达达） ("),a("a",{attrs:{href:"https://codepen.io/webvueblog"}},[t._v("@webvueblog")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),a("h2",{attrs:{id:"拉开窗帘-演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉开窗帘-演示"}},[t._v("#")]),t._v(" “拉开窗帘”演示")]),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"pullCurtain",src:"https://codepen.io/webvueblog/embed/vYdxzwY?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),a("a",{attrs:{href:"https://codepen.io/webvueblog/pen/vYdxzwY"}},[t._v("\n  pullCurtain")]),t._v(" by 我是哪吒（达达） ("),a("a",{attrs:{href:"https://codepen.io/webvueblog"}},[t._v("@webvueblog")]),t._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])])}),[],!1,null,null,null);s.default=r.exports}}]);