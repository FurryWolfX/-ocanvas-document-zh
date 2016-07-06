# Core(核心对象)

`oCanvas` `Core` 可以通过全局对象送的 `create()` 方法创建.

## Modules

`core` 实例包含 `oCanvas` 的所有模块

- animation
动画

- background
背景

- display
包含所有添加的 `display` 对象, `core.display.rectangle(settings)` 会返回一个新的 `rectangle` 对象

- draw
操作 `canvas` 的重绘.

- events
操作事件相关,关注 `bind()`

- keyboard
键盘事件

- mouse
鼠标事件

- scenes
app的不同状态

- style
样式相关

- timeline
主循环

- tools
Tools that other methods use. It is used for finding out if the pointer is inside the objects, which is a must if events are going to work.

- touch
触摸事件


## Methods

- [addChild()](./core/addChild.md)

- [clear()](./core/clear.md)

- [destroy() (since version 2.2.0)](./core/destroy.md)

- [redraw()](./core/redraw.md)

- [removeChild()](./core/removeChild.md)

- [reset() (since version 2.2.0)](./core/reset.md)

## Properties

- children : Array (since version 2.1.0)
列出所有直接添加到 `core` 实例的对象.

- height : Number
`canvas` 的高度(像素).设置这个属性会重置 `canvas` 的大小,且会重绘每一个图形.

- id : Number
`core` 实例的 `ID`, `oCanvas.canvasList` 是所有实例的数组, `ID` 是实例的索引.

- pointer : Object
关联使用中的指针.

- settings : Object
控制 `oCanvas` 的工作方式, 属性如下:

  - canvas : String or HTMLCanvasElement
必须, `oCanvas` 操作的 `canvas` 元素, 可以使用 `CSS` 选择器字符串表示, 或者 `HTMLCanvasElement`.

  - background : String
设置背景,默认透明(transparent)

  - clearEachFrame : Boolean
指定 `timeline` 模块每帧前是否 `clear` 一次.
默认值: true

  - drawEachFrame : Boolean
指定 `timeline` 模块每帧后是否重绘.
默认值: true.

  - fps : Number
玩游戏的都知道.
默认值: 30

  - plugins : Array
使用到的插件, 名字的数组.
默认值: []

  - disableScrolling : Boolean
禁止滚动, 只是禁止 `canvas` 区域, 其他地方不影响.
默认值: false

- width : Number
`canvas` 的宽度(像素)
