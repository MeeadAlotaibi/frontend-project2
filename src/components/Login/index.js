//////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, FormGroup, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import phot from "../../images/registerBackground.jpeg";

import "./style.css";

const BASE_URL = "http://localhost:5000";

const Login = () => {
  let navigate = useNavigate();
  const [users, setusers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/user/alluser`);
    setusers(users.data);
  };

  return (
    //////////////////////////////////////////////////////////////////////////////////////////////
    <>
      {/* <img className="backImg" src={phot} alt="backImg" /> */}
      <div className="signUpInput">
        <h6 className="register">تسجيل</h6>
        <input
          type="text"
          placeholder=" email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder=" password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let found = users.find((ele) => {
              return ele.email == email && ele.password == password;
            });
            if (found) {
              //navigate first
              navigate(`/`);
              localStorage.setItem("userId", JSON.stringify(found._id));
              console.log("your in ");
              window.location.reload(false);
            } else {
              setMessage(`The email address or password is incorrect `); //link to sign up component
            }
          }}
        >
          سجّل الآن
        </button>
        <div>{message} </div>
      </div>
    </>
  );
};

export default Login;
