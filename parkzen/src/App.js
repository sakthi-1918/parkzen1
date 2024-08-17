import './App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}/>
    </Routes>
    // <NavBar/>

  );
}

export default App;
