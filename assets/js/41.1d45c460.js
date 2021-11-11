(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{257:function(v,_,t){"use strict";t.r(_);var d=t(0),a=Object(d.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"数据分析平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据分析平台"}},[v._v("#")]),v._v(" 数据分析平台")]),v._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("p",[v._v("数据分析平台规划和划分，用于提供数据中台的能力，用于数据分析并提供对应的第三方接口。")]),v._v(" "),t("h2",{attrs:{id:"业务详细说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务详细说明"}},[v._v("#")]),v._v(" 业务详细说明")]),v._v(" "),t("h3",{attrs:{id:"数据采集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据采集"}},[v._v("#")]),v._v(" 数据采集")]),v._v(" "),t("ul",[t("li",[v._v("用户对物品的操作(查看,浏览，购买)ugcLOG")]),v._v(" "),t("li",[v._v("通过 flume 采集 ugcLOG 日志到 Hive")])]),v._v(" "),t("h3",{attrs:{id:"离线处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线处理"}},[v._v("#")]),v._v(" 离线处理")]),v._v(" "),t("ul",[t("li",[v._v("通过定时(oozie、crontab)任务(mr)，处理 Hive 上面的 ugcLOG")]),v._v(" "),t("li",[v._v("清理后的数据(用户 id,itemID,评分)，给 mahout")]),v._v(" "),t("li",[v._v("mahout 清理之后就是每个用户对应的 item 物品列表")]),v._v(" "),t("li",[v._v("清洗后的结果数据，然后通过 sqoop 导入到数据库 mysql 中或者放入到 hive 中(web 展现或者交给数据分析人员)")]),v._v(" "),t("li",[v._v("当天的数据：当日凌晨截至到统计时间点的数据")]),v._v(" "),t("li",[v._v("之前的历史数据：截至到今天凌晨的历史数据")])]),v._v(" "),t("h3",{attrs:{id:"实时处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时处理"}},[v._v("#")]),v._v(" 实时处理")]),v._v(" "),t("ul",[t("li",[v._v("收集: 收集用户的特征向量(用户和标签的矩阵),(userID tag1 tag2)")]),v._v(" "),t("li",[v._v("收集: 收集物品的特征向量(物品和标签的矩阵),(itemID tag1 tag2 tag5)")]),v._v(" "),t("li",[v._v("计算: 然后通过 1,2 计算出用户和物品的特征值(矩阵乘积)")]),v._v(" "),t("li",[v._v("过滤: 通过 userID item 列表过滤掉已经产生行为的物品/通过运营决策过滤/用户自定义过滤")]),v._v(" "),t("li",[v._v("排序: topN(包括自定义权重，比如想在周末推销某个产品等)")]),v._v(" "),t("li",[v._v("通过 web 收集特征行为数据(用户标签，评论数据)")]),v._v(" "),t("li",[v._v("把收集的数据实时传入 kafka")]),v._v(" "),t("li",[v._v("特征行为数据和用户属性特征数据(数据库)共同组装成用户特征向量")]),v._v(" "),t("li",[v._v("用户特征向量和物品的特征矩阵(用户和系统打的标签，权重等)计算出矩阵乘积")]),v._v(" "),t("li",[v._v("过滤，计算 topN")])]),v._v(" "),t("h3",{attrs:{id:"工程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程管理"}},[v._v("#")]),v._v(" 工程管理")]),v._v(" "),t("ul",[t("li",[v._v("数据进行离线和实时处理之后对外提供第三方 api 接口")]),v._v(" "),t("li",[v._v("提供数据后台管理和监控")]),v._v(" "),t("li",[v._v("提供标签管理体系")]),v._v(" "),t("li",[v._v("提供其它相应的大数据监控和接口管理等功能")])]),v._v(" "),t("h2",{attrs:{id:"工程规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程规划"}},[v._v("#")]),v._v(" 工程规划")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("序号")]),v._v(" "),t("th",[v._v("角色")]),v._v(" "),t("th",[v._v("工程")]),v._v(" "),t("th",[v._v("端口")]),v._v(" "),t("th",[v._v("描述")]),v._v(" "),t("th",[v._v("负责人")]),v._v(" "),t("th",[v._v("进度")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("数据采集")]),v._v(" "),t("td",[v._v("alinesno-data-recommender-flume")]),v._v(" "),t("td",[v._v("28000")]),v._v(" "),t("td",[v._v("数据采集(行为/业务)到 hive 表")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-etl")]),v._v(" "),t("td",[v._v("28001")]),v._v(" "),t("td",[v._v("数据清洗转换到数据仓库分层")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("离线处理")]),v._v(" "),t("td",[v._v("alinesno-data-recommender-hive")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("数据仓库层")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-spark")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("离线计算引擎")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-mahout")]),v._v(" "),t("td",[v._v("28002")]),v._v(" "),t("td",[v._v("基于用户和物品的协同过滤算法")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("实时处理")]),v._v(" "),t("td",[v._v("alinesno-data-recommender-kafka")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("Kafka 业务操作层")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("6")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-flink")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("实时计算流引擎")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("7")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-mahout")]),v._v(" "),t("td",[v._v("28003")]),v._v(" "),t("td",[v._v("基于用户和物品标签算法")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("8")]),v._v(" "),t("td",[v._v("工程管理")]),v._v(" "),t("td",[v._v("alinesno-data-recommender-tools")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("公共工具对象")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("9")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-starter")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("核心业务逻辑")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("10")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-api")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("业务 Dubbo 服务")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("11")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-gateway")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("业务对外 http 接口")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("12")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-web")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("后台管理界面")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("13")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("alinesno-data-recommender-boot")]),v._v(" "),t("td",[v._v("28004")]),v._v(" "),t("td",[v._v("系统启动管理")]),v._v(" "),t("td",[v._v("梁家铭")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[v._v("#")]),v._v(" 其它")]),v._v(" "),t("ul",[t("li",[v._v("略")])])])}],!1,null,null,null);_.default=a.exports}}]);