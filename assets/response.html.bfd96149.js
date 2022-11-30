import{_ as n,o as s,c as a,e as t}from"../app.2fb2eae3.mjs";const e={},o=t(`<h1 id="\u7EDF\u4E00\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u7EDF\u4E00\u8FD4\u56DE\u503C</h1><p>\u8FD4\u56DE\u683C\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ....
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F4D\u7F6E\uFF1Acommon/response/response.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> response

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Body <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Code <span class="token builtin">int</span>         <span class="token string">\`json:&quot;code&quot;\`</span>
	Msg  <span class="token builtin">string</span>      <span class="token string">\`json:&quot;msg&quot;\`</span>
	Data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;data,omitempty&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Response</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> resp <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> body Body
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		body<span class="token punctuation">.</span>Code <span class="token operator">=</span> <span class="token number">0</span>
		body<span class="token punctuation">.</span>Msg <span class="token operator">=</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		body<span class="token punctuation">.</span>Code <span class="token operator">=</span> <span class="token number">200</span>
		body<span class="token punctuation">.</span>Msg <span class="token operator">=</span> <span class="token string">&quot;success&quot;</span>
		body<span class="token punctuation">.</span>Data <span class="token operator">=</span> resp
	<span class="token punctuation">}</span>
	httpx<span class="token punctuation">.</span><span class="token function">OkJson</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","response.html.vue"]]);export{r as default};
