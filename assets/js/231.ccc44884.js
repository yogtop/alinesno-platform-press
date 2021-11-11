(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{445:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),e("p",[t._v("重启网络配置")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),e("p",[t._v("连接成功则表示 ok!")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),e("p",[t._v("关闭虚拟机，然后选择复制，同上，修改对应 IP 和配置好 hostname，此处书到简言,如下图:")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),e("p",[t._v("生成 ssh 密钥")]),t._v(" "),t._m(35),t._m(36),t._v(" "),e("p",[t._v("复制到其它服务器,使用 ssh-copy-id 命令")]),t._v(" "),t._m(37),e("p",[t._v("配置其它服务器 hostname 和 hosts 文件")]),t._v(" "),t._m(38),e("p",[t._v("服务器重启")]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),e("p",[t._v("添加以下内容(貌似在 92 行),置于 root 用户下面")]),t._v(" "),t._m(43),t._m(44),t._v(" "),e("p",[t._v("宿主主机生成密钥,跟上面一样，此处书到简言\n复制密钥到 master 节点,后面主要在 master 节点上操作其它服务器")]),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),e("p",[t._v("添加以下内容")]),t._v(" "),t._m(48),t._m(49),t._v(" "),e("p",[t._v("重新登陆即可")]),t._v(" "),t._m(50),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://mirrors.aliyun.com/repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云 Linux 安装镜像源地址"),e("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"centos-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-配置"}},[this._v("#")]),this._v(" CentOS 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"本内容你将获得"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本内容你将获得"}},[this._v("#")]),this._v(" 本内容你将获得")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("CentOS7 网络配置")]),this._v(" "),s("li",[this._v("CentOS7 基础工具安装")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"机器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#机器配置"}},[this._v("#")]),this._v(" 机器配置")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("主机名")]),t._v(" "),e("th",[t._v("IP 规划")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("cloud_master")]),t._v(" "),e("td",[t._v("192.168.1.110")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("cloud_slave_01")]),t._v(" "),e("td",[t._v("192.168.1.111")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("cloud_slave_02")]),t._v(" "),e("td",[t._v("192.168.1.112")]),t._v(" "),e("td",[t._v("略")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"网络配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络配置"}},[this._v("#")]),this._v(" 网络配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"配置-hostname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-hostname"}},[this._v("#")]),this._v(" 配置 hostname")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" hostnamectl set-hostname cloud_master "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 将 cloud_master 替换为当前主机名")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("修改值为"),s("code",[this._v("cloud_master")]),this._v(",同时在"),s("code",[this._v("/etc/hosts")]),this._v("添加以下内容")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("192.168.1.110 cloud_master\n192.168.1.111 cloud_slave_01\n192.168.1.112 cloud_slave_02\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"配置固定-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置固定-ip"}},[this._v("#")]),this._v(" 配置固定 IP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("修改文件"),s("code",[this._v("vim /etc/sysconfig/network-scripts/ifcfg-enp0s3")]),this._v(",可能 ifcfg-后面的网卡内容不一样,修改以下内容")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# 此处为修改,在大概第5行左右\nBOOTPROTO=static\nONBOOT=yes\n\n# 新添加IP配置\nIPADDR=192.168.1.110\nNETMASK=255.255.255.0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("systemctl restart network\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("尝试 ping 宿主主机，此得我的宿主 IP 为"),s("code",[this._v("192.168.1.101")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ping")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("192.168")]),this._v(".1.101 -c "),s("span",{pre:!0,attrs:{class:"token number"}},[this._v("4")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"iterm2-远程本地连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterm2-远程本地连接"}},[this._v("#")]),this._v(" iTerm2 远程本地连接")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("iTerm2 基本上 mac 上必备的了，优点就不说多")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("ssh")]),this._v(" root@192.168.1.110\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基础配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[this._v("#")]),this._v(" 基础配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"安装基础工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装基础工具"}},[this._v("#")]),this._v(" 安装基础工具")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y net-tools gcc "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tmux telnet\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("tmux 是个人比较喜欢的工具，推荐 git 找一下合适自己的配置,有点像 vim")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"配置阿里云源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里云源"}},[this._v("#")]),this._v(" 配置阿里云源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("mv")]),this._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n"),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("wget")]),this._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"清理云源缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理云源缓存"}},[this._v("#")]),this._v(" 清理云源缓存")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yum clean all\nyum makecache\nyum update\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"复制其它两台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制其它两台"}},[this._v("#")]),this._v(" 复制其它两台")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/vbox_08.png",width:"800px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"无界面启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无界面启动"}},[this._v("#")]),this._v(" 无界面启动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在配置好 IP 之后，我们启动就可以不用界面，只需要服务器正常连接即可,启动方式，选择"),s("code",[this._v("无界面启动")]),this._v("，如下图:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/vbox_09.png",width:"800px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置无密钥登陆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置无密钥登陆"}},[this._v("#")]),this._v(" 配置无密钥登陆")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("无密钥登陆更方便于后期的开发")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"master-主机公钥分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-主机公钥分配"}},[this._v("#")]),this._v(" master 主机公钥分配")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 一种Enter就可以")]),this._v("\nssh-keygen -t rsa\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/vbox_10.png",width:"800px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# root 用户")]),this._v("\nssh-copy-id root@cloud_master\nssh-copy-id root@cloud_slave_01\nssh-copy-id root@cloud_slave_02\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# alinesno用户")]),this._v("\nssh-copy-id alinesno@cloud_master\nssh-copy-id alinesno@cloud_slave_01\nssh-copy-id alinesno@cloud_slave_02\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  复制文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" /etc/hosts root@cloud_slave_01:/etc/hosts\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" /etc/hosts root@cloud_slave_02:/etc/hosts\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置hostname")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@cloud_slave_01 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sudo hostnamectl set-hostname cloud_slave_01"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@cloud_slave_02 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sudo hostnamectl set-hostname cloud_slave_02"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"权限分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限分配"}},[this._v("#")]),this._v(" 权限分配")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("变成 sudoer 用户，便于操作及安装软件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将 alinesno 用户设置成 sudoer 用户,打开"),s("code",[this._v("/etc/sudoer")]),this._v("文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vim /etc/sudoers\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("alinesno ALL=(ALL)       ALL\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"宿主主机公钥分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宿主主机公钥分配"}},[this._v("#")]),this._v(" 宿主主机公钥分配")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# root 用户")]),this._v("\nssh-copy-id root@192.168.1.110\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# alinesno 用户")]),this._v("\nssh-copy-id alinesno@192.168.1.110\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("去掉'Are you sure you want to continue connecting (yes/no)? '\n编辑文件"),s("code",[this._v("/etc/ssh/ssh_config")]),this._v(",")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("vim")]),this._v(" /etc/ssh/ssh_config\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("StrictHostKeyChecking no "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 添加")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{attrs:{align:"left"}},[s("img",{attrs:{src:"/images/vbox_11.png",width:"300px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=r.exports}}]);