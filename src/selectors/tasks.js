import * as R from 'ramda'
import { getSearchValue } from './search'

export const getTasks = R.converge(
  (tasks, searchValue) =>
    R.filter(
      R.where({
        title: R.pipe(
          R.toLower,
          R.contains(searchValue)
        ),
      })
    )(tasks),
  [
    R.path(['tasks', 'tasks']),
    R.pipe(
      getSearchValue,
      R.toLower
    ),
  ]
)

export const getSelectedTask = R.path(['tasks', 'selectedTask'])
