# api模块

## api文件

go-zero官方文档：[api文件编写](https://go-zero.dev/cn/docs/advance/api-coding)

## 生成api

由于自定义了goctl模板，所以在使用goctl生成api时，请指定goctl模板路径为：dev/goctl

例如（在项目根目录下执行）

```sh
goctl api go -api app/core/cmd/api/core.api -dir app/core/cmd/api -home ./build/dev/goctl
```

## api指令

go-zero官方文档：[api指令](https://go-zero.dev/cn/docs/goctl/api)

