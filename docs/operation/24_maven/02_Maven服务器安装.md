# Maven 本地安装及配置

## 安装

### 配置 Maven

上传
上传 maven 至 Linux 服务器`/opt/`目录

安装 maven

```bash
cd /opt
sudo tar -zxvf apache-maven-3.6.0-bin.tar.gz  # 解压出来的路径为:/opt/apache-maven-3.6.0
cd /opt/apache-maven-3.6.0
pwd # 获取路径，配置环境变量
```

配置环境变量

```bash
vim /etc/profile
```

添加 maven 环境变量

```bash
# maven env
export M2_HOME=/opt/apache-maven-3.6.0
export M2=$M2_HOME/bin
# export MAVEN_OPTS="-Xmx1048m -Xms256m -XX:MaxPermSize=312M"
export PATH=$M2:$PATH
```

使环境变量生效

```bash
source /etc/profile
mvn -v # 查看mvn命令
```

上传本地 maven 至服务器

```bash
scp -r settings.xml root@192.168.1.110:/opt/apache-maven-3.6.0/conf/
```

初始化 Maven

```bash
mvn help:system
```

## Ansible 构建

- 脚本编写

## 镜像

- 构建镜像
- 使用

## 参考资料

- [GitBook 官网](http://www.baidu.com)
