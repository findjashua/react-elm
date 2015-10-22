import React from 'react'
import _ from 'lodash'

import { publish } from '../utils'

const Options = filters => {
  return _.map(filters, filter => {
    return (
    <option key={filter} value={filter}>
      {filter.toUpperCase()}
    </option>
    )
  })
}

export const Filter = props => {
  const { currentFilter, filters } = props
  return (
    <select
      value={currentFilter}
      onChange={publish.bind(null, {name: 'todo_filter'})}>
      {Options(filters)}
    </select>
  )
}
