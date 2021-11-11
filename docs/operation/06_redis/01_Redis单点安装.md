# Redis 单点安装

## 安装

### 软件安装

#### 上传软件至 Linux 服务器`/home/alinesno/soft/`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

使用 scp 命令:

```bash
scp redis-5.0.0.tar.gz alinesno@192.168.1.110:~/soft/
```

#### 编译安装

安装 tcl,此处`make test`使用

```base
tar xzvf ~/soft/tcl8.6.1-src.tar.gz  -C ~/redis5/
cd  ~/redis5/tcl8.6.1/unix/
sudo ./configure
sudo make
sudo make install
```

安装 redis5

```bash
mkdir -p ~/redis5
tar -zxvf ~/soft/redis-5.0.0.tar.gz -C ~/redis5/
cd ~/redis5/redis-5.0.0
make PREFIX=/home/alinesno/redis5 install
make test
```

添加配置文件

```bash
mkdir ~/redis5/conf
cp ~/redis5/redis5-0.0/redis.conf ~/redis5/conf/
vim ~/redis5/conf/redis.conf

# 添加以下参数，是否在后台执行，yes：后台运行；no：不是后台运行（老版本默认）
daemonize yes
```

编写启动脚本

```bash
vim ~/redis5/redis-start.sh
```

添加以下内容

```bash
nohup ./bin/redis-server ./conf/redis.conf &
```

启动 redis

```bash
# 添加执行权限
chmod +x ~/redis5/redis-start.sh

# 启动脚本
~/redis5/redis-start.sh
```

### 测试

验证是否后台运行

```bash
~/redis5/bin/redis-cli ping
# 返回结果为PONG则正常
```

客户端连接

```bash
~/redis5/bin/redis-cli
```

添加、查看、删除 key 测试

```bash
# 一次设置 4 个 key
MSET one 1 two 2 three 3 four 4

# 查询包含有o的key
KEYS *o*
    1) "four"
    2) "two"
    3) "one"

redis> KEYS t??
    1) "two"

redis> KEYS t[w]*
    1) "two"

KEYS *  # 匹配数据库内所有 key
    1) "four"
    2) "three"
    3) "two"
    4) "one"
```

## Ansible 构建

- 脚本编写

## 镜像

- 构建镜像
- 使用

## 参考资料

### 资料列表

- [GitBook 官网](http://www.baidu.com)

### redis 的一些基本操作

redis 基本操作

```baseh
cd ~/redis5/bin/

## 启动并后台运行
./redis-server & nohup

# 指定端口后台启动
./redis-server --port 6380 &

# 指定配置文件
./redis-server /etc/redis/6379.conf &

## 查是否启动
./redis-cli ping

## 关闭命令
./redis-cli shutdown

# 命令行客户端启动
./redis-cli start

# 命令行客户端启动
./redis-cli -p 6380

# 查看 Redis 版本
./redis-cli info | grep redis_version

# 查看端口号
./redis-cli info | grep tcp_port
```
