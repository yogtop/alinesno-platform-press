var nav = require('./nav.js')
var { EcosystemNav, ComponentNav, BackendNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: '企业级数字化底座社区建设',
  description:
    '能够灵活满足企业数字化建设中各种场景的需要，更高效、专注的沉淀业务和数据能力，进而形成企业的业务和数据中台。通过能力的灵活组合，快速的应对当前快节奏的市场需求，助力企业数字化转型的成功。',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    logo: '/fox_header.png', // 注意图片放在 public 文件夹下
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 0,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'vue_element_admin'
    },
    plugins: {
      seo: {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page =>
          ['articles', 'posts', 'blog'].some(folder =>
            $page.regularPath.startsWith('/' + folder)
          )
            ? 'article'
            : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith('http')) ||
            '') + $page.frontmatter.image,
        publishedAt: $page =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
      }
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '数字规划',
            items: [
              { text: '数字平台规划', link: '/design/overview/' },
              { text: '研发中台规划', link: '/framework/' },
              { text: '业务中台规划', link: '/design/business/' },
              { text: '物联网中台规划', link: '/iot/' },
              { text: '数据中台规划', link: '/data/framework/' }
            ]
          },
          {
            text: '环境建设',
            items: [
              { text: '技术平台建设', link: '/operation/' },
              { text: '数据中台建设', link: '/data/onedata/' },
              { text: '研发中台建设', link: '/env/development/' }
            ]
          },
          {
            text: '中台建设',
            link: '/platform/'
          },
          {
            text: '组织架构',
            link: '/group/'
          },
          {
            text: '解决方案',
            link: '/solution/'
          },
          {
            text: '业务建设',
            link: '/business/'
          },
          {
            text: '建设教程',
            link: '/learn/'
          },
          {
            text: '使用手册',
            items: [
              { text: '前端手册', link: '/front/' },
              { text: '后端手册', link: '/technique/' }
            ]
          },
          {
            text: '关于',
            link: '/about/'
          }
        ],
        sidebar: {
          '/solution/': [
            {
              title: '解决方案',
              collapsable: false,
              children: genSolutionSidebar()
            },
            {
              title: '业务中台',
              collapsable: false,
              children: genAdvancedSidebar('/')
            },
            {
              title: '数据中台',
              collapsable: false,
              children: genAdvancedSidebar('/')
            }
          ],
          '/design/overview': [
            {
              title: '平台介绍',
              collapsable: false,
              children: genDesignSidebar(1)
            },
            {
              title: '平台架构',
              collapsable: false,
              children: genDesignSidebar(2)
            },
            {
              title: '项目规划',
              collapsable: false,
              children: genDesignSidebar(3)
            },
            {
              title: '建设规划',
              collapsable: false,
              children: genDesignSidebar(4)
            }
          ],
          '/design/business': [
            {
              title: '平台介绍',
              collapsable: false,
              children: genBusinessSidebar(1)
            }
          ],
          '/design/technique': [
            {
              title: '平台介绍',
              collapsable: false,
              children: genTechniqueSidebar(1)
            }
          ],
          '/iot/': [
            {
              title: '行业需求',
              collapsable: false,
              children: genSectorDemandSidebar()
            },
            {
              title: '物联网架构设计',
              collapsable: false,
              children: genIotSystemSidebar()
            },
            {
              title: '功能架构规划',
              collapsable: false,
              children: genFunctionPlanSidebar()
            },
            {
              title: '场景集成',
              collapsable: false,
              children: genSceneSidebar()
            }
          ],
          '/framework/': [
            {
              title: '平台介绍',
              collapsable: false,
              children: genFrameworkAboutSidebar()
            },
            {
              title: '平台需求',
              collapsable: false,
              children: genFrameworkRequireSidebar()
            },
            {
              title: '平台架构',
              collapsable: false,
              children: genFrameworkSidebar()
            },
            {
              title: '项目规划',
              collapsable: false,
              children: genPlanSidebar('/')
            },
            {
              title: '项目管理',
              collapsable: false,
              children: genManagerSidebar('/')
            },
            {
              title: '服务规划',
              collapsable: false,
              children: genServiceSidebar('/')
            },
            {
              title: '平台管理',
              collapsable: false,
              children: genFrameworkManagerSidebar()
            }
          ],
          '/front/': [
            {
              title: '环境搭建',
              collapsable: false,
              children: genEnvironmentSidebar()
            },
            {
              title: '开发接入',
              collapsable: false,
              children: genAccessSidebar()
            },
            {
              title: '开发规范',
              collapsable: false,
              children: genStandardSidebar()
            },
            {
              title: '开发技术',
              collapsable: false,
              children: genFrontSidebar()
            }
          ],
          '/operation': [
            {
              title: '自动化运维',
              collapsable: false,
              children: genAutoOperationSidebar()
            },
            {
              title: '管理环境',
              collapsable: false,
              children: genManagerOperationSidebar()
            },
            {
              title: '基础软件',
              collapsable: false,
              children: genBaseSoftwareSidebar()
            },
            {
              title: 'PaaS环境',
              collapsable: false,
              children: genEnvSidebar(2)
            },
            {
              title: '大数据环境',
              collapsable: false,
              children: genEnvSidebar(3)
            },
            {
              title: '运维环境',
              collapsable: false,
              children: genEnvSidebar(4)
            }
          ],
          '/data/framework/': [
            {
              title: '架构设计',
              collapsable: false,
              children: genDataFrameworkSidebar()
            },
            {
              title: '数仓设计',
              collapsable: false,
              children: genDataWarehouseDesignSidebar()
            },
            {
              title: '数仓采集',
              collapsable: false,
              children: genDataWarehouseCollectSidebar()
            },
            {
              title: '数仓分析',
              collapsable: false,
              children: genDataWarehouseAnalyzeSidebar()
            },
            {
              title: '数据可视化',
              collapsable: false,
              children: genDataVisualSidebar()
            },
            {
              title: '机器学习',
              collapsable: false,
              children: genMachineLearningSidebar()
            },
            {
              title: '数据管理系统',
              collapsable: false,
              children: genDataManagerSidebar()
            },
            {
              title: '运维监控',
              collapsable: false,
              children: genDataOperationSidebar()
            }
          ],
          '/platform/': [
            {
              title: 'PaaS平台',
              collapsable: false,
              children: genPlatformsSidebar()
            },
            {
              title: '业务中台',
              collapsable: false,
              children: genAdvancedSidebar('/')
            },
            {
              title: '数据中台',
              collapsable: false,
              children: genAdvancedSidebar('/')
            }
          ],
          '/group/': [
            {
              title: '组织架构',
              collapsable: false,
              children: genGroupSidebar()
            },
            {
              title: '组织架构',
              collapsable: false,
              children: genGroupSidebar()
            }
          ],
          '/business/': [
            {
              title: '业务建设',
              collapsable: false,
              children: genBusinessSidebar()
            }
          ],
          '/technique/': [
            {
              title: '目录规划',
              collapsable: false,
              children: genCatalogSidebar()
            },
            {
              title: '环境搭建',
              collapsable: false,
              children: genEnvironmentSidebar()
            },
            {
              title: '开发接入',
              collapsable: false,
              children: genAccessSidebar()
            },
            {
              title: '开发规范',
              collapsable: false,
              children: genStandardSidebar()
            },
            {
              title: '开发技术',
              collapsable: false,
              children: genTechniqueSidebar()
            },
            {
              title: '配置中心',
              collapsable: false,
              children: genConfigSidebar()
            },
            {
              title: '分布式技术',
              collapsable: false,
              children: genDubboSidebar()
            }
          ],
          '/learn/': [
            {
              title: '社区教程',
              collapsable: false,
              children: genLearnSidebar(1)
            },
            {
              title: '企业教程',
              collapsable: false,
              children: genLearnSidebar(2)
            },
            {
              title: '培训文档',
              collapsable: false,
              children: genLearnSidebar(3)
            }
          ],
          '/about/': [
            {
              title: '关于',
              collapsable: false,
              children: genAboutSidebar()
            }
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'A magical vue admin'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
}

/**
 * 视频教程菜单列表
 * @returns
 */
function genLearnSidebar(menus) {
  if (menus == 1) {
    const mapArr = [
      '/learn/02_初级培训员.md',
      '/learn/03_中级培训员.md',
      '/learn/04_高级培训员.md',
      '/learn/05_方案培训员.md'
    ]
    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    const mapArr = [
      '/learn/11_视频培训.md',
      '/learn/11_2_数字化平台视频教程.md',
      '/learn/12_直播培训.md'
    ]
    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    const mapArr = [
      '/learn/41_培训文档包.md',
      '/learn/42_高级培训文档.md',
      '/learn/43_软件工具包.md',
      '/learn/44_相关培训脚本.md'
    ]
    return mapArr.map(i => {
      return i
    })
  }
}

/**
 * 物联网中台架构建设
 * @returns
 */
function genSectorDemandSidebar() {
  const mapArr = ['/iot/', '/iot/plan.md']
  return mapArr.map(i => {
    return i
  })
}

function genIotSystemSidebar() {
  const mapArr = [
    '/iot/02_架构设计/01_业务架构设计.md',
    '/iot/02_架构设计/02_技术架构设计.md',
    '/iot/02_架构设计/03_AI视觉架构设计.md',
    '/iot/02_架构设计/04_服务规划.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genFunctionPlanSidebar() {
  const mapArr = ['/iot/03_功能架构/01_功能架构规划.md']
  return mapArr.map(i => {
    return i
  })
}

function genSceneSidebar() {
  const mapArr = [
    '/iot/04_场景案例/01_智慧社区场景.md',
    '/iot/04_场景案例/03_AI视觉场景.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 自动化运维管理
 * @returns
 */
function genAutoOperationSidebar() {
  const mapArr = [
    '/operation/',
    '/operation/document/01_基础规则.md',
    '/operation/env.md',
    '/operation/document/01_自动化操作脚本.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genManagerOperationSidebar() {
  const mapArr = [
    '/operation/01_gitbook/01_GitBook安装.md',
    '/operation/01_gitbook/02_Git安装.md',
    '/operation/02_email/01_邮件申请及开通客户端配置.md',
    '/operation/03_Jira/01_Jira软件安装及破解.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genBaseSoftwareSidebar() {
  const mapArr = [
    '/operation/05_jdk/01_Linux的JDK配置.md',
    '/operation/09_nginx/01_nginx单点安装.md',
    '/operation/09_nginx/04_kong单机安装.md',
    '/operation/07_kafka/01_Kafka单点安装.md',
    '/operation/08_mysql/04_MySQL网络安装.md',
    '/operation/27_minio/01_MinIO单机安装.md',
    '/operation/14_nexus/01_Nexus安装配置.md',
    '/operation/24_maven/01_Maven本地安装.md',
    '/operation/13_jenkins/01_Jenkins安装.md',
    '/operation/13_jenkins/01_Jenkins插件安装配置.md',
    '/operation/16_sonar/01_Sonar安装.md',
    '/operation/33_docker/01_Docker在线安装.md',
    '/operation/11_zookeeper/01_Zookeeper单点安装.md',
    '/operation/19_ansible/01_Ansible源码安装.md',
    '/operation/22_elk/04_elk单机版本安装.md',
    '/operation/22_elk/05_elastalert安装.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 研发手册
 * @returns
 */
function genCatalogSidebar() {
  const mapArr = ['/technique/', '/technique/01_开发技术/17_组件功能列表.md']
  return mapArr.map(i => {
    return i
  })
}

function genEnvironmentSidebar() {
  const mapArr = ['/technique/11_环境搭建/01_平台环境要求.md']
  return mapArr.map(i => {
    return i
  })
}

function genAccessSidebar() {
  const mapArr = [
    '/technique/09_开发接入/01_HelloWorld.md',
    '/technique/09_开发接入/02_生成代码.md',
    '/technique/09_开发接入/03_配置菜单.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genStandardSidebar() {
  const mapArr = [
    '/technique/03_项目规范/01_服务工程规范.md',
    '/technique/03_项目规范/02_前端工程规范.md',
    '/technique/03_项目规范/03_Java编码规范.md',
    '/technique/03_项目规范/04_web编码规范.md',
    '/technique/03_项目规范/07_UI自动化规范.md',
    '/technique/03_项目规范/05_sql编码规范.md',
    '/technique/03_项目规范/06_版本管理规范.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genTechniqueSidebar() {
  const mapArr = [
    '/technique/01_开发技术/02_默认功能.md',
    '/technique/01_开发技术/30_登陆配置.md',
    '/technique/01_开发技术/26_按钮权限.md',
    '/technique/01_开发技术/37_Jdbc操作.md',
    '/technique/01_开发技术/39_Mybatis集成.md',
    '/technique/01_开发技术/28_租户配置.md',
    '/technique/01_开发技术/22_服务集成教程.md',
    '/technique/01_开发技术/08_前端教程.md',
    '/technique/01_开发技术/09_发布教程.md',
    '/technique/01_开发技术/20_获取当前用户.md',
    '/technique/06_开发教程/01_本地调试.md',
    '/technique/01_开发技术/11_异常处理.md',
    '/technique/01_开发技术/12_日志处理.md',
    '/technique/01_开发技术/37_页面搜索.md',
    '/technique/01_开发技术/13_缓存使用.md',
    '/technique/01_开发技术/14_消息使用.md',
    '/technique/01_开发技术/24_多数据库源.md',
    '/technique/01_开发技术/25_配置加密.md',
    '/technique/01_开发技术/23_表单提交校验.md',
    '/technique/01_开发技术/14_Excel导出.md',
    '/technique/01_开发技术/34_文件上传.md',
    '/technique/01_开发技术/31_CDN配置.md',
    '/technique/01_开发技术/32_国际化支持.md',
    '/technique/01_开发技术/33_部署教程.md',
    '/technique/01_开发技术/35_代码转换和规范.md',
    '/technique/01_开发技术/36_初始化应用.md',
    '/technique/01_开发技术/38_组件转SDK.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genConfigSidebar() {
  const mapArr = [
    '/technique/04_配置中心/01_使用场景.md',
    '/technique/04_配置中心/02_使用方式.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDubboSidebar() {
  const mapArr = [
    '/technique/05_服务熔断/02_服务熔断说明.md',
    '/technique/05_服务熔断/01_Dubbo实现服务熔断.md',
    '/technique/01_开发技术/18_防重复提交.md',
    '/technique/01_开发技术/27_分布式定时任务.md',
    '/technique/01_开发技术/16_分布式锁.md',
    '/technique/01_开发技术/19_分布式限流.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 *
 * @returns 前端脚本
 */
function genFrontSidebar() {
  const mapArr = [
    '/front/01_新增页面.md',
    '/front/02_请求流程.md',
    '/front/03_引入依赖.md',
    '/front/04_注册组件.md',
    '/front/05_权限使用.md',
    '/front/06_多级目录.md',
    '/front/08_使用图标.md',
    '/front/09_使用字典.md',
    '/front/10_使用参数.md',
    '/front/11_异常处理.md',
    '/front/12_应用路径.md',
    '/front/13_布局.md',
    '/front/14_路由和导航栏.md',
    '/front/15_权限验证.md',
    '/front/16_标签栏导航.md',
    '/front/17_样式.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 业务建设菜单列表
 * @returns
 */
function genBusinessSidebar() {
  const mapArr = ['/business/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 组织搭建菜单列表
 * @returns
 */
function genGroupSidebar() {
  const mapArr = ['/group/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 中台搭建菜单列表
 * @returns
 */
function genPlatformsSidebar() {
  const mapArr = ['/platform/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 环境搭建菜单列表
 * @returns
 */
function genEnvSidebar(menus) {
  if (menus == 1) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 4) {
    const mapArr = ['/env/01_方案概述.md']

    return mapArr.map(i => {
      return i
    })
  }
}

//数据中台架构

function genDataFrameworkSidebar() {
  const mapArr = [
    '/data/framework/',
    '/data/framework/01_业务架构/02_数中建设目标.md',
    '/data/framework/01_业务架构/03_业务架构设计.md',
    '/data/framework/01_业务架构/04_技术架构设计.md',
    '/data/framework/10_其它/01_注意事项.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataWarehouseDesignSidebar() {
  const mapArr = [
    '/data/framework/02_数据仓库/01_数据仓库.md',
    '/data/framework/02_数据仓库/02_数仓分层.md',
    '/data/framework/02_数据仓库/04_环境规划.md',
    '/data/framework/02_数据仓库/03_数仓规范.md',
    '/data/framework/04_数据同步/01_同步策略.md',
    '/data/framework/04_数据同步/02_维度建模.md',
    '/data/framework/04_数据同步/03_数据仓库建模.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataWarehouseCollectSidebar() {
  const mapArr = [
    '/data/framework/03_业务数据采集/01_用户行为数据.md',
    '/data/framework/03_业务数据采集/02_业务数据采集.md',
    '/data/framework/03_业务数据采集/03_访问日志数据采集.md',
    '/data/framework/03_业务数据采集/04_数据采集汇总.md',
    '/data/framework/03_业务数据采集/05_数据维度汇总.md',
    '/data/framework/03_业务数据采集/06_应用数据汇总.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataWarehouseAnalyzeSidebar() {
  const mapArr = [
    '/data/framework/05_数据分析/03_数据指标.md',
    '/data/framework/05_数据分析/01_离线计算.md',
    '/data/framework/05_数据分析/02_实时计算.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataVisualSidebar() {
  const mapArr = [
    '/data/framework/06_数据可视化/01_报表展示.md',
    '/data/framework/06_数据可视化/02_数据大屏.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genMachineLearningSidebar() {
  const mapArr = [
    '/data/framework/07_机器学习/04_推荐系统.md',
    '/data/framework/07_机器学习/01_数据建模.md',
    '/data/framework/07_机器学习/02_模型学习.md',
    '/data/framework/07_机器学习/03_人物画像.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataManagerSidebar() {
  const mapArr = [
    '/data/framework/08_管理系统/09_产品规划.md',
    '/data/framework/08_管理系统/03_ETL在线调试平台.md',
    // '/data/framework/08_管理系统/07_数据开发平台.md',
    '/data/framework/08_管理系统/05_数据分析平台.md',
    '/data/framework/08_管理系统/06_数据治理平台.md',
    '/data/framework/08_管理系统/01_指标管理系统.md',
    '/data/framework/08_管理系统/02_数据质量中心.md',
    '/data/framework/08_管理系统/04_数据开放平台.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genDataOperationSidebar() {
  const mapArr = [
    '/data/framework/09_运维监控/01_监控管理.md',
    '/data/framework/09_运维监控/02_预警管理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 数字规划菜单列表
 * @returns
 */
function genDesignSidebar(menus) {
  if (menus == 1) {
    // 平台介绍
    const mapArr = [
      '/design/overview/01_数字化方案概述.md',
      '/design/overview/03_当前行业发展.md',
      '/design/overview/03_1_企业发展建设意义.md',
      '/design/overview/02_项目执行计划.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    // 平台架构
    const mapArr = [
      '/design/overview/04_数字化战略架构.md',
      '/design/overview/05_技术平台架构设计.md',
      '/design/overview/06_业务中台架构设计.md',
      '/design/overview/07_数据中台架构设计.md',
      '/design/overview/08_服务架构设计.md',
      '/design/overview/09_容器化架构设计.md',
      '/design/overview/10_私有云部署架构设计.md',
      '/design/overview/11_混合云架构设计.md',
      '/design/overview/12_平台运维架构设计.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    // 项目规划
    const mapArr = [
      '/design/overview/13_中台组织架构设计.md',
      '/design/overview/14_项目组织架构设计.md',
      '/design/overview/15_团队管理架构设计.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 4) {
    // 建设规划
    const mapArr = [
      '/design/overview/16_企业建设方案.md',
      '/design/overview/17_建设过程整体方案.md',
      '/design/overview/19_核心业务建设方案.md',
      '/design/overview/20_多业务整合建设方案.md'
    ]

    return mapArr.map(i => {
      return i
    })
  }
}

/**
 * 研发平台架构设计
 * @returns
 */
function genFrameworkAboutSidebar() {
  const mapArr = ['/framework/', '/framework/plan.md']
  return mapArr.map(i => {
    return i
  })
}

function genFrameworkRequireSidebar() {
  const mapArr = [
    '/framework/require/01_针对痛点.md',
    '/framework/require/02_解决方案.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genFrameworkSidebar() {
  const mapArr = [
    '/framework/essentials/01_总体架构设计.md',
    '/framework/essentials/02_中台架构设计.md',
    '/framework/essentials/02_01_平台技术构架.md',
    '/framework/essentials/03_服务架构设计.md',
    '/framework/essentials/06_平台运维架构.md',
    '/framework/essentials/07_容器架构设计.md',
    '/framework/essentials/08_网关架构设计.md',
    '/framework/essentials/09_持续集成设计.md',
    '/framework/essentials/10_中台战略设计.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genPlanSidebar() {
  const mapArr = [
    '/framework/advanced/01_项目结构设计.md',
    '/framework/advanced/02_基础模块设计.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genManagerSidebar() {
  const mapArr = [
    '/framework/manager/01_文档管理.md',
    '/framework/manager/02_代码管理.md',
    '/framework/manager/03_项目管理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genServiceSidebar() {
  const mapArr = [
    '/framework/service/01_服务规划规范.md',
    '/framework/service/02_基础服务规划.md',
    '/framework/service/03_业务服务规划.md',
    '/framework/service/04_应用服务规划.md',
    '/framework/service/09_示例服务规划.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genFrameworkManagerSidebar() {
  const mapArr = [
    // '/framework/manager/01_开发平台管理规划.md',
    '/framework/manager/04_文档目录管理.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 研发中台方案菜单列表
 * @returns
 */
function genTechniqueSidebar() {
  const mapArr = ['/design/technique/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

/**
 * 处理解决方案菜单列表
 * @returns
 */
function genSolutionSidebar() {
  const mapArr = [
    '/solution/01_方案概述.md',
    '/solution/02_文档计划.md',
    '/solution/03_数字化政务解决方案.md',
    '/solution/04_数字化校园解决方案.md',
    '/solution/05_智慧社区解决方案.md',
    '/solution/06_智慧农业解决方案.md',
    '/solution/07_企业数字化转型方案.md',
    '/solution/08_智慧城市解决方案.md',
    '/solution/20_落地实战案例.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

/**
 * 获取关于我们的菜单列表
 * @returns
 */
function genAboutSidebar() {
  const mapArr = ['/about/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}

function genAdvancedSidebar() {
  const mapArr = ['/solution/01_方案概述.md']
  return mapArr.map(i => {
    return i
  })
}
