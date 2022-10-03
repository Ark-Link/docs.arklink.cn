# 快速开始

## go-zero

传送门：[https://go-zero.dev/cn](https://go-zero.dev/cn)

## API文档

传送门：[https://www.apifox.cn/apidoc/shared-ddbffed9-fa11-49ed-bc46-8d76ab058d60](https://www.apifox.cn/apidoc/shared-ddbffed9-fa11-49ed-bc46-8d76ab058d60)

## 体验模式

```sh
git clone https://github.com/arklnk/ark-admin-zero.git
```

```sh
cd ark-admin-zero
```

```
docker-compose up -d
```

> - redis   密码：123456
> - mysql 账号：root    密码：root
> - phpmyadmin 端口：8080  服务器：mysql  用户名：root  密码：root

登录地址：[http://127.0.0.1](http://127.0.0.1/)

| 账号   | 密码   | 备注       |
| ------ | ------ | ---------- |
| arklnk | 123456 | 超级管理员 |
| demo   | 123456 | 演示账号   |

![login](/images/zero/login.png)

![login](/images/zero/menu.png)

## 开发模式

### clone项目

```sh
git clone https://github.com/arklnk/ark-admin-zero.git
```

```sh
cd ark-admin-zero
```

### 启动

```sh
docker-compose -f docker-compose-dev.yml up -d
```

```
docker exec -it api /bin/sh
```

```
go mod tidy && modd
```

如输出以下信息则启动成功

```
03:24:52: prep: go build -o data/service/core-api -v app/core/cmd/api/core.go
>> done (2.8228673s)
03:24:54: daemon: data/service/core-api -f app/core/cmd/api/etc/core-api.yaml
>> starting...
Starting server at 0.0.0.0:8001...
```

> 注：在modd.conf已配置热启动路径，当core模块的代码有改动时，modd会自动重启，方便开发调试。

