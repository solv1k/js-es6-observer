export class Observer {
  constructor() {
    this.listeners = []
  }

  subscribe(listener, event) {
    if (! this.listeners[event]) {
      this.listeners[event] = []
    }
    if (! this.listeners[event].includes(listener)) {
      this.listeners[event].push(listener)
    }
  }

  unsubscribe(listener, event) {
    if (! this.listeners[event] || ! this.listeners[event].includes(listener)) {
      return false
    }
    
    this.listeners[event].splice(this.listeners[event].indexOf(listener), 1)
  }

  fire(event, data) {
    if (! this.listeners[event] ) {
      return false
    }

    this.listeners[event].forEach(listener => {
      if (typeof listener[event] === 'function') {
        listener[event](data)
      }
    })
  }
}