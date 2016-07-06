# remove()

SYNTAX `remove([redraw])` RETURN TYPE `displayObject`

## Description

从 `canvas` 移除对象, 包括子对象.

## Arguments

### redraw : Boolean (since version 2.1.0) 

如果设置为 `false`, `canvas` 在对象移除后不会重绘.
可以在批量移除时使用.

## Return Value

`displayObject` 本身

## Examples 

### Example 1

点击时移除.

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 100,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.remove();
});
```