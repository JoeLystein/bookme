import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  // link
} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.jsx"; 
import Booking from "./Booking";
import Home from "./Pages/Home"; 
import Messages from './Components/messages';
import Galery from './Pages/Galery'
import './App.css'
import Footer from './Pages/FooterPage.jsx';
import ContactUs from './Pages/ContactUs';
// import Pricing from './Pages/Pricing'; 
import Pricing from './Pages/BisoPricing.jsx'; 
import AboutUs from './Pages/About/AboutUs'
import { Container } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import Photoshooting from "./Pages/Services/Photoshooting.jsx"; 
// import Prix from "./Components/Prix";
import OurApps from "./Components/OurApps"; 
function App(){
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/download">
              <OurApps/>
          </Route>
        </Switch>
      </Router> */}

      <NavBar/>
      {/* <Home/>
      <AboutUs/>
      <Pricing/>
      <Photoshooting/>
      <video/>
      <Booking/>
      <OurApps/>
      <ContactUs/> */}
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
            <Messages/>
          </Route>

          <Route exact path="/book">
            <Booking/>
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

          <Route exact path="/photo">
            <Photoshooting/>
          </Route>

          <Route exact path="/download">
            <OurApps/>
          </Route>

        </Switch>
      </Router>

      <Footer/>
    </div>
 
  );
}

export default App;
