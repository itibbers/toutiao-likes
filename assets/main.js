/*
 * @desc toutiao-likes
 */

class Likes {
  constructor(el) {
    this.el = document.querySelector(el)
    this.parent = this.el.parentElement
    this.starLen = 6
    this.init()
  }

  init() {
    let timer
    this.el.addEventListener('mousedown', (event) => {
      this.add()
      timer = setInterval(() => {
        this.add()
      }, 300)
    })
    this.el.addEventListener('mouseup', (event) => {
      clearInterval(timer)
    })
  }

  random(arr) {
    return arr[~~(Math.random() * arr.length)]
  }

  animate(dom) {
    const r = 200
    let arc = Math.random() * 2 * Math.PI
    let x = Math.cos(arc) * r
    let y = Math.sin(arc) * r
    let curves = ['ease-in', 'ease-out', 'ease-in-out']
    let curve = this.random(curves)
    // requestAnimationFrame(function() {
    // })
    Object.assign(dom.style, {
      transition: `left 1s linear, top 1s ${curve}, opacity 1s linear`,
      left: ~~x + 'px',
      top: ~~y + 'px',
      opacity: 0
    })
  }

  add() {
    const classArr = ['icon-xing', 'icon-xin', 'icon-yue']

    for (let i = 0; i < this.starLen; i++) {
      const dom = document.createElement('i')
      const className = this.random(classArr)
      dom.classList.add('icon', className)
      this.parent.appendChild(dom).focus()
      // reflow
      // dom.offsetWidth
      this.animate(dom)

      setTimeout(() => {
        dom.remove()
      }, 1000)

      // (function(dom) {
      //     setTimeout(function() {
      //         dom.remove()
      //     }, 1000)
      // })(dom)
    }
  }
}
