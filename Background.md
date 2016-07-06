# Background(背景)

`oCanvas` 对 `canvas` 背景有一个特殊的模块. 设置背景你不需要创建任何视图对象或者其他对象.
只需要在 `oCanvas.create()` 的 `settings` 中设置背景属性.
如果你想在方法中调用.
可以使用 `background` 模块的 `set()` 方法.

## Methods

- [set()](./background/set.md)

## Properties

- bg : String or CanvasGradient or CanvasPattern
背景值兼容原生的 `fillStyle` 属性.
如果他是个色值,就是 `String`, 否则是 `CanvasGradient` 或 `CanvasPattern`.

- type : String
背景值得类型, 可以是以下值:

  - transparent

  - color

  - gradient

  - image


- value : String

色值
