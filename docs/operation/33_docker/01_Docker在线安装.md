# Ducker 在线安装

## 检查服务器环境

使用 centos7 进行安装，首先确定系统版本

```bash
lsb_release -a
```

<img :src="$withBase('/operation/jenkins_01.png')">

docker 安装需要系统 64 位、系统内核版本为 3.10 以上

```bash
uanme -r
```

<img :src="$withBase('/operation/docker_02.png')">

检查本机是否已经安装 docker

```bash
yum list installed | grep docker
```

## 使用 yum 安装

```bash
yum -y install docker
```

-y 表示不询问，默认 yes 选择

## 启动 docker

```bash
systemctl start docker
```

查看服务状态

```bash
systemctl status docker
```

<img :src="$withBase('/operation/docker_03.png')">

显示 running 说明 docker 已经安装且运行成功

## 设置 docker 开机自启

给 docker.service 文件添加执行权限

```bash
chmod +x /etc/systemd/system/docker.service
```

修改文件后重新加载配置

```bash
systemctl daemon-reload
```

启动并设置服务开机自启

```bash
systemctl start docker          //启动服务

systemctl enable docker.service //开机自启
```

<!-- ## Ansible构建 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ## 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
