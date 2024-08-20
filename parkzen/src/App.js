import './App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from "react-router-dom";
import LoginSignup from './components/signin';
import LocationDropdown from './components/Dropdown';

function App() {
  const locations = ['Pioneer Mill', 'A block', 'IM parking', 'E block', 'N Block Ground'];
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}/>
      <Route path="/signin" element={<LoginSignup/>}/>
      <Route path="/location" element={ <LocationDropdown locations={locations} />}/>
    </Routes>
    // <NavBar/>

  );
}

export default App;
