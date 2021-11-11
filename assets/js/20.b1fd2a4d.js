(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{235:function(t,_,v){"use strict";v.r(_);var e=v(0),a=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"用户行为数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户行为数据"}},[t._v("#")]),t._v(" 用户行为数据")]),t._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),v("p",[t._v("根据业务场景的需求，进行用户操作行为的数据采集，进一步的进行数据结构化分析")]),t._v(" "),v("h2",{attrs:{id:"数据埋点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据埋点"}},[t._v("#")]),t._v(" 数据埋点")]),t._v(" "),v("h3",{attrs:{id:"埋点方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#埋点方式"}},[t._v("#")]),t._v(" 埋点方式")]),t._v(" "),v("p",[t._v("目前主流的埋点方式,有代码埋点(前端后端)、可视化埋点、全埋点三种。")]),t._v(" "),v("ul",[v("li",[t._v("代码埋点是通过调用埋点 SDK 函数,在需要埋点的业务逻辑功能位置调用接口,上报")]),t._v(" "),v("li",[t._v("埋点数据我们对页面中的某个按钮埋点后,当这个按钮被点击时,可以在这个按钮\n对应的 OnClick 函数里面调用 SDK 提供的数据发送接口,来发送数据。\n可视化埋点只需要研发人员集成采集 SDK,不需要写埋点代码,业务人员就可以通过\n访问分析平台的“圈选”功能,来“圈出需要对用户行为进行捕捉的控件,并对该事件进\n行命名。圈选完毕后,这些配置会同步到各个用户的终端上,由采集 SDK 按照圈选的配置\n自动进行用户行为数据的采集和发送。")]),t._v(" "),v("li",[t._v("全埋点是通过在产品中嵌入 SDK,前端自动采集页面上的全部用户行为事件,上报埋\n点数据,相当于做了一个统一的埋点。然后再通过界面配置哪些数据需要在系统里面进行分析。")])]),t._v(" "),v("p",[t._v("当前使用多种埋点进行处理")]),t._v(" "),v("h3",{attrs:{id:"上报时期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#上报时期"}},[t._v("#")]),t._v(" 上报时期")]),t._v(" "),v("blockquote",[v("p",[t._v("本项目采用的是第二种")])]),t._v(" "),v("ul",[v("li",[t._v("离开页面时，减少服务器压力，但不及时")]),t._v(" "),v("li",[t._v("每个事件、动作、错误等产生后，立即发送，响应及时，但对服务器有压力")])]),t._v(" "),v("h2",{attrs:{id:"目标数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目标数据"}},[t._v("#")]),t._v(" 目标数据")]),t._v(" "),v("p",[t._v("针对于电商数据分析，收集和分析的数据主要包括以下几点：")]),t._v(" "),v("ul",[v("li",[t._v("页面数据")]),t._v(" "),v("li",[t._v("事件数据")]),t._v(" "),v("li",[t._v("曝光数据")]),t._v(" "),v("li",[t._v("启动数据")]),t._v(" "),v("li",[t._v("错误数据")])]),t._v(" "),v("h2",{attrs:{id:"ods-层数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ods-层数据"}},[t._v("#")]),t._v(" ODS 层数据")]),t._v(" "),v("p",[t._v("数据采集内容")]),t._v(" "),v("h3",{attrs:{id:"页面数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面数据"}},[t._v("#")]),t._v(" 页面数据")]),t._v(" "),v("p",[t._v("页面的基本信息")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("字段名称")]),t._v(" "),v("th",[t._v("字段描述")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("page_id")]),t._v(" "),v("td",[t._v("页面 id")]),t._v(" "),v("td",[t._v("比如 login/register/activity/home/category/top_n/search/good_list")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("last_page_id")]),t._v(" "),v("td",[t._v("上页 id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("page_item_type")]),t._v(" "),v("td",[t._v("页面对象类型")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("page_item_id")]),t._v(" "),v("td",[t._v("页面对象 id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("source_type")]),t._v(" "),v("td",[t._v("页面来源类型")]),t._v(" "),v("td",[t._v('比如 promotion("商品推广")')])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("druing_time")]),t._v(" "),v("td",[t._v("停留时间(毫秒)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",[t._v("ts")]),t._v(" "),v("td",[t._v("跳入时间")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"事件数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件数据"}},[t._v("#")]),t._v(" 事件数据")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("字段名称")]),t._v(" "),v("th",[t._v("字段描述")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("action_id")]),t._v(" "),v("td",[t._v("动作 id")]),t._v(" "),v("td",[t._v("如：favor_add/favor_canel/cart_add/cart_remove")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("item_type")]),t._v(" "),v("td",[t._v("动作目标类型")]),t._v(" "),v("td",[t._v("如: sku_id(商品)/coupon_id(购物券)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("item_id")]),t._v(" "),v("td",[t._v("动作目标 id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("ts")]),t._v(" "),v("td",[t._v("动作时间")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"曝光数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#曝光数据"}},[t._v("#")]),t._v(" 曝光数据")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("字段名称")]),t._v(" "),v("th",[t._v("字段描述")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("display_type")]),t._v(" "),v("td",[t._v("曝光类型")]),t._v(" "),v("td",[t._v("如:promotion(商品推广)/query(查询/结果商品)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("item_type")]),t._v(" "),v("td",[t._v("曝光对象类型")]),t._v(" "),v("td",[t._v("如: sku_id(商品)/coupon_id(购物券)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("item_id")]),t._v(" "),v("td",[t._v("曝光对象 id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("order")]),t._v(" "),v("td",[t._v("曝光顺序")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"启动数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动数据"}},[t._v("#")]),t._v(" 启动数据")]),t._v(" "),v("p",[t._v("启动数据记录应用的启动信息")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("字段名称")]),t._v(" "),v("th",[t._v("字段描述")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("entry")]),t._v(" "),v("td",[t._v("启动入口")]),t._v(" "),v("td",[t._v("icon(图标)/notification(通知)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("loading_time")]),t._v(" "),v("td",[t._v("启动加载时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",[t._v("open_ad_id")]),t._v(" "),v("td",[t._v("开屏广告 id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",[t._v("open_ad_ms")]),t._v(" "),v("td",[t._v("广告播放时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",[t._v("open_ad_skip_ms")]),t._v(" "),v("td",[t._v("用户跳过广告时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",[t._v("ts")]),t._v(" "),v("td",[t._v("启动时间")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",[t._v("phone_type")]),t._v(" "),v("td",[t._v("手机型号")]),t._v(" "),v("td",[t._v("如:iPhone8")])])])]),t._v(" "),v("h3",{attrs:{id:"错误数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#错误数据"}},[t._v("#")]),t._v(" 错误数据")]),t._v(" "),v("p",[t._v("错误数据记录应用使用过程中的错误信息")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",[t._v("字段名称")]),t._v(" "),v("th",[t._v("字段描述")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",[t._v("error_code")]),t._v(" "),v("td",[t._v("错误码")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",[t._v("message")]),t._v(" "),v("td",[t._v("错误信息")]),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"其它"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),v("ul",[v("li",[t._v("略")])])])}],!1,null,null,null);_.default=a.exports}}]);