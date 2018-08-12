import * as R from 'ramda'

export const getTitle = R.path(['modal', 'title'])

export const getDescription = R.path(['modal', 'description'])

export const getIsOpen = R.path(['modal', 'isOpen'])
