// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5000";

// const User = () => {
//   const [users, setusers] = useState([]);
//   const [AddinputSignvalue, setAddinputSignvalue] = useState("");
//   const [AddinputLogvalue, setAddinputLogvalue] = useState("");
//   const [text, setText] = useState("Welcome");

//   useEffect(() => {
//     getAllUsers();
//   }, []);
//   const getAllUsers = async () => {
//     const users = await axios.get(`${BASE_URL}/user/alluser`);
//     setusers(users.data);
//   };

//   //////////////////////////////////////////////////////////////////
//   // تنشئ يوزر جديد

//   const createNew = () => {
//     //   console.log("create");
//     let obj = {
//       id: users.length + 1,
//       userName: AddinputSignvalue,
      
//     };
//     axios
//       .post(`${BASE_URL}/user/signup`, obj)
//       .then(() => console.log(" User Created "))
//       .catch((err) => {
//         console.error(err);
//       });
//     console.log(users);
//   };
// //////////////////// Log Out 

//   const logOut = () => {
//     localStorage.clear(); 
//     console.log("log out");
//   };

//   let userId = JSON.parse(localStorage.getItem("userId"));
//   console.log(userId);
//   return <div></div>;
// };

// export default User;
