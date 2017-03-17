import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import './styles/custom.scss'
import './styles/main.scss'
import { loadState, saveState } from './utils/localStorage'
import rootReducer from './reducers'
import App from './components/App'

const preloadedState = loadState()
const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  preloadedState,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk),
  ),
)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  })
})

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer)
  })
}
