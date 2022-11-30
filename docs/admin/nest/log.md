# 日志

框架提供了一套日志模块，基于社区的[winston](https://github.com/winstonjs/winston)，是现在社区非常受欢迎的日志库。

**实现的功能有：**

- 日志分级
- 按大小和时间自动切割
- 自定义输出格式
- 统一错误日志

## 日志路径和文件

该日志模块会在项目根目录创建一个`logs`文件夹，里面会有一些默认文件：

- `app.log` 应用打印信息日志
- `app-error.log` 所有的错误日志

## 使用日志

``` ts
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
class MyService {
  private readonly logger = new Logger(MyService.name);

  doSomething() {
    // 输出的是info等级
    this.logger.log('Doing something...');
  }
}
```

> [Using the logger for application logging](https://docs.nestjs.com/techniques/logger#using-the-logger-for-application-logging)

## 日志等级

日志等级依次降低（数字越大，等级越低）

``` ts
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
  verbose: 4,
}
```

::: warning 注意

由于默认`nest`中的`log`等级有冲突，所有的`log`输出的日志等级均为`info`等级。

在生产模式下控制台日志会被关闭，需要打开可自行自定义。

:::