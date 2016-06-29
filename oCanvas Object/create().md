# create()

构建一个新的核心实例

语法 `create(settings)` 返回类型 `Core`

描述

每个 `oCanvas` 项目必用, 构建 `Core` 对象的实例.参数设置是一个包含了不同的设置的对象, 会影响当前实例的工作方式. `除了canvas` 以外的属性都有默认值.

# Arguments[参数]

## settings : Object

`settings` 对象控制 `oCanvas` 如何工作, 他有以下属性:

## canvas : String or HTMLCanvasElement

指定 `oCanvas` 工作的 `canvas` 元素. 可以是 `CSS` 选择器字符串或 `HTMLCanvasElement`.

必须. 无默认值.

## background : String

设置背景.支持CSS颜色值,渐变和图像(特殊语法,见display对象的fill属性).

默认透明

## clearEachFrame : Boolean

指定时间轴在每一帧前是否清除 `canvas`.

默认 `true`

## drawEachFrame : Boolean

指定时间轴在每一帧后是否绘制 `canvas`.

默认 `true`

## fps : Number

fps玩游戏的都知道(x)

默认30

## plugins : Array

设置 `core` 实例使用的插件. 包含插件名的数组.

默认:[]

## disableScrolling : Boolean

在触摸设备上屏蔽滚动.只是在 `canvas` 元素上屏蔽,其他地方依然可以滚动.

默认 `false`

# Examples[例子]

## Example 1

通过一个参数用 `create()` 创建一个 `Core` 实例.指定背景和 `canvas` 对象的 `id`.

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#0cc"
});
```
