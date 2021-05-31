import React from "react";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="mainFooter">
          <img src="/awlogo.svg" alt="logo" />
          <div className="footerTop">
            <a href="tel:+6122270783">
              {" "}
              <BsPhone /> 612-227-0783
            </a>
            <a href="mailto:a.reese@me.com">
              {" "}
              <BsPhone /> Email Us
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <div>&copy; AW Painting</div>

          <div className="socialMedia">
            <a href="www.instagram.com">
              <img src="/instagramlogo.svg" alt="twitter" />
            </a>
            <a href="www.facebook.com">
              <img src="/facebooklogo.svg" alt="twitter" />
            </a>
            <a href="www.twitter.com">
              <img src="/twitterlogo.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
