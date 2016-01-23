var size = require('element-size')

var scratch = new Float32Array(2)

module.exports = landscapeFit

function landscapeFit (element, parent) {
  var isSVG = element.nodeName.toUpperCase() === 'SVG'

  resize.parent = parent

  function resize () {
    var target = parent || element.parentNode
    var width = window.innerWidth
    var height = window.innerHeight
    var dims = scratch

    if (typeof target === 'function') {
      dims = target(dims) || dims
    } else
    if (target && target !== document.body) {
      dims = size(target)
    } else {
      dims[0] = width
      dims[1] = height
    }

    dims[0] = dims[0] | 0
    dims[1] = dims[1] | 0

    if (height > width) {
      var transform = 'rotate(90deg) translate(0, -' + dims[1] + 'px)'
      var tmp = dims[0]
      dims[0] = dims[1]
      dims[1] = tmp

      element.style.WebkitTransform = transform
      element.style.transform = transform
      element.style.WebkitTransformOrigin = '0 0'
      element.style.transformOrigin = '0 0'
    } else {
      element.style.transform = null
    }

    if (isSVG) {
      element.setAttribute('width', width * resize.scale + 'px')
      element.setAttribute('height', height * resize.scale + 'px')
    } else {
      element.width = width * resize.scale
      element.height = height * resize.scale
    }

    element.style.width = dims[0] + 'px'
    element.style.height = dims[1] + 'px'

    return resize
  }

  return resize()
}
