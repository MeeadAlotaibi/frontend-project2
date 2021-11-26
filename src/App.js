import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Urban from "./components/Urban";
import Tourism from "./components/Tourism";
import Culture from "./components/Culture";
import Cultures from "./components/Cultures";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BookMark from "./components/BookMark";

// import Footer from "./components/Footer/index";

// function logout() {
//   localStorage.removeItem("userId");
//   window.location.reload(false);
// }
const App = () => {
  return (
    <>
      {/* {localStorage.getItem("userId") ? (
        <button
          onClick={() => {
            logout();
          }}
        > خروج
        </button>
      ) : (
        ""
      )} */}

      <Nav />

      <Routes>
        {/* <Route exact path="/Nav" element={<Nav />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/urban" element={<Urban />} />
        <Route exact path="/tourism" element={<Tourism />} />
        <Route exact path="/culture/:id" element={<Culture />} />
        <Route exact path="/cultures" element={<Cultures />} />
        <Route exact path="/user" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Favorite" element={<BookMark />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};
export default App;
