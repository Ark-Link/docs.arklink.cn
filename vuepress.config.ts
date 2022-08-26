import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '方舟互联',
  description: '拥抱开源',

  // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/arklnk',
    docsRepo: 'https://github.com/arklnk/docs.arklnk.com',
    docsBranch: 'main',
    lastUpdatedText: '最后更新于',

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
          collapsible: false,
          children: ['/admin/zero/start'],
        },
        {
          text: '前端手册(vue3+vite)',
          collapsible: false,
          children: ['/admin/vue/start'],
        },
      ],
    },
  }),
})
