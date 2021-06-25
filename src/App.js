import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Projects from './components/Projects/Projects'
 import Tasks from './components/Tasks/Tasks'
 
function App() {
  return (
    <>
    <Router basename = "/projects">
          <Route exact path = "/" component={Projects} />
          <Route exact path = "/:id" component = {Tasks} />
     </Router>
     </>
  );
}

export default App;