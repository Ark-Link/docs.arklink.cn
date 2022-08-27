import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  port: 8181,
  lang: 'zh-CN',
  title: '方舟互联',
  description: '拥抱开源、全面覆盖、快速开发',

  // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/arklnk',
    docsRepo: 'https://github.com/arklnk/docs.arklnk.com',
    docsBranch: 'main',

    // 首页顶部盗汗
    navbar: [
      // NavbarGroup
      {
        text: 'Admin',
        link: '/admin/',
      },
    ],

    sidebar: {
      '/admin/': [
        '/admin/',
        {
          text: '后端手册(go-zero)',
          collapsible: true,
          children: ['/admin/zero/start'],
        },
        {
          text: '前端手册(vue3+vite)',
          collapsible: true,
          children: ['/admin/vue/start'],
        },
      ],
    },
  }),
})
