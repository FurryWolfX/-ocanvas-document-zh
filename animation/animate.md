# animate()

SYNTAX `animate(properties [, options])` RETURN TYPE `displayObject`

## Description

动画是个特殊的属性,拥有特定的值.只有数字值能被动画化.
从 `2.4.0` 开始,嵌套的属性可以被动画化(如 `{ start: { x: 50 } }`)

从 `2.2.0` 开始, 有上面的新语法,旧的语法被分离, 将在 `3.0.0` 移除.

`2.1.1` 以及更早的旧语法:

`animate(props [, duration [, easing [, newQueue [, callback ]]]])`

`animate(props, duration | easing | newQueue | callback [, callback])`

旧语法翻译略...

## Arguments

### properties : Object
包含了需要被动画化的属性.是动画结束时达到的值.
### options : Object (since version 2.2.0)
动画的设置,包含以下属性,都有默认值:
### duration : Number
动画的时间,可以是毫秒,或者以下的关键字:
```
"short": 500 ms
"normal": 1000 ms
"long": 2000 ms
```

Default: "normal"

### easing : String or Function
缓动属性可以是自定义的function,或者以下关键字:
```
linear
ease-in-quad
ease-out-quad
ease-in-out-quad
ease-in-cubic
ease-out-cubic
ease-in-out-cubic
ease-in-quart
ease-out-quart
ease-in-out-quart
ease-in-quint
ease-out-quint
ease-in-out-quint
ease-in-sine
ease-out-sine
ease-in-out-sine
ease-in-expo
ease-out-expo
ease-in-out-expo
ease-in-circ
ease-out-circ
ease-in-out-circ
ease-in-elastic
ease-out-elastic
ease-in-out-elastic
ease-in-back
ease-out-back
ease-in-out-back
ease-in-bounce
ease-out-bounce
ease-in-out-bounce
```
如果是一个function,他将有4个参数,当前时间(毫秒),开始值,变化值,总时间(毫秒),它返回的值会用于当前的位置.

默认值: "ease-in-out-cubic"

### queue : String

需要增加动画效果的队列的名字.如果这是个新的名字,就会创建这个名字的队列.不同队列的动画会同时运行,而在同一个队列中的动画会依次运行.

默认值:"default".

### callback : Function

动画结束后执行的函数. 默认值: `empty function`.

### duration : Number or String (version 2.2.0中分离)

动画的时间,可以是毫秒,或者以下的关键字:

```
"short": 500 ms
"normal": 1000 ms
"long": 2000 ms
```

默认: "normal"

### easing : String or Function (version 2.2.0中分离)

缓动函数,可以是自定义的函数(经过的时间的比例值,0,1之间)或者已经定义的方法名字(如下):

```
ease-in
ease-out
ease-in-out
linear
```

默认: "ease-in-out"

### newQueue : Boolean (version 2.0.0后可用) (version 2.2.0中分离)

如果设置为 `true`,引擎会创建新的动画队列去播放动画,允许多个动画同时运行在一个对象上.

### callback : Function (version 2.2.0中分离)

动画结束后执行的函数. 默认值: `empty function`.

返回值

`displayObject` 本身

## Examples

### Example 1

变色与旋转

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 fps: 60
});

var rectangle = canvas.display.rectangle({
 x: 177,
 y: 200,
 origin: { x: "center", y: "center" },
 width: 200,
 height: 100,
 fill: "#000"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {
 this.fill = "#0f0";
 canvas.redraw();

 this.animate({
  rotation: this.rotation + 360
 }, {
  duration: "long",
  easing: "ease-in-out-cubic",
  callback: function () {
   this.fill = "#f00";
   canvas.redraw();
  }
 });
});
```

### Example 2

旋转和位移,队列执行

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 fps: 60
});

var rectangle = canvas.display.rectangle({
 x: 177, y: 200,
 origin: { x: "center", y: "center" },
 width: 200, height: 100,
 fill: "#000",
 currentPosition: "top"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {

 // Stop any currently running animations
 this.stop();

 // Animate rotation, using default queue
 this.animate({
  rotation: this.currentPosition === "top" ? 360 : 0
 }, {
  easing: "ease-in-out-cubic"
 });

 // Animate movement, also using default queue, which means it queues the animation
 this.animate({
  y: this.currentPosition === "top" ? 400 : 200
 }, {
  easing: "ease-in-out-cubic"
 });

 // Toggle the position for next click
 this.currentPosition = this.currentPosition === "top" ? "bottom" : "top";
});
```

### Example 3

和前一个一样,但是指定的不同的队列,也就是会同时执行.

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc",
 fps: 60
});

var rectangle = canvas.display.rectangle({
 x: 177, y: 200,
 origin: { x: "center", y: "center" },
 width: 200, height: 100,
 fill: "#000",
 currentPosition: "top"
});

canvas.addChild(rectangle);

rectangle.bind("click tap", function () {

 // Stop any currently running animations
 this.stop();

 // Animate rotation, using queue="rotation"
 this.animate({
  rotation: this.currentPosition === "top" ? 360 : 0
 }, {
  easing: "ease-in-out-cubic",
  queue: "rotation"
 });

 // Animate movement, using queue="move"
 this.animate({
  y: this.currentPosition === "top" ? 400 : 200
 }, {
  easing: "ease-in-out-cubic",
  queue: "move"
 });

 // Toggle the position for next click
 this.currentPosition = this.currentPosition === "top" ? "bottom" : "top";
});
```
