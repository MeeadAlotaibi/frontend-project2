import React, { useState, useEffect } from "react";
import profileImage from "../../images/profileImage.png";
import "./style.css";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userLoged = localStorage.getItem("userId");
    console.log(user);
    setUser(JSON.parse(userLoged));
  }, []);

console.log(user);

  return (
    <>
      {user ? (
        <div className="oneitemHomeM">
          <h1>Profile : </h1>
          <div>
            <img
              className="Oneculture"
              src={profileImage}
              alt="profile Image"
            />
            <br />
            <h3 className="cultureP"> {user.username}</h3>
          </div>
          <h6 className="hhh">{user.password}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default UserProfile;
