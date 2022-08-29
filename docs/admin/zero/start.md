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

### 下载依赖

```sh
go mod tidy
```

### 热启动

```sh
go get github.com/cortesi/modd/cmd/modd
```

编辑热启动配置（项目根目录下的modd.conf）

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

