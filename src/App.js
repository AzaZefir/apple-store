import './App.css';
import { Header } from './components/header/Header';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <HomePage/>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
