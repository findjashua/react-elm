import subject from '../subject'

const initialState = {
  inputValue: '',
  todoList: {}
}

export default subject
  .scan((state, evt) => {
    switch (evt.name) {
      case 'todo_input':
        state.inputValue = evt.synthEvt.target.value
        break

      case 'todo_save':
        const newTodo = state.inputValue
        const id_save = newTodo
        state.todoList[id_save] = {
          text: newTodo,
          completed: false
        }
        state.inputValue = ''
        break

      case 'todo_toggle':
        const id_toggle = evt.data.id
        state.todoList[id_toggle].completed = !state.todoList[id_toggle].completed
        break
    }
    return state
  }, initialState)
  .startWith(initialState)
