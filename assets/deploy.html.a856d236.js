import{_ as n,o as s,c as a,e}from"../app.2fb2eae3.mjs";const t="/images/zero/architechture.svg",i="/images/zero/deploy.png",l={},p=e('<h1 id="\u5E94\u7528\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u90E8\u7F72" aria-hidden="true">#</a> \u5E94\u7528\u90E8\u7F72</h1><h2 id="\u5FAE\u670D\u52A1\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u670D\u52A1\u90E8\u7F72" aria-hidden="true">#</a> \u5FAE\u670D\u52A1\u90E8\u7F72</h2><p>go-zero\u5B98\u65B9\u8BBE\u8BA1\u7406\u5FF5</p><ul><li>\u4FDD\u6301\u7B80\u5355\uFF0C\u7B2C\u4E00\u539F\u5219</li><li>\u5F39\u6027\u8BBE\u8BA1\uFF0C\u9762\u5411\u6545\u969C\u7F16\u7A0B</li><li>\u5DE5\u5177\u5927\u4E8E\u7EA6\u5B9A\u548C\u6587\u6863</li><li>\u9AD8\u53EF\u7528</li><li>\u9AD8\u5E76\u53D1</li><li>\u6613\u6269\u5C55</li><li>\u5BF9\u4E1A\u52A1\u5F00\u53D1\u53CB\u597D\uFF0C\u5C01\u88C5\u590D\u6742\u5EA6</li><li>\u7EA6\u675F\u505A\u4E00\u4EF6\u4E8B\u53EA\u6709\u4E00\u79CD\u65B9\u5F0F</li></ul><p><img src="'+t+'" alt="architechture"></p><h2 id="\u6839\u636E\u9700\u6C42\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u9700\u6C42\u90E8\u7F72" aria-hidden="true">#</a> \u6839\u636E\u9700\u6C42\u90E8\u7F72</h2><p>\u9879\u76EE\u524D\u671F\uFF0C\u6211\u4EEC\u53EF\u80FD\u4E0D\u9700\u8981\u592A\u591A\u529F\u80FD\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u9700\u6C42\u7B80\u5316\u4E00\u4E0B\u90E8\u7F72\uFF0C</p><p>ark-admin\u6838\u5FC3core\u6A21\u5757\u6CA1\u7528\u5230rpc\uFF0C\u53EA\u7528\u4E86api\u548Cmodel\u3002</p><p><img src="'+i+`" alt="architechture"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/arklnk/ark-admin-zero.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ark-admin-zero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gateway</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.21.5
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gateway
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./deploy/gateway/conf.d<span class="token punctuation">:</span>/etc/nginx/conf.d
      <span class="token punctuation">-</span> ./data/gateway/log<span class="token punctuation">:</span>/var/log/nginx
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ark_admin_net

  <span class="token key atrule">ark-admin-vuenext</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> arklnk/ark<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>vuenext<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ark<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>vuenext
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./deploy/vuenext/nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ark_admin_net

  <span class="token key atrule">ark-admin-zero</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> arklnk/ark<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>zero<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> ark<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>zero
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./deploy/service/core/etc<span class="token punctuation">:</span>/app/etc
      <span class="token punctuation">-</span> ./data/service/logs<span class="token punctuation">:</span>/app/logs
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ark_admin_net

  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> root
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> ark_admin
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/mysql/data<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> ./dev/sql/<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d/
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ark_admin_net

  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> phpmyadmin<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> phpmyadmin
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:80&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PMA_ARBITRARY=1
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ark_admin_net

  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>6.2.5
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/redis/data<span class="token punctuation">:</span>/data<span class="token punctuation">:</span>rw
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&quot;redis-server --requirepass 123456  --appendonly yes&quot;</span>
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ark_admin_net

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ark_admin_net</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[p];function u(o,r){return s(),a("div",null,c)}const k=n(l,[["render",u],["__file","deploy.html.vue"]]);export{k as default};
