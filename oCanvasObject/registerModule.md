# registerModule()

在 `core` 实例上注册一个新的模块.

语法 `registerModule(name, constructor [, init])` 返回类型 `undefined`.

为 `core` 实例注册新的模块. 可以拓展OC的模块.

## Arguments

### name : String

模块的名字, 可以通过 `core.thisname` 访问

### constructor : Function

返回一个对象, 包含你模块的所有属性和方法.

### init : String

实例创建时执行

## Examples

### Example 1

定义一个模块, 输出 `constructor` 函数返回对象的 `foo` 属性

```
var constructor = function () {

 return {
  foo: "foobar"
 };
};

oCanvas.registerModule("myModule", constructor, "init");

var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

output(canvas.myModule.foo);
```
