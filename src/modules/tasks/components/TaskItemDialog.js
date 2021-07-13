import React, {useMemo} from 'react'
import {Dialog, DialogTitle, DialogContent, Typography} from '@material-ui/core'
import {fetchToggleTaskDialog} from '../UI/tasksUI'
import {useSelector} from 'react-redux'
import {taskSelector} from '../reducer'

export default function TaskItemDialog({tasks}) {
    const isOpenTaskDialog = useSelector(state => state.tasksUI.isOpenTaskDialog)
    const taskId = useSelector(state => state.tasksUI.taskId)
    const getTask = useSelector(taskSelector(taskId))
    const task = useMemo(() => tasks.find((task) => task.id === taskId), [taskId]) || getTask
    return (
        <Dialog open={isOpenTaskDialog}
            onClose={
                () => fetchToggleTaskDialog(false)
            }
            aria-labelledby="form-dialog-title">
            <DialogTitle id="customized-dialog-title"
                onClose={
                    () => fetchToggleTaskDialog(false)
            }>
                Task Details
            </DialogTitle>
            <DialogContent>
                {/* <Typography> {
                    task.name
                } </Typography>
                <Typography> {
                    task.description
                } </Typography>
                <Typography> {
                    task.assignee
                } </Typography>
                <Typography> {
                    task.status
                } </Typography> */}
            </DialogContent>


        </Dialog>
    )
}
