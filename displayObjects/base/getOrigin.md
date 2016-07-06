# getOrigin()

语法 `getOrigin()`  返回类型 `Object`

## Description 

获取对象的原点(像素).
如果设置的值是关键字, 会自动进行计算.
原点会成为旋转的中心点.
也会影响 `x`, `y` 的定位.

## Return Value

包含 `x`, `y` 属性的 `Object`. 

## Examples 

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 270,
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.setOrigin("left", "center");
 canvas.redraw();

 var origin = this.getOrigin();
 output("origin: ", origin);
});
```