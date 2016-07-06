# move()

SYNTAX `move(x, y)` RETURN TYPE `displayObject`

## Description

移动对象指定的距离

## Arguments

### x : Number 

水平方向移动的长度 

### y : Number 

垂直方向移动的长度 

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
 x: 177,
 y: 170,
 origin: { x: "center", y: "center" },
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.move(20, 20);
 canvas.redraw();
});
```