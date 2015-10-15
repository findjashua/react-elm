import { Observable } from 'rx'

import subject from '../subject'
import { filterObsByName } from '../utils'

const input$ = filterObsByName(subject, 'input')
  .map(evt => { return evt.synthEvt.target.value })
  .startWith('')

const save$ = filterObsByName(subject, 'save')
  .startWith(undefined)

const inputValue$ = Observable.merge(
  input$,
  save$.map(save => { return '' })
)

const newTodo$ = save$
  .withLatestFrom(input$, (save, input) => { return input })
  .filter(input => { return input.length > 0 })

const todoList$ = newTodo$
  .scan((todoList, newTodo) => {
    todoList.push(newTodo)
    return todoList
  }, [])
  .startWith([])


export default Observable
  .combineLatest(inputValue$, todoList$, (inputValue, todoList) => {
    return {
      inputValue,
      todoList
    }
  })
