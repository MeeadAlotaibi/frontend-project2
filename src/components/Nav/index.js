import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./../../images/Vision.png";
import "./style.css";



const Nav = () => {
  let navigate = useNavigate();

  function logout() {
    navigate(`/`);
    localStorage.removeItem("userId");
    window.location.reload(false);
  }

  function hide() {
    window.location.reload(false); /// reload(true)
  }
  return (
    <div className="containerNav">
      <ul className="ulNav">
        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                خروج
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>

        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/bookMark"
                onChange={() => {
                  hide();
                }}
              >
                قراءة لاحقاً
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>
        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/profile"
                onChange={() => {
                  hide();
                }}
              >
                {" "}
                الحساب{" "}
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>

        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              ""
            ) : (
              <Link
                className="linkk"
                to="/user"
                onChange={() => {
                  hide();
                }}
              >
                تسجيل
              </Link>
            )}
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
