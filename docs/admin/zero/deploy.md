# 应用部署

## 微服务部署

go-zero官方设计理念

- 保持简单，第一原则
- 弹性设计，面向故障编程
- 工具大于约定和文档
- 高可用
- 高并发
- 易扩展
- 对业务开发友好，封装复杂度
- 约束做一件事只有一种方式

![architechture](/images/zero/architechture.svg)

## 根据需求部署

项目前期，我们可能不需要太多功能，所以我们可以根据自己的项目需求简化一下部署，

ark-admin核心core模块没用到rpc，只用了api和model。

![architechture](/images/zero/deploy.png)

```sh
docker-compose up -d
```

```yaml
version: '3'

services:
  gateway:
    image: nginx:1.21.5
    container_name: gateway
    restart: always
    privileged: true
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./deploy/gateway/conf.d:/etc/nginx/conf.d
      - ./data/gateway/log:/var/log/nginx
    networks:
      - ark_admin_net

  ark-admin-vuenext:
    image: arklnk/ark-admin-vuenext:latest
    container_name: ark-admin-vuenext
    volumes:
      - ./deploy/vuenext/nginx.conf:/etc/nginx/nginx.conf
    ports:
      - "80:80"
    restart: always
    networks:
      - ark_admin_net

  ark-admin-zero:
    image: arklnk/ark-admin-zero:latest
    container_name: ark-admin-zero
    volumes:
      - ./deploy/service/core/etc:/app/etc
      - ./data/service/logs:/app/logs
    restart: always
    networks:
      - ark_admin_net

  mysql:
    image: mysql:5.7
    container_name: mysql
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: ark_admin
    ports:
      - "3306:3306"
    volumes:
      - ./data/mysql/data:/var/lib/mysql
      - ./dev/sql/:/docker-entrypoint-initdb.d/
    privileged: true
    restart: always
    networks:
      - ark_admin_net

  phpmyadmin:
    image: phpmyadmin:latest
    container_name: phpmyadmin
    restart: always
    ports:
      - "8080:80"
    environment:
      - PMA_ARBITRARY=1
    networks:
      - ark_admin_net

  redis:
    image: redis:6.2.5
    container_name: redis
    ports:
      - "6379:6379"
    environment:
      TZ: Asia/Shanghai
    volumes:
      - ./data/redis/data:/data:rw
    command: "redis-server --requirepass 123456  --appendonly yes"
    privileged: true
    restart: always
    networks:
      - ark_admin_net

networks:
  ark_admin_net:
    driver: bridge
```

