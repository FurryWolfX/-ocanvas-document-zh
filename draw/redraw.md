# redraw()

SYNTAX `redraw()` RETURN TYPE `Draw`

## Description

重绘所有对象

## Return Value

`Draw` 实例本身.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var button = canvas.display.rectangle({
 x: 77,
 y: 74,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(button);

button.fill = "#999";

button.bind("click tap", function () {
 canvas.draw.redraw();
});
```
