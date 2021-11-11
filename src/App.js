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
import Galery from './Pages/Galery'
import './App.css'
import Footer from './Pages/Footer';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/book">
            <Booking/>
          </Route>
          <Route exact path="/">
              <Home/>
              <Messages/>
          </Route>
          <Route exact path="/Galery">
            <Galery/>
          </Route>
          <Route exact path="/contactUs">
              <ContactUs/>
          </Route>
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
