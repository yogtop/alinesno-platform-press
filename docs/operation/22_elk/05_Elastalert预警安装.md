# Elastalert 预警安装

## 本内容你将获得

- Elastalert 预警安装

## 教程安装

此处是单独找了一台阿里云服务器做预警使用,与 elk 服务器分离，此处的 Elastalert 使用的 python3 版本(python2 不再支持)

安装 pip

```shell
yum install python3   使用python3
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
sudo python3 get-pip.py     运行安装脚本
pip --version   查看版本
```

安装软件

```shell
 安装依赖包
yum install gcc libffi-devel python3-devel openssl-devel python3-setuptools git

 安装
git clone https://github.com/Yelp/elastalert.git
pip install -r requirements.txt
pip install "setuptools>=11.3"
python3 setup.py install

 安装 Elasticsearch 5.0+:
pip install "elasticsearch>=5.0.0"
```

配置

```shell
cp config.yaml.example config.yaml #基本信息
vim config.yaml
```

修改 config.yaml

```yaml
#将从该文件夹下读取*.yaml配置文件
rules_folder: alinesno_rules
#查询es中 elastalert_status 索引的频率，也可以是minutes，days 等等
run_every:
  hours: 1
 每两分钟查询
一次es 匹配 rules 的数据，存放到elastalert_status中
buffer_time:
  minutes: 2
#host
es_host: 127.0.0.1
#port
es_port: 31200

 可选的认证方式
 es_username: username
 es_password: pwd
```

规则配置 alinesno_rule.yaml

```yaml
es_host: 127.0.0.1
es_port: 9200
es_username: xxx
es_password: xxx

 (Required)
 Rule name, must be unique
 给rule一个唯一的名字
name: prod

 (Required)
 Type of alert.下面各种type详细介绍
type: any
#注意了！！！！
#这是最大的坑，而且官方文档也没有比较明确的说明，elastalert只会把一条hit的记录发送给你，如果你想获取多条需要使用聚合功能，
aggregation:
  "* * * * *" means: run as the "run_every" in config.yaml
 schedule: "* * * * *"
aggregate_by_match_time: true

 (Required)
 sd asd Index to search, wildcard supported
index: '*-prod-*'


 (Required)
#这里使用的是ES 的DSL语句做过滤条件
filter:
#逻辑组合
- bool:
    #必须存在
    must:
      - match:
          level: "ERROR"
    #必须不存在，即过滤掉的
    must_not:
      - match:
          stackTrace: "org.apache.catalina.connector.ClientAbortException: java.io.IOException: Broken pipe"
      - match:
          message: "[SUCCESS]"

 (Required)
 报警方式，有邮件 jira等等，github上还有微信等,官网介绍https://elastalert.readthedocs.io/en/latest/ruletypes.html#alerts
#我用的是command 即执行一个命令，比较灵活一些
alert:
- command
#- email
pipe_match_json: true #把参数以json文件流的形式传入，python中以 sys.stdin.read()接受
command: ["/root/elastalert/alinesno_rules/command_alert.py"]
```

rule 设置各自独立以文件方式存储在 rules_folder 设置的目录里。其中可以定义下面这些参数：

| 参数      | 说明                                                                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | 配置，每个规则需要有自己独立的名称，一旦重复，进程将无法启动。                                                                                                                                                         |
| type      | 配置，选择某一种数据验证方式。                                                                                                                                                                                         |
| index     | 配置，从某类索引里读取数据，目前已经支持 Ymd 格式，需要先设置 use_strftime_index：true，然后匹配索引，配置形如：index：logstash-es-test-％Y。％m。％d，表示匹配 logstash-ES-测试名称开头，以年月日作为索引后缀的索引。 |
| filter    | 配置，设置向 ES 请求的过滤条件。                                                                                                                                                                                       |
| timeframe | 配置，累积触发报警的时长。                                                                                                                                                                                             |
| alert     | 配置，设置触发报警时执行哪些报警手段。                                                                                                                                                                                 |

type:不同的类型还有自己独特的配置选项。目前 ElastAlert 有以下几种自带 ruletype：

| 参数        | 说明                                                                                                                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| any         | 只要有匹配就报警;                                                                                                                                                                                                                                                                    |
| blacklist   | compare_key 字段的内容匹配上 blacklist 数组里任意内容;                                                                                                                                                                                                                               |
| whitelist   | compare_key 字段的内容一个都没能匹配上 whitelist 数组里内容;                                                                                                                                                                                                                         |
| change      | 在相同 query_key 条件下，compare_key 字段的内容，在 timeframe 范围内发送变化;                                                                                                                                                                                                        |
| frequency   | 在相同 query_key 条件下，timeframe 范围内有 num_events 个被过滤出来的异常;                                                                                                                                                                                                           |
| spike       | 相同在 query_key 条件下，两个前后 timeframe 范围内数据量相差比例超过 spike_height。可以其中通过 spike_type 设置具体涨跌方向的英文 up，down，both。可以还通过 threshold_ref 设置要求上一个周期数据量的下限，threshold_cur 设置要求当前周期数据量的下限，如果数据量不到下限，也不触发; |
| flatline    | timeframe 范围内，量数据小于 threshold 阈值;                                                                                                                                                                                                                                         |
| new_term    | fields 字段新出现之前 terms_window_size（默认 30 天）范围内最多的 terms_size（默认 50）个结果以外的数据;                                                                                                                                                                             |
| cardinality | 在相同 query_key 条件下，timeframe 范围内 cardinality_field 的值超过 max_cardinality 或者低于 min_cardinality                                                                                                                                                                        |

安装完成后会自带三个命令：

| 参数                               | 说明                                                                                                                                                                                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| elastalert-create-index ElastAlert | 会把执行记录存放到一个 ES 索引中，该命令就是用来创建这个索引的，默认情况下，索引名叫 elastalert_status。其中有 4 个\_type，都有自己的 @timestamp 字段，所以同样也可以用 kibana 来查看这个索引的日志记录情况。 |
| elastalert-rule-from-kibana        | 从 Kibana3 已保存的仪表盘中读取 Filtering 设置，帮助生成 config.yaml 里的配置。不过注意，它只会读取 filtering，不包括 queries。                                                                               |
| elastalert-test-rule               | 测试自定义配置中的 rule 设置。                                                                                                                                                                                |

最后，运行命令:

```python
python3 -m elastalert.elastalert --config ./config.yaml
```

或者单独执行 rules_folder 里的某个 rule：

```python
python3 -m elastalert.elastalert --config ./config.yaml --rule ./examele_rules/one_rule.yaml
```
