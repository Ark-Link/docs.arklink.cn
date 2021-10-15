# 命令行

## 生成控制器

```shell
php bin/hyperf.php arkGen:controller YourController
```

如果想要分模块创建，比如想创建Admin模块下的YourController，则可以

```
php bin/hyperf.php arkGen:controller Admin/YourController
```

## 生成模型

```shell
php bin/hyperf.php arkGen:model your_table
```

如果想要分模块创建，比如想创建Admin模块下的YourTable，则可以

```
php bin/hyperf.php arkGen:model your_table --path app/Model/Admin
```

## 生成验证器

```shell
php bin/hyperf.php arkGen:validator YourValidator
```

如果想要分模块创建，比如想创建Admin模块下的YourValidator，则可以

```
php bin/hyperf.php arkGen:validator Admin/YourValidator
```

## 生成定时任务

```shell
php bin/hyperf.php arkGen:task YourTask
```

如果想要分模块创建，比如想创建Admin模块下的YourTask，则可以

```
php bin/hyperf.php arkGen:task Admin/YourTask
```





