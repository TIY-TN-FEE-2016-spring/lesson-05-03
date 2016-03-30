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
      content += `<li>${i}</li>`
    })

    this.pageSection.innerHTML = content
  }
}
