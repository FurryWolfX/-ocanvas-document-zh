# domReady()

语法 `domReady(function)` 返回类型 `undefined`

简言之: 如果脚本在元素上头, 必用此方法, 确保dom已经初始化完毕, 作用类似 `jquery` 的 `ready()`

## 参数

### function : Function

`DOM` 初始化之后执行此函数.
你写的所有代码将放在里面.

## Examples

### Example 1

简言之: `DOM` 初始化完之后执行 `oCanvas.create()`.

```
oCanvas.domReady(function () {
 var canvas = oCanvas.create({
  canvas: "#canvas",
  background: "#0cc"
 });
});
```
