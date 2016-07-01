# moveTo()

SYNTAX `moveTo(x, y)` RETURN TYPE `displayObject`

## Description

移动对象到指定的位置

## Arguments

### x : Number 

对象移动的 `x` 位置.

### y : Number 

对象移动的 `y` 位置.

Return Value 

`displayObject`

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
 this.moveTo(100, 100);
 canvas.redraw();
});
```