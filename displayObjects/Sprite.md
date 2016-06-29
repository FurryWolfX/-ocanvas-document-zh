# Sprite(精灵,雪碧图)

为了改进加载性能, 你经常将多个图形放在一个图像文件里面, 然后在代码里面分离他们.
这个视图对象允许你更完美地做这个.
他也可以做基于帧的动画.
这是个灵活的对象, 可以分割图片和制作动画...
它可以用很少的参数注册帧, 或者可以在每一帧人为指定他们.

## Methods

### start() (deprecated in version 2.0.0)

### startAnimation() (since version 2.0.0)

### stop() (removed in version 2.0.0)

### stopAnimation() (since version 2.0.0)

## Properties

### active : Boolean

动画是否在运行

### autostart : Boolean

指定动画是否在图像加载完成后自动运行.如果是 `false`,你需要使用 `start()` 开始动画.

### direction : String

指定自动生成帧的方向,可以是 "x" 或 "y",默认 "x".

### duration : Number

每一帧显示的毫秒数.这个属性只有 `generate` 设置为 `true` 时使用.

### frame : Number

当前的帧会被画

### frames : Array

包含sprite的所有帧,他可以通过设置 `generate`  `true` 来自动生成. 如果认为指定, 你需要知道数组的每一项都是一个对象,包含至少 `2` 个属性, `x` 和 `y`. 定义位置. `w` , `h` 定义宽高, `d` 定义方向.

### generate : Boolean

如果设置为 `true` ,帧会基于 `width`, `height`, `direction`, `offset_x` 和 `offset_y` 自动生成. 只有前面2个属性是必须的, 其他属性拥有默认值.

### height : Number

每一帧的高度.只有在 `generate`  `true` 且, `h` 属性没有设置时.

### image : String or HTMLImageElement

如果这个字符串被设置了,他就是一个图片路径,如果他是个 `HTMLImageElement` 他就会使用这个 `image`

### loaded : Boolean

描述image是否加载完毕

### loop : Boolean

如果设置为 `true`,这个动画会在结束时回到起始位置, 也就是创建了一个循环.

### numFrames : Number (since version 2.0.0)

当自动生成帧时, 这个属性会限制生成的帧数.

### offset_x : Number

水平偏移,用于多个 `sprite sheets` 合并时.

### offset_y : Number

垂直偏移,用于多个 `sprite sheets` 合并时.

### width : Number

每一帧的宽度.只有在 `generate`  `true` 且, `w` 属性没有设置时.

## Examples

### Example 1

我们创建一个新的 `core` 实例.
然后我们创建一个 `image` 对象用来显示 `sprite sheet image`.
然后创建一个实际的 `sprite` ,指定我们想生成的帧.
指定宽高, 方向.
我们也指定这个对象在第一帧绘制完后显示.
然后我们克隆这个 `sprite` 2次, 改变他的位置和帧数去显示其他帧.
现在, 我们用一个容易的方式分割一个 `image` 变成多个不同的对象.

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var image = canvas.display.image({
 x: 177,
 y: 80,
 origin: { x: "center", y: "center" },
 image: "img/sprite.png"
});

var sprite_1 = canvas.display.sprite({
 x: 144,
 y: 137,
 image: "img/sprite.png",
 generate: true,
 width: 20,
 height: 20,
 direction: "x",
 frame: 1
});
var sprite_2 = sprite_1.clone({
 x: 167,
 frame: 2
});
var sprite_3 = sprite_1.clone({
 x: 190,
 frame: 3
});

canvas.addChild(image);
canvas.addChild(sprite_1);
canvas.addChild(sprite_2);
canvas.addChild(sprite_3);
```

## Example 2

我们从创建一个新的 `core` 实例开始,然后创建一个实际的 `sprite` ,指定我们为 `sprite` 动画想生成的帧的宽高, 方向.
我们也指定每一帧的时间.
最后, 我们开始动画.
如果我们不运行 `start` 方法, 只有第一帧会渲染.

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var sprite = canvas.display.sprite({
 x: 177,
 y: 137,
 origin: { x: "center", y: "center" },
 image: "img/sprite.png",
 generate: true,
 width: 20,
 height: 20,
 direction: "x",
 duration: 60
});

canvas.addChild(sprite);

sprite.start();
```

## Example 3

我们从创建一个新的 `core` 实例开始,然后创建一个实际的 `sprite` ,指定他的位置.
也指定他在第一帧渲染之后显示.
然后克隆这个 `sprite` 2次,改变他的位置和帧数去显示其他帧.
现在我们用简单的方式分割一个 `image` 成不同的对象.

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var sprite_1 = canvas.display.sprite({
 x: 144,
 y: 137,
 image: "img/sprite.png",
 frames: [
  { x: 0, y: 0 },
  { x: 80, y: 0 },
  { x: 140, y: 0 }
 ],
 width: 20,
 height: 20,
 frame: 1
});

var sprite_2 = sprite_1.clone({
 x: 167,
 frame: 2
});
var sprite_3 = sprite_1.clone({
 x: 190,
 frame: 3
});

canvas.addChild(sprite_1);
canvas.addChild(sprite_2);
canvas.addChild(sprite_3);

setInterval(function() {
 canvas.redraw();
}, 1000 / 60);
```
