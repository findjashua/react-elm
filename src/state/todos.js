import _ from 'lodash'

import subject from '../subject'

const initialState = {
  inputValue: '',
  todoList: {},
  currentFilter: 'all'
}

export default subject
  .scan((state, evt) => {
    let id
    switch (evt.name) {
      case 'todo_input':
        state.inputValue = evt.synthEvt.target.value
        break

      case 'todo_keyup':
        if (evt.synthEvt.keyCode !== 13) break
        const newTodo = state.inputValue
        id = newTodo
        state.todoList[id] = {
          text: newTodo,
          completed: false
        }
        state.inputValue = ''
        break

      case 'todo_toggle':
        id = evt.data.id
        state.todoList[id].completed = !state.todoList[id].completed
        break

      case 'todo_filter':
        state.currentFilter = evt.synthEvt.target.value
        break

      case 'todo_delete':
        id = evt.data
        state.todoList = _.omit(state.todoList, id)
        break
    }
    return state
  }, initialState)
  .startWith(initialState)
