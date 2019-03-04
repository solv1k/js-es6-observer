import { Observer } from './classes/observer.js'
import { User } from './classes/user.js'

const observer = new Observer()
const user = new User({ name: 'Solv1k'} )

observer.subscribe(user, 'greeting')

observer.fire('greeting', { text: 'Hello, World!' })