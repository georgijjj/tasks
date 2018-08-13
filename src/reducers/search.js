import { handleActions } from 'redux-actions'
import * as R from 'ramda'
import { CHANGE_SEARCH_VALUE, RESET } from '../actions'

const value = handleActions(
  {
    [CHANGE_SEARCH_VALUE]: R.pipe(
      R.nthArg(1),
      R.prop('payload')
    ),
    [RESET]: R.always(''),
  },
  ''
)

export default value
