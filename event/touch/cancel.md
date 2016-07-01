# cancel()

SYNTAX `cancel()` RETURN TYPE `Touch` 

## Description

取消触摸事件.
可以在你的手指按下时又想阻止事件时使用.
即使手指在对象内, 手指释放时也可以不触发事件.

Return Value: `Touch`

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 74,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("tap", function () {
 rectangle.fill = "#f00";
 canvas.redraw();
}).bind("touchstart", function () {
 canvas.touch.cancel(); 
 rectangle.fill = "#00f"; 
 canvas.redraw(); 
});
```