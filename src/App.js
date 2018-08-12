import React, { Component } from 'react'
import configureStore from './configureStore'
import { Provider } from 'react-redux'

import { TasksList } from './containers'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TasksList />
      </Provider>
    )
  }
}

export default App
