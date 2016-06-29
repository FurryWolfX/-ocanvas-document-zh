# Touch

`oCanvas` 为简单而产生,当你创建你的 `app` 时, 增加移动设备的支持不难.
为了使他更简单, `oCanvas` 有一个触摸模块来处理这个事件.
作为一个开发者, 你只要同时绑定鼠标和触摸事件, 用一个空格分隔.
在 `oCanvas` 里, 鼠标事件不会在触摸设备上触发.
这意味着你可以绑定2个事件类型... 多点触控暂不支持...

所有预定义的视图对象只在图形内部支持触摸事件, 而不是矩形边界.
用户定义的对象 `shapeType` 属性是 `rectangular` (默认值), 则在矩形边界内触发.
如果 `shapeType` 设置为 `radial` , 事件会在 `radial` 图形内触发.

## Event Types

### touchstart

手指按下

### touchend

手指释放

### touchmove

手指移动

### touchenter

手指进入

### touchleave

手指离开

### tap

触摸点击

### dbltap (since version 2.0.0)

触摸双击

## Event Object

事件对象传递的第一个参数是一个处理函数.
这个对象包括常规事件对象的大多数基础属性..
一些东西改变时,时间戳属性在常规对象中不一定永远正确.
所以需要被修复.
同时, `xy` 属性被加入, 映射到当前位置.

触摸事件在默认的父级链上传播.除了 `touchenter` 和 `touchleave` 事件不会冒泡.
可以在事件对象上使用 `stopPropagation()` 停止冒泡.

如果需要原来的时间对象,他保存在 `originalEvent` 属性里.

## Touch Module
绑定处理函数到触摸事件,你不需要操作实际的 `oCanvas` 触摸模块 -- 你只需要用 `core` 实例的 `bind()` 方法.
触摸模块还提供了额外的使用方式.
见例子.

## Methods

### cancel()

### onCanvas()

## Properties

### canvasFocused : Boolean

`true`,如果手指最后一次按下 `canvas`.

### canvasHovered : Boolean

`true`,如果手指在 `canvas` 里面

### dblTapInterval : Number (since version 2.0.0)

双击触发的时间差(毫秒),默认 `500`

### touchState : String  

触摸的状态 "up" 或 "down".

### x : Number

当前鼠标的x位置,相对于 `canvas` 左边框.只有鼠标在 `canvas` 内部时才更新.

### y : Number

当前鼠标的y位置,相对于 `canvas` 左边框.只有鼠标在 `canvas` 内部时才更新.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 disableScrolling: true
});

var text = canvas.display.text({
 x: 177,
 y: 196,
 origin: { x: "center", y: "center" },
 align: "center",
 font: "bold 25px/1.5 sans-serif",
 text: "Touch Position\nX: 0\nY: 0",
 fill: "#000"
});

canvas.addChild(text);

canvas.setLoop(function () {
 text.text = "Touch Position\n" +
   "X: " + canvas.touch.x + "\n" +
   "Y: " + canvas.touch.y;
}).start();
```
