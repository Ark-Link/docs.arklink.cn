import{_ as n,o as s,c as a,e as t}from"../app.2fb2eae3.mjs";const e={},o=t(`<h1 id="\u7EDF\u4E00\u9519\u8BEF\u7801" tabindex="-1"><a class="header-anchor" href="#\u7EDF\u4E00\u9519\u8BEF\u7801" aria-hidden="true">#</a> \u7EDF\u4E00\u9519\u8BEF\u7801</h1><h2 id="\u81EA\u5B9A\u4E49\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9519\u8BEF" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9519\u8BEF</h2><p>\u8FD4\u56DE\u683C\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u670D\u52A1\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F4D\u7F6E\uFF1Acommon/errorx/baseerror.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> errorx

<span class="token keyword">type</span> CodeError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Code <span class="token builtin">int</span>    <span class="token string">\`json:&quot;code&quot;\`</span>
	Msg  <span class="token builtin">string</span> <span class="token string">\`json:&quot;msg&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> CodeErrorResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Code <span class="token builtin">int</span>    <span class="token string">\`json:&quot;code&quot;\`</span>
	Msg  <span class="token builtin">string</span> <span class="token string">\`json:&quot;msg&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewCodeError</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">,</span> msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeError<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> code<span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewDefaultError</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">NewCodeError</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token function">MapErrMsg</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewHandlerError</span><span class="token punctuation">(</span>code <span class="token builtin">int</span><span class="token punctuation">,</span> msg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">NewCodeError</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>CodeError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> e<span class="token punctuation">.</span>Msg
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>CodeError<span class="token punctuation">)</span> <span class="token function">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>CodeErrorResponse <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>CodeErrorResponse<span class="token punctuation">{</span>
		Code<span class="token punctuation">:</span> e<span class="token punctuation">.</span>Code<span class="token punctuation">,</span>
		Msg<span class="token punctuation">:</span>  e<span class="token punctuation">.</span>Msg<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u9519\u8BEF\u7801" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9519\u8BEF\u7801" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9519\u8BEF\u7801</h2><p>\u4F4D\u7F6E\uFF1Acommon/errorx/errormsg.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> errorx

<span class="token keyword">var</span> errorMsg <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	ServerErrorCode              <span class="token operator">=</span> <span class="token number">1000</span>
	ParamErrorCode               <span class="token operator">=</span> <span class="token number">1001</span>
	CaptchaErrorCode             <span class="token operator">=</span> <span class="token number">1002</span>
	AccountErrorCode             <span class="token operator">=</span> <span class="token number">1003</span>
	PasswordErrorCode            <span class="token operator">=</span> <span class="token number">1004</span>
	NotPermMenuErrorCode         <span class="token operator">=</span> <span class="token number">1005</span>
	DeletePermMenuErrorCode      <span class="token operator">=</span> <span class="token number">1006</span>
	ParentPermMenuErrorCode      <span class="token operator">=</span> <span class="token number">1007</span>
	AddRoleErrorCode             <span class="token operator">=</span> <span class="token number">1008</span>
	DeleteRoleErrorCode          <span class="token operator">=</span> <span class="token number">1009</span>
	AddDeptErrorCode             <span class="token operator">=</span> <span class="token number">1010</span>
	DeleteDeptErrorCode          <span class="token operator">=</span> <span class="token number">1011</span>
	AddJobErrorCode              <span class="token operator">=</span> <span class="token number">1012</span>
	DeleteJobErrorCode           <span class="token operator">=</span> <span class="token number">1013</span>
	AddProfessionErrorCode       <span class="token operator">=</span> <span class="token number">1014</span>
	DeleteProfessionErrorCode    <span class="token operator">=</span> <span class="token number">1015</span>
	AddUserErrorCode             <span class="token operator">=</span> <span class="token number">1016</span>
	DeptHasUserErrorCode         <span class="token operator">=</span> <span class="token number">1017</span>
	RoleIsUsingErrorCode         <span class="token operator">=</span> <span class="token number">1018</span>
	ParentRoleErrorCode          <span class="token operator">=</span> <span class="token number">1019</span>
	ParentDeptErrorCode          <span class="token operator">=</span> <span class="token number">1020</span>
	AccountDisableErrorCode      <span class="token operator">=</span> <span class="token number">1021</span>
	SetParentIdErrorCode         <span class="token operator">=</span> <span class="token number">1022</span>
	SetParentTypeErrorCode       <span class="token operator">=</span> <span class="token number">1023</span>
	AddConfigErrorCode           <span class="token operator">=</span> <span class="token number">1024</span>
	AddDictionaryErrorCode       <span class="token operator">=</span> <span class="token number">1025</span>
	AuthErrorCode                <span class="token operator">=</span> <span class="token number">1026</span>
	DeleteDictionaryErrorCode    <span class="token operator">=</span> <span class="token number">1027</span>
	JobIsUsingErrorCode          <span class="token operator">=</span> <span class="token number">1028</span>
	ProfessionIsUsingErrorCode   <span class="token operator">=</span> <span class="token number">1029</span>
	ForbiddenErrorCode           <span class="token operator">=</span> <span class="token number">1030</span>
	UpdateRoleUniqueKeyErrorCode <span class="token operator">=</span> <span class="token number">1031</span>
	UpdateDeptUniqueKeyErrorCode <span class="token operator">=</span> <span class="token number">1032</span>
	AssigningRolesErrorCode      <span class="token operator">=</span> <span class="token number">1033</span>
	DeptIdErrorCode              <span class="token operator">=</span> <span class="token number">1034</span>
	ProfessionIdErrorCode        <span class="token operator">=</span> <span class="token number">1035</span>
	JobIdErrorCode               <span class="token operator">=</span> <span class="token number">1036</span>
	ParentRoleIdErrorCode        <span class="token operator">=</span> <span class="token number">1037</span>
	ParentDeptIdErrorCode        <span class="token operator">=</span> <span class="token number">1038</span>
	ParentPermMenuIdErrorCode    <span class="token operator">=</span> <span class="token number">1039</span>
	ParentDictionaryIdErrorCode  <span class="token operator">=</span> <span class="token number">1040</span>
	DictionaryIdErrorCode        <span class="token operator">=</span> <span class="token number">1041</span>
	PermMenuIdErrorCode          <span class="token operator">=</span> <span class="token number">1042</span>
	RoleIdErrorCode              <span class="token operator">=</span> <span class="token number">1043</span>
	UserIdErrorCode              <span class="token operator">=</span> <span class="token number">1044</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	errorMsg <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	errorMsg<span class="token punctuation">[</span>ServerErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u670D\u52A1\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5&quot;</span>
	errorMsg<span class="token punctuation">[</span>CaptchaErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u9A8C\u8BC1\u7801\u9519\u8BEF&quot;</span>
	errorMsg<span class="token punctuation">[</span>AccountErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8D26\u53F7\u9519\u8BEF&quot;</span>
	errorMsg<span class="token punctuation">[</span>PasswordErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5BC6\u7801\u9519\u8BEF&quot;</span>
	errorMsg<span class="token punctuation">[</span>NotPermMenuErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u6743\u9650\u4E0D\u8DB3&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeletePermMenuErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u6743\u9650\u83DC\u5355\u5B58\u5728\u5B50\u7EA7\u6743\u9650\u83DC\u5355&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentPermMenuErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7236\u7EA7\u83DC\u5355\u4E0D\u80FD\u4E3A\u81EA\u5DF1&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddRoleErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u89D2\u8272\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeleteRoleErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u89D2\u8272\u5B58\u5728\u5B50\u89D2\u8272&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddDeptErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u90E8\u95E8\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeleteDeptErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u90E8\u95E8\u5B58\u5728\u5B50\u90E8\u95E8&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddJobErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5C97\u4F4D\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeleteJobErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u5C97\u4F4D\u6B63\u5728\u4F7F\u7528\u4E2D&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddProfessionErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u804C\u79F0\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeleteProfessionErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u804C\u79F0\u6B63\u5728\u4F7F\u7528\u4E2D&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddUserErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8D26\u53F7\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeptHasUserErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u90E8\u95E8\u6B63\u5728\u4F7F\u7528\u4E2D&quot;</span>
	errorMsg<span class="token punctuation">[</span>RoleIsUsingErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u89D2\u8272\u6B63\u5728\u4F7F\u7528\u4E2D&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentRoleErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7236\u7EA7\u89D2\u8272\u4E0D\u80FD\u4E3A\u81EA\u5DF1&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentDeptErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7236\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u81EA\u5DF1&quot;</span>
	errorMsg<span class="token punctuation">[</span>AccountDisableErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8D26\u53F7\u5DF2\u7981\u7528&quot;</span>
	errorMsg<span class="token punctuation">[</span>SetParentIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u4E0D\u80FD\u8BBE\u7F6E\u5B50\u7EA7\u4E3A\u81EA\u5DF1\u7684\u7236\u7EA7&quot;</span>
	errorMsg<span class="token punctuation">[</span>SetParentTypeErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u6743\u9650\u7C7B\u578B\u4E0D\u80FD\u4F5C\u4E3A\u7236\u7EA7\u83DC\u5355&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddConfigErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u914D\u7F6E\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>AddDictionaryErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5B57\u5178\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>AuthErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u6388\u6743\u5DF2\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeleteDictionaryErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u5B57\u5178\u96C6\u5B58\u5728\u914D\u7F6E\u9879&quot;</span>
	errorMsg<span class="token punctuation">[</span>JobIsUsingErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u5C97\u4F4D\u6B63\u5728\u4F7F\u7528\u4E2D&quot;</span>
	errorMsg<span class="token punctuation">[</span>ProfessionIsUsingErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u8BE5\u804C\u79F0\u6B63\u5728\u4F7F\u7528\u4E2D&quot;</span>
	errorMsg<span class="token punctuation">[</span>ForbiddenErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7981\u6B62\u64CD\u4F5C&quot;</span>
	errorMsg<span class="token punctuation">[</span>UpdateRoleUniqueKeyErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u89D2\u8272\u6807\u8BC6\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>UpdateDeptUniqueKeyErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u90E8\u95E8\u6807\u8BC6\u5DF2\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>AssigningRolesErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u89D2\u8272\u4E0D\u5728\u53EF\u63A7\u8303\u56F4&quot;</span>
	errorMsg<span class="token punctuation">[</span>DeptIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u90E8\u95E8\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>ProfessionIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u804C\u79F0\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>JobIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5C97\u4F4D\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentRoleIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7236\u7EA7\u89D2\u8272\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentDeptIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7236\u7EA7\u90E8\u95E8\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentPermMenuIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7236\u7EA7\u83DC\u5355\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>ParentDictionaryIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5B57\u5178\u96C6\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>DictionaryIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u5B57\u5178\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>PermMenuIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u6743\u9650\u83DC\u5355\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>RoleIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u89D2\u8272\u4E0D\u5B58\u5728&quot;</span>
	errorMsg<span class="token punctuation">[</span>UserIdErrorCode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;\u7528\u6237\u4E0D\u5B58\u5728&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">MapErrMsg</span><span class="token punctuation">(</span>errCode <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> msg<span class="token punctuation">,</span> ok <span class="token operator">:=</span> errorMsg<span class="token punctuation">[</span>errCode<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token keyword">return</span> msg
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&quot;\u670D\u52A1\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F00\u542F\u81EA\u5B9A\u4E49\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u81EA\u5B9A\u4E49\u9519\u8BEF" aria-hidden="true">#</a> \u5F00\u542F\u81EA\u5B9A\u4E49\u9519\u8BEF</h2><p>\u4F4D\u7F6E\uFF1Aapp/core/cmd/api/core.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;ark-admin-zero/app/core/cmd/api/internal/config&quot;</span>
	<span class="token string">&quot;ark-admin-zero/app/core/cmd/api/internal/handler&quot;</span>
	<span class="token string">&quot;ark-admin-zero/app/core/cmd/api/internal/svc&quot;</span>
	<span class="token string">&quot;ark-admin-zero/common/errorx&quot;</span>

	<span class="token string">&quot;github.com/zeromicro/go-zero/core/conf&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/core/logx&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest&quot;</span>
	<span class="token string">&quot;github.com/zeromicro/go-zero/rest/httpx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> configFile <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;etc/core-api.yaml&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;the config file&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> c config<span class="token punctuation">.</span>Config
	conf<span class="token punctuation">.</span><span class="token function">MustLoad</span><span class="token punctuation">(</span><span class="token operator">*</span>configFile<span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span>

	server <span class="token operator">:=</span> rest<span class="token punctuation">.</span><span class="token function">MustNewServer</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>RestConf<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> server<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	ctx <span class="token operator">:=</span> svc<span class="token punctuation">.</span><span class="token function">NewServiceContext</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	handler<span class="token punctuation">.</span><span class="token function">RegisterHandlers</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>

	<span class="token comment">// \u81EA\u5B9A\u4E49\u9519\u8BEF</span>
	httpx<span class="token punctuation">.</span><span class="token function">SetErrorHandler</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">switch</span> e <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">*</span>errorx<span class="token punctuation">.</span>CodeError<span class="token punctuation">:</span>
			<span class="token keyword">return</span> http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">Data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> http<span class="token punctuation">.</span>StatusInternalServerError<span class="token punctuation">,</span> <span class="token boolean">nil</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> c<span class="token punctuation">.</span>Mode <span class="token operator">==</span> <span class="token string">&quot;dev&quot;</span> <span class="token punctuation">{</span>
		logx<span class="token punctuation">.</span><span class="token function">DisableStat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Starting server at %s:%d...\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>Host<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Port<span class="token punctuation">)</span>
	server<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function r(c,i){return s(),a("div",null,p)}const u=n(e,[["render",r],["__file","errorcode.html.vue"]]);export{u as default};
