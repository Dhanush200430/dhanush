import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import Profile from './pages/Profile';
import TrackHealth from './pages/TrackHealth';
import HealthStats from './pages/HealthStats';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingBottom: '100px', paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        
          <Route path="/profile" element={<Profile />} />
          <Route path="/track" element={<TrackHealth />} />
          <Route path="/stats" element={<HealthStats />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
