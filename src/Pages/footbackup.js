import React from "react";
// import { Input } from "antd";
// import logo from "./Images/UC-Logo_Vector-01 2.jpg"
// import pic1 from "./Images/Nybc.png"
// import pic2 from "./Images/chapaa.png"
// import { Button, Tooltip } from "antd";
// import "./styles.css";
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-10 mx-auto">
              <div className="row dd">
                <div className="col-md-4 col-10 ">
                  <h3>HeadQuaters</h3>
                  <p>
                    3902 Block Drive Apt 149, Irving Tx 75038<br></br>
                    Info@bisoProduction.com P: (718) 224-3758 F: 8777999065
                  </p>
                  <p></p>
                </div>

                <div className="col-md-2 col-5 ">
                  <h3>Services</h3>
                  <p>
                    <i class="far fa-circle"></i>Wedding
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Photoshooting
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Musical Videos
                  </p>
                  <p>
                    <i class="far fa-circle"></i>LivesStream
                  </p>
                  {/* <p>
                    <i class="far fa-circle"></i>Specialized Care
                  </p> */}
                </div>
                <div className="col-md-2 col-5 ">
                  <h3>Company</h3>
                  <p>
                    <i class="far fa-circle"></i>About Us
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Locations
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Galery & Videos
                  </p>
                  <p>
                    <i class="far fa-circle"></i>News & Blogs
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Contact Us
                  </p>
                  <p>
                    <i class="far fa-circle"></i>Our APPS
                  </p>
                </div>

                <div className="col-md-4 col-10 ">
                  <h4>Sign up to receive the latest articles</h4>
                  {/* <div class="footer_img ">
                    <img src={pic2} alt="" />
                    <img src={pic1} alt="" />
                  </div> */}
                  <p className="footer_icon">
                    Follow Us<i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p style={{ fontSize: "10px" }}>
              Copyright 2020
              <span style={{ color: "black", fontWeight: "bold", paddingBottom: "20px"}}> JR HI-TECH </span>- All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;