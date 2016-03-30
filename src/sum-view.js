export default class SumView {
  constructor(el) {
    this.el = el

    this.redraw()
  }

  redraw() {
    this.el.innerHTML = `<p>Sum is:</p><h2>7</h2>`
  }
}
