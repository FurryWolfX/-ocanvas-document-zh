# Rectangle (矩形)

矩形是非常常见的视图对象, 可以运用在许多地方.
它提供特殊的画笔属性, 让你选择画笔的位置, 里面, 边缘的右边, 或者外面.

## Properties

### height : Number

对象的高度

### strokePosition : String

画笔位置,可以是 `inside` , `center` , `outside` , 默认是 `center`

### width : Number

对象的宽度

## Examples

### Example 1

画一个矩形

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 77,
 width: 200,
 height: 100,
 fill: "#0aa"
});

canvas.addChild(rectangle);
```

### Example 2

调整画笔位置

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 87,
 width: 200,
 height: 100,
 fill: "#0aa",
 stroke: "outside 20px rgba(0, 0, 0, 0.5)"
});

canvas.addChild(rectangle);
```
