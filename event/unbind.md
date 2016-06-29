# unbind()

语法 `unbind(type, handler)`  返回类型 `Core / displayObject`

## Description

移除事件的监听

## Arguments

### type : String

指定事件类型的处理函数会被移除, 如果多类型, 用空格分隔.

### handler : Function

用 `bind()` 添加到事件的函数.

返回类型

`Core / displayObject`

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.bind("click tap", function handler () {
 canvas.background.set("hsl(" + Math.random() * 360 + ", 50%, 50%)");
 canvas.unbind("click tap", handler);
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

 this.unbind("click tap", handler);
});
```
