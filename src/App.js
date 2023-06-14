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

  const generateOrderNumber = () => {
    const orderNumber = Math.random(Math.random() * 10000).toFixed(5);
    return orderNumber;
  };

  const orderNum = generateOrderNumber();

  console.log(emptyCart);

  const handleAddToCart = (item) => {
    const existItem = emptyCart.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = emptyCart.map((el) =>
        el.id === item.id ? { ...existItem, total: existItem.total + 1 } : el,
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

  const handleMinusFromCart = (item) => {
    const existItem = emptyCart.find((el) => el.id === item.id);
    if (existItem.total === 1) {
      const newItem = emptyCart.filter((el) => el.id !== item.id);
      setEmptyCart(newItem);
      localStorage.setItem('items', JSON.stringify(newItem));
    } else {
      const newItem = emptyCart.map((el) =>
        el.id === item.id ? { ...existItem, total: existItem.total - 1 } : el,
      );
      setEmptyCart(newItem);
      localStorage.setItem('items', JSON.stringify(newItem));
    }
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
          element={
            <CartPage
              emptyCart={emptyCart}
              removeItemFromCart={removeItemFromCart}
              handleAddToCart={handleAddToCart}
              handleMinusFromCart={handleMinusFromCart}
            />
          }
        />
        <Route
          path="/order"
          element={<OrderPage emptyCart={emptyCart} generateOrderNumber={generateOrderNumber}/>}
          
        />
        <Route path="/ready-order" element={<ReadyOrder orderNum={orderNum} />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contacts" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
