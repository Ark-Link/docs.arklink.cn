'use strict'

module.exports = {
  title: 'Ark Link开源官方文档',
  description: '',
  port: 8081,
  themeConfig: {
    search: false,
    lastUpdated: '最后更新于',
    nav: [
      { text: '首页', link: '/' },
      { text: '后台管理系统', link: '/admin/' },
      { text: '关于方舟', link: '/about/' },
      { text: 'Gtihub', link: 'https://github.com/orgs/Ark-Link/' },
    ],
    sidebar: {
      '/admin/': [
        '/admin/',
        {
          title: '后端手册',
          collapsable: false,
          children: [
            '/admin/server/install',
            '/admin/server/api',
            '/admin/server/struct',
            '/admin/server/controller',
            '/admin/server/model',
            '/admin/server/validator',
            '/admin/server/middleware',
            '/admin/server/exception',
            '/admin/server/crontab',
            '/admin/server/redis',
            '/admin/server/utils'
          ]
        },
        '/admin/front',
        {
          title: '其他',
          collapsable: false,
          children: [
            '/admin/notice/git',
            '/admin/notice/standard'
          ]
        }
      ],
    }
  }
}