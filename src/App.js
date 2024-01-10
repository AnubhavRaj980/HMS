import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LandingPage from './Components/Pages/First_Page'
import Beforelogup from './Components/Auth/Beforelogup'
import FirstPage from './Components/WithNavbarPages/FirstPage'
import Afterlogup from './Components/Auth/Afterlogup'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/FristPage" element={<FirstPage/>}></Route>
        <Route path="/beforelogup" element={<Beforelogup/>}></Route>
        <Route path="/afterlogup" element={<Afterlogup/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
