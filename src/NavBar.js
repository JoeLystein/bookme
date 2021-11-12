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
            <Container>
            {/* <Navbar.Brand bsPrefix="navbar-brand" href="/"><img src={logo} className="Nav-logo" alt="logo"/></Navbar.Brand> */}
            <Navbar.Brand bsPrefix="navbar-brand" href="/">Biso Production</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/aboutus" style={{color: "black", fontWeight:"bold"}}>About Us{' '}<i className="fas fa-address-card"></i></Nav.Link>
                <Nav.Link href="/Pricing" style={{color: "black", fontWeight:"bold"}}>Pricing <i className="fas fa-dollar-sign"></i></Nav.Link>
                <NavDropdown title="Galeries" id="collasible-nav-dropdown" style={{color: "white", fontWeight:"bold"}}>
                    <NavDropdown.Item href="/photogalery" style={{color:"black"}}>Photo Galery</NavDropdown.Item>
                    <NavDropdown.Item href="/weddinggalery" style={{color:"black"}}>Wedding Galery</NavDropdown.Item>
                    <NavDropdown.Item href="/videogalery" style={{color:"black"}}>Videos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="collasible-nav-dropdown" style={{color: "white", fontWeight: "bold"}}>
                    <NavDropdown.Item href="/videoGraphy" style={{color: "black"}}>Studio Photoshooting</NavDropdown.Item>
                    <NavDropdown.Item href="photography/" style={{color: "black"}}>Wedding Videos</NavDropdown.Item>
                    <NavDropdown.Item href="design" style={{color: "black"}}>Design</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Studio Rental</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/book" style={{color: "black", fontWeight:"bold"}}>Book Us <i className="fas fa-calendar"></i></Nav.Link>
                <Nav.Link href="/download" style={{color: "black", fontWeight:"bold"}}>Our Apps <i className="fas fa-download"></i></Nav.Link>
                <Nav.Link eventKey={2} href="/contactUs" style={{color: "black", fontWeight:"bold"}}>
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
