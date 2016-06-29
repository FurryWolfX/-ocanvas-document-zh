#Draw (绘制)

控制 `canvas` 的重绘

## Methods

### clear()

### redraw()

## Properties

### isCleared : Boolean (since version 2.1.0)

`true` 说明 `canvas` 清除了所有东西

### objects : Array (deprecated in version 2.1.0)

包含添加到 `canvas` 的所有对象. 2.0.0 版本前是一个对象, 但是现在是一个数组;
会在以后移除, 使用 `core` 实例和视图对象的 `children` 属性代替.

### translation : Object

包含当前 `canvas` 的偏移.这总是 `x: 0` 和 `y: 0`, 除了对象被绘制.
位置会如同 `obj.abs_x` 和 `obj.abs_y`.
