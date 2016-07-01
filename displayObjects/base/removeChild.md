# removeChild()

SYNTAX `removeChild(object [, redraw])` RETURN TYPE `displayObject`

## Description 

从 `object` 中移除子对象.
同时也会在 `canvas` 移除这个对象.

## Arguments 

### object : displayObject 

继承于 `displayObject`

### redraw : Boolean (since version 2.6.0) 

如果设置为 `false`, `canvas` 在对象移除后不会重绘.
可以在批量移除时使用.

返回值

`displayObject` 本身

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 270,
 width: 200,
 height: 100,
 fill: "#000"
});

var square = canvas.display.rectangle({
 x: 10,
 y: 10,
 width: 50,
 height: 50,
 fill: "#0ff"
});

canvas.addChild(rectangle);

rectangle.addChild(square);

rectangle.bind("click tap", function () {
 this.removeChild(square);
});
```