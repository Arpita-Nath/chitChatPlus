import { TextField } from '@mui/material'
import React from 'react'

const Inputbox = ({placeholder}) => {
  return (
    <TextField fullWidth id="standard-basic" label={placeholder} variant="standard" />
  )
}

export default Inputbox