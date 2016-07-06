# onCanvas()

SYNTAX `onCanvas()` RETURN TYPE `Boolean` 

## Description 

检查指针是否在 `canvas` 内

## Return Value

`Boolean`. 如果在 `canvas` 内部则返回 `true`. 

## Examples 

### Example 1

We create a core instance and a text object that will show if the pointer is inside the canvas or not. A loop is set up, which will run 30 times per second and update the text with the current answer to the question. 

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
 text: "Is the pointer inside\nthe canvas?\nNo",
 fill: "#000"
});

canvas.addChild(text);

canvas.setLoop(function () {
 text.text = "Is the pointer inside\nthe canvas?\n" +
   (canvas.mouse.onCanvas() ? "Yes" : "No");
}).start();
```