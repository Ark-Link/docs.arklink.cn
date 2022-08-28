# 自定义模板

## main

ark-admin自定义了main模板（位置：dev/goctl/1.4.0/api/main.tpl）

在main中增加了自定义错误处理

```tpl
package main

import (
	"flag"
	"fmt"
	"net/http"

    "ark-admin-zero/common/errorx"
	{{.importPackages}}
	"github.com/zeromicro/go-zero/rest/httpx"
)

var configFile = flag.String("f", "etc/{{.serviceName}}.yaml", "the config file")

func main() {
	flag.Parse()

	var c config.Config
	conf.MustLoad(*configFile, &c)

	server := rest.MustNewServer(c.RestConf)
	defer server.Stop()

	ctx := svc.NewServiceContext(c)
	handler.RegisterHandlers(server, ctx)

	// 自定义错误
	httpx.SetErrorHandler(func(err error) (int, interface{}) {
        switch e := err.(type) {
        case *errorx.CodeError:
            return http.StatusOK, e.Data()
        default:
            return http.StatusInternalServerError, nil
        }
    })

	fmt.Printf("Starting server at %s:%d...\n", c.Host, c.Port)
	server.Start()
}
```

## handler

为了引入[go-playground/validator](https://github.com/go-playground/validator)，ark-admin自定义了handler（位置：dev/goctl/1.4.0/api/handler.tpl）

在main中增加了参数校验和中文错误提示

```tpl
package {{.PkgName}}

import (
    {{if .HasRequest}}"errors"{{end}}
	"net/http"
	{{if .HasRequest}}"reflect"{{end}}

    {{if .HasRequest}}"ark-admin-zero/common/errorx"{{end}}
	"ark-admin-zero/common/response"
	{{.ImportPackages}}
    {{if .HasRequest}}
    "github.com/go-playground/locales/zh"
    ut "github.com/go-playground/universal-translator"
    "github.com/go-playground/validator/v10"
    translations "github.com/go-playground/validator/v10/translations/zh"{{end}}
    "github.com/zeromicro/go-zero/rest/httpx"
)

func {{.HandlerName}}(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		{{if .HasRequest}}var req types.{{.RequestType}}
		if err := httpx.Parse(r, &req); err != nil {
            httpx.Error(w, errorx.NewHandlerError(errorx.ParamErrorCode, err.Error()))
			return
		}

		validate := validator.New()
        validate.RegisterTagNameFunc(func(fld reflect.StructField) string {
            name := fld.Tag.Get("label")
            return name
        })

        trans, _ := ut.New(zh.New()).GetTranslator("zh")
        validateErr := translations.RegisterDefaultTranslations(validate, trans)
        if validateErr = validate.StructCtx(r.Context(), req); validateErr != nil {
            for _, err := range validateErr.(validator.ValidationErrors) {
                httpx.Error(w, errorx.NewHandlerError(errorx.ParamErrorCode, errors.New(err.Translate(trans)).Error()))
                return
            }
        }

		{{end}}l := {{.LogicName}}.New{{.LogicType}}(r.Context(), svcCtx)
		{{if .HasResp}}resp, {{end}}err := l.{{.Call}}({{if .HasRequest}}&req{{end}})
		if err != nil {
			httpx.Error(w, err)
			return
		}

        {{if .HasResp}}response.Response(w, resp, err){{else}}response.Response(w, nil, err){{end}}
	}
}
```

