# Linux 的 JDK 配置

## 本内容你将获得

- CentOS7 上 JDK 的配置
- JDK 的环境变量

## JDK 安装

### 说明

- Linux 环境变量有 2 种，一种是全局变量及用户变量
- 全局即整个系统都共享，用户即单个用户使用

### 全局安装

上传 jdk8 至 Linux 服务器`/opt`目录

> 此处用户可以使用 xftp 或者 xbash 等工具，书要简言

解压

```bash
cd /opt/
sudo tar -zxvf jdk-8u112-linux-x64.tar.gz   最终jdk路径为/opt/jdk1.8.0_112
cd /opt/jdk1.8.0_112
```

配置环境变量，编辑`/etc/profile`

```bash
sudo vim /etc/profile
```

添加以下内容

```bash
# java env
export JAVA_HOME=/opt/jdk1.8.0_112
export JRE_HOME=$JAVA_HOME/jre
export PATH=$PATH:$JAVA_HOME/bin
```

测试

```
source /etc/profile
javac -version
java -version
```

> 查看输出版本

### 用户安装

单用户安装，修改的为`~/.bash_profile`,添加 java 环境变量，然后`source ~/.bash_profile`即可

<!-- ## Ansible构建 -->
<!-- - 脚本编写 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

## 参考资料

- [GitBook 官网](http://www.baidu.com)
