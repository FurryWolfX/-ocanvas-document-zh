# anyKeysDown()

语法 `anyKeysDown()` 返回类型 `Boolean`

## Description

检查当前是否有按钮按下.

提示:由于键盘限制, 只有小部分按键可以同时追踪, 通常在6个左右(即6键同时按下).

## Return Value

`Boolean`. 如果按下, 则是 `true`.

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
 text: "Any keys pressed down?\nNo",
 fill: "#000"
});

canvas.addChild(text);

canvas.bind("keydown keyup", function () {
 text.text = "Any keys pressed down?\n" +
   (canvas.keyboard.anyKeysDown() ? "Yes" : "No");
 canvas.redraw();
});
```