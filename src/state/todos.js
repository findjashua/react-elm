import subject from '../subject'

const initialState = {
  inputValue: '',
  todoList: {}
}

export default subject
  .scan((state, evt) => {
    switch (evt.data.name) {
      case 'input':
        state.inputValue = evt.synthEvt.target.value
        break

      case 'save':
        const newTodo = state.inputValue
        const id_save = newTodo
        state.todoList[id_save] = {
          text: newTodo,
          completed: false
        }
        state.inputValue = ''
        break

      case 'toggle':
        const id_toggle = evt.data.id
        state.todoList[id_toggle].completed = !state.todoList[id_toggle].completed
        break
    }
    return state
  }, initialState)
  .startWith(initialState)
