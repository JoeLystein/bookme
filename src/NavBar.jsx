import React  from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropDown'; 
import Nav from 'react-bootstrap/Nav';
// import logo from './Assets/slides/logo.jpg';
// import logo from './Assets/slides/biso2022.JPG'
import logo from './Assets/slides/bisologo.jpg'
// import {NavLink} from 'react-router-dom';

import './NavBar.css';
const NavBar = () =>{
    return (
        <div>
            <Navbar 
                collapseOnSelect expand="md" 
                className="animate-navbar nav-theme Justify-content-between"
                variant = "tabs"
                // fixed="top"
            >
                
            <Container>
            {/* <Navbar.Brand bsPrefix="navbar-brand" href="/"><img src={logo} className="Nav-logo" alt="logo"/></Navbar.Brand> */}
            <Navbar.Brand bsPrefix="navbar-brand" href="/home" style={{color:"Orange"}}>
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" 
                >
                    <Nav.Link  aria-current="page" href="aboutus" style={{ color:"black", fontWeight:"bold"}}>About us{' '}</Nav.Link>
                    <Nav.Link className="nav-links" href="Pricing" style={{ color:"black", fontWeight:"bold"}}>Pricing</Nav.Link>
                    <NavDropdown className="nav-links" style={{ color:"black", fontWeight: "bold"}} title="Services" id="collasible-nav-dropdown" >
                        <NavDropdown.Item href="photo" style={{color: "black"}}>Photoshooting</NavDropdown.Item>
                        <NavDropdown.Item href="video" style={{color: "black"}}>Videoshooting</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="nav-links" href="mainevents" style={{ color:"black", fontWeight:"bold"}}>News</Nav.Link>
                </Nav>
                    <Nav>
                    <Nav.Link className="nav-links" href="book" style={{ color:"black", fontWeight:"bold"}}>Book us </Nav.Link>
                    {/* <Nav.Link className="nav-links" href="/download" style={{ color:"black", fontWeight:"bold"}}>Our Apps <i className="fas fa-download"></i></Nav.Link> */}
                    <Nav.Link className="nav-links" eventKey={2} href="contactUs" style={{ color:"black", fontWeight:"bold"}}>
                        Contact us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
