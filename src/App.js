import React from 'react';
import Home from './pages/Home'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <div className='w-full h-screen bg-white p-0 m-0'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
