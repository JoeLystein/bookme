import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropDown'; 
import Nav from 'react-bootstrap/Nav';
// import logo from './Assets/images/logo_transparent.png'
// import logo from './Assets/images/favicon.png'
import './NavBar.css';


function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
            {/* <Navbar collapseOnSelect> */}
            <Container>
            {/* <Navbar.Brand bsPrefix="navbar-brand" href="home/"><img src={logo} className="Nav-logo" alt="logo"/></Navbar.Brand> */}
            <Navbar.Brand bsPrefix="navbar-brand" href="/">Biso Production</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features" style={{color: "black", fontWeight:"bold"}}>About Us{' '}<i className="fas fa-address-card"></i></Nav.Link>
                <Nav.Link href="Galery" style={{color: "black", fontWeight:"bold"}}>Galery Photo</Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown" style={{color: "white", fontWeight: "bold"}}>
                    <NavDropdown.Item href="videoGraphy/" style={{color: "black"}}>LiveStream Services</NavDropdown.Item>
                    <NavDropdown.Item href="photography/" style={{color: "black"}}>Network Services</NavDropdown.Item>
                    <NavDropdown.Item href="design" style={{color: "black"}}>Design</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">E-commerce</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/book" style={{color: "black", fontWeight:"bold"}}>Book Us <i className="fas fa-calendar"></i></Nav.Link>
                <Nav.Link eventKey={2} href="/contactUs" style={{color: "black", fontWeight:"bold"}}>
                    Contact us <i className = "fas fa-id-badge"></i>
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
