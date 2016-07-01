# rotateTo()

SYNTAX `rotateTo(angle)` RETURN TYPE `displayObject` 

## Description 

旋转到一个指定的角度

## Arguments

### angle : Number 

角度,正值顺时针.负值逆时针. 

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
 x: 177,
 y: 180,
 origin: { x: "center", y: "center" },
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.rotateTo(45);
 canvas.redraw();
});
```