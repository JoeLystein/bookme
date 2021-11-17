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
import Footer from './Pages/FooterPage.jsx';
import ContactUs from './Pages/ContactUs';
import Pricing from './Pages/Pricing'; 
import AboutUs from './Pages/About/AboutUs'
import { Container } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
function App(){
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
            <Messages/>
          </Route>

          <Route exact path="/book">
            <Booking/>
          </Route>

          <Route exact path="/Photogalery">
            <Galery/>
          </Route>

          <Route exact path="/aboutus">
            <AboutUs/>
          </Route>

          <Route exact path="/Pricing">
            <Pricing/>
          </Route>

          <Route exact path="/contactUs">
            <ContactUs/>
          </Route>

        </Switch>
      </Router>
      <Footer/>
    </div>
 
  );
}

export default App;
