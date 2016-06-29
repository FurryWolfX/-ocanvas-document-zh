# Image(图像)

在 `oCanvas` 中画图像非常简单. 只要指定位置和图片路径或 `HTML` 图片元素, 添加到 `canvas`. 你可以通过很少的配置, 很简单的显示图像.

注意:在传递到 `oCanvas` 后,图片路径(或元素)会加载. 如果先被预加载, 他会从缓存里直接获取, 但它依旧是异步的. 这意味着, 当 `add` 到 `canvas` 时, `image` 没有立即渲染,但是 `oCanvas` 会在他加载完之后渲染.

## Properties

### height : Number

对象的高

### image : String or HTMLImageElement

图片, 可以是路径或者 `HTMLImageElement`

### loaded : Boolean

是否已经加载完

### tile : Boolean

是否平铺对象, `true` 时,多次绘制并作为一个对象处理.

### tile_height : Number

平铺对象的高

### tile_spacing_x : Number

平铺对象的水平距离

### tile_spacing_y : Number

平铺对象的垂直距离

### tile_width : Number

平铺对象的宽

### width : Number

对象的宽

## Examples

### Example 1

创建一个 `image` ,添加到 `canvas`.

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var image = canvas.display.image({
 x: 177,
 y: 120,
 origin: { x: "center", y: "center" },
 image: "img/html5-logo.png"
});

canvas.addChild(image);
```

### Example 2

平铺例子

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var image = canvas.display.image({
 x: 177,
 y: 180,
 origin: { x: "center", y: "center" },
 image: "img/html5-logo.png",
 tile: true,
 tile_width: 40,
 tile_height: 40,
 tile_spacing_x: 5,
 tile_spacing_y: 10,
 width: 175,
 height: 190
});

canvas.addChild(image);
```
