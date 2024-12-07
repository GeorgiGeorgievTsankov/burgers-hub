import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound.jsx';
import Header from './Components/Header.jsx';
import Menu from '../src/Features/menu/Menu.jsx';
import Footer from './Components/Footer.jsx';
import BurgerDetails from './Pages/BurgerDetails.jsx';
import './index.css';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:pizzaId" element={<BurgerDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
      <Footer />
    </Router>
  );
}

export default App;


