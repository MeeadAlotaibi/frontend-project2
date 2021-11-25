import { Link } from "react-router-dom";
import "./style.css";
import React from "react";
import logo from "./../../images/Vision.png";

const Nav = () => {
  return (
    <div className="containerNav">
      <ul className="ulNav">
        <li className="lii">
          <h4>
            <Link className="linkk" to="/user">
              تسجيل
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            <Link className="linkk" to="/urban">
              ثقافي
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            <Link className="linkk" to="/tourism">
              سياحة
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            <Link className="linkk" to="/cultures">
              حضاري
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
          <Link id="firstli" className="linkk" to="/">
            الرئيسية
          </Link>
          </h4>
        </li>
      </ul>
      <div>
        <img className="logoImg" src={logo} alt="logoImg" />
      </div>
    </div>
  );
};

export default Nav;
