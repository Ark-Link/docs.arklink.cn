# 构建镜像

ark-admin核心core模块的Dockerfile在：app/core/cmd/api/Dockerfile

如需构建镜像，可在项目根目录下执行

```sh
docker build -f app/core/cmd/api/Dockerfile -t imagesName:version .
```

