# remove()

SYNTAX `remove(object)` RETURN TYPE `Scene` 

## Description 

从场景中移除对象. 会在 `canvas` 中移除对象, 且场景下次加载时也不绘制.

## Arguments

### object : displayObject 

需要从场景中移除的对象.

## Return Value

`Scene`

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var startGame = canvas.display.text({
 x: 177,
 y: 170,
 origin: { x: "center", y: "top" },
 align: "center",
 font: "bold 30px sans-serif",
 text: "Start Game!",
 fill: "#000"
});

var instructions = startGame.clone({
 y: 240,
 text: "Instructions"
});

var menu = canvas.scenes.create("menu", function () {
 this.add(startGame);
 this.add(instructions);
});

menu.remove(startGame);

canvas.scenes.load("menu");
```