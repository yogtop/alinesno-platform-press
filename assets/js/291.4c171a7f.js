(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{505:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"dubbo-admin-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-admin-安装"}},[a._v("#")]),a._v(" Dubbo-admin 安装")]),a._v(" "),t("p",{staticClass:"show-images"},[t("img",{attrs:{src:"/images/undraw_experience_design_eq3j.svg",width:"40%"}})]),a._v(" "),t("h3",{attrs:{id:"前置安装-tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前置安装-tomcat"}},[a._v("#")]),a._v(" 前置安装 Tomcat")]),a._v(" "),t("h4",{attrs:{id:"上传安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传安装"}},[a._v("#")]),a._v(" 上传安装")]),a._v(" "),t("p",[a._v("上传 Tomcat 至 Linux 服务器"),t("code",[a._v("/home/alinesno/soft")]),a._v("目录")]),a._v(" "),t("blockquote",[t("p",[a._v("此处用户可以使用 xftp 或者 xshell 等工具，书要简言")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("示例: "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -r apache-tomcat-9.0.0.M9.tar.gz alinesno@192.168.1.110:~/soft/\n")])])]),t("p",[a._v("安装 tomcat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 创建目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /opt/alinesno/tomcat\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf ~/soft/apache-tomcat-9.0.0.M9.tar.gz -C ~/opt/alinesno/tomcat\n")])])]),t("p",[a._v("修改 tomcat 端口号")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" apache-tomcat-9.0.0.M9/conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" server.xml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## tomcat端口号默认为8080,全局搜索8080修改为8182")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Connector "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8182"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("protocol")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HTTP/1.1"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("connectionTimeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"20000"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("redirectPort")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8443"')]),a._v(" /"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("启动 tomcat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./apache-tomcat-9.0.0.M9/bin/startup.sh\n")])])]),t("p",[a._v("关闭 tomcat")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./apache-tomcat-9.0.0.M9/bin/shutdown.sh\n")])])]),t("p",[a._v("设置 tomcat 开机启动")]),a._v(" "),t("p",[a._v("1、找到/etc/rc.d 文件夹下的 rc.local 文件，在文件的最后添加以下 java 环境变量和启动 tomcat 命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("　　"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/opt/jdk1.8.0_112\n　　"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JRE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre\n　　"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" /opt/alinesno/tomcat/apache-tomcat-9.0.0.M9/bin/startup.sh "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##（启动命令，可以配置多条）")]),a._v("\n")])])]),t("p",[a._v("2、给 rc.local 文件添加执行权限")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x rc.local\n")])])]),t("h3",{attrs:{id:"上传-dubbo-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传-dubbo-admin"}},[a._v("#")]),a._v(" 上传 Dubbo-admin")]),a._v(" "),t("p",[a._v("将 dubbo-admin-2.6.0.war 上传至 apache-tomcat-9.0.0.M9/webapps 目录")]),a._v(" "),t("p",[a._v("在 tomcat 启动的状态下 tomcat 会自动解压 war 包.0_112")]),a._v(" "),t("h3",{attrs:{id:"修改-tomcat-的主页为-dubbo-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-tomcat-的主页为-dubbo-admin"}},[a._v("#")]),a._v(" 修改 tomcat 的主页为 Dubbo-admin")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/alinesno/tomcat/apache-tomcat-9.0.0.M9/conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" server.xml\n")])])]),t("p",[a._v("找到内容为")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Host "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost"')]),a._v("  "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("appBase")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webapps"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("unpackWARs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("autoDeploy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("然后新增一行内容，将默认指定访问的 webapps/ROOT 目录变更")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Context "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("docBase")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dubbo-admin-2.6.0"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("debug")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("reloadable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),a._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"/images/dubbo-admin_02.png",width:"80%"}})]),a._v(" "),t("p",[a._v("访问地址http://47.113.116.150:8182")]),a._v(" "),t("p",[a._v("进入首页，用户名密码为:root/root")]),a._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"/images/dubbo-admin_01.png",width:"80%"}})])])}],!1,null,null,null);s.default=r.exports}}]);