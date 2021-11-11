# MariaDB 网络安装

## 说明

1. 假设安装的服务器为:123.1.1.1

**采购了百度云服务器，发现，体验太差了，推荐还是阿里云**

## 安装 MariaDB

> 安装过程使用 root 操作

安装依赖软件

```bash
sudo yum install -y cmake , make , gcc , gcc-c++ , bison , ncurses , ncurses-devel
```

添加库

```shell
vim /etc/yum.repos.d/MariaDB.repo
```

添加数据源

> 系统及版本选择：https://downloads.mariadb.org/mariadb/repositories/#mirror=tuna

```shell
# MariaDB 10.3 CentOS repository list - created 2019-03-29 02:33 UTC
# http://downloads.mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.3/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

清理 yum 缓存

```shell
yum clean headers  #清理/var/cache/yum的headers
yum clean packages #清理/var/cache/yum下的软件包
yum clean metadata

yum clean all   #清除Yum缓存
yum makecache   #把服务器的包信息下载到本地电脑缓存起来
yum update   #升级包同时也升级软件和系统内核
```

释放内存

```shell
sync; echo 2 > /proc/sys/vm/drop_caches
sync; echo 3 > /proc/sys/vm/drop_caches

free -m    #查看内存
```

安装 mariadb

```shell
yum -y install MariaDB-server MariaDB-client
```

启动数据库

```shell
systemctl restart mariadb
systemctl status mariadb
```

假如密码忘记:
修改/etc/my.cnf 文件,在[mysqld]下添加 skip-grant-tables , 再启动 mariadb

```shell
[client-server]
# [mysqld]
# skip-grant-tables
#
# include all files from the config directory
#
!includedir /etc/my.cnf.d
```

登陆

```shell
mysql

// 安全配置
mysql_secure_installation
```

添加防火墙

```shell
sudo firewall-cmd --zone=public --permanent --add-service=mysql
sudo systemctl restart firewalld
```

重置密码

```shell
// 重启服务
systemctl restart mysqld
systemctl status mysqld
```

重置密码

```shell
mysql -uroot -p
use mysql;
update user set password=password('HouGuiYu@123!@#') where user='root' ;
```

开启远程访问

```shell
mysql -uroot -p

// %表示是所有的外部机器，如果指定某一台机，就将%改为相应的机器名；‘root’则是指要使用的用户名
grant all privileges on *.* to 'root'@'%' identified by 'HouGuiYu@123!@#' with grant option;

// 运行此句才生效，或者重启MySQL
flush privileges;
```

## 安装 phpadmin

> mysql 的界面管理工具，用于 mysql 的可视化管理

1. 安装依赖包

```shell
yum -y install httpd php php-fpm php-mysql
```

2. 升级 php

```shell
rpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm #更新源
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
yum remove php-common -y  #移除系统自带的php-common
yum install -y php72w php72w-opcache php72w-xml php72w-mcrypt php72w-gd php72w-devel php72w-mysql php72w-intl php72w-mbstring  #安装依赖包
```

3. 安装 apache

```shell
// 安装
yum install httpd

// 重启
systemctl restart httpd

// 查看运行状态
systemctl status httpd
```

访问地址:http://123.1.1.1/

4. 安装 phpadmin

> 此需进入目录 /var/www/html 目录操作

```shell
// 下载phpadmin
wget https://files.phpmyadmin.net/phpMyAdmin/4.8.5/phpMyAdmin-4.8.5-all-languages.zip

// 解压
unzip phpMyAdmin-4.8.5-all-languages.zip
```

3. 修改名称

```shell
mv phpMyAdmin-4.8.5-all-languages phpMyAdmin
```
