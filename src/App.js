import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
}  from 'react-router-dom'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
        <Route path = "/landingPage">
          <LandingPage/>
        </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
