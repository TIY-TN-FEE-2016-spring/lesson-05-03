export default class NumberListView {
  constructor(firstArgument) {
    const numbers = [2,4,1]

    let content = ``

    numbers.forEach(i => {
      // content = content + `<li>${i}</li>`
      content += `<li>${i}</li>`
    })

    firstArgument.innerHTML = content
  }
}
