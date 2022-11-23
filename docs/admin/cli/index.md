# 命令创建应用

## 初始化项目

推荐直接使用脚手架，只需几条简单指令，即可快速生成项目。

``` sh
npm init arklnk-app my-app

// 或

yarn create arklnk-app my-app
```

根据提示创建`nestjs`或`zero`版`ark-admin`模板

::: tip 脚手架优势

- 一行命令简单又便捷
- 对比直接的`git clone`, 你会得到一个`.git`属于项目模板的文件夹，而不是你的项目，从而忘记重新初始化存储库。
- 创建完毕后会删除无关的项目文件，例如`github action`等。

:::

## 命令参数

``` sh
$ create-arklnk-app --help
Usage: create-arklnk-app [project-directory] [options]

Options:
  -v, --version      Output the current version.
  --source [source]  Specify the code repository source: github/gitee (default: "gitee")
  --force            Overwrite project-directory file if it exists
  --help             Output usage information.
```

> 默认使用`gitee`创建项目模板，如果您对`github`访问友好可优先指定`--source github`。
