# load()

SYNTAX `load(name [, unload])` RETURN TYPE `Scenes`

## Description

用指定的名字加载场景. 有个设置可以先卸载当前的场景.

## Arguments

### name : String

需要加载的场景名字

### unload : Boolean

如果是 `true`,当前的场景会先卸载.默认: `false`.

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
```
