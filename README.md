# landscape-fit

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Fit an element to specific dimensions, rotated according to the aspect ratio to maintain a fake "orientation lock".

Similar to [canvas-fit](https://github.com/hughsk/canvas-fit), but doesn't handle canvas scaling for HiDPI displays.

![](http://i.imgur.com/Fv73tSZ.gif)

## Usage

[![NPM](https://nodei.co/npm/landscape-fit.png)](https://www.npmjs.com/package/landscape-fit)

### resize = fit(element[, parent])

Creates a `resize` function for your `element`. Calling this function will resize the element to fit its parent.

Here's a simple example to make your canvas update its dimensions when resizing the window:

``` javascript
var fit = require('canvas-fit')
var canvas = document.createElement('canvas')

window.addEventListener('resize', fit(canvas), false)
```

You might want to override the `parent` element that the canvas should be fitting within: in which case, pass that element in as your second argument:

``` javascript
window.addEventListener('resize', fit(canvas, window), false)
```

You can also pass your own dimensions via a callback like so:

``` javascript
window.addEventListener('resize', fit(canvas, function (dims) {
  dims[0] = 100
  dims[1] = 200
}), false)
```

### `resize.parent = <DOMElement>`

Dynamically change the element's `parent` element. Note that you still need to manually trigger a resize after doing this.

### `resize.parent = () => [width, height]`

Instead of filling a given element, explicitly set its width and height. Note that you still need to manually trigger a resize after doing this.

## License

MIT, see [LICENSE.md](http://github.com/jam3/landscape-fit/blob/master/LICENSE.md) for details.
