import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HealthForm from './components/HealthForm';
import Profile from './components/Profile';
import HealthTips from './components/HealthTips';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div style={{ paddingTop: '60px', paddingBottom: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/health" element={<HealthForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tips" element={<HealthTips />} />
          </Routes>
        </div>

        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
