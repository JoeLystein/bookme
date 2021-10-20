import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  // link
} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar"; 
import Booking from "./Booking";
import Home from "./Pages/Home"; 
import Messages from './Components/messages';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/book">
            <Booking/>
          </Route>
          <Route exact path="/home">
              <Home/>
              <Messages/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
