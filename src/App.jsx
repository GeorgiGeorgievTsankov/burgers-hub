import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound.jsx';
import Header from './Components/Header.jsx';
import Menu from '../src/Features/menu/Menu.jsx';
import Footer from './Components/Footer.jsx';
import BurgerDetails from './Pages/BurgerDetails.jsx';
import './index.css';
import Cart from './Features/cart/Cart.jsx';
import EmptyCart from './Features/cart/EmptyCart.jsx';
import CreateOrder from './Features/order/CreateOrder.jsx';
import ThankYouPage from './Features/order/ThankYouPage.jsx';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<CreateOrder />} />
        <Route path='/empty-cart' element={<EmptyCart />} />
        <Route path="/menu/:pizzaId" element={<BurgerDetails />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
      <Footer />
    </Router>
  );
}

export default App;


