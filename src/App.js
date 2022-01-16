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
import videoshooting from "./Pages/Services/videoshooting.jsx";
import NewNavBar from "./common/newNavBar.jsx";
function App(){
  return (
    <div>
      <NavBar/>
      {/* <NewNavBar/>  */}
      <Home/>
      <Messages/>
      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
            <AboutUs/>
            <hr/>
          {/* </Fade>   */}
        </Container> 
      </div>

      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
            <Pricing/>
          {/* </Fade>   */}
        </Container> 
      </div>

      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
          <Photoshooting/>
          {/* </Fade>   */}
        </Container> 
      </div>
      
      {/* <EventsB/> */}

      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
          <Fashion/>
          {/* </Fade>   */}
        </Container> 
      </div>
    
      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
          <videoshooting/>
          {/* </Fade>   */}
        </Container> 
      </div>
      
      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
          <Booking/>
          {/* </Fade>   */}
        </Container> 
      </div>
      
      <div>
        <Container className="container-box rounded">
          {/* <Fade duration={500}> */}
          <ContactUs/>
          {/* </Fade>   */}
        </Container> 
      </div>
      {/* <Router>
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

          <Route exact path="/">
            <Home/>
            <Messages/>
          </Route>

        </Switch>
      </Router> */}

      <Footer/>
    </div>
 
  );
}

export default App;
