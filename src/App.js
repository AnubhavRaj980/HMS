import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Components/Auth/Login'
import Signup from './Components/Auth/Logup'
import First_Page from './Components/Pages/First_Page';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/first_page" element={<First_Page/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
