# Arc(弧线)

弧线, 可以用来方便地做饼图;

创建弧线时需要制定半径, 起始和结束的角度.

## Properties

### direction : String

角的方向,可以是 `clockwise` 或 `anticlockwise`. 默认: `clockwise`

### end : Number

结束角,`0°` 为东部.

### pieSection : Boolean (since version 2.3.0)

如果 `true`,绘制扇形,默认 `false`.

### radius : Number

弧线的半径

### start : Number

开始角

## Examples

### Example 1

只有边框的弧线

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var arc = canvas.display.arc({
 x: 177,
 y: 160,
 radius: 80,
 start: 110,
 end: -10,
 stroke: "10px #0aa"
});

canvas.addChild(arc);
```

### Example 2

只有填充的弧线

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var arc = canvas.display.arc({
 x: 177,
 y: 160,
 radius: 80,
 start: 110,
 end: -10,
 fill: "#0aa"
});

canvas.addChild(arc);
```

### Example 3

扇形面

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var arc = canvas.display.arc({
 x: 177,
 y: 160,
 radius: 80,
 start: 110,
 end: -10,
 fill: "#0aa",
 pieSection: true
});

canvas.addChild(arc);
```
