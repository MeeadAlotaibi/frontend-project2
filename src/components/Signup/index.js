import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";


const BASE_URL = "http://localhost:5000";

const SignUp = () => {
  const [users, setusers] = useState([]);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  ////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const users = await axios.get(`${BASE_URL}/user/alluser`);
    setusers(users.data);
  };
  ////////////////////////////////////////////////////////////////////////////////

  const createNew = () => {
    let obj = {
      username,
      email,
      password,
    };
    axios.post(`${BASE_URL}/user/signup`, obj).then(function (res) {
      //console.log(response.data._id);
      setUser(res.data);
      localStorage.setItem("userId", JSON.stringify(res.data._id));
      window.location.reload(false);
    });
  };

  return (
    <>
        {/* <div className="containerForm"> */}
          {/* <form className="formm"> */}
            <div className="signUpInput">
              <h6 className="register">تسجيل</h6>
              <input
                className="inputt1"
                type="text"
                placeholder=" username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                className="inputt1"
                type="text"
                placeholder=" email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="inputt1"
                type="password"
                placeholder=" password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className="userBtn"
                onClick={() => {
                  let found = users.find((ele) => {
                    return ele.email == email;
                  });
                  if (found) {
                    console.log(found);
                    <p className="accountText">
                      {setMessage(
                        "This email already have an account! log in or change your email"
                      )}
                    </p>;
                  } else {
                    createNew();
                  }
                }}
              >
                سجل الآن
              </button>
              <div>
                هل لديك حساب ؟ <Link to="/login">تسجيل دخول </Link>
              </div>
              {message}
            </div>
          {/* </form> */}
        {/* </div> */}
    </>
  );
};

export default SignUp;
///////////////////////////////////////////////////////////////////////////
