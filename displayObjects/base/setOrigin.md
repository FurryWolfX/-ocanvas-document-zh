# setOrigin()

SYNTAX `setOrigin(x, y)` RETURN TYPE `displayObject` 

## Description 

设置对象的原点.
这个点会成为旋转的中心点.
也会是 `x`, `y` 属性渲染的坐标.
值可以是数组, 也可以是预定义的关键字.

## Arguments 

### x : Number or String 

水平像素偏移,可以是 `left`, `center` 或 `right`. 

### y : Number or String 

垂直像素偏移, 可以是 `top`, `center` 或 `bottom`.

## Return Value

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
 y: 70,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.setOrigin("center", "center");
 canvas.redraw();
});
```