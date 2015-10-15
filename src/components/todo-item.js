import React from 'react'

import subject from '../subject'
import { publish } from '../utils'

export default (props) => {
  return (
    <div>
      {props.todo.text}
    </div>
  )
}
