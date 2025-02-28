import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Import Tailwind CSS
import Login from './Login'; // Import your Login component
import Register from './Register'; // Import your Register component
import SetPassword from './setPassword'; // Import your SetPassword component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/set-password" element={<SetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;