import { Observable } from 'rx'

import subject from '../subject'
import { filterObsByName } from '../utils'

// input observables from events published by components

const input$ = filterObsByName(subject, 'input')
  .map(evt => { return evt.synthEvt.target.value })

const save$ = filterObsByName(subject, 'save')

const toggle$ = filterObsByName(subject, 'toggle')

// transform to output observables

const inputValue$ = Observable.merge(
  input$,
  save$.map(save => { return '' })
).startWith('')

const newTodo$ = save$
  .withLatestFrom(input$, (save, input) => { return input })
  .filter(input => { return input.length > 0 })
  .map(newTodo => {
    return {
      action: 'create',
      data: {
        text: newTodo,
        completed: false
      }
  }})

const toggleId$ = toggle$.map(evt => { return {
    action: 'update',
    data: {
      id: evt.data.id
    }
  }})

const todoList$ = Observable.merge(
  newTodo$,
  toggleId$
).scan((todoList, payload) => {
    const { action, data } = payload
    let id
    switch (action) {
      case 'create':
        id = data.text
        todoList[id] = data
        break
      case 'update':
        id = data.id
        todoList[id].completed = !todoList[id].completed
        break
    }
    return todoList
  }, {})
  .startWith({})


export default Observable
  .combineLatest(inputValue$, todoList$, (inputValue, todoList) => {
    return {
      inputValue,
      todoList
    }
  })
