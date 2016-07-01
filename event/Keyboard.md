# Keyboard(键盘)

`oCanvas` 为了键盘事件有个中间层, 正常情况下, 你只需要将事件添加到 `canvas`, 而不是特殊的视图对象, 这是目前 `oCanvas` 键盘事件唯一的方式.

中间层有一些优点.
可以使用 `bind` 去和鼠标触摸事件一样来写.
他也解决了 `keypress/keydown` 的一些问题. 修复了事件对象, 并做了一些有用的 `helper`.

你可以指定哪些 `keys` 需要防止默认动作.
比如在游戏里就很有用.
你可以想要阻止空格滚动页面.

## Event Types(事件类型)

### keydown

按下时触发

### keypress

按下时触发(直到释放按键)

### keyup

释放时触发

## Event Object(事件对象)

事件对象是处理函数的第一个参数.
包含了常规事件对象的基本属性.
一些东西改变时, 时间戳属性在常规对象中不一定永远正确.
所以需要被修复.
如果这个属性(用于检查哪个键被按下了)不正确就会被修复且包含了 `keyCode`.

如果需要原来的时间对象, 他保存在 `originalEvent` 属性里.

## Keyboard Module(键盘模块)

为键盘事件绑定处理函数, 你不需要直接作用于确切的 `oCanvas` 键盘模块 -- 你只需要用 `core` 实例的 `bind()` 方法.
键盘模型还提供了额外的使用方式.
比如可以用 `core.keyboard.SPACE` 代替键盘 `code 32`

## Methods(方法)

### [addPreventDefaultFor() (since version 2.0.0)](./keyboard/addPreventDefaultFor.md)

### [anyKeysDown()](./keyboard/anyKeysDown.md)

### [getKeysDown()](./keyboard/getKeysDown.md)

### [numKeysDown()](./keyboard/numKeysDown.md)

### [removePreventDefaultFor() (since version 2.0.0)](./keyboard/removePreventDefaultFor.md)

## Properties(属性)]

### ARROW_DOWN : Number

Keycode for the down arrow; 40

### ARROW_LEFT : Number

Keycode for the left arrow; 37

### ARROW_RIGHT : Number

Keycode for the right arrow; 39

### ARROW_UP : Number

Keycode for the up arrow; 38

### ENTER : Number

Keycode for the enter key; 13

### ESC : Number

Keycode for the escape key; 27

### SPACE : Number

Keycode for the space key; 32

## Examples(例子)

### Example 1

```
var canvas = oCanvas.create({
 canvas: "#canvas",
 background: "#ccc"
});

canvas.bind("keydown", function () {
 canvas.background.set("hsl(" + Math.random() * 360 + ", 50%, 50%)");
});
```
