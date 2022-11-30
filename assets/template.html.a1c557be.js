import{_ as s,o as a,c as t,a as n,d as l,e as i,b as e,r as d}from"../app.2fb2eae3.mjs";const v={},u=i(`<h1 id="\u81EA\u5B9A\u4E49\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6A21\u677F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6A21\u677F</h1><h2 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main</h2><p>ark-admin\u81EA\u5B9A\u4E49\u4E86main\u6A21\u677F\uFF08\u4F4D\u7F6E\uFF1Adev/goctl/1.4.0/api/main.tpl\uFF09</p><p>\u5728main\u4E2D\u589E\u52A0\u4E86\u81EA\u5B9A\u4E49\u9519\u8BEF\u5904\u7406</p><div class="language-tpl ext-tpl line-numbers-mode"><pre class="language-tpl"><code>package main

import (
	&quot;flag&quot;
	&quot;fmt&quot;
	&quot;net/http&quot;

    &quot;ark-admin-zero/common/errorx&quot;
	{{.importPackages}}
	&quot;github.com/zeromicro/go-zero/rest/httpx&quot;
)

var configFile = flag.String(&quot;f&quot;, &quot;etc/{{.serviceName}}.yaml&quot;, &quot;the config file&quot;)

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &amp;c)

	server := rest.MustNewServer(c.RestConf)
	defer server.Stop()

	ctx := svc.NewServiceContext(c)
	handler.RegisterHandlers(server, ctx)

	// \u81EA\u5B9A\u4E49\u9519\u8BEF
	httpx.SetErrorHandler(func(err error) (int, interface{}) {
        switch e := err.(type) {
        case *errorx.CodeError:
            return http.StatusOK, e.Data()
        default:
            return http.StatusInternalServerError, nil
        }
    })

	fmt.Printf(&quot;Starting server at %s:%d...\\n&quot;, c.Host, c.Port)
	server.Start()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="handler" tabindex="-1"><a class="header-anchor" href="#handler" aria-hidden="true">#</a> handler</h2>`,6),o=e("\u4E3A\u4E86\u5F15\u5165"),c={href:"https://github.com/go-playground/validator",target:"_blank",rel:"noopener noreferrer"},m=e("go-playground/validator"),b=e("\uFF0Cark-admin\u81EA\u5B9A\u4E49\u4E86handler\uFF08\u4F4D\u7F6E\uFF1Adev/goctl/1.4.0/api/handler.tpl\uFF09"),p=i(`<p>\u5728main\u4E2D\u589E\u52A0\u4E86\u53C2\u6570\u6821\u9A8C\u548C\u4E2D\u6587\u9519\u8BEF\u63D0\u793A</p><div class="language-tpl ext-tpl line-numbers-mode"><pre class="language-tpl"><code>package {{.PkgName}}

import (
    {{if .HasRequest}}&quot;errors&quot;{{end}}
	&quot;net/http&quot;
	{{if .HasRequest}}&quot;reflect&quot;{{end}}

    {{if .HasRequest}}&quot;ark-admin-zero/common/errorx&quot;{{end}}
	&quot;ark-admin-zero/common/response&quot;
	{{.ImportPackages}}
    {{if .HasRequest}}
    &quot;github.com/go-playground/locales/zh&quot;
    ut &quot;github.com/go-playground/universal-translator&quot;
    &quot;github.com/go-playground/validator/v10&quot;
    translations &quot;github.com/go-playground/validator/v10/translations/zh&quot;{{end}}
    &quot;github.com/zeromicro/go-zero/rest/httpx&quot;
)

func {{.HandlerName}}(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		{{if .HasRequest}}var req types.{{.RequestType}}
		if err := httpx.Parse(r, &amp;req); err != nil {
            httpx.Error(w, errorx.NewHandlerError(errorx.ParamErrorCode, err.Error()))
			return
		}

		validate := validator.New()
        validate.RegisterTagNameFunc(func(fld reflect.StructField) string {
            name := fld.Tag.Get(&quot;label&quot;)
            return name
        })

        trans, _ := ut.New(zh.New()).GetTranslator(&quot;zh&quot;)
        validateErr := translations.RegisterDefaultTranslations(validate, trans)
        if validateErr = validate.StructCtx(r.Context(), req); validateErr != nil {
            for _, err := range validateErr.(validator.ValidationErrors) {
                httpx.Error(w, errorx.NewHandlerError(errorx.ParamErrorCode, errors.New(err.Translate(trans)).Error()))
                return
            }
        }

		{{end}}l := {{.LogicName}}.New{{.LogicType}}(r.Context(), svcCtx)
		{{if .HasResp}}resp, {{end}}err := l.{{.Call}}({{if .HasRequest}}&amp;req{{end}})
		if err != nil {
			httpx.Error(w, err)
			return
		}

        {{if .HasResp}}response.Response(w, resp, err){{else}}response.Response(w, nil, err){{end}}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(g,q){const r=d("ExternalLinkIcon");return a(),t("div",null,[u,n("p",null,[o,n("a",c,[m,l(r)]),b]),p])}const x=s(v,[["render",h],["__file","template.html.vue"]]);export{x as default};
