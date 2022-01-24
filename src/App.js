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
import Videoshooting from "./Pages/Services/videoshooting.jsx";
import OurApps from "./Components/OurApps"; 
import Fashion from "./common/Fashion.jsx";
// import DataAPI from "./GettingData/DataAPI.js";
import EventsB from "./Events/MainEventsB.js";
import Container from 'react-bootstrap/Container';
import NewNavBar from "./common/newNavBar.jsx";
import PricingHome from "./Pages/pricingHome.jsx";
import WeddingPackage from "./Pages/WeddingPackage.jsx";
import CommercialPackage from "./Pages/CommercialPackage.jsx";
import MusicPackage from "./Pages/MusicPackage.jsx";
import PhotoPricing from "./Pages/PhotoPricing.jsx";
function App(){
  return (
    <div>
      <NavBar/>
      {/* <Home/> */}
      {/* <Messages/> */}
      {/* <PricingHome/> */}
      {/* <Booking/> */}
      {/* <ContactUs/> */}


      {/* <NewNavBar/>  */}
      {/* <Home/> */}
      {/* <Messages/> */}
      {/* <PricingHome/> */}
      
      {/* <div>
        <Container className="container-box rounded">
            <AboutUs/>
            <hr/>
        </Container> 
      </div> */}

      

      <Router>
        <Switch>
          <Route path='/mainevents' component={EventsB}/>
          <Route path="/fashion" component={Fashion}/>
          <Route path="/video" component={Videoshooting}/>

          <Route path="/book">
            <Booking/>
          </Route>

          <Route path="/aboutus">
            <AboutUs/>
          </Route>

          <Route path="/photopricing">
            <PhotoPricing/>
          </Route>
          <Route path="/Pricing">
            <PricingHome/>
          </Route>

          <Route path="/videopricing">
            <Pricing/>
          </Route>
          
          <Route path="/weddingpackage">
            <WeddingPackage/>
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

          <Route path="/commercialpackage">
            <CommercialPackage/>
          </Route>

          <Route path="/musicpackage">
            <MusicPackage/>
          </Route>
          <Route exact path="/Home">
            <Home/>
            <Messages/>
          </Route>

        </Switch>
      </Router> 

      <Footer/>
      
    </div>
 
  );
}

export default App;
