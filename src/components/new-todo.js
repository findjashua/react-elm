import React from 'react'

import subject from '../subject'
import { publish } from '../utils'

export const NewTodo = (props) => {
  return (
    <div>
      <input
        placeholder={'New Todo'}
        value={props.inputValue}
        onChange={publish.bind(null, subject, {name: 'todo_input'})}
        onKeyUp={publish.bind(null, subject, {name: 'todo_keyup'})}/>
    </div>
  )
}
