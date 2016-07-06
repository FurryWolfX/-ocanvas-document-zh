# scaleTo()

## Description

缩放对象指定的百分比, 不会改变实际像素.

注: 目前 `oCanvas` 不能正常处理缩放后对象的事件.

## Arguments

- width : Number
新对象的宽度

- height : Number
新对象的高度

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
	this.scaleTo(100, 20);
	canvas.redraw();
});
```

### Example 2

``` js
var canvas = oCanvas.create({
	canvas: "#canvas",
	background: "#ccc"
});

var circle = canvas.display.ellipse({
	x: 177,
	y: 170,
	radius: 100,
	fill: "#000"
});

canvas.addChild(circle);

circle.bind("click tap", function () {
	this.scaleTo(50, 20);
	canvas.redraw();
});
```