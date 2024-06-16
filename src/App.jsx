import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/SignInForm';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<SignInForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </Router >
  );
}

export default App;
