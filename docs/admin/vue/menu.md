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

视图路径也可以填写外部链接地址，系统会以`内嵌iframe`的方式加载。

> 实现方式可查看[routeHelper.ts](https://github.com/arklnk/ark-admin-vuenext/blob/dev/src/router/helper/routeHelper.ts)

## 菜单Icon

系统图标方案选择了[UnoCss preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/)方案。

由于`UnoCSS`使用静态提取在构建时工作，在编译时无法知道这些菜单Icon导致不会被编译其中，需要在`icon.data.ts`中加入，这些图标会自动添加到`safeList`，加入后即可正常使用。

> `icon.data.ts`文件定义在`src/components/Icon/data`下