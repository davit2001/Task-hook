import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom'
import Projects from './components/Projects/Projects'
 import Tasks from './components/Tasks/Tasks'
 
function App() {
  return (
    <>
    <Switch>
       <Route path='/' exact component={Projects}/>
       <Route path='/:id' exact  component={Tasks}/>
     </Switch>
      <Redirect from='*' to = "/" />
     </>
  );
}

export default App;