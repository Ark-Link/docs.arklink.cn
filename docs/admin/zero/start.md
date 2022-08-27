# 快速开始

## API文档

传送门：[https://www.apifox.cn/apidoc/shared-ddbffed9-fa11-49ed-bc46-8d76ab058d60](https://www.apifox.cn/apidoc/shared-ddbffed9-fa11-49ed-bc46-8d76ab058d60)

## 体验模式

### docker-compose

```sh
git clone https://github.com/arklnk/ark-admin-zero.git
```

```sh
cd ark-admin-zero
```

```
docker-compose up -d
```

### 基础环境

redis

```
密码：123456
```

mysql

```
账号：root
密码：root
```

> 注：首次运行docker-compose会自动建立数据库和导入数据，所以无需手动导入数据
>
> ​        sql文件位置：dev/sql/ark_admin.sql

phpmyadmin

```
端口：8080
服务器：mysql
用户名：root
密码：root
```

### 登录

> 超级管理员
>
> 账号：arklnk
>
> 密码：123456

访问地址：[http://127.0.0.1](http://127.0.0.1)

![login](https://raw.githubusercontent.com/arklnk/docs.arklnk.com/main/docs/admin/zero/images/start/login.png)

## 开发模式

### clone项目

```sh
git clone https://github.com/arklnk/ark-admin-zero.git
```

```sh
cd ark-admin-zero
```

### 下载依赖

```sh
go mod tidy
```

### 热启动

下载依赖

```sh
go get github.com/cortesi/modd/cmd/modd
```

编辑热启动配置（项目根目录下得modd.conf）

window环境下

```conf
#core
app/core/**/*.* {
    prep: go build -o data/service/core-api.exe -v app/core/cmd/api/core.go
    daemon: data/service/core-api.exe -f app/core/cmd/api/etc/core-api.yaml
}
```

mac、linux环境下

```
#core
app/core/**/*.* {
    prep: go build -o data/service/core-api -v app/core/cmd/api/core.go
    daemon: data/service/core-api -f app/core/cmd/api/etc/core-api.yaml
}
```

> 注：modd开源地址https://github.com/cortesi/modd

运行（开发环境需要用到 redis 和 mysql，所以请先执行 docker-compose up -d 来启动容器）

```
modd
```

如输出以下信息则启动成功

```
15:17:03: prep: go build -o data/service/core-api.exe -v app/core/cmd/api/core.go
>> done (2.2430897s)
15:17:06: daemon: data/service/core-api.exe -f app/core/cmd/api/etc/core-api.yaml
>> starting...
Starting server at 0.0.0.0:7001...
```

