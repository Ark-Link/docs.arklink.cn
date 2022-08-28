# 项目结构

```
ark-admin
|
├─app
│  └─core
│      ├─cmd
│      │  └─api
│      │      ├─desc
│      │      ├─etc
│      │      └─internal
│      │          ├─config                  
│      │          ├─handler
│      │          ├─logic
│      │          │  ├─config               
│      │          │  │  └─dict          配置字典
│      │          │  ├─log
│      │          │  │  └─login         登录日志
│      │          │  ├─sys
│      │          │  │  ├─dept          部门管理
│      │          │  │  ├─job           岗位管理
│      │          │  │  ├─menu          权限菜单
│      │          │  │  ├─profession    职称管理
│      │          │  │  ├─role          角色管理
│      │          │  │  └─user          用户管理
│      │          │  └─user             用户模块
│      │          ├─middleware          权限中间件
│      │          ├─svc
│      │          └─types
│      └─model                          model
├─common
│  ├─errorx                             自定义错误
│  ├─response                           自定义响应
│  └─utils                              工具集
├─config                                静态配置
├─data                                  运行数据
├─deploy                                部署时所依赖的配置文件
├─dev
│  ├─goctl                              自定义goctl模板
│  ├─images
│  ├─script
│  └─sql                                
└─logs                                  运行日志
```