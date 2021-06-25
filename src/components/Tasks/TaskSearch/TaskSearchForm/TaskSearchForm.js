import React, { useCallback, useState } from 'react'
import {TextField, Button} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { fetchTaskSearch } from '../../../../action/tasks';
import { useStyles } from './styles';

export default function TaskSearchForm() {
  
    const dispatch = useDispatch()

    const classes = useStyles();
    const [search, setSearch] = useState(null)
    const [isError, setIsError] = useState(false)
   
    const handleSubmit = useCallback((e) => {
          e.preventDefault()
          if (search) {
             dispatch(fetchTaskSearch(search))
            setIsError(false)
          } else {
            setIsError(true)
          }
    }, [search])

    return (
        <>
            <form  noValidate autoComplete="off" onSubmit = {handleSubmit}>
                <TextField 
                    onChange = {(e) =>setSearch(e.target.value)}
                    label="Search tasks"
                    variant="outlined" 
                    error = {isError}
                    helperText = {isError && 'Search field must be required'}
                />
                <Button 
                    type = "submit"
                    variant = "contained"
                    color = "primary"
                    className = {classes.button}
                >
                    Submit
                </Button>
            </form>
        </>
    )
}
