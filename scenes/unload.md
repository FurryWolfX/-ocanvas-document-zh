# unload()

SYNTAX `unload(name)` RETURN TYPE `Scenes`

## Description

卸载指定名字的场景.

## Arguments

### name : String

场景的名字

## Return Value

`Scenes` 模块本身

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

canvas.scenes.create("menu", function () {
 this.add(startGame);
});

canvas.scenes.load("menu");

startGame.bind("click tap", function () {
 canvas.scenes.unload("menu");
});
```
