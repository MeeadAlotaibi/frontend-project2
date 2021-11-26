import React, { useState, useEffect } from "react";
import profileImage from "../../images/profileImage.png";
import "./style.css";

const UserProfile = () => {
  const [logged, setLogged] = useState([]);
  useEffect(() => {
    const userLogged = localStorage.getItem("userId");
    console.log(userLogged);
    setLogged(JSON.parse(userLogged));
  }, []);

console.log(logged);

  return (
    <>
      {logged ? (
        <div className="oneitemHomeM">
          <h1>Profile : </h1>
          <div>
            <img
              className="Oneculture"
              src={profileImage}
              alt="profile Image"
            />
            <br />
            <h3 className="cultureP"> {logged.username}</h3>
          </div>
          <h6 className="hhh">{logged.password}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default UserProfile;
