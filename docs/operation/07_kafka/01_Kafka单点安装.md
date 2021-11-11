# Kafka 单点教程

## 安装

上传软件至 Linux 服务器`/home/alinesno/soft/`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

```bash
scp -r kafka_2.11-2.0.1.tgz alinesno@192.168.1.110:~/soft/
```

解压安装包

```bash
mkdir -p ~/kafka
tar -xzvf ~/soft/kafka_2.11-2.0.1.tgz -C ~/kafka
cd ~/kafka/kafka_2.11-2.0.1/
```

启动 kafka 服务

> kafka 注册中心需要 zk，但是考虑到单点的情况，我们使用 kafka 内置的 zk 服务即可,在集群的时候，我们再配置 zk 集群,后面如果需要使用到 zk 的地方，我们也可以暂时连接此 zk

```bash
 启动zk服务,并查看启动日志
nohup bin/zookeeper-server-start.sh config/zookeeper.properties >> zookeeper.nohup.out &
tail -f zookeeper.nohup.out
 启动kafka服务,并查看启动日志
nohup bin/kafka-server-start.sh config/server.properties >> producer.nohup.out &
tail -f producer.nohup.out
```

## 消息收发

创建一个`test`主题

```bash
 创建主题
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
 查看主题
bin/kafka-topics.sh --list --zookeeper localhost:2181
```

启动消息接收服务,监听`test`主题,消息会不断的监听，所以建议起另一个窗口用于专门接收消息，开始启动的时候是没有消息的，保留着就可以

```bash
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
```

启动消息发送服务,发送给`test`主题,在启动发送服务之后，你再输入字符，然后再看消息服务窗口是否能接收得到

```bash
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
```

发送一条消息

```
this is a test from message
```

效果如下图,用了`tmux`做了窗口分隔处理:

<img :src="$withBase('/operation/kafka_01.png')">

<!-- # Ansible构建 -->
<!-- - 脚本编写 -->

<!-- # 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

# 参考资料

- 略
  <!-- - [GitBook官网](http://www.baidu.com) -->
