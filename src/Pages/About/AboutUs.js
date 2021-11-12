import React from 'react'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Image from 'react-bootstrap/Image';
import Profile from '../../Assets/slides/DSC04827.jpg';
import Button from 'react-bootstrap/Button'; 
import '../About/AboutUs.css'


const AboutUs = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 pb-5 align-items-center">About Biso Production</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={4} className="colimage">
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi There! I am &nbsp;Reddy Eyenga
                                <br/> A CEO of Biso Production and Rhema Gospel TV<br/>
                                How to Write Your "About Us" Page
                                Writing your "About Us" page on your website can actually be really fun and enjoyable. The page <br/>
                                is a space for you to get creative, personal, and basically initiate a personal introduction with your <br/>
                                customers. It's where you can bring your brand to life in a social, expressive way and really put your best <br/>
                                foot forward to the public. Here are 6 points to remember when creating your "About Us" page so that you'll <br/>
                                make the most positive impact possible and win over your customers' hearts and their business.Be factual.The<br/>
                                "About Us" page is a way to earn trust and there's no quicker way to lose that trust than to be caught lying to <br/>
                                the public.Make sure that any claims you make, the information you divulge or the things you say in your "About Us" 
                                page are actually true.<br/><br/>
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
