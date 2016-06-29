# Ellipse(椭圆)

椭圆是一个半径图形, 可以使用 `radius`(半径) 属性或者 `radius_x` 和 `radius_y` 来指定,如果这 `2` 个值相同,他就是一个圆.

## Properties

### radius : Number

半径

### radius_x : Number

水平方向的半径

### radius_y : Number

垂直防线的半径


## Examples

### Example 1

创建一个椭圆

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var ellipse = canvas.display.ellipse({
 x: 177,
 y: 135,
 radius_x: 80,
 radius_y: 40,
 stroke: "10px #0aa"
});

canvas.addChild(ellipse);
```

### Example 2

创建一个圆

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var ellipse = canvas.display.ellipse({
 x: 177,
 y: 135,
 radius: 80,
 fill: "#0aa"
});

canvas.addChild(ellipse);
```
