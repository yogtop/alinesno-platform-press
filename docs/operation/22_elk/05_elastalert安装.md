# ElastAlert 安装教程

## 本内容你将获得

- 安装预警

## 安装环境

- Centos7.4_x64
- Elasticsearch 6.4.0
- Kibana 6.4.0

## 安装教程

下载代码，注意使用的版本号和 python 版本，es 使用的版本是 6.4.0,所以使用的 elastalert 版本不能太高

```shell
#安装依赖包
yum install gcc libffi-devel python-devel openssl-devel python-setuptools git

curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py    下载安装脚本
sudo python get-pip.py     运行安装脚本
```

安装 python

```shell
yum install python
```

安装 elastalert

```shell
git clone --branch v0.1.39 https://github.com/Yelp/elastalert.git
cd elastalert

#安装
 pip install "setuptools>=11.3"

 centos7.4
pip  install setuptools==32.2.0
pip install -r requirements.txt

python setup.py install

 或者 pip install elastalert
 Elasticsearch 5.0+:
pip install "elasticsearch>=5.0.0"
```

配置规则

```shell
cd elastalert
cp config.yaml.example config.yaml #基本信息
vim config.yaml
```

定义规则目录

```yaml
#将从该文件夹下读取*.yaml配置文件
rules_folder: alinesno_rules
#查询es中 elastalert_status 索引的频率，也可以是minutes，days 等等
run_every:
  hours: 1
 每两分钟查询一次es 匹配 rules 的数据，存放到elastalert_status中
buffer_time:
  minutes: 2
#host
es_host: 127.0.0.1
#port
es_port: 9200
 Option basic-auth username and password for Elasticsearch
 es_username: username
 es_password: pwd
```

规则目录说明，此处的配置文件是指 config.yaml 文件

| 名称                | 说明                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| rules_folder        | ElastAlert 将加载规则配置文件的地方，它将尝试加载文件夹中的每个.yaml 文件。                                                                 |
| run_every           | ElastAlert 查询 Elasticsearch 的频率。                                                                                                      |
| buffer_time         | 是查询窗口的大小，从每个查询运行的时间向后延伸。对于其中 use_count_query 或 use_terms_query 设置为 true 的规则，此值将被忽略。              |
| es_host             | 是 Elasticsearch 集群的地址，ElastAlert 将存储有关其状态、查询运行、警报和错误的数据。每个规则也可以设置不同的 elasticsearch 主机进行查询。 |
| es_port             | Elasticsearch 对应的端口。                                                                                                                  |
| use_ssl             | （可选的）是否使用 TLS;连接到 es_host；设置为 True 或 False。                                                                               |
| verify_certs        | （可选的）是否验证 TLS 证书; 设置为 True 或 False，默认是 True。                                                                            |
| client_cert         | （可选的）PEM 证书的路径。                                                                                                                  |
| client_key          | （可选的） 作为客户端密钥使用的私钥文件的路径。                                                                                             |
| ca_certs            | （可选的） 用于验证 SSL 连接的 CA 证书的路径。                                                                                              |
| es_username         | （可选的） 用于连接 Elasticsearch 的 basic-auth 用户名。                                                                                    |
| es_password         | （可选的） 用于连接 Elasticsearch 的密码。                                                                                                  |
| es_url_prefix       | （可选的） Elasticsearch 端点的 URL 前缀。                                                                                                  |
| es_send_get_body_as | （可选的） 查询 Elasticsearch 方法- GET，POST 或 source，默认是 GET。                                                                       |
| writeback_index     | 是 ElastAlert 将存储数据的索引名称。                                                                                                        |
| alert_time_limit    | 是失败警报的重试窗口。                                                                                                                      |

配置规则

