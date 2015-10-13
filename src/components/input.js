import React from 'react'

import subject from '../subject'
import { publish } from '../utils'

export default (props$) => {
  return props$
    .map((props) => {
      const source = ['input', props.type].join('.')
      return (
        <input
          placeholder={props.type}
          value={props[props.type]}
          onChange={publish.bind(null, subject, {source})} />
      )
    })
}
