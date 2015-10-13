import ReactDOM from 'react-dom'

import store$ from './state/store'
import getApp$ from './components/app'

const app$ = store$.map((store) => { return store.app })
const App$ = getApp$(app$)

App$.subscribe((App) => {
    ReactDOM.render(App, document.getElementById('app'));
})
