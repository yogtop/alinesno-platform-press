(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{619:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"服务实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务实践"}},[a._v("#")]),a._v(" 服务实践")]),a._v(" "),s("p",{staticClass:"show-images"},[s("img",{attrs:{src:"/images/undraw_online_page_cq94.svg",width:"40%"}})]),a._v(" "),s("h5",{attrs:{id:"分包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分包"}},[a._v("#")]),a._v(" 分包")]),a._v(" "),s("p",[a._v("建议将服务接口，服务模型，服务异常等均放在 API 包中，因为服务模型及异常也是 API 的一部分，同时，这样做也符合分包原则：重用发布等价原则(REP)，共同重用原则(CRP)。\n如果需要，也可以考虑在 API 包中放置一份 spring 的引用配置，这样使用方，只需在 spring 加载过程中引用此配置即可，配置建议放在模块的包目录下，以免冲突.")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("// 如：\ncom/alibaba/china/xxx/dubbo-reference.xml。\n")])])]),s("h5",{attrs:{id:"粒度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#粒度"}},[a._v("#")]),a._v(" 粒度")]),a._v(" "),s("p",[a._v("服务接口尽可能大粒度，每个服务方法应代表一个功能，而不是某功能的一个步骤，否则将面临分布式事务问题，Dubbo 暂未提供分布式事务支持。\n服务接口建议以业务场景为单位划分，并对相近业务做抽象，防止接口数量爆炸。\n不建议使用过于抽象的通用接口，如：Map query(Map)，这样的接口没有明确语义，会给后期维护带来不便。")]),a._v(" "),s("h5",{attrs:{id:"版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[a._v("#")]),a._v(" 版本")]),a._v(" "),s("p",[a._v("每个接口都应定义版本号，为后续不兼容升级提供可能，如：")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("dubbo:")]),a._v("service")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("interface")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("com.xxx.XxxService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("。\n")])])]),s("p",[a._v("建议使用两位版本号，因为第三位版本号通常表示兼容升级，只有不兼容时才需要变更服务版本。\n当不兼容时，先升级一半提供者为新版本，再将消费者全部升为新版本，然后将剩下的一半提供者升为新版本。")]),a._v(" "),s("h5",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[a._v("#")]),a._v(" 兼容性")]),a._v(" "),s("p",[a._v("服务接口增加方法，或服务模型增加字段，可向后兼容，删除方法或删除字段，将不兼容，枚举类型新增字段也不兼容，需通过变更版本号升级。\n各协议的兼容性不同，参见：  服务协议")]),a._v(" "),s("h5",{attrs:{id:"枚举值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枚举值"}},[a._v("#")]),a._v(" 枚举值")]),a._v(" "),s("p",[a._v("如果是完备集，可以用  Enum，比如：ENABLE, DISABLE。\n如果是业务种类，以后明显会有类型增加，不建议用  Enum，可以用  String  代替。\n如果是在返回值中用了  Enum，并新增了  Enum  值，建议先升级服务消费方，这样服务提供方不会返回新值。\n如果是在传入参数中用了  Enum，并新增了  Enum  值，建议先升级服务提供方，这样服务消费方不会传入新值。")]),a._v(" "),s("h5",{attrs:{id:"序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#序列化"}},[a._v("#")]),a._v(" 序列化")]),a._v(" "),s("p",[a._v("服务参数及返回值建议使用 POJO 对象，即通过  setter, getter  方法表示属性的对象。\n服务参数及返回值不建议使用接口，因为数据模型抽象的意义不大，并且序列化需要接口实现类的元信息，并不能起到隐藏实现的意图。\n服务参数及返回值都必需是 byValue 的，而不能是 byReference 的，消费方和提供方的参数或返回值引用并不是同一个，只是值相同，Dubbo 不支持引用远程对象。")]),a._v(" "),s("h5",{attrs:{id:"异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[a._v("#")]),a._v(" 异常")]),a._v(" "),s("p",[a._v("建议使用异常汇报错误，而不是返回错误码，异常信息能携带更多信息，以及语义更友好。\n如果担心性能问题，在必要时，可以通过 override 掉异常类的  fillInStackTrace()  方法为空方法，使其不拷贝栈信息。\n查询方法不建议抛出 checked 异常，否则调用方在查询时将过多的  try...catch，并且不能进行有效处理。\n服务提供方不应将 DAO 或 SQL 等异常抛给消费方，应在服务实现中对消费方不关心的异常进行包装，否则可能出现消费方无法反序列化相应异常。")]),a._v(" "),s("h5",{attrs:{id:"调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用"}},[a._v("#")]),a._v(" 调用")]),a._v(" "),s("p",[a._v("不要只是因为是 Dubbo 调用，而把调用  try...catch  起来。try...catch  应该加上合适的回滚边界上。\n对于输入参数的校验逻辑在 Provider 端要有。如有性能上的考虑，服务实现者可以考虑在 API 包上加上服务 Stub 类来完成检验")])])}],!1,null,null,null);t.default=r.exports}}]);