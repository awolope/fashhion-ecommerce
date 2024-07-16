import React from "react";
import "./minifooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function MiniFooter() {
  return (
    <div className="customdiv">
      <div className="custom m">
        <p>
          <strong>Customer Service</strong>
        </p>
        <a href="/">General Terms of Use</a>
        <br />
        <a href="/"> Payment</a>
        <br />
        <a href="/"> Refund Policy</a>
      </div>

      <div className="custom ">
        <p>
          <strong>Pages</strong>
        </p>
        <a href="/">Blogs</a>
        <br />
        <a href="/"> Support</a>
        <br />
        <a href="/"> faQ</a>
      </div>
      <div className="customer ">
        <p>
          <strong>Follow Us</strong>
        </p>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} color="red" />
        </a>

        <a href="/">
          <FontAwesomeIcon icon={faTwitter} color="red" />
        </a>

        <a href="/">
          <FontAwesomeIcon icon={faFacebook} color="red" />
        </a>
      </div>
    </div>
  );
}
