# GitBook 安装教程

## 本内容你将获得

> 注:本教程只为 Mac 安装使用 gitbook,为本地电脑使用,Windows 版本请下载 windows 版本 node，windows 的命令类似

- gitbook 的安装和使用教程
- gitbook 自定义样式

## 安装 gitbook

### 安装 node

软件从网盘下载,软件点击安装即可,一路`next`

### 查看 node 版本

```shell
node -v
npm -v
```

### 安装 gitbook

```shell
npm install -g gitbook  // 安装gitbook
npm install -g gitbook-cli  // 安装gitbook命令工具，在命令行中使用
gitbook -V  //查看gitbook版本
```

### 运行 gitbook 电子书

```shell
mkdir -p ~/Desktop/mybook   // 其中~代表当前用户下
cd ~/Desktop/mybook
gitbook init  //初始化脚本,此命令执行完成,会出现两个文件(README.md/SUMMARY.md)
gitbook serve  //运行gitbook,同时生成_book文件夹,浏览器访问的就是这个目录
```

访问地址[http://localhost:4000](http://localhost:4000),查看电子书

### 自定义样式及标题

新建议`book.json`文件:

```shell
vim book.json
```

输入以下内容,默认的 gitbook 样式文本宽度太小(max-width:800px),这里定义成`980px`,便于查看

```json
{
  "title": "基础环境安装",
  "isbn": "978-3-16-148410-0",
  "language": "zh",
  "direction": "ltr",
  "styles": {
    "website": "styles/website.css"
  }
}
```

styles 文件夹与 REAME.md 同级，在构建的时候，gitbook 会自动加载构建,放在`_book`目录文件夹下面，重新构建会被删除

```css
.page-inner {
  max-width: 980px !important ;
}
```

## 参考资料

- [GitBook 官网](https://github.com/GitbookIO/gitbook)
