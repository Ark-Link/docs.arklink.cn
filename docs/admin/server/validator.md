# 验证器

## 验证器分类

```
Validator:
│  BaseValidator.php                 # 基类验证器（增加场景验证功能）
│
└─Admin
        AccountValidator.php         # 账户验证器
        DepartmentValidator.php      # 部门验证器
        LoginValidator.php           # 登录验证器
        LogValidator.php             # 日志验证器
        MenuValidator.php            # 菜单权限验证器
        OnlineValidator.php          # 在线用户验证器
        RoleValidator.php            # 角色验证器
        TaskValidator.php            # 定时任务验证器
        UserValidator.php            # 用户验证器
```

## 编写验证器

```php
<?php

namespace App\Validator\Admin;

use App\Validator\BaseValidator;

class YourValidator extends BaseValidator
{
    /**
     * 验证规则
     * @var array
     */
    protected $rule = [
        'id' => 'required|numeric',
        'limit' => 'required|numeric|min:1',
        'page' => 'required|numeric|min:1',
    ];

    /**
     * 验证提示
     * @var array
     */
    protected $message = [
    ];

    /**
     * 使用场景
     * @var array
     */
    protected $scene = [
        'page' => ['page', 'limit'],
        'info' => ['id']
    ];
}
```

> 注：
>
> 1、编写的验证器统一继承App\Validator\BaseValidator，这样可以很方便的使用场景验证功能

## 使用验证器

```php
<?php

namespace App\Controller\YourModule;

use App\Controller\BaseController;
use App\Validator\YourValidator;
use Hyperf\Di\Annotation\Inject;
use Hyperf\HttpServer\Annotation\Controller;
use Hyperf\HttpServer\Annotation\RequestMapping;
use Psr\Http\Message\ResponseInterface;

/**
 * @Controller(prefix="/your")
 */
class YourController extends BaseController
{

    /**
     * @Inject()
     * @var YourValidator
     */
    protected $yourValidator;

    /**
     * @RequestMapping(path="info",methods={"GET"})
     * @return ResponseInterface
     */
    public function info(): ResponseInterface
    {
        $params = $this->yourValidator->validate('info');
        
        // 业务逻辑
        
        return $this->response->success($params);
    }
}
```

