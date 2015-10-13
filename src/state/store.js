import { Observable } from 'rx'

import app$ from './app'

export default Observable.combineLatest(app$, (app) => {
  return {
    app
  }
})
