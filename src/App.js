import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  link
} from "react-router-dom"; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./NavBar"; 
import Booking from "./Booking";
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Booking/>
    </div>
  );
}

export default App;
