# setLoop()

SYNTAX `setLoop(function)` RETURN TYPE `Timeline`

## Description

设置一个循环方法.
它不开始时间轴动画.只是让时间轴知道动画开始时调用什么方法.
这个方法第一个参数是原生 `canvas context`.
允许使用原生 `canvas API` 绘制.
这个方法在 `core` 实例上.

## Arguments

### function : Function

循环的方法

返回值

`Timeline` 对象

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
```
