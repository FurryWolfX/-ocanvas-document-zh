# clone()

语法 `clone([settings])` 返回类型 `displayObject`

## Description 

克隆一个新的对象, 返回一个拥有旧对象属性的实例.
可以接受新的属性.从 `2.0.0` 开始, 子对象也会被克隆.

## Arguments 

### settings : Object 

新实例的属性 

## Return Value

新的 `display object`.

## Example

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

var rectangle_1 = canvas.display.rectangle({
 x: 77,
 y: 70,
 width: 200,
 height: 100,
 fill: "#000"
});

var rectangle_2 = rectangle_1.clone({
 y: 190
});

canvas.addChild(rectangle_1);
canvas.addChild(rectangle_2);
```