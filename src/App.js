import './App.css';
import {Container, Grid, makeStyles } from '@material-ui/core'
import TaskForm from './components/form/TaskForm'
import TaskList from './components/Tasks/TaskList'
const useStyles = makeStyles((theme) =>{
  return {
    container: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginTop: theme.spacing(5),
    justifyContent: 'space-between'
   }
}
})
function App() {
  const classes = useStyles()
  return (
    <Container>
        <div className = {classes.container}>
          <Grid item >
             <TaskList />
          </Grid>
          <Grid item >
             <TaskForm />
          </Grid>
        </div> 
    </Container>
  );
}

export default App;
