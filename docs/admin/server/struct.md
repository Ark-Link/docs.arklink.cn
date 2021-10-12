# 目录结构

```
app:
├─Business            # 业务逻辑（当控制器逻辑过多时可以抽取到该模块下）
│  ├─Admin            # 后台业务逻辑
│  └─WebSocket        # websocket业务逻辑
├─Constants           # 枚举类
├─Controller          # 控制器
│  └─Admin            # 后台控制器
├─Crontab             # 定时任务
│  └─Repository
├─Exception           # 异常处理
│  └─Handler
├─Listener
├─Middleware          # 中间件
├─Model               # 数据模型
├─Redis               # redis处理类库
│  ├─Contract
│  └─Repository
├─Swagger             # swagger api
│  └─Admin
├─Utils               # 工具类
├─Socket              # socket服务
└─Validator           # 数据验证器
    └─Admin
```

