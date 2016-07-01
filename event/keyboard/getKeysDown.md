# getKeysDown()
语法 `getKeysDown()` 返回类型 `Array`

## Description 

获取当前按下的按键的键值.

提示: 由于键盘限制, 只有小部分按键可以同时追踪, 通常在6个左右(即6键同时按下).

返回值: 数组

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var text = canvas.display.text({
 x: 177,
 y: 40,
 origin: { x: "center", y: "top" },
 align: "center",
 font: "bold 25px/1.5 sans-serif",
 text: "Keys pressed down:",
 fill: "#000"
});

canvas.addChild(text);

canvas.bind("keydown keyup", function () {
 var keys = canvas.keyboard.getKeysDown();
 text.text = "Keys pressed down:\n" + keys.join("\n");
 canvas.redraw();
});
```