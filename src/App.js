import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { CartPage } from './pages/CartPage';
import { CatalogItemPage } from './pages/CatalogItemPage';
import { ContactPage } from './pages/ContactPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';
import { ReadyOrder } from './pages/ReadyOrder';
import { Service } from './pages/Service';

const App = () => {
  const [emptyCart, setEmptyCart] = useState([]);
  const [favoritesData, setFavoritesData] = useState([])

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
    setFavoritesData(JSON.parse(localStorage.getItem('favorites')) || []);
  }, []);

  const handleAddToCartFav = (item) => {
    const existItem = favoritesData.find((el) => el.id === item.id);
    if (existItem) {
      const newItem = favoritesData.map((el) =>
        el.id === item.id ? { ...existItem, total: existItem.total + 1 } : el,
      );
      setFavoritesData(newItem);
      localStorage.setItem('favorites', JSON.stringify(newItem));
    } else {
      const newItem = [...favoritesData, { ...item, total: 1 }];
      setFavoritesData(newItem);
    }
  };

  const handleDeleteFavorite = (item) =>{
    const newItem = favoritesData.filter(el => el.id !== item.id);
    setFavoritesData(newItem);
    localStorage.setItem('favorites', JSON.stringify(newItem));
  }

  return (
    <div className="app-wrapper">
      <Header emptyCart={emptyCart}/>
      <Routes>
        <Route path="/" element={<HomePage favoritesData={favoritesData} setFavoritesData={setFavoritesData} handleAddToCartFav={handleAddToCartFav}/>} />
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
        <Route path="/favorites" element={<FavoritesPage favoritesData={favoritesData} handleDeleteFavorite={handleDeleteFavorite}/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
