# stop()

停止对象的动画

SYNTAX `stop()` RETURN TYPE `displayObject`

## Description

和 `finish()` 类似, 除了不设置最终值.

## Return Value

视图对象本身.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 fps: 60
});

var rectangle = canvas.display.rectangle({
 x: 177,
 y: 200,
 origin: { x: "center", y: "center" },
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.fill = "#0f0";
 canvas.redraw();

 this.stop().animate({
  rotation: this.rotation + 360
 }, {
  duration: "long",
  easing: "ease-in-out-cubic",
  callback: function () {
   this.fill = "#f00";
   canvas.redraw();
  }
 });
});
```
