# unload()

卸载场景实例.

SYNTAX `unload()` RETURN TYPE `Scene` 

## Description 

移除场景实例 

Return Value: `Scene`

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

var menu = canvas.scenes.create("menu", function () {
 this.add(startGame);
});

menu.load();

startGame.bind("click tap", function () {
 menu.unload();
});
```