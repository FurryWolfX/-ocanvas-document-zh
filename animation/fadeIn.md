# fadeIn()

淡入显示

SYNTAX `fadeIn([ duration [, easing [, callback ]]])`

`fadeIn([ duration | easing | callback [, callback ]])` RETURN TYPE `displayObject`

## Description

淡入显示对象. 这是 `animate()` 的简化方法.
他只传递一个带有 `opacity` 属性的对象给 `animate()` ,见 `animate()` 的详情...

## Return Value

视图对象本身...

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 fps: 60
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 150,
 width: 200,
 height: 100,
 fill: "#000",
 opacity: 0
});

canvas.addChild(rectangle);

canvas.bind("click tap", function () {

 rectangle.stop();
 rectangle.fadeIn("long", "ease-in-out-cubic", function () {
  this.fill = "#f00";
  canvas.redraw();
 });
});
```
