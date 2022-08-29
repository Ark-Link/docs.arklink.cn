# 菜单配置

分为`目录`和`菜单`, 前者不需要配置`视图路径`

## Meta配置说明

[typing](https://github.com/arklnk/ark-admin-vuenext/blob/dev/types/vue-router.d.ts)

``` ts
interface RouteMeta extends Record<string | number | symbol, unknown> {
    /**
     * 如果为真，那么不会在菜单栏进行显示
     */
    hidden?: boolean

    /**
     * 菜单标题
     */
    title?: string

    /**
     * 菜单icon，约定仅一级菜单需要icon，次级菜单均无需要配置
     */
    icon?: string

    /**
     * 路由过渡动画
     */
    transitionName?: RouterTransitionEnum

    /**
     * 内链菜单下的链接地址
     */
    iframeSrc?: string

    /**
     * 前端角色模式下使用（纯前端）
     */
    roles?: RoleEnum[]

    /**
     * 当前激活的菜单
     */
    currentActiveMenu?: string
  }
```

## 视图路径

所有的菜单视图（view）都是动态加载的，视图文件路径会自动扫描`/@/views/`下所有定义的`index.vue`或者`index.tsx`

文件路径也可以填写外部链接地址，系统会以 iframe 的方式加载

> 实现方式可查看[routeHelper.ts](https://github.com/arklnk/ark-admin-vuenext/blob/dev/src/router/helper/routeHelper.ts)
