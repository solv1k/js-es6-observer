import { Writer } from './writer.js'

export class User {
  constructor({ name }) {
    this.name = name
  }

  greeting(data) {
    const writer = new Writer()
    writer.append(`${this.name} say: ${data.text}`)
  }
}