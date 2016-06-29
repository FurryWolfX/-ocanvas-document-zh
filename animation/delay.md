# delay() (since version 2.2.0)

延迟动画一个确定的时间.

SYNTAX `delay(duration, [options])` RETURN TYPE `displayObject`

## Description

延迟动画一个确定的时间. 如果在配置里指定了队列, 则只有那个队列的动画会被延迟.

## Arguments

### duration : Number (since version 2.2.0)

动画延迟的时间(毫秒)

### options : Object (since version 2.2.0)

设置对象,有如下属性:

### queue : String

需要延迟的队列名字, 默认:"default"

Return Value

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
  rotation: this.rotation + 180
 });
 this.delay(500);
 this.animate({
  rotation: this.rotation + 360
 }, {
  callback: function () {
   this.fill = "#f00";
   canvas.redraw();
  }
 });
});
```
