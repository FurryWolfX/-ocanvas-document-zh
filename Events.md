# Events(事件)

`oCanvas` 对事件提供了广泛的支持 -- 键盘, 鼠标, 触摸.
所有的这些打包在 `bind()` 方法中.
非常简单的同时也支持鼠标和触摸设备.

当同时使用鼠标和触摸时, 你想要访问一个通用的属性或方法.
这里有一个 `core` 对象的特殊的属性, `pointer`.
他是使用中的指针的引用.
在触摸设备上就是 `core.touch` 或者 `core.mouse` 的引用.
如果你需要指针的 `x`, 可以用 `core.pointer.x`.

鼠标和触摸事件由形状自身触发.
`OC2.0.0` 开始, 事件触发取决于设置模型, 和 `DOM` 事件非常类似.
事件从最上的元素触发, 然后在父级的对象链中冒泡, 包括 `canvas` 元素.
你可以在事件对象上用 `stopPropagation()` 停止冒泡.
在 `OC1.0.0`, 事件会在 `pointer` 内的所有对象触发, 不只是最前的对象.
也不在父级链中传播.

`core` 实例和所有视图对象都有 `bind()` 方法...

## Pages对象

- [Keyboard](./event/Keyboard.md)

- [Mouse](./event/Mouse.md)

- [Touch](./event/Touch.md)

## Methods

- [bind()](./event/bind.md)

- [dragAndDrop()](./event/dragAndDrop.md)

- [trigger()](./event/trigger.md)

- [unbind()](./event/unbind.md)


## Properties

- enabled : Boolean (since version 2.0.0)

`false` 时关闭事件触发.

## Examples

-Example 1

做了个点击事件, 改变背景

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.bind("click tap", function () {
 canvas.background.set("hsl(" + Math.random() * 360 + ", 50%, 50%)");
});
```

- Example 2

点击事件, 改填充色.

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var button = canvas.display.rectangle({
 x: 77,
 y: 74,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(button);

button.bind("click tap", function () {
 this.fill = "hsl(" + Math.random() * 360 + ", 50%, 50%)";
 canvas.redraw();
});
```
