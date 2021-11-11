# HelloWorld 工程

<!-- 用于开发人员项目指引工程，开发并不需要了解整个平台架构及内部结构，此对开发透明化， -->
<!-- 开发针对文档的示例及代码生成器即可生成现成代码，进行二次开发，无需要从零配置，更专注业务实现。 -->

## 概述

文档演示的是开发接入平台的例子，演示平台的基础能力

## 接入流程

1. 在项目 pom.xml 中添加右边的依赖配置

```xml
<!--引入依赖 -->
<dependencies>
	<dependency>
		<groupId>com.alinesno.cloud.common.web</groupId>
		<artifactId>alinesno-cloud-common-web-starter</artifactId>
	</dependency>
</dependencies>
<dependencyManagement>
	<dependencies>
		<dependency>
			<groupId>com.alinesno.cloud</groupId>
			<artifactId>alinesno-cloud-dependencies</artifactId>
			<version>2.1.0-SNAPSHOT</version>
			<type>pom</type>
			<scope>import</scope>
		</dependency>
	</dependencies>
</dependencyManagement>
<repositories>
	<repository>
		<id>alinesno</id>
		<url>http://repository.alinesno.com</url>
		<snapshots>
			<enabled>true</enabled>
		</snapshots>
	</repository>
</repositories>
```

2. 编写启动类并运行

```java
@SpringBootApplication(exclude = DruidDataSourceAutoConfigure.class)
@EnableLogin
public class AalinesnoApplication {
	public static void main(String[] args) {
		SpringApplication.run(AalinesnoApplication.class, args);
	}
}
```

3. 点击打开

```html
http://localhost:8080
```

4. 输入示例账号密码

```
account : crm@gmail.com
password: admin
```

<img :src="$withBase('/technique/04_project_demo_02.png')">

5. 整体工程如下图所求

<img :src="$withBase('/technique/04_project_demo_01.png')">
