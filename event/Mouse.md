# Mouse

`oCanvas` 对鼠标事件有很好的支持.
所有预定义的图形对象都支持鼠标事件的触发.
不是矩形的边界.
用户定义的对象如果 `shapeType` 设置为 `rectangular` , 那么在矩形边界内触发.
如果是径向, 则在径向边界内触发.

## Event Types

### mousedown

鼠标按下触发

### mouseup

鼠标释放触发

### mousemove

鼠标移上触发

### mouseenter

鼠标第一次移上触发

### mouseleave

鼠标离开时触发

### click

点击触发

### dblclick (since version 2.0.0)

双击触发

## Event Object

事件对象是处理函数的第一个参数.
包含了常规事件对象的基本属性.
一些东西改变时, 时间戳属性在常规对象中不一定永远正确.
所以需要被修复.
当前位置的 `x` , `y` 属性包含了鼠标按钮是否按下(按钮属性的修正版本).
这是个数字码, 如下:

```
0: 没有按钮按下
1: 主按钮按下,通常是左键
2: 第二按钮,通常是右键
3: 中键,通常是滚轮
```

鼠标事件在默认的父级链上传播.
除了鼠标进入和离开事件不会冒泡.
可以在事件对象上使用 `stopPropagation()` 停止冒泡.

如果需要原来的时间对象,他保存在originalEvent属性里.

### Mouse Module
为鼠标事件绑定处理函数, 你不需要直接作用于确切的 `oCanvas` 键盘模块 -- 你只需要用 `core` 实例的 `bind()` 方法.
鼠标模块还提供了额外的使用方式.
见例子.

## Methods
### [cancel()](./mouse/cancel.md)
### [cursor()](./mouse/cursor.md)
### [hide()](./mouse/hide.md)
### [onCanvas()](./mouse/onCanvas.md)
### [show()](./mouse/show.md)

## Properties

### buttonState : String

鼠标的按钮状态, "up" or "down".

### canvasFocused : Boolean

是否是鼠标最后一次按下

### canvasHovered : Boolean

是否鼠标在元素上

### x : Number

当前鼠标的 `x` 位置,相对于 `canvas` 左边框.只有鼠标在 `canvas` 内部时才更新.

### y : Number

当前鼠标的x位置,相对于 `canvas` 顶边框.只有鼠标在 `canvas` 内部时才更新.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var text = canvas.display.text({
 x: 177,
 y: 196,
 origin: { x: "center", y: "center" },
 align: "center",
 font: "bold 25px/1.5 sans-serif",
 text: "Mouse Position\nX: 0\nY: 0",
 fill: "#000"
});

canvas.addChild(text);

canvas.setLoop(function () {
 text.text = "Mouse Position\n" +
   "X: " + canvas.mouse.x + "\n" +
   "Y: " + canvas.mouse.y;
}).start();
```
