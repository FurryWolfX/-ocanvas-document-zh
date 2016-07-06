# finish() (since version 2.0.0)

SYNTAX `finish()` RETURN TYPE `displayObject`

## Description

停止动画并设置为结束时的值.

## Return Value

视图对象本身

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
 this.finish();
 this.fill = "#0f0";
 canvas.redraw();

 this.animate({
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
