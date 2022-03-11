import SignUp from './client/Pages/Sign-Up-Page/SignUp';
import Login from './client/Pages/Login-Page/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './client/Pages/Dashboard/Dashboard';
import Navbar from './client/Components/Navbar.js'
import Timer from './client/Pages/Timer/Timer';
import Schedule from './client/Pages/Schedule/Schedule';
import Deadline from './client/Pages/Deadline/Deadline';
import MyAccount from './client/Pages/MyAccount/MyAccount';

function App() {
  return (
      <div>
    
         <Navbar/>
         <Main/>
         
        
      </div>
  ); 
}

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Timer' element={<Timer/>}/>
      <Route path='/Schedule' element={<Schedule/>}/>
      <Route path='/Deadline' element={<Deadline/>}/>
    </Routes>
  );
}


export default App;
