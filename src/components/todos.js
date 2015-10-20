import React from 'react'
import _ from 'lodash'

import { NewTodo } from './new-todo'
import { TodoList } from './todo-list'
import { Filter } from './filter-todo'

export const Todos = (props) => {
  const { filter, todoList } = props
  props = Object.assign({}, props, {
    filters: ['all', 'completed', 'incomplete']
  })
  return (
    <div>
      <NewTodo {..._.pick(props, 'inputValue')}/>
      <Filter {..._.pick(props, 'filters', 'currentFilter')}/>
      <TodoList {..._.pick(props, 'todoList', 'currentFilter')}/>
    </div>
  )
}
