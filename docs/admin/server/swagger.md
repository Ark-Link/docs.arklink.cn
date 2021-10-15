# Swagger

## API分类

```
Swagger:
└─Admin                                # 后台模块API
     └─Core
          AccountSwagger.php           # 账户相关       
          ApiInfo.php                  # API基础信息  
          DepartmentSwagger.php        # 部门相关 
          IndexSwagger.php             # 基础功能 
          LogSwagger.php               # 日志相关 
          MenuSwagger.php              # 菜单权限相关 
          OnlineSwagger.php            # 在线用户相关 
          RoleSwagger.php              # 角色相关 
          TaskSwagger.php              # 定时任务相关 
          UserSwagger.php              # 用户相关 
```

## 生成API文档

```shell
php bin/hyperf.php swagger:gen -p app/Swagger
```

