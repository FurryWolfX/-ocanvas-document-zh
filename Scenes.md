# Scenes(场景)

场景是用来分离 `app` 不同状态的方式.
如果你创建一个游戏, 也许会有介绍场景, 游戏场景, 结束场景.
当创建一个新的场景.
你相当于告诉 `OC` 这个场景包含哪些对象.
当你需要加载一个特殊的场景, `OC` 会添加这些对象.
你也可以指定需要卸载的场景.

## Pages对象

### Instance

## Methods

### create()

### load()

### unload()

## Properties

### current : String

当前加载的场景的名字.
如果没有场景加载, 返回 "none"

### scenes : Object

已创建的所有场景.
`names` 属性是场景的名称, `values` 是场景的实际对象.
