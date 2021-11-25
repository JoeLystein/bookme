import React from 'react'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Image from 'react-bootstrap/Image';
// import Profile from '../../Assets/slides/DSC04827.jpg';
import Profile from '../../Assets/slides/image002.jpg';
import Button from 'react-bootstrap/Button'; 
import '../About/AboutUs.css'


const AboutUs = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 pb-5 align-items-center"><strong>About Biso Production</strong></h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={4} className="colimage">
                            <Row className="justify-content-center mb-2 mr-2">
                                <img className="profile justify-content-end" alt="profile" width="100%" height="100%" src={Profile} thumbnail fluid/>
                            </Row>
                        </Col>
                        <Col xs={12} md={8}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi There! I am &nbsp;Reddy Eyenga
                                <br/> <strong>A CEO of Biso Production and Rhema Gospel TV</strong><br/>
                               
                                    Reddy Eyenga Remajeur is a Director , Videographer, Coach / Leader, Producer , 
                                    Camera Operators, CEO of Biso Productions and founder of Rhema Gospel. With over 5 years of 
                                    experience in media / video industry , he has choose to express his passion by distributing wedding , 
                                    commercial video, music videos and more. Married and father of a beautiful little princess. 
                                <br/><br/>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">Contact Me</Button>

                                        </a>
                                    </div>
                                    <div>
                                        <a href="/book">
                                            <Button className="m-2" variant="outline-success">Book Me</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/book">
                                            <Button className="m-2" variant="outline-danger">My Services</Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutUs