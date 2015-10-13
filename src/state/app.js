import { Observable } from 'rx'

import subject from '../subject'

const greeting$ = subject
  .filter(evt => { return evt.source === 'input.greeting' })
  .map(evt => { return evt.synthEvt.target.value })
  .startWith('hello')

const name$ = subject
  .filter(evt => { return evt.source === 'input.name' })
  .map(evt => { return evt.synthEvt.target.value })
  .startWith('world')

export default Observable.combineLatest(greeting$, name$, (greeting, name) => {
  return {
    greeting,
    name
  }
})
