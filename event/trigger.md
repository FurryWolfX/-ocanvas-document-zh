# trigger()

语法 `trigger(type [, eventObject])`  返回类型 `Core / displayObject`

## Description

触发 `canvas` 或试图对象的事件, 传递一个 `event` 类型

## Arguments

### type : String

会触发的事件类型.如果多类型,用空格分隔. 2.5.0版本后可以是任何名字(不只是内件类型,可以自定义类型).

### eventObject : Object (since version 2.5.0)

可选.一个对象,传递event到所有的监听.这个对象会代替originalEvent 属性.详情见例子3.

返回值

### Core / displayObject.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.bind("click tap", function () {
 canvas.background.set("hsl(" + Math.random() * 360 + ", 50%, 50%)");
});

canvas.bind("mousemove touchmove", function () {
 this.trigger("click tap");
});
```

### Example 2

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 150,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function handler () {
 this.fill = "hsl(" + Math.random() * 360 + ", 50%, 50%)";
 canvas.redraw();
});

rectangle.bind("mousemove touchmove", function () {
 this.trigger("click tap");
});
```

### Example 3

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 150,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("update-color", function handler (event) {
 var eventObject = event.originalEvent;
 var color = eventObject ? eventObject.color :
     "hsl(" + Math.random() * 360 + ", 50%, 50%)";
 this.fill = color;
 canvas.redraw();
});

rectangle.bind("click tap", function () {
 this.trigger("update-color");
});

rectangle.bind("dblclick dbltap", function () {
 this.trigger("update-color", {color: "#000"});
});
```
