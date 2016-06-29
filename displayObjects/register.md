# register()

语法 `register(name, properties, draw [, init])`  返回类型 `Display`

## Description

为当前的 `core` 实例创建一个新的视图对象.
只注册视图对象类型.
可以使用这样的语法来访问 `core.display.thename()`.

## Arguments

### name : String

视图对象的名字

### properties : Object

包含特殊属性和方法的对象, 和 `base` 中同名的会覆盖 `base` 的同名属性和方法, 如果是 `radial` 对象, 你需要指定 `shapeType` 的值为 "radial".

### draw : Function

对象每次渲染的时候会被调用.
这方法里面调用的是 `canvas` 原生 `API` ,这个方法传递2个参数,`canvas context` 和 `core` 实例.
关键字引用这个视图对象本身.

### init : String

初始化时执行

返回视图对象本身

## Examples

### Example 1

创建一个新的视图对象类型, 就叫 `myObject` ,指定了 `shapeType`.
原生代码不解释了, 注意使用 `beginPath()` 和 `closePath()` 避免影响其他对象.

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.display.register("myObject", {
 shapeType: "rectangular"
}, function (canvas) {
 var origin = this.getOrigin(),
  x = this.abs_x - origin.x,
  y = this.abs_y - origin.y,
  width = this.width,
  height = this.height;

 canvas.beginPath();

 if (this.fill !== "") {
  canvas.fillStyle = this.fill;
  canvas.fillRect(x, y, width, height);
 }

 if (this.strokeWidth > 0) {
  canvas.strokeStyle = this.strokeColor;
  canvas.lineWidth = this.strokeWidth;
  canvas.strokeRect(x, y, width, height);
 }

 canvas.closePath();
});

var myObj = canvas.display.myObject({
 x: 77,
 y: 150,
 width: 200,
 height: 300,
 fill: "#000",
 stroke: "10px #fff"
});

canvas.addChild(myObj);
```
