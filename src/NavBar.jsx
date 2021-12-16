import React ,{useState, useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropDown'; 
import Nav from 'react-bootstrap/Nav';
// import AppContext from '../../context/appContext'
// import logo from 
// import logo from './Assets/images/logo_transparent.png'
import logo from './Assets/slides/logo.jpg';
// import logo from './Assets/images/favicon.png'
import './NavBar.css';

const NavBar = () =>{
    // const appContext = useContext(appContext); 
    const [navOpen, toggleOpen] = useState(false)
    const closeNav = () => {
        toggleOpen(false)
    }

    // const { activePath } = appContext
    const [active, setActive] = useState("/home"); 
    return (
        <div>
             {/* fixed='top' */}
            <Navbar 
               
                collapseOnSelect expand="lg" 
                className="animate-navbar nav-theme justify-content-between"
                >
                
            <Container>
            {/* <Navbar.Brand bsPrefix="navbar-brand" href="/"><img src={logo} className="Nav-logo" alt="logo"/></Navbar.Brand> */}
            <Navbar.Brand eventKey="default" bsPrefix="navbar-brand" href="/" style={{color:"Orange"}}>
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"
                    activeKey={active}
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Link active className="nav-links" href="/aboutus" style={{ color:"black", fontWeight:"bold"}}>About Us{' '}<i className="fas fa-address-card"></i></Nav.Link>
                    <Nav.Link className="nav-links" href="/Pricing" style={{ color:"black", fontWeight:"bold"}}>Pricing <i className="fas fa-dollar-sign"></i></Nav.Link>
                    <NavDropdown className="nav-links" style={{ color:"black", fontWeight: "bold"}} title="Services" id="collasible-nav-dropdown" >
                        <NavDropdown.Item href="/photo" style={{color: "black"}}>Photoshooting</NavDropdown.Item>
                        <NavDropdown.Item href="/video" style={{color: "black"}}>Videoshooting</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/design" style={{color: "black"}}>Design</NavDropdown.Item> */}
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="/studiorental">Studio Rental</NavDropdown.Item> */}
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link className="nav-links" href="/book" style={{ color:"black", fontWeight:"bold"}}>Book Us <i className="fas fa-calendar"></i></Nav.Link>
                    {/* <Nav.Link className="nav-links" href="/download" style={{ color:"black", fontWeight:"bold"}}>Our Apps <i className="fas fa-download"></i></Nav.Link> */}
                    <Nav.Link className="nav-links" eventKey={2} href="/contactUs" style={{ color:"black", fontWeight:"bold"}}>
                        Contact us <i className = "fas fa-id-badge"></i>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
