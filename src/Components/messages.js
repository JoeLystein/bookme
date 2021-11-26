import React from 'react';
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -100px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    color: black;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 40px;
    }
    .sub {
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: bold;
      color: white;
    }
  }
`;

const messages = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hello, We are
          <br />
          <span>
            <strong>Biso Production</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["PhotoGraphy", "Videography", "Commercial AD", "Music Videos", "Wedding"],
              autoStart: true,
              loop: true,
              delay: 150
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default messages;