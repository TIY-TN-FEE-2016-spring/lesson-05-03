export default class InputView {
  constructor(section) {
    this.section = section
    this.render()
    this.listenForButton()
  }

  listenForButton() {
    const button = this.section.querySelector(`button`)
    button.addEventListener(`click`, () => {
      const number = this.section.querySelector(`input`).value
      // console.log('should save', number)
      this.saveNumber(number)
    })
  }

  saveNumber(x) {
    const reqBody = new FormData()
    reqBody.append("value", x)

    // console.log(reqBody)

    fetch("http://localhost:3000/users/james/numbers", {
      method: `POST`,
      body: reqBody
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }

  render() {
    this.section.innerHTML = `
      <input placeholder='Your number'>
      <button>Save</button>
    `
  }
}
