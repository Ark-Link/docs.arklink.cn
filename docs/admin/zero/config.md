# 配置管理

## 应用配置

路径：app/core/cmd/api/etc/core-api.yaml

```yml
Name: core-api
Host: 0.0.0.0
Port: 7001
Mode: dev
Salt: K8i8mTfc5sTXO7OG

Log:
  Mode: console
  Path: logs/core
  KeepDays: 7

JwtAuth:
  AccessSecret: kRZ3kA7LuB4LqOWi
  AccessExpire: 86400

Mysql:
  DataSource: root:root@tcp(127.0.0.1:3306)/ark_admin?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai

Cache:
  - Host: 127.0.0.1:6379
    Pass: "123456"
    Type: node

Redis:
  Host: 127.0.0.1:6379
  Pass: "123456"
  Type: node
```

## 默认配置

路径：config/system.go

> 默认配置属于系统的敏感配置，这里制定了核心系统的保护规则（防止用户误删核心功能），如非必要，请勿修改

```go
package config

const (
	SysPermMenuPrefix          = "/"                             // api前缀
	SysJwtUserId               = "userId"                        // JWT key
	SysPermMenuCachePrefix     = "cache:arkAdmin:permMenu:"      // 权限
	SysOnlineUserCachePrefix   = "cache:arkAdmin:online:"        // 在线用户
	SysLoginCaptchaCachePrefix = "cache:arkAdmin:captcha:"       // 登录验证码
	SysUserIdCachePrefix       = "cache:arkAdmin:sysUser:id:"    // 登录用户
	SysDateFormat              = "2006.01.02 15:04:05"           // 格式化日期
	SysNewUserDefaultPassword  = "123456"                        // 新用户默认密码
	SysProtectPermMenuMaxId    = 44                              // 系统核心权限
	SysProtectDictionaryMaxId  = 4                               // 系统核心字典
	SysProtectUserId           = 1                               // 超级管理员
	SysProtectRoleId           = 1                               // 超级管理员角色
	SysDefaultPermType         = 2                               // 默认权限
	SysEnable                  = 1                               // 开启
	SysDisable                 = 0                               // 禁用
	SysLoginLogType            = 1                               // 登录类型
	SysTopParentId             = 0                               // 顶级id
)
```

## 动态配置

![动态配置](/images/zero/dictionary.png)