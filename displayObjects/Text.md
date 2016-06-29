# Text(文本)

文本可能是最常用的东西.
大文本可能用 `HTML` 添加更合适,因为可访问性好.
`oCanvas` 引入了 `text` 显示对象它很容易使用,用 `CSS` 的方式工作.

## Properties

### align : String

水平方向的对齐方式.
可以是 `start`, `end`, `left`, `right` 和 `center`.
默认: `start`. 从 `2.0.0` 版本开始, 它只影响多行文本对象中的文本.
旧版将改变 `text` 对象的原点.

### baseline : String

垂直方向的对齐方式.
可以是 `top`, `hanging`, `middle`, `alphabetic`, `ideographic` 或 `bottom`.
从 `2.0.0` 版本开始, 所有值都在 `oCanvas` 中计算.
旧版本使用普通 `canvas API` 的值.
有些浏览器不支持他们.

### family : String

和 `CSS font-family` 相同.

### font : String

和 `CSS` 相同

### height : Number

获取当前文本的计算过的高度.

### lineHeight : Number or String

行高相对于 `font-size`,是一个比例,1就是和 `font-size` 相同. 从 `2.3.0` 开始,像素值也支持, 比如 "18px".

### size : Number

字体的像素大小.

### style : String

和 `CSS font-style` 相同.

### text : String

需要渲染的文字,可以使用 `\n` 换行

### variant : String

和 `CSS font-variant` 相同

### weight : String

和 `CSS font-weight` 相同

### width : Number

获取当前文字计算过的高度

## Examples

### Example 1

创建文字并填充

```
var canvas = oCanvas.create({
 canvas: "#canvas"
});

var text = canvas.display.text({
 x: 177,
 y: 107,
 origin: { x: "center", y: "top" },
 font: "bold 30px sans-serif",
 text: "Hello World!",
 fill: "#0aa"
});

canvas.addChild(text);
```
