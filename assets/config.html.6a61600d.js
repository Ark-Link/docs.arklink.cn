import{_ as n,o as s,c as a,e}from"../app.2fb2eae3.mjs";const t="/images/zero/dictionary.png",p={},o=e(`<h1 id="\u914D\u7F6E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7BA1\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u7BA1\u7406</h1><h2 id="\u5E94\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u914D\u7F6E" aria-hidden="true">#</a> \u5E94\u7528\u914D\u7F6E</h2><p>\u8DEF\u5F84\uFF1Aapp/core/cmd/api/etc/core-api.yaml</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">Name</span><span class="token punctuation">:</span> core<span class="token punctuation">-</span>api
<span class="token key atrule">Host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">7001</span>
<span class="token key atrule">Mode</span><span class="token punctuation">:</span> dev
<span class="token key atrule">Salt</span><span class="token punctuation">:</span> K8i8mTfc5sTXO7OG

<span class="token key atrule">Log</span><span class="token punctuation">:</span>
  <span class="token key atrule">Mode</span><span class="token punctuation">:</span> console
  <span class="token key atrule">Path</span><span class="token punctuation">:</span> logs/core
  <span class="token key atrule">KeepDays</span><span class="token punctuation">:</span> <span class="token number">7</span>

<span class="token key atrule">JwtAuth</span><span class="token punctuation">:</span>
  <span class="token key atrule">AccessSecret</span><span class="token punctuation">:</span> kRZ3kA7LuB4LqOWi
  <span class="token key atrule">AccessExpire</span><span class="token punctuation">:</span> <span class="token number">86400</span>

<span class="token key atrule">Mysql</span><span class="token punctuation">:</span>
  <span class="token key atrule">DataSource</span><span class="token punctuation">:</span> root<span class="token punctuation">:</span>root@tcp(127.0.0.1<span class="token punctuation">:</span>3306)/ark_admin<span class="token punctuation">?</span>charset=utf8mb4<span class="token important">&amp;parseTime=true&amp;loc=Asia%2FShanghai</span>

<span class="token key atrule">Cache</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token key atrule">Pass</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span>
    <span class="token key atrule">Type</span><span class="token punctuation">:</span> node

<span class="token key atrule">Redis</span><span class="token punctuation">:</span>
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Pass</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span>
  <span class="token key atrule">Type</span><span class="token punctuation">:</span> node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a> \u9ED8\u8BA4\u914D\u7F6E</h2><p>\u8DEF\u5F84\uFF1Aconfig/core.go</p><blockquote><p>\u9ED8\u8BA4\u914D\u7F6E\u5C5E\u4E8E\u7CFB\u7EDF\u7684\u654F\u611F\u914D\u7F6E\uFF0C\u8FD9\u91CC\u5236\u5B9A\u4E86\u6838\u5FC3\u7CFB\u7EDF\u7684\u4FDD\u62A4\u89C4\u5219\uFF08\u9632\u6B62\u7528\u6237\u8BEF\u5220\u6838\u5FC3\u529F\u80FD\uFF09\uFF0C\u5982\u975E\u5FC5\u8981\uFF0C\u8BF7\u52FF\u4FEE\u6539</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	SysPermMenuPrefix          <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span>                             <span class="token comment">// api\u524D\u7F00</span>
	SysJwtUserId               <span class="token operator">=</span> <span class="token string">&quot;userId&quot;</span>                        <span class="token comment">// JWT key</span>
	SysPermMenuCachePrefix     <span class="token operator">=</span> <span class="token string">&quot;cache:arkAdmin:permMenu:&quot;</span>      <span class="token comment">// \u6743\u9650</span>
	SysOnlineUserCachePrefix   <span class="token operator">=</span> <span class="token string">&quot;cache:arkAdmin:online:&quot;</span>        <span class="token comment">// \u5728\u7EBF\u7528\u6237</span>
	SysLoginCaptchaCachePrefix <span class="token operator">=</span> <span class="token string">&quot;cache:arkAdmin:captcha:&quot;</span>       <span class="token comment">// \u767B\u5F55\u9A8C\u8BC1\u7801</span>
	SysUserIdCachePrefix       <span class="token operator">=</span> <span class="token string">&quot;cache:arkAdmin:sysUser:id:&quot;</span>    <span class="token comment">// \u767B\u5F55\u7528\u6237</span>
	SysDateFormat              <span class="token operator">=</span> <span class="token string">&quot;2006-01-02 15:04:05&quot;</span>           <span class="token comment">// \u683C\u5F0F\u5316\u65E5\u671F</span>
	SysNewUserDefaultPassword  <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span>                        <span class="token comment">// \u65B0\u7528\u6237\u9ED8\u8BA4\u5BC6\u7801</span>
	SysProtectPermMenuMaxId    <span class="token operator">=</span> <span class="token number">44</span>                              <span class="token comment">// \u7CFB\u7EDF\u6838\u5FC3\u6743\u9650</span>
	SysProtectDictionaryMaxId  <span class="token operator">=</span> <span class="token number">4</span>                               <span class="token comment">// \u7CFB\u7EDF\u6838\u5FC3\u5B57\u5178</span>
	SysProtectUserId           <span class="token operator">=</span> <span class="token number">1</span>                               <span class="token comment">// \u8D85\u7EA7\u7BA1\u7406\u5458</span>
	SysProtectRoleId           <span class="token operator">=</span> <span class="token number">1</span>                               <span class="token comment">// \u8D85\u7EA7\u7BA1\u7406\u5458\u89D2\u8272</span>
	SysDefaultPermType         <span class="token operator">=</span> <span class="token number">2</span>                               <span class="token comment">// \u9ED8\u8BA4\u6743\u9650</span>
	SysEnable                  <span class="token operator">=</span> <span class="token number">1</span>                               <span class="token comment">// \u5F00\u542F</span>
	SysDisable                 <span class="token operator">=</span> <span class="token number">0</span>                               <span class="token comment">// \u7981\u7528</span>
	SysLoginLogType            <span class="token operator">=</span> <span class="token number">1</span>                               <span class="token comment">// \u767B\u5F55\u7C7B\u578B</span>
	SysTopParentId             <span class="token operator">=</span> <span class="token number">0</span>                               <span class="token comment">// \u9876\u7EA7id</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u52A8\u6001\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u914D\u7F6E" aria-hidden="true">#</a> \u52A8\u6001\u914D\u7F6E</h2><p><img src="`+t+'" alt="\u52A8\u6001\u914D\u7F6E"></p>',10),c=[o];function l(i,r){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","config.html.vue"]]);export{d as default};
