# removeChild()

SYNTAX `removeChild(object [, redraw])` RETURN TYPE `Core`

从 `canvas` 移除一个对象,会触发所有图形的重绘,一般使用图形自身的 `remove()` 方法

## Arguments

### object : displayObject

继承了基础视图对象,可以预定义,用户也可以用 `register()` 创建

### redraw : Boolean (since version 2.6.0)

增删是是否重绘

## Examples

### Example 1

删除某个元素

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

rectangle.bind("click tap", function () {
 canvas.removeChild(rectangle);
});
```
