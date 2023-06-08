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
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/catalog-item-page" element={<CatalogItemPage />} /> */}
        <Route path="/catalog-item-page/:id" element={<CatalogItemPage />} />
        <Route path="/cart" element={<CartPage />} />
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
