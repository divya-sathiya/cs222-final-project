import logo from './logo.svg';
import SignUp from './client/Pages/Sign-Up-Page/SignUp';
import Login from './client/Pages/Login-Page/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom';








function App() {
  return (
      <div>
         <SignUp/>
         <Login/>
      </div>
  ); 
}

const Main = () => {
  return (
    <Routes>
      {/* <Route path='/' element={Home}></Route> */}
      <Route path='/' element={SignUp}></Route>
      <Route path='/' element={Login}></Route>
    </Routes>
  );
}


export default App;
