import { createAction } from 'redux-actions'

export const CHANGE_SEARCH_VALUE = 'tasks/search/CHANGE_SEARCH_VALUE'

export const RESET = 'tasks/search/RESET'

export const changeSearchValue = createAction(CHANGE_SEARCH_VALUE)

export const reset = createAction(RESET)
