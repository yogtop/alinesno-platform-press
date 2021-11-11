# Kong 单点教程

## 软件安装

### 上传软件至 Linux 服务器`/home/alinesno/soft/`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

### 安装配置

#### 安装

```shell
rpm -ivh kong-1.3.0.el7.amd64.rpm
```

#### 无数据库配置

生成配置文件

```shell
mkdir /opt/kong/
cd /opt/kong/
kong config init // 初始化配置
vim kong.conf
```

输入以下内容

```properties
database = off
declarative_config = /opt/kong/kong.yml
```

编写启动脚本

```shell
vim /opt/kong/start.sh
export KONG_ADMIN_LISTEN=0.0.0.0:8001,0.0.0.0:8443 ssl
kong start -c /opt/kong/kong.conf

chmod +x /opt/kong/start.sh
```

运行成功之后，浏览器访问:

```
http://IP:8001/
```

#### 配置数据库

安装 PostgreSQL

```shell
yum install kong-community-edition-0.14.1.*.noarch.rpm --nogpgcheck
```

配置 yum 源

```shell
 配置完yum库之后卸载之前安装的Postgresql
yum erase postgresql*
 删除遗留的数据
rm -rf /var/lib/pgsql
```

下载 RPM（PostgreSQL YUM 源），找到对应的版本 CentOS 7 - x86_64

```shell
 安装yum源
yum install https://download.postgresql.org/pub/repos/yum/9.6/redhat/rhel-7-x86_64/pgdg-centos96-9.6-3.noarch.rpm
 安装PostgreSQL
yum install postgresql96-server postgresql96-contrib
```

初始化数据库

```shell
 初始化数据库
/usr/pgsql-9.6/bin/postgresql96-setup initdb
```

PostgreSQL 服务控制

```shell
 PostgreSQL 使用systemctl作为服务托管
service postgresql-9.6 start/stop/restart/reload
 或是
systemctl start/stop/restart/status postgresql-9.6
 设置开机自启
systemctl enable postgresql-9.6
```

卸载（顺便提供卸载 PostgreSQL 的命令）

```shell
 卸载PostgreSQL
yum erase postgresql96
```

修改密码
PostgreSQL 数据库默认会创建一个 Linux 系统用户 postgres，通过 passwd 命令可以设置密码。

```
 创建postgres数据库账号
su - postgres
psql
ALTER USER postgres WITH PASSWORD '123456';
\q

 退出postgres账号
exit
```

#### 设置远程控制

修改`vim /var/lib/pgsql/9.6/data/postgresql.conf`文件，配置可以远程访问（正式环境按照白名单正确配置）
将 listen_addresses 前的#去掉，并将 listen_addresses = 'localhost' 改成 listen_addresses = '\*'；

```shell
#------------------------------------------------------------------------------
 CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------
 - Connection Settings -
 放开IP的限制
listen_addresses = '*'           what IP address(es) to listen on;
```

修改客户端认证配置文件 `vim /var/lib/pgsql/9.6/data/pg_hba.conf`
将 IPv4 区下的 127.0.0.1/32 修改为 0.0.0.0/0； 将 ident 修改为 md5

```shell
 TYPE  DATABASE        USER            ADDRESS                 METHOD
 "local" is for Unix domain socket connections only
local   all             all                                     peer
local   all             all                                     md5
```

#### IPv4 local connections:

##### 假如 Kong 用户设置了密码，需要配置 MD5 认证

```shell
host    all             all             127.0.0.1/32            md5
```

##### 容许远程向 Navicat 客户端访问

```shell
host    all             all             0.0.0.0/0               md5
```

##### IPv6 local connections:

```shell
host    all             all             ::1/128                 ident
```

重启使配置生效
注意：对应虚拟机或是在非本机的用户，需要注意防火墙端口开放。

添加 Kong 账号

```shell
#为postgres用户增加work分组
sudo usermod -a -G work postgres
 添加kong数据库账户及数据库
createuser -s -e kong
createdb -E UTF8 -O kong kong
 添加kong系统用户名
sudo adduser kong
 可选 为kong系统用户设置密码
sudo passwd kong
```

新建 Kong 数据库

```shell
su - postgres
psql
CREATE USER kong;
CREATE DATABASE kong OWNER kong;
alter user kong with encrypted password '123456';
\q
exit
```

## konga 软件安装

### 配置软件

安装基础软件

```shell
sudo yun install nodejs npm
sudo npm install -g gulp
sudo npm install -g bower
sudo npm install -g sails
```

安装 konga

```shell
git clone https://github.com/pantsel/konga.git
cd konga
npm install konga
```

### 配置 kong 的配置文件

调整配置

```shell
$ whereis kong
$ cd /etc/kong/
$ cp kong.conf.default kong.conf
```

修改内容

```shell
#### 内容开始 #####
database = postgres
pg_host = 10.10.1.179
pg_port = 5432
pg_user = kong
pg_password = 123456
pg_database = kong
#### 内容结束 #####
```

初始化 kong 的数据库

```shell
 kong migrations up -c /etc/kong/kong.conf
或者
kong migrations bootstrap
```

启动 kong

```shell
$ kong start -c /etc/kong/kong.conf
```

配置

```javascript
 示例配置位置
/config/local_example.js

 拷贝一份
cd ./config/
cp local_example.js ./local.js

 配置默认数据库
vi ./local.js
models: {
    connection: process.env.DB_ADAPTER || 'localDiskDb',
},
 改成
models: {
    connection: process.env.DB_ADAPTER || 'mysql', // 这里可以用‘mysql’，‘mongo’，‘sqlserver’，‘postgres’
},
 保存

 修改数据库默认配置
vi connections.js
mysql: {
    adapter: 'sails-mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'konga_database'
},
 改成
mysql: {
    adapter: 'sails-mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'konga_database'
},
 保存
```

创建数据库

```sql
mysql -uroot -proot // 这里不建议用明文密码
CREATE DATABASE konga_database CHARACTER SET utf8 COLLATE utf8_general_ci;
```

启动

```shell
cd ../
npm start
```

浏览器输入 IP:1338，端口可以在 local.js 改 <br/>
默认登录名 admin，密码是三个 admin <br/>
配置 kong API 地址要填写完整地址，后面不要带‘/’ <br/>
http://IP:8001
