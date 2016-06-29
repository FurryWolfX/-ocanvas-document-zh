# fadeTo()

渐变对象到指定的透明度

SYNTAX `fadeTo(opacity, [ duration [, easing [, callback ]]]) `

`fadeTo(opacity, [duration | easing | callback [, callback ]])` RETURN TYPE `displayObject`

## Description

渐变对象到指定的透明度.他只传递一个带有 `opacity` 属性的对象给 `animate()` , 见 `animate()` 的详情...

## Arguments

### opacity : Number

需要渐变到的透明度, 0-1之间.

Return Value

视图对象本身.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 fps: 60
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

 this.stop();
 this.fadeTo(0.5, "long", "ease-in-out-cubic", function () {
  canvas.background.set("#f00");
 });
});
```
