# redis缓存

## 使用方式一

在app/function.php中已经定义了redis()方法，所以可以使用redis()来调用常用的redis方法。

```
redis()->set('project','ark-admin');
```

> 注：这里不一一列举，可自行测试其他的redis方法

## 使用方式二

可以通过app/Utils/SysRedis的getInstance()静态方法来实例化redis。

```
SysRedis::getInstance()->set('project', 'ark-admin');
```

> 注：这里不一一列举，可自行测试其他的redis方法

## 使用方式三

使用封装的Redis实现类

```
Redis:
│
├─Contract
│      HashInterface.php           # Hash类型接口
│      ListInterface.php           # List类型接口
│      LockInterface.php           # Redis锁接口
│      SetInterface.php            # Set类型接口
│      StreamInterface.php         # Stream类型接口
│      StringInterface.php         # String类型接口
│      ZSetInterface.php           # ZSet类型接口
│
└─Repository
        BaseRedis.php              # Redis实现基类
        HashRedis.php              # Hash实现类
        ListRedis.php              # List实现类
        LockRedis.php              # Lock实现类
        SetRedis.php               # Set实现类
        StreamRedis.php            # Stream实现类
        StringRedis.php            # String实现类
        ZSetRedis.php              # ZSet实现类
```



