import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { HomePage } from './pages/HomePage';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
