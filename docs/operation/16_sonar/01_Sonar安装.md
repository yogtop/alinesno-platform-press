# sonarqube7.4 安装

## snarqube 安装说明

条件限制：
1、jdk1.8
2、数据库 oracle 的运行环境是 jre8 ,mysql 支持 5.6 ，5.7
3、浏览器必须启动支持 javascript ，支持火狐，谷歌，苹果等浏览器，支持 IE11 以上的版本。

## 下载 Sonar

链接：https://pan.baidu.com/s/10FIvnR0Me48EFG2kGX1vUg
提取码：v430

## 上传解压

```bash
mkdir sonarqube
上传到目录 /opt/alinesno/sonarqube
解压: unzip sonarqube-7.4.zip
```

## 新建 sonar 用户

由于 sonar 是不允许 root 用户情况下运行的，因此需要先创建一个非 root 用户。 这里，创建一个名为 sonar 的用户
useradd sonar
设置密码
passwd sonar
密码为：Alinesno123$%^123

## 设置目录权限

```bash
chmod -R 777 sonarqube-7.4
```

执行完以后,使用 ll 命令查看目录下文件详细,发现权限已经全部打开了,所有用户都可访问

## 设置文件所属用户

```bash
chown -R sonar:sonar /opt/alinesno/sonarqube/sonarqube-7.4
```

## 修改配置文件

```bash
cd /sonarqube-7.4/conf
vim sonar.properties
# 修改以下内容
sonar.jdbc.url=jdbc:mysql://47.113.116.150:3306/qjfsonar?useUnicode=true&characterEncoding=utf8&rewriteBatchedStatements=true&useConfigs=maxPerformance
sonar.jdbc.username=root
sonar.jdbc.password=HouGuiYu@123!@#
sonar.sorceEncoding=UTF-8
sonar.login=admin
sonar.password=admin
```

这里是修改数据库配置，请务必在事先创建好名为 qjfsonar 的数据库，否则将启动失败

## 启动 sonarqube

```bash
cd /opt/alinesno/sonarqube/sonarqube-7.4/bin/linux-x86-64

bash sonar.sh  start     #启动服务
bash sonar.sh stop       #停止服务
bash sonar.sh restart    #重启服务
```

查看日志

```bash
tail -F sonarqube-7.4/logs/sonar.log
```

## 访问 sonarqube

访问 <http://sonarqube.lbxinhu.com/>
登录：admin/admin
设置 token 为:alinesno
这里生成的密码串为 alinesno: 37231eae21cf053709a1fc93b99ba4503a91b532，请注意保存

## 中文插件的安装

7.4 版本的只能使用 sonar-l10n-zh-plugin-1.24 版的中文插件
下载完成后，将插件包上传至/extensions/plugins 目录中，重启 sonar 生效

# 添加 sonarqube 开机自启动

```bash
cd /etc/rc.d
vim rc.local
 sonarqube开机自启
/opt/alinesno/sonarqube/sonarqube-7.4/bin/sonar.sh  start
```

保存后退出

# 添加 maven 配置

在全局的 settings 文件中加入如下配置:

```bash
</profiles>
    <profile>
                <id>sonarqube</id>
                <activation>
                        <activeByDefault>true</activeByDefault>
                        <jdk>1.8</jdk>
                </activation>
                <properties>
                        <!--
                        <sonar.host.url>http://sonarqube.lbxinhu.com</sonar.host.url>
                        <sonar.host.url>http://localhost:9000</sonar.host.url>
                        -->
                        <sonar.host.url>http://localhost:9000</sonar.host.url>
                        <sonar.login>37231eae21cf053709a1fc93b99ba4503a91b532</sonar.login>
                        <sonar.password></sonar.password>
                        <sonar.inclusions>**/*.java,**/*.xml</sonar.inclusions>
                </properties>
    </profile>
</profiles>

    <!--激活profile -->
    <activeProfiles>
        <activeProfile>linesno</activeProfile>
        <activeProfile>sonarqube</activeProfile>
    </activeProfiles>
```

由于是设置 token 为 sonar 的身份认证信息，所以 password 留空即可

# 在 nginx 中配置超时设置

vim sonarqube.lbxinhu.com.conf
添加一下内容

```bash
server {
        listen       80 ;
        server_name  sonarqube.lbxinhu.com;

        location / {
                 proxy_pass http://47.113.116.150:9000/;   #来自jsp请求交给tomcat处理
                proxy_pass http://localhost:9000/;   #来自jsp请求交给tomcat处理
                proxy_redirect off;
                proxy_next_upstream_tries 3;     超时重复请求次数
                proxy_set_header Host $host;    #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                client_max_body_size 10m;   #允许客户端请求的最大单文件字节数
                client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数
                proxy_connect_timeout 600;   #nginx跟后端服务器连接超时时间(代理连接超时)
                proxy_read_timeout 600;      #连接成功后，后端服务器响应时间(代理接收超时)
                proxy_buffer_size 4k;       #设置代理服务器（nginx）保存用户头信息的缓冲区大小
                proxy_buffers 6 32k;        #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置
                proxy_busy_buffers_size 64k;#高负荷下缓冲大小（proxy_buffers*2）
                proxy_temp_file_write_size 64k; #设定缓存文件夹大小，大于这个值，将从upstream服务器传
        }

}
```

# 使用 sonar 执行分析时的注意事项

1、出现 sonar 权限不足异常
参考解决方案：在 sonar:sonar 后添加身份信息，如

```bash
  mvn sonar:sonar \
  -Dsonar.host.url=http://sonarqube.lbxinhu.com \
  -Dsonar.login=37231eae21cf053709a1fc93b99ba4503a91b532
```

2、出现`Please provide compiled classes of your project with sonar.java.binaries property`
错误分析：sonar 执行代码分析时，会涉及到其他编译后源码的分析，由于没有编译导致源码缺失报错

参考解决方案:
在执行 maven 的 compile 命令后再执行 sonar:sonar
如

```bash
mvn  -B -U -f ${WORKSPACE}/pom.xml clean compile sonar:sonar
```
