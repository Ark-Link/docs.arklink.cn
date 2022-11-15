import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  port: 8181,
  lang: 'zh-CN',
  title: '方舟互联',
  description: '拥抱开源、全面覆盖、快速开发',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#9155f5' }],
    ['meta', { name: 'description', content: 'Admin后台管理系统, Vue, Go-Zero, element-ui' }],
    ['meta', { name: 'description', content: 'Arklnk方舟互联' }],
  ],

  // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/arklnk',
    docsRepo: 'https://github.com/arklnk/docs.arklnk.com',
    docsBranch: 'main',

    themePlugins: {
      git: false,
    },

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
          collapsible: false,
          children: [
            '/admin/zero/start',
            '/admin/zero/tool',
            '/admin/zero/specification',
            '/admin/zero/business',
            '/admin/zero/project',
            '/admin/zero/database',
            '/admin/zero/config',
            '/admin/zero/errorcode',
            '/admin/zero/response',
            '/admin/zero/middleware',
            '/admin/zero/validate',
            '/admin/zero/template',
            '/admin/zero/genapi',
            '/admin/zero/genmodel',
            '/admin/zero/build-docker',
            '/admin/zero/deploy',
            '/admin/zero/thanks',
          ],
        },
        {
          text: '后端手册(nestjs)',
          collapsible: false,
          children: [
            '/admin/nest/start',
            '/admin/nest/business',
            '/admin/nest/config',
            '/admin/nest/database',
            '/admin/nest/errorcode',
            '/admin/nest/response',
            '/admin/nest/auth',
            '/admin/nest/validate',
            '/admin/nest/thanks',
          ],
        },
        {
          text: '前端手册(vue3+vite)',
          collapsible: false,
          children: [
            '/admin/vue/start',
            '/admin/vue/project',
            '/admin/vue/config',
            '/admin/vue/menu',
            {
              text: '高级组件',
              children: [
                '/admin/vue/component/form',
                '/admin/vue/component/table',
                '/admin/vue/component/dialog',
              ],
            },
          ],
        },
      ],
    },
  }),
})
