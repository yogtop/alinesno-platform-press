(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{593:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"web-编码规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-编码规范"}},[a._v("#")]),a._v(" WEB 编码规范")]),a._v(" "),e("h2",{attrs:{id:"html-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-规范"}},[a._v("#")]),a._v(" HTML 规范")]),a._v(" "),e("h3",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),e("p",[a._v("使用四个空格的缩进，这是保证代码在各种环境下显示一致的唯一方式。")]),a._v(" "),e("p",[a._v("嵌套的节点应该缩进（四个空格）。")]),a._v(" "),e("p",[a._v("在属性上，使用双引号，不要使用单引号。")]),a._v(" "),e("p",[a._v("不要在自动闭合标签结尾处使用斜线 "),e("code",[a._v("/")]),a._v(" - HTML5 规范 指出他们是可选的。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<img src="images/logo.png" alt="Company">\n')])])]),e("p",[a._v("不要忽略可选的关闭标签（例如，"),e("code",[a._v("</li>")]),a._v(" 和 "),e("code",[a._v("</body>")]),a._v("）。")]),a._v(" "),e("h3",{attrs:{id:"html5-doctype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-doctype"}},[a._v("#")]),a._v(" HTML5 doctype")]),a._v(" "),e("p",[a._v("在每个 HTML 页面开头使用这个简单地 doctype 来启用标准模式，使其每个浏览器中尽可能一致的展现。")]),a._v(" "),e("p",[a._v("虽然 doctype 不区分大小写，但是按照惯例，doctype 大写")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<!DOCTYPE html>\n")])])]),e("h3",{attrs:{id:"语言属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语言属性"}},[a._v("#")]),a._v(" 语言属性")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<html lang="en">\n\n</html>\n')])])]),e("h3",{attrs:{id:"字符编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符编码"}},[a._v("#")]),a._v(" 字符编码")]),a._v(" "),e("p",[a._v("通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样\n做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与\n文档编码一致（一般采用 UTF-8 编码）。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<meta charset="UTF-8">\n')])])]),e("h3",{attrs:{id:"ie-兼容模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ie-兼容模式"}},[a._v("#")]),a._v(" IE 兼容模式")]),a._v(" "),e("p",[a._v("IE 支持通过特定的 ")]),e("meta"),a._v(" 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈\n的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模\n式。"),e("p"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<meta http-equiv="X-UA-Compatible" content="IE=Edge">\n')])])]),e("h3",{attrs:{id:"响应式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[a._v("#")]),a._v(" 响应式")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<meta name="viewport" content="width=device-width, initial-scale=1">\n')])])]),e("h3",{attrs:{id:"引入-css-和-javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入-css-和-javascript"}},[a._v("#")]),a._v(" 引入 CSS 和 JavaScript")]),a._v(" "),e("p",[a._v("根据 HTML5 规范, 通常在引入 CSS 和 JavaScript 时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\x3c!-- External CSS --\x3e\n<link rel="stylesheet" href="code-guide.css">\n\n\x3c!-- In-document CSS --\x3e\n<style>\n    /* ... */\n</style>\n\n\x3c!-- JavaScript --\x3e\n<script src="code-guide.js"><\/script>\n')])])]),e("h3",{attrs:{id:"实用高于完美"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实用高于完美"}},[a._v("#")]),a._v(" 实用高于完美")]),a._v(" "),e("p",[a._v("尽量遵循 HTML 标准和语义，但是不应该以浪费实用性作为代价。任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。")]),a._v(" "),e("h3",{attrs:{id:"减少标签数量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减少标签数量"}},[a._v("#")]),a._v(" 减少标签数量")]),a._v(" "),e("p",[a._v("在编写 HTML 代码时，需要尽量避免多余的父节点。很多时候，需要通过迭代和重构来使 HTML 变得更少。 参考下面的示例:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\x3c!-- Not so great --\x3e\n<span class="avatar">\n    <img src="...">\n</span>\n\n\x3c!-- Better --\x3e\n<img class="avatar" src="...">\n')])])]),e("h3",{attrs:{id:"属性顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性顺序"}},[a._v("#")]),a._v(" 属性顺序")]),a._v(" "),e("blockquote",[e("p",[a._v("平台中的 id 属性用于")])]),a._v(" "),e("p",[a._v("HTML 属性应该按照特定的顺序出现以保证易读性。")]),a._v(" "),e("ol",[e("li",[a._v("class")]),a._v(" "),e("li",[a._v("id【平台禁止在样式中使用 id 属性】")]),a._v(" "),e("li",[a._v("name")]),a._v(" "),e("li",[a._v("data-*")]),a._v(" "),e("li",[a._v("src, for, type, href, value , max-length, max, min, pattern")]),a._v(" "),e("li",[a._v("placeholder, title, alt")]),a._v(" "),e("li",[a._v("aria-*, role")]),a._v(" "),e("li",[a._v("required, readonly, disabled")])]),a._v(" "),e("p",[a._v("class 是为高可复用组件设计的，理论上他们应处在第一位。id 更加具体而且应该尽量少使用（例如, 页内书签），所以他们处在第二位。")]),a._v(" "),e("h3",{attrs:{id:"boolean-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boolean-属性"}},[a._v("#")]),a._v(" Boolean 属性")]),a._v(" "),e("p",[a._v("Boolean 属性指不需要声明取值的属性。XHTML 需要每个属性声明取值，但是 HTML5 并不需要。")]),a._v(" "),e("p",[a._v("一个元素中 Boolean 属性的存在表示取值 true，不存在则表示取值 false。")]),a._v(" "),e("p",[a._v("简而言之，不要为 Boolean 属性添加取值。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<input type="text" disabled>\n')])])]),e("h3",{attrs:{id:"javascript-生成标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-生成标签"}},[a._v("#")]),a._v(" JavaScript 生成标签")]),a._v(" "),e("p",[a._v("在 JavaScript 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。")]),a._v(" "),e("h2",{attrs:{id:"css-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-规范"}},[a._v("#")]),a._v(" CSS 规范")]),a._v(" "),e("h3",{attrs:{id:"语法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),e("p",[a._v("使用四个空格的缩进，这是保证代码在各种环境下显示一致的唯一方式。")]),a._v(" "),e("p",[a._v("使用组合选择器时，保持每个独立的选择器占用一行。")]),a._v(" "),e("p",[a._v("为了代码的易读性，在每个声明的左括号前增加一个空格。")]),a._v(" "),e("p",[a._v("声明块的右括号应该另起一行。")]),a._v(" "),e("p",[a._v("每条声明 : 后应该插入一个空格。")]),a._v(" "),e("p",[a._v("每条声明应该只占用一行来保证错误报告更加准确。")]),a._v(" "),e("p",[a._v("所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。")]),a._v(" "),e("p",[a._v("逗号分隔的取值，都应该在逗号之后增加一个空格。")]),a._v(" "),e("p",[a._v("不要在颜色值 rgb() rgba() hsl() hsla()和 rect() 中增加空格，并且不要带有取值前面不必要的 0 (比如，使用 .5 替代 0.5)。")]),a._v(" "),e("p",[a._v("所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。")]),a._v(" "),e("p",[a._v("尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff。")]),a._v(" "),e("p",[a._v('为选择器中的属性取值添加引号，例如 input[type="text"]。 他们只在某些情况下可有可无，所以都使用引号可以增加一致性。')]),a._v(" "),e("p",[a._v("不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('/* Bad CSS */\n.selector, .selector-secondary, .selector[type=text] {\n    margin: 0px 0px 15px;\n    background-color: rgba(0, 0, 0, 0.5);\n    box-shadow: 0 1px 2px #CCC, inset 0 1px 0 #FFFFFF\n}\n\n/* Good CSS */\n.selector,\n.selector-secondary,\n.selector[type="text"] {\n    margin-bottom: 15px;\n    background-color: rgba(0,0,0,.5);\n    box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;\n}\n')])])]),e("h3",{attrs:{id:"声明顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#声明顺序"}},[a._v("#")]),a._v(" 声明顺序")]),a._v(" "),e("p",[a._v("相关的属性声明应该以下面的顺序分组处理：")]),a._v(" "),e("ol",[e("li",[a._v("Positioning")]),a._v(" "),e("li",[a._v("Box model 盒模型")]),a._v(" "),e("li",[a._v("Typographic 排版")]),a._v(" "),e("li",[a._v("Visual 外观")])]),a._v(" "),e("p",[a._v("Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。")]),a._v(" "),e("p",[a._v("其他属性只在组件内部起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('.declaration-order {\n    /* Positioning */\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 100;\n\n    /* Box-model */\n    display: block;\n    float: right;\n    width: 100px;\n    height: 100px;\n\n    /* Typography */\n    font: normal 13px "Helvetica Neue", sans-serif;\n    line-height: 1.5;\n    color: #333;\n    text-align: center;\n\n    /* Visual */\n    background-color: #f5f5f5;\n    border: 1px solid #e5e5e5;\n    border-radius: 3px;\n\n    /* Misc */\n    opacity: 1;\n}\n')])])]),e("h3",{attrs:{id:"don-t-use-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#don-t-use-import"}},[a._v("#")]),a._v(" Don't use @import")]),a._v(" "),e("p",[a._v("与"),e("code",[a._v("<link>")]),a._v("相比，"),e("code",[a._v("@import")]),a._v("较慢，增加额外的页面请求，并可能导致其他不可预见的问题。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('\x3c!-- Use link elements --\x3e\n<link rel="stylesheet" href="core.css">\n\n\x3c!-- Avoid @imports --\x3e\n<style>\n    @import url("more.css");\n</style>\n')])])]),e("h3",{attrs:{id:"媒体查询位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询位置"}},[a._v("#")]),a._v(" 媒体查询位置")]),a._v(" "),e("p",[a._v("尽量将媒体查询的位置靠近他们相关的规则。不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部。这样做只会让大家以后更容易忘记他们。这里是一个典型的案例。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".element { ... }\n.element-avatar { ... }\n.element-selected { ... }\n\n@media (min-width: 480px) {\n    .element { ...}\n    .element-avatar { ... }\n    .element-selected { ... }\n}\n")])])]),e("h3",{attrs:{id:"前缀属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前缀属性"}},[a._v("#")]),a._v(" 前缀属性")]),a._v(" "),e("p",[a._v("当使用厂商前缀属性时，通过缩进使取值垂直对齐以便多行编辑。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/* Prefixed properties */\n.selector {\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);\n            box-shadow: 0 1px 2px rgba(0,0,0,.15);\n}\n")])])]),e("h3",{attrs:{id:"单条声明的声明块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单条声明的声明块"}},[a._v("#")]),a._v(" 单条声明的声明块")]),a._v(" "),e("p",[a._v("在一个声明块中只包含一条声明的情况下，为了易读性和快速编辑可以考虑移除其中的换行。所有包含多条声明的声明块应该分为多行。")]),a._v(" "),e("p",[a._v("这样做的关键因素是错误检测 - 例如，一个 CSS 验证程序显示你在 183 行有一个语法错误,如果是一个单条声明的行，那就是他了。在多个声明的情况下，你必须为哪里出错了费下脑子。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".span1 { width: 60px; }\n.span2 { width: 140px; }\n.span3 { width: 220px; }\n")])])]),e("h3",{attrs:{id:"属性简写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性简写"}},[a._v("#")]),a._v(" 属性简写")]),a._v(" "),e("p",[a._v("尽量不使用属性简写的方式，属性简写需要你必须显式设置所有取值。常见的属性简写滥用包括:")]),a._v(" "),e("ul",[e("li",[a._v("padding")]),a._v(" "),e("li",[a._v("margin")]),a._v(" "),e("li",[a._v("font")]),a._v(" "),e("li",[a._v("background\n-border\n-border-radius")])]),a._v(" "),e("p",[a._v("大多数情况下，我们并不需要设置属性简写中包含的所有值。例如，HTML 头部只设置上下的 margin，所以如果需要，只设置这两个值。过度使用属性简写往往会导致更混乱的代码，其中包含不必要的重写和意想不到的副作用。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('/* Bad example */\n.element {\n    margin: 0 0 10px;\n    background: red;\n    background: url("image.jpg");\n    border-radius: 3px 3px 0 0;\n}\n\n/* Good example */\n.element {\n    margin-bottom: 10px;\n    background-color: red;\n    background-image: url("image.jpg");\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n')])])]),e("h3",{attrs:{id:"less-和-sass-中的嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-和-sass-中的嵌套"}},[a._v("#")]),a._v(" Less 和 Sass 中的嵌套")]),a._v(" "),e("p",[a._v("避免不必要的嵌套。可以进行嵌套，不意味着你应该这样做。只有在需要给父元素增加样式并且同时存在多个子元素时才需要考虑嵌套。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// Without nesting\n.table > thead > tr > th { … }\n.table > thead > tr > td { … }\n\n// With nesting\n.table > thead > tr {\n    > th { … }\n    > td { … }\n}\n")])])]),e("h3",{attrs:{id:"代码注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码注释"}},[a._v("#")]),a._v(" 代码注释")]),a._v(" "),e("p",[a._v("代码是由人来编写和维护的。保证你的代码是描述性的，包含好的注释，并且容易被他人理解。好的代码注释传达上下文和目标。不要简单地重申组件或者 class 名称。")]),a._v(" "),e("h3",{attrs:{id:"class-命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-命名"}},[a._v("#")]),a._v(" class 命名")]),a._v(" "),e("p",[a._v("保持 class 命名为全小写，可以使用短划线（不要使用下划线和 camelCase 命名）。短划线应该作为相关类的自然间断。(例如，.btn 和 .btn-danger)。")]),a._v(" "),e("p",[a._v("避免过度使用简写。.btn 可以很好地描述 button，但是 .s 不能代表任何元素。")]),a._v(" "),e("p",[a._v("class 的命名应该尽量短，也要尽量明确。")]),a._v(" "),e("p",[a._v("使用有意义的名称；使用结构化或者作用目标相关，而不是抽象的名称。")]),a._v(" "),e("p",[a._v("命名时使用最近的父节点或者父 class 作为前缀。")]),a._v(" "),e("p",[a._v("使用 .js-* 来表示行为(相对于样式)，但是不要在 CSS 中包含这些 class。")]),a._v(" "),e("h3",{attrs:{id:"选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[a._v("#")]),a._v(" 选择器")]),a._v(" "),e("p",[a._v("使用 class 而不是通用元素标签来优化渲染性能。")]),a._v(" "),e("p",[a._v('避免在经常出现的组件中使用一些属性选择器 (例如，[class^="..."])。浏览器性能会受到这些情况的影响。')]),a._v(" "),e("p",[a._v("减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内。")]),a._v(" "),e("p",[a._v("只在必要的情况下使用后代选择器 (例如，没有使用带前缀 classes 的情况).")]),a._v(" "),e("h3",{attrs:{id:"代码组织"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码组织"}},[a._v("#")]),a._v(" 代码组织")]),a._v(" "),e("p",[a._v("以组件为单位组织代码。")]),a._v(" "),e("p",[a._v("制定一个一致的注释层级结构。")]),a._v(" "),e("p",[a._v("使用一致的空白来分割代码块，这样做在查看大的文档时更有优势。")]),a._v(" "),e("p",[a._v("当使用多个 CSS 文件时，通过组件而不是页面来区分他们。页面会被重新排列，而组件移动就可以了。")]),a._v(" "),e("h3",{attrs:{id:"编辑器配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑器配置"}},[a._v("#")]),a._v(" 编辑器配置")]),a._v(" "),e("p",[a._v("根据以下的设置来配置你的编辑器，将这些设置应用到项目的 .editorconfig 文件，来避免常见的代码不一致和丑陋的 diffs。")]),a._v(" "),e("ul",[e("li",[a._v("使用四个空格的缩进。")]),a._v(" "),e("li",[a._v("在保存时删除尾部的空白字符。")]),a._v(" "),e("li",[a._v("设置文件编码为 UTF-8。")]),a._v(" "),e("li",[a._v("在文件结尾添加一个空白行。")])]),a._v(" "),e("h2",{attrs:{id:"js-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-规范"}},[a._v("#")]),a._v(" JS 规范")]),a._v(" "),e("h3",{attrs:{id:"语法-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法-3"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),e("p",[a._v("使用四个空格的缩进，这是保证代码在各种环境下显示一致的唯一方式。")]),a._v(" "),e("p",[a._v("声明之后一律以分号结束， 不可以省略")]),a._v(" "),e("p",[a._v("完全避免 == != 的使用， 用严格比较条件 === !==")]),a._v(" "),e("p",[a._v("eval 非特殊情况， 禁用！！！")]),a._v(" "),e("p",[a._v("with 非特殊情况， 禁用！！！")]),a._v(" "),e("p",[a._v('单行长度，理论上不要超过 80 列，不过如果编辑器开启"自动换行"的话可以不考虑单行长度')]),a._v(" "),e("p",[a._v("接上一条，如果需要换行，存在操作符的情况，一定在操作符后换行，然后换的行缩进 4 个空格")]),a._v(" "),e("p",[a._v("这里要注意，如果是多次换行的话就没有必要继续缩进了，比如说下面这种就是最佳格式。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('if (typeof qqfind === "undefined" ||\n    typeof qqfind.cdnrejected === "undefined" ||\n    qqfind.cdnrejected !== true) {\n    url = "http://pub.idqqimg.com/qqfind/js/location4.js";\n} else {\n    url = "http://find.qq.com/js/location4.js";\n}\n')])])]),e("h3",{attrs:{id:"空行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空行"}},[a._v("#")]),a._v(" 空行")]),a._v(" "),e("p",[a._v("方法之间加")]),a._v(" "),e("p",[a._v("单行或多行注释前加")]),a._v(" "),e("p",[a._v("逻辑块之间加空行增加可读性")]),a._v(" "),e("h3",{attrs:{id:"变量命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量命名"}},[a._v("#")]),a._v(" 变量命名")]),a._v(" "),e("p",[a._v("标准变量采用驼峰标识")]),a._v(" "),e("p",[a._v("使用的 ID 的地方一定全大写")]),a._v(" "),e("p",[a._v("使用的 URL 的地方一定全大写, 比如说 reportURL")]),a._v(" "),e("p",[a._v("涉及 Android 的，一律大写第一个字母")]),a._v(" "),e("p",[a._v("涉及 iOS 的，一律小写第一个，大写后两个字母")]),a._v(" "),e("p",[a._v("常量采用大写字母，下划线连接的方式")]),a._v(" "),e("p",[a._v("构造函数，大写第一个字母")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var thisIsMyName;\n\nvar goodID;\n\nvar AndroidVersion;\n\nvar iOSVersion;\n\nvar MAX_COUNT = 10;\n\nfunction Person(name) {\n    this.name = name\n}\n")])])]),e("h3",{attrs:{id:"字符常量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符常量"}},[a._v("#")]),a._v(" 字符常量")]),a._v(" "),e("p",[a._v("一般情况下统一使用单引号")]),a._v(" "),e("h3",{attrs:{id:"null-的使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null-的使用场景"}},[a._v("#")]),a._v(" null 的使用场景")]),a._v(" "),e("p",[a._v("初始化可能以后分配对象值的变量")]),a._v(" "),e("p",[a._v("与一个可能或可能没有对象值的初始化变量进行比较")]),a._v(" "),e("p",[a._v("传入一个预期对象的函数")]),a._v(" "),e("p",[a._v("从预期对象的函数返回")]),a._v(" "),e("h3",{attrs:{id:"不适合-null-的使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不适合-null-的使用场景"}},[a._v("#")]),a._v(" 不适合 null 的使用场景")]),a._v(" "),e("p",[a._v("不要使用 null 来测试是否提供参数")]),a._v(" "),e("p",[a._v("不要测试值为 null 的未初始化变量")]),a._v(" "),e("h3",{attrs:{id:"undefined-使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#undefined-使用场景"}},[a._v("#")]),a._v(" undefined 使用场景")]),a._v(" "),e("p",[a._v("永远不要直接使用 undefined 进行变量判断")]),a._v(" "),e("p",[a._v('使用字符串 "undefined" 对变量进行判断')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// Bad\nvar person;\nconsole.log(person === undefined);    //true\n\n// Good\nconsole.log(typeof person);    // "undefined"\n')])])]),e("h3",{attrs:{id:"对象字面量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量"}},[a._v("#")]),a._v(" 对象字面量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// Bad\nvar team = new Team();\nteam.title = "AlloyTeam";\nteam.count = 25;\n\n// Good\nvar team = {\n    title: "AlloyTeam",\n    count: 25\n};\n')])])]),e("h3",{attrs:{id:"数组声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组声明"}},[a._v("#")]),a._v(" 数组声明")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// Bad\nvar colors = new Array("red", "green", "blue");\nvar numbers = new Array(1, 2, 3, 4);\n\n\n// Good\nvar colors = [ "red", "green", "blue" ];\nvar numbers = [ 1, 2, 3, 4 ];\n')])])]),e("h3",{attrs:{id:"单行注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单行注释"}},[a._v("#")]),a._v(" 单行注释")]),a._v(" "),e("p",[a._v("双斜线后，必须跟注释内容保留一个空格")]),a._v(" "),e("p",[a._v("与下一行代码缩进保持一致")]),a._v(" "),e("p",[a._v("可位于一个代码行的末尾，双斜线距离分号四个空格")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// Good\nif (condition) {\n    // if you made it here, then all security checks passed\n    allowed();\n}\n\nvar zhangsan = "zhangsan";    // 双斜线距离分号四个空格，双斜线后始终保留一个空格\n')])])]),e("h3",{attrs:{id:"多行注释格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多行注释格式"}},[a._v("#")]),a._v(" 多行注释格式")]),a._v(" "),e("p",[a._v("最少三行")]),a._v(" "),e("p",[a._v("前边留空一行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/**\n * 注释内容与星标前保留一个空格\n */\n")])])]),e("h3",{attrs:{id:"何时使用多行注释格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用多行注释格式"}},[a._v("#")]),a._v(" 何时使用多行注释格式")]),a._v(" "),e("p",[a._v("难于理解的代码段")]),a._v(" "),e("p",[a._v("可能存在错误的代码段")]),a._v(" "),e("p",[a._v("浏览器特殊的 HACK 代码")]),a._v(" "),e("p",[a._v("业务逻辑强相关的代码")]),a._v(" "),e("p",[a._v("想吐槽的产品逻辑, 合作同事")]),a._v(" "),e("h3",{attrs:{id:"文档注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档注释"}},[a._v("#")]),a._v(" 文档注释")]),a._v(" "),e("p",[a._v("各类标签 @param @method 等 参考 http://usejsdoc.org/")]),a._v(" "),e("p",[a._v("用于：方法、构造函数、对象")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/**\n * here boy, look here , here is girl\n * @method lookGril\n * @param {Object} balabalabala\n * @return {Object} balabalabala\n */\n")])])]),e("h3",{attrs:{id:"括号对齐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#括号对齐"}},[a._v("#")]),a._v(" 括号对齐")]),a._v(" "),e("p",[a._v("标准示例 括号前后有空格，花括号起始不另换行，结尾新起一行")]),a._v(" "),e("p",[a._v("花括号必须要，即使内容只有一行")]),a._v(" "),e("p",[a._v("涉及 if for while do...while try...catch...finally 的地方都必须使用花括号，即使内容只有一行")]),a._v(" "),e("h3",{attrs:{id:"if-else-前后留有空格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if-else-前后留有空格"}},[a._v("#")]),a._v(" if else 前后留有空格")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (condition) {\n    doSomething();\n} else {\n    doSomethingElse();\n}\n")])])]),e("h3",{attrs:{id:"switch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[a._v("#")]),a._v(" switch")]),a._v(" "),e("p",[a._v("switch 和括号之间有空格，case 需要缩进，break 之后跟下一个 case 中间留一个空白行")]),a._v(" "),e("p",[a._v("花括号必须要， 即使内容只有一行。")]),a._v(" "),e("p",[a._v("switch 的 falling through 一定要有注释特别说明，no default 的情况也需要注释特别说明况")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('switch (condition) {\n    case "first":\n        // code\n        break;\n\n    case "second":\n        // code\n        break;\n\n    default:\n    // code\n}\n')])])]),e("h3",{attrs:{id:"for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[a._v("#")]),a._v(" for")]),a._v(" "),e("p",[a._v("普通 for 循环, 分号后留有一个空格， 判断条件等内的操作符两边不留空格")]),a._v(" "),e("p",[a._v("前置条件如果有多个，逗号后留一个空格")]),a._v(" "),e("p",[a._v("for-in 一定要有 hasOwnProperty 的判断， 否则 JSLint 或者 JSHint 都会有一个 warn")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('for (i=0, len=values.length; i<len; i++) {\n    process(values[i]);\n}\n\n\nvar prop;\n\nfor (prop in object) {\n    // 注意这里一定要有 hasOwnProperty 的判断， 否则 JSLint 或者 JSHint 都会有一个 warn ！\n    if (object.hasOwnProperty(prop)) {\n        console.log("Property name is " + prop);\n        console.log("Property value is " + object[prop]);\n    }\n}\n')])])]),e("h3",{attrs:{id:"变量声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[a._v("#")]),a._v(" 变量声明")]),a._v(" "),e("p",[a._v("所有函数内变量声明放在函数内头部，只使用一个 var(多了 JSLint 报错)， 一个变量一行， 在行末跟注释， 注释啊，注释啊，亲")]),a._v(" "),e("h3",{attrs:{id:"函数声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数声明"}},[a._v("#")]),a._v(" 函数声明")]),a._v(" "),e("p",[a._v("一定先声明再使用， 不要利用 JavaScript engine 的变量提升特性, 违反了这个规则 JSLint 和 JSHint 都会报 warn")]),a._v(" "),e("p",[a._v("function declaration 和 function expression 的不同，function expression 的（）前后必须有空格，而 function declaration 在有函数名的时候不需要空格，没有函数名的时候需要空格。")]),a._v(" "),e("p",[a._v("函数调用括号前后不需要空格")]),a._v(" "),e("p",[a._v("立即执行函数的写法, 最外层必须包一层括号")]),a._v(" "),e("p",[a._v('"use strict" 决不允许全局使用， 必须放在函数的第一行， 可以用自执行函数包含大的代码段, 如果 "use strict" 在函数外使用， JSLint 和 JSHint 均会报错')]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('function doSomething(item) {\n    // do something\n}\n\nvar doSomething = function (item) {\n    // do something\n}\n\n\n// Good\ndoSomething(item);\n\n// Bad: Looks like a block statement\ndoSomething (item);\n\n// Good\n(function() {\n    "use strict";\n\n    function doSomething() {\n        // code\n    }\n})();\n')])])])])}],!1,null,null,null);t.default=r.exports}}]);