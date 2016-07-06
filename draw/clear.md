# clear()

SYNTAX `clear(keepBackground)` RETURN TYPE `Draw`

## Description

清除 `canvas`, 但保留背景

## Arguments

### keepBackground : Boolean

`true` 时保留背景

## Return Value

`Draw` 实例本身.

## Examples

### Example 1

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
 canvas.draw.clear(); // true is the default
});

button_clear.bind("click tap", function () {
 canvas.draw.clear(false);
});
```
