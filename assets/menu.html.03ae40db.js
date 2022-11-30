import{_ as o,o as t,c as i,a as n,d as a,b as s,e as c,r as l}from"../app.2fb2eae3.mjs";const r={},d=n("h1",{id:"\u83DC\u5355\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83DC\u5355\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u83DC\u5355\u914D\u7F6E")],-1),p=n("p",null,[s("\u5206\u4E3A"),n("code",null,"\u76EE\u5F55"),s("\u548C"),n("code",null,"\u83DC\u5355"),s(", \u524D\u8005\u4E0D\u9700\u8981\u914D\u7F6E"),n("code",null,"\u89C6\u56FE\u8DEF\u5F84")],-1),u=n("h2",{id:"meta\u914D\u7F6E\u8BF4\u660E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#meta\u914D\u7F6E\u8BF4\u660E","aria-hidden":"true"},"#"),s(" Meta\u914D\u7F6E\u8BF4\u660E")],-1),m={href:"https://github.com/arklnk/ark-admin-vuenext/blob/dev/types/vue-router.d.ts",target:"_blank",rel:"noopener noreferrer"},v=s("typing"),b=c(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5982\u679C\u4E3A\u771F\uFF0C\u90A3\u4E48\u4E0D\u4F1A\u5728\u83DC\u5355\u680F\u8FDB\u884C\u663E\u793A
     */</span>
    hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>

    <span class="token doc-comment comment">/**
     * \u83DC\u5355\u6807\u9898
     */</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token doc-comment comment">/**
     * \u83DC\u5355icon\uFF0C\u7EA6\u5B9A\u4EC5\u4E00\u7EA7\u83DC\u5355\u9700\u8981icon\uFF0C\u6B21\u7EA7\u83DC\u5355\u5747\u65E0\u9700\u8981\u914D\u7F6E
     */</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token doc-comment comment">/**
     * \u8DEF\u7531\u8FC7\u6E21\u52A8\u753B
     */</span>
    transitionName<span class="token operator">?</span><span class="token operator">:</span> RouterTransitionEnum

    <span class="token doc-comment comment">/**
     * \u5185\u94FE\u83DC\u5355\u4E0B\u7684\u94FE\u63A5\u5730\u5740
     */</span>
    iframeSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token doc-comment comment">/**
     * \u524D\u7AEF\u89D2\u8272\u6A21\u5F0F\u4E0B\u4F7F\u7528\uFF08\u7EAF\u524D\u7AEF\uFF09
     */</span>
    roles<span class="token operator">?</span><span class="token operator">:</span> RoleEnum<span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u524D\u6FC0\u6D3B\u7684\u83DC\u5355
     */</span>
    currentActiveMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89C6\u56FE\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE\u8DEF\u5F84" aria-hidden="true">#</a> \u89C6\u56FE\u8DEF\u5F84</h2><p>\u6240\u6709\u7684\u83DC\u5355\u89C6\u56FE\uFF08view\uFF09\u90FD\u662F\u52A8\u6001\u52A0\u8F7D\u7684\uFF0C\u89C6\u56FE\u6587\u4EF6\u8DEF\u5F84\u4F1A\u81EA\u52A8\u626B\u63CF<code>/@/views/</code>\u4E0B\u6240\u6709\u5B9A\u4E49\u7684<code>index.vue</code>\u6216\u8005<code>index.tsx</code></p><p>\u89C6\u56FE\u8DEF\u5F84\u4E5F\u53EF\u4EE5\u586B\u5199\u5916\u90E8\u94FE\u63A5\u5730\u5740\uFF0C\u7CFB\u7EDF\u4F1A\u4EE5<code>\u5185\u5D4Ciframe</code>\u7684\u65B9\u5F0F\u52A0\u8F7D\u3002</p>`,4),k=s("\u5B9E\u73B0\u65B9\u5F0F\u53EF\u67E5\u770B"),h={href:"https://github.com/arklnk/ark-admin-vuenext/blob/dev/src/router/helper/routeHelper.ts",target:"_blank",rel:"noopener noreferrer"},_=s("routeHelper.ts"),f=n("h2",{id:"\u83DC\u5355icon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83DC\u5355icon","aria-hidden":"true"},"#"),s(" \u83DC\u5355Icon")],-1),g=s("\u7CFB\u7EDF\u56FE\u6807\u65B9\u6848\u9009\u62E9\u4E86"),x={href:"https://github.com/unocss/unocss/tree/main/packages/preset-icons/",target:"_blank",rel:"noopener noreferrer"},y=s("UnoCss preset-icons"),w=s("\u65B9\u6848\u3002"),E=n("p",null,[s("\u7531\u4E8E"),n("code",null,"UnoCSS"),s("\u4F7F\u7528\u9759\u6001\u63D0\u53D6\u5728\u6784\u5EFA\u65F6\u5DE5\u4F5C\uFF0C\u5728\u7F16\u8BD1\u65F6\u65E0\u6CD5\u77E5\u9053\u8FD9\u4E9B\u83DC\u5355Icon\u5BFC\u81F4\u4E0D\u4F1A\u88AB\u7F16\u8BD1\u5176\u4E2D\uFF0C\u9700\u8981\u5728"),n("code",null,"icon.data.ts"),s("\u4E2D\u52A0\u5165\uFF0C\u8FD9\u4E9B\u56FE\u6807\u4F1A\u81EA\u52A8\u6DFB\u52A0\u5230"),n("code",null,"safeList"),s("\uFF0C\u52A0\u5165\u540E\u5373\u53EF\u6B63\u5E38\u4F7F\u7528\u3002")],-1),I=n("blockquote",null,[n("p",null,[n("code",null,"icon.data.ts"),s("\u6587\u4EF6\u5B9A\u4E49\u5728"),n("code",null,"src/components/Icon/data"),s("\u4E0B")])],-1);function N(R,S){const e=l("ExternalLinkIcon");return t(),i("div",null,[d,p,u,n("p",null,[n("a",m,[v,a(e)])]),b,n("blockquote",null,[n("p",null,[k,n("a",h,[_,a(e)])])]),f,n("p",null,[g,n("a",x,[y,a(e)]),w]),E,I])}const B=o(r,[["render",N],["__file","menu.html.vue"]]);export{B as default};
