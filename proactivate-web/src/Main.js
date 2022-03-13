import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import SignUp from "../Pages/Signup";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={Home}></Route>
      <Route path="/signup" element={SignUp}></Route>
    </Routes>
  );
};

export default Main;
