import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { CartPage } from './pages/CartPage';
import { CatalogItemPage } from './pages/CatalogItemPage';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog-item-page" element={<CatalogItemPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
