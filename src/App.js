import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.jsx"; 
import Booking from "./Booking";
import Home from "./Pages/Home"; 
import Messages from './Components/messages';
import Footer from './Pages/FooterPage.jsx';
import ContactUs from './Pages/ContactUs';
import Pricing from './Pages/BisoPricing.jsx'; 
import AboutUs from './Pages/About/AboutUs'
import Photoshooting from "./Pages/Services/Photoshooting.jsx"; 
import OurApps from "./Components/OurApps"; 
function App(){
  return (
    <div>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
            <Messages/>
          </Route>

          <Route path="/book">
            <Booking/>
          </Route>

          <Route path="/aboutus">
            <AboutUs/>
          </Route>

          <Route path="/Pricing">
            <Pricing/>
          </Route>

          <Route path="/contactUs">
            <ContactUs/>
          </Route>

          <Route path="/photo">
            <Photoshooting/>
          </Route>

          <Route path="/download">
            <OurApps/>
          </Route>

        </Switch>
      </Router>

      <Footer/>
    </div>
 
  );
}

export default App;
