# dragAndDrop()

语法 `dragAndDrop([options])`  返回类型 `displayObject`

## Description

启用对象的拖拽.
这会自动增加事件处理.
可以自定义拖拽的回调函数.
传递 `false` 到这个方法会移除事件的处理且禁用对象的拖拽.

## Arguments

### options : Object or Boolean

参数可以是一个对象.属性名字可以是 `start`, `move`, `end`, `changeZindex` 和 `bubble` 前三个回调函数会在不同的拖拽状态执行.
回调中 `this` 关键字会指向视图对象本身.

如果 `changeZindex` 设置为 `true` 时,在拖拽开始时, 对象会获得一个新的 `zIndex` 值,显示到其他对象的前面.

如果 `bubble` 设置为 `false`,这个事件用来禁用事件在父级链上冒泡的行为.

如果 `false` 传递到方法,拖拽会禁用.

## Return Value

`displayObject` 本身

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 100,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.dragAndDrop();
```

### Example 2

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 100,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.dragAndDrop({
 start: function () {
  this.fill = "#ff0";
 },
 move: function () {
  this.fill = "#0f0";
 },
 end: function () {
  this.fill = "#f00";
 }
});
```
