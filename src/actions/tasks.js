import { createAction } from 'redux-actions'

// Action types

export const CREATE_TASK = 'tasks/CREATE_TASK'

export const SELECT_TASK = 'tasks/SELECT_TASK'

export const EDIT_TASK = 'tasks/EDIT_TASK'

export const DELETE_TASK = 'tasks/DELETE_TASK'

// Action Creators

export const createTask = createAction(CREATE_TASK)

export const selectTask = createAction(SELECT_TASK)

export const editTask = createAction(EDIT_TASK)

export const deleteTask = createAction(DELETE_TASK)
