# 项目结构

``` sh
ark-admin
├─build                               // vite插件配置
├─public                              // 静态资源服务的文件夹
├─src
│  ├─api                              // api请求
│  ├─assets                           // 静态资源服务的文件夹
│  ├─components                       // 公共组件
│  ├─composables                      // 组合式函数 类似于hooks
│  ├─directives                       // 公共自定义指令
│  ├─enums                            // 枚举、常量定义
│  ├─layouts                          // 项目基础布局
│  ├─locales                          // i18n翻译
│  ├─logics                           // 基础公共逻辑或功能函数封装
│  ├─router                           // 路由
│  ├─settings                         // 公共的配置定义
│  ├─stores                           // pinia状态管理
│  ├─styles                           // 公共样式
│  ├─utils                            // 工具类
│  └─views                            // 业务页面实现
└─types                               // 类型定义
└─.env                                // 开发环境配置变量配置
└─tsconfig.json                       // ts配置
└─vite.config.ts                      // vite配置文件
└─Dockerfile                          // docker构建脚本
```