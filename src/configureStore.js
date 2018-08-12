import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { EDIT_TASK, DELETE_TASK, CREATE_TASK } from './actions'
import { getTasks } from './selectors'

const savingMiddleware = store => next => action => {
  const result = next(action)

  switch (action.type) {
    case EDIT_TASK:
    case DELETE_TASK:
    case CREATE_TASK:
      const tasks = getTasks(store.getState())
      localStorage.setItem('tasks', JSON.stringify(tasks))
      break
    default:
      break
  }

  return result
}

const getInitialState = () => {
  const data = localStorage.getItem('tasks')
  return data === null ? {} : { tasks: { tasks: JSON.parse(data) } }
}

const configureStore = () => {
  const initialState = getInitialState()
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(savingMiddleware)
  )
}

export default configureStore
