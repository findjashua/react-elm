import React from 'react'
import _ from 'lodash'

import NewTodo from './new-todo'
import TodoItem from './todo-item'

export default (props) => {
  const TodoList = _.map(props.todoList, (todo, id) => {
    return <TodoItem key={id} todo={todo}/>
  })
  return (
    <div>
      <NewTodo {..._.pick(props, 'inputValue')}/>
      <ul>{TodoList}</ul>
    </div>
  )
}
