import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/About' component={About} />
          <Route exact path='/' component={Home} />
          <Route exact path='/Users' component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
