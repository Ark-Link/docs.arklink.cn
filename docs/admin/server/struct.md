# 目录结构

```
app:
├─Business
│  ├─Admin
│  │  └─Core          # 后台核心业务逻辑
│  └─Websocket        # Websocket业务逻辑
├─Command
│  └─Template         # 命令生成器模板
├─Constants           # 枚举类
├─Controller          # 控制器
│  └─Admin
│      └─Core         # 后台核心控制器
├─Crontab
│  ├─Repository       # 定时任务处理类库
│  └─Task             # 定时任务
├─Exception
│  └─Handler          # 异常处理
├─Listener            # 监听器
├─Middleware
├─Model               # 数据模型
├─Redis
│  ├─Contract         # redis接口
│  └─Repository       # redis处理类库
├─Socket              # Websocket服务
├─Swagger
│  └─Admin
│      └─Core         # 后台swagger api
├─Utils
│  └─Core             # 系统工具类
└─Validator
    └─Admin           # 后台验证器
```

