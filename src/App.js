import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'
import Homepage from './components/Pages/Homepage/Homepage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        // <Homepage />
        
  );
}

export default App;
