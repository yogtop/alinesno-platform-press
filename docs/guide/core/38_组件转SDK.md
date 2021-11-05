## 组件转 SDK

<p class="show-images"><img src="/images/undraw_coffee_break_j3of.svg" width="40%" /></p>

### 概述

组件转 SDK 是平台组件化的重要一步，由于业务的差异性和算法的差异性，同时也包含个性化要求等，
所以组件转 SDK，便于其它组件依赖

### SDK 架构设计

<p class="show-images"><img src="/images/sdk_02.png" width="70%" /></p>

##### 架构说明

- SDK 组件：SDK 组件一定是 Jar 包，与基础组件不一样
- 稳定性：SDK 组件是`Release`版本，即使有错误，也只能在新版本修复
- 可扩展性：SDK 组件组件要可继承的，可依赖的，可扩展的，所以变量的修饰符和接口定义非常重要
- 可拔插性：SDK 的依赖需要一定的便利性，可拔插
- 不可传递性：SDK 的依赖需要自己的单独包，而避免对其它工程的影响，部分包不可传递性有一定的必要性

`不可传递性使用maven的<optional>true</optional>字段处理`

### 组件操作

以下为添加工作流组件为示例

添加`Enable`说明，例如

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@EnableJpaRepositories
@Import({
	WorkflowConfigurationSelector.class,
	WorkflowEntityDefinitionRegistrar.class,
	WorkflowRepositoryDefinitionRegistrar.class
})
public @interface EnableWorkflow {

	boolean autoRegister() default true;
	String[] jpa() default {};
	String[] entity() default {};

	//--------------- JPA特定的属性，为与默认JPA的兼容，保留不必修改----------------------
	Filter[] includeFilters() default {};
	Filter[] excludeFilters() default {};
	Class<?> repositoryFactoryBeanClass() default JpaRepositoryFactoryBean.class;
	String namedQueriesLocation() default "";
	String repositoryImplementationPostfix() default "Impl";
	String transactionManagerRef() default "transactionManager";
	String entityManagerFactoryRef() default "entityManagerFactory";
	boolean enableDefaultTransactions() default true;
	//--------------- JPA特定的属性，为与默认JPA的兼容，保留不必修改----------------------

}
```

添加`Entity`注册说明，例如

```java
public class WorkflowEntityDefinitionRegistrar extends ConstomEntityDefinitionRegistrar {

	@Override
	public String[] getBusinessBackPackage() {
		return new String[] {EnableWorkflow.class.getPackage().getName()+".entity"};
	}

	@Override
	public Class<? extends Annotation> getAnnotation() {
		return EnableWorkflow.class ;
	}

}
```

添加`Repository`注册操作，例如

```java
public class WorkflowRepositoryDefinitionRegistrar extends ConstomRepositoryDefinitionRegistrar {

	@Override
	public String[] getBusinessBackPackage() {
		return new String[] {EnableWorkflow.class.getPackage().getName()+".repository"};
	}

	@Override
	protected Class<? extends Annotation> getAnnotation() {
		return EnableWorkflow.class ;
	}

}
```

添加`Componse`操作，例如

```java
public class WorkflowConfigurationSelector extends CustomAutoConfigurationImportSelector {

	@Override
	public String[] selectImports(AnnotationMetadata importingClassMetadata) {
		return this.scanComponent();
	}

	@Override
	protected Class<?> getAnnotationClass() {
		return EnableWorkflow.class;
	}

}
```

工程结构如下：

<p class="show-images"><img src="/images/sdk_01.jpg" width="100%" /></p>

### 其它

- 后期待整合到代码生成器中
