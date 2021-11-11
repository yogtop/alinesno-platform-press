# Jira 软件安装及优化

> Jira 是基于 java 开发的软件，所以 JDK 是必须的，JDK1.7/1.8 都可以。

### 服务器安装

上传软件至 Linux 服务器`/home/alinesno/soft/`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

```bash
scp -r atlassian-jira-software-7.4.1-x64.bin alinesno@192.168.1.110:~/soft/
scp -r mysql-connector-java-5.1.39-bin.jar alinesno@192.168.1.110:~/soft/
scp -r atlassian-extras-3.2.jar alinesno@192.168.1.110:~/soft/
```

安装数据库请看对应章节，为 Jira 创建对应的数据库、用户名和密码

```bash
create database alinesno_cloud_platform_jira default character set utf8 collate utf8_bin;
grant all on jira.* to 'jira'@'localhost' identified by '1234qwer';
flush privileges;
```

运行权限并安装,此处端口设置为`18080`和`18085`,不使用默认端口，避免冲突

```bash
chmod +x atlassian-jira-software-7.4.1-x64.bin
./atlassian-jira-software-7.4.1-x64.bin
```

开放防火墙端口

```bash
firewall-cmd --add-port=18080/tcp --permanent
firewall-cmd --add-port=18005/tco --permanent
firewall-cmd --reload
# jira日志:
tail -f /opt/atlassian/jira/logs/catalina.out
```

添加 mysql 数据库支持

```bash
# 上传mysql驱动
cp -a mysql-connector-java-5.1.39-bin.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
# 替换jira破解包
cp -a atlassian-extras-3.2.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
```

重启 jira 服务

```bash
service jira start
service jira start
##查看服务运行情况
ps -ef|grep jira
```

### Jira 客户端配置

浏览器里输入`http://$IP:18080` ,语言选择中文, 选择“我将设置它自己”，然后点击下一步：

数据库设置
点击其它数据库，选择 MySQL 数据库，配置数据库连接信息，配置好后，
先测试连接，再下一步，（提示：请等待数据库的设置。这可能会花费一分钟的时间）如果页面报无法正常运行，等数据入库完成后，再次刷新页面。
连接数据库的配置是`/var/atlassian/application-data/jira/dbconfig.xml`

### Jira 优化程序

点击生成 Jira 试用许可证"generate a JIRA trial license"申请试用，30 天，此处需要访问官网，到官网申请试用

<img :src="$withBase('/operation/jira_02.jpg')">

申请得到密钥

```
id: B4JH-GAVY-50CF-KU0P
key: AAABfQ0ODAoPeNp9kUFvgkAQhe/8CpJe2sMSRDStCUktbFutqBE1adLLFkfdBnbJ7GLrvy8CTbVij
7Pw5n3vzVUohdnP0HQc0+72nG7P7pp+MDcdu3VnbBBAbGWWAVojHoNQQFdccyk8Op7T2XQ2iKgxz
tN3wMl6oQCVR1qGL4VmsR6zFLwkl0yspLjfpIwnVixT44Mjs85E0xzjLVMQMA3ewZ3YLnEco/ad7
zMoF/qTMKQzf9Af/XyiXxnH/ZGuc9DVEDQsbJsoIsAd4CDwHtzhM3nqL19Jx/YfycvCnlaIGcpVH
mvrMBAl1/qTIVjFTr4DT2MO1W+Xi2morylGQSg0CCbiC1H+oTmrsfYpco0GQUTHZNRqu7dut9U2i
sk7fflncaQZakBvzRIFxgQ3THDFyoQs4QKUkEQDSw0foXz+e7ekAlkWXAeRc9IGFIExQ67qIgNQM
fKsXD8sOMyo5jCvqzvdvPVMumNJXnpV4Jcu0dTxsfmx7ndnNX8DiXwM7DAsAhQtJxzLvtZctApsW
+t4gS12hDJthAIUTRN37qVChweiXfzb5fH2gMFbf10=X02ii
```

下一步配置申请权限，此处这一步需要等一段时间，可以看 jira 的日志

```bash
tail -100f /opt/atlassian/jira/logs/catalina.out
```

<img :src="$withBase('/operation/jira_03.jpg')">

等待安装完成,配置邮件发送按前期项目组公共邮件即可.

<img :src="$withBase('/operation/jira_04.jpeg')">

安装完成

<img :src="$withBase('/operation/jira_05.png')">

## Ansible 构建

- 脚本编写

## 镜像

- 构建镜像
- 使用

## 参考资料

- [RHEL/CentOS 安装 Jira 7.11.2](https://blog.51cto.com/moerjinrong/2287899)
