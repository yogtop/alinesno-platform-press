# zookeeper 安装配置

## 本内容你将获得

- Linux 上 zookeeper 的单点安装教程
- Linux 上 zookeeper 的集群安装教程

## 单点安装

- 上传 zookeeper3.4.6 至 Linux 服务器`/home/alinesno/zookeeper`目录

  > 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

- 解压
  ```shell
  cd /home/alinesno/zookeeper
  tar -zxvf zookeeper-3.4.6.tar.gz   解压之后zk路径为 /home/alinesno/zookeeper/zookeeper-3.4.6
  ```
- 环境变量配置
  创建日志和数据目录
  ```shell
  mkdir -p /home/alinesno/zookeeper/data    数据路径
  mkdir -p /home/alinesno/zookeeper/logs    日志路径
  ```
- 修改配置

  ```shell
   复制默认配置为zoo.cfg
  cd /home/alinesno/zookeeper/zookeeper-3.4.6/conf/
  cp zoo_sample.cfg zoo.cfg
  ```

  修改以下两项

  ```
  vim /home/alinesno/zookeeper/zookeeper-3.4.6/conf/zoo.cfg

   修改以下内容
  dataDir=/home/alinesno/zookeeper/data
  dataLogDir=/home/alinesno/zookeeper/data
  ```

- 启动 zk

  ```shell
  cd /home/alinesno/zookeeper/zookeeper-3.4.6/bin    进入zk目录

  ./zkServer.sh start    启动zk日志
  ./zkServer.sh status   查看启动状态
  ```

## 添加 zookeeper 开机自启动

````bash
cd /etc/rc.d
vim rc.local
 zookeeper开机自启
/home/alinesno/zookeeper/zookeeper-3.4.6/bin/zkServer.sh start```
保存后退出

<!-- ## 集群安装 -->
<!-- > zk集群安装只能为2n+1单数(如1/3/5)，集群数量不能为偶数 -->

<!-- - 环境变量 -->
<!-- - zk配置 -->
<!-- - 集群启动 -->

<!-- ## Ansible构建 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ## 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
````
