# MySQL 单点教程

### 安装

> 安装过程使用 root 操作

上传软件至 Linux 服务器`/home/alinesno/soft/`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

```bash
scp -r mysql-server-mysql-5.7.24.tar.gz root@192.168.1.110:/opt/
scp -r boost_1_59_0.tar.gz root@192.168.1.110:/opt/
```

安装依赖软件

```bash
sudo yum install -y cmake , make , gcc , gcc-c++ , bison , ncurses , ncurses-devel
```

解压包

```bash
cd /opt/
tar -zxvf boost_1_59_0.tar.gz -C /usr/local/
tar -zxvf mysql-server-mysql-5.7.24.tar.gz
cd mysql-server-mysql-5.7.24
```

初始化用户,添加 mysql 用户组和 mysql 用户

```bash
groupadd mysql
useradd -r -g mysql -s /bin/false mysql
```

编译源码,其中参数说明

```bash
cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
-DMYSQL_DATADIR=/usr/local/mysql/data \
-DWITH_BOOST=/usr/local/boost_1_59_0 \
-DSYSCONFDIR=/etc \
-DEFAULT_CHARSET=utf8mb4 \
-DDEFAULT_COLLATION=utf8mb4_general_ci \
-DENABLED_LOCAL_INFILE=1 \
-DEXTRA_CHARSETS=all
```

- DCMAKE_INSTALL_PREFIX：安装路径
- DMYSQL_DATADIR：数据存放目录
- DWITH_BOOST：boost 源码路径
- DSYSCONFDIR：my.cnf 配置文件目录
- DEFAULT_CHARSET：数据库默认字符编码
- DDEFAULT_COLLATION：默认排序规则
- DENABLED_LOCAL_INFILE：允许从本文件导入数据
- DEXTRA_CHARSETS：安装所有字符集

编译安装

> -j 参数表示根据 CPU 核数指定编译时的线程数，可以加快编译速度

```bash
make -j `grep processor /proc/cpuinfo | wc -l`
make install
```

### 配置数据库

初始化数据库

> 注意：如果使用–initialize 参数初始化系统数据库之后，会在~/.mysql_secret 文件中生成 root 用户的一个临时密码，同时也在初始化日志中打印出来了,如下图:

```bash
cd /usr/local/mysql
chown -R mysql:mysql .
./bin/mysqld --initialize-insecure --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data
./bin/mysql_ssl_rsa_setup
chown -R root .
chown -R mysql data
```

查看初始密码:

```bash
cat ~/.mysql_secret
```

复制配置文件

```bash
cp support-files/my-default.cnf /etc/my.cnf
```

参数优化,编辑文件`/etc/my.conf`

```bash
vim /etc/my.conf
```

调整内容如下

```bash
[client]
port=3306
socket=/usr/local/mysql/mysql.sock
[mysqld]
character-set-server=utf8
collation-server=utf8_general_ci

skip-external-locking
skip-name-resolve

user=mysql
port=3306
basedir=/usr/local/mysql
datadir=/usr/local/mysql/data
tmpdir=/usr/local/mysql/temp

# server_id = .....
socket=/usr/local/mysql/mysql.sock
log-error=/usr/local/mysql/logs/mysql_error.log
pid-file=/usr/local/mysql/mysql.pid
open_files_limit=10240
back_log=600
max_connections=500
max_connect_errors=6000
wait_timeout=605800
#open_tables=600
#table_cache = 650
#opened_tables = 630

max_allowed_packet=32M
sort_buffer_size=4M
join_buffer_size=4M
thread_cache_size=300
query_cache_type=1
query_cache_size=256M
query_cache_limit=2M
query_cache_min_res_unit=16k

tmp_table_size=256M
max_heap_table_size=256M

key_buffer_size=256M
read_buffer_size=1M
read_rnd_buffer_size=16M
bulk_insert_buffer_size=64M

lower_case_table_names=1
default-storage-engine=INNODB

innodb_buffer_pool_size=2G
innodb_log_buffer_size=32M
innodb_log_file_size=128M
innodb_flush_method=O_DIRECT
#####################
thread_concurrency=32
long_query_time=2
slow-query-log=on
slow-query-log-file=/usr/local/mysql/logs/mysql-slow.log

[mysqldump]
quick
max_allowed_packet=32M

[mysqld_safe]
log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid
```

配置启动服务

```bash
cp support-files/mysql.server /etc/init.d/mysqld
chkconfig --add mysqld
```

启动数据库

```bash
# 启动mysql服务
service mysqld start
# 停止mysql服务
service mysqld stop
# 重新启动mysql服务
service mysqld restart
# 开机启动
service mysqld enable
```

设置数据库密码,及远程登陆

```bash
/usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@'127.0.0.1' identified by "1234qwer" with grant option;"
/usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@'localhost' identified by "1234qwer" with grant option;"
# 开启远程登录(将host设为%即可),生产当中极不建议这么做
/usr/local/mysql/bin/mysql -e "grant all privileges on *.* to root@'%' identified by "1234qwer" with grant option;"
```

配置环境变量,编辑`/etc/profile`:

```bash
vim /etc/profile
```

添加以下内容

```bash
# mysql env
export PATH=/usr/local/mysql/bin:$PATH
source /etc/profile
```

## Ansible 构建

- 脚本编写

## 镜像

- 构建镜像
- 使用

## 参考资料

- [GitBook 官网](http://www.baidu.com)
- [MySQL5.7.13 源码编译安装与配置](https://blog.csdn.net/xyang81/article/details/51792144)
- [Installing MySQL Using a Standard Source Distribution](https://dev.mysql.com/doc/refman/5.7/en/installing-source-distribution.html)
