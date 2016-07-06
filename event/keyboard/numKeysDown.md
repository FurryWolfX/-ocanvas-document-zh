# numKeysDown()

语法 `numKeysDown()` 返回类型 `Number`

## Description

获取当前按下的按键的数量.
提示: 由于键盘限制, 只有小部分按键可以同时追踪, 通常在6个左右(即6键同时按下).

## Return Value

数组

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
 text: "Number of keys\n0",
 fill: "#000"
});

canvas.addChild(text);

canvas.bind("keydown keyup", function () {
 text.text = "Number of keys\n" +
   canvas.keyboard.numKeysDown();
 canvas.redraw();
});
```