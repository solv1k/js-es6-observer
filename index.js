import { Writer } from './classes/writer.js'
import { Observer } from './classes/observer.js'
import { User } from './classes/user.js'

const writer = new Writer()
const observer = new Observer()
const user1 = new User({ name: 'Solv1k'} )
const user2 = new User({ name: 'Foo'} )
const user3 = new User({ name: 'Bar'} )

observer.subscribe(user1, 'greeting')
observer.subscribe(user2, 'greeting')
observer.subscribe(user3, 'greeting')
observer.fire('greeting', { text: 'Hello, World!' })

writer.printLn('---')

observer.unsubscribe(user2, 'greeting')
observer.fire('greeting', { text: 'Hello, again!' })