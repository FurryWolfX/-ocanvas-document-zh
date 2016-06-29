# Display Objects (视图对象)

`oCanvas` 使用对象的方式代替像素, 你可以创建对象添加到 `canvas`,这样操作起来更直观~ 这些对象称之为 `display` 对象. 一些 `display` 对象已经被 `oCanvas` 预定义. 如下:

如果你想使用原生的 `API`, `display` 模块有个 `register()` 方法,可以创建新的 `display` 对象.这种方式可以安全的使用原生 `API`, `oCanvas` 可以完美操作它. 你可以写一些循环方法之类的. 所有在此之外的绘制方法都是不安全的, 因为你使用这个方法的时候 `oCanvas` 会自动清除和重绘 `canvas`.

## Pages对象

### [Base 基础类型](./displayObjects/Base.md)

### [Arc 弧线](./displayObjects/Arc.md)

### [Ellipse 椭圆](./displayObjects/Ellipse.md)

### [Image 图像](./displayObjects/Image.md)

### [Line 直线](./displayObjects/Line.md)

### [Polygon 多边形](./displayObjects/Polygon.md)

### [Rectangle 矩形](./displayObjects/Rectangle.md)

### [Sprite 雪碧图](./displayObjects/Sprite.md)

### [Text 文本](./displayObjects/Text.md)

## Methods

### [register()](./displayObjects/register.md)
