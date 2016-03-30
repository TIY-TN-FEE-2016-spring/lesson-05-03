export default class SumView {
  constructor(el) {
    this.el = el
    this.result = 'Loading ...'

    this.redraw()

    fetch(`http://localhost:3000/users/james/numbers/sum`)
      .then(r => r.json())
      .then(sum => {
        this.result = sum
        this.redraw()
      })
  }

  redraw() {
    this.el.innerHTML = `<p>Sum is:</p><h2>${this.result}</h2>`
  }
}
