# add()

语法 `add(redraw)` 返回类型 `displayObject`

## Description

添加一个对象到 `canvas`

## Arguments

### redraw : Boolean (since version 2.0.0) 

如果设置 `false`, 添加对象后不会触发重绘.
可以在批量添加, 但只想重绘一次时使用. 

返回值:

`displayObject` 本身.

## Examples

### Example 1

添加一个 `rectangle` 到 `canvas`

```
var canvas = oCanvas.create({ 
 canvas: "#canvas", 
 background: "#ccc" 
});

var rectangle = canvas.display.rectangle({
 x: 77, 
 y: 100, 
 width: 200,
 height: 100, 
 fill: "#000" 
});

rectangle.add();
```