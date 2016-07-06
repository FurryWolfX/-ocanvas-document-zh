# show()

SYNTAX `show()` RETURN TYPE `Mouse` 

## Description 

显示鼠标指针, 默认设置 `CSS` 属性 `default`, 或者是先前 `cursor()` 设置的属性.

## Return Value

`Mouse`. `Mouse` 模块本身.

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