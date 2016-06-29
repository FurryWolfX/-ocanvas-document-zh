# create()

SYNTAX `create(name, init)` RETURN TYPE `Scene`

## Description

创建一个新的场景.
对象在 `init` 方法里添加, 会在场景加载时添加到 `canvas`.

## Arguments

### name : String

场景的名字. 会在加载这个场景的时候使用.

### init : Function

用来增加对象到场景的一个方法. 方法里面映射到场景实例, 所有增加对象可以使用 `this.add(object)`. 这个方法会在  `create()` 时执行. 添加其他子元素,可以使用 `create()` 返回的对象.

Return Value

`Scene` 实例本身

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
