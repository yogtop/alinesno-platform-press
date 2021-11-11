# ELK 单机版本安装

## 本内容你将获得

- ELK 单机版本安装
- 启动并配置 logstash 配置(此处只为 demo)

## elk 安装

### 说明

单机版安装只为用于学习使用，生产中请使用集群模式，此处以阿里云服务器做为示例用于学习,

### 上传软件

上传 Jenkins 至 Linux 服务器`/home/alinesno/elk`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

### 安装

> elk 启动需要使用非 root 用户操作，所以此处添加 elk 用户，并用此用户操作，生产也强烈建议以非 root 操作

添加 elk 用户

```bash
useradd elk
# 如果需要设置密码则做如此操作
passwd elk
su elk
```

解压 es,并启动，一般无非端口或者内存的原因，这步一般情况下是很顺利的

```bash
tar -zxvf elasticsearch-6.5.1.tar.gz
# 重命名文件夹
mv elasticsearch-6.5.1  elasticsearch
cd elasticsearch
# -d 表示后面运行
./bin/elasticsearch -d
# 查看启动日志
tail -f logs/elasticsearch.log
# 查看进程是否存在
ps -ef|grep elasticsearch
```

解压 logstash

```bash
tar -zxvf logstash-6.5.1.tar.gz
mv logstash-6.5.1 logstash
cd logstash
# 查看示例配置
cat config/logstash-sample.conf
```

此处为与 alinesno-cloud 平台整合，所以添加以下配置,编辑文件名称为`logstash.conf`

```bash
vim config/logstash.conf
```

配置内容如下，这里启动了一个 tcp 服务，端口是 4567，然后向本地的 es 输入

```json
input{
    tcp {
        mode => "server"
        host => "0.0.0.0"
        port => 4567
        codec => json_lines
    }
}
output{
    elasticsearch {
        hosts=>["127.0.0.1:9200"]
        index => "alinesno-cloud-%{+YYYY.MM.dd}"
    }
    stdout{
        codec => rubydebug
    }
}
```

启动 logstash

```bash
cd logstash
nohup ./bin/logstash -f ./config/logstash
tail -f nohup.out
```

安装 kibana 客户端

```bash
tar -zxvf kibana-6.5.1-linux-x86_64.tar.gz
mv kibana-6.5.1-linux-x86_64 kibana
nohup bin/kibana &
```

访问`http://localhost:5601`，见如下界面:

<img :src="$withBase('/operation/kibana_01.png')">

<!-- ## Ansible构建 -->
<!-- - 脚本编写 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ## 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