```yaml
 规则名称(唯一)
name: Aalinesno服务异常
type: change
 索引
index: alinesno-*
 The field to look for changes in
compare_key: message
 Ignore documents without the compare_key (country_name) field
ignore_null: true
 (Required, change specific)
 关键字查询
query_key: ERROR
 (Required, change specific)
 The value of compare_key must change in two events that are less than timeframe apart to trigger an alert
timeframe:
  minutes: 15
```

#### rule

设置各自独立以文件方式存储在 rules_folder 设置的目录里。其中可以定义下面这些参数：

| 名称      | 说明                                                                                                                                                                                                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | 每个规则需要有自己独立的名称，一旦重复，进程将无法启动。                                                                                                                                                              |
| type      | 选择某一种数据验证方式。                                                                                                                                                                                              |
| index     | 从某类索引里读取数据，目前已经支持 Ymd 格式，需要先设置 use_strftime_index：true，<br/>然后匹配索引，配置形如：index：logstash-es-test-％Y。％m。％d，表示匹配 logstash-ES-测试名称开头，以年月日作为索引后缀的索引。 |
| filter    | 设置向 ES 请求的过滤条件。                                                                                                                                                                                            |
| timeframe | 累积触发报警的时长。                                                                                                                                                                                                  |
| alert     | 设置触发报警时执行哪些报警手段。                                                                                                                                                                                      |

#### type

不同的类型还有自己独特的配置选项。目前 ElastAlert 有以下几种自带 ruletype：

| 名称        | 说明                                                                                                                                                                                                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| any         | 只要有匹配就报警;                                                                                                                                                                                                                                                                                   |
| blacklist   | compare_key 字段的内容匹配上 blacklist 数组里任意内容;                                                                                                                                                                                                                                              |
| whitelist   | compare_key 字段的内容一个都没能匹配上 whitelist 数组里内容;                                                                                                                                                                                                                                        |
| change      | 在相同 query_key 条件下，compare_key 字段的内容，在 timeframe 范围内发送变化;                                                                                                                                                                                                                       |
| frequency   | 在相同 query_key 条件下，timeframe 范围内有 num_events 个被过滤出来的异常;                                                                                                                                                                                                                          |
| spike       | 相同在 query_key 条件下，两个前后 timeframe 范围内数据量相差比例超过 spike_height。<br/>可以其中通过 spike_type 设置具体涨跌方向的英文 up，down，both。可以还通过 threshold_ref 设置要<br/>求上一个周期数据量的下限，threshold_cur 设置<br/>要求当前周期数据量的下限，如果数据量不到下限，也不触发; |
| flatline    | timeframe 范围内，量数据小于 threshold 阈值;                                                                                                                                                                                                                                                        |
| new_term    | fields 字段新出现之前 terms_window_size（默认 30 天）<br/>范围内最多的 terms_size（默认 50）个结果以外的数据;                                                                                                                                                                                       |
| cardinality | 在相同 query_key 条件下，timeframe 范围内 cardinality_field 的<br/>值超过 max_cardinality 或者低于 min_cardinality。                                                                                                                                                                                |

初始化

```shell
elastalert-create-index
elastalert-test-rule alinesno_rules/alinesno_rule.yaml
```

| 名称                        | 说明                                                                                                                                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| elastalert-create-index     | ElastAlert 会脚执行记录存放到一个 ES 索引中，该命令就是用来创建这个索引的，<br/>默认情况下，索引名叫 elastalert_status。其中有 4 个\_type，都有自己的@timestamp 字段，<br/>所以同样也可以用 kibana 来查看这个索引的日志记录情况。 |
| elastalert-rule-from-kibana | 从 Kibana 已保存的仪表盘中读取 Filtering 设置，帮助生成 config.yaml 里的配置。<br/>不过注意，它只会读取过滤，不包括查询。                                                                                                         |
| elastalert-test-rule        | 测试自定义配置中的规则设置。                                                                                                                                                                                                      |

运行

```shell
python -m elastalert.elastalert --config ./config.yaml --verbose --rule alinesno_rules/alinesno_rule.yaml
```

## 其它

- 略
