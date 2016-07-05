# Base(基础视图对象)

每一个 `display object` 的基础,所有 `display object` 继承了 `base` ,拥有 `base` 所有的方法和属性

## Methods

### [add()](./base/add.md)
### [addChild()](./base/addChild.md)
### [clone()](./base/clone.md)
### [getOrigin()](./base/getOrigin.md)
### [move()](./base/move.md)
### [moveTo()](./base/moveTo.md)
### [remove()](./base/remove.md)
### [removeChild()](./base/removeChild.md)
### [removeChildAt()](./base/removeChildAt.md)
### [rotate()](./base/rotate.md)
### [rotateTo()](./base/rotateTo.md)
### [scale()](./base/scale.md)
### [scaleTo()](./base/scaleTo.md)
### [setOrigin()](./base/setOrigin.md)


## Properties

### abs_x : Number
相对于 `canvas` 左边框的位置
### abs_y : Number
相对于 `canvas` 上边框的位置
### added : Boolean (since version 2.1.0)
对象是否被添加,不一定是被画出的.
### cap : String
描述线的结束点怎么画. 可以是"butt", "round" 或 "square". 默认: "butt"
### children : Array
包含所有添加到这个视图对象的子对象.
### composition : String
设置 `composition` 操作,更多信息见 `canvas` 手册
### drawn : Boolean
对象是否画到 `canvas` 上
### events : Object
事件
### fill : String
填充,可以是 `CSS` 颜色,可以是渐变
#### &emsp;Color[使用CSS色值]
`#000, rgba(0, 0, 0, 0.5)` 或 `transparent`
#### &emsp;`Gradient` [使用渐变]

`radial-gradient(start_position, end_position, size, color, color [, color...])`

`radial-gradient(center, center, 50% width, #fff, #000)`

`linear-gradient(start_position | angle, color, color [, color...])`

`start position` 可以是 `top`, `bottom`, `left` or `right`, 也可以联合使用, `angle` 可以是 `45deg`.

#### &emsp;Image pattern

使用特殊语法:

`image(path [, repeat])`

`repeat` 可以是 `repeat`, `repeat-x`, `repeat-y` or `no-repeat`,默认是 `repeat`;

大多数使用 image(img.jpg)

### id : Number

`draw` 模块给与的对象 `ID.core.draw.objects[id]`可以获取 `draw list` 中的对象

### join : String

描述线如何连接, 可以是 "round", "bevel" or "miter". Default: "miter"

### miterLimit : Number

当 `join` 设置为"miter", 在线相遇时画笔的外边会被延伸. 限制内连接点和外连接点的距离. 超过这个距离会自动使用  "bevel" 代替.

### opacity : Number

透明度,值在 `0` 到 `1` 之间.

### origin : Object

用 `2` 个属性来描述内部的原点. 这个点作为旋转的中心点, 也是 `x` , `y` 绘图的坐标,如果 `origin.x` 是 `10`,对象的左边框会里左边 `10px`. 这属性可以是数值也可以是以下的特殊字符. 同时也可以使用 `setOrigin()` 来完成这件事.

```
x
"left" | "center" | "right" | Number
y
"top" | "center" | "bottom" | Number
```

### parent : displayObject

`display` 对象的父级对象

### pointerEvents : Boolean (since version 2.0.0)

当设置 `false` ,所有的指针事件对当前对象无效, 会穿透到下面的对象上.

### rotation : Number

旋转, `540` 和 `180` 和 `-180` 是一样的

### scalingX : Number

`X` 方向的缩放指数,不能为 `0` ,可以使用方法 `scale()` 或 `scaleTo()`

注意: `oCanvas` 不能正确处理缩放对象的事件!


### scalingY : Number

`Y` 方向的缩放指数, 不能为 `0` ,可以使用方法 `scale()` 或 `scaleTo()`
注意: `oCanvas` 不能正确处理缩放对象的事件!


### shadow : String

语法同 `CSS box-shadow`:

`<offset_x>px <offset_y>px <blur_radius>px color`

Example: `0 0 10px #000`.

### shadowBlur : Number

阴影的模糊半径

### shadowColor : String

阴影颜色, 任何 `CSS` 颜色

### shadowOffsetX : Number

阴影 `x` 偏移

### shadowOffsetY : Number

阴影 `y` 偏移

### shapeType : String

描述形状. 可以是 "rectangular" or "radial".
### stroke : String

对象的画笔属性, 语法 "<number>px value"

### strokeColor : String

画笔颜色

### strokeWidth : Number

画笔宽度

### type : String

形状名字.比如:一个 `rectangle object` 把 `type` 设置为 "rectangle".

### x : Number

对象的 `x` 位置, 相对于父级.

### y : Number

对象的 `y` 位置,相对于父级.

### zIndex : Number or String (since version 2.0.0)

父级里加的所有对象的层级.值越大越前,也可以使用"front" and "back"关键字.

注意:这个 `index` 是相对其他同父级对象的. 设置一个特定的值不能保证永远不变.当其他同级对象改变 `zIndex` 时,这个对象的 `zIndex` 也会改变. `zIndex` 必须在对象 `add` 之后设置

`2.1.0` 版本前, 这个值是设置全局的层级, 可能使层级不正确.
