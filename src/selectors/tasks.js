import * as R from 'ramda'

export const getTasks = R.path(['tasks', 'tasks'])

export const getSelectedTask = R.path(['tasks', 'selectedTask'])
