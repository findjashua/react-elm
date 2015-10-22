import React from 'react'
import _ from 'lodash'

import { TodoItem } from './todo-item'

const getTodosForCompleted = (todoList, completed) => {
  return _.reduce(todoList, (dict, todo, id) => {
    if (todo.completed === completed) dict[id] = todo
    return dict
  }, {})
}

const getFilteredTodoList = (todoList, filter) => {
  switch (filter) {
    case 'all':
      return todoList
    case 'completed':
      return getTodosForCompleted(todoList, true)
    case 'incomplete':
      return getTodosForCompleted(todoList, false)
  }
}

export const TodoList = props => {
  const todoList = getFilteredTodoList(props.todoList, props.currentFilter)
  const items = _.map(todoList, (todo, id) => <TodoItem key={id} id={id} todo={todo}/>)
  return <ul>{items}</ul>
}
