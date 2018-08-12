import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import * as R from 'ramda'
import {
  CHANGE_DESCRIPTION,
  CHANGE_TITLE,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_INITIAL_VALUES,
} from '../actions'

const isOpen = handleActions(
  {
    [OPEN_MODAL]: R.T,
    [CLOSE_MODAL]: R.F,
  },
  false
)

const title = handleActions(
  {
    [CHANGE_TITLE]: R.pipe(
      R.nthArg(1),
      R.prop('payload')
    ),
    [SET_INITIAL_VALUES]: R.pipe(
      R.nthArg(1),
      R.path(['payload', 'title'])
    ),
    [CLOSE_MODAL]: R.always(''),
  },
  ''
)

const description = handleActions(
  {
    [CHANGE_DESCRIPTION]: R.pipe(
      R.nthArg(1),
      R.prop('payload')
    ),
    [SET_INITIAL_VALUES]: R.pipe(
      R.nthArg(1),
      R.path(['payload', 'description'])
    ),
    [CLOSE_MODAL]: R.always(''),
  },
  ''
)

export default combineReducers({ isOpen, title, description })
