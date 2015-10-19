import React from 'react'

import subject from '../subject'
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
      style={{textDecoration}}
      onClick={publish.bind(null, subject, payload)}
      >
      {todo.text}
    </div>
  )
}
