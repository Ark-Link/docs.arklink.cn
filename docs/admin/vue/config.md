# 配置参数

根据环境修改配置文件

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