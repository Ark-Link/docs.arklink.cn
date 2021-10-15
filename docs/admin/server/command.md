# 命令行

## 生成控制器

```shell
php bin/hyperf.php arkGen:controller YourController
```

> 注：如果想要分模块创建，比如想创建Admin模块下的IndexContrpller，则可以
>
> ```shell
> php bin/hyperf.php arkGen:controller Admin/IndexController
> ```

## 生成模型

```shell
php bin/hyperf.php arkGen:model your_table
```

> 注：如果想要分模块创建，比如想创建Admin模块下的IndexModel，则可以
>
> ```shell
> php bin/hyperf.php arkGen:model your_table --path app/Model/Admin
> ```

## 生成验证器

```shell
php bin/hyperf.php arkGen:validator YourValidator
```

> 注：如果想要分模块创建，比如想创建Admin模块下的IndexValidator，则可以
>
> ```shell
> php bin/hyperf.php arkGen:validator Admin/IndexValidator
> ```

## 生成定时任务

```shell
php bin/hyperf.php arkGen:task YourTask
```

> 注：如果想要分模块创建，比如想创建Admin模块下的IndexTask，则可以
>
> ```shell
> php bin/hyperf.php arkGen:task Admin/IndexTask
> ```



