# registerDisplayObject()

语法 `registerDisplayObject(name, constructor [, init])` 返回类型 `undefined`

注册一个新的 `display` 对象模块.
此方法只适用于 `oCanvas` 内置的图形模块.
如果想自定义, 使用 `register()` 代替.

## 参数

### name : String

`display` 对象的名字.
此对象的实例可以通过 `core.display.thisname()` 创建

### constructor : Function

有2个参数,用户设置和 `core` 实例. 这个对象需要一个叫 `draw()` 的方法.
也需要一个 `shapeType` 属性, 可以矩形或放射状.

### init : String

每个 `display object` 创建的时候执行

## Examples

### Example 1

```
var constructor = function (settings, core) {

 return oCanvas.extend({
  core: core,

  shapeType: "rectangular",

  init: function () {

  },

  draw: function () {
   var canvas = this.core.canvas,
    origin = this.getOrigin(),
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
  }
 }, settings);
};

oCanvas.registerDisplayObject("myObject", constructor, "init");

var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
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
