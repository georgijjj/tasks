import { combineReducers } from 'redux'
import tasks from './tasks'
import modal from './modal'
import search from './search'

export default combineReducers({ tasks, modal, search })
