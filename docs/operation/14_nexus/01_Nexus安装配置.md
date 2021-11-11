# Nexus 安装及权限配置

## Nexus 安装

### 上传安装

上传 Nexus 至 Linux 服务器`/home/alinesno/soft`目录

> 此处用户可以使用 xftp 或者 xshell 等工具，书要简言

```bash
示例: scp -r nexus-2.14.1-01-bundle.tar.gz alinesno@192.168.1.110:~/soft/
```

安装 nexus

```bash
# 创建目录
mkdir -p ~/nexus
tar -zxvf ~/soft/nexus-2.14.1-01-bundle.tar.gz -C ~/nexus/
```

> Nexus 的私服库会默认安装在~/.m2 目录下面，此处我们使用的默认的即可

启动 nexus

```bash
cd ~/nexus/nexus-2.14.1-01/bin
export RUN_AS_USER=root
./nexus start
```

访问http://192.168.1.110:8081/nexus ,出现如下界面:

<img :src="$withBase('/operation/nexus_01.png')">

### 国内代理库

> 管理员账号:`admin/1234qwer`

> 开发人员账号:`deployment/1234qwer`(后面配置使用统一使用开发人员账号)

登陆 nexus,默认密码`admin/admin1234`,修改密码为:`1234qwer`:

<img :src="$withBase('/operation/nexus_02.png')">

修改开发人员密码

<img :src="$withBase('/operation/nexus_06.png')">

添加阿里云库

<img :src="$withBase('/operation/nexus_03.png')">

填写配置库配置信息,点击保存即可

```properties
Repository ID: Aliyun
Repository Name: Aliyun
Remote Storage Location: http://maven.aliyun.com/nexus/content/groups/public/
```

<img :src="$withBase('/operation/nexus_04.png')">

将阿里云库添加到公共库中（公共库为对外统一库，maven 连接使用的就是这个库)

<img :src="$withBase('/operation/nexus_05.png')">

配置点击保存即可

## 添加 nexus 开机自启动

```bash
cd /etc/rc.d
vim rc.local
 nexus开机自启
/root/nexus/nexus-2.14.1-01/bin/nexus start
```

保存后退出

## 添加 nexus 在 nginx 中的配置

vim nexus.lbxinhu.com.conf

```bash
server {
        listen       80 ;
        server_name  nexus.lbxinhu.com;

        location /nexus {
         http://47.113.116.150 :8081/nexus/#welcome
                proxy_pass http://127.0.0.1:8081/nexus ;   #来自jsp请求交给tomcat处理
                proxy_cookie_path  / /;
                proxy_redirect off;
                proxy_set_header Host $host;    #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        client_max_body_size 100m;   #允许客户端请求的最大单文件字节数
        client_body_buffer_size 100m; #缓冲区代理缓冲用户端请求的最大字节数
        proxy_connect_timeout 600;   #nginx跟后端服务器连接超时时间(代理连接超时)
        proxy_read_timeout 600;      #连接成功后，后端服务器响应时间(代理接收超时)
         proxy_buffer_size 32k;       #设置代理服务器（nginx）保存用户头信息的缓冲区大小
         proxy_busy_buffers_size 128k; #高负荷下缓冲大小（proxy_buffers*2）
        proxy_temp_file_write_size 24m; #设定缓存文件夹大小，大于这个值，将从upstream服务器传
        }

}
```

<!-- ## Ansible构建 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ## 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
