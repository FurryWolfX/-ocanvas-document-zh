# Polygon(正多边形)

可以创建任意多个边, 所以也能创建三角形.

## Properties

### radius : Number

外接圆半径

### side : Number

边的长度

### sides : Number

边的数量

## Examples

### Example 1

创建一个三角形

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var triangle = canvas.display.polygon({
 x: 177,
 y: 145,
 sides: 3,
 radius: 80,
 rotation: 270,
 fill: "#0aa"
});

canvas.addChild(triangle);
```
