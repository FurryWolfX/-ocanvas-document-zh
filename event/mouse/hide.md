# hide()

SYNTAX `hide()` RETURN TYPE `Mouse` 

## Description 

隐藏鼠标指针. 设置 `CSS` 属性"none".

## Return Value

`Mouse`.

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
 canvas.mouse.hide();
}).bind("mouseleave", function () {
 canvas.mouse.show();
});
```