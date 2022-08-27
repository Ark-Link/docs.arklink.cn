# 数据表关系

![database](https://raw.githubusercontent.com/arklnk/docs.arklnk.com/main/docs/admin/zero/images/database/database.png)

<a name="返回顶部"></a>

## 数据表列表

* [sys_dept(部门)](#sys_dept_pointer)

* [sys_dictionary(字典)](#sys_dictionary_pointer)

* [sys_job(工作岗位)](#sys_job_pointer)

* [sys_log(系统日志)](#sys_log_pointer)

* [sys_perm_menu(权限&菜单)](#sys_perm_menu_pointer)

* [sys_profession(职称)](#sys_profession_pointer)

* [sys_role(角色)](#sys_role_pointer)

* [sys_user(用户)](#sys_user_pointer)



## 数据表说明

<a name="sys_dept_pointer"></a>

* sys_dept表(部门)[↑](#返回顶部)

|  字段名称   |   字段类型   |        字段含义        |
| :---------: | :----------: | :--------------------: |
|     id      |   int(11)    |          编号          |
|  parent_id  |   int(11)    |         父级id         |
|    name     | varchar(50)  |        部门简称        |
|  full_name  | varchar(50)  |        部门全称        |
| unique_key  | varchar(50)  |         唯一值         |
|    type     |  tinyint(1)  | 1=公司 2=子公司 3=部门 |
|   status    |  tinyint(1)  |     0=禁用 1=开启      |
|  order_num  |   int(11)    |         排序值         |
|   remark    | varchar(200) |          备注          |
| create_time |  timestamp   |        创建时间        |
| update_time |  timestamp   |        更新时间        |

<a name="sys_dictionary_pointer"></a>

* sys_dictionary表(字典)[↑](#返回顶部)

|  字段名称   |   字段类型    |                           字段含义                           |
| :---------: | :-----------: | :----------------------------------------------------------: |
|     id      |    int(11)    |                             编号                             |
|  parent_id  |    int(11)    |                      0=配置集 !0=父级id                      |
|    name     |  varchar(50)  |                             名称                             |
|    type     |  tinyint(2)   | 1文本 2数字 3数组 4单选 5多选 6下拉 7日期 8时间 9单图 10多图 11单文件 12多文件 |
| unique_key  |  varchar(50)  |                            唯一值                            |
|    value    | varchar(2048) |                            配置值                            |
|   status    |  tinyint(1)   |                        0=禁用 1=开启                         |
|  order_num  |    int(11)    |                            排序值                            |
|   remark    | varchar(200)  |                             备注                             |
| create_time |   timestamp   |                           创建时间                           |
| update_time |   timestamp   |                           更新时间                           |

<a name="sys_job_pointer"></a>

* sys_job表(工作岗位)[↑](#返回顶部)

|  字段名称   |  字段类型   |   字段含义    |
| :---------: | :---------: | :-----------: |
|     id      |   int(11)   |     编号      |
|    name     | varchar(50) |   岗位名称    |
|   status    | tinyint(1)  | 0=禁用 1=开启 |
|  order_num  |   int(11)   |    排序值     |
| create_time |  timestamp  |   创建时间    |
| update_time |  timestamp  |   开启时间    |

<a name="sys_log_pointer"></a>

* sys_log表(系统日志)[↑](#返回顶部)

|  字段名称   |   字段类型    |       字段含义        |
| :---------: | :-----------: | :-------------------: |
|     id      |    int(10)    |         编号          |
|   user_id   |    int(11)    |       操作账号        |
|     ip      | varchar(100)  |          ip           |
|     uri     | varchar(200)  |       请求路径        |
|    type     |  tinyint(1)   | 1=登录日志 2=操作日志 |
|   request   | varchar(2048) |       请求数据        |
|   status    |  tinyint(1)   |     0=失败 1=成功     |
| create_time |   timestamp   |       创建时间        |
| update_time |   timestamp   |       更新时间        |

<a name="sys_perm_menu_pointer"></a>

* sys_perm_menu表(权限&菜单)[↑](#返回顶部)

|   字段名称    |   字段类型   |       字段含义       |
| :-----------: | :----------: | :------------------: |
|      id       |   int(11)    |         编号         |
|   parent_id   |   int(11)    |        父级id        |
|     name      | varchar(50)  |         名称         |
|    router     | varchar(200) |         路由         |
|     perms     | varchar(200) |         权限         |
|     type      |  tinyint(1)  | 0=目录 1=菜单 2=权限 |
|     icon      | varchar(50)  |         图标         |
|   order_num   |   int(11)    |        排序值        |
|   view_path   | varchar(200) |       页面路径       |
|    is_show    |  tinyint(1)  |    0=隐藏 1=显示     |
| active_router | varchar(200) |    当前激活的菜单    |
|  create_time  |  timestamp   |       创建时间       |
|  update_time  |  timestamp   |       更新时间       |

<a name="sys_profession_pointer"></a>

* sys_profession表(职称)[↑](#返回顶部)

|  字段名称   |  字段类型   |   字段含义    |
| :---------: | :---------: | :-----------: |
|     id      |   int(11)   |     编号      |
|    name     | varchar(50) |     职称      |
|   status    | tinyint(1)  | 0=禁用 1=开启 |
|  order_num  |   int(11)   |    排序值     |
| create_time |  timestamp  |   创建时间    |
| update_time |  timestamp  |   更新时间    |

<a name="sys_role_pointer"></a>

* sys_role表(角色)[↑](#返回顶部)

|   字段名称    |   字段类型   |   字段含义    |
| :-----------: | :----------: | :-----------: |
|      id       |   int(10)    |     编号      |
|   parent_id   |   int(11)    |    父级id     |
|     name      | varchar(50)  |     名称      |
|  unique_key   | varchar(50)  |   唯一标识    |
|    remark     | varchar(200) |     备注      |
| perm_menu_ids |     json     |    权限集     |
|    status     |  tinyint(1)  | 0=禁用 1=开启 |
|   order_num   |   int(11)    |    排序值     |
|  create_time  |  timestamp   |   创建时间    |
|  update_time  |  timestamp   |   更新时间    |

<a name="sys_user_pointer"></a>

* sys_user表(用户)[↑](#返回顶部)

|   字段名称    |   字段类型   |     字段含义     |
| :-----------: | :----------: | :--------------: |
|      id       |   int(10)    |       编号       |
|    account    | varchar(50)  |       账号       |
|   password    |   char(32)   |       密码       |
|   username    | varchar(50)  |       姓名       |
|   nickname    | varchar(50)  |       昵称       |
|    avatar     | varchar(400) |       头像       |
|    gender     |  tinyint(1)  | 0=保密 1=女 2=男 |
|     email     | varchar(50)  |       邮件       |
|    mobile     |   char(11)   |      手机号      |
| profession_id |   int(11)    |       职称       |
|    job_id     |   int(11)    |       岗位       |
|    dept_id    |   int(11)    |       部门       |
|   role_ids    |     json     |      角色集      |
|    status     |  tinyint(1)  |  0=禁用 1=开启   |
|   order_num   |   int(11)    |      排序值      |
|    remark     | varchar(200) |       备注       |
|  create_time  |  timestamp   |     创建时间     |
|  update_time  |  timestamp   |     更新时间     |

```sql
CREATE TABLE `sys_dept`
(
    `id`          int(11) UNSIGNED NOT NULL COMMENT '编号',
    `parent_id`   int(11) UNSIGNED NOT NULL COMMENT '父级id',
    `name`        varchar(50)  NOT NULL COMMENT '部门简称',
    `full_name`   varchar(50)  NOT NULL COMMENT '部门全称',
    `unique_key`  varchar(50)  NOT NULL COMMENT '唯一值',
    `type`        tinyint(1) UNSIGNED NOT NULL COMMENT '1=公司 2=子公司 3=部门',
    `status`      tinyint(1) UNSIGNED NOT NULL COMMENT '0=禁用 1=开启',
    `order_num`   int(11) UNSIGNED NOT NULL COMMENT '排序值',
    `remark`      varchar(200) NOT NULL DEFAULT '' COMMENT '备注',
    `create_time` timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='部门';
```



```sql
CREATE TABLE `sys_dictionary`
(
    `id`          int(11) UNSIGNED NOT NULL COMMENT '编号',
    `parent_id`   int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '0=配置集 !0=父级id',
    `name`        varchar(50)   NOT NULL COMMENT '名称',
    `type`        tinyint(2) UNSIGNED NOT NULL DEFAULT '1' COMMENT '1文本 2数字 3数组 4单选 5多选 6下拉 7日期 8时间 9单图 10多图 11单文件 12多文件',
    `unique_key`  varchar(50)   NOT NULL COMMENT '唯一值',
    `value`       varchar(2048) NOT NULL DEFAULT '' COMMENT '配置值',
    `status`      tinyint(1) UNSIGNED NOT NULL DEFAULT '1' COMMENT '0=禁用 1=开启',
    `order_num`   int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序值',
    `remark`      varchar(200)  NOT NULL DEFAULT '' COMMENT '备注',
    `create_time` timestamp     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` timestamp     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统参数';
```



```sql
CREATE TABLE `sys_job`
(
    `id`          int(11) UNSIGNED NOT NULL COMMENT '编号',
    `name`        varchar(50) NOT NULL COMMENT '岗位名称',
    `status`      tinyint(1) UNSIGNED NOT NULL DEFAULT '1' COMMENT '0=禁用 1=开启 ',
    `order_num`   int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序值',
    `create_time` timestamp   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` timestamp   NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '开启时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='工作岗位';
```



```sql
CREATE TABLE `sys_log`
(
    `id`          int(10) UNSIGNED NOT NULL COMMENT '编号',
    `user_id`     int(11) UNSIGNED NOT NULL COMMENT '操作账号',
    `ip`          varchar(100)  NOT NULL COMMENT 'ip',
    `uri`         varchar(200)  NOT NULL COMMENT '请求路径',
    `type`        tinyint(1) UNSIGNED NOT NULL COMMENT '1=登录日志 2=操作日志',
    `request`     varchar(2048) NOT NULL DEFAULT '' COMMENT '请求数据',
    `status`      tinyint(1) UNSIGNED NOT NULL DEFAULT '1' COMMENT '0=失败 1=成功',
    `create_time` timestamp     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统日志';
```



```sql
CREATE TABLE `sys_perm_menu`
(
    `id`            int(11) UNSIGNED NOT NULL COMMENT '编号',
    `parent_id`     int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '父级id',
    `name`          varchar(50)  NOT NULL COMMENT '名称',
    `router`        varchar(200) NOT NULL DEFAULT '' COMMENT '路由',
    `perms`         varchar(200) NOT NULL DEFAULT '' COMMENT '权限',
    `type`          tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '0=目录 1=菜单 2=权限',
    `icon`          varchar(50)  NOT NULL DEFAULT '' COMMENT '图标',
    `order_num`     int(11) UNSIGNED DEFAULT '0' COMMENT '排序值',
    `view_path`     varchar(200) NOT NULL DEFAULT '' COMMENT '页面路径',
    `is_show`       tinyint(1) UNSIGNED DEFAULT '1' COMMENT '0=隐藏 1=显示',
    `active_router` varchar(200) NOT NULL DEFAULT '' COMMENT '当前激活的菜单',
    `create_time`   timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time`   timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='权限&菜单';
```



```sql
CREATE TABLE `sys_profession`
(
    `id`          int(11) UNSIGNED NOT NULL COMMENT '编号',
    `name`        varchar(50) NOT NULL COMMENT '职称',
    `status`      tinyint(1) UNSIGNED NOT NULL DEFAULT '1' COMMENT '0=禁用 1=开启',
    `order_num`   int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序值',
    `create_time` timestamp   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` timestamp   NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='职称';
```



```sql
CREATE TABLE `sys_role`
(
    `id`            int(10) UNSIGNED NOT NULL COMMENT '编号',
    `parent_id`     int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '父级id',
    `name`          varchar(50)  NOT NULL COMMENT '名称',
    `unique_key`    varchar(50)  NOT NULL COMMENT '唯一标识',
    `remark`        varchar(200) NOT NULL DEFAULT '' COMMENT '备注',
    `perm_menu_ids` json         NOT NULL COMMENT '权限集',
    `status`        tinyint(1) UNSIGNED NOT NULL DEFAULT '1' COMMENT '0=禁用 1=开启',
    `order_num`     int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序值',
    `create_time`   timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time`   timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色';
```



```sql
CREATE TABLE `sys_user`
(
    `id`            int(10) UNSIGNED NOT NULL COMMENT '编号',
    `account`       varchar(50)  NOT NULL COMMENT '账号',
    `password`      char(32)     NOT NULL COMMENT '密码',
    `username`      varchar(50)  NOT NULL COMMENT '姓名',
    `nickname`      varchar(50)  NOT NULL DEFAULT '' COMMENT '昵称',
    `avatar`        varchar(400) NOT NULL DEFAULT '' COMMENT '头像',
    `gender`        tinyint(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '0=保密 1=女 2=男',
    `email`         varchar(50)  NOT NULL DEFAULT '' COMMENT '邮件',
    `mobile`        char(11)     NOT NULL DEFAULT '' COMMENT '手机号',
    `profession_id` int(11) UNSIGNED NOT NULL COMMENT '职称',
    `job_id`        int(11) UNSIGNED NOT NULL COMMENT '岗位',
    `dept_id`       int(11) UNSIGNED NOT NULL COMMENT '部门',
    `role_ids`      json         NOT NULL COMMENT '角色集',
    `status`        tinyint(1) UNSIGNED NOT NULL DEFAULT '1' COMMENT '0=禁用 1=开启',
    `order_num`     int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '排序值',
    `remark`        varchar(200) NOT NULL DEFAULT '' COMMENT '备注',
    `create_time`   timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time`   timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户';
```

