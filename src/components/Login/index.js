import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const BASE_URL = "http://localhost:5000" //"https://project2-tuwaiq.herokuapp.com";

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
    <div className="bigdiv">
      <div className="signUpInput">
        <h6 className="register">تسجيل</h6>
        <input
          className="inputt1"
          type="text"
          placeholder=" ايميل المستخدم"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="inputt1"
          type="password"
          placeholder=" كلمة المرور "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="userBtn1"
          onClick={() => {
            let found = users.find((ele) => {
              return ele.email == email && ele.password == password;
            });
            if (found) {
              //navigate first
              navigate(`/`);
              localStorage.setItem("userId", JSON.stringify(found));
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
    </div>
  );
};

export default Login;
