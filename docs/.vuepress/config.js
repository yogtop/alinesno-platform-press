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
            link: '/design/'
          },
          {
            text: '环境建设',
            link: '/env/'
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
            text: '业务建设',
            link: '/business/'
          },
          {
            text: '解决方案',
            icon: 'fas fa-pencil-ruler',
            link: '/solution/'
          },
          {
            text: '建设教程',
            link: '/learn/'
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
          '/design/': [
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
          '/env/': [
            {
              title: '研发环境',
              collapsable: false,
              children: genEnvSidebar(1)
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
    const mapArr = ['/learn/11_视频培训.md', '/learn/12_直播培训.md']
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

/**
 * 数字规划菜单列表
 * @returns
 */
function genDesignSidebar(menus) {
  if (menus == 1) {
    // 平台介绍
    const mapArr = [
      '/design/01_数字化方案概述.md',
      '/design/03_当前行业发展.md',
      '/design/03_1_企业发展建设意义.md',
      '/design/02_项目执行计划.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 2) {
    // 平台架构
    const mapArr = [
      '/design/04_数字化战略架构.md',
      '/design/05_技术平台架构设计.md',
      '/design/06_业务中台架构设计.md',
      '/design/07_数据中台架构设计.md',
      '/design/08_服务架构设计.md',
      '/design/09_容器化架构设计.md',
      '/design/10_私有云部署架构设计.md',
      '/design/11_混合云架构设计.md',
      '/design/12_平台运维架构设计.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 3) {
    // 项目规划
    const mapArr = [
      '/design/13_中台组织架构设计.md',
      '/design/14_项目组织架构设计.md',
      '/design/15_团队管理架构设计.md'
    ]

    return mapArr.map(i => {
      return i
    })
  } else if (menus == 4) {
    // 建设规划
    const mapArr = [
      '/design/16_企业建设方案.md',
      '/design/17_建设过程整体方案.md',
      '/design/19_核心业务建设方案.md',
      '/design/20_多业务整合建设方案.md'
    ]

    return mapArr.map(i => {
      return i
    })
  }
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
