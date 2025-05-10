import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LoginPage from './components/Login';
import UserListManagement from './components/UserListManagement';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manage" element={<UserListManagement />} />

      </Routes>
    </Router>
  );
};

export default App;