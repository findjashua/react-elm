import React from 'react'

import { publish } from '../utils'

export const TodoItem = (props) => {
  const { id, todo } = props
  const textDecoration = todo.completed ? 'line-through' : 'none'
  const payload = {
    name: 'todo_toggle',
    data: { id }
  }
  return (
    <div
      key={id}
      style={{textDecoration}}
      onClick={publish.bind(null, payload)}
      >
      {todo.text}
    </div>
  )
}
