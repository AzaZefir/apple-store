import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { CartPage } from './pages/CartPage';
import { CatalogItemPage } from './pages/CatalogItemPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';
import { ReadyOrder } from './pages/ReadyOrder';
import { Service } from './pages/Service';

const App = () => {
  const [emptyCart, setEmptyCart] = useState([]);
  
  console.log(emptyCart);

  const handleAddToCart = (item) => {
    const existItem = emptyCart.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = emptyCart.map((el) =>
        el.id === item.id ? { ...existItem, total: item.total + 1 } : el,
      );
      setEmptyCart(newItem);
      localStorage.setItem('items', JSON.stringify(newItem));
    } else {
      const newItem = [...emptyCart, { ...item, total: 1 }];
      setEmptyCart(newItem);
    }
  };

  const removeItemFromCart = (item) => {
    const newItem = emptyCart.filter((el) => el.id !== item.id);
    setEmptyCart(newItem);
    localStorage.setItem('items', JSON.stringify(newItem));
  };

  useEffect(() => {
    setEmptyCart(JSON.parse(localStorage.getItem('items')) || []);
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/catalog-item-page" element={<CatalogItemPage />} /> */}
        <Route
          path="/catalog-item-page/:id"
          element={<CatalogItemPage handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage emptyCart={emptyCart} removeItemFromCart={removeItemFromCart} />}
        />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/ready-order" element={<ReadyOrder />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contacts" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
