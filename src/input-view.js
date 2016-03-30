export default class InputView {
  constructor(section, listView) {
    // We need to make sure that we update and re-render the list
    //   view after adding a new number
    // The strategy here is that we will pass the list view object
    //   itself in to the InputView constructor, so that we can
    //   hold a reference here, and signal that it's time to refresh
    //   after every successful number save
    this.correspondingListView = listView

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
      .then(data => {
        // Now that we know we've saved the data in the server,
        //   the list view is out of date. But it knows how to
        //   update itself - we just need to tell it that it's
        //   time to do so.
        this.correspondingListView.pleaseRefreshFromTheServerNow()

        // Note: for completion's sake, we should do the same sort
        //   of thing to update the Sum and Product views. That's
        //   left as an excercise.
      })
  }

  render() {
    this.section.innerHTML = `
      <input placeholder='Your number'>
      <button>Save</button>
    `
  }
}
