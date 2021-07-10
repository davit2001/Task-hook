import React from 'react'
import { TextField } from '@material-ui/core'

export default function Field({
    value,
    label,
    multiline,
    margin = "normal",
    maxRows = "1",
    error,
    helperText,
    handleChange
}) {
    let props = {}
    if (multiline) {
        props.multiline = multiline   
    } 
    return (
        <TextField 
            onChange={handleChange}
            value = {value}
            label = {label}
            margin = {margin}
            error  = {error}
            helperText = {helperText}
            maxRows = {maxRows}
            required
            fullWidth
            variant = "outlined"
            color = "primary"
            {...props}
        />
    )
}
