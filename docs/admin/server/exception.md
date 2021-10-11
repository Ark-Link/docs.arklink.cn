# 异常处理

## 异常分类

```
Exception:
│  AuthException.php                             # 自定义未登录异常
│  BusinessException.php                         # 自定义业务逻辑异常
│  PermissionException.php                       # 自定义权限异常
│
└─Handler
        AppExceptionHandler.php                  # 系统异常处理
        AuthExceptionHandler.php                 # 未登录异常处理
        BusinessExceptionHandler.php             # 业务逻辑异常处理
        ParamExceptionHandler.php                # 验证器异常处理
        PermissionExceptionHandler.php           # 权限异常处理
```

[Hyperf异常处理](https://hyperf.wiki/2.1/#/zh-cn/exception-handler)

