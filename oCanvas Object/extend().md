# extend()

语法 `extend(destination, source [, source...])` 返回类型 `Object`

简言之: 从另一个对象继承属性. 可以是多个对象.

## 参数

### destination : Object

你想继承的对象

### source : Object

被继承的对象

## Examples

### Example 1

```
var obj_1 = {
 foo: "bar"
};
var obj_2 = {
 lorem: "ipsum"
};
var obj_3 = {
 foo: "foobar",
 lorem: "loremipsum"
};

oCanvas.extend(obj_1, obj_2);
output("obj_1: ", obj_1);

oCanvas.extend(obj_3, obj_2);
output("obj_3: ", obj_3);

var newObj = oCanvas.extend({}, obj_2, obj_3);
output("newObj: ", newObj);
output("obj_2: ", obj_2);
```
