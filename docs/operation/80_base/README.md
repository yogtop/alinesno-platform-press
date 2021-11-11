# 基础开发环境搭建

此章节引用 docker 快速搭建基础开发环境,给不同部门使用,其中主要包括的部门有开发、测试、运维

## 目标

- 基础持续集成(开发)
- 基础平台开发环境(开发)
- 基础集成环境(测试)
- 基础监控环境(运维)

## 建设内容

### 研发测试阶段

> 搭建使用 docker-compose 搭建，放于一台或者多台虚拟机甚至本地开发，便于管理及维护

1. 命令

| 序号 | 描述         | 对应文件资源              | 工具                                        | 对应部门  | 备注                 |
| ---- | ------------ | ------------------------- | ------------------------------------------- | --------- | -------------------- |
| 1    | 基础搭建集成 | 01_dev_cicd_compose.yml   | jenkins/nexus/harbor(可选)                  | 中台      | 代码管理统一安装管理 |
| 2    | 基础开发工具 | 02_dev_tool_compose.yml   | redis/kafka/mysql                           | 开发      |                      |
| 3    | 基础注册环境 | 03_dev_eureka_compose.yml | eureka/bootadmin/apollo                     | 开发      |                      |
| 4    | 基础集成环境 | 04_dev_boot_compose.yml   | boot/boot-web/logger/notice/message/storage | 开发/测试 |                      |
| 5    | 基础监控环境 | 05_dev_monitor_compse.yml | elk/skywalking/portainer                    | 开发测试  |                      |

运行方式:docker-compose -f xxxx.yml up -d

2. 平台地址

| 序号 | 描述         | 地址      | 账户密码                                    | 对应部门  | 备注                 |
| ---- | ------------ | --------- | ------------------------------------------- | --------- | -------------------- |
| 1    | 基础搭建集成 | jenkins   | jenkins/nexus/harbor(可选)                  | 中台      | 代码管理统一安装管理 |
| 2    | 基础开发工具 | nexus     | redis/kafka/mysql                           | 开发      |                      |
| 3    | 基础注册环境 | mysql     | eureka/bootadmin/apollo                     | 开发      |                      |
| 4    | 基础集成环境 | apollo    | boot/boot-web/logger/notice/message/storage | 开发/测试 |                      |
| 5    | 基础监控环境 | portainer | elk/skywalking/portainer                    | 开发测试  |                      |

### 准生产及生产阶段

> 搭建使用 ansible 搭建，放于多台虚拟机上，便于管理及维护

| 序号 | 描述         | 对应文件资源                 | 对应部门  | 备注 |
| ---- | ------------ | ---------------------------- | --------- | ---- |
| 1    | 基础搭建集成 | 01_product_cicd_compose.py   | 运维      |      |
| 2    | 基础开发环境 | 02_product_dev_compose.py    | 运维      |      |
| 3    | 基础集成环境 | 03_product_boot_compose.py   | 开发/测试 |      |
| 4    | 基础监控环境 | 04_product_monitor_compse.py | 运维      |      |

## 其它

- 暂无
