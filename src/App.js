import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Views/About';

function App() {
  return (
    <div>
       <Router>
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </Router>
    </div>
  );
}
export default App;
