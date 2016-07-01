# cancel()

取消点击事件

SYNTAX `cancel()` RETURN TYPE `Mouse` 

## Description

取消点击事件.
可以在你的鼠标按下时又想阻止事件时使用.
即使鼠标在对象内, 鼠标释放时也可以不触发事件.

返回值: `Mouse`

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

rectangle.bind("click", function () { 
 rectangle.fill = "#f00"; 
 canvas.redraw(); 
}).bind("mousedown", function () { 
 canvas.mouse.cancel(); 
 rectangle.fill = "#00f";
 canvas.redraw();
}); 
```