import './App.css';
// import Navibar from '../components/Navigationbar';
import {Routes,Route} from "react-router-dom";
import LoginSignup from './pages/signin.js';

import Options from './pages/Options.js';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navibar/>}/> */}
      <Route path="/signin" element={<LoginSignup/>}/>
      
      <Route path="/loc" element={<Options/>}/>
    </Routes>
  

  );
}

export default App;
