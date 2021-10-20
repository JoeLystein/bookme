import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropDown'; 
import Nav from 'react-bootstrap/Nav';
import logo from './Assets/images/logo_transparent.png'
// import logo from './Assets/images/favicon.png'
import './NavBar.css';


function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
            <Navbar.Brand bsPrefix="navbar-brand" href="home/"><img src={logo} className="Nav-logo" alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features" style={{color: "white"}}>About Us</Nav.Link>
                <Nav.Link href="#pricing" style={{color: "white"}}>Pricing</Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown" style={{color: "white"}}>
                    <NavDropdown.Item href="videoGraphy/" style={{color: "black"}}>LiveStream Services</NavDropdown.Item>
                    <NavDropdown.Item href="photography/" style={{color: "black"}}>Network Services</NavDropdown.Item>
                    <NavDropdown.Item href="design" style={{color: "black"}}>Design</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">E-commerce</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/book" style={{color: "white"}}>Book Us</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" style={{color: "white"}}>
                    Contact us
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>

            {/* <div className="rest">
                ok
            </div> */}
        </div>
    )
}

export default NavBar
