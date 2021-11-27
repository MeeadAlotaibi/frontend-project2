import "./style.css";
import React from "react";
import logo from "./../../images/Vision.png";
import { ImTwitter, ImInstagram, ImFacebook2, ImYoutube } from "react-icons/im";
const Nav = () => {
  return (
    <div className="footer">
      <ul>
        <li id="LiFooter">
          <a href="https://twitter.com/saudivision2030">
            <ImTwitter className="icon" />
          </a>
        </li>

        <li id="LiFooter">
          <a href="https://www.instagram.com/saudivision2030/">
            <ImInstagram className="icon" />
          </a>
        </li>

        <li id="LiFooter">
          <a href="https://www.youtube.com/channel/UC3pvQeDObhT0nGC58txGnzg">
            <ImYoutube className="icon" />
          </a>
        </li>

        <li id="LiFooter">
          <a href="https://www.facebook.com/Saudi2030/">
            <ImFacebook2 className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
