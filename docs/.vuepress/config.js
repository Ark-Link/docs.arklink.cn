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
            '/admin/server/install'
          ]
        },
        '/admin/front',
        '/admin/notice'
      ],
    }
  }
}