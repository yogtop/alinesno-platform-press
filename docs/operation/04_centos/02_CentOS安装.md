# CentOS 安装

## 本内容你将获得

- Mac 下 VirtualBox 的安装
- VirtalBox 网络配置
- CentOS 安装

### Vbox 安装

一路`Next`,此处书到简言

### 添加 NAT 网络

点击`[偏好设置]->[网络]`，添加 NAT 网络，用于实现主机与外网访问

<p align="center">
    <img src="/images/vbox_01.jpg" width="800px" />
</p>

### CentOS7 安装

> 第一台虚拟机即配置成模板机，后面只其它虚拟机只需要复制即可

选择新建议,这里配置虚拟机为`2G`内存，`30G`固定硬盘

<p align="center">
    <img src="/images/vbox_02.jpg" width="800px" />
</p>

点击`[设置]->[存储]`，选择 CentOS 文件，点击[启动]即可

<p align="center">
    <img src="/images/vbox_03.jpg" width="800px" />
</p>

设置`alinesno`用户

<p align="center"><img src="/images/vbox_04.jpg" width="800px" /></p>

等待安装完成,重启即可

### 网络配置

> 服务器之间的通信我们使用`桥接`模式，达到主机之间互相通信

选择网卡 1，选择桥接模式

下面的两个选项是一定的勾选的，这样与 Mac 主机之间互相通信

<p align="center"><img src="/images/vbox_05.png" width="800px" /></p>

选择网卡 2，选择 Nat 模式,选择刚刚创建的 nat 网络

<p align="center"><img src="/images/vbox_06.jpg" width="800px" /></p>

查看是否可以 ping 通外网

```bash
# 以root用户登陆,启动网络,mini版默认是不开机启动
systemctl restart network

# ping 是否可以连接外网
ping www.baidu.com -c 4
```

出现如下图:

<p align="center"><img src="/images/vbox_07.jpg" width="800px" /></p>
