# set()

SYNTAX `set(background)` RETURN TYPE `Background`

## Description

设置 `canvas` 的背景

## Arguments

### background : String

颜色值,详情参见视图对象的 `fill` 属性

返回值

`Background` 本身

## Examples

### Example 1

鼠标点击改背景

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.bind("click tap", function () {
 canvas.background.set("#0ff");
});
```
