import React from 'react'

import { publish } from '../utils'

export const NewTodo = props => {
  return (
    <div>
      <input
        placeholder={'New Todo'}
        value={props.inputValue}
        onChange={publish.bind(null, {name: 'todo_input'})}
        onKeyUp={publish.bind(null, {name: 'todo_keyup'})}/>
    </div>
  )
}
