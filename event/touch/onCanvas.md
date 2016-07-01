# onCanvas()

检查是否触摸在canvas里面.

SYNTAX `onCanvas()` RETURN TYPE `Boolean` 

## Description 

检查触摸位置是否在 `canvas` 内

Return Value 

`Boolean`. 如果在 `canvas` 内部则返回 `true`.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var text = canvas.display.text({
 x: 177,
 y: 140,
 origin: { x: "center", y: "top" },
 align: "center",
 font: "bold 25px/1.5 sans-serif",
 text: "Is the finger inside\nthe canvas?\nNo",
 fill: "#000"
});

canvas.addChild(text);

canvas.setLoop(function () {
 text.text = "Is the finger inside\nthe canvas?\n" +
   (canvas.touch.onCanvas() ? "Yes" : "No");
}).start();
```