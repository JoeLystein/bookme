import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color='black' className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/" style={{color: "white"}}>Home</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/aboutus" style={{color: "white"}}>About Us</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/book" style={{color: "white"}}>Book Us</a>
            </h6>
          </MDBCol>
          {/* <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/download" style={{color: "white"}}>Our Apps</a>
            </h6>
          </MDBCol> */}
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/contactUs" style={{color: "white"}}>Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
          {/* style={{ lineHeight: "1.7rem", color: "balck" }} */}
          <p style={{color:'orange'}}>&copy; copyright Biso Productions</p>
            <p style={{color: "white", lineHeight: "1.7rem"}}>
              {/* <strong> */}
                Biso Productions is a friendly service company that accompanies you in your activities and your dream project.
                Biso Productions the knowledge that never lies
                Biso Productions is based on quality and satisfaction of its clients. 
                <p>Trust us and you will never be disappointed</p>
               
              {/* </strong> */}
            </p>
            <p style={{color:'red'}}>Have a Nice {new Date().toLocaleDateString('en-us',{weekday:'long'})} !</p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
            {/* eslint-disable-next-line */}
              <a className="fb-ic" href="https://www.facebook.com/pages/category/Product-Service/Biso-Productions-2084632831597676/" target="_blank">
                <i className="fab fa-facebook-f fa-lg white-text mr-4"/>
              </a>
              <a className="yb-ic" href="https://www.youtube.com/playlist?list=PLMgLlAQzGCA_yyCAzLl7kKwKH7ypS70yo" target="_blank">
                <i className="fab fa-youtube fa-lg white-text mr-4"/>
                 
              </a>
              {/* eslint-disable-next-line */}
              <a className="ins-ic" href="https://instagram.com/bisoproductions?utm_medium=copy_link" target="_blank">
                <i className="fab fa-instagram fa-lg white-text mr-4"/>
              </a>

            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <div className="footer-copyright text-center py-4">
        <MDBContainer fluid style={{color: "white"}}>
          &copy; {new Date().getFullYear()} Powered by 
          {/* eslint-disable-next-line */}
          <a href="https://www.iyemenvileitipo.com" target="_blank" style={{color:"red"}}> <strong>JR Hi-Tech</strong></a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;