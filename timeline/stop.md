# stop()

SYNTAX `stop()` RETURN TYPE `Timeline`

## Description

停止播放

返回值

`Timeline` 本身


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
 y: 170,
 origin: { x: "center", y: "center" },
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

canvas.setLoop(function () {
 rectangle.rotation++;
}).start();

rectangle.bind("click tap", function () {
 canvas.timeline.stop();
});
```
