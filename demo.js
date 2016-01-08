const wrap = document.body.appendChild(document.createElement('div'))
const child = wrap.appendChild(document.createElement('div'))
const text = child.appendChild(document.createElement('div'))

wrap.style.width = '70vh'
wrap.style.height = '30vh'
wrap.style.position = 'absolute'
wrap.style.left = '50%'
wrap.style.top = '50%'
wrap.style.transform = 'translate(-50%, -50%)'
text.style.position = 'absolute'
text.style.left = '50%'
text.style.top = '50%'
text.style.transform = 'translate(-50%, -50%)'

child.style.background = '#f0f'
text.innerHTML = 'hello world'
text.style.color = '#fff'
text.style.textAlign = 'center'
text.style.fontFamily = '"Helvetica Neue", sans-serif'
text.style.fontWeight = 800
text.style.fontSize = '3rem'

window.addEventListener('resize'
  , require('./')(child)
  , false
)
