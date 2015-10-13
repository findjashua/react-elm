import React from 'react'
import * as _ from 'lodash'
import { Observable } from 'rx'

import { getChildProps$ } from '../utils'
import getInput$ from './input'

export default (props$) => {
    const greeting$ = getChildProps$(props$, 'greeting')
      .map((props) => { return _.extend(props, { type: 'greeting' }) })
    const Greeting$ = getInput$(greeting$)

    const name$ = getChildProps$(props$, 'name')
      .map((props) => { return _.extend(props, { type: 'name' }) })
    const Name$ = getInput$(name$)

    const Output$ = props$
      .map((props) => {
        return <p>{props.greeting} {props.name}</p>
      })

    return Observable.combineLatest(Greeting$, Name$, Output$, (Greeting, Name, Output) => {
      return (
        <div>
          {Greeting}
          {Name}
          {Output}
        </div>
      )
    })
}
