# Line(线)

线~, 起点和终点可变~

## Properties

### end : Object  

结束点, 语法 `line.end.x = 50`  (2.4.0版本后可用).

### length : Number

线的长度, 从中间开始改变, 改变时结束点和开始点都会改变.

### radius : Number

线的半径, 从中间开始改变, 改变时结束点和开始点都会改变.

### start : Object

开始点,语法 `line.start.x = 50`  (2.4.0版本后可用).

### x : Number

点的位置

### y : Number

点的位置

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var line = canvas.display.line({
 start: { x: 80, y: 60 },
 end: { x: 280, y: 170 },
 stroke: "20px #0aa",
 cap: "round"
});

canvas.addChild(line);
```

### Example 2

长度慢慢减小

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var line = canvas.display.line({
 start: { x: 80, y: 90 },
 end: { x: 280, y: 360 },
 stroke: "20px #0aa",
 cap: "round"
});

canvas.addChild(line);

canvas.setLoop(function () {
 line.length = Math.floor(line.length) - 2;

 if (line.length <= 0) {
  canvas.timeline.stop();
 }
});

line.bind("click tap", function () {
 canvas.timeline.start();
});
```
