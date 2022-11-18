# 配置管理

## 应用配置

会根据下列文件加载额外的环境变量, 配置加载由`NODE_ENV`决定

``` sh
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[NODE_ENV]         # 只在指定模式下加载
.env.[NODE_ENV].local   # 只在指定模式下加载，但会被 git 忽略
```

## 配置说明

``` sh
# server port
PORT = 7001

# global prefix, using in router、redis
GLOBAL_PREFIX = admin

# specify id as the root administrator
ROOT_USER_ID = 1
# user password salt
USER_PWD_SALT = K8i8mTfc5sTXO7OG
# user default password
USER_DEFAULT_PWD = 123456

# minimum internal requirements protect id
PROTECT_SYS_PERMMENU_MAX_ID = 44
PROTECT_SYS_DICTIONARY_MAX_ID = 4

# jwt
JWT_SECRET = kRZ3kA7LuB4LqOWi
JWT_EXPIRES = 86400

# redis
REDIS_HOST = 127.0.0.1
REDIS_PORT = 6379
REDIS_PASSWORD = 123456
REDIS_DB = 0

# db
DB_HOST = 127.0.0.1
DB_PORT = 3306
DB_USERNAME = root
DB_PASSWORD = root
DB_DATABASE = 'ark_admin'
DB_LOGGING = true

# swagger
SWAGGER_ENABLE = true
SWAGGER_PATH = documentation

# logger
LOGGER_LEVEL = verbose
LOGGER_MAX_FILES = 31
```

::: warning 安全注意事项
如果你想要自定义`env`变量的前缀，那么启动应用时配置`NODE_ENV`环境变量即可。

`.env.*.local`文件是本地的，可以包含敏感变量。并且会被`git`忽略。
:::