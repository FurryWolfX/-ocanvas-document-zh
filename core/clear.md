# clear()

清除画布内容

SYNTAX `clear(keepBackground)` RETURN TYPE `Core`

## Arguments

### keepBackground : Boolean

是否留背景

## Return Value

`core` 本身

## Examples

### Example 1

做了2个按钮, 用来清除画布内容.

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var button_keep = canvas.display.rectangle({
  x: 30,
  y: 80,
  width: 132,
  height: 100,
  fill: "#000"
 }),
 button_clear = button_keep.clone({
  x: 192
 });

canvas.addChild(button_keep);
canvas.addChild(button_clear);

button_keep.bind("click tap", function () {
 canvas.clear(); // true is the default
});

button_clear.bind("click tap", function () {
 canvas.clear(false);
});
```
