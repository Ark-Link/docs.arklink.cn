# 数据模型

## 数据模型分类

```
Model:
    BaseModel.php         # 模型基类（该基类编写了一些常用的操作方法）
    SysCronLog.php        # 定时任务日志模型
    SysCronNode.php       # 任务节点模型
    SysCronTask.php       # 定时任务模型
    SysDepartment.php     # 部门模型
    SysLoginLog.php       # 登录日志模型
    SysMenu.php           # 菜单权限模型
    SysRole.php           # 角色模式
    SysUser.php           # 用户模型
```

## 模型基类常用的方法

```php
<?php
declare(strict_types=1);

namespace App\Model;

use App\Utils\DataFormat;
use Hyperf\DbConnection\Model\Model;

/**
 * 模型基类
 */
class BaseModel extends Model
{
    /**
     * 添加数据
     *
     * @param array $data
     */
    public function addItem(array $data)
    {
    }

    /**
     * 删除数据
     *
     * @param array $where [['','','']]
     */
    public function deleteItem(array $where)
    {
    }

    /**
     * 获取一条数据（一维数组）
     *
     * @param array $where
     * @param array|string[] $field
     * @return array
     */
    public function getItem(array $where, array $field = ['*']): array
    {
    }

    /**
     * 获取一组数据（二维数组）
     *
     * @param array $where [['','','']]
     * @param string[] $field
     * @param array $sort
     * @return array
     */
    public function getItems(array $where, array $field = ['*'], array $sort = []): array
    {
    }

    /**
     * 获取区间内数据
     *
     * @param array $where [['','','']]
     * @param string[] $field
     * @param array $sort
     * @return array
     */
    public function getItemsIn(array $where, array $field = ['*'], array $sort = []): array
    {
    }

    /**
     * 更新数据
     *
     * @param array $where [['','','']]
     * @param array $data
     */
    public function updateItem(array $where, array $data)
    {
    }

    /**
     * 获取全部数据
     *
     * @param string[] $field
     * @param array $sort
     * @return array
     */
    public function getAll(array $field = ['*'], array $sort = []): array
    {
    }

    /**
     * 分页获取数据
     *
     * @param int $page
     * @param int $limit
     * @param array|array[] $where [['','','']]
     * @param string[] $field
     * @param array $order
     * @return array
     */
    public function page(int $page, int $limit, array $where = [], array $field = ['*'], array $order = []): array
    {
    }

    /**
     * 将模型查找的数据转化为数组
     *
     * @param $data
     * @return array
     */
    public function formatData($data): array
    {
    }
}
```

> 注：
>
> 1、where条件统一采用二维数组格式
>
> 2、通过基类模型方法所获取的数据统一为数组形式，并自动将下划线统一转为驼峰形式

## 编写模型

```
php bin/hyperf.php arkGen:model your_table
```

```php
<?php

declare (strict_types=1);
namespace App\Model;

/**
 * @property int $id 
 * @property string $name 
 * @property string $label 
 * @property string $remark 
 * @property int $root 
 * @property string $menu_ids 
 * @property string $department_ids 
 * @property \Carbon\Carbon $updated_at 
 * @property \Carbon\Carbon $created_at 
 */
class YourTable extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'your_table';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = ['id' => 'integer', 'root' => 'integer', 'updated_at' => 'datetime', 'created_at' => 'datetime'];
}
```

> 注：
>
> 1、生成的模型，统一继承BaseModel

