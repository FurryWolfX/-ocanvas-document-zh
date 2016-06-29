# registerPlugin()

注册插件

语法 `registerPlugin(name, plugin)` 返回类型 `undefined`

只是添加插件到 `oCanvas`,不运行.
只有在 `core` 实例创建时, 且设置中指定了插件名才执行.

## Arguments

### name : String

插件名字

### plugin : Function

包含你插件所有代码的一个方法.这些代码会在 `oCanvas.create()` 且配置里指定插件时执行, 与当前实例关联.

## Examples

### Example 1

注册一个插件, 作用是改变背景色.

```
var plugin = function () {
 this.background.set("#ff0");
};

oCanvas.registerPlugin("myPlugin", plugin);

var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 plugins: ["myPlugin"]
});
```
