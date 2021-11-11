## Dubbo-admin 安装

<p class="show-images"><img src="/images/undraw_experience_design_eq3j.svg" width="40%" /></p>

### 前置安装 Tomcat

#### 上传安装

上传 Tomcat 至 Linux 服务器`/home/alinesno/soft`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

```bash
示例: scp -r apache-tomcat-9.0.0.M9.tar.gz alinesno@192.168.1.110:~/soft/
```

安装 tomcat

```bash
## 创建目录
mkdir -p /opt/alinesno/tomcat
tar -zxvf ~/soft/apache-tomcat-9.0.0.M9.tar.gz -C ~/opt/alinesno/tomcat
```

修改 tomcat 端口号

```bash
cd apache-tomcat-9.0.0.M9/conf
vim server.xml
## tomcat端口号默认为8080,全局搜索8080修改为8182
<Connector port="8182" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8443" />
```

启动 tomcat

```bash
./apache-tomcat-9.0.0.M9/bin/startup.sh
```

关闭 tomcat

```bash
./apache-tomcat-9.0.0.M9/bin/shutdown.sh
```

设置 tomcat 开机启动

1、找到/etc/rc.d 文件夹下的 rc.local 文件，在文件的最后添加以下 java 环境变量和启动 tomcat 命令：

```bash
　　export JAVA_HOME=/opt/jdk1.8.0_112
　　export JRE_HOME=$JAVA_HOME/jre
　　sh /opt/alinesno/tomcat/apache-tomcat-9.0.0.M9/bin/startup.sh ##（启动命令，可以配置多条）
```

2、给 rc.local 文件添加执行权限

```bash
chmod +x rc.local
```

### 上传 Dubbo-admin

将 dubbo-admin-2.6.0.war 上传至 apache-tomcat-9.0.0.M9/webapps 目录

在 tomcat 启动的状态下 tomcat 会自动解压 war 包.0_112

### 修改 tomcat 的主页为 Dubbo-admin

```bash
cd /opt/alinesno/tomcat/apache-tomcat-9.0.0.M9/conf
vim server.xml
```

找到内容为

```bash
<Host name="localhost"  appBase="webapps" unpackWARs="true" autoDeploy="true">
```

然后新增一行内容，将默认指定访问的 webapps/ROOT 目录变更

```bash
<Context path="" docBase="dubbo-admin-2.6.0" debug="0" reloadable="true"/>
```

<p align="center"><img src="/images/dubbo-admin_02.png" width="80%" /></p>

访问地址http://47.113.116.150:8182

进入首页，用户名密码为:root/root

<p align="center"><img src="/images/dubbo-admin_01.png" width="80%" /></p>

<!-- ### Ansible构建 -->

<!-- ### 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ### 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
