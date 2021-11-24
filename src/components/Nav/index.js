import { Link } from "react-router-dom";
import "./style.css";
import React from "react";
import logo from "./../../images/Vision.png";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="ulNav">


        <li className="lii">
          <Link className="linkk" to="/user">
            تسجيل
          </Link>
        </li>


        <li className="lii">
          <Link className="linkk" to="/urban">
            ثقافي
          </Link>
        </li>



        <li className="lii">
          <Link className="linkk" to="/tourism">
            سياحة
          </Link>
        </li>



        <li className="lii">
          <Link className="linkk" to="/cultures">
            حضاري
          </Link>
        </li>



        <li className="liiFirst">
          <Link id="firstli" className="linkk" to="/">
            الرئيسية
          </Link>
        </li>


        
      </ul>
      <div>
        <img className="logoImg" src={logo} alt="logoImg" />
      </div>
    </div>
  );
};

export default Nav;
