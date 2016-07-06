# oCanvasObject(OC对象)

这是一个全局的包含所有模块的oCanvas对象, 包含核心的构建方法和其他的一些方法.
虽然这是这个库的主对象, 但它很少在 `app` 当中使用.
取而代之的是模块的实例化核心对象.
它可以使 `oCanvas` 在多个 `canvases` 上使用.

这意味着开始项目时你经常只是使用 `oCanvas` 对象, 如果你的脚本在 `canvas` 元素前, 你需要使用 `domReady()`.
当你想要创建一个新的核心实例,使用 `create()`.
如果你想在创建核心实例前定制化 `oCanvas`, 你可以添加新的显示对象, 模块和插件.

## Methods

- [create()](./oCanvasObject/create.md)

- [domReady()](./oCanvasObject/domReady.md)

- [extend()](./oCanvasObject/extend.md)

- [registerDisplayObject()](./oCanvasObject/registerDisplayObject.md)

- [registerModule()](./oCanvasObject/registerModule.md)

- [registerPlugin()](./oCanvasObject/registerPlugin.md)

## Properties

- canvasList : Array

包含所有核心实例. 索引分配给核心实例的 `id` 属性.

- version : String (since version 2.7.0)

`oCanvas` 的版本
