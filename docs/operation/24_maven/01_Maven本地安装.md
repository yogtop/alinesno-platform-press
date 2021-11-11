# Maven 配置

## 本章节你将获取

- maven 配置私服地址
- maven 插件账号配置

## 配置

### 添加本地环境变量

解压 maven

```bash
tar -zxvf apache-maven-3.6.0-bin.tar.gz
```

配置本地环境变量

```bash
vim ~/.bash_profile
```

添加 maven 环境变量

```bash
# maven env
# 此按本地实际目录配置
export M2_HOME=~/Downloads/apache-maven-3.6.0
export M2=$M2_HOME/bin
# export MAVEN_OPTS="-Xmx1048m -Xms256m -XX:MaxPermSize=312M"
export PATH=$M2:$PATH
```

使环境变量生效

```bash
source ~/.bash_profile
mvn -v  查看mvn命令
```

### 配置私服

修改`conf/settings.xml`文件

```bash
cd apache-maven-3.6.0
vim conf/settings.xml
```

替换内容为:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

	<!-- 本地地址 <localRepository>d://m2/repository</localRepository> -->

	<!--配置权限,使用默认用户 -->
	<servers>
		<server>
			<id>releases</id>
			<username>deployment</username>
			<password>1234qwer</password>
		</server>
		<server>
			<id>snapshots</id>
			<username>deployment</username>
			<password>1234qwer</password>
		</server>
	</servers>

	<mirrors>
		<mirror>
			<id>linesno-nexus</id>
            <mirrorOf>*</mirrorOf>
            <name>linesno nexus</name>
            <url>http://nexus.lbxinhu.com/nexus/content/groups/public</url>
		</mirror>
	</mirrors>

	<profiles>
		<profile>
			<id>alinesno</id>
			<activation>
				<activeByDefault>false</activeByDefault>
				<jdk>1.8</jdk>
			</activation>
			<repositories>
				<!-- 私有库地址 -->
				<repository>
					<id>nexus</id>
					<url>http://nexus.lbxinhu.com/nexus/content/groups/public/</url>
					<releases>
						<enabled>true</enabled>
					</releases>
					<snapshots>
						<enabled>true</enabled>
					</snapshots>
				</repository>
			</repositories>
			<pluginRepositories>
				<!--插件库地址 -->
				<pluginRepository>
					<id>nexus</id>
					<url>http://nexus.lbxinhu.com/nexus/content/groups/public/</url>
					<releases>
						<enabled>true</enabled>
					</releases>
					<snapshots>
						<enabled>true</enabled>
					</snapshots>
				</pluginRepository>
			</pluginRepositories>
		</profile>

		<profile>
			<id>sonarqube</id>
			<activation>
				<activeByDefault>true</activeByDefault>
				<jdk>1.8</jdk>
			</activation>
			<properties>
				<sonar.host.url>http://localhost:9000</sonar.host.url>
				<!-- <sonar.login></sonar.login>
                <sonar.password></sonar.password>
				-->
                <sonar.inclusions>**/*.java,**/*.xml</sonar.inclusions>
			</properties>
		</profile>

	</profiles>

	<!--激活profile -->
	<activeProfiles>
		<activeProfile>linesno</activeProfile>
		<activeProfile>sonarqube</activeProfile>
	</activeProfiles>

</settings>
```

### 测试

初始化 Maven

```bash
mvn help:system
```

本地构建打包,以工程`https://gitee.com/landonniao/alinesno-cloud-guide.git`为例子

> pom.xml 文件中的 nexus.repository 属性修改成私服地址的 IP,否则无法上传,关于例子，然后建立服务的时候，再具体说明。

```bash
git clone https://gitee.com/landonniao/alinesno-cloud-guide.git
cd alinesno-cloud-guide
# 测试maven命令(打包/本地安装/发布到私服)
mvn clean package install deploy
```

私服上查看包

<img :src="$withBase('/operation/nexus_07.png')">

此配置成功

### 配置 aliyun 镜像上传

阿里云镜像仓库地址

```
https://cr.console.aliyun.com
```

创建命名空间`alinesno-cloud`,如果没有创建空间则上传的时候出异常

配置 maven,在 settings.xml 添加阿里云认证，在`servers`标签里面添加

```xml
<server>
    <id>docker-aliyun</id>
    <username>阿里云账号</username>
    <password>仓库密码(非阿里云密码)</password>
    <configuration>
        <email>阿里云账号</email>
    </configuration>
</server>
```

在 parent 父类的`pom.xml`里面添加 docker 打包插件

```xml
<!-- docker registry 忏悔 -->
<docker.repostory>registry.cn-shenzhen.aliyuncs.com</docker.repostory>
<docker.registry.name>alinesno-cloud</docker.registry.name>
<docker.maven.plugin.version>0.4.13</docker.maven.plugin.version>

<!-- docker 插件 -->
<plugin>
    <groupId>com.spotify</groupId>
    <artifactId>docker-maven-plugin</artifactId>
    <version>${docker.maven.plugin.version}</version>
    <configuration>
        <!-- 镜像中心 -->
        <serverId>docker-aliyun</serverId>
        <registryUrl>${docker.repostory}</registryUrl>

        <!-- 优化参数 -->
        <forceTags>true</forceTags>
        <imageTags>
            <imageTag>${project.version}</imageTag>
            <imageTag>latest</imageTag>
        </imageTags>

        <!-- 打包 -->
        <imageName>${docker.repostory}/${docker.registry.name}/${project.artifactId}:${project.version}</imageName>
        <baseImage>java:8</baseImage>
        <entryPoint>["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/ROOT/${project.build.finalName}.jar"]</entryPoint>
        <resources>
            <resource>
                <targetPath>/ROOT/</targetPath>
                <directory>${project.build.directory}</directory>
                <include>${project.build.finalName}.jar</include>
            </resource>
        </resources>
    </configuration>
</plugin>
```

`插件里面的serverId要与maven配置的server的id要一样`

在 sts 中，打包镜像并上传命令

```bash
mvn clean package docker:build docker:push
```

<img :src="$withBase('/operation/maven_01.jpg')">

`上传速度看网络,建立在命令行中配置`

<!-- ## Ansible构建 -->

<!-- ## 镜像 -->
<!-- - 构建镜像 -->
<!-- - 使用 -->

<!-- ## 参考资料 -->
<!-- - [GitBook官网](http://www.baidu.com) -->
