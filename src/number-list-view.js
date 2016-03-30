export default class NumberListView {
  constructor(firstArgument) {
    this.pageSection = firstArgument
    this.numbers = ["Loading ..."]

    this.drawPageStuff()

    // Kick off the initial fetch once
    this.pleaseRefreshFromTheServerNow()
  }

  // And also have a function that we can call again to refresh
  //   the data from the server whenever we want
  pleaseRefreshFromTheServerNow() {
    // This function encapsulates:
    //   1) make the fetch request to the server
    //   2) re-render the page once it returns
    fetch(`http://localhost:3000/users/james/numbers`).
      then(response => response.json()).
      then(data => {
        this.numbers = data
        this.drawPageStuff()
      })
  }

  drawPageStuff() {
    let content = ``

    this.numbers.forEach(i => {
      // content = content + `<li>${i}</li>`
      content += `<li>
        ${i}
        <button class='delete-one'>X</button>
      </li>`
    })

    content += `<button class='delete-all'>Clear All</button>`

    this.pageSection.innerHTML = content

    const buttons = this.pageSection.querySelectorAll(`.delete-one`)
    for (let i=0; i < buttons.length; i++) {
      let button = buttons[i];
      button.addEventListener(`click`, () => {
        this.removeNumberAtIndex(i)
      })
    }

    this.pageSection.querySelector(`.delete-all`).addEventListener(`click`, () => {
      this.removeAllNumbers()
    })
  }

  removeNumberAtIndex(index) {
    fetch(`http://localhost:3000/users/james/numbers/${index}`, { method: `DELETE` })
      .then(r => r.json())
      .then(data => {
        console.log('deleted at index', index, data)
      })
  }

  removeAllNumbers() {
    fetch(`http://localhost:3000/users/james/numbers`, { method: `DELETE` })
      .then(r => r.json())
      .then(data => {
        console.log('deleted all', data)
      })
  }
}
