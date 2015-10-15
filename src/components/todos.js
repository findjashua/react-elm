import React from 'react'
import _ from 'lodash'

import NewTodo from './new-todo'

export default (props) => {
  const TodoList = props.todoList.map((todo, i) => { return <p key={i}>{todo}</p> })
  return (
    <div>
      <NewTodo {..._.pick(props, 'inputValue')}/>
      <ul>{TodoList}</ul>
    </div>
  )
}
