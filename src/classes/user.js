'use strict'

import { Writer } from './writer.js'

export class User {
  constructor({ name }) {
    this.name = name
  }

  greeting(data) {
    const writer = new Writer()
    writer.printLn(`${this.name} say: ${data.text}`)
  }
}