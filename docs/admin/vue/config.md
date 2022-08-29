# 系统配置

## 环境配置

``` sh
.env                      // 默认配置
.env.development          // 开发环境配置
.env.development.local    // 开发环境配置（会被git忽略，可用于即时性测试）
.env.production           // 开发环境配置
```

所有环境配置参数

``` sh
# dev port
VITE_PORT = 9528

# proxy target
VITE_PROXY_API_TARGET = 'http://127.0.0.1:7001'

# base api
VITE_APP_BASE_API = '/api'
```

# 项目配置

项目配置均存放于`src/settings`目录

``` sh
componentSetting.ts    // 组件默认配置
designSetting.ts       // 预设主题配置
localeSetting.ts       // i18n配置，目前组件以及基础框架支持i18n，业务界面不做i18n翻译
projectSetting.ts      // 项目配置
siteSetting.ts         // 默认开源网站常量定义
```

各项配置含义请查看[typing注释](https://github.com/arklnk/ark-admin-vuenext/blob/dev/types/config.d.ts)

::: warning 注意
如果需要对自己项目有针对性的修改默认配置可自行修改，但请注意修改了该默认配置后需要自行清空`localStorage`再查看效果。
:::