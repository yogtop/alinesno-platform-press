## Prometheus 监控

<p class="show-images"><img src="/images/undraw_winter_designer_a2m7.svg" width="40%" /></p>

### 概述

此处针对的是 prometheus 监控，通过提供参数值给 prometheus，然后在 grafana 显示

### 使用方法

监控配置已经在配置项目中添加，在所需要提供指标的应用添加监控依赖即可，如下：

```xml
<!-- prometheus监控_start -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
  <groupId>io.micrometer</groupId>
  <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
<!-- prometheus监控_end -->
```

访问链接`http://localhost:8080/actuator/prometheus`，效果如下:

<p class="show-images"><img src="/images/01_prometheus.png" width="100%" /></p>

在 grafana 的显示效果如下:

<p class="show-images"><img src="/images/02_prometheus.png" width="100%" /></p>

### 其它

- 略
