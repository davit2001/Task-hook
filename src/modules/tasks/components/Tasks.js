import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Grid, Typography, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import {useParams} from 'react-router-dom'
import TasksProjectInfo from './TasksProjectInfo';
import TaskFormDialog from '../container/FormDialog'
import TaskList from './TaskList'
import TaskDialog from '../container/TaskDialog'
import TaskSearch from './TaskSearch/TaskSearch'
import TaskNavigationList from './TaskNavigation/TaskNavigationList/TaskNavigationList'
import {useStyles} from '../styles'
import {fetchTaskSearch} from '../actionCreators';
import {fetchToggleTaskForm} from '../UI/tasksUI';



export const TaskContext = React.createContext('')

export default function Tasks() {
    const classes = useStyles()
    const params = useParams()
    let projectId = params.id;

    useEffect(() => {
        dispatch(fetchTaskSearch(null))
    }, [projectId])


    const dispatch = useDispatch()

    return (
        <>
            <TasksProjectInfo projectId={projectId}/>
            <Grid container direction="row" alignItems="stretch" wrap="nowrap">
                <Grid item
                    className={
                        classes.item
                }>
                    <TaskNavigationList projectId={projectId}/>
                </Grid>
                
                    <Grid item
                        className={
                            classes.item
                    }>
                        <Typography variant="h4" gutterBottom>
                            Task Details
                        </Typography>
                        <TaskList projectId={projectId}/>
                    </Grid>

                    <Grid item
                        className={
                            classes.item
                    }>
                        <TaskSearch/>
                    </Grid>


                <TaskDialog/>
                <TaskFormDialog projectId={projectId}/>
                <Fab onClick= {() => dispatch(fetchToggleTaskForm(true))}
                    className={
                        classes.IconButton
                    }
                    size="medium"
                    color="primary"
                    aria-label="add">
                    <AddIcon/>
                </Fab>
            </Grid>
        </>
    )
}
