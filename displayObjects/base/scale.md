# scale()

SYNTAX `scale(x, y)` RETURN TYPE `displayObject`

## Description

缩放对象指定的百分比, 不会改变实际像素.

注: 目前 `oCanvas` 不能正常处理缩放后对象的事件.

## Arguments

- x : Number
缩放比, 0-1之间, 1为原大小, 不能为0.

- y : Number
缩放比, 0-1之间, 1为原大小, 不能为0.

## Return Value

`displayObject`

## Examples

### Example 1

``` js
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
	this.scale(1.5, 0.5);
	canvas.redraw();
});
```