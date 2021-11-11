# Git 安装教程

## 本内容你将获得

> 注:本教程只为 Mac 安装使用 git,为本地电脑使用,Windows 版本请下载 windows 版本，windows 的命令类似

- git 的安装和使用教程
- gitee 配置及使用
- SourceTree 安装及使用

## 安装 Git

### 安装说明

- 方法一:软件从网盘下载,软件点击安装即可,一路`next`
- 方法二:使用 brew 安装`brew install git`

### 生成 SSH

```
ssh-keygen -t rsa  // 生成个人密钥
```

> 生成的密钥会在~/.ssh 目录下有`id_rsa.pub`,这个是公钥,一下配置 gitee 的时候需要用到

## gitee 的使用

### 说明

为什么使用 gitee 的原因，一方面是速度上，另一个方面是国内软件的支持，不过装 B 格调确实下降了不少，当然，不想同时维护两个账号，感觉没什么必要,还有一个主要的原因是可以创建私人项目，而在`github`上面貌似要付费，无法接受:-(

> 企业内部建议使用 gitlab

### 配置 ssh 密钥

- 申请注册账号: http://gitee.com ，此处书到简言
- **[右上角头像]**--> **[设置]** --> **[SSH 公钥]**,进入到公钥设置界面有详细说明，此处书到简言

### 建立一个新的 gitbook 工程

- 此处书到简言

## 安装 SourceTree

> 此得说明，此环境为个人开发环境使用，公司请支持正版，当然，我肯定是有心无力的 :-)

### 安装说明

| 序号 | 版本    | 系统      | 是否可破解 |
| ---- | ------- | --------- | ---------- |
| 1    | 2.7.6   | MacOS     | 可以       |
| 2    | 1.9.6.1 | Windows10 | 可以       |

`其它版本未安装过`

### 优雅安装

- 第一次安装不需要安装完成,在进入到需要登陆界面的时候，可以停止安装，关闭即可,然后按以下步骤操作
- 进入用户空间下的目录
  ```shell
  cd ~/xxxxx
  ```
  > Windows10 的目录有点差别,Windows10 不是默认 Administrator 用户
- 添加`account.json`文件,文件内容如下:
  ```json
  [
    {
      "$id": "1",
      "$type": "SourceTree.Api.Host.Identity.Model.IdentityAccount, SourceTree.Api.Host.Identity",
      "Authenticate": true,
      "HostInstance": {
        "$id": "2",
        "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountInstance, SourceTree.Host.AtlassianAccount",
        "Host": {
          "$id": "3",
          "$type": "SourceTree.Host.Atlassianaccount.AtlassianAccountHost, SourceTree.Host.AtlassianAccount",
          "Id": "atlassian account"
        },
        "BaseUrl": "https://id.atlassian.com/"
      },
      "Credentials": {
        "$id": "4",
        "$type": "SourceTree.Model.BasicAuthCredentials, SourceTree.Api.Account",
        "Username": "username@email.com"
      },
      "IsDefault": false
    }
  ]
  ```
- 修改之后，重新打开即可，安装的时候，选择中文(如果英文也可以)

### 使用 SourceTree

#### Clone 项目

- 打开 SourceTree，点击左上角`克隆`,将刚刚的 gitee 建立的工程复制到 SourceTree 的地址中
- 进入到目录 git 目录中执行`gitbook`命令
  ```shell
  gitbook init    //初始化book
  gitbook serve   //启动gitbook
  ```

#### Commit 项目

- 添加`_book`到文件`.gitignore`(没有则创建),提交的时候，不必要提交

## 参考资料

- [GitBook 官网](http://www.baidu.com)
