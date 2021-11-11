# CentOS 配置

## 本内容你将获得

- CentOS7 网络配置
- CentOS7 基础工具安装

## 机器配置

| 序号 | 主机名         | IP 规划       | 备注 |
| ---- | -------------- | ------------- | ---- |
| 1    | cloud_master   | 192.168.1.110 |      |
| 2    | cloud_slave_01 | 192.168.1.111 |      |
| 3    | cloud_slave_02 | 192.168.1.112 | 略   |

## 网络配置

#### 配置 hostname

```bash
sudo hostnamectl set-hostname cloud_master # 将 cloud_master 替换为当前主机名
```

修改值为`cloud_master`,同时在`/etc/hosts`添加以下内容

```
192.168.1.110 cloud_master
192.168.1.111 cloud_slave_01
192.168.1.112 cloud_slave_02
```

#### 配置固定 IP

修改文件`vim /etc/sysconfig/network-scripts/ifcfg-enp0s3`,可能 ifcfg-后面的网卡内容不一样,修改以下内容

```
# 此处为修改,在大概第5行左右
BOOTPROTO=static
ONBOOT=yes

# 新添加IP配置
IPADDR=192.168.1.110
NETMASK=255.255.255.0
```

重启网络配置

```bash
systemctl restart network
```

尝试 ping 宿主主机，此得我的宿主 IP 为`192.168.1.101`:

```bash
ping 192.168.1.101 -c 4
```

#### iTerm2 远程本地连接

> iTerm2 基本上 mac 上必备的了，优点就不说多

```bash
ssh root@192.168.1.110
```

连接成功则表示 ok!

## 基础配置

#### 安装基础工具

```bash
yum install -y net-tools gcc vim wget git tmux telnet
```

> tmux 是个人比较喜欢的工具，推荐 git 找一下合适自己的配置,有点像 vim

#### 配置阿里云源

```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

#### 清理云源缓存

```bash
yum clean all
yum makecache
yum update
```

#### 复制其它两台

关闭虚拟机，然后选择复制，同上，修改对应 IP 和配置好 hostname，此处书到简言,如下图:

<p align="center"><img src="/images/vbox_08.png" width="800px" /></p>

#### 无界面启动

在配置好 IP 之后，我们启动就可以不用界面，只需要服务器正常连接即可,启动方式，选择`无界面启动`，如下图:

<p align="center"><img src="/images/vbox_09.png" width="800px" /></p>

## 配置无密钥登陆

> 无密钥登陆更方便于后期的开发

#### master 主机公钥分配

生成 ssh 密钥

```bash
# 一种Enter就可以
ssh-keygen -t rsa
```

<p align="center"><img src="/images/vbox_10.png" width="800px" /></p>

复制到其它服务器,使用 ssh-copy-id 命令

```bash
# root 用户
ssh-copy-id root@cloud_master
ssh-copy-id root@cloud_slave_01
ssh-copy-id root@cloud_slave_02

# alinesno用户
ssh-copy-id alinesno@cloud_master
ssh-copy-id alinesno@cloud_slave_01
ssh-copy-id alinesno@cloud_slave_02
```

配置其它服务器 hostname 和 hosts 文件

```bash
#  复制文件
scp /etc/hosts root@cloud_slave_01:/etc/hosts
scp /etc/hosts root@cloud_slave_02:/etc/hosts

# 设置hostname
ssh root@cloud_slave_01 "sudo hostnamectl set-hostname cloud_slave_01"
ssh root@cloud_slave_02 "sudo hostnamectl set-hostname cloud_slave_02"
```

服务器重启

#### 权限分配

> 变成 sudoer 用户，便于操作及安装软件

将 alinesno 用户设置成 sudoer 用户,打开`/etc/sudoer`文件

```
vim /etc/sudoers
```

添加以下内容(貌似在 92 行),置于 root 用户下面

```
alinesno ALL=(ALL)       ALL
```

#### 宿主主机公钥分配

宿主主机生成密钥,跟上面一样，此处书到简言
复制密钥到 master 节点,后面主要在 master 节点上操作其它服务器

```bash
# root 用户
ssh-copy-id root@192.168.1.110

# alinesno 用户
ssh-copy-id alinesno@192.168.1.110
```

去掉'Are you sure you want to continue connecting (yes/no)? '
编辑文件`/etc/ssh/ssh_config`,

```bash
sudo vim /etc/ssh/ssh_config
```

添加以下内容

```bash
StrictHostKeyChecking no # 添加
```

<p align="left"><img src="/images/vbox_11.png" width="300px" /></p>

重新登陆即可

## 参考资料

- [阿里云 Linux 安装镜像源地址](http://mirrors.aliyun.com/repo/)
