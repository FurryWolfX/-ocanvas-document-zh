# bind()

语法 `bind(type, handler)` 返回类型 `Core / displayObject`

## Description

为 `canvas` 或对象绑定一个处理函数

## Arguments

### type : String

事件类型会被触发和处理, 如果多类型, 用空格分隔.

### handler : Function

触发是执行的方法

返回类型

`Core / displayObject`.

##Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.bind("click tap", function () {
 canvas.background.set("hsl(" + Math.random() * 360 + ", 50%, 50%)");
});

Example 2
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

rectangle.bind("click tap", function () {
 this.fill = "hsl(" + Math.random() * 360 + ", 50%, 50%)";
 canvas.redraw();
});
```
