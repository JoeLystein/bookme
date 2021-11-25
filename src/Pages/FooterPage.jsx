import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="orange" className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/" style={{color: "black"}}>Home</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!" style={{color: "black"}}>Services</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/book" style={{color: "black"}}>Book Us</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/download" style={{color: "black"}}>Our Apps</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="/contactUs" style={{color: "black"}}>Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
          {/* style={{ lineHeight: "1.7rem", color: "balck" }} */}
            <p style={{color: "black", lineHeight: "1.7rem"}}>
              Biso Production: Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur.
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="yb-ic" href="https://www.youtube.com/playlist?list=PLMgLlAQzGCA_yyCAzLl7kKwKH7ypS70yo">
                <i className="fab fa-youtube fa-lg white-text mr-md-4"></i>
                 
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>

            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color: "black"}}>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.iyemenvileitipo.com" style={{color:"white"}}> JR Hi-Tech </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;