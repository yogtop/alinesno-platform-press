## Mybatis 集成

<p class="show-images"><img src="/images/undraw_coffee_break_j3of.svg" width="40%" /></p>

### 概述

Mybatis 是通用且常用的数据操作，平台集成 jpa+mybatis 整合，便于应用多种业务场景和多种开发技术，兼容前期的技术，此处选型的 mybatis 框架为[tk-mybatis]，
平台使用 jpa 维护数据库字段，tk-mybatis 操作数据库。

### 集成方式

添加依赖:

```xml
<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper-spring-boot-starter</artifactId>
    <version>2.1.5</version>
</dependency>
```

添加扫描 mybatis 映射注解

```java
// 例如
@MapperScan(basePackages = "com.example.demo.mapper")
```

示例 mapper 类，如下:

```java
import com.example.demo.entity.UserEntity;
import tk.mybatis.mapper.MyMapper;

public interface UserEntityMapper extends MyMapper<UserEntity> {

}
```

### 其它

- 后期待整合到代码生成器中
