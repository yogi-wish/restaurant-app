import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaCcStripe,
  FaMedium,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>GUSTA RESTAURANT</h4>
              <ul className="list-unstyled">
                <li>7417307432</li>
                <li>Lucknow,226028</li>
                <li>UP, India</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>About US</h4>
              <ul className="list-unstyled">
                <li>Our Food</li>
                <li>Invester Relation</li>
                <li>Customer Services</li>
                <li>Our Feedback</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Order and Pickup</h4>
              <ul className="list-unstyled"></ul>
              <li>Order on App</li>
              <li>Order on Web</li>
              <li>Delivery</li>
            </div>
            <div className="footer-col">
              <h4>Connect With Us</h4>
              <ul className="social-icons">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaMedium />
                </a>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row-2">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} GUSTA RESTAURANT | All right
              reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
