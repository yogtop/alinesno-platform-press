# Jenkins 安装

## 本内容你将获得

- Jenkins 安装及插件配置

## Jenkins 安装

### 说明

1.Jenkins 本身是没有数据库的,以`JENKINS_HOME`为环境变量,构建的包都会在这个目录下面，所以可能会变得非常大(几十上百 G 都有可能)

2.Jenkins 构建过程中，使用的内存还有环境要求较高，建议使用 jdk8 运行

3.Jenkins 安装包推荐使用官网的长期支持版本 (LTS)，避免出现插件无法安装的情况

<img :src="$withBase('/operation/jenkins_17.png')">

### 全局安装

上传 Jenkins 至 Linux 服务器`/home/alinesno/jenkins`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

解压

```bash
# 创建目录
mkdir -p ~/jenkins/JENKINS_HOME
cd ~/jenkins
mv jenkins.war jenkins.war
```

配置环境变量(可选操作)

```bash
vim ~/.bash_profile
# 添加以下内容
# jenkins env
export JENKINS_HOME=~/jenkins/JENKINS_HOME
```

启动命令
创建`jenkins_start.sh`启动脚本

```bash
vim ~/jenkins/jenkins-start.sh
```

内容如下

```bash
# jenkins env
export JENKINS_HOME=~/jenkins/JENKINS_HOME
LOGFILE=jenkins.log
nohup java -Dhudson.util.ProcessTree.disable=true -jar ~/jenkins/jenkins.war --httpPort=8088 > $LOGFILE 2>&1 &
```

启动 jenkins

```bash
cd ~/jenkins
# 添加可执行权限
chmod +x jenkins-start.sh
# 启动
~/jenkins/jenkins-start.sh
```

查看启动日志

```bash
tail -f ~/jenkins.log
```

在启动日志中包含有管理员密钥，请注意复制下来，如果没有看到日志也没事，可以通过以下方式获取

<img :src="$withBase('/operation/jenkins_02.png')">

### 登陆配置

访问 jenkins，http://192.168.1.110:8088 ,显示下图:

<img :src="$withBase('/operation/jenkins_01.png')">

需要获取安装的密钥，在服务器上面获取，复制到输入框中，点击继续

```bash
cat /home/alinesno/jenkins/JENKINS_HOME/secrets/initialAdminPassword
```

插件安装我们选择社区推荐插件即可，进入到插件安装过程时间比较长，也比较消耗服务器资源，请耐心等待.

<img :src="$withBase('/operation/jenkins_03.png')">

配置超级管理员，超级管理员会看到很多项目，并不合适于大型或者多项目的协助，后期我们为每个账户分配权限即可,超级管理员只用于配置，并不用于工程的发布。

> 这里设置超级管理员密码为:1234qwer

<img :src="$withBase('/operation/jenkins_04.png')">

配置完成，点击登陆即可

<img :src="$withBase('/operation/jenkins_05.png')">

### Jenkins 配置

> Jenkins 是一个构建工具，需要引用的环境的工具，如 maven,jdk,node 等

#### 配置开发工具

Jenkins 可以配置多个 jdk 供用户在构建过程中提供选择，此处我们统一了 jdk 版本，所以只需要配置一个即可

进入系统设置中

<img :src="$withBase('/operation/jenkins_06.png')">

配置 jdk 路径,_一定不要勾选自动安装_

<img :src="$withBase('/operation/jenkins_07.png')">

配置 maven 路径,_一定不要勾选自动安装_

`服务器配置Maven请查阅之前文档`

<img :src="$withBase('/operation/jenkins_08.png')">

点击保存环境变量即可

#### 配置预警邮箱

进入系统配置，配置管理员邮箱，此步很重要，否则可能出现邮件认证出错的情况

<img :src="$withBase('/operation/jenkins_09.png')">

进入系统配置,点击邮箱配置,点击`高级`，如下图:

<img :src="$withBase('/operation/jenkins_10.png')">

登陆邮箱查看是否收发成功

<img :src="$withBase('/operation/jenkins_11.png')">

### 构建 HelloWorld 工程

安装 maven 插件`Maven Integration`,点击直接安装即可

<img :src="$withBase('/operation/jenkins_12.png')">

创建 maven 工程，构建完成邮箱提醒,整体配置界面如图:

<img :src="$withBase('/operation/jenkins_13.png')">

构建成功或失败，查收邮件:

<img :src="$withBase('/operation/jenkins_14.png')">

## 添加 jenkins 开机自启动

```bash
cd /etc/rc.d
vim rc.local
 jenkins开机自启
sh /root/jenkins/jenkins-start.sh
```

保存后退出

<!-- ## Ansible构建 -->
<!-- - 脚本编写 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ## 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
