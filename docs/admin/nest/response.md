# 统一返回值

返回格式

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    // ....
  }
}
```

位置: `src/interceptors/transform.interceptor.ts`

> `data`值会自动取`controller`的返回值