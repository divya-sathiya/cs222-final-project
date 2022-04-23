import { Routes, Route } from "react-router-dom";

import Dashboard from "./client/Pages/Dashboard/Dashboard";
import Navbar from "./client/Components/Navbar2.js";
import Timer from "./client/Pages/Timer/Timer";
import Schedule from "./client/Pages/Schedule/Schedule";
import MyAccount from "./client/Pages/MyAccount/MyAccount";
import Deadline from "./client/Pages/Deadline/Deadline";
import SignUp from "./client/Pages/SignUp/SignUp";
import Login from "./client/Pages/Login/Login";
import { Navigate, Switch,BrowserRouter } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "./App.css";
 <><script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>
  <script src="https://unpkg.com/bootstrap-table@1.19.1/dist/bootstrap-table.min.js"></script>
  <script src="App.css"></script>
  </> 




function App() {
  return (
    <div>
     
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      </Routes>
     <div>
      <Navbar />
      <Main />
      </div>
    </div>


  );
}

const Main = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Timer" element={<Timer />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Deadline" element={<Deadline />} />
      <Route path="/MyAccount" element={<MyAccount />} />
    </Routes>
  );
};

export default App;
