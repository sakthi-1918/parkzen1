import './App.css';
// import Navibar from '../components/Navigationbar';
import {Routes,Route} from "react-router-dom";
import LoginSignup from './pages/signin.js';
import ParkingLot from './components/ParkingLot.js';
import Options from './pages/Options.js';
import Home from './pages/Home.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<LoginSignup/>}/>
      <Route path="/slots" element={<ParkingLot/>}/>
      <Route path="/loc" element={<Options/>}/>
    </Routes>
  

  );
}

export default App;
