let singleton = null

export class Writer {
  constructor() {

    if (! singleton) {
      this.lines = []
      singleton = this
    }

    return singleton
  }

  append(text) {
    this.lines.push(text)
    this.printLines()
  }

  printLines() {
    const appHtmlElement = document.querySelector('#app')

    if (appHtmlElement) {
      appHtmlElement.innerHTML = ''
    }

    this.lines.forEach(line => {
      if (appHtmlElement) {
        appHtmlElement.innerHTML += line + '<br>'
      } else {
        console.log(line)
      }
    })
  }
}