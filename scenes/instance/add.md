# add()

SYNTAX `add(object)` RETURN TYPE `Scene`

## Description

增加一个对象到场景. 当场景加载完毕会绘制这个对象. 如果场景已经加载了, 会直接绘制图形.

## Arguments

### object : displayObject 

需要加到场景的视图对象

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
});

menu.add(instructions);

canvas.scenes.load("menu");
```