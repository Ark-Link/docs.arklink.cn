# 快速开始

## nestjs

传送门：[https://docs.nestjs.com/](https://docs.nestjs.com/)

## API文档

传送门：[https://www.apifox.cn/apidoc/shared-ddbffed9-fa11-49ed-bc46-8d76ab058d60](https://www.apifox.cn/apidoc/shared-ddbffed9-fa11-49ed-bc46-8d76ab058d60)

> 或者运行项目后访问内置的swagger文档

## 体验模式

```sh
git clone https://github.com/arklnk/ark-admin-nest.git
```

```sh
cd ark-admin-nest
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

``` sh
pnpm i
pnpm dev
```

> 默认pnpm dev运行是以tsc进行编译后运行，编译过慢时可使用pnpm dev:hmr以webpack方式编译运行

