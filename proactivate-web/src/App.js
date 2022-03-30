import { Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./client/Pages/Dashboard/Dashboard";
import Navbar from "./client/Components/Navbar.js";
import Timer from "./client/Pages/Timer/Timer";
import Schedule from "./client/Pages/Schedule/Schedule";
import Deadline from "./client/Pages/Deadline/Deadline";
import MyAccount from "./client/Pages/MyAccount/MyAccount";
import Landing from "./client/Pages/Landing/Landing";

import SignUp from "./client/Pages/SignUp/SignUp";
import Login from "./client/Pages/Login/Login";

function App() {
    return (
    <div>
      <div className = "navbar">
      <Navbar />
      </div>
      <Main />
    </div>
  );
}

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Timer" element={<Timer />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Deadline" element={<Deadline />} />
    </Routes>
  );
};

export default App;
