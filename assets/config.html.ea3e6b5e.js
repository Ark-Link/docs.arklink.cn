import{_ as n,o as s,c as a,e}from"../app.2fb2eae3.mjs";const i={},l=e(`<h1 id="\u914D\u7F6E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7BA1\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u7BA1\u7406</h1><h2 id="\u5E94\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u914D\u7F6E" aria-hidden="true">#</a> \u5E94\u7528\u914D\u7F6E</h2><p>\u4F1A\u6839\u636E\u4E0B\u5217\u6587\u4EF6\u52A0\u8F7D\u989D\u5916\u7684\u73AF\u5883\u53D8\u91CF, \u914D\u7F6E\u52A0\u8F7D\u7531<code>NODE_ENV</code>\u51B3\u5B9A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.env                <span class="token comment"># \u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u4F1A\u52A0\u8F7D</span>
.env.local          <span class="token comment"># \u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u4F1A\u52A0\u8F7D\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>
.env.<span class="token punctuation">[</span>NODE_ENV<span class="token punctuation">]</span>         <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u6A21\u5F0F\u4E0B\u52A0\u8F7D</span>
.env.<span class="token punctuation">[</span>NODE_ENV<span class="token punctuation">]</span>.local   <span class="token comment"># \u53EA\u5728\u6307\u5B9A\u6A21\u5F0F\u4E0B\u52A0\u8F7D\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u8BF4\u660E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># server port</span>
PORT <span class="token operator">=</span> <span class="token number">7001</span>

<span class="token comment"># global prefix, using in router\u3001redis</span>
GLOBAL_PREFIX <span class="token operator">=</span> admin

<span class="token comment"># specify id as the root administrator</span>
ROOT_USER_ID <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># user password salt</span>
USER_PWD_SALT <span class="token operator">=</span> K8i8mTfc5sTXO7OG
<span class="token comment"># user default password</span>
USER_DEFAULT_PWD <span class="token operator">=</span> <span class="token number">123456</span>

<span class="token comment"># minimum internal requirements protect id</span>
PROTECT_SYS_PERMMENU_MAX_ID <span class="token operator">=</span> <span class="token number">44</span>
PROTECT_SYS_DICTIONARY_MAX_ID <span class="token operator">=</span> <span class="token number">4</span>

<span class="token comment"># jwt</span>
JWT_SECRET <span class="token operator">=</span> kRZ3kA7LuB4LqOWi
JWT_EXPIRES <span class="token operator">=</span> <span class="token number">86400</span>

<span class="token comment"># redis</span>
REDIS_HOST <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
REDIS_PORT <span class="token operator">=</span> <span class="token number">6379</span>
REDIS_PASSWORD <span class="token operator">=</span> <span class="token number">123456</span>
REDIS_DB <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment"># db</span>
DB_HOST <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
DB_PORT <span class="token operator">=</span> <span class="token number">3306</span>
DB_USERNAME <span class="token operator">=</span> root
DB_PASSWORD <span class="token operator">=</span> root
DB_DATABASE <span class="token operator">=</span> <span class="token string">&#39;ark_admin&#39;</span>
DB_LOGGING <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># swagger</span>
SWAGGER_ENABLE <span class="token operator">=</span> <span class="token boolean">true</span>
SWAGGER_PATH <span class="token operator">=</span> documentation

<span class="token comment"># logger</span>
LOGGER_LEVEL <span class="token operator">=</span> verbose
LOGGER_MAX_FILES <span class="token operator">=</span> <span class="token number">31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u5B89\u5168\u6CE8\u610F\u4E8B\u9879</p><p>\u5982\u679C\u4F60\u60F3\u8981\u81EA\u5B9A\u4E49<code>env</code>\u53D8\u91CF\u7684\u524D\u7F00\uFF0C\u90A3\u4E48\u542F\u52A8\u5E94\u7528\u65F6\u914D\u7F6E<code>NODE_ENV</code>\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002</p><p><code>.env.*.local</code>\u6587\u4EF6\u662F\u672C\u5730\u7684\uFF0C\u53EF\u4EE5\u5305\u542B\u654F\u611F\u53D8\u91CF\u3002\u5E76\u4E14\u4F1A\u88AB<code>git</code>\u5FFD\u7565\u3002</p></div>`,7),o=[l];function c(r,p){return s(),a("div",null,o)}const d=n(i,[["render",c],["__file","config.html.vue"]]);export{d as default};
