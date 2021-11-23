import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Urban from "./components/Urban";
import Tourism from "./components/Tourism";
import Culture from "./components/Culture";
import Cultures from "./components/Cultures";
import User from "./components/User";
// import Footer from "./components/Footer/index";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/Nav" element={<Nav />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/urban" element={<Urban />} />
        <Route exact path="/tourism" element={<Tourism />} />
        <Route exact path="/culture/:id" element={<Culture />} />
        <Route exact path="/cultures" element={<Cultures />} />
    
        <Route exact path="/user" element={<User />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};
export default App;
