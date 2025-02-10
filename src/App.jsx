import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/navbar/navbar';
import Products from './pages/products/products';
import WhyUs from './pages/why_us/whyus';
import AboutUs from './pages/about/about';
import Cases from './pages/cases/cases';


function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cases" element={<Cases />} />
      </Routes>
    </Router>
  );
}

export default App;