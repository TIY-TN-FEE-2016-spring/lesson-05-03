export default class ProductView {
  constructor(el) {
    this.el = el
    this.result = 'Loading ...'

    this.redraw()

    fetch(`http://localhost:3000/users/james/numbers/product`, { method: `POST` })
      .then(r => r.json())
      .then(prod => {
        this.result = prod
        this.redraw()
      })
  }

  redraw() {
    this.el.innerHTML = `<p>Product is:</p><h2>${this.result}</h2>`
  }
}
