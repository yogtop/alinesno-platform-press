var nav = require('./nav.js')
var { EcosystemNav, ComponentNav, BackendNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: '新狐云技术框架',
  description: 'A magical vue admin',
  base: '/framework-docs-templates/',
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
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '项目文档',
            link: '/guide/'
          },
          {
            text: '视频教程',
            link: '/video/'
          },
          {
            text: '新狐云',
            link: 'http://v212.ui.saas.dev.lbxinhu.linesno.com:23456/index'
          }
        ],
        sidebar: {
          '/video/': [
            {
              title: '视频教程',
              collapsable: false,
              children: genVideoSidebar()
            }
          ],
          '/guide/': [
            {
              title: '基础框架',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: '分布式',
              collapsable: false,
              children: genAdvancedSidebar('/')
            },
            {
              title: '前端框架',
              collapsable: false,
              children: genAdvancedSidebar('/')
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

function genVideoSidebar() {
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
