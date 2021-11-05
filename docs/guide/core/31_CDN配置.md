## CDN 配置

### 场景

CDN 配置是为了加快页面访问速度，做到动静分离，适用于统一的静态文件

### 配置方法

配置 yaml 文件

```yaml
alinesno:
  global:
    cdn: ${CDN:http://training-static.alinesno.com}
```

CDN 配置在静态文件前面添加`${cdn}`

```html
// css文件
<link th:href="@{${cdn}+'/asserts/constom/css/ry-ui.css'}" rel="stylesheet" />

// js文件
<link th:href="@{${cdn}+'/asserts/ajax/libs/bootstrap-table/bootstrap-table.min.css'}" rel="stylesheet"/>
```

### 其它

- 略
