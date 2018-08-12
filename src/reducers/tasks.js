import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { CREATE_TASK, EDIT_TASK, DELETE_TASK, SELECT_TASK } from '../actions'
import * as R from 'ramda'

const tasks = handleActions(
  {
    [CREATE_TASK]: (state, { payload }) => {
      const id = state.length + 1
      return [...state, { ...payload, id }]
    },
    [EDIT_TASK]: R.useWith(
      (state, task) =>
        R.map(R.ifElse(R.eqProps('id', task), R.always(task), R.identity))(
          state
        ),
      [R.identity, R.prop('payload')]
    ),
    [DELETE_TASK]: R.useWith(
      (state, id) => R.reject(R.propEq('id', id))(state),
      [R.identity, R.prop('payload')]
    ),
  },
  []
)

const selectedTask = handleAction(
  SELECT_TASK,
  R.pipe(
    R.nthArg(1),
    R.prop('payload')
  ),
  null
)

export default combineReducers({ tasks, selectedTask })
