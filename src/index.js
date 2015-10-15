import React from 'react'
import ReactDOM from 'react-dom'

import todos$ from './state/todos'
import Todos from './components/todos'

todos$
  .subscribe(todos => {
      ReactDOM.render(<Todos {...todos}/>, document.getElementById('root'));
  })
