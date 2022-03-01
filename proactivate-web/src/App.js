import logo from './logo.svg';
import SignUp from './client/Pages/Sign-Up-Page/SignUp';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';







function App() {
  return (
      <div>
         <SignUp/>
         <Button variant="contained">Hello World</Button>
      </div>
  ); 
}

const Main = () => {
  return (
    <Routes>
      {/* <Route path='/' element={Home}></Route> */}
      <Route path='/' element={SignUp}></Route>
    </Routes>
  );
}


export default App;
