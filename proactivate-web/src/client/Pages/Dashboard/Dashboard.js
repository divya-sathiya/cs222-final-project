import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Timer from "../Timer/Timer";
import Deadline from "../Deadline/Deadline";
import Schedule from "../Schedule/Schedule";

const Dashboard = () => {
    <Router>
    <div>
      <h>Im in dashboard</h>
        <ul>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/deadline">Deadline</Link>
          </li>
        </ul>
      

      <Routes>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/deadline">
          <Deadline />
        </Route>
      </Routes>
    </div>
  </Router>


};
export default Dashboard;