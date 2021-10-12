# 控制器

## 控制器分类

```
Controller:
│  AbstractController.php
│  BaseController.php                     # 控制器基类（创建的控制器建议继承该基类）
│  IndexController.php
│
└─Admin
     └─Core
         AccountController.php            # 账号相关
         DepartmentController.php         # 部门相关
         IndexController.php              # 基础功能（获取验证码、登录）
         LogController.php                # 日志相关
         MenuController.php               # 菜单及权限相关
         OnlineController.php             # 在线用户相关
         RoleController.php               # 角色相关
         TaskController.php               # 定时任务相关
         UserController.php               # 管理员相关
```

## 编写控制器

```php
<?php

declare(strict_types=1);


namespace App\Controller;

use App\Controller\BaseController;

/**
 * @Controller(path="/project")
 */
class ProjectController extends BaseController
{
    /**
     * @RequestMapping(path="info",methods={"GET"})
     */
    public function info()
    {
        $info = [
            'name' => 'ark-admin'
        ];
        return $this->response->success($info);
    }
}
```

建议：

> 1、创建的控制器继承App\Controller\BaseController基类
>
> 2、返回格式：
>
> ​      处理成功采用 return $this->response->success($data);
>
> ​      处理失败采用 return $this->response->error();

