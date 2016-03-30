export default class InputView {
  constructor(section) {
    this.section = section

    // const reqBody = new FormData()
    // reqBody.append("value", 17)
    //
    // console.log(reqBody)
    //
    // fetch("http://localhost:3000/users/james/numbers", {
    //   method: `POST`,
    //   body: reqBody
    // })
    //   .then(r => r.json())
    //   .then(data => console.log(data))
    this.render()
  }

  render() {
    this.section.innerHTML = `
      <input placeholder='Your number'>
      <button>Save</button>
    `
  }
}
