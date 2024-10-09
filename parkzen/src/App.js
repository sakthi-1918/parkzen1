import './App.css';
import { Routes, Route } from "react-router-dom";
// import LoginSignup from './pages/signin.js';
import ParkingLot from './components/ParkingLot.js';
import Options from './pages/Options.js';
import Home from './pages/Home.js';
import ProfilePage from './pages/ProfilePage.js';
import SignIn from './pages/signin.js';
import Signup from './pages/Signup.js';
import AboutPage from './pages/Aboutpage.js';
import View from './pages/View.js';



function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slots" element={<ParkingLot />} />
        <Route path="/loc" element={<Options />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/view" element={<View />} />  {/* Profile route */}
        
      </Routes>
  );
}

export default App;
