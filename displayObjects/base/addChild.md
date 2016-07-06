# addChild()

语法 `addChild(object [, returnIndex])` 返回类型 `displayObject` or `Number`

## Description

作为子对象添加, 子对象的 `x`, `y` 属性相对于父级, 父级移动, 旋转或移除, 子级也会被影响.

## Arguments

### object : displayObject 

继承自基础 `displayObject`.
也可以是一个预定义的 `display object`,或者是用户通过 `register()` 自己定义的 `display object`

### returnIndex : Boolean 

如果 `true`, 返回子元素的索引.

## Return Value

`displayObject` 或者数字.
`false` 时返回 `displayObject`, `true` 时返回子元素的索引.

## Examples

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle = canvas.display.rectangle({
 x: 77,
 y: 270,
 width: 200, 
 height: 100, 
 fill: "#000" 
});

var square = canvas.display.rectangle({ 
 x: 10, 
 y: 10, 
 width: 50,
 height: 50,
 fill: "#0ff"
});

canvas.addChild(rectangle);
rectangle.addChild(square);
```