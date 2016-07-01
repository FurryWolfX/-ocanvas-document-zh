# cursor()

语法 `cursor(value)` 返回类型 `Mouse`

## Description

设置指针的新值, 支持 `CSS` 属性.

返回类型: `Mouse`

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

rectangle.bind("mouseenter", function () {
 canvas.mouse.cursor("pointer");
}).bind("mouseleave", function () {
 canvas.mouse.cursor("default");
});
```