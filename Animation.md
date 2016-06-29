# Animation (动画)

你也许会想要各种动画.
一些需要一个恒定的时间轴, 让动画执行较长一段时间.
这就是游戏中的常规动画.
控制对象移动, 计算新的值... 其它动画可能是短动画, 只是作为一种交互.
这就是这个模块所做的.
他非常容易使用,你 不需要自己去计算.
只是指定结束的值和时间, 他也支持多种缓动函数.

以下属性存在于 `animation` 模块, 例如 `core.animation.durations` ,方法存在于视图对象.

## Methods

### [animate()](./animation/animate.md)

### [delay() (since version 2.2.0)](./animation/delay.md)

### [fadeIn()](./animation/fadeIn.md)

### [fadeOut()](./animation/fadeOut.md)

### [fadeTo()](./animation/fadeTo.md)

### [finish() (since version 2.0.0)](./animation/finish.md)

### [stop()](./animation/stop.md)

## Properties

### defaults : Object

包含时间和缓动的默认值.

### duration : String

持续时间

### easing : String

缓动函数

### durations : Object

预定义的时间对象

### easing : Object

预定义的缓动函数.
他们是 "ease-in", "ease-out", "ease-in-out", "linear" 和常规的 `cubicBezer function`, 最后一个不直接使用(感兴趣的自行搜索"贝塞尔曲线"); 每个缓动函数传递一个参数, 即运行动画的时间位置, 是 0, 1 之间的比例值.
