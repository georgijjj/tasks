import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({ value, changeSearchValue }) => (
  <TextField
    value={value}
    onChange={({ target: { value } }) => changeSearchValue(value)}
  />
)
