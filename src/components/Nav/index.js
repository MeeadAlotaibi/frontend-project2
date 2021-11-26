import { Link } from "react-router-dom";
import "./style.css";
import React from "react";
import logo from "./../../images/Vision.png";

function logout() {
  localStorage.removeItem("userId");
  window.location.reload(false);
}


/////// قدعنه
function hide() {
  // localStorage.removeItem("userId");
  window.location.reload(true);
}


const Nav = () => {
  return (
    <div className="containerNav">
      <ul className="ulNav">

        <li className="lii">
          <h4>
          {localStorage.getItem("userId") ? ( <Link className="linkk"  to="/" onClick={() => { logout();}}>خروج</Link> ) : ("")}
          </h4>
        </li>


        <li className="lii">
          <h4>
            <Link className="linkk" to="/Favorite">
              قراءة لاحقاً
            </Link>
          </h4>
        </li>

        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? ("")  : (<Link className="linkk" to="/user" onChange={() => { hide(); }}>تسجيل</Link> )}
          </h4>
        </li>

      

        <li className="lii">
          <h4>
            <Link className="linkk" to="/urban">
              حضاري
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
              ثقافي
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
