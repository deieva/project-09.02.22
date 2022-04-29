import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Views/Login';
import Services from './Views/Services';
import Cart from './Views/Cart';

function App() {
  return (
    <div>
       <Router>
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
    </div>
  );
}
export default App;
