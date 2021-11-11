## Redis 配置

<p class="show-images"><img src="/images/undraw_Designer_by46.svg" width="40%" /></p>

### Redis 安装

#### 上传安装

上传 Redis 至 Linux 服务器`/home/alinesno/soft`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

```bash
示例: scp -r redis-5.0.0.tar.gz alinesno@192.168.1.110:~/soft/
```

#### 编译安装

安装源码包

```bash
yum -y install make gcc*
```

```bash
## 创建目录
mkdir /opt/alinesno/redis5
tar -zxvf /home/alinesno/soft/redis-5.0.0.tar.gz -C /opt/alinesno/redis5
```

编译 redis

```bash
cd redis5
make
make install
```

修改参数

```bash
cd redis-5.0.0/conf
vim redis.conf
daemonize yes --原为no,后台运行redis(修改后启动redis,不出现那种所谓的蛋糕图)
如下图
```

<p align="center"><img src="/images/redis_01.png" width="80%" /></p>

## redis 启动

编写 redis-start.sh 启动脚本

```bash
vim redis-start.sh
```

内容如下

```bash
nohup ./bin/redis-server ./conf/redis.conf &
```

添加可执行权限

```bash
## 添加可执行权限
chmod +x redis-start.sh
## 启动
~/redis-5.0.0/redis-start.sh
```

## 添加 redis 开机自启动

```bash
cd /etc/rc.d
vim rc.local
# redis开机自启
sh /opt/alinesno/redis5/redis-5.0.0/redis-start.sh
```

保存后退出

<!-- ### Ansible构建 -->

<!-- ### 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ### 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
