import React from 'react'

import subject from '../subject'
import { publish } from '../utils'

export default (props) => {
  const { id, todo } = props
  const color = todo.completed ? 'green' : 'red'
  return (
    <div
      style={{color}}
      onClick={publish.bind(null, subject, {name: 'toggle', id: id})}
      >
      {todo.text}
    </div>
  )
}
