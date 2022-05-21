import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";

function App() {
  return <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate replace to='/home'/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;