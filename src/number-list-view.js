export default class NumberListView {
  constructor(firstArgument) {
    this.pageSection = firstArgument
    this.numbers = ["Loading ..."]

    fetch(`http://localhost:3000/users/james/numbers`).
      then(response => response.json()).
      then(data => {
        this.numbers = data
        this.drawPageStuff()
      })

    this.drawPageStuff()
  }

  drawPageStuff() {
    let content = ``

    this.numbers.forEach(i => {
      // content = content + `<li>${i}</li>`
      content += `<li>
        ${i}
        <button>X</button>
      </li>`
    })

    this.pageSection.innerHTML = content

    const buttons = this.pageSection.querySelectorAll(`button`)
    for (let i=0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener(`click`, () => {
        this.removeNumberAtIndex(i)
      })
    }
  }

  removeNumberAtIndex(index) {
    console.log('should remove number at index', index)
  }
}
