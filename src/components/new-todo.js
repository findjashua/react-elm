import React from 'react'

import subject from '../subject'
import { publish } from '../utils'

export default (props) => {
  return (
    <div>
      <input
        placeholder={'New Todo'}
        value={props.inputValue}
        onChange={publish.bind(null, subject, {name: 'input'})} />
      <button
        disabled={props.inputValue.length === 0}
        onClick={publish.bind(null, subject, {name: 'save'})}>
        Save
      </button>
    </div>
  )
}
