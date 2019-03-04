export class User {
  constructor({ name }) {
    this.name = name
  }

  greeting(data) {
    const result = `${this.name} say: ${data.text}`
    const appHtmlElement = document.querySelector('#app');
    if (appHtmlElement) {
      appHtmlElement.innerHTML = result
    } else {
      console.log(result)
    }
  }
}