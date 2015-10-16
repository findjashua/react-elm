import React from 'react'

import subject from '../subject'
import { publish } from '../utils'

export const TodoItem = (props) => {
  const { id, todo } = props
  const color = todo.completed ? 'green' : 'red'
  const payload = {
    name: 'todo_toggle',
    data: { id }
  }
  return (
    <div
      style={{color}}
      onClick={publish.bind(null, subject, payload)}
      >
      {todo.text}
    </div>
  )
}
