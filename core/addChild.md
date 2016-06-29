# addChild()

语法 `addChild(object [, redraw])` 返回类型 `Core`.

向 `canvas` 添加对象,会导致重绘.

## Arguments

### object : displayObject

从 `displayObject` 继承的对象

### redraw : Boolean (since version 2.0.0)

`false` 时, 添加图形不会导致重绘, 用于批量添加图形时的统一重绘.

返回 `core` 实例本身.

## Examples

### Example 1

创建一个 `core` 实例, 添加一个 `display` 对象上去

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 74,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);
```
