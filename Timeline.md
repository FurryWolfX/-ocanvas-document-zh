# Timeline (时间轴)

时间轴模块用来设置循环, 经常在后台运行, 例如游戏.
循环移动游戏的对象, 等等.
默认, 每秒运行30次.

## Methods

### [setLoop()](./timeline/setLoop.md)

### [start()](./timeline/start.md)

### [stop()](./timeline/stop.md)

## Properties

### currentFrame : Number

当前帧数, 从1开始, 自增量为1.

### fps : Number

每秒帧数,设置后需要重新执行循环.

### running : Boolean

时间轴是否正在运行.
