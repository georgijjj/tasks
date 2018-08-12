import { createAction } from 'redux-actions'

export const OPEN_MODAL = 'tasks/modal/OPEN_MODAL'

export const CLOSE_MODAL = 'tasks/modal/CLOSE_MODAL'

export const CHANGE_TITLE = 'tasks/modal/CHANGE_TITLE'

export const CHANGE_DESCRIPTION = 'tasks/modal/CHANGE_DESCRIPTION'

export const SET_INITIAL_VALUES = 'tasks/modal/SET_INITIAL_VALUES'

export const openModal = createAction(OPEN_MODAL)

export const closeModal = createAction(CLOSE_MODAL)

export const changeTitle = createAction(CHANGE_TITLE)

export const changeDescription = createAction(CHANGE_DESCRIPTION)

export const setInitialValues = createAction(SET_INITIAL_VALUES)
