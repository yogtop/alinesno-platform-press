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
            text: '解决方案',
            icon: 'fas fa-pencil-ruler',
            link: '/solution/'
          },
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
            }
          ],
          '/design/': [
            {
              title: '数字规划',
              collapsable: false,
              children: genVideoSidebar()
            }
          ],
          '/env/': [
            {
              title: '环境建设',
              collapsable: false,
              children: genVideoSidebar()
            }
          ],
          '/platform/': [
            {
              title: '技术(PaaS)中台',
              collapsable: false,
              children: genEssentialsSidebar()
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
              children: genVideoSidebar()
            }
          ],
          '/business/': [
            {
              title: '业务建设',
              collapsable: false,
              children: genVideoSidebar()
            }
          ],
          '/learn/': [
            {
              title: '视频教程',
              collapsable: false,
              children: genVideoSidebar()
            }
          ],
          '/about/': [
            {
              title: '关于',
              collapsable: false,
              children: genVideoSidebar()
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

function genCommonCoreSidebar() {
  const mapArr = ['/guide/']
  return mapArr.map(i => {
    return i
  })
}

function genEssentialsSidebar() {
  const mapArr = [
    '/guide/',
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md',
    '/guide/essentials/env.md'
  ]
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

function genVideoSidebar() {
  const mapArr = [
    '/about/advanced/cors.md',
    '/about/advanced/eslint.md',
    '/about/advanced/git-hook.md',
    '/about/advanced/style-guide.md',
    '/about/advanced/lazy-loading.md',
    '/about/advanced/chart.md',
    '/about/advanced/icon.md',
    '/about/advanced/cdn.md',
    '/about/advanced/theme.md',
    '/about/advanced/i18n.md',
    '/about/advanced/error.md',
    '/about/advanced/webpack.md',
    '/about/advanced/sass.md'
  ]
  return mapArr.map(i => {
    return i
  })
}

function genAdvancedSidebar() {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/style-guide.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/cdn.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md',
    '/guide/advanced/sass.md'
  ]
  return mapArr.map(i => {
    return i
  })
}
