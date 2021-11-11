## 客户端使用 iframe 嵌套

<p class="show-images"><img src="/images/undraw_art_0tat.svg" width="40%" /></p>

### 概要

不同的系统各自都有自己风格的登录界面，接入 CAS 的单点登录时，可以使用 iframe 嵌套的方式实现 SSO。

### 使用说明

需要一个能够访问页面的 https 项目，不然 Cas 会不允许访问，访问 Cas 域名带上 iframe 参数获取登录框样式。
这里做了一个简单的 setTimeout 函数用于网页跳转，接入端应用前端页面如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录界面</title>
</head>

<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>

<script>

    $(document).ready(function () {

        var cas_loginUrl = "http://localhost:8280/cas/login?iframe";
        // 获取访问路径回调地址
        var service = GetQueryString("service");

        if (service == null) {
            $('#myIframe').attr('src', cas_loginUrl);
        } else {
            cas_loginUrl = cas_loginUrl + "&service=" + service;
            $('#myIframe').attr('src', cas_loginUrl);
        }
    });

</script>
<body>

<h2>Iframe方式嵌入Cas Server自定义登录页</h2>
<iframe id="myIframe" src="" style="height: 430px; width: 400px;">

</iframe>
<script>
    //接收子窗口消息
    window.addEventListener("message", function (e) {
        console.info('来自子窗口:', e);
        setTimeout(function () {
            // 必须decodeURIComponent页面才刷新，否则有问题
            window.location.replace(decodeURIComponent(JSON.parse(e.data).target));
        }, 1000)
    }, false);
</script>
</body>
</html>
```

以下网页 url 只做演示，点击登录后会进行父级跳转。

<p class="show-images"><img src="/images/iframe_login.png" width="100%" /></p>
<p class="show-images"><img src="/images/iframe_success.png" width="100%" /></p>

### 其它

- 略
